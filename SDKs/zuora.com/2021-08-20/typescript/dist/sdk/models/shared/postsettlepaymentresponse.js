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
exports.PostSettlePaymentResponse = exports.PostSettlePaymentResponseTypeEnum = exports.PostSettlePaymentResponseGatewayStateEnum = exports.PostSettlePaymentResponseFinanceInformation = exports.PostSettlePaymentResponseFinanceInformationTransferredToAccountingEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostSettlePaymentResponseFinanceInformationTransferredToAccountingEnum;
(function (PostSettlePaymentResponseFinanceInformationTransferredToAccountingEnum) {
    PostSettlePaymentResponseFinanceInformationTransferredToAccountingEnum["Processing"] = "Processing";
    PostSettlePaymentResponseFinanceInformationTransferredToAccountingEnum["Yes"] = "Yes";
    PostSettlePaymentResponseFinanceInformationTransferredToAccountingEnum["No"] = "No";
    PostSettlePaymentResponseFinanceInformationTransferredToAccountingEnum["Error"] = "Error";
    PostSettlePaymentResponseFinanceInformationTransferredToAccountingEnum["Ignore"] = "Ignore";
})(PostSettlePaymentResponseFinanceInformationTransferredToAccountingEnum = exports.PostSettlePaymentResponseFinanceInformationTransferredToAccountingEnum || (exports.PostSettlePaymentResponseFinanceInformationTransferredToAccountingEnum = {}));
// PostSettlePaymentResponseFinanceInformation
/**
 * Container for the finance information related to the refund.
 *
**/
var PostSettlePaymentResponseFinanceInformation = /** @class */ (function (_super) {
    __extends(PostSettlePaymentResponseFinanceInformation, _super);
    function PostSettlePaymentResponseFinanceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bankAccountAccountingCode" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponseFinanceInformation.prototype, "bankAccountAccountingCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bankAccountAccountingCodeType" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponseFinanceInformation.prototype, "bankAccountAccountingCodeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transferredToAccounting" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponseFinanceInformation.prototype, "transferredToAccounting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unappliedPaymentAccountingCode" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponseFinanceInformation.prototype, "unappliedPaymentAccountingCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unappliedPaymentAccountingCodeType" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponseFinanceInformation.prototype, "unappliedPaymentAccountingCodeType", void 0);
    return PostSettlePaymentResponseFinanceInformation;
}(utils_1.SpeakeasyBase));
exports.PostSettlePaymentResponseFinanceInformation = PostSettlePaymentResponseFinanceInformation;
var PostSettlePaymentResponseGatewayStateEnum;
(function (PostSettlePaymentResponseGatewayStateEnum) {
    PostSettlePaymentResponseGatewayStateEnum["MarkedForSubmission"] = "MarkedForSubmission";
    PostSettlePaymentResponseGatewayStateEnum["Submitted"] = "Submitted";
    PostSettlePaymentResponseGatewayStateEnum["Settled"] = "Settled";
    PostSettlePaymentResponseGatewayStateEnum["NotSubmitted"] = "NotSubmitted";
    PostSettlePaymentResponseGatewayStateEnum["FailedToSettle"] = "FailedToSettle";
})(PostSettlePaymentResponseGatewayStateEnum = exports.PostSettlePaymentResponseGatewayStateEnum || (exports.PostSettlePaymentResponseGatewayStateEnum = {}));
var PostSettlePaymentResponseTypeEnum;
(function (PostSettlePaymentResponseTypeEnum) {
    PostSettlePaymentResponseTypeEnum["External"] = "External";
    PostSettlePaymentResponseTypeEnum["Electronic"] = "Electronic";
})(PostSettlePaymentResponseTypeEnum = exports.PostSettlePaymentResponseTypeEnum || (exports.PostSettlePaymentResponseTypeEnum = {}));
var PostSettlePaymentResponse = /** @class */ (function (_super) {
    __extends(PostSettlePaymentResponse, _super);
    function PostSettlePaymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponse.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], PostSettlePaymentResponse.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appliedAmount" }),
        __metadata("design:type", Number)
    ], PostSettlePaymentResponse.prototype, "appliedAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authTransactionId" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponse.prototype, "authTransactionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bankIdentificationNumber" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponse.prototype, "bankIdentificationNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancelledOn" }),
        __metadata("design:type", Date)
    ], PostSettlePaymentResponse.prototype, "cancelledOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponse.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdById" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponse.prototype, "createdById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdDate" }),
        __metadata("design:type", Date)
    ], PostSettlePaymentResponse.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditBalanceAmount" }),
        __metadata("design:type", Number)
    ], PostSettlePaymentResponse.prototype, "creditBalanceAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponse.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=effectiveDate" }),
        __metadata("design:type", Date)
    ], PostSettlePaymentResponse.prototype, "effectiveDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=financeInformation" }),
        __metadata("design:type", PostSettlePaymentResponseFinanceInformation)
    ], PostSettlePaymentResponse.prototype, "financeInformation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gatewayId" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponse.prototype, "gatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gatewayOrderId" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponse.prototype, "gatewayOrderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gatewayResponse" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponse.prototype, "gatewayResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gatewayResponseCode" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponse.prototype, "gatewayResponseCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gatewayState" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponse.prototype, "gatewayState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponse.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=markedForSubmissionOn" }),
        __metadata("design:type", Date)
    ], PostSettlePaymentResponse.prototype, "markedForSubmissionOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponse.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentMethodId" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponse.prototype, "paymentMethodId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentMethodSnapshotId" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponse.prototype, "paymentMethodSnapshotId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=referenceId" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponse.prototype, "referenceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=refundAmount" }),
        __metadata("design:type", Number)
    ], PostSettlePaymentResponse.prototype, "refundAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=secondPaymentReferenceId" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponse.prototype, "secondPaymentReferenceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settledOn" }),
        __metadata("design:type", Date)
    ], PostSettlePaymentResponse.prototype, "settledOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=softDescriptor" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponse.prototype, "softDescriptor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=softDescriptorPhone" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponse.prototype, "softDescriptorPhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponse.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=submittedOn" }),
        __metadata("design:type", Date)
    ], PostSettlePaymentResponse.prototype, "submittedOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], PostSettlePaymentResponse.prototype, "success", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponse.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unappliedAmount" }),
        __metadata("design:type", Number)
    ], PostSettlePaymentResponse.prototype, "unappliedAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedById" }),
        __metadata("design:type", String)
    ], PostSettlePaymentResponse.prototype, "updatedById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedDate" }),
        __metadata("design:type", Date)
    ], PostSettlePaymentResponse.prototype, "updatedDate", void 0);
    return PostSettlePaymentResponse;
}(utils_1.SpeakeasyBase));
exports.PostSettlePaymentResponse = PostSettlePaymentResponse;
