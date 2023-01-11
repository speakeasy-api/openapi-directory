"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfile = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfileRecordingStorageLocation = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenEnum = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingEntryExitChimeEnum = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsFeature = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification = exports.AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettings = exports.AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity = exports.AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = exports.AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = exports.AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettings = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsZoomRooms = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTsp = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephony = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephonyTelephonyRegions = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurity = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurityPasswordRequirement = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingAudioTypeEnum = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingRecordingPasswordRequirement = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingIpAddressAccessControl = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingAutoRecordingEnum = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchive = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchiveSettings = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfile = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfileRecordingStorageLocation = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenEnum = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettings = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingEntryExitChimeEnum = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsFeature = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification = exports.AccountSettingsUpdateQueryParams = exports.AccountSettingsUpdateOptionEnum = exports.AccountSettingsUpdatePathParams = void 0;
exports.AccountSettingsUpdateResponse = exports.AccountSettingsUpdateRequest = exports.AccountSettingsUpdateRequests = exports.AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings = exports.AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity = exports.AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = exports.AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = exports.AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettings = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephonyTelephonyRegions = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnum = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingIpAddressAccessControl = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingAutoRecordingEnum = void 0;
var utils_1 = require("../../../internal/utils");
var AccountSettingsUpdatePathParams = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdatePathParams, _super);
    function AccountSettingsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdatePathParams.prototype, "accountId", void 0);
    return AccountSettingsUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdatePathParams = AccountSettingsUpdatePathParams;
var AccountSettingsUpdateOptionEnum;
(function (AccountSettingsUpdateOptionEnum) {
    AccountSettingsUpdateOptionEnum["MeetingAuthentication"] = "meeting_authentication";
    AccountSettingsUpdateOptionEnum["RecordingAuthentication"] = "recording_authentication";
    AccountSettingsUpdateOptionEnum["Security"] = "security";
    AccountSettingsUpdateOptionEnum["MeetingSecurity"] = "meeting_security";
})(AccountSettingsUpdateOptionEnum = exports.AccountSettingsUpdateOptionEnum || (exports.AccountSettingsUpdateOptionEnum = {}));
var AccountSettingsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateQueryParams, _super);
    function AccountSettingsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=option" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateQueryParams.prototype, "option", void 0);
    return AccountSettingsUpdateQueryParams;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateQueryParams = AccountSettingsUpdateQueryParams;
// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification
/**
 * Account Settings: Notification.
**/
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification, _super);
    function AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_host_reminder" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification.prototype, "alternativeHostReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancel_meeting_reminder" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification.prototype, "cancelMeetingReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording_avaliable_reminder" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification.prototype, "cloudRecordingAvaliableReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jbh_reminder" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification.prototype, "jbhReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=low_host_count_reminder" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification.prototype, "lowHostCountReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule_for_reminder" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification.prototype, "scheduleForReminder", void 0);
    return AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification = AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification;
// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsFeature
/**
 * Account Settings: Feature.
**/
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsFeature = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsFeature, _super);
    function AccountSettingsUpdateApplicationJsonUpdateAccountSettingsFeature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_capacity" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsFeature.prototype, "meetingCapacity", void 0);
    return AccountSettingsUpdateApplicationJsonUpdateAccountSettingsFeature;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsFeature = AccountSettingsUpdateApplicationJsonUpdateAccountSettingsFeature;
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingEntryExitChimeEnum;
(function (AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingEntryExitChimeEnum) {
    AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingEntryExitChimeEnum["Host"] = "host";
    AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingEntryExitChimeEnum["All"] = "all";
    AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingEntryExitChimeEnum["None"] = "none";
})(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingEntryExitChimeEnum = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingEntryExitChimeEnum || (exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingEntryExitChimeEnum = {}));
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles, _super);
    function AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_default" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles.prototype, "isDefault", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles.prototype, "type", void 0);
    return AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles = AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles;
// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettings
/**
 * Settings to manage virtual background.
**/
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettings = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettings, _super);
    function AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_upload_custom" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettings.prototype, "allowUploadCustom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_videos" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettings.prototype, "allowVideos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettings.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=files", elemType: AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles }),
        __metadata("design:type", Array)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettings.prototype, "files", void 0);
    return AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettings;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettings = AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettings;
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenEnum;
(function (AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenEnum) {
    AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenEnum["Host"] = "host";
    AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenEnum["All"] = "all";
})(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenEnum = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenEnum || (exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenEnum = {}));
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum;
(function (AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum) {
    AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum["Host"] = "host";
    AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum["All"] = "all";
})(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum || (exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = {}));
// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting
/**
 * Account Settings: In Meeting.
**/
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting, _super);
    function AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alert_guest_join" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "alertGuestJoin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_live_streaming" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "allowLiveStreaming", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_participants_to_rename" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "allowParticipantsToRename", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_show_zoom_windows" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "allowShowZoomWindows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annotation" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "annotation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=anonymous_question_answer" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "anonymousQuestionAnswer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendee_on_hold" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "attendeeOnHold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_answer" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "autoAnswer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_saving_chat" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "autoSavingChat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=breakout_room" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "breakoutRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chat" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "chat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=closed_caption" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "closedCaption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=co_host" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "coHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_data_center_regions" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "customDataCenterRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_live_streaming_service" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "customLiveStreamingService", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_service_instructions" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "customServiceInstructions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_center_regions" }),
        __metadata("design:type", Array)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "dataCenterRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dscp_audio" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "dscpAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dscp_marking" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "dscpMarking", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dscp_video" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "dscpVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=e2e_encryption" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "e2eEncryption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entry_exit_chime" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "entryExitChime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=far_end_camera_control" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "farEndCameraControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=feedback" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "feedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_transfer" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "fileTransfer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_hd" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "groupHd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_reactions" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "meetingReactions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=original_audio" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "originalAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=p2p_connetion" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "p2pConnetion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=p2p_ports" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "p2pPorts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=polling" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "polling", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ports_range" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "portsRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=post_meeting_feedback" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "postMeetingFeedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=private_chat" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "privateChat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_play_own_voice" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "recordPlayOwnVoice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remote_control" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "remoteControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_permission_to_unmute" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "requestPermissionToUnmute", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=screen_sharing" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "screenSharing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sending_default_email_invites" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "sendingDefaultEmailInvites", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_a_join_from_your_browser_link" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "showAJoinFromYourBrowserLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_meeting_control_toolbar" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "showMeetingControlToolbar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stereo_audio" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "stereoAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_html_format_email" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "useHtmlFormatEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtual_background" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "virtualBackground", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtual_background_settings" }),
        __metadata("design:type", AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettings)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "virtualBackgroundSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=watermark" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "watermark", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webinar_question_answer" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "webinarQuestionAnswer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=whiteboard" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "whiteboard", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=who_can_share_screen" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "whoCanShareScreen", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=who_can_share_screen_when_someone_is_sharing" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "whoCanShareScreenWhenSomeoneIsSharing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workplace_by_facebook" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting.prototype, "workplaceByFacebook", void 0);
    return AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting = AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting;
// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration
/**
 * Account Settings: Integration.
**/
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration, _super);
    function AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=box" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration.prototype, "box", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dropbox" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration.prototype, "dropbox", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=google_calendar" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration.prototype, "googleCalendar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=google_drive" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration.prototype, "googleDrive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kubi" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration.prototype, "kubi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=microsoft_one_drive" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration.prototype, "microsoftOneDrive", void 0);
    return AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration = AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration;
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfileRecordingStorageLocation = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfileRecordingStorageLocation, _super);
    function AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfileRecordingStorageLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowed_values" }),
        __metadata("design:type", Array)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfileRecordingStorageLocation.prototype, "allowedValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfileRecordingStorageLocation.prototype, "value", void 0);
    return AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfileRecordingStorageLocation;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfileRecordingStorageLocation = AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfileRecordingStorageLocation;
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfile = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfile, _super);
    function AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_storage_location" }),
        __metadata("design:type", AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfileRecordingStorageLocation)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfile.prototype, "recordingStorageLocation", void 0);
    return AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfile;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfile = AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfile;
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchiveSettings = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchiveSettings, _super);
    function AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchiveSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_file" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchiveSettings.prototype, "audioFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cc_transcript_file" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchiveSettings.prototype, "ccTranscriptFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chat_file" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchiveSettings.prototype, "chatFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chat_with_sender_email" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchiveSettings.prototype, "chatWithSenderEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video_file" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchiveSettings.prototype, "videoFile", void 0);
    return AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchiveSettings;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchiveSettings = AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchiveSettings;
// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchive
/**
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted with archiving solution access by the Zoom support team.
**/
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchive = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchive, _super);
    function AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchive.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchiveSettings)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchive.prototype, "settings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchive.prototype, "type", void 0);
    return AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchive;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchive = AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchive;
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingAutoRecordingEnum;
(function (AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingAutoRecordingEnum) {
    AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingAutoRecordingEnum["Local"] = "local";
    AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingAutoRecordingEnum["Cloud"] = "cloud";
    AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingAutoRecordingEnum["None"] = "none";
})(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingAutoRecordingEnum = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingAutoRecordingEnum || (exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingAutoRecordingEnum = {}));
// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingIpAddressAccessControl
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
**/
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingIpAddressAccessControl = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingIpAddressAccessControl, _super);
    function AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingIpAddressAccessControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingIpAddressAccessControl.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_addresses_or_ranges" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingIpAddressAccessControl.prototype, "ipAddressesOrRanges", void 0);
    return AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingIpAddressAccessControl;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingIpAddressAccessControl = AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingIpAddressAccessControl;
// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingRecordingPasswordRequirement
/**
 * This object represents the minimum password requirements set for recordings via Account Recording Settings.
**/
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingRecordingPasswordRequirement = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingRecordingPasswordRequirement, _super);
    function AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingRecordingPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_letter" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingRecordingPasswordRequirement.prototype, "haveLetter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_number" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingRecordingPasswordRequirement.prototype, "haveNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingRecordingPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingRecordingPasswordRequirement.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_allow_numeric" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingRecordingPasswordRequirement.prototype, "onlyAllowNumeric", void 0);
    return AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingRecordingPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingRecordingPasswordRequirement = AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingRecordingPasswordRequirement;
// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording
/**
 * Account Settings: Recording.
**/
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording, _super);
    function AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_user_access_recording" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording.prototype, "accountUserAccessRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_recovery_deleted_cloud_recordings" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording.prototype, "allowRecoveryDeletedCloudRecordings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=archive" }),
        __metadata("design:type", AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchive)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording.prototype, "archive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_delete_cmr" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording.prototype, "autoDeleteCmr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_delete_cmr_days" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording.prototype, "autoDeleteCmrDays", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_recording" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording.prototype, "autoRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording.prototype, "cloudRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording_download" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording.prototype, "cloudRecordingDownload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording_download_host" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording.prototype, "cloudRecordingDownloadHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_delete_cloud_recording" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording.prototype, "hostDeleteCloudRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_address_access_control" }),
        __metadata("design:type", AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingIpAddressAccessControl)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording.prototype, "ipAddressAccessControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=local_recording" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording.prototype, "localRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prevent_host_access_recording" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording.prototype, "preventHostAccessRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_audio_file" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording.prototype, "recordAudioFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_gallery_view" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording.prototype, "recordGalleryView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_speaker_view" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording.prototype, "recordSpeakerView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_audio_transcript" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording.prototype, "recordingAudioTranscript", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_disclaimer" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording.prototype, "recordingDisclaimer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_password_requirement" }),
        __metadata("design:type", AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingRecordingPasswordRequirement)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording.prototype, "recordingPasswordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required_password_for_existing_cloud_recordings" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording.prototype, "requiredPasswordForExistingCloudRecordings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=save_chat_text" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording.prototype, "saveChatText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_timestamp" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording.prototype, "showTimestamp", void 0);
    return AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording = AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording;
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingAudioTypeEnum;
(function (AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingAudioTypeEnum) {
    AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingAudioTypeEnum["Both"] = "both";
    AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingAudioTypeEnum["Telephony"] = "telephony";
    AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingAudioTypeEnum["Voip"] = "voip";
    AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingAudioTypeEnum["ThirdParty"] = "thirdParty";
})(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingAudioTypeEnum = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingAudioTypeEnum || (exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingAudioTypeEnum = {}));
// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement
/**
 * Account wide meeting/webinar [password requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement, _super);
    function AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consecutive_characters_length" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement.prototype, "consecutiveCharactersLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_letter" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement.prototype, "haveLetter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_number" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement.prototype, "haveNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_upper_and_lower_characters" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement.prototype, "haveUpperAndLowerCharacters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_allow_numeric" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement.prototype, "onlyAllowNumeric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weak_enhance_detection" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement.prototype, "weakEnhanceDetection", void 0);
    return AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement = AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement;
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum;
(function (AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum) {
    AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum["JbhOnly"] = "jbh_only";
    AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum["All"] = "all";
    AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum["None"] = "none";
})(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum || (exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum = {}));
// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting
/**
 * Account Settings: Schedule Meeting.
**/
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting, _super);
    function AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_type" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting.prototype, "audioType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting.prototype, "enforceLogin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login_domains" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting.prototype, "enforceLoginDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login_with_domains" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting.prototype, "enforceLoginWithDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=force_pmi_jbh_password" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting.prototype, "forcePmiJbhPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_video" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting.prototype, "hostVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_before_host" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting.prototype, "joinBeforeHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password_requirement" }),
        __metadata("design:type", AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting.prototype, "meetingPasswordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=not_store_meeting_topic" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting.prototype, "notStoreMeetingTopic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participant_video" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting.prototype, "participantVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=personal_meeting" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting.prototype, "personalMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_instant_meetings" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting.prototype, "requirePasswordForInstantMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_pmi_meetings" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting.prototype, "requirePasswordForPmiMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_meetings" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting.prototype, "requirePasswordForScheduledMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduling_new_meetings" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting.prototype, "requirePasswordForSchedulingNewMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_pmi_for_instant_meetings" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting.prototype, "usePmiForInstantMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_pmi_for_scheduled_meetings" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting.prototype, "usePmiForScheduledMeetings", void 0);
    return AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting = AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting;
// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurityPasswordRequirement
/**
 * This object refers to the [enhanced password rules](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) that allows Zoom account admins and owners to apply extra requiremets to the users' Zoom login password.
**/
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurityPasswordRequirement = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurityPasswordRequirement, _super);
    function AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurityPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consecutive_characters_length" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurityPasswordRequirement.prototype, "consecutiveCharactersLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurityPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minimum_password_length" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurityPasswordRequirement.prototype, "minimumPasswordLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weak_enhance_detection" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurityPasswordRequirement.prototype, "weakEnhanceDetection", void 0);
    return AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurityPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurityPasswordRequirement = AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurityPasswordRequirement;
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum;
(function (AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum) {
    AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum["All"] = "all";
    AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum["Group"] = "group";
    AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum["Role"] = "role";
    AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum["None"] = "none";
})(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum = exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum || (exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum = {}));
// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurity
/**
 * [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
**/
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurity = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurity, _super);
    function AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=admin_change_name_pic" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurity.prototype, "adminChangeNamePic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hide_billing_info" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurity.prototype, "hideBillingInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=import_photos_from_devices" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurity.prototype, "importPhotosFromDevices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password_requirement" }),
        __metadata("design:type", AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurityPasswordRequirement)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurity.prototype, "passwordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sign_again_period_for_inactivity_on_client" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurity.prototype, "signAgainPeriodForInactivityOnClient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sign_again_period_for_inactivity_on_web" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurity.prototype, "signAgainPeriodForInactivityOnWeb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sign_in_with_two_factor_auth" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurity.prototype, "signInWithTwoFactorAuth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sign_in_with_two_factor_auth_groups" }),
        __metadata("design:type", Array)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurity.prototype, "signInWithTwoFactorAuthGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sign_in_with_two_factor_auth_roles" }),
        __metadata("design:type", Array)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurity.prototype, "signInWithTwoFactorAuthRoles", void 0);
    return AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurity;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurity = AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurity;
// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephonyTelephonyRegions
/**
 * Indicates where most of the participants call into or call from duriing a meeting.
**/
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephonyTelephonyRegions = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephonyTelephonyRegions, _super);
    function AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephonyTelephonyRegions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=selection_values" }),
        __metadata("design:type", Array)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephonyTelephonyRegions.prototype, "selectionValues", void 0);
    return AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephonyTelephonyRegions;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephonyTelephonyRegions = AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephonyTelephonyRegions;
// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephony
/**
 * Account Settings Update: Telephony.
**/
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephony = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephony, _super);
    function AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephony() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_conference_info" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephony.prototype, "audioConferenceInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=telephony_regions" }),
        __metadata("design:type", AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephonyTelephonyRegions)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephony.prototype, "telephonyRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=third_party_audio" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephony.prototype, "thirdPartyAudio", void 0);
    return AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephony;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephony = AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephony;
// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTsp
/**
 * Account Settings: TSP.
**/
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTsp = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTsp, _super);
    function AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTsp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_out" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTsp.prototype, "callOut", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_out_countries" }),
        __metadata("design:type", Array)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTsp.prototype, "callOutCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_toll_free_numbers" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTsp.prototype, "displayTollFreeNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_international_numbers_link" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTsp.prototype, "showInternationalNumbersLink", void 0);
    return AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTsp;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTsp = AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTsp;
// AccountSettingsUpdateApplicationJsonUpdateAccountSettingsZoomRooms
/**
 * Account Settings: Zoom Rooms.
**/
var AccountSettingsUpdateApplicationJsonUpdateAccountSettingsZoomRooms = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsZoomRooms, _super);
    function AccountSettingsUpdateApplicationJsonUpdateAccountSettingsZoomRooms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_start_stop_scheduled_meetings" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsZoomRooms.prototype, "autoStartStopScheduledMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cmr_for_instant_meeting" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsZoomRooms.prototype, "cmrForInstantMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=force_private_meeting" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsZoomRooms.prototype, "forcePrivateMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hide_host_information" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsZoomRooms.prototype, "hideHostInformation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=list_meetings_with_calendar" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsZoomRooms.prototype, "listMeetingsWithCalendar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_airplay_manually" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsZoomRooms.prototype, "startAirplayManually", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ultrasonic" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsZoomRooms.prototype, "ultrasonic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upcoming_meeting_alert" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsZoomRooms.prototype, "upcomingMeetingAlert", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weekly_system_restart" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsZoomRooms.prototype, "weeklySystemRestart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zr_post_meeting_feedback" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettingsZoomRooms.prototype, "zrPostMeetingFeedback", void 0);
    return AccountSettingsUpdateApplicationJsonUpdateAccountSettingsZoomRooms;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettingsZoomRooms = AccountSettingsUpdateApplicationJsonUpdateAccountSettingsZoomRooms;
var AccountSettingsUpdateApplicationJsonUpdateAccountSettings = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateApplicationJsonUpdateAccountSettings, _super);
    function AccountSettingsUpdateApplicationJsonUpdateAccountSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email_notification" }),
        __metadata("design:type", AccountSettingsUpdateApplicationJsonUpdateAccountSettingsEmailNotification)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettings.prototype, "emailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=feature" }),
        __metadata("design:type", AccountSettingsUpdateApplicationJsonUpdateAccountSettingsFeature)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettings.prototype, "feature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=in_meeting" }),
        __metadata("design:type", AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettings.prototype, "inMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=integration" }),
        __metadata("design:type", AccountSettingsUpdateApplicationJsonUpdateAccountSettingsIntegration)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettings.prototype, "integration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=profile" }),
        __metadata("design:type", AccountSettingsUpdateApplicationJsonUpdateAccountSettingsProfile)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettings.prototype, "profile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording" }),
        __metadata("design:type", AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecording)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettings.prototype, "recording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule_meeting" }),
        __metadata("design:type", AccountSettingsUpdateApplicationJsonUpdateAccountSettingsScheduleMeeting)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettings.prototype, "scheduleMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=security" }),
        __metadata("design:type", AccountSettingsUpdateApplicationJsonUpdateAccountSettingsSecurity)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettings.prototype, "security", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=telephony" }),
        __metadata("design:type", AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephony)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettings.prototype, "telephony", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tsp" }),
        __metadata("design:type", AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTsp)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettings.prototype, "tsp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zoom_rooms" }),
        __metadata("design:type", AccountSettingsUpdateApplicationJsonUpdateAccountSettingsZoomRooms)
    ], AccountSettingsUpdateApplicationJsonUpdateAccountSettings.prototype, "zoomRooms", void 0);
    return AccountSettingsUpdateApplicationJsonUpdateAccountSettings;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateApplicationJsonUpdateAccountSettings = AccountSettingsUpdateApplicationJsonUpdateAccountSettings;
var AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
(function (AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum) {
    AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum["EnhancedEncryption"] = "enhanced_encryption";
    AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum["E2ee"] = "e2ee";
})(AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = exports.AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum || (exports.AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = {}));
// AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
/**
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
var AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement, _super);
    function AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consecutive_characters_length" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "consecutiveCharactersLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_letter" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveLetter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_number" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_upper_and_lower_characters" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveUpperAndLowerCharacters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_allow_numeric" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "onlyAllowNumeric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weak_enhance_detection" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "weakEnhanceDetection", void 0);
    return AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
// AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
/**
 * Specify the settings to be applied if waiting room is enabled.
**/
var AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings, _super);
    function AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants_to_place_in_waiting_room" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "participantsToPlaceInWaitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users_who_can_admit_participants_from_waiting_room" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "usersWhoCanAdmitParticipantsFromWaitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=whitelisted_domains_for_waiting_room" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "whitelistedDomainsForWaitingRoom", void 0);
    return AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
var AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity, _super);
    function AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_security" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "autoSecurity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed_password_in_join_link" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "embedPasswordInJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryption_type" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "encryptionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_to_end_encrypted_meetings" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "endToEndEncryptedMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "meetingPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password_requirement" }),
        __metadata("design:type", AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement)
    ], AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "meetingPasswordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_password" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "phonePassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pmi_password" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "pmiPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_meeting" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "requirePasswordForScheduledMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_webinar" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "requirePasswordForScheduledWebinar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room_settings" }),
        __metadata("design:type", AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings)
    ], AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "waitingRoomSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webinar_password" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "webinarPassword", void 0);
    return AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity = AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
var AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettings = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettings, _super);
    function AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_security" }),
        __metadata("design:type", AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity)
    ], AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettings.prototype, "meetingSecurity", void 0);
    return AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettings;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettings = AccountSettingsUpdateApplicationJsonMeetingWebinarSecuritySettings;
// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification
/**
 * Account Settings: Notification.
**/
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification, _super);
    function AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_host_reminder" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification.prototype, "alternativeHostReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancel_meeting_reminder" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification.prototype, "cancelMeetingReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording_avaliable_reminder" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification.prototype, "cloudRecordingAvaliableReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jbh_reminder" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification.prototype, "jbhReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=low_host_count_reminder" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification.prototype, "lowHostCountReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule_for_reminder" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification.prototype, "scheduleForReminder", void 0);
    return AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification = AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification;
// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsFeature
/**
 * Account Settings: Feature.
**/
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsFeature = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsFeature, _super);
    function AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsFeature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_capacity" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsFeature.prototype, "meetingCapacity", void 0);
    return AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsFeature;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsFeature = AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsFeature;
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingEntryExitChimeEnum;
(function (AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingEntryExitChimeEnum) {
    AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingEntryExitChimeEnum["Host"] = "host";
    AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingEntryExitChimeEnum["All"] = "all";
    AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingEntryExitChimeEnum["None"] = "none";
})(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingEntryExitChimeEnum = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingEntryExitChimeEnum || (exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingEntryExitChimeEnum = {}));
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles, _super);
    function AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_default" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles.prototype, "isDefault", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles.prototype, "type", void 0);
    return AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles = AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles;
// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings
/**
 * Settings to manage virtual background.
**/
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings, _super);
    function AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_upload_custom" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings.prototype, "allowUploadCustom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_videos" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings.prototype, "allowVideos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=files", elemType: AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles }),
        __metadata("design:type", Array)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings.prototype, "files", void 0);
    return AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings = AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings;
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenEnum;
(function (AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenEnum) {
    AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenEnum["Host"] = "host";
    AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenEnum["All"] = "all";
})(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenEnum = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenEnum || (exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenEnum = {}));
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum;
(function (AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum) {
    AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum["Host"] = "host";
    AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum["All"] = "all";
})(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum || (exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = {}));
// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting
/**
 * Account Settings: In Meeting.
**/
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting, _super);
    function AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alert_guest_join" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "alertGuestJoin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_live_streaming" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "allowLiveStreaming", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_participants_to_rename" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "allowParticipantsToRename", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_show_zoom_windows" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "allowShowZoomWindows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annotation" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "annotation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=anonymous_question_answer" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "anonymousQuestionAnswer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendee_on_hold" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "attendeeOnHold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_answer" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "autoAnswer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_saving_chat" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "autoSavingChat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=breakout_room" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "breakoutRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chat" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "chat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=closed_caption" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "closedCaption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=co_host" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "coHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_data_center_regions" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "customDataCenterRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_live_streaming_service" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "customLiveStreamingService", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_service_instructions" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "customServiceInstructions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_center_regions" }),
        __metadata("design:type", Array)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "dataCenterRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dscp_audio" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "dscpAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dscp_marking" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "dscpMarking", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dscp_video" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "dscpVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=e2e_encryption" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "e2eEncryption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entry_exit_chime" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "entryExitChime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=far_end_camera_control" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "farEndCameraControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=feedback" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "feedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_transfer" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "fileTransfer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_hd" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "groupHd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_reactions" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "meetingReactions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=original_audio" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "originalAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=p2p_connetion" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "p2pConnetion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=p2p_ports" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "p2pPorts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=polling" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "polling", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ports_range" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "portsRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=post_meeting_feedback" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "postMeetingFeedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=private_chat" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "privateChat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_play_own_voice" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "recordPlayOwnVoice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remote_control" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "remoteControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_permission_to_unmute" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "requestPermissionToUnmute", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=screen_sharing" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "screenSharing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sending_default_email_invites" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "sendingDefaultEmailInvites", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_a_join_from_your_browser_link" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "showAJoinFromYourBrowserLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_meeting_control_toolbar" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "showMeetingControlToolbar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stereo_audio" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "stereoAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_html_format_email" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "useHtmlFormatEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtual_background" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "virtualBackground", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtual_background_settings" }),
        __metadata("design:type", AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "virtualBackgroundSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=watermark" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "watermark", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webinar_question_answer" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "webinarQuestionAnswer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=whiteboard" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "whiteboard", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=who_can_share_screen" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "whoCanShareScreen", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=who_can_share_screen_when_someone_is_sharing" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "whoCanShareScreenWhenSomeoneIsSharing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workplace_by_facebook" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting.prototype, "workplaceByFacebook", void 0);
    return AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting = AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting;
// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration
/**
 * Account Settings: Integration.
**/
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration, _super);
    function AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=box" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration.prototype, "box", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dropbox" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration.prototype, "dropbox", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=google_calendar" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration.prototype, "googleCalendar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=google_drive" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration.prototype, "googleDrive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kubi" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration.prototype, "kubi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=microsoft_one_drive" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration.prototype, "microsoftOneDrive", void 0);
    return AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration = AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration;
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfileRecordingStorageLocation = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfileRecordingStorageLocation, _super);
    function AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfileRecordingStorageLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowed_values" }),
        __metadata("design:type", Array)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfileRecordingStorageLocation.prototype, "allowedValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfileRecordingStorageLocation.prototype, "value", void 0);
    return AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfileRecordingStorageLocation;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfileRecordingStorageLocation = AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfileRecordingStorageLocation;
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfile = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfile, _super);
    function AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_storage_location" }),
        __metadata("design:type", AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfileRecordingStorageLocation)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfile.prototype, "recordingStorageLocation", void 0);
    return AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfile;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfile = AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfile;
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings, _super);
    function AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_file" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings.prototype, "audioFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cc_transcript_file" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings.prototype, "ccTranscriptFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chat_file" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings.prototype, "chatFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chat_with_sender_email" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings.prototype, "chatWithSenderEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video_file" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings.prototype, "videoFile", void 0);
    return AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings = AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings;
// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive
/**
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted with archiving solution access by the Zoom support team.
**/
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive, _super);
    function AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive.prototype, "settings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive.prototype, "type", void 0);
    return AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive = AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive;
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingAutoRecordingEnum;
(function (AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingAutoRecordingEnum) {
    AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingAutoRecordingEnum["Local"] = "local";
    AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingAutoRecordingEnum["Cloud"] = "cloud";
    AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingAutoRecordingEnum["None"] = "none";
})(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingAutoRecordingEnum = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingAutoRecordingEnum || (exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingAutoRecordingEnum = {}));
// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingIpAddressAccessControl
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
**/
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingIpAddressAccessControl = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingIpAddressAccessControl, _super);
    function AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingIpAddressAccessControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingIpAddressAccessControl.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_addresses_or_ranges" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingIpAddressAccessControl.prototype, "ipAddressesOrRanges", void 0);
    return AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingIpAddressAccessControl;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingIpAddressAccessControl = AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingIpAddressAccessControl;
// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement
/**
 * This object represents the minimum password requirements set for recordings via Account Recording Settings.
**/
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement, _super);
    function AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_letter" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement.prototype, "haveLetter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_number" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement.prototype, "haveNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_allow_numeric" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement.prototype, "onlyAllowNumeric", void 0);
    return AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement = AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement;
// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording
/**
 * Account Settings: Recording.
**/
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording, _super);
    function AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_user_access_recording" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording.prototype, "accountUserAccessRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_recovery_deleted_cloud_recordings" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording.prototype, "allowRecoveryDeletedCloudRecordings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=archive" }),
        __metadata("design:type", AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording.prototype, "archive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_delete_cmr" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording.prototype, "autoDeleteCmr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_delete_cmr_days" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording.prototype, "autoDeleteCmrDays", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_recording" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording.prototype, "autoRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording.prototype, "cloudRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording_download" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording.prototype, "cloudRecordingDownload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording_download_host" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording.prototype, "cloudRecordingDownloadHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_delete_cloud_recording" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording.prototype, "hostDeleteCloudRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_address_access_control" }),
        __metadata("design:type", AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingIpAddressAccessControl)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording.prototype, "ipAddressAccessControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=local_recording" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording.prototype, "localRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prevent_host_access_recording" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording.prototype, "preventHostAccessRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_audio_file" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording.prototype, "recordAudioFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_gallery_view" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording.prototype, "recordGalleryView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_speaker_view" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording.prototype, "recordSpeakerView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_audio_transcript" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording.prototype, "recordingAudioTranscript", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_disclaimer" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording.prototype, "recordingDisclaimer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_password_requirement" }),
        __metadata("design:type", AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording.prototype, "recordingPasswordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required_password_for_existing_cloud_recordings" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording.prototype, "requiredPasswordForExistingCloudRecordings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=save_chat_text" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording.prototype, "saveChatText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_timestamp" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording.prototype, "showTimestamp", void 0);
    return AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording = AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording;
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnum;
(function (AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnum) {
    AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnum["Both"] = "both";
    AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnum["Telephony"] = "telephony";
    AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnum["Voip"] = "voip";
    AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnum["ThirdParty"] = "thirdParty";
})(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnum = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnum || (exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnum = {}));
// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement
/**
 * Account wide meeting/webinar [password requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement, _super);
    function AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consecutive_characters_length" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement.prototype, "consecutiveCharactersLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_letter" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement.prototype, "haveLetter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_number" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement.prototype, "haveNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_upper_and_lower_characters" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement.prototype, "haveUpperAndLowerCharacters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_allow_numeric" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement.prototype, "onlyAllowNumeric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weak_enhance_detection" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement.prototype, "weakEnhanceDetection", void 0);
    return AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement = AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement;
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum;
(function (AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum) {
    AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum["JbhOnly"] = "jbh_only";
    AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum["All"] = "all";
    AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum["None"] = "none";
})(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum || (exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum = {}));
// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting
/**
 * Account Settings: Schedule Meeting.
**/
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting, _super);
    function AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_type" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting.prototype, "audioType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting.prototype, "enforceLogin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login_domains" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting.prototype, "enforceLoginDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login_with_domains" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting.prototype, "enforceLoginWithDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=force_pmi_jbh_password" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting.prototype, "forcePmiJbhPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_video" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting.prototype, "hostVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_before_host" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting.prototype, "joinBeforeHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password_requirement" }),
        __metadata("design:type", AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting.prototype, "meetingPasswordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=not_store_meeting_topic" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting.prototype, "notStoreMeetingTopic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participant_video" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting.prototype, "participantVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=personal_meeting" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting.prototype, "personalMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_instant_meetings" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting.prototype, "requirePasswordForInstantMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_pmi_meetings" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting.prototype, "requirePasswordForPmiMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_meetings" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting.prototype, "requirePasswordForScheduledMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduling_new_meetings" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting.prototype, "requirePasswordForSchedulingNewMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_pmi_for_instant_meetings" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting.prototype, "usePmiForInstantMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_pmi_for_scheduled_meetings" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting.prototype, "usePmiForScheduledMeetings", void 0);
    return AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting = AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting;
// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement
/**
 * This object refers to the [enhanced password rules](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) that allows Zoom account admins and owners to apply extra requiremets to the users' Zoom login password.
**/
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement, _super);
    function AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consecutive_characters_length" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement.prototype, "consecutiveCharactersLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minimum_password_length" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement.prototype, "minimumPasswordLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weak_enhance_detection" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement.prototype, "weakEnhanceDetection", void 0);
    return AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement = AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement;
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum;
(function (AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum) {
    AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum["All"] = "all";
    AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum["Group"] = "group";
    AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum["Role"] = "role";
    AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum["None"] = "none";
})(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum = exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum || (exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum = {}));
// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity
/**
 * [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
**/
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity, _super);
    function AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=admin_change_name_pic" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity.prototype, "adminChangeNamePic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hide_billing_info" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity.prototype, "hideBillingInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=import_photos_from_devices" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity.prototype, "importPhotosFromDevices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password_requirement" }),
        __metadata("design:type", AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity.prototype, "passwordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sign_again_period_for_inactivity_on_client" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity.prototype, "signAgainPeriodForInactivityOnClient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sign_again_period_for_inactivity_on_web" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity.prototype, "signAgainPeriodForInactivityOnWeb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sign_in_with_two_factor_auth" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity.prototype, "signInWithTwoFactorAuth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sign_in_with_two_factor_auth_groups" }),
        __metadata("design:type", Array)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity.prototype, "signInWithTwoFactorAuthGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sign_in_with_two_factor_auth_roles" }),
        __metadata("design:type", Array)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity.prototype, "signInWithTwoFactorAuthRoles", void 0);
    return AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity = AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity;
// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephonyTelephonyRegions
/**
 * Indicates where most of the participants call into or call from duriing a meeting.
**/
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephonyTelephonyRegions = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephonyTelephonyRegions, _super);
    function AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephonyTelephonyRegions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=selection_values" }),
        __metadata("design:type", Array)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephonyTelephonyRegions.prototype, "selectionValues", void 0);
    return AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephonyTelephonyRegions;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephonyTelephonyRegions = AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephonyTelephonyRegions;
// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony
/**
 * Account Settings Update: Telephony.
**/
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony, _super);
    function AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_conference_info" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony.prototype, "audioConferenceInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=telephony_regions" }),
        __metadata("design:type", AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephonyTelephonyRegions)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony.prototype, "telephonyRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=third_party_audio" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony.prototype, "thirdPartyAudio", void 0);
    return AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony = AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony;
// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp
/**
 * Account Settings: TSP.
**/
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp, _super);
    function AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_out" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp.prototype, "callOut", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_out_countries" }),
        __metadata("design:type", Array)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp.prototype, "callOutCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_toll_free_numbers" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp.prototype, "displayTollFreeNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_international_numbers_link" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp.prototype, "showInternationalNumbersLink", void 0);
    return AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp = AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp;
// AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms
/**
 * Account Settings: Zoom Rooms.
**/
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms, _super);
    function AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_start_stop_scheduled_meetings" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms.prototype, "autoStartStopScheduledMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cmr_for_instant_meeting" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms.prototype, "cmrForInstantMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=force_private_meeting" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms.prototype, "forcePrivateMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hide_host_information" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms.prototype, "hideHostInformation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=list_meetings_with_calendar" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms.prototype, "listMeetingsWithCalendar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_airplay_manually" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms.prototype, "startAirplayManually", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ultrasonic" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms.prototype, "ultrasonic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upcoming_meeting_alert" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms.prototype, "upcomingMeetingAlert", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weekly_system_restart" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms.prototype, "weeklySystemRestart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zr_post_meeting_feedback" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms.prototype, "zrPostMeetingFeedback", void 0);
    return AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms = AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms;
var AccountSettingsUpdateMultipartFormDataUpdateAccountSettings = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateMultipartFormDataUpdateAccountSettings, _super);
    function AccountSettingsUpdateMultipartFormDataUpdateAccountSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=email_notification;json=true" }),
        __metadata("design:type", AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettings.prototype, "emailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=feature;json=true" }),
        __metadata("design:type", AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsFeature)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettings.prototype, "feature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=in_meeting;json=true" }),
        __metadata("design:type", AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettings.prototype, "inMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=integration;json=true" }),
        __metadata("design:type", AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettings.prototype, "integration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=profile;json=true" }),
        __metadata("design:type", AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfile)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettings.prototype, "profile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=recording;json=true" }),
        __metadata("design:type", AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettings.prototype, "recording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=schedule_meeting;json=true" }),
        __metadata("design:type", AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettings.prototype, "scheduleMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=security;json=true" }),
        __metadata("design:type", AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettings.prototype, "security", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=telephony;json=true" }),
        __metadata("design:type", AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettings.prototype, "telephony", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=tsp;json=true" }),
        __metadata("design:type", AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettings.prototype, "tsp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=zoom_rooms;json=true" }),
        __metadata("design:type", AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms)
    ], AccountSettingsUpdateMultipartFormDataUpdateAccountSettings.prototype, "zoomRooms", void 0);
    return AccountSettingsUpdateMultipartFormDataUpdateAccountSettings;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateMultipartFormDataUpdateAccountSettings = AccountSettingsUpdateMultipartFormDataUpdateAccountSettings;
var AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
(function (AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum) {
    AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum["EnhancedEncryption"] = "enhanced_encryption";
    AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum["E2ee"] = "e2ee";
})(AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = exports.AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum || (exports.AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = {}));
// AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
/**
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
var AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement, _super);
    function AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consecutive_characters_length" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "consecutiveCharactersLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_letter" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveLetter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_number" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_upper_and_lower_characters" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveUpperAndLowerCharacters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_allow_numeric" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "onlyAllowNumeric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weak_enhance_detection" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "weakEnhanceDetection", void 0);
    return AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
// AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
/**
 * Specify the settings to be applied if waiting room is enabled.
**/
var AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings, _super);
    function AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants_to_place_in_waiting_room" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "participantsToPlaceInWaitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users_who_can_admit_participants_from_waiting_room" }),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "usersWhoCanAdmitParticipantsFromWaitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=whitelisted_domains_for_waiting_room" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "whitelistedDomainsForWaitingRoom", void 0);
    return AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
var AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity, _super);
    function AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_security" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "autoSecurity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed_password_in_join_link" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "embedPasswordInJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryption_type" }),
        __metadata("design:type", String)
    ], AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "encryptionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_to_end_encrypted_meetings" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "endToEndEncryptedMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "meetingPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password_requirement" }),
        __metadata("design:type", AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement)
    ], AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "meetingPasswordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_password" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "phonePassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pmi_password" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "pmiPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_meeting" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "requirePasswordForScheduledMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_webinar" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "requirePasswordForScheduledWebinar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room_settings" }),
        __metadata("design:type", AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings)
    ], AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "waitingRoomSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webinar_password" }),
        __metadata("design:type", Boolean)
    ], AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "webinarPassword", void 0);
    return AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity = AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity;
var AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings, _super);
    function AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=meeting_security;json=true" }),
        __metadata("design:type", AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity)
    ], AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings.prototype, "meetingSecurity", void 0);
    return AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings = AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings;
var AccountSettingsUpdateRequests = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateRequests, _super);
    function AccountSettingsUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], AccountSettingsUpdateRequests.prototype, "oneOf", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", Object)
    ], AccountSettingsUpdateRequests.prototype, "oneOf1", void 0);
    return AccountSettingsUpdateRequests;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateRequests = AccountSettingsUpdateRequests;
var AccountSettingsUpdateRequest = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateRequest, _super);
    function AccountSettingsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountSettingsUpdatePathParams)
    ], AccountSettingsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountSettingsUpdateQueryParams)
    ], AccountSettingsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountSettingsUpdateRequests)
    ], AccountSettingsUpdateRequest.prototype, "request", void 0);
    return AccountSettingsUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateRequest = AccountSettingsUpdateRequest;
var AccountSettingsUpdateResponse = /** @class */ (function (_super) {
    __extends(AccountSettingsUpdateResponse, _super);
    function AccountSettingsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AccountSettingsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AccountSettingsUpdateResponse.prototype, "statusCode", void 0);
    return AccountSettingsUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsUpdateResponse = AccountSettingsUpdateResponse;
