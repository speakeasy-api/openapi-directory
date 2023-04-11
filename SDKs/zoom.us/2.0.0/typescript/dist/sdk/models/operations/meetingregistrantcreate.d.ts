import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MeetingRegistrantCreateSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Custom Question.
 */
export declare class MeetingRegistrantCreateApplicationJSONCustomQuestions extends SpeakeasyBase {
    title?: string;
    value?: string;
}
/**
 * Registrant base object.
 */
export declare class MeetingRegistrantCreateApplicationJSON extends SpeakeasyBase {
    /**
     * Registrant's address.
     */
    address?: string;
    autoApprove?: boolean;
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
    customQuestions?: MeetingRegistrantCreateApplicationJSONCustomQuestions[];
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
     * Registrant's language preference for confirmation  emails. The value can be one of the following:
     *
     * @remarks
     * `en-US`,`de-DE`,`es-ES`,`fr-FR`,`jp-JP`,`pt-PT`,`ru-RU`,`zh-CN`, `zh-TW`, `ko-KO`, `it-IT`, `vi-VN`.
     */
    language?: string;
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
export declare class MeetingRegistrantCreateRequest extends SpeakeasyBase {
    requestBody: MeetingRegistrantCreateApplicationJSON;
    /**
     * The meeting ID in **long** format. The data type of this field is "long"(represented as int64 in JSON).
     *
     * @remarks
     *
     * While storing it in your database, store it as a **long** data type and **not as an integer**, as the Meeting IDs can be longer than 10 digits.
     */
    meetingId: number;
    /**
     * Occurrence IDs. You can find these with the meeting get API. Multiple values separated by comma.
     */
    occurrenceIds?: string;
}
/**
 * **HTTP Status Code:** `201`<br>
 *
 * @remarks
 * Registration created.
 */
export declare class MeetingRegistrantCreate201ApplicationXML extends SpeakeasyBase {
    /**
     * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
     */
    id?: number;
    /**
     * Unique URL for this registrant to join the meeting. This URL should only be shared with the registrant for whom the API request was made.
     *
     * @remarks
     * If the meeting was [created](https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingcreate) with manual approval type (`approval_type`: 1), the join URL will not be returned in the response.
     */
    joinUrl?: string;
    /**
     * Unique identifier of the registrant.
     */
    registrantId?: string;
    /**
     * The start time for the meeting.
     */
    startTime?: string;
    /**
     * Topic of the meeting.
     */
    topic?: string;
}
/**
 * **HTTP Status Code:** `201`<br>
 *
 * @remarks
 * Registration created.
 */
export declare class MeetingRegistrantCreate201ApplicationJSON extends SpeakeasyBase {
    /**
     * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
     */
    id?: number;
    /**
     * Unique URL for this registrant to join the meeting. This URL should only be shared with the registrant for whom the API request was made.
     *
     * @remarks
     * If the meeting was [created](https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingcreate) with manual approval type (`approval_type`: 1), the join URL will not be returned in the response.
     */
    joinUrl?: string;
    /**
     * Unique identifier of the registrant.
     */
    registrantId?: string;
    /**
     * The start time for the meeting.
     */
    startTime?: string;
    /**
     * Topic of the meeting.
     */
    topic?: string;
}
export declare class MeetingRegistrantCreateResponse extends SpeakeasyBase {
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
    meetingRegistrantCreate201ApplicationJSONObject?: MeetingRegistrantCreate201ApplicationJSON;
}
