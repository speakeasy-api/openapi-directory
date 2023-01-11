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
exports.Security = void 0;
var utils_1 = require("../../../internal/utils");
var stockexchangedetail_1 = require("./stockexchangedetail");
var Security = /** @class */ (function (_super) {
    __extends(Security, _super);
    function Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accrualMethod" }),
        __metadata("design:type", String)
    ], Security.prototype, "accrualMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=agencyFactor" }),
        __metadata("design:type", Number)
    ], Security.prototype, "agencyFactor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callDate" }),
        __metadata("design:type", String)
    ], Security.prototype, "callDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callPrice" }),
        __metadata("design:type", Number)
    ], Security.prototype, "callPrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cdscFundFlag" }),
        __metadata("design:type", Boolean)
    ], Security.prototype, "cdscFundFlag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=closedFlag" }),
        __metadata("design:type", Boolean)
    ], Security.prototype, "closedFlag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cusip" }),
        __metadata("design:type", String)
    ], Security.prototype, "cusip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Security.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=federalTaxable" }),
        __metadata("design:type", Boolean)
    ], Security.prototype, "federalTaxable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=firmEligible" }),
        __metadata("design:type", String)
    ], Security.prototype, "firmEligible", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=firstCouponDate" }),
        __metadata("design:type", String)
    ], Security.prototype, "firstCouponDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=frequency" }),
        __metadata("design:type", Number)
    ], Security.prototype, "frequency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fundFamily" }),
        __metadata("design:type", String)
    ], Security.prototype, "fundFamily", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gicsSector" }),
        __metadata("design:type", String)
    ], Security.prototype, "gicsSector", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Security.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=incomeCurrency" }),
        __metadata("design:type", String)
    ], Security.prototype, "incomeCurrency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interestRate" }),
        __metadata("design:type", Number)
    ], Security.prototype, "interestRate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isDummySecurity" }),
        __metadata("design:type", Boolean)
    ], Security.prototype, "isDummySecurity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isEnvestnetDummySecurity" }),
        __metadata("design:type", Boolean)
    ], Security.prototype, "isEnvestnetDummySecurity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isSyntheticSecurity" }),
        __metadata("design:type", Boolean)
    ], Security.prototype, "isSyntheticSecurity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isin" }),
        __metadata("design:type", String)
    ], Security.prototype, "isin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issueDate" }),
        __metadata("design:type", String)
    ], Security.prototype, "issueDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issueTypeMultiplier" }),
        __metadata("design:type", Number)
    ], Security.prototype, "issueTypeMultiplier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastCouponDate" }),
        __metadata("design:type", String)
    ], Security.prototype, "lastCouponDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastModifiedDate" }),
        __metadata("design:type", String)
    ], Security.prototype, "lastModifiedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maturityDate" }),
        __metadata("design:type", String)
    ], Security.prototype, "maturityDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minimumPurchase" }),
        __metadata("design:type", Number)
    ], Security.prototype, "minimumPurchase", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=moodyRating" }),
        __metadata("design:type", String)
    ], Security.prototype, "moodyRating", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sAndPRating" }),
        __metadata("design:type", String)
    ], Security.prototype, "sAndPRating", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sector" }),
        __metadata("design:type", String)
    ], Security.prototype, "sector", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sedol" }),
        __metadata("design:type", String)
    ], Security.prototype, "sedol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shareClass" }),
        __metadata("design:type", String)
    ], Security.prototype, "shareClass", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stateTaxable" }),
        __metadata("design:type", Boolean)
    ], Security.prototype, "stateTaxable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stockExchangeDetails", elemType: stockexchangedetail_1.StockExchangeDetail }),
        __metadata("design:type", Array)
    ], Security.prototype, "stockExchangeDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=style" }),
        __metadata("design:type", String)
    ], Security.prototype, "style", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subSector" }),
        __metadata("design:type", String)
    ], Security.prototype, "subSector", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tradeCurrencyCode" }),
        __metadata("design:type", String)
    ], Security.prototype, "tradeCurrencyCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Security.prototype, "type", void 0);
    return Security;
}(utils_1.SpeakeasyBase));
exports.Security = Security;
