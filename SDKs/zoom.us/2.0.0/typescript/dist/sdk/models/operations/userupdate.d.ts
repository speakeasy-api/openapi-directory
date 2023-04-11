import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Custom attribute(s) of the user.
 */
export declare class UserUpdateApplicationJSONCustomAttributes extends SpeakeasyBase {
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
export declare class UserUpdateApplicationJSONPhoneNumbers extends SpeakeasyBase {
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
}
/**
 * User types:<br>`1` - Basic.<br>`2` - Licensed.<br>`3` - On-prem.<br>`99` - None (this can only be set with `ssoCreate`).
 */
export declare enum UserUpdateApplicationJSONTypeEnum {
    One = "1",
    Two = "2",
    Three = "3",
    NinetyNine = "99"
}
/**
 * The user update object represents a user on Zoom.
 */
export declare class UserUpdateApplicationJSON extends SpeakeasyBase {
    /**
     * Kaltura user ID.
     */
    cmsUserId?: string;
    /**
     * User's company.
     */
    company?: string;
    /**
     * Custom attribute(s) of the user.
     */
    customAttributes?: UserUpdateApplicationJSONCustomAttributes;
    /**
     * Department for user profile: use for report.
     */
    dept?: string;
    /**
     * User's first name. Cannot contain more than 5 Chinese characters.
     */
    firstName?: string;
    /**
     * Provide unique identifier of the group that you would like to add a [pending user](https://support.zoom.us/hc/en-us/articles/201363183-Managing-users#h_13c87a2a-ecd6-40ad-be61-a9935e660edb) to. The value of this field can be retrieved from [List Groups](https://marketplace.zoom.us/docs/api-reference/zoom-api/groups/groups) API.
     */
    groupId?: string;
    /**
     * Host key. It should be a 6-10 digit number.
     */
    hostKey?: string;
    /**
     * User's job title.
     */
    jobTitle?: string;
    /**
     * language
     */
    language?: string;
    /**
     * User's last name. Cannot contain more than 5 Chinese characters.
     */
    lastName?: string;
    /**
     * User's location.
     */
    location?: string;
    /**
     * The manager for the user.
     */
    manager?: string;
    /**
     * **Note:** This field has been **deprecated** and will not be supported in the future. Use the **country** field of the **phone_numbers** object instead to select the country for the phone number.
     *
     * @remarks
     *
     *
     *
     * [Country ID](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries) of the phone number. For example, if the phone number provided in the `phone_number` field is a Brazil based number, the value of the `phone_country` field should be `BR`.
     */
    phoneCountry?: string;
    /**
     * **Note:** This field has been **deprecated** and will not be supported in the future. Use the **phone_numbers** field instead to assign phone number(s) to a user.
     *
     * @remarks
     *
     *
     * Phone number of the user. To update a phone number, you must also provide the `phone_country` field.
     */
    phoneNumber?: string;
    phoneNumbers?: UserUpdateApplicationJSONPhoneNumbers;
    /**
     * Personal meeting ID: length must be 10.
     */
    pmi?: number;
    /**
     * The time zone ID for a user profile. For this parameter value please refer to the ID value in the [timezone](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#timezones) list.
     */
    timezone?: string;
    /**
     * User types:<br>`1` - Basic.<br>`2` - Licensed.<br>`3` - On-prem.<br>`99` - None (this can only be set with `ssoCreate`).
     */
    type?: UserUpdateApplicationJSONTypeEnum;
    /**
     * Use Personal Meeting ID for instant meetings.
     */
    usePmi?: boolean;
    /**
     * Personal meeting room name.
     */
    vanityName?: string;
}
/**
 * `0` - Facebook.<br>`1` - Google.<br>`99` - API.<br>`100` - Zoom.<br>`101` - SSO.
 */
export declare enum UserUpdateLoginTypeEnum {
    Zero = "0",
    One = "1",
    NinetyNine = "99",
    OneHundred = "100",
    OneHundredAndOne = "101"
}
export declare class UserUpdateRequest extends SpeakeasyBase {
    /**
     * User
     */
    requestBody: UserUpdateApplicationJSON;
    /**
     * `0` - Facebook.<br>`1` - Google.<br>`99` - API.<br>`100` - Zoom.<br>`101` - SSO.
     */
    loginType?: UserUpdateLoginTypeEnum;
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
export declare class UserUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
