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
exports.GetJournalRunTransactionType = exports.GetJournalRunTransactionTypeTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetJournalRunTransactionTypeTypeEnum;
(function (GetJournalRunTransactionTypeTypeEnum) {
    GetJournalRunTransactionTypeTypeEnum["InvoiceItem"] = "Invoice Item";
    GetJournalRunTransactionTypeTypeEnum["TaxationItem"] = "Taxation Item";
    GetJournalRunTransactionTypeTypeEnum["InvoiceItemAdjustmentInvoice"] = "Invoice Item Adjustment (Invoice)";
    GetJournalRunTransactionTypeTypeEnum["InvoiceItemAdjustmentTax"] = "Invoice Item Adjustment (Tax)";
    GetJournalRunTransactionTypeTypeEnum["InvoiceAdjustment"] = "Invoice Adjustment";
    GetJournalRunTransactionTypeTypeEnum["ElectronicPayment"] = "Electronic Payment";
    GetJournalRunTransactionTypeTypeEnum["ExternalPayment"] = "External Payment";
    GetJournalRunTransactionTypeTypeEnum["ElectronicRefund"] = "Electronic Refund";
    GetJournalRunTransactionTypeTypeEnum["ExternalRefund"] = "External Refund";
    GetJournalRunTransactionTypeTypeEnum["ElectronicCreditBalancePayment"] = "Electronic Credit Balance Payment";
    GetJournalRunTransactionTypeTypeEnum["ExternalCreditBalancePayment"] = "External Credit Balance Payment";
    GetJournalRunTransactionTypeTypeEnum["ElectronicCreditBalanceRefund"] = "Electronic Credit Balance Refund";
    GetJournalRunTransactionTypeTypeEnum["ExternalCreditBalanceRefund"] = "External Credit Balance Refund";
    GetJournalRunTransactionTypeTypeEnum["CreditBalanceAdjustmentAppliedFromCreditBalance"] = "Credit Balance Adjustment (Applied from Credit Balance)";
    GetJournalRunTransactionTypeTypeEnum["CreditBalanceAdjustmentTransferredToCreditBalance"] = "Credit Balance Adjustment (Transferred to Credit Balance)";
    GetJournalRunTransactionTypeTypeEnum["RevenueEventItem"] = "Revenue Event Item";
    GetJournalRunTransactionTypeTypeEnum["DebitMemoItemCharge"] = "Debit Memo Item (Charge)";
    GetJournalRunTransactionTypeTypeEnum["DebitMemoItemTax"] = "Debit Memo Item (Tax)";
    GetJournalRunTransactionTypeTypeEnum["CreditMemoItemCharge"] = "Credit Memo Item (Charge)";
    GetJournalRunTransactionTypeTypeEnum["CreditMemoItemTax"] = "Credit Memo Item (Tax)";
    GetJournalRunTransactionTypeTypeEnum["CreditMemoApplicationItem"] = "Credit Memo Application Item";
    GetJournalRunTransactionTypeTypeEnum["ElectronicPaymentApplication"] = "Electronic Payment Application";
    GetJournalRunTransactionTypeTypeEnum["ExternalPaymentApplication"] = "External Payment Application";
    GetJournalRunTransactionTypeTypeEnum["ElectronicRefundApplication"] = "Electronic Refund Application";
    GetJournalRunTransactionTypeTypeEnum["ExternalRefundApplication"] = "External Refund Application";
    GetJournalRunTransactionTypeTypeEnum["ElectronicPaymentApplicationItem"] = "Electronic Payment Application Item";
    GetJournalRunTransactionTypeTypeEnum["ExternalPaymentApplicationItem"] = "External Payment Application Item";
    GetJournalRunTransactionTypeTypeEnum["ElectronicRefundApplicationItem"] = "Electronic Refund Application Item";
    GetJournalRunTransactionTypeTypeEnum["ExternalRefundApplicationItem"] = "External Refund Application Item";
})(GetJournalRunTransactionTypeTypeEnum = exports.GetJournalRunTransactionTypeTypeEnum || (exports.GetJournalRunTransactionTypeTypeEnum = {}));
var GetJournalRunTransactionType = /** @class */ (function (_super) {
    __extends(GetJournalRunTransactionType, _super);
    function GetJournalRunTransactionType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetJournalRunTransactionType.prototype, "type", void 0);
    return GetJournalRunTransactionType;
}(utils_1.SpeakeasyBase));
exports.GetJournalRunTransactionType = GetJournalRunTransactionType;
