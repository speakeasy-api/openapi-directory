import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChangeZoomRoomsAppVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roomId" })
  roomId: string;
}

export enum ChangeZoomRoomsAppVersionApplicationJsonActionEnum {
    Upgrade = "upgrade",
    Downgrade = "downgrade",
    Cancel = "cancel"
}


export class ChangeZoomRoomsAppVersionApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: ChangeZoomRoomsAppVersionApplicationJsonActionEnum;
}

export enum ChangeZoomRoomsAppVersionMultipartFormDataActionEnum {
    Upgrade = "upgrade",
    Downgrade = "downgrade",
    Cancel = "cancel"
}


export class ChangeZoomRoomsAppVersionMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=action" })
  action?: ChangeZoomRoomsAppVersionMultipartFormDataActionEnum;
}


export class ChangeZoomRoomsAppVersionRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: ChangeZoomRoomsAppVersionApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: ChangeZoomRoomsAppVersionMultipartFormData;
}


export class ChangeZoomRoomsAppVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChangeZoomRoomsAppVersionPathParams;

  @SpeakeasyMetadata()
  request?: ChangeZoomRoomsAppVersionRequests;
}


export class ChangeZoomRoomsAppVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  changeZoomRoomsAppVersion204ApplicationJSONAny?: any;
}
