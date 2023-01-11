import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecordingSettingUpdatePathParams extends SpeakeasyBase {
    meetingId: string;
}
export declare class RecordingSettingUpdateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum RecordingSettingUpdateRecordingSettingsShareRecordingEnum {
    Publicly = "publicly",
    Internally = "internally",
    None = "none"
}
export declare class RecordingSettingUpdateRecordingSettings extends SpeakeasyBase {
    approvalType?: number;
    authenticationDomains?: string;
    authenticationOption?: string;
    onDemand?: boolean;
    password?: string;
    recordingAuthentication?: boolean;
    sendEmailToHost?: boolean;
    shareRecording?: RecordingSettingUpdateRecordingSettingsShareRecordingEnum;
    showSocialShareButtons?: boolean;
    topic?: string;
    viewerDownload?: boolean;
}
export declare class RecordingSettingUpdateRequest extends SpeakeasyBase {
    pathParams: RecordingSettingUpdatePathParams;
    security: RecordingSettingUpdateSecurity;
}
export declare class RecordingSettingUpdateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    recordingSettings?: RecordingSettingUpdateRecordingSettings;
    statusCode: number;
}
