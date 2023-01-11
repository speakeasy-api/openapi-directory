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
exports.ProxyGetPaymentMethodSnapshot = exports.ProxyGetPaymentMethodSnapshotTypeEnum = exports.ProxyGetPaymentMethodSnapshotPaypalTypeEnum = exports.ProxyGetPaymentMethodSnapshotPaymentMethodStatusEnum = exports.ProxyGetPaymentMethodSnapshotExistingMandateEnum = exports.ProxyGetPaymentMethodSnapshotCreditCardTypeEnum = exports.ProxyGetPaymentMethodSnapshotBankTransferTypeEnum = exports.ProxyGetPaymentMethodSnapshotAchAccountTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var ProxyGetPaymentMethodSnapshotAchAccountTypeEnum;
(function (ProxyGetPaymentMethodSnapshotAchAccountTypeEnum) {
    ProxyGetPaymentMethodSnapshotAchAccountTypeEnum["BusinessChecking"] = "BusinessChecking";
    ProxyGetPaymentMethodSnapshotAchAccountTypeEnum["Checking"] = "Checking";
    ProxyGetPaymentMethodSnapshotAchAccountTypeEnum["Saving"] = "Saving";
})(ProxyGetPaymentMethodSnapshotAchAccountTypeEnum = exports.ProxyGetPaymentMethodSnapshotAchAccountTypeEnum || (exports.ProxyGetPaymentMethodSnapshotAchAccountTypeEnum = {}));
var ProxyGetPaymentMethodSnapshotBankTransferTypeEnum;
(function (ProxyGetPaymentMethodSnapshotBankTransferTypeEnum) {
    ProxyGetPaymentMethodSnapshotBankTransferTypeEnum["AutomatischIncasso"] = "AutomatischIncasso";
    ProxyGetPaymentMethodSnapshotBankTransferTypeEnum["LastschriftDe"] = "LastschriftDE";
    ProxyGetPaymentMethodSnapshotBankTransferTypeEnum["LastschriftAt"] = "LastschriftAT";
    ProxyGetPaymentMethodSnapshotBankTransferTypeEnum["DemandeDePrelevement"] = "DemandeDePrelevement";
    ProxyGetPaymentMethodSnapshotBankTransferTypeEnum["DirectDebitUk"] = "DirectDebitUK";
    ProxyGetPaymentMethodSnapshotBankTransferTypeEnum["Domicil"] = "Domicil";
    ProxyGetPaymentMethodSnapshotBankTransferTypeEnum["LastschriftCh"] = "LastschriftCH";
    ProxyGetPaymentMethodSnapshotBankTransferTypeEnum["Rid"] = "RID";
    ProxyGetPaymentMethodSnapshotBankTransferTypeEnum["OrdenDeDomiciliacion"] = "OrdenDeDomiciliacion";
    ProxyGetPaymentMethodSnapshotBankTransferTypeEnum["Autogiro"] = "Autogiro";
    ProxyGetPaymentMethodSnapshotBankTransferTypeEnum["Betalingsservice"] = "Betalingsservice";
})(ProxyGetPaymentMethodSnapshotBankTransferTypeEnum = exports.ProxyGetPaymentMethodSnapshotBankTransferTypeEnum || (exports.ProxyGetPaymentMethodSnapshotBankTransferTypeEnum = {}));
var ProxyGetPaymentMethodSnapshotCreditCardTypeEnum;
(function (ProxyGetPaymentMethodSnapshotCreditCardTypeEnum) {
    ProxyGetPaymentMethodSnapshotCreditCardTypeEnum["AmericanExpress"] = "AmericanExpress";
    ProxyGetPaymentMethodSnapshotCreditCardTypeEnum["Discover"] = "Discover";
    ProxyGetPaymentMethodSnapshotCreditCardTypeEnum["MasterCard"] = "MasterCard";
    ProxyGetPaymentMethodSnapshotCreditCardTypeEnum["Visa"] = "Visa";
})(ProxyGetPaymentMethodSnapshotCreditCardTypeEnum = exports.ProxyGetPaymentMethodSnapshotCreditCardTypeEnum || (exports.ProxyGetPaymentMethodSnapshotCreditCardTypeEnum = {}));
var ProxyGetPaymentMethodSnapshotExistingMandateEnum;
(function (ProxyGetPaymentMethodSnapshotExistingMandateEnum) {
    ProxyGetPaymentMethodSnapshotExistingMandateEnum["Yes"] = "Yes";
    ProxyGetPaymentMethodSnapshotExistingMandateEnum["No"] = "No";
})(ProxyGetPaymentMethodSnapshotExistingMandateEnum = exports.ProxyGetPaymentMethodSnapshotExistingMandateEnum || (exports.ProxyGetPaymentMethodSnapshotExistingMandateEnum = {}));
var ProxyGetPaymentMethodSnapshotPaymentMethodStatusEnum;
(function (ProxyGetPaymentMethodSnapshotPaymentMethodStatusEnum) {
    ProxyGetPaymentMethodSnapshotPaymentMethodStatusEnum["Active"] = "Active";
    ProxyGetPaymentMethodSnapshotPaymentMethodStatusEnum["Closed"] = "Closed";
})(ProxyGetPaymentMethodSnapshotPaymentMethodStatusEnum = exports.ProxyGetPaymentMethodSnapshotPaymentMethodStatusEnum || (exports.ProxyGetPaymentMethodSnapshotPaymentMethodStatusEnum = {}));
var ProxyGetPaymentMethodSnapshotPaypalTypeEnum;
(function (ProxyGetPaymentMethodSnapshotPaypalTypeEnum) {
    ProxyGetPaymentMethodSnapshotPaypalTypeEnum["ExpressCheckout"] = "ExpressCheckout";
    ProxyGetPaymentMethodSnapshotPaypalTypeEnum["AdaptivePayments"] = "AdaptivePayments";
})(ProxyGetPaymentMethodSnapshotPaypalTypeEnum = exports.ProxyGetPaymentMethodSnapshotPaypalTypeEnum || (exports.ProxyGetPaymentMethodSnapshotPaypalTypeEnum = {}));
var ProxyGetPaymentMethodSnapshotTypeEnum;
(function (ProxyGetPaymentMethodSnapshotTypeEnum) {
    ProxyGetPaymentMethodSnapshotTypeEnum["Ach"] = "ACH";
    ProxyGetPaymentMethodSnapshotTypeEnum["ApplePay"] = "ApplePay";
    ProxyGetPaymentMethodSnapshotTypeEnum["BankTransfer"] = "BankTransfer";
    ProxyGetPaymentMethodSnapshotTypeEnum["Cash"] = "Cash";
    ProxyGetPaymentMethodSnapshotTypeEnum["Check"] = "Check";
    ProxyGetPaymentMethodSnapshotTypeEnum["CreditCard"] = "CreditCard";
    ProxyGetPaymentMethodSnapshotTypeEnum["CreditCardReferenceTransaction"] = "CreditCardReferenceTransaction";
    ProxyGetPaymentMethodSnapshotTypeEnum["DebitCard"] = "DebitCard";
    ProxyGetPaymentMethodSnapshotTypeEnum["Other"] = "Other";
    ProxyGetPaymentMethodSnapshotTypeEnum["PayPal"] = "PayPal";
    ProxyGetPaymentMethodSnapshotTypeEnum["WireTransfer"] = "WireTransfer";
})(ProxyGetPaymentMethodSnapshotTypeEnum = exports.ProxyGetPaymentMethodSnapshotTypeEnum || (exports.ProxyGetPaymentMethodSnapshotTypeEnum = {}));
var ProxyGetPaymentMethodSnapshot = /** @class */ (function (_super) {
    __extends(ProxyGetPaymentMethodSnapshot, _super);
    function ProxyGetPaymentMethodSnapshot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AccountId" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AchAbaCode" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "achAbaCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AchAccountName" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "achAccountName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AchAccountNumberMask" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "achAccountNumberMask", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AchAccountType" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "achAccountType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AchBankName" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "achBankName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankBranchCode" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "bankBranchCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankCheckDigit" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "bankCheckDigit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankCity" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "bankCity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankCode" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "bankCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankIdentificationNumber" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "bankIdentificationNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankName" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "bankName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankPostalCode" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "bankPostalCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankStreetName" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "bankStreetName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankStreetNumber" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "bankStreetNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankTransferAccountName" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "bankTransferAccountName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankTransferAccountNumberMask" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "bankTransferAccountNumberMask", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankTransferAccountType" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "bankTransferAccountType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BankTransferType" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "bankTransferType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BusinessIdentificationCode" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "businessIdentificationCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=City" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CompanyName" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "companyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Country" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardAddress1" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "creditCardAddress1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardAddress2" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "creditCardAddress2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardCity" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "creditCardCity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardCountry" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "creditCardCountry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardExpirationMonth" }),
        __metadata("design:type", Number)
    ], ProxyGetPaymentMethodSnapshot.prototype, "creditCardExpirationMonth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardExpirationYear" }),
        __metadata("design:type", Number)
    ], ProxyGetPaymentMethodSnapshot.prototype, "creditCardExpirationYear", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardHolderName" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "creditCardHolderName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardMaskNumber" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "creditCardMaskNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardPostalCode" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "creditCardPostalCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardState" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "creditCardState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditCardType" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "creditCardType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DeviceSessionId" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "deviceSessionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Email" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ExistingMandate" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "existingMandate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FirstName" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IBAN" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "iban", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IPAddress" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "ipAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IdentityNumber" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "identityNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IsCompany" }),
        __metadata("design:type", Boolean)
    ], ProxyGetPaymentMethodSnapshot.prototype, "isCompany", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LastFailedSaleTransactionDate" }),
        __metadata("design:type", Date)
    ], ProxyGetPaymentMethodSnapshot.prototype, "lastFailedSaleTransactionDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LastName" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LastTransactionDateTime" }),
        __metadata("design:type", Date)
    ], ProxyGetPaymentMethodSnapshot.prototype, "lastTransactionDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LastTransactionStatus" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "lastTransactionStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MandateCreationDate" }),
        __metadata("design:type", Date)
    ], ProxyGetPaymentMethodSnapshot.prototype, "mandateCreationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MandateID" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "mandateID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MandateReceived" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "mandateReceived", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MandateUpdateDate" }),
        __metadata("design:type", Date)
    ], ProxyGetPaymentMethodSnapshot.prototype, "mandateUpdateDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MaxConsecutivePaymentFailures" }),
        __metadata("design:type", Number)
    ], ProxyGetPaymentMethodSnapshot.prototype, "maxConsecutivePaymentFailures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NumConsecutiveFailures" }),
        __metadata("design:type", Number)
    ], ProxyGetPaymentMethodSnapshot.prototype, "numConsecutiveFailures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaymentMethodId" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "paymentMethodId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaymentMethodStatus" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "paymentMethodStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaymentRetryWindow" }),
        __metadata("design:type", Number)
    ], ProxyGetPaymentMethodSnapshot.prototype, "paymentRetryWindow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaypalBaid" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "paypalBaid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaypalEmail" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "paypalEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaypalPreapprovalKey" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "paypalPreapprovalKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaypalType" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "paypalType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Phone" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "phone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PostalCode" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "postalCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SecondTokenId" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "secondTokenId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StreetName" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "streetName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StreetNumber" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "streetNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TokenId" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "tokenId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TotalNumberOfErrorPayments" }),
        __metadata("design:type", Number)
    ], ProxyGetPaymentMethodSnapshot.prototype, "totalNumberOfErrorPayments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TotalNumberOfProcessedPayments" }),
        __metadata("design:type", Number)
    ], ProxyGetPaymentMethodSnapshot.prototype, "totalNumberOfProcessedPayments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ProxyGetPaymentMethodSnapshot.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UseDefaultRetryRule" }),
        __metadata("design:type", Boolean)
    ], ProxyGetPaymentMethodSnapshot.prototype, "useDefaultRetryRule", void 0);
    return ProxyGetPaymentMethodSnapshot;
}(utils_1.SpeakeasyBase));
exports.ProxyGetPaymentMethodSnapshot = ProxyGetPaymentMethodSnapshot;
