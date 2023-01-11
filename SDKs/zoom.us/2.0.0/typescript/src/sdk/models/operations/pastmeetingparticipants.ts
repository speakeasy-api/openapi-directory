import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PastMeetingParticipantsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingUUID" })
  meetingUUID: string;
}


export class PastMeetingParticipantsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class PastMeetingParticipantsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class PastMeetingParticipants200ApplicationJsonParticipants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=user_email" })
  userEmail?: string;
}


// PastMeetingParticipants200ApplicationJson
/** 
 * Pagination object.
**/
export class PastMeetingParticipants200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_count" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=participants", elemType: PastMeetingParticipants200ApplicationJsonParticipants })
  participants?: PastMeetingParticipants200ApplicationJsonParticipants[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class PastMeetingParticipantsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PastMeetingParticipantsPathParams;

  @SpeakeasyMetadata()
  queryParams: PastMeetingParticipantsQueryParams;

  @SpeakeasyMetadata()
  security: PastMeetingParticipantsSecurity;
}


export class PastMeetingParticipantsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  pastMeetingParticipants200ApplicationJSONObject?: PastMeetingParticipants200ApplicationJson;
}
