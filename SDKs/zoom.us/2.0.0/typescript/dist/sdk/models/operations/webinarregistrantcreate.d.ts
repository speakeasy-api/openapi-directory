import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WebinarRegistrantCreateSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Custom Question.
 */
export declare class WebinarRegistrantCreateApplicationJSONCustomQuestions extends SpeakeasyBase {
    title?: string;
    value?: string;
}
/**
 * Registrant base object.
 */
export declare class WebinarRegistrantCreateApplicationJSON extends SpeakeasyBase {
    /**
     * Registrant's address.
     */
    address?: string;
    /**
     * Registrant's city.
     */
    city?: string;
    /**
     * A field that allows registrants to provide any questions or comments that they might have.
     */
    comments?: string;
    /**
     * Registrant's country. The value of this field must be in two-letter abbreviated form and must match the ID field provided in the [Countries](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries) table.
     */
    country?: string;
    /**
     * Custom questions.
     */
    customQuestions?: WebinarRegistrantCreateApplicationJSONCustomQuestions[];
    /**
     * A valid email address of the registrant.
     */
    email: string;
    /**
     * Registrant's first name.
     */
    firstName: string;
    /**
     * Registrant's Industry.
     */
    industry?: string;
    /**
     * Registrant's job title.
     */
    jobTitle?: string;
    /**
     * Registrant's last name.
     */
    lastName?: string;
    /**
     * Number of Employees:<br>`1-20`<br>`21-50`<br>`51-100`<br>`101-500`<br>`500-1,000`<br>`1,001-5,000`<br>`5,001-10,000`<br>`More than 10,000`
     */
    noOfEmployees?: string;
    /**
     * Registrant's Organization.
     */
    org?: string;
    /**
     * Registrant's Phone number.
     */
    phone?: string;
    /**
     * This field can be included to gauge interest of webinar attendees towards buying your product or service.
     *
     * @remarks
     *
     * Purchasing Time Frame:<br>`Within a month`<br>`1-3 months`<br>`4-6 months`<br>`More than 6 months`<br>`No timeframe`
     */
    purchasingTimeFrame?: string;
    /**
     * Role in Purchase Process:<br>`Decision Maker`<br>`Evaluator/Recommender`<br>`Influencer`<br>`Not involved`
     */
    roleInPurchaseProcess?: string;
    /**
     * Registrant's State/Province.
     */
    state?: string;
    /**
     * Registrant's Zip/Postal Code.
     */
    zip?: string;
}
export declare class WebinarRegistrantCreateRequest extends SpeakeasyBase {
    requestBody: WebinarRegistrantCreateApplicationJSON;
    /**
     * Occurrence ID. Get this value from the webinar get API. Multiple values separated by a comma.
     */
    occurrenceIds?: string;
    /**
     * The webinar ID in "**long**" format(represented as int64 data type in JSON).
     */
    webinarId: number;
}
/**
 * **HTTP Status Code:** `201`<br>
 *
 * @remarks
 * Registration created.
 */
export declare class WebinarRegistrantCreate201ApplicationXML extends SpeakeasyBase {
    /**
     * Webinar ID
     */
    id?: string;
    /**
     * Unique URL for this registrant to join the Webinar. This URL should only be shared with the registrant for whom the API request was made.
     */
    joinUrl?: string;
    /**
     * Registrant ID
     */
    registrantId?: string;
    /**
     * Start time
     */
    startTime?: Date;
    /**
     * Topic
     */
    topic?: string;
}
/**
 * **HTTP Status Code:** `201`<br>
 *
 * @remarks
 * Registration created.
 */
export declare class WebinarRegistrantCreate201ApplicationJSON extends SpeakeasyBase {
    /**
     * Webinar ID
     */
    id?: string;
    /**
     * Unique URL for this registrant to join the Webinar. This URL should only be shared with the registrant for whom the API request was made.
     */
    joinUrl?: string;
    /**
     * Registrant ID
     */
    registrantId?: string;
    /**
     * Start time
     */
    startTime?: Date;
    /**
     * Topic
     */
    topic?: string;
}
export declare class WebinarRegistrantCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201`<br>
     *
     * @remarks
     * Registration created.
     */
    webinarRegistrantCreate201ApplicationJSONObject?: WebinarRegistrantCreate201ApplicationJSON;
}
