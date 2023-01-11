import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AddARoomApplicationJsonTypeEnum {
    ZoomRoom = "ZoomRoom",
    SchedulingDisplayOnly = "SchedulingDisplayOnly",
    DigitalSignageOnly = "DigitalSignageOnly"
}


export class AddARoomApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location_id" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: AddARoomApplicationJsonTypeEnum;
}

export enum AddARoomMultipartFormDataTypeEnum {
    ZoomRoom = "ZoomRoom",
    SchedulingDisplayOnly = "SchedulingDisplayOnly",
    DigitalSignageOnly = "DigitalSignageOnly"
}


export class AddARoomMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=location_id" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=type" })
  type: AddARoomMultipartFormDataTypeEnum;
}


export class AddARoomRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AddARoomApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AddARoomMultipartFormData;
}


export class AddARoomSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum AddARoom201ApplicationJsonTypeEnum {
    ZoomRoom = "ZoomRoom",
    SchedulingDisplayOnly = "SchedulingDisplayOnly",
    DigitalSignageOnly = "DigitalSignageOnly"
}


export class AddARoom201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=location_id" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=room_id" })
  roomId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AddARoom201ApplicationJsonTypeEnum;
}


export class AddARoomRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: AddARoomRequests;

  @SpeakeasyMetadata()
  security: AddARoomSecurity;
}


export class AddARoomResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addARoom201ApplicationJSONObject?: AddARoom201ApplicationJson;
}
