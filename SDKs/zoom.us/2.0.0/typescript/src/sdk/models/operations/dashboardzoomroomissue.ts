import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DashboardZoomRoomIssueQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;
}


export class DashboardZoomRoomIssueSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class DashboardZoomRoomIssue200ApplicationJsonIssues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issue_name" })
  issueName?: string;

  @SpeakeasyMetadata({ data: "json, name=zoom_rooms_count" })
  zoomRoomsCount?: number;
}


export class DashboardZoomRoomIssue200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "json, name=issues", elemType: DashboardZoomRoomIssue200ApplicationJsonIssues })
  issues?: DashboardZoomRoomIssue200ApplicationJsonIssues[];

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: Date;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class DashboardZoomRoomIssueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DashboardZoomRoomIssueQueryParams;

  @SpeakeasyMetadata()
  security: DashboardZoomRoomIssueSecurity;
}


export class DashboardZoomRoomIssueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dashboardZoomRoomIssue200ApplicationJSONObject?: DashboardZoomRoomIssue200ApplicationJson;
}
