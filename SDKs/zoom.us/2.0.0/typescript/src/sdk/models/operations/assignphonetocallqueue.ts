import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AssignPhoneToCallQueuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=callQueueId" })
  callQueueId: string;
}


export class AssignPhoneToCallQueueApplicationJsonPhoneNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}


export class AssignPhoneToCallQueueApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: AssignPhoneToCallQueueApplicationJsonPhoneNumbers })
  phoneNumbers?: AssignPhoneToCallQueueApplicationJsonPhoneNumbers[];
}


export class AssignPhoneToCallQueueMultipartFormDataPhoneNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}


export class AssignPhoneToCallQueueMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=phone_numbers;json=true", elemType: AssignPhoneToCallQueueMultipartFormDataPhoneNumbers })
  phoneNumbers?: AssignPhoneToCallQueueMultipartFormDataPhoneNumbers[];
}


export class AssignPhoneToCallQueueRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AssignPhoneToCallQueueApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AssignPhoneToCallQueueMultipartFormData1;
}


export class AssignPhoneToCallQueueSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class AssignPhoneToCallQueueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AssignPhoneToCallQueuePathParams;

  @SpeakeasyMetadata()
  request?: AssignPhoneToCallQueueRequests;

  @SpeakeasyMetadata()
  security: AssignPhoneToCallQueueSecurity;
}


export class AssignPhoneToCallQueueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  assignPhoneToCallQueue204ApplicationJSONObject?: Record<string, any>;
}
