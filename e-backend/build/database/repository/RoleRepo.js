"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = require("../../core/ApiError");
const Role_1 = require("../model/Role");
class RoleRepo {
    static async findByCode(code) {
        const role = await Role_1.RoleModel.findOne({ code: code })
            .lean()
            .exec();
        if (role === null || role._id === undefined)
            throw new ApiError_1.InternalError('Role must be defined');
        return role;
    }
}
exports.default = RoleRepo;
//# sourceMappingURL=RoleRepo.js.map