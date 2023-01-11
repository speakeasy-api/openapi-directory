import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateUserProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UpdateUserProfileApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=site_id" })
  siteId?: string;
}


export class UpdateUserProfileMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=extension_number" })
  extensionNumber?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=site_id" })
  siteId?: string;
}


export class UpdateUserProfileRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UpdateUserProfileApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UpdateUserProfileMultipartFormData;
}


export class UpdateUserProfileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UpdateUserProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateUserProfilePathParams;

  @SpeakeasyMetadata()
  request?: UpdateUserProfileRequests;

  @SpeakeasyMetadata()
  security: UpdateUserProfileSecurity;
}


export class UpdateUserProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateUserProfile204ApplicationJSONAny?: any;
}
