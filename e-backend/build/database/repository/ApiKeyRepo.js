"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiKey_1 = require("../model/ApiKey");
class ApiKeyRepo {
    static async findByKey(key) {
        return ApiKey_1.ApiKeyModel.findOne({ key: key, status: true }).lean().exec();
    }
}
exports.default = ApiKeyRepo;
//# sourceMappingURL=ApiKeyRepo.js.map