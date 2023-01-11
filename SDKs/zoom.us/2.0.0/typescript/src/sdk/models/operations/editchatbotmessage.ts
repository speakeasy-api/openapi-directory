import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditChatbotMessagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=message_id" })
  messageId: string;
}


export class EditChatbotMessageApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=is_markdown_support" })
  isMarkdownSupport?: boolean;

  @SpeakeasyMetadata({ data: "json, name=robot_jid" })
  robotJid: string;

  @SpeakeasyMetadata({ data: "json, name=user_jid" })
  userJid?: string;
}


export class EditChatbotMessageMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=account_id" })
  accountId: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=content;json=true" })
  content: Record<string, any>;

  @SpeakeasyMetadata({ data: "multipart_form, name=is_markdown_support" })
  isMarkdownSupport?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=robot_jid" })
  robotJid: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_jid" })
  userJid?: string;
}


export class EditChatbotMessageRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: EditChatbotMessageApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: EditChatbotMessageMultipartFormData;
}


export class EditChatbotMessageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  clientCredentials: shared.SchemeClientCredentials;
}


export class EditChatbotMessage200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message_id" })
  messageId?: string;

  @SpeakeasyMetadata({ data: "json, name=robot_jid" })
  robotJid?: string;

  @SpeakeasyMetadata({ data: "json, name=sent_time" })
  sentTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=to_jid" })
  toJid?: string;

  @SpeakeasyMetadata({ data: "json, name=user_jid" })
  userJid?: string;
}


export class EditChatbotMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditChatbotMessagePathParams;

  @SpeakeasyMetadata()
  request?: EditChatbotMessageRequests;

  @SpeakeasyMetadata()
  security: EditChatbotMessageSecurity;
}


export class EditChatbotMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  editChatbotMessage200ApplicationJSONObject?: EditChatbotMessage200ApplicationJson;
}
