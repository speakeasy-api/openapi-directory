import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteCommonAreaPhonePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commonAreaPhoneId" })
  commonAreaPhoneId: string;
}


export class DeleteCommonAreaPhoneSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class DeleteCommonAreaPhoneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteCommonAreaPhonePathParams;

  @SpeakeasyMetadata()
  security: DeleteCommonAreaPhoneSecurity;
}


export class DeleteCommonAreaPhoneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteCommonAreaPhone204ApplicationJSONAny?: any;
}
