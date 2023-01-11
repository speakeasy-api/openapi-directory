import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DashboardZoomRoomsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_number" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class DashboardZoomRoomsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


// DashboardZoomRoomsZoomRoomListZoomRoom
/** 
 * Zoom room.
**/
export class DashboardZoomRoomsZoomRoomListZoomRoom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_type" })
  accountType?: string;

  @SpeakeasyMetadata({ data: "json, name=calender_name" })
  calenderName?: string;

  @SpeakeasyMetadata({ data: "json, name=camera" })
  camera?: string;

  @SpeakeasyMetadata({ data: "json, name=device_ip" })
  deviceIp?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=health" })
  health?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=issues" })
  issues?: string[];

  @SpeakeasyMetadata({ data: "json, name=last_start_time" })
  lastStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=microphone" })
  microphone?: string;

  @SpeakeasyMetadata({ data: "json, name=room_name" })
  roomName?: string;

  @SpeakeasyMetadata({ data: "json, name=speaker" })
  speaker?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


// DashboardZoomRoomsZoomRoomList
/** 
 * Pagination Object.
**/
export class DashboardZoomRoomsZoomRoomList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_count" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=page_number" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;

  @SpeakeasyMetadata({ data: "json, name=zoom_rooms", elemType: DashboardZoomRoomsZoomRoomListZoomRoom })
  zoomRooms?: DashboardZoomRoomsZoomRoomListZoomRoom[];
}


export class DashboardZoomRoomsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DashboardZoomRoomsQueryParams;

  @SpeakeasyMetadata()
  security: DashboardZoomRoomsSecurity;
}


export class DashboardZoomRoomsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  zoomRoomList?: DashboardZoomRoomsZoomRoomList;
}
