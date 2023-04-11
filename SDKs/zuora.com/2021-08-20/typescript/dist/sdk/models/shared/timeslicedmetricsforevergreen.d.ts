import { SpeakeasyBase } from "../../../internal/utils";
export declare class TimeSlicedMetricsForEvergreen extends SpeakeasyBase {
    amount?: number;
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
    termNumber?: number;
}
