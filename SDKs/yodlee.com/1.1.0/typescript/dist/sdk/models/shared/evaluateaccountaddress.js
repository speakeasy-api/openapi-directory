"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluateAccountAddress = exports.EvaluateAccountAddressTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var EvaluateAccountAddressTypeEnum;
(function (EvaluateAccountAddressTypeEnum) {
    EvaluateAccountAddressTypeEnum["Home"] = "HOME";
    EvaluateAccountAddressTypeEnum["Business"] = "BUSINESS";
    EvaluateAccountAddressTypeEnum["Pobox"] = "POBOX";
    EvaluateAccountAddressTypeEnum["Retail"] = "RETAIL";
    EvaluateAccountAddressTypeEnum["Office"] = "OFFICE";
    EvaluateAccountAddressTypeEnum["SmallBusiness"] = "SMALL_BUSINESS";
    EvaluateAccountAddressTypeEnum["Communication"] = "COMMUNICATION";
    EvaluateAccountAddressTypeEnum["Permanent"] = "PERMANENT";
    EvaluateAccountAddressTypeEnum["StatementAddress"] = "STATEMENT_ADDRESS";
    EvaluateAccountAddressTypeEnum["Payment"] = "PAYMENT";
    EvaluateAccountAddressTypeEnum["Payoff"] = "PAYOFF";
    EvaluateAccountAddressTypeEnum["Unknown"] = "UNKNOWN";
})(EvaluateAccountAddressTypeEnum = exports.EvaluateAccountAddressTypeEnum || (exports.EvaluateAccountAddressTypeEnum = {}));
var EvaluateAccountAddress = /** @class */ (function (_super) {
    __extends(EvaluateAccountAddress, _super);
    function EvaluateAccountAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address1" }),
        __metadata("design:type", String)
    ], EvaluateAccountAddress.prototype, "address1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address2" }),
        __metadata("design:type", String)
    ], EvaluateAccountAddress.prototype, "address2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address3" }),
        __metadata("design:type", String)
    ], EvaluateAccountAddress.prototype, "address3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], EvaluateAccountAddress.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], EvaluateAccountAddress.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceType" }),
        __metadata("design:type", String)
    ], EvaluateAccountAddress.prototype, "sourceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], EvaluateAccountAddress.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=street" }),
        __metadata("design:type", String)
    ], EvaluateAccountAddress.prototype, "street", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], EvaluateAccountAddress.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], EvaluateAccountAddress.prototype, "zip", void 0);
    return EvaluateAccountAddress;
}(utils_1.SpeakeasyBase));
exports.EvaluateAccountAddress = EvaluateAccountAddress;
