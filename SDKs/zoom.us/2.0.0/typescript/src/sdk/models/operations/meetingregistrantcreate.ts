import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeetingRegistrantCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: number;
}


export class MeetingRegistrantCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurrence_ids" })
  occurrenceIds?: string;
}


// MeetingRegistrantCreateApplicationJsonCustomQuestions
/** 
 * Custom Question.
**/
export class MeetingRegistrantCreateApplicationJsonCustomQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// MeetingRegistrantCreateApplicationJson
/** 
 * Registrant base object.
**/
export class MeetingRegistrantCreateApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=auto_approve" })
  autoApprove?: boolean;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_questions", elemType: MeetingRegistrantCreateApplicationJsonCustomQuestions })
  customQuestions?: MeetingRegistrantCreateApplicationJsonCustomQuestions[];

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=industry" })
  industry?: string;

  @SpeakeasyMetadata({ data: "json, name=job_title" })
  jobTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

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


// MeetingRegistrantCreateMultipartFormDataCustomQuestions
/** 
 * Custom Question.
**/
export class MeetingRegistrantCreateMultipartFormDataCustomQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// MeetingRegistrantCreateMultipartFormData1
/** 
 * Registrant base object.
**/
export class MeetingRegistrantCreateMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=auto_approve" })
  autoApprove?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=custom_questions;json=true", elemType: MeetingRegistrantCreateMultipartFormDataCustomQuestions })
  customQuestions?: MeetingRegistrantCreateMultipartFormDataCustomQuestions[];

  @SpeakeasyMetadata({ data: "multipart_form, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=industry" })
  industry?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=job_title" })
  jobTitle?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=language" })
  language?: string;

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


export class MeetingRegistrantCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: MeetingRegistrantCreateApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: MeetingRegistrantCreateMultipartFormData1;
}


export class MeetingRegistrantCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class MeetingRegistrantCreate201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=join_url" })
  joinUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=registrant_id" })
  registrantId?: string;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}


export class MeetingRegistrantCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MeetingRegistrantCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: MeetingRegistrantCreateQueryParams;

  @SpeakeasyMetadata()
  request: MeetingRegistrantCreateRequests;

  @SpeakeasyMetadata()
  security: MeetingRegistrantCreateSecurity;
}


export class MeetingRegistrantCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  meetingRegistrantCreate201ApplicationJSONObject?: MeetingRegistrantCreate201ApplicationJson;
}
