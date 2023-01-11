import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecordingRegistrantsQuestionsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: string;
}


export class RecordingRegistrantsQuestionsGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnum {
    Short = "short",
    Single = "single",
    Multiple = "multiple"
}


export class RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answers" })
  answers?: string[];

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnum;
}

export enum RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum {
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


export class RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field_name" })
  fieldName?: RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;
}


// RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions
/** 
 * Recording Registrant Questions
**/
export class RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_questions", elemType: RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions })
  customQuestions?: RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions[];

  @SpeakeasyMetadata({ data: "json, name=questions", elemType: RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestions })
  questions?: RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestions[];
}


export class RecordingRegistrantsQuestionsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RecordingRegistrantsQuestionsGetPathParams;

  @SpeakeasyMetadata()
  security: RecordingRegistrantsQuestionsGetSecurity;
}


export class RecordingRegistrantsQuestionsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  recordingRegistrantQuestions?: RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions;

  @SpeakeasyMetadata()
  statusCode: number;
}
