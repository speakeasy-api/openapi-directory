import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SwitchUserAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class SwitchUserAccountApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId: string;
}


export class SwitchUserAccountMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=account_id" })
  accountId: string;
}


export class SwitchUserAccountRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: SwitchUserAccountApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: SwitchUserAccountMultipartFormData;
}


export class SwitchUserAccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class SwitchUserAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SwitchUserAccountPathParams;

  @SpeakeasyMetadata()
  request?: SwitchUserAccountRequests;

  @SpeakeasyMetadata()
  security: SwitchUserAccountSecurity;
}


export class SwitchUserAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  switchUserAccount204ApplicationJSONAny?: any;
}
