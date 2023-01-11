import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TimeSlicedNetMetricsForEvergreenTypeEnum {
    Regular = "Regular",
    Discount = "Discount"
}
export declare class TimeSlicedNetMetricsForEvergreen extends SpeakeasyBase {
    amount?: number;
    discountChargeNumber?: string;
    endDate?: Date;
    invoiceOwner?: string;
    startDate?: Date;
    subscriptionOwner?: string;
    termNumber?: number;
    type?: TimeSlicedNetMetricsForEvergreenTypeEnum;
}
