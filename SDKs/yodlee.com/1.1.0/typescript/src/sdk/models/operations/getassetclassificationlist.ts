import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAssetClassificationListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  holdingAssetClassificationListResponse?: shared.HoldingAssetClassificationListResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
