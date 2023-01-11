import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateGroupSettingsPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare enum UpdateGroupSettingsOptionEnum {
    MeetingAuthentication = "meeting_authentication",
    RecordingAuthentication = "recording_authentication",
    MeetingSecurity = "meeting_security"
}
export declare class UpdateGroupSettingsQueryParams extends SpeakeasyBase {
    customQueryFields?: string;
    option?: UpdateGroupSettingsOptionEnum;
}
export declare class UpdateGroupSettingsApplicationJson1EmailNotification extends SpeakeasyBase {
    alternativeHostReminder?: boolean;
    cancelMeetingReminder?: boolean;
    cloudRecordingAvailableReminder?: boolean;
    jbhReminder?: boolean;
    scheduleForHostReminder?: boolean;
}
export declare enum UpdateGroupSettingsApplicationJson1InMeetingWhoCanShareScreenEnum {
    Host = "host",
    All = "all"
}
export declare enum UpdateGroupSettingsApplicationJson1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum {
    Host = "host",
    All = "all"
}
export declare class UpdateGroupSettingsApplicationJson1InMeeting extends SpeakeasyBase {
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
    waitingRoom?: boolean;
    whiteboard?: boolean;
    whoCanShareScreen?: UpdateGroupSettingsApplicationJson1InMeetingWhoCanShareScreenEnum;
    whoCanShareScreenWhenSomeoneIsSharing?: UpdateGroupSettingsApplicationJson1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum;
}
export declare class UpdateGroupSettingsApplicationJson1ProfileRecordingStorageLocation extends SpeakeasyBase {
    allowedValues?: string[];
    value?: string;
}
export declare class UpdateGroupSettingsApplicationJson1Profile extends SpeakeasyBase {
    recordingStorageLocation?: UpdateGroupSettingsApplicationJson1ProfileRecordingStorageLocation;
}
export declare class UpdateGroupSettingsApplicationJson1RecordingArchiveSettings extends SpeakeasyBase {
    audioFile?: boolean;
    ccTranscriptFile?: boolean;
    chatFile?: boolean;
    chatWithSenderEmail?: boolean;
    videoFile?: boolean;
}
/**
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted archiving solution access by the Zoom Support team.
**/
export declare class UpdateGroupSettingsApplicationJson1RecordingArchive extends SpeakeasyBase {
    enable?: boolean;
    settings?: UpdateGroupSettingsApplicationJson1RecordingArchiveSettings;
    type?: number;
}
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
**/
export declare class UpdateGroupSettingsApplicationJson1RecordingIpAddressAccessControl extends SpeakeasyBase {
    enable?: boolean;
    ipAddressesOrRanges?: string;
}
export declare class UpdateGroupSettingsApplicationJson1Recording extends SpeakeasyBase {
    accountUserAccessRecording?: boolean;
    archive?: UpdateGroupSettingsApplicationJson1RecordingArchive;
    autoRecording?: string;
    cloudRecording?: boolean;
    cloudRecordingDownload?: boolean;
    cloudRecordingDownloadHost?: boolean;
    hostDeleteCloudRecording?: boolean;
    ipAddressAccessControl?: UpdateGroupSettingsApplicationJson1RecordingIpAddressAccessControl;
    localRecording?: boolean;
    preventHostAccessRecording?: boolean;
    recordAudioFile?: boolean;
    recordGalleryView?: boolean;
    recordSpeakerView?: boolean;
    recordingAudioTranscript?: boolean;
    saveChatText?: boolean;
    showTimestamp?: boolean;
}
export declare enum UpdateGroupSettingsApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum {
    All = "all",
    JbhOnly = "jbh_only",
    None = "none"
}
export declare class UpdateGroupSettingsApplicationJson1ScheduleMeeting extends SpeakeasyBase {
    audioType?: string;
    embedPasswordInJoinLink?: boolean;
    forcePmiJbhPassword?: boolean;
    hostVideo?: boolean;
    joinBeforeHost?: boolean;
    muteUponEntry?: boolean;
    participantVideo?: boolean;
    pstnPasswordProtected?: boolean;
    requirePasswordForAllMeetings?: boolean;
    requirePasswordForInstantMeetings?: boolean;
    requirePasswordForPmiMeetings?: UpdateGroupSettingsApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum;
    requirePasswordForScheduledMeetings?: boolean;
    requirePasswordForSchedulingNewMeetings?: boolean;
    upcomingMeetingReminder?: boolean;
}
export declare class UpdateGroupSettingsApplicationJson1Telephony extends SpeakeasyBase {
    audioConferenceInfo?: string;
    thirdPartyAudio?: boolean;
}
export declare class UpdateGroupSettingsApplicationJson1 extends SpeakeasyBase {
    emailNotification?: UpdateGroupSettingsApplicationJson1EmailNotification;
    inMeeting?: UpdateGroupSettingsApplicationJson1InMeeting;
    profile?: UpdateGroupSettingsApplicationJson1Profile;
    recording?: UpdateGroupSettingsApplicationJson1Recording;
    scheduleMeeting?: UpdateGroupSettingsApplicationJson1ScheduleMeeting;
    telephony?: UpdateGroupSettingsApplicationJson1Telephony;
}
export declare enum UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
/**
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export declare class UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
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
export declare class UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
    participantsToPlaceInWaitingRoom?: number;
    usersWhoCanAdmitParticipantsFromWaitingRoom?: number;
    whitelistedDomainsForWaitingRoom?: string;
}
export declare class UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
    autoSecurity?: boolean;
    embedPasswordInJoinLink?: boolean;
    encryptionType?: UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
    endToEndEncryptedMeetings?: boolean;
    meetingPassword?: boolean;
    meetingPasswordRequirement?: UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
    phonePassword?: boolean;
    pmiPassword?: boolean;
    requirePasswordForScheduledMeeting?: boolean;
    requirePasswordForScheduledWebinar?: boolean;
    waitingRoom?: boolean;
    waitingRoomSettings?: UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
    webinarPassword?: boolean;
}
export declare class UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettings extends SpeakeasyBase {
    meetingSecurity?: UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
}
export declare class UpdateGroupSettingsMultipartFormData1EmailNotification extends SpeakeasyBase {
    alternativeHostReminder?: boolean;
    cancelMeetingReminder?: boolean;
    cloudRecordingAvailableReminder?: boolean;
    jbhReminder?: boolean;
    scheduleForHostReminder?: boolean;
}
export declare enum UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenEnum {
    Host = "host",
    All = "all"
}
export declare enum UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum {
    Host = "host",
    All = "all"
}
export declare class UpdateGroupSettingsMultipartFormData1InMeeting extends SpeakeasyBase {
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
    waitingRoom?: boolean;
    whiteboard?: boolean;
    whoCanShareScreen?: UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenEnum;
    whoCanShareScreenWhenSomeoneIsSharing?: UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum;
}
export declare class UpdateGroupSettingsMultipartFormData1ProfileRecordingStorageLocation extends SpeakeasyBase {
    allowedValues?: string[];
    value?: string;
}
export declare class UpdateGroupSettingsMultipartFormData1Profile extends SpeakeasyBase {
    recordingStorageLocation?: UpdateGroupSettingsMultipartFormData1ProfileRecordingStorageLocation;
}
export declare class UpdateGroupSettingsMultipartFormData1RecordingArchiveSettings extends SpeakeasyBase {
    audioFile?: boolean;
    ccTranscriptFile?: boolean;
    chatFile?: boolean;
    chatWithSenderEmail?: boolean;
    videoFile?: boolean;
}
/**
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted archiving solution access by the Zoom Support team.
**/
export declare class UpdateGroupSettingsMultipartFormData1RecordingArchive extends SpeakeasyBase {
    enable?: boolean;
    settings?: UpdateGroupSettingsMultipartFormData1RecordingArchiveSettings;
    type?: number;
}
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
**/
export declare class UpdateGroupSettingsMultipartFormData1RecordingIpAddressAccessControl extends SpeakeasyBase {
    enable?: boolean;
    ipAddressesOrRanges?: string;
}
export declare class UpdateGroupSettingsMultipartFormData1Recording extends SpeakeasyBase {
    accountUserAccessRecording?: boolean;
    archive?: UpdateGroupSettingsMultipartFormData1RecordingArchive;
    autoRecording?: string;
    cloudRecording?: boolean;
    cloudRecordingDownload?: boolean;
    cloudRecordingDownloadHost?: boolean;
    hostDeleteCloudRecording?: boolean;
    ipAddressAccessControl?: UpdateGroupSettingsMultipartFormData1RecordingIpAddressAccessControl;
    localRecording?: boolean;
    preventHostAccessRecording?: boolean;
    recordAudioFile?: boolean;
    recordGalleryView?: boolean;
    recordSpeakerView?: boolean;
    recordingAudioTranscript?: boolean;
    saveChatText?: boolean;
    showTimestamp?: boolean;
}
export declare enum UpdateGroupSettingsMultipartFormData1ScheduleMeetingRequirePasswordForPmiMeetingsEnum {
    All = "all",
    JbhOnly = "jbh_only",
    None = "none"
}
export declare class UpdateGroupSettingsMultipartFormData1ScheduleMeeting extends SpeakeasyBase {
    audioType?: string;
    embedPasswordInJoinLink?: boolean;
    forcePmiJbhPassword?: boolean;
    hostVideo?: boolean;
    joinBeforeHost?: boolean;
    muteUponEntry?: boolean;
    participantVideo?: boolean;
    pstnPasswordProtected?: boolean;
    requirePasswordForAllMeetings?: boolean;
    requirePasswordForInstantMeetings?: boolean;
    requirePasswordForPmiMeetings?: UpdateGroupSettingsMultipartFormData1ScheduleMeetingRequirePasswordForPmiMeetingsEnum;
    requirePasswordForScheduledMeetings?: boolean;
    requirePasswordForSchedulingNewMeetings?: boolean;
    upcomingMeetingReminder?: boolean;
}
export declare class UpdateGroupSettingsMultipartFormData1Telephony extends SpeakeasyBase {
    audioConferenceInfo?: string;
    thirdPartyAudio?: boolean;
}
export declare class UpdateGroupSettingsMultipartFormData1 extends SpeakeasyBase {
    emailNotification?: UpdateGroupSettingsMultipartFormData1EmailNotification;
    inMeeting?: UpdateGroupSettingsMultipartFormData1InMeeting;
    profile?: UpdateGroupSettingsMultipartFormData1Profile;
    recording?: UpdateGroupSettingsMultipartFormData1Recording;
    scheduleMeeting?: UpdateGroupSettingsMultipartFormData1ScheduleMeeting;
    telephony?: UpdateGroupSettingsMultipartFormData1Telephony;
}
export declare enum UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
/**
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export declare class UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
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
export declare class UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
    participantsToPlaceInWaitingRoom?: number;
    usersWhoCanAdmitParticipantsFromWaitingRoom?: number;
    whitelistedDomainsForWaitingRoom?: string;
}
export declare class UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
    autoSecurity?: boolean;
    embedPasswordInJoinLink?: boolean;
    encryptionType?: UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
    endToEndEncryptedMeetings?: boolean;
    meetingPassword?: boolean;
    meetingPasswordRequirement?: UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
    phonePassword?: boolean;
    pmiPassword?: boolean;
    requirePasswordForScheduledMeeting?: boolean;
    requirePasswordForScheduledWebinar?: boolean;
    waitingRoom?: boolean;
    waitingRoomSettings?: UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
    webinarPassword?: boolean;
}
export declare class UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettings extends SpeakeasyBase {
    meetingSecurity?: UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity;
}
export declare class UpdateGroupSettingsRequests extends SpeakeasyBase {
    oneOf?: any;
    oneOf1?: any;
}
export declare class UpdateGroupSettingsRequest extends SpeakeasyBase {
    pathParams: UpdateGroupSettingsPathParams;
    queryParams: UpdateGroupSettingsQueryParams;
    request?: UpdateGroupSettingsRequests;
}
export declare class UpdateGroupSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateGroupSettings204ApplicationJSONAny?: any;
}
