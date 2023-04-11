import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * `meeting_authentication`: Use this query parameter to view [meeting authentication configuration](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) applied on the account.<br>`recording_authentication`: Use this query parameter to view [recording authentication configuration](https://support.zoom.us/hc/en-us/articles/360037756671-Authentication-Profiles-for-Cloud-Recordings) applied on the account.<br>`security`: Use this query parameter to view security settings such as password requirements for user login, two factor authentication etc., applied on the account.<br>
 *
 * @remarks
 * `meeting_security`: Use this query parameter to view meeting security settings applied on the account.<br>
 */
export declare enum AccountSettingsOptionEnum {
    MeetingAuthentication = "meeting_authentication",
    RecordingAuthentication = "recording_authentication"
}
export declare class AccountSettingsRequest extends SpeakeasyBase {
    /**
     * The account ID.
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
     * `meeting_authentication`: Use this query parameter to view [meeting authentication configuration](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) applied on the account.<br>`recording_authentication`: Use this query parameter to view [recording authentication configuration](https://support.zoom.us/hc/en-us/articles/360037756671-Authentication-Profiles-for-Cloud-Recordings) applied on the account.<br>`security`: Use this query parameter to view security settings such as password requirements for user login, two factor authentication etc., applied on the account.<br>
     *
     * @remarks
     * `meeting_security`: Use this query parameter to view meeting security settings applied on the account.<br>
     */
    option?: AccountSettingsOptionEnum;
}
/**
 * Choose between enhanced encryption and [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) when starting or a meeting. When using end-to-end encryption, several features (e.g. cloud recording, phone/SIP/H.323 dial-in) will be **automatically disabled**. <br><br>The value of this field can be one of the following:<br>
 *
 * @remarks
 * `enhanced_encryption`: Enhanced encryption. Encryption is stored in the cloud if you enable this option. <br>
 *
 * `e2ee`: [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the following features: join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions.
 */
export declare enum AccountSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
export declare enum AccountSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirementConsecutiveCharactersLengthEnum {
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
export declare class AccountSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
    consecutiveCharactersLength?: AccountSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirementConsecutiveCharactersLengthEnum;
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
export declare enum AccountSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettingsParticipantsToPlaceInWaitingRoomEnum {
    Zero = "0",
    One = "1",
    Two = "2"
}
/**
 * Specify the settings to be applied if waiting room is enabled.
 */
export declare class AccountSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
    /**
     *
     * @remarks
     *
     * Specify who should be admitted to the waiting room. The value of this field can be one of the following:<br>
     * `0`: All attendees<br> `1`: Users who are not in your account<br> `2`: Users who are not in your account and are not part of your whitelisted domains that are specified in
     */
    participantsToPlaceInWaitingRoom?: AccountSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettingsParticipantsToPlaceInWaitingRoomEnum;
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
export declare class AccountSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
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
    encryptionType?: AccountSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
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
    meetingPasswordRequirement?: AccountSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
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
    waitingRoomSettings?: AccountSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
    /**
     * If set to `true`, a passcode will be generated when scheduling a Webinar and participants require the passcode to join the Webinar.
     *
     * @remarks
     *
     */
    webinarPassword?: boolean;
}
export declare class AccountSettings200ApplicationXMLMeetingWebinarSecuritySettings extends SpeakeasyBase {
    meetingSecurity?: AccountSettings200ApplicationXMLMeetingWebinarSecuritySettingsMeetingSecurity;
}
/**
 * This object refers to the [enhanced password rules](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) that allows Zoom account admins and owners to apply extra requiremets to the users' Zoom login password.
 */
export declare class AccountSettings200ApplicationXml3PasswordRequirement extends SpeakeasyBase {
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
export declare enum AccountSettings200ApplicationXml3SignInWithTwoFactorAuthEnum {
    All = "all",
    Group = "group",
    Role = "role",
    None = "none"
}
/**
 * [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
 */
export declare class AccountSettings200ApplicationXml3 extends SpeakeasyBase {
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
    passwordRequirement?: AccountSettings200ApplicationXml3PasswordRequirement;
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
    signInWithTwoFactorAuth?: AccountSettings200ApplicationXml3SignInWithTwoFactorAuthEnum;
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
 * Authentication type
 */
export declare enum AccountSettings200ApplicationXml2AccountSettingsAuthenticationAuthenticationOptionsTypeEnum1 {
    Internally = "internally",
    EnforceLogin = "enforce_login",
    EnforceLoginWithDomains = "enforce_login_with_domains"
}
export declare class AccountSettings200ApplicationXml2AccountSettingsAuthenticationAuthenticationOptions1 extends SpeakeasyBase {
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
    type?: AccountSettings200ApplicationXml2AccountSettingsAuthenticationAuthenticationOptionsTypeEnum1;
    /**
     * Authentication visible
     */
    visible?: boolean;
}
export declare class AccountSettings200ApplicationXml2AccountSettingsAuthentication1 extends SpeakeasyBase {
    authenticationOptions?: AccountSettings200ApplicationXml2AccountSettingsAuthenticationAuthenticationOptions1[];
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
export declare enum AccountSettings200ApplicationXml2AccountSettingsAuthenticationAuthenticationOptionsTypeEnum {
    EnforceLogin = "enforce_login",
    EnforceLoginWithSameAccount = "enforce_login_with_same_account",
    EnforceLoginWithDomains = "enforce_login_with_domains"
}
export declare class AccountSettings200ApplicationXml2AccountSettingsAuthenticationAuthenticationOptions extends SpeakeasyBase {
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
     *  Authentication type. Specify one of the following authentication types for the authentication profile:<br>
     *
     * @remarks
     *  * `enforce_login`: This option allows any users to join the meeting or webinar, as long as they are signed into their Zoom account.
     *  * `enforce_login_with_domains`: This option, allows you to specify a rule so that only those Zoom users whose email addresses contain a certain domain, can join the meeting or webinar. You can either add multiple domains using a comma in between and/or use a wildcard for listing domains.<br>
     *  * `enforce_login_with_same_account`: This option allows users to join the meeting or webinar with the same Zoom account.
     */
    type?: AccountSettings200ApplicationXml2AccountSettingsAuthenticationAuthenticationOptionsTypeEnum;
    /**
     * Authentication visible
     */
    visible?: boolean;
}
export declare class AccountSettings200ApplicationXml2AccountSettingsAuthentication extends SpeakeasyBase {
    /**
     * Meeting Authentication Options
     */
    authenticationOptions?: AccountSettings200ApplicationXml2AccountSettingsAuthenticationAuthenticationOptions[];
    /**
     * Only authenticated users can join meetings
     */
    meetingAuthentication?: boolean;
}
/**
 * Account Settings: Notification.
 */
export declare class AccountSettings200ApplicationXMLAccountSettingsEmailNotification extends SpeakeasyBase {
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
export declare class AccountSettings200ApplicationXMLAccountSettingsFeature extends SpeakeasyBase {
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
export declare enum AccountSettings200ApplicationXMLAccountSettingsInMeetingDataCenterRegionsEnum {
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
export declare enum AccountSettings200ApplicationXMLAccountSettingsInMeetingEntryExitChimeEnum {
    Host = "host",
    All = "all",
    None = "none"
}
export declare class AccountSettings200ApplicationXMLAccountSettingsInMeetingVirtualBackgroundSettingsFiles extends SpeakeasyBase {
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
export declare class AccountSettings200ApplicationXMLAccountSettingsInMeetingVirtualBackgroundSettings extends SpeakeasyBase {
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
    files?: AccountSettings200ApplicationXMLAccountSettingsInMeetingVirtualBackgroundSettingsFiles[];
}
/**
 * Indicates who can share their screen or content during meetings. The value can be one of the following: <br>
 *
 * @remarks
 * `host`: Only host can share the screen.<br>
 * `all`: Both hosts and attendees can share their screen during meetings. For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
 *
 */
export declare enum AccountSettings200ApplicationXMLAccountSettingsInMeetingWhoCanShareScreenEnum {
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
export declare enum AccountSettings200ApplicationXMLAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum {
    Host = "host",
    All = "all"
}
/**
 * Account Settings: In Meeting.
 */
export declare class AccountSettings200ApplicationXMLAccountSettingsInMeeting extends SpeakeasyBase {
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
    dataCenterRegions?: AccountSettings200ApplicationXMLAccountSettingsInMeetingDataCenterRegionsEnum;
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
    entryExitChime?: AccountSettings200ApplicationXMLAccountSettingsInMeetingEntryExitChimeEnum;
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
    virtualBackgroundSettings?: AccountSettings200ApplicationXMLAccountSettingsInMeetingVirtualBackgroundSettings;
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
    whoCanShareScreen?: AccountSettings200ApplicationXMLAccountSettingsInMeetingWhoCanShareScreenEnum;
    /**
     * Indicates who is allowed to start sharing screen when someone else in the meeting is sharing their screen. The value can be one of the following:<br>
     *
     * @remarks
     * `host`: Only a host can share the screen when someone else is sharing.<br>
     * `all`: Anyone in the meeting is allowed to start sharing their screen when someone else is sharing. For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
     *
     */
    whoCanShareScreenWhenSomeoneIsSharing?: AccountSettings200ApplicationXMLAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum;
    /**
     * Workplace by facebook.
     */
    workplaceByFacebook?: boolean;
}
/**
 * Account Settings: Integration.
 */
export declare class AccountSettings200ApplicationXMLAccountSettingsIntegration extends SpeakeasyBase {
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
export declare class AccountSettings200ApplicationXMLAccountSettingsProfileRecordingStorageLocation extends SpeakeasyBase {
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
export declare class AccountSettings200ApplicationXMLAccountSettingsProfile extends SpeakeasyBase {
    recordingStorageLocation?: AccountSettings200ApplicationXMLAccountSettingsProfileRecordingStorageLocation;
}
export declare class AccountSettings200ApplicationXMLAccountSettingsRecordingArchiveSettings extends SpeakeasyBase {
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
export declare enum AccountSettings200ApplicationXMLAccountSettingsRecordingArchiveTypeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
/**
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted with archiving solution access by the Zoom support team.
 */
export declare class AccountSettings200ApplicationXMLAccountSettingsRecordingArchive extends SpeakeasyBase {
    /**
     * Enable the archiving feature.
     */
    enable?: boolean;
    settings?: AccountSettings200ApplicationXMLAccountSettingsRecordingArchiveSettings;
    /**
     * Archive types:
     *
     * @remarks
     *
     * * `1`: Only meetings are archived.<br>
     * * `2`: Only webinars are archived.<br>
     * * `3`: Both meetings and webinars are archived.
     */
    type?: AccountSettings200ApplicationXMLAccountSettingsRecordingArchiveTypeEnum;
}
/**
 * Automatic recording:<br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
 */
export declare enum AccountSettings200ApplicationXMLAccountSettingsRecordingAutoRecordingEnum {
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
export declare class AccountSettings200ApplicationXMLAccountSettingsRecordingIpAddressAccessControl extends SpeakeasyBase {
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
export declare class AccountSettings200ApplicationXMLAccountSettingsRecordingRecordingPasswordRequirement extends SpeakeasyBase {
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
export declare class AccountSettings200ApplicationXMLAccountSettingsRecording extends SpeakeasyBase {
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
    archive?: AccountSettings200ApplicationXMLAccountSettingsRecordingArchive;
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
    autoRecording?: AccountSettings200ApplicationXMLAccountSettingsRecordingAutoRecordingEnum;
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
    ipAddressAccessControl?: AccountSettings200ApplicationXMLAccountSettingsRecordingIpAddressAccessControl;
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
    recordingPasswordRequirement?: AccountSettings200ApplicationXMLAccountSettingsRecordingRecordingPasswordRequirement;
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
export declare enum AccountSettings200ApplicationXMLAccountSettingsScheduleMeetingAudioTypeEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip",
    ThirdParty = "thirdParty"
}
export declare enum AccountSettings200ApplicationXMLAccountSettingsScheduleMeetingMeetingPasswordRequirementConsecutiveCharactersLengthEnum {
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
export declare class AccountSettings200ApplicationXMLAccountSettingsScheduleMeetingMeetingPasswordRequirement extends SpeakeasyBase {
    consecutiveCharactersLength?: AccountSettings200ApplicationXMLAccountSettingsScheduleMeetingMeetingPasswordRequirementConsecutiveCharactersLengthEnum;
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
export declare enum AccountSettings200ApplicationXMLAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum {
    JbhOnly = "jbh_only",
    All = "all",
    None = "none"
}
/**
 * Account Settings: Schedule Meeting.
 */
export declare class AccountSettings200ApplicationXMLAccountSettingsScheduleMeeting extends SpeakeasyBase {
    /**
     * Determine how participants can join the audio portion of the meeting.<br>`both` - Telephony and VoIP.<br>`telephony` - Audio PSTN telephony only.<br>`voip` - VoIP only.<br>`thirdParty` - 3rd party audio conference.
     */
    audioType?: AccountSettings200ApplicationXMLAccountSettingsScheduleMeetingAudioTypeEnum;
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
    meetingPasswordRequirement?: AccountSettings200ApplicationXMLAccountSettingsScheduleMeetingMeetingPasswordRequirement;
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
    requirePasswordForPmiMeetings?: AccountSettings200ApplicationXMLAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum;
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
export declare class AccountSettings200ApplicationXMLAccountSettingsSecurityPasswordRequirement extends SpeakeasyBase {
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
export declare enum AccountSettings200ApplicationXMLAccountSettingsSecuritySignInWithTwoFactorAuthEnum {
    All = "all",
    Group = "group",
    Role = "role",
    None = "none"
}
/**
 * [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
 */
export declare class AccountSettings200ApplicationXMLAccountSettingsSecurity extends SpeakeasyBase {
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
    passwordRequirement?: AccountSettings200ApplicationXMLAccountSettingsSecurityPasswordRequirement;
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
    signInWithTwoFactorAuth?: AccountSettings200ApplicationXMLAccountSettingsSecuritySignInWithTwoFactorAuthEnum;
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
export declare class AccountSettings200ApplicationXMLAccountSettingsTelephonyTelephonyRegions extends SpeakeasyBase {
    /**
     * Telephony region options provided by Zoom to select from.
     */
    allowedValues?: string[];
    /**
     * Telephony regions selected by the account to indicate where most of the participants call into or call from during a meeting.
     */
    selectionValues?: string[];
}
/**
 * Account Settings: Telephony.
 */
export declare class AccountSettings200ApplicationXMLAccountSettingsTelephony extends SpeakeasyBase {
    /**
     * Third party audio conference info.
     */
    audioConferenceInfo?: string;
    /**
     * Indicates where most of the participants call into or call from duriing a meeting.
     */
    telephonyRegions?: AccountSettings200ApplicationXMLAccountSettingsTelephonyTelephonyRegions;
    /**
     * Users can join the meeting using the existing third party audio configuration.
     */
    thirdPartyAudio?: boolean;
}
/**
 * Account Settings: TSP.
 */
export declare class AccountSettings200ApplicationXMLAccountSettingsTsp extends SpeakeasyBase {
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
export declare class AccountSettings200ApplicationXMLAccountSettingsZoomRooms extends SpeakeasyBase {
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
export declare class AccountSettings200ApplicationXMLAccountSettings extends SpeakeasyBase {
    /**
     * Account Settings: Notification.
     */
    emailNotification?: AccountSettings200ApplicationXMLAccountSettingsEmailNotification;
    /**
     * Account Settings: Feature.
     */
    feature?: AccountSettings200ApplicationXMLAccountSettingsFeature;
    /**
     * Account Settings: In Meeting.
     */
    inMeeting?: AccountSettings200ApplicationXMLAccountSettingsInMeeting;
    /**
     * Account Settings: Integration.
     */
    integration?: AccountSettings200ApplicationXMLAccountSettingsIntegration;
    profile?: AccountSettings200ApplicationXMLAccountSettingsProfile;
    /**
     * Account Settings: Recording.
     */
    recording?: AccountSettings200ApplicationXMLAccountSettingsRecording;
    /**
     * Account Settings: Schedule Meeting.
     */
    scheduleMeeting?: AccountSettings200ApplicationXMLAccountSettingsScheduleMeeting;
    /**
     * [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
     */
    security?: AccountSettings200ApplicationXMLAccountSettingsSecurity;
    /**
     * Account Settings: Telephony.
     */
    telephony?: AccountSettings200ApplicationXMLAccountSettingsTelephony;
    /**
     * Account Settings: TSP.
     */
    tsp?: AccountSettings200ApplicationXMLAccountSettingsTsp;
    /**
     * Account Settings: Zoom Rooms.
     */
    zoomRooms?: AccountSettings200ApplicationXMLAccountSettingsZoomRooms;
}
/**
 * Choose between enhanced encryption and [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) when starting or a meeting. When using end-to-end encryption, several features (e.g. cloud recording, phone/SIP/H.323 dial-in) will be **automatically disabled**. <br><br>The value of this field can be one of the following:<br>
 *
 * @remarks
 * `enhanced_encryption`: Enhanced encryption. Encryption is stored in the cloud if you enable this option. <br>
 *
 * `e2ee`: [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the following features: join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions.
 */
export declare enum AccountSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
export declare enum AccountSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirementConsecutiveCharactersLengthEnum {
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
export declare class AccountSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
    consecutiveCharactersLength?: AccountSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirementConsecutiveCharactersLengthEnum;
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
export declare enum AccountSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettingsParticipantsToPlaceInWaitingRoomEnum {
    Zero = "0",
    One = "1",
    Two = "2"
}
/**
 * Specify the settings to be applied if waiting room is enabled.
 */
export declare class AccountSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
    /**
     *
     * @remarks
     *
     * Specify who should be admitted to the waiting room. The value of this field can be one of the following:<br>
     * `0`: All attendees<br> `1`: Users who are not in your account<br> `2`: Users who are not in your account and are not part of your whitelisted domains that are specified in
     */
    participantsToPlaceInWaitingRoom?: AccountSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettingsParticipantsToPlaceInWaitingRoomEnum;
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
export declare class AccountSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
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
    encryptionType?: AccountSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
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
    meetingPasswordRequirement?: AccountSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
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
    waitingRoomSettings?: AccountSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
    /**
     * If set to `true`, a passcode will be generated when scheduling a Webinar and participants require the passcode to join the Webinar.
     *
     * @remarks
     *
     */
    webinarPassword?: boolean;
}
export declare class AccountSettings200ApplicationJSONMeetingWebinarSecuritySettings extends SpeakeasyBase {
    meetingSecurity?: AccountSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity;
}
/**
 * This object refers to the [enhanced password rules](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) that allows Zoom account admins and owners to apply extra requiremets to the users' Zoom login password.
 */
export declare class AccountSettings200ApplicationJson3PasswordRequirement extends SpeakeasyBase {
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
export declare enum AccountSettings200ApplicationJson3SignInWithTwoFactorAuthEnum {
    All = "all",
    Group = "group",
    Role = "role",
    None = "none"
}
/**
 * [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
 */
export declare class AccountSettings200ApplicationJson3 extends SpeakeasyBase {
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
    passwordRequirement?: AccountSettings200ApplicationJson3PasswordRequirement;
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
    signInWithTwoFactorAuth?: AccountSettings200ApplicationJson3SignInWithTwoFactorAuthEnum;
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
 * Authentication type
 */
export declare enum AccountSettings200ApplicationJson2AccountSettingsAuthenticationAuthenticationOptionsTypeEnum1 {
    Internally = "internally",
    EnforceLogin = "enforce_login",
    EnforceLoginWithDomains = "enforce_login_with_domains"
}
export declare class AccountSettings200ApplicationJson2AccountSettingsAuthenticationAuthenticationOptions1 extends SpeakeasyBase {
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
    type?: AccountSettings200ApplicationJson2AccountSettingsAuthenticationAuthenticationOptionsTypeEnum1;
    /**
     * Authentication visible
     */
    visible?: boolean;
}
export declare class AccountSettings200ApplicationJson2AccountSettingsAuthentication1 extends SpeakeasyBase {
    authenticationOptions?: AccountSettings200ApplicationJson2AccountSettingsAuthenticationAuthenticationOptions1[];
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
export declare enum AccountSettings200ApplicationJson2AccountSettingsAuthenticationAuthenticationOptionsTypeEnum {
    EnforceLogin = "enforce_login",
    EnforceLoginWithSameAccount = "enforce_login_with_same_account",
    EnforceLoginWithDomains = "enforce_login_with_domains"
}
export declare class AccountSettings200ApplicationJson2AccountSettingsAuthenticationAuthenticationOptions extends SpeakeasyBase {
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
     *  Authentication type. Specify one of the following authentication types for the authentication profile:<br>
     *
     * @remarks
     *  * `enforce_login`: This option allows any users to join the meeting or webinar, as long as they are signed into their Zoom account.
     *  * `enforce_login_with_domains`: This option, allows you to specify a rule so that only those Zoom users whose email addresses contain a certain domain, can join the meeting or webinar. You can either add multiple domains using a comma in between and/or use a wildcard for listing domains.<br>
     *  * `enforce_login_with_same_account`: This option allows users to join the meeting or webinar with the same Zoom account.
     */
    type?: AccountSettings200ApplicationJson2AccountSettingsAuthenticationAuthenticationOptionsTypeEnum;
    /**
     * Authentication visible
     */
    visible?: boolean;
}
export declare class AccountSettings200ApplicationJson2AccountSettingsAuthentication extends SpeakeasyBase {
    /**
     * Meeting Authentication Options
     */
    authenticationOptions?: AccountSettings200ApplicationJson2AccountSettingsAuthenticationAuthenticationOptions[];
    /**
     * Only authenticated users can join meetings
     */
    meetingAuthentication?: boolean;
}
/**
 * Account Settings: Notification.
 */
export declare class AccountSettings200ApplicationJSONAccountSettingsEmailNotification extends SpeakeasyBase {
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
export declare class AccountSettings200ApplicationJSONAccountSettingsFeature extends SpeakeasyBase {
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
export declare enum AccountSettings200ApplicationJSONAccountSettingsInMeetingDataCenterRegionsEnum {
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
export declare enum AccountSettings200ApplicationJSONAccountSettingsInMeetingEntryExitChimeEnum {
    Host = "host",
    All = "all",
    None = "none"
}
export declare class AccountSettings200ApplicationJSONAccountSettingsInMeetingVirtualBackgroundSettingsFiles extends SpeakeasyBase {
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
export declare class AccountSettings200ApplicationJSONAccountSettingsInMeetingVirtualBackgroundSettings extends SpeakeasyBase {
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
    files?: AccountSettings200ApplicationJSONAccountSettingsInMeetingVirtualBackgroundSettingsFiles[];
}
/**
 * Indicates who can share their screen or content during meetings. The value can be one of the following: <br>
 *
 * @remarks
 * `host`: Only host can share the screen.<br>
 * `all`: Both hosts and attendees can share their screen during meetings. For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
 *
 */
export declare enum AccountSettings200ApplicationJSONAccountSettingsInMeetingWhoCanShareScreenEnum {
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
export declare enum AccountSettings200ApplicationJSONAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum {
    Host = "host",
    All = "all"
}
/**
 * Account Settings: In Meeting.
 */
export declare class AccountSettings200ApplicationJSONAccountSettingsInMeeting extends SpeakeasyBase {
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
    dataCenterRegions?: AccountSettings200ApplicationJSONAccountSettingsInMeetingDataCenterRegionsEnum;
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
    entryExitChime?: AccountSettings200ApplicationJSONAccountSettingsInMeetingEntryExitChimeEnum;
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
    virtualBackgroundSettings?: AccountSettings200ApplicationJSONAccountSettingsInMeetingVirtualBackgroundSettings;
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
    whoCanShareScreen?: AccountSettings200ApplicationJSONAccountSettingsInMeetingWhoCanShareScreenEnum;
    /**
     * Indicates who is allowed to start sharing screen when someone else in the meeting is sharing their screen. The value can be one of the following:<br>
     *
     * @remarks
     * `host`: Only a host can share the screen when someone else is sharing.<br>
     * `all`: Anyone in the meeting is allowed to start sharing their screen when someone else is sharing. For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
     *
     */
    whoCanShareScreenWhenSomeoneIsSharing?: AccountSettings200ApplicationJSONAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum;
    /**
     * Workplace by facebook.
     */
    workplaceByFacebook?: boolean;
}
/**
 * Account Settings: Integration.
 */
export declare class AccountSettings200ApplicationJSONAccountSettingsIntegration extends SpeakeasyBase {
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
export declare class AccountSettings200ApplicationJSONAccountSettingsProfileRecordingStorageLocation extends SpeakeasyBase {
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
export declare class AccountSettings200ApplicationJSONAccountSettingsProfile extends SpeakeasyBase {
    recordingStorageLocation?: AccountSettings200ApplicationJSONAccountSettingsProfileRecordingStorageLocation;
}
export declare class AccountSettings200ApplicationJSONAccountSettingsRecordingArchiveSettings extends SpeakeasyBase {
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
export declare enum AccountSettings200ApplicationJSONAccountSettingsRecordingArchiveTypeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
/**
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted with archiving solution access by the Zoom support team.
 */
export declare class AccountSettings200ApplicationJSONAccountSettingsRecordingArchive extends SpeakeasyBase {
    /**
     * Enable the archiving feature.
     */
    enable?: boolean;
    settings?: AccountSettings200ApplicationJSONAccountSettingsRecordingArchiveSettings;
    /**
     * Archive types:
     *
     * @remarks
     *
     * * `1`: Only meetings are archived.<br>
     * * `2`: Only webinars are archived.<br>
     * * `3`: Both meetings and webinars are archived.
     */
    type?: AccountSettings200ApplicationJSONAccountSettingsRecordingArchiveTypeEnum;
}
/**
 * Automatic recording:<br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
 */
export declare enum AccountSettings200ApplicationJSONAccountSettingsRecordingAutoRecordingEnum {
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
export declare class AccountSettings200ApplicationJSONAccountSettingsRecordingIpAddressAccessControl extends SpeakeasyBase {
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
export declare class AccountSettings200ApplicationJSONAccountSettingsRecordingRecordingPasswordRequirement extends SpeakeasyBase {
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
export declare class AccountSettings200ApplicationJSONAccountSettingsRecording extends SpeakeasyBase {
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
    archive?: AccountSettings200ApplicationJSONAccountSettingsRecordingArchive;
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
    autoRecording?: AccountSettings200ApplicationJSONAccountSettingsRecordingAutoRecordingEnum;
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
    ipAddressAccessControl?: AccountSettings200ApplicationJSONAccountSettingsRecordingIpAddressAccessControl;
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
    recordingPasswordRequirement?: AccountSettings200ApplicationJSONAccountSettingsRecordingRecordingPasswordRequirement;
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
export declare enum AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingAudioTypeEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip",
    ThirdParty = "thirdParty"
}
export declare enum AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingMeetingPasswordRequirementConsecutiveCharactersLengthEnum {
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
export declare class AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingMeetingPasswordRequirement extends SpeakeasyBase {
    consecutiveCharactersLength?: AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingMeetingPasswordRequirementConsecutiveCharactersLengthEnum;
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
export declare enum AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum {
    JbhOnly = "jbh_only",
    All = "all",
    None = "none"
}
/**
 * Account Settings: Schedule Meeting.
 */
export declare class AccountSettings200ApplicationJSONAccountSettingsScheduleMeeting extends SpeakeasyBase {
    /**
     * Determine how participants can join the audio portion of the meeting.<br>`both` - Telephony and VoIP.<br>`telephony` - Audio PSTN telephony only.<br>`voip` - VoIP only.<br>`thirdParty` - 3rd party audio conference.
     */
    audioType?: AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingAudioTypeEnum;
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
    meetingPasswordRequirement?: AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingMeetingPasswordRequirement;
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
    requirePasswordForPmiMeetings?: AccountSettings200ApplicationJSONAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum;
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
export declare class AccountSettings200ApplicationJSONAccountSettingsSecurityPasswordRequirement extends SpeakeasyBase {
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
export declare enum AccountSettings200ApplicationJSONAccountSettingsSecuritySignInWithTwoFactorAuthEnum {
    All = "all",
    Group = "group",
    Role = "role",
    None = "none"
}
/**
 * [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
 */
export declare class AccountSettings200ApplicationJSONAccountSettingsSecurity extends SpeakeasyBase {
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
    passwordRequirement?: AccountSettings200ApplicationJSONAccountSettingsSecurityPasswordRequirement;
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
    signInWithTwoFactorAuth?: AccountSettings200ApplicationJSONAccountSettingsSecuritySignInWithTwoFactorAuthEnum;
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
export declare class AccountSettings200ApplicationJSONAccountSettingsTelephonyTelephonyRegions extends SpeakeasyBase {
    /**
     * Telephony region options provided by Zoom to select from.
     */
    allowedValues?: string[];
    /**
     * Telephony regions selected by the account to indicate where most of the participants call into or call from during a meeting.
     */
    selectionValues?: string[];
}
/**
 * Account Settings: Telephony.
 */
export declare class AccountSettings200ApplicationJSONAccountSettingsTelephony extends SpeakeasyBase {
    /**
     * Third party audio conference info.
     */
    audioConferenceInfo?: string;
    /**
     * Indicates where most of the participants call into or call from duriing a meeting.
     */
    telephonyRegions?: AccountSettings200ApplicationJSONAccountSettingsTelephonyTelephonyRegions;
    /**
     * Users can join the meeting using the existing third party audio configuration.
     */
    thirdPartyAudio?: boolean;
}
/**
 * Account Settings: TSP.
 */
export declare class AccountSettings200ApplicationJSONAccountSettingsTsp extends SpeakeasyBase {
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
export declare class AccountSettings200ApplicationJSONAccountSettingsZoomRooms extends SpeakeasyBase {
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
export declare class AccountSettings200ApplicationJSONAccountSettings extends SpeakeasyBase {
    /**
     * Account Settings: Notification.
     */
    emailNotification?: AccountSettings200ApplicationJSONAccountSettingsEmailNotification;
    /**
     * Account Settings: Feature.
     */
    feature?: AccountSettings200ApplicationJSONAccountSettingsFeature;
    /**
     * Account Settings: In Meeting.
     */
    inMeeting?: AccountSettings200ApplicationJSONAccountSettingsInMeeting;
    /**
     * Account Settings: Integration.
     */
    integration?: AccountSettings200ApplicationJSONAccountSettingsIntegration;
    profile?: AccountSettings200ApplicationJSONAccountSettingsProfile;
    /**
     * Account Settings: Recording.
     */
    recording?: AccountSettings200ApplicationJSONAccountSettingsRecording;
    /**
     * Account Settings: Schedule Meeting.
     */
    scheduleMeeting?: AccountSettings200ApplicationJSONAccountSettingsScheduleMeeting;
    /**
     * [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
     */
    security?: AccountSettings200ApplicationJSONAccountSettingsSecurity;
    /**
     * Account Settings: Telephony.
     */
    telephony?: AccountSettings200ApplicationJSONAccountSettingsTelephony;
    /**
     * Account Settings: TSP.
     */
    tsp?: AccountSettings200ApplicationJSONAccountSettingsTsp;
    /**
     * Account Settings: Zoom Rooms.
     */
    zoomRooms?: AccountSettings200ApplicationJSONAccountSettingsZoomRooms;
}
export declare class AccountSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br> Account settings returned.
     *
     * @remarks
     * **Error Code:** `200`<br>
     * Only available for Paid account.
     */
    accountSettings200ApplicationJSONOneOf?: any;
}
