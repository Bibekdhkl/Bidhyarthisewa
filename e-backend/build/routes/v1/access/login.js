"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validator_1 = __importDefault(require("../../../middlewares/validator"));
const schema_1 = __importDefault(require("./schema"));
const login_controller_1 = __importDefault(require("../../../controllers/access/login.controller"));
const router = express_1.default.Router();
exports.default = router.post('/basic', validator_1.default(schema_1.default.userCredential), login_controller_1.default.login);
//# sourceMappingURL=login.js.map