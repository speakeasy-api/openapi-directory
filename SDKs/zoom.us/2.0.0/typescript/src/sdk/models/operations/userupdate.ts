import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}

export enum UserUpdateLoginTypeEnum {
    Zero = "0",
    One = "1",
    NinetyNine = "99",
    OneHundred = "100",
    OneHundredAndOne = "101"
}


export class UserUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login_type" })
  loginType?: UserUpdateLoginTypeEnum;
}


// UserUpdateApplicationJsonCustomAttributes
/** 
 * Custom attribute(s) of the user.
**/
export class UserUpdateApplicationJsonCustomAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class UserUpdateApplicationJsonPhoneNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}


// UserUpdateApplicationJson
/** 
 * The user update object represents a user on Zoom.
**/
export class UserUpdateApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cms_user_id" })
  cmsUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=company" })
  company?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_attributes" })
  customAttributes?: UserUpdateApplicationJsonCustomAttributes;

  @SpeakeasyMetadata({ data: "json, name=dept" })
  dept?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=group_id" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "json, name=host_key" })
  hostKey?: string;

  @SpeakeasyMetadata({ data: "json, name=job_title" })
  jobTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=manager" })
  manager?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_country" })
  phoneCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers" })
  phoneNumbers?: UserUpdateApplicationJsonPhoneNumbers;

  @SpeakeasyMetadata({ data: "json, name=pmi" })
  pmi?: number;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;

  @SpeakeasyMetadata({ data: "json, name=use_pmi" })
  usePmi?: boolean;

  @SpeakeasyMetadata({ data: "json, name=vanity_name" })
  vanityName?: string;
}


// UserUpdateMultipartFormDataCustomAttributes
/** 
 * Custom attribute(s) of the user.
**/
export class UserUpdateMultipartFormDataCustomAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class UserUpdateMultipartFormDataPhoneNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}


// UserUpdateMultipartFormData
/** 
 * The user update object represents a user on Zoom.
**/
export class UserUpdateMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=cms_user_id" })
  cmsUserId?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=company" })
  company?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=custom_attributes;json=true" })
  customAttributes?: UserUpdateMultipartFormDataCustomAttributes;

  @SpeakeasyMetadata({ data: "multipart_form, name=dept" })
  dept?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=group_id" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=host_key" })
  hostKey?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=job_title" })
  jobTitle?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=manager" })
  manager?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=phone_country" })
  phoneCountry?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=phone_numbers;json=true" })
  phoneNumbers?: UserUpdateMultipartFormDataPhoneNumbers;

  @SpeakeasyMetadata({ data: "multipart_form, name=pmi" })
  pmi?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=type" })
  type?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=use_pmi" })
  usePmi?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=vanity_name" })
  vanityName?: string;
}


export class UserUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UserUpdateApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UserUpdateMultipartFormData;
}


export class UserUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: UserUpdateQueryParams;

  @SpeakeasyMetadata()
  request: UserUpdateRequests;
}


export class UserUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
