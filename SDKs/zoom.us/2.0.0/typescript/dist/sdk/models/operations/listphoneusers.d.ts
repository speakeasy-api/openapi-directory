import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListPhoneUsersSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ListPhoneUsersRequest extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned from a single API call.
     */
    pageSize?: number;
    /**
     * Unique Identifier of the site. This can be retrieved from the [List Phone Sites](https://marketplace.zoom.us/docs/api-reference/zoom-api/phone-site/listphonesites) API.
     */
    siteId?: string;
}
export declare class ListPhoneUsers200ApplicationXMLUsersCallingPlans extends SpeakeasyBase {
    /**
     * Name of the calling plan that user is enrolled in.
     */
    name?: string;
    /**
     * Type of calling plan that user is enrolled in.
     */
    type?: string;
}
export declare class ListPhoneUsers200ApplicationXMLUsersSite extends SpeakeasyBase {
    /**
     * Unique Identifier of the [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites).
     */
    id?: string;
    /**
     * Name of the site.
     */
    name?: string;
}
export declare class ListPhoneUsers200ApplicationXMLUsers extends SpeakeasyBase {
    callingPlans?: ListPhoneUsers200ApplicationXMLUsersCallingPlans[];
    /**
     * Email address of the user.
     */
    email?: string;
    /**
     * Extension number assigned to the user's Zoom phone number.
     */
    extensionNumber?: number;
    /**
     * Unique Identifier of the user (userId).
     */
    id?: string;
    /**
     * Name of the user.
     */
    name?: string;
    /**
     * Zoom Phone Identifier of the user.
     */
    phoneUserId?: string;
    site?: ListPhoneUsers200ApplicationXMLUsersSite;
    /**
     * Displays the status of the user's Zoom Phone license. The value can be either of the following:<br>
     *
     * @remarks
     * `activate`: Active Zoom phone user.<br>
     * `deactivate`: User with Zoom phone license disabled. This type of user can't make or receive calls.
     */
    status?: string;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Phone users retrieved successfully.
 */
export declare class ListPhoneUsers200ApplicationXML extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned from a single API call.
     */
    pageSize?: number;
    /**
     * The total records found for this query.
     */
    totalRecords?: number;
    users?: ListPhoneUsers200ApplicationXMLUsers[];
}
export declare class ListPhoneUsers200ApplicationJSONUsersCallingPlans extends SpeakeasyBase {
    /**
     * Name of the calling plan that user is enrolled in.
     */
    name?: string;
    /**
     * Type of calling plan that user is enrolled in.
     */
    type?: string;
}
export declare class ListPhoneUsers200ApplicationJSONUsersSite extends SpeakeasyBase {
    /**
     * Unique Identifier of the [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites).
     */
    id?: string;
    /**
     * Name of the site.
     */
    name?: string;
}
export declare class ListPhoneUsers200ApplicationJSONUsers extends SpeakeasyBase {
    callingPlans?: ListPhoneUsers200ApplicationJSONUsersCallingPlans[];
    /**
     * Email address of the user.
     */
    email?: string;
    /**
     * Extension number assigned to the user's Zoom phone number.
     */
    extensionNumber?: number;
    /**
     * Unique Identifier of the user (userId).
     */
    id?: string;
    /**
     * Name of the user.
     */
    name?: string;
    /**
     * Zoom Phone Identifier of the user.
     */
    phoneUserId?: string;
    site?: ListPhoneUsers200ApplicationJSONUsersSite;
    /**
     * Displays the status of the user's Zoom Phone license. The value can be either of the following:<br>
     *
     * @remarks
     * `activate`: Active Zoom phone user.<br>
     * `deactivate`: User with Zoom phone license disabled. This type of user can't make or receive calls.
     */
    status?: string;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Phone users retrieved successfully.
 */
export declare class ListPhoneUsers200ApplicationJSON extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned from a single API call.
     */
    pageSize?: number;
    /**
     * The total records found for this query.
     */
    totalRecords?: number;
    users?: ListPhoneUsers200ApplicationJSONUsers[];
}
export declare class ListPhoneUsersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * Phone users retrieved successfully.
     */
    listPhoneUsers200ApplicationJSONObject?: ListPhoneUsers200ApplicationJSON;
}
