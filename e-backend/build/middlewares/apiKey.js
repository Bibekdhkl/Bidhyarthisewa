"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const asyncHandler_1 = __importDefault(require("./asyncHandler"));
const validator_1 = __importStar(require("./validator"));
const ApiKeyRepo_1 = __importDefault(require("../database/repository/ApiKeyRepo"));
const schema_1 = __importDefault(require("./schema"));
const ApiError_1 = require("../core/ApiError");
const router = express_1.default.Router();
exports.default = router.use(validator_1.default(schema_1.default.apiKey, validator_1.ValidationSource.HEADER), asyncHandler_1.default(async (req, res, next) => {
    // @ts-ignore
    req.apiKey = req.headers['x-api-key'].toString();
    const apikey = await ApiKeyRepo_1.default.findByKey(req.apiKey);
    if (!apikey)
        throw new ApiError_1.ForbiddenError();
    return next();
}));
//# sourceMappingURL=apiKey.js.map