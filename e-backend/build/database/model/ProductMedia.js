"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMediaModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = 'ProductMedia';
exports.COLLECTION_NAME = 'productmedias';
const schema = new mongoose_1.Schema({
    productUrl: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    mediaType: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        enum: ["IMAGE" /* IMAGE */, "VIDEO" /* VIDEO */]
    }
}, {
    versionKey: false
});
exports.ProductMediaModel = mongoose_1.model(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
//# sourceMappingURL=ProductMedia.js.map