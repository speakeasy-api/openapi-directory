import { SpeakeasyBase } from "../../../internal/utils";
/**
 * How to distribute the revenue for milestone-based recognition.
 */
export declare enum PUTSpecificDateAllocationTypeDistributionTypeEnum {
    SpecificDateDeltaFixedAmount = "specific date (delta fixed amount)",
    SpecificDateDeltaPercentTotal = "specific date (delta percent total)",
    SpecificDateDeltaPercentUndistributed = "specific date (delta percent undistributed)"
}
/**
 * Label of the revenue event type. Revenue event type labels can be duplicated. You can configure your revenue event type labels by navigating to **Settings > Finance > Configure Revenue Event Types** in the Zuora UI.
 *
 * @remarks
 *
 * Note that `Credit Memo Posted` and `Debit Memo Posted` are only available if you enable the Invoice Settlement feature.
 *
 */
export declare enum PUTSpecificDateAllocationTypeEventTypeEnum {
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
export declare class PUTSpecificDateAllocationType extends SpeakeasyBase {
    /**
     * The revenue schedule amount, which is the sum of all revenue items. This field cannot be null and must be formatted based on the currency, such as `JPY 30` or `USD 30.15`. Test out the currency to ensure you are using the proper formatting otherwise, the response will fail and this error message is returned: `Allocation amount with wrong decimal places.`
     *
     * @remarks
     *
     */
    amount?: string;
    /**
     * The recognition date on which to distribute revenue for milestone-based recognition.
     *
     * @remarks
     *
     * Type: date in `yyyy-mm-dd` format.
     *
     */
    distributeOn: Date;
    /**
     * How to distribute the revenue for milestone-based recognition.
     */
    distributionType: PUTSpecificDateAllocationTypeDistributionTypeEnum;
    /**
     * Label of the revenue event type. Revenue event type labels can be duplicated. You can configure your revenue event type labels by navigating to **Settings > Finance > Configure Revenue Event Types** in the Zuora UI.
     *
     * @remarks
     *
     * Note that `Credit Memo Posted` and `Debit Memo Posted` are only available if you enable the Invoice Settlement feature.
     *
     */
    eventType?: PUTSpecificDateAllocationTypeEventTypeEnum;
    /**
     * System ID of the revenue event type. Each eventType has a unique system ID. You can configure your revenue event type system IDs by navigating to **Settings > Finance > Configure Revenue Event Types** in the Zuora UI.
     *
     * @remarks
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
     * Percentage of the total recognition amount or total undistributed to distribute.
     *
     * @remarks
     *
     * Required if distributionType is either:
     * * specific date (delta percent total)
     * * specific date (delta percent undistributed)
     *
     */
    percentage?: string;
}
