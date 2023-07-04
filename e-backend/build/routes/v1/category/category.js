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
const category_controller_1 = __importDefault(require("../../../controllers/category/category.controller"));
const router = express_1.default.Router();
router.get("/", authentication_1.default, category_controller_1.default.getAll);
router.get("/id/:id", authentication_1.default, validator_1.default(schema_1.default.categoryId, validator_1.ValidationSource.PARAM), category_controller_1.default.getCategoryById);
router.post("/", authentication_1.default, role_1.default("ADMIN" /* ADMIN */), authorization_1.default, validator_1.default(schema_1.default.category), category_controller_1.default.create);
exports.default = router;
//# sourceMappingURL=category.js.map