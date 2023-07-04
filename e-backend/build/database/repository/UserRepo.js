"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../model/User");
class UserRepo {
    static async getById(id) {
        return await User_1.UserModel.findOne({ _id: id, status: true })
            .populate({
            path: 'roles'
        })
            .populate({
            path: 'address'
        })
            .lean()
            .exec();
    }
    static getByEmail(email) {
        return User_1.UserModel.findOne({ email: email, status: true })
            .select('+email +password +roles')
            .populate({
            path: 'roles',
            select: '+code +status -_id'
        })
            .populate({
            path: 'address'
        })
            .lean()
            .exec();
    }
    static async create(user) {
        const now = new Date();
        user.createdAt = user.updatedAt = user.dateOfJoining = now;
        return await User_1.UserModel.create(user);
    }
    static update(user) {
        user.updatedAt = new Date();
        User_1.UserModel.updateOne({ _id: user._id }, { $set: { ...user } })
            .lean().exec();
    }
}
exports.default = UserRepo;
//# sourceMappingURL=UserRepo.js.map