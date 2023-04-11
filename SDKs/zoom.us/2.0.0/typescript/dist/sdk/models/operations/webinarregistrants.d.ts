import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WebinarRegistrantsSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * The registrant status:<br>`pending` - Registrant's status is pending.<br>`approved` - Registrant's status is approved.<br>`denied` - Registrant's status is denied.
 */
export declare enum WebinarRegistrantsStatusEnum {
    Pending = "pending",
    Approved = "approved",
    Denied = "denied"
}
export declare class WebinarRegistrantsRequest extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The meeting occurrence ID.
     */
    occurrenceId?: string;
    /**
     *
     * @remarks
     * **Deprecated** - This field has been deprecated and we will stop supporting it completely in a future release. Please use "next_page_token" for pagination instead of this field.
     *
     * The page number of the current page in the returned records.
     */
    pageNumber?: number;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The registrant status:<br>`pending` - Registrant's status is pending.<br>`approved` - Registrant's status is approved.<br>`denied` - Registrant's status is denied.
     */
    status?: WebinarRegistrantsStatusEnum;
    /**
     * The tracking source ID for the registrants. Useful if you share the webinar registration page in multiple locations. See [Creating source tracking links for webinar registration](https://support.zoom.us/hc/en-us/articles/360000315683-Creating-source-tracking-links-for-webinar-registration) for details.
     */
    trackingSourceId?: string;
    /**
     * The webinar ID in "**long**" format(represented as int64 data type in JSON).
     */
    webinarId: number;
}
/**
 * Custom Question.
 */
export declare class WebinarRegistrantsRegistrationListRegistrantsCustomQuestions extends SpeakeasyBase {
    title?: string;
    value?: string;
}
/**
 * Registrant base object.
 */
export declare class WebinarRegistrantsRegistrationListRegistrants extends SpeakeasyBase {
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
     * The time at which the registrant registered.
     */
    createTime?: Date;
    /**
     * Custom questions.
     */
    customQuestions?: WebinarRegistrantsRegistrationListRegistrantsCustomQuestions[];
    /**
     * A valid email address of the registrant.
     */
    email: string;
    /**
     * Registrant's first name.
     */
    firstName: string;
    /**
     * Registrant ID.
     */
    id?: string;
    /**
     * Registrant's Industry.
     */
    industry?: string;
    /**
     * Registrant's job title.
     */
    jobTitle?: string;
    /**
     * The URL using which an approved registrant can join the webinar.
     */
    joinUrl?: string;
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
     * The status of the registrant's registration. <br> `approved`: User has been successfully approved for the webinar.<br> `pending`:  The registration is still pending.<br> `denied`: User has been denied from joining the webinar.
     */
    status?: string;
    /**
     * Registrant's Zip/Postal Code.
     */
    zip?: string;
}
/**
 * Pagination Object.
 */
export declare class WebinarRegistrantsRegistrationList extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of pages returned for the request made.
     */
    pageCount?: number;
    /**
     * **Deprecated**: This field has been deprecated. Please use the "next_page_token" field for pagination instead of this field.
     *
     * @remarks
     *
     * The page number of the current results.
     */
    pageNumber?: number;
    /**
     * The number of records returned with a single API call.
     */
    pageSize?: number;
    /**
     * List of registrant objects.
     */
    registrants?: WebinarRegistrantsRegistrationListRegistrants[];
    /**
     * The total number of all the records available across pages.
     */
    totalRecords?: number;
}
export declare class WebinarRegistrantsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Webinar plan subscription is missing. Enable webinar for this user once the subscription is added:{userId}.
     */
    registrationList?: WebinarRegistrantsRegistrationList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
