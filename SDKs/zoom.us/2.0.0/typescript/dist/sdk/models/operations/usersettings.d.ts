import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserSettingsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare enum UserSettingsLoginTypeEnum {
    Zero = "0",
    One = "1",
    NinetyNine = "99",
    OneHundred = "100",
    OneHundredAndOne = "101"
}
export declare enum UserSettingsOptionEnum {
    MeetingAuthentication = "meeting_authentication",
    RecordingAuthentication = "recording_authentication"
}
export declare class UserSettingsQueryParams extends SpeakeasyBase {
    customQueryFields?: string;
    loginType?: UserSettingsLoginTypeEnum;
    option?: UserSettingsOptionEnum;
}
export declare class UserSettingsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UserSettings200ApplicationJsonUserSettingsUserSettingsNotificationSettings extends SpeakeasyBase {
    alternativeHostReminder?: boolean;
    cancelMeetingReminder?: boolean;
    jbhReminder?: boolean;
    scheduleForReminder?: boolean;
}
export declare class UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings extends SpeakeasyBase {
    cnMeeting?: boolean;
    inMeeting?: boolean;
    largeMeeting?: boolean;
    largeMeetingCapacity?: number;
    meetingCapacity?: number;
    webinar?: boolean;
    webinarCapacity?: number;
    zoomPhone?: boolean;
}
export declare enum UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum {
    Host = "host",
    All = "all",
    None = "none"
}
export declare class UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles extends SpeakeasyBase {
    id?: string;
    isDefault?: boolean;
    name?: string;
    size?: string;
    type?: string;
}
/**
 * Settings to manage virtual background.
**/
export declare class UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings extends SpeakeasyBase {
    allowUploadCustom?: boolean;
    allowVideos?: boolean;
    enable?: boolean;
    files?: UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles[];
}
export declare enum UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum {
    Host = "host",
    All = "all"
}
export declare enum UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum {
    Host = "host",
    All = "all"
}
export declare class UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings extends SpeakeasyBase {
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
    entryExitChime?: UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum;
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
    virtualBackgroundSettings?: UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings;
    waitingRoom?: boolean;
    whoCanShareScreen?: UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum;
    whoCanShareScreenWhenSomeoneIsSharing?: UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum;
    workplaceByFacebook?: boolean;
}
export declare class UserSettings200ApplicationJsonUserSettingsProfileRecordingStorageLocation extends SpeakeasyBase {
    allowedValues?: string[];
    value?: string;
}
export declare class UserSettings200ApplicationJsonUserSettingsProfile extends SpeakeasyBase {
    recordingStorageLocation?: UserSettings200ApplicationJsonUserSettingsProfileRecordingStorageLocation;
}
export declare enum UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
**/
export declare class UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl extends SpeakeasyBase {
    enable?: boolean;
    ipAddressesOrRanges?: string;
}
/**
 * This object represents the minimum passcode requirements set for recordings via Account Recording Settings.
**/
export declare class UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement extends SpeakeasyBase {
    haveLetter?: boolean;
    haveNumber?: boolean;
    haveSpecialCharacter?: boolean;
    length?: number;
    onlyAllowNumeric?: boolean;
}
export declare class UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings extends SpeakeasyBase {
    askHostToConfirmDisclaimer?: boolean;
    askParticipantsToConsentDisclaimer?: boolean;
    autoDeleteCmr?: boolean;
    autoDeleteCmrDays?: number;
    autoRecording?: UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum;
    cloudRecording?: boolean;
    hostPauseStopRecording?: boolean;
    ipAddressAccessControl?: UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl;
    localRecording?: boolean;
    recordAudioFile?: boolean;
    recordGalleryView?: boolean;
    recordSpeakerView?: boolean;
    recordingAudioTranscript?: boolean;
    recordingDisclaimer?: boolean;
    recordingPasswordRequirement?: UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement;
    saveChatText?: boolean;
    showTimestamp?: boolean;
}
export declare enum UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip",
    ThirdParty = "thirdParty"
}
/**
 * Account wide meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export declare class UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement extends SpeakeasyBase {
    consecutiveCharactersLength?: number;
    haveLetter?: boolean;
    haveNumber?: boolean;
    haveSpecialCharacter?: boolean;
    haveUpperAndLowerCharacters?: boolean;
    length?: number;
    onlyAllowNumeric?: boolean;
    weakEnhanceDetection?: boolean;
}
export declare enum UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum {
    JbhOnly = "jbh_only",
    All = "all",
    None = "none"
}
export declare class UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1 extends SpeakeasyBase {
    audioType?: UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum;
    defaultPasswordForScheduledMeetings?: string;
    embedPasswordInJoinLink?: boolean;
    forcePmiJbhPassword?: boolean;
    hostVideo?: boolean;
    joinBeforeHost?: boolean;
    meetingPasswordRequirement?: UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement;
    participantsVideo?: boolean;
    personalMeeting?: boolean;
    pmiPassword?: string;
    pstnPasswordProtected?: boolean;
    requirePasswordForInstantMeetings?: boolean;
    requirePasswordForPmiMeetings?: UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum;
    requirePasswordForScheduledMeetings?: boolean;
    requirePasswordForSchedulingNewMeetings?: boolean;
    usePmiForInstantMeetings?: boolean;
    usePmiForScheduledMeetings?: boolean;
}
/**
 * Indicates where most of the participants call into or call from duriing a meeting.
**/
export declare class UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsTelephonyRegions extends SpeakeasyBase {
    allowedValues?: string[];
    selectionValues?: string[];
}
export declare class UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings2 extends SpeakeasyBase {
    audioConferenceInfo?: string;
    showInternationalNumbersLink?: boolean;
    telephonyRegions?: UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsTelephonyRegions;
    thirdPartyAudio?: boolean;
}
/**
 * Account Settings: TSP.
**/
export declare class UserSettings200ApplicationJsonUserSettingsUserSettingsTspSettings extends SpeakeasyBase {
    callOut?: boolean;
    callOutCountries?: any[];
    showInternationalNumbersLink?: boolean;
}
export declare class UserSettings200ApplicationJsonUserSettings extends SpeakeasyBase {
    emailNotification?: UserSettings200ApplicationJsonUserSettingsUserSettingsNotificationSettings;
    feature?: UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings;
    inMeeting?: UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings;
    profile?: UserSettings200ApplicationJsonUserSettingsProfile;
    recording?: UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings;
    scheduleMeeting?: UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1;
    telephony?: UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings2;
    tsp?: UserSettings200ApplicationJsonUserSettingsUserSettingsTspSettings;
}
export declare enum UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
/**
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export declare class UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
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
export declare class UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
    participantsToPlaceInWaitingRoom?: number;
    usersWhoCanAdmitParticipantsFromWaitingRoom?: number;
    whitelistedDomainsForWaitingRoom?: string;
}
export declare class UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
    autoSecurity?: boolean;
    embedPasswordInJoinLink?: boolean;
    encryptionType?: UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
    endToEndEncryptedMeetings?: boolean;
    meetingPassword?: boolean;
    meetingPasswordRequirement?: UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
    phonePassword?: boolean;
    pmiPassword?: boolean;
    requirePasswordForScheduledMeeting?: boolean;
    requirePasswordForScheduledWebinar?: boolean;
    waitingRoom?: boolean;
    waitingRoomSettings?: UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
    webinarPassword?: boolean;
}
export declare class UserSettings200ApplicationJsonMeetingWebinarSecuritySettings extends SpeakeasyBase {
    meetingSecurity?: UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
}
export declare class UserSettingsRequest extends SpeakeasyBase {
    pathParams: UserSettingsPathParams;
    queryParams: UserSettingsQueryParams;
    security: UserSettingsSecurity;
}
export declare class UserSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    userSettings200ApplicationJSONOneOf?: any;
}
