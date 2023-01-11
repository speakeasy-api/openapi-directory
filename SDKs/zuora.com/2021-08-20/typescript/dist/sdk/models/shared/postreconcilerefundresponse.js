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
exports.PostReconcileRefundResponse = exports.PostReconcileRefundResponseTypeEnum = exports.PostReconcileRefundResponseMethodTypeEnum = exports.PostReconcileRefundResponseGatewayStateEnum = exports.PostReconcileRefundResponseFinanceInformation = exports.PostReconcileRefundResponseFinanceInformationTransferredToAccountingEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostReconcileRefundResponseFinanceInformationTransferredToAccountingEnum;
(function (PostReconcileRefundResponseFinanceInformationTransferredToAccountingEnum) {
    PostReconcileRefundResponseFinanceInformationTransferredToAccountingEnum["Processing"] = "Processing";
    PostReconcileRefundResponseFinanceInformationTransferredToAccountingEnum["Yes"] = "Yes";
    PostReconcileRefundResponseFinanceInformationTransferredToAccountingEnum["No"] = "No";
    PostReconcileRefundResponseFinanceInformationTransferredToAccountingEnum["Error"] = "Error";
    PostReconcileRefundResponseFinanceInformationTransferredToAccountingEnum["Ignore"] = "Ignore";
})(PostReconcileRefundResponseFinanceInformationTransferredToAccountingEnum = exports.PostReconcileRefundResponseFinanceInformationTransferredToAccountingEnum || (exports.PostReconcileRefundResponseFinanceInformationTransferredToAccountingEnum = {}));
// PostReconcileRefundResponseFinanceInformation
/**
 * Container for the finance information related to the refund.
 *
**/
var PostReconcileRefundResponseFinanceInformation = /** @class */ (function (_super) {
    __extends(PostReconcileRefundResponseFinanceInformation, _super);
    function PostReconcileRefundResponseFinanceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bankAccountAccountingCode" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponseFinanceInformation.prototype, "bankAccountAccountingCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bankAccountAccountingCodeType" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponseFinanceInformation.prototype, "bankAccountAccountingCodeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transferredToAccounting" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponseFinanceInformation.prototype, "transferredToAccounting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unappliedPaymentAccountingCode" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponseFinanceInformation.prototype, "unappliedPaymentAccountingCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unappliedPaymentAccountingCodeType" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponseFinanceInformation.prototype, "unappliedPaymentAccountingCodeType", void 0);
    return PostReconcileRefundResponseFinanceInformation;
}(utils_1.SpeakeasyBase));
exports.PostReconcileRefundResponseFinanceInformation = PostReconcileRefundResponseFinanceInformation;
var PostReconcileRefundResponseGatewayStateEnum;
(function (PostReconcileRefundResponseGatewayStateEnum) {
    PostReconcileRefundResponseGatewayStateEnum["Settled"] = "Settled";
    PostReconcileRefundResponseGatewayStateEnum["FailedToSettle"] = "FailedToSettle";
})(PostReconcileRefundResponseGatewayStateEnum = exports.PostReconcileRefundResponseGatewayStateEnum || (exports.PostReconcileRefundResponseGatewayStateEnum = {}));
var PostReconcileRefundResponseMethodTypeEnum;
(function (PostReconcileRefundResponseMethodTypeEnum) {
    PostReconcileRefundResponseMethodTypeEnum["Ach"] = "ACH";
    PostReconcileRefundResponseMethodTypeEnum["Cash"] = "Cash";
    PostReconcileRefundResponseMethodTypeEnum["Check"] = "Check";
    PostReconcileRefundResponseMethodTypeEnum["CreditCard"] = "CreditCard";
    PostReconcileRefundResponseMethodTypeEnum["PayPal"] = "PayPal";
    PostReconcileRefundResponseMethodTypeEnum["WireTransfer"] = "WireTransfer";
    PostReconcileRefundResponseMethodTypeEnum["DebitCard"] = "DebitCard";
    PostReconcileRefundResponseMethodTypeEnum["CreditCardReferenceTransaction"] = "CreditCardReferenceTransaction";
    PostReconcileRefundResponseMethodTypeEnum["BankTransfer"] = "BankTransfer";
    PostReconcileRefundResponseMethodTypeEnum["Other"] = "Other";
})(PostReconcileRefundResponseMethodTypeEnum = exports.PostReconcileRefundResponseMethodTypeEnum || (exports.PostReconcileRefundResponseMethodTypeEnum = {}));
var PostReconcileRefundResponseTypeEnum;
(function (PostReconcileRefundResponseTypeEnum) {
    PostReconcileRefundResponseTypeEnum["External"] = "External";
    PostReconcileRefundResponseTypeEnum["Electronic"] = "Electronic";
})(PostReconcileRefundResponseTypeEnum = exports.PostReconcileRefundResponseTypeEnum || (exports.PostReconcileRefundResponseTypeEnum = {}));
var PostReconcileRefundResponse = /** @class */ (function (_super) {
    __extends(PostReconcileRefundResponse, _super);
    function PostReconcileRefundResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponse.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], PostReconcileRefundResponse.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancelledOn" }),
        __metadata("design:type", Date)
    ], PostReconcileRefundResponse.prototype, "cancelledOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponse.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdById" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponse.prototype, "createdById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdDate" }),
        __metadata("design:type", Date)
    ], PostReconcileRefundResponse.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditMemoId" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponse.prototype, "creditMemoId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=financeInformation" }),
        __metadata("design:type", PostReconcileRefundResponseFinanceInformation)
    ], PostReconcileRefundResponse.prototype, "financeInformation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gatewayId" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponse.prototype, "gatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gatewayReconciliationReason" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponse.prototype, "gatewayReconciliationReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gatewayReconciliationStatus" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponse.prototype, "gatewayReconciliationStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gatewayResponse" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponse.prototype, "gatewayResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gatewayResponseCode" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponse.prototype, "gatewayResponseCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gatewayState" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponse.prototype, "gatewayState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponse.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=markedForSubmissionOn" }),
        __metadata("design:type", Date)
    ], PostReconcileRefundResponse.prototype, "markedForSubmissionOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=methodType" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponse.prototype, "methodType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponse.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentId" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponse.prototype, "paymentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentMethodId" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponse.prototype, "paymentMethodId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentMethodSnapshotId" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponse.prototype, "paymentMethodSnapshotId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payoutId" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponse.prototype, "payoutId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reasonCode" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponse.prototype, "reasonCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=referenceId" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponse.prototype, "referenceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=refundDate" }),
        __metadata("design:type", Date)
    ], PostReconcileRefundResponse.prototype, "refundDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=refundTransactionTime" }),
        __metadata("design:type", Date)
    ], PostReconcileRefundResponse.prototype, "refundTransactionTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=secondRefundReferenceId" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponse.prototype, "secondRefundReferenceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settledOn" }),
        __metadata("design:type", Date)
    ], PostReconcileRefundResponse.prototype, "settledOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=softDescriptor" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponse.prototype, "softDescriptor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=softDescriptorPhone" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponse.prototype, "softDescriptorPhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponse.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=submittedOn" }),
        __metadata("design:type", Date)
    ], PostReconcileRefundResponse.prototype, "submittedOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], PostReconcileRefundResponse.prototype, "success", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponse.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedById" }),
        __metadata("design:type", String)
    ], PostReconcileRefundResponse.prototype, "updatedById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedDate" }),
        __metadata("design:type", Date)
    ], PostReconcileRefundResponse.prototype, "updatedDate", void 0);
    return PostReconcileRefundResponse;
}(utils_1.SpeakeasyBase));
exports.PostReconcileRefundResponse = PostReconcileRefundResponse;
