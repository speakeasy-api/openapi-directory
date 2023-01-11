import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChatMessagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetChatMessagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_deleted_and_edited_message" })
  includeDeletedAndEditedMessage?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to_channel" })
  toChannel?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to_contact" })
  toContact?: string;
}


export class GetChatMessagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum GetChatMessages200ApplicationJsonMessagesStatusEnum {
    Deleted = "Deleted",
    Edited = "Edited",
    Normal = "Normal"
}


export class GetChatMessages200ApplicationJsonMessages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=reply_main_message_id" })
  replyMainMessageId?: string;

  @SpeakeasyMetadata({ data: "json, name=reply_main_message_timestamp" })
  replyMainMessageTimestamp?: number;

  @SpeakeasyMetadata({ data: "json, name=sender" })
  sender?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetChatMessages200ApplicationJsonMessagesStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: number;
}


// GetChatMessages200ApplicationJson
/** 
 * Chat message object.
**/
export class GetChatMessages200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=messages", elemType: GetChatMessages200ApplicationJsonMessages })
  messages?: GetChatMessages200ApplicationJsonMessages[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;
}


export class GetChatMessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChatMessagesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetChatMessagesQueryParams;

  @SpeakeasyMetadata()
  security: GetChatMessagesSecurity;
}


export class GetChatMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getChatMessages200ApplicationJSONObject?: GetChatMessages200ApplicationJson;
}
