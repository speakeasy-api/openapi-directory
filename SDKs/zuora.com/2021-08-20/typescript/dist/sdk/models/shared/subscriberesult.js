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
exports.SubscribeResult = exports.SubscribeResultInvoiceResult = exports.SubscribeResultInvoiceResultInvoice = exports.SubscribeResultCreditMemoResult = exports.SubscribeResultCreditMemoResultCreditMemo = exports.SubscribeResultChargeMetricsData = void 0;
var utils_1 = require("../../../internal/utils");
var newchargemetrics_1 = require("./newchargemetrics");
var actionsubscribecreditmemodata_1 = require("./actionsubscribecreditmemodata");
var actionserrorresponse_1 = require("./actionserrorresponse");
var actionsubscribeinvoicedata_1 = require("./actionsubscribeinvoicedata");
var SubscribeResultChargeMetricsData = /** @class */ (function (_super) {
    __extends(SubscribeResultChargeMetricsData, _super);
    function SubscribeResultChargeMetricsData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ChargeMetrics", elemType: newchargemetrics_1.NewChargeMetrics }),
        __metadata("design:type", Array)
    ], SubscribeResultChargeMetricsData.prototype, "chargeMetrics", void 0);
    return SubscribeResultChargeMetricsData;
}(utils_1.SpeakeasyBase));
exports.SubscribeResultChargeMetricsData = SubscribeResultChargeMetricsData;
var SubscribeResultCreditMemoResultCreditMemo = /** @class */ (function (_super) {
    __extends(SubscribeResultCreditMemoResultCreditMemo, _super);
    function SubscribeResultCreditMemoResultCreditMemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditMemoNumber" }),
        __metadata("design:type", String)
    ], SubscribeResultCreditMemoResultCreditMemo.prototype, "creditMemoNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], SubscribeResultCreditMemoResultCreditMemo.prototype, "id", void 0);
    return SubscribeResultCreditMemoResultCreditMemo;
}(utils_1.SpeakeasyBase));
exports.SubscribeResultCreditMemoResultCreditMemo = SubscribeResultCreditMemoResultCreditMemo;
// SubscribeResultCreditMemoResult
/**
 * The result of the credit memo.
 *
 * **Note**: This field is only available if you have the Invoice Settlement feature enabled and set the `X-Zuora-WSDL-Version` request header to `107` or later.
 *
**/
var SubscribeResultCreditMemoResult = /** @class */ (function (_super) {
    __extends(SubscribeResultCreditMemoResult, _super);
    function SubscribeResultCreditMemoResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditMemo", elemType: SubscribeResultCreditMemoResultCreditMemo }),
        __metadata("design:type", Array)
    ], SubscribeResultCreditMemoResult.prototype, "creditMemo", void 0);
    return SubscribeResultCreditMemoResult;
}(utils_1.SpeakeasyBase));
exports.SubscribeResultCreditMemoResult = SubscribeResultCreditMemoResult;
var SubscribeResultInvoiceResultInvoice = /** @class */ (function (_super) {
    __extends(SubscribeResultInvoiceResultInvoice, _super);
    function SubscribeResultInvoiceResultInvoice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], SubscribeResultInvoiceResultInvoice.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InvoiceNumber" }),
        __metadata("design:type", String)
    ], SubscribeResultInvoiceResultInvoice.prototype, "invoiceNumber", void 0);
    return SubscribeResultInvoiceResultInvoice;
}(utils_1.SpeakeasyBase));
exports.SubscribeResultInvoiceResultInvoice = SubscribeResultInvoiceResultInvoice;
var SubscribeResultInvoiceResult = /** @class */ (function (_super) {
    __extends(SubscribeResultInvoiceResult, _super);
    function SubscribeResultInvoiceResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Invoice", elemType: SubscribeResultInvoiceResultInvoice }),
        __metadata("design:type", Array)
    ], SubscribeResultInvoiceResult.prototype, "invoice", void 0);
    return SubscribeResultInvoiceResult;
}(utils_1.SpeakeasyBase));
exports.SubscribeResultInvoiceResult = SubscribeResultInvoiceResult;
var SubscribeResult = /** @class */ (function (_super) {
    __extends(SubscribeResult, _super);
    function SubscribeResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AccountId" }),
        __metadata("design:type", String)
    ], SubscribeResult.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AccountNumber" }),
        __metadata("design:type", String)
    ], SubscribeResult.prototype, "accountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ChargeMetricsData" }),
        __metadata("design:type", SubscribeResultChargeMetricsData)
    ], SubscribeResult.prototype, "chargeMetricsData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditMemoData", elemType: actionsubscribecreditmemodata_1.ActionSubscribeCreditMemoData }),
        __metadata("design:type", Array)
    ], SubscribeResult.prototype, "creditMemoData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditMemoId" }),
        __metadata("design:type", String)
    ], SubscribeResult.prototype, "creditMemoId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditMemoNumber" }),
        __metadata("design:type", String)
    ], SubscribeResult.prototype, "creditMemoNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditMemoResult" }),
        __metadata("design:type", SubscribeResultCreditMemoResult)
    ], SubscribeResult.prototype, "creditMemoResult", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Errors", elemType: actionserrorresponse_1.ActionsErrorResponse }),
        __metadata("design:type", Array)
    ], SubscribeResult.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=GatewayResponse" }),
        __metadata("design:type", String)
    ], SubscribeResult.prototype, "gatewayResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=GatewayResponseCode" }),
        __metadata("design:type", String)
    ], SubscribeResult.prototype, "gatewayResponseCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InvoiceData", elemType: actionsubscribeinvoicedata_1.ActionSubscribeInvoiceData }),
        __metadata("design:type", Array)
    ], SubscribeResult.prototype, "invoiceData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InvoiceId" }),
        __metadata("design:type", String)
    ], SubscribeResult.prototype, "invoiceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InvoiceNumber" }),
        __metadata("design:type", String)
    ], SubscribeResult.prototype, "invoiceNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InvoiceResult" }),
        __metadata("design:type", SubscribeResultInvoiceResult)
    ], SubscribeResult.prototype, "invoiceResult", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaymentId" }),
        __metadata("design:type", String)
    ], SubscribeResult.prototype, "paymentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaymentTransactionNumber" }),
        __metadata("design:type", String)
    ], SubscribeResult.prototype, "paymentTransactionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SubscriptionId" }),
        __metadata("design:type", String)
    ], SubscribeResult.prototype, "subscriptionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SubscriptionNumber" }),
        __metadata("design:type", String)
    ], SubscribeResult.prototype, "subscriptionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Success" }),
        __metadata("design:type", Boolean)
    ], SubscribeResult.prototype, "success", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TotalMrr" }),
        __metadata("design:type", Number)
    ], SubscribeResult.prototype, "totalMrr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TotalTcv" }),
        __metadata("design:type", Number)
    ], SubscribeResult.prototype, "totalTcv", void 0);
    return SubscribeResult;
}(utils_1.SpeakeasyBase));
exports.SubscribeResult = SubscribeResult;
