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
exports.SubscribeRequest = exports.SubscribeRequestSubscriptionData = exports.SubscribeRequestSubscribeOptions = exports.SubscribeRequestSubscribeOptionsSubscribeInvoiceProcessingOptions = exports.SubscribeRequestSubscribeOptionsExternalPaymentOptions = exports.SubscribeRequestSubscribeOptionsElectronicPaymentOptions = exports.SubscribeRequestPreviewOptions = exports.SubscribeRequestPreviewOptionsPreviewTypeEnum = exports.SubscribeRequestPaymentMethod = exports.SubscribeRequestPaymentMethodTypeEnum = exports.SubscribeRequestPaymentMethodGatewayOptionData = void 0;
var utils_1 = require("../../../internal/utils");
var gatewayoption_1 = require("./gatewayoption");
var rateplandata_1 = require("./rateplandata");
// SubscribeRequestPaymentMethodGatewayOptionData
/**
 *  Use this field to pass gateway options.
 *
 *
 * **Character limit**: 255
 *
 *
 * **Values**: GatewayOption
**/
var SubscribeRequestPaymentMethodGatewayOptionData = /** @class */ (function (_super) {
    __extends(SubscribeRequestPaymentMethodGatewayOptionData, _super);
    function SubscribeRequestPaymentMethodGatewayOptionData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=GatewayOption", elemType: gatewayoption_1.GatewayOption }),
        __metadata("design:type", Array)
    ], SubscribeRequestPaymentMethodGatewayOptionData.prototype, "gatewayOption", void 0);
    return SubscribeRequestPaymentMethodGatewayOptionData;
}(utils_1.SpeakeasyBase));
exports.SubscribeRequestPaymentMethodGatewayOptionData = SubscribeRequestPaymentMethodGatewayOptionData;
var SubscribeRequestPaymentMethodTypeEnum;
(function (SubscribeRequestPaymentMethodTypeEnum) {
    SubscribeRequestPaymentMethodTypeEnum["Ach"] = "ACH";
    SubscribeRequestPaymentMethodTypeEnum["ApplePay"] = "ApplePay";
    SubscribeRequestPaymentMethodTypeEnum["BankTransfer"] = "BankTransfer";
    SubscribeRequestPaymentMethodTypeEnum["Cash"] = "Cash";
    SubscribeRequestPaymentMethodTypeEnum["Check"] = "Check";
    SubscribeRequestPaymentMethodTypeEnum["CreditCard"] = "CreditCard";
    SubscribeRequestPaymentMethodTypeEnum["CreditCardReferenceTransaction"] = "CreditCardReferenceTransaction";
    SubscribeRequestPaymentMethodTypeEnum["DebitCard"] = "DebitCard";
    SubscribeRequestPaymentMethodTypeEnum["Other"] = "Other";
    SubscribeRequestPaymentMethodTypeEnum["PayPal"] = "PayPal";
    SubscribeRequestPaymentMethodTypeEnum["WireTransfer"] = "WireTransfer";
})(SubscribeRequestPaymentMethodTypeEnum = exports.SubscribeRequestPaymentMethodTypeEnum || (exports.SubscribeRequestPaymentMethodTypeEnum = {}));
// SubscribeRequestPaymentMethod
/**
 *  This is the object defining the payment details for the Account. The Account will be updated with this payment as the default payment method.
 * Use this field if you are associating an electronic payment method with the account. A payment gateway must be enabled.
 * Values: A valid electronic PaymentMethod.
**/
var SubscribeRequestPaymentMethod = /** @class */ (function (_super) {
    __extends(SubscribeRequestPaymentMethod, _super);
    function SubscribeRequestPaymentMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AccountId" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AchAbaCode" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "achAbaCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AchAccountName" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "achAccountName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AchAccountNumber" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "achAccountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AchAccountNumberMask" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "achAccountNumberMask", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AchAccountType" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "achAccountType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AchAddress1" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "achAddress1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AchAddress2" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "achAddress2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AchBankName" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "achBankName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Active" }),
        __metadata("design:type", Boolean)
    ], SubscribeRequestPaymentMethod.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankBranchCode" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "bankBranchCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankCheckDigit" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "bankCheckDigit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankCity" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "bankCity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankCode" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "bankCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankIdentificationNumber" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "bankIdentificationNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankName" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "bankName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankPostalCode" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "bankPostalCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankStreetName" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "bankStreetName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankStreetNumber" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "bankStreetNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankTransferAccountName" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "bankTransferAccountName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankTransferAccountNumber" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "bankTransferAccountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankTransferAccountNumberMask" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "bankTransferAccountNumberMask", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankTransferAccountType" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "bankTransferAccountType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankTransferType" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "bankTransferType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BusinessIdentificationCode" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "businessIdentificationCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=City" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Country" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedById" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "createdById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedDate" }),
        __metadata("design:type", Date)
    ], SubscribeRequestPaymentMethod.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardAddress1" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "creditCardAddress1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardAddress2" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "creditCardAddress2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardCity" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "creditCardCity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardCountry" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "creditCardCountry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardExpirationMonth" }),
        __metadata("design:type", Number)
    ], SubscribeRequestPaymentMethod.prototype, "creditCardExpirationMonth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardExpirationYear" }),
        __metadata("design:type", Number)
    ], SubscribeRequestPaymentMethod.prototype, "creditCardExpirationYear", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardHolderName" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "creditCardHolderName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardMaskNumber" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "creditCardMaskNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardNumber" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "creditCardNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardPostalCode" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "creditCardPostalCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardSecurityCode" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "creditCardSecurityCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardState" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "creditCardState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardType" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "creditCardType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DeviceSessionId" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "deviceSessionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Email" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ExistingMandate" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "existingMandate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FirstName" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=GatewayOptionData" }),
        __metadata("design:type", SubscribeRequestPaymentMethodGatewayOptionData)
    ], SubscribeRequestPaymentMethod.prototype, "gatewayOptionData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IBAN" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "iban", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IPAddress" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "ipAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LastFailedSaleTransactionDate" }),
        __metadata("design:type", Date)
    ], SubscribeRequestPaymentMethod.prototype, "lastFailedSaleTransactionDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LastName" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LastTransactionDateTime" }),
        __metadata("design:type", Date)
    ], SubscribeRequestPaymentMethod.prototype, "lastTransactionDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LastTransactionStatus" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "lastTransactionStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MandateCreationDate" }),
        __metadata("design:type", Date)
    ], SubscribeRequestPaymentMethod.prototype, "mandateCreationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MandateID" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "mandateID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MandateReceived" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "mandateReceived", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MandateUpdateDate" }),
        __metadata("design:type", Date)
    ], SubscribeRequestPaymentMethod.prototype, "mandateUpdateDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MaxConsecutivePaymentFailures" }),
        __metadata("design:type", Number)
    ], SubscribeRequestPaymentMethod.prototype, "maxConsecutivePaymentFailures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NumConsecutiveFailures" }),
        __metadata("design:type", Number)
    ], SubscribeRequestPaymentMethod.prototype, "numConsecutiveFailures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaymentMethodStatus" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "paymentMethodStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaymentRetryWindow" }),
        __metadata("design:type", Number)
    ], SubscribeRequestPaymentMethod.prototype, "paymentRetryWindow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaypalBaid" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "paypalBaid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaypalEmail" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "paypalEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaypalPreapprovalKey" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "paypalPreapprovalKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaypalType" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "paypalType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Phone" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "phone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PostalCode" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "postalCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SecondTokenId" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "secondTokenId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SkipValidation" }),
        __metadata("design:type", Boolean)
    ], SubscribeRequestPaymentMethod.prototype, "skipValidation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StreetName" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "streetName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StreetNumber" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "streetNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TokenId" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "tokenId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TotalNumberOfErrorPayments" }),
        __metadata("design:type", Number)
    ], SubscribeRequestPaymentMethod.prototype, "totalNumberOfErrorPayments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TotalNumberOfProcessedPayments" }),
        __metadata("design:type", Number)
    ], SubscribeRequestPaymentMethod.prototype, "totalNumberOfProcessedPayments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpdatedById" }),
        __metadata("design:type", String)
    ], SubscribeRequestPaymentMethod.prototype, "updatedById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpdatedDate" }),
        __metadata("design:type", Date)
    ], SubscribeRequestPaymentMethod.prototype, "updatedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UseDefaultRetryRule" }),
        __metadata("design:type", Boolean)
    ], SubscribeRequestPaymentMethod.prototype, "useDefaultRetryRule", void 0);
    return SubscribeRequestPaymentMethod;
}(utils_1.SpeakeasyBase));
exports.SubscribeRequestPaymentMethod = SubscribeRequestPaymentMethod;
var SubscribeRequestPreviewOptionsPreviewTypeEnum;
(function (SubscribeRequestPreviewOptionsPreviewTypeEnum) {
    SubscribeRequestPreviewOptionsPreviewTypeEnum["InvoiceItem"] = "InvoiceItem";
    SubscribeRequestPreviewOptionsPreviewTypeEnum["ChargeMetrics"] = "ChargeMetrics";
    SubscribeRequestPreviewOptionsPreviewTypeEnum["InvoiceItemChargeMetrics"] = "InvoiceItemChargeMetrics";
})(SubscribeRequestPreviewOptionsPreviewTypeEnum = exports.SubscribeRequestPreviewOptionsPreviewTypeEnum || (exports.SubscribeRequestPreviewOptionsPreviewTypeEnum = {}));
// SubscribeRequestPreviewOptions
/**
 * Only used if you want to call this operation in preview mode. After a call in preview mode is completed, Zuora will roll back the subscription and return only the temporary invoice data.
 *
**/
var SubscribeRequestPreviewOptions = /** @class */ (function (_super) {
    __extends(SubscribeRequestPreviewOptions, _super);
    function SubscribeRequestPreviewOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EnablePreviewMode" }),
        __metadata("design:type", Boolean)
    ], SubscribeRequestPreviewOptions.prototype, "enablePreviewMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NumberOfPeriods" }),
        __metadata("design:type", Number)
    ], SubscribeRequestPreviewOptions.prototype, "numberOfPeriods", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PreviewThroughTermEnd" }),
        __metadata("design:type", Boolean)
    ], SubscribeRequestPreviewOptions.prototype, "previewThroughTermEnd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PreviewType" }),
        __metadata("design:type", String)
    ], SubscribeRequestPreviewOptions.prototype, "previewType", void 0);
    return SubscribeRequestPreviewOptions;
}(utils_1.SpeakeasyBase));
exports.SubscribeRequestPreviewOptions = SubscribeRequestPreviewOptions;
var SubscribeRequestSubscribeOptionsElectronicPaymentOptions = /** @class */ (function (_super) {
    __extends(SubscribeRequestSubscribeOptionsElectronicPaymentOptions, _super);
    function SubscribeRequestSubscribeOptionsElectronicPaymentOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaymentMethodId" }),
        __metadata("design:type", String)
    ], SubscribeRequestSubscribeOptionsElectronicPaymentOptions.prototype, "paymentMethodId", void 0);
    return SubscribeRequestSubscribeOptionsElectronicPaymentOptions;
}(utils_1.SpeakeasyBase));
exports.SubscribeRequestSubscribeOptionsElectronicPaymentOptions = SubscribeRequestSubscribeOptionsElectronicPaymentOptions;
var SubscribeRequestSubscribeOptionsExternalPaymentOptions = /** @class */ (function (_super) {
    __extends(SubscribeRequestSubscribeOptionsExternalPaymentOptions, _super);
    function SubscribeRequestSubscribeOptionsExternalPaymentOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Amount" }),
        __metadata("design:type", Number)
    ], SubscribeRequestSubscribeOptionsExternalPaymentOptions.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EffectiveDate" }),
        __metadata("design:type", Date)
    ], SubscribeRequestSubscribeOptionsExternalPaymentOptions.prototype, "effectiveDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=GatewayOrderId" }),
        __metadata("design:type", String)
    ], SubscribeRequestSubscribeOptionsExternalPaymentOptions.prototype, "gatewayOrderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaymentMethodId" }),
        __metadata("design:type", String)
    ], SubscribeRequestSubscribeOptionsExternalPaymentOptions.prototype, "paymentMethodId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ReferenceId" }),
        __metadata("design:type", String)
    ], SubscribeRequestSubscribeOptionsExternalPaymentOptions.prototype, "referenceId", void 0);
    return SubscribeRequestSubscribeOptionsExternalPaymentOptions;
}(utils_1.SpeakeasyBase));
exports.SubscribeRequestSubscribeOptionsExternalPaymentOptions = SubscribeRequestSubscribeOptionsExternalPaymentOptions;
var SubscribeRequestSubscribeOptionsSubscribeInvoiceProcessingOptions = /** @class */ (function (_super) {
    __extends(SubscribeRequestSubscribeOptionsSubscribeInvoiceProcessingOptions, _super);
    function SubscribeRequestSubscribeOptionsSubscribeInvoiceProcessingOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InvoiceDate" }),
        __metadata("design:type", Date)
    ], SubscribeRequestSubscribeOptionsSubscribeInvoiceProcessingOptions.prototype, "invoiceDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InvoiceProcessingScope" }),
        __metadata("design:type", String)
    ], SubscribeRequestSubscribeOptionsSubscribeInvoiceProcessingOptions.prototype, "invoiceProcessingScope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InvoiceTargetDate" }),
        __metadata("design:type", Date)
    ], SubscribeRequestSubscribeOptionsSubscribeInvoiceProcessingOptions.prototype, "invoiceTargetDate", void 0);
    return SubscribeRequestSubscribeOptionsSubscribeInvoiceProcessingOptions;
}(utils_1.SpeakeasyBase));
exports.SubscribeRequestSubscribeOptionsSubscribeInvoiceProcessingOptions = SubscribeRequestSubscribeOptionsSubscribeInvoiceProcessingOptions;
// SubscribeRequestSubscribeOptions
/**
 *  This optional object specifies parameters related to invoicing - whether to immediately generate an invoice and collect payment, and whether the invoice should cover all subscriptions or just this new subscription.
 * The default behavior is to invoice immediately for all the account's subscriptions, with the current date as the target date, and immediately collect payment if the account's `AutoPay` flag is true.
 *
 *
 * **Values:** A valid SubscribeOptions object.
**/
var SubscribeRequestSubscribeOptions = /** @class */ (function (_super) {
    __extends(SubscribeRequestSubscribeOptions, _super);
    function SubscribeRequestSubscribeOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ApplicationOrder" }),
        __metadata("design:type", Array)
    ], SubscribeRequestSubscribeOptions.prototype, "applicationOrder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ApplyCredit" }),
        __metadata("design:type", Boolean)
    ], SubscribeRequestSubscribeOptions.prototype, "applyCredit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ApplyCreditBalance" }),
        __metadata("design:type", Boolean)
    ], SubscribeRequestSubscribeOptions.prototype, "applyCreditBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ElectronicPaymentOptions" }),
        __metadata("design:type", SubscribeRequestSubscribeOptionsElectronicPaymentOptions)
    ], SubscribeRequestSubscribeOptions.prototype, "electronicPaymentOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ExternalPaymentOptions" }),
        __metadata("design:type", SubscribeRequestSubscribeOptionsExternalPaymentOptions)
    ], SubscribeRequestSubscribeOptions.prototype, "externalPaymentOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=GenerateInvoice" }),
        __metadata("design:type", Boolean)
    ], SubscribeRequestSubscribeOptions.prototype, "generateInvoice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ProcessPayments" }),
        __metadata("design:type", Boolean)
    ], SubscribeRequestSubscribeOptions.prototype, "processPayments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SubscribeInvoiceProcessingOptions" }),
        __metadata("design:type", SubscribeRequestSubscribeOptionsSubscribeInvoiceProcessingOptions)
    ], SubscribeRequestSubscribeOptions.prototype, "subscribeInvoiceProcessingOptions", void 0);
    return SubscribeRequestSubscribeOptions;
}(utils_1.SpeakeasyBase));
exports.SubscribeRequestSubscribeOptions = SubscribeRequestSubscribeOptions;
// SubscribeRequestSubscriptionData
/**
 *  This object contains the information on the contract's dates and terms.
 *
 *
 * **Values:** A valid SubscriptionData object.
**/
var SubscribeRequestSubscriptionData = /** @class */ (function (_super) {
    __extends(SubscribeRequestSubscriptionData, _super);
    function SubscribeRequestSubscriptionData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RatePlanData", elemType: rateplandata_1.RatePlanData }),
        __metadata("design:type", Array)
    ], SubscribeRequestSubscriptionData.prototype, "ratePlanData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Subscription" }),
        __metadata("design:type", Object)
    ], SubscribeRequestSubscriptionData.prototype, "subscription", void 0);
    return SubscribeRequestSubscriptionData;
}(utils_1.SpeakeasyBase));
exports.SubscribeRequestSubscriptionData = SubscribeRequestSubscriptionData;
var SubscribeRequest = /** @class */ (function (_super) {
    __extends(SubscribeRequest, _super);
    function SubscribeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Account" }),
        __metadata("design:type", Object)
    ], SubscribeRequest.prototype, "account", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BillToContact" }),
        __metadata("design:type", Object)
    ], SubscribeRequest.prototype, "billToContact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaymentMethod" }),
        __metadata("design:type", SubscribeRequestPaymentMethod)
    ], SubscribeRequest.prototype, "paymentMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PreviewOptions" }),
        __metadata("design:type", SubscribeRequestPreviewOptions)
    ], SubscribeRequest.prototype, "previewOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SoldToContact" }),
        __metadata("design:type", Object)
    ], SubscribeRequest.prototype, "soldToContact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SubscribeOptions" }),
        __metadata("design:type", SubscribeRequestSubscribeOptions)
    ], SubscribeRequest.prototype, "subscribeOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SubscriptionData" }),
        __metadata("design:type", SubscribeRequestSubscriptionData)
    ], SubscribeRequest.prototype, "subscriptionData", void 0);
    return SubscribeRequest;
}(utils_1.SpeakeasyBase));
exports.SubscribeRequest = SubscribeRequest;
