import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListZrDevicesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roomId" })
  roomId: string;
}


export class ListZrDevicesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum ListZrDevices200ApplicationJsonDevicesDeviceTypeEnum {
    ZoomRoomsComputer = "Zoom Rooms Computer",
    Controller = "Controller",
    SchedulingDisplay = "Scheduling Display",
    ZoomRoomsControlSystem = "Zoom Rooms Control System",
    CompanionWhiteboard = "Companion Whiteboard"
}

export enum ListZrDevices200ApplicationJsonDevicesStatusEnum {
    Online = "Online",
    Offline = "Offline"
}


export class ListZrDevices200ApplicationJsonDevices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=app_version" })
  appVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=device_system" })
  deviceSystem?: string;

  @SpeakeasyMetadata({ data: "json, name=device_type" })
  deviceType?: ListZrDevices200ApplicationJsonDevicesDeviceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=room_name" })
  roomName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ListZrDevices200ApplicationJsonDevicesStatusEnum;
}


export class ListZrDevices200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devices", elemType: ListZrDevices200ApplicationJsonDevices })
  devices?: ListZrDevices200ApplicationJsonDevices[];
}


export class ListZrDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListZrDevicesPathParams;

  @SpeakeasyMetadata()
  security: ListZrDevicesSecurity;
}


export class ListZrDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listZRDevices200ApplicationJSONObject?: ListZrDevices200ApplicationJson;
}
