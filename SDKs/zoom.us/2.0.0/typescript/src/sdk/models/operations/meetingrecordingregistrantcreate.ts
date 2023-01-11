import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeetingRecordingRegistrantCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: number;
}


// MeetingRecordingRegistrantCreateApplicationJsonCustomQuestions
/** 
 * Custom Question.
**/
export class MeetingRecordingRegistrantCreateApplicationJsonCustomQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// MeetingRecordingRegistrantCreateApplicationJson
/** 
 * Registrant base object.
**/
export class MeetingRecordingRegistrantCreateApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_questions", elemType: MeetingRecordingRegistrantCreateApplicationJsonCustomQuestions })
  customQuestions?: MeetingRecordingRegistrantCreateApplicationJsonCustomQuestions[];

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=industry" })
  industry?: string;

  @SpeakeasyMetadata({ data: "json, name=job_title" })
  jobTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=no_of_employees" })
  noOfEmployees?: string;

  @SpeakeasyMetadata({ data: "json, name=org" })
  org?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=purchasing_time_frame" })
  purchasingTimeFrame?: string;

  @SpeakeasyMetadata({ data: "json, name=role_in_purchase_process" })
  roleInPurchaseProcess?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: string;
}


// MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions
/** 
 * Custom Question.
**/
export class MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// MeetingRecordingRegistrantCreateMultipartFormData1
/** 
 * Registrant base object.
**/
export class MeetingRecordingRegistrantCreateMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=custom_questions;json=true", elemType: MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions })
  customQuestions?: MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions[];

  @SpeakeasyMetadata({ data: "multipart_form, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=industry" })
  industry?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=job_title" })
  jobTitle?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=no_of_employees" })
  noOfEmployees?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=org" })
  org?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=purchasing_time_frame" })
  purchasingTimeFrame?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=role_in_purchase_process" })
  roleInPurchaseProcess?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=zip" })
  zip?: string;
}


export class MeetingRecordingRegistrantCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: MeetingRecordingRegistrantCreateApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: MeetingRecordingRegistrantCreateMultipartFormData1;
}


export class MeetingRecordingRegistrantCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class MeetingRecordingRegistrantCreate201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=registrant_id" })
  registrantId?: string;

  @SpeakeasyMetadata({ data: "json, name=share_url" })
  shareUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}


export class MeetingRecordingRegistrantCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MeetingRecordingRegistrantCreatePathParams;

  @SpeakeasyMetadata()
  request: MeetingRecordingRegistrantCreateRequests;

  @SpeakeasyMetadata()
  security: MeetingRecordingRegistrantCreateSecurity;
}


export class MeetingRecordingRegistrantCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  meetingRecordingRegistrantCreate201ApplicationJSONObject?: MeetingRecordingRegistrantCreate201ApplicationJson;
}
