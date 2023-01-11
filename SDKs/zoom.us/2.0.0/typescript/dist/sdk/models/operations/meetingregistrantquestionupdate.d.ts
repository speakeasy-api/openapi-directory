import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MeetingRegistrantQuestionUpdatePathParams extends SpeakeasyBase {
    meetingId: number;
}
export declare enum MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestionsTypeEnum {
    Short = "short",
    Single = "single"
}
export declare class MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions extends SpeakeasyBase {
    answers?: string[];
    required?: boolean;
    title?: string;
    type?: MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestionsTypeEnum;
}
export declare enum MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum {
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
export declare class MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestions extends SpeakeasyBase {
    fieldName?: MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum;
    required?: boolean;
}
/**
 * Meeting Registrant Questions
**/
export declare class MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions extends SpeakeasyBase {
    customQuestions?: MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions[];
    questions?: MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestions[];
}
export declare class MeetingRegistrantQuestionUpdateRequests extends SpeakeasyBase {
    meetingRegistrantQuestions?: MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions;
    meetingRegistrantQuestions1?: MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions;
}
export declare class MeetingRegistrantQuestionUpdateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class MeetingRegistrantQuestionUpdateRequest extends SpeakeasyBase {
    pathParams: MeetingRegistrantQuestionUpdatePathParams;
    request: MeetingRegistrantQuestionUpdateRequests;
    security: MeetingRegistrantQuestionUpdateSecurity;
}
export declare class MeetingRegistrantQuestionUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
