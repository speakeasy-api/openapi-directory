import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListimmessagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class ListimmessagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=channel" })
  channel?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=chat_user" })
  chatUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class ListimmessagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class Listimmessages200ApplicationJsonMessages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=sender" })
  sender?: string;

  @SpeakeasyMetadata({ data: "json, name=timstamp" })
  timstamp?: number;
}


export class Listimmessages200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=messages", elemType: Listimmessages200ApplicationJsonMessages })
  messages?: Listimmessages200ApplicationJsonMessages[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;
}


export class ListimmessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListimmessagesPathParams;

  @SpeakeasyMetadata()
  queryParams: ListimmessagesQueryParams;

  @SpeakeasyMetadata()
  security: ListimmessagesSecurity;
}


export class ListimmessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listimmessages200ApplicationJSONObject?: Listimmessages200ApplicationJson;
}
