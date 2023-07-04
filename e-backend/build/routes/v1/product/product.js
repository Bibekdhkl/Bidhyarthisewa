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
const validator_1 = __importStar(require("../../../middlewares/validator"));
const authentication_1 = __importDefault(require("../../../middlewares/authentication"));
const schema_1 = __importDefault(require("./schema"));
const role_1 = __importDefault(require("../../../middlewares/role"));
const authorization_1 = __importDefault(require("../../../middlewares/authorization"));
const product_controller_1 = __importDefault(require("../../../controllers/product/product.controller"));
const router = express_1.default.Router();
router.get('/', authentication_1.default, validator_1.default(schema_1.default.pagination, validator_1.ValidationSource.QUERY), product_controller_1.default.getAll);
router.get('/id/:id', authentication_1.default, validator_1.default(schema_1.default.productId, validator_1.ValidationSource.PARAM), product_controller_1.default.getById);
router.get('/category/id/:id', authentication_1.default, validator_1.default(schema_1.default.categoryId, validator_1.ValidationSource.PARAM), validator_1.default(schema_1.default.pagination, validator_1.ValidationSource.QUERY), product_controller_1.default.getByCategory);
router.get('/seller/id/:id', authentication_1.default, validator_1.default(schema_1.default.sellerId, validator_1.ValidationSource.PARAM), validator_1.default(schema_1.default.pagination, validator_1.ValidationSource.QUERY), product_controller_1.default.getBySeller);
router.post('/', authentication_1.default, role_1.default("SELLER" /* SELLER */), authorization_1.default, validator_1.default(schema_1.default.product), product_controller_1.default.create);
exports.default = router;
//# sourceMappingURL=product.js.map