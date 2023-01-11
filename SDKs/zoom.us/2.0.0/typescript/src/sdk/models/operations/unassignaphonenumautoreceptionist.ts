import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UnassignAPhoneNumAutoReceptionistPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=autoReceptionistId" })
  autoReceptionistId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=phoneNumberId" })
  phoneNumberId: string;
}


export class UnassignAPhoneNumAutoReceptionistSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UnassignAPhoneNumAutoReceptionistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnassignAPhoneNumAutoReceptionistPathParams;

  @SpeakeasyMetadata()
  security: UnassignAPhoneNumAutoReceptionistSecurity;
}


export class UnassignAPhoneNumAutoReceptionistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unassignAPhoneNumAutoReceptionist204ApplicationJSONAny?: any;
}
