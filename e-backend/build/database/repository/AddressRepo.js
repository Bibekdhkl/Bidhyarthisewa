"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Address_1 = require("../model/Address");
class AddressRepo {
    static addAddress(address) {
        const now = new Date();
        address.createdAt = address.updatedAt = now;
        return Address_1.AddressModel.create(address);
    }
}
exports.default = AddressRepo;
//# sourceMappingURL=AddressRepo.js.map