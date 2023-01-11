import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupLockedSettingsPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class GroupLockedSettingsQueryParams extends SpeakeasyBase {
    customQueryFields?: string;
    option?: string;
}
export declare class GroupLockedSettingsApplicationJson1EmailNotification extends SpeakeasyBase {
    alternativeHostReminder?: boolean;
    cancelMeetingReminder?: boolean;
    cloudRecordingAvailableReminder?: boolean;
    jbhReminder?: boolean;
    scheduleForHostReminder?: boolean;
}
export declare class GroupLockedSettingsApplicationJson1InMeeting extends SpeakeasyBase {
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
    e2eEncryption?: boolean;
    entryExitChime?: string;
    farEndCameraControl?: boolean;
    feedback?: boolean;
    fileTransfer?: boolean;
    groupHd?: boolean;
    nonVerbalFeedback?: boolean;
    originalAudio?: boolean;
    polling?: boolean;
    postMeetingFeedback?: boolean;
    privateChat?: boolean;
    remoteControl?: boolean;
    remoteSupport?: boolean;
    requestPermissionToUnmute?: boolean;
    screenSharing?: boolean;
    sendingDefaultEmailInvites?: boolean;
    showBrowserJoinLink?: boolean;
    showMeetingControlToolbar?: boolean;
    stereoAudio?: boolean;
    useHtmlFormatEmail?: boolean;
    virtualBackground?: boolean;
    waitingRoom?: boolean;
    whiteboard?: boolean;
}
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
**/
export declare class GroupLockedSettingsApplicationJson1RecordingIpAddressAccessControl extends SpeakeasyBase {
    enable?: boolean;
    ipAddressesOrRanges?: string;
}
export declare class GroupLockedSettingsApplicationJson1Recording extends SpeakeasyBase {
    accountUserAccessRecording?: boolean;
    autoDeleteCmr?: boolean;
    autoRecording?: string;
    cloudRecording?: boolean;
    cloudRecordingDownload?: boolean;
    hostDeleteCloudRecording?: boolean;
    ipAddressAccessControl?: GroupLockedSettingsApplicationJson1RecordingIpAddressAccessControl;
    localRecording?: boolean;
    recordingAuthentication?: string;
}
export declare class GroupLockedSettingsApplicationJson1ScheduleMeeting extends SpeakeasyBase {
    audioType?: boolean;
    embedPasswordInJoinLink?: boolean;
    forcePmiJbhPassword?: boolean;
    hostVideo?: boolean;
    joinBeforeHost?: boolean;
    meetingAuthentication?: boolean;
    muteUponEntry?: boolean;
    participantVideo?: boolean;
    personalMeeting?: boolean;
    pstnPasswordProtected?: boolean;
    requirePasswordForInstantMeetings?: boolean;
    requirePasswordForPmiMeetings?: boolean;
    requirePasswordForSchedulingNewMeetings?: boolean;
    upcomingMeetingReminder?: boolean;
}
export declare class GroupLockedSettingsApplicationJson1Telephony extends SpeakeasyBase {
    telephonyRegions?: boolean;
    thirdPartyAudio?: boolean;
}
export declare class GroupLockedSettingsApplicationJson1 extends SpeakeasyBase {
    emailNotification?: GroupLockedSettingsApplicationJson1EmailNotification;
    inMeeting?: GroupLockedSettingsApplicationJson1InMeeting;
    recording?: GroupLockedSettingsApplicationJson1Recording;
    scheduleMeeting?: GroupLockedSettingsApplicationJson1ScheduleMeeting;
    telephony?: GroupLockedSettingsApplicationJson1Telephony;
}
export declare enum GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
/**
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export declare class GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
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
export declare class GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
    participantsToPlaceInWaitingRoom?: number;
    usersWhoCanAdmitParticipantsFromWaitingRoom?: number;
    whitelistedDomainsForWaitingRoom?: string;
}
export declare class GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
    autoSecurity?: boolean;
    embedPasswordInJoinLink?: boolean;
    encryptionType?: GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
    endToEndEncryptedMeetings?: boolean;
    meetingPassword?: boolean;
    meetingPasswordRequirement?: GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
    phonePassword?: boolean;
    pmiPassword?: boolean;
    requirePasswordForScheduledMeeting?: boolean;
    requirePasswordForScheduledWebinar?: boolean;
    waitingRoom?: boolean;
    waitingRoomSettings?: GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
    webinarPassword?: boolean;
}
export declare class GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettings extends SpeakeasyBase {
    meetingSecurity?: GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
}
export declare class GroupLockedSettingsMultipartFormData1EmailNotification extends SpeakeasyBase {
    alternativeHostReminder?: boolean;
    cancelMeetingReminder?: boolean;
    cloudRecordingAvailableReminder?: boolean;
    jbhReminder?: boolean;
    scheduleForHostReminder?: boolean;
}
export declare class GroupLockedSettingsMultipartFormData1InMeeting extends SpeakeasyBase {
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
    e2eEncryption?: boolean;
    entryExitChime?: string;
    farEndCameraControl?: boolean;
    feedback?: boolean;
    fileTransfer?: boolean;
    groupHd?: boolean;
    nonVerbalFeedback?: boolean;
    originalAudio?: boolean;
    polling?: boolean;
    postMeetingFeedback?: boolean;
    privateChat?: boolean;
    remoteControl?: boolean;
    remoteSupport?: boolean;
    requestPermissionToUnmute?: boolean;
    screenSharing?: boolean;
    sendingDefaultEmailInvites?: boolean;
    showBrowserJoinLink?: boolean;
    showMeetingControlToolbar?: boolean;
    stereoAudio?: boolean;
    useHtmlFormatEmail?: boolean;
    virtualBackground?: boolean;
    waitingRoom?: boolean;
    whiteboard?: boolean;
}
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
**/
export declare class GroupLockedSettingsMultipartFormData1RecordingIpAddressAccessControl extends SpeakeasyBase {
    enable?: boolean;
    ipAddressesOrRanges?: string;
}
export declare class GroupLockedSettingsMultipartFormData1Recording extends SpeakeasyBase {
    accountUserAccessRecording?: boolean;
    autoDeleteCmr?: boolean;
    autoRecording?: string;
    cloudRecording?: boolean;
    cloudRecordingDownload?: boolean;
    hostDeleteCloudRecording?: boolean;
    ipAddressAccessControl?: GroupLockedSettingsMultipartFormData1RecordingIpAddressAccessControl;
    localRecording?: boolean;
    recordingAuthentication?: string;
}
export declare class GroupLockedSettingsMultipartFormData1ScheduleMeeting extends SpeakeasyBase {
    audioType?: boolean;
    embedPasswordInJoinLink?: boolean;
    forcePmiJbhPassword?: boolean;
    hostVideo?: boolean;
    joinBeforeHost?: boolean;
    meetingAuthentication?: boolean;
    muteUponEntry?: boolean;
    participantVideo?: boolean;
    personalMeeting?: boolean;
    pstnPasswordProtected?: boolean;
    requirePasswordForInstantMeetings?: boolean;
    requirePasswordForPmiMeetings?: boolean;
    requirePasswordForSchedulingNewMeetings?: boolean;
    upcomingMeetingReminder?: boolean;
}
export declare class GroupLockedSettingsMultipartFormData1Telephony extends SpeakeasyBase {
    telephonyRegions?: boolean;
    thirdPartyAudio?: boolean;
}
export declare class GroupLockedSettingsMultipartFormData1 extends SpeakeasyBase {
    emailNotification?: GroupLockedSettingsMultipartFormData1EmailNotification;
    inMeeting?: GroupLockedSettingsMultipartFormData1InMeeting;
    recording?: GroupLockedSettingsMultipartFormData1Recording;
    scheduleMeeting?: GroupLockedSettingsMultipartFormData1ScheduleMeeting;
    telephony?: GroupLockedSettingsMultipartFormData1Telephony;
}
export declare enum GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
/**
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export declare class GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
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
export declare class GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
    participantsToPlaceInWaitingRoom?: number;
    usersWhoCanAdmitParticipantsFromWaitingRoom?: number;
    whitelistedDomainsForWaitingRoom?: string;
}
export declare class GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
    autoSecurity?: boolean;
    embedPasswordInJoinLink?: boolean;
    encryptionType?: GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
    endToEndEncryptedMeetings?: boolean;
    meetingPassword?: boolean;
    meetingPasswordRequirement?: GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
    phonePassword?: boolean;
    pmiPassword?: boolean;
    requirePasswordForScheduledMeeting?: boolean;
    requirePasswordForScheduledWebinar?: boolean;
    waitingRoom?: boolean;
    waitingRoomSettings?: GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
    webinarPassword?: boolean;
}
export declare class GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettings extends SpeakeasyBase {
    meetingSecurity?: GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity;
}
export declare class GroupLockedSettingsRequests extends SpeakeasyBase {
    oneOf?: any;
    oneOf1?: any;
}
export declare class GroupLockedSettingsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class GroupLockedSettingsRequest extends SpeakeasyBase {
    pathParams: GroupLockedSettingsPathParams;
    queryParams: GroupLockedSettingsQueryParams;
    request?: GroupLockedSettingsRequests;
    security: GroupLockedSettingsSecurity;
}
export declare class GroupLockedSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    groupLockedSettings204ApplicationJSONAny?: any;
}
