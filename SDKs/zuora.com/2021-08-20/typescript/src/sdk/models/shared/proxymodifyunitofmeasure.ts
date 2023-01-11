import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProxyModifyUnitOfMeasure extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DecimalPlaces" })
  decimalPlaces?: number;

  @SpeakeasyMetadata({ data: "json, name=DisplayedAs" })
  displayedAs?: string;

  @SpeakeasyMetadata({ data: "json, name=RoundingMode" })
  roundingMode?: string;

  @SpeakeasyMetadata({ data: "json, name=UomName" })
  uomName?: string;
}
