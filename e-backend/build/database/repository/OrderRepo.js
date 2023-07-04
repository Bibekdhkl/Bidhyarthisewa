"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = require("../..//core/ApiError");
const Order_1 = require("../model/Order");
class OrderRepo {
    static async create(orders) {
        for (const order of orders) {
            order.createdAt = order.updatedAt = new Date();
        }
        return Order_1.OrderModel.insertMany(orders);
    }
    static async get(orderId) {
        const order = await Order_1.OrderModel.findById(orderId)
            .populate({
            path: 'product'
        })
            .lean()
            .exec();
        if (!order)
            throw new ApiError_1.InternalError('Invalid orderId');
        return order;
    }
}
exports.default = OrderRepo;
//# sourceMappingURL=OrderRepo.js.map