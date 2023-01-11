import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DashboardMeetingParticipantSharePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: string;
}

export enum DashboardMeetingParticipantShareTypeEnum {
    Past = "past",
    PastOne = "pastOne",
    Live = "live"
}


export class DashboardMeetingParticipantShareQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: DashboardMeetingParticipantShareTypeEnum;
}


export class DashboardMeetingParticipantShareSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class DashboardMeetingParticipantShare200ApplicationJsonParticipantsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: string;
}


export class DashboardMeetingParticipantShare200ApplicationJsonParticipants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details", elemType: DashboardMeetingParticipantShare200ApplicationJsonParticipantsDetails })
  details?: DashboardMeetingParticipantShare200ApplicationJsonParticipantsDetails[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=user_name" })
  userName?: string;
}


// DashboardMeetingParticipantShare200ApplicationJson
/** 
 * Pagination object.
**/
export class DashboardMeetingParticipantShare200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_count" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=participants", elemType: DashboardMeetingParticipantShare200ApplicationJsonParticipants })
  participants?: DashboardMeetingParticipantShare200ApplicationJsonParticipants[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class DashboardMeetingParticipantShareRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DashboardMeetingParticipantSharePathParams;

  @SpeakeasyMetadata()
  queryParams: DashboardMeetingParticipantShareQueryParams;

  @SpeakeasyMetadata()
  security: DashboardMeetingParticipantShareSecurity;
}


export class DashboardMeetingParticipantShareResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dashboardMeetingParticipantShare200ApplicationJSONObject?: DashboardMeetingParticipantShare200ApplicationJson;
}
