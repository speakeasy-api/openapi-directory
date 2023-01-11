import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddPhoneDeviceApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assigned_to" })
  assignedTo?: string;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=mac_address" })
  macAddress: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AddPhoneDeviceMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=assigned_to" })
  assignedTo?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=display_name" })
  displayName: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=mac_address" })
  macAddress: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=type" })
  type?: string;
}


export class AddPhoneDeviceRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AddPhoneDeviceApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AddPhoneDeviceMultipartFormData;
}


export class AddPhoneDeviceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class AddPhoneDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: AddPhoneDeviceRequests;

  @SpeakeasyMetadata()
  security: AddPhoneDeviceSecurity;
}


export class AddPhoneDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addPhoneDevice201ApplicationJSONAny?: any;
}
