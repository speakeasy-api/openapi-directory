import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListZoomRoomsStatusEnum {
    Offline = "Offline",
    Available = "Available",
    InMeeting = "InMeeting",
    UnderConstruction = "UnderConstruction"
}

export enum ListZoomRoomsTypeEnum {
    ZoomRoom = "ZoomRoom",
    SchedulingDisplayOnly = "SchedulingDisplayOnly",
    DigitalSignageOnly = "DigitalSignageOnly"
}


export class ListZoomRoomsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location_id" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: ListZoomRoomsStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: ListZoomRoomsTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unassigned_rooms" })
  unassignedRooms?: boolean;
}


export class ListZoomRoomsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum ListZoomRooms200ApplicationJsonRoomsStatusEnum {
    Offline = "Offline",
    Available = "Available",
    InMeeting = "InMeeting",
    UnderConstruction = "UnderConstruction"
}


export class ListZoomRooms200ApplicationJsonRooms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activation_code" })
  activationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=location_id" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=room_id" })
  roomId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ListZoomRooms200ApplicationJsonRoomsStatusEnum;
}


export class ListZoomRooms200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=rooms", elemType: ListZoomRooms200ApplicationJsonRooms })
  rooms?: ListZoomRooms200ApplicationJsonRooms[];
}


export class ListZoomRoomsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListZoomRoomsQueryParams;

  @SpeakeasyMetadata()
  security: ListZoomRoomsSecurity;
}


export class ListZoomRoomsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listZoomRooms200ApplicationJSONObject?: ListZoomRooms200ApplicationJson;
}
