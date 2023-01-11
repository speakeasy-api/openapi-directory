import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DashboardIssueDetailZoomRoomPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zoomroomId" })
  zoomroomId: string;
}


export class DashboardIssueDetailZoomRoomQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;
}


export class DashboardIssueDetailZoomRoomSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class DashboardIssueDetailZoomRoom200ApplicationJsonIssueDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issue" })
  issue?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: Date;
}


// DashboardIssueDetailZoomRoom200ApplicationJson
/** 
 * Pagination object.
**/
export class DashboardIssueDetailZoomRoom200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "json, name=issue_details", elemType: DashboardIssueDetailZoomRoom200ApplicationJsonIssueDetails })
  issueDetails?: DashboardIssueDetailZoomRoom200ApplicationJsonIssueDetails[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_count" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: Date;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class DashboardIssueDetailZoomRoomRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DashboardIssueDetailZoomRoomPathParams;

  @SpeakeasyMetadata()
  queryParams: DashboardIssueDetailZoomRoomQueryParams;

  @SpeakeasyMetadata()
  security: DashboardIssueDetailZoomRoomSecurity;
}


export class DashboardIssueDetailZoomRoomResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dashboardIssueDetailZoomRoom200ApplicationJSONObject?: DashboardIssueDetailZoomRoom200ApplicationJson;
}
