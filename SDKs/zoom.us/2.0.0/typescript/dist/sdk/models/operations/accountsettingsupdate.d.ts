import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountSettingsUpdatePathParams extends SpeakeasyBase {
    accountId: string;
}
export declare enum AccountSettingsUpdateOptionEnum {
    MeetingAuthentication = "meeting_authentication",
    RecordingAuthentication = "recording_authentication",
    Security = "security",
    MeetingSecurity = "meeting_security"
}
export declare class AccountSettingsUpdateQueryParams extends SpeakeasyBase {
    option?: AccountSettingsUpdateOptionEnum;
}
/**
 * Account Settings: Notification.
**/
export declare class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification extends SpeakeasyBase {
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
export declare class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsFeature extends SpeakeasyBase {
    meetingCapacity?: number;
}
export declare enum AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingEntryExitChimeEnum {
    Host = "host",
    All = "all",
    None = "none"
}
export declare class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles extends SpeakeasyBase {
    id?: string;
    isDefault?: boolean;
    name?: string;
    size?: string;
    type?: string;
}
/**
 * Settings to manage virtual background.
**/
export declare class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettings extends SpeakeasyBase {
    allowUploadCustom?: boolean;
    allowVideos?: boolean;
    enable?: boolean;
    files?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles[];
}
export declare enum AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenEnum {
    Host = "host",
    All = "all"
}
export declare enum AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum {
    Host = "host",
    All = "all"
}
/**
 * Account Settings: In Meeting.
**/
export declare class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting extends SpeakeasyBase {
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
    entryExitChime?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingEntryExitChimeEnum;
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
    virtualBackgroundSettings?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettings;
    watermark?: boolean;
    webinarQuestionAnswer?: boolean;
    whiteboard?: boolean;
    whoCanShareScreen?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenEnum;
    whoCanShareScreenWhenSomeoneIsSharing?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum;
    workplaceByFacebook?: boolean;
}
/**
 * Account Settings: Integration.
**/
export declare class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration extends SpeakeasyBase {
    box?: boolean;
    dropbox?: boolean;
    googleCalendar?: boolean;
    googleDrive?: boolean;
    kubi?: boolean;
    microsoftOneDrive?: boolean;
}
export declare class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfileRecordingStorageLocation extends SpeakeasyBase {
    allowedValues?: string[];
    value?: string;
}
export declare class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfile extends SpeakeasyBase {
    recordingStorageLocation?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfileRecordingStorageLocation;
}
export declare class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchiveSettings extends SpeakeasyBase {
    audioFile?: boolean;
    ccTranscriptFile?: boolean;
    chatFile?: boolean;
    chatWithSenderEmail?: boolean;
    videoFile?: boolean;
}
/**
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted with archiving solution access by the Zoom support team.
**/
export declare class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchive extends SpeakeasyBase {
    enable?: boolean;
    settings?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchiveSettings;
    type?: number;
}
export declare enum AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
**/
export declare class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingIpAddressAccessControl extends SpeakeasyBase {
    enable?: boolean;
    ipAddressesOrRanges?: string;
}
/**
 * This object represents the minimum password requirements set for recordings via Account Recording Settings.
**/
export declare class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingRecordingPasswordRequirement extends SpeakeasyBase {
    haveLetter?: boolean;
    haveNumber?: boolean;
    haveSpecialCharacter?: boolean;
    length?: number;
    onlyAllowNumeric?: boolean;
}
/**
 * Account Settings: Recording.
**/
export declare class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording extends SpeakeasyBase {
    accountUserAccessRecording?: boolean;
    allowRecoveryDeletedCloudRecordings?: boolean;
    archive?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchive;
    autoDeleteCmr?: boolean;
    autoDeleteCmrDays?: number;
    autoRecording?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingAutoRecordingEnum;
    cloudRecording?: boolean;
    cloudRecordingDownload?: boolean;
    cloudRecordingDownloadHost?: boolean;
    hostDeleteCloudRecording?: boolean;
    ipAddressAccessControl?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingIpAddressAccessControl;
    localRecording?: boolean;
    preventHostAccessRecording?: boolean;
    recordAudioFile?: boolean;
    recordGalleryView?: boolean;
    recordSpeakerView?: boolean;
    recordingAudioTranscript?: boolean;
    recordingDisclaimer?: boolean;
    recordingPasswordRequirement?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingRecordingPasswordRequirement;
    requiredPasswordForExistingCloudRecordings?: boolean;
    saveChatText?: boolean;
    showTimestamp?: boolean;
}
export declare enum AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingAudioTypeEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip",
    ThirdParty = "thirdParty"
}
/**
 * Account wide meeting/webinar [password requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export declare class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement extends SpeakeasyBase {
    consecutiveCharactersLength?: number;
    haveLetter?: boolean;
    haveNumber?: boolean;
    haveSpecialCharacter?: boolean;
    haveUpperAndLowerCharacters?: boolean;
    length?: number;
    onlyAllowNumeric?: boolean;
    weakEnhanceDetection?: boolean;
}
export declare enum AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum {
    JbhOnly = "jbh_only",
    All = "all",
    None = "none"
}
/**
 * Account Settings: Schedule Meeting.
**/
export declare class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting extends SpeakeasyBase {
    audioType?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingAudioTypeEnum;
    enforceLogin?: boolean;
    enforceLoginDomains?: string;
    enforceLoginWithDomains?: boolean;
    forcePmiJbhPassword?: boolean;
    hostVideo?: boolean;
    joinBeforeHost?: boolean;
    meetingPasswordRequirement?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement;
    notStoreMeetingTopic?: boolean;
    participantVideo?: boolean;
    personalMeeting?: boolean;
    requirePasswordForInstantMeetings?: boolean;
    requirePasswordForPmiMeetings?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum;
    requirePasswordForScheduledMeetings?: boolean;
    requirePasswordForSchedulingNewMeetings?: boolean;
    usePmiForInstantMeetings?: boolean;
    usePmiForScheduledMeetings?: boolean;
}
/**
 * This object refers to the [enhanced password rules](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) that allows Zoom account admins and owners to apply extra requiremets to the users' Zoom login password.
**/
export declare class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurityPasswordRequirement extends SpeakeasyBase {
    consecutiveCharactersLength?: number;
    haveSpecialCharacter?: boolean;
    minimumPasswordLength?: number;
    weakEnhanceDetection?: boolean;
}
export declare enum AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum {
    All = "all",
    Group = "group",
    Role = "role",
    None = "none"
}
/**
 * [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
**/
export declare class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurity extends SpeakeasyBase {
    adminChangeNamePic?: boolean;
    hideBillingInfo?: boolean;
    importPhotosFromDevices?: boolean;
    passwordRequirement?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurityPasswordRequirement;
    signAgainPeriodForInactivityOnClient?: number;
    signAgainPeriodForInactivityOnWeb?: number;
    signInWithTwoFactorAuth?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum;
    signInWithTwoFactorAuthGroups?: string[];
    signInWithTwoFactorAuthRoles?: string[];
}
/**
 * Indicates where most of the participants call into or call from duriing a meeting.
**/
export declare class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephonyTelephonyRegions extends SpeakeasyBase {
    selectionValues?: string[];
}
/**
 * Account Settings Update: Telephony.
**/
export declare class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephony extends SpeakeasyBase {
    audioConferenceInfo?: string;
    telephonyRegions?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephonyTelephonyRegions;
    thirdPartyAudio?: boolean;
}
/**
 * Account Settings: TSP.
**/
export declare class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTsp extends SpeakeasyBase {
    callOut?: boolean;
    callOutCountries?: any[];
    displayTollFreeNumbers?: boolean;
    showInternationalNumbersLink?: boolean;
}
/**
 * Account Settings: Zoom Rooms.
**/
export declare class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsZoomRooms extends SpeakeasyBase {
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
export declare class AccountSettingsUpdateApplicationJsonUpdateAccountSettings extends SpeakeasyBase {
    emailNotification?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification;
    feature?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsFeature;
    inMeeting?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting;
    integration?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration;
    profile?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfile;
    recording?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording;
    scheduleMeeting?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting;
    security?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurity;
    telephony?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephony;
    tsp?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTsp;
    zoomRooms?: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsZoomRooms;
}
export declare enum AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
/**
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export declare class AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
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
export declare class AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
    participantsToPlaceInWaitingRoom?: number;
    usersWhoCanAdmitParticipantsFromWaitingRoom?: number;
    whitelistedDomainsForWaitingRoom?: string;
}
export declare class AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
    autoSecurity?: boolean;
    embedPasswordInJoinLink?: boolean;
    encryptionType?: AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
    endToEndEncryptedMeetings?: boolean;
    meetingPassword?: boolean;
    meetingPasswordRequirement?: AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
    phonePassword?: boolean;
    pmiPassword?: boolean;
    requirePasswordForScheduledMeeting?: boolean;
    requirePasswordForScheduledWebinar?: boolean;
    waitingRoom?: boolean;
    waitingRoomSettings?: AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
    webinarPassword?: boolean;
}
export declare class AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettings extends SpeakeasyBase {
    meetingSecurity?: AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
}
/**
 * Account Settings: Notification.
**/
export declare class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification extends SpeakeasyBase {
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
export declare class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsFeature extends SpeakeasyBase {
    meetingCapacity?: number;
}
export declare enum AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingEntryExitChimeEnum {
    Host = "host",
    All = "all",
    None = "none"
}
export declare class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles extends SpeakeasyBase {
    id?: string;
    isDefault?: boolean;
    name?: string;
    size?: string;
    type?: string;
}
/**
 * Settings to manage virtual background.
**/
export declare class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings extends SpeakeasyBase {
    allowUploadCustom?: boolean;
    allowVideos?: boolean;
    enable?: boolean;
    files?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles[];
}
export declare enum AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenEnum {
    Host = "host",
    All = "all"
}
export declare enum AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum {
    Host = "host",
    All = "all"
}
/**
 * Account Settings: In Meeting.
**/
export declare class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting extends SpeakeasyBase {
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
    entryExitChime?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingEntryExitChimeEnum;
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
    virtualBackgroundSettings?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings;
    watermark?: boolean;
    webinarQuestionAnswer?: boolean;
    whiteboard?: boolean;
    whoCanShareScreen?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenEnum;
    whoCanShareScreenWhenSomeoneIsSharing?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum;
    workplaceByFacebook?: boolean;
}
/**
 * Account Settings: Integration.
**/
export declare class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration extends SpeakeasyBase {
    box?: boolean;
    dropbox?: boolean;
    googleCalendar?: boolean;
    googleDrive?: boolean;
    kubi?: boolean;
    microsoftOneDrive?: boolean;
}
export declare class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfileRecordingStorageLocation extends SpeakeasyBase {
    allowedValues?: string[];
    value?: string;
}
export declare class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfile extends SpeakeasyBase {
    recordingStorageLocation?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfileRecordingStorageLocation;
}
export declare class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings extends SpeakeasyBase {
    audioFile?: boolean;
    ccTranscriptFile?: boolean;
    chatFile?: boolean;
    chatWithSenderEmail?: boolean;
    videoFile?: boolean;
}
/**
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted with archiving solution access by the Zoom support team.
**/
export declare class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive extends SpeakeasyBase {
    enable?: boolean;
    settings?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings;
    type?: number;
}
export declare enum AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
**/
export declare class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingIpAddressAccessControl extends SpeakeasyBase {
    enable?: boolean;
    ipAddressesOrRanges?: string;
}
/**
 * This object represents the minimum password requirements set for recordings via Account Recording Settings.
**/
export declare class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement extends SpeakeasyBase {
    haveLetter?: boolean;
    haveNumber?: boolean;
    haveSpecialCharacter?: boolean;
    length?: number;
    onlyAllowNumeric?: boolean;
}
/**
 * Account Settings: Recording.
**/
export declare class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording extends SpeakeasyBase {
    accountUserAccessRecording?: boolean;
    allowRecoveryDeletedCloudRecordings?: boolean;
    archive?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive;
    autoDeleteCmr?: boolean;
    autoDeleteCmrDays?: number;
    autoRecording?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingAutoRecordingEnum;
    cloudRecording?: boolean;
    cloudRecordingDownload?: boolean;
    cloudRecordingDownloadHost?: boolean;
    hostDeleteCloudRecording?: boolean;
    ipAddressAccessControl?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingIpAddressAccessControl;
    localRecording?: boolean;
    preventHostAccessRecording?: boolean;
    recordAudioFile?: boolean;
    recordGalleryView?: boolean;
    recordSpeakerView?: boolean;
    recordingAudioTranscript?: boolean;
    recordingDisclaimer?: boolean;
    recordingPasswordRequirement?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement;
    requiredPasswordForExistingCloudRecordings?: boolean;
    saveChatText?: boolean;
    showTimestamp?: boolean;
}
export declare enum AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip",
    ThirdParty = "thirdParty"
}
/**
 * Account wide meeting/webinar [password requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export declare class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement extends SpeakeasyBase {
    consecutiveCharactersLength?: number;
    haveLetter?: boolean;
    haveNumber?: boolean;
    haveSpecialCharacter?: boolean;
    haveUpperAndLowerCharacters?: boolean;
    length?: number;
    onlyAllowNumeric?: boolean;
    weakEnhanceDetection?: boolean;
}
export declare enum AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum {
    JbhOnly = "jbh_only",
    All = "all",
    None = "none"
}
/**
 * Account Settings: Schedule Meeting.
**/
export declare class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting extends SpeakeasyBase {
    audioType?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnum;
    enforceLogin?: boolean;
    enforceLoginDomains?: string;
    enforceLoginWithDomains?: boolean;
    forcePmiJbhPassword?: boolean;
    hostVideo?: boolean;
    joinBeforeHost?: boolean;
    meetingPasswordRequirement?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement;
    notStoreMeetingTopic?: boolean;
    participantVideo?: boolean;
    personalMeeting?: boolean;
    requirePasswordForInstantMeetings?: boolean;
    requirePasswordForPmiMeetings?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum;
    requirePasswordForScheduledMeetings?: boolean;
    requirePasswordForSchedulingNewMeetings?: boolean;
    usePmiForInstantMeetings?: boolean;
    usePmiForScheduledMeetings?: boolean;
}
/**
 * This object refers to the [enhanced password rules](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) that allows Zoom account admins and owners to apply extra requiremets to the users' Zoom login password.
**/
export declare class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement extends SpeakeasyBase {
    consecutiveCharactersLength?: number;
    haveSpecialCharacter?: boolean;
    minimumPasswordLength?: number;
    weakEnhanceDetection?: boolean;
}
export declare enum AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum {
    All = "all",
    Group = "group",
    Role = "role",
    None = "none"
}
/**
 * [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
**/
export declare class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity extends SpeakeasyBase {
    adminChangeNamePic?: boolean;
    hideBillingInfo?: boolean;
    importPhotosFromDevices?: boolean;
    passwordRequirement?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement;
    signAgainPeriodForInactivityOnClient?: number;
    signAgainPeriodForInactivityOnWeb?: number;
    signInWithTwoFactorAuth?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum;
    signInWithTwoFactorAuthGroups?: string[];
    signInWithTwoFactorAuthRoles?: string[];
}
/**
 * Indicates where most of the participants call into or call from duriing a meeting.
**/
export declare class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephonyTelephonyRegions extends SpeakeasyBase {
    selectionValues?: string[];
}
/**
 * Account Settings Update: Telephony.
**/
export declare class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony extends SpeakeasyBase {
    audioConferenceInfo?: string;
    telephonyRegions?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephonyTelephonyRegions;
    thirdPartyAudio?: boolean;
}
/**
 * Account Settings: TSP.
**/
export declare class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp extends SpeakeasyBase {
    callOut?: boolean;
    callOutCountries?: any[];
    displayTollFreeNumbers?: boolean;
    showInternationalNumbersLink?: boolean;
}
/**
 * Account Settings: Zoom Rooms.
**/
export declare class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms extends SpeakeasyBase {
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
export declare class AccountSettingsUpdateMultipartFormDataUpdateAccountSettings extends SpeakeasyBase {
    emailNotification?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification;
    feature?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsFeature;
    inMeeting?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting;
    integration?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration;
    profile?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfile;
    recording?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording;
    scheduleMeeting?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting;
    security?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity;
    telephony?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony;
    tsp?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp;
    zoomRooms?: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms;
}
export declare enum AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
/**
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export declare class AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
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
export declare class AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
    participantsToPlaceInWaitingRoom?: number;
    usersWhoCanAdmitParticipantsFromWaitingRoom?: number;
    whitelistedDomainsForWaitingRoom?: string;
}
export declare class AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
    autoSecurity?: boolean;
    embedPasswordInJoinLink?: boolean;
    encryptionType?: AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
    endToEndEncryptedMeetings?: boolean;
    meetingPassword?: boolean;
    meetingPasswordRequirement?: AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
    phonePassword?: boolean;
    pmiPassword?: boolean;
    requirePasswordForScheduledMeeting?: boolean;
    requirePasswordForScheduledWebinar?: boolean;
    waitingRoom?: boolean;
    waitingRoomSettings?: AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
    webinarPassword?: boolean;
}
export declare class AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings extends SpeakeasyBase {
    meetingSecurity?: AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity;
}
export declare class AccountSettingsUpdateRequests extends SpeakeasyBase {
    oneOf?: any;
    oneOf1?: any;
}
export declare class AccountSettingsUpdateRequest extends SpeakeasyBase {
    pathParams: AccountSettingsUpdatePathParams;
    queryParams: AccountSettingsUpdateQueryParams;
    request: AccountSettingsUpdateRequests;
}
export declare class AccountSettingsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
