"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CategoryRepo_1 = __importDefault(require("../../database/repository/CategoryRepo"));
const ApiResponse_1 = require("../../core/ApiResponse");
const asyncHandler_1 = __importDefault(require("../../middlewares/asyncHandler"));
const mongoose_1 = require("mongoose");
const getAll = asyncHandler_1.default(async (req, res) => {
    const categories = await CategoryRepo_1.default.getAll();
    return new ApiResponse_1.SuccessResponse("Categories retrieved successfully", categories).send(res);
});
const getCategoryById = asyncHandler_1.default(async (req, res) => {
    const categories = await CategoryRepo_1.default.getById(new mongoose_1.Types.ObjectId(req.params.id));
    return new ApiResponse_1.SuccessResponse("Category retrieved successfully", categories).send(res);
});
const create = asyncHandler_1.default(async (req, res, next) => {
    const category = await CategoryRepo_1.default.create({
        name: req.body.name
    });
    return new ApiResponse_1.SuccessResponse("Category created successfully", category).send(res);
});
const CategoryController = { getAll, getCategoryById, create };
exports.default = CategoryController;
//# sourceMappingURL=category.controller.js.map