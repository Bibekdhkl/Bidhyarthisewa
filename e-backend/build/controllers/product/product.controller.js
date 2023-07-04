"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CategoryRepo_1 = __importDefault(require("../../database/repository/CategoryRepo"));
const ApiResponse_1 = require("../../core/ApiResponse");
const ProductRepo_1 = __importDefault(require("../../database/repository/ProductRepo"));
const asyncHandler_1 = __importDefault(require("../../middlewares/asyncHandler"));
const UserRepo_1 = __importDefault(require("../../database/repository/UserRepo"));
const ApiError_1 = require("../../core/ApiError");
const ProductMedia_1 = require("../../database/model/ProductMedia");
const getAll = asyncHandler_1.default(async (req, res) => {
    const products = await ProductRepo_1.default.getAll(parseInt(req.query.pageNumber), parseInt(req.query.pageItemCount));
    return new ApiResponse_1.SuccessResponse('Products retrieved successfully', products).send(res);
});
const getById = asyncHandler_1.default(async (req, res) => {
    const products = await ProductRepo_1.default.getById(new mongoose_1.Types.ObjectId(req.params.id));
    return new ApiResponse_1.SuccessResponse('Product retrieved successfully', products).send(res);
});
const getByCategory = asyncHandler_1.default(async (req, res) => {
    await CategoryRepo_1.default.getById(new mongoose_1.Types.ObjectId(req.params.id));
    const products = await ProductRepo_1.default.getByCategory(new mongoose_1.Types.ObjectId(req.params.id), parseInt(req.query.pageNumber), parseInt(req.query.pageItemCount));
    return new ApiResponse_1.SuccessResponse('Products retrieved successfully', products).send(res);
});
const getBySeller = asyncHandler_1.default(async (req, res) => {
    const seller = await UserRepo_1.default.getById(new mongoose_1.Types.ObjectId(req.params.id));
    if (!seller)
        throw new ApiError_1.InternalError('Seller does not exist');
    const products = await ProductRepo_1.default.getBySeller(new mongoose_1.Types.ObjectId(req.params.id), parseInt(req.query.pageNumber), parseInt(req.query.pageItemCount));
    return new ApiResponse_1.SuccessResponse('Products retrieved successfully', products).send(res);
});
const create = asyncHandler_1.default(async (req, res, next) => {
    let mediaType = '';
    let productMedias = [];
    for (const productMedia of req.body.productMedias) {
        if (productMedia.mediaType.toUpperCase() === "IMAGE" /* IMAGE */) {
            mediaType = "IMAGE" /* IMAGE */;
        }
        else if (productMedia.mediaType.toUpperCase() === "VIDEO" /* VIDEO */) {
            mediaType = "VIDEO" /* VIDEO */;
        }
        else {
            throw new ApiError_1.BadRequestError('Invalid Media Type');
        }
        let media = {
            productUrl: productMedia.productUrl,
            mediaType: mediaType
        };
        productMedias.push(media);
    }
    const createdMedias = await ProductMedia_1.ProductMediaModel.create(productMedias);
    const product = await ProductRepo_1.default.create({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        discountPercentage: req.body.discountPercentage,
        seller: req.user._id,
        productMedias: createdMedias
    });
    return new ApiResponse_1.SuccessResponse('Product created successfully', product).send(res);
});
const ProductController = { getAll, getById, getByCategory, getBySeller, create };
exports.default = ProductController;
//# sourceMappingURL=product.controller.js.map