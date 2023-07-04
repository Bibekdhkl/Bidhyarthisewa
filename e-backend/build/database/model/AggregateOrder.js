"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOrderModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = 'AggregateOrder';
exports.COLLECTION_NAME = 'aggregateorders';
const schema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    orders: {
        type: [
            {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'Order'
            }
        ]
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
exports.AggregateOrderModel = mongoose_1.model(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
//# sourceMappingURL=AggregateOrder.js.map