import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePhoneSipTrunkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sipTrunkId" })
  sipTrunkId: string;
}


export class UpdatePhoneSipTrunkApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier_account" })
  carrierAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdatePhoneSipTrunkMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=carrier_account" })
  carrierAccount?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;
}


export class UpdatePhoneSipTrunkRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UpdatePhoneSipTrunkApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UpdatePhoneSipTrunkMultipartFormData;
}


export class UpdatePhoneSipTrunkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UpdatePhoneSipTrunkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePhoneSipTrunkPathParams;

  @SpeakeasyMetadata()
  request?: UpdatePhoneSipTrunkRequests;

  @SpeakeasyMetadata()
  security: UpdatePhoneSipTrunkSecurity;
}


export class UpdatePhoneSipTrunkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updatePhoneSIPTrunk204ApplicationJSONAny?: any;
}
