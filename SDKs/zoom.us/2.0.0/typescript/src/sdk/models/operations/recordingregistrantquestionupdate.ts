import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecordingRegistrantQuestionUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: string;
}

export enum RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestionsTypeEnum {
    Short = "short",
    Single = "single",
    Multiple = "multiple"
}


export class RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answers" })
  answers?: string[];

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestionsTypeEnum;
}

export enum RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum {
    LastName = "last_name",
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


export class RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field_name" })
  fieldName?: RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;
}


// RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions
/** 
 * Recording Registrant Questions
**/
export class RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_questions, multipart_form, name=custom_questions;json=true", elemType: RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions })
  customQuestions?: RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions[];

  @SpeakeasyMetadata({ data: "json, name=questions, multipart_form, name=questions;json=true", elemType: RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestions })
  questions?: RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestions[];
}


export class RecordingRegistrantQuestionUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  recordingRegistrantQuestions?: RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  recordingRegistrantQuestions1?: RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions;
}


export class RecordingRegistrantQuestionUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class RecordingRegistrantQuestionUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RecordingRegistrantQuestionUpdatePathParams;

  @SpeakeasyMetadata()
  request: RecordingRegistrantQuestionUpdateRequests;

  @SpeakeasyMetadata()
  security: RecordingRegistrantQuestionUpdateSecurity;
}


export class RecordingRegistrantQuestionUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
