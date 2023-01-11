import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImChatSessionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;
}


export class ImChatSessionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum ImChatSessions200ApplicationJsonSessionsTypeEnum {
    Group = "Group",
    One1 = "1:1"
}


export class ImChatSessions200ApplicationJsonSessions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last_message_sent_time" })
  lastMessageSentTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=session_id" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ImChatSessions200ApplicationJsonSessionsTypeEnum;
}


// ImChatSessions200ApplicationJson
/** 
 * Pagination object.
**/
export class ImChatSessions200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=sessions", elemType: ImChatSessions200ApplicationJsonSessions })
  sessions?: ImChatSessions200ApplicationJsonSessions[];

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: Date;
}


export class ImChatSessionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ImChatSessionsQueryParams;

  @SpeakeasyMetadata()
  security: ImChatSessionsSecurity;
}


export class ImChatSessionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  imChatSessions200ApplicationJSONObject?: ImChatSessions200ApplicationJson;
}
