import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserSsoTokenDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UserSsoTokenDeleteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UserSsoTokenDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserSsoTokenDeletePathParams;

  @SpeakeasyMetadata()
  security: UserSsoTokenDeleteSecurity;
}


export class UserSsoTokenDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
