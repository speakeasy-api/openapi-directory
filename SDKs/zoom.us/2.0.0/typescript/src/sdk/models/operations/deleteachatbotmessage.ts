import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteAChatbotMessagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=message_id" })
  messageId: string;
}


export class DeleteAChatbotMessageApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=robot_jid" })
  robotJid: string;

  @SpeakeasyMetadata({ data: "json, name=user_jid" })
  userJid?: string;
}


export class DeleteAChatbotMessageMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=account_id" })
  accountId: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=robot_jid" })
  robotJid: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_jid" })
  userJid?: string;
}


export class DeleteAChatbotMessageRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: DeleteAChatbotMessageApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: DeleteAChatbotMessageMultipartFormData;
}


export class DeleteAChatbotMessageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  clientCredentials: shared.SchemeClientCredentials;
}


export class DeleteAChatbotMessage200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message_id" })
  messageId?: string;

  @SpeakeasyMetadata({ data: "json, name=robot_jid" })
  robotJid?: string;

  @SpeakeasyMetadata({ data: "json, name=sent_time" })
  sentTime?: string;

  @SpeakeasyMetadata({ data: "json, name=to_jid" })
  toJid?: string;

  @SpeakeasyMetadata({ data: "json, name=user_jid" })
  userJid?: string;
}


export class DeleteAChatbotMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAChatbotMessagePathParams;

  @SpeakeasyMetadata()
  request?: DeleteAChatbotMessageRequests;

  @SpeakeasyMetadata()
  security: DeleteAChatbotMessageSecurity;
}


export class DeleteAChatbotMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteAChatbotMessage200ApplicationJSONObject?: DeleteAChatbotMessage200ApplicationJson;
}
