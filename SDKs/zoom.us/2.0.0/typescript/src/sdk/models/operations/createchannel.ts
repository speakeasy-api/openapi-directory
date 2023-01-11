import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class CreateChannelApplicationJsonMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;
}


export class CreateChannelApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=members", elemType: CreateChannelApplicationJsonMembers })
  members?: CreateChannelApplicationJsonMembers[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}


export class CreateChannelMultipartFormDataMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;
}


export class CreateChannelMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=members;json=true", elemType: CreateChannelMultipartFormDataMembers })
  members?: CreateChannelMultipartFormDataMembers[];

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=type" })
  type?: number;
}


export class CreateChannelRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: CreateChannelApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: CreateChannelMultipartFormData1;
}


export class CreateChannelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class CreateChannel201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=jid" })
  jid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}


export class CreateChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateChannelPathParams;

  @SpeakeasyMetadata()
  request?: CreateChannelRequests;

  @SpeakeasyMetadata()
  security: CreateChannelSecurity;
}


export class CreateChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createChannel201ApplicationJSONObject?: CreateChannel201ApplicationJson;
}
