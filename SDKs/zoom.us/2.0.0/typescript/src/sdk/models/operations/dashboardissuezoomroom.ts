import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DashboardIssueZoomRoomQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;
}


export class DashboardIssueZoomRoomSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class DashboardIssueZoomRoom200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: Date;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;

  @SpeakeasyMetadata({ data: "json, name=zoom_rooms" })
  zoomRooms?: any[];
}


export class DashboardIssueZoomRoomRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DashboardIssueZoomRoomQueryParams;

  @SpeakeasyMetadata()
  security: DashboardIssueZoomRoomSecurity;
}


export class DashboardIssueZoomRoomResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dashboardIssueZoomRoom200ApplicationJSONObject?: DashboardIssueZoomRoom200ApplicationJson;
}
