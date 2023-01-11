import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssignPhoneNumbersSlgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sharedLineGroupId" })
  sharedLineGroupId: string;
}


export class AssignPhoneNumbersSlgApplicationJsonPhoneNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}


export class AssignPhoneNumbersSlgApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: AssignPhoneNumbersSlgApplicationJsonPhoneNumbers })
  phoneNumbers?: AssignPhoneNumbersSlgApplicationJsonPhoneNumbers[];
}


export class AssignPhoneNumbersSlgMultipartFormDataPhoneNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}


export class AssignPhoneNumbersSlgMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=phone_numbers;json=true", elemType: AssignPhoneNumbersSlgMultipartFormDataPhoneNumbers })
  phoneNumbers?: AssignPhoneNumbersSlgMultipartFormDataPhoneNumbers[];
}


export class AssignPhoneNumbersSlgRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AssignPhoneNumbersSlgApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AssignPhoneNumbersSlgMultipartFormData1;
}


export class AssignPhoneNumbersSlgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AssignPhoneNumbersSlgPathParams;

  @SpeakeasyMetadata()
  request?: AssignPhoneNumbersSlgRequests;
}


export class AssignPhoneNumbersSlgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
