"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = 'Product';
exports.COLLECTION_NAME = 'products';
const schema = new mongoose_1.Schema({
    name: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    description: {
        type: mongoose_1.Schema.Types.String,
        required: true
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Category'
    },
    price: {
        type: mongoose_1.Schema.Types.Number,
        required: true
    },
    discountPercentage: {
        type: mongoose_1.Schema.Types.Number,
        default: 0
    },
    productMedias: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'ProductMedia'
        }],
    seller: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        select: false
    },
    updatedAt: {
        type: Date,
        required: true,
        select: false
    }
}, {
    versionKey: false
});
exports.ProductModel = mongoose_1.model(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
//# sourceMappingURL=Product.js.map