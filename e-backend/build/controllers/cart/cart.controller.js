"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ApiError_1 = require("../../core/ApiError");
const ApiResponse_1 = require("../../core/ApiResponse");
const CartRepo_1 = __importDefault(require("../../database/repository/CartRepo"));
const ProductRepo_1 = __importDefault(require("../../database/repository/ProductRepo"));
const asyncHandler_1 = __importDefault(require("../../middlewares/asyncHandler"));
const create = asyncHandler_1.default(async (req, res) => {
    let productId = req.body.product;
    let userId = req.user._id;
    const productToAdd = await ProductRepo_1.default.getById(productId);
    if (productToAdd._id === undefined || productToAdd === null)
        throw new ApiError_1.InternalError('Invalid Product');
    const product = {
        _id: productId
    };
    const cart = await CartRepo_1.default.getByUserId(userId);
    if (!cart) {
        let cart = {
            user: userId,
            products: [product]
        };
        const createdCart = await CartRepo_1.default.create(cart);
        return new ApiResponse_1.SuccessResponse("Product added to cart", createdCart._id).send(res);
    }
    if (cart.products.includes(product))
        throw new ApiError_1.InternalError("Product already added");
    cart.products.push(product);
    CartRepo_1.default.update(cart);
    return new ApiResponse_1.SuccessResponse("Product added to cart", cart._id).send(res);
});
const getById = asyncHandler_1.default(async (req, res) => {
    const cart = await CartRepo_1.default.get(new mongoose_1.Types.ObjectId(req.params.id)); // Check this method by removing products from cart
    return new ApiResponse_1.SuccessResponse("Cart data retrieved successfully", cart.products).send(res);
});
const getCartPrice = asyncHandler_1.default(async (req, res) => {
    let totalPrice = 0;
    const cart = await CartRepo_1.default.get(new mongoose_1.Types.ObjectId(req.params.id));
    if (cart.products.length === 0)
        throw new ApiError_1.InternalError("No products in cart");
    cart.products.forEach(product => {
        totalPrice = totalPrice + product.price - (product.price * (product.discountPercentage / 100));
    });
    return new ApiResponse_1.SuccessResponse("Total cart price", totalPrice).send(res);
});
const CartController = { create, getById, getCartPrice };
exports.default = CartController;
//# sourceMappingURL=cart.controller.js.map