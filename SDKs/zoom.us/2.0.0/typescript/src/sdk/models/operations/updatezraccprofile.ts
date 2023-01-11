import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateZrAccProfileApplicationJsonBasic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=required_code_to_ext" })
  requiredCodeToExt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=room_passcode" })
  roomPasscode?: string;

  @SpeakeasyMetadata({ data: "json, name=support_email" })
  supportEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=support_phone" })
  supportPhone?: string;
}


export class UpdateZrAccProfileApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basic" })
  basic?: UpdateZrAccProfileApplicationJsonBasic;
}


export class UpdateZrAccProfileMultipartFormDataBasic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=required_code_to_ext" })
  requiredCodeToExt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=room_passcode" })
  roomPasscode?: string;

  @SpeakeasyMetadata({ data: "json, name=support_email" })
  supportEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=support_phone" })
  supportPhone?: string;
}


export class UpdateZrAccProfileMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=basic;json=true" })
  basic?: UpdateZrAccProfileMultipartFormDataBasic;
}


export class UpdateZrAccProfileRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UpdateZrAccProfileApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UpdateZrAccProfileMultipartFormData;
}


export class UpdateZrAccProfileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UpdateZrAccProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: UpdateZrAccProfileRequests;

  @SpeakeasyMetadata()
  security: UpdateZrAccProfileSecurity;
}


export class UpdateZrAccProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateZRAccProfile204ApplicationJSONObject?: Record<string, any>;
}
