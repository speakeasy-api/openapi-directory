import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateADevicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;
}


export class UpdateADeviceApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assigned_to" })
  assignedTo?: string;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=mac_address" })
  macAddress?: string;
}


export class UpdateADeviceMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=assigned_to" })
  assignedTo?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=mac_address" })
  macAddress?: string;
}


export class UpdateADeviceRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UpdateADeviceApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UpdateADeviceMultipartFormData;
}


export class UpdateADeviceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UpdateADeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateADevicePathParams;

  @SpeakeasyMetadata()
  request?: UpdateADeviceRequests;

  @SpeakeasyMetadata()
  security: UpdateADeviceSecurity;
}


export class UpdateADeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateADevice204ApplicationJSONAny?: any;
}
