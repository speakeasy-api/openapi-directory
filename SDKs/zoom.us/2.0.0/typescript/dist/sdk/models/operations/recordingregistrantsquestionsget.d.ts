import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecordingRegistrantsQuestionsGetPathParams extends SpeakeasyBase {
    meetingId: string;
}
export declare class RecordingRegistrantsQuestionsGetSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnum {
    Short = "short",
    Single = "single",
    Multiple = "multiple"
}
export declare class RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions extends SpeakeasyBase {
    answers?: string[];
    required?: boolean;
    title?: string;
    type?: RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnum;
}
export declare enum RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum {
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
export declare class RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestions extends SpeakeasyBase {
    fieldName?: RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum;
    required?: boolean;
}
/**
 * Recording Registrant Questions
**/
export declare class RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions extends SpeakeasyBase {
    customQuestions?: RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions[];
    questions?: RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestions[];
}
export declare class RecordingRegistrantsQuestionsGetRequest extends SpeakeasyBase {
    pathParams: RecordingRegistrantsQuestionsGetPathParams;
    security: RecordingRegistrantsQuestionsGetSecurity;
}
export declare class RecordingRegistrantsQuestionsGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    recordingRegistrantQuestions?: RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions;
    statusCode: number;
}
