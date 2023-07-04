"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = 'Cart';
exports.COLLECTION_NAME = 'carts';
const schema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    products: {
        type: [
            {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'Product'
            }
        ]
    }
}, {
    versionKey: false
});
exports.CartModel = mongoose_1.model(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
//# sourceMappingURL=Cart.js.map