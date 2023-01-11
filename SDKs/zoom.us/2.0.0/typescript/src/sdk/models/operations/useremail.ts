import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserEmailQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email: string;
}


export class UserEmailSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UserEmail200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=existed_email" })
  existedEmail?: boolean;
}


export class UserEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UserEmailQueryParams;

  @SpeakeasyMetadata()
  security: UserEmailSecurity;
}


export class UserEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userEmail200ApplicationJSONObject?: UserEmail200ApplicationJson;
}
