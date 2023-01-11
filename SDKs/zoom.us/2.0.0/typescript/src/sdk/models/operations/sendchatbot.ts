import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SendchatbotApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=is_markdown_support" })
  isMarkdownSupport?: boolean;

  @SpeakeasyMetadata({ data: "json, name=robot_jid" })
  robotJid: string;

  @SpeakeasyMetadata({ data: "json, name=to_jid" })
  toJid: string;

  @SpeakeasyMetadata({ data: "json, name=user_jid" })
  userJid?: string;

  @SpeakeasyMetadata({ data: "json, name=visible_to_user" })
  visibleToUser?: string;
}


export class SendchatbotMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=account_id" })
  accountId: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=content;json=true" })
  content: Record<string, any>;

  @SpeakeasyMetadata({ data: "multipart_form, name=is_markdown_support" })
  isMarkdownSupport?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=robot_jid" })
  robotJid: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=to_jid" })
  toJid: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_jid" })
  userJid?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=visible_to_user" })
  visibleToUser?: string;
}


export class SendchatbotRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: SendchatbotApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: SendchatbotMultipartFormData;
}


export class SendchatbotSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  clientCredentials: shared.SchemeClientCredentials;
}


export class SendchatbotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: SendchatbotRequests;

  @SpeakeasyMetadata()
  security: SendchatbotSecurity;
}


export class SendchatbotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
