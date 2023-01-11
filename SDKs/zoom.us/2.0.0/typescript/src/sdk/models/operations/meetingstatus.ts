import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeetingStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: number;
}

export enum MeetingStatusApplicationJsonActionEnum {
    End = "end",
    Recover = "recover"
}


export class MeetingStatusApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: MeetingStatusApplicationJsonActionEnum;
}

export enum MeetingStatusMultipartFormDataActionEnum {
    End = "end",
    Recover = "recover"
}


export class MeetingStatusMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=action" })
  action?: MeetingStatusMultipartFormDataActionEnum;
}


export class MeetingStatusRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: MeetingStatusApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: MeetingStatusMultipartFormData;
}


export class MeetingStatusSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class MeetingStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MeetingStatusPathParams;

  @SpeakeasyMetadata()
  request: MeetingStatusRequests;

  @SpeakeasyMetadata()
  security: MeetingStatusSecurity;
}


export class MeetingStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
