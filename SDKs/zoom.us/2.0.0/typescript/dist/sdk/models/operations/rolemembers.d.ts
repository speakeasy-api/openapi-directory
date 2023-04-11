import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RoleMembersSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class RoleMembersRequest extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of pages returned for this request.
     */
    pageCount?: string;
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
     * The role ID
     */
    roleId: string;
}
export declare class RoleMembersRoleMembersListMembers extends SpeakeasyBase {
    /**
     * Member Department
     */
    department?: string;
    /**
     * Member Email
     */
    email?: string;
    /**
     * Member First Name
     */
    firstName?: string;
    /**
     * Member ID
     */
    id?: string;
    /**
     * Member Last Name
     */
    lastName?: string;
    /**
     * Member Type
     */
    type?: number;
}
/**
 * List of a Role Members
 */
export declare class RoleMembersRoleMembersList extends SpeakeasyBase {
    /**
     * List of a Role Members
     */
    members?: RoleMembersRoleMembersListMembers[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of pages returned for the request made.
     */
    pageCount?: number;
    /**
     * The page number of the current results.
     */
    pageNumber?: number;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The total number of all the records available across pages.
     */
    totalRecords?: number;
}
export declare class RoleMembersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Success
     */
    roleMembersList?: RoleMembersRoleMembersList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
