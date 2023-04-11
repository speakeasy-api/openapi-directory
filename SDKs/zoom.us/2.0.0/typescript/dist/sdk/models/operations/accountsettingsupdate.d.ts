import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Choose between enhanced encryption and [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) when starting or a meeting. When using end-to-end encryption, several features (e.g. cloud recording, phone/SIP/H.323 dial-in) will be **automatically disabled**. <br><br>The value of this field can be one of the following:<br>
 *
 * @remarks
 * `enhanced_encryption`: Enhanced encryption. Encryption is stored in the cloud if you enable this option. <br>
 *
 * `e2ee`: [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the following features: join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions.
 */
export declare enum AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
export declare enum AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirementConsecutiveCharactersLengthEnum {
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
export declare class AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
    consecutiveCharactersLength?: AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirementConsecutiveCharactersLengthEnum;
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
export declare enum AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettingsParticipantsToPlaceInWaitingRoomEnum {
    Zero = "0",
    One = "1",
    Two = "2"
}
/**
 * Specify the settings to be applied if waiting room is enabled.
 */
export declare class AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
    /**
     *
     * @remarks
     *
     * Specify who should be admitted to the waiting room. The value of this field can be one of the following:<br>
     * `0`: All attendees<br> `1`: Users who are not in your account<br> `2`: Users who are not in your account and are not part of your whitelisted domains that are specified in
     */
    participantsToPlaceInWaitingRoom?: AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettingsParticipantsToPlaceInWaitingRoomEnum;
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
export declare class AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
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
    encryptionType?: AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
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
    meetingPasswordRequirement?: AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
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
    waitingRoomSettings?: AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
    /**
     * If set to `true`, a passcode will be generated when scheduling a Webinar and participants require the passcode to join the Webinar.
     *
     * @remarks
     *
     */
    webinarPassword?: boolean;
}
export declare class AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettings extends SpeakeasyBase {
    meetingSecurity?: AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity;
}
/**
 * Specify the action that you would like to take via this API request:<br>
 *
 * @remarks
 * * `add` : Choose this value if you are adding an authentication option.
 * * `update`: Choose this value if you are updating an existing authentication option.
 * * `delete`: Choose this value if you are deleting an existing authentication option.
 */
export declare enum AccountSettingsUpdateApplicationJson2AccountSettingsAuthenticationUpdateAuthenticationOptionActionEnum {
    Update = "update",
    Delete = "delete",
    Add = "add"
}
/**
 * Specify one authentication type that is to be associated with this authentication configuration:<br>
 *
 * @remarks
 * * `internally`: This option allows you specify a rule that only signed in users within your account can view the recording.<br>
 *  * `enforce_login`: This option allows any users to view the recording, as long as they are signed into their Zoom account.<br>
 *  * `enforce_login_with_domains`: This option, allows you to specify a rule so that only those Zoom users whose email addresses contain a certain domain, can view the recording. You can either add multiple domains using a comma in between and/or use a wildcard for listing domains.
 *
 *
 */
export declare enum AccountSettingsUpdateApplicationJson2AccountSettingsAuthenticationUpdateAuthenticationOptionTypeEnum1 {
    Internally = "internally",
    EnforceLogin = "enforce_login",
    EnforceLoginWithDomains = "enforce_login_with_domains"
}
/**
 * Specify the authentication options for this account.
 */
export declare class AccountSettingsUpdateApplicationJson2AccountSettingsAuthenticationUpdateAuthenticationOption1 extends SpeakeasyBase {
    /**
     * Specify the action that you would like to take via this API request:<br>
     *
     * @remarks
     * * `add` : Choose this value if you are adding an authentication option.
     * * `update`: Choose this value if you are updating an existing authentication option.
     * * `delete`: Choose this value if you are deleting an existing authentication option.
     */
    action?: AccountSettingsUpdateApplicationJson2AccountSettingsAuthenticationUpdateAuthenticationOptionActionEnum;
    /**
     * Specify whether you would like to set this authentication option as the default option or not.
     */
    defaultOption?: boolean;
    /**
     * If you chose `enforce_login_with_domains` as the authentication type, specify the domain(s) that you want to allow to view the recordings.
     */
    domains?: string;
    /**
     *  Authentication ID. If you are creating an authentication profile, you do not need to provide this field. The id field will be generated in the response once this API request is completed successfully. You can also use the Get Account Settings API with query parameter set to `meeting_authentication` to list the authentication id.<br><br>
     *
     * @remarks
     * Use this field or the `name` field to identify the associated authentication option that you would like to update or delete.
     */
    id?: string;
    /**
     * Unique name for the authentication option.
     */
    name?: string;
    /**
     * Specify one authentication type that is to be associated with this authentication configuration:<br>
     *
     * @remarks
     * * `internally`: This option allows you specify a rule that only signed in users within your account can view the recording.<br>
     *  * `enforce_login`: This option allows any users to view the recording, as long as they are signed into their Zoom account.<br>
     *  * `enforce_login_with_domains`: This option, allows you to specify a rule so that only those Zoom users whose email addresses contain a certain domain, can view the recording. You can either add multiple domains using a comma in between and/or use a wildcard for listing domains.
     *
     *
     */
    type?: AccountSettingsUpdateApplicationJson2AccountSettingsAuthenticationUpdateAuthenticationOptionTypeEnum1;
}
/**
 * Set/Update [authentication profile for Cloud Recordings](https://support.zoom.us/hc/en-us/articles/360037756671-Authentication-Profiles-for-Cloud-Recordings).
 */
export declare class AccountSettingsUpdateApplicationJson2AccountSettingsAuthenticationUpdate1 extends SpeakeasyBase {
    /**
     * Specify the authentication options for this account.
     */
    authenticationOption?: AccountSettingsUpdateApplicationJson2AccountSettingsAuthenticationUpdateAuthenticationOption1;
    /**
     * If set to `true`, only authenticated users can view the cloud recordings.<br><br>
     *
     * @remarks
     * The authentication profile **must first be set at the account level via the account settings**, and later can be disabled after enabling on the preferred level - i.e. user level using user settings or at group level via group settings  (if you do not want the settings to be enabled on the entire account).
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
export declare enum AccountSettingsUpdateApplicationJson2AccountSettingsAuthenticationUpdateAuthenticationOptionTypeEnum {
    EnforceLogin = "enforce_login",
    EnforceLoginWithSameAccount = "enforce_login_with_same_account",
    EnforceLoginWithDomains = "enforce_login_with_domains"
}
/**
 * Meeting Authentication Options
 */
export declare class AccountSettingsUpdateApplicationJson2AccountSettingsAuthenticationUpdateAuthenticationOption extends SpeakeasyBase {
    /**
     * Specify the action that you would like to take via this API request:<br>
     *
     * @remarks
     * * `add` : Choose this value if you are adding an authentication option.
     * * `update`: Choose this value if you are updating an existing authentication option.
     * * `delete`: Choose this value if you are deleting an existing authentication option.
     */
    action?: AccountSettingsUpdateApplicationJson2AccountSettingsAuthenticationUpdateAuthenticationOptionActionEnum;
    /**
     * Specify whether you would like to set this authentication option as the default option or not.
     */
    defaultOption?: boolean;
    /**
     * If you chose `enforce_login_with_domains` as the authentication type, specify the domain(s) that you want to allow to join your meetings or webinars.
     */
    domains?: string;
    /**
     *  Authentication ID. If you are creating an authentication profile, you do not need to provide this field. The id field will be generated in the response once this API request is completed successfully. You can also use the Get Account Settings API with query parameter set to `meeting_authentication` to list the authentication id.<br><br>
     *
     * @remarks
     *  Use this field or the `name` field to identify the associated authentication option that you would like to update or delete.
     */
    id?: string;
    /**
     * Unique name for the authentication option.
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
    type?: AccountSettingsUpdateApplicationJson2AccountSettingsAuthenticationUpdateAuthenticationOptionTypeEnum;
}
/**
 * Set/ update [authentication profile](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars).<br><br> The authentication profile **must first be set at the account level via the account settings**, and later can be disabled after enabling on the preferred level - i.e. user level using user settings or at group level via group settings  (if you do not want the settings to be enabled on the entire account).
 */
export declare class AccountSettingsUpdateApplicationJson2AccountSettingsAuthenticationUpdate extends SpeakeasyBase {
    /**
     * Meeting Authentication Options
     */
    authenticationOption?: AccountSettingsUpdateApplicationJson2AccountSettingsAuthenticationUpdateAuthenticationOption;
    /**
     * If set to "true", only authenticated users can join meetings. The method for authentication can be defined in the "authentication_option".
     */
    meetingAuthentication?: boolean;
}
/**
 * Account Settings: Notification.
 */
export declare class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsEmailNotification extends SpeakeasyBase {
    /**
     * Notify when an alternative host is set or removed from a meeting.
     */
    alternativeHostReminder?: boolean;
    /**
     * Notify the host and participants when a meeting is cancelled.
     */
    cancelMeetingReminder?: boolean;
    /**
     * Notify host when cloud recording is available.
     */
    cloudRecordingAvaliableReminder?: boolean;
    /**
     * Notify the host when participants join the meeting before them.
     */
    jbhReminder?: boolean;
    /**
     * Notify user when host licenses are running low.
     */
    lowHostCountReminder?: boolean;
    /**
     * Notify the host there is a meeting is scheduled, rescheduled, or cancelled.
     */
    scheduleForReminder?: boolean;
}
/**
 * Account Settings: Feature.
 */
export declare class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsFeature extends SpeakeasyBase {
    /**
     * Set the maximum number of participants a host can have in a single meeting.
     */
    meetingCapacity?: number;
}
/**
 * If you have set the value of `custom_data_center_regions` to `true`, specify the data center regions that you would like to opt in to (country codes from among: ["EU", "HK", "AU", "IN", "LA", "TY", "CN", "US", "CA"]).
 *
 * @remarks
 *
 */
export declare enum AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingDataCenterRegionsEnum {
    Eu = "EU",
    Hk = "HK",
    Au = "AU",
    In = "IN",
    Ty = "TY",
    Cn = "CN",
    Us = "US",
    Ca = "CA"
}
/**
 * Play sound when participants join or leave.<br>`host` - Heard by host only.<br>`all` - Heard by host and all attendees.<br>`none` - Disable.
 */
export declare enum AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingEntryExitChimeEnum {
    Host = "host",
    All = "all",
    None = "none"
}
export declare class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles extends SpeakeasyBase {
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
export declare class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingVirtualBackgroundSettings extends SpeakeasyBase {
    /**
     * Allow users to upload custom backgrounds.
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
    files?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles[];
}
/**
 * Indicates who can share their screen or content during meetings. The value can be one of the following: <br>
 *
 * @remarks
 * `host`: Only host can share the screen.<br>
 * `all`: Both hosts and attendees can share their screen during meetings. For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
 *
 */
export declare enum AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingWhoCanShareScreenEnum {
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
export declare enum AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum {
    Host = "host",
    All = "all"
}
/**
 * Account Settings: In Meeting.
 */
export declare class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeeting extends SpeakeasyBase {
    /**
     * Identify guest participants in a meeting or webinar.
     */
    alertGuestJoin?: boolean;
    /**
     * Allow live streaming.
     */
    allowLiveStreaming?: boolean;
    /**
     * If the value of this field is set to `true`, meeting participants and webinar panelists can be allowed to rename themselves during a meeting or a webinar.
     *
     * @remarks
     *
     */
    allowParticipantsToRename?: boolean;
    /**
     * Show the Zoom desktop application when sharing screens.
     */
    allowShowZoomWindows?: boolean;
    /**
     * Allow participants to use annotation tools to add information to shared screens.
     */
    annotation?: boolean;
    /**
     * Allow an anonymous Q&A in a webinar.
     */
    anonymousQuestionAnswer?: boolean;
    /**
     * Allow host to put attendee on hold.
     *
     * @remarks
     *
     * **This field has been deprecated and is no longer supported.**
     */
    attendeeOnHold?: boolean;
    /**
     * Enable users to see and add contacts to the "auto-answer group" in the chat contact list. Any call from members of this group will automatically be answered.
     */
    autoAnswer?: boolean;
    /**
     * Automatically save all in-meeting chats so that the host does not need to manually save the chat transcript after the meeting starts.
     */
    autoSavingChat?: boolean;
    /**
     * Allow host to split meeting participants into separate, smaller rooms.
     */
    breakoutRoom?: boolean;
    /**
     * Allow meeting participants to send a message that is visible to all participants.
     */
    chat?: boolean;
    /**
     * Allow a host to type closed captions. Enable a host to assign a participant or third party device to add closed captions.
     */
    closedCaption?: boolean;
    /**
     * Allow the host to add co-hosts.
     */
    coHost?: boolean;
    /**
     * If set to `true`, account owners and admins on paid accounts can [select data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars) to use for hosting their real-time meeting and webinar traffic. These regions can be provided in the `data_center_regions` field. If set to `false`, the regions cannot be customized and the default regions will be used.
     */
    customDataCenterRegions?: boolean;
    /**
     * Custom live streaming.
     */
    customLiveStreamingService?: boolean;
    /**
     * Custom service instructions.
     */
    customServiceInstructions?: string;
    /**
     * If you have set the value of `custom_data_center_regions` to `true`, specify the data center regions that you would like to opt in to (country codes from among: ["EU", "HK", "AU", "IN", "LA", "TY", "CN", "US", "CA"]).
     *
     * @remarks
     *
     */
    dataCenterRegions?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingDataCenterRegionsEnum;
    /**
     * DSCP audio.
     */
    dscpAudio?: number;
    /**
     * DSCP marking.
     */
    dscpMarking?: boolean;
    /**
     * DSCP video.
     */
    dscpVideo?: number;
    /**
     * Zoom requires encryption for all data between the Zoom cloud, Zoom client, and Zoom Room. Require encryption for 3rd party endpoints (H323/SIP).
     */
    e2eEncryption?: boolean;
    /**
     * Play sound when participants join or leave.<br>`host` - Heard by host only.<br>`all` - Heard by host and all attendees.<br>`none` - Disable.
     */
    entryExitChime?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingEntryExitChimeEnum;
    /**
     * Allow another user to take control of your camera during a meeting.
     */
    farEndCameraControl?: boolean;
    /**
     * Add a "Feedback" tab to the Windows Settings or Mac Preferences dialog. Enable users to provide feedback to Zoom at the end of the meeting.
     */
    feedback?: boolean;
    /**
     * Indicates whether [in-meeting file transfer](https://support.zoom.us/hc/en-us/articles/209605493-In-meeting-file-transfer) setting has been enabled on the account or not.
     */
    fileTransfer?: boolean;
    /**
     * Activate higher quality video for host and participants.
     *
     * @remarks
     * Please note: This will use more bandwidth.
     */
    groupHd?: boolean;
    /**
     * Enable or disable meeting reactions. <br>
     *
     * @remarks
     * `true`: Allow meeting participants to communicate without interrupting by reacting with an emoji that shows on their video.<br>
     * `false`: Do not enable meeting reactions.
     */
    meetingReactions?: boolean;
    /**
     * Allow users to select original sound in their client settings.
     */
    originalAudio?: boolean;
    /**
     * Peer to peer connection while only two people are in a meeting.
     */
    p2pConnetion?: boolean;
    /**
     * Peer to peer listening ports range.
     */
    p2pPorts?: boolean;
    /**
     * Add "Polls" to the meeting controls.
     */
    polling?: boolean;
    /**
     * The listening ports range, separated by a comma (ex 55,56). The ports range must be between 1 to 65535.
     */
    portsRange?: string;
    /**
     * Display a thumbs up or down survey at the end of each meeting.
     */
    postMeetingFeedback?: boolean;
    /**
     * Allow a meeting participant to send a private message to another participant.
     */
    privateChat?: boolean;
    /**
     * Record and play their own voice.
     */
    recordPlayOwnVoice?: boolean;
    /**
     * Allow users to request remote control.
     */
    remoteControl?: boolean;
    /**
     * Indicates whether the [**Request permission to unmute participants**](https://support.zoom.us/hc/en-us/articles/203435537-Muting-and-unmuting-participants-in-a-meeting#h_01EGK4XFWS1SJGZ71MYGKF7260) option has been enabled for the account or not.
     */
    requestPermissionToUnmute?: boolean;
    /**
     * Allow screen sharing.
     */
    screenSharing?: boolean;
    /**
     * Only show the default email when sending email invites.
     */
    sendingDefaultEmailInvites?: boolean;
    /**
     * If the value of this field is set to `true`, you will allow participants to join a meeting directly from their browser and bypass the Zoom application download process. This is a workaround for participants who are unable to download, install, or run applications. Note that the meeting experience from the browser is limited.
     */
    showAJoinFromYourBrowserLink?: boolean;
    /**
     * Always show the meeting control toolbar.
     */
    showMeetingControlToolbar?: boolean;
    /**
     * Allow users to select stereo audio in their client settings.
     */
    stereoAudio?: boolean;
    /**
     * Use HTML formatted email for the Outlook plugin.
     */
    useHtmlFormatEmail?: boolean;
    /**
     * Allow users to replace their background with any selected image. Choose or upload an image in the Zoom desktop application settings.
     */
    virtualBackground?: boolean;
    /**
     * Settings to manage virtual background.
     */
    virtualBackgroundSettings?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingVirtualBackgroundSettings;
    /**
     * Add a watermark when viewing a shared screen.
     */
    watermark?: boolean;
    /**
     * Allow a Q&A in a webinar.
     */
    webinarQuestionAnswer?: boolean;
    /**
     * Allow participants to share a whiteboard that includes annotation tools.
     */
    whiteboard?: boolean;
    /**
     * Indicates who can share their screen or content during meetings. The value can be one of the following: <br>
     *
     * @remarks
     * `host`: Only host can share the screen.<br>
     * `all`: Both hosts and attendees can share their screen during meetings. For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
     *
     */
    whoCanShareScreen?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingWhoCanShareScreenEnum;
    /**
     * Indicates who is allowed to start sharing screen when someone else in the meeting is sharing their screen. The value can be one of the following:<br>
     *
     * @remarks
     * `host`: Only a host can share the screen when someone else is sharing.<br>
     * `all`: Anyone in the meeting is allowed to start sharing their screen when someone else is sharing. For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
     *
     */
    whoCanShareScreenWhenSomeoneIsSharing?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum;
    /**
     * Workplace by facebook.
     */
    workplaceByFacebook?: boolean;
}
/**
 * Account Settings: Integration.
 */
export declare class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsIntegration extends SpeakeasyBase {
    /**
     * Enable users who join a meeting from their mobile device to share content from their Box account.
     */
    box?: boolean;
    /**
     * Enable users who join a meeting from their mobile device to share content from their Dropbox account.
     */
    dropbox?: boolean;
    /**
     * Enable meetings to be scheduled using Google Calendar.
     */
    googleCalendar?: boolean;
    /**
     * Enable users who join a meeting from their mobile device to share content from their Google Drive.
     */
    googleDrive?: boolean;
    /**
     * Enable users to control a connected Kubi device from within a Zoom meeting.
     */
    kubi?: boolean;
    /**
     * Enable users who join a meeting from their mobile device to share content from their Microsoft OneDrive account.
     */
    microsoftOneDrive?: boolean;
}
export declare class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsProfileRecordingStorageLocation extends SpeakeasyBase {
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
export declare class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsProfile extends SpeakeasyBase {
    recordingStorageLocation?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsProfileRecordingStorageLocation;
}
export declare class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingArchiveSettings extends SpeakeasyBase {
    /**
     * Include in-meeting and/or in-webinar audio in the archive.
     */
    audioFile?: boolean;
    /**
     * Include closed caption or transcript in the archive.
     */
    ccTranscriptFile?: boolean;
    /**
     * Include in-meeting chat in the archive.
     */
    chatFile?: boolean;
    /**
     * Include user email in in-meeting chat file.
     */
    chatWithSenderEmail?: boolean;
    /**
     * Include in-meeting and/or in-webinar video in the archive.
     */
    videoFile?: boolean;
}
/**
 * Archive types:
 *
 * @remarks
 *
 * * `1`: Only meetings are archived.<br>
 * * `2`: Only webinars are archived.<br>
 * * `3`: Both meetings and webinars are archived.
 */
export declare enum AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingArchiveTypeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
/**
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted with archiving solution access by the Zoom support team.
 */
export declare class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingArchive extends SpeakeasyBase {
    /**
     * Enable the archiving feature.
     */
    enable?: boolean;
    settings?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingArchiveSettings;
    /**
     * Archive types:
     *
     * @remarks
     *
     * * `1`: Only meetings are archived.<br>
     * * `2`: Only webinars are archived.<br>
     * * `3`: Both meetings and webinars are archived.
     */
    type?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingArchiveTypeEnum;
}
/**
 * Automatic recording:<br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
 */
export declare enum AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingAutoRecordingEnum {
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
export declare class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingIpAddressAccessControl extends SpeakeasyBase {
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
 * This object represents the minimum password requirements set for recordings via Account Recording Settings.
 */
export declare class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingRecordingPasswordRequirement extends SpeakeasyBase {
    /**
     * Indicates whether or not password must contain at least one alphabetical letter (a, b, c..).
     */
    haveLetter?: boolean;
    /**
     * Indicates whether or not password must contain at least one number(1, 2, 3..).
     */
    haveNumber?: boolean;
    /**
     * Indicates whether or not password must contain at least one special character(!, @, #..).
     */
    haveSpecialCharacter?: boolean;
    /**
     * Minimum required length for the password.
     */
    length?: number;
    /**
     * Indicates whether or not password must contain only numeric characters.
     */
    onlyAllowNumeric?: boolean;
}
/**
 * Account Settings: Recording.
 */
export declare class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecording extends SpeakeasyBase {
    /**
     * Cloud recordings are only accessible to account members. People outside of your organization cannot open links that provide access to cloud recordings.
     */
    accountUserAccessRecording?: boolean;
    /**
     * Allow recovery of deleted cloud recordings from trash.
     *
     * @remarks
     * If the value of this field is set to `true`, deleted cloud recordings will be kept in trash for 30 days after deletion and can be recovered within that period.
     */
    allowRecoveryDeletedCloudRecordings?: boolean;
    /**
     * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted with archiving solution access by the Zoom support team.
     */
    archive?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingArchive;
    /**
     * Allow Zoom to permanantly delete recordings automatically after a specified number of days.
     */
    autoDeleteCmr?: boolean;
    /**
     * When `auto_delete_cmr` function is 'true' this value will set the number of days before the auto deletion of cloud recordings.
     */
    autoDeleteCmrDays?: number;
    /**
     * Automatic recording:<br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
     */
    autoRecording?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingAutoRecordingEnum;
    /**
     * Allow hosts to record and save the meeting in the cloud.
     */
    cloudRecording?: boolean;
    /**
     * Cloud recording downloads.
     */
    cloudRecordingDownload?: boolean;
    /**
     * Only the host can download cloud recordings.
     */
    cloudRecordingDownloadHost?: boolean;
    /**
     * If the value of this field is set to `true`, hosts will be able to delete the recordings. If this option is set to `false`, the recordings cannot be deleted by the host and only admin can delete them.
     *
     * @remarks
     *
     */
    hostDeleteCloudRecording?: boolean;
    /**
     * Setting to allow cloud recording access only from specific IP address ranges.
     *
     * @remarks
     *
     */
    ipAddressAccessControl?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingIpAddressAccessControl;
    /**
     * Allow hosts and participants to record the meeting using a local file.
     */
    localRecording?: boolean;
    /**
     * If set to `true`, meeting hosts cannot view their meeting cloud recordings. Only the admins who have recording management privilege can access them.
     *
     * @remarks
     *
     */
    preventHostAccessRecording?: boolean;
    /**
     * Record an audio only file.
     */
    recordAudioFile?: boolean;
    /**
     * Record the gallery view with a shared screen.
     */
    recordGalleryView?: boolean;
    /**
     * Record the active speaker with a shared screen.
     */
    recordSpeakerView?: boolean;
    /**
     * Automatically transcribe the audio of the meeting or webinar to the cloud.
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
     * This object represents the minimum password requirements set for recordings via Account Recording Settings.
     */
    recordingPasswordRequirement?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingRecordingPasswordRequirement;
    /**
     * Require a passcode to access existing cloud recordings.
     */
    requiredPasswordForExistingCloudRecordings?: boolean;
    /**
     * Save the chat text from the meeting.
     */
    saveChatText?: boolean;
    /**
     * Add a timestamp to the recording.
     */
    showTimestamp?: boolean;
}
/**
 * Determine how participants can join the audio portion of the meeting.<br>`both` - Telephony and VoIP.<br>`telephony` - Audio PSTN telephony only.<br>`voip` - VoIP only.<br>`thirdParty` - 3rd party audio conference.
 */
export declare enum AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingAudioTypeEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip",
    ThirdParty = "thirdParty"
}
export declare enum AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirementConsecutiveCharactersLengthEnum {
    Zero = "0",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8"
}
/**
 * Account wide meeting/webinar [password requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
 */
export declare class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement extends SpeakeasyBase {
    consecutiveCharactersLength?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirementConsecutiveCharactersLengthEnum;
    /**
     * If set to `true`, the password must contain at least 1 letter (such as a,b,c...).
     *
     * @remarks
     *
     */
    haveLetter?: boolean;
    /**
     * If set to `true`, the password must contain at least 1 number (such as 1,2,3...).
     */
    haveNumber?: boolean;
    /**
     * If set to `true`, the password must have at least 1 special character (!,@,#...).
     */
    haveSpecialCharacter?: boolean;
    /**
     * If set to `true`, the password must include both uppercase and lowercase characters.
     */
    haveUpperAndLowerCharacters?: boolean;
    /**
     * The minimum length that the meeting/webinar password needs to have.
     */
    length?: number;
    /**
     * If set to `true`, the password must only contain numbers and no other characters.
     */
    onlyAllowNumeric?: boolean;
    /**
     * If set to `true`, users will be informed if the provided password is weak.
     */
    weakEnhanceDetection?: boolean;
}
/**
 * Require a password for a meeting held using Personal Meeting ID (PMI) This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
 *
 * @remarks
 *
 */
export declare enum AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum {
    JbhOnly = "jbh_only",
    All = "all",
    None = "none"
}
/**
 * Account Settings: Schedule Meeting.
 */
export declare class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeeting extends SpeakeasyBase {
    /**
     * Determine how participants can join the audio portion of the meeting.<br>`both` - Telephony and VoIP.<br>`telephony` - Audio PSTN telephony only.<br>`voip` - VoIP only.<br>`thirdParty` - 3rd party audio conference.
     */
    audioType?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingAudioTypeEnum;
    /**
     * Only Zoom users who are signed in can join meetings.
     */
    enforceLogin?: boolean;
    /**
     * Only signed in users with a specified domain can join the meeting.
     */
    enforceLoginDomains?: string;
    /**
     * Only signed in users with a specific domain can join meetings.
     */
    enforceLoginWithDomains?: boolean;
    /**
     * Require a password for Personal Meetings if attendees can join before host.
     */
    forcePmiJbhPassword?: boolean;
    /**
     * Start meetings with the host video on.
     */
    hostVideo?: boolean;
    /**
     * Allow participants to join the meeting before the host arrives.
     */
    joinBeforeHost?: boolean;
    /**
     * Account wide meeting/webinar [password requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
     */
    meetingPasswordRequirement?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement;
    /**
     * Always display "Zoom Meeting" as the meeting topic.
     */
    notStoreMeetingTopic?: boolean;
    /**
     * Start meetings with the participant video on. Participants can change this setting during the meeting.
     */
    participantVideo?: boolean;
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
     * Require a password for instant meetings. If you use PMI for your instant meetings, this option will be disabled. This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
     *
     * @remarks
     *
     */
    requirePasswordForInstantMeetings?: boolean;
    /**
     * Require a password for a meeting held using Personal Meeting ID (PMI) This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
     *
     * @remarks
     *
     */
    requirePasswordForPmiMeetings?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum;
    /**
     * Require a password for meetings which have already been scheduled
     *
     * @remarks
     *
     */
    requirePasswordForScheduledMeetings?: boolean;
    /**
     * Require a password when scheduling new meetings. This setting applies for regular meetings that do not use PMI. If enabled, a password will be generated while a host schedules a new meeting and participants will be required to enter the password before they can join the meeting. This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
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
 * This object refers to the [enhanced password rules](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) that allows Zoom account admins and owners to apply extra requiremets to the users' Zoom login password.
 */
export declare class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecurityPasswordRequirement extends SpeakeasyBase {
    /**
     *
     * @remarks
     * Specify the max length of consecutive characters(abcde...) that can be used in a password.
     * If you set the value of this field to `0`, no restriction will be applied on consecutive characters.
     *
     * If you would like to set this restriction, you can specify a number between 4 and 8 that define the maximum allowed length for consecutive characters in a password.
     *
     * The max allowed length will be `n-1` where `n` refers to the value you provide for this field.  For instance, if you provide `4` as the value, there can only be a maximum of `3` consecutive characters in a password(example: abc1x@8fdh).
     */
    consecutiveCharactersLength?: number;
    /**
     * If the value of this field is set to `true`, the password must have at least one special character(!, @, #...).
     */
    haveSpecialCharacter?: boolean;
    /**
     * Specify a minimum length for the password. The password length can be from a minimum of 9 characters, up to 14 characters. If you provide `0` as the value of this field, this field will be disabled and not be used and the basic password length requirement (minimum of 8 characters) will be applied for the requirement.
     */
    minimumPasswordLength?: number;
    /**
     * If the value of this field is set to `true`, user passwords will have to pass detection through a weak password dictionary in case hackers use simple passwords to sign in to your users’ accounts.
     */
    weakEnhanceDetection?: boolean;
}
/**
 * Settings for 2FA( [two factor authentication](https://support.zoom.us/hc/en-us/articles/360038247071) ). The value can be one of the following:
 *
 * @remarks
 * `all`: Two factor authentication will be enabled for all users in the account.<br>
 * `none`: Two factor authentication is disabled.<br>
 * `group`: Two factor authentication will be enabled for users belonging to specific groups. If 2FA is enabled for certain groups, the group IDs of the group(s) will be provided in the `sign_in_with_two_factor_auth_groups` field.<br>
 * `role`: Two factor authentication will be enabled only for users assigned with specific roles in the account. If 2FA is enabled for specific roles, the role IDs will be provided in the
 * `sign_in_with_two_factor_auth_roles` field.
 *
 */
export declare enum AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum {
    All = "all",
    Group = "group",
    Role = "role",
    None = "none"
}
/**
 * [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
 */
export declare class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecurity extends SpeakeasyBase {
    /**
     * Only account administrators can change a user's username and picture.
     */
    adminChangeNamePic?: boolean;
    /**
     * Hide billing information.
     */
    hideBillingInfo?: boolean;
    /**
     * Allow users to import photos from a photo library on a  device.
     */
    importPhotosFromDevices?: boolean;
    /**
     * This object refers to the [enhanced password rules](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) that allows Zoom account admins and owners to apply extra requiremets to the users' Zoom login password.
     */
    passwordRequirement?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecurityPasswordRequirement;
    /**
     * Settings for User Sign In interval requirements after a period of inactivity. If enabled, this setting forces automatic logout of users in Zoom Client app after a set amount of time. <br>
     *
     * @remarks
     *
     * If this setting is disabled, the value of this field will be `0`. If the setting is enabled, the value of this field will indicate the **period of inactivity** in minutes after which, an inactive user will be automatically logged out of the Zoom Client. The value for the period of inactivity can be one of the following:<br>
     *
     * `5`: 5 minutes<br>
     * `10`: 10 minutes<br>
     * `15`: 15 minutes<br>
     * `30`: 30 minutes<br>
     * `45`: 45 minutes<br>
     * `60`: 60 minutes<br>
     * `90`: 90 minutes<br>
     * `120`: 120 minutes
     *
     */
    signAgainPeriodForInactivityOnClient?: number;
    /**
     * Settings for User Sign In interval requirements after a period of inactivity. If enabled, this setting forces automatic logout of users in Zoom Web Portal after a set amount of time. <br>
     *
     * @remarks
     *
     * If this setting is disabled, the value of this field will be `0`. If the setting is enabled, the value of this field will indicate the **period of inactivity** in minutes after which, an inactive user will be automatically logged out of the Zoom Web Portal. The value for the period of inactivity can be one of the following:<br>
     *
     * `5`: 5 minutes<br>
     * `10`: 10 minutes<br>
     * `15`: 15 minutes<br>
     * `30`: 30 minutes<br>
     * `60`: 60 minutes<br>
     * `120`: 120 minutes
     *
     *
     *
     *
     */
    signAgainPeriodForInactivityOnWeb?: number;
    /**
     * Settings for 2FA( [two factor authentication](https://support.zoom.us/hc/en-us/articles/360038247071) ). The value can be one of the following:
     *
     * @remarks
     * `all`: Two factor authentication will be enabled for all users in the account.<br>
     * `none`: Two factor authentication is disabled.<br>
     * `group`: Two factor authentication will be enabled for users belonging to specific groups. If 2FA is enabled for certain groups, the group IDs of the group(s) will be provided in the `sign_in_with_two_factor_auth_groups` field.<br>
     * `role`: Two factor authentication will be enabled only for users assigned with specific roles in the account. If 2FA is enabled for specific roles, the role IDs will be provided in the
     * `sign_in_with_two_factor_auth_roles` field.
     *
     */
    signInWithTwoFactorAuth?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum;
    /**
     * This field contains group IDs of groups that have 2FA enabled. This field is only returned if the value of `sign_in_with_two_factor_auth` is `group`
     */
    signInWithTwoFactorAuthGroups?: string[];
    /**
     * This field contains role IDs of roles that have 2FA enabled. This field is only returned if the value of `sign_in_with_two_factor_auth` is `role`.
     */
    signInWithTwoFactorAuthRoles?: string[];
}
/**
 * Indicates where most of the participants call into or call from duriing a meeting.
 */
export declare class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsTelephonyTelephonyRegions extends SpeakeasyBase {
    /**
     * Telephony regions selected by the account to indicate where most of the participants call into or call from during a meeting.
     */
    selectionValues?: string[];
}
/**
 * Account Settings Update: Telephony.
 */
export declare class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsTelephony extends SpeakeasyBase {
    /**
     * Third party audio conference info.
     */
    audioConferenceInfo?: string;
    /**
     * Indicates where most of the participants call into or call from duriing a meeting.
     */
    telephonyRegions?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsTelephonyTelephonyRegions;
    /**
     * Users can join the meeting using the existing third party audio configuration.
     */
    thirdPartyAudio?: boolean;
}
/**
 * Account Settings: TSP.
 */
export declare class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsTsp extends SpeakeasyBase {
    /**
     * Call Out
     */
    callOut?: boolean;
    /**
     * Call Out Countries/Regions
     */
    callOutCountries?: any[];
    /**
     * Display toll-free numbers
     */
    displayTollFreeNumbers?: boolean;
    /**
     * Show international numbers link on the invitation email
     */
    showInternationalNumbersLink?: boolean;
}
/**
 * Account Settings: Zoom Rooms.
 */
export declare class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsZoomRooms extends SpeakeasyBase {
    /**
     * Automatic start and stop for scheduled meetings.
     */
    autoStartStopScheduledMeetings?: boolean;
    /**
     * Cloud recording for instant meetings.
     */
    cmrForInstantMeeting?: boolean;
    /**
     * Shift all meetings to private.
     */
    forcePrivateMeeting?: boolean;
    /**
     * Hide host and meeting ID from private meetings.
     */
    hideHostInformation?: boolean;
    /**
     * Display meeting list with calendar integration.
     */
    listMeetingsWithCalendar?: boolean;
    /**
     * Start AirPlay service manually.
     */
    startAirplayManually?: boolean;
    /**
     * Automatic direct sharing using an ultrasonic proximity signal.
     */
    ultrasonic?: boolean;
    /**
     * Upcoming meeting alert.
     */
    upcomingMeetingAlert?: boolean;
    /**
     * Weekly system restart.
     */
    weeklySystemRestart?: boolean;
    /**
     * Zoom Room post meeting feedback.
     */
    zrPostMeetingFeedback?: boolean;
}
export declare class AccountSettingsUpdateApplicationJSONUpdateAccountSettings extends SpeakeasyBase {
    /**
     * Account Settings: Notification.
     */
    emailNotification?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsEmailNotification;
    /**
     * Account Settings: Feature.
     */
    feature?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsFeature;
    /**
     * Account Settings: In Meeting.
     */
    inMeeting?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeeting;
    /**
     * Account Settings: Integration.
     */
    integration?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsIntegration;
    profile?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsProfile;
    /**
     * Account Settings: Recording.
     */
    recording?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecording;
    /**
     * Account Settings: Schedule Meeting.
     */
    scheduleMeeting?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeeting;
    /**
     * [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
     */
    security?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecurity;
    /**
     * Account Settings Update: Telephony.
     */
    telephony?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsTelephony;
    /**
     * Account Settings: TSP.
     */
    tsp?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsTsp;
    /**
     * Account Settings: Zoom Rooms.
     */
    zoomRooms?: AccountSettingsUpdateApplicationJSONUpdateAccountSettingsZoomRooms;
}
export declare enum AccountSettingsUpdateOptionEnum {
    MeetingAuthentication = "meeting_authentication",
    RecordingAuthentication = "recording_authentication",
    Security = "security",
    MeetingSecurity = "meeting_security"
}
export declare class AccountSettingsUpdateRequest extends SpeakeasyBase {
    requestBody: any;
    /**
     * The account ID.
     */
    accountId: string;
    option?: AccountSettingsUpdateOptionEnum;
}
export declare class AccountSettingsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
