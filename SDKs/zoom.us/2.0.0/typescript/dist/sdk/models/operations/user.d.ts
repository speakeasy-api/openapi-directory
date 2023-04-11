import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * `0` - Facebook.<br>`1` - Google.<br>`99` - API.<br>`100` - Zoom.<br>`101` - SSO.
 */
export declare enum UserLoginTypeEnum {
    Zero = "0",
    One = "1",
    NinetyNine = "99",
    OneHundred = "100",
    OneHundredAndOne = "101"
}
export declare class UserRequest extends SpeakeasyBase {
    /**
     * `0` - Facebook.<br>`1` - Google.<br>`99` - API.<br>`100` - Zoom.<br>`101` - SSO.
     */
    loginType?: UserLoginTypeEnum;
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
/**
 * Custom attribute(s) that have been assigned to the user.
 */
export declare class User200ApplicationXMLCustomAttributes extends SpeakeasyBase {
    /**
     * Identifier for the custom attribute.
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
/**
 * Login type.
 *
 * @remarks
 *
 * `0` : Facebook
 *
 * `1` : Google
 *
 * `99` : API
 *
 * `100` : ZOOM
 *
 * `101` : SSO
 */
export declare enum User200ApplicationXMLLoginTypeEnum {
    Zero = "0",
    One = "1",
    NinetyNine = "99",
    OneHundred = "100",
    OneHundredAndOne = "101"
}
export declare class User200ApplicationXMLPhoneNumbers extends SpeakeasyBase {
    /**
     * Country code of the phone number. For example, for United States phone numbers, the value of this field should be "+1".
     */
    code?: string;
    /**
     * [Country ID](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries) of the phone number. For example, if the phone number provided in the `number` field is a Brazil based number, the value of the `country` field should be `BR`.
     */
    country?: string;
    /**
     * Phone number of the user.
     */
    number?: string;
    /**
     * Indicates whether the phone number has been verified by Zoom or not.
     */
    verified?: boolean;
}
/**
 * Status of user's account.
 */
export declare enum User200ApplicationXMLStatusEnum {
    Pending = "pending",
    Active = "active",
    Inactive = "inactive"
}
/**
 * User's plan type:<br>`1` - Basic.<br>`2` - Licensed.<br>`3` - On-prem.<br>`99` - None (this can only be set with `ssoCreate`).
 */
export declare enum User200ApplicationXMLTypeEnum {
    One = "1",
    Two = "2",
    Three = "3",
    NinetyNine = "99"
}
/**
 * The user object represents a specific user on Zoom.
 */
export declare class User200ApplicationXML extends SpeakeasyBase {
    /**
     * User's account ID.
     */
    accountId?: string;
    /**
     * CMS ID of user, only enabled for Kaltura integration.
     */
    cmsUserId?: string;
    /**
     * User's company.
     */
    company?: string;
    /**
     * The date and time at which this user was created.
     */
    createdAt?: Date;
    /**
     * Custom attribute(s) that have been assigned to the user.
     */
    customAttributes?: User200ApplicationXMLCustomAttributes;
    /**
     * Department.
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
     * IDs of the web groups user belongs to.
     */
    groupIds?: string[];
    /**
     * User's host key.
     */
    hostKey?: string;
    /**
     * User ID.
     */
    id?: string;
    /**
     * IM IDs of the groups user belongs to.
     */
    imGroupIds?: string[];
    jid?: string;
    /**
     * User's job title.
     */
    jobTitle?: string;
    /**
     * Default language for the Zoom Web Portal.
     */
    language?: string;
    /**
     * User last login client version.
     */
    lastClientVersion?: string;
    /**
     * User last login time.
     */
    lastLoginTime?: Date;
    /**
     * User's last name.
     */
    lastName?: string;
    /**
     * User's location.
     */
    location?: string;
    /**
     * Login type.
     *
     * @remarks
     *
     * `0` : Facebook
     *
     * `1` : Google
     *
     * `99` : API
     *
     * `100` : ZOOM
     *
     * `101` : SSO
     */
    loginType?: User200ApplicationXMLLoginTypeEnum;
    /**
     * The manager for the user.
     */
    manager?: string;
    /**
     * User's personal meeting url.
     */
    personalMeetingUrl?: string;
    /**
     * **Note:** This field has been **deprecated** and will not be supported in the future. Use the **phone_numbers** field instead of this field. <br> User's country for Company Phone Number.
     */
    phoneCountry?: string;
    /**
     * **Note:** This field has been **deprecated** and will not be supported in the future. Use the **phone_numbers** field instead of this field. <br> User's phone number.
     */
    phoneNumber?: string;
    phoneNumbers?: User200ApplicationXMLPhoneNumbers;
    /**
     * The URL for user's profile picture.
     */
    picUrl?: string;
    /**
     * United plan [type](https://marketplace.zoom.us/docs/api-reference/other-references/plans#zoom-united-plans). Only returned if user is enrolled in the Zoom United plan.
     */
    planUnitedType?: string;
    /**
     * Personal meeting ID.
     */
    pmi?: number;
    /**
     * Unique identifier of the [role](https://marketplace.zoom.us/docs/api-reference/zoom-api/roles/roles) assigned to the user.
     */
    roleId?: string;
    /**
     * User's [role](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) name.
     */
    roleName?: string;
    /**
     * Status of user's account.
     */
    status?: User200ApplicationXMLStatusEnum;
    /**
     * The time zone of the user.
     */
    timezone?: string;
    /**
     * User's plan type:<br>`1` - Basic.<br>`2` - Licensed.<br>`3` - On-prem.<br>`99` - None (this can only be set with `ssoCreate`).
     */
    type: User200ApplicationXMLTypeEnum;
    /**
     * Displays `true` if user has enabled PMI for instant meetinsgs, `false` otherwise.
     */
    usePmi?: boolean;
    /**
     * Personal meeting room URL, if the user has one.
     */
    vanityUrl?: string;
    /**
     * Displays whether user is verified or not. <br>
     *
     * @remarks
     * `1` - Account verified.<br>
     * `0` - Account not verified.
     */
    verified?: number;
}
/**
 * Custom attribute(s) that have been assigned to the user.
 */
export declare class User200ApplicationJSONCustomAttributes extends SpeakeasyBase {
    /**
     * Identifier for the custom attribute.
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
/**
 * Login type.
 *
 * @remarks
 *
 * `0` : Facebook
 *
 * `1` : Google
 *
 * `99` : API
 *
 * `100` : ZOOM
 *
 * `101` : SSO
 */
export declare enum User200ApplicationJSONLoginTypeEnum {
    Zero = "0",
    One = "1",
    NinetyNine = "99",
    OneHundred = "100",
    OneHundredAndOne = "101"
}
export declare class User200ApplicationJSONPhoneNumbers extends SpeakeasyBase {
    /**
     * Country code of the phone number. For example, for United States phone numbers, the value of this field should be "+1".
     */
    code?: string;
    /**
     * [Country ID](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries) of the phone number. For example, if the phone number provided in the `number` field is a Brazil based number, the value of the `country` field should be `BR`.
     */
    country?: string;
    /**
     * Phone number of the user.
     */
    number?: string;
    /**
     * Indicates whether the phone number has been verified by Zoom or not.
     */
    verified?: boolean;
}
/**
 * Status of user's account.
 */
export declare enum User200ApplicationJSONStatusEnum {
    Pending = "pending",
    Active = "active",
    Inactive = "inactive"
}
/**
 * User's plan type:<br>`1` - Basic.<br>`2` - Licensed.<br>`3` - On-prem.<br>`99` - None (this can only be set with `ssoCreate`).
 */
export declare enum User200ApplicationJSONTypeEnum {
    One = "1",
    Two = "2",
    Three = "3",
    NinetyNine = "99"
}
/**
 * The user object represents a specific user on Zoom.
 */
export declare class User200ApplicationJSON extends SpeakeasyBase {
    /**
     * User's account ID.
     */
    accountId?: string;
    /**
     * CMS ID of user, only enabled for Kaltura integration.
     */
    cmsUserId?: string;
    /**
     * User's company.
     */
    company?: string;
    /**
     * The date and time at which this user was created.
     */
    createdAt?: Date;
    /**
     * Custom attribute(s) that have been assigned to the user.
     */
    customAttributes?: User200ApplicationJSONCustomAttributes;
    /**
     * Department.
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
     * IDs of the web groups user belongs to.
     */
    groupIds?: string[];
    /**
     * User's host key.
     */
    hostKey?: string;
    /**
     * User ID.
     */
    id?: string;
    /**
     * IM IDs of the groups user belongs to.
     */
    imGroupIds?: string[];
    jid?: string;
    /**
     * User's job title.
     */
    jobTitle?: string;
    /**
     * Default language for the Zoom Web Portal.
     */
    language?: string;
    /**
     * User last login client version.
     */
    lastClientVersion?: string;
    /**
     * User last login time.
     */
    lastLoginTime?: Date;
    /**
     * User's last name.
     */
    lastName?: string;
    /**
     * User's location.
     */
    location?: string;
    /**
     * Login type.
     *
     * @remarks
     *
     * `0` : Facebook
     *
     * `1` : Google
     *
     * `99` : API
     *
     * `100` : ZOOM
     *
     * `101` : SSO
     */
    loginType?: User200ApplicationJSONLoginTypeEnum;
    /**
     * The manager for the user.
     */
    manager?: string;
    /**
     * User's personal meeting url.
     */
    personalMeetingUrl?: string;
    /**
     * **Note:** This field has been **deprecated** and will not be supported in the future. Use the **phone_numbers** field instead of this field. <br> User's country for Company Phone Number.
     */
    phoneCountry?: string;
    /**
     * **Note:** This field has been **deprecated** and will not be supported in the future. Use the **phone_numbers** field instead of this field. <br> User's phone number.
     */
    phoneNumber?: string;
    phoneNumbers?: User200ApplicationJSONPhoneNumbers;
    /**
     * The URL for user's profile picture.
     */
    picUrl?: string;
    /**
     * United plan [type](https://marketplace.zoom.us/docs/api-reference/other-references/plans#zoom-united-plans). Only returned if user is enrolled in the Zoom United plan.
     */
    planUnitedType?: string;
    /**
     * Personal meeting ID.
     */
    pmi?: number;
    /**
     * Unique identifier of the [role](https://marketplace.zoom.us/docs/api-reference/zoom-api/roles/roles) assigned to the user.
     */
    roleId?: string;
    /**
     * User's [role](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) name.
     */
    roleName?: string;
    /**
     * Status of user's account.
     */
    status?: User200ApplicationJSONStatusEnum;
    /**
     * The time zone of the user.
     */
    timezone?: string;
    /**
     * User's plan type:<br>`1` - Basic.<br>`2` - Licensed.<br>`3` - On-prem.<br>`99` - None (this can only be set with `ssoCreate`).
     */
    type: User200ApplicationJSONTypeEnum;
    /**
     * Displays `true` if user has enabled PMI for instant meetinsgs, `false` otherwise.
     */
    usePmi?: boolean;
    /**
     * Personal meeting room URL, if the user has one.
     */
    vanityUrl?: string;
    /**
     * Displays whether user is verified or not. <br>
     *
     * @remarks
     * `1` - Account verified.<br>
     * `0` - Account not verified.
     */
    verified?: number;
}
export declare class UserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * User object returned.
     */
    user200ApplicationJSONObject?: User200ApplicationJSON;
}
