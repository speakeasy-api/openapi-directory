import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WebinarRegistrantsQuestionsGetSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class WebinarRegistrantsQuestionsGetRequest extends SpeakeasyBase {
    /**
     * The webinar ID in "**long**" format(represented as int64 data type in JSON).
     */
    webinarId: number;
}
/**
 * The question-answer type.
 */
export declare enum WebinarRegistrantsQuestionsGetWebinarRegistrantQuestionsCustomQuestionsTypeEnum {
    Short = "short",
    SingleRadio = "single_radio",
    SingleDropdown = "single_dropdown",
    Multiple = "multiple"
}
export declare class WebinarRegistrantsQuestionsGetWebinarRegistrantQuestionsCustomQuestions extends SpeakeasyBase {
    /**
     * An array of answer choices. Can't be used for short answer type.
     */
    answers?: string[];
    /**
     * State whether or not the custom question is required to be answered by a registrant.
     */
    required?: boolean;
    /**
     * Custom question.
     */
    title?: string;
    /**
     * The question-answer type.
     */
    type?: WebinarRegistrantsQuestionsGetWebinarRegistrantQuestionsCustomQuestionsTypeEnum;
}
/**
 * Field name
 */
export declare enum WebinarRegistrantsQuestionsGetWebinarRegistrantQuestionsQuestionsFieldNameEnum {
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
export declare class WebinarRegistrantsQuestionsGetWebinarRegistrantQuestionsQuestions extends SpeakeasyBase {
    /**
     * Field name
     */
    fieldName?: WebinarRegistrantsQuestionsGetWebinarRegistrantQuestionsQuestionsFieldNameEnum;
    /**
     * State whether the selected fields are required or optional.
     */
    required?: boolean;
}
/**
 * Webinar Registrant Questions
 */
export declare class WebinarRegistrantsQuestionsGetWebinarRegistrantQuestions extends SpeakeasyBase {
    /**
     * Array of Registrant Custom Questions.
     */
    customQuestions?: WebinarRegistrantsQuestionsGetWebinarRegistrantQuestionsCustomQuestions[];
    /**
     * Array of registration fields whose values should be provided by registrants during registration.
     */
    questions?: WebinarRegistrantsQuestionsGetWebinarRegistrantQuestionsQuestions[];
}
export declare class WebinarRegistrantsQuestionsGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Webinar Registrant Question object returned
     */
    webinarRegistrantQuestions?: WebinarRegistrantsQuestionsGetWebinarRegistrantQuestions;
}
