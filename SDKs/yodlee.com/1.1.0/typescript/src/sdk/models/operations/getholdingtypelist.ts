import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetHoldingTypeListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  holdingTypeListResponse?: shared.HoldingTypeListResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
