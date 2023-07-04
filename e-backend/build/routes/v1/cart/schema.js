"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
const validator_1 = require("../../../middlewares/validator");
exports.default = {
    cartProduct: joi_1.default.object().keys({
        product: validator_1.JoiObjectId().required()
    }),
    cartId: joi_1.default.object().keys({
        id: validator_1.JoiObjectId().required()
    })
};
//# sourceMappingURL=schema.js.map