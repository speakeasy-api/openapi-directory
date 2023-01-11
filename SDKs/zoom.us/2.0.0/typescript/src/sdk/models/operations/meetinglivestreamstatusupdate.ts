import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeetingLiveStreamStatusUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: number;
}

export enum MeetingLiveStreamStatusUpdateApplicationJsonActionEnum {
    Start = "start",
    Stop = "stop"
}


// MeetingLiveStreamStatusUpdateApplicationJsonSettings
/** 
 * Update the settings of a live streaming session. The settings can only be updated for a live stream that has been stopped. You can not update the settings of an ongoing live stream.
**/
export class MeetingLiveStreamStatusUpdateApplicationJsonSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active_speaker_name" })
  activeSpeakerName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;
}


// MeetingLiveStreamStatusUpdateApplicationJson
/** 
 * Meeting live stream status.
**/
export class MeetingLiveStreamStatusUpdateApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: MeetingLiveStreamStatusUpdateApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: MeetingLiveStreamStatusUpdateApplicationJsonSettings;
}

export enum MeetingLiveStreamStatusUpdateMultipartFormDataActionEnum {
    Start = "start",
    Stop = "stop"
}


// MeetingLiveStreamStatusUpdateMultipartFormDataSettings
/** 
 * Update the settings of a live streaming session. The settings can only be updated for a live stream that has been stopped. You can not update the settings of an ongoing live stream.
**/
export class MeetingLiveStreamStatusUpdateMultipartFormDataSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active_speaker_name" })
  activeSpeakerName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;
}


// MeetingLiveStreamStatusUpdateMultipartFormData
/** 
 * Meeting live stream status.
**/
export class MeetingLiveStreamStatusUpdateMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=action" })
  action?: MeetingLiveStreamStatusUpdateMultipartFormDataActionEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=settings;json=true" })
  settings?: MeetingLiveStreamStatusUpdateMultipartFormDataSettings;
}


export class MeetingLiveStreamStatusUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: MeetingLiveStreamStatusUpdateApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: MeetingLiveStreamStatusUpdateMultipartFormData;
}


export class MeetingLiveStreamStatusUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class MeetingLiveStreamStatusUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MeetingLiveStreamStatusUpdatePathParams;

  @SpeakeasyMetadata()
  request: MeetingLiveStreamStatusUpdateRequests;

  @SpeakeasyMetadata()
  security: MeetingLiveStreamStatusUpdateSecurity;
}


export class MeetingLiveStreamStatusUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
