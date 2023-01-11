import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CheckInRoomsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CheckInRoomsApplicationJsonParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calendar_id" })
  calendarId?: string;

  @SpeakeasyMetadata({ data: "json, name=change_key" })
  changeKey?: string;

  @SpeakeasyMetadata({ data: "json, name=event_id" })
  eventId: string;

  @SpeakeasyMetadata({ data: "json, name=resource_email" })
  resourceEmail?: string;
}


export class CheckInRoomsApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: CheckInRoomsApplicationJsonParams;
}


export class CheckInRoomsMultipartFormDataParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calendar_id" })
  calendarId?: string;

  @SpeakeasyMetadata({ data: "json, name=change_key" })
  changeKey?: string;

  @SpeakeasyMetadata({ data: "json, name=event_id" })
  eventId: string;

  @SpeakeasyMetadata({ data: "json, name=resource_email" })
  resourceEmail?: string;
}


export class CheckInRoomsMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=params;json=true" })
  params?: CheckInRoomsMultipartFormDataParams;
}


export class CheckInRoomsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: CheckInRoomsApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: CheckInRoomsMultipartFormData;
}


export class CheckInRoomsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CheckInRoomsPathParams;

  @SpeakeasyMetadata()
  request?: CheckInRoomsRequests;
}


export class CheckInRoomsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  checkInRooms202ApplicationJSONAny?: any;
}
