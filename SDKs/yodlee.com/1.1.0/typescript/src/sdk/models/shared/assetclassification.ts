import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssetClassification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocation" })
  allocation?: number;

  @SpeakeasyMetadata({ data: "json, name=classificationType" })
  classificationType?: string;

  @SpeakeasyMetadata({ data: "json, name=classificationValue" })
  classificationValue?: string;
}
