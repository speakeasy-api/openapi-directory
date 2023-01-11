import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetZrLocationProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=locationId" })
  locationId: string;
}


export class GetZrLocationProfileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class GetZrLocationProfile200ApplicationJsonBasic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=description " })
  description?: string;

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

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;
}


export class GetZrLocationProfile200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basic" })
  basic?: GetZrLocationProfile200ApplicationJsonBasic;
}


export class GetZrLocationProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetZrLocationProfilePathParams;

  @SpeakeasyMetadata()
  security: GetZrLocationProfileSecurity;
}


export class GetZrLocationProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getZRLocationProfile200ApplicationJSONObject?: GetZrLocationProfile200ApplicationJson;
}
