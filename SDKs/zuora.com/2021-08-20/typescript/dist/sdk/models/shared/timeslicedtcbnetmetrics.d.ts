import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TimeSlicedTcbNetMetricsGeneratedReasonEnum {
    IncreaseQuantity = "IncreaseQuantity",
    DecreaseQuantity = "DecreaseQuantity",
    ChangePrice = "ChangePrice",
    Extension = "Extension",
    Contraction = "Contraction"
}
export declare enum TimeSlicedTcbNetMetricsTypeEnum {
    Regular = "Regular",
    Discount = "Discount"
}
export declare class TimeSlicedTcbNetMetrics extends SpeakeasyBase {
    amount?: number;
    discountChargeNumber?: string;
    endDate?: Date;
    generatedReason?: TimeSlicedTcbNetMetricsGeneratedReasonEnum;
    invoiceOwner?: string;
    orderItemId?: string;
    startDate?: Date;
    subscriptionOwner?: string;
    tax?: number;
    termNumber?: number;
    type?: TimeSlicedTcbNetMetricsTypeEnum;
}
