"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = 'Address';
exports.COLLECTION_NAME = 'addresses';
const schema = new mongoose_1.Schema({
    fullname: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    mobile: {
        type: mongoose_1.Schema.Types.Number,
        required: true,
        length: 10
    },
    pincode: {
        type: mongoose_1.Schema.Types.Number,
        required: true,
        length: 6
    },
    line1: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    line2: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    landmark: {
        type: mongoose_1.Schema.Types.String,
    },
    city: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    state: {
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
exports.AddressModel = mongoose_1.model(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
//# sourceMappingURL=Address.js.map