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
exports.Attribute = exports.AttributeInput = exports.AttributeNameEnum = exports.AttributeContainerEnum = void 0;
var utils_1 = require("../../../internal/utils");
var containerattributes_1 = require("./containerattributes");
var AttributeContainerEnum;
(function (AttributeContainerEnum) {
    AttributeContainerEnum["Bank"] = "bank";
    AttributeContainerEnum["CreditCard"] = "creditCard";
    AttributeContainerEnum["Investment"] = "investment";
    AttributeContainerEnum["Insurance"] = "insurance";
    AttributeContainerEnum["Loan"] = "loan";
    AttributeContainerEnum["Reward"] = "reward";
    AttributeContainerEnum["RealEstate"] = "realEstate";
    AttributeContainerEnum["OtherAssets"] = "otherAssets";
    AttributeContainerEnum["OtherLiabilities"] = "otherLiabilities";
})(AttributeContainerEnum = exports.AttributeContainerEnum || (exports.AttributeContainerEnum = {}));
var AttributeNameEnum;
(function (AttributeNameEnum) {
    AttributeNameEnum["BasicAccountInfo"] = "BASIC_ACCOUNT_INFO";
    AttributeNameEnum["Transactions"] = "TRANSACTIONS";
    AttributeNameEnum["Statements"] = "STATEMENTS";
    AttributeNameEnum["Holdings"] = "HOLDINGS";
    AttributeNameEnum["AccountDetails"] = "ACCOUNT_DETAILS";
    AttributeNameEnum["Tax"] = "TAX";
    AttributeNameEnum["Ebills"] = "EBILLS";
    AttributeNameEnum["FullAcctNumber"] = "FULL_ACCT_NUMBER";
    AttributeNameEnum["BankTransferCode"] = "BANK_TRANSFER_CODE";
    AttributeNameEnum["HolderName"] = "HOLDER_NAME";
    AttributeNameEnum["HolderDetails"] = "HOLDER_DETAILS";
    AttributeNameEnum["PaymentProfile"] = "PAYMENT_PROFILE";
    AttributeNameEnum["PaymentDetails"] = "PAYMENT_DETAILS";
    AttributeNameEnum["InterestDetails"] = "INTEREST_DETAILS";
    AttributeNameEnum["Coverage"] = "COVERAGE";
})(AttributeNameEnum = exports.AttributeNameEnum || (exports.AttributeNameEnum = {}));
var AttributeInput = /** @class */ (function (_super) {
    __extends(AttributeInput, _super);
    function AttributeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=container" }),
        __metadata("design:type", Array)
    ], AttributeInput.prototype, "container", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=containerAttributes" }),
        __metadata("design:type", containerattributes_1.ContainerAttributes)
    ], AttributeInput.prototype, "containerAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AttributeInput.prototype, "name", void 0);
    return AttributeInput;
}(utils_1.SpeakeasyBase));
exports.AttributeInput = AttributeInput;
var Attribute = /** @class */ (function (_super) {
    __extends(Attribute, _super);
    function Attribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=container" }),
        __metadata("design:type", Array)
    ], Attribute.prototype, "container", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=containerAttributes" }),
        __metadata("design:type", containerattributes_1.ContainerAttributes)
    ], Attribute.prototype, "containerAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fromDate" }),
        __metadata("design:type", String)
    ], Attribute.prototype, "fromDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fromFinYear" }),
        __metadata("design:type", String)
    ], Attribute.prototype, "fromFinYear", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Attribute.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=toDate" }),
        __metadata("design:type", String)
    ], Attribute.prototype, "toDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=toFinYear" }),
        __metadata("design:type", String)
    ], Attribute.prototype, "toFinYear", void 0);
    return Attribute;
}(utils_1.SpeakeasyBase));
exports.Attribute = Attribute;
