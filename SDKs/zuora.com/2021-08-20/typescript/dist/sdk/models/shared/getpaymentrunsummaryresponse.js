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
exports.GetPaymentRunSummaryResponse = void 0;
var utils_1 = require("../../../internal/utils");
var getpaymentrunsummarytotalvalues_1 = require("./getpaymentrunsummarytotalvalues");
var GetPaymentRunSummaryResponse = /** @class */ (function (_super) {
    __extends(GetPaymentRunSummaryResponse, _super);
    function GetPaymentRunSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=numberOfCreditBalanceAdjustments" }),
        __metadata("design:type", Number)
    ], GetPaymentRunSummaryResponse.prototype, "numberOfCreditBalanceAdjustments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=numberOfCreditMemos" }),
        __metadata("design:type", Number)
    ], GetPaymentRunSummaryResponse.prototype, "numberOfCreditMemos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=numberOfDebitMemos" }),
        __metadata("design:type", Number)
    ], GetPaymentRunSummaryResponse.prototype, "numberOfDebitMemos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=numberOfErrorInputData" }),
        __metadata("design:type", Number)
    ], GetPaymentRunSummaryResponse.prototype, "numberOfErrorInputData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=numberOfErrors" }),
        __metadata("design:type", Number)
    ], GetPaymentRunSummaryResponse.prototype, "numberOfErrors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=numberOfInputData" }),
        __metadata("design:type", Number)
    ], GetPaymentRunSummaryResponse.prototype, "numberOfInputData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=numberOfInvoices" }),
        __metadata("design:type", Number)
    ], GetPaymentRunSummaryResponse.prototype, "numberOfInvoices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=numberOfPayments" }),
        __metadata("design:type", Number)
    ], GetPaymentRunSummaryResponse.prototype, "numberOfPayments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=numberOfProcessedInputData" }),
        __metadata("design:type", Number)
    ], GetPaymentRunSummaryResponse.prototype, "numberOfProcessedInputData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=numberOfReceivables" }),
        __metadata("design:type", Number)
    ], GetPaymentRunSummaryResponse.prototype, "numberOfReceivables", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=numberOfUnappliedPayments" }),
        __metadata("design:type", Number)
    ], GetPaymentRunSummaryResponse.prototype, "numberOfUnappliedPayments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=numberOfUnprocessedDebitMemos" }),
        __metadata("design:type", Number)
    ], GetPaymentRunSummaryResponse.prototype, "numberOfUnprocessedDebitMemos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=numberOfUnprocessedInvoices" }),
        __metadata("design:type", Number)
    ], GetPaymentRunSummaryResponse.prototype, "numberOfUnprocessedInvoices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=numberOfUnprocessedReceivables" }),
        __metadata("design:type", Number)
    ], GetPaymentRunSummaryResponse.prototype, "numberOfUnprocessedReceivables", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], GetPaymentRunSummaryResponse.prototype, "success", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalValues", elemType: getpaymentrunsummarytotalvalues_1.GetPaymentRunSummaryTotalValues }),
        __metadata("design:type", Array)
    ], GetPaymentRunSummaryResponse.prototype, "totalValues", void 0);
    return GetPaymentRunSummaryResponse;
}(utils_1.SpeakeasyBase));
exports.GetPaymentRunSummaryResponse = GetPaymentRunSummaryResponse;
