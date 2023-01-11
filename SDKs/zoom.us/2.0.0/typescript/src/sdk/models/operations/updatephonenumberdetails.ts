import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePhoneNumberDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=numberId" })
  numberId: string;
}


export class UpdatePhoneNumberDetailsApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capability" })
  capability?: string[];

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;
}


export class UpdatePhoneNumberDetailsMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=capability;json=true" })
  capability?: string[];

  @SpeakeasyMetadata({ data: "multipart_form, name=display_name" })
  displayName?: string;
}


export class UpdatePhoneNumberDetailsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UpdatePhoneNumberDetailsApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UpdatePhoneNumberDetailsMultipartFormData;
}


export class UpdatePhoneNumberDetailsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UpdatePhoneNumberDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePhoneNumberDetailsPathParams;

  @SpeakeasyMetadata()
  request?: UpdatePhoneNumberDetailsRequests;

  @SpeakeasyMetadata()
  security: UpdatePhoneNumberDetailsSecurity;
}


export class UpdatePhoneNumberDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updatePhoneNumberDetails204ApplicationJSONAny?: any;
}
