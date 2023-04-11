import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UsersSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * User statuses:<br>`active` - Users with an active status.<br>`inactive` - Users who are deactivated.<br>`pending` - Users with a pending status.
 */
export declare enum UsersStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Pending = "pending"
}
export declare class UsersRequest extends SpeakeasyBase {
    /**
     * Provide a value for this field if you would like to see the following attribute in the response of this API call:<br>
     *
     * @remarks
     *
     * `custom_attributes`: Returns custom attributes that are associated with the user.<br>`host_key`: Returns [host key](https://support.zoom.us/hc/en-us/articles/205172555-Using-your-host-key) of the user.
     */
    includeFields?: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The page number of the current page in the returned records.
     */
    pageNumber?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * Unique identifier of the role. Provide this parameter if you would like to filter the response by a specific role. You can retrieve Role IDs from [List Roles](https://marketplace.zoom.us/docs/api-reference/zoom-api/roles/roles) API.
     */
    roleId?: string;
    /**
     * User statuses:<br>`active` - Users with an active status.<br>`inactive` - Users who are deactivated.<br>`pending` - Users with a pending status.
     */
    status?: UsersStatusEnum;
}
export declare class Users200ApplicationXMLUsersCustomAttributes extends SpeakeasyBase {
    /**
     * Unique identifier of the custom attribute.
     */
    key?: string;
    /**
     * Name of the custom attribute.
     */
    name?: string;
    /**
     * Value of the custom attribute.
     */
    value?: string;
}
export declare class Users200ApplicationXMLUsers extends SpeakeasyBase {
    /**
     * The time when user's account was created.
     */
    createdAt?: Date;
    /**
     * Custom attributes. This field is only returned if users have been assigned custom attributes and if you provided `custom_attributes` as the value of `include_fields` query parameter in the API request.
     */
    customAttributes?: Users200ApplicationXMLUsersCustomAttributes[];
    /**
     * Department, if provided by the user.
     */
    dept?: string;
    /**
     * User's email address.
     */
    email: string;
    /**
     * User's first name.
     */
    firstName?: string;
    /**
     * IDs of groups where the user is a member.
     */
    groupIds?: string[];
    /**
     * The [host key](https://support.zoom.us/hc/en-us/articles/205172555-Using-your-host-key) of the user. This field is only returned if users have been assigned a host key and if you provided `host_key` as the value of `include_fields` query parameter in the API request.
     */
    hostKey?: string;
    /**
     * User ID.
     */
    id?: string;
    /**
     * IDs of IM directory groups where the user is a member.
     */
    imGroupIds?: string[];
    /**
     * The last client version that user used to login.
     */
    lastClientVersion?: string;
    /**
     * User's last login time. There is a three-days buffer period for this field. For example, if user first logged in on 2020-01-01 and then logged out and logged in on 2020-01-02, the value of this field will still reflect the login time of 2020-01-01. However, if the user logs in on 2020-01-04, the value of this field will reflect the corresponding login time since it exceeds the three-day buffer period.
     */
    lastLoginTime?: Date;
    /**
     * User's last name.
     */
    lastName?: string;
    /**
     * This field is returned if the user is enrolled in the [Zoom United](https://zoom.us/pricing/zoom-bundles) plan.
     */
    planUnitedType?: string;
    /**
     * Personal meeting ID of the user.
     */
    pmi?: number;
    /**
     * Unique identifier of the [role](https://marketplace.zoom.us/docs/api-reference/zoom-api/roles/roles) assigned to the user.
     */
    roleId?: string;
    /**
     * User's status
     */
    status?: string;
    /**
     * The time zone of the user.
     */
    timezone?: string;
    /**
     * User's plan type.<br>
     *
     * @remarks
     * `1` - Basic.<br>
     * `2` - Licensed.<br>
     * `3` - On-prem.<br>
     * `99` - None (this can only be set with `ssoCreate`).
     *
     */
    type: number;
    /**
     * Display whether the user's email address for the Zoom account is verified or not. <br>
     *
     * @remarks
     * `1` - Verified user email.<br>
     * `0` - User's email not verified.
     */
    verified?: number;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * User list returned.
 */
export declare class Users200ApplicationXML extends SpeakeasyBase {
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
    /**
     * List of user objects.
     */
    users?: Users200ApplicationXMLUsers[];
}
export declare class Users200ApplicationJSONUsersCustomAttributes extends SpeakeasyBase {
    /**
     * Unique identifier of the custom attribute.
     */
    key?: string;
    /**
     * Name of the custom attribute.
     */
    name?: string;
    /**
     * Value of the custom attribute.
     */
    value?: string;
}
export declare class Users200ApplicationJSONUsers extends SpeakeasyBase {
    /**
     * The time when user's account was created.
     */
    createdAt?: Date;
    /**
     * Custom attributes. This field is only returned if users have been assigned custom attributes and if you provided `custom_attributes` as the value of `include_fields` query parameter in the API request.
     */
    customAttributes?: Users200ApplicationJSONUsersCustomAttributes[];
    /**
     * Department, if provided by the user.
     */
    dept?: string;
    /**
     * User's email address.
     */
    email: string;
    /**
     * User's first name.
     */
    firstName?: string;
    /**
     * IDs of groups where the user is a member.
     */
    groupIds?: string[];
    /**
     * The [host key](https://support.zoom.us/hc/en-us/articles/205172555-Using-your-host-key) of the user. This field is only returned if users have been assigned a host key and if you provided `host_key` as the value of `include_fields` query parameter in the API request.
     */
    hostKey?: string;
    /**
     * User ID.
     */
    id?: string;
    /**
     * IDs of IM directory groups where the user is a member.
     */
    imGroupIds?: string[];
    /**
     * The last client version that user used to login.
     */
    lastClientVersion?: string;
    /**
     * User's last login time. There is a three-days buffer period for this field. For example, if user first logged in on 2020-01-01 and then logged out and logged in on 2020-01-02, the value of this field will still reflect the login time of 2020-01-01. However, if the user logs in on 2020-01-04, the value of this field will reflect the corresponding login time since it exceeds the three-day buffer period.
     */
    lastLoginTime?: Date;
    /**
     * User's last name.
     */
    lastName?: string;
    /**
     * This field is returned if the user is enrolled in the [Zoom United](https://zoom.us/pricing/zoom-bundles) plan.
     */
    planUnitedType?: string;
    /**
     * Personal meeting ID of the user.
     */
    pmi?: number;
    /**
     * Unique identifier of the [role](https://marketplace.zoom.us/docs/api-reference/zoom-api/roles/roles) assigned to the user.
     */
    roleId?: string;
    /**
     * User's status
     */
    status?: string;
    /**
     * The time zone of the user.
     */
    timezone?: string;
    /**
     * User's plan type.<br>
     *
     * @remarks
     * `1` - Basic.<br>
     * `2` - Licensed.<br>
     * `3` - On-prem.<br>
     * `99` - None (this can only be set with `ssoCreate`).
     *
     */
    type: number;
    /**
     * Display whether the user's email address for the Zoom account is verified or not. <br>
     *
     * @remarks
     * `1` - Verified user email.<br>
     * `0` - User's email not verified.
     */
    verified?: number;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * User list returned.
 */
export declare class Users200ApplicationJSON extends SpeakeasyBase {
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
    /**
     * List of user objects.
     */
    users?: Users200ApplicationJSONUsers[];
}
export declare class UsersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * User list returned.
     */
    users200ApplicationJSONObject?: Users200ApplicationJSON;
}
