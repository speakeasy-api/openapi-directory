import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UserSettingsUpdateSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Choose between enhanced encryption and [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) when starting or a meeting. When using end-to-end encryption, several features (e.g. cloud recording, phone/SIP/H.323 dial-in) will be **automatically disabled**. <br><br>The value of this field can be one of the following:<br>
 *
 * @remarks
 * `enhanced_encryption`: Enhanced encryption. Encryption is stored in the cloud if you enable this option. <br>
 *
 * `e2ee`: [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the following features: join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions.
 */
export declare enum UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
export declare enum UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirementConsecutiveCharactersLengthEnum {
    Zero = "0",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8"
}
/**
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
 */
export declare class UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
    consecutiveCharactersLength?: UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirementConsecutiveCharactersLengthEnum;
    /**
     * If set to `true`, the passcode must contain at least 1 letter (such as a,b,c...).
     *
     * @remarks
     *
     */
    haveLetter?: boolean;
    /**
     * If set to `true`, the passcode must contain at least 1 number (such as 1,2,3...).
     */
    haveNumber?: boolean;
    /**
     * If set to `true`, the passcode must have at least 1 special character (!,@,#...).
     */
    haveSpecialCharacter?: boolean;
    /**
     * If set to `true`, the passcode must include both uppercase and lowercase characters.
     */
    haveUpperAndLowerCharacters?: boolean;
    /**
     * The minimum length that the meeting/webinar passcode needs to have.
     */
    length?: number;
    /**
     * If set to `true`, the passcode must only contain numbers and no other characters.
     */
    onlyAllowNumeric?: boolean;
    /**
     * If set to `true`, users will be informed if the provided passcode is weak.
     */
    weakEnhanceDetection?: boolean;
}
/**
 *
 * @remarks
 *
 * Specify who should be admitted to the waiting room. The value of this field can be one of the following:<br>
 * `0`: All attendees<br> `1`: Users who are not in your account<br> `2`: Users who are not in your account and are not part of your whitelisted domains that are specified in
 */
export declare enum UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettingsParticipantsToPlaceInWaitingRoomEnum {
    Zero = "0",
    One = "1",
    Two = "2"
}
/**
 * Specify the settings to be applied if waiting room is enabled.
 */
export declare class UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
    /**
     *
     * @remarks
     *
     * Specify who should be admitted to the waiting room. The value of this field can be one of the following:<br>
     * `0`: All attendees<br> `1`: Users who are not in your account<br> `2`: Users who are not in your account and are not part of your whitelisted domains that are specified in
     */
    participantsToPlaceInWaitingRoom?: UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettingsParticipantsToPlaceInWaitingRoomEnum;
    /**
     * Specify who can admit participants from the waiting room. The value of this field can be one of the following:<br>
     *
     * @remarks
     * `0`: Host and co-hosts only<br> `1`: Host, co-hosts, and anyone who bypassed the waiting room (only if host and co-hosts are not present).
     *
     *
     *
     */
    usersWhoCanAdmitParticipantsFromWaitingRoom?: number;
    /**
     * If the value of the `participants_to_place_in_waiting_room` field is `2`, use this setting to specify the domains that can bypass the waiting room feature. Separate multiple domains with commas(example: "aaa.com,bbb.com").
     */
    whitelistedDomainsForWaitingRoom?: string;
}
export declare class UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
    /**
     * `true`: Require that all meetings are secured with at least one security option.
     *
     * @remarks
     *
     * This setting can only be disabled by Enterprise, ISV, Business (with more than 100 licenses), and Education accounts. [Learn more](https://marketplace.zoom.us/docs/guides/stay-up-to-date/announcements#meeting-security).
     */
    autoSecurity?: boolean;
    /**
     * If set to `true`, meeting passcode will be encrypted and included in the invite link to allow participants to join with just one click without having to enter the passcode.
     *
     * @remarks
     *
     */
    embedPasswordInJoinLink?: boolean;
    /**
     * Choose between enhanced encryption and [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) when starting or a meeting. When using end-to-end encryption, several features (e.g. cloud recording, phone/SIP/H.323 dial-in) will be **automatically disabled**. <br><br>The value of this field can be one of the following:<br>
     *
     * @remarks
     * `enhanced_encryption`: Enhanced encryption. Encryption is stored in the cloud if you enable this option. <br>
     *
     * `e2ee`: [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the following features: join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions.
     */
    encryptionType?: UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
    /**
     * Allow use of end-to-end encryption for meetings. If set to `true`, you can specify the encryption type in `encryption_type` field.
     */
    endToEndEncryptedMeetings?: boolean;
    /**
     * If set to `true`, all instant, and scheduled meetings that users can join via client, or room systems will be passcode-protected. The Personal Meeting ID (PMI) meetings are not included in this setting.
     */
    meetingPassword?: boolean;
    /**
     * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
     */
    meetingPasswordRequirement?: UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
    /**
     * Require passcode for participants joining by phone. If set to `true`, a numeric passcode will be required for participants joining by phone if your meeting has a passcode. For meeting with an alphanumeric passcode, a numeric version will be generated.
     */
    phonePassword?: boolean;
    /**
     * If set to `true`, all Personal Meeting ID (PMI) meetings that users can join via client, or room systems will be passcode-protected.
     *
     * @remarks
     *
     */
    pmiPassword?: boolean;
    /**
     * Require a passcode for meetings which have already been scheduled.
     *
     * @remarks
     *
     */
    requirePasswordForScheduledMeeting?: boolean;
    /**
     * Require a passcode for webinars which have already been scheduled.
     *
     * @remarks
     *
     */
    requirePasswordForScheduledWebinar?: boolean;
    /**
     * When participants join a meeting, place them in a waiting room and require the host to admit them individually. Enabling the waiting room automatically disables the setting for allowing participants to join before host.
     *
     * @remarks
     *
     */
    waitingRoom?: boolean;
    /**
     * Specify the settings to be applied if waiting room is enabled.
     */
    waitingRoomSettings?: UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
    /**
     * If set to `true`, a passcode will be generated when scheduling a Webinar and participants require the passcode to join the Webinar.
     *
     * @remarks
     *
     */
    webinarPassword?: boolean;
}
export declare class UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettings extends SpeakeasyBase {
    meetingSecurity?: UserSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity;
}
/**
 * Authentication action
 */
export declare enum UserSettingsUpdateApplicationJson2GroupSettingsAuthenticationUpdateAuthenticationOptionActionEnum {
    Update = "update",
    Show = "show",
    Hide = "hide"
}
/**
 * Authentication type
 */
export declare enum UserSettingsUpdateApplicationJson2GroupSettingsAuthenticationUpdateAuthenticationOptionTypeEnum1 {
    Internally = "internally",
    EnforceLogin = "enforce_login",
    EnforceLoginWithDomains = "enforce_login_with_domains"
}
/**
 * Authentication Options
 */
export declare class UserSettingsUpdateApplicationJson2GroupSettingsAuthenticationUpdateAuthenticationOption1 extends SpeakeasyBase {
    /**
     * Authentication action
     */
    action?: UserSettingsUpdateApplicationJson2GroupSettingsAuthenticationUpdateAuthenticationOptionActionEnum;
    /**
     * Authentication default option
     */
    defaultOption?: boolean;
    /**
     * Authentication domians
     */
    domians?: string;
    /**
     * Authentication id
     */
    id?: string;
    /**
     * Authentication name
     */
    name?: string;
    /**
     * Authentication type
     */
    type?: UserSettingsUpdateApplicationJson2GroupSettingsAuthenticationUpdateAuthenticationOptionTypeEnum1;
}
export declare class UserSettingsUpdateApplicationJson2GroupSettingsAuthenticationUpdate1 extends SpeakeasyBase {
    /**
     * Authentication Options
     */
    authenticationOption?: UserSettingsUpdateApplicationJson2GroupSettingsAuthenticationUpdateAuthenticationOption1;
    /**
     * Only authenticated users can view cloud recordings
     */
    recordingAuthentication?: boolean;
}
/**
 *  Authentication type. Specify one of the following authentication types for the authentication profile:<br>
 *
 * @remarks
 *  * `enforce_login`: This option allows any users to join the meeting or webinar, as long as they are signed into their Zoom account.
 *  * `enforce_login_with_domains`: This option, allows you to specify a rule so that only those Zoom users whose email addresses contain a certain domain, can join the meeting or webinar. You can either add multiple domains using a comma in between and/or use a wildcard for listing domains.<br>
 *  * `enforce_login_with_same_account`: This option allows users to join the meeting or webinar with the same Zoom account.
 */
export declare enum UserSettingsUpdateApplicationJson2GroupSettingsAuthenticationUpdateAuthenticationOptionTypeEnum {
    EnforceLogin = "enforce_login",
    EnforceLoginWithSameAccount = "enforce_login_with_same_account",
    EnforceLoginWithDomains = "enforce_login_with_domains"
}
/**
 * Meeting Authentication Options
 */
export declare class UserSettingsUpdateApplicationJson2GroupSettingsAuthenticationUpdateAuthenticationOption extends SpeakeasyBase {
    /**
     * Authentication action
     */
    action?: UserSettingsUpdateApplicationJson2GroupSettingsAuthenticationUpdateAuthenticationOptionActionEnum;
    /**
     * Authentication default option
     */
    defaultOption?: boolean;
    /**
     * Authentication domains
     */
    domains?: string;
    /**
     * Authentication id
     */
    id?: string;
    /**
     * Authentication name
     */
    name?: string;
    /**
     *  Authentication type. Specify one of the following authentication types for the authentication profile:<br>
     *
     * @remarks
     *  * `enforce_login`: This option allows any users to join the meeting or webinar, as long as they are signed into their Zoom account.
     *  * `enforce_login_with_domains`: This option, allows you to specify a rule so that only those Zoom users whose email addresses contain a certain domain, can join the meeting or webinar. You can either add multiple domains using a comma in between and/or use a wildcard for listing domains.<br>
     *  * `enforce_login_with_same_account`: This option allows users to join the meeting or webinar with the same Zoom account.
     */
    type?: UserSettingsUpdateApplicationJson2GroupSettingsAuthenticationUpdateAuthenticationOptionTypeEnum;
}
export declare class UserSettingsUpdateApplicationJson2GroupSettingsAuthenticationUpdate extends SpeakeasyBase {
    /**
     * Meeting Authentication Options
     */
    authenticationOption?: UserSettingsUpdateApplicationJson2GroupSettingsAuthenticationUpdateAuthenticationOption;
    /**
     * Only authenticated users can join meetings
     */
    meetingAuthentication?: boolean;
}
export declare class UserSettingsUpdateApplicationJSONUserSettingsUserSettingsNotificationSettings extends SpeakeasyBase {
    /**
     * When an alternative host is set or removed from a meeting.
     */
    alternativeHostReminder?: boolean;
    /**
     * When a meeting is cancelled.
     */
    cancelMeetingReminder?: boolean;
    /**
     * When attendees join meeting before host.
     */
    jbhReminder?: boolean;
    /**
     * Notify the host there is a meeting is scheduled, rescheduled, or cancelled.
     */
    scheduleForReminder?: boolean;
}
export declare class UserSettingsUpdateApplicationJSONUserSettingsUserSettingsFeatureSettings extends SpeakeasyBase {
    /**
     * Enable [large meeting](https://support.zoom.us/hc/en-us/articles/201362823-What-is-a-Large-Meeting-) feature for the user.
     */
    largeMeeting?: boolean;
    /**
     * Set the meeting capacity for the user if the user has **Large meeting** feature enabled. The value for the field can be either 500 or 1000.
     */
    largeMeetingCapacity?: number;
    /**
     * Set a user's meeting capacity. User’s meeting capacity denotes the maximum number of participants that can join a meeting scheduled by the user.
     */
    meetingCapacity?: number;
    /**
     * Enable Webinar feature for the user.
     */
    webinar?: boolean;
    /**
     * Set the Webinar capacity for a user who has the Webinar feature enabled. The value of this field can be 100, 500, 1000, 3000, 5000 or 10000.
     */
    webinarCapacity?: number;
    /**
     * Zoom phone feature.
     */
    zoomPhone?: boolean;
}
/**
 * If you have set the value of `custom_data_center_regions` to `true`, specify the data center regions that you would like to opt in to (country codes from among: ["DE", "NL", "HK", "AU", "IN", "LA", "TY", "CN", "US", "CA"]).
 *
 * @remarks
 *
 */
export declare enum UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsDataCenterRegionsEnum {
    Hk = "HK",
    Au = "AU",
    In = "IN",
    Ty = "TY",
    Cn = "CN",
    Us = "US",
    Ca = "CA",
    De = "DE",
    Nl = "NL",
    La = "LA"
}
/**
 * Play sound when participants join or leave:<br>`host` - When host joins or leaves.<br>`all` - When any participant joins or leaves.<br>`none` - No join or leave sound.
 */
export declare enum UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum {
    Host = "host",
    All = "all",
    None = "none"
}
export declare class UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles extends SpeakeasyBase {
    /**
     * Unique identifier of the file.
     */
    id?: string;
    /**
     * Indicates whether or not this file is the default virtual background file.
     */
    isDefault?: boolean;
    /**
     * File name.
     */
    name?: string;
    /**
     * File size.
     */
    size?: string;
    /**
     * File type.
     */
    type?: string;
}
/**
 * Settings to manage virtual background.
 */
export declare class UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings extends SpeakeasyBase {
    /**
     * Allow user to upload custom backgrounds.
     */
    allowUploadCustom?: boolean;
    /**
     * Allow use of videos for virtual backgrounds.
     */
    allowVideos?: boolean;
    /**
     * Enable virtual background.
     */
    enable?: boolean;
    files?: UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles[];
}
/**
 * Indicates who can share their screen or content during meetings. The value can be one of the following: <br>
 *
 * @remarks
 * `host`: Only host can share the screen.<br>
 * `all`: Both hosts and attendees can share their screen during meetings. For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
 *
 */
export declare enum UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum {
    Host = "host",
    All = "all"
}
/**
 * Indicates who is allowed to start sharing screen when someone else in the meeting is sharing their screen. The value can be one of the following:<br>
 *
 * @remarks
 * `host`: Only a host can share the screen when someone else is sharing.<br>
 * `all`: Anyone in the meeting is allowed to start sharing their screen when someone else is sharing. For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
 *
 */
export declare enum UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum {
    Host = "host",
    All = "all"
}
export declare class UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettings extends SpeakeasyBase {
    /**
     * Allow live streaming.
     */
    allowLiveStreaming?: boolean;
    /**
     * Allow participants to use annotation tools.
     */
    annotation?: boolean;
    /**
     * Allow host to put attendee on hold.
     *
     * @remarks
     *
     * **This field has been deprecated and is no longer supported.**
     */
    attendeeOnHold?: boolean;
    /**
     * Auto save all in-meeting chats.
     */
    autoSavingChat?: boolean;
    /**
     * Allow host to split meeting participants into separate breakout rooms.
     */
    breakoutRoom?: boolean;
    /**
     * Enable chat during meeting for all participants.
     */
    chat?: boolean;
    /**
     * Enable closed captions.
     */
    closedCaption?: boolean;
    /**
     * Allow the host to add co-hosts.
     */
    coHost?: boolean;
    /**
     * If set to `true`, you can [select data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars) to use for hosting your real-time meeting and webinar traffic. These regions can be provided in the `data_center_regions` field. If set to `false`, the regions cannot be customized and the default regions will be used.
     */
    customDataCenterRegions?: boolean;
    /**
     * Allow custom live streaming.
     */
    customLiveStreamingService?: boolean;
    /**
     * Custom service instructions.
     */
    customServiceInstructions?: string;
    /**
     * If you have set the value of `custom_data_center_regions` to `true`, specify the data center regions that you would like to opt in to (country codes from among: ["DE", "NL", "HK", "AU", "IN", "LA", "TY", "CN", "US", "CA"]).
     *
     * @remarks
     *
     */
    dataCenterRegions?: UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsDataCenterRegionsEnum;
    /**
     * Zoom requires encryption for all data between the Zoom cloud, Zoom client, and Zoom Room. Require encryption for 3rd party endpoints (H323/SIP).
     */
    e2eEncryption?: boolean;
    /**
     * Play sound when participants join or leave:<br>`host` - When host joins or leaves.<br>`all` - When any participant joins or leaves.<br>`none` - No join or leave sound.
     */
    entryExitChime?: UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum;
    /**
     * Allow another user to take control of the camera.
     */
    farEndCameraControl?: boolean;
    /**
     * Enable option to send feedback to Zoom at the end of the meeting.
     */
    feedback?: boolean;
    /**
     * Indicates whether [in-meeting file transfer](https://support.zoom.us/hc/en-us/articles/209605493-In-meeting-file-transfer) setting has been enabled for the user or not.
     */
    fileTransfer?: boolean;
    /**
     * Enable group HD video.
     */
    groupHd?: boolean;
    /**
     * Enable non-verbal feedback through screens.
     */
    nonVerbalFeedback?: boolean;
    /**
     * Add polls to the meeting controls.
     */
    polling?: boolean;
    /**
     * Enable 1:1 private chat between participants during meetings.
     */
    privateChat?: boolean;
    /**
     * Record and play their own voice.
     */
    recordPlayVoice?: boolean;
    /**
     * Enable remote control during screensharing.
     */
    remoteControl?: boolean;
    /**
     * Allow host to provide 1:1 remote support to a participant.
     */
    remoteSupport?: boolean;
    /**
     * Indicates whether the [**Request permission to unmute participants**](https://support.zoom.us/hc/en-us/articles/203435537-Muting-and-unmuting-participants-in-a-meeting#h_01EGK4XFWS1SJGZ71MYGKF7260) option has been enabled for the user or not.
     */
    requestPermissionToUnmute?: boolean;
    /**
     * Allow host and participants to share their screen or content during meetings
     *
     * @remarks
     *
     */
    screenSharing?: boolean;
    /**
     * Share dual camera (deprecated).
     */
    shareDualCamera?: boolean;
    /**
     * Always show meeting controls during a meeting.
     */
    showMeetingControlToolbar?: boolean;
    /**
     * Enable virtual background.
     */
    virtualBackground?: boolean;
    /**
     * Settings to manage virtual background.
     */
    virtualBackgroundSettings?: UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings;
    /**
     * Enable Waiting room - if enabled, attendees can only join after host approves.
     */
    waitingRoom?: boolean;
    /**
     * Indicates who can share their screen or content during meetings. The value can be one of the following: <br>
     *
     * @remarks
     * `host`: Only host can share the screen.<br>
     * `all`: Both hosts and attendees can share their screen during meetings. For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
     *
     */
    whoCanShareScreen?: UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum;
    /**
     * Indicates who is allowed to start sharing screen when someone else in the meeting is sharing their screen. The value can be one of the following:<br>
     *
     * @remarks
     * `host`: Only a host can share the screen when someone else is sharing.<br>
     * `all`: Anyone in the meeting is allowed to start sharing their screen when someone else is sharing. For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
     *
     */
    whoCanShareScreenWhenSomeoneIsSharing?: UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum;
    /**
     * Allow livestreaming by host through Workplace by Facebook.
     */
    workplaceByFacebook?: boolean;
}
export declare class UserSettingsUpdateApplicationJSONUserSettingsProfileRecordingStorageLocation extends SpeakeasyBase {
    /**
     * Users can choose the country to store their recorded content. Content can include meeting, webinar, and phone recordings, as well as voicemail, transcripts, and custom greeting prompts. See [Managing the Communications Content storage location](https://support.zoom.us/hc/en-us/articles/360050781131) for details.
     *
     * @remarks
     *
     * Provide abbreviated country codes as the value for this field. See the [Countries abbreviation list](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries) for details.
     */
    allowedValues?: string[];
    /**
     * Abbreviated country code.
     */
    value?: string;
}
export declare class UserSettingsUpdateApplicationJSONUserSettingsProfile extends SpeakeasyBase {
    recordingStorageLocation?: UserSettingsUpdateApplicationJSONUserSettingsProfileRecordingStorageLocation;
}
/**
 * Automatic recording:<br>`local` - Record on local.<br>`cloud` - Record on cloud.<br>`none` - Disabled.
 */
export declare enum UserSettingsUpdateApplicationJSONUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
 * @remarks
 *
 */
export declare class UserSettingsUpdateApplicationJSONUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl extends SpeakeasyBase {
    /**
     * If set to `true`, the cloud recordings of this account can only be accessed by the IP addresses defined in the `ip_addresses_or_ranges` property.
     *
     * @remarks
     *
     *
     */
    enable?: boolean;
    /**
     * IP addresses or ranges that have access to the cloud recordings. Separate multiple IP ranges with comma. Use n.n.n.n, n.n.n.n/n or n.n.n.n - n.n.n.n syntax where n is a number.
     *
     * @remarks
     *
     * Example: `46.33.24.184, 48.99.100.2/25` or `200.181.108.17 - 220.181.108.157`
     *
     *
     */
    ipAddressesOrRanges?: string;
}
/**
 * This object represents the minimum passcode requirements set for recordings via Account Recording Settings.
 */
export declare class UserSettingsUpdateApplicationJSONUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement extends SpeakeasyBase {
    /**
     * Indicates whether or not passcode must contain at least one alphabetical letter (a, b, c..).
     */
    haveLetter?: boolean;
    /**
     * Indicates whether or not passcode must contain at least one number(1, 2, 3..).
     */
    haveNumber?: boolean;
    /**
     * Indicates whether or not passcode must contain at least one special character(!, @, #..).
     */
    haveSpecialCharacter?: boolean;
    /**
     * Minimum required length for the passcode.
     */
    length?: number;
    /**
     * Indicates whether or not passcode must contain only numeric characters.
     */
    onlyAllowNumeric?: boolean;
}
export declare class UserSettingsUpdateApplicationJSONUserSettingsUserSettingsRecordingSettings extends SpeakeasyBase {
    /**
     * Ask host to confirm the disclaimer.
     */
    askHostToConfirmDisclaimer?: boolean;
    /**
     * This field can be used if `recording_disclaimer` is set to true. This field indicates whether or not you would like to ask participants for consent when a recording starts. The value can be one of the following:<br>
     *
     * @remarks
     * * `true`: Ask participants for consent when a recording starts. <br>
     * * `false`: Do not ask participants for consent when a recording starts.
     */
    askParticipantsToConsentDisclaimer?: boolean;
    /**
     * Auto delete cloud recordings.
     */
    autoDeleteCmr?: boolean;
    /**
     * A specified number of days of auto delete cloud recordings.
     */
    autoDeleteCmrDays?: number;
    /**
     * Automatic recording:<br>`local` - Record on local.<br>`cloud` - Record on cloud.<br>`none` - Disabled.
     */
    autoRecording?: UserSettingsUpdateApplicationJSONUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum;
    /**
     * Cloud recording.
     */
    cloudRecording?: boolean;
    /**
     * Host can pause/stop the auto recording in the cloud.
     */
    hostPauseStopRecording?: boolean;
    /**
     * Setting to allow cloud recording access only from specific IP address ranges.
     *
     * @remarks
     *
     */
    ipAddressAccessControl?: UserSettingsUpdateApplicationJSONUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl;
    /**
     * Local recording.
     */
    localRecording?: boolean;
    /**
     * Record an audio only file.
     */
    recordAudioFile?: boolean;
    /**
     * Record the gallery view.
     */
    recordGalleryView?: boolean;
    /**
     * Record the active speaker view.
     */
    recordSpeakerView?: boolean;
    /**
     * Audio transcript.
     */
    recordingAudioTranscript?: boolean;
    /**
     * Show a disclaimer to participants before a recording starts
     *
     * @remarks
     *
     */
    recordingDisclaimer?: boolean;
    /**
     * This object represents the minimum passcode requirements set for recordings via Account Recording Settings.
     */
    recordingPasswordRequirement?: UserSettingsUpdateApplicationJSONUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement;
    /**
     * Save chat text from the meeting.
     */
    saveChatText?: boolean;
    /**
     * Show timestamp on video.
     */
    showTimestamp?: boolean;
}
/**
 * Determine how participants can join the audio portion of the meeting:<br>`both` - Telephony and VoIP.<br>`telephony` - Audio PSTN telephony only.<br>`voip` - VoIP only.<br>`thirdParty` - Third party audio conference.
 */
export declare enum UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsAudioTypeEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip",
    ThirdParty = "thirdParty"
}
export declare enum UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirementConsecutiveCharactersLengthEnum {
    Zero = "0",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8"
}
/**
 * Account wide meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
 */
export declare class UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement extends SpeakeasyBase {
    consecutiveCharactersLength?: UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirementConsecutiveCharactersLengthEnum;
    /**
     * If set to `true`, the passcode must contain at least 1 letter (such as a,b,c...).
     *
     * @remarks
     *
     */
    haveLetter?: boolean;
    /**
     * If set to `true`, the passcode must contain at least 1 number (such as 1,2,3...).
     */
    haveNumber?: boolean;
    /**
     * If set to `true`, the passcode must have at least 1 special character (!,@,#...).
     */
    haveSpecialCharacter?: boolean;
    /**
     * If set to `true`, the passcode must include both uppercase and lowercase characters.
     */
    haveUpperAndLowerCharacters?: boolean;
    /**
     * The minimum length that the meeting/webinar passcode needs to have.
     */
    length?: number;
    /**
     * If set to `true`, the passcode must only contain numbers and no other characters.
     */
    onlyAllowNumeric?: boolean;
    /**
     * If set to `true`, users will be informed if the provided passcode is weak.
     */
    weakEnhanceDetection?: boolean;
}
/**
 * Require a passcode for Personal Meeting ID (PMI). This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
 *
 * @remarks
 *
 */
export declare enum UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum {
    JbhOnly = "jbh_only",
    All = "all",
    None = "none"
}
export declare class UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettings1 extends SpeakeasyBase {
    /**
     * Determine how participants can join the audio portion of the meeting:<br>`both` - Telephony and VoIP.<br>`telephony` - Audio PSTN telephony only.<br>`voip` - VoIP only.<br>`thirdParty` - Third party audio conference.
     */
    audioType?: UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsAudioTypeEnum;
    /**
     * Passcode for already scheduled meetings
     *
     * @remarks
     *
     */
    defaultPasswordForScheduledMeetings?: string;
    /**
     * If the value is set to `true`, the meeting passcode will be encrypted and included in the join meeting link to allow participants to join with just one click without having to enter the passcode.
     *
     * @remarks
     *
     */
    embedPasswordInJoinLink?: boolean;
    /**
     * Require a passcode for personal meetings if attendees can join before host.
     */
    forcePmiJbhPassword?: boolean;
    /**
     * Start meetings with host video on.
     */
    hostVideo?: boolean;
    /**
     * Join the meeting before host arrives.
     */
    joinBeforeHost?: boolean;
    /**
     * Account wide meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
     */
    meetingPasswordRequirement?: UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement;
    /**
     * Start meetings with participants video on.
     */
    participantsVideo?: boolean;
    /**
     * Personal Meeting Setting.<br><br>
     *
     * @remarks
     * `true`: Indicates that the **"Enable Personal Meeting ID"** setting is turned on. Users can choose to use personal meeting ID for their meetings. <br><br>
     * `false`: Indicates that the **"Enable Personal Meeting ID"** setting is [turned off](https://support.zoom.us/hc/en-us/articles/201362843-Personal-meeting-ID-PMI-and-personal-link#h_aa0335c8-3b06-41bc-bc1f-a8b84ef17f2a). If this setting is disabled, meetings that were scheduled with PMI will be invalid. Scheduled meetings will need to be manually updated.
     * For Zoom Phone only:If a user has been assigned a desk phone, **"Elevate to Zoom Meeting"** on desk phone will be disabled.
     *
     *
     *
     */
    personalMeeting?: boolean;
    /**
     * PMI passcode
     *
     * @remarks
     *
     */
    pmiPassword?: string;
    /**
     * Generate and require passcode for participants joining by phone.
     */
    pstnPasswordProtected?: boolean;
    /**
     * Require a passcode for instant meetings. If you use PMI for your instant meetings, this option will be disabled. This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
     *
     * @remarks
     *
     */
    requirePasswordForInstantMeetings?: boolean;
    /**
     * Require a passcode for Personal Meeting ID (PMI). This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
     *
     * @remarks
     *
     */
    requirePasswordForPmiMeetings?: UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum;
    /**
     * Require a passcode for meetings which have already been scheduled
     *
     * @remarks
     *
     */
    requirePasswordForScheduledMeetings?: boolean;
    /**
     * Require a passcode when scheduling new meetings.This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
     *
     * @remarks
     *
     */
    requirePasswordForSchedulingNewMeetings?: boolean;
    /**
     * Use Personal Meeting ID (PMI) when starting an instant meeting
     *
     * @remarks
     *
     */
    usePmiForInstantMeetings?: boolean;
    /**
     * Use Personal Meeting ID (PMI) when scheduling a meeting
     *
     * @remarks
     *
     */
    usePmiForScheduledMeetings?: boolean;
}
/**
 * Indicates where most of the participants call into or call from duriing a meeting.
 */
export declare class UserSettingsUpdateApplicationJSONUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions extends SpeakeasyBase {
    /**
     * Telephony regions selected by the account to indicate where most of the participants call into or call from during a meeting.
     */
    selectionValues?: string[];
}
export declare class UserSettingsUpdateApplicationJSONUserSettingsTelephonyUpdateSettingsMeetingSettings extends SpeakeasyBase {
    /**
     * Third party audio conference info.
     */
    audioConferenceInfo?: string;
    /**
     * Show the international numbers link on the invitation email.
     */
    showInternationalNumbersLink?: boolean;
    /**
     * Indicates where most of the participants call into or call from duriing a meeting.
     */
    telephonyRegions?: UserSettingsUpdateApplicationJSONUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions;
    /**
     * Third party audio conference.
     */
    thirdPartyAudio?: boolean;
}
/**
 * Account Settings: TSP.
 */
export declare class UserSettingsUpdateApplicationJSONUserSettingsUserSettingsTSPSettings extends SpeakeasyBase {
    /**
     * Call Out
     */
    callOut?: boolean;
    /**
     * Call Out Countries/Regions
     */
    callOutCountries?: any[];
    /**
     * Show international numbers link on the invitation email
     */
    showInternationalNumbersLink?: boolean;
}
export declare class UserSettingsUpdateApplicationJSONUserSettings extends SpeakeasyBase {
    emailNotification?: UserSettingsUpdateApplicationJSONUserSettingsUserSettingsNotificationSettings;
    feature?: UserSettingsUpdateApplicationJSONUserSettingsUserSettingsFeatureSettings;
    inMeeting?: UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettings;
    profile?: UserSettingsUpdateApplicationJSONUserSettingsProfile;
    recording?: UserSettingsUpdateApplicationJSONUserSettingsUserSettingsRecordingSettings;
    scheduleMeeting?: UserSettingsUpdateApplicationJSONUserSettingsUserSettingsMeetingSettings1;
    telephony?: UserSettingsUpdateApplicationJSONUserSettingsTelephonyUpdateSettingsMeetingSettings;
    /**
     * Account Settings: TSP.
     */
    tsp?: UserSettingsUpdateApplicationJSONUserSettingsUserSettingsTSPSettings;
}
export declare enum UserSettingsUpdateOptionEnum {
    MeetingAuthentication = "meeting_authentication",
    RecordingAuthentication = "recording_authentication",
    MeetingSecuirty = "meeting_secuirty"
}
export declare class UserSettingsUpdateRequest extends SpeakeasyBase {
    /**
     * User Settings
     */
    requestBody: any;
    option?: UserSettingsUpdateOptionEnum;
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
export declare class UserSettingsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
