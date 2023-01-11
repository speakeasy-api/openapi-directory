import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountSettingsPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare enum AccountSettingsOptionEnum {
    MeetingAuthentication = "meeting_authentication",
    RecordingAuthentication = "recording_authentication"
}
export declare class AccountSettingsQueryParams extends SpeakeasyBase {
    customQueryFields?: string;
    option?: AccountSettingsOptionEnum;
}
/**
 * Account Settings: Notification.
**/
export declare class AccountSettings200ApplicationJsonAccountSettingsEmailNotification extends SpeakeasyBase {
    alternativeHostReminder?: boolean;
    cancelMeetingReminder?: boolean;
    cloudRecordingAvaliableReminder?: boolean;
    jbhReminder?: boolean;
    lowHostCountReminder?: boolean;
    scheduleForReminder?: boolean;
}
/**
 * Account Settings: Feature.
**/
export declare class AccountSettings200ApplicationJsonAccountSettingsFeature extends SpeakeasyBase {
    meetingCapacity?: number;
}
export declare enum AccountSettings200ApplicationJsonAccountSettingsInMeetingEntryExitChimeEnum {
    Host = "host",
    All = "all",
    None = "none"
}
export declare class AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettingsFiles extends SpeakeasyBase {
    id?: string;
    isDefault?: boolean;
    name?: string;
    size?: string;
    type?: string;
}
/**
 * Settings to manage virtual background.
**/
export declare class AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettings extends SpeakeasyBase {
    allowUploadCustom?: boolean;
    allowVideos?: boolean;
    enable?: boolean;
    files?: AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettingsFiles[];
}
export declare enum AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenEnum {
    Host = "host",
    All = "all"
}
export declare enum AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum {
    Host = "host",
    All = "all"
}
/**
 * Account Settings: In Meeting.
**/
export declare class AccountSettings200ApplicationJsonAccountSettingsInMeeting extends SpeakeasyBase {
    alertGuestJoin?: boolean;
    allowLiveStreaming?: boolean;
    allowParticipantsToRename?: boolean;
    allowShowZoomWindows?: boolean;
    annotation?: boolean;
    anonymousQuestionAnswer?: boolean;
    attendeeOnHold?: boolean;
    autoAnswer?: boolean;
    autoSavingChat?: boolean;
    breakoutRoom?: boolean;
    chat?: boolean;
    closedCaption?: boolean;
    coHost?: boolean;
    customDataCenterRegions?: boolean;
    customLiveStreamingService?: boolean;
    customServiceInstructions?: string;
    dataCenterRegions?: string[];
    dscpAudio?: number;
    dscpMarking?: boolean;
    dscpVideo?: number;
    e2eEncryption?: boolean;
    entryExitChime?: AccountSettings200ApplicationJsonAccountSettingsInMeetingEntryExitChimeEnum;
    farEndCameraControl?: boolean;
    feedback?: boolean;
    fileTransfer?: boolean;
    groupHd?: boolean;
    meetingReactions?: boolean;
    originalAudio?: boolean;
    p2pConnetion?: boolean;
    p2pPorts?: boolean;
    polling?: boolean;
    portsRange?: string;
    postMeetingFeedback?: boolean;
    privateChat?: boolean;
    recordPlayOwnVoice?: boolean;
    remoteControl?: boolean;
    requestPermissionToUnmute?: boolean;
    screenSharing?: boolean;
    sendingDefaultEmailInvites?: boolean;
    showAJoinFromYourBrowserLink?: boolean;
    showMeetingControlToolbar?: boolean;
    stereoAudio?: boolean;
    useHtmlFormatEmail?: boolean;
    virtualBackground?: boolean;
    virtualBackgroundSettings?: AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettings;
    watermark?: boolean;
    webinarQuestionAnswer?: boolean;
    whiteboard?: boolean;
    whoCanShareScreen?: AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenEnum;
    whoCanShareScreenWhenSomeoneIsSharing?: AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum;
    workplaceByFacebook?: boolean;
}
/**
 * Account Settings: Integration.
**/
export declare class AccountSettings200ApplicationJsonAccountSettingsIntegration extends SpeakeasyBase {
    box?: boolean;
    dropbox?: boolean;
    googleCalendar?: boolean;
    googleDrive?: boolean;
    kubi?: boolean;
    microsoftOneDrive?: boolean;
}
export declare class AccountSettings200ApplicationJsonAccountSettingsProfileRecordingStorageLocation extends SpeakeasyBase {
    allowedValues?: string[];
    value?: string;
}
export declare class AccountSettings200ApplicationJsonAccountSettingsProfile extends SpeakeasyBase {
    recordingStorageLocation?: AccountSettings200ApplicationJsonAccountSettingsProfileRecordingStorageLocation;
}
export declare class AccountSettings200ApplicationJsonAccountSettingsRecordingArchiveSettings extends SpeakeasyBase {
    audioFile?: boolean;
    ccTranscriptFile?: boolean;
    chatFile?: boolean;
    chatWithSenderEmail?: boolean;
    videoFile?: boolean;
}
/**
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted with archiving solution access by the Zoom support team.
**/
export declare class AccountSettings200ApplicationJsonAccountSettingsRecordingArchive extends SpeakeasyBase {
    enable?: boolean;
    settings?: AccountSettings200ApplicationJsonAccountSettingsRecordingArchiveSettings;
    type?: number;
}
export declare enum AccountSettings200ApplicationJsonAccountSettingsRecordingAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
**/
export declare class AccountSettings200ApplicationJsonAccountSettingsRecordingIpAddressAccessControl extends SpeakeasyBase {
    enable?: boolean;
    ipAddressesOrRanges?: string;
}
/**
 * This object represents the minimum password requirements set for recordings via Account Recording Settings.
**/
export declare class AccountSettings200ApplicationJsonAccountSettingsRecordingRecordingPasswordRequirement extends SpeakeasyBase {
    haveLetter?: boolean;
    haveNumber?: boolean;
    haveSpecialCharacter?: boolean;
    length?: number;
    onlyAllowNumeric?: boolean;
}
/**
 * Account Settings: Recording.
**/
export declare class AccountSettings200ApplicationJsonAccountSettingsRecording extends SpeakeasyBase {
    accountUserAccessRecording?: boolean;
    allowRecoveryDeletedCloudRecordings?: boolean;
    archive?: AccountSettings200ApplicationJsonAccountSettingsRecordingArchive;
    autoDeleteCmr?: boolean;
    autoDeleteCmrDays?: number;
    autoRecording?: AccountSettings200ApplicationJsonAccountSettingsRecordingAutoRecordingEnum;
    cloudRecording?: boolean;
    cloudRecordingDownload?: boolean;
    cloudRecordingDownloadHost?: boolean;
    hostDeleteCloudRecording?: boolean;
    ipAddressAccessControl?: AccountSettings200ApplicationJsonAccountSettingsRecordingIpAddressAccessControl;
    localRecording?: boolean;
    preventHostAccessRecording?: boolean;
    recordAudioFile?: boolean;
    recordGalleryView?: boolean;
    recordSpeakerView?: boolean;
    recordingAudioTranscript?: boolean;
    recordingDisclaimer?: boolean;
    recordingPasswordRequirement?: AccountSettings200ApplicationJsonAccountSettingsRecordingRecordingPasswordRequirement;
    requiredPasswordForExistingCloudRecordings?: boolean;
    saveChatText?: boolean;
    showTimestamp?: boolean;
}
export declare enum AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingAudioTypeEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip",
    ThirdParty = "thirdParty"
}
/**
 * Account wide meeting/webinar [password requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export declare class AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingMeetingPasswordRequirement extends SpeakeasyBase {
    consecutiveCharactersLength?: number;
    haveLetter?: boolean;
    haveNumber?: boolean;
    haveSpecialCharacter?: boolean;
    haveUpperAndLowerCharacters?: boolean;
    length?: number;
    onlyAllowNumeric?: boolean;
    weakEnhanceDetection?: boolean;
}
export declare enum AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum {
    JbhOnly = "jbh_only",
    All = "all",
    None = "none"
}
/**
 * Account Settings: Schedule Meeting.
**/
export declare class AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting extends SpeakeasyBase {
    audioType?: AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingAudioTypeEnum;
    enforceLogin?: boolean;
    enforceLoginDomains?: string;
    enforceLoginWithDomains?: boolean;
    forcePmiJbhPassword?: boolean;
    hostVideo?: boolean;
    joinBeforeHost?: boolean;
    meetingPasswordRequirement?: AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingMeetingPasswordRequirement;
    notStoreMeetingTopic?: boolean;
    participantVideo?: boolean;
    personalMeeting?: boolean;
    requirePasswordForInstantMeetings?: boolean;
    requirePasswordForPmiMeetings?: AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum;
    requirePasswordForScheduledMeetings?: boolean;
    requirePasswordForSchedulingNewMeetings?: boolean;
    usePmiForInstantMeetings?: boolean;
    usePmiForScheduledMeetings?: boolean;
}
/**
 * This object refers to the [enhanced password rules](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) that allows Zoom account admins and owners to apply extra requiremets to the users' Zoom login password.
**/
export declare class AccountSettings200ApplicationJsonAccountSettingsSecurityPasswordRequirement extends SpeakeasyBase {
    consecutiveCharactersLength?: number;
    haveSpecialCharacter?: boolean;
    minimumPasswordLength?: number;
    weakEnhanceDetection?: boolean;
}
export declare enum AccountSettings200ApplicationJsonAccountSettingsSecuritySignInWithTwoFactorAuthEnum {
    All = "all",
    Group = "group",
    Role = "role",
    None = "none"
}
/**
 * [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
**/
export declare class AccountSettings200ApplicationJsonAccountSettingsSecurity extends SpeakeasyBase {
    adminChangeNamePic?: boolean;
    hideBillingInfo?: boolean;
    importPhotosFromDevices?: boolean;
    passwordRequirement?: AccountSettings200ApplicationJsonAccountSettingsSecurityPasswordRequirement;
    signAgainPeriodForInactivityOnClient?: number;
    signAgainPeriodForInactivityOnWeb?: number;
    signInWithTwoFactorAuth?: AccountSettings200ApplicationJsonAccountSettingsSecuritySignInWithTwoFactorAuthEnum;
    signInWithTwoFactorAuthGroups?: string[];
    signInWithTwoFactorAuthRoles?: string[];
}
/**
 * Indicates where most of the participants call into or call from duriing a meeting.
**/
export declare class AccountSettings200ApplicationJsonAccountSettingsTelephonyTelephonyRegions extends SpeakeasyBase {
    allowedValues?: string[];
    selectionValues?: string[];
}
/**
 * Account Settings: Telephony.
**/
export declare class AccountSettings200ApplicationJsonAccountSettingsTelephony extends SpeakeasyBase {
    audioConferenceInfo?: string;
    telephonyRegions?: AccountSettings200ApplicationJsonAccountSettingsTelephonyTelephonyRegions;
    thirdPartyAudio?: boolean;
}
/**
 * Account Settings: TSP.
**/
export declare class AccountSettings200ApplicationJsonAccountSettingsTsp extends SpeakeasyBase {
    callOut?: boolean;
    callOutCountries?: any[];
    displayTollFreeNumbers?: boolean;
    showInternationalNumbersLink?: boolean;
}
/**
 * Account Settings: Zoom Rooms.
**/
export declare class AccountSettings200ApplicationJsonAccountSettingsZoomRooms extends SpeakeasyBase {
    autoStartStopScheduledMeetings?: boolean;
    cmrForInstantMeeting?: boolean;
    forcePrivateMeeting?: boolean;
    hideHostInformation?: boolean;
    listMeetingsWithCalendar?: boolean;
    startAirplayManually?: boolean;
    ultrasonic?: boolean;
    upcomingMeetingAlert?: boolean;
    weeklySystemRestart?: boolean;
    zrPostMeetingFeedback?: boolean;
}
export declare class AccountSettings200ApplicationJsonAccountSettings extends SpeakeasyBase {
    emailNotification?: AccountSettings200ApplicationJsonAccountSettingsEmailNotification;
    feature?: AccountSettings200ApplicationJsonAccountSettingsFeature;
    inMeeting?: AccountSettings200ApplicationJsonAccountSettingsInMeeting;
    integration?: AccountSettings200ApplicationJsonAccountSettingsIntegration;
    profile?: AccountSettings200ApplicationJsonAccountSettingsProfile;
    recording?: AccountSettings200ApplicationJsonAccountSettingsRecording;
    scheduleMeeting?: AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting;
    security?: AccountSettings200ApplicationJsonAccountSettingsSecurity;
    telephony?: AccountSettings200ApplicationJsonAccountSettingsTelephony;
    tsp?: AccountSettings200ApplicationJsonAccountSettingsTsp;
    zoomRooms?: AccountSettings200ApplicationJsonAccountSettingsZoomRooms;
}
/**
 * This object refers to the [enhanced password rules](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) that allows Zoom account admins and owners to apply extra requiremets to the users' Zoom login password.
**/
export declare class AccountSettings200ApplicationJson3PasswordRequirement extends SpeakeasyBase {
    consecutiveCharactersLength?: number;
    haveSpecialCharacter?: boolean;
    minimumPasswordLength?: number;
    weakEnhanceDetection?: boolean;
}
export declare enum AccountSettings200ApplicationJson3SignInWithTwoFactorAuthEnum {
    All = "all",
    Group = "group",
    Role = "role",
    None = "none"
}
/**
 * [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
**/
export declare class AccountSettings200ApplicationJson3 extends SpeakeasyBase {
    adminChangeNamePic?: boolean;
    hideBillingInfo?: boolean;
    importPhotosFromDevices?: boolean;
    passwordRequirement?: AccountSettings200ApplicationJson3PasswordRequirement;
    signAgainPeriodForInactivityOnClient?: number;
    signAgainPeriodForInactivityOnWeb?: number;
    signInWithTwoFactorAuth?: AccountSettings200ApplicationJson3SignInWithTwoFactorAuthEnum;
    signInWithTwoFactorAuthGroups?: string[];
    signInWithTwoFactorAuthRoles?: string[];
}
export declare enum AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
/**
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export declare class AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
    consecutiveCharactersLength?: number;
    haveLetter?: boolean;
    haveNumber?: boolean;
    haveSpecialCharacter?: boolean;
    haveUpperAndLowerCharacters?: boolean;
    length?: number;
    onlyAllowNumeric?: boolean;
    weakEnhanceDetection?: boolean;
}
/**
 * Specify the settings to be applied if waiting room is enabled.
**/
export declare class AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
    participantsToPlaceInWaitingRoom?: number;
    usersWhoCanAdmitParticipantsFromWaitingRoom?: number;
    whitelistedDomainsForWaitingRoom?: string;
}
export declare class AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
    autoSecurity?: boolean;
    embedPasswordInJoinLink?: boolean;
    encryptionType?: AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
    endToEndEncryptedMeetings?: boolean;
    meetingPassword?: boolean;
    meetingPasswordRequirement?: AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
    phonePassword?: boolean;
    pmiPassword?: boolean;
    requirePasswordForScheduledMeeting?: boolean;
    requirePasswordForScheduledWebinar?: boolean;
    waitingRoom?: boolean;
    waitingRoomSettings?: AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
    webinarPassword?: boolean;
}
export declare class AccountSettings200ApplicationJsonMeetingWebinarSecuritySettings extends SpeakeasyBase {
    meetingSecurity?: AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
}
export declare class AccountSettingsRequest extends SpeakeasyBase {
    pathParams: AccountSettingsPathParams;
    queryParams: AccountSettingsQueryParams;
}
export declare class AccountSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    accountSettings200ApplicationJSONOneOf?: any;
}
