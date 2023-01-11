import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnregisterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
