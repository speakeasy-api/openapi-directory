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
exports.GetAccountType = exports.GetAccountTypeTaxInfo = exports.GetAccountTypeMetrics = exports.GetAccountTypeBillingAndPayment = void 0;
var utils_1 = require("../../../internal/utils");
// GetAccountTypeBillingAndPayment
/**
 * Container for billing and payment information for the account.
 *
**/
var GetAccountTypeBillingAndPayment = /** @class */ (function (_super) {
    __extends(GetAccountTypeBillingAndPayment, _super);
    function GetAccountTypeBillingAndPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additionalEmailAddresses" }),
        __metadata("design:type", Array)
    ], GetAccountTypeBillingAndPayment.prototype, "additionalEmailAddresses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billCycleDay" }),
        __metadata("design:type", String)
    ], GetAccountTypeBillingAndPayment.prototype, "billCycleDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], GetAccountTypeBillingAndPayment.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoiceDeliveryPrefsEmail" }),
        __metadata("design:type", Boolean)
    ], GetAccountTypeBillingAndPayment.prototype, "invoiceDeliveryPrefsEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoiceDeliveryPrefsPrint" }),
        __metadata("design:type", Boolean)
    ], GetAccountTypeBillingAndPayment.prototype, "invoiceDeliveryPrefsPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentGateway" }),
        __metadata("design:type", String)
    ], GetAccountTypeBillingAndPayment.prototype, "paymentGateway", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentTerm" }),
        __metadata("design:type", String)
    ], GetAccountTypeBillingAndPayment.prototype, "paymentTerm", void 0);
    return GetAccountTypeBillingAndPayment;
}(utils_1.SpeakeasyBase));
exports.GetAccountTypeBillingAndPayment = GetAccountTypeBillingAndPayment;
// GetAccountTypeMetrics
/**
 * Container for account metrics.
 *
**/
var GetAccountTypeMetrics = /** @class */ (function (_super) {
    __extends(GetAccountTypeMetrics, _super);
    function GetAccountTypeMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=balance" }),
        __metadata("design:type", String)
    ], GetAccountTypeMetrics.prototype, "balance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contractedMrr" }),
        __metadata("design:type", String)
    ], GetAccountTypeMetrics.prototype, "contractedMrr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditBalance" }),
        __metadata("design:type", String)
    ], GetAccountTypeMetrics.prototype, "creditBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalDebitMemoBalance" }),
        __metadata("design:type", String)
    ], GetAccountTypeMetrics.prototype, "totalDebitMemoBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalInvoiceBalance" }),
        __metadata("design:type", String)
    ], GetAccountTypeMetrics.prototype, "totalInvoiceBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unappliedCreditMemoAmount" }),
        __metadata("design:type", String)
    ], GetAccountTypeMetrics.prototype, "unappliedCreditMemoAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unappliedPaymentAmount" }),
        __metadata("design:type", String)
    ], GetAccountTypeMetrics.prototype, "unappliedPaymentAmount", void 0);
    return GetAccountTypeMetrics;
}(utils_1.SpeakeasyBase));
exports.GetAccountTypeMetrics = GetAccountTypeMetrics;
// GetAccountTypeTaxInfo
/**
 * Container for tax exempt information, used to establish the tax exempt status of a customer account.
 *
**/
var GetAccountTypeTaxInfo = /** @class */ (function (_super) {
    __extends(GetAccountTypeTaxInfo, _super);
    function GetAccountTypeTaxInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=VATId" }),
        __metadata("design:type", String)
    ], GetAccountTypeTaxInfo.prototype, "vatId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=companyCode" }),
        __metadata("design:type", String)
    ], GetAccountTypeTaxInfo.prototype, "companyCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exemptCertificateId" }),
        __metadata("design:type", String)
    ], GetAccountTypeTaxInfo.prototype, "exemptCertificateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exemptCertificateType" }),
        __metadata("design:type", String)
    ], GetAccountTypeTaxInfo.prototype, "exemptCertificateType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exemptDescription" }),
        __metadata("design:type", String)
    ], GetAccountTypeTaxInfo.prototype, "exemptDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exemptEffectiveDate" }),
        __metadata("design:type", Date)
    ], GetAccountTypeTaxInfo.prototype, "exemptEffectiveDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exemptEntityUseCode" }),
        __metadata("design:type", String)
    ], GetAccountTypeTaxInfo.prototype, "exemptEntityUseCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exemptExpirationDate" }),
        __metadata("design:type", Date)
    ], GetAccountTypeTaxInfo.prototype, "exemptExpirationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exemptIssuingJurisdiction" }),
        __metadata("design:type", String)
    ], GetAccountTypeTaxInfo.prototype, "exemptIssuingJurisdiction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exemptStatus" }),
        __metadata("design:type", String)
    ], GetAccountTypeTaxInfo.prototype, "exemptStatus", void 0);
    return GetAccountTypeTaxInfo;
}(utils_1.SpeakeasyBase));
exports.GetAccountTypeTaxInfo = GetAccountTypeTaxInfo;
var GetAccountType = /** @class */ (function (_super) {
    __extends(GetAccountType, _super);
    function GetAccountType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=basicInfo" }),
        __metadata("design:type", Object)
    ], GetAccountType.prototype, "basicInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billToContact" }),
        __metadata("design:type", Object)
    ], GetAccountType.prototype, "billToContact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billingAndPayment" }),
        __metadata("design:type", GetAccountTypeBillingAndPayment)
    ], GetAccountType.prototype, "billingAndPayment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metrics" }),
        __metadata("design:type", GetAccountTypeMetrics)
    ], GetAccountType.prototype, "metrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=soldToContact" }),
        __metadata("design:type", Object)
    ], GetAccountType.prototype, "soldToContact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], GetAccountType.prototype, "success", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxInfo" }),
        __metadata("design:type", GetAccountTypeTaxInfo)
    ], GetAccountType.prototype, "taxInfo", void 0);
    return GetAccountType;
}(utils_1.SpeakeasyBase));
exports.GetAccountType = GetAccountType;
