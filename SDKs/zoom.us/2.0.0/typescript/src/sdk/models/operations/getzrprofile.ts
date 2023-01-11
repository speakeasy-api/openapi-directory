import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetZrProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roomId" })
  roomId: string;
}


export class GetZrProfileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class GetZrProfile200ApplicationJsonBasic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activation_code" })
  activationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=hide_room_in_contacts" })
  hideRoomInContacts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=required_code_to_ext" })
  requiredCodeToExt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=room_passcode" })
  roomPasscode?: string;

  @SpeakeasyMetadata({ data: "json, name=support_email" })
  supportEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=support_phone" })
  supportPhone?: string;
}


export class GetZrProfile200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basic" })
  basic?: GetZrProfile200ApplicationJsonBasic;
}


export class GetZrProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetZrProfilePathParams;

  @SpeakeasyMetadata()
  security: GetZrProfileSecurity;
}


export class GetZrProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getZRProfile200ApplicationJSONObject?: GetZrProfile200ApplicationJson;
}
