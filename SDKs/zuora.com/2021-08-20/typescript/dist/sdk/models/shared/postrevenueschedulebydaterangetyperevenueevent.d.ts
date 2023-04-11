import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Label of the revenue event type. Revenue event type labels can be duplicated. You can configure your revenue event type labels by navigating to **Settings > Finance > Configure Revenue Event Types** in the Zuora UI.
 *
 * @remarks
 *
 * Note that `Credit Memo Posted` and `Debit Memo Posted` are only available if you enable the Invoice Settlement feature.
 *
 */
export declare enum POSTRevenueScheduleByDateRangeTypeRevenueEventEventTypeEnum {
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
export declare class POSTRevenueScheduleByDateRangeTypeRevenueEvent extends SpeakeasyBase {
    /**
     * Label of the revenue event type. Revenue event type labels can be duplicated. You can configure your revenue event type labels by navigating to **Settings > Finance > Configure Revenue Event Types** in the Zuora UI.
     *
     * @remarks
     *
     * Note that `Credit Memo Posted` and `Debit Memo Posted` are only available if you enable the Invoice Settlement feature.
     *
     */
    eventType?: POSTRevenueScheduleByDateRangeTypeRevenueEventEventTypeEnum;
    /**
     * System ID of the revenue event type. Each eventType has a unique system ID. You can configure your revenue event type system IDs by navigating to **Settings > Finance > Configure Revenue Event Types** in the Zuora UI.
     *
     * @remarks
     *
     * Required only if there is more than one revenue event type with the same label.
     *
     */
    eventTypeSystemId?: string;
    notes?: string;
}
