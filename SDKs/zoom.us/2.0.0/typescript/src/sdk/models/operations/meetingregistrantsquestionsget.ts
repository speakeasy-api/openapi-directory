import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeetingRegistrantsQuestionsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: number;
}


export class MeetingRegistrantsQuestionsGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestionsTypeEnum {
    Short = "short",
    Single = "single"
}


export class MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answers" })
  answers?: string[];

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestionsTypeEnum;
}

export enum MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum {
    Address = "address",
    City = "city",
    Country = "country",
    Zip = "zip",
    State = "state",
    Phone = "phone",
    Industry = "industry",
    Org = "org",
    JobTitle = "job_title",
    PurchasingTimeFrame = "purchasing_time_frame",
    RoleInPurchaseProcess = "role_in_purchase_process",
    NoOfEmployees = "no_of_employees",
    Comments = "comments"
}


export class MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field_name" })
  fieldName?: MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;
}


// MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions
/** 
 * Meeting Registrant Questions
**/
export class MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_questions", elemType: MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions })
  customQuestions?: MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions[];

  @SpeakeasyMetadata({ data: "json, name=questions", elemType: MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestions })
  questions?: MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestions[];
}


export class MeetingRegistrantsQuestionsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MeetingRegistrantsQuestionsGetPathParams;

  @SpeakeasyMetadata()
  security: MeetingRegistrantsQuestionsGetSecurity;
}


export class MeetingRegistrantsQuestionsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  meetingRegistrantQuestions?: MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions;

  @SpeakeasyMetadata()
  statusCode: number;
}
