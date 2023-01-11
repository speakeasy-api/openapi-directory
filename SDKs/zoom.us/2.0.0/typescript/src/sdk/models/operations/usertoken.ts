import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}

export enum UserTokenTypeEnum {
    Token = "token",
    Zak = "zak"
}


export class UserTokenQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ttl" })
  ttl?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: UserTokenTypeEnum;
}


export class UserTokenSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UserToken200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}


export class UserTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserTokenPathParams;

  @SpeakeasyMetadata()
  queryParams: UserTokenQueryParams;

  @SpeakeasyMetadata()
  security: UserTokenSecurity;
}


export class UserTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userToken200ApplicationJSONObject?: UserToken200ApplicationJson;
}
