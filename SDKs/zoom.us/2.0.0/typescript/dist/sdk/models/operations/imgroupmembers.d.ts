import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ImGroupMembersSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ImGroupMembersRequest extends SpeakeasyBase {
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
/**
 * Group member object.
 */
export declare class ImGroupMembersGroupMemberListMembers extends SpeakeasyBase {
    /**
     * User email.
     */
    email?: string;
    /**
     * User first name.
     */
    firstName?: string;
    /**
     * User ID.
     */
    id?: string;
    /**
     * User last name.
     */
    lastName?: string;
    /**
     * User type.<br>
     *
     * @remarks
     * `1` - Basic<br> `2` - Licensed<br>
     * `3` - On-prem
     */
    type?: number;
}
/**
 * Pagination Object.
 */
export declare class ImGroupMembersGroupMemberList extends SpeakeasyBase {
    /**
     * List of Group member objects.
     */
    members?: ImGroupMembersGroupMemberListMembers[];
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
     * The total number of all the records available across pages.
     */
    totalRecords?: number;
}
export declare class ImGroupMembersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **HTTP Status Code:** `200` <br>
     *
     * @remarks
     * IM group member list returned.<br>
     * **Error Code:** `200` <br>
     * Only available for paid account:{accountId}.
     */
    groupMemberList?: ImGroupMembersGroupMemberList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
