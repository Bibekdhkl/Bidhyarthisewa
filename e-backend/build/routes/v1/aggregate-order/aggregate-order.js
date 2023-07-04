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
const aggregate_order_controller_1 = __importDefault(require("../../../controllers/aggregate-order/aggregate-order.controller"));
const router = express_1.default.Router();
router.post("/", authentication_1.default, aggregate_order_controller_1.default.create);
router.get("/id/:id", authentication_1.default, validator_1.default(schema_1.default.aggregateOrderId, validator_1.ValidationSource.PARAM), aggregate_order_controller_1.default.getOrderById);
router.get("/user", authentication_1.default, validator_1.default(schema_1.default.pagination, validator_1.ValidationSource.QUERY), aggregate_order_controller_1.default.getOrderByUser);
router.get("/price/:id", authentication_1.default, validator_1.default(schema_1.default.aggregateOrderId, validator_1.ValidationSource.PARAM), aggregate_order_controller_1.default.getPriceOfOrder);
exports.default = router;
//# sourceMappingURL=aggregate-order.js.map