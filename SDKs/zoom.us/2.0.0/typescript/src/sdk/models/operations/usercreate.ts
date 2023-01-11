import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UserCreateApplicationJsonActionEnum {
    Create = "create",
    AutoCreate = "autoCreate",
    CustCreate = "custCreate",
    SsoCreate = "ssoCreate"
}


export class UserCreateApplicationJsonUserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: number;
}


export class UserCreateApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: UserCreateApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=user_info" })
  userInfo?: UserCreateApplicationJsonUserInfo;
}

export enum UserCreateMultipartFormDataActionEnum {
    Create = "create",
    AutoCreate = "autoCreate",
    CustCreate = "custCreate",
    SsoCreate = "ssoCreate"
}


export class UserCreateMultipartFormDataUserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: number;
}


export class UserCreateMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=action" })
  action: UserCreateMultipartFormDataActionEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_info;json=true" })
  userInfo?: UserCreateMultipartFormDataUserInfo;
}


export class UserCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UserCreateApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UserCreateMultipartFormData;
}


export class UserCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UserCreate201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}


export class UserCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: UserCreateRequests;

  @SpeakeasyMetadata()
  security: UserCreateSecurity;
}


export class UserCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userCreate201ApplicationJSONObject?: UserCreate201ApplicationJson;
}
