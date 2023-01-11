import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteChatMessagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=messageId" })
  messageId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class DeleteChatMessageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to_channel" })
  toChannel?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to_contact" })
  toContact?: string;
}


export class DeleteChatMessageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class DeleteChatMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteChatMessagePathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteChatMessageQueryParams;

  @SpeakeasyMetadata()
  security: DeleteChatMessageSecurity;
}


export class DeleteChatMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
