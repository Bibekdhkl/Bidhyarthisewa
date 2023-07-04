"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const lodash_1 = __importDefault(require("lodash"));
const ApiError_1 = require("../../core/ApiError");
const ApiResponse_1 = require("../../core/ApiResponse");
const asyncHandler_1 = __importDefault(require("../../middlewares/asyncHandler"));
const UserRepo_1 = __importDefault(require("../../database/repository/UserRepo"));
const authUtils_1 = require("../../core/authUtils");
const login = asyncHandler_1.default(async (req, res) => {
    const user = await UserRepo_1.default.getByEmail(req.body.email);
    if (!user)
        throw new ApiError_1.BadRequestError('User not registered');
    const match = await bcrypt_1.default.compare(req.body.password, user.password);
    if (!match)
        throw new ApiError_1.AuthFailureError('Authentication failure');
    const tokens = await authUtils_1.createTokens(user);
    new ApiResponse_1.SuccessResponse('Login Success', {
        user: lodash_1.default.pick(user, ['_id', 'name', 'roles', 'address']),
        tokens: tokens
    }).send(res);
});
const LoginController = { login };
exports.default = LoginController;
//# sourceMappingURL=login.controller.js.map