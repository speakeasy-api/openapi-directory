import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TimeSlicedMetricsGeneratedReasonEnum {
    IncreaseQuantity = "IncreaseQuantity",
    DecreaseQuantity = "DecreaseQuantity",
    ChangePrice = "ChangePrice",
    Extension = "Extension",
    Contraction = "Contraction"
}
export declare class TimeSlicedMetrics extends SpeakeasyBase {
    amount?: number;
    endDate?: Date;
    generatedReason?: TimeSlicedMetricsGeneratedReasonEnum;
    invoiceOwner?: string;
    orderItemId?: string;
    startDate?: Date;
    subscriptionOwner?: string;
    termNumber?: number;
}
