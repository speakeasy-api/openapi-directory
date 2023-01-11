import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AssignPhoneNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class AssignPhoneNumberApplicationJsonPhoneNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}


export class AssignPhoneNumberApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: AssignPhoneNumberApplicationJsonPhoneNumbers })
  phoneNumbers?: AssignPhoneNumberApplicationJsonPhoneNumbers[];
}


export class AssignPhoneNumberMultipartFormDataPhoneNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}


export class AssignPhoneNumberMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=phone_numbers;json=true", elemType: AssignPhoneNumberMultipartFormDataPhoneNumbers })
  phoneNumbers?: AssignPhoneNumberMultipartFormDataPhoneNumbers[];
}


export class AssignPhoneNumberRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AssignPhoneNumberApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AssignPhoneNumberMultipartFormData1;
}


export class AssignPhoneNumberSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class AssignPhoneNumber200ApplicationJsonPhoneNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}


export class AssignPhoneNumber200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: AssignPhoneNumber200ApplicationJsonPhoneNumbers })
  phoneNumbers?: AssignPhoneNumber200ApplicationJsonPhoneNumbers[];
}


export class AssignPhoneNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AssignPhoneNumberPathParams;

  @SpeakeasyMetadata()
  request?: AssignPhoneNumberRequests;

  @SpeakeasyMetadata()
  security: AssignPhoneNumberSecurity;
}


export class AssignPhoneNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  assignPhoneNumber200ApplicationJSONObject?: AssignPhoneNumber200ApplicationJson;
}
