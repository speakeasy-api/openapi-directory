import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImChatMessagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sessionId" })
  sessionId: string;
}


export class ImChatMessagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;
}


export class ImChatMessages200ApplicationJsonMessages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=action_time" })
  actionTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=sender" })
  sender?: string;
}


// ImChatMessages200ApplicationJson
/** 
 * Pagination object.
**/
export class ImChatMessages200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "json, name=messages", elemType: ImChatMessages200ApplicationJsonMessages })
  messages?: ImChatMessages200ApplicationJsonMessages[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=session_id" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: Date;
}


export class ImChatMessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ImChatMessagesPathParams;

  @SpeakeasyMetadata()
  queryParams: ImChatMessagesQueryParams;
}


export class ImChatMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  imChatMessages200ApplicationJSONObject?: ImChatMessages200ApplicationJson;
}
