import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecordingRegistrantQuestionUpdatePathParams extends SpeakeasyBase {
    meetingId: string;
}
export declare enum RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestionsTypeEnum {
    Short = "short",
    Single = "single",
    Multiple = "multiple"
}
export declare class RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions extends SpeakeasyBase {
    answers?: string[];
    required?: boolean;
    title?: string;
    type?: RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestionsTypeEnum;
}
export declare enum RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum {
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
export declare class RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestions extends SpeakeasyBase {
    fieldName?: RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum;
    required?: boolean;
}
/**
 * Recording Registrant Questions
**/
export declare class RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions extends SpeakeasyBase {
    customQuestions?: RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions[];
    questions?: RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestions[];
}
export declare class RecordingRegistrantQuestionUpdateRequests extends SpeakeasyBase {
    recordingRegistrantQuestions?: RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions;
    recordingRegistrantQuestions1?: RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions;
}
export declare class RecordingRegistrantQuestionUpdateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class RecordingRegistrantQuestionUpdateRequest extends SpeakeasyBase {
    pathParams: RecordingRegistrantQuestionUpdatePathParams;
    request: RecordingRegistrantQuestionUpdateRequests;
    security: RecordingRegistrantQuestionUpdateSecurity;
}
export declare class RecordingRegistrantQuestionUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
