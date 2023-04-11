import { SpeakeasyBase } from "../../../internal/utils";
export declare class Invoice extends SpeakeasyBase {
    accountId?: string;
    /**
     *  The amount of the invoice adjustments associated with the invoice. **Character limi**t: 16
     *
     * @remarks
     *
     * **Values**: a valid currency amount
     */
    adjustmentAmount?: number;
    /**
     *  The sum of all charges and taxes associated with the invoice.
     *
     * @remarks
     *
     *
     * **Character limit**: 16
     *
     * **Values**: automatically generated
     */
    amount?: number;
    /**
     *  The sum of all charges associated with the invoice. Taxes are excluded from this value.
     *
     * @remarks
     *
     *
     * **Character limit**: 16
     *
     * **Values**: automatically generated
     */
    amountWithoutTax?: number;
    /**
     *  The remaining balance of the invoice after all payments, adjustments, and refunds are applied.
     *
     * @remarks
     *
     *
     * **Character limit**: 16
     *
     * **Values**: automatically generated
     */
    balance?: number;
    /**
     *  The ID of a Bill Run.
     *
     * @remarks
     *
     *
     * **Character limit**: 32
     *
     * **Values**: a BillRun ID
     */
    billRunId?: string;
    /**
     *  Required
     */
    body?: string;
    /**
     *  Additional information related to the invoice that a Zuora user added to the invoice.
     *
     * @remarks
     *
     *
     * **Character limit**: 255
     *
     * **Values:** a string of 255 characters or fewer
     */
    comments?: string;
    /**
     *  The user ID of the person who created the invoice. If a bill run generated the invoice, then the value is the user ID of person who created the bill run.
     *
     * @remarks
     *
     *
     * **Character limit**: 32
     *
     * **Values**: automatically generated
     */
    createdById?: string;
    /**
     *  The date when the invoice was generated.
     *
     * @remarks
     *
     *
     * **Character limit**: 29
     *
     * **Values**: automatically generated
     */
    createdDate?: Date;
    /**
     *  The currency amount of the adjustment applied to the customer's credit balance.
     *
     * @remarks
     *
     *
     * **Character limit**: 16
     *
     * **Values**: a valid currency amount This field is only available if the [Zuora Global Support](http://support.zuora.com/) to enable this feature.
     *
     *
     *
     */
    creditBalanceAdjustmentAmount?: number;
    /**
     *  The date by which the payment for this invoice is due.
     *
     * @remarks
     *
     *
     * **Character limit**: 29
     */
    dueDate?: Date;
    /**
     *  Specifies whether the invoice includes one-time charges.
     *
     * @remarks
     *
     *
     * **Character limit**: 5
     *
     * **Values**: automatically generated from one of the following: `True` (default), `False`
     */
    includesOneTime?: boolean;
    /**
     *  Specifies whether the invoice includes recurring charges.
     *
     * @remarks
     *
     *
     * **Character limit**: 5
     *
     * **Values**: automatically generated from one of the following: `True` (default), `False`
     */
    includesRecurring?: boolean;
    /**
     *  Specifies whether the invoice includes usage charges.
     *
     * @remarks
     *
     *
     * **Character limit**: 5
     *
     * **Values**: automatically generated from one of the following: `True `(default), `False`
     */
    includesUsage?: boolean;
    /**
     *  Specifies the date on which to generate the invoice.
     *
     * @remarks
     *
     *
     * **Character limit**: 29
     */
    invoiceDate?: Date;
    /**
     *  The unique identification number for the invoice. This number is returned as a string.
     *
     * @remarks
     *
     *
     * **Character limit**: 32
     *
     * **Values**: automatically generated
     */
    invoiceNumber?: string;
    /**
     *  The date when the invoice was last emailed.
     *
     * @remarks
     *
     *
     * **Character limit**: 29
     *
     * **Values**: automatically generated
     */
    lastEmailSentDate?: Date;
    /**
     *  The amount of payments applied to the invoice.
     *
     * @remarks
     *
     *
     * **Character limit**: 16 **Value**s: automatically generated
     */
    paymentAmount?: number;
    /**
     *  The user ID of the person who moved the invoice to Posted status.
     *
     * @remarks
     *
     *
     * **Character limit**: 32
     *
     * **Values**: automatically generated
     */
    postedBy?: string;
    /**
     *  The date when the invoice was posted.
     *
     * @remarks
     *
     *
     * **Character limit:** 29
     *
     * **Values**: automatically generated
     */
    postedDate?: Date;
    /**
     *  Specifies the amount of a refund that was applied against an earlier payment on the invoice.
     *
     * @remarks
     *
     *
     * **Character limit**: 16
     *
     * **Values**: automatically generated
     */
    refundAmount?: number;
    /**
     *  Regenerates a PDF of an invoice that was already generated.
     *
     * @remarks
     *
     * **Character limit**: 5
     *
     * **Values**: `True`, `False`
     */
    regenerateInvoicePDF?: boolean;
    /**
     *  The status of the invoice in the system. This status is not the status of the payment of the invoice, just the status of the invoice itself.
     *
     * @remarks
     *
     *
     * **Character limit**: 8
     *
     * **Values**: one of the following:
     *
     * -  Draft (default, automatically set upon invoice creation)
     *
     * -  Posted
     *
     * -  Canceled
     *
     *
     */
    status?: string;
    /**
     *  This date is used to determine which charges are to be billed. All charges that are to be billed on this date or prior will be included in this bill run.
     *
     * @remarks
     *
     *
     * **Character limit**: 29
     */
    targetDate?: Date;
    /**
     *  The total amount of the taxes applied to the invoice.
     *
     * @remarks
     *
     *
     * **Character limit**: 16
     *
     * **Values**: automatically generated
     */
    taxAmount?: number;
    /**
     *  The total amount of the invoice that is exempt from taxation.
     *
     * @remarks
     *
     *
     * **Character limit**: 16
     *
     * **Values**: automatically generated
     */
    taxExemptAmount?: number;
    /**
     *  Specifies whether or not the invoice was transferred to an external accounting system, such as NetSuite.
     *
     * @remarks
     *
     *
     * **Character limit**: 10
     *
     * **Values**: Processing, Yes, Error, Ignore
     */
    transferredToAccounting?: string;
    updatedById?: string;
    /**
     *  The date when the invoice was last updated.
     *
     * @remarks
     *
     *
     * **Character limit**: 29
     *
     * **Values**: automatically generated
     */
    updatedDate?: Date;
}
