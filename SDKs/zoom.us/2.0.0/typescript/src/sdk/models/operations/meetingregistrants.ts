import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeetingRegistrantsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: number;
}

export enum MeetingRegistrantsStatusEnum {
    Pending = "pending",
    Approved = "approved",
    Denied = "denied"
}


export class MeetingRegistrantsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurrence_id" })
  occurrenceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_number" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: MeetingRegistrantsStatusEnum;
}


export class MeetingRegistrantsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


// MeetingRegistrantsRegistrationListRegistrantsCustomQuestions
/** 
 * Custom Question.
**/
export class MeetingRegistrantsRegistrationListRegistrantsCustomQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// MeetingRegistrantsRegistrationListRegistrants
/** 
 * Registrant base object.
**/
export class MeetingRegistrantsRegistrationListRegistrants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=create_time" })
  createTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=custom_questions", elemType: MeetingRegistrantsRegistrationListRegistrantsCustomQuestions })
  customQuestions?: MeetingRegistrantsRegistrationListRegistrantsCustomQuestions[];

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

  @SpeakeasyMetadata({ data: "json, name=join_url" })
  joinUrl?: string;

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

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: string;
}


// MeetingRegistrantsRegistrationList
/** 
 * Pagination Object.
**/
export class MeetingRegistrantsRegistrationList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_count" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=page_number" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=registrants", elemType: MeetingRegistrantsRegistrationListRegistrants })
  registrants?: MeetingRegistrantsRegistrationListRegistrants[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class MeetingRegistrantsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MeetingRegistrantsPathParams;

  @SpeakeasyMetadata()
  queryParams: MeetingRegistrantsQueryParams;

  @SpeakeasyMetadata()
  security: MeetingRegistrantsSecurity;
}


export class MeetingRegistrantsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  registrationList?: MeetingRegistrantsRegistrationList;

  @SpeakeasyMetadata()
  statusCode: number;
}
