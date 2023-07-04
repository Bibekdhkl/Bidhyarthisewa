"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RequestRoleRepo_1 = __importDefault(require("../../database/repository/RequestRoleRepo"));
const asyncHandler_1 = __importDefault(require("../../middlewares/asyncHandler"));
const ApiResponse_1 = require("../../core/ApiResponse");
const mongoose_1 = require("mongoose");
const UserRepo_1 = __importDefault(require("../../database/repository/UserRepo"));
const ApiError_1 = require("../../core/ApiError");
const create = asyncHandler_1.default(async (req, res) => {
    let roleRequest = {
        user: req.user._id,
        requestedRole: req.body.requestedRole,
        approved: false,
    };
    const order = await RequestRoleRepo_1.default.create(roleRequest);
    return new ApiResponse_1.SuccessResponse("Role request created successfully", order).send(res);
});
const getAll = asyncHandler_1.default(async (req, res) => {
    const requests = await RequestRoleRepo_1.default.getAll();
    return new ApiResponse_1.SuccessResponse("Role requests retrieved successfully", requests).send(res);
});
const update = asyncHandler_1.default(async (req, res) => {
    let approverId = req.user._id;
    let requestRoleId = new mongoose_1.Types.ObjectId(req.params.id);
    let user;
    const requestRole = await RequestRoleRepo_1.default.getById(requestRoleId);
    requestRole.approvedBy = approverId;
    requestRole.approved = true;
    const fetchedUser = await UserRepo_1.default.getById(requestRole.user);
    if (fetchedUser === null || fetchedUser._id === undefined)
        throw new ApiError_1.InternalError('User not registered');
    user = fetchedUser;
    user.roles.push(requestRole.requestedRole);
    RequestRoleRepo_1.default.update(requestRole);
    UserRepo_1.default.update(user);
    return new ApiResponse_1.SuccessMsgResponse("Role requests upadated successfully").send(res);
});
const RoleRequestController = { create, getAll, update };
exports.default = RoleRequestController;
//# sourceMappingURL=role-request.controller.js.map