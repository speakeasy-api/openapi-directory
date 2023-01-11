import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PreviewOptionsPreviewThruTypeEnum {
    SpecificDate = "SpecificDate",
    TermEnd = "TermEnd",
    NumberOfPeriods = "NumberOfPeriods"
}
export declare enum PreviewOptionsPreviewTypesEnum {
    ChargeMetrics = "ChargeMetrics",
    BillingDocs = "BillingDocs",
    OrderDeltaMetrics = "OrderDeltaMetrics",
    OrderMetrics = "OrderMetrics",
    RampMetrics = "RampMetrics",
    RampDeltaMetrics = "RampDeltaMetrics"
}
export declare class PreviewOptions extends SpeakeasyBase {
    previewNumberOfPeriods?: number;
    previewThruType?: PreviewOptionsPreviewThruTypeEnum;
    previewTypes?: PreviewOptionsPreviewTypesEnum[];
    specificPreviewThruDate?: Date;
}
