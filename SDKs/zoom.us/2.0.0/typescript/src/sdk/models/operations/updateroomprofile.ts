import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateRoomProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roomId" })
  roomId: string;
}


export class UpdateRoomProfileApplicationJsonBasic extends SpeakeasyBase {
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


export class UpdateRoomProfileApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basic" })
  basic?: UpdateRoomProfileApplicationJsonBasic;
}


export class UpdateRoomProfileMultipartFormDataBasic extends SpeakeasyBase {
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


export class UpdateRoomProfileMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=basic;json=true" })
  basic?: UpdateRoomProfileMultipartFormDataBasic;
}


export class UpdateRoomProfileRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UpdateRoomProfileApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UpdateRoomProfileMultipartFormData;
}


export class UpdateRoomProfileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UpdateRoomProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateRoomProfilePathParams;

  @SpeakeasyMetadata()
  request?: UpdateRoomProfileRequests;

  @SpeakeasyMetadata()
  security: UpdateRoomProfileSecurity;
}


export class UpdateRoomProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateRoomProfile204ApplicationJSONObject?: Record<string, any>;
}
