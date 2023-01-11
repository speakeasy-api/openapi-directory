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
exports.Invoice = void 0;
var utils_1 = require("../../../internal/utils");
var Invoice = /** @class */ (function (_super) {
    __extends(Invoice, _super);
    function Invoice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AccountId" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AdjustmentAmount" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "adjustmentAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Amount" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AmountWithoutTax" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "amountWithoutTax", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Balance" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "balance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BillRunId" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "billRunId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Body" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Comments" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedById" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "createdById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedDate" }),
        __metadata("design:type", Date)
    ], Invoice.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreditBalanceAdjustmentAmount" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "creditBalanceAdjustmentAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DueDate" }),
        __metadata("design:type", Date)
    ], Invoice.prototype, "dueDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IncludesOneTime" }),
        __metadata("design:type", Boolean)
    ], Invoice.prototype, "includesOneTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IncludesRecurring" }),
        __metadata("design:type", Boolean)
    ], Invoice.prototype, "includesRecurring", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IncludesUsage" }),
        __metadata("design:type", Boolean)
    ], Invoice.prototype, "includesUsage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InvoiceDate" }),
        __metadata("design:type", Date)
    ], Invoice.prototype, "invoiceDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InvoiceNumber" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "invoiceNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LastEmailSentDate" }),
        __metadata("design:type", Date)
    ], Invoice.prototype, "lastEmailSentDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PaymentAmount" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "paymentAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PostedBy" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "postedBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PostedDate" }),
        __metadata("design:type", Date)
    ], Invoice.prototype, "postedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RefundAmount" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "refundAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RegenerateInvoicePDF" }),
        __metadata("design:type", Boolean)
    ], Invoice.prototype, "regenerateInvoicePDF", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TargetDate" }),
        __metadata("design:type", Date)
    ], Invoice.prototype, "targetDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TaxAmount" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "taxAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TaxExemptAmount" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "taxExemptAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TransferredToAccounting" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "transferredToAccounting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpdatedById" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "updatedById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpdatedDate" }),
        __metadata("design:type", Date)
    ], Invoice.prototype, "updatedDate", void 0);
    return Invoice;
}(utils_1.SpeakeasyBase));
exports.Invoice = Invoice;
