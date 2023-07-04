"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ApiResponse_1 = require("../../core/ApiResponse");
const OrderRepo_1 = __importDefault(require("../../database/repository/OrderRepo"));
const asyncHandler_1 = __importDefault(require("../../middlewares/asyncHandler"));
const getOrderById = asyncHandler_1.default(async (req, res) => {
    const order = await OrderRepo_1.default.get(new mongoose_1.Types.ObjectId(req.params.id));
    return new ApiResponse_1.SuccessResponse("Order Retrieved Successfully", order).send(res);
});
const OrderController = { getOrderById };
exports.default = OrderController;
//# sourceMappingURL=order.controller.js.map