import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TimeSlicedTcbNetMetricsForEvergreenTypeEnum {
    Regular = "Regular",
    Discount = "Discount"
}
export declare class TimeSlicedTcbNetMetricsForEvergreen extends SpeakeasyBase {
    amount?: number;
    discountChargeNumber?: string;
    endDate?: Date;
    invoiceOwner?: string;
    startDate?: Date;
    subscriptionOwner?: string;
    tax?: number;
    termNumber?: number;
    type?: TimeSlicedTcbNetMetricsForEvergreenTypeEnum;
}
