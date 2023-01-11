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
exports.AccountSettingsResponse = exports.AccountSettingsRequest = exports.AccountSettings200ApplicationJsonMeetingWebinarSecuritySettings = exports.AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity = exports.AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = exports.AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = exports.AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = exports.AccountSettings200ApplicationJson3 = exports.AccountSettings200ApplicationJson3SignInWithTwoFactorAuthEnum = exports.AccountSettings200ApplicationJson3PasswordRequirement = exports.AccountSettings200ApplicationJsonAccountSettings = exports.AccountSettings200ApplicationJsonAccountSettingsZoomRooms = exports.AccountSettings200ApplicationJsonAccountSettingsTsp = exports.AccountSettings200ApplicationJsonAccountSettingsTelephony = exports.AccountSettings200ApplicationJsonAccountSettingsTelephonyTelephonyRegions = exports.AccountSettings200ApplicationJsonAccountSettingsSecurity = exports.AccountSettings200ApplicationJsonAccountSettingsSecuritySignInWithTwoFactorAuthEnum = exports.AccountSettings200ApplicationJsonAccountSettingsSecurityPasswordRequirement = exports.AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting = exports.AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum = exports.AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingMeetingPasswordRequirement = exports.AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingAudioTypeEnum = exports.AccountSettings200ApplicationJsonAccountSettingsRecording = exports.AccountSettings200ApplicationJsonAccountSettingsRecordingRecordingPasswordRequirement = exports.AccountSettings200ApplicationJsonAccountSettingsRecordingIpAddressAccessControl = exports.AccountSettings200ApplicationJsonAccountSettingsRecordingAutoRecordingEnum = exports.AccountSettings200ApplicationJsonAccountSettingsRecordingArchive = exports.AccountSettings200ApplicationJsonAccountSettingsRecordingArchiveSettings = exports.AccountSettings200ApplicationJsonAccountSettingsProfile = exports.AccountSettings200ApplicationJsonAccountSettingsProfileRecordingStorageLocation = exports.AccountSettings200ApplicationJsonAccountSettingsIntegration = exports.AccountSettings200ApplicationJsonAccountSettingsInMeeting = exports.AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = exports.AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenEnum = exports.AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettings = exports.AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettingsFiles = exports.AccountSettings200ApplicationJsonAccountSettingsInMeetingEntryExitChimeEnum = exports.AccountSettings200ApplicationJsonAccountSettingsFeature = exports.AccountSettings200ApplicationJsonAccountSettingsEmailNotification = exports.AccountSettingsQueryParams = exports.AccountSettingsOptionEnum = exports.AccountSettingsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var AccountSettingsPathParams = /** @class */ (function (_super) {
    __extends(AccountSettingsPathParams, _super);
    function AccountSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AccountSettingsPathParams.prototype, "accountId", void 0);
    return AccountSettingsPathParams;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsPathParams = AccountSettingsPathParams;
var AccountSettingsOptionEnum;
(function (AccountSettingsOptionEnum) {
    AccountSettingsOptionEnum["MeetingAuthentication"] = "meeting_authentication";
    AccountSettingsOptionEnum["RecordingAuthentication"] = "recording_authentication";
})(AccountSettingsOptionEnum = exports.AccountSettingsOptionEnum || (exports.AccountSettingsOptionEnum = {}));
var AccountSettingsQueryParams = /** @class */ (function (_super) {
    __extends(AccountSettingsQueryParams, _super);
    function AccountSettingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=custom_query_fields" }),
        __metadata("design:type", String)
    ], AccountSettingsQueryParams.prototype, "customQueryFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=option" }),
        __metadata("design:type", String)
    ], AccountSettingsQueryParams.prototype, "option", void 0);
    return AccountSettingsQueryParams;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsQueryParams = AccountSettingsQueryParams;
// AccountSettings200ApplicationJsonAccountSettingsEmailNotification
/**
 * Account Settings: Notification.
**/
var AccountSettings200ApplicationJsonAccountSettingsEmailNotification = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJsonAccountSettingsEmailNotification, _super);
    function AccountSettings200ApplicationJsonAccountSettingsEmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_host_reminder" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsEmailNotification.prototype, "alternativeHostReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancel_meeting_reminder" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsEmailNotification.prototype, "cancelMeetingReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording_avaliable_reminder" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsEmailNotification.prototype, "cloudRecordingAvaliableReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jbh_reminder" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsEmailNotification.prototype, "jbhReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=low_host_count_reminder" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsEmailNotification.prototype, "lowHostCountReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule_for_reminder" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsEmailNotification.prototype, "scheduleForReminder", void 0);
    return AccountSettings200ApplicationJsonAccountSettingsEmailNotification;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJsonAccountSettingsEmailNotification = AccountSettings200ApplicationJsonAccountSettingsEmailNotification;
// AccountSettings200ApplicationJsonAccountSettingsFeature
/**
 * Account Settings: Feature.
**/
var AccountSettings200ApplicationJsonAccountSettingsFeature = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJsonAccountSettingsFeature, _super);
    function AccountSettings200ApplicationJsonAccountSettingsFeature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_capacity" }),
        __metadata("design:type", Number)
    ], AccountSettings200ApplicationJsonAccountSettingsFeature.prototype, "meetingCapacity", void 0);
    return AccountSettings200ApplicationJsonAccountSettingsFeature;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJsonAccountSettingsFeature = AccountSettings200ApplicationJsonAccountSettingsFeature;
var AccountSettings200ApplicationJsonAccountSettingsInMeetingEntryExitChimeEnum;
(function (AccountSettings200ApplicationJsonAccountSettingsInMeetingEntryExitChimeEnum) {
    AccountSettings200ApplicationJsonAccountSettingsInMeetingEntryExitChimeEnum["Host"] = "host";
    AccountSettings200ApplicationJsonAccountSettingsInMeetingEntryExitChimeEnum["All"] = "all";
    AccountSettings200ApplicationJsonAccountSettingsInMeetingEntryExitChimeEnum["None"] = "none";
})(AccountSettings200ApplicationJsonAccountSettingsInMeetingEntryExitChimeEnum = exports.AccountSettings200ApplicationJsonAccountSettingsInMeetingEntryExitChimeEnum || (exports.AccountSettings200ApplicationJsonAccountSettingsInMeetingEntryExitChimeEnum = {}));
var AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettingsFiles = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettingsFiles, _super);
    function AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettingsFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettingsFiles.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_default" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettingsFiles.prototype, "isDefault", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettingsFiles.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettingsFiles.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettingsFiles.prototype, "type", void 0);
    return AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettingsFiles;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettingsFiles = AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettingsFiles;
// AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettings
/**
 * Settings to manage virtual background.
**/
var AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettings = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettings, _super);
    function AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_upload_custom" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettings.prototype, "allowUploadCustom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_videos" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettings.prototype, "allowVideos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettings.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=files", elemType: AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettingsFiles }),
        __metadata("design:type", Array)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettings.prototype, "files", void 0);
    return AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettings;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettings = AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettings;
var AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenEnum;
(function (AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenEnum) {
    AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenEnum["Host"] = "host";
    AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenEnum["All"] = "all";
})(AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenEnum = exports.AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenEnum || (exports.AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenEnum = {}));
var AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum;
(function (AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum) {
    AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum["Host"] = "host";
    AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum["All"] = "all";
})(AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = exports.AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum || (exports.AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = {}));
// AccountSettings200ApplicationJsonAccountSettingsInMeeting
/**
 * Account Settings: In Meeting.
**/
var AccountSettings200ApplicationJsonAccountSettingsInMeeting = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJsonAccountSettingsInMeeting, _super);
    function AccountSettings200ApplicationJsonAccountSettingsInMeeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alert_guest_join" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "alertGuestJoin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_live_streaming" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "allowLiveStreaming", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_participants_to_rename" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "allowParticipantsToRename", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_show_zoom_windows" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "allowShowZoomWindows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annotation" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "annotation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=anonymous_question_answer" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "anonymousQuestionAnswer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendee_on_hold" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "attendeeOnHold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_answer" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "autoAnswer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_saving_chat" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "autoSavingChat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=breakout_room" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "breakoutRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chat" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "chat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=closed_caption" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "closedCaption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=co_host" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "coHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_data_center_regions" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "customDataCenterRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_live_streaming_service" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "customLiveStreamingService", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_service_instructions" }),
        __metadata("design:type", String)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "customServiceInstructions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_center_regions" }),
        __metadata("design:type", Array)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "dataCenterRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dscp_audio" }),
        __metadata("design:type", Number)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "dscpAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dscp_marking" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "dscpMarking", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dscp_video" }),
        __metadata("design:type", Number)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "dscpVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=e2e_encryption" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "e2eEncryption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entry_exit_chime" }),
        __metadata("design:type", String)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "entryExitChime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=far_end_camera_control" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "farEndCameraControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=feedback" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "feedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_transfer" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "fileTransfer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_hd" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "groupHd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_reactions" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "meetingReactions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=original_audio" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "originalAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=p2p_connetion" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "p2pConnetion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=p2p_ports" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "p2pPorts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=polling" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "polling", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ports_range" }),
        __metadata("design:type", String)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "portsRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=post_meeting_feedback" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "postMeetingFeedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=private_chat" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "privateChat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_play_own_voice" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "recordPlayOwnVoice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remote_control" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "remoteControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_permission_to_unmute" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "requestPermissionToUnmute", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=screen_sharing" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "screenSharing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sending_default_email_invites" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "sendingDefaultEmailInvites", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_a_join_from_your_browser_link" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "showAJoinFromYourBrowserLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_meeting_control_toolbar" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "showMeetingControlToolbar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stereo_audio" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "stereoAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_html_format_email" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "useHtmlFormatEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtual_background" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "virtualBackground", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtual_background_settings" }),
        __metadata("design:type", AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettings)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "virtualBackgroundSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=watermark" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "watermark", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webinar_question_answer" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "webinarQuestionAnswer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=whiteboard" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "whiteboard", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=who_can_share_screen" }),
        __metadata("design:type", String)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "whoCanShareScreen", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=who_can_share_screen_when_someone_is_sharing" }),
        __metadata("design:type", String)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "whoCanShareScreenWhenSomeoneIsSharing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workplace_by_facebook" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsInMeeting.prototype, "workplaceByFacebook", void 0);
    return AccountSettings200ApplicationJsonAccountSettingsInMeeting;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJsonAccountSettingsInMeeting = AccountSettings200ApplicationJsonAccountSettingsInMeeting;
// AccountSettings200ApplicationJsonAccountSettingsIntegration
/**
 * Account Settings: Integration.
**/
var AccountSettings200ApplicationJsonAccountSettingsIntegration = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJsonAccountSettingsIntegration, _super);
    function AccountSettings200ApplicationJsonAccountSettingsIntegration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=box" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsIntegration.prototype, "box", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dropbox" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsIntegration.prototype, "dropbox", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=google_calendar" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsIntegration.prototype, "googleCalendar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=google_drive" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsIntegration.prototype, "googleDrive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kubi" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsIntegration.prototype, "kubi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=microsoft_one_drive" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsIntegration.prototype, "microsoftOneDrive", void 0);
    return AccountSettings200ApplicationJsonAccountSettingsIntegration;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJsonAccountSettingsIntegration = AccountSettings200ApplicationJsonAccountSettingsIntegration;
var AccountSettings200ApplicationJsonAccountSettingsProfileRecordingStorageLocation = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJsonAccountSettingsProfileRecordingStorageLocation, _super);
    function AccountSettings200ApplicationJsonAccountSettingsProfileRecordingStorageLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowed_values" }),
        __metadata("design:type", Array)
    ], AccountSettings200ApplicationJsonAccountSettingsProfileRecordingStorageLocation.prototype, "allowedValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], AccountSettings200ApplicationJsonAccountSettingsProfileRecordingStorageLocation.prototype, "value", void 0);
    return AccountSettings200ApplicationJsonAccountSettingsProfileRecordingStorageLocation;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJsonAccountSettingsProfileRecordingStorageLocation = AccountSettings200ApplicationJsonAccountSettingsProfileRecordingStorageLocation;
var AccountSettings200ApplicationJsonAccountSettingsProfile = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJsonAccountSettingsProfile, _super);
    function AccountSettings200ApplicationJsonAccountSettingsProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_storage_location" }),
        __metadata("design:type", AccountSettings200ApplicationJsonAccountSettingsProfileRecordingStorageLocation)
    ], AccountSettings200ApplicationJsonAccountSettingsProfile.prototype, "recordingStorageLocation", void 0);
    return AccountSettings200ApplicationJsonAccountSettingsProfile;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJsonAccountSettingsProfile = AccountSettings200ApplicationJsonAccountSettingsProfile;
var AccountSettings200ApplicationJsonAccountSettingsRecordingArchiveSettings = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJsonAccountSettingsRecordingArchiveSettings, _super);
    function AccountSettings200ApplicationJsonAccountSettingsRecordingArchiveSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_file" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecordingArchiveSettings.prototype, "audioFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cc_transcript_file" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecordingArchiveSettings.prototype, "ccTranscriptFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chat_file" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecordingArchiveSettings.prototype, "chatFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chat_with_sender_email" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecordingArchiveSettings.prototype, "chatWithSenderEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video_file" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecordingArchiveSettings.prototype, "videoFile", void 0);
    return AccountSettings200ApplicationJsonAccountSettingsRecordingArchiveSettings;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJsonAccountSettingsRecordingArchiveSettings = AccountSettings200ApplicationJsonAccountSettingsRecordingArchiveSettings;
// AccountSettings200ApplicationJsonAccountSettingsRecordingArchive
/**
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted with archiving solution access by the Zoom support team.
**/
var AccountSettings200ApplicationJsonAccountSettingsRecordingArchive = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJsonAccountSettingsRecordingArchive, _super);
    function AccountSettings200ApplicationJsonAccountSettingsRecordingArchive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecordingArchive.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", AccountSettings200ApplicationJsonAccountSettingsRecordingArchiveSettings)
    ], AccountSettings200ApplicationJsonAccountSettingsRecordingArchive.prototype, "settings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], AccountSettings200ApplicationJsonAccountSettingsRecordingArchive.prototype, "type", void 0);
    return AccountSettings200ApplicationJsonAccountSettingsRecordingArchive;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJsonAccountSettingsRecordingArchive = AccountSettings200ApplicationJsonAccountSettingsRecordingArchive;
var AccountSettings200ApplicationJsonAccountSettingsRecordingAutoRecordingEnum;
(function (AccountSettings200ApplicationJsonAccountSettingsRecordingAutoRecordingEnum) {
    AccountSettings200ApplicationJsonAccountSettingsRecordingAutoRecordingEnum["Local"] = "local";
    AccountSettings200ApplicationJsonAccountSettingsRecordingAutoRecordingEnum["Cloud"] = "cloud";
    AccountSettings200ApplicationJsonAccountSettingsRecordingAutoRecordingEnum["None"] = "none";
})(AccountSettings200ApplicationJsonAccountSettingsRecordingAutoRecordingEnum = exports.AccountSettings200ApplicationJsonAccountSettingsRecordingAutoRecordingEnum || (exports.AccountSettings200ApplicationJsonAccountSettingsRecordingAutoRecordingEnum = {}));
// AccountSettings200ApplicationJsonAccountSettingsRecordingIpAddressAccessControl
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
**/
var AccountSettings200ApplicationJsonAccountSettingsRecordingIpAddressAccessControl = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJsonAccountSettingsRecordingIpAddressAccessControl, _super);
    function AccountSettings200ApplicationJsonAccountSettingsRecordingIpAddressAccessControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecordingIpAddressAccessControl.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_addresses_or_ranges" }),
        __metadata("design:type", String)
    ], AccountSettings200ApplicationJsonAccountSettingsRecordingIpAddressAccessControl.prototype, "ipAddressesOrRanges", void 0);
    return AccountSettings200ApplicationJsonAccountSettingsRecordingIpAddressAccessControl;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJsonAccountSettingsRecordingIpAddressAccessControl = AccountSettings200ApplicationJsonAccountSettingsRecordingIpAddressAccessControl;
// AccountSettings200ApplicationJsonAccountSettingsRecordingRecordingPasswordRequirement
/**
 * This object represents the minimum password requirements set for recordings via Account Recording Settings.
**/
var AccountSettings200ApplicationJsonAccountSettingsRecordingRecordingPasswordRequirement = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJsonAccountSettingsRecordingRecordingPasswordRequirement, _super);
    function AccountSettings200ApplicationJsonAccountSettingsRecordingRecordingPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_letter" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecordingRecordingPasswordRequirement.prototype, "haveLetter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_number" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecordingRecordingPasswordRequirement.prototype, "haveNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecordingRecordingPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], AccountSettings200ApplicationJsonAccountSettingsRecordingRecordingPasswordRequirement.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_allow_numeric" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecordingRecordingPasswordRequirement.prototype, "onlyAllowNumeric", void 0);
    return AccountSettings200ApplicationJsonAccountSettingsRecordingRecordingPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJsonAccountSettingsRecordingRecordingPasswordRequirement = AccountSettings200ApplicationJsonAccountSettingsRecordingRecordingPasswordRequirement;
// AccountSettings200ApplicationJsonAccountSettingsRecording
/**
 * Account Settings: Recording.
**/
var AccountSettings200ApplicationJsonAccountSettingsRecording = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJsonAccountSettingsRecording, _super);
    function AccountSettings200ApplicationJsonAccountSettingsRecording() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_user_access_recording" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecording.prototype, "accountUserAccessRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_recovery_deleted_cloud_recordings" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecording.prototype, "allowRecoveryDeletedCloudRecordings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=archive" }),
        __metadata("design:type", AccountSettings200ApplicationJsonAccountSettingsRecordingArchive)
    ], AccountSettings200ApplicationJsonAccountSettingsRecording.prototype, "archive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_delete_cmr" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecording.prototype, "autoDeleteCmr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_delete_cmr_days" }),
        __metadata("design:type", Number)
    ], AccountSettings200ApplicationJsonAccountSettingsRecording.prototype, "autoDeleteCmrDays", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_recording" }),
        __metadata("design:type", String)
    ], AccountSettings200ApplicationJsonAccountSettingsRecording.prototype, "autoRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecording.prototype, "cloudRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording_download" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecording.prototype, "cloudRecordingDownload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording_download_host" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecording.prototype, "cloudRecordingDownloadHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_delete_cloud_recording" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecording.prototype, "hostDeleteCloudRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_address_access_control" }),
        __metadata("design:type", AccountSettings200ApplicationJsonAccountSettingsRecordingIpAddressAccessControl)
    ], AccountSettings200ApplicationJsonAccountSettingsRecording.prototype, "ipAddressAccessControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=local_recording" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecording.prototype, "localRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prevent_host_access_recording" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecording.prototype, "preventHostAccessRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_audio_file" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecording.prototype, "recordAudioFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_gallery_view" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecording.prototype, "recordGalleryView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_speaker_view" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecording.prototype, "recordSpeakerView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_audio_transcript" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecording.prototype, "recordingAudioTranscript", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_disclaimer" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecording.prototype, "recordingDisclaimer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_password_requirement" }),
        __metadata("design:type", AccountSettings200ApplicationJsonAccountSettingsRecordingRecordingPasswordRequirement)
    ], AccountSettings200ApplicationJsonAccountSettingsRecording.prototype, "recordingPasswordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required_password_for_existing_cloud_recordings" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecording.prototype, "requiredPasswordForExistingCloudRecordings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=save_chat_text" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecording.prototype, "saveChatText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_timestamp" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsRecording.prototype, "showTimestamp", void 0);
    return AccountSettings200ApplicationJsonAccountSettingsRecording;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJsonAccountSettingsRecording = AccountSettings200ApplicationJsonAccountSettingsRecording;
var AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingAudioTypeEnum;
(function (AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingAudioTypeEnum) {
    AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingAudioTypeEnum["Both"] = "both";
    AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingAudioTypeEnum["Telephony"] = "telephony";
    AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingAudioTypeEnum["Voip"] = "voip";
    AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingAudioTypeEnum["ThirdParty"] = "thirdParty";
})(AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingAudioTypeEnum = exports.AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingAudioTypeEnum || (exports.AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingAudioTypeEnum = {}));
// AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingMeetingPasswordRequirement
/**
 * Account wide meeting/webinar [password requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
var AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingMeetingPasswordRequirement = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingMeetingPasswordRequirement, _super);
    function AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingMeetingPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consecutive_characters_length" }),
        __metadata("design:type", Number)
    ], AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingMeetingPasswordRequirement.prototype, "consecutiveCharactersLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_letter" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingMeetingPasswordRequirement.prototype, "haveLetter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_number" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingMeetingPasswordRequirement.prototype, "haveNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingMeetingPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_upper_and_lower_characters" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingMeetingPasswordRequirement.prototype, "haveUpperAndLowerCharacters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingMeetingPasswordRequirement.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_allow_numeric" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingMeetingPasswordRequirement.prototype, "onlyAllowNumeric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weak_enhance_detection" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingMeetingPasswordRequirement.prototype, "weakEnhanceDetection", void 0);
    return AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingMeetingPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingMeetingPasswordRequirement = AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingMeetingPasswordRequirement;
var AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum;
(function (AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum) {
    AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum["JbhOnly"] = "jbh_only";
    AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum["All"] = "all";
    AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum["None"] = "none";
})(AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum = exports.AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum || (exports.AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum = {}));
// AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting
/**
 * Account Settings: Schedule Meeting.
**/
var AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting, _super);
    function AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_type" }),
        __metadata("design:type", String)
    ], AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting.prototype, "audioType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting.prototype, "enforceLogin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login_domains" }),
        __metadata("design:type", String)
    ], AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting.prototype, "enforceLoginDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login_with_domains" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting.prototype, "enforceLoginWithDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=force_pmi_jbh_password" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting.prototype, "forcePmiJbhPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_video" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting.prototype, "hostVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_before_host" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting.prototype, "joinBeforeHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password_requirement" }),
        __metadata("design:type", AccountSettings200ApplicationJsonAccountSettingsScheduleMeetingMeetingPasswordRequirement)
    ], AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting.prototype, "meetingPasswordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=not_store_meeting_topic" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting.prototype, "notStoreMeetingTopic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participant_video" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting.prototype, "participantVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=personal_meeting" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting.prototype, "personalMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_instant_meetings" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting.prototype, "requirePasswordForInstantMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_pmi_meetings" }),
        __metadata("design:type", String)
    ], AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting.prototype, "requirePasswordForPmiMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_meetings" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting.prototype, "requirePasswordForScheduledMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduling_new_meetings" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting.prototype, "requirePasswordForSchedulingNewMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_pmi_for_instant_meetings" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting.prototype, "usePmiForInstantMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_pmi_for_scheduled_meetings" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting.prototype, "usePmiForScheduledMeetings", void 0);
    return AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting = AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting;
// AccountSettings200ApplicationJsonAccountSettingsSecurityPasswordRequirement
/**
 * This object refers to the [enhanced password rules](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) that allows Zoom account admins and owners to apply extra requiremets to the users' Zoom login password.
**/
var AccountSettings200ApplicationJsonAccountSettingsSecurityPasswordRequirement = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJsonAccountSettingsSecurityPasswordRequirement, _super);
    function AccountSettings200ApplicationJsonAccountSettingsSecurityPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consecutive_characters_length" }),
        __metadata("design:type", Number)
    ], AccountSettings200ApplicationJsonAccountSettingsSecurityPasswordRequirement.prototype, "consecutiveCharactersLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsSecurityPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minimum_password_length" }),
        __metadata("design:type", Number)
    ], AccountSettings200ApplicationJsonAccountSettingsSecurityPasswordRequirement.prototype, "minimumPasswordLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weak_enhance_detection" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsSecurityPasswordRequirement.prototype, "weakEnhanceDetection", void 0);
    return AccountSettings200ApplicationJsonAccountSettingsSecurityPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJsonAccountSettingsSecurityPasswordRequirement = AccountSettings200ApplicationJsonAccountSettingsSecurityPasswordRequirement;
var AccountSettings200ApplicationJsonAccountSettingsSecuritySignInWithTwoFactorAuthEnum;
(function (AccountSettings200ApplicationJsonAccountSettingsSecuritySignInWithTwoFactorAuthEnum) {
    AccountSettings200ApplicationJsonAccountSettingsSecuritySignInWithTwoFactorAuthEnum["All"] = "all";
    AccountSettings200ApplicationJsonAccountSettingsSecuritySignInWithTwoFactorAuthEnum["Group"] = "group";
    AccountSettings200ApplicationJsonAccountSettingsSecuritySignInWithTwoFactorAuthEnum["Role"] = "role";
    AccountSettings200ApplicationJsonAccountSettingsSecuritySignInWithTwoFactorAuthEnum["None"] = "none";
})(AccountSettings200ApplicationJsonAccountSettingsSecuritySignInWithTwoFactorAuthEnum = exports.AccountSettings200ApplicationJsonAccountSettingsSecuritySignInWithTwoFactorAuthEnum || (exports.AccountSettings200ApplicationJsonAccountSettingsSecuritySignInWithTwoFactorAuthEnum = {}));
// AccountSettings200ApplicationJsonAccountSettingsSecurity
/**
 * [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
**/
var AccountSettings200ApplicationJsonAccountSettingsSecurity = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJsonAccountSettingsSecurity, _super);
    function AccountSettings200ApplicationJsonAccountSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=admin_change_name_pic" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsSecurity.prototype, "adminChangeNamePic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hide_billing_info" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsSecurity.prototype, "hideBillingInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=import_photos_from_devices" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsSecurity.prototype, "importPhotosFromDevices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password_requirement" }),
        __metadata("design:type", AccountSettings200ApplicationJsonAccountSettingsSecurityPasswordRequirement)
    ], AccountSettings200ApplicationJsonAccountSettingsSecurity.prototype, "passwordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sign_again_period_for_inactivity_on_client" }),
        __metadata("design:type", Number)
    ], AccountSettings200ApplicationJsonAccountSettingsSecurity.prototype, "signAgainPeriodForInactivityOnClient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sign_again_period_for_inactivity_on_web" }),
        __metadata("design:type", Number)
    ], AccountSettings200ApplicationJsonAccountSettingsSecurity.prototype, "signAgainPeriodForInactivityOnWeb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sign_in_with_two_factor_auth" }),
        __metadata("design:type", String)
    ], AccountSettings200ApplicationJsonAccountSettingsSecurity.prototype, "signInWithTwoFactorAuth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sign_in_with_two_factor_auth_groups" }),
        __metadata("design:type", Array)
    ], AccountSettings200ApplicationJsonAccountSettingsSecurity.prototype, "signInWithTwoFactorAuthGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sign_in_with_two_factor_auth_roles" }),
        __metadata("design:type", Array)
    ], AccountSettings200ApplicationJsonAccountSettingsSecurity.prototype, "signInWithTwoFactorAuthRoles", void 0);
    return AccountSettings200ApplicationJsonAccountSettingsSecurity;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJsonAccountSettingsSecurity = AccountSettings200ApplicationJsonAccountSettingsSecurity;
// AccountSettings200ApplicationJsonAccountSettingsTelephonyTelephonyRegions
/**
 * Indicates where most of the participants call into or call from duriing a meeting.
**/
var AccountSettings200ApplicationJsonAccountSettingsTelephonyTelephonyRegions = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJsonAccountSettingsTelephonyTelephonyRegions, _super);
    function AccountSettings200ApplicationJsonAccountSettingsTelephonyTelephonyRegions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowed_values" }),
        __metadata("design:type", Array)
    ], AccountSettings200ApplicationJsonAccountSettingsTelephonyTelephonyRegions.prototype, "allowedValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=selection_values" }),
        __metadata("design:type", Array)
    ], AccountSettings200ApplicationJsonAccountSettingsTelephonyTelephonyRegions.prototype, "selectionValues", void 0);
    return AccountSettings200ApplicationJsonAccountSettingsTelephonyTelephonyRegions;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJsonAccountSettingsTelephonyTelephonyRegions = AccountSettings200ApplicationJsonAccountSettingsTelephonyTelephonyRegions;
// AccountSettings200ApplicationJsonAccountSettingsTelephony
/**
 * Account Settings: Telephony.
**/
var AccountSettings200ApplicationJsonAccountSettingsTelephony = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJsonAccountSettingsTelephony, _super);
    function AccountSettings200ApplicationJsonAccountSettingsTelephony() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_conference_info" }),
        __metadata("design:type", String)
    ], AccountSettings200ApplicationJsonAccountSettingsTelephony.prototype, "audioConferenceInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=telephony_regions" }),
        __metadata("design:type", AccountSettings200ApplicationJsonAccountSettingsTelephonyTelephonyRegions)
    ], AccountSettings200ApplicationJsonAccountSettingsTelephony.prototype, "telephonyRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=third_party_audio" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsTelephony.prototype, "thirdPartyAudio", void 0);
    return AccountSettings200ApplicationJsonAccountSettingsTelephony;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJsonAccountSettingsTelephony = AccountSettings200ApplicationJsonAccountSettingsTelephony;
// AccountSettings200ApplicationJsonAccountSettingsTsp
/**
 * Account Settings: TSP.
**/
var AccountSettings200ApplicationJsonAccountSettingsTsp = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJsonAccountSettingsTsp, _super);
    function AccountSettings200ApplicationJsonAccountSettingsTsp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_out" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsTsp.prototype, "callOut", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_out_countries" }),
        __metadata("design:type", Array)
    ], AccountSettings200ApplicationJsonAccountSettingsTsp.prototype, "callOutCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_toll_free_numbers" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsTsp.prototype, "displayTollFreeNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_international_numbers_link" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsTsp.prototype, "showInternationalNumbersLink", void 0);
    return AccountSettings200ApplicationJsonAccountSettingsTsp;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJsonAccountSettingsTsp = AccountSettings200ApplicationJsonAccountSettingsTsp;
// AccountSettings200ApplicationJsonAccountSettingsZoomRooms
/**
 * Account Settings: Zoom Rooms.
**/
var AccountSettings200ApplicationJsonAccountSettingsZoomRooms = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJsonAccountSettingsZoomRooms, _super);
    function AccountSettings200ApplicationJsonAccountSettingsZoomRooms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_start_stop_scheduled_meetings" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsZoomRooms.prototype, "autoStartStopScheduledMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cmr_for_instant_meeting" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsZoomRooms.prototype, "cmrForInstantMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=force_private_meeting" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsZoomRooms.prototype, "forcePrivateMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hide_host_information" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsZoomRooms.prototype, "hideHostInformation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=list_meetings_with_calendar" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsZoomRooms.prototype, "listMeetingsWithCalendar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_airplay_manually" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsZoomRooms.prototype, "startAirplayManually", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ultrasonic" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsZoomRooms.prototype, "ultrasonic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upcoming_meeting_alert" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsZoomRooms.prototype, "upcomingMeetingAlert", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weekly_system_restart" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsZoomRooms.prototype, "weeklySystemRestart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zr_post_meeting_feedback" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonAccountSettingsZoomRooms.prototype, "zrPostMeetingFeedback", void 0);
    return AccountSettings200ApplicationJsonAccountSettingsZoomRooms;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJsonAccountSettingsZoomRooms = AccountSettings200ApplicationJsonAccountSettingsZoomRooms;
var AccountSettings200ApplicationJsonAccountSettings = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJsonAccountSettings, _super);
    function AccountSettings200ApplicationJsonAccountSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email_notification" }),
        __metadata("design:type", AccountSettings200ApplicationJsonAccountSettingsEmailNotification)
    ], AccountSettings200ApplicationJsonAccountSettings.prototype, "emailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=feature" }),
        __metadata("design:type", AccountSettings200ApplicationJsonAccountSettingsFeature)
    ], AccountSettings200ApplicationJsonAccountSettings.prototype, "feature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=in_meeting" }),
        __metadata("design:type", AccountSettings200ApplicationJsonAccountSettingsInMeeting)
    ], AccountSettings200ApplicationJsonAccountSettings.prototype, "inMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=integration" }),
        __metadata("design:type", AccountSettings200ApplicationJsonAccountSettingsIntegration)
    ], AccountSettings200ApplicationJsonAccountSettings.prototype, "integration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=profile" }),
        __metadata("design:type", AccountSettings200ApplicationJsonAccountSettingsProfile)
    ], AccountSettings200ApplicationJsonAccountSettings.prototype, "profile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording" }),
        __metadata("design:type", AccountSettings200ApplicationJsonAccountSettingsRecording)
    ], AccountSettings200ApplicationJsonAccountSettings.prototype, "recording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule_meeting" }),
        __metadata("design:type", AccountSettings200ApplicationJsonAccountSettingsScheduleMeeting)
    ], AccountSettings200ApplicationJsonAccountSettings.prototype, "scheduleMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=security" }),
        __metadata("design:type", AccountSettings200ApplicationJsonAccountSettingsSecurity)
    ], AccountSettings200ApplicationJsonAccountSettings.prototype, "security", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=telephony" }),
        __metadata("design:type", AccountSettings200ApplicationJsonAccountSettingsTelephony)
    ], AccountSettings200ApplicationJsonAccountSettings.prototype, "telephony", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tsp" }),
        __metadata("design:type", AccountSettings200ApplicationJsonAccountSettingsTsp)
    ], AccountSettings200ApplicationJsonAccountSettings.prototype, "tsp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zoom_rooms" }),
        __metadata("design:type", AccountSettings200ApplicationJsonAccountSettingsZoomRooms)
    ], AccountSettings200ApplicationJsonAccountSettings.prototype, "zoomRooms", void 0);
    return AccountSettings200ApplicationJsonAccountSettings;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJsonAccountSettings = AccountSettings200ApplicationJsonAccountSettings;
// AccountSettings200ApplicationJson3PasswordRequirement
/**
 * This object refers to the [enhanced password rules](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) that allows Zoom account admins and owners to apply extra requiremets to the users' Zoom login password.
**/
var AccountSettings200ApplicationJson3PasswordRequirement = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJson3PasswordRequirement, _super);
    function AccountSettings200ApplicationJson3PasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consecutive_characters_length" }),
        __metadata("design:type", Number)
    ], AccountSettings200ApplicationJson3PasswordRequirement.prototype, "consecutiveCharactersLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJson3PasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minimum_password_length" }),
        __metadata("design:type", Number)
    ], AccountSettings200ApplicationJson3PasswordRequirement.prototype, "minimumPasswordLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weak_enhance_detection" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJson3PasswordRequirement.prototype, "weakEnhanceDetection", void 0);
    return AccountSettings200ApplicationJson3PasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJson3PasswordRequirement = AccountSettings200ApplicationJson3PasswordRequirement;
var AccountSettings200ApplicationJson3SignInWithTwoFactorAuthEnum;
(function (AccountSettings200ApplicationJson3SignInWithTwoFactorAuthEnum) {
    AccountSettings200ApplicationJson3SignInWithTwoFactorAuthEnum["All"] = "all";
    AccountSettings200ApplicationJson3SignInWithTwoFactorAuthEnum["Group"] = "group";
    AccountSettings200ApplicationJson3SignInWithTwoFactorAuthEnum["Role"] = "role";
    AccountSettings200ApplicationJson3SignInWithTwoFactorAuthEnum["None"] = "none";
})(AccountSettings200ApplicationJson3SignInWithTwoFactorAuthEnum = exports.AccountSettings200ApplicationJson3SignInWithTwoFactorAuthEnum || (exports.AccountSettings200ApplicationJson3SignInWithTwoFactorAuthEnum = {}));
// AccountSettings200ApplicationJson3
/**
 * [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
**/
var AccountSettings200ApplicationJson3 = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJson3, _super);
    function AccountSettings200ApplicationJson3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=admin_change_name_pic" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJson3.prototype, "adminChangeNamePic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hide_billing_info" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJson3.prototype, "hideBillingInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=import_photos_from_devices" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJson3.prototype, "importPhotosFromDevices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password_requirement" }),
        __metadata("design:type", AccountSettings200ApplicationJson3PasswordRequirement)
    ], AccountSettings200ApplicationJson3.prototype, "passwordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sign_again_period_for_inactivity_on_client" }),
        __metadata("design:type", Number)
    ], AccountSettings200ApplicationJson3.prototype, "signAgainPeriodForInactivityOnClient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sign_again_period_for_inactivity_on_web" }),
        __metadata("design:type", Number)
    ], AccountSettings200ApplicationJson3.prototype, "signAgainPeriodForInactivityOnWeb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sign_in_with_two_factor_auth" }),
        __metadata("design:type", String)
    ], AccountSettings200ApplicationJson3.prototype, "signInWithTwoFactorAuth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sign_in_with_two_factor_auth_groups" }),
        __metadata("design:type", Array)
    ], AccountSettings200ApplicationJson3.prototype, "signInWithTwoFactorAuthGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sign_in_with_two_factor_auth_roles" }),
        __metadata("design:type", Array)
    ], AccountSettings200ApplicationJson3.prototype, "signInWithTwoFactorAuthRoles", void 0);
    return AccountSettings200ApplicationJson3;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJson3 = AccountSettings200ApplicationJson3;
var AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
(function (AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum) {
    AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum["EnhancedEncryption"] = "enhanced_encryption";
    AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum["E2ee"] = "e2ee";
})(AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = exports.AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum || (exports.AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = {}));
// AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
/**
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
var AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement, _super);
    function AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consecutive_characters_length" }),
        __metadata("design:type", Number)
    ], AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "consecutiveCharactersLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_letter" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveLetter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_number" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_upper_and_lower_characters" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveUpperAndLowerCharacters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_allow_numeric" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "onlyAllowNumeric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weak_enhance_detection" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "weakEnhanceDetection", void 0);
    return AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
// AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
/**
 * Specify the settings to be applied if waiting room is enabled.
**/
var AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings, _super);
    function AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants_to_place_in_waiting_room" }),
        __metadata("design:type", Number)
    ], AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "participantsToPlaceInWaitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users_who_can_admit_participants_from_waiting_room" }),
        __metadata("design:type", Number)
    ], AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "usersWhoCanAdmitParticipantsFromWaitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=whitelisted_domains_for_waiting_room" }),
        __metadata("design:type", String)
    ], AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "whitelistedDomainsForWaitingRoom", void 0);
    return AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
var AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity, _super);
    function AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_security" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "autoSecurity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed_password_in_join_link" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "embedPasswordInJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryption_type" }),
        __metadata("design:type", String)
    ], AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "encryptionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_to_end_encrypted_meetings" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "endToEndEncryptedMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "meetingPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password_requirement" }),
        __metadata("design:type", AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement)
    ], AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "meetingPasswordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_password" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "phonePassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pmi_password" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "pmiPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_meeting" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "requirePasswordForScheduledMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_webinar" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "requirePasswordForScheduledWebinar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room_settings" }),
        __metadata("design:type", AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings)
    ], AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "waitingRoomSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webinar_password" }),
        __metadata("design:type", Boolean)
    ], AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "webinarPassword", void 0);
    return AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity = AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
var AccountSettings200ApplicationJsonMeetingWebinarSecuritySettings = /** @class */ (function (_super) {
    __extends(AccountSettings200ApplicationJsonMeetingWebinarSecuritySettings, _super);
    function AccountSettings200ApplicationJsonMeetingWebinarSecuritySettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_security" }),
        __metadata("design:type", AccountSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity)
    ], AccountSettings200ApplicationJsonMeetingWebinarSecuritySettings.prototype, "meetingSecurity", void 0);
    return AccountSettings200ApplicationJsonMeetingWebinarSecuritySettings;
}(utils_1.SpeakeasyBase));
exports.AccountSettings200ApplicationJsonMeetingWebinarSecuritySettings = AccountSettings200ApplicationJsonMeetingWebinarSecuritySettings;
var AccountSettingsRequest = /** @class */ (function (_super) {
    __extends(AccountSettingsRequest, _super);
    function AccountSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountSettingsPathParams)
    ], AccountSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountSettingsQueryParams)
    ], AccountSettingsRequest.prototype, "queryParams", void 0);
    return AccountSettingsRequest;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsRequest = AccountSettingsRequest;
var AccountSettingsResponse = /** @class */ (function (_super) {
    __extends(AccountSettingsResponse, _super);
    function AccountSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AccountSettingsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AccountSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AccountSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AccountSettingsResponse.prototype, "accountSettings200ApplicationJSONOneOf", void 0);
    return AccountSettingsResponse;
}(utils_1.SpeakeasyBase));
exports.AccountSettingsResponse = AccountSettingsResponse;
