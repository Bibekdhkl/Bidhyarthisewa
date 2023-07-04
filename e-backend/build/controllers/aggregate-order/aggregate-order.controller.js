"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ApiError_1 = require("../../core/ApiError");
const ApiResponse_1 = require("../../core/ApiResponse");
const AgrregateOrderRepo_1 = __importDefault(require("../../database/repository/AgrregateOrderRepo"));
const CartRepo_1 = __importDefault(require("../../database/repository/CartRepo"));
const OrderRepo_1 = __importDefault(require("../../database/repository/OrderRepo"));
const asyncHandler_1 = __importDefault(require("../../middlewares/asyncHandler"));
const create = asyncHandler_1.default(async (req, res) => {
    const cart = await CartRepo_1.default.getByUserId(req.user._id);
    if (!cart)
        throw new ApiError_1.InternalError('No cart for user');
    if (cart.products.length === 0)
        throw new ApiError_1.InternalError("No products in cart");
    let orders = [];
    for (const orderedProduct of cart.products) {
        let order = {
            user: req.user._id,
            orderedPrice: orderedProduct.price - (orderedProduct.price * (orderedProduct.discountPercentage / 100)),
            productPrice: orderedProduct.price,
            product: orderedProduct
        };
        orders.push(order);
    }
    const createdOrders = await OrderRepo_1.default.create(orders);
    const aggregateOrder = {
        user: req.user._id,
        orders: createdOrders
    };
    const order = await AgrregateOrderRepo_1.default.create(aggregateOrder);
    cart.products = [];
    CartRepo_1.default.update(cart);
    return new ApiResponse_1.SuccessResponse("Order placed successfully", order).send(res);
});
const getOrderById = asyncHandler_1.default(async (req, res) => {
    const order = await AgrregateOrderRepo_1.default.getById(new mongoose_1.Types.ObjectId(req.params.id));
    return new ApiResponse_1.SuccessResponse("Order retrieved successfully", order).send(res);
});
const getOrderByUser = asyncHandler_1.default(async (req, res) => {
    const order = await AgrregateOrderRepo_1.default.getByUser(req.user._id, parseInt(req.query.pageNumber), parseInt(req.query.pageItemCount));
    return new ApiResponse_1.SuccessResponse("Order for a user retrieved successfully", order).send(res);
});
const getPriceOfOrder = asyncHandler_1.default(async (req, res) => {
    const aggregateOrder = await AgrregateOrderRepo_1.default.getById(new mongoose_1.Types.ObjectId(req.params.id));
    let totalPrice = 0;
    for (const order of aggregateOrder.orders) {
        totalPrice = totalPrice + order.orderedPrice;
    }
    return new ApiResponse_1.SuccessResponse("Total order price", totalPrice).send(res);
});
const AggregateOrderController = { create, getOrderById, getOrderByUser, getPriceOfOrder };
exports.default = AggregateOrderController;
//# sourceMappingURL=aggregate-order.controller.js.map