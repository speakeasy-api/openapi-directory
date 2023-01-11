import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DashboardWebinarParticipantSharePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: string;
}

export enum DashboardWebinarParticipantShareTypeEnum {
    Past = "past",
    Live = "live"
}


export class DashboardWebinarParticipantShareQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: DashboardWebinarParticipantShareTypeEnum;
}


export class DashboardWebinarParticipantShareSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class DashboardWebinarParticipantShare200ApplicationJsonParticipantsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: string;
}


export class DashboardWebinarParticipantShare200ApplicationJsonParticipants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details", elemType: DashboardWebinarParticipantShare200ApplicationJsonParticipantsDetails })
  details?: DashboardWebinarParticipantShare200ApplicationJsonParticipantsDetails[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=user_name" })
  userName?: string;
}


// DashboardWebinarParticipantShare200ApplicationJson
/** 
 * Pagination object.
**/
export class DashboardWebinarParticipantShare200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_count" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=participants", elemType: DashboardWebinarParticipantShare200ApplicationJsonParticipants })
  participants?: DashboardWebinarParticipantShare200ApplicationJsonParticipants[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class DashboardWebinarParticipantShareRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DashboardWebinarParticipantSharePathParams;

  @SpeakeasyMetadata()
  queryParams: DashboardWebinarParticipantShareQueryParams;

  @SpeakeasyMetadata()
  security: DashboardWebinarParticipantShareSecurity;
}


export class DashboardWebinarParticipantShareResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dashboardWebinarParticipantShare200ApplicationJSONObject?: DashboardWebinarParticipantShare200ApplicationJson;
}
