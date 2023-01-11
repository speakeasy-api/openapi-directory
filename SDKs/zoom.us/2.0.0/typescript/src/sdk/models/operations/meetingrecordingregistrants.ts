import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeetingRecordingRegistrantsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: number;
}

export enum MeetingRecordingRegistrantsStatusEnum {
    Pending = "pending",
    Approved = "approved",
    Denied = "denied"
}


export class MeetingRecordingRegistrantsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_number" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: MeetingRecordingRegistrantsStatusEnum;
}


export class MeetingRecordingRegistrantsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


// MeetingRecordingRegistrantsRecordingRegistrationListRegistrantsCustomQuestions
/** 
 * Custom Question.
**/
export class MeetingRecordingRegistrantsRecordingRegistrationListRegistrantsCustomQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// MeetingRecordingRegistrantsRecordingRegistrationListRegistrants
/** 
 * Registrant base object.
**/
export class MeetingRecordingRegistrantsRecordingRegistrationListRegistrants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_questions", elemType: MeetingRecordingRegistrantsRecordingRegistrationListRegistrantsCustomQuestions })
  customQuestions?: MeetingRecordingRegistrantsRecordingRegistrationListRegistrantsCustomQuestions[];

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

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


// MeetingRecordingRegistrantsRecordingRegistrationList
/** 
 * Pagination Object.
**/
export class MeetingRecordingRegistrantsRecordingRegistrationList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_count" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=page_number" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=registrants", elemType: MeetingRecordingRegistrantsRecordingRegistrationListRegistrants })
  registrants?: MeetingRecordingRegistrantsRecordingRegistrationListRegistrants[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class MeetingRecordingRegistrantsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MeetingRecordingRegistrantsPathParams;

  @SpeakeasyMetadata()
  queryParams: MeetingRecordingRegistrantsQueryParams;

  @SpeakeasyMetadata()
  security: MeetingRecordingRegistrantsSecurity;
}


export class MeetingRecordingRegistrantsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  recordingRegistrationList?: MeetingRecordingRegistrantsRecordingRegistrationList;

  @SpeakeasyMetadata()
  statusCode: number;
}
