import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Transaction type. Invoice Adjustment is deprecated on Production. Zuora recommends that you use the Invoice Item Adjustment instead.
 *
 * @remarks
 *
 * If you enable the Invoice Settlement feature, Debit Memo Item, Credit Memo Item, and Credit Memo Application Item are available, Payment and Refund will be replaced by Payment Application and Refund Application.
 *
 * If you enable both the Invoice Settlement feature and the Invoice Item Settlement feature, Payment and Refund will be replaced by Payment Application Item and Refund Application Item.
 *
 */
export declare enum GETJournalRunTransactionTypeTypeEnum {
    InvoiceItem = "Invoice Item",
    TaxationItem = "Taxation Item",
    InvoiceItemAdjustmentInvoice = "Invoice Item Adjustment (Invoice)",
    InvoiceItemAdjustmentTax = "Invoice Item Adjustment (Tax)",
    InvoiceAdjustment = "Invoice Adjustment",
    ElectronicPayment = "Electronic Payment",
    ExternalPayment = "External Payment",
    ElectronicRefund = "Electronic Refund",
    ExternalRefund = "External Refund",
    ElectronicCreditBalancePayment = "Electronic Credit Balance Payment",
    ExternalCreditBalancePayment = "External Credit Balance Payment",
    ElectronicCreditBalanceRefund = "Electronic Credit Balance Refund",
    ExternalCreditBalanceRefund = "External Credit Balance Refund",
    CreditBalanceAdjustmentAppliedFromCreditBalance = "Credit Balance Adjustment (Applied from Credit Balance)",
    CreditBalanceAdjustmentTransferredToCreditBalance = "Credit Balance Adjustment (Transferred to Credit Balance)",
    RevenueEventItem = "Revenue Event Item",
    DebitMemoItemCharge = "Debit Memo Item (Charge)",
    DebitMemoItemTax = "Debit Memo Item (Tax)",
    CreditMemoItemCharge = "Credit Memo Item (Charge)",
    CreditMemoItemTax = "Credit Memo Item (Tax)",
    CreditMemoApplicationItem = "Credit Memo Application Item",
    ElectronicPaymentApplication = "Electronic Payment Application",
    ExternalPaymentApplication = "External Payment Application",
    ElectronicRefundApplication = "Electronic Refund Application",
    ExternalRefundApplication = "External Refund Application",
    ElectronicPaymentApplicationItem = "Electronic Payment Application Item",
    ExternalPaymentApplicationItem = "External Payment Application Item",
    ElectronicRefundApplicationItem = "Electronic Refund Application Item",
    ExternalRefundApplicationItem = "External Refund Application Item"
}
export declare class GETJournalRunTransactionType extends SpeakeasyBase {
    /**
     * Transaction type. Invoice Adjustment is deprecated on Production. Zuora recommends that you use the Invoice Item Adjustment instead.
     *
     * @remarks
     *
     * If you enable the Invoice Settlement feature, Debit Memo Item, Credit Memo Item, and Credit Memo Application Item are available, Payment and Refund will be replaced by Payment Application and Refund Application.
     *
     * If you enable both the Invoice Settlement feature and the Invoice Item Settlement feature, Payment and Refund will be replaced by Payment Application Item and Refund Application Item.
     *
     */
    type?: GETJournalRunTransactionTypeTypeEnum;
}
