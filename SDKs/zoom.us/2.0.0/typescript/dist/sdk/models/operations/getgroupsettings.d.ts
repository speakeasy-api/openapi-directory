import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetGroupSettingsSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * `meeting_authentication`: Use this query parameter to view [meeting authentication configuration](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) applied on the group.<br>`recording_authentication`: Use this query parameter to view [recording authentication configuration](https://support.zoom.us/hc/en-us/articles/360037756671-Authentication-Profiles-for-Cloud-Recordings) applied on the group.<br>
 *
 * @remarks
 * `meeting_security`: Use this query parameter to view meeting security settings applied on the group.<br>
 */
export declare enum GetGroupSettingsOptionEnum {
    MeetingAuthentication = "meeting_authentication",
    RecordingAuthentication = "recording_authentication"
}
export declare class GetGroupSettingsRequest extends SpeakeasyBase {
    /**
     * Provide the name of the field by which you would like to filter the response. For example, if you provide "host_video" as the value of this field, you will get a response similar to the following:<br>
     *
     * @remarks
     * {
     *     "schedule_meeting": {
     *         "host_video": false
     *     }
     * }
     * <br>You can provide multiple values by separating them with commas(example: "host_video,participant_video”).
     */
    customQueryFields?: string;
    groupId: string;
    /**
     * `meeting_authentication`: Use this query parameter to view [meeting authentication configuration](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) applied on the group.<br>`recording_authentication`: Use this query parameter to view [recording authentication configuration](https://support.zoom.us/hc/en-us/articles/360037756671-Authentication-Profiles-for-Cloud-Recordings) applied on the group.<br>
     *
     * @remarks
     * `meeting_security`: Use this query parameter to view meeting security settings applied on the group.<br>
     */
    option?: GetGroupSettingsOptionEnum;
}
/**
 * Choose between enhanced encryption and [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) when starting or a meeting. When using end-to-end encryption, several features (e.g. cloud recording, phone/SIP/H.323 dial-in) will be **automatically disabled**. <br><br>The value of this field can be one of the following:<br>
 *
 * @remarks
 * `enhanced_encryption`: Enhanced encryption. Encryption is stored in the cloud if you enable this option. <br>
 *
 * `e2ee`: [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the following features: join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions.
 */
export declare enum GetGroupSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
export declare enum GetGroupSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirementConsecutiveCharactersLengthEnum {
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
export declare class GetGroupSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
    consecutiveCharactersLength?: GetGroupSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirementConsecutiveCharactersLengthEnum;
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
export declare enum GetGroupSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettingsParticipantsToPlaceInWaitingRoomEnum {
    Zero = "0",
    One = "1",
    Two = "2"
}
/**
 * Specify the settings to be applied if waiting room is enabled.
 */
export declare class GetGroupSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
    /**
     *
     * @remarks
     *
     * Specify who should be admitted to the waiting room. The value of this field can be one of the following:<br>
     * `0`: All attendees<br> `1`: Users who are not in your account<br> `2`: Users who are not in your account and are not part of your whitelisted domains that are specified in
     */
    participantsToPlaceInWaitingRoom?: GetGroupSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettingsParticipantsToPlaceInWaitingRoomEnum;
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
export declare class GetGroupSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
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
    encryptionType?: GetGroupSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
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
    meetingPasswordRequirement?: GetGroupSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
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
    waitingRoomSettings?: GetGroupSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
    /**
     * If set to `true`, a passcode will be generated when scheduling a Webinar and participants require the passcode to join the Webinar.
     *
     * @remarks
     *
     */
    webinarPassword?: boolean;
}
export declare class GetGroupSettings200ApplicationXMLMeetingWebinarSecuritySettings extends SpeakeasyBase {
    meetingSecurity?: GetGroupSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurity;
}
/**
 * Authentication type
 */
export declare enum GetGroupSettings200ApplicationXml22AuthenticationOptionsTypeEnum {
    Internally = "internally",
    EnforceLogin = "enforce_login",
    EnforceLoginWithDomains = "enforce_login_with_domains"
}
export declare class GetGroupSettings200ApplicationXml22AuthenticationOptions extends SpeakeasyBase {
    /**
     * Authentication default option
     */
    defaultOption?: boolean;
    /**
     * Authentication domians
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
     * Authentication type
     */
    type?: GetGroupSettings200ApplicationXml22AuthenticationOptionsTypeEnum;
    /**
     * Authentication visible
     */
    visible?: boolean;
}
export declare class GetGroupSettings200ApplicationXml22 extends SpeakeasyBase {
    /**
     * Authentication Options
     */
    authenticationOptions?: GetGroupSettings200ApplicationXml22AuthenticationOptions[];
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
export declare enum GetGroupSettings200ApplicationXml21AuthenticationOptionsTypeEnum {
    EnforceLogin = "enforce_login",
    EnforceLoginWithSameAccount = "enforce_login_with_same_account",
    EnforceLoginWithDomains = "enforce_login_with_domains"
}
export declare class GetGroupSettings200ApplicationXml21AuthenticationOptions extends SpeakeasyBase {
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
    type?: GetGroupSettings200ApplicationXml21AuthenticationOptionsTypeEnum;
    /**
     * Authentication visible
     */
    visible?: boolean;
}
export declare class GetGroupSettings200ApplicationXml21 extends SpeakeasyBase {
    /**
     * Meeting Authentication Options
     */
    authenticationOptions?: GetGroupSettings200ApplicationXml21AuthenticationOptions[];
    /**
     * Only authenticated users can join meetings
     */
    meetingAuthentication?: boolean;
}
export declare class GetGroupSettings200ApplicationXml1EmailNotification extends SpeakeasyBase {
    /**
     * Notify the alternative host who is set or removed.
     */
    alternativeHostReminder?: boolean;
    /**
     * Notify host and participants when the meeting is cancelled.
     */
    cancelMeetingReminder?: boolean;
    /**
     * Notify host when cloud recording is available.
     */
    cloudRecordingAvailableReminder?: boolean;
    /**
     * Notify host when participants join the meeting before them.
     */
    jbhReminder?: boolean;
    /**
     * Notify the host there is a meeting is scheduled, rescheduled, or cancelled.
     */
    scheduleForHostReminder?: boolean;
}
/**
 * If you have set the value of `custom_data_center_regions` to `true`, specify the data center regions that you would like to opt in to (country codes from among: ["EU", "HK", "AU", "IN", "LA", "TY", "CN", "US", "CA"]).
 *
 * @remarks
 *
 */
export declare enum GetGroupSettings200ApplicationXml1InMeetingDataCenterRegionsEnum {
    Eu = "EU",
    Hk = "HK",
    Au = "AU",
    In = "IN",
    Ty = "TY",
    Cn = "CN",
    Us = "US",
    Ca = "CA"
}
export declare class GetGroupSettings200ApplicationXml1InMeetingVirtualBackgroundSettingsFiles extends SpeakeasyBase {
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
export declare class GetGroupSettings200ApplicationXml1InMeetingVirtualBackgroundSettings extends SpeakeasyBase {
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
    files?: GetGroupSettings200ApplicationXml1InMeetingVirtualBackgroundSettingsFiles[];
}
/**
 * Indicates who can share their screen or content during meetings. The value can be one of the following: <br>
 *
 * @remarks
 * `host`: Only host can share the screen.<br>
 * `all`: Both hosts and attendees can share their screen during meetings. For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
 *
 */
export declare enum GetGroupSettings200ApplicationXml1InMeetingWhoCanShareScreenEnum {
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
export declare enum GetGroupSettings200ApplicationXml1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum {
    Host = "host",
    All = "all"
}
export declare class GetGroupSettings200ApplicationXml1InMeeting extends SpeakeasyBase {
    /**
     * Allow participants who belong to your account to see that a guest (someone who does not belong to your account) is participating in the meeting/webinar.
     */
    alertGuestJoin?: boolean;
    /**
     * Show Zoom windows during screen share.
     */
    allowShowZoomWindows?: boolean;
    /**
     * Allow participants to use annotation tools to add information to shared screens.
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
     * Enable users to see and add contacts to 'auto-answer group' in the contact list on chat. Any call from members of this group will be automatically answered.
     */
    autoAnswer?: boolean;
    /**
     * Automatically save all in-meeting chats.
     */
    autoSavingChat?: boolean;
    /**
     * Allow host to split meeting participants into separate, smaller rooms.
     */
    breakoutRoom?: boolean;
    /**
     * Allow meeting participants to send chat message visible to all participants.
     */
    chat?: boolean;
    /**
     * Allow host to type closed captions or assign a participant/third party device to add closed captions.
     */
    closedCaption?: boolean;
    /**
     * Allow the host to add co-hosts. Co-hosts have the same in-meeting controls as the host.
     */
    coHost?: boolean;
    /**
     * If set to `true`, you can [select data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars) to be used by this group for hosting their real-time meeting and webinar traffic. These regions can be provided in the `data_center_regions` field. If set to `false`, the regions cannot be customized and the default regions will be used.
     */
    customDataCenterRegions?: boolean;
    /**
     * If you have set the value of `custom_data_center_regions` to `true`, specify the data center regions that you would like to opt in to (country codes from among: ["EU", "HK", "AU", "IN", "LA", "TY", "CN", "US", "CA"]).
     *
     * @remarks
     *
     */
    dataCenterRegions?: GetGroupSettings200ApplicationXml1InMeetingDataCenterRegionsEnum;
    /**
     * Require that all meetings are encrypted using AES.
     */
    e2eEncryption?: boolean;
    /**
     * Play sound when participants join or leave.
     */
    entryExitChime?: string;
    /**
     * Allow another user to take control of the camera during a meeting.
     */
    farEndCameraControl?: boolean;
    /**
     * Enable users to provide feedback to Zoom at the end of the meeting.
     */
    feedback?: boolean;
    /**
     * Indicates whether [in-meeting file transfer](https://support.zoom.us/hc/en-us/articles/209605493-In-meeting-file-transfer) setting has been enabled for the users in the group or not.
     */
    fileTransfer?: boolean;
    /**
     * Enable higher quality video for host and participants. This will require more bandwidth.
     */
    groupHd?: boolean;
    /**
     * Allow participants in a meeting can provide nonverbal feedback and express opinions by clicking on icons in the Participants panel.
     */
    nonVerbalFeedback?: boolean;
    /**
     * Show the list of H.323/SIP devices only to the host.
     */
    onlyHostViewDeviceList?: boolean;
    /**
     * Allow users to select original sound during a meeting.
     */
    originalAudio?: boolean;
    /**
     * Add 'Polls' to the meeting controls. This allows the host to survey the attendees.
     */
    polling?: boolean;
    /**
     * Display end-of-meeting experience feedback survey.
     */
    postMeetingFeedback?: boolean;
    /**
     * Allow meeting participants to send a private 1:1 message to another participant.
     */
    privateChat?: boolean;
    /**
     * When each participant joins by telephone, allow the option to record and play their own voice as entry and exit chimes.
     */
    recordPlayOwnVoice?: boolean;
    /**
     * During screen sharing, allow the person who is sharing to let others control the shared content.
     */
    remoteControl?: boolean;
    /**
     * Allow meeting host to provide 1:1 remote support to another participant.
     */
    remoteSupport?: boolean;
    /**
     * Indicates whether the [**Request permission to unmute participants**](https://support.zoom.us/hc/en-us/articles/203435537-Muting-and-unmuting-participants-in-a-meeting#h_01EGK4XFWS1SJGZ71MYGKF7260) option has been enabled for the group or not.
     */
    requestPermissionToUnmute?: boolean;
    /**
     * Allow host and participants to share their screen or content during meetings.
     */
    screenSharing?: boolean;
    /**
     * Allow users to invite participants by email only by default.
     */
    sendingDefaultEmailInvites?: boolean;
    /**
     * Allow participants to join a meeting directly from their browser.
     */
    showBrowserJoinLink?: boolean;
    /**
     * Show the list of H.323/SIP devices.
     */
    showDeviceList?: boolean;
    /**
     * Always show meeting controls during a meeting.
     */
    showMeetingControlToolbar?: boolean;
    /**
     * Allow users to select stereo audio during a meeting.
     */
    stereoAudio?: boolean;
    /**
     * Allow  HTML formatting instead of plain text for meeting invitations scheduled with the Outlook plugin.
     */
    useHtmlFormatEmail?: boolean;
    /**
     * Enable virtual background.
     */
    virtualBackground?: boolean;
    /**
     * Settings to manage virtual background.
     */
    virtualBackgroundSettings?: GetGroupSettings200ApplicationXml1InMeetingVirtualBackgroundSettings;
    /**
     * Attendees cannot join a meeting until a host admits them individually from the waiting room.
     */
    waitingRoom?: boolean;
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
    whoCanShareScreen?: GetGroupSettings200ApplicationXml1InMeetingWhoCanShareScreenEnum;
    /**
     * Indicates who is allowed to start sharing screen when someone else in the meeting is sharing their screen. The value can be one of the following:<br>
     *
     * @remarks
     * `host`: Only a host can share the screen when someone else is sharing.<br>
     * `all`: Anyone in the meeting is allowed to start sharing their screen when someone else is sharing. For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
     *
     */
    whoCanShareScreenWhenSomeoneIsSharing?: GetGroupSettings200ApplicationXml1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum;
}
export declare class GetGroupSettings200ApplicationXml1ProfileRecordingStorageLocation extends SpeakeasyBase {
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
export declare class GetGroupSettings200ApplicationXml1Profile extends SpeakeasyBase {
    recordingStorageLocation?: GetGroupSettings200ApplicationXml1ProfileRecordingStorageLocation;
}
export declare class GetGroupSettings200ApplicationXml1RecordingArchiveSettings extends SpeakeasyBase {
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
export declare enum GetGroupSettings200ApplicationXml1RecordingArchiveTypeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
/**
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted archiving solution access by the Zoom Support team.
 */
export declare class GetGroupSettings200ApplicationXml1RecordingArchive extends SpeakeasyBase {
    /**
     * Enable the archiving feature.
     */
    enable?: boolean;
    settings?: GetGroupSettings200ApplicationXml1RecordingArchiveSettings;
    /**
     * Archive types:
     *
     * @remarks
     *
     * * `1`: Only meetings are archived.<br>
     * * `2`: Only webinars are archived.<br>
     * * `3`: Both meetings and webinars are archived.
     */
    type?: GetGroupSettings200ApplicationXml1RecordingArchiveTypeEnum;
}
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
 * @remarks
 *
 */
export declare class GetGroupSettings200ApplicationXml1RecordingIpAddressAccessControl extends SpeakeasyBase {
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
export declare class GetGroupSettings200ApplicationXml1Recording extends SpeakeasyBase {
    /**
     * Make cloud recordings accessible to account members only.
     */
    accountUserAccessRecording?: boolean;
    /**
     * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted archiving solution access by the Zoom Support team.
     */
    archive?: GetGroupSettings200ApplicationXml1RecordingArchive;
    /**
     * Record meetings automatically as they start.
     */
    autoRecording?: string;
    /**
     * Allow hosts to record and save the meeting / webinar in the cloud.
     */
    cloudRecording?: boolean;
    /**
     * Allow anyone with a link to the cloud recording to download.
     */
    cloudRecordingDownload?: boolean;
    /**
     * Allow only the host with a link to the cloud recording to download.
     */
    cloudRecordingDownloadHost?: boolean;
    /**
     * Allow the host to delete the recordings. If this option is disabled, the recordings cannot be deleted by the host and only admin can delete them.
     */
    hostDeleteCloudRecording?: boolean;
    /**
     * Setting to allow cloud recording access only from specific IP address ranges.
     *
     * @remarks
     *
     */
    ipAddressAccessControl?: GetGroupSettings200ApplicationXml1RecordingIpAddressAccessControl;
    /**
     * Allow hosts and participants to record the meeting to a local file.
     */
    localRecording?: boolean;
    /**
     * If set to `true`, meeting hosts cannot view their meeting cloud recordings. Only the admins who have recording management privilege can access them.
     *
     * @remarks
     *
     *
     */
    preventHostAccessRecording?: boolean;
    /**
     * Record an audio only file.
     */
    recordAudioFile?: boolean;
    /**
     * When someone is sharing their screen, active speaker will show on the top right corner of the shared screen.
     */
    recordGalleryView?: boolean;
    /**
     * Record active speaker with shared screen.
     */
    recordSpeakerView?: boolean;
    /**
     * Automatically transcribe the audio of a meeting or webinar for cloud recordings.
     */
    recordingAudioTranscript?: boolean;
    /**
     * Save chat messages from the meeting / webinar.
     */
    saveChatText?: boolean;
    /**
     * Add a timestamp to the recording.
     */
    showTimestamp?: boolean;
}
/**
 * Indicates whether a password is required for [PMI](https://support.zoom.us/hc/en-us/articles/203276937-Using-Personal-Meeting-ID-PMI-) meetings or not. The value can be one of the following:<br>
 *
 * @remarks
 * `none`: Do not require password for PMI meetings.<br>
 * `all`: Require participants to enter password for all PMI enabled meetings.<br> `jbh_only`: Require password only for meetings where the **"join before host"** setting is enabled.
 */
export declare enum GetGroupSettings200ApplicationXml1ScheduleMeetingRequirePasswordForPmiMeetingsEnum {
    All = "all",
    JbhOnly = "jbh_only",
    None = "none"
}
export declare class GetGroupSettings200ApplicationXml1ScheduleMeeting extends SpeakeasyBase {
    /**
     * Determine how participants can join the audio portion of the meeting.
     */
    audioType?: string;
    /**
     * If the value is set to `true`, the meeting password will be encrypted and included in the join meeting link to allow participants to join with just one click without having to enter the password.
     *
     * @remarks
     *
     */
    embedPasswordInJoinLink?: boolean;
    /**
     * If join before host option is enabled for a personal meeting, then enforce password requirement.
     *
     * @remarks
     *
     *
     * **This field will be deprecated in near future.** If you would like to enable this setting, we highly encourage you to use the `require_password_for_pmi_meetings` field.
     *
     *
     */
    forcePmiJbhPassword?: boolean;
    /**
     * Start meetings with host video on.
     */
    hostVideo?: boolean;
    /**
     * Allow participants to join the meeting before the host arrives
     */
    joinBeforeHost?: boolean;
    /**
     * Automatically mute all participants when they join the meeting.
     */
    muteUponEntry?: boolean;
    /**
     * Start meetings with participant video on.
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
     * Generate and send new passwords for newly scheduled or edited meetings.
     */
    pstnPasswordProtected?: boolean;
    /**
     * If enabled, a random password will be generated on the user's end who starts the instant meeting. Other participants will have to enter the password to join the meeting. If you use PMI for your instant meetings, this option will be disabled.
     */
    requirePasswordForInstantMeetings?: boolean;
    /**
     * Indicates whether a password is required for [PMI](https://support.zoom.us/hc/en-us/articles/203276937-Using-Personal-Meeting-ID-PMI-) meetings or not. The value can be one of the following:<br>
     *
     * @remarks
     * `none`: Do not require password for PMI meetings.<br>
     * `all`: Require participants to enter password for all PMI enabled meetings.<br> `jbh_only`: Require password only for meetings where the **"join before host"** setting is enabled.
     */
    requirePasswordForPmiMeetings?: GetGroupSettings200ApplicationXml1ScheduleMeetingRequirePasswordForPmiMeetingsEnum;
    /**
     * Require a password for meetings which have already been scheduled
     *
     * @remarks
     *
     */
    requirePasswordForScheduledMeetings?: boolean;
    /**
     * This setting applies for regular meetings that do not use PMI. If enabled, a password will be generated while a host schedules a new meeting and participants will be required to enter the password before they can join the meeting.
     */
    requirePasswordForSchedulingNewMeetings?: boolean;
    /**
     * Receive desktop notification for upcoming meetings.
     */
    upcomingMeetingReminder?: boolean;
    /**
     * Indicates whether PMI is enabled for all instant meetings or not.
     */
    usePmiForInstantMeetings?: boolean;
    /**
     * Indicates whether PMI is enabled for all scheduled meetings or not.
     */
    usePmiForScheduleMeetings?: boolean;
}
/**
 * Indicates where most of the participants call into or call from duriing a meeting.
 */
export declare class GetGroupSettings200ApplicationXml1TelephonyTelephonyRegions extends SpeakeasyBase {
    /**
     * Telephony regions selected by the account to indicate where most of the participants call into or call from during a meeting.
     */
    selectionValues?: string[];
}
export declare class GetGroupSettings200ApplicationXml1Telephony extends SpeakeasyBase {
    audioConferenceInfo?: string;
    /**
     * Indicates where most of the participants call into or call from duriing a meeting.
     */
    telephonyRegions?: GetGroupSettings200ApplicationXml1TelephonyTelephonyRegions;
    /**
     * Allow users to join the meeting using the existing 3rd party audio configuration.
     */
    thirdPartyAudio?: boolean;
}
export declare class GetGroupSettings200ApplicationXml1 extends SpeakeasyBase {
    emailNotification?: GetGroupSettings200ApplicationXml1EmailNotification;
    inMeeting?: GetGroupSettings200ApplicationXml1InMeeting;
    profile?: GetGroupSettings200ApplicationXml1Profile;
    recording?: GetGroupSettings200ApplicationXml1Recording;
    scheduleMeeting?: GetGroupSettings200ApplicationXml1ScheduleMeeting;
    telephony?: GetGroupSettings200ApplicationXml1Telephony;
}
/**
 * Choose between enhanced encryption and [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) when starting or a meeting. When using end-to-end encryption, several features (e.g. cloud recording, phone/SIP/H.323 dial-in) will be **automatically disabled**. <br><br>The value of this field can be one of the following:<br>
 *
 * @remarks
 * `enhanced_encryption`: Enhanced encryption. Encryption is stored in the cloud if you enable this option. <br>
 *
 * `e2ee`: [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the following features: join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions.
 */
export declare enum GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
export declare enum GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirementConsecutiveCharactersLengthEnum {
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
export declare class GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
    consecutiveCharactersLength?: GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirementConsecutiveCharactersLengthEnum;
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
export declare enum GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettingsParticipantsToPlaceInWaitingRoomEnum {
    Zero = "0",
    One = "1",
    Two = "2"
}
/**
 * Specify the settings to be applied if waiting room is enabled.
 */
export declare class GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
    /**
     *
     * @remarks
     *
     * Specify who should be admitted to the waiting room. The value of this field can be one of the following:<br>
     * `0`: All attendees<br> `1`: Users who are not in your account<br> `2`: Users who are not in your account and are not part of your whitelisted domains that are specified in
     */
    participantsToPlaceInWaitingRoom?: GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettingsParticipantsToPlaceInWaitingRoomEnum;
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
export declare class GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
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
    encryptionType?: GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
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
    meetingPasswordRequirement?: GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
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
    waitingRoomSettings?: GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
    /**
     * If set to `true`, a passcode will be generated when scheduling a Webinar and participants require the passcode to join the Webinar.
     *
     * @remarks
     *
     */
    webinarPassword?: boolean;
}
export declare class GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettings extends SpeakeasyBase {
    meetingSecurity?: GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity;
}
/**
 * Authentication type
 */
export declare enum GetGroupSettings200ApplicationJson22AuthenticationOptionsTypeEnum {
    Internally = "internally",
    EnforceLogin = "enforce_login",
    EnforceLoginWithDomains = "enforce_login_with_domains"
}
export declare class GetGroupSettings200ApplicationJson22AuthenticationOptions extends SpeakeasyBase {
    /**
     * Authentication default option
     */
    defaultOption?: boolean;
    /**
     * Authentication domians
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
     * Authentication type
     */
    type?: GetGroupSettings200ApplicationJson22AuthenticationOptionsTypeEnum;
    /**
     * Authentication visible
     */
    visible?: boolean;
}
export declare class GetGroupSettings200ApplicationJson22 extends SpeakeasyBase {
    /**
     * Authentication Options
     */
    authenticationOptions?: GetGroupSettings200ApplicationJson22AuthenticationOptions[];
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
export declare enum GetGroupSettings200ApplicationJson21AuthenticationOptionsTypeEnum {
    EnforceLogin = "enforce_login",
    EnforceLoginWithSameAccount = "enforce_login_with_same_account",
    EnforceLoginWithDomains = "enforce_login_with_domains"
}
export declare class GetGroupSettings200ApplicationJson21AuthenticationOptions extends SpeakeasyBase {
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
    type?: GetGroupSettings200ApplicationJson21AuthenticationOptionsTypeEnum;
    /**
     * Authentication visible
     */
    visible?: boolean;
}
export declare class GetGroupSettings200ApplicationJson21 extends SpeakeasyBase {
    /**
     * Meeting Authentication Options
     */
    authenticationOptions?: GetGroupSettings200ApplicationJson21AuthenticationOptions[];
    /**
     * Only authenticated users can join meetings
     */
    meetingAuthentication?: boolean;
}
export declare class GetGroupSettings200ApplicationJson1EmailNotification extends SpeakeasyBase {
    /**
     * Notify the alternative host who is set or removed.
     */
    alternativeHostReminder?: boolean;
    /**
     * Notify host and participants when the meeting is cancelled.
     */
    cancelMeetingReminder?: boolean;
    /**
     * Notify host when cloud recording is available.
     */
    cloudRecordingAvailableReminder?: boolean;
    /**
     * Notify host when participants join the meeting before them.
     */
    jbhReminder?: boolean;
    /**
     * Notify the host there is a meeting is scheduled, rescheduled, or cancelled.
     */
    scheduleForHostReminder?: boolean;
}
/**
 * If you have set the value of `custom_data_center_regions` to `true`, specify the data center regions that you would like to opt in to (country codes from among: ["EU", "HK", "AU", "IN", "LA", "TY", "CN", "US", "CA"]).
 *
 * @remarks
 *
 */
export declare enum GetGroupSettings200ApplicationJson1InMeetingDataCenterRegionsEnum {
    Eu = "EU",
    Hk = "HK",
    Au = "AU",
    In = "IN",
    Ty = "TY",
    Cn = "CN",
    Us = "US",
    Ca = "CA"
}
export declare class GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettingsFiles extends SpeakeasyBase {
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
export declare class GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettings extends SpeakeasyBase {
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
    files?: GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettingsFiles[];
}
/**
 * Indicates who can share their screen or content during meetings. The value can be one of the following: <br>
 *
 * @remarks
 * `host`: Only host can share the screen.<br>
 * `all`: Both hosts and attendees can share their screen during meetings. For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
 *
 */
export declare enum GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenEnum {
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
export declare enum GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum {
    Host = "host",
    All = "all"
}
export declare class GetGroupSettings200ApplicationJson1InMeeting extends SpeakeasyBase {
    /**
     * Allow participants who belong to your account to see that a guest (someone who does not belong to your account) is participating in the meeting/webinar.
     */
    alertGuestJoin?: boolean;
    /**
     * Show Zoom windows during screen share.
     */
    allowShowZoomWindows?: boolean;
    /**
     * Allow participants to use annotation tools to add information to shared screens.
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
     * Enable users to see and add contacts to 'auto-answer group' in the contact list on chat. Any call from members of this group will be automatically answered.
     */
    autoAnswer?: boolean;
    /**
     * Automatically save all in-meeting chats.
     */
    autoSavingChat?: boolean;
    /**
     * Allow host to split meeting participants into separate, smaller rooms.
     */
    breakoutRoom?: boolean;
    /**
     * Allow meeting participants to send chat message visible to all participants.
     */
    chat?: boolean;
    /**
     * Allow host to type closed captions or assign a participant/third party device to add closed captions.
     */
    closedCaption?: boolean;
    /**
     * Allow the host to add co-hosts. Co-hosts have the same in-meeting controls as the host.
     */
    coHost?: boolean;
    /**
     * If set to `true`, you can [select data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars) to be used by this group for hosting their real-time meeting and webinar traffic. These regions can be provided in the `data_center_regions` field. If set to `false`, the regions cannot be customized and the default regions will be used.
     */
    customDataCenterRegions?: boolean;
    /**
     * If you have set the value of `custom_data_center_regions` to `true`, specify the data center regions that you would like to opt in to (country codes from among: ["EU", "HK", "AU", "IN", "LA", "TY", "CN", "US", "CA"]).
     *
     * @remarks
     *
     */
    dataCenterRegions?: GetGroupSettings200ApplicationJson1InMeetingDataCenterRegionsEnum;
    /**
     * Require that all meetings are encrypted using AES.
     */
    e2eEncryption?: boolean;
    /**
     * Play sound when participants join or leave.
     */
    entryExitChime?: string;
    /**
     * Allow another user to take control of the camera during a meeting.
     */
    farEndCameraControl?: boolean;
    /**
     * Enable users to provide feedback to Zoom at the end of the meeting.
     */
    feedback?: boolean;
    /**
     * Indicates whether [in-meeting file transfer](https://support.zoom.us/hc/en-us/articles/209605493-In-meeting-file-transfer) setting has been enabled for the users in the group or not.
     */
    fileTransfer?: boolean;
    /**
     * Enable higher quality video for host and participants. This will require more bandwidth.
     */
    groupHd?: boolean;
    /**
     * Allow participants in a meeting can provide nonverbal feedback and express opinions by clicking on icons in the Participants panel.
     */
    nonVerbalFeedback?: boolean;
    /**
     * Show the list of H.323/SIP devices only to the host.
     */
    onlyHostViewDeviceList?: boolean;
    /**
     * Allow users to select original sound during a meeting.
     */
    originalAudio?: boolean;
    /**
     * Add 'Polls' to the meeting controls. This allows the host to survey the attendees.
     */
    polling?: boolean;
    /**
     * Display end-of-meeting experience feedback survey.
     */
    postMeetingFeedback?: boolean;
    /**
     * Allow meeting participants to send a private 1:1 message to another participant.
     */
    privateChat?: boolean;
    /**
     * When each participant joins by telephone, allow the option to record and play their own voice as entry and exit chimes.
     */
    recordPlayOwnVoice?: boolean;
    /**
     * During screen sharing, allow the person who is sharing to let others control the shared content.
     */
    remoteControl?: boolean;
    /**
     * Allow meeting host to provide 1:1 remote support to another participant.
     */
    remoteSupport?: boolean;
    /**
     * Indicates whether the [**Request permission to unmute participants**](https://support.zoom.us/hc/en-us/articles/203435537-Muting-and-unmuting-participants-in-a-meeting#h_01EGK4XFWS1SJGZ71MYGKF7260) option has been enabled for the group or not.
     */
    requestPermissionToUnmute?: boolean;
    /**
     * Allow host and participants to share their screen or content during meetings.
     */
    screenSharing?: boolean;
    /**
     * Allow users to invite participants by email only by default.
     */
    sendingDefaultEmailInvites?: boolean;
    /**
     * Allow participants to join a meeting directly from their browser.
     */
    showBrowserJoinLink?: boolean;
    /**
     * Show the list of H.323/SIP devices.
     */
    showDeviceList?: boolean;
    /**
     * Always show meeting controls during a meeting.
     */
    showMeetingControlToolbar?: boolean;
    /**
     * Allow users to select stereo audio during a meeting.
     */
    stereoAudio?: boolean;
    /**
     * Allow  HTML formatting instead of plain text for meeting invitations scheduled with the Outlook plugin.
     */
    useHtmlFormatEmail?: boolean;
    /**
     * Enable virtual background.
     */
    virtualBackground?: boolean;
    /**
     * Settings to manage virtual background.
     */
    virtualBackgroundSettings?: GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettings;
    /**
     * Attendees cannot join a meeting until a host admits them individually from the waiting room.
     */
    waitingRoom?: boolean;
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
    whoCanShareScreen?: GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenEnum;
    /**
     * Indicates who is allowed to start sharing screen when someone else in the meeting is sharing their screen. The value can be one of the following:<br>
     *
     * @remarks
     * `host`: Only a host can share the screen when someone else is sharing.<br>
     * `all`: Anyone in the meeting is allowed to start sharing their screen when someone else is sharing. For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
     *
     */
    whoCanShareScreenWhenSomeoneIsSharing?: GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum;
}
export declare class GetGroupSettings200ApplicationJson1ProfileRecordingStorageLocation extends SpeakeasyBase {
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
export declare class GetGroupSettings200ApplicationJson1Profile extends SpeakeasyBase {
    recordingStorageLocation?: GetGroupSettings200ApplicationJson1ProfileRecordingStorageLocation;
}
export declare class GetGroupSettings200ApplicationJson1RecordingArchiveSettings extends SpeakeasyBase {
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
export declare enum GetGroupSettings200ApplicationJson1RecordingArchiveTypeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
/**
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted archiving solution access by the Zoom Support team.
 */
export declare class GetGroupSettings200ApplicationJson1RecordingArchive extends SpeakeasyBase {
    /**
     * Enable the archiving feature.
     */
    enable?: boolean;
    settings?: GetGroupSettings200ApplicationJson1RecordingArchiveSettings;
    /**
     * Archive types:
     *
     * @remarks
     *
     * * `1`: Only meetings are archived.<br>
     * * `2`: Only webinars are archived.<br>
     * * `3`: Both meetings and webinars are archived.
     */
    type?: GetGroupSettings200ApplicationJson1RecordingArchiveTypeEnum;
}
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
 * @remarks
 *
 */
export declare class GetGroupSettings200ApplicationJson1RecordingIpAddressAccessControl extends SpeakeasyBase {
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
export declare class GetGroupSettings200ApplicationJson1Recording extends SpeakeasyBase {
    /**
     * Make cloud recordings accessible to account members only.
     */
    accountUserAccessRecording?: boolean;
    /**
     * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted archiving solution access by the Zoom Support team.
     */
    archive?: GetGroupSettings200ApplicationJson1RecordingArchive;
    /**
     * Record meetings automatically as they start.
     */
    autoRecording?: string;
    /**
     * Allow hosts to record and save the meeting / webinar in the cloud.
     */
    cloudRecording?: boolean;
    /**
     * Allow anyone with a link to the cloud recording to download.
     */
    cloudRecordingDownload?: boolean;
    /**
     * Allow only the host with a link to the cloud recording to download.
     */
    cloudRecordingDownloadHost?: boolean;
    /**
     * Allow the host to delete the recordings. If this option is disabled, the recordings cannot be deleted by the host and only admin can delete them.
     */
    hostDeleteCloudRecording?: boolean;
    /**
     * Setting to allow cloud recording access only from specific IP address ranges.
     *
     * @remarks
     *
     */
    ipAddressAccessControl?: GetGroupSettings200ApplicationJson1RecordingIpAddressAccessControl;
    /**
     * Allow hosts and participants to record the meeting to a local file.
     */
    localRecording?: boolean;
    /**
     * If set to `true`, meeting hosts cannot view their meeting cloud recordings. Only the admins who have recording management privilege can access them.
     *
     * @remarks
     *
     *
     */
    preventHostAccessRecording?: boolean;
    /**
     * Record an audio only file.
     */
    recordAudioFile?: boolean;
    /**
     * When someone is sharing their screen, active speaker will show on the top right corner of the shared screen.
     */
    recordGalleryView?: boolean;
    /**
     * Record active speaker with shared screen.
     */
    recordSpeakerView?: boolean;
    /**
     * Automatically transcribe the audio of a meeting or webinar for cloud recordings.
     */
    recordingAudioTranscript?: boolean;
    /**
     * Save chat messages from the meeting / webinar.
     */
    saveChatText?: boolean;
    /**
     * Add a timestamp to the recording.
     */
    showTimestamp?: boolean;
}
/**
 * Indicates whether a password is required for [PMI](https://support.zoom.us/hc/en-us/articles/203276937-Using-Personal-Meeting-ID-PMI-) meetings or not. The value can be one of the following:<br>
 *
 * @remarks
 * `none`: Do not require password for PMI meetings.<br>
 * `all`: Require participants to enter password for all PMI enabled meetings.<br> `jbh_only`: Require password only for meetings where the **"join before host"** setting is enabled.
 */
export declare enum GetGroupSettings200ApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum {
    All = "all",
    JbhOnly = "jbh_only",
    None = "none"
}
export declare class GetGroupSettings200ApplicationJson1ScheduleMeeting extends SpeakeasyBase {
    /**
     * Determine how participants can join the audio portion of the meeting.
     */
    audioType?: string;
    /**
     * If the value is set to `true`, the meeting password will be encrypted and included in the join meeting link to allow participants to join with just one click without having to enter the password.
     *
     * @remarks
     *
     */
    embedPasswordInJoinLink?: boolean;
    /**
     * If join before host option is enabled for a personal meeting, then enforce password requirement.
     *
     * @remarks
     *
     *
     * **This field will be deprecated in near future.** If you would like to enable this setting, we highly encourage you to use the `require_password_for_pmi_meetings` field.
     *
     *
     */
    forcePmiJbhPassword?: boolean;
    /**
     * Start meetings with host video on.
     */
    hostVideo?: boolean;
    /**
     * Allow participants to join the meeting before the host arrives
     */
    joinBeforeHost?: boolean;
    /**
     * Automatically mute all participants when they join the meeting.
     */
    muteUponEntry?: boolean;
    /**
     * Start meetings with participant video on.
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
     * Generate and send new passwords for newly scheduled or edited meetings.
     */
    pstnPasswordProtected?: boolean;
    /**
     * If enabled, a random password will be generated on the user's end who starts the instant meeting. Other participants will have to enter the password to join the meeting. If you use PMI for your instant meetings, this option will be disabled.
     */
    requirePasswordForInstantMeetings?: boolean;
    /**
     * Indicates whether a password is required for [PMI](https://support.zoom.us/hc/en-us/articles/203276937-Using-Personal-Meeting-ID-PMI-) meetings or not. The value can be one of the following:<br>
     *
     * @remarks
     * `none`: Do not require password for PMI meetings.<br>
     * `all`: Require participants to enter password for all PMI enabled meetings.<br> `jbh_only`: Require password only for meetings where the **"join before host"** setting is enabled.
     */
    requirePasswordForPmiMeetings?: GetGroupSettings200ApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum;
    /**
     * Require a password for meetings which have already been scheduled
     *
     * @remarks
     *
     */
    requirePasswordForScheduledMeetings?: boolean;
    /**
     * This setting applies for regular meetings that do not use PMI. If enabled, a password will be generated while a host schedules a new meeting and participants will be required to enter the password before they can join the meeting.
     */
    requirePasswordForSchedulingNewMeetings?: boolean;
    /**
     * Receive desktop notification for upcoming meetings.
     */
    upcomingMeetingReminder?: boolean;
    /**
     * Indicates whether PMI is enabled for all instant meetings or not.
     */
    usePmiForInstantMeetings?: boolean;
    /**
     * Indicates whether PMI is enabled for all scheduled meetings or not.
     */
    usePmiForScheduleMeetings?: boolean;
}
/**
 * Indicates where most of the participants call into or call from duriing a meeting.
 */
export declare class GetGroupSettings200ApplicationJson1TelephonyTelephonyRegions extends SpeakeasyBase {
    /**
     * Telephony regions selected by the account to indicate where most of the participants call into or call from during a meeting.
     */
    selectionValues?: string[];
}
export declare class GetGroupSettings200ApplicationJson1Telephony extends SpeakeasyBase {
    audioConferenceInfo?: string;
    /**
     * Indicates where most of the participants call into or call from duriing a meeting.
     */
    telephonyRegions?: GetGroupSettings200ApplicationJson1TelephonyTelephonyRegions;
    /**
     * Allow users to join the meeting using the existing 3rd party audio configuration.
     */
    thirdPartyAudio?: boolean;
}
export declare class GetGroupSettings200ApplicationJson1 extends SpeakeasyBase {
    emailNotification?: GetGroupSettings200ApplicationJson1EmailNotification;
    inMeeting?: GetGroupSettings200ApplicationJson1InMeeting;
    profile?: GetGroupSettings200ApplicationJson1Profile;
    recording?: GetGroupSettings200ApplicationJson1Recording;
    scheduleMeeting?: GetGroupSettings200ApplicationJson1ScheduleMeeting;
    telephony?: GetGroupSettings200ApplicationJson1Telephony;
}
export declare class GetGroupSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **Error Code**: `200` <br>
     *
     * @remarks
     * Only available for paid account.
     *
     * **HTTP Status Code**: `200` <br>
     * Group Settings Returned.
     *
     */
    getGroupSettings200ApplicationJSONOneOf?: any;
}
