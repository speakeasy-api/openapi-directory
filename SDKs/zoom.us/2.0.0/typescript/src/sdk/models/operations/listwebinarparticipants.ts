import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListWebinarParticipantsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: string;
}


export class ListWebinarParticipantsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class ListWebinarParticipants200ApplicationJsonParticipants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=user_email" })
  userEmail?: string;
}


export class ListWebinarParticipants200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_count" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=participants", elemType: ListWebinarParticipants200ApplicationJsonParticipants })
  participants?: ListWebinarParticipants200ApplicationJsonParticipants[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class ListWebinarParticipantsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListWebinarParticipantsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListWebinarParticipantsQueryParams;
}


export class ListWebinarParticipantsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listWebinarParticipants200ApplicationJSONObject?: ListWebinarParticipants200ApplicationJson;
}
