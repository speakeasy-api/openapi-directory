import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserLogoutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
