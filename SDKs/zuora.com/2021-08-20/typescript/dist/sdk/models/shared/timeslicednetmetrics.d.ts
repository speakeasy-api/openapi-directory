import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TimeSlicedNetMetricsGeneratedReasonEnum {
    IncreaseQuantity = "IncreaseQuantity",
    DecreaseQuantity = "DecreaseQuantity",
    ChangePrice = "ChangePrice",
    Extension = "Extension",
    Contraction = "Contraction"
}
export declare enum TimeSlicedNetMetricsTypeEnum {
    Regular = "Regular",
    Discount = "Discount"
}
export declare class TimeSlicedNetMetrics extends SpeakeasyBase {
    amount?: number;
    discountChargeNumber?: string;
    endDate?: Date;
    generatedReason?: TimeSlicedNetMetricsGeneratedReasonEnum;
    invoiceOwner?: string;
    orderItemId?: string;
    startDate?: Date;
    subscriptionOwner?: string;
    termNumber?: number;
    type?: TimeSlicedNetMetricsTypeEnum;
}
