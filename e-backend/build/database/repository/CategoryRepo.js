"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = require("../../core/ApiError");
const Category_1 = require("../model/Category");
class CategoryRepo {
    static async getAll() {
        return await Category_1.CategoryModel.find()
            .lean()
            .exec();
    }
    static create(category) {
        category.createdAt = category.updatedAt = new Date();
        return Category_1.CategoryModel.create(category);
    }
    static async getById(categoryId) {
        const category = await Category_1.CategoryModel.findById(categoryId)
            .lean()
            .exec();
        if (category === null || category._id === undefined)
            throw new ApiError_1.InternalError('Invalid Category');
        return category;
    }
}
exports.default = CategoryRepo;
//# sourceMappingURL=CategoryRepo.js.map