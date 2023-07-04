"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
const validator_1 = require("../../../middlewares/validator");
exports.default = {
    aggregateOrderId: joi_1.default.object().keys({
        id: validator_1.JoiObjectId().required()
    }),
    pagination: joi_1.default.object().keys({
        pageNumber: joi_1.default.number().required().integer().min(1),
        pageItemCount: joi_1.default.number().required().integer().min(1)
    })
};
//# sourceMappingURL=schema.js.map