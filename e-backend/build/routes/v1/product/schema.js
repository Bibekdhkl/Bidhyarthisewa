"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
const validator_1 = require("../../../middlewares/validator");
exports.default = {
    product: joi_1.default.object().keys({
        name: joi_1.default.string().required(),
        description: joi_1.default.string().required(),
        category: validator_1.JoiObjectId().required(),
        price: joi_1.default.number().required(),
        discountPercentage: joi_1.default.number().optional(),
        productMedias: joi_1.default.array().items(joi_1.default.object().keys({
            productUrl: joi_1.default.string().required().uri(),
            mediaType: joi_1.default.string().required()
        }))
    }),
    categoryId: joi_1.default.object().keys({
        id: validator_1.JoiObjectId().required()
    }),
    productId: joi_1.default.object().keys({
        id: validator_1.JoiObjectId().required()
    }),
    pagination: joi_1.default.object().keys({
        pageNumber: joi_1.default.number().required().integer().min(1),
        pageItemCount: joi_1.default.number().required().integer().min(1)
    }),
    sellerId: joi_1.default.object().keys({
        id: validator_1.JoiObjectId().required()
    }),
};
//# sourceMappingURL=schema.js.map