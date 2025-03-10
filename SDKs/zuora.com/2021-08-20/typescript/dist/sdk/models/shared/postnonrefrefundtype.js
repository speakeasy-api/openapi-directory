"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.PostNonRefRefundType = exports.PostNonRefRefundTypeTypeEnum = exports.PostNonRefRefundTypeMethodTypeEnum = exports.PostNonRefRefundTypeGatewayOptions = exports.PostNonRefRefundTypeFinanceInformation = exports.PostNonRefRefundTypeFinanceInformationTransferredToAccountingEnum = void 0;
var utils_1 = require("../../../internal/utils");
var refundcreditmemoitemtype_1 = require("./refundcreditmemoitemtype");
var class_transformer_1 = require("class-transformer");
/**
 * Whether the refund was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.
 *
 * @remarks
 *
 */
var PostNonRefRefundTypeFinanceInformationTransferredToAccountingEnum;
(function (PostNonRefRefundTypeFinanceInformationTransferredToAccountingEnum) {
    PostNonRefRefundTypeFinanceInformationTransferredToAccountingEnum["Processing"] = "Processing";
    PostNonRefRefundTypeFinanceInformationTransferredToAccountingEnum["Yes"] = "Yes";
    PostNonRefRefundTypeFinanceInformationTransferredToAccountingEnum["No"] = "No";
    PostNonRefRefundTypeFinanceInformationTransferredToAccountingEnum["Error"] = "Error";
    PostNonRefRefundTypeFinanceInformationTransferredToAccountingEnum["Ignore"] = "Ignore";
})(PostNonRefRefundTypeFinanceInformationTransferredToAccountingEnum = exports.PostNonRefRefundTypeFinanceInformationTransferredToAccountingEnum || (exports.PostNonRefRefundTypeFinanceInformationTransferredToAccountingEnum = {}));
/**
 * Container for the finance information related to the refund.
 *
 * @remarks
 *
 */
var PostNonRefRefundTypeFinanceInformation = /** @class */ (function (_super) {
    __extends(PostNonRefRefundTypeFinanceInformation, _super);
    function PostNonRefRefundTypeFinanceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "bankAccountAccountingCode" }),
        __metadata("design:type", String)
    ], PostNonRefRefundTypeFinanceInformation.prototype, "bankAccountAccountingCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "onAccountAccountingCode" }),
        __metadata("design:type", String)
    ], PostNonRefRefundTypeFinanceInformation.prototype, "onAccountAccountingCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "transferredToAccounting" }),
        __metadata("design:type", String)
    ], PostNonRefRefundTypeFinanceInformation.prototype, "transferredToAccounting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "unappliedPaymentAccountingCode" }),
        __metadata("design:type", String)
    ], PostNonRefRefundTypeFinanceInformation.prototype, "unappliedPaymentAccountingCode", void 0);
    return PostNonRefRefundTypeFinanceInformation;
}(utils_1.SpeakeasyBase));
exports.PostNonRefRefundTypeFinanceInformation = PostNonRefRefundTypeFinanceInformation;
/**
 * The field used to pass gateway-specific parameters and parameter values.
 *
 * @remarks
 *
 */
var PostNonRefRefundTypeGatewayOptions = /** @class */ (function (_super) {
    __extends(PostNonRefRefundTypeGatewayOptions, _super);
    function PostNonRefRefundTypeGatewayOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "key" }),
        __metadata("design:type", String)
    ], PostNonRefRefundTypeGatewayOptions.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "value" }),
        __metadata("design:type", String)
    ], PostNonRefRefundTypeGatewayOptions.prototype, "value", void 0);
    return PostNonRefRefundTypeGatewayOptions;
}(utils_1.SpeakeasyBase));
exports.PostNonRefRefundTypeGatewayOptions = PostNonRefRefundTypeGatewayOptions;
/**
 * How an external refund was issued to a customer. This field is required for an external refund and must be left empty for an electronic refund. You can issue an external refund on a credit memo.
 *
 * @remarks
 *
 */
var PostNonRefRefundTypeMethodTypeEnum;
(function (PostNonRefRefundTypeMethodTypeEnum) {
    PostNonRefRefundTypeMethodTypeEnum["Ach"] = "ACH";
    PostNonRefRefundTypeMethodTypeEnum["Cash"] = "Cash";
    PostNonRefRefundTypeMethodTypeEnum["Check"] = "Check";
    PostNonRefRefundTypeMethodTypeEnum["CreditCard"] = "CreditCard";
    PostNonRefRefundTypeMethodTypeEnum["PayPal"] = "PayPal";
    PostNonRefRefundTypeMethodTypeEnum["WireTransfer"] = "WireTransfer";
    PostNonRefRefundTypeMethodTypeEnum["DebitCard"] = "DebitCard";
    PostNonRefRefundTypeMethodTypeEnum["CreditCardReferenceTransaction"] = "CreditCardReferenceTransaction";
    PostNonRefRefundTypeMethodTypeEnum["BankTransfer"] = "BankTransfer";
    PostNonRefRefundTypeMethodTypeEnum["Other"] = "Other";
})(PostNonRefRefundTypeMethodTypeEnum = exports.PostNonRefRefundTypeMethodTypeEnum || (exports.PostNonRefRefundTypeMethodTypeEnum = {}));
/**
 * The type of the refund.
 *
 * @remarks
 *
 */
var PostNonRefRefundTypeTypeEnum;
(function (PostNonRefRefundTypeTypeEnum) {
    PostNonRefRefundTypeTypeEnum["External"] = "External";
    PostNonRefRefundTypeTypeEnum["Electronic"] = "Electronic";
})(PostNonRefRefundTypeTypeEnum = exports.PostNonRefRefundTypeTypeEnum || (exports.PostNonRefRefundTypeTypeEnum = {}));
/**
 * Container for custom fields of a Refund object.
 *
 * @remarks
 *
 */
var PostNonRefRefundType = /** @class */ (function (_super) {
    __extends(PostNonRefRefundType, _super);
    function PostNonRefRefundType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "IntegrationId__NS" }),
        __metadata("design:type", String)
    ], PostNonRefRefundType.prototype, "integrationIdNS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "IntegrationStatus__NS" }),
        __metadata("design:type", String)
    ], PostNonRefRefundType.prototype, "integrationStatusNS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Origin__NS" }),
        __metadata("design:type", String)
    ], PostNonRefRefundType.prototype, "originNS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "SyncDate__NS" }),
        __metadata("design:type", String)
    ], PostNonRefRefundType.prototype, "syncDateNS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "SynctoNetSuite__NS" }),
        __metadata("design:type", String)
    ], PostNonRefRefundType.prototype, "synctoNetSuiteNS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "comment" }),
        __metadata("design:type", String)
    ], PostNonRefRefundType.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "financeInformation" }),
        (0, class_transformer_1.Type)(function () { return PostNonRefRefundTypeFinanceInformation; }),
        __metadata("design:type", PostNonRefRefundTypeFinanceInformation)
    ], PostNonRefRefundType.prototype, "financeInformation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "gatewayId" }),
        __metadata("design:type", String)
    ], PostNonRefRefundType.prototype, "gatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "gatewayOptions" }),
        (0, class_transformer_1.Type)(function () { return PostNonRefRefundTypeGatewayOptions; }),
        __metadata("design:type", PostNonRefRefundTypeGatewayOptions)
    ], PostNonRefRefundType.prototype, "gatewayOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: refundcreditmemoitemtype_1.RefundCreditMemoItemType }),
        (0, class_transformer_1.Expose)({ name: "items" }),
        (0, class_transformer_1.Type)(function () { return refundcreditmemoitemtype_1.RefundCreditMemoItemType; }),
        __metadata("design:type", Array)
    ], PostNonRefRefundType.prototype, "items", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "methodType" }),
        __metadata("design:type", String)
    ], PostNonRefRefundType.prototype, "methodType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "paymentMethodId" }),
        __metadata("design:type", String)
    ], PostNonRefRefundType.prototype, "paymentMethodId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "reasonCode" }),
        __metadata("design:type", String)
    ], PostNonRefRefundType.prototype, "reasonCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "referenceId" }),
        __metadata("design:type", String)
    ], PostNonRefRefundType.prototype, "referenceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "refundDate" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], PostNonRefRefundType.prototype, "refundDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "secondRefundReferenceId" }),
        __metadata("design:type", String)
    ], PostNonRefRefundType.prototype, "secondRefundReferenceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "softDescriptor" }),
        __metadata("design:type", String)
    ], PostNonRefRefundType.prototype, "softDescriptor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "softDescriptorPhone" }),
        __metadata("design:type", String)
    ], PostNonRefRefundType.prototype, "softDescriptorPhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "totalAmount" }),
        __metadata("design:type", Number)
    ], PostNonRefRefundType.prototype, "totalAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type" }),
        __metadata("design:type", String)
    ], PostNonRefRefundType.prototype, "type", void 0);
    return PostNonRefRefundType;
}(utils_1.SpeakeasyBase));
exports.PostNonRefRefundType = PostNonRefRefundType;
