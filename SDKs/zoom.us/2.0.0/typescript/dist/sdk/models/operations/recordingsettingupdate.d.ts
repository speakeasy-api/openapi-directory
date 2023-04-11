import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RecordingSettingUpdateSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class RecordingSettingUpdateRequest extends SpeakeasyBase {
    /**
     * To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance.
     *
     * @remarks
     *
     * To get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance.
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875=="), you must **double encode** the UUID before making an API request.
     */
    meetingId: string;
}
/**
 * Approval type for the registration.<br>
 *
 * @remarks
 * `0`- Automatically approve the registration when a user registers.<br>
 * `1` - Manually approve or deny the registration of a user.<br>
 * `2` - No registration required to view the recording.
 */
export declare enum RecordingSettingUpdateRecordingSettingsApprovalTypeEnum {
    Zero = "0",
    One = "1",
    Two = "2"
}
/**
 * Determine how the meeting recording is shared.
 */
export declare enum RecordingSettingUpdateRecordingSettingsShareRecordingEnum {
    Publicly = "publicly",
    Internally = "internally",
    None = "none"
}
/**
 * **HTTP Status Code:** `200` <br>
 *
 * @remarks
 * Meeting recording settings returned
 */
export declare class RecordingSettingUpdateRecordingSettings extends SpeakeasyBase {
    /**
     * Approval type for the registration.<br>
     *
     * @remarks
     * `0`- Automatically approve the registration when a user registers.<br>
     * `1` - Manually approve or deny the registration of a user.<br>
     * `2` - No registration required to view the recording.
     */
    approvalType?: RecordingSettingUpdateRecordingSettingsApprovalTypeEnum;
    /**
     * Authentication domains.
     */
    authenticationDomains?: string;
    /**
     * Authentication Options.
     */
    authenticationOption?: string;
    /**
     * Determine whether registration  isrequired to view the recording.
     */
    onDemand?: boolean;
    /**
     * Enable password protection for the recording by setting a password. The password must have a minimum of **eight** characters with a mix of numbers, letters and special characters.<br><br>
     *
     * @remarks
     * **Note:** If the account owner or the admin has set minimum password strength requirements for recordings via Account Settings, the password value provided here must meet those requirements. <br><br>If the requirements are enabled, you can view those requirements by calling either the [Get User Settings API](https://marketplace.zoom.us/docs/api-reference/zoom-api/users/usersettings) or the [Get Account Settings](https://marketplace.zoom.us/docs/api-reference/zoom-api/accounts/accountsettings) API.
     */
    password?: string;
    /**
     * Only authenticated users can view.
     */
    recordingAuthentication?: boolean;
    /**
     * Send an email to host when someone registers to view the recording. This applies for On-demand recordings only.
     */
    sendEmailToHost?: boolean;
    /**
     * Determine how the meeting recording is shared.
     */
    shareRecording?: RecordingSettingUpdateRecordingSettingsShareRecordingEnum;
    /**
     * Show social share buttons on registration page. This applies for On-demand recordings only.
     */
    showSocialShareButtons?: boolean;
    /**
     * Name of the recording.
     */
    topic?: string;
    /**
     * Determine whether a viewer can download the recording file or not.
     */
    viewerDownload?: boolean;
}
export declare class RecordingSettingUpdateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **HTTP Status Code:** `200` <br>
     *
     * @remarks
     * Meeting recording settings returned
     */
    recordingSettings?: RecordingSettingUpdateRecordingSettings;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
