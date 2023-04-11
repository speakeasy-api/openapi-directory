import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for the finance information related to the credit memo item.
 *
 * @remarks
 *
 */
export declare class CreditMemoItemFromWriteOffInvoiceFinanceInformation extends SpeakeasyBase {
    /**
     * The accounting code for the deferred revenue, such as Monthly Recurring Liability.
     *
     * @remarks
     *
     */
    deferredRevenueAccountingCode?: string;
    /**
     * The accounting code that maps to an on account in your accounting system.
     *
     * @remarks
     *
     */
    onAccountAccountingCode?: string;
    /**
     * The accounting code for the recognized revenue, such as Monthly Recurring Charges or Overage Charges.
     *
     * @remarks
     *
     */
    recognizedRevenueAccountingCode?: string;
    /**
     * The name of the revenue recognition rule governing the revenue schedule.
     *
     * @remarks
     *
     */
    revenueRecognitionRuleName?: string;
}
/**
 * Container for custom fields of a Credit Memo Item object.
 *
 * @remarks
 *
 */
export declare class CreditMemoItemFromWriteOffInvoice extends SpeakeasyBase {
    /**
     * Comments about the credit memo item.
     *
     * @remarks
     *
     */
    comment?: string;
    /**
     * Container for the finance information related to the credit memo item.
     *
     * @remarks
     *
     */
    financeInformation?: CreditMemoItemFromWriteOffInvoiceFinanceInformation;
    /**
     * The ID of the invoice item.
     *
     * @remarks
     *
     */
    invoiceItemId?: string;
    /**
     * The service end date of the credit memo item.
     *
     * @remarks
     *
     */
    serviceEndDate?: Date;
    /**
     * The service start date of the credit memo item.
     *
     * @remarks
     *
     */
    serviceStartDate?: Date;
    /**
     * The name of the charge associated with the invoice.
     *
     * @remarks
     *
     */
    skuName?: string;
    /**
     * The definable unit that you measure when determining charges.
     *
     * @remarks
     *
     */
    unitOfMeasure?: string;
}
