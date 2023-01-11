import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAutoReceptionistPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=autoReceptionistId" })
  autoReceptionistId: string;
}


export class UpdateAutoReceptionistApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateAutoReceptionistMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;
}


export class UpdateAutoReceptionistRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UpdateAutoReceptionistApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UpdateAutoReceptionistMultipartFormData;
}


export class UpdateAutoReceptionistSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UpdateAutoReceptionistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAutoReceptionistPathParams;

  @SpeakeasyMetadata()
  request?: UpdateAutoReceptionistRequests;

  @SpeakeasyMetadata()
  security: UpdateAutoReceptionistSecurity;
}


export class UpdateAutoReceptionistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateAutoReceptionist204ApplicationJSONAny?: any;
}
