import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostPhoneSipTrunkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class PostPhoneSipTrunkApplicationJsonSipTrunks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier_account" })
  carrierAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class PostPhoneSipTrunkApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sip_trunks", elemType: PostPhoneSipTrunkApplicationJsonSipTrunks })
  sipTrunks?: PostPhoneSipTrunkApplicationJsonSipTrunks[];
}


export class PostPhoneSipTrunkMultipartFormDataSipTrunks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier_account" })
  carrierAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class PostPhoneSipTrunkMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=sip_trunks;json=true", elemType: PostPhoneSipTrunkMultipartFormDataSipTrunks })
  sipTrunks?: PostPhoneSipTrunkMultipartFormDataSipTrunks[];
}


export class PostPhoneSipTrunkRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: PostPhoneSipTrunkApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: PostPhoneSipTrunkMultipartFormData1;
}


export class PostPhoneSipTrunkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class PostPhoneSipTrunk201ApplicationJsonSipTrunks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier_account" })
  carrierAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class PostPhoneSipTrunk201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sip_trunks", elemType: PostPhoneSipTrunk201ApplicationJsonSipTrunks })
  sipTrunks?: PostPhoneSipTrunk201ApplicationJsonSipTrunks[];
}


export class PostPhoneSipTrunkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostPhoneSipTrunkPathParams;

  @SpeakeasyMetadata()
  request?: PostPhoneSipTrunkRequests;

  @SpeakeasyMetadata()
  security: PostPhoneSipTrunkSecurity;
}


export class PostPhoneSipTrunkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postPhoneSIPTrunk201ApplicationJSONObject?: PostPhoneSipTrunk201ApplicationJson;
}
