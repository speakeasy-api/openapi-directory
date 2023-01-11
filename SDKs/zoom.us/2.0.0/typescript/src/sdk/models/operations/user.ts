import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}

export enum UserLoginTypeEnum {
    Zero = "0",
    One = "1",
    NinetyNine = "99",
    OneHundred = "100",
    OneHundredAndOne = "101"
}


export class UserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login_type" })
  loginType?: UserLoginTypeEnum;
}


// User200ApplicationJsonCustomAttributes
/** 
 * Custom attribute(s) that have been assigned to the user.
**/
export class User200ApplicationJsonCustomAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class User200ApplicationJsonPhoneNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=verified" })
  verified?: boolean;
}

export enum User200ApplicationJsonStatusEnum {
    Pending = "pending",
    Active = "active",
    Inactive = "inactive"
}


// User200ApplicationJson
/** 
 * The user object represents a specific user on Zoom.
**/
export class User200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=cms_user_id" })
  cmsUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=company" })
  company?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=custom_attributes" })
  customAttributes?: User200ApplicationJsonCustomAttributes;

  @SpeakeasyMetadata({ data: "json, name=dept" })
  dept?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=group_ids" })
  groupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=host_key" })
  hostKey?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=im_group_ids" })
  imGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=jid" })
  jid?: string;

  @SpeakeasyMetadata({ data: "json, name=job_title" })
  jobTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=last_client_version" })
  lastClientVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=last_login_time" })
  lastLoginTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=login_type" })
  loginType?: number;

  @SpeakeasyMetadata({ data: "json, name=manager" })
  manager?: string;

  @SpeakeasyMetadata({ data: "json, name=personal_meeting_url" })
  personalMeetingUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_country" })
  phoneCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers" })
  phoneNumbers?: User200ApplicationJsonPhoneNumbers;

  @SpeakeasyMetadata({ data: "json, name=pic_url" })
  picUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=plan_united_type" })
  planUnitedType?: string;

  @SpeakeasyMetadata({ data: "json, name=pmi" })
  pmi?: number;

  @SpeakeasyMetadata({ data: "json, name=role_id" })
  roleId?: string;

  @SpeakeasyMetadata({ data: "json, name=role_name" })
  roleName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: User200ApplicationJsonStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: number;

  @SpeakeasyMetadata({ data: "json, name=use_pmi" })
  usePmi?: boolean;

  @SpeakeasyMetadata({ data: "json, name=vanity_url" })
  vanityUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=verified" })
  verified?: number;
}


export class UserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserPathParams;

  @SpeakeasyMetadata()
  queryParams: UserQueryParams;
}


export class UserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  user200ApplicationJSONObject?: User200ApplicationJson;
}
