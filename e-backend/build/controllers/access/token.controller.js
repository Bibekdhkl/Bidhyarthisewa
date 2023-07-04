"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authUtils_1 = require("../../core/authUtils");
const JWT_1 = __importDefault(require("../../core/JWT"));
const ApiResponse_1 = require("../../core/ApiResponse");
const ApiError_1 = require("../../core/ApiError");
const UserRepo_1 = __importDefault(require("../../database/repository/UserRepo"));
const asyncHandler_1 = __importDefault(require("../../middlewares/asyncHandler"));
const mongoose_1 = require("mongoose");
const token = asyncHandler_1.default(async (req, res) => {
    req.accessToken = authUtils_1.getAccessToken(req.headers.authorization);
    const accessTokenPayload = await JWT_1.default.decode(req.accessToken);
    authUtils_1.validateTokenData(accessTokenPayload);
    const user = await UserRepo_1.default.getById(new mongoose_1.Types.ObjectId(accessTokenPayload.sub));
    if (!user)
        throw new ApiError_1.AuthFailureError('User not registered');
    req.user = user;
    const refreshTokenPayload = await JWT_1.default.validate(req.body.refreshToken);
    authUtils_1.validateTokenData(refreshTokenPayload);
    if (accessTokenPayload.sub !== refreshTokenPayload.sub)
        throw new ApiError_1.AuthFailureError('Invalid access token');
    const tokens = await authUtils_1.createTokens(req.user);
    new ApiResponse_1.TokenRefreshResponse('Token Issued', tokens.accessToken, tokens.refreshToken).send(res);
});
const TokenController = { token };
exports.default = TokenController;
//# sourceMappingURL=token.controller.js.map