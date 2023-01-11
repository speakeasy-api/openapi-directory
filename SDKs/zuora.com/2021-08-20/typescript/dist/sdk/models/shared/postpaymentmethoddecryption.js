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
exports.PostPaymentMethodDecryption = exports.PostPaymentMethodDecryptionMitProfileTypeEnum = exports.PostPaymentMethodDecryptionMitProfileActionEnum = exports.PostPaymentMethodDecryptionMitConsentAgreementSrcEnum = exports.PostPaymentMethodDecryptionCardHolderInfo = void 0;
var utils_1 = require("../../../internal/utils");
// PostPaymentMethodDecryptionCardHolderInfo
/**
 * Container for cardholder information. If provided, Zuora will only use this information for this card. If not provided, Zuora will use the account's existing bill-to contact information for this card.
**/
var PostPaymentMethodDecryptionCardHolderInfo = /** @class */ (function (_super) {
    __extends(PostPaymentMethodDecryptionCardHolderInfo, _super);
    function PostPaymentMethodDecryptionCardHolderInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addressLine1" }),
        __metadata("design:type", String)
    ], PostPaymentMethodDecryptionCardHolderInfo.prototype, "addressLine1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addressLine2" }),
        __metadata("design:type", String)
    ], PostPaymentMethodDecryptionCardHolderInfo.prototype, "addressLine2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cardHolderName" }),
        __metadata("design:type", String)
    ], PostPaymentMethodDecryptionCardHolderInfo.prototype, "cardHolderName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], PostPaymentMethodDecryptionCardHolderInfo.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PostPaymentMethodDecryptionCardHolderInfo.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], PostPaymentMethodDecryptionCardHolderInfo.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], PostPaymentMethodDecryptionCardHolderInfo.prototype, "phone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], PostPaymentMethodDecryptionCardHolderInfo.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zipCode" }),
        __metadata("design:type", String)
    ], PostPaymentMethodDecryptionCardHolderInfo.prototype, "zipCode", void 0);
    return PostPaymentMethodDecryptionCardHolderInfo;
}(utils_1.SpeakeasyBase));
exports.PostPaymentMethodDecryptionCardHolderInfo = PostPaymentMethodDecryptionCardHolderInfo;
var PostPaymentMethodDecryptionMitConsentAgreementSrcEnum;
(function (PostPaymentMethodDecryptionMitConsentAgreementSrcEnum) {
    PostPaymentMethodDecryptionMitConsentAgreementSrcEnum["External"] = "External";
})(PostPaymentMethodDecryptionMitConsentAgreementSrcEnum = exports.PostPaymentMethodDecryptionMitConsentAgreementSrcEnum || (exports.PostPaymentMethodDecryptionMitConsentAgreementSrcEnum = {}));
var PostPaymentMethodDecryptionMitProfileActionEnum;
(function (PostPaymentMethodDecryptionMitProfileActionEnum) {
    PostPaymentMethodDecryptionMitProfileActionEnum["Activate"] = "Activate";
    PostPaymentMethodDecryptionMitProfileActionEnum["Persist"] = "Persist";
})(PostPaymentMethodDecryptionMitProfileActionEnum = exports.PostPaymentMethodDecryptionMitProfileActionEnum || (exports.PostPaymentMethodDecryptionMitProfileActionEnum = {}));
var PostPaymentMethodDecryptionMitProfileTypeEnum;
(function (PostPaymentMethodDecryptionMitProfileTypeEnum) {
    PostPaymentMethodDecryptionMitProfileTypeEnum["Recurring"] = "Recurring";
})(PostPaymentMethodDecryptionMitProfileTypeEnum = exports.PostPaymentMethodDecryptionMitProfileTypeEnum || (exports.PostPaymentMethodDecryptionMitProfileTypeEnum = {}));
var PostPaymentMethodDecryption = /** @class */ (function (_super) {
    __extends(PostPaymentMethodDecryption, _super);
    function PostPaymentMethodDecryption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountID" }),
        __metadata("design:type", String)
    ], PostPaymentMethodDecryption.prototype, "accountID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cardHolderInfo" }),
        __metadata("design:type", PostPaymentMethodDecryptionCardHolderInfo)
    ], PostPaymentMethodDecryption.prototype, "cardHolderInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=integrationType" }),
        __metadata("design:type", String)
    ], PostPaymentMethodDecryption.prototype, "integrationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoiceId" }),
        __metadata("design:type", String)
    ], PostPaymentMethodDecryption.prototype, "invoiceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=merchantID" }),
        __metadata("design:type", String)
    ], PostPaymentMethodDecryption.prototype, "merchantID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mitConsentAgreementSrc" }),
        __metadata("design:type", String)
    ], PostPaymentMethodDecryption.prototype, "mitConsentAgreementSrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mitProfileAction" }),
        __metadata("design:type", String)
    ], PostPaymentMethodDecryption.prototype, "mitProfileAction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mitProfileType" }),
        __metadata("design:type", String)
    ], PostPaymentMethodDecryption.prototype, "mitProfileType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentGateway" }),
        __metadata("design:type", String)
    ], PostPaymentMethodDecryption.prototype, "paymentGateway", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentToken" }),
        __metadata("design:type", Object)
    ], PostPaymentMethodDecryption.prototype, "paymentToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=processPayment" }),
        __metadata("design:type", Boolean)
    ], PostPaymentMethodDecryption.prototype, "processPayment", void 0);
    return PostPaymentMethodDecryption;
}(utils_1.SpeakeasyBase));
exports.PostPaymentMethodDecryption = PostPaymentMethodDecryption;
