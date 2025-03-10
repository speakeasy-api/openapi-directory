/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

/**
 * `0` - Facebook.<br>`1` - Google.<br>`99` - API.<br>`100` - Zoom.<br>`101` - SSO.
 */
export enum UserLoginTypeEnum {
  Zero = "0",
  One = "1",
  NinetyNine = "99",
  OneHundred = "100",
  OneHundredAndOne = "101",
}

export class UserRequest extends SpeakeasyBase {
  /**
   * `0` - Facebook.<br>`1` - Google.<br>`99` - API.<br>`100` - Zoom.<br>`101` - SSO.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=login_type",
  })
  loginType?: UserLoginTypeEnum;

  /**
   * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=userId",
  })
  userId: string;
}

/**
 * Custom attribute(s) that have been assigned to the user.
 */
export class User200ApplicationXMLCustomAttributes extends SpeakeasyBase {
  /**
   * Identifier for the custom attribute.
   */
  @SpeakeasyMetadata()
  key?: string;

  /**
   * Name of the custom attribute.
   */
  @SpeakeasyMetadata()
  name?: string;

  /**
   * Value of the custom attribute.
   */
  @SpeakeasyMetadata()
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
export enum User200ApplicationXMLLoginTypeEnum {
  Zero = "0",
  One = "1",
  NinetyNine = "99",
  OneHundred = "100",
  OneHundredAndOne = "101",
}

export class User200ApplicationXMLPhoneNumbers extends SpeakeasyBase {
  /**
   * Country code of the phone number. For example, for United States phone numbers, the value of this field should be "+1".
   */
  @SpeakeasyMetadata()
  code?: string;

  /**
   * [Country ID](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries) of the phone number. For example, if the phone number provided in the `number` field is a Brazil based number, the value of the `country` field should be `BR`.
   */
  @SpeakeasyMetadata()
  country?: string;

  /**
   * Phone number of the user.
   */
  @SpeakeasyMetadata()
  number?: string;

  /**
   * Indicates whether the phone number has been verified by Zoom or not.
   */
  @SpeakeasyMetadata()
  verified?: boolean;
}

/**
 * Status of user's account.
 */
export enum User200ApplicationXMLStatusEnum {
  Pending = "pending",
  Active = "active",
  Inactive = "inactive",
}

/**
 * User's plan type:<br>`1` - Basic.<br>`2` - Licensed.<br>`3` - On-prem.<br>`99` - None (this can only be set with `ssoCreate`).
 */
export enum User200ApplicationXMLTypeEnum {
  One = "1",
  Two = "2",
  Three = "3",
  NinetyNine = "99",
}

/**
 * The user object represents a specific user on Zoom.
 */
export class User200ApplicationXML extends SpeakeasyBase {
  /**
   * User's account ID.
   */
  @SpeakeasyMetadata()
  accountId?: string;

  /**
   * CMS ID of user, only enabled for Kaltura integration.
   */
  @SpeakeasyMetadata()
  cmsUserId?: string;

  /**
   * User's company.
   */
  @SpeakeasyMetadata()
  company?: string;

  /**
   * The date and time at which this user was created.
   */
  @SpeakeasyMetadata()
  createdAt?: Date;

  /**
   * Custom attribute(s) that have been assigned to the user.
   */
  @SpeakeasyMetadata()
  customAttributes?: User200ApplicationXMLCustomAttributes;

  /**
   * Department.
   */
  @SpeakeasyMetadata()
  dept?: string;

  /**
   * User's email address.
   */
  @SpeakeasyMetadata()
  email: string;

  /**
   * User's first name.
   */
  @SpeakeasyMetadata()
  firstName?: string;

  /**
   * IDs of the web groups user belongs to.
   */
  @SpeakeasyMetadata()
  groupIds?: string[];

  /**
   * User's host key.
   */
  @SpeakeasyMetadata()
  hostKey?: string;

  /**
   * User ID.
   */
  @SpeakeasyMetadata()
  id?: string;

  /**
   * IM IDs of the groups user belongs to.
   */
  @SpeakeasyMetadata()
  imGroupIds?: string[];

  @SpeakeasyMetadata()
  jid?: string;

  /**
   * User's job title.
   */
  @SpeakeasyMetadata()
  jobTitle?: string;

  /**
   * Default language for the Zoom Web Portal.
   */
  @SpeakeasyMetadata()
  language?: string;

  /**
   * User last login client version.
   */
  @SpeakeasyMetadata()
  lastClientVersion?: string;

  /**
   * User last login time.
   */
  @SpeakeasyMetadata()
  lastLoginTime?: Date;

  /**
   * User's last name.
   */
  @SpeakeasyMetadata()
  lastName?: string;

  /**
   * User's location.
   */
  @SpeakeasyMetadata()
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
  @SpeakeasyMetadata()
  loginType?: User200ApplicationXMLLoginTypeEnum;

  /**
   * The manager for the user.
   */
  @SpeakeasyMetadata()
  manager?: string;

  /**
   * User's personal meeting url.
   */
  @SpeakeasyMetadata()
  personalMeetingUrl?: string;

  /**
   * **Note:** This field has been **deprecated** and will not be supported in the future. Use the **phone_numbers** field instead of this field. <br> User's country for Company Phone Number.
   */
  @SpeakeasyMetadata()
  phoneCountry?: string;

  /**
   * **Note:** This field has been **deprecated** and will not be supported in the future. Use the **phone_numbers** field instead of this field. <br> User's phone number.
   */
  @SpeakeasyMetadata()
  phoneNumber?: string;

  @SpeakeasyMetadata()
  phoneNumbers?: User200ApplicationXMLPhoneNumbers;

  /**
   * The URL for user's profile picture.
   */
  @SpeakeasyMetadata()
  picUrl?: string;

  /**
   * United plan [type](https://marketplace.zoom.us/docs/api-reference/other-references/plans#zoom-united-plans). Only returned if user is enrolled in the Zoom United plan.
   */
  @SpeakeasyMetadata()
  planUnitedType?: string;

  /**
   * Personal meeting ID.
   */
  @SpeakeasyMetadata()
  pmi?: number;

  /**
   * Unique identifier of the [role](https://marketplace.zoom.us/docs/api-reference/zoom-api/roles/roles) assigned to the user.
   */
  @SpeakeasyMetadata()
  roleId?: string;

  /**
   * User's [role](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) name.
   */
  @SpeakeasyMetadata()
  roleName?: string;

  /**
   * Status of user's account.
   */
  @SpeakeasyMetadata()
  status?: User200ApplicationXMLStatusEnum;

  /**
   * The time zone of the user.
   */
  @SpeakeasyMetadata()
  timezone?: string;

  /**
   * User's plan type:<br>`1` - Basic.<br>`2` - Licensed.<br>`3` - On-prem.<br>`99` - None (this can only be set with `ssoCreate`).
   */
  @SpeakeasyMetadata()
  type: User200ApplicationXMLTypeEnum;

  /**
   * Displays `true` if user has enabled PMI for instant meetinsgs, `false` otherwise.
   */
  @SpeakeasyMetadata()
  usePmi?: boolean;

  /**
   * Personal meeting room URL, if the user has one.
   */
  @SpeakeasyMetadata()
  vanityUrl?: string;

  /**
   * Displays whether user is verified or not. <br>
   *
   * @remarks
   * `1` - Account verified.<br>
   * `0` - Account not verified.
   */
  @SpeakeasyMetadata()
  verified?: number;
}

/**
 * Custom attribute(s) that have been assigned to the user.
 */
export class User200ApplicationJSONCustomAttributes extends SpeakeasyBase {
  /**
   * Identifier for the custom attribute.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key?: string;

  /**
   * Name of the custom attribute.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * Value of the custom attribute.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "value" })
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
export enum User200ApplicationJSONLoginTypeEnum {
  Zero = "0",
  One = "1",
  NinetyNine = "99",
  OneHundred = "100",
  OneHundredAndOne = "101",
}

export class User200ApplicationJSONPhoneNumbers extends SpeakeasyBase {
  /**
   * Country code of the phone number. For example, for United States phone numbers, the value of this field should be "+1".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: string;

  /**
   * [Country ID](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries) of the phone number. For example, if the phone number provided in the `number` field is a Brazil based number, the value of the `country` field should be `BR`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  /**
   * Phone number of the user.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "number" })
  number?: string;

  /**
   * Indicates whether the phone number has been verified by Zoom or not.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "verified" })
  verified?: boolean;
}

/**
 * Status of user's account.
 */
export enum User200ApplicationJSONStatusEnum {
  Pending = "pending",
  Active = "active",
  Inactive = "inactive",
}

/**
 * User's plan type:<br>`1` - Basic.<br>`2` - Licensed.<br>`3` - On-prem.<br>`99` - None (this can only be set with `ssoCreate`).
 */
export enum User200ApplicationJSONTypeEnum {
  One = "1",
  Two = "2",
  Three = "3",
  NinetyNine = "99",
}

/**
 * The user object represents a specific user on Zoom.
 */
export class User200ApplicationJSON extends SpeakeasyBase {
  /**
   * User's account ID.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "account_id" })
  accountId?: string;

  /**
   * CMS ID of user, only enabled for Kaltura integration.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "cms_user_id" })
  cmsUserId?: string;

  /**
   * User's company.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "company" })
  company?: string;

  /**
   * The date and time at which this user was created.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt?: Date;

  /**
   * Custom attribute(s) that have been assigned to the user.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "custom_attributes" })
  @Type(() => User200ApplicationJSONCustomAttributes)
  customAttributes?: User200ApplicationJSONCustomAttributes;

  /**
   * Department.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dept" })
  dept?: string;

  /**
   * User's email address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;

  /**
   * User's first name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName?: string;

  /**
   * IDs of the web groups user belongs to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "group_ids" })
  groupIds?: string[];

  /**
   * User's host key.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "host_key" })
  hostKey?: string;

  /**
   * User ID.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * IM IDs of the groups user belongs to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "im_group_ids" })
  imGroupIds?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "jid" })
  jid?: string;

  /**
   * User's job title.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "job_title" })
  jobTitle?: string;

  /**
   * Default language for the Zoom Web Portal.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "language" })
  language?: string;

  /**
   * User last login client version.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "last_client_version" })
  lastClientVersion?: string;

  /**
   * User last login time.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "last_login_time" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastLoginTime?: Date;

  /**
   * User's last name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "last_name" })
  lastName?: string;

  /**
   * User's location.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "location" })
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
  @SpeakeasyMetadata()
  @Expose({ name: "login_type" })
  loginType?: User200ApplicationJSONLoginTypeEnum;

  /**
   * The manager for the user.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "manager" })
  manager?: string;

  /**
   * User's personal meeting url.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "personal_meeting_url" })
  personalMeetingUrl?: string;

  /**
   * **Note:** This field has been **deprecated** and will not be supported in the future. Use the **phone_numbers** field instead of this field. <br> User's country for Company Phone Number.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "phone_country" })
  phoneCountry?: string;

  /**
   * **Note:** This field has been **deprecated** and will not be supported in the future. Use the **phone_numbers** field instead of this field. <br> User's phone number.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "phone_numbers" })
  @Type(() => User200ApplicationJSONPhoneNumbers)
  phoneNumbers?: User200ApplicationJSONPhoneNumbers;

  /**
   * The URL for user's profile picture.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pic_url" })
  picUrl?: string;

  /**
   * United plan [type](https://marketplace.zoom.us/docs/api-reference/other-references/plans#zoom-united-plans). Only returned if user is enrolled in the Zoom United plan.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "plan_united_type" })
  planUnitedType?: string;

  /**
   * Personal meeting ID.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pmi" })
  pmi?: number;

  /**
   * Unique identifier of the [role](https://marketplace.zoom.us/docs/api-reference/zoom-api/roles/roles) assigned to the user.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "role_id" })
  roleId?: string;

  /**
   * User's [role](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "role_name" })
  roleName?: string;

  /**
   * Status of user's account.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: User200ApplicationJSONStatusEnum;

  /**
   * The time zone of the user.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "timezone" })
  timezone?: string;

  /**
   * User's plan type:<br>`1` - Basic.<br>`2` - Licensed.<br>`3` - On-prem.<br>`99` - None (this can only be set with `ssoCreate`).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: User200ApplicationJSONTypeEnum;

  /**
   * Displays `true` if user has enabled PMI for instant meetinsgs, `false` otherwise.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "use_pmi" })
  usePmi?: boolean;

  /**
   * Personal meeting room URL, if the user has one.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "vanity_url" })
  vanityUrl?: string;

  /**
   * Displays whether user is verified or not. <br>
   *
   * @remarks
   * `1` - Account verified.<br>
   * `0` - Account not verified.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "verified" })
  verified?: number;
}

export class UserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * **HTTP Status Code:** `200` **OK**<br>
   *
   * @remarks
   * User object returned.
   */
  @SpeakeasyMetadata()
  user200ApplicationJSONObject?: User200ApplicationJSON;
}
