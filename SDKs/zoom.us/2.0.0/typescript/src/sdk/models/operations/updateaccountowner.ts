import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAccountOwnerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class UpdateAccountOwnerApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;
}


export class UpdateAccountOwnerMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=email" })
  email: string;
}


export class UpdateAccountOwnerRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UpdateAccountOwnerApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UpdateAccountOwnerMultipartFormData;
}


export class UpdateAccountOwnerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UpdateAccountOwnerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAccountOwnerPathParams;

  @SpeakeasyMetadata()
  request?: UpdateAccountOwnerRequests;

  @SpeakeasyMetadata()
  security: UpdateAccountOwnerSecurity;
}


export class UpdateAccountOwnerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateAccountOwner204ApplicationJSONAny?: any;
}
