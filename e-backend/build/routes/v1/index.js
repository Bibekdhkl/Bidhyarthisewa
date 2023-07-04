"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiKey_1 = __importDefault(require("../../middlewares/apiKey"));
const login_1 = __importDefault(require("../v1/access/login"));
const signup_1 = __importDefault(require("../v1/access/signup"));
const address_1 = __importDefault(require("../v1/address/address"));
const category_1 = __importDefault(require("../v1/category/category"));
const product_1 = __importDefault(require("../v1/product/product"));
const cart_1 = __importDefault(require("../v1/cart/cart"));
const aggregate_order_1 = __importDefault(require("./aggregate-order/aggregate-order"));
const order_1 = __importDefault(require("../v1/order/order"));
const role_request_1 = __importDefault(require("./role-request/role-request"));
const token_1 = __importDefault(require("./access/token"));
const router = express_1.default.Router();
router.use("/", apiKey_1.default);
router.use("/signup", signup_1.default);
router.use("/login", login_1.default);
router.use("/address", address_1.default);
router.use("/category", category_1.default);
router.use("/product", product_1.default);
router.use("/cart", cart_1.default);
router.use("/aggregate-order", aggregate_order_1.default);
router.use("/order", order_1.default);
router.use("/role-requests", role_request_1.default);
router.use('/token', token_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map