"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validator_1 = __importDefault(require("../../../middlewares/validator"));
const schema_1 = __importDefault(require("./schema"));
const authentication_1 = __importDefault(require("../../../middlewares/authentication"));
const address_controller_1 = __importDefault(require("../../../controllers/address/address.controller"));
const router = express_1.default.Router();
router.use("/", authentication_1.default);
router.post("/", validator_1.default(schema_1.default.address), address_controller_1.default.address);
exports.default = router;
//# sourceMappingURL=address.js.map