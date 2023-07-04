"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = require("../../core/ApiError");
const RequestRole_1 = require("../model/RequestRole");
class RequestRoleRepo {
    static async create(requestRole) {
        requestRole.createdAt = requestRole.updatedAt = new Date();
        return RequestRole_1.RequestRoleModel.create(requestRole);
    }
    static async getAll() {
        return await RequestRole_1.RequestRoleModel.find().lean()
            .populate({
            path: "user"
        })
            .populate({
            path: "requestedRole"
        })
            .exec();
    }
    static async getById(requestRoleId) {
        const requestRole = await RequestRole_1.RequestRoleModel.findById(requestRoleId)
            .populate({
            path: 'user'
        })
            .populate({
            path: "requestedRole"
        })
            .lean()
            .exec();
        if (requestRole === null || requestRole._id === undefined)
            throw new ApiError_1.InternalError('Invalid request for role update');
        return requestRole;
    }
    static update(requestRole) {
        requestRole.updatedAt = new Date();
        RequestRole_1.RequestRoleModel.updateOne({ _id: requestRole._id }, { $set: { ...requestRole } })
            .lean().exec();
    }
}
exports.default = RequestRoleRepo;
//# sourceMappingURL=RequestRoleRepo.js.map