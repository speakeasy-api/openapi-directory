import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeetingRecordingRegistrantStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: number;
}

export enum MeetingRecordingRegistrantStatusApplicationJsonActionEnum {
    Approve = "approve",
    Deny = "deny"
}


// MeetingRecordingRegistrantStatusApplicationJson
/** 
 * Registrant Status
**/
export class MeetingRecordingRegistrantStatusApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: MeetingRecordingRegistrantStatusApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=registrants" })
  registrants?: any[];
}

export enum MeetingRecordingRegistrantStatusMultipartFormDataActionEnum {
    Approve = "approve",
    Deny = "deny"
}


// MeetingRecordingRegistrantStatusMultipartFormData
/** 
 * Registrant Status
**/
export class MeetingRecordingRegistrantStatusMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=action" })
  action: MeetingRecordingRegistrantStatusMultipartFormDataActionEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=registrants;json=true" })
  registrants?: any[];
}


export class MeetingRecordingRegistrantStatusRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: MeetingRecordingRegistrantStatusApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: MeetingRecordingRegistrantStatusMultipartFormData;
}


export class MeetingRecordingRegistrantStatusSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class MeetingRecordingRegistrantStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MeetingRecordingRegistrantStatusPathParams;

  @SpeakeasyMetadata()
  request: MeetingRecordingRegistrantStatusRequests;

  @SpeakeasyMetadata()
  security: MeetingRecordingRegistrantStatusSecurity;
}


export class MeetingRecordingRegistrantStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
