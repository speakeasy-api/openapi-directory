import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MeetingRegistrantsQuestionsGetPathParams extends SpeakeasyBase {
    meetingId: number;
}
export declare class MeetingRegistrantsQuestionsGetSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestionsTypeEnum {
    Short = "short",
    Single = "single"
}
export declare class MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions extends SpeakeasyBase {
    answers?: string[];
    required?: boolean;
    title?: string;
    type?: MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestionsTypeEnum;
}
export declare enum MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum {
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
export declare class MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestions extends SpeakeasyBase {
    fieldName?: MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum;
    required?: boolean;
}
/**
 * Meeting Registrant Questions
**/
export declare class MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions extends SpeakeasyBase {
    customQuestions?: MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions[];
    questions?: MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestions[];
}
export declare class MeetingRegistrantsQuestionsGetRequest extends SpeakeasyBase {
    pathParams: MeetingRegistrantsQuestionsGetPathParams;
    security: MeetingRegistrantsQuestionsGetSecurity;
}
export declare class MeetingRegistrantsQuestionsGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    meetingRegistrantQuestions?: MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions;
    statusCode: number;
}
