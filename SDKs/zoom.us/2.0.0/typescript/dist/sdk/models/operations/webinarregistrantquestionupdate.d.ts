import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WebinarRegistrantQuestionUpdateSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * The question-answer type.
 */
export declare enum WebinarRegistrantQuestionUpdateWebinarRegistrantQuestionsCustomQuestionsTypeEnum {
    Short = "short",
    SingleRadio = "single_radio",
    SingleDropdown = "single_dropdown",
    Multiple = "multiple"
}
export declare class WebinarRegistrantQuestionUpdateWebinarRegistrantQuestionsCustomQuestions extends SpeakeasyBase {
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
    type?: WebinarRegistrantQuestionUpdateWebinarRegistrantQuestionsCustomQuestionsTypeEnum;
}
/**
 * Field name
 */
export declare enum WebinarRegistrantQuestionUpdateWebinarRegistrantQuestionsQuestionsFieldNameEnum {
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
export declare class WebinarRegistrantQuestionUpdateWebinarRegistrantQuestionsQuestions extends SpeakeasyBase {
    /**
     * Field name
     */
    fieldName?: WebinarRegistrantQuestionUpdateWebinarRegistrantQuestionsQuestionsFieldNameEnum;
    /**
     * State whether the selected fields are required or optional.
     */
    required?: boolean;
}
/**
 * Webinar Registrant Questions
 */
export declare class WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions extends SpeakeasyBase {
    /**
     * Array of Registrant Custom Questions.
     */
    customQuestions?: WebinarRegistrantQuestionUpdateWebinarRegistrantQuestionsCustomQuestions[];
    /**
     * Array of registration fields whose values should be provided by registrants during registration.
     */
    questions?: WebinarRegistrantQuestionUpdateWebinarRegistrantQuestionsQuestions[];
}
export declare class WebinarRegistrantQuestionUpdateRequest extends SpeakeasyBase {
    /**
     * Webinar Registrant Questions
     */
    requestBody: WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions;
    /**
     * The webinar ID in "**long**" format(represented as int64 data type in JSON).
     */
    webinarId: number;
}
export declare class WebinarRegistrantQuestionUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
