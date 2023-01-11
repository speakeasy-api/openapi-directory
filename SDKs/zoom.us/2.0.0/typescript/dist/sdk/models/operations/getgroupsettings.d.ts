import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupSettingsPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare enum GetGroupSettingsOptionEnum {
    MeetingAuthentication = "meeting_authentication",
    RecordingAuthentication = "recording_authentication"
}
export declare class GetGroupSettingsQueryParams extends SpeakeasyBase {
    customQueryFields?: string;
    option?: GetGroupSettingsOptionEnum;
}
export declare class GetGroupSettingsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class GetGroupSettings200ApplicationJson1EmailNotification extends SpeakeasyBase {
    alternativeHostReminder?: boolean;
    cancelMeetingReminder?: boolean;
    cloudRecordingAvailableReminder?: boolean;
    jbhReminder?: boolean;
    scheduleForHostReminder?: boolean;
}
export declare class GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettingsFiles extends SpeakeasyBase {
    id?: string;
    isDefault?: boolean;
    name?: string;
    size?: string;
    type?: string;
}
/**
 * Settings to manage virtual background.
**/
export declare class GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettings extends SpeakeasyBase {
    allowUploadCustom?: boolean;
    allowVideos?: boolean;
    enable?: boolean;
    files?: GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettingsFiles[];
}
export declare enum GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenEnum {
    Host = "host",
    All = "all"
}
export declare enum GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum {
    Host = "host",
    All = "all"
}
export declare class GetGroupSettings200ApplicationJson1InMeeting extends SpeakeasyBase {
    alertGuestJoin?: boolean;
    allowShowZoomWindows?: boolean;
    annotation?: boolean;
    attendeeOnHold?: boolean;
    autoAnswer?: boolean;
    autoSavingChat?: boolean;
    breakoutRoom?: boolean;
    chat?: boolean;
    closedCaption?: boolean;
    coHost?: boolean;
    customDataCenterRegions?: boolean;
    dataCenterRegions?: string[];
    e2eEncryption?: boolean;
    entryExitChime?: string;
    farEndCameraControl?: boolean;
    feedback?: boolean;
    fileTransfer?: boolean;
    groupHd?: boolean;
    nonVerbalFeedback?: boolean;
    onlyHostViewDeviceList?: boolean;
    originalAudio?: boolean;
    polling?: boolean;
    postMeetingFeedback?: boolean;
    privateChat?: boolean;
    recordPlayOwnVoice?: boolean;
    remoteControl?: boolean;
    remoteSupport?: boolean;
    requestPermissionToUnmute?: boolean;
    screenSharing?: boolean;
    sendingDefaultEmailInvites?: boolean;
    showBrowserJoinLink?: boolean;
    showDeviceList?: boolean;
    showMeetingControlToolbar?: boolean;
    stereoAudio?: boolean;
    useHtmlFormatEmail?: boolean;
    virtualBackground?: boolean;
    virtualBackgroundSettings?: GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettings;
    waitingRoom?: boolean;
    whiteboard?: boolean;
    whoCanShareScreen?: GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenEnum;
    whoCanShareScreenWhenSomeoneIsSharing?: GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum;
}
export declare class GetGroupSettings200ApplicationJson1ProfileRecordingStorageLocation extends SpeakeasyBase {
    allowedValues?: string[];
    value?: string;
}
export declare class GetGroupSettings200ApplicationJson1Profile extends SpeakeasyBase {
    recordingStorageLocation?: GetGroupSettings200ApplicationJson1ProfileRecordingStorageLocation;
}
export declare class GetGroupSettings200ApplicationJson1RecordingArchiveSettings extends SpeakeasyBase {
    audioFile?: boolean;
    ccTranscriptFile?: boolean;
    chatFile?: boolean;
    chatWithSenderEmail?: boolean;
    videoFile?: boolean;
}
/**
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted archiving solution access by the Zoom Support team.
**/
export declare class GetGroupSettings200ApplicationJson1RecordingArchive extends SpeakeasyBase {
    enable?: boolean;
    settings?: GetGroupSettings200ApplicationJson1RecordingArchiveSettings;
    type?: number;
}
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
**/
export declare class GetGroupSettings200ApplicationJson1RecordingIpAddressAccessControl extends SpeakeasyBase {
    enable?: boolean;
    ipAddressesOrRanges?: string;
}
export declare class GetGroupSettings200ApplicationJson1Recording extends SpeakeasyBase {
    accountUserAccessRecording?: boolean;
    archive?: GetGroupSettings200ApplicationJson1RecordingArchive;
    autoRecording?: string;
    cloudRecording?: boolean;
    cloudRecordingDownload?: boolean;
    cloudRecordingDownloadHost?: boolean;
    hostDeleteCloudRecording?: boolean;
    ipAddressAccessControl?: GetGroupSettings200ApplicationJson1RecordingIpAddressAccessControl;
    localRecording?: boolean;
    preventHostAccessRecording?: boolean;
    recordAudioFile?: boolean;
    recordGalleryView?: boolean;
    recordSpeakerView?: boolean;
    recordingAudioTranscript?: boolean;
    saveChatText?: boolean;
    showTimestamp?: boolean;
}
export declare enum GetGroupSettings200ApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum {
    All = "all",
    JbhOnly = "jbh_only",
    None = "none"
}
export declare class GetGroupSettings200ApplicationJson1ScheduleMeeting extends SpeakeasyBase {
    audioType?: string;
    embedPasswordInJoinLink?: boolean;
    forcePmiJbhPassword?: boolean;
    hostVideo?: boolean;
    joinBeforeHost?: boolean;
    muteUponEntry?: boolean;
    participantVideo?: boolean;
    personalMeeting?: boolean;
    pstnPasswordProtected?: boolean;
    requirePasswordForInstantMeetings?: boolean;
    requirePasswordForPmiMeetings?: GetGroupSettings200ApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum;
    requirePasswordForScheduledMeetings?: boolean;
    requirePasswordForSchedulingNewMeetings?: boolean;
    upcomingMeetingReminder?: boolean;
    usePmiForInstantMeetings?: boolean;
    usePmiForScheduleMeetings?: boolean;
}
/**
 * Indicates where most of the participants call into or call from duriing a meeting.
**/
export declare class GetGroupSettings200ApplicationJson1TelephonyTelephonyRegions extends SpeakeasyBase {
    selectionValues?: string[];
}
export declare class GetGroupSettings200ApplicationJson1Telephony extends SpeakeasyBase {
    audioConferenceInfo?: string;
    telephonyRegions?: GetGroupSettings200ApplicationJson1TelephonyTelephonyRegions;
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
export declare enum GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
/**
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export declare class GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
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
export declare class GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
    participantsToPlaceInWaitingRoom?: number;
    usersWhoCanAdmitParticipantsFromWaitingRoom?: number;
    whitelistedDomainsForWaitingRoom?: string;
}
export declare class GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
    autoSecurity?: boolean;
    embedPasswordInJoinLink?: boolean;
    encryptionType?: GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
    endToEndEncryptedMeetings?: boolean;
    meetingPassword?: boolean;
    meetingPasswordRequirement?: GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
    phonePassword?: boolean;
    pmiPassword?: boolean;
    requirePasswordForScheduledMeeting?: boolean;
    requirePasswordForScheduledWebinar?: boolean;
    waitingRoom?: boolean;
    waitingRoomSettings?: GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
    webinarPassword?: boolean;
}
export declare class GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettings extends SpeakeasyBase {
    meetingSecurity?: GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
}
export declare class GetGroupSettingsRequest extends SpeakeasyBase {
    pathParams: GetGroupSettingsPathParams;
    queryParams: GetGroupSettingsQueryParams;
    security: GetGroupSettingsSecurity;
}
export declare class GetGroupSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getGroupSettings200ApplicationJSONOneOf?: any;
}
