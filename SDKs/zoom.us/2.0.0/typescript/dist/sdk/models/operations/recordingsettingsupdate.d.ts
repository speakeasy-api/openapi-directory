import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecordingSettingsUpdatePathParams extends SpeakeasyBase {
    meetingId: string;
}
export declare enum RecordingSettingsUpdateRecordingSettingsShareRecordingEnum {
    Publicly = "publicly",
    Internally = "internally",
    None = "none"
}
export declare class RecordingSettingsUpdateRecordingSettings extends SpeakeasyBase {
    approvalType?: number;
    authenticationDomains?: string;
    authenticationOption?: string;
    onDemand?: boolean;
    password?: string;
    recordingAuthentication?: boolean;
    sendEmailToHost?: boolean;
    shareRecording?: RecordingSettingsUpdateRecordingSettingsShareRecordingEnum;
    showSocialShareButtons?: boolean;
    topic?: string;
    viewerDownload?: boolean;
}
export declare class RecordingSettingsUpdateRequests extends SpeakeasyBase {
    recordingSettings?: RecordingSettingsUpdateRecordingSettings;
    recordingSettings1?: RecordingSettingsUpdateRecordingSettings;
}
export declare class RecordingSettingsUpdateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class RecordingSettingsUpdateRequest extends SpeakeasyBase {
    pathParams: RecordingSettingsUpdatePathParams;
    request: RecordingSettingsUpdateRequests;
    security: RecordingSettingsUpdateSecurity;
}
export declare class RecordingSettingsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
