import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ManageE911signageRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: Record<string, any>;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: Record<string, any>;
}


export class ManageE911signage202ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event_id" })
  eventId?: string;
}


export class ManageE911signageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: ManageE911signageRequests;
}


export class ManageE911signageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  manageE911signage202ApplicationJSONObject?: ManageE911signage202ApplicationJson;
}
