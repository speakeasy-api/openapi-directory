import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateZrLocationProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=locationId" })
  locationId: string;
}


export class UpdateZrLocationProfileApplicationJsonBasic extends SpeakeasyBase {
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


export class UpdateZrLocationProfileApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basic" })
  basic?: UpdateZrLocationProfileApplicationJsonBasic;
}


export class UpdateZrLocationProfileMultipartFormDataBasic extends SpeakeasyBase {
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


export class UpdateZrLocationProfileMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=basic;json=true" })
  basic?: UpdateZrLocationProfileMultipartFormDataBasic;
}


export class UpdateZrLocationProfileRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UpdateZrLocationProfileApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UpdateZrLocationProfileMultipartFormData;
}


export class UpdateZrLocationProfileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UpdateZrLocationProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateZrLocationProfilePathParams;

  @SpeakeasyMetadata()
  request?: UpdateZrLocationProfileRequests;

  @SpeakeasyMetadata()
  security: UpdateZrLocationProfileSecurity;
}


export class UpdateZrLocationProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateZRLocationProfile200ApplicationJSONAny?: any;
}
