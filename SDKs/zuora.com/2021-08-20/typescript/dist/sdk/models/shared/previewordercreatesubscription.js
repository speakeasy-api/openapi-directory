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
exports.PreviewOrderCreateSubscription = exports.PreviewOrderCreateSubscriptionTerms = exports.PreviewOrderCreateSubscriptionTermsRenewalSettingEnum = exports.PreviewOrderCreateSubscriptionTermsInitialTerm = exports.PreviewOrderCreateSubscriptionTermsInitialTermTermTypeEnum = exports.PreviewOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum = exports.PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount = void 0;
var utils_1 = require("../../../internal/utils");
var creditcard_1 = require("./creditcard");
var taxinfo_1 = require("./taxinfo");
var renewalterm_1 = require("./renewalterm");
var previeworderrateplanoverride_1 = require("./previeworderrateplanoverride");
// PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount
/**
 * Information about a new account that will own the subscription. Only available if you have enabled the Owner Transfer feature.
 *
 * **Note:** The Owner Transfer feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
 *
 * If you do not set this field or the `subscriptionOwnerAccountNumber` field, the account that owns the order will also own the subscription. Zuora will return an error if you set this field and the `subscriptionOwnerAccountNumber` field.
 *
**/
var PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount = /** @class */ (function (_super) {
    __extends(PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount, _super);
    function PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "accountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additionalEmailAddresses" }),
        __metadata("design:type", String)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "additionalEmailAddresses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowInvoiceEdit" }),
        __metadata("design:type", Boolean)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "allowInvoiceEdit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=autoPay" }),
        __metadata("design:type", Boolean)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "autoPay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=batch" }),
        __metadata("design:type", String)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "batch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billCycleDay" }),
        __metadata("design:type", Number)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "billCycleDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billToContact" }),
        __metadata("design:type", Object)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "billToContact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=communicationProfileId" }),
        __metadata("design:type", String)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "communicationProfileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditCard" }),
        __metadata("design:type", creditcard_1.CreditCard)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "creditCard", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditMemoTemplateId" }),
        __metadata("design:type", String)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "creditMemoTemplateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=crmId" }),
        __metadata("design:type", String)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "crmId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customFields" }),
        __metadata("design:type", Object)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customerServiceRepName" }),
        __metadata("design:type", String)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "customerServiceRepName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=debitMemoTemplateId" }),
        __metadata("design:type", String)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "debitMemoTemplateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hpmCreditCardPaymentMethodId" }),
        __metadata("design:type", String)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "hpmCreditCardPaymentMethodId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoiceDeliveryPrefsEmail" }),
        __metadata("design:type", Boolean)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "invoiceDeliveryPrefsEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoiceDeliveryPrefsPrint" }),
        __metadata("design:type", Boolean)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "invoiceDeliveryPrefsPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoiceTemplateId" }),
        __metadata("design:type", String)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "invoiceTemplateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "notes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parentId" }),
        __metadata("design:type", String)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "parentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentGateway" }),
        __metadata("design:type", String)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "paymentGateway", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentMethod" }),
        __metadata("design:type", Object)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "paymentMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentTerm" }),
        __metadata("design:type", String)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "paymentTerm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchaseOrderNumber" }),
        __metadata("design:type", String)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "purchaseOrderNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=salesRep" }),
        __metadata("design:type", String)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "salesRep", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=soldToContact" }),
        __metadata("design:type", Object)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "soldToContact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxInfo" }),
        __metadata("design:type", taxinfo_1.TaxInfo)
    ], PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount.prototype, "taxInfo", void 0);
    return PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount;
}(utils_1.SpeakeasyBase));
exports.PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount = PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount;
var PreviewOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum;
(function (PreviewOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum) {
    PreviewOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum["Month"] = "Month";
    PreviewOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum["Year"] = "Year";
    PreviewOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum["Day"] = "Day";
    PreviewOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum["Week"] = "Week";
})(PreviewOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum = exports.PreviewOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum || (exports.PreviewOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum = {}));
var PreviewOrderCreateSubscriptionTermsInitialTermTermTypeEnum;
(function (PreviewOrderCreateSubscriptionTermsInitialTermTermTypeEnum) {
    PreviewOrderCreateSubscriptionTermsInitialTermTermTypeEnum["Termed"] = "TERMED";
    PreviewOrderCreateSubscriptionTermsInitialTermTermTypeEnum["Evergreen"] = "EVERGREEN";
})(PreviewOrderCreateSubscriptionTermsInitialTermTermTypeEnum = exports.PreviewOrderCreateSubscriptionTermsInitialTermTermTypeEnum || (exports.PreviewOrderCreateSubscriptionTermsInitialTermTermTypeEnum = {}));
// PreviewOrderCreateSubscriptionTermsInitialTerm
/**
 * Information about the first term of the subscription.
 *
**/
var PreviewOrderCreateSubscriptionTermsInitialTerm = /** @class */ (function (_super) {
    __extends(PreviewOrderCreateSubscriptionTermsInitialTerm, _super);
    function PreviewOrderCreateSubscriptionTermsInitialTerm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=period" }),
        __metadata("design:type", Number)
    ], PreviewOrderCreateSubscriptionTermsInitialTerm.prototype, "period", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=periodType" }),
        __metadata("design:type", String)
    ], PreviewOrderCreateSubscriptionTermsInitialTerm.prototype, "periodType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startDate" }),
        __metadata("design:type", Date)
    ], PreviewOrderCreateSubscriptionTermsInitialTerm.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=termType" }),
        __metadata("design:type", String)
    ], PreviewOrderCreateSubscriptionTermsInitialTerm.prototype, "termType", void 0);
    return PreviewOrderCreateSubscriptionTermsInitialTerm;
}(utils_1.SpeakeasyBase));
exports.PreviewOrderCreateSubscriptionTermsInitialTerm = PreviewOrderCreateSubscriptionTermsInitialTerm;
var PreviewOrderCreateSubscriptionTermsRenewalSettingEnum;
(function (PreviewOrderCreateSubscriptionTermsRenewalSettingEnum) {
    PreviewOrderCreateSubscriptionTermsRenewalSettingEnum["RenewWithSpecificTerm"] = "RENEW_WITH_SPECIFIC_TERM";
    PreviewOrderCreateSubscriptionTermsRenewalSettingEnum["RenewToEvergreen"] = "RENEW_TO_EVERGREEN";
})(PreviewOrderCreateSubscriptionTermsRenewalSettingEnum = exports.PreviewOrderCreateSubscriptionTermsRenewalSettingEnum || (exports.PreviewOrderCreateSubscriptionTermsRenewalSettingEnum = {}));
// PreviewOrderCreateSubscriptionTerms
/**
 * Container for the terms and renewal settings of the subscription.
 *
**/
var PreviewOrderCreateSubscriptionTerms = /** @class */ (function (_super) {
    __extends(PreviewOrderCreateSubscriptionTerms, _super);
    function PreviewOrderCreateSubscriptionTerms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=autoRenew" }),
        __metadata("design:type", Boolean)
    ], PreviewOrderCreateSubscriptionTerms.prototype, "autoRenew", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=initialTerm" }),
        __metadata("design:type", PreviewOrderCreateSubscriptionTermsInitialTerm)
    ], PreviewOrderCreateSubscriptionTerms.prototype, "initialTerm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=renewalSetting" }),
        __metadata("design:type", String)
    ], PreviewOrderCreateSubscriptionTerms.prototype, "renewalSetting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=renewalTerms", elemType: renewalterm_1.RenewalTerm }),
        __metadata("design:type", Array)
    ], PreviewOrderCreateSubscriptionTerms.prototype, "renewalTerms", void 0);
    return PreviewOrderCreateSubscriptionTerms;
}(utils_1.SpeakeasyBase));
exports.PreviewOrderCreateSubscriptionTerms = PreviewOrderCreateSubscriptionTerms;
// PreviewOrderCreateSubscription
/**
 * Information about an order action of type `CreateSubscription`.
 *
**/
var PreviewOrderCreateSubscription = /** @class */ (function (_super) {
    __extends(PreviewOrderCreateSubscription, _super);
    function PreviewOrderCreateSubscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoiceSeparately" }),
        __metadata("design:type", Boolean)
    ], PreviewOrderCreateSubscription.prototype, "invoiceSeparately", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=newSubscriptionOwnerAccount" }),
        __metadata("design:type", PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount)
    ], PreviewOrderCreateSubscription.prototype, "newSubscriptionOwnerAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], PreviewOrderCreateSubscription.prototype, "notes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscribeToRatePlans", elemType: previeworderrateplanoverride_1.PreviewOrderRatePlanOverride }),
        __metadata("design:type", Array)
    ], PreviewOrderCreateSubscription.prototype, "subscribeToRatePlans", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionNumber" }),
        __metadata("design:type", String)
    ], PreviewOrderCreateSubscription.prototype, "subscriptionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionOwnerAccountNumber" }),
        __metadata("design:type", String)
    ], PreviewOrderCreateSubscription.prototype, "subscriptionOwnerAccountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=terms" }),
        __metadata("design:type", PreviewOrderCreateSubscriptionTerms)
    ], PreviewOrderCreateSubscription.prototype, "terms", void 0);
    return PreviewOrderCreateSubscription;
}(utils_1.SpeakeasyBase));
exports.PreviewOrderCreateSubscription = PreviewOrderCreateSubscription;
