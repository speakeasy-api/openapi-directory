import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UnassignAllPhoneNumsAutoReceptionistPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=autoReceptionistId" })
  autoReceptionistId: string;
}


export class UnassignAllPhoneNumsAutoReceptionistSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UnassignAllPhoneNumsAutoReceptionistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnassignAllPhoneNumsAutoReceptionistPathParams;

  @SpeakeasyMetadata()
  security: UnassignAllPhoneNumsAutoReceptionistSecurity;
}


export class UnassignAllPhoneNumsAutoReceptionistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unassignAllPhoneNumsAutoReceptionist204ApplicationJSONAny?: any;
}
