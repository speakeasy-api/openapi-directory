import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecordingSettingsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: string;
}

export enum RecordingSettingsUpdateRecordingSettingsShareRecordingEnum {
    Publicly = "publicly",
    Internally = "internally",
    None = "none"
}


export class RecordingSettingsUpdateRecordingSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approval_type, multipart_form, name=approval_type" })
  approvalType?: number;

  @SpeakeasyMetadata({ data: "json, name=authentication_domains, multipart_form, name=authentication_domains" })
  authenticationDomains?: string;

  @SpeakeasyMetadata({ data: "json, name=authentication_option, multipart_form, name=authentication_option" })
  authenticationOption?: string;

  @SpeakeasyMetadata({ data: "json, name=on_demand, multipart_form, name=on_demand" })
  onDemand?: boolean;

  @SpeakeasyMetadata({ data: "json, name=password, multipart_form, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=recording_authentication, multipart_form, name=recording_authentication" })
  recordingAuthentication?: boolean;

  @SpeakeasyMetadata({ data: "json, name=send_email_to_host, multipart_form, name=send_email_to_host" })
  sendEmailToHost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=share_recording, multipart_form, name=share_recording" })
  shareRecording?: RecordingSettingsUpdateRecordingSettingsShareRecordingEnum;

  @SpeakeasyMetadata({ data: "json, name=show_social_share_buttons, multipart_form, name=show_social_share_buttons" })
  showSocialShareButtons?: boolean;

  @SpeakeasyMetadata({ data: "json, name=topic, multipart_form, name=topic" })
  topic?: string;

  @SpeakeasyMetadata({ data: "json, name=viewer_download, multipart_form, name=viewer_download" })
  viewerDownload?: boolean;
}


export class RecordingSettingsUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  recordingSettings?: RecordingSettingsUpdateRecordingSettings;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  recordingSettings1?: RecordingSettingsUpdateRecordingSettings;
}


export class RecordingSettingsUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class RecordingSettingsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RecordingSettingsUpdatePathParams;

  @SpeakeasyMetadata()
  request: RecordingSettingsUpdateRequests;

  @SpeakeasyMetadata()
  security: RecordingSettingsUpdateSecurity;
}


export class RecordingSettingsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
