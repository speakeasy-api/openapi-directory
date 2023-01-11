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
exports.AmendResult = void 0;
var utils_1 = require("../../../internal/utils");
var chargemetricsdata_1 = require("./chargemetricsdata");
var actionamendcreditmemodata_1 = require("./actionamendcreditmemodata");
var actionserrorresponse_1 = require("./actionserrorresponse");
var actionamendinvoicedata_1 = require("./actionamendinvoicedata");
var AmendResult = /** @class */ (function (_super) {
    __extends(AmendResult, _super);
    function AmendResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AmendmentIds" }),
        __metadata("design:type", Array)
    ], AmendResult.prototype, "amendmentIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ChargeMetricsData" }),
        __metadata("design:type", chargemetricsdata_1.ChargeMetricsData)
    ], AmendResult.prototype, "chargeMetricsData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditMemoDatas", elemType: actionamendcreditmemodata_1.ActionAmendCreditMemoData }),
        __metadata("design:type", Array)
    ], AmendResult.prototype, "creditMemoDatas", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditMemoId" }),
        __metadata("design:type", String)
    ], AmendResult.prototype, "creditMemoId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Errors", elemType: actionserrorresponse_1.ActionsErrorResponse }),
        __metadata("design:type", Array)
    ], AmendResult.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=GatewayResponse" }),
        __metadata("design:type", String)
    ], AmendResult.prototype, "gatewayResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=GatewayResponseCode" }),
        __metadata("design:type", String)
    ], AmendResult.prototype, "gatewayResponseCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InvoiceDatas", elemType: actionamendinvoicedata_1.ActionAmendInvoiceData }),
        __metadata("design:type", Array)
    ], AmendResult.prototype, "invoiceDatas", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InvoiceId" }),
        __metadata("design:type", String)
    ], AmendResult.prototype, "invoiceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaymentId" }),
        __metadata("design:type", String)
    ], AmendResult.prototype, "paymentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaymentTransactionNumber" }),
        __metadata("design:type", String)
    ], AmendResult.prototype, "paymentTransactionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SubscriptionId" }),
        __metadata("design:type", String)
    ], AmendResult.prototype, "subscriptionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Success" }),
        __metadata("design:type", Boolean)
    ], AmendResult.prototype, "success", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TotalDeltaMrr" }),
        __metadata("design:type", Number)
    ], AmendResult.prototype, "totalDeltaMrr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TotalDeltaTcv" }),
        __metadata("design:type", Number)
    ], AmendResult.prototype, "totalDeltaTcv", void 0);
    return AmendResult;
}(utils_1.SpeakeasyBase));
exports.AmendResult = AmendResult;
