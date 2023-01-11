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
exports.GroupLockedSettingsResponse = exports.GroupLockedSettingsRequest = exports.GroupLockedSettingsSecurity = exports.GroupLockedSettingsRequests = exports.GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettings = exports.GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity = exports.GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = exports.GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = exports.GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = exports.GroupLockedSettingsMultipartFormData1 = exports.GroupLockedSettingsMultipartFormData1Telephony = exports.GroupLockedSettingsMultipartFormData1ScheduleMeeting = exports.GroupLockedSettingsMultipartFormData1Recording = exports.GroupLockedSettingsMultipartFormData1RecordingIpAddressAccessControl = exports.GroupLockedSettingsMultipartFormData1InMeeting = exports.GroupLockedSettingsMultipartFormData1EmailNotification = exports.GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettings = exports.GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity = exports.GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = exports.GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = exports.GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = exports.GroupLockedSettingsApplicationJson1 = exports.GroupLockedSettingsApplicationJson1Telephony = exports.GroupLockedSettingsApplicationJson1ScheduleMeeting = exports.GroupLockedSettingsApplicationJson1Recording = exports.GroupLockedSettingsApplicationJson1RecordingIpAddressAccessControl = exports.GroupLockedSettingsApplicationJson1InMeeting = exports.GroupLockedSettingsApplicationJson1EmailNotification = exports.GroupLockedSettingsQueryParams = exports.GroupLockedSettingsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GroupLockedSettingsPathParams = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsPathParams, _super);
    function GroupLockedSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", String)
    ], GroupLockedSettingsPathParams.prototype, "groupId", void 0);
    return GroupLockedSettingsPathParams;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsPathParams = GroupLockedSettingsPathParams;
var GroupLockedSettingsQueryParams = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsQueryParams, _super);
    function GroupLockedSettingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=custom_query_fields" }),
        __metadata("design:type", String)
    ], GroupLockedSettingsQueryParams.prototype, "customQueryFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=option" }),
        __metadata("design:type", String)
    ], GroupLockedSettingsQueryParams.prototype, "option", void 0);
    return GroupLockedSettingsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsQueryParams = GroupLockedSettingsQueryParams;
var GroupLockedSettingsApplicationJson1EmailNotification = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsApplicationJson1EmailNotification, _super);
    function GroupLockedSettingsApplicationJson1EmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_host_reminder" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1EmailNotification.prototype, "alternativeHostReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancel_meeting_reminder" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1EmailNotification.prototype, "cancelMeetingReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording_available_reminder" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1EmailNotification.prototype, "cloudRecordingAvailableReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jbh_reminder" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1EmailNotification.prototype, "jbhReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule_for_host_reminder" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1EmailNotification.prototype, "scheduleForHostReminder", void 0);
    return GroupLockedSettingsApplicationJson1EmailNotification;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsApplicationJson1EmailNotification = GroupLockedSettingsApplicationJson1EmailNotification;
var GroupLockedSettingsApplicationJson1InMeeting = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsApplicationJson1InMeeting, _super);
    function GroupLockedSettingsApplicationJson1InMeeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alert_guest_join" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "alertGuestJoin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_show_zoom_windows" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "allowShowZoomWindows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annotation" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "annotation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendee_on_hold" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "attendeeOnHold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_answer" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "autoAnswer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_saving_chat" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "autoSavingChat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=breakout_room" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "breakoutRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chat" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "chat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=closed_caption" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "closedCaption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=co_host" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "coHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_data_center_regions" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "customDataCenterRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=e2e_encryption" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "e2eEncryption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entry_exit_chime" }),
        __metadata("design:type", String)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "entryExitChime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=far_end_camera_control" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "farEndCameraControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=feedback" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "feedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_transfer" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "fileTransfer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_hd" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "groupHd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_verbal_feedback" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "nonVerbalFeedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=original_audio" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "originalAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=polling" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "polling", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=post_meeting_feedback" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "postMeetingFeedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=private_chat" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "privateChat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remote_control" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "remoteControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remote_support" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "remoteSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_permission_to_unmute" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "requestPermissionToUnmute", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=screen_sharing" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "screenSharing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sending_default_email_invites" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "sendingDefaultEmailInvites", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_browser_join_link" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "showBrowserJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_meeting_control_toolbar" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "showMeetingControlToolbar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stereo_audio" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "stereoAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_html_format_email" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "useHtmlFormatEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtual_background" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "virtualBackground", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=whiteboard" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1InMeeting.prototype, "whiteboard", void 0);
    return GroupLockedSettingsApplicationJson1InMeeting;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsApplicationJson1InMeeting = GroupLockedSettingsApplicationJson1InMeeting;
// GroupLockedSettingsApplicationJson1RecordingIpAddressAccessControl
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
**/
var GroupLockedSettingsApplicationJson1RecordingIpAddressAccessControl = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsApplicationJson1RecordingIpAddressAccessControl, _super);
    function GroupLockedSettingsApplicationJson1RecordingIpAddressAccessControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1RecordingIpAddressAccessControl.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_addresses_or_ranges" }),
        __metadata("design:type", String)
    ], GroupLockedSettingsApplicationJson1RecordingIpAddressAccessControl.prototype, "ipAddressesOrRanges", void 0);
    return GroupLockedSettingsApplicationJson1RecordingIpAddressAccessControl;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsApplicationJson1RecordingIpAddressAccessControl = GroupLockedSettingsApplicationJson1RecordingIpAddressAccessControl;
var GroupLockedSettingsApplicationJson1Recording = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsApplicationJson1Recording, _super);
    function GroupLockedSettingsApplicationJson1Recording() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_user_access_recording" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1Recording.prototype, "accountUserAccessRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_delete_cmr" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1Recording.prototype, "autoDeleteCmr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_recording" }),
        __metadata("design:type", String)
    ], GroupLockedSettingsApplicationJson1Recording.prototype, "autoRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1Recording.prototype, "cloudRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording_download" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1Recording.prototype, "cloudRecordingDownload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_delete_cloud_recording" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1Recording.prototype, "hostDeleteCloudRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_address_access_control" }),
        __metadata("design:type", GroupLockedSettingsApplicationJson1RecordingIpAddressAccessControl)
    ], GroupLockedSettingsApplicationJson1Recording.prototype, "ipAddressAccessControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=local_recording" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1Recording.prototype, "localRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_authentication" }),
        __metadata("design:type", String)
    ], GroupLockedSettingsApplicationJson1Recording.prototype, "recordingAuthentication", void 0);
    return GroupLockedSettingsApplicationJson1Recording;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsApplicationJson1Recording = GroupLockedSettingsApplicationJson1Recording;
var GroupLockedSettingsApplicationJson1ScheduleMeeting = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsApplicationJson1ScheduleMeeting, _super);
    function GroupLockedSettingsApplicationJson1ScheduleMeeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_type" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1ScheduleMeeting.prototype, "audioType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed_password_in_join_link" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1ScheduleMeeting.prototype, "embedPasswordInJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=force_pmi_jbh_password" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1ScheduleMeeting.prototype, "forcePmiJbhPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_video" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1ScheduleMeeting.prototype, "hostVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_before_host" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1ScheduleMeeting.prototype, "joinBeforeHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_authentication" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1ScheduleMeeting.prototype, "meetingAuthentication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mute_upon_entry" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1ScheduleMeeting.prototype, "muteUponEntry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participant_video" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1ScheduleMeeting.prototype, "participantVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=personal_meeting" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1ScheduleMeeting.prototype, "personalMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pstn_password_protected" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1ScheduleMeeting.prototype, "pstnPasswordProtected", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_instant_meetings" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1ScheduleMeeting.prototype, "requirePasswordForInstantMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_pmi_meetings" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1ScheduleMeeting.prototype, "requirePasswordForPmiMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduling_new_meetings" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1ScheduleMeeting.prototype, "requirePasswordForSchedulingNewMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upcoming_meeting_reminder" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1ScheduleMeeting.prototype, "upcomingMeetingReminder", void 0);
    return GroupLockedSettingsApplicationJson1ScheduleMeeting;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsApplicationJson1ScheduleMeeting = GroupLockedSettingsApplicationJson1ScheduleMeeting;
var GroupLockedSettingsApplicationJson1Telephony = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsApplicationJson1Telephony, _super);
    function GroupLockedSettingsApplicationJson1Telephony() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=telephony_regions" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1Telephony.prototype, "telephonyRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=third_party_audio" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJson1Telephony.prototype, "thirdPartyAudio", void 0);
    return GroupLockedSettingsApplicationJson1Telephony;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsApplicationJson1Telephony = GroupLockedSettingsApplicationJson1Telephony;
var GroupLockedSettingsApplicationJson1 = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsApplicationJson1, _super);
    function GroupLockedSettingsApplicationJson1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email_notification" }),
        __metadata("design:type", GroupLockedSettingsApplicationJson1EmailNotification)
    ], GroupLockedSettingsApplicationJson1.prototype, "emailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=in_meeting" }),
        __metadata("design:type", GroupLockedSettingsApplicationJson1InMeeting)
    ], GroupLockedSettingsApplicationJson1.prototype, "inMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording" }),
        __metadata("design:type", GroupLockedSettingsApplicationJson1Recording)
    ], GroupLockedSettingsApplicationJson1.prototype, "recording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule_meeting" }),
        __metadata("design:type", GroupLockedSettingsApplicationJson1ScheduleMeeting)
    ], GroupLockedSettingsApplicationJson1.prototype, "scheduleMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=telephony" }),
        __metadata("design:type", GroupLockedSettingsApplicationJson1Telephony)
    ], GroupLockedSettingsApplicationJson1.prototype, "telephony", void 0);
    return GroupLockedSettingsApplicationJson1;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsApplicationJson1 = GroupLockedSettingsApplicationJson1;
var GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
(function (GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum) {
    GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum["EnhancedEncryption"] = "enhanced_encryption";
    GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum["E2ee"] = "e2ee";
})(GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = exports.GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum || (exports.GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = {}));
// GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
/**
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
var GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement, _super);
    function GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consecutive_characters_length" }),
        __metadata("design:type", Number)
    ], GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "consecutiveCharactersLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_letter" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveLetter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_number" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_upper_and_lower_characters" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveUpperAndLowerCharacters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_allow_numeric" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "onlyAllowNumeric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weak_enhance_detection" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "weakEnhanceDetection", void 0);
    return GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
// GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
/**
 * Specify the settings to be applied if waiting room is enabled.
**/
var GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings, _super);
    function GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants_to_place_in_waiting_room" }),
        __metadata("design:type", Number)
    ], GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "participantsToPlaceInWaitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users_who_can_admit_participants_from_waiting_room" }),
        __metadata("design:type", Number)
    ], GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "usersWhoCanAdmitParticipantsFromWaitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=whitelisted_domains_for_waiting_room" }),
        __metadata("design:type", String)
    ], GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "whitelistedDomainsForWaitingRoom", void 0);
    return GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
var GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity, _super);
    function GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_security" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "autoSecurity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed_password_in_join_link" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "embedPasswordInJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryption_type" }),
        __metadata("design:type", String)
    ], GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "encryptionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_to_end_encrypted_meetings" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "endToEndEncryptedMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "meetingPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password_requirement" }),
        __metadata("design:type", GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement)
    ], GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "meetingPasswordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_password" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "phonePassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pmi_password" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "pmiPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_meeting" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "requirePasswordForScheduledMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_webinar" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "requirePasswordForScheduledWebinar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room_settings" }),
        __metadata("design:type", GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings)
    ], GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "waitingRoomSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webinar_password" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "webinarPassword", void 0);
    return GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity = GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
var GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettings = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettings, _super);
    function GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_security" }),
        __metadata("design:type", GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity)
    ], GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettings.prototype, "meetingSecurity", void 0);
    return GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettings;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettings = GroupLockedSettingsApplicationJsonMeetingWebinarSecuritySettings;
var GroupLockedSettingsMultipartFormData1EmailNotification = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsMultipartFormData1EmailNotification, _super);
    function GroupLockedSettingsMultipartFormData1EmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_host_reminder" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1EmailNotification.prototype, "alternativeHostReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancel_meeting_reminder" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1EmailNotification.prototype, "cancelMeetingReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording_available_reminder" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1EmailNotification.prototype, "cloudRecordingAvailableReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jbh_reminder" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1EmailNotification.prototype, "jbhReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule_for_host_reminder" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1EmailNotification.prototype, "scheduleForHostReminder", void 0);
    return GroupLockedSettingsMultipartFormData1EmailNotification;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsMultipartFormData1EmailNotification = GroupLockedSettingsMultipartFormData1EmailNotification;
var GroupLockedSettingsMultipartFormData1InMeeting = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsMultipartFormData1InMeeting, _super);
    function GroupLockedSettingsMultipartFormData1InMeeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alert_guest_join" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "alertGuestJoin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_show_zoom_windows" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "allowShowZoomWindows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annotation" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "annotation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendee_on_hold" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "attendeeOnHold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_answer" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "autoAnswer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_saving_chat" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "autoSavingChat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=breakout_room" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "breakoutRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chat" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "chat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=closed_caption" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "closedCaption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=co_host" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "coHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_data_center_regions" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "customDataCenterRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=e2e_encryption" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "e2eEncryption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entry_exit_chime" }),
        __metadata("design:type", String)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "entryExitChime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=far_end_camera_control" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "farEndCameraControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=feedback" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "feedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_transfer" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "fileTransfer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_hd" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "groupHd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_verbal_feedback" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "nonVerbalFeedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=original_audio" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "originalAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=polling" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "polling", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=post_meeting_feedback" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "postMeetingFeedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=private_chat" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "privateChat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remote_control" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "remoteControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remote_support" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "remoteSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_permission_to_unmute" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "requestPermissionToUnmute", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=screen_sharing" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "screenSharing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sending_default_email_invites" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "sendingDefaultEmailInvites", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_browser_join_link" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "showBrowserJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_meeting_control_toolbar" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "showMeetingControlToolbar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stereo_audio" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "stereoAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_html_format_email" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "useHtmlFormatEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtual_background" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "virtualBackground", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=whiteboard" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1InMeeting.prototype, "whiteboard", void 0);
    return GroupLockedSettingsMultipartFormData1InMeeting;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsMultipartFormData1InMeeting = GroupLockedSettingsMultipartFormData1InMeeting;
// GroupLockedSettingsMultipartFormData1RecordingIpAddressAccessControl
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
**/
var GroupLockedSettingsMultipartFormData1RecordingIpAddressAccessControl = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsMultipartFormData1RecordingIpAddressAccessControl, _super);
    function GroupLockedSettingsMultipartFormData1RecordingIpAddressAccessControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1RecordingIpAddressAccessControl.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_addresses_or_ranges" }),
        __metadata("design:type", String)
    ], GroupLockedSettingsMultipartFormData1RecordingIpAddressAccessControl.prototype, "ipAddressesOrRanges", void 0);
    return GroupLockedSettingsMultipartFormData1RecordingIpAddressAccessControl;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsMultipartFormData1RecordingIpAddressAccessControl = GroupLockedSettingsMultipartFormData1RecordingIpAddressAccessControl;
var GroupLockedSettingsMultipartFormData1Recording = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsMultipartFormData1Recording, _super);
    function GroupLockedSettingsMultipartFormData1Recording() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_user_access_recording" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1Recording.prototype, "accountUserAccessRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_delete_cmr" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1Recording.prototype, "autoDeleteCmr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_recording" }),
        __metadata("design:type", String)
    ], GroupLockedSettingsMultipartFormData1Recording.prototype, "autoRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1Recording.prototype, "cloudRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording_download" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1Recording.prototype, "cloudRecordingDownload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_delete_cloud_recording" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1Recording.prototype, "hostDeleteCloudRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_address_access_control" }),
        __metadata("design:type", GroupLockedSettingsMultipartFormData1RecordingIpAddressAccessControl)
    ], GroupLockedSettingsMultipartFormData1Recording.prototype, "ipAddressAccessControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=local_recording" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1Recording.prototype, "localRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_authentication" }),
        __metadata("design:type", String)
    ], GroupLockedSettingsMultipartFormData1Recording.prototype, "recordingAuthentication", void 0);
    return GroupLockedSettingsMultipartFormData1Recording;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsMultipartFormData1Recording = GroupLockedSettingsMultipartFormData1Recording;
var GroupLockedSettingsMultipartFormData1ScheduleMeeting = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsMultipartFormData1ScheduleMeeting, _super);
    function GroupLockedSettingsMultipartFormData1ScheduleMeeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_type" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1ScheduleMeeting.prototype, "audioType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed_password_in_join_link" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1ScheduleMeeting.prototype, "embedPasswordInJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=force_pmi_jbh_password" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1ScheduleMeeting.prototype, "forcePmiJbhPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_video" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1ScheduleMeeting.prototype, "hostVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_before_host" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1ScheduleMeeting.prototype, "joinBeforeHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_authentication" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1ScheduleMeeting.prototype, "meetingAuthentication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mute_upon_entry" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1ScheduleMeeting.prototype, "muteUponEntry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participant_video" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1ScheduleMeeting.prototype, "participantVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=personal_meeting" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1ScheduleMeeting.prototype, "personalMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pstn_password_protected" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1ScheduleMeeting.prototype, "pstnPasswordProtected", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_instant_meetings" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1ScheduleMeeting.prototype, "requirePasswordForInstantMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_pmi_meetings" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1ScheduleMeeting.prototype, "requirePasswordForPmiMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduling_new_meetings" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1ScheduleMeeting.prototype, "requirePasswordForSchedulingNewMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upcoming_meeting_reminder" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1ScheduleMeeting.prototype, "upcomingMeetingReminder", void 0);
    return GroupLockedSettingsMultipartFormData1ScheduleMeeting;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsMultipartFormData1ScheduleMeeting = GroupLockedSettingsMultipartFormData1ScheduleMeeting;
var GroupLockedSettingsMultipartFormData1Telephony = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsMultipartFormData1Telephony, _super);
    function GroupLockedSettingsMultipartFormData1Telephony() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=telephony_regions" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1Telephony.prototype, "telephonyRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=third_party_audio" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormData1Telephony.prototype, "thirdPartyAudio", void 0);
    return GroupLockedSettingsMultipartFormData1Telephony;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsMultipartFormData1Telephony = GroupLockedSettingsMultipartFormData1Telephony;
var GroupLockedSettingsMultipartFormData1 = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsMultipartFormData1, _super);
    function GroupLockedSettingsMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=email_notification;json=true" }),
        __metadata("design:type", GroupLockedSettingsMultipartFormData1EmailNotification)
    ], GroupLockedSettingsMultipartFormData1.prototype, "emailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=in_meeting;json=true" }),
        __metadata("design:type", GroupLockedSettingsMultipartFormData1InMeeting)
    ], GroupLockedSettingsMultipartFormData1.prototype, "inMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=recording;json=true" }),
        __metadata("design:type", GroupLockedSettingsMultipartFormData1Recording)
    ], GroupLockedSettingsMultipartFormData1.prototype, "recording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=schedule_meeting;json=true" }),
        __metadata("design:type", GroupLockedSettingsMultipartFormData1ScheduleMeeting)
    ], GroupLockedSettingsMultipartFormData1.prototype, "scheduleMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=telephony;json=true" }),
        __metadata("design:type", GroupLockedSettingsMultipartFormData1Telephony)
    ], GroupLockedSettingsMultipartFormData1.prototype, "telephony", void 0);
    return GroupLockedSettingsMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsMultipartFormData1 = GroupLockedSettingsMultipartFormData1;
var GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
(function (GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum) {
    GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum["EnhancedEncryption"] = "enhanced_encryption";
    GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum["E2ee"] = "e2ee";
})(GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = exports.GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum || (exports.GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = {}));
// GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
/**
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
var GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement, _super);
    function GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consecutive_characters_length" }),
        __metadata("design:type", Number)
    ], GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "consecutiveCharactersLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_letter" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveLetter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_number" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_upper_and_lower_characters" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveUpperAndLowerCharacters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_allow_numeric" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "onlyAllowNumeric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weak_enhance_detection" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "weakEnhanceDetection", void 0);
    return GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
// GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
/**
 * Specify the settings to be applied if waiting room is enabled.
**/
var GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings, _super);
    function GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants_to_place_in_waiting_room" }),
        __metadata("design:type", Number)
    ], GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "participantsToPlaceInWaitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users_who_can_admit_participants_from_waiting_room" }),
        __metadata("design:type", Number)
    ], GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "usersWhoCanAdmitParticipantsFromWaitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=whitelisted_domains_for_waiting_room" }),
        __metadata("design:type", String)
    ], GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "whitelistedDomainsForWaitingRoom", void 0);
    return GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
var GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity, _super);
    function GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_security" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "autoSecurity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed_password_in_join_link" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "embedPasswordInJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryption_type" }),
        __metadata("design:type", String)
    ], GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "encryptionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_to_end_encrypted_meetings" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "endToEndEncryptedMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "meetingPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password_requirement" }),
        __metadata("design:type", GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement)
    ], GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "meetingPasswordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_password" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "phonePassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pmi_password" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "pmiPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_meeting" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "requirePasswordForScheduledMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_webinar" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "requirePasswordForScheduledWebinar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room_settings" }),
        __metadata("design:type", GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings)
    ], GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "waitingRoomSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webinar_password" }),
        __metadata("design:type", Boolean)
    ], GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "webinarPassword", void 0);
    return GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity = GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity;
var GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettings = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettings, _super);
    function GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=meeting_security;json=true" }),
        __metadata("design:type", GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity)
    ], GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettings.prototype, "meetingSecurity", void 0);
    return GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettings;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettings = GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettings;
var GroupLockedSettingsRequests = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsRequests, _super);
    function GroupLockedSettingsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], GroupLockedSettingsRequests.prototype, "oneOf", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", Object)
    ], GroupLockedSettingsRequests.prototype, "oneOf1", void 0);
    return GroupLockedSettingsRequests;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsRequests = GroupLockedSettingsRequests;
var GroupLockedSettingsSecurity = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsSecurity, _super);
    function GroupLockedSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], GroupLockedSettingsSecurity.prototype, "oAuth", void 0);
    return GroupLockedSettingsSecurity;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsSecurity = GroupLockedSettingsSecurity;
var GroupLockedSettingsRequest = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsRequest, _super);
    function GroupLockedSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GroupLockedSettingsPathParams)
    ], GroupLockedSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GroupLockedSettingsQueryParams)
    ], GroupLockedSettingsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GroupLockedSettingsRequests)
    ], GroupLockedSettingsRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GroupLockedSettingsSecurity)
    ], GroupLockedSettingsRequest.prototype, "security", void 0);
    return GroupLockedSettingsRequest;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsRequest = GroupLockedSettingsRequest;
var GroupLockedSettingsResponse = /** @class */ (function (_super) {
    __extends(GroupLockedSettingsResponse, _super);
    function GroupLockedSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GroupLockedSettingsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GroupLockedSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GroupLockedSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GroupLockedSettingsResponse.prototype, "groupLockedSettings204ApplicationJSONAny", void 0);
    return GroupLockedSettingsResponse;
}(utils_1.SpeakeasyBase));
exports.GroupLockedSettingsResponse = GroupLockedSettingsResponse;
