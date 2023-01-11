import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteSipPhonePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=phoneId" })
  phoneId: string;
}


export class DeleteSipPhoneSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class DeleteSipPhoneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSipPhonePathParams;

  @SpeakeasyMetadata()
  security: DeleteSipPhoneSecurity;
}


export class DeleteSipPhoneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteSIPPhone204ApplicationJSONObject?: Record<string, any>;
}
