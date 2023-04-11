import { SpeakeasyBase } from "../../../internal/utils";
import { GETRevenueItemType } from "./getrevenueitemtype";
/**
 * Label of the revenue event type. Revenue event type labels can be duplicated. You can configure your revenue event type labels by navigating to **Settings > Finance > Configure Revenue Event Types** in the Zuora UI.
 *
 * @remarks
 *
 * Note that `Credit Memo Posted` and `Debit Memo Posted` are only available if you enable the Invoice Settlement feature.
 *
 */
export declare enum GETRevenueEventDetailWithoutSuccessTypeEventTypeEnum {
    InvoicePosted = "Invoice Posted",
    InvoiceItemAdjustmentCreated = "Invoice Item Adjustment Created",
    InvoiceCanceled = "Invoice Canceled",
    InvoiceItemAdjustmentCanceled = "Invoice Item Adjustment Canceled",
    RevenueDistributed = "Revenue Distributed",
    CreditMemoPosted = "Credit Memo Posted",
    DebitMemoPosted = "Debit Memo Posted"
}
/**
 * Container for custom fields of a Revenue Event object.
 *
 * @remarks
 *
 */
export declare class GETRevenueEventDetailWithoutSuccessType extends SpeakeasyBase {
    /**
     * An account ID.
     *
     * @remarks
     *
     */
    accountId?: string;
    /**
     * The date when the record was created in YYYY-MM-DD HH:MM:SS format.
     *
     * @remarks
     *
     */
    createdOn?: Date;
    /**
     * The type of currency used.
     */
    currency?: string;
    /**
     * Label of the revenue event type. Revenue event type labels can be duplicated. You can configure your revenue event type labels by navigating to **Settings > Finance > Configure Revenue Event Types** in the Zuora UI.
     *
     * @remarks
     *
     * Note that `Credit Memo Posted` and `Debit Memo Posted` are only available if you enable the Invoice Settlement feature.
     *
     */
    eventType?: GETRevenueEventDetailWithoutSuccessTypeEventTypeEnum;
    /**
     * Additional information about this record.
     *
     * @remarks
     *
     */
    notes?: string;
    /**
     * The revenue event number created when a revenue event occurs.
     *
     * @remarks
     *
     */
    number?: string;
    /**
     * The end date of a recognition period in YYYY-MM-DD format.
     *
     * @remarks
     *
     * The maximum difference of the recognitionStart and recognitionEnd date fields is equal to 250 multiplied by the length of an accounting period.
     *
     */
    recognitionEnd?: Date;
    /**
     * The start date of a recognition period in YYYY-MM-DD format.
     *
     * @remarks
     *
     */
    recognitionStart?: Date;
    /**
     * Revenue items are listed in ascending order by the accounting period start date.
     *
     * @remarks
     *
     */
    revenueItems?: GETRevenueItemType[];
    /**
     * The original subscription charge ID.
     *
     * @remarks
     *
     */
    subscriptionChargeId?: string;
    /**
     * The original subscription ID.
     *
     * @remarks
     *
     */
    subscriptionId?: string;
}
