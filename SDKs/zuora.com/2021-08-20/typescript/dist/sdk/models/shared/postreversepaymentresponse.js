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
exports.PostReversePaymentResponse = exports.PostReversePaymentResponseTypeEnum = exports.PostReversePaymentResponseMethodTypeEnum = exports.PostReversePaymentResponseGatewayStateEnum = exports.PostReversePaymentResponseFinanceInformation = exports.PostReversePaymentResponseFinanceInformationTransferredToAccountingEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostReversePaymentResponseFinanceInformationTransferredToAccountingEnum;
(function (PostReversePaymentResponseFinanceInformationTransferredToAccountingEnum) {
    PostReversePaymentResponseFinanceInformationTransferredToAccountingEnum["Processing"] = "Processing";
    PostReversePaymentResponseFinanceInformationTransferredToAccountingEnum["Yes"] = "Yes";
    PostReversePaymentResponseFinanceInformationTransferredToAccountingEnum["No"] = "No";
    PostReversePaymentResponseFinanceInformationTransferredToAccountingEnum["Error"] = "Error";
    PostReversePaymentResponseFinanceInformationTransferredToAccountingEnum["Ignore"] = "Ignore";
})(PostReversePaymentResponseFinanceInformationTransferredToAccountingEnum = exports.PostReversePaymentResponseFinanceInformationTransferredToAccountingEnum || (exports.PostReversePaymentResponseFinanceInformationTransferredToAccountingEnum = {}));
// PostReversePaymentResponseFinanceInformation
/**
 * Container for the finance information related to the refund.
 *
**/
var PostReversePaymentResponseFinanceInformation = /** @class */ (function (_super) {
    __extends(PostReversePaymentResponseFinanceInformation, _super);
    function PostReversePaymentResponseFinanceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bankAccountAccountingCode" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponseFinanceInformation.prototype, "bankAccountAccountingCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bankAccountAccountingCodeType" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponseFinanceInformation.prototype, "bankAccountAccountingCodeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transferredToAccounting" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponseFinanceInformation.prototype, "transferredToAccounting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unappliedPaymentAccountingCode" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponseFinanceInformation.prototype, "unappliedPaymentAccountingCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unappliedPaymentAccountingCodeType" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponseFinanceInformation.prototype, "unappliedPaymentAccountingCodeType", void 0);
    return PostReversePaymentResponseFinanceInformation;
}(utils_1.SpeakeasyBase));
exports.PostReversePaymentResponseFinanceInformation = PostReversePaymentResponseFinanceInformation;
var PostReversePaymentResponseGatewayStateEnum;
(function (PostReversePaymentResponseGatewayStateEnum) {
    PostReversePaymentResponseGatewayStateEnum["MarkedForSubmission"] = "MarkedForSubmission";
    PostReversePaymentResponseGatewayStateEnum["Submitted"] = "Submitted";
    PostReversePaymentResponseGatewayStateEnum["Settled"] = "Settled";
    PostReversePaymentResponseGatewayStateEnum["NotSubmitted"] = "NotSubmitted";
    PostReversePaymentResponseGatewayStateEnum["FailedToSettle"] = "FailedToSettle";
})(PostReversePaymentResponseGatewayStateEnum = exports.PostReversePaymentResponseGatewayStateEnum || (exports.PostReversePaymentResponseGatewayStateEnum = {}));
var PostReversePaymentResponseMethodTypeEnum;
(function (PostReversePaymentResponseMethodTypeEnum) {
    PostReversePaymentResponseMethodTypeEnum["Ach"] = "ACH";
    PostReversePaymentResponseMethodTypeEnum["Cash"] = "Cash";
    PostReversePaymentResponseMethodTypeEnum["Check"] = "Check";
    PostReversePaymentResponseMethodTypeEnum["CreditCard"] = "CreditCard";
    PostReversePaymentResponseMethodTypeEnum["PayPal"] = "PayPal";
    PostReversePaymentResponseMethodTypeEnum["WireTransfer"] = "WireTransfer";
    PostReversePaymentResponseMethodTypeEnum["DebitCard"] = "DebitCard";
    PostReversePaymentResponseMethodTypeEnum["CreditCardReferenceTransaction"] = "CreditCardReferenceTransaction";
    PostReversePaymentResponseMethodTypeEnum["BankTransfer"] = "BankTransfer";
    PostReversePaymentResponseMethodTypeEnum["Other"] = "Other";
})(PostReversePaymentResponseMethodTypeEnum = exports.PostReversePaymentResponseMethodTypeEnum || (exports.PostReversePaymentResponseMethodTypeEnum = {}));
var PostReversePaymentResponseTypeEnum;
(function (PostReversePaymentResponseTypeEnum) {
    PostReversePaymentResponseTypeEnum["External"] = "External";
    PostReversePaymentResponseTypeEnum["Electronic"] = "Electronic";
})(PostReversePaymentResponseTypeEnum = exports.PostReversePaymentResponseTypeEnum || (exports.PostReversePaymentResponseTypeEnum = {}));
var PostReversePaymentResponse = /** @class */ (function (_super) {
    __extends(PostReversePaymentResponse, _super);
    function PostReversePaymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponse.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], PostReversePaymentResponse.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancelledOn" }),
        __metadata("design:type", Date)
    ], PostReversePaymentResponse.prototype, "cancelledOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponse.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdById" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponse.prototype, "createdById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdDate" }),
        __metadata("design:type", Date)
    ], PostReversePaymentResponse.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditMemoId" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponse.prototype, "creditMemoId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=financeInformation" }),
        __metadata("design:type", PostReversePaymentResponseFinanceInformation)
    ], PostReversePaymentResponse.prototype, "financeInformation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gatewayId" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponse.prototype, "gatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gatewayResponse" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponse.prototype, "gatewayResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gatewayResponseCode" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponse.prototype, "gatewayResponseCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gatewayState" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponse.prototype, "gatewayState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponse.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=markedForSubmissionOn" }),
        __metadata("design:type", Date)
    ], PostReversePaymentResponse.prototype, "markedForSubmissionOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=methodType" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponse.prototype, "methodType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponse.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentId" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponse.prototype, "paymentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentMethodId" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponse.prototype, "paymentMethodId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentMethodSnapshotId" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponse.prototype, "paymentMethodSnapshotId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reasonCode" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponse.prototype, "reasonCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=referenceId" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponse.prototype, "referenceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=refundDate" }),
        __metadata("design:type", Date)
    ], PostReversePaymentResponse.prototype, "refundDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=refundTransactionTime" }),
        __metadata("design:type", Date)
    ], PostReversePaymentResponse.prototype, "refundTransactionTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=secondRefundReferenceId" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponse.prototype, "secondRefundReferenceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settledOn" }),
        __metadata("design:type", Date)
    ], PostReversePaymentResponse.prototype, "settledOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=softDescriptor" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponse.prototype, "softDescriptor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=softDescriptorPhone" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponse.prototype, "softDescriptorPhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponse.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=submittedOn" }),
        __metadata("design:type", Date)
    ], PostReversePaymentResponse.prototype, "submittedOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], PostReversePaymentResponse.prototype, "success", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponse.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedById" }),
        __metadata("design:type", String)
    ], PostReversePaymentResponse.prototype, "updatedById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedDate" }),
        __metadata("design:type", Date)
    ], PostReversePaymentResponse.prototype, "updatedDate", void 0);
    return PostReversePaymentResponse;
}(utils_1.SpeakeasyBase));
exports.PostReversePaymentResponse = PostReversePaymentResponse;
