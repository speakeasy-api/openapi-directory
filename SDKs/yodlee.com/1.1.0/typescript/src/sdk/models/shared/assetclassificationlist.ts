import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssetClassificationList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classificationType" })
  classificationType?: string;

  @SpeakeasyMetadata({ data: "json, name=classificationValue" })
  classificationValue?: string[];
}
