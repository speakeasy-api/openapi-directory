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
exports.GetAccountSummaryType = exports.GetAccountSummaryTypeTaxInfo = void 0;
var utils_1 = require("../../../internal/utils");
var getaccountsummaryinvoicetype_1 = require("./getaccountsummaryinvoicetype");
var getaccountsummarypaymenttype_1 = require("./getaccountsummarypaymenttype");
var getaccountsummaryusagetype_1 = require("./getaccountsummaryusagetype");
// GetAccountSummaryTypeTaxInfo
/**
 * Container for tax exempt information, used to establish the tax exempt status of a customer account.
 *
**/
var GetAccountSummaryTypeTaxInfo = /** @class */ (function (_super) {
    __extends(GetAccountSummaryTypeTaxInfo, _super);
    function GetAccountSummaryTypeTaxInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=VATId" }),
        __metadata("design:type", String)
    ], GetAccountSummaryTypeTaxInfo.prototype, "vatId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=companyCode" }),
        __metadata("design:type", String)
    ], GetAccountSummaryTypeTaxInfo.prototype, "companyCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exemptCertificateId" }),
        __metadata("design:type", String)
    ], GetAccountSummaryTypeTaxInfo.prototype, "exemptCertificateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exemptCertificateType" }),
        __metadata("design:type", String)
    ], GetAccountSummaryTypeTaxInfo.prototype, "exemptCertificateType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exemptDescription" }),
        __metadata("design:type", String)
    ], GetAccountSummaryTypeTaxInfo.prototype, "exemptDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exemptEffectiveDate" }),
        __metadata("design:type", Date)
    ], GetAccountSummaryTypeTaxInfo.prototype, "exemptEffectiveDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exemptEntityUseCode" }),
        __metadata("design:type", String)
    ], GetAccountSummaryTypeTaxInfo.prototype, "exemptEntityUseCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exemptExpirationDate" }),
        __metadata("design:type", Date)
    ], GetAccountSummaryTypeTaxInfo.prototype, "exemptExpirationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exemptIssuingJurisdiction" }),
        __metadata("design:type", String)
    ], GetAccountSummaryTypeTaxInfo.prototype, "exemptIssuingJurisdiction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exemptStatus" }),
        __metadata("design:type", String)
    ], GetAccountSummaryTypeTaxInfo.prototype, "exemptStatus", void 0);
    return GetAccountSummaryTypeTaxInfo;
}(utils_1.SpeakeasyBase));
exports.GetAccountSummaryTypeTaxInfo = GetAccountSummaryTypeTaxInfo;
var GetAccountSummaryType = /** @class */ (function (_super) {
    __extends(GetAccountSummaryType, _super);
    function GetAccountSummaryType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=basicInfo" }),
        __metadata("design:type", Object)
    ], GetAccountSummaryType.prototype, "basicInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billToContact" }),
        __metadata("design:type", Object)
    ], GetAccountSummaryType.prototype, "billToContact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoices", elemType: getaccountsummaryinvoicetype_1.GetAccountSummaryInvoiceType }),
        __metadata("design:type", Array)
    ], GetAccountSummaryType.prototype, "invoices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payments", elemType: getaccountsummarypaymenttype_1.GetAccountSummaryPaymentType }),
        __metadata("design:type", Array)
    ], GetAccountSummaryType.prototype, "payments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=soldToContact" }),
        __metadata("design:type", Object)
    ], GetAccountSummaryType.prototype, "soldToContact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptions" }),
        __metadata("design:type", Array)
    ], GetAccountSummaryType.prototype, "subscriptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], GetAccountSummaryType.prototype, "success", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxInfo" }),
        __metadata("design:type", GetAccountSummaryTypeTaxInfo)
    ], GetAccountSummaryType.prototype, "taxInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usage", elemType: getaccountsummaryusagetype_1.GetAccountSummaryUsageType }),
        __metadata("design:type", Array)
    ], GetAccountSummaryType.prototype, "usage", void 0);
    return GetAccountSummaryType;
}(utils_1.SpeakeasyBase));
exports.GetAccountSummaryType = GetAccountSummaryType;
