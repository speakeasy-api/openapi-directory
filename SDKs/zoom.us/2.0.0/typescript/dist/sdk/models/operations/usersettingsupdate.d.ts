import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserSettingsUpdatePathParams extends SpeakeasyBase {
    userId: string;
}
export declare enum UserSettingsUpdateOptionEnum {
    MeetingAuthentication = "meeting_authentication",
    RecordingAuthentication = "recording_authentication",
    MeetingSecuirty = "meeting_secuirty"
}
export declare class UserSettingsUpdateQueryParams extends SpeakeasyBase {
    option?: UserSettingsUpdateOptionEnum;
}
export declare class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsNotificationSettings extends SpeakeasyBase {
    alternativeHostReminder?: boolean;
    cancelMeetingReminder?: boolean;
    jbhReminder?: boolean;
    scheduleForReminder?: boolean;
}
export declare class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings extends SpeakeasyBase {
    largeMeeting?: boolean;
    largeMeetingCapacity?: number;
    meetingCapacity?: number;
    webinar?: boolean;
    webinarCapacity?: number;
    zoomPhone?: boolean;
}
export declare enum UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum {
    Host = "host",
    All = "all",
    None = "none"
}
export declare class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles extends SpeakeasyBase {
    id?: string;
    isDefault?: boolean;
    name?: string;
    size?: string;
    type?: string;
}
/**
 * Settings to manage virtual background.
**/
export declare class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings extends SpeakeasyBase {
    allowUploadCustom?: boolean;
    allowVideos?: boolean;
    enable?: boolean;
    files?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles[];
}
export declare enum UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum {
    Host = "host",
    All = "all"
}
export declare enum UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum {
    Host = "host",
    All = "all"
}
export declare class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings extends SpeakeasyBase {
    allowLiveStreaming?: boolean;
    annotation?: boolean;
    attendeeOnHold?: boolean;
    autoSavingChat?: boolean;
    breakoutRoom?: boolean;
    chat?: boolean;
    closedCaption?: boolean;
    coHost?: boolean;
    customDataCenterRegions?: boolean;
    customLiveStreamingService?: boolean;
    customServiceInstructions?: string;
    dataCenterRegions?: string[];
    e2eEncryption?: boolean;
    entryExitChime?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum;
    farEndCameraControl?: boolean;
    feedback?: boolean;
    fileTransfer?: boolean;
    groupHd?: boolean;
    nonVerbalFeedback?: boolean;
    polling?: boolean;
    privateChat?: boolean;
    recordPlayVoice?: boolean;
    remoteControl?: boolean;
    remoteSupport?: boolean;
    requestPermissionToUnmute?: boolean;
    screenSharing?: boolean;
    shareDualCamera?: boolean;
    showMeetingControlToolbar?: boolean;
    virtualBackground?: boolean;
    virtualBackgroundSettings?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings;
    waitingRoom?: boolean;
    whoCanShareScreen?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum;
    whoCanShareScreenWhenSomeoneIsSharing?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum;
    workplaceByFacebook?: boolean;
}
export declare class UserSettingsUpdateApplicationJsonUserSettingsProfileRecordingStorageLocation extends SpeakeasyBase {
    allowedValues?: string[];
    value?: string;
}
export declare class UserSettingsUpdateApplicationJsonUserSettingsProfile extends SpeakeasyBase {
    recordingStorageLocation?: UserSettingsUpdateApplicationJsonUserSettingsProfileRecordingStorageLocation;
}
export declare enum UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
**/
export declare class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl extends SpeakeasyBase {
    enable?: boolean;
    ipAddressesOrRanges?: string;
}
/**
 * This object represents the minimum passcode requirements set for recordings via Account Recording Settings.
**/
export declare class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement extends SpeakeasyBase {
    haveLetter?: boolean;
    haveNumber?: boolean;
    haveSpecialCharacter?: boolean;
    length?: number;
    onlyAllowNumeric?: boolean;
}
export declare class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings extends SpeakeasyBase {
    askHostToConfirmDisclaimer?: boolean;
    askParticipantsToConsentDisclaimer?: boolean;
    autoDeleteCmr?: boolean;
    autoDeleteCmrDays?: number;
    autoRecording?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum;
    cloudRecording?: boolean;
    hostPauseStopRecording?: boolean;
    ipAddressAccessControl?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl;
    localRecording?: boolean;
    recordAudioFile?: boolean;
    recordGalleryView?: boolean;
    recordSpeakerView?: boolean;
    recordingAudioTranscript?: boolean;
    recordingDisclaimer?: boolean;
    recordingPasswordRequirement?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement;
    saveChatText?: boolean;
    showTimestamp?: boolean;
}
export declare enum UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip",
    ThirdParty = "thirdParty"
}
/**
 * Account wide meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export declare class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement extends SpeakeasyBase {
    consecutiveCharactersLength?: number;
    haveLetter?: boolean;
    haveNumber?: boolean;
    haveSpecialCharacter?: boolean;
    haveUpperAndLowerCharacters?: boolean;
    length?: number;
    onlyAllowNumeric?: boolean;
    weakEnhanceDetection?: boolean;
}
export declare enum UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum {
    JbhOnly = "jbh_only",
    All = "all",
    None = "none"
}
export declare class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1 extends SpeakeasyBase {
    audioType?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum;
    defaultPasswordForScheduledMeetings?: string;
    embedPasswordInJoinLink?: boolean;
    forcePmiJbhPassword?: boolean;
    hostVideo?: boolean;
    joinBeforeHost?: boolean;
    meetingPasswordRequirement?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement;
    participantsVideo?: boolean;
    personalMeeting?: boolean;
    pmiPassword?: string;
    pstnPasswordProtected?: boolean;
    requirePasswordForInstantMeetings?: boolean;
    requirePasswordForPmiMeetings?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum;
    requirePasswordForScheduledMeetings?: boolean;
    requirePasswordForSchedulingNewMeetings?: boolean;
    usePmiForInstantMeetings?: boolean;
    usePmiForScheduledMeetings?: boolean;
}
/**
 * Indicates where most of the participants call into or call from duriing a meeting.
**/
export declare class UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions extends SpeakeasyBase {
    selectionValues?: string[];
}
export declare class UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettings extends SpeakeasyBase {
    audioConferenceInfo?: string;
    showInternationalNumbersLink?: boolean;
    telephonyRegions?: UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions;
    thirdPartyAudio?: boolean;
}
/**
 * Account Settings: TSP.
**/
export declare class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsTspSettings extends SpeakeasyBase {
    callOut?: boolean;
    callOutCountries?: any[];
    showInternationalNumbersLink?: boolean;
}
export declare class UserSettingsUpdateApplicationJsonUserSettings extends SpeakeasyBase {
    emailNotification?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsNotificationSettings;
    feature?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings;
    inMeeting?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings;
    profile?: UserSettingsUpdateApplicationJsonUserSettingsProfile;
    recording?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings;
    scheduleMeeting?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1;
    telephony?: UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettings;
    tsp?: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsTspSettings;
}
export declare enum UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
/**
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export declare class UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
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
export declare class UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
    participantsToPlaceInWaitingRoom?: number;
    usersWhoCanAdmitParticipantsFromWaitingRoom?: number;
    whitelistedDomainsForWaitingRoom?: string;
}
export declare class UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
    autoSecurity?: boolean;
    embedPasswordInJoinLink?: boolean;
    encryptionType?: UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
    endToEndEncryptedMeetings?: boolean;
    meetingPassword?: boolean;
    meetingPasswordRequirement?: UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
    phonePassword?: boolean;
    pmiPassword?: boolean;
    requirePasswordForScheduledMeeting?: boolean;
    requirePasswordForScheduledWebinar?: boolean;
    waitingRoom?: boolean;
    waitingRoomSettings?: UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
    webinarPassword?: boolean;
}
export declare class UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettings extends SpeakeasyBase {
    meetingSecurity?: UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
}
export declare class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsNotificationSettings extends SpeakeasyBase {
    alternativeHostReminder?: boolean;
    cancelMeetingReminder?: boolean;
    jbhReminder?: boolean;
    scheduleForReminder?: boolean;
}
export declare class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsFeatureSettings extends SpeakeasyBase {
    largeMeeting?: boolean;
    largeMeetingCapacity?: number;
    meetingCapacity?: number;
    webinar?: boolean;
    webinarCapacity?: number;
    zoomPhone?: boolean;
}
export declare enum UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum {
    Host = "host",
    All = "all",
    None = "none"
}
export declare class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles extends SpeakeasyBase {
    id?: string;
    isDefault?: boolean;
    name?: string;
    size?: string;
    type?: string;
}
/**
 * Settings to manage virtual background.
**/
export declare class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings extends SpeakeasyBase {
    allowUploadCustom?: boolean;
    allowVideos?: boolean;
    enable?: boolean;
    files?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles[];
}
export declare enum UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum {
    Host = "host",
    All = "all"
}
export declare enum UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum {
    Host = "host",
    All = "all"
}
export declare class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings extends SpeakeasyBase {
    allowLiveStreaming?: boolean;
    annotation?: boolean;
    attendeeOnHold?: boolean;
    autoSavingChat?: boolean;
    breakoutRoom?: boolean;
    chat?: boolean;
    closedCaption?: boolean;
    coHost?: boolean;
    customDataCenterRegions?: boolean;
    customLiveStreamingService?: boolean;
    customServiceInstructions?: string;
    dataCenterRegions?: string[];
    e2eEncryption?: boolean;
    entryExitChime?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum;
    farEndCameraControl?: boolean;
    feedback?: boolean;
    fileTransfer?: boolean;
    groupHd?: boolean;
    nonVerbalFeedback?: boolean;
    polling?: boolean;
    privateChat?: boolean;
    recordPlayVoice?: boolean;
    remoteControl?: boolean;
    remoteSupport?: boolean;
    requestPermissionToUnmute?: boolean;
    screenSharing?: boolean;
    shareDualCamera?: boolean;
    showMeetingControlToolbar?: boolean;
    virtualBackground?: boolean;
    virtualBackgroundSettings?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings;
    waitingRoom?: boolean;
    whoCanShareScreen?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum;
    whoCanShareScreenWhenSomeoneIsSharing?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum;
    workplaceByFacebook?: boolean;
}
export declare class UserSettingsUpdateMultipartFormDataUserSettingsProfileRecordingStorageLocation extends SpeakeasyBase {
    allowedValues?: string[];
    value?: string;
}
export declare class UserSettingsUpdateMultipartFormDataUserSettingsProfile extends SpeakeasyBase {
    recordingStorageLocation?: UserSettingsUpdateMultipartFormDataUserSettingsProfileRecordingStorageLocation;
}
export declare enum UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
**/
export declare class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl extends SpeakeasyBase {
    enable?: boolean;
    ipAddressesOrRanges?: string;
}
/**
 * This object represents the minimum passcode requirements set for recordings via Account Recording Settings.
**/
export declare class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement extends SpeakeasyBase {
    haveLetter?: boolean;
    haveNumber?: boolean;
    haveSpecialCharacter?: boolean;
    length?: number;
    onlyAllowNumeric?: boolean;
}
export declare class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings extends SpeakeasyBase {
    askHostToConfirmDisclaimer?: boolean;
    askParticipantsToConsentDisclaimer?: boolean;
    autoDeleteCmr?: boolean;
    autoDeleteCmrDays?: number;
    autoRecording?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum;
    cloudRecording?: boolean;
    hostPauseStopRecording?: boolean;
    ipAddressAccessControl?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl;
    localRecording?: boolean;
    recordAudioFile?: boolean;
    recordGalleryView?: boolean;
    recordSpeakerView?: boolean;
    recordingAudioTranscript?: boolean;
    recordingDisclaimer?: boolean;
    recordingPasswordRequirement?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement;
    saveChatText?: boolean;
    showTimestamp?: boolean;
}
export declare enum UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsAudioTypeEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip",
    ThirdParty = "thirdParty"
}
/**
 * Account wide meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export declare class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement extends SpeakeasyBase {
    consecutiveCharactersLength?: number;
    haveLetter?: boolean;
    haveNumber?: boolean;
    haveSpecialCharacter?: boolean;
    haveUpperAndLowerCharacters?: boolean;
    length?: number;
    onlyAllowNumeric?: boolean;
    weakEnhanceDetection?: boolean;
}
export declare enum UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum {
    JbhOnly = "jbh_only",
    All = "all",
    None = "none"
}
export declare class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1 extends SpeakeasyBase {
    audioType?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsAudioTypeEnum;
    defaultPasswordForScheduledMeetings?: string;
    embedPasswordInJoinLink?: boolean;
    forcePmiJbhPassword?: boolean;
    hostVideo?: boolean;
    joinBeforeHost?: boolean;
    meetingPasswordRequirement?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement;
    participantsVideo?: boolean;
    personalMeeting?: boolean;
    pmiPassword?: string;
    pstnPasswordProtected?: boolean;
    requirePasswordForInstantMeetings?: boolean;
    requirePasswordForPmiMeetings?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum;
    requirePasswordForScheduledMeetings?: boolean;
    requirePasswordForSchedulingNewMeetings?: boolean;
    usePmiForInstantMeetings?: boolean;
    usePmiForScheduledMeetings?: boolean;
}
/**
 * Indicates where most of the participants call into or call from duriing a meeting.
**/
export declare class UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions extends SpeakeasyBase {
    selectionValues?: string[];
}
export declare class UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettings extends SpeakeasyBase {
    audioConferenceInfo?: string;
    showInternationalNumbersLink?: boolean;
    telephonyRegions?: UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions;
    thirdPartyAudio?: boolean;
}
/**
 * Account Settings: TSP.
**/
export declare class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsTspSettings extends SpeakeasyBase {
    callOut?: boolean;
    callOutCountries?: any[];
    showInternationalNumbersLink?: boolean;
}
export declare class UserSettingsUpdateMultipartFormDataUserSettings extends SpeakeasyBase {
    emailNotification?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsNotificationSettings;
    feature?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsFeatureSettings;
    inMeeting?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings;
    profile?: UserSettingsUpdateMultipartFormDataUserSettingsProfile;
    recording?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings;
    scheduleMeeting?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1;
    telephony?: UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettings;
    tsp?: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsTspSettings;
}
export declare enum UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
/**
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export declare class UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
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
export declare class UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
    participantsToPlaceInWaitingRoom?: number;
    usersWhoCanAdmitParticipantsFromWaitingRoom?: number;
    whitelistedDomainsForWaitingRoom?: string;
}
export declare class UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
    autoSecurity?: boolean;
    embedPasswordInJoinLink?: boolean;
    encryptionType?: UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
    endToEndEncryptedMeetings?: boolean;
    meetingPassword?: boolean;
    meetingPasswordRequirement?: UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
    phonePassword?: boolean;
    pmiPassword?: boolean;
    requirePasswordForScheduledMeeting?: boolean;
    requirePasswordForScheduledWebinar?: boolean;
    waitingRoom?: boolean;
    waitingRoomSettings?: UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
    webinarPassword?: boolean;
}
export declare class UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings extends SpeakeasyBase {
    meetingSecurity?: UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity;
}
export declare class UserSettingsUpdateRequests extends SpeakeasyBase {
    oneOf?: any;
    oneOf1?: any;
}
export declare class UserSettingsUpdateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UserSettingsUpdateRequest extends SpeakeasyBase {
    pathParams: UserSettingsUpdatePathParams;
    queryParams: UserSettingsUpdateQueryParams;
    request: UserSettingsUpdateRequests;
    security: UserSettingsUpdateSecurity;
}
export declare class UserSettingsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
