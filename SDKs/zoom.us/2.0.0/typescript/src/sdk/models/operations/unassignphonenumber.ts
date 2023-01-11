import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UnassignPhoneNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=phoneNumberId" })
  phoneNumberId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UnassignPhoneNumberSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UnassignPhoneNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnassignPhoneNumberPathParams;

  @SpeakeasyMetadata()
  security: UnassignPhoneNumberSecurity;
}


export class UnassignPhoneNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unassignPhoneNumber204ApplicationJSONAny?: any;
}
