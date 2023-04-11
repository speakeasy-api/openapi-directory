import { SpeakeasyBase } from "../../../internal/utils";
import { POSTDistributionItemType } from "./postdistributionitemtype";
/**
 * Label of the revenue event type. Revenue event type labels can be duplicated. You can configure your revenue event type labels by navigating to **Settings > Finance > Configure Revenue Event Types** in the Zuora UI.
 *
 * @remarks
 *
 * Note that `Credit Memo Posted` and `Debit Memo Posted` are only available if you enable the Invoice Settlement feature.
 *
 */
export declare enum PUTAllocateManuallyTypeEventTypeEnum {
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
export declare class PUTAllocateManuallyType extends SpeakeasyBase {
    /**
     * Label of the revenue event type. Revenue event type labels can be duplicated. You can configure your revenue event type labels by navigating to **Settings > Finance > Configure Revenue Event Types** in the Zuora UI.
     *
     * @remarks
     *
     * Note that `Credit Memo Posted` and `Debit Memo Posted` are only available if you enable the Invoice Settlement feature.
     *
     */
    eventType?: PUTAllocateManuallyTypeEventTypeEnum;
    /**
     * System ID of the revenue event type. Each eventType has a unique system ID. You can configure your revenue event type system IDs by navigating to **Settings > Finance > Configure Revenue Event Types** in the Zuora UI.
     *
     * @remarks
     *
     * Cannot be duplicated.
     *
     */
    eventTypeSystemId?: string;
    /**
     * Additional information about this record.
     *
     * @remarks
     *
     */
    notes?: string;
    /**
     * An array of revenue distributions. Represents how you want to distribute revenue for this revenue schedule. You can distribute revenue into a maximum of 250 accounting periods with one revenue schedule.
     *
     * @remarks
     *
     */
    revenueDistributions?: POSTDistributionItemType[];
}
