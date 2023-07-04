"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiResponse_1 = require("../../core/ApiResponse");
const AddressRepo_1 = __importDefault(require("../../database/repository/AddressRepo"));
const UserRepo_1 = __importDefault(require("../../database/repository/UserRepo"));
const asyncHandler_1 = __importDefault(require("../../middlewares/asyncHandler"));
const address = asyncHandler_1.default(async (req, res) => {
    var _a;
    const address = await AddressRepo_1.default.addAddress({
        fullname: req.body.fullname,
        mobile: req.body.mobile,
        pincode: req.body.pincode,
        line1: req.body.line1,
        line2: req.body.line2,
        landmark: (_a = req.body) === null || _a === void 0 ? void 0 : _a.landmark,
        city: req.body.city,
        state: req.body.state,
    });
    req.user.address.push(address._id);
    UserRepo_1.default.update(req.user);
    return new ApiResponse_1.SuccessResponse("Address added", address).send(res);
});
const AddressController = { address };
exports.default = AddressController;
//# sourceMappingURL=address.controller.js.map