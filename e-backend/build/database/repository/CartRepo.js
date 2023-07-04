"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = require("../..//core/ApiError");
const Cart_1 = require("../model/Cart");
class CartRepo {
    static async create(cart) {
        return await Cart_1.CartModel.create(cart);
    }
    static async get(cartId) {
        const cart = await Cart_1.CartModel.findById(cartId)
            .populate({
            path: 'products'
        })
            .lean()
            .exec();
        if (cart === null || cart._id === undefined)
            throw new ApiError_1.InternalError("Invalid cart");
        return cart;
    }
    static async getByUserId(userId) {
        const cart = await Cart_1.CartModel.findOne({ user: userId }).lean()
            .populate({
            path: 'products'
        })
            .exec();
        return cart;
    }
    static update(cart) {
        Cart_1.CartModel.updateOne({ _id: cart._id }, { $set: { ...cart } })
            .exec();
    }
}
exports.default = CartRepo;
//# sourceMappingURL=CartRepo.js.map