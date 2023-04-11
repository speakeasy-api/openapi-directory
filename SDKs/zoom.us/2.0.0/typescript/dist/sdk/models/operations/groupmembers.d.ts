import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GroupMembersSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class GroupMembersRequest extends SpeakeasyBase {
    /**
     * The group ID.<br>
     *
     * @remarks
     * Can be retrieved by calling [GET /groups](https://marketplace.zoom.us/docs/api-reference/zoom-api/groups/groups).
     */
    groupId: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
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
}
export declare class GroupMembers200ApplicationXMLMembers extends SpeakeasyBase {
    /**
     * User's email address.
     */
    email?: string;
    /**
     * First name of the user.
     */
    firstName?: string;
    /**
     * Unique Identifier of the user.
     */
    id?: string;
    /**
     * Last name of the user.
     */
    lastName?: string;
    /**
     * User type: <br> `1` - Basic<br> `2` - Licensed<br> `3` - On-prem
     */
    type?: number;
}
/**
 * **HTTP Status Code:** `200`<br> Only available for paid account,{accountId}.
 */
export declare class GroupMembers200ApplicationXML extends SpeakeasyBase {
    members?: GroupMembers200ApplicationXMLMembers[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of pages returned from this request.
     */
    pageCount?: number;
    /**
     * The page number of the current results.
     */
    pageNumber?: number;
    /**
     * The number of records returned from a single API call.
     */
    pageSize?: number;
    /**
     * The total number of records available across all pages.
     */
    totalRecords?: number;
}
export declare class GroupMembers200ApplicationJSONMembers extends SpeakeasyBase {
    /**
     * User's email address.
     */
    email?: string;
    /**
     * First name of the user.
     */
    firstName?: string;
    /**
     * Unique Identifier of the user.
     */
    id?: string;
    /**
     * Last name of the user.
     */
    lastName?: string;
    /**
     * User type: <br> `1` - Basic<br> `2` - Licensed<br> `3` - On-prem
     */
    type?: number;
}
/**
 * **HTTP Status Code:** `200`<br> Only available for paid account,{accountId}.
 */
export declare class GroupMembers200ApplicationJSON extends SpeakeasyBase {
    members?: GroupMembers200ApplicationJSONMembers[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of pages returned from this request.
     */
    pageCount?: number;
    /**
     * The page number of the current results.
     */
    pageNumber?: number;
    /**
     * The number of records returned from a single API call.
     */
    pageSize?: number;
    /**
     * The total number of records available across all pages.
     */
    totalRecords?: number;
}
export declare class GroupMembersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br> Only available for paid account,{accountId}.
     */
    groupMembers200ApplicationJSONObject?: GroupMembers200ApplicationJSON;
}
