import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeetingRegistrantQuestionUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: number;
}

export enum MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestionsTypeEnum {
    Short = "short",
    Single = "single"
}


export class MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answers" })
  answers?: string[];

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestionsTypeEnum;
}

export enum MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum {
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


export class MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field_name" })
  fieldName?: MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;
}


// MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions
/** 
 * Meeting Registrant Questions
**/
export class MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_questions, multipart_form, name=custom_questions;json=true", elemType: MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions })
  customQuestions?: MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions[];

  @SpeakeasyMetadata({ data: "json, name=questions, multipart_form, name=questions;json=true", elemType: MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestions })
  questions?: MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestions[];
}


export class MeetingRegistrantQuestionUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  meetingRegistrantQuestions?: MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  meetingRegistrantQuestions1?: MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions;
}


export class MeetingRegistrantQuestionUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class MeetingRegistrantQuestionUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MeetingRegistrantQuestionUpdatePathParams;

  @SpeakeasyMetadata()
  request: MeetingRegistrantQuestionUpdateRequests;

  @SpeakeasyMetadata()
  security: MeetingRegistrantQuestionUpdateSecurity;
}


export class MeetingRegistrantQuestionUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
