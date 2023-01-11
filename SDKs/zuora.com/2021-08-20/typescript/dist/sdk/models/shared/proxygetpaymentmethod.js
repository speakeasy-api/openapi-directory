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
exports.ProxyGetPaymentMethod = exports.ProxyGetPaymentMethodTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var ProxyGetPaymentMethodTypeEnum;
(function (ProxyGetPaymentMethodTypeEnum) {
    ProxyGetPaymentMethodTypeEnum["Ach"] = "ACH";
    ProxyGetPaymentMethodTypeEnum["ApplePay"] = "ApplePay";
    ProxyGetPaymentMethodTypeEnum["BankTransfer"] = "BankTransfer";
    ProxyGetPaymentMethodTypeEnum["Cash"] = "Cash";
    ProxyGetPaymentMethodTypeEnum["Check"] = "Check";
    ProxyGetPaymentMethodTypeEnum["CreditCard"] = "CreditCard";
    ProxyGetPaymentMethodTypeEnum["CreditCardReferenceTransaction"] = "CreditCardReferenceTransaction";
    ProxyGetPaymentMethodTypeEnum["DebitCard"] = "DebitCard";
    ProxyGetPaymentMethodTypeEnum["Other"] = "Other";
    ProxyGetPaymentMethodTypeEnum["PayPal"] = "PayPal";
    ProxyGetPaymentMethodTypeEnum["WireTransfer"] = "WireTransfer";
})(ProxyGetPaymentMethodTypeEnum = exports.ProxyGetPaymentMethodTypeEnum || (exports.ProxyGetPaymentMethodTypeEnum = {}));
var ProxyGetPaymentMethod = /** @class */ (function (_super) {
    __extends(ProxyGetPaymentMethod, _super);
    function ProxyGetPaymentMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AccountId" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AchAbaCode" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "achAbaCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AchAccountName" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "achAccountName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AchAccountNumberMask" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "achAccountNumberMask", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AchAccountType" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "achAccountType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AchAddress1" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "achAddress1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AchAddress2" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "achAddress2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AchBankName" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "achBankName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Active" }),
        __metadata("design:type", Boolean)
    ], ProxyGetPaymentMethod.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankBranchCode" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "bankBranchCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankCheckDigit" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "bankCheckDigit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankCity" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "bankCity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankCode" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "bankCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankIdentificationNumber" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "bankIdentificationNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankName" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "bankName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankPostalCode" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "bankPostalCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankStreetName" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "bankStreetName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankStreetNumber" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "bankStreetNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankTransferAccountName" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "bankTransferAccountName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankTransferAccountNumber" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "bankTransferAccountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankTransferAccountNumberMask" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "bankTransferAccountNumberMask", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankTransferAccountType" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "bankTransferAccountType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankTransferType" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "bankTransferType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BusinessIdentificationCode" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "businessIdentificationCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=City" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CompanyName" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "companyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Country" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedById" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "createdById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedDate" }),
        __metadata("design:type", Date)
    ], ProxyGetPaymentMethod.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardAddress1" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "creditCardAddress1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardAddress2" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "creditCardAddress2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardCity" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "creditCardCity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardCountry" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "creditCardCountry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardExpirationMonth" }),
        __metadata("design:type", Number)
    ], ProxyGetPaymentMethod.prototype, "creditCardExpirationMonth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardExpirationYear" }),
        __metadata("design:type", Number)
    ], ProxyGetPaymentMethod.prototype, "creditCardExpirationYear", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardHolderName" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "creditCardHolderName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardMaskNumber" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "creditCardMaskNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardPostalCode" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "creditCardPostalCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardState" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "creditCardState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardType" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "creditCardType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DeviceSessionId" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "deviceSessionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Email" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ExistingMandate" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "existingMandate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FirstName" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IBAN" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "iban", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IPAddress" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "ipAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IdentityNumber" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "identityNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IsCompany" }),
        __metadata("design:type", Boolean)
    ], ProxyGetPaymentMethod.prototype, "isCompany", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LastFailedSaleTransactionDate" }),
        __metadata("design:type", Date)
    ], ProxyGetPaymentMethod.prototype, "lastFailedSaleTransactionDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LastName" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LastTransactionDateTime" }),
        __metadata("design:type", Date)
    ], ProxyGetPaymentMethod.prototype, "lastTransactionDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LastTransactionStatus" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "lastTransactionStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MandateCreationDate" }),
        __metadata("design:type", Date)
    ], ProxyGetPaymentMethod.prototype, "mandateCreationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MandateID" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "mandateID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MandateReceived" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "mandateReceived", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MandateUpdateDate" }),
        __metadata("design:type", Date)
    ], ProxyGetPaymentMethod.prototype, "mandateUpdateDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MaxConsecutivePaymentFailures" }),
        __metadata("design:type", Number)
    ], ProxyGetPaymentMethod.prototype, "maxConsecutivePaymentFailures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NumConsecutiveFailures" }),
        __metadata("design:type", Number)
    ], ProxyGetPaymentMethod.prototype, "numConsecutiveFailures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaymentMethodStatus" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "paymentMethodStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaymentRetryWindow" }),
        __metadata("design:type", Number)
    ], ProxyGetPaymentMethod.prototype, "paymentRetryWindow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaypalBaid" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "paypalBaid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaypalEmail" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "paypalEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaypalPreapprovalKey" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "paypalPreapprovalKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaypalType" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "paypalType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Phone" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "phone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PostalCode" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "postalCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SecondTokenId" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "secondTokenId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StreetName" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "streetName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StreetNumber" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "streetNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TokenId" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "tokenId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TotalNumberOfErrorPayments" }),
        __metadata("design:type", Number)
    ], ProxyGetPaymentMethod.prototype, "totalNumberOfErrorPayments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TotalNumberOfProcessedPayments" }),
        __metadata("design:type", Number)
    ], ProxyGetPaymentMethod.prototype, "totalNumberOfProcessedPayments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpdatedById" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethod.prototype, "updatedById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpdatedDate" }),
        __metadata("design:type", Date)
    ], ProxyGetPaymentMethod.prototype, "updatedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UseDefaultRetryRule" }),
        __metadata("design:type", Boolean)
    ], ProxyGetPaymentMethod.prototype, "useDefaultRetryRule", void 0);
    return ProxyGetPaymentMethod;
}(utils_1.SpeakeasyBase));
exports.ProxyGetPaymentMethod = ProxyGetPaymentMethod;
