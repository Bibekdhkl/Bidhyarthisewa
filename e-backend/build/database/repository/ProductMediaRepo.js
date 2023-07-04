"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductMedia_1 = require("../model/ProductMedia");
class ProductMediaRepo {
    static create(productMedias) {
        return ProductMedia_1.ProductMediaModel.insertMany(productMedias);
    }
}
exports.default = ProductMediaRepo;
//# sourceMappingURL=ProductMediaRepo.js.map