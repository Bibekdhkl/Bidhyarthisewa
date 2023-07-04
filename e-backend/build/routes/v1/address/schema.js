"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
exports.default = {
    address: joi_1.default.object().keys({
        fullname: joi_1.default.string().required(),
        mobile: joi_1.default.number().required(),
        pincode: joi_1.default.number().required(),
        line1: joi_1.default.string().required(),
        line2: joi_1.default.string().required(),
        landmark: joi_1.default.string().optional(),
        city: joi_1.default.string().required(),
        state: joi_1.default.string().required(),
    }),
};
//# sourceMappingURL=schema.js.map