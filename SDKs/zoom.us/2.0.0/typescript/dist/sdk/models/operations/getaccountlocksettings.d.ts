import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAccountLockSettingsRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of the account. To retrieve locked settings of the master account or a regular account, provide "me" as the value of this field. <br> To retrieve locked settings of a sub account, provide the Account ID of the sub account in this field.
     */
    accountId: string;
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
    /**
     * `meeting_security`: Use this query parameter to view meeting security settings applied on the account.<br>
     */
    option?: string;
}
/**
 * Choose between enhanced encryption and [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) when starting or a meeting. When using end-to-end encryption, several features (e.g. cloud recording, phone/SIP/H.323 dial-in) will be **automatically disabled**. <br><br>The value of this field can be one of the following:<br>
 *
 * @remarks
 * `enhanced_encryption`: Enhanced encryption. Encryption is stored in the cloud if you enable this option. <br>
 *
 * `e2ee`: [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the following features: join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions.
 */
export declare enum GetAccountLockSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
export declare enum GetAccountLockSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirementConsecutiveCharactersLengthEnum {
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
export declare class GetAccountLockSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
    consecutiveCharactersLength?: GetAccountLockSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirementConsecutiveCharactersLengthEnum;
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
export declare enum GetAccountLockSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettingsParticipantsToPlaceInWaitingRoomEnum {
    Zero = "0",
    One = "1",
    Two = "2"
}
/**
 * Specify the settings to be applied if waiting room is enabled.
 */
export declare class GetAccountLockSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
    /**
     *
     * @remarks
     *
     * Specify who should be admitted to the waiting room. The value of this field can be one of the following:<br>
     * `0`: All attendees<br> `1`: Users who are not in your account<br> `2`: Users who are not in your account and are not part of your whitelisted domains that are specified in
     */
    participantsToPlaceInWaitingRoom?: GetAccountLockSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettingsParticipantsToPlaceInWaitingRoomEnum;
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
export declare class GetAccountLockSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
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
    encryptionType?: GetAccountLockSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
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
    meetingPasswordRequirement?: GetAccountLockSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
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
    waitingRoomSettings?: GetAccountLockSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
    /**
     * If set to `true`, a passcode will be generated when scheduling a Webinar and participants require the passcode to join the Webinar.
     *
     * @remarks
     *
     */
    webinarPassword?: boolean;
}
export declare class GetAccountLockSettings200ApplicationXMLMeetingWebinarSecuritySettings extends SpeakeasyBase {
    meetingSecurity?: GetAccountLockSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurity;
}
export declare class GetAccountLockSettings200ApplicationXml1EmailNotification extends SpeakeasyBase {
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
export declare class GetAccountLockSettings200ApplicationXml1InMeeting extends SpeakeasyBase {
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
     * Displays whether or not custom [data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars) have been selected for meetings/webinars hosted by the account.
     */
    customDataCenterRegions?: boolean;
    /**
     * Enable DSCP marking for signaling and media packets. (Default is 56 for audio, 40 for video, and 40 for signaling.)
     */
    dscpMarking?: boolean;
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
     * Indicates whether [in-meeting file transfer](https://support.zoom.us/hc/en-us/articles/209605493-In-meeting-file-transfer) setting has been enabled for all users on the account or not.
     */
    fileTransfer?: boolean;
    /**
     * Enable higher quality video for host and participants. This will require more bandwidth.
     */
    groupHd?: boolean;
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
     * During screen sharing, allow the person who is sharing to let others control the shared content.
     */
    remoteControl?: boolean;
    /**
     * Indicates whether the [**Request permission to unmute participants**](https://support.zoom.us/hc/en-us/articles/203435537-Muting-and-unmuting-participants-in-a-meeting#h_01EGK4XFWS1SJGZ71MYGKF7260) option is enabled and locked for the account or not.
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
     * Allow attendees to ask questions for the host and panelists to answer in the webinar.
     */
    webinarQuestionAnswer?: boolean;
    /**
     * Allow participants to share a whiteboard that includes annotation tools.
     */
    whiteboard?: boolean;
}
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
 * @remarks
 *
 */
export declare class GetAccountLockSettings200ApplicationXml1RecordingIpAddressAccessControl extends SpeakeasyBase {
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
export declare class GetAccountLockSettings200ApplicationXml1Recording extends SpeakeasyBase {
    /**
     * Make cloud recordings accessible to account members only.
     */
    accountUserAccessRecording?: boolean;
    /**
     * Allow Zoom to automatically delete recordings permanently after a specified number of days.
     */
    autoDeleteCmr?: boolean;
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
     * Allow the host to delete the recordings. If this option is disabled, the recordings cannot be deleted by the host and only admin can delete them.
     */
    hostDeleteCloudRecording?: boolean;
    /**
     * Setting to allow cloud recording access only from specific IP address ranges.
     *
     * @remarks
     *
     */
    ipAddressAccessControl?: GetAccountLockSettings200ApplicationXml1RecordingIpAddressAccessControl;
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
     * Only authenticated users can view cloud recordings
     */
    recordingAuthentication?: string;
}
export declare class GetAccountLockSettings200ApplicationXml1ScheduleMeeting extends SpeakeasyBase {
    /**
     * Determine how participants can join the audio portion of the meeting.
     */
    audioType?: boolean;
    /**
     * If the value is set to `true`, the meeting password will be encrypted and included in the join meeting link to allow participants to join with just one click without having to enter the password.
     *
     * @remarks
     *
     */
    embedPasswordInJoinLink?: boolean;
    /**
     * Allow only signed-in users to join meetings.
     *
     * @remarks
     *
     */
    enforceLogin?: boolean;
    /**
     * Specify the domains from which users can join a meeting.
     *
     * @remarks
     *
     */
    enforceLoginDomains?: string;
    /**
     * Allow only signed-in users with specified domains to join meetings.
     *
     * @remarks
     *
     */
    enforceLoginWithDomains?: boolean;
    /**
     * Start meetings with host video on.
     */
    hostVideo?: boolean;
    /**
     * Allow participants to join the meeting before the host arrives
     */
    joinBeforeHost?: boolean;
    /**
     * Only authenticated users can join meetings
     */
    meetingAuthentication?: boolean;
    /**
     * Hide actual meeting topic and display "Zoom Meeting" for your scheduled meetings
     */
    notStoreMeetingTopic?: boolean;
    /**
     * Start meetings with participant video on.
     */
    participantVideo?: boolean;
    /**
     * Require password for instant meetings. If you use PMI for your instant meetings, this option will be disabled. This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
     */
    requirePasswordForInstantMeetings?: boolean;
    /**
     * Require participants to enter password for PMI meetings. This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
     */
    requirePasswordForPmiMeetings?: boolean;
    /**
     * This setting applies for regular meetings that do not use PMI. If enabled, a password will be generated while a host schedules a new meeting and participants will be required to enter the password before they can join the meeting. This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
     */
    requirePasswordForSchedulingNewMeetings?: boolean;
}
export declare class GetAccountLockSettings200ApplicationXml1Telephony extends SpeakeasyBase {
    telephonyRegions?: boolean;
    /**
     * Allow users to join the meeting using the existing 3rd party audio configuration.
     */
    thirdPartyAudio?: boolean;
}
export declare class GetAccountLockSettings200ApplicationXml1Tsp extends SpeakeasyBase {
    callOut?: boolean;
    showInternationalNumbersLink?: boolean;
}
export declare class GetAccountLockSettings200ApplicationXml1 extends SpeakeasyBase {
    emailNotification?: GetAccountLockSettings200ApplicationXml1EmailNotification;
    inMeeting?: GetAccountLockSettings200ApplicationXml1InMeeting;
    recording?: GetAccountLockSettings200ApplicationXml1Recording;
    scheduleMeeting?: GetAccountLockSettings200ApplicationXml1ScheduleMeeting;
    telephony?: GetAccountLockSettings200ApplicationXml1Telephony;
    tsp?: GetAccountLockSettings200ApplicationXml1Tsp;
}
/**
 * Choose between enhanced encryption and [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) when starting or a meeting. When using end-to-end encryption, several features (e.g. cloud recording, phone/SIP/H.323 dial-in) will be **automatically disabled**. <br><br>The value of this field can be one of the following:<br>
 *
 * @remarks
 * `enhanced_encryption`: Enhanced encryption. Encryption is stored in the cloud if you enable this option. <br>
 *
 * `e2ee`: [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the following features: join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions.
 */
export declare enum GetAccountLockSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
export declare enum GetAccountLockSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirementConsecutiveCharactersLengthEnum {
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
export declare class GetAccountLockSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
    consecutiveCharactersLength?: GetAccountLockSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirementConsecutiveCharactersLengthEnum;
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
export declare enum GetAccountLockSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettingsParticipantsToPlaceInWaitingRoomEnum {
    Zero = "0",
    One = "1",
    Two = "2"
}
/**
 * Specify the settings to be applied if waiting room is enabled.
 */
export declare class GetAccountLockSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
    /**
     *
     * @remarks
     *
     * Specify who should be admitted to the waiting room. The value of this field can be one of the following:<br>
     * `0`: All attendees<br> `1`: Users who are not in your account<br> `2`: Users who are not in your account and are not part of your whitelisted domains that are specified in
     */
    participantsToPlaceInWaitingRoom?: GetAccountLockSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettingsParticipantsToPlaceInWaitingRoomEnum;
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
export declare class GetAccountLockSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
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
    encryptionType?: GetAccountLockSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
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
    meetingPasswordRequirement?: GetAccountLockSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
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
    waitingRoomSettings?: GetAccountLockSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
    /**
     * If set to `true`, a passcode will be generated when scheduling a Webinar and participants require the passcode to join the Webinar.
     *
     * @remarks
     *
     */
    webinarPassword?: boolean;
}
export declare class GetAccountLockSettings200ApplicationJSONMeetingWebinarSecuritySettings extends SpeakeasyBase {
    meetingSecurity?: GetAccountLockSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity;
}
export declare class GetAccountLockSettings200ApplicationJson1EmailNotification extends SpeakeasyBase {
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
export declare class GetAccountLockSettings200ApplicationJson1InMeeting extends SpeakeasyBase {
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
     * Displays whether or not custom [data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars) have been selected for meetings/webinars hosted by the account.
     */
    customDataCenterRegions?: boolean;
    /**
     * Enable DSCP marking for signaling and media packets. (Default is 56 for audio, 40 for video, and 40 for signaling.)
     */
    dscpMarking?: boolean;
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
     * Indicates whether [in-meeting file transfer](https://support.zoom.us/hc/en-us/articles/209605493-In-meeting-file-transfer) setting has been enabled for all users on the account or not.
     */
    fileTransfer?: boolean;
    /**
     * Enable higher quality video for host and participants. This will require more bandwidth.
     */
    groupHd?: boolean;
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
     * During screen sharing, allow the person who is sharing to let others control the shared content.
     */
    remoteControl?: boolean;
    /**
     * Indicates whether the [**Request permission to unmute participants**](https://support.zoom.us/hc/en-us/articles/203435537-Muting-and-unmuting-participants-in-a-meeting#h_01EGK4XFWS1SJGZ71MYGKF7260) option is enabled and locked for the account or not.
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
     * Allow attendees to ask questions for the host and panelists to answer in the webinar.
     */
    webinarQuestionAnswer?: boolean;
    /**
     * Allow participants to share a whiteboard that includes annotation tools.
     */
    whiteboard?: boolean;
}
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
 * @remarks
 *
 */
export declare class GetAccountLockSettings200ApplicationJson1RecordingIpAddressAccessControl extends SpeakeasyBase {
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
export declare class GetAccountLockSettings200ApplicationJson1Recording extends SpeakeasyBase {
    /**
     * Make cloud recordings accessible to account members only.
     */
    accountUserAccessRecording?: boolean;
    /**
     * Allow Zoom to automatically delete recordings permanently after a specified number of days.
     */
    autoDeleteCmr?: boolean;
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
     * Allow the host to delete the recordings. If this option is disabled, the recordings cannot be deleted by the host and only admin can delete them.
     */
    hostDeleteCloudRecording?: boolean;
    /**
     * Setting to allow cloud recording access only from specific IP address ranges.
     *
     * @remarks
     *
     */
    ipAddressAccessControl?: GetAccountLockSettings200ApplicationJson1RecordingIpAddressAccessControl;
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
     * Only authenticated users can view cloud recordings
     */
    recordingAuthentication?: string;
}
export declare class GetAccountLockSettings200ApplicationJson1ScheduleMeeting extends SpeakeasyBase {
    /**
     * Determine how participants can join the audio portion of the meeting.
     */
    audioType?: boolean;
    /**
     * If the value is set to `true`, the meeting password will be encrypted and included in the join meeting link to allow participants to join with just one click without having to enter the password.
     *
     * @remarks
     *
     */
    embedPasswordInJoinLink?: boolean;
    /**
     * Allow only signed-in users to join meetings.
     *
     * @remarks
     *
     */
    enforceLogin?: boolean;
    /**
     * Specify the domains from which users can join a meeting.
     *
     * @remarks
     *
     */
    enforceLoginDomains?: string;
    /**
     * Allow only signed-in users with specified domains to join meetings.
     *
     * @remarks
     *
     */
    enforceLoginWithDomains?: boolean;
    /**
     * Start meetings with host video on.
     */
    hostVideo?: boolean;
    /**
     * Allow participants to join the meeting before the host arrives
     */
    joinBeforeHost?: boolean;
    /**
     * Only authenticated users can join meetings
     */
    meetingAuthentication?: boolean;
    /**
     * Hide actual meeting topic and display "Zoom Meeting" for your scheduled meetings
     */
    notStoreMeetingTopic?: boolean;
    /**
     * Start meetings with participant video on.
     */
    participantVideo?: boolean;
    /**
     * Require password for instant meetings. If you use PMI for your instant meetings, this option will be disabled. This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
     */
    requirePasswordForInstantMeetings?: boolean;
    /**
     * Require participants to enter password for PMI meetings. This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
     */
    requirePasswordForPmiMeetings?: boolean;
    /**
     * This setting applies for regular meetings that do not use PMI. If enabled, a password will be generated while a host schedules a new meeting and participants will be required to enter the password before they can join the meeting. This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
     */
    requirePasswordForSchedulingNewMeetings?: boolean;
}
export declare class GetAccountLockSettings200ApplicationJson1Telephony extends SpeakeasyBase {
    telephonyRegions?: boolean;
    /**
     * Allow users to join the meeting using the existing 3rd party audio configuration.
     */
    thirdPartyAudio?: boolean;
}
export declare class GetAccountLockSettings200ApplicationJson1Tsp extends SpeakeasyBase {
    callOut?: boolean;
    showInternationalNumbersLink?: boolean;
}
export declare class GetAccountLockSettings200ApplicationJson1 extends SpeakeasyBase {
    emailNotification?: GetAccountLockSettings200ApplicationJson1EmailNotification;
    inMeeting?: GetAccountLockSettings200ApplicationJson1InMeeting;
    recording?: GetAccountLockSettings200ApplicationJson1Recording;
    scheduleMeeting?: GetAccountLockSettings200ApplicationJson1ScheduleMeeting;
    telephony?: GetAccountLockSettings200ApplicationJson1Telephony;
    tsp?: GetAccountLockSettings200ApplicationJson1Tsp;
}
export declare class GetAccountLockSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **Error Code:** `200`<br>
     *
     * @remarks
     * Only available for paid account:$accountId.
     *
     * **HTTP Status Code:** `200`<br>
     * Locked settings for the Account returned.
     *
     *
     */
    getAccountLockSettings200ApplicationJSONObject?: any;
}
