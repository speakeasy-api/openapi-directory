import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupLockSettingsPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class GetGroupLockSettingsQueryParams extends SpeakeasyBase {
    customQueryFields?: string;
    option?: string;
}
export declare class GetGroupLockSettingsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class GetGroupLockSettings200ApplicationJson1EmailNotification extends SpeakeasyBase {
    alternativeHostReminder?: boolean;
    cancelMeetingReminder?: boolean;
    cloudRecordingAvailableReminder?: boolean;
    jbhReminder?: boolean;
    scheduleForHostReminder?: boolean;
}
export declare class GetGroupLockSettings200ApplicationJson1InMeeting extends SpeakeasyBase {
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
export declare class GetGroupLockSettings200ApplicationJson1RecordingIpAddressAccessControl extends SpeakeasyBase {
    enable?: boolean;
    ipAddressesOrRanges?: string;
}
export declare class GetGroupLockSettings200ApplicationJson1Recording extends SpeakeasyBase {
    accountUserAccessRecording?: boolean;
    autoDeleteCmr?: boolean;
    autoRecording?: string;
    cloudRecording?: boolean;
    cloudRecordingDownload?: boolean;
    hostDeleteCloudRecording?: boolean;
    ipAddressAccessControl?: GetGroupLockSettings200ApplicationJson1RecordingIpAddressAccessControl;
    localRecording?: boolean;
    preventHostAccessRecording?: boolean;
    recordingAuthentication?: boolean;
}
export declare class GetGroupLockSettings200ApplicationJson1ScheduleMeeting extends SpeakeasyBase {
    audioType?: boolean;
    embedPasswordInJoinLink?: boolean;
    forcePmiJbhPassword?: boolean;
    hostVideo?: boolean;
    joinBeforeHost?: boolean;
    meetingAuthentication?: boolean;
    muteUponEntry?: boolean;
    participantVideo?: boolean;
    pstnPasswordProtected?: boolean;
    requirePasswordForInstantMeetings?: boolean;
    requirePasswordForPmiMeetings?: boolean;
    requirePasswordForSchedulingNewMeetings?: boolean;
    upcomingMeetingReminder?: boolean;
}
export declare class GetGroupLockSettings200ApplicationJson1Telephony extends SpeakeasyBase {
    telephonyRegions?: boolean;
    thirdPartyAudio?: boolean;
}
export declare class GetGroupLockSettings200ApplicationJson1 extends SpeakeasyBase {
    emailNotification?: GetGroupLockSettings200ApplicationJson1EmailNotification;
    inMeeting?: GetGroupLockSettings200ApplicationJson1InMeeting;
    recording?: GetGroupLockSettings200ApplicationJson1Recording;
    scheduleMeeting?: GetGroupLockSettings200ApplicationJson1ScheduleMeeting;
    telephony?: GetGroupLockSettings200ApplicationJson1Telephony;
}
export declare enum GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
/**
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
export declare class GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement extends SpeakeasyBase {
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
export declare class GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings extends SpeakeasyBase {
    participantsToPlaceInWaitingRoom?: number;
    usersWhoCanAdmitParticipantsFromWaitingRoom?: number;
    whitelistedDomainsForWaitingRoom?: string;
}
export declare class GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity extends SpeakeasyBase {
    autoSecurity?: boolean;
    embedPasswordInJoinLink?: boolean;
    encryptionType?: GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
    endToEndEncryptedMeetings?: boolean;
    meetingPassword?: boolean;
    meetingPasswordRequirement?: GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
    phonePassword?: boolean;
    pmiPassword?: boolean;
    requirePasswordForScheduledMeeting?: boolean;
    requirePasswordForScheduledWebinar?: boolean;
    waitingRoom?: boolean;
    waitingRoomSettings?: GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
    webinarPassword?: boolean;
}
export declare class GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettings extends SpeakeasyBase {
    meetingSecurity?: GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
}
export declare class GetGroupLockSettingsRequest extends SpeakeasyBase {
    pathParams: GetGroupLockSettingsPathParams;
    queryParams: GetGroupLockSettingsQueryParams;
    security: GetGroupLockSettingsSecurity;
}
export declare class GetGroupLockSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getGroupLockSettings200ApplicationJSONOneOf?: any;
}
