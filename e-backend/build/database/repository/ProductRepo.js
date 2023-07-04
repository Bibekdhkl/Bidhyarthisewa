"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = require("../../core/ApiError");
const Product_1 = require("../model/Product");
class ProductRepo {
    static async getAll(pageNumber, limit) {
        return await Product_1.ProductModel.find()
            .skip(limit * (pageNumber - 1))
            .limit(limit)
            .populate({
            path: 'category',
            select: '+name'
        })
            .sort({ updatedAt: -1 })
            .lean()
            .exec();
    }
    static async create(product) {
        product.createdAt = product.updatedAt = new Date();
        return Product_1.ProductModel.create(product);
    }
    static async getById(productId) {
        const product = await Product_1.ProductModel.findById(productId)
            .populate({
            path: 'category'
        })
            .lean()
            .exec();
        if (product === null || product._id === undefined)
            throw new ApiError_1.InternalError('Invalid Product');
        return product;
    }
    static async getByCategory(categoryId, pageNumber, limit) {
        return await Product_1.ProductModel.find({ category: categoryId })
            .skip(limit * (pageNumber - 1))
            .limit(limit)
            .populate({
            path: 'category'
        })
            .sort({ updatedAt: -1 })
            .lean()
            .exec();
    }
    static async getBySeller(sellerId, pageNumber, limit) {
        return await Product_1.ProductModel.find({ seller: sellerId })
            .skip(limit * (pageNumber - 1))
            .limit(limit)
            .populate({
            path: 'category'
        })
            .sort({ updatedAt: -1 })
            .lean()
            .exec();
    }
}
exports.default = ProductRepo;
//# sourceMappingURL=ProductRepo.js.map