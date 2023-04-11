import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MeetingRegistrantQuestionUpdateSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Type of the question being asked.
 */
export declare enum MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestionsTypeEnum {
    Short = "short",
    Single = "single"
}
export declare class MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions extends SpeakeasyBase {
    /**
     * Answer choices for the question. Can not be used for `short` question type as this type of question requires registrants to type out the answer.
     */
    answers?: string[];
    /**
     * Indicates whether or not the custom question is required to be answered by participants or not.
     */
    required?: boolean;
    /**
     * Title of the custom question.
     */
    title?: string;
    /**
     * Type of the question being asked.
     */
    type?: MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestionsTypeEnum;
}
/**
 * Field name of the question.
 */
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
    /**
     * Field name of the question.
     */
    fieldName?: MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum;
    /**
     * Indicates whether or not the displayed fields are required to be filled out by registrants.
     */
    required?: boolean;
}
/**
 * Meeting Registrant Questions
 */
export declare class MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions extends SpeakeasyBase {
    /**
     * Array of Registrant Custom Questions
     */
    customQuestions?: MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions[];
    /**
     * Array of Registrant Questions
     */
    questions?: MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestions[];
}
export declare class MeetingRegistrantQuestionUpdateRequest extends SpeakeasyBase {
    /**
     * Meeting Registrant Questions
     */
    requestBody: MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions;
    /**
     * The meeting ID in **long** format. The data type of this field is "long"(represented as int64 in JSON).
     *
     * @remarks
     *
     * While storing it in your database, store it as a **long** data type and **not as an integer**, as the Meeting IDs can be longer than 10 digits.
     */
    meetingId: number;
}
export declare class MeetingRegistrantQuestionUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
