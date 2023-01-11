import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}

export enum UserStatusApplicationJsonActionEnum {
    Activate = "activate",
    Deactivate = "deactivate"
}


// UserStatusApplicationJson
/** 
 * The action.
**/
export class UserStatusApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: UserStatusApplicationJsonActionEnum;
}

export enum UserStatusMultipartFormDataActionEnum {
    Activate = "activate",
    Deactivate = "deactivate"
}


// UserStatusMultipartFormData
/** 
 * The action.
**/
export class UserStatusMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=action" })
  action: UserStatusMultipartFormDataActionEnum;
}


export class UserStatusRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UserStatusApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UserStatusMultipartFormData;
}


export class UserStatusSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UserStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserStatusPathParams;

  @SpeakeasyMetadata()
  request: UserStatusRequests;

  @SpeakeasyMetadata()
  security: UserStatusSecurity;
}


export class UserStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
