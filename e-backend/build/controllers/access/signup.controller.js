"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const lodash_1 = __importDefault(require("lodash"));
const ApiError_1 = require("../../core/ApiError");
const UserRepo_1 = __importDefault(require("../../database/repository/UserRepo"));
const asyncHandler_1 = __importDefault(require("../../middlewares/asyncHandler"));
const RoleRepo_1 = __importDefault(require("../../database/repository/RoleRepo"));
const authUtils_1 = require("../../core/authUtils");
const ApiResponse_1 = require("../../core/ApiResponse");
const signUp = asyncHandler_1.default(async (req, res) => {
    const user = await UserRepo_1.default.getByEmail(req.body.email);
    if (user)
        throw new ApiError_1.BadRequestError('User already registered');
    const passwordHash = await bcrypt_1.default.hash(req.body.password, 10);
    const role = await RoleRepo_1.default.findByCode("BUYER" /* BUYER */);
    const createdUser = await UserRepo_1.default.create({
        name: req.body.name,
        email: req.body.email,
        password: passwordHash,
        roles: [role._id]
    });
    const tokens = await authUtils_1.createTokens(createdUser);
    new ApiResponse_1.SuccessResponse('Signup Successful', {
        user: lodash_1.default.pick(createdUser, ['_id', 'name', 'email', 'roles', 'address']),
        tokens: tokens
    }).send(res);
});
const SignupController = { signUp };
exports.default = SignupController;
//# sourceMappingURL=signup.controller.js.map