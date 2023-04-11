import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateAccountLockSettingsSecurity extends SpeakeasyBase {
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
export declare enum UpdateAccountLockSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
export declare enum UpdateAccountLockSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirementConsecutiveCharactersLengthEnum {
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
export declare class UpdateAccountLockSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
    consecutiveCharactersLength?: UpdateAccountLockSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirementConsecutiveCharactersLengthEnum;
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
export declare enum UpdateAccountLockSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettingsParticipantsToPlaceInWaitingRoomEnum {
    Zero = "0",
    One = "1",
    Two = "2"
}
/**
 * Specify the settings to be applied if waiting room is enabled.
 */
export declare class UpdateAccountLockSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
    /**
     *
     * @remarks
     *
     * Specify who should be admitted to the waiting room. The value of this field can be one of the following:<br>
     * `0`: All attendees<br> `1`: Users who are not in your account<br> `2`: Users who are not in your account and are not part of your whitelisted domains that are specified in
     */
    participantsToPlaceInWaitingRoom?: UpdateAccountLockSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettingsParticipantsToPlaceInWaitingRoomEnum;
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
export declare class UpdateAccountLockSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
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
    encryptionType?: UpdateAccountLockSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
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
    meetingPasswordRequirement?: UpdateAccountLockSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
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
    waitingRoomSettings?: UpdateAccountLockSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
    /**
     * If set to `true`, a passcode will be generated when scheduling a Webinar and participants require the passcode to join the Webinar.
     *
     * @remarks
     *
     */
    webinarPassword?: boolean;
}
export declare class UpdateAccountLockSettingsApplicationJSONMeetingWebinarSecuritySettings extends SpeakeasyBase {
    meetingSecurity?: UpdateAccountLockSettingsApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity;
}
export declare class UpdateAccountLockSettingsApplicationJson1EmailNotification extends SpeakeasyBase {
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
export declare class UpdateAccountLockSettingsApplicationJson1InMeeting extends SpeakeasyBase {
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
     * If set to `true`, account owners and admins on paid accounts can [select data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars) to use for hosting their real-time meeting and webinar traffic. These regions can be provided in the `data_center_regions` field in the account settings. If set to `false`, the regions cannot be customized and the default regions will be used.
     */
    customDataCenterRegions?: boolean;
    /**
     * Allow users to select stereo audio during a meeting.
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
     * Indicate whether the [**Request permission to unmute participants**](https://support.zoom.us/hc/en-us/articles/203435537-Muting-and-unmuting-participants-in-a-meeting#h_01EGK4XFWS1SJGZ71MYGKF7260) option should be enabled and locked for the account or not.
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
export declare class UpdateAccountLockSettingsApplicationJson1RecordingIpAddressAccessControl extends SpeakeasyBase {
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
export declare class UpdateAccountLockSettingsApplicationJson1Recording extends SpeakeasyBase {
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
    ipAddressAccessControl?: UpdateAccountLockSettingsApplicationJson1RecordingIpAddressAccessControl;
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
    recordingAuthentication?: string;
}
export declare class UpdateAccountLockSettingsApplicationJson1ScheduleMeeting extends SpeakeasyBase {
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
     * Participants must always sign in before joining the scheduled meeting.
     */
    enforceLogin?: boolean;
    enforceLoginDomains?: string;
    enforceLoginWithDomains?: boolean;
    /**
     * Start meetings with host video on.
     */
    hostVideo?: boolean;
    /**
     * Allow participants to join the meeting before the host arrives
     */
    joinBeforeHost?: boolean;
    meetingAuthentication?: boolean;
    notStoreMeetingTopic?: boolean;
    /**
     * Start meetings with participant video on.
     */
    participantVideo?: boolean;
    /**
     * Turn the lock setting on or off for the **Enable Personal Meeting ID** setting for an entire account.<br><br>
     *
     * @remarks
     * `true`: Turn the **"Enable Personal Meeting ID"** setting **on** for all users in the account. Users can choose to use personal meeting ID for their meetings. <br><br>
     * `false`: Turn **off** the **"Enable Personal Meeting ID"** setting. **If this setting is [disabled](https://support.zoom.us/hc/en-us/articles/201362843-Personal-meeting-ID-PMI-and-personal-link?flash_digest=eb7ac62d8c7fb4daf285916e3e15d87537806133#h_aa0335c8-3b06-41bc-bc1f-a8b84ef17f2a), meetings that were scheduled with PMI by the users in the account will be invalid. Users will have to update previously scheduled PMI meetings.**<br><br>
     * For Zoom Phone only: If a user has been assigned a desk phone, **"Elevate to Zoom Meeting"** on desk phone will be disabled.
     *
     *
     *
     */
    personalMeeting?: boolean;
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
export declare class UpdateAccountLockSettingsApplicationJson1Telephony extends SpeakeasyBase {
    telephonyRegions?: boolean;
    /**
     * Allow users to join the meeting using the existing 3rd party audio configuration.
     */
    thirdPartyAudio?: boolean;
}
export declare class UpdateAccountLockSettingsApplicationJson1Tsp extends SpeakeasyBase {
    callOut?: boolean;
    showInternationalNumbersLink?: boolean;
}
export declare class UpdateAccountLockSettingsApplicationJson1 extends SpeakeasyBase {
    emailNotification?: UpdateAccountLockSettingsApplicationJson1EmailNotification;
    inMeeting?: UpdateAccountLockSettingsApplicationJson1InMeeting;
    recording?: UpdateAccountLockSettingsApplicationJson1Recording;
    scheduleMeeting?: UpdateAccountLockSettingsApplicationJson1ScheduleMeeting;
    telephony?: UpdateAccountLockSettingsApplicationJson1Telephony;
    tsp?: UpdateAccountLockSettingsApplicationJson1Tsp;
}
export declare class UpdateAccountLockSettingsRequest extends SpeakeasyBase {
    requestBody?: any;
    /**
     * Unique Identifier of the account. To retrieve locked settings of the master account or a regular account, provide "me" as the value of this field. <br> To retrieve locked settings of a sub account, provide the Account ID of the sub account in this field.
     */
    accountId: string;
}
export declare class UpdateAccountLockSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **Error Code:** `200`<br>
     *
     * @remarks
     * Only available for Paid account: $accountId.
     *
     */
    updateAccountLockSettings200ApplicationJSONAny?: any;
    /**
     * **HTTP Status Code:** `204`<br>
     *
     * @remarks
     * Account lock settings updated.
     */
    updateAccountLockSettings204ApplicationJSONObject?: Record<string, any>;
}
