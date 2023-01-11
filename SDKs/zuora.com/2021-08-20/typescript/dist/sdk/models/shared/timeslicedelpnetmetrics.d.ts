import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TimeSlicedElpNetMetricsGeneratedReasonEnum {
    IncreaseQuantity = "IncreaseQuantity",
    DecreaseQuantity = "DecreaseQuantity",
    ChangePrice = "ChangePrice",
    Extension = "Extension",
    Contraction = "Contraction"
}
export declare enum TimeSlicedElpNetMetricsTypeEnum {
    Regular = "Regular",
    Discount = "Discount"
}
export declare class TimeSlicedElpNetMetrics extends SpeakeasyBase {
    amount?: number;
    endDate?: Date;
    generatedReason?: TimeSlicedElpNetMetricsGeneratedReasonEnum;
    invoiceOwner?: string;
    orderItemId?: string;
    startDate?: Date;
    subscriptionOwner?: string;
    tax?: number;
    termNumber?: number;
    type?: TimeSlicedElpNetMetricsTypeEnum;
}
