"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = 'Category';
exports.COLLECTION_NAME = 'categories';
const schema = new mongoose_1.Schema({
    name: {
        type: mongoose_1.Schema.Types.String,
        required: true,
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
exports.CategoryModel = mongoose_1.model(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
//# sourceMappingURL=Category.js.map