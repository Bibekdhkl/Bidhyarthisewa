"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = require("../../core/ApiError");
const AggregateOrder_1 = require("../model/AggregateOrder");
class AggregateOrderRepo {
    static async create(aggregateOrder) {
        aggregateOrder.createdAt = aggregateOrder.updatedAt = new Date();
        return await AggregateOrder_1.AggregateOrderModel.create(aggregateOrder);
    }
    static async getById(aggregateOrderId) {
        const order = await AggregateOrder_1.AggregateOrderModel.findById(aggregateOrderId)
            .populate({
            path: 'orders'
        })
            .lean()
            .exec();
        if (order === null || order._id === undefined)
            throw new ApiError_1.InternalError('No order found');
        return order;
    }
    static async getByUser(userId, pageNumber, limit) {
        const order = await AggregateOrder_1.AggregateOrderModel.find({ user: userId })
            .skip(limit * (pageNumber - 1))
            .limit(limit)
            .populate({
            path: 'orders'
        })
            .sort({ updatedAt: -1 })
            .lean()
            .exec();
        return order;
    }
}
exports.default = AggregateOrderRepo;
//# sourceMappingURL=AgrregateOrderRepo.js.map