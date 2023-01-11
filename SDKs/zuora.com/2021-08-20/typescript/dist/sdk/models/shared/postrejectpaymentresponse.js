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
exports.PostRejectPaymentResponse = exports.PostRejectPaymentResponseTypeEnum = exports.PostRejectPaymentResponseMethodTypeEnum = exports.PostRejectPaymentResponseGatewayStateEnum = exports.PostRejectPaymentResponseFinanceInformation = exports.PostRejectPaymentResponseFinanceInformationTransferredToAccountingEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostRejectPaymentResponseFinanceInformationTransferredToAccountingEnum;
(function (PostRejectPaymentResponseFinanceInformationTransferredToAccountingEnum) {
    PostRejectPaymentResponseFinanceInformationTransferredToAccountingEnum["Processing"] = "Processing";
    PostRejectPaymentResponseFinanceInformationTransferredToAccountingEnum["Yes"] = "Yes";
    PostRejectPaymentResponseFinanceInformationTransferredToAccountingEnum["No"] = "No";
    PostRejectPaymentResponseFinanceInformationTransferredToAccountingEnum["Error"] = "Error";
    PostRejectPaymentResponseFinanceInformationTransferredToAccountingEnum["Ignore"] = "Ignore";
})(PostRejectPaymentResponseFinanceInformationTransferredToAccountingEnum = exports.PostRejectPaymentResponseFinanceInformationTransferredToAccountingEnum || (exports.PostRejectPaymentResponseFinanceInformationTransferredToAccountingEnum = {}));
// PostRejectPaymentResponseFinanceInformation
/**
 * Container for the finance information related to the refund.
 *
**/
var PostRejectPaymentResponseFinanceInformation = /** @class */ (function (_super) {
    __extends(PostRejectPaymentResponseFinanceInformation, _super);
    function PostRejectPaymentResponseFinanceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bankAccountAccountingCode" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponseFinanceInformation.prototype, "bankAccountAccountingCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bankAccountAccountingCodeType" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponseFinanceInformation.prototype, "bankAccountAccountingCodeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transferredToAccounting" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponseFinanceInformation.prototype, "transferredToAccounting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unappliedPaymentAccountingCode" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponseFinanceInformation.prototype, "unappliedPaymentAccountingCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unappliedPaymentAccountingCodeType" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponseFinanceInformation.prototype, "unappliedPaymentAccountingCodeType", void 0);
    return PostRejectPaymentResponseFinanceInformation;
}(utils_1.SpeakeasyBase));
exports.PostRejectPaymentResponseFinanceInformation = PostRejectPaymentResponseFinanceInformation;
var PostRejectPaymentResponseGatewayStateEnum;
(function (PostRejectPaymentResponseGatewayStateEnum) {
    PostRejectPaymentResponseGatewayStateEnum["MarkedForSubmission"] = "MarkedForSubmission";
    PostRejectPaymentResponseGatewayStateEnum["Submitted"] = "Submitted";
    PostRejectPaymentResponseGatewayStateEnum["Settled"] = "Settled";
    PostRejectPaymentResponseGatewayStateEnum["NotSubmitted"] = "NotSubmitted";
    PostRejectPaymentResponseGatewayStateEnum["FailedToSettle"] = "FailedToSettle";
})(PostRejectPaymentResponseGatewayStateEnum = exports.PostRejectPaymentResponseGatewayStateEnum || (exports.PostRejectPaymentResponseGatewayStateEnum = {}));
var PostRejectPaymentResponseMethodTypeEnum;
(function (PostRejectPaymentResponseMethodTypeEnum) {
    PostRejectPaymentResponseMethodTypeEnum["Ach"] = "ACH";
    PostRejectPaymentResponseMethodTypeEnum["Cash"] = "Cash";
    PostRejectPaymentResponseMethodTypeEnum["Check"] = "Check";
    PostRejectPaymentResponseMethodTypeEnum["CreditCard"] = "CreditCard";
    PostRejectPaymentResponseMethodTypeEnum["PayPal"] = "PayPal";
    PostRejectPaymentResponseMethodTypeEnum["WireTransfer"] = "WireTransfer";
    PostRejectPaymentResponseMethodTypeEnum["DebitCard"] = "DebitCard";
    PostRejectPaymentResponseMethodTypeEnum["CreditCardReferenceTransaction"] = "CreditCardReferenceTransaction";
    PostRejectPaymentResponseMethodTypeEnum["BankTransfer"] = "BankTransfer";
    PostRejectPaymentResponseMethodTypeEnum["Other"] = "Other";
})(PostRejectPaymentResponseMethodTypeEnum = exports.PostRejectPaymentResponseMethodTypeEnum || (exports.PostRejectPaymentResponseMethodTypeEnum = {}));
var PostRejectPaymentResponseTypeEnum;
(function (PostRejectPaymentResponseTypeEnum) {
    PostRejectPaymentResponseTypeEnum["External"] = "External";
    PostRejectPaymentResponseTypeEnum["Electronic"] = "Electronic";
})(PostRejectPaymentResponseTypeEnum = exports.PostRejectPaymentResponseTypeEnum || (exports.PostRejectPaymentResponseTypeEnum = {}));
var PostRejectPaymentResponse = /** @class */ (function (_super) {
    __extends(PostRejectPaymentResponse, _super);
    function PostRejectPaymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponse.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], PostRejectPaymentResponse.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancelledOn" }),
        __metadata("design:type", Date)
    ], PostRejectPaymentResponse.prototype, "cancelledOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponse.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdById" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponse.prototype, "createdById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdDate" }),
        __metadata("design:type", Date)
    ], PostRejectPaymentResponse.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditMemoId" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponse.prototype, "creditMemoId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=financeInformation" }),
        __metadata("design:type", PostRejectPaymentResponseFinanceInformation)
    ], PostRejectPaymentResponse.prototype, "financeInformation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gatewayId" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponse.prototype, "gatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gatewayResponse" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponse.prototype, "gatewayResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gatewayResponseCode" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponse.prototype, "gatewayResponseCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gatewayState" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponse.prototype, "gatewayState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponse.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=markedForSubmissionOn" }),
        __metadata("design:type", Date)
    ], PostRejectPaymentResponse.prototype, "markedForSubmissionOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=methodType" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponse.prototype, "methodType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponse.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentId" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponse.prototype, "paymentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentMethodId" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponse.prototype, "paymentMethodId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentMethodSnapshotId" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponse.prototype, "paymentMethodSnapshotId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reasonCode" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponse.prototype, "reasonCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=referenceId" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponse.prototype, "referenceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=refundDate" }),
        __metadata("design:type", Date)
    ], PostRejectPaymentResponse.prototype, "refundDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=refundTransactionTime" }),
        __metadata("design:type", Date)
    ], PostRejectPaymentResponse.prototype, "refundTransactionTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=secondRefundReferenceId" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponse.prototype, "secondRefundReferenceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settledOn" }),
        __metadata("design:type", Date)
    ], PostRejectPaymentResponse.prototype, "settledOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=softDescriptor" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponse.prototype, "softDescriptor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=softDescriptorPhone" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponse.prototype, "softDescriptorPhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponse.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=submittedOn" }),
        __metadata("design:type", Date)
    ], PostRejectPaymentResponse.prototype, "submittedOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], PostRejectPaymentResponse.prototype, "success", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponse.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedById" }),
        __metadata("design:type", String)
    ], PostRejectPaymentResponse.prototype, "updatedById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedDate" }),
        __metadata("design:type", Date)
    ], PostRejectPaymentResponse.prototype, "updatedDate", void 0);
    return PostRejectPaymentResponse;
}(utils_1.SpeakeasyBase));
exports.PostRejectPaymentResponse = PostRejectPaymentResponse;
