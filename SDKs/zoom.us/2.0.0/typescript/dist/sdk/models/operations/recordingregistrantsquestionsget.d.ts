import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RecordingRegistrantsQuestionsGetSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class RecordingRegistrantsQuestionsGetRequest extends SpeakeasyBase {
    /**
     * To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance.
     *
     * @remarks
     *
     * To get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance.
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875=="), you must **double encode** the UUID before making an API request.
     */
    meetingId: string;
}
/**
 * The type of registration question and answers.
 */
export declare enum RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnum {
    Short = "short",
    Single = "single",
    Multiple = "multiple"
}
export declare class RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions extends SpeakeasyBase {
    /**
     * Answer choices for the question. Can not be used with Short answer type.
     */
    answers?: string[];
    /**
     * State whether registrants are required to answer custom questions or not.
     */
    required?: boolean;
    /**
     * Title of the question.
     */
    title?: string;
    /**
     * The type of registration question and answers.
     */
    type?: RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnum;
}
/**
 * Field name.
 */
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
    /**
     * Field name.
     */
    fieldName?: RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum;
    /**
     * State whether the field is required to be answered by the registrant or not.
     */
    required?: boolean;
}
/**
 * Recording Registrant Questions
 */
export declare class RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions extends SpeakeasyBase {
    /**
     * Array of Registrant Custom Questions
     */
    customQuestions?: RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions[];
    /**
     * Array of Registrant Questions
     */
    questions?: RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestions[];
}
export declare class RecordingRegistrantsQuestionsGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Recording Registrant Question object returned.
     */
    recordingRegistrantQuestions?: RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
