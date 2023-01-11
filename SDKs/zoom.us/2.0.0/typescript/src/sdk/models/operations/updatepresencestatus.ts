import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdatePresenceStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}

export enum UpdatePresenceStatusApplicationJsonStatusEnum {
    DoNoDisturb = "Do_No_Disturb",
    Away = "Away",
    Available = "Available"
}


export class UpdatePresenceStatusApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: UpdatePresenceStatusApplicationJsonStatusEnum;
}

export enum UpdatePresenceStatusMultipartFormDataStatusEnum {
    DoNoDisturb = "Do_No_Disturb",
    Away = "Away",
    Available = "Available"
}


export class UpdatePresenceStatusMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=status" })
  status?: UpdatePresenceStatusMultipartFormDataStatusEnum;
}


export class UpdatePresenceStatusRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UpdatePresenceStatusApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UpdatePresenceStatusMultipartFormData;
}


export class UpdatePresenceStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePresenceStatusPathParams;

  @SpeakeasyMetadata()
  request?: UpdatePresenceStatusRequests;
}


export class UpdatePresenceStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updatePresenceStatus204ApplicationJSONAny?: any;
}
