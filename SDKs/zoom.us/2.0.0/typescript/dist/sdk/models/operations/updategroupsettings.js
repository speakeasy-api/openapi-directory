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
exports.UpdateGroupSettingsResponse = exports.UpdateGroupSettingsRequest = exports.UpdateGroupSettingsRequests = exports.UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettings = exports.UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity = exports.UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = exports.UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = exports.UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = exports.UpdateGroupSettingsMultipartFormData1 = exports.UpdateGroupSettingsMultipartFormData1Telephony = exports.UpdateGroupSettingsMultipartFormData1ScheduleMeeting = exports.UpdateGroupSettingsMultipartFormData1ScheduleMeetingRequirePasswordForPmiMeetingsEnum = exports.UpdateGroupSettingsMultipartFormData1Recording = exports.UpdateGroupSettingsMultipartFormData1RecordingIpAddressAccessControl = exports.UpdateGroupSettingsMultipartFormData1RecordingArchive = exports.UpdateGroupSettingsMultipartFormData1RecordingArchiveSettings = exports.UpdateGroupSettingsMultipartFormData1Profile = exports.UpdateGroupSettingsMultipartFormData1ProfileRecordingStorageLocation = exports.UpdateGroupSettingsMultipartFormData1InMeeting = exports.UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = exports.UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenEnum = exports.UpdateGroupSettingsMultipartFormData1EmailNotification = exports.UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettings = exports.UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity = exports.UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = exports.UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = exports.UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = exports.UpdateGroupSettingsApplicationJson1 = exports.UpdateGroupSettingsApplicationJson1Telephony = exports.UpdateGroupSettingsApplicationJson1ScheduleMeeting = exports.UpdateGroupSettingsApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum = exports.UpdateGroupSettingsApplicationJson1Recording = exports.UpdateGroupSettingsApplicationJson1RecordingIpAddressAccessControl = exports.UpdateGroupSettingsApplicationJson1RecordingArchive = exports.UpdateGroupSettingsApplicationJson1RecordingArchiveSettings = exports.UpdateGroupSettingsApplicationJson1Profile = exports.UpdateGroupSettingsApplicationJson1ProfileRecordingStorageLocation = exports.UpdateGroupSettingsApplicationJson1InMeeting = exports.UpdateGroupSettingsApplicationJson1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = exports.UpdateGroupSettingsApplicationJson1InMeetingWhoCanShareScreenEnum = exports.UpdateGroupSettingsApplicationJson1EmailNotification = exports.UpdateGroupSettingsQueryParams = exports.UpdateGroupSettingsOptionEnum = exports.UpdateGroupSettingsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateGroupSettingsPathParams = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsPathParams, _super);
    function UpdateGroupSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", String)
    ], UpdateGroupSettingsPathParams.prototype, "groupId", void 0);
    return UpdateGroupSettingsPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsPathParams = UpdateGroupSettingsPathParams;
var UpdateGroupSettingsOptionEnum;
(function (UpdateGroupSettingsOptionEnum) {
    UpdateGroupSettingsOptionEnum["MeetingAuthentication"] = "meeting_authentication";
    UpdateGroupSettingsOptionEnum["RecordingAuthentication"] = "recording_authentication";
    UpdateGroupSettingsOptionEnum["MeetingSecurity"] = "meeting_security";
})(UpdateGroupSettingsOptionEnum = exports.UpdateGroupSettingsOptionEnum || (exports.UpdateGroupSettingsOptionEnum = {}));
var UpdateGroupSettingsQueryParams = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsQueryParams, _super);
    function UpdateGroupSettingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=custom_query_fields" }),
        __metadata("design:type", String)
    ], UpdateGroupSettingsQueryParams.prototype, "customQueryFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=option" }),
        __metadata("design:type", String)
    ], UpdateGroupSettingsQueryParams.prototype, "option", void 0);
    return UpdateGroupSettingsQueryParams;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsQueryParams = UpdateGroupSettingsQueryParams;
var UpdateGroupSettingsApplicationJson1EmailNotification = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsApplicationJson1EmailNotification, _super);
    function UpdateGroupSettingsApplicationJson1EmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_host_reminder" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1EmailNotification.prototype, "alternativeHostReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancel_meeting_reminder" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1EmailNotification.prototype, "cancelMeetingReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording_available_reminder" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1EmailNotification.prototype, "cloudRecordingAvailableReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jbh_reminder" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1EmailNotification.prototype, "jbhReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule_for_host_reminder" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1EmailNotification.prototype, "scheduleForHostReminder", void 0);
    return UpdateGroupSettingsApplicationJson1EmailNotification;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsApplicationJson1EmailNotification = UpdateGroupSettingsApplicationJson1EmailNotification;
var UpdateGroupSettingsApplicationJson1InMeetingWhoCanShareScreenEnum;
(function (UpdateGroupSettingsApplicationJson1InMeetingWhoCanShareScreenEnum) {
    UpdateGroupSettingsApplicationJson1InMeetingWhoCanShareScreenEnum["Host"] = "host";
    UpdateGroupSettingsApplicationJson1InMeetingWhoCanShareScreenEnum["All"] = "all";
})(UpdateGroupSettingsApplicationJson1InMeetingWhoCanShareScreenEnum = exports.UpdateGroupSettingsApplicationJson1InMeetingWhoCanShareScreenEnum || (exports.UpdateGroupSettingsApplicationJson1InMeetingWhoCanShareScreenEnum = {}));
var UpdateGroupSettingsApplicationJson1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum;
(function (UpdateGroupSettingsApplicationJson1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum) {
    UpdateGroupSettingsApplicationJson1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum["Host"] = "host";
    UpdateGroupSettingsApplicationJson1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum["All"] = "all";
})(UpdateGroupSettingsApplicationJson1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = exports.UpdateGroupSettingsApplicationJson1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum || (exports.UpdateGroupSettingsApplicationJson1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = {}));
var UpdateGroupSettingsApplicationJson1InMeeting = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsApplicationJson1InMeeting, _super);
    function UpdateGroupSettingsApplicationJson1InMeeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alert_guest_join" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "alertGuestJoin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_show_zoom_windows" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "allowShowZoomWindows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annotation" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "annotation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendee_on_hold" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "attendeeOnHold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_answer" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "autoAnswer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_saving_chat" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "autoSavingChat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=breakout_room" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "breakoutRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chat" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "chat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=closed_caption" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "closedCaption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=co_host" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "coHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_data_center_regions" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "customDataCenterRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_center_regions" }),
        __metadata("design:type", Array)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "dataCenterRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=e2e_encryption" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "e2eEncryption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entry_exit_chime" }),
        __metadata("design:type", String)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "entryExitChime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=far_end_camera_control" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "farEndCameraControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=feedback" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "feedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_transfer" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "fileTransfer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_hd" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "groupHd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_verbal_feedback" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "nonVerbalFeedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_host_view_device_list" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "onlyHostViewDeviceList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=original_audio" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "originalAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=polling" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "polling", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=post_meeting_feedback" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "postMeetingFeedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=private_chat" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "privateChat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_play_own_voice" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "recordPlayOwnVoice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remote_control" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "remoteControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remote_support" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "remoteSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_permission_to_unmute" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "requestPermissionToUnmute", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=screen_sharing" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "screenSharing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sending_default_email_invites" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "sendingDefaultEmailInvites", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_browser_join_link" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "showBrowserJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_device_list" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "showDeviceList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_meeting_control_toolbar" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "showMeetingControlToolbar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stereo_audio" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "stereoAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_html_format_email" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "useHtmlFormatEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtual_background" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "virtualBackground", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=whiteboard" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "whiteboard", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=who_can_share_screen" }),
        __metadata("design:type", String)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "whoCanShareScreen", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=who_can_share_screen_when_someone_is_sharing" }),
        __metadata("design:type", String)
    ], UpdateGroupSettingsApplicationJson1InMeeting.prototype, "whoCanShareScreenWhenSomeoneIsSharing", void 0);
    return UpdateGroupSettingsApplicationJson1InMeeting;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsApplicationJson1InMeeting = UpdateGroupSettingsApplicationJson1InMeeting;
var UpdateGroupSettingsApplicationJson1ProfileRecordingStorageLocation = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsApplicationJson1ProfileRecordingStorageLocation, _super);
    function UpdateGroupSettingsApplicationJson1ProfileRecordingStorageLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowed_values" }),
        __metadata("design:type", Array)
    ], UpdateGroupSettingsApplicationJson1ProfileRecordingStorageLocation.prototype, "allowedValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], UpdateGroupSettingsApplicationJson1ProfileRecordingStorageLocation.prototype, "value", void 0);
    return UpdateGroupSettingsApplicationJson1ProfileRecordingStorageLocation;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsApplicationJson1ProfileRecordingStorageLocation = UpdateGroupSettingsApplicationJson1ProfileRecordingStorageLocation;
var UpdateGroupSettingsApplicationJson1Profile = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsApplicationJson1Profile, _super);
    function UpdateGroupSettingsApplicationJson1Profile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_storage_location" }),
        __metadata("design:type", UpdateGroupSettingsApplicationJson1ProfileRecordingStorageLocation)
    ], UpdateGroupSettingsApplicationJson1Profile.prototype, "recordingStorageLocation", void 0);
    return UpdateGroupSettingsApplicationJson1Profile;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsApplicationJson1Profile = UpdateGroupSettingsApplicationJson1Profile;
var UpdateGroupSettingsApplicationJson1RecordingArchiveSettings = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsApplicationJson1RecordingArchiveSettings, _super);
    function UpdateGroupSettingsApplicationJson1RecordingArchiveSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_file" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1RecordingArchiveSettings.prototype, "audioFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cc_transcript_file" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1RecordingArchiveSettings.prototype, "ccTranscriptFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chat_file" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1RecordingArchiveSettings.prototype, "chatFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chat_with_sender_email" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1RecordingArchiveSettings.prototype, "chatWithSenderEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video_file" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1RecordingArchiveSettings.prototype, "videoFile", void 0);
    return UpdateGroupSettingsApplicationJson1RecordingArchiveSettings;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsApplicationJson1RecordingArchiveSettings = UpdateGroupSettingsApplicationJson1RecordingArchiveSettings;
// UpdateGroupSettingsApplicationJson1RecordingArchive
/**
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted archiving solution access by the Zoom Support team.
**/
var UpdateGroupSettingsApplicationJson1RecordingArchive = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsApplicationJson1RecordingArchive, _super);
    function UpdateGroupSettingsApplicationJson1RecordingArchive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1RecordingArchive.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", UpdateGroupSettingsApplicationJson1RecordingArchiveSettings)
    ], UpdateGroupSettingsApplicationJson1RecordingArchive.prototype, "settings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], UpdateGroupSettingsApplicationJson1RecordingArchive.prototype, "type", void 0);
    return UpdateGroupSettingsApplicationJson1RecordingArchive;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsApplicationJson1RecordingArchive = UpdateGroupSettingsApplicationJson1RecordingArchive;
// UpdateGroupSettingsApplicationJson1RecordingIpAddressAccessControl
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
**/
var UpdateGroupSettingsApplicationJson1RecordingIpAddressAccessControl = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsApplicationJson1RecordingIpAddressAccessControl, _super);
    function UpdateGroupSettingsApplicationJson1RecordingIpAddressAccessControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1RecordingIpAddressAccessControl.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_addresses_or_ranges" }),
        __metadata("design:type", String)
    ], UpdateGroupSettingsApplicationJson1RecordingIpAddressAccessControl.prototype, "ipAddressesOrRanges", void 0);
    return UpdateGroupSettingsApplicationJson1RecordingIpAddressAccessControl;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsApplicationJson1RecordingIpAddressAccessControl = UpdateGroupSettingsApplicationJson1RecordingIpAddressAccessControl;
var UpdateGroupSettingsApplicationJson1Recording = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsApplicationJson1Recording, _super);
    function UpdateGroupSettingsApplicationJson1Recording() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_user_access_recording" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1Recording.prototype, "accountUserAccessRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=archive" }),
        __metadata("design:type", UpdateGroupSettingsApplicationJson1RecordingArchive)
    ], UpdateGroupSettingsApplicationJson1Recording.prototype, "archive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_recording" }),
        __metadata("design:type", String)
    ], UpdateGroupSettingsApplicationJson1Recording.prototype, "autoRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1Recording.prototype, "cloudRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording_download" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1Recording.prototype, "cloudRecordingDownload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording_download_host" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1Recording.prototype, "cloudRecordingDownloadHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_delete_cloud_recording" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1Recording.prototype, "hostDeleteCloudRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_address_access_control" }),
        __metadata("design:type", UpdateGroupSettingsApplicationJson1RecordingIpAddressAccessControl)
    ], UpdateGroupSettingsApplicationJson1Recording.prototype, "ipAddressAccessControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=local_recording" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1Recording.prototype, "localRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prevent_host_access_recording" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1Recording.prototype, "preventHostAccessRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_audio_file" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1Recording.prototype, "recordAudioFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_gallery_view" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1Recording.prototype, "recordGalleryView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_speaker_view" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1Recording.prototype, "recordSpeakerView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_audio_transcript" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1Recording.prototype, "recordingAudioTranscript", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=save_chat_text" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1Recording.prototype, "saveChatText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_timestamp" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1Recording.prototype, "showTimestamp", void 0);
    return UpdateGroupSettingsApplicationJson1Recording;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsApplicationJson1Recording = UpdateGroupSettingsApplicationJson1Recording;
var UpdateGroupSettingsApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum;
(function (UpdateGroupSettingsApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum) {
    UpdateGroupSettingsApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum["All"] = "all";
    UpdateGroupSettingsApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum["JbhOnly"] = "jbh_only";
    UpdateGroupSettingsApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum["None"] = "none";
})(UpdateGroupSettingsApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum = exports.UpdateGroupSettingsApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum || (exports.UpdateGroupSettingsApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum = {}));
var UpdateGroupSettingsApplicationJson1ScheduleMeeting = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsApplicationJson1ScheduleMeeting, _super);
    function UpdateGroupSettingsApplicationJson1ScheduleMeeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_type" }),
        __metadata("design:type", String)
    ], UpdateGroupSettingsApplicationJson1ScheduleMeeting.prototype, "audioType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed_password_in_join_link" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1ScheduleMeeting.prototype, "embedPasswordInJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=force_pmi_jbh_password" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1ScheduleMeeting.prototype, "forcePmiJbhPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_video" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1ScheduleMeeting.prototype, "hostVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_before_host" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1ScheduleMeeting.prototype, "joinBeforeHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mute_upon_entry" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1ScheduleMeeting.prototype, "muteUponEntry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participant_video" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1ScheduleMeeting.prototype, "participantVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pstn_password_protected" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1ScheduleMeeting.prototype, "pstnPasswordProtected", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_all_meetings" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1ScheduleMeeting.prototype, "requirePasswordForAllMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_instant_meetings" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1ScheduleMeeting.prototype, "requirePasswordForInstantMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_pmi_meetings" }),
        __metadata("design:type", String)
    ], UpdateGroupSettingsApplicationJson1ScheduleMeeting.prototype, "requirePasswordForPmiMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_meetings" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1ScheduleMeeting.prototype, "requirePasswordForScheduledMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduling_new_meetings" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1ScheduleMeeting.prototype, "requirePasswordForSchedulingNewMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upcoming_meeting_reminder" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1ScheduleMeeting.prototype, "upcomingMeetingReminder", void 0);
    return UpdateGroupSettingsApplicationJson1ScheduleMeeting;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsApplicationJson1ScheduleMeeting = UpdateGroupSettingsApplicationJson1ScheduleMeeting;
var UpdateGroupSettingsApplicationJson1Telephony = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsApplicationJson1Telephony, _super);
    function UpdateGroupSettingsApplicationJson1Telephony() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_conference_info" }),
        __metadata("design:type", String)
    ], UpdateGroupSettingsApplicationJson1Telephony.prototype, "audioConferenceInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=third_party_audio" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJson1Telephony.prototype, "thirdPartyAudio", void 0);
    return UpdateGroupSettingsApplicationJson1Telephony;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsApplicationJson1Telephony = UpdateGroupSettingsApplicationJson1Telephony;
var UpdateGroupSettingsApplicationJson1 = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsApplicationJson1, _super);
    function UpdateGroupSettingsApplicationJson1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email_notification" }),
        __metadata("design:type", UpdateGroupSettingsApplicationJson1EmailNotification)
    ], UpdateGroupSettingsApplicationJson1.prototype, "emailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=in_meeting" }),
        __metadata("design:type", UpdateGroupSettingsApplicationJson1InMeeting)
    ], UpdateGroupSettingsApplicationJson1.prototype, "inMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=profile" }),
        __metadata("design:type", UpdateGroupSettingsApplicationJson1Profile)
    ], UpdateGroupSettingsApplicationJson1.prototype, "profile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording" }),
        __metadata("design:type", UpdateGroupSettingsApplicationJson1Recording)
    ], UpdateGroupSettingsApplicationJson1.prototype, "recording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule_meeting" }),
        __metadata("design:type", UpdateGroupSettingsApplicationJson1ScheduleMeeting)
    ], UpdateGroupSettingsApplicationJson1.prototype, "scheduleMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=telephony" }),
        __metadata("design:type", UpdateGroupSettingsApplicationJson1Telephony)
    ], UpdateGroupSettingsApplicationJson1.prototype, "telephony", void 0);
    return UpdateGroupSettingsApplicationJson1;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsApplicationJson1 = UpdateGroupSettingsApplicationJson1;
var UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
(function (UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum) {
    UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum["EnhancedEncryption"] = "enhanced_encryption";
    UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum["E2ee"] = "e2ee";
})(UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = exports.UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum || (exports.UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = {}));
// UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
/**
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
var UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement, _super);
    function UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consecutive_characters_length" }),
        __metadata("design:type", Number)
    ], UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "consecutiveCharactersLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_letter" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveLetter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_number" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_upper_and_lower_characters" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveUpperAndLowerCharacters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_allow_numeric" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "onlyAllowNumeric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weak_enhance_detection" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "weakEnhanceDetection", void 0);
    return UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
// UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
/**
 * Specify the settings to be applied if waiting room is enabled.
**/
var UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings, _super);
    function UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants_to_place_in_waiting_room" }),
        __metadata("design:type", Number)
    ], UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "participantsToPlaceInWaitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users_who_can_admit_participants_from_waiting_room" }),
        __metadata("design:type", Number)
    ], UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "usersWhoCanAdmitParticipantsFromWaitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=whitelisted_domains_for_waiting_room" }),
        __metadata("design:type", String)
    ], UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "whitelistedDomainsForWaitingRoom", void 0);
    return UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
var UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity, _super);
    function UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_security" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "autoSecurity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed_password_in_join_link" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "embedPasswordInJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryption_type" }),
        __metadata("design:type", String)
    ], UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "encryptionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_to_end_encrypted_meetings" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "endToEndEncryptedMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "meetingPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password_requirement" }),
        __metadata("design:type", UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement)
    ], UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "meetingPasswordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_password" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "phonePassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pmi_password" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "pmiPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_meeting" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "requirePasswordForScheduledMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_webinar" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "requirePasswordForScheduledWebinar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room_settings" }),
        __metadata("design:type", UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings)
    ], UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "waitingRoomSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webinar_password" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "webinarPassword", void 0);
    return UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity = UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
var UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettings = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettings, _super);
    function UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_security" }),
        __metadata("design:type", UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity)
    ], UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettings.prototype, "meetingSecurity", void 0);
    return UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettings;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettings = UpdateGroupSettingsApplicationJsonMeetingWebinarSecuritySettings;
var UpdateGroupSettingsMultipartFormData1EmailNotification = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsMultipartFormData1EmailNotification, _super);
    function UpdateGroupSettingsMultipartFormData1EmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_host_reminder" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1EmailNotification.prototype, "alternativeHostReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancel_meeting_reminder" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1EmailNotification.prototype, "cancelMeetingReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording_available_reminder" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1EmailNotification.prototype, "cloudRecordingAvailableReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jbh_reminder" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1EmailNotification.prototype, "jbhReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule_for_host_reminder" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1EmailNotification.prototype, "scheduleForHostReminder", void 0);
    return UpdateGroupSettingsMultipartFormData1EmailNotification;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsMultipartFormData1EmailNotification = UpdateGroupSettingsMultipartFormData1EmailNotification;
var UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenEnum;
(function (UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenEnum) {
    UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenEnum["Host"] = "host";
    UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenEnum["All"] = "all";
})(UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenEnum = exports.UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenEnum || (exports.UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenEnum = {}));
var UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum;
(function (UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum) {
    UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum["Host"] = "host";
    UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum["All"] = "all";
})(UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = exports.UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum || (exports.UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = {}));
var UpdateGroupSettingsMultipartFormData1InMeeting = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsMultipartFormData1InMeeting, _super);
    function UpdateGroupSettingsMultipartFormData1InMeeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alert_guest_join" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "alertGuestJoin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_show_zoom_windows" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "allowShowZoomWindows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annotation" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "annotation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendee_on_hold" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "attendeeOnHold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_answer" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "autoAnswer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_saving_chat" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "autoSavingChat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=breakout_room" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "breakoutRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chat" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "chat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=closed_caption" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "closedCaption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=co_host" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "coHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_data_center_regions" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "customDataCenterRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_center_regions" }),
        __metadata("design:type", Array)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "dataCenterRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=e2e_encryption" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "e2eEncryption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entry_exit_chime" }),
        __metadata("design:type", String)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "entryExitChime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=far_end_camera_control" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "farEndCameraControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=feedback" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "feedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_transfer" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "fileTransfer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_hd" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "groupHd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_verbal_feedback" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "nonVerbalFeedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_host_view_device_list" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "onlyHostViewDeviceList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=original_audio" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "originalAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=polling" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "polling", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=post_meeting_feedback" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "postMeetingFeedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=private_chat" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "privateChat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_play_own_voice" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "recordPlayOwnVoice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remote_control" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "remoteControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remote_support" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "remoteSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_permission_to_unmute" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "requestPermissionToUnmute", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=screen_sharing" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "screenSharing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sending_default_email_invites" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "sendingDefaultEmailInvites", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_browser_join_link" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "showBrowserJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_device_list" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "showDeviceList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_meeting_control_toolbar" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "showMeetingControlToolbar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stereo_audio" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "stereoAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_html_format_email" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "useHtmlFormatEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtual_background" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "virtualBackground", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=whiteboard" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "whiteboard", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=who_can_share_screen" }),
        __metadata("design:type", String)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "whoCanShareScreen", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=who_can_share_screen_when_someone_is_sharing" }),
        __metadata("design:type", String)
    ], UpdateGroupSettingsMultipartFormData1InMeeting.prototype, "whoCanShareScreenWhenSomeoneIsSharing", void 0);
    return UpdateGroupSettingsMultipartFormData1InMeeting;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsMultipartFormData1InMeeting = UpdateGroupSettingsMultipartFormData1InMeeting;
var UpdateGroupSettingsMultipartFormData1ProfileRecordingStorageLocation = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsMultipartFormData1ProfileRecordingStorageLocation, _super);
    function UpdateGroupSettingsMultipartFormData1ProfileRecordingStorageLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowed_values" }),
        __metadata("design:type", Array)
    ], UpdateGroupSettingsMultipartFormData1ProfileRecordingStorageLocation.prototype, "allowedValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], UpdateGroupSettingsMultipartFormData1ProfileRecordingStorageLocation.prototype, "value", void 0);
    return UpdateGroupSettingsMultipartFormData1ProfileRecordingStorageLocation;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsMultipartFormData1ProfileRecordingStorageLocation = UpdateGroupSettingsMultipartFormData1ProfileRecordingStorageLocation;
var UpdateGroupSettingsMultipartFormData1Profile = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsMultipartFormData1Profile, _super);
    function UpdateGroupSettingsMultipartFormData1Profile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_storage_location" }),
        __metadata("design:type", UpdateGroupSettingsMultipartFormData1ProfileRecordingStorageLocation)
    ], UpdateGroupSettingsMultipartFormData1Profile.prototype, "recordingStorageLocation", void 0);
    return UpdateGroupSettingsMultipartFormData1Profile;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsMultipartFormData1Profile = UpdateGroupSettingsMultipartFormData1Profile;
var UpdateGroupSettingsMultipartFormData1RecordingArchiveSettings = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsMultipartFormData1RecordingArchiveSettings, _super);
    function UpdateGroupSettingsMultipartFormData1RecordingArchiveSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_file" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1RecordingArchiveSettings.prototype, "audioFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cc_transcript_file" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1RecordingArchiveSettings.prototype, "ccTranscriptFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chat_file" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1RecordingArchiveSettings.prototype, "chatFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chat_with_sender_email" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1RecordingArchiveSettings.prototype, "chatWithSenderEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video_file" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1RecordingArchiveSettings.prototype, "videoFile", void 0);
    return UpdateGroupSettingsMultipartFormData1RecordingArchiveSettings;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsMultipartFormData1RecordingArchiveSettings = UpdateGroupSettingsMultipartFormData1RecordingArchiveSettings;
// UpdateGroupSettingsMultipartFormData1RecordingArchive
/**
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted archiving solution access by the Zoom Support team.
**/
var UpdateGroupSettingsMultipartFormData1RecordingArchive = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsMultipartFormData1RecordingArchive, _super);
    function UpdateGroupSettingsMultipartFormData1RecordingArchive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1RecordingArchive.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", UpdateGroupSettingsMultipartFormData1RecordingArchiveSettings)
    ], UpdateGroupSettingsMultipartFormData1RecordingArchive.prototype, "settings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], UpdateGroupSettingsMultipartFormData1RecordingArchive.prototype, "type", void 0);
    return UpdateGroupSettingsMultipartFormData1RecordingArchive;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsMultipartFormData1RecordingArchive = UpdateGroupSettingsMultipartFormData1RecordingArchive;
// UpdateGroupSettingsMultipartFormData1RecordingIpAddressAccessControl
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
**/
var UpdateGroupSettingsMultipartFormData1RecordingIpAddressAccessControl = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsMultipartFormData1RecordingIpAddressAccessControl, _super);
    function UpdateGroupSettingsMultipartFormData1RecordingIpAddressAccessControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1RecordingIpAddressAccessControl.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_addresses_or_ranges" }),
        __metadata("design:type", String)
    ], UpdateGroupSettingsMultipartFormData1RecordingIpAddressAccessControl.prototype, "ipAddressesOrRanges", void 0);
    return UpdateGroupSettingsMultipartFormData1RecordingIpAddressAccessControl;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsMultipartFormData1RecordingIpAddressAccessControl = UpdateGroupSettingsMultipartFormData1RecordingIpAddressAccessControl;
var UpdateGroupSettingsMultipartFormData1Recording = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsMultipartFormData1Recording, _super);
    function UpdateGroupSettingsMultipartFormData1Recording() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_user_access_recording" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1Recording.prototype, "accountUserAccessRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=archive" }),
        __metadata("design:type", UpdateGroupSettingsMultipartFormData1RecordingArchive)
    ], UpdateGroupSettingsMultipartFormData1Recording.prototype, "archive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_recording" }),
        __metadata("design:type", String)
    ], UpdateGroupSettingsMultipartFormData1Recording.prototype, "autoRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1Recording.prototype, "cloudRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording_download" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1Recording.prototype, "cloudRecordingDownload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording_download_host" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1Recording.prototype, "cloudRecordingDownloadHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_delete_cloud_recording" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1Recording.prototype, "hostDeleteCloudRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_address_access_control" }),
        __metadata("design:type", UpdateGroupSettingsMultipartFormData1RecordingIpAddressAccessControl)
    ], UpdateGroupSettingsMultipartFormData1Recording.prototype, "ipAddressAccessControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=local_recording" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1Recording.prototype, "localRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prevent_host_access_recording" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1Recording.prototype, "preventHostAccessRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_audio_file" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1Recording.prototype, "recordAudioFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_gallery_view" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1Recording.prototype, "recordGalleryView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_speaker_view" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1Recording.prototype, "recordSpeakerView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_audio_transcript" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1Recording.prototype, "recordingAudioTranscript", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=save_chat_text" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1Recording.prototype, "saveChatText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_timestamp" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1Recording.prototype, "showTimestamp", void 0);
    return UpdateGroupSettingsMultipartFormData1Recording;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsMultipartFormData1Recording = UpdateGroupSettingsMultipartFormData1Recording;
var UpdateGroupSettingsMultipartFormData1ScheduleMeetingRequirePasswordForPmiMeetingsEnum;
(function (UpdateGroupSettingsMultipartFormData1ScheduleMeetingRequirePasswordForPmiMeetingsEnum) {
    UpdateGroupSettingsMultipartFormData1ScheduleMeetingRequirePasswordForPmiMeetingsEnum["All"] = "all";
    UpdateGroupSettingsMultipartFormData1ScheduleMeetingRequirePasswordForPmiMeetingsEnum["JbhOnly"] = "jbh_only";
    UpdateGroupSettingsMultipartFormData1ScheduleMeetingRequirePasswordForPmiMeetingsEnum["None"] = "none";
})(UpdateGroupSettingsMultipartFormData1ScheduleMeetingRequirePasswordForPmiMeetingsEnum = exports.UpdateGroupSettingsMultipartFormData1ScheduleMeetingRequirePasswordForPmiMeetingsEnum || (exports.UpdateGroupSettingsMultipartFormData1ScheduleMeetingRequirePasswordForPmiMeetingsEnum = {}));
var UpdateGroupSettingsMultipartFormData1ScheduleMeeting = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsMultipartFormData1ScheduleMeeting, _super);
    function UpdateGroupSettingsMultipartFormData1ScheduleMeeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_type" }),
        __metadata("design:type", String)
    ], UpdateGroupSettingsMultipartFormData1ScheduleMeeting.prototype, "audioType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed_password_in_join_link" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1ScheduleMeeting.prototype, "embedPasswordInJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=force_pmi_jbh_password" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1ScheduleMeeting.prototype, "forcePmiJbhPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_video" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1ScheduleMeeting.prototype, "hostVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_before_host" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1ScheduleMeeting.prototype, "joinBeforeHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mute_upon_entry" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1ScheduleMeeting.prototype, "muteUponEntry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participant_video" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1ScheduleMeeting.prototype, "participantVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pstn_password_protected" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1ScheduleMeeting.prototype, "pstnPasswordProtected", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_all_meetings" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1ScheduleMeeting.prototype, "requirePasswordForAllMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_instant_meetings" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1ScheduleMeeting.prototype, "requirePasswordForInstantMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_pmi_meetings" }),
        __metadata("design:type", String)
    ], UpdateGroupSettingsMultipartFormData1ScheduleMeeting.prototype, "requirePasswordForPmiMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_meetings" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1ScheduleMeeting.prototype, "requirePasswordForScheduledMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduling_new_meetings" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1ScheduleMeeting.prototype, "requirePasswordForSchedulingNewMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upcoming_meeting_reminder" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1ScheduleMeeting.prototype, "upcomingMeetingReminder", void 0);
    return UpdateGroupSettingsMultipartFormData1ScheduleMeeting;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsMultipartFormData1ScheduleMeeting = UpdateGroupSettingsMultipartFormData1ScheduleMeeting;
var UpdateGroupSettingsMultipartFormData1Telephony = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsMultipartFormData1Telephony, _super);
    function UpdateGroupSettingsMultipartFormData1Telephony() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_conference_info" }),
        __metadata("design:type", String)
    ], UpdateGroupSettingsMultipartFormData1Telephony.prototype, "audioConferenceInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=third_party_audio" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormData1Telephony.prototype, "thirdPartyAudio", void 0);
    return UpdateGroupSettingsMultipartFormData1Telephony;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsMultipartFormData1Telephony = UpdateGroupSettingsMultipartFormData1Telephony;
var UpdateGroupSettingsMultipartFormData1 = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsMultipartFormData1, _super);
    function UpdateGroupSettingsMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=email_notification;json=true" }),
        __metadata("design:type", UpdateGroupSettingsMultipartFormData1EmailNotification)
    ], UpdateGroupSettingsMultipartFormData1.prototype, "emailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=in_meeting;json=true" }),
        __metadata("design:type", UpdateGroupSettingsMultipartFormData1InMeeting)
    ], UpdateGroupSettingsMultipartFormData1.prototype, "inMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=profile;json=true" }),
        __metadata("design:type", UpdateGroupSettingsMultipartFormData1Profile)
    ], UpdateGroupSettingsMultipartFormData1.prototype, "profile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=recording;json=true" }),
        __metadata("design:type", UpdateGroupSettingsMultipartFormData1Recording)
    ], UpdateGroupSettingsMultipartFormData1.prototype, "recording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=schedule_meeting;json=true" }),
        __metadata("design:type", UpdateGroupSettingsMultipartFormData1ScheduleMeeting)
    ], UpdateGroupSettingsMultipartFormData1.prototype, "scheduleMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=telephony;json=true" }),
        __metadata("design:type", UpdateGroupSettingsMultipartFormData1Telephony)
    ], UpdateGroupSettingsMultipartFormData1.prototype, "telephony", void 0);
    return UpdateGroupSettingsMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsMultipartFormData1 = UpdateGroupSettingsMultipartFormData1;
var UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
(function (UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum) {
    UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum["EnhancedEncryption"] = "enhanced_encryption";
    UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum["E2ee"] = "e2ee";
})(UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = exports.UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum || (exports.UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = {}));
// UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
/**
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
var UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement, _super);
    function UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consecutive_characters_length" }),
        __metadata("design:type", Number)
    ], UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "consecutiveCharactersLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_letter" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveLetter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_number" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_upper_and_lower_characters" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveUpperAndLowerCharacters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_allow_numeric" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "onlyAllowNumeric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weak_enhance_detection" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "weakEnhanceDetection", void 0);
    return UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
// UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
/**
 * Specify the settings to be applied if waiting room is enabled.
**/
var UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings, _super);
    function UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants_to_place_in_waiting_room" }),
        __metadata("design:type", Number)
    ], UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "participantsToPlaceInWaitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users_who_can_admit_participants_from_waiting_room" }),
        __metadata("design:type", Number)
    ], UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "usersWhoCanAdmitParticipantsFromWaitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=whitelisted_domains_for_waiting_room" }),
        __metadata("design:type", String)
    ], UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "whitelistedDomainsForWaitingRoom", void 0);
    return UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
var UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity, _super);
    function UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_security" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "autoSecurity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed_password_in_join_link" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "embedPasswordInJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryption_type" }),
        __metadata("design:type", String)
    ], UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "encryptionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_to_end_encrypted_meetings" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "endToEndEncryptedMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "meetingPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password_requirement" }),
        __metadata("design:type", UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement)
    ], UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "meetingPasswordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_password" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "phonePassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pmi_password" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "pmiPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_meeting" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "requirePasswordForScheduledMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_webinar" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "requirePasswordForScheduledWebinar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room_settings" }),
        __metadata("design:type", UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings)
    ], UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "waitingRoomSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webinar_password" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "webinarPassword", void 0);
    return UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity = UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity;
var UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettings = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettings, _super);
    function UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=meeting_security;json=true" }),
        __metadata("design:type", UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity)
    ], UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettings.prototype, "meetingSecurity", void 0);
    return UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettings;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettings = UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettings;
var UpdateGroupSettingsRequests = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsRequests, _super);
    function UpdateGroupSettingsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], UpdateGroupSettingsRequests.prototype, "oneOf", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", Object)
    ], UpdateGroupSettingsRequests.prototype, "oneOf1", void 0);
    return UpdateGroupSettingsRequests;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsRequests = UpdateGroupSettingsRequests;
var UpdateGroupSettingsRequest = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsRequest, _super);
    function UpdateGroupSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateGroupSettingsPathParams)
    ], UpdateGroupSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateGroupSettingsQueryParams)
    ], UpdateGroupSettingsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateGroupSettingsRequests)
    ], UpdateGroupSettingsRequest.prototype, "request", void 0);
    return UpdateGroupSettingsRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsRequest = UpdateGroupSettingsRequest;
var UpdateGroupSettingsResponse = /** @class */ (function (_super) {
    __extends(UpdateGroupSettingsResponse, _super);
    function UpdateGroupSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdateGroupSettingsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateGroupSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateGroupSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateGroupSettingsResponse.prototype, "updateGroupSettings204ApplicationJSONAny", void 0);
    return UpdateGroupSettingsResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateGroupSettingsResponse = UpdateGroupSettingsResponse;
