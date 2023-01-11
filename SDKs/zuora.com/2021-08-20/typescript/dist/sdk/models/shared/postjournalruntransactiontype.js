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
exports.PostJournalRunTransactionType = exports.PostJournalRunTransactionTypeTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostJournalRunTransactionTypeTypeEnum;
(function (PostJournalRunTransactionTypeTypeEnum) {
    PostJournalRunTransactionTypeTypeEnum["InvoiceItem"] = "Invoice Item";
    PostJournalRunTransactionTypeTypeEnum["TaxationItem"] = "Taxation Item";
    PostJournalRunTransactionTypeTypeEnum["InvoiceItemAdjustmentInvoice"] = "Invoice Item Adjustment (Invoice)";
    PostJournalRunTransactionTypeTypeEnum["InvoiceItemAdjustmentTax"] = "Invoice Item Adjustment (Tax)";
    PostJournalRunTransactionTypeTypeEnum["InvoiceAdjustment"] = "Invoice Adjustment";
    PostJournalRunTransactionTypeTypeEnum["ElectronicPayment"] = "Electronic Payment";
    PostJournalRunTransactionTypeTypeEnum["ExternalPayment"] = "External Payment";
    PostJournalRunTransactionTypeTypeEnum["ElectronicRefund"] = "Electronic Refund";
    PostJournalRunTransactionTypeTypeEnum["ExternalRefund"] = "External Refund";
    PostJournalRunTransactionTypeTypeEnum["ElectronicCreditBalancePayment"] = "Electronic Credit Balance Payment";
    PostJournalRunTransactionTypeTypeEnum["ExternalCreditBalancePayment"] = "External Credit Balance Payment";
    PostJournalRunTransactionTypeTypeEnum["ElectronicCreditBalanceRefund"] = "Electronic Credit Balance Refund";
    PostJournalRunTransactionTypeTypeEnum["ExternalCreditBalanceRefund"] = "External Credit Balance Refund";
    PostJournalRunTransactionTypeTypeEnum["CreditBalanceAdjustmentAppliedFromCreditBalance"] = "Credit Balance Adjustment (Applied from Credit Balance)";
    PostJournalRunTransactionTypeTypeEnum["CreditBalanceAdjustmentTransferredToCreditBalance"] = "Credit Balance Adjustment (Transferred to Credit Balance)";
    PostJournalRunTransactionTypeTypeEnum["RevenueEventItem"] = "Revenue Event Item";
    PostJournalRunTransactionTypeTypeEnum["DebitMemoItemCharge"] = "Debit Memo Item (Charge)";
    PostJournalRunTransactionTypeTypeEnum["DebitMemoItemTax"] = "Debit Memo Item (Tax)";
    PostJournalRunTransactionTypeTypeEnum["CreditMemoItemCharge"] = "Credit Memo Item (Charge)";
    PostJournalRunTransactionTypeTypeEnum["CreditMemoItemTax"] = "Credit Memo Item (Tax)";
    PostJournalRunTransactionTypeTypeEnum["CreditMemoApplicationItem"] = "Credit Memo Application Item";
    PostJournalRunTransactionTypeTypeEnum["ElectronicPaymentApplication"] = "Electronic Payment Application";
    PostJournalRunTransactionTypeTypeEnum["ExternalPaymentApplication"] = "External Payment Application";
    PostJournalRunTransactionTypeTypeEnum["ElectronicRefundApplication"] = "Electronic Refund Application";
    PostJournalRunTransactionTypeTypeEnum["ExternalRefundApplication"] = "External Refund Application";
    PostJournalRunTransactionTypeTypeEnum["ElectronicPaymentApplicationItem"] = "Electronic Payment Application Item";
    PostJournalRunTransactionTypeTypeEnum["ExternalPaymentApplicationItem"] = "External Payment Application Item";
    PostJournalRunTransactionTypeTypeEnum["ElectronicRefundApplicationItem"] = "Electronic Refund Application Item";
    PostJournalRunTransactionTypeTypeEnum["ExternalRefundApplicationItem"] = "External Refund Application Item";
})(PostJournalRunTransactionTypeTypeEnum = exports.PostJournalRunTransactionTypeTypeEnum || (exports.PostJournalRunTransactionTypeTypeEnum = {}));
var PostJournalRunTransactionType = /** @class */ (function (_super) {
    __extends(PostJournalRunTransactionType, _super);
    function PostJournalRunTransactionType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostJournalRunTransactionType.prototype, "type", void 0);
    return PostJournalRunTransactionType;
}(utils_1.SpeakeasyBase));
exports.PostJournalRunTransactionType = PostJournalRunTransactionType;
