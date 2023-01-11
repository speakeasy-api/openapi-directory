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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetGroupLockSettingsResponse = exports.GetGroupLockSettingsRequest = exports.GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettings = exports.GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity = exports.GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = exports.GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = exports.GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = exports.GetGroupLockSettings200ApplicationJson1 = exports.GetGroupLockSettings200ApplicationJson1Telephony = exports.GetGroupLockSettings200ApplicationJson1ScheduleMeeting = exports.GetGroupLockSettings200ApplicationJson1Recording = exports.GetGroupLockSettings200ApplicationJson1RecordingIpAddressAccessControl = exports.GetGroupLockSettings200ApplicationJson1InMeeting = exports.GetGroupLockSettings200ApplicationJson1EmailNotification = exports.GetGroupLockSettingsSecurity = exports.GetGroupLockSettingsQueryParams = exports.GetGroupLockSettingsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetGroupLockSettingsPathParams = /** @class */ (function (_super) {
    __extends(GetGroupLockSettingsPathParams, _super);
    function GetGroupLockSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", String)
    ], GetGroupLockSettingsPathParams.prototype, "groupId", void 0);
    return GetGroupLockSettingsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetGroupLockSettingsPathParams = GetGroupLockSettingsPathParams;
var GetGroupLockSettingsQueryParams = /** @class */ (function (_super) {
    __extends(GetGroupLockSettingsQueryParams, _super);
    function GetGroupLockSettingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=custom_query_fields" }),
        __metadata("design:type", String)
    ], GetGroupLockSettingsQueryParams.prototype, "customQueryFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=option" }),
        __metadata("design:type", String)
    ], GetGroupLockSettingsQueryParams.prototype, "option", void 0);
    return GetGroupLockSettingsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetGroupLockSettingsQueryParams = GetGroupLockSettingsQueryParams;
var GetGroupLockSettingsSecurity = /** @class */ (function (_super) {
    __extends(GetGroupLockSettingsSecurity, _super);
    function GetGroupLockSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], GetGroupLockSettingsSecurity.prototype, "oAuth", void 0);
    return GetGroupLockSettingsSecurity;
}(utils_1.SpeakeasyBase));
exports.GetGroupLockSettingsSecurity = GetGroupLockSettingsSecurity;
var GetGroupLockSettings200ApplicationJson1EmailNotification = /** @class */ (function (_super) {
    __extends(GetGroupLockSettings200ApplicationJson1EmailNotification, _super);
    function GetGroupLockSettings200ApplicationJson1EmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_host_reminder" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1EmailNotification.prototype, "alternativeHostReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancel_meeting_reminder" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1EmailNotification.prototype, "cancelMeetingReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording_available_reminder" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1EmailNotification.prototype, "cloudRecordingAvailableReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jbh_reminder" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1EmailNotification.prototype, "jbhReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule_for_host_reminder" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1EmailNotification.prototype, "scheduleForHostReminder", void 0);
    return GetGroupLockSettings200ApplicationJson1EmailNotification;
}(utils_1.SpeakeasyBase));
exports.GetGroupLockSettings200ApplicationJson1EmailNotification = GetGroupLockSettings200ApplicationJson1EmailNotification;
var GetGroupLockSettings200ApplicationJson1InMeeting = /** @class */ (function (_super) {
    __extends(GetGroupLockSettings200ApplicationJson1InMeeting, _super);
    function GetGroupLockSettings200ApplicationJson1InMeeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alert_guest_join" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "alertGuestJoin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_show_zoom_windows" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "allowShowZoomWindows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annotation" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "annotation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendee_on_hold" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "attendeeOnHold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_answer" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "autoAnswer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_saving_chat" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "autoSavingChat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=breakout_room" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "breakoutRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chat" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "chat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=closed_caption" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "closedCaption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=co_host" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "coHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_data_center_regions" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "customDataCenterRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=e2e_encryption" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "e2eEncryption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entry_exit_chime" }),
        __metadata("design:type", String)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "entryExitChime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=far_end_camera_control" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "farEndCameraControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=feedback" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "feedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_transfer" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "fileTransfer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_hd" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "groupHd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_verbal_feedback" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "nonVerbalFeedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=original_audio" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "originalAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=polling" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "polling", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=post_meeting_feedback" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "postMeetingFeedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=private_chat" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "privateChat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remote_control" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "remoteControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remote_support" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "remoteSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_permission_to_unmute" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "requestPermissionToUnmute", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=screen_sharing" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "screenSharing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sending_default_email_invites" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "sendingDefaultEmailInvites", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_browser_join_link" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "showBrowserJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_meeting_control_toolbar" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "showMeetingControlToolbar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stereo_audio" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "stereoAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_html_format_email" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "useHtmlFormatEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtual_background" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "virtualBackground", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=whiteboard" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1InMeeting.prototype, "whiteboard", void 0);
    return GetGroupLockSettings200ApplicationJson1InMeeting;
}(utils_1.SpeakeasyBase));
exports.GetGroupLockSettings200ApplicationJson1InMeeting = GetGroupLockSettings200ApplicationJson1InMeeting;
// GetGroupLockSettings200ApplicationJson1RecordingIpAddressAccessControl
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
**/
var GetGroupLockSettings200ApplicationJson1RecordingIpAddressAccessControl = /** @class */ (function (_super) {
    __extends(GetGroupLockSettings200ApplicationJson1RecordingIpAddressAccessControl, _super);
    function GetGroupLockSettings200ApplicationJson1RecordingIpAddressAccessControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1RecordingIpAddressAccessControl.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_addresses_or_ranges" }),
        __metadata("design:type", String)
    ], GetGroupLockSettings200ApplicationJson1RecordingIpAddressAccessControl.prototype, "ipAddressesOrRanges", void 0);
    return GetGroupLockSettings200ApplicationJson1RecordingIpAddressAccessControl;
}(utils_1.SpeakeasyBase));
exports.GetGroupLockSettings200ApplicationJson1RecordingIpAddressAccessControl = GetGroupLockSettings200ApplicationJson1RecordingIpAddressAccessControl;
var GetGroupLockSettings200ApplicationJson1Recording = /** @class */ (function (_super) {
    __extends(GetGroupLockSettings200ApplicationJson1Recording, _super);
    function GetGroupLockSettings200ApplicationJson1Recording() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_user_access_recording" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1Recording.prototype, "accountUserAccessRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_delete_cmr" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1Recording.prototype, "autoDeleteCmr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_recording" }),
        __metadata("design:type", String)
    ], GetGroupLockSettings200ApplicationJson1Recording.prototype, "autoRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1Recording.prototype, "cloudRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording_download" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1Recording.prototype, "cloudRecordingDownload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_delete_cloud_recording" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1Recording.prototype, "hostDeleteCloudRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_address_access_control" }),
        __metadata("design:type", GetGroupLockSettings200ApplicationJson1RecordingIpAddressAccessControl)
    ], GetGroupLockSettings200ApplicationJson1Recording.prototype, "ipAddressAccessControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=local_recording" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1Recording.prototype, "localRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prevent_host_access_recording" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1Recording.prototype, "preventHostAccessRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_authentication" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1Recording.prototype, "recordingAuthentication", void 0);
    return GetGroupLockSettings200ApplicationJson1Recording;
}(utils_1.SpeakeasyBase));
exports.GetGroupLockSettings200ApplicationJson1Recording = GetGroupLockSettings200ApplicationJson1Recording;
var GetGroupLockSettings200ApplicationJson1ScheduleMeeting = /** @class */ (function (_super) {
    __extends(GetGroupLockSettings200ApplicationJson1ScheduleMeeting, _super);
    function GetGroupLockSettings200ApplicationJson1ScheduleMeeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_type" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1ScheduleMeeting.prototype, "audioType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed_password_in_join_link" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1ScheduleMeeting.prototype, "embedPasswordInJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=force_pmi_jbh_password" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1ScheduleMeeting.prototype, "forcePmiJbhPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_video" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1ScheduleMeeting.prototype, "hostVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_before_host" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1ScheduleMeeting.prototype, "joinBeforeHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_authentication" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1ScheduleMeeting.prototype, "meetingAuthentication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mute_upon_entry" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1ScheduleMeeting.prototype, "muteUponEntry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participant_video" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1ScheduleMeeting.prototype, "participantVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pstn_password_protected" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1ScheduleMeeting.prototype, "pstnPasswordProtected", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_instant_meetings" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1ScheduleMeeting.prototype, "requirePasswordForInstantMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_pmi_meetings" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1ScheduleMeeting.prototype, "requirePasswordForPmiMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduling_new_meetings" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1ScheduleMeeting.prototype, "requirePasswordForSchedulingNewMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upcoming_meeting_reminder" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1ScheduleMeeting.prototype, "upcomingMeetingReminder", void 0);
    return GetGroupLockSettings200ApplicationJson1ScheduleMeeting;
}(utils_1.SpeakeasyBase));
exports.GetGroupLockSettings200ApplicationJson1ScheduleMeeting = GetGroupLockSettings200ApplicationJson1ScheduleMeeting;
var GetGroupLockSettings200ApplicationJson1Telephony = /** @class */ (function (_super) {
    __extends(GetGroupLockSettings200ApplicationJson1Telephony, _super);
    function GetGroupLockSettings200ApplicationJson1Telephony() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=telephony_regions" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1Telephony.prototype, "telephonyRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=third_party_audio" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJson1Telephony.prototype, "thirdPartyAudio", void 0);
    return GetGroupLockSettings200ApplicationJson1Telephony;
}(utils_1.SpeakeasyBase));
exports.GetGroupLockSettings200ApplicationJson1Telephony = GetGroupLockSettings200ApplicationJson1Telephony;
var GetGroupLockSettings200ApplicationJson1 = /** @class */ (function (_super) {
    __extends(GetGroupLockSettings200ApplicationJson1, _super);
    function GetGroupLockSettings200ApplicationJson1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email_notification" }),
        __metadata("design:type", GetGroupLockSettings200ApplicationJson1EmailNotification)
    ], GetGroupLockSettings200ApplicationJson1.prototype, "emailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=in_meeting" }),
        __metadata("design:type", GetGroupLockSettings200ApplicationJson1InMeeting)
    ], GetGroupLockSettings200ApplicationJson1.prototype, "inMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording" }),
        __metadata("design:type", GetGroupLockSettings200ApplicationJson1Recording)
    ], GetGroupLockSettings200ApplicationJson1.prototype, "recording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule_meeting" }),
        __metadata("design:type", GetGroupLockSettings200ApplicationJson1ScheduleMeeting)
    ], GetGroupLockSettings200ApplicationJson1.prototype, "scheduleMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=telephony" }),
        __metadata("design:type", GetGroupLockSettings200ApplicationJson1Telephony)
    ], GetGroupLockSettings200ApplicationJson1.prototype, "telephony", void 0);
    return GetGroupLockSettings200ApplicationJson1;
}(utils_1.SpeakeasyBase));
exports.GetGroupLockSettings200ApplicationJson1 = GetGroupLockSettings200ApplicationJson1;
var GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
(function (GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum) {
    GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum["EnhancedEncryption"] = "enhanced_encryption";
    GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum["E2ee"] = "e2ee";
})(GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = exports.GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum || (exports.GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = {}));
// GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
/**
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
var GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = /** @class */ (function (_super) {
    __extends(GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement, _super);
    function GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consecutive_characters_length" }),
        __metadata("design:type", Number)
    ], GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "consecutiveCharactersLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_letter" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveLetter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_number" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_upper_and_lower_characters" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveUpperAndLowerCharacters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_allow_numeric" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "onlyAllowNumeric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weak_enhance_detection" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "weakEnhanceDetection", void 0);
    return GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
// GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
/**
 * Specify the settings to be applied if waiting room is enabled.
**/
var GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = /** @class */ (function (_super) {
    __extends(GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings, _super);
    function GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants_to_place_in_waiting_room" }),
        __metadata("design:type", Number)
    ], GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "participantsToPlaceInWaitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users_who_can_admit_participants_from_waiting_room" }),
        __metadata("design:type", Number)
    ], GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "usersWhoCanAdmitParticipantsFromWaitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=whitelisted_domains_for_waiting_room" }),
        __metadata("design:type", String)
    ], GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "whitelistedDomainsForWaitingRoom", void 0);
    return GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
}(utils_1.SpeakeasyBase));
exports.GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
var GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity = /** @class */ (function (_super) {
    __extends(GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity, _super);
    function GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_security" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "autoSecurity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed_password_in_join_link" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "embedPasswordInJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryption_type" }),
        __metadata("design:type", String)
    ], GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "encryptionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_to_end_encrypted_meetings" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "endToEndEncryptedMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "meetingPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password_requirement" }),
        __metadata("design:type", GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement)
    ], GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "meetingPasswordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_password" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "phonePassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pmi_password" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "pmiPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_meeting" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "requirePasswordForScheduledMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_webinar" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "requirePasswordForScheduledWebinar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room_settings" }),
        __metadata("design:type", GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings)
    ], GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "waitingRoomSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webinar_password" }),
        __metadata("design:type", Boolean)
    ], GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "webinarPassword", void 0);
    return GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
}(utils_1.SpeakeasyBase));
exports.GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity = GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
var GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettings = /** @class */ (function (_super) {
    __extends(GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettings, _super);
    function GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_security" }),
        __metadata("design:type", GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity)
    ], GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettings.prototype, "meetingSecurity", void 0);
    return GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettings;
}(utils_1.SpeakeasyBase));
exports.GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettings = GetGroupLockSettings200ApplicationJsonMeetingWebinarSecuritySettings;
var GetGroupLockSettingsRequest = /** @class */ (function (_super) {
    __extends(GetGroupLockSettingsRequest, _super);
    function GetGroupLockSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGroupLockSettingsPathParams)
    ], GetGroupLockSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGroupLockSettingsQueryParams)
    ], GetGroupLockSettingsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGroupLockSettingsSecurity)
    ], GetGroupLockSettingsRequest.prototype, "security", void 0);
    return GetGroupLockSettingsRequest;
}(utils_1.SpeakeasyBase));
exports.GetGroupLockSettingsRequest = GetGroupLockSettingsRequest;
var GetGroupLockSettingsResponse = /** @class */ (function (_super) {
    __extends(GetGroupLockSettingsResponse, _super);
    function GetGroupLockSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetGroupLockSettingsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetGroupLockSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetGroupLockSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetGroupLockSettingsResponse.prototype, "getGroupLockSettings200ApplicationJSONOneOf", void 0);
    return GetGroupLockSettingsResponse;
}(utils_1.SpeakeasyBase));
exports.GetGroupLockSettingsResponse = GetGroupLockSettingsResponse;
