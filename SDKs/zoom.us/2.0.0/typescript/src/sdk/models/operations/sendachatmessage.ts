import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SendaChatMessagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class SendaChatMessageApplicationJsonAtItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=at_contact" })
  atContact?: string;

  @SpeakeasyMetadata({ data: "json, name=at_type" })
  atType?: number;

  @SpeakeasyMetadata({ data: "json, name=end_position" })
  endPosition?: number;

  @SpeakeasyMetadata({ data: "json, name=start_position" })
  startPosition?: number;
}


export class SendaChatMessageApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=at_items", elemType: SendaChatMessageApplicationJsonAtItems })
  atItems?: SendaChatMessageApplicationJsonAtItems[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=to_channel" })
  toChannel?: string;

  @SpeakeasyMetadata({ data: "json, name=to_contact" })
  toContact?: string;
}


export class SendaChatMessageMultipartFormDataAtItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=at_contact" })
  atContact?: string;

  @SpeakeasyMetadata({ data: "json, name=at_type" })
  atType?: number;

  @SpeakeasyMetadata({ data: "json, name=end_position" })
  endPosition?: number;

  @SpeakeasyMetadata({ data: "json, name=start_position" })
  startPosition?: number;
}


export class SendaChatMessageMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=at_items;json=true", elemType: SendaChatMessageMultipartFormDataAtItems })
  atItems?: SendaChatMessageMultipartFormDataAtItems[];

  @SpeakeasyMetadata({ data: "multipart_form, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=to_channel" })
  toChannel?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=to_contact" })
  toContact?: string;
}


export class SendaChatMessageRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: SendaChatMessageApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: SendaChatMessageMultipartFormData1;
}


export class SendaChatMessageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class SendaChatMessage201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class SendaChatMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SendaChatMessagePathParams;

  @SpeakeasyMetadata()
  request?: SendaChatMessageRequests;

  @SpeakeasyMetadata()
  security: SendaChatMessageSecurity;
}


export class SendaChatMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  sendaChatMessage201ApplicationJSONObject?: SendaChatMessage201ApplicationJson;
}
