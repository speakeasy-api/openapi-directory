import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListPastWebinarQASecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ListPastWebinarQARequest extends SpeakeasyBase {
    /**
     * The webinar ID or the webinar UUID.  If a webinar ID is provided in the request instead of a UUID, the response will be for the latest webinar instance.
     *
     * @remarks
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875==\"), you must **double encode** the UUID before making an API request.
     */
    webinarId: string;
}
export declare class ListPastWebinarQa200ApplicationXMLQuestionsQuestionDetails extends SpeakeasyBase {
    /**
     * Answer submitted for the question.
     */
    answer?: string;
    /**
     * Question asked during the Q&A.
     */
    question?: string;
}
export declare class ListPastWebinarQa200ApplicationXMLQuestions extends SpeakeasyBase {
    /**
     * Email address of the user.
     */
    email?: string;
    /**
     * Name of the user. If "anonymous" option is enabled for the Q&A, the participant's  information will be kept anonymous and the value of `name` field will be "Anonymous Attendee".
     */
    name?: string;
    questionDetails?: ListPastWebinarQa200ApplicationXMLQuestionsQuestionDetails[];
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Q&A returned successfully.
 */
export declare class ListPastWebinarQa200ApplicationXML extends SpeakeasyBase {
    /**
     * Webinar ID in "**long**" format(represented as int64 data type in JSON), also known as the webinar number.
     */
    id?: number;
    questions?: ListPastWebinarQa200ApplicationXMLQuestions[];
    /**
     * The start time of the Webinar.
     */
    startTime?: Date;
    /**
     * Webinar UUID.
     */
    uuid?: string;
}
export declare class ListPastWebinarQa200ApplicationJSONQuestionsQuestionDetails extends SpeakeasyBase {
    /**
     * Answer submitted for the question.
     */
    answer?: string;
    /**
     * Question asked during the Q&A.
     */
    question?: string;
}
export declare class ListPastWebinarQa200ApplicationJSONQuestions extends SpeakeasyBase {
    /**
     * Email address of the user.
     */
    email?: string;
    /**
     * Name of the user. If "anonymous" option is enabled for the Q&A, the participant's  information will be kept anonymous and the value of `name` field will be "Anonymous Attendee".
     */
    name?: string;
    questionDetails?: ListPastWebinarQa200ApplicationJSONQuestionsQuestionDetails[];
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Q&A returned successfully.
 */
export declare class ListPastWebinarQa200ApplicationJSON extends SpeakeasyBase {
    /**
     * Webinar ID in "**long**" format(represented as int64 data type in JSON), also known as the webinar number.
     */
    id?: number;
    questions?: ListPastWebinarQa200ApplicationJSONQuestions[];
    /**
     * The start time of the Webinar.
     */
    startTime?: Date;
    /**
     * Webinar UUID.
     */
    uuid?: string;
}
export declare class ListPastWebinarQAResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * Q&A returned successfully.
     */
    listPastWebinarQA200ApplicationJSONObject?: ListPastWebinarQa200ApplicationJSON;
}
