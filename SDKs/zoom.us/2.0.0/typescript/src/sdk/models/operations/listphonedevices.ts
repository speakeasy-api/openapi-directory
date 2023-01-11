import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListPhoneDevicesTypeEnum {
    Assigned = "assigned",
    Unassigned = "unassigned"
}


export class ListPhoneDevicesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: ListPhoneDevicesTypeEnum;
}


export class ListPhoneDevicesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class ListPhoneDevices200ApplicationJsonDevicesAssignee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class ListPhoneDevices200ApplicationJsonDevicesSite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum ListPhoneDevices200ApplicationJsonDevicesStatusEnum {
    Online = "online",
    Offline = "offline"
}


export class ListPhoneDevices200ApplicationJsonDevices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignee" })
  assignee?: ListPhoneDevices200ApplicationJsonDevicesAssignee;

  @SpeakeasyMetadata({ data: "json, name=device_type" })
  deviceType?: string;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=mac_address" })
  macAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: ListPhoneDevices200ApplicationJsonDevicesSite;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ListPhoneDevices200ApplicationJsonDevicesStatusEnum;
}


export class ListPhoneDevices200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devices", elemType: ListPhoneDevices200ApplicationJsonDevices })
  devices?: ListPhoneDevices200ApplicationJsonDevices[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: string;
}


export class ListPhoneDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListPhoneDevicesQueryParams;

  @SpeakeasyMetadata()
  security: ListPhoneDevicesSecurity;
}


export class ListPhoneDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listPhoneDevices200ApplicationJSONObject?: ListPhoneDevices200ApplicationJson;
}
