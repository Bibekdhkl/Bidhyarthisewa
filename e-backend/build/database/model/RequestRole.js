"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestRoleModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = 'RequestRole';
exports.COLLECTION_NAME = 'requestroles';
const schema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    requestedRole: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Role'
    },
    approvedBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    approved: {
        type: mongoose_1.Schema.Types.Boolean,
        default: false
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
exports.RequestRoleModel = mongoose_1.model(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
//# sourceMappingURL=RequestRole.js.map