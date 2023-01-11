import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecordingSettingUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: string;
}


export class RecordingSettingUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum RecordingSettingUpdateRecordingSettingsShareRecordingEnum {
    Publicly = "publicly",
    Internally = "internally",
    None = "none"
}


export class RecordingSettingUpdateRecordingSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approval_type" })
  approvalType?: number;

  @SpeakeasyMetadata({ data: "json, name=authentication_domains" })
  authenticationDomains?: string;

  @SpeakeasyMetadata({ data: "json, name=authentication_option" })
  authenticationOption?: string;

  @SpeakeasyMetadata({ data: "json, name=on_demand" })
  onDemand?: boolean;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=recording_authentication" })
  recordingAuthentication?: boolean;

  @SpeakeasyMetadata({ data: "json, name=send_email_to_host" })
  sendEmailToHost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=share_recording" })
  shareRecording?: RecordingSettingUpdateRecordingSettingsShareRecordingEnum;

  @SpeakeasyMetadata({ data: "json, name=show_social_share_buttons" })
  showSocialShareButtons?: boolean;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;

  @SpeakeasyMetadata({ data: "json, name=viewer_download" })
  viewerDownload?: boolean;
}


export class RecordingSettingUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RecordingSettingUpdatePathParams;

  @SpeakeasyMetadata()
  security: RecordingSettingUpdateSecurity;
}


export class RecordingSettingUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  recordingSettings?: RecordingSettingUpdateRecordingSettings;

  @SpeakeasyMetadata()
  statusCode: number;
}
