import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetClassificationList } from "./assetclassificationlist";



export class HoldingAssetClassificationListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetClassificationList", elemType: AssetClassificationList })
  assetClassificationList?: AssetClassificationList[];
}
