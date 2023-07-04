"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = 'User';
exports.COLLECTION_NAME = 'users';
const schema = new mongoose_1.Schema({
    name: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        trim: true,
        maxlength: 100
    },
    email: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        trim: true,
        select: false
    },
    password: {
        type: mongoose_1.Schema.Types.String,
        select: false
    },
    roles: {
        type: [
            {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'Role'
            }
        ]
    },
    dateOfBirth: {
        type: mongoose_1.Schema.Types.Date,
    },
    dateOfJoining: {
        type: mongoose_1.Schema.Types.Date,
    },
    status: {
        type: mongoose_1.Schema.Types.Boolean,
        default: true
    },
    address: {
        type: [
            {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'Address'
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
exports.UserModel = mongoose_1.model(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
//# sourceMappingURL=User.js.map