import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AssignPhoneNumbersAutoReceptionistPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=autoReceptionistId" })
  autoReceptionistId: string;
}


export class AssignPhoneNumbersAutoReceptionistApplicationJsonPhoneNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}


export class AssignPhoneNumbersAutoReceptionistApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: AssignPhoneNumbersAutoReceptionistApplicationJsonPhoneNumbers })
  phoneNumbers?: AssignPhoneNumbersAutoReceptionistApplicationJsonPhoneNumbers[];
}


export class AssignPhoneNumbersAutoReceptionistMultipartFormDataPhoneNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}


export class AssignPhoneNumbersAutoReceptionistMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=phone_numbers;json=true", elemType: AssignPhoneNumbersAutoReceptionistMultipartFormDataPhoneNumbers })
  phoneNumbers?: AssignPhoneNumbersAutoReceptionistMultipartFormDataPhoneNumbers[];
}


export class AssignPhoneNumbersAutoReceptionistRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AssignPhoneNumbersAutoReceptionistApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AssignPhoneNumbersAutoReceptionistMultipartFormData1;
}


export class AssignPhoneNumbersAutoReceptionistSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class AssignPhoneNumbersAutoReceptionistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AssignPhoneNumbersAutoReceptionistPathParams;

  @SpeakeasyMetadata()
  request?: AssignPhoneNumbersAutoReceptionistRequests;

  @SpeakeasyMetadata()
  security: AssignPhoneNumbersAutoReceptionistSecurity;
}


export class AssignPhoneNumbersAutoReceptionistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  assignPhoneNumbersAutoReceptionist204ApplicationJSONAny?: any;
}
