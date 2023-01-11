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
exports.GetGroupSettingsResponse = exports.GetGroupSettingsRequest = exports.GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettings = exports.GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity = exports.GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = exports.GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = exports.GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = exports.GetGroupSettings200ApplicationJson1 = exports.GetGroupSettings200ApplicationJson1Telephony = exports.GetGroupSettings200ApplicationJson1TelephonyTelephonyRegions = exports.GetGroupSettings200ApplicationJson1ScheduleMeeting = exports.GetGroupSettings200ApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum = exports.GetGroupSettings200ApplicationJson1Recording = exports.GetGroupSettings200ApplicationJson1RecordingIpAddressAccessControl = exports.GetGroupSettings200ApplicationJson1RecordingArchive = exports.GetGroupSettings200ApplicationJson1RecordingArchiveSettings = exports.GetGroupSettings200ApplicationJson1Profile = exports.GetGroupSettings200ApplicationJson1ProfileRecordingStorageLocation = exports.GetGroupSettings200ApplicationJson1InMeeting = exports.GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = exports.GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenEnum = exports.GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettings = exports.GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettingsFiles = exports.GetGroupSettings200ApplicationJson1EmailNotification = exports.GetGroupSettingsSecurity = exports.GetGroupSettingsQueryParams = exports.GetGroupSettingsOptionEnum = exports.GetGroupSettingsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetGroupSettingsPathParams = /** @class */ (function (_super) {
    __extends(GetGroupSettingsPathParams, _super);
    function GetGroupSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", String)
    ], GetGroupSettingsPathParams.prototype, "groupId", void 0);
    return GetGroupSettingsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetGroupSettingsPathParams = GetGroupSettingsPathParams;
var GetGroupSettingsOptionEnum;
(function (GetGroupSettingsOptionEnum) {
    GetGroupSettingsOptionEnum["MeetingAuthentication"] = "meeting_authentication";
    GetGroupSettingsOptionEnum["RecordingAuthentication"] = "recording_authentication";
})(GetGroupSettingsOptionEnum = exports.GetGroupSettingsOptionEnum || (exports.GetGroupSettingsOptionEnum = {}));
var GetGroupSettingsQueryParams = /** @class */ (function (_super) {
    __extends(GetGroupSettingsQueryParams, _super);
    function GetGroupSettingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=custom_query_fields" }),
        __metadata("design:type", String)
    ], GetGroupSettingsQueryParams.prototype, "customQueryFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=option" }),
        __metadata("design:type", String)
    ], GetGroupSettingsQueryParams.prototype, "option", void 0);
    return GetGroupSettingsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetGroupSettingsQueryParams = GetGroupSettingsQueryParams;
var GetGroupSettingsSecurity = /** @class */ (function (_super) {
    __extends(GetGroupSettingsSecurity, _super);
    function GetGroupSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], GetGroupSettingsSecurity.prototype, "oAuth", void 0);
    return GetGroupSettingsSecurity;
}(utils_1.SpeakeasyBase));
exports.GetGroupSettingsSecurity = GetGroupSettingsSecurity;
var GetGroupSettings200ApplicationJson1EmailNotification = /** @class */ (function (_super) {
    __extends(GetGroupSettings200ApplicationJson1EmailNotification, _super);
    function GetGroupSettings200ApplicationJson1EmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_host_reminder" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1EmailNotification.prototype, "alternativeHostReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancel_meeting_reminder" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1EmailNotification.prototype, "cancelMeetingReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording_available_reminder" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1EmailNotification.prototype, "cloudRecordingAvailableReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jbh_reminder" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1EmailNotification.prototype, "jbhReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule_for_host_reminder" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1EmailNotification.prototype, "scheduleForHostReminder", void 0);
    return GetGroupSettings200ApplicationJson1EmailNotification;
}(utils_1.SpeakeasyBase));
exports.GetGroupSettings200ApplicationJson1EmailNotification = GetGroupSettings200ApplicationJson1EmailNotification;
var GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettingsFiles = /** @class */ (function (_super) {
    __extends(GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettingsFiles, _super);
    function GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettingsFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettingsFiles.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_default" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettingsFiles.prototype, "isDefault", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettingsFiles.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettingsFiles.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettingsFiles.prototype, "type", void 0);
    return GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettingsFiles;
}(utils_1.SpeakeasyBase));
exports.GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettingsFiles = GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettingsFiles;
// GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettings
/**
 * Settings to manage virtual background.
**/
var GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettings = /** @class */ (function (_super) {
    __extends(GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettings, _super);
    function GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_upload_custom" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettings.prototype, "allowUploadCustom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_videos" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettings.prototype, "allowVideos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettings.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=files", elemType: GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettingsFiles }),
        __metadata("design:type", Array)
    ], GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettings.prototype, "files", void 0);
    return GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettings;
}(utils_1.SpeakeasyBase));
exports.GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettings = GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettings;
var GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenEnum;
(function (GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenEnum) {
    GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenEnum["Host"] = "host";
    GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenEnum["All"] = "all";
})(GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenEnum = exports.GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenEnum || (exports.GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenEnum = {}));
var GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum;
(function (GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum) {
    GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum["Host"] = "host";
    GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum["All"] = "all";
})(GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = exports.GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum || (exports.GetGroupSettings200ApplicationJson1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum = {}));
var GetGroupSettings200ApplicationJson1InMeeting = /** @class */ (function (_super) {
    __extends(GetGroupSettings200ApplicationJson1InMeeting, _super);
    function GetGroupSettings200ApplicationJson1InMeeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alert_guest_join" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "alertGuestJoin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_show_zoom_windows" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "allowShowZoomWindows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annotation" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "annotation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendee_on_hold" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "attendeeOnHold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_answer" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "autoAnswer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_saving_chat" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "autoSavingChat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=breakout_room" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "breakoutRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chat" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "chat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=closed_caption" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "closedCaption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=co_host" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "coHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_data_center_regions" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "customDataCenterRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_center_regions" }),
        __metadata("design:type", Array)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "dataCenterRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=e2e_encryption" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "e2eEncryption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entry_exit_chime" }),
        __metadata("design:type", String)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "entryExitChime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=far_end_camera_control" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "farEndCameraControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=feedback" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "feedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_transfer" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "fileTransfer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_hd" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "groupHd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_verbal_feedback" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "nonVerbalFeedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_host_view_device_list" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "onlyHostViewDeviceList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=original_audio" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "originalAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=polling" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "polling", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=post_meeting_feedback" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "postMeetingFeedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=private_chat" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "privateChat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_play_own_voice" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "recordPlayOwnVoice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remote_control" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "remoteControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remote_support" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "remoteSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_permission_to_unmute" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "requestPermissionToUnmute", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=screen_sharing" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "screenSharing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sending_default_email_invites" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "sendingDefaultEmailInvites", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_browser_join_link" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "showBrowserJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_device_list" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "showDeviceList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_meeting_control_toolbar" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "showMeetingControlToolbar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stereo_audio" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "stereoAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_html_format_email" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "useHtmlFormatEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtual_background" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "virtualBackground", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtual_background_settings" }),
        __metadata("design:type", GetGroupSettings200ApplicationJson1InMeetingVirtualBackgroundSettings)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "virtualBackgroundSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=whiteboard" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "whiteboard", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=who_can_share_screen" }),
        __metadata("design:type", String)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "whoCanShareScreen", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=who_can_share_screen_when_someone_is_sharing" }),
        __metadata("design:type", String)
    ], GetGroupSettings200ApplicationJson1InMeeting.prototype, "whoCanShareScreenWhenSomeoneIsSharing", void 0);
    return GetGroupSettings200ApplicationJson1InMeeting;
}(utils_1.SpeakeasyBase));
exports.GetGroupSettings200ApplicationJson1InMeeting = GetGroupSettings200ApplicationJson1InMeeting;
var GetGroupSettings200ApplicationJson1ProfileRecordingStorageLocation = /** @class */ (function (_super) {
    __extends(GetGroupSettings200ApplicationJson1ProfileRecordingStorageLocation, _super);
    function GetGroupSettings200ApplicationJson1ProfileRecordingStorageLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowed_values" }),
        __metadata("design:type", Array)
    ], GetGroupSettings200ApplicationJson1ProfileRecordingStorageLocation.prototype, "allowedValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetGroupSettings200ApplicationJson1ProfileRecordingStorageLocation.prototype, "value", void 0);
    return GetGroupSettings200ApplicationJson1ProfileRecordingStorageLocation;
}(utils_1.SpeakeasyBase));
exports.GetGroupSettings200ApplicationJson1ProfileRecordingStorageLocation = GetGroupSettings200ApplicationJson1ProfileRecordingStorageLocation;
var GetGroupSettings200ApplicationJson1Profile = /** @class */ (function (_super) {
    __extends(GetGroupSettings200ApplicationJson1Profile, _super);
    function GetGroupSettings200ApplicationJson1Profile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_storage_location" }),
        __metadata("design:type", GetGroupSettings200ApplicationJson1ProfileRecordingStorageLocation)
    ], GetGroupSettings200ApplicationJson1Profile.prototype, "recordingStorageLocation", void 0);
    return GetGroupSettings200ApplicationJson1Profile;
}(utils_1.SpeakeasyBase));
exports.GetGroupSettings200ApplicationJson1Profile = GetGroupSettings200ApplicationJson1Profile;
var GetGroupSettings200ApplicationJson1RecordingArchiveSettings = /** @class */ (function (_super) {
    __extends(GetGroupSettings200ApplicationJson1RecordingArchiveSettings, _super);
    function GetGroupSettings200ApplicationJson1RecordingArchiveSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_file" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1RecordingArchiveSettings.prototype, "audioFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cc_transcript_file" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1RecordingArchiveSettings.prototype, "ccTranscriptFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chat_file" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1RecordingArchiveSettings.prototype, "chatFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chat_with_sender_email" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1RecordingArchiveSettings.prototype, "chatWithSenderEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video_file" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1RecordingArchiveSettings.prototype, "videoFile", void 0);
    return GetGroupSettings200ApplicationJson1RecordingArchiveSettings;
}(utils_1.SpeakeasyBase));
exports.GetGroupSettings200ApplicationJson1RecordingArchiveSettings = GetGroupSettings200ApplicationJson1RecordingArchiveSettings;
// GetGroupSettings200ApplicationJson1RecordingArchive
/**
 * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted archiving solution access by the Zoom Support team.
**/
var GetGroupSettings200ApplicationJson1RecordingArchive = /** @class */ (function (_super) {
    __extends(GetGroupSettings200ApplicationJson1RecordingArchive, _super);
    function GetGroupSettings200ApplicationJson1RecordingArchive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1RecordingArchive.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", GetGroupSettings200ApplicationJson1RecordingArchiveSettings)
    ], GetGroupSettings200ApplicationJson1RecordingArchive.prototype, "settings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], GetGroupSettings200ApplicationJson1RecordingArchive.prototype, "type", void 0);
    return GetGroupSettings200ApplicationJson1RecordingArchive;
}(utils_1.SpeakeasyBase));
exports.GetGroupSettings200ApplicationJson1RecordingArchive = GetGroupSettings200ApplicationJson1RecordingArchive;
// GetGroupSettings200ApplicationJson1RecordingIpAddressAccessControl
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
**/
var GetGroupSettings200ApplicationJson1RecordingIpAddressAccessControl = /** @class */ (function (_super) {
    __extends(GetGroupSettings200ApplicationJson1RecordingIpAddressAccessControl, _super);
    function GetGroupSettings200ApplicationJson1RecordingIpAddressAccessControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1RecordingIpAddressAccessControl.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_addresses_or_ranges" }),
        __metadata("design:type", String)
    ], GetGroupSettings200ApplicationJson1RecordingIpAddressAccessControl.prototype, "ipAddressesOrRanges", void 0);
    return GetGroupSettings200ApplicationJson1RecordingIpAddressAccessControl;
}(utils_1.SpeakeasyBase));
exports.GetGroupSettings200ApplicationJson1RecordingIpAddressAccessControl = GetGroupSettings200ApplicationJson1RecordingIpAddressAccessControl;
var GetGroupSettings200ApplicationJson1Recording = /** @class */ (function (_super) {
    __extends(GetGroupSettings200ApplicationJson1Recording, _super);
    function GetGroupSettings200ApplicationJson1Recording() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_user_access_recording" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1Recording.prototype, "accountUserAccessRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=archive" }),
        __metadata("design:type", GetGroupSettings200ApplicationJson1RecordingArchive)
    ], GetGroupSettings200ApplicationJson1Recording.prototype, "archive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_recording" }),
        __metadata("design:type", String)
    ], GetGroupSettings200ApplicationJson1Recording.prototype, "autoRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1Recording.prototype, "cloudRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording_download" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1Recording.prototype, "cloudRecordingDownload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording_download_host" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1Recording.prototype, "cloudRecordingDownloadHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_delete_cloud_recording" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1Recording.prototype, "hostDeleteCloudRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_address_access_control" }),
        __metadata("design:type", GetGroupSettings200ApplicationJson1RecordingIpAddressAccessControl)
    ], GetGroupSettings200ApplicationJson1Recording.prototype, "ipAddressAccessControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=local_recording" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1Recording.prototype, "localRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prevent_host_access_recording" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1Recording.prototype, "preventHostAccessRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_audio_file" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1Recording.prototype, "recordAudioFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_gallery_view" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1Recording.prototype, "recordGalleryView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_speaker_view" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1Recording.prototype, "recordSpeakerView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_audio_transcript" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1Recording.prototype, "recordingAudioTranscript", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=save_chat_text" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1Recording.prototype, "saveChatText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_timestamp" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1Recording.prototype, "showTimestamp", void 0);
    return GetGroupSettings200ApplicationJson1Recording;
}(utils_1.SpeakeasyBase));
exports.GetGroupSettings200ApplicationJson1Recording = GetGroupSettings200ApplicationJson1Recording;
var GetGroupSettings200ApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum;
(function (GetGroupSettings200ApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum) {
    GetGroupSettings200ApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum["All"] = "all";
    GetGroupSettings200ApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum["JbhOnly"] = "jbh_only";
    GetGroupSettings200ApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum["None"] = "none";
})(GetGroupSettings200ApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum = exports.GetGroupSettings200ApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum || (exports.GetGroupSettings200ApplicationJson1ScheduleMeetingRequirePasswordForPmiMeetingsEnum = {}));
var GetGroupSettings200ApplicationJson1ScheduleMeeting = /** @class */ (function (_super) {
    __extends(GetGroupSettings200ApplicationJson1ScheduleMeeting, _super);
    function GetGroupSettings200ApplicationJson1ScheduleMeeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_type" }),
        __metadata("design:type", String)
    ], GetGroupSettings200ApplicationJson1ScheduleMeeting.prototype, "audioType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed_password_in_join_link" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1ScheduleMeeting.prototype, "embedPasswordInJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=force_pmi_jbh_password" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1ScheduleMeeting.prototype, "forcePmiJbhPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_video" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1ScheduleMeeting.prototype, "hostVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_before_host" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1ScheduleMeeting.prototype, "joinBeforeHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mute_upon_entry" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1ScheduleMeeting.prototype, "muteUponEntry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participant_video" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1ScheduleMeeting.prototype, "participantVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=personal_meeting" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1ScheduleMeeting.prototype, "personalMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pstn_password_protected" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1ScheduleMeeting.prototype, "pstnPasswordProtected", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_instant_meetings" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1ScheduleMeeting.prototype, "requirePasswordForInstantMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_pmi_meetings" }),
        __metadata("design:type", String)
    ], GetGroupSettings200ApplicationJson1ScheduleMeeting.prototype, "requirePasswordForPmiMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_meetings" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1ScheduleMeeting.prototype, "requirePasswordForScheduledMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduling_new_meetings" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1ScheduleMeeting.prototype, "requirePasswordForSchedulingNewMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upcoming_meeting_reminder" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1ScheduleMeeting.prototype, "upcomingMeetingReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_pmi_for_instant_meetings" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1ScheduleMeeting.prototype, "usePmiForInstantMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_pmi_for_schedule_meetings" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1ScheduleMeeting.prototype, "usePmiForScheduleMeetings", void 0);
    return GetGroupSettings200ApplicationJson1ScheduleMeeting;
}(utils_1.SpeakeasyBase));
exports.GetGroupSettings200ApplicationJson1ScheduleMeeting = GetGroupSettings200ApplicationJson1ScheduleMeeting;
// GetGroupSettings200ApplicationJson1TelephonyTelephonyRegions
/**
 * Indicates where most of the participants call into or call from duriing a meeting.
**/
var GetGroupSettings200ApplicationJson1TelephonyTelephonyRegions = /** @class */ (function (_super) {
    __extends(GetGroupSettings200ApplicationJson1TelephonyTelephonyRegions, _super);
    function GetGroupSettings200ApplicationJson1TelephonyTelephonyRegions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=selection_values" }),
        __metadata("design:type", Array)
    ], GetGroupSettings200ApplicationJson1TelephonyTelephonyRegions.prototype, "selectionValues", void 0);
    return GetGroupSettings200ApplicationJson1TelephonyTelephonyRegions;
}(utils_1.SpeakeasyBase));
exports.GetGroupSettings200ApplicationJson1TelephonyTelephonyRegions = GetGroupSettings200ApplicationJson1TelephonyTelephonyRegions;
var GetGroupSettings200ApplicationJson1Telephony = /** @class */ (function (_super) {
    __extends(GetGroupSettings200ApplicationJson1Telephony, _super);
    function GetGroupSettings200ApplicationJson1Telephony() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_conference_info" }),
        __metadata("design:type", String)
    ], GetGroupSettings200ApplicationJson1Telephony.prototype, "audioConferenceInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=telephony_regions" }),
        __metadata("design:type", GetGroupSettings200ApplicationJson1TelephonyTelephonyRegions)
    ], GetGroupSettings200ApplicationJson1Telephony.prototype, "telephonyRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=third_party_audio" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJson1Telephony.prototype, "thirdPartyAudio", void 0);
    return GetGroupSettings200ApplicationJson1Telephony;
}(utils_1.SpeakeasyBase));
exports.GetGroupSettings200ApplicationJson1Telephony = GetGroupSettings200ApplicationJson1Telephony;
var GetGroupSettings200ApplicationJson1 = /** @class */ (function (_super) {
    __extends(GetGroupSettings200ApplicationJson1, _super);
    function GetGroupSettings200ApplicationJson1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email_notification" }),
        __metadata("design:type", GetGroupSettings200ApplicationJson1EmailNotification)
    ], GetGroupSettings200ApplicationJson1.prototype, "emailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=in_meeting" }),
        __metadata("design:type", GetGroupSettings200ApplicationJson1InMeeting)
    ], GetGroupSettings200ApplicationJson1.prototype, "inMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=profile" }),
        __metadata("design:type", GetGroupSettings200ApplicationJson1Profile)
    ], GetGroupSettings200ApplicationJson1.prototype, "profile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording" }),
        __metadata("design:type", GetGroupSettings200ApplicationJson1Recording)
    ], GetGroupSettings200ApplicationJson1.prototype, "recording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule_meeting" }),
        __metadata("design:type", GetGroupSettings200ApplicationJson1ScheduleMeeting)
    ], GetGroupSettings200ApplicationJson1.prototype, "scheduleMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=telephony" }),
        __metadata("design:type", GetGroupSettings200ApplicationJson1Telephony)
    ], GetGroupSettings200ApplicationJson1.prototype, "telephony", void 0);
    return GetGroupSettings200ApplicationJson1;
}(utils_1.SpeakeasyBase));
exports.GetGroupSettings200ApplicationJson1 = GetGroupSettings200ApplicationJson1;
var GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
(function (GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum) {
    GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum["EnhancedEncryption"] = "enhanced_encryption";
    GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum["E2ee"] = "e2ee";
})(GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = exports.GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum || (exports.GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = {}));
// GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
/**
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
var GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = /** @class */ (function (_super) {
    __extends(GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement, _super);
    function GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consecutive_characters_length" }),
        __metadata("design:type", Number)
    ], GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "consecutiveCharactersLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_letter" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveLetter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_number" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_upper_and_lower_characters" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveUpperAndLowerCharacters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_allow_numeric" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "onlyAllowNumeric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weak_enhance_detection" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "weakEnhanceDetection", void 0);
    return GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
// GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
/**
 * Specify the settings to be applied if waiting room is enabled.
**/
var GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = /** @class */ (function (_super) {
    __extends(GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings, _super);
    function GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants_to_place_in_waiting_room" }),
        __metadata("design:type", Number)
    ], GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "participantsToPlaceInWaitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users_who_can_admit_participants_from_waiting_room" }),
        __metadata("design:type", Number)
    ], GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "usersWhoCanAdmitParticipantsFromWaitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=whitelisted_domains_for_waiting_room" }),
        __metadata("design:type", String)
    ], GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "whitelistedDomainsForWaitingRoom", void 0);
    return GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
}(utils_1.SpeakeasyBase));
exports.GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
var GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity = /** @class */ (function (_super) {
    __extends(GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity, _super);
    function GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_security" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "autoSecurity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed_password_in_join_link" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "embedPasswordInJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryption_type" }),
        __metadata("design:type", String)
    ], GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "encryptionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_to_end_encrypted_meetings" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "endToEndEncryptedMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "meetingPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password_requirement" }),
        __metadata("design:type", GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement)
    ], GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "meetingPasswordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_password" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "phonePassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pmi_password" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "pmiPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_meeting" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "requirePasswordForScheduledMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_webinar" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "requirePasswordForScheduledWebinar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room_settings" }),
        __metadata("design:type", GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings)
    ], GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "waitingRoomSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webinar_password" }),
        __metadata("design:type", Boolean)
    ], GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "webinarPassword", void 0);
    return GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
}(utils_1.SpeakeasyBase));
exports.GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity = GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
var GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettings = /** @class */ (function (_super) {
    __extends(GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettings, _super);
    function GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_security" }),
        __metadata("design:type", GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity)
    ], GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettings.prototype, "meetingSecurity", void 0);
    return GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettings;
}(utils_1.SpeakeasyBase));
exports.GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettings = GetGroupSettings200ApplicationJsonMeetingWebinarSecuritySettings;
var GetGroupSettingsRequest = /** @class */ (function (_super) {
    __extends(GetGroupSettingsRequest, _super);
    function GetGroupSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGroupSettingsPathParams)
    ], GetGroupSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGroupSettingsQueryParams)
    ], GetGroupSettingsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGroupSettingsSecurity)
    ], GetGroupSettingsRequest.prototype, "security", void 0);
    return GetGroupSettingsRequest;
}(utils_1.SpeakeasyBase));
exports.GetGroupSettingsRequest = GetGroupSettingsRequest;
var GetGroupSettingsResponse = /** @class */ (function (_super) {
    __extends(GetGroupSettingsResponse, _super);
    function GetGroupSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetGroupSettingsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetGroupSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetGroupSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetGroupSettingsResponse.prototype, "getGroupSettings200ApplicationJSONOneOf", void 0);
    return GetGroupSettingsResponse;
}(utils_1.SpeakeasyBase));
exports.GetGroupSettingsResponse = GetGroupSettingsResponse;
