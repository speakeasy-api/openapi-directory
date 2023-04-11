import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether this metrics is for a regular charge or a discount. charge.
 */
export declare enum TimeSlicedTcbNetMetricsForEvergreenTypeEnum {
    Regular = "Regular",
    Discount = "Discount"
}
export declare class TimeSlicedTcbNetMetricsForEvergreen extends SpeakeasyBase {
    amount?: number;
    discountChargeNumber?: string;
    endDate?: Date;
    /**
     * The acount number of the billing account that is billed for the subscription.
     */
    invoiceOwner?: string;
    startDate?: Date;
    /**
     * The acount number of the billing account that owns the subscription.
     */
    subscriptionOwner?: string;
    tax?: number;
    termNumber?: number;
    /**
     * Indicates whether this metrics is for a regular charge or a discount. charge.
     */
    type?: TimeSlicedTcbNetMetricsForEvergreenTypeEnum;
}
