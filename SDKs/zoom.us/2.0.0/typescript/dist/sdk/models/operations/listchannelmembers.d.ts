import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListChannelMembersSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ListChannelMembersRequest extends SpeakeasyBase {
    /**
     * Channel Id.
     */
    channelId: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned with a single API call.
     */
    pageSize?: number;
    /**
     * Unique identifier of the user who is the owner of this channel.
     */
    userId: string;
}
/**
 * The role of the member. The value can be one of these: `owner`, `admin`, `member`.
 */
export declare enum ListChannelMembers200ApplicationXMLMembersRoleEnum {
    Admin = "admin",
    Owner = "owner",
    Member = "member"
}
export declare class ListChannelMembers200ApplicationXMLMembers extends SpeakeasyBase {
    /**
     * Email address of the member.
     */
    email?: string;
    /**
     * Member's first name.
     */
    firstName?: string;
    /**
     * Member ID: Unique Identifier of the member.
     */
    id?: string;
    /**
     * Member's last name.
     */
    lastName?: string;
    /**
     * The role of the member. The value can be one of these: `owner`, `admin`, `member`.
     */
    role?: ListChannelMembers200ApplicationXMLMembersRoleEnum;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * List of channel members returned.
 *
 *
 */
export declare class ListChannelMembers200ApplicationXML extends SpeakeasyBase {
    /**
     * Members in a channel.
     */
    members?: ListChannelMembers200ApplicationXMLMembers[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned with a single API call.
     */
    pageSize?: number;
    /**
     * The total number of records returned.
     */
    totalRecords?: number;
}
/**
 * The role of the member. The value can be one of these: `owner`, `admin`, `member`.
 */
export declare enum ListChannelMembers200ApplicationJSONMembersRoleEnum {
    Admin = "admin",
    Owner = "owner",
    Member = "member"
}
export declare class ListChannelMembers200ApplicationJSONMembers extends SpeakeasyBase {
    /**
     * Email address of the member.
     */
    email?: string;
    /**
     * Member's first name.
     */
    firstName?: string;
    /**
     * Member ID: Unique Identifier of the member.
     */
    id?: string;
    /**
     * Member's last name.
     */
    lastName?: string;
    /**
     * The role of the member. The value can be one of these: `owner`, `admin`, `member`.
     */
    role?: ListChannelMembers200ApplicationJSONMembersRoleEnum;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * List of channel members returned.
 *
 *
 */
export declare class ListChannelMembers200ApplicationJSON extends SpeakeasyBase {
    /**
     * Members in a channel.
     */
    members?: ListChannelMembers200ApplicationJSONMembers[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned with a single API call.
     */
    pageSize?: number;
    /**
     * The total number of records returned.
     */
    totalRecords?: number;
}
export declare class ListChannelMembersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * List of channel members returned.
     *
     *
     */
    listChannelMembers200ApplicationJSONObject?: ListChannelMembers200ApplicationJSON;
}
