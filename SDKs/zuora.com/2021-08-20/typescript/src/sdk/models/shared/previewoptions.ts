import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PreviewOptionsPreviewThruTypeEnum {
    SpecificDate = "SpecificDate",
    TermEnd = "TermEnd",
    NumberOfPeriods = "NumberOfPeriods"
}

export enum PreviewOptionsPreviewTypesEnum {
    ChargeMetrics = "ChargeMetrics",
    BillingDocs = "BillingDocs",
    OrderDeltaMetrics = "OrderDeltaMetrics",
    OrderMetrics = "OrderMetrics",
    RampMetrics = "RampMetrics",
    RampDeltaMetrics = "RampDeltaMetrics"
}


export class PreviewOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=previewNumberOfPeriods" })
  previewNumberOfPeriods?: number;

  @SpeakeasyMetadata({ data: "json, name=previewThruType" })
  previewThruType?: PreviewOptionsPreviewThruTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=previewTypes" })
  previewTypes?: PreviewOptionsPreviewTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=specificPreviewThruDate" })
  specificPreviewThruDate?: Date;
}
