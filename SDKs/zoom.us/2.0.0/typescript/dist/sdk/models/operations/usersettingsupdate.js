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
exports.UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettings = exports.UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions = exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1 = exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum = exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement = exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsAudioTypeEnum = exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings = exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement = exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl = exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum = exports.UserSettingsUpdateMultipartFormDataUserSettingsProfile = exports.UserSettingsUpdateMultipartFormDataUserSettingsProfileRecordingStorageLocation = exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings = exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum = exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum = exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings = exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles = exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum = exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsFeatureSettings = exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsNotificationSettings = exports.UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettings = exports.UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity = exports.UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = exports.UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = exports.UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = exports.UserSettingsUpdateApplicationJsonUserSettings = exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsTspSettings = exports.UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettings = exports.UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions = exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1 = exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum = exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement = exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum = exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings = exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement = exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl = exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum = exports.UserSettingsUpdateApplicationJsonUserSettingsProfile = exports.UserSettingsUpdateApplicationJsonUserSettingsProfileRecordingStorageLocation = exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings = exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum = exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum = exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings = exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles = exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum = exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings = exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsNotificationSettings = exports.UserSettingsUpdateQueryParams = exports.UserSettingsUpdateOptionEnum = exports.UserSettingsUpdatePathParams = void 0;
exports.UserSettingsUpdateResponse = exports.UserSettingsUpdateRequest = exports.UserSettingsUpdateSecurity = exports.UserSettingsUpdateRequests = exports.UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings = exports.UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity = exports.UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = exports.UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = exports.UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = exports.UserSettingsUpdateMultipartFormDataUserSettings = exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsTspSettings = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UserSettingsUpdatePathParams = /** @class */ (function (_super) {
    __extends(UserSettingsUpdatePathParams, _super);
    function UserSettingsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UserSettingsUpdatePathParams.prototype, "userId", void 0);
    return UserSettingsUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdatePathParams = UserSettingsUpdatePathParams;
var UserSettingsUpdateOptionEnum;
(function (UserSettingsUpdateOptionEnum) {
    UserSettingsUpdateOptionEnum["MeetingAuthentication"] = "meeting_authentication";
    UserSettingsUpdateOptionEnum["RecordingAuthentication"] = "recording_authentication";
    UserSettingsUpdateOptionEnum["MeetingSecuirty"] = "meeting_secuirty";
})(UserSettingsUpdateOptionEnum = exports.UserSettingsUpdateOptionEnum || (exports.UserSettingsUpdateOptionEnum = {}));
var UserSettingsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateQueryParams, _super);
    function UserSettingsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=option" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateQueryParams.prototype, "option", void 0);
    return UserSettingsUpdateQueryParams;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateQueryParams = UserSettingsUpdateQueryParams;
var UserSettingsUpdateApplicationJsonUserSettingsUserSettingsNotificationSettings = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsNotificationSettings, _super);
    function UserSettingsUpdateApplicationJsonUserSettingsUserSettingsNotificationSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_host_reminder" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsNotificationSettings.prototype, "alternativeHostReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancel_meeting_reminder" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsNotificationSettings.prototype, "cancelMeetingReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jbh_reminder" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsNotificationSettings.prototype, "jbhReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule_for_reminder" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsNotificationSettings.prototype, "scheduleForReminder", void 0);
    return UserSettingsUpdateApplicationJsonUserSettingsUserSettingsNotificationSettings;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsNotificationSettings = UserSettingsUpdateApplicationJsonUserSettingsUserSettingsNotificationSettings;
var UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings, _super);
    function UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=large_meeting" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings.prototype, "largeMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=large_meeting_capacity" }),
        __metadata("design:type", Number)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings.prototype, "largeMeetingCapacity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_capacity" }),
        __metadata("design:type", Number)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings.prototype, "meetingCapacity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webinar" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings.prototype, "webinar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webinar_capacity" }),
        __metadata("design:type", Number)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings.prototype, "webinarCapacity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zoom_phone" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings.prototype, "zoomPhone", void 0);
    return UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings = UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings;
var UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum;
(function (UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum) {
    UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum["Host"] = "host";
    UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum["All"] = "all";
    UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum["None"] = "none";
})(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum = exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum || (exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum = {}));
var UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles, _super);
    function UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_default" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles.prototype, "isDefault", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles.prototype, "type", void 0);
    return UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles = UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles;
// UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings
/**
 * Settings to manage virtual background.
**/
var UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings, _super);
    function UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_upload_custom" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings.prototype, "allowUploadCustom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_videos" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings.prototype, "allowVideos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=files", elemType: UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles }),
        __metadata("design:type", Array)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings.prototype, "files", void 0);
    return UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings = UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings;
var UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum;
(function (UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum) {
    UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum["Host"] = "host";
    UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum["All"] = "all";
})(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum = exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum || (exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum = {}));
var UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum;
(function (UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum) {
    UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum["Host"] = "host";
    UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum["All"] = "all";
})(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum = exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum || (exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum = {}));
var UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings, _super);
    function UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_live_streaming" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "allowLiveStreaming", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annotation" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "annotation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendee_on_hold" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "attendeeOnHold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_saving_chat" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "autoSavingChat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=breakout_room" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "breakoutRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chat" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "chat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=closed_caption" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "closedCaption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=co_host" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "coHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_data_center_regions" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "customDataCenterRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_live_streaming_service" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "customLiveStreamingService", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_service_instructions" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "customServiceInstructions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_center_regions" }),
        __metadata("design:type", Array)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "dataCenterRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=e2e_encryption" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "e2eEncryption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entry_exit_chime" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "entryExitChime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=far_end_camera_control" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "farEndCameraControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=feedback" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "feedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_transfer" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "fileTransfer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_hd" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "groupHd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_verbal_feedback" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "nonVerbalFeedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=polling" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "polling", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=private_chat" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "privateChat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_play_voice" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "recordPlayVoice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remote_control" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "remoteControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remote_support" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "remoteSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_permission_to_unmute" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "requestPermissionToUnmute", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=screen_sharing" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "screenSharing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=share_dual_camera" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "shareDualCamera", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_meeting_control_toolbar" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "showMeetingControlToolbar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtual_background" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "virtualBackground", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtual_background_settings" }),
        __metadata("design:type", UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "virtualBackgroundSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=who_can_share_screen" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "whoCanShareScreen", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=who_can_share_screen_when_someone_is_sharing" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "whoCanShareScreenWhenSomeoneIsSharing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workplace_by_facebook" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "workplaceByFacebook", void 0);
    return UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings = UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings;
var UserSettingsUpdateApplicationJsonUserSettingsProfileRecordingStorageLocation = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateApplicationJsonUserSettingsProfileRecordingStorageLocation, _super);
    function UserSettingsUpdateApplicationJsonUserSettingsProfileRecordingStorageLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowed_values" }),
        __metadata("design:type", Array)
    ], UserSettingsUpdateApplicationJsonUserSettingsProfileRecordingStorageLocation.prototype, "allowedValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateApplicationJsonUserSettingsProfileRecordingStorageLocation.prototype, "value", void 0);
    return UserSettingsUpdateApplicationJsonUserSettingsProfileRecordingStorageLocation;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateApplicationJsonUserSettingsProfileRecordingStorageLocation = UserSettingsUpdateApplicationJsonUserSettingsProfileRecordingStorageLocation;
var UserSettingsUpdateApplicationJsonUserSettingsProfile = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateApplicationJsonUserSettingsProfile, _super);
    function UserSettingsUpdateApplicationJsonUserSettingsProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_storage_location" }),
        __metadata("design:type", UserSettingsUpdateApplicationJsonUserSettingsProfileRecordingStorageLocation)
    ], UserSettingsUpdateApplicationJsonUserSettingsProfile.prototype, "recordingStorageLocation", void 0);
    return UserSettingsUpdateApplicationJsonUserSettingsProfile;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateApplicationJsonUserSettingsProfile = UserSettingsUpdateApplicationJsonUserSettingsProfile;
var UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum;
(function (UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum) {
    UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum["Local"] = "local";
    UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum["Cloud"] = "cloud";
    UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum["None"] = "none";
})(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum = exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum || (exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum = {}));
// UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
**/
var UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl, _super);
    function UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_addresses_or_ranges" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl.prototype, "ipAddressesOrRanges", void 0);
    return UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl = UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl;
// UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement
/**
 * This object represents the minimum passcode requirements set for recordings via Account Recording Settings.
**/
var UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement, _super);
    function UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_letter" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement.prototype, "haveLetter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_number" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement.prototype, "haveNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_allow_numeric" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement.prototype, "onlyAllowNumeric", void 0);
    return UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement = UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement;
var UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings, _super);
    function UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ask_host_to_confirm_disclaimer" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "askHostToConfirmDisclaimer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ask_participants_to_consent_disclaimer" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "askParticipantsToConsentDisclaimer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_delete_cmr" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "autoDeleteCmr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_delete_cmr_days" }),
        __metadata("design:type", Number)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "autoDeleteCmrDays", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_recording" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "autoRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "cloudRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_pause_stop_recording" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "hostPauseStopRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_address_access_control" }),
        __metadata("design:type", UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "ipAddressAccessControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=local_recording" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "localRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_audio_file" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "recordAudioFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_gallery_view" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "recordGalleryView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_speaker_view" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "recordSpeakerView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_audio_transcript" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "recordingAudioTranscript", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_disclaimer" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "recordingDisclaimer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_password_requirement" }),
        __metadata("design:type", UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "recordingPasswordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=save_chat_text" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "saveChatText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_timestamp" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "showTimestamp", void 0);
    return UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings = UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings;
var UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum;
(function (UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum) {
    UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum["Both"] = "both";
    UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum["Telephony"] = "telephony";
    UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum["Voip"] = "voip";
    UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum["ThirdParty"] = "thirdParty";
})(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum = exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum || (exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum = {}));
// UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement
/**
 * Account wide meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
var UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement, _super);
    function UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consecutive_characters_length" }),
        __metadata("design:type", Number)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement.prototype, "consecutiveCharactersLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_letter" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement.prototype, "haveLetter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_number" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement.prototype, "haveNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_upper_and_lower_characters" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement.prototype, "haveUpperAndLowerCharacters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_allow_numeric" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement.prototype, "onlyAllowNumeric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weak_enhance_detection" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement.prototype, "weakEnhanceDetection", void 0);
    return UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement = UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement;
var UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum;
(function (UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum) {
    UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum["JbhOnly"] = "jbh_only";
    UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum["All"] = "all";
    UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum["None"] = "none";
})(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum = exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum || (exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum = {}));
var UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1 = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1, _super);
    function UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_type" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "audioType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=default_password_for_scheduled_meetings" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "defaultPasswordForScheduledMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed_password_in_join_link" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "embedPasswordInJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=force_pmi_jbh_password" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "forcePmiJbhPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_video" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "hostVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_before_host" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "joinBeforeHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password_requirement" }),
        __metadata("design:type", UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "meetingPasswordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants_video" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "participantsVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=personal_meeting" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "personalMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pmi_password" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "pmiPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pstn_password_protected" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "pstnPasswordProtected", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_instant_meetings" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "requirePasswordForInstantMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_pmi_meetings" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "requirePasswordForPmiMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_meetings" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "requirePasswordForScheduledMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduling_new_meetings" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "requirePasswordForSchedulingNewMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_pmi_for_instant_meetings" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "usePmiForInstantMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_pmi_for_scheduled_meetings" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "usePmiForScheduledMeetings", void 0);
    return UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1 = UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1;
// UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions
/**
 * Indicates where most of the participants call into or call from duriing a meeting.
**/
var UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions, _super);
    function UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=selection_values" }),
        __metadata("design:type", Array)
    ], UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions.prototype, "selectionValues", void 0);
    return UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions = UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions;
var UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettings = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettings, _super);
    function UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_conference_info" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettings.prototype, "audioConferenceInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_international_numbers_link" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettings.prototype, "showInternationalNumbersLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=telephony_regions" }),
        __metadata("design:type", UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions)
    ], UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettings.prototype, "telephonyRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=third_party_audio" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettings.prototype, "thirdPartyAudio", void 0);
    return UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettings;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettings = UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettings;
// UserSettingsUpdateApplicationJsonUserSettingsUserSettingsTspSettings
/**
 * Account Settings: TSP.
**/
var UserSettingsUpdateApplicationJsonUserSettingsUserSettingsTspSettings = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsTspSettings, _super);
    function UserSettingsUpdateApplicationJsonUserSettingsUserSettingsTspSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_out" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsTspSettings.prototype, "callOut", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_out_countries" }),
        __metadata("design:type", Array)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsTspSettings.prototype, "callOutCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_international_numbers_link" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonUserSettingsUserSettingsTspSettings.prototype, "showInternationalNumbersLink", void 0);
    return UserSettingsUpdateApplicationJsonUserSettingsUserSettingsTspSettings;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateApplicationJsonUserSettingsUserSettingsTspSettings = UserSettingsUpdateApplicationJsonUserSettingsUserSettingsTspSettings;
var UserSettingsUpdateApplicationJsonUserSettings = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateApplicationJsonUserSettings, _super);
    function UserSettingsUpdateApplicationJsonUserSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email_notification" }),
        __metadata("design:type", UserSettingsUpdateApplicationJsonUserSettingsUserSettingsNotificationSettings)
    ], UserSettingsUpdateApplicationJsonUserSettings.prototype, "emailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=feature" }),
        __metadata("design:type", UserSettingsUpdateApplicationJsonUserSettingsUserSettingsFeatureSettings)
    ], UserSettingsUpdateApplicationJsonUserSettings.prototype, "feature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=in_meeting" }),
        __metadata("design:type", UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings)
    ], UserSettingsUpdateApplicationJsonUserSettings.prototype, "inMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=profile" }),
        __metadata("design:type", UserSettingsUpdateApplicationJsonUserSettingsProfile)
    ], UserSettingsUpdateApplicationJsonUserSettings.prototype, "profile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording" }),
        __metadata("design:type", UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettings)
    ], UserSettingsUpdateApplicationJsonUserSettings.prototype, "recording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule_meeting" }),
        __metadata("design:type", UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings1)
    ], UserSettingsUpdateApplicationJsonUserSettings.prototype, "scheduleMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=telephony" }),
        __metadata("design:type", UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettings)
    ], UserSettingsUpdateApplicationJsonUserSettings.prototype, "telephony", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tsp" }),
        __metadata("design:type", UserSettingsUpdateApplicationJsonUserSettingsUserSettingsTspSettings)
    ], UserSettingsUpdateApplicationJsonUserSettings.prototype, "tsp", void 0);
    return UserSettingsUpdateApplicationJsonUserSettings;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateApplicationJsonUserSettings = UserSettingsUpdateApplicationJsonUserSettings;
var UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
(function (UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum) {
    UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum["EnhancedEncryption"] = "enhanced_encryption";
    UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum["E2ee"] = "e2ee";
})(UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = exports.UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum || (exports.UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = {}));
// UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
/**
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
var UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement, _super);
    function UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consecutive_characters_length" }),
        __metadata("design:type", Number)
    ], UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "consecutiveCharactersLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_letter" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveLetter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_number" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_upper_and_lower_characters" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveUpperAndLowerCharacters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_allow_numeric" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "onlyAllowNumeric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weak_enhance_detection" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "weakEnhanceDetection", void 0);
    return UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
// UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
/**
 * Specify the settings to be applied if waiting room is enabled.
**/
var UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings, _super);
    function UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants_to_place_in_waiting_room" }),
        __metadata("design:type", Number)
    ], UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "participantsToPlaceInWaitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users_who_can_admit_participants_from_waiting_room" }),
        __metadata("design:type", Number)
    ], UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "usersWhoCanAdmitParticipantsFromWaitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=whitelisted_domains_for_waiting_room" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "whitelistedDomainsForWaitingRoom", void 0);
    return UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
var UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity, _super);
    function UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_security" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "autoSecurity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed_password_in_join_link" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "embedPasswordInJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryption_type" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "encryptionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_to_end_encrypted_meetings" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "endToEndEncryptedMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "meetingPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password_requirement" }),
        __metadata("design:type", UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement)
    ], UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "meetingPasswordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_password" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "phonePassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pmi_password" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "pmiPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_meeting" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "requirePasswordForScheduledMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_webinar" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "requirePasswordForScheduledWebinar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room_settings" }),
        __metadata("design:type", UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings)
    ], UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "waitingRoomSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webinar_password" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "webinarPassword", void 0);
    return UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity = UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
var UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettings = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettings, _super);
    function UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_security" }),
        __metadata("design:type", UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity)
    ], UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettings.prototype, "meetingSecurity", void 0);
    return UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettings;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettings = UserSettingsUpdateApplicationJsonMeetingWebinarSecuritySettings;
var UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsNotificationSettings = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsNotificationSettings, _super);
    function UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsNotificationSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_host_reminder" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsNotificationSettings.prototype, "alternativeHostReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancel_meeting_reminder" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsNotificationSettings.prototype, "cancelMeetingReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jbh_reminder" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsNotificationSettings.prototype, "jbhReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule_for_reminder" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsNotificationSettings.prototype, "scheduleForReminder", void 0);
    return UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsNotificationSettings;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsNotificationSettings = UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsNotificationSettings;
var UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsFeatureSettings = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsFeatureSettings, _super);
    function UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsFeatureSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=large_meeting" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsFeatureSettings.prototype, "largeMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=large_meeting_capacity" }),
        __metadata("design:type", Number)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsFeatureSettings.prototype, "largeMeetingCapacity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_capacity" }),
        __metadata("design:type", Number)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsFeatureSettings.prototype, "meetingCapacity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webinar" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsFeatureSettings.prototype, "webinar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webinar_capacity" }),
        __metadata("design:type", Number)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsFeatureSettings.prototype, "webinarCapacity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zoom_phone" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsFeatureSettings.prototype, "zoomPhone", void 0);
    return UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsFeatureSettings;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsFeatureSettings = UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsFeatureSettings;
var UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum;
(function (UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum) {
    UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum["Host"] = "host";
    UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum["All"] = "all";
    UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum["None"] = "none";
})(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum = exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum || (exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum = {}));
var UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles, _super);
    function UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_default" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles.prototype, "isDefault", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles.prototype, "type", void 0);
    return UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles = UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles;
// UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings
/**
 * Settings to manage virtual background.
**/
var UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings, _super);
    function UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_upload_custom" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings.prototype, "allowUploadCustom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_videos" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings.prototype, "allowVideos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=files", elemType: UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles }),
        __metadata("design:type", Array)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings.prototype, "files", void 0);
    return UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings = UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings;
var UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum;
(function (UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum) {
    UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum["Host"] = "host";
    UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum["All"] = "all";
})(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum = exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum || (exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum = {}));
var UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum;
(function (UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum) {
    UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum["Host"] = "host";
    UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum["All"] = "all";
})(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum = exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum || (exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum = {}));
var UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings, _super);
    function UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_live_streaming" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "allowLiveStreaming", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annotation" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "annotation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendee_on_hold" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "attendeeOnHold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_saving_chat" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "autoSavingChat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=breakout_room" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "breakoutRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chat" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "chat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=closed_caption" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "closedCaption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=co_host" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "coHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_data_center_regions" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "customDataCenterRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_live_streaming_service" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "customLiveStreamingService", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_service_instructions" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "customServiceInstructions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_center_regions" }),
        __metadata("design:type", Array)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "dataCenterRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=e2e_encryption" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "e2eEncryption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entry_exit_chime" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "entryExitChime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=far_end_camera_control" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "farEndCameraControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=feedback" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "feedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_transfer" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "fileTransfer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_hd" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "groupHd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_verbal_feedback" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "nonVerbalFeedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=polling" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "polling", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=private_chat" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "privateChat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_play_voice" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "recordPlayVoice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remote_control" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "remoteControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remote_support" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "remoteSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_permission_to_unmute" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "requestPermissionToUnmute", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=screen_sharing" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "screenSharing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=share_dual_camera" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "shareDualCamera", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_meeting_control_toolbar" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "showMeetingControlToolbar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtual_background" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "virtualBackground", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtual_background_settings" }),
        __metadata("design:type", UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "virtualBackgroundSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=who_can_share_screen" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "whoCanShareScreen", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=who_can_share_screen_when_someone_is_sharing" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "whoCanShareScreenWhenSomeoneIsSharing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workplace_by_facebook" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings.prototype, "workplaceByFacebook", void 0);
    return UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings = UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings;
var UserSettingsUpdateMultipartFormDataUserSettingsProfileRecordingStorageLocation = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateMultipartFormDataUserSettingsProfileRecordingStorageLocation, _super);
    function UserSettingsUpdateMultipartFormDataUserSettingsProfileRecordingStorageLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowed_values" }),
        __metadata("design:type", Array)
    ], UserSettingsUpdateMultipartFormDataUserSettingsProfileRecordingStorageLocation.prototype, "allowedValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateMultipartFormDataUserSettingsProfileRecordingStorageLocation.prototype, "value", void 0);
    return UserSettingsUpdateMultipartFormDataUserSettingsProfileRecordingStorageLocation;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateMultipartFormDataUserSettingsProfileRecordingStorageLocation = UserSettingsUpdateMultipartFormDataUserSettingsProfileRecordingStorageLocation;
var UserSettingsUpdateMultipartFormDataUserSettingsProfile = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateMultipartFormDataUserSettingsProfile, _super);
    function UserSettingsUpdateMultipartFormDataUserSettingsProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_storage_location" }),
        __metadata("design:type", UserSettingsUpdateMultipartFormDataUserSettingsProfileRecordingStorageLocation)
    ], UserSettingsUpdateMultipartFormDataUserSettingsProfile.prototype, "recordingStorageLocation", void 0);
    return UserSettingsUpdateMultipartFormDataUserSettingsProfile;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateMultipartFormDataUserSettingsProfile = UserSettingsUpdateMultipartFormDataUserSettingsProfile;
var UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum;
(function (UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum) {
    UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum["Local"] = "local";
    UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum["Cloud"] = "cloud";
    UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum["None"] = "none";
})(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum = exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum || (exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum = {}));
// UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
**/
var UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl, _super);
    function UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_addresses_or_ranges" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl.prototype, "ipAddressesOrRanges", void 0);
    return UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl = UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl;
// UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement
/**
 * This object represents the minimum passcode requirements set for recordings via Account Recording Settings.
**/
var UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement, _super);
    function UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_letter" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement.prototype, "haveLetter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_number" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement.prototype, "haveNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_allow_numeric" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement.prototype, "onlyAllowNumeric", void 0);
    return UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement = UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement;
var UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings, _super);
    function UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ask_host_to_confirm_disclaimer" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings.prototype, "askHostToConfirmDisclaimer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ask_participants_to_consent_disclaimer" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings.prototype, "askParticipantsToConsentDisclaimer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_delete_cmr" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings.prototype, "autoDeleteCmr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_delete_cmr_days" }),
        __metadata("design:type", Number)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings.prototype, "autoDeleteCmrDays", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_recording" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings.prototype, "autoRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings.prototype, "cloudRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_pause_stop_recording" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings.prototype, "hostPauseStopRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_address_access_control" }),
        __metadata("design:type", UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings.prototype, "ipAddressAccessControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=local_recording" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings.prototype, "localRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_audio_file" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings.prototype, "recordAudioFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_gallery_view" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings.prototype, "recordGalleryView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_speaker_view" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings.prototype, "recordSpeakerView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_audio_transcript" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings.prototype, "recordingAudioTranscript", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_disclaimer" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings.prototype, "recordingDisclaimer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_password_requirement" }),
        __metadata("design:type", UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings.prototype, "recordingPasswordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=save_chat_text" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings.prototype, "saveChatText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_timestamp" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings.prototype, "showTimestamp", void 0);
    return UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings = UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings;
var UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsAudioTypeEnum;
(function (UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsAudioTypeEnum) {
    UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsAudioTypeEnum["Both"] = "both";
    UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsAudioTypeEnum["Telephony"] = "telephony";
    UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsAudioTypeEnum["Voip"] = "voip";
    UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsAudioTypeEnum["ThirdParty"] = "thirdParty";
})(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsAudioTypeEnum = exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsAudioTypeEnum || (exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsAudioTypeEnum = {}));
// UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement
/**
 * Account wide meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
var UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement, _super);
    function UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consecutive_characters_length" }),
        __metadata("design:type", Number)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement.prototype, "consecutiveCharactersLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_letter" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement.prototype, "haveLetter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_number" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement.prototype, "haveNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_upper_and_lower_characters" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement.prototype, "haveUpperAndLowerCharacters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_allow_numeric" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement.prototype, "onlyAllowNumeric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weak_enhance_detection" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement.prototype, "weakEnhanceDetection", void 0);
    return UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement = UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement;
var UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum;
(function (UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum) {
    UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum["JbhOnly"] = "jbh_only";
    UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum["All"] = "all";
    UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum["None"] = "none";
})(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum = exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum || (exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum = {}));
var UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1 = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1, _super);
    function UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_type" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1.prototype, "audioType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=default_password_for_scheduled_meetings" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1.prototype, "defaultPasswordForScheduledMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed_password_in_join_link" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1.prototype, "embedPasswordInJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=force_pmi_jbh_password" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1.prototype, "forcePmiJbhPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_video" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1.prototype, "hostVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_before_host" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1.prototype, "joinBeforeHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password_requirement" }),
        __metadata("design:type", UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1.prototype, "meetingPasswordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants_video" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1.prototype, "participantsVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=personal_meeting" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1.prototype, "personalMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pmi_password" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1.prototype, "pmiPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pstn_password_protected" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1.prototype, "pstnPasswordProtected", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_instant_meetings" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1.prototype, "requirePasswordForInstantMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_pmi_meetings" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1.prototype, "requirePasswordForPmiMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_meetings" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1.prototype, "requirePasswordForScheduledMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduling_new_meetings" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1.prototype, "requirePasswordForSchedulingNewMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_pmi_for_instant_meetings" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1.prototype, "usePmiForInstantMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_pmi_for_scheduled_meetings" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1.prototype, "usePmiForScheduledMeetings", void 0);
    return UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1 = UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1;
// UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions
/**
 * Indicates where most of the participants call into or call from duriing a meeting.
**/
var UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions, _super);
    function UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=selection_values" }),
        __metadata("design:type", Array)
    ], UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions.prototype, "selectionValues", void 0);
    return UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions = UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions;
var UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettings = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettings, _super);
    function UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_conference_info" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettings.prototype, "audioConferenceInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_international_numbers_link" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettings.prototype, "showInternationalNumbersLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=telephony_regions" }),
        __metadata("design:type", UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions)
    ], UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettings.prototype, "telephonyRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=third_party_audio" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettings.prototype, "thirdPartyAudio", void 0);
    return UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettings;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettings = UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettings;
// UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsTspSettings
/**
 * Account Settings: TSP.
**/
var UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsTspSettings = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsTspSettings, _super);
    function UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsTspSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_out" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsTspSettings.prototype, "callOut", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_out_countries" }),
        __metadata("design:type", Array)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsTspSettings.prototype, "callOutCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_international_numbers_link" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsTspSettings.prototype, "showInternationalNumbersLink", void 0);
    return UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsTspSettings;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsTspSettings = UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsTspSettings;
var UserSettingsUpdateMultipartFormDataUserSettings = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateMultipartFormDataUserSettings, _super);
    function UserSettingsUpdateMultipartFormDataUserSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=email_notification;json=true" }),
        __metadata("design:type", UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsNotificationSettings)
    ], UserSettingsUpdateMultipartFormDataUserSettings.prototype, "emailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=feature;json=true" }),
        __metadata("design:type", UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsFeatureSettings)
    ], UserSettingsUpdateMultipartFormDataUserSettings.prototype, "feature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=in_meeting;json=true" }),
        __metadata("design:type", UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings)
    ], UserSettingsUpdateMultipartFormDataUserSettings.prototype, "inMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=profile;json=true" }),
        __metadata("design:type", UserSettingsUpdateMultipartFormDataUserSettingsProfile)
    ], UserSettingsUpdateMultipartFormDataUserSettings.prototype, "profile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=recording;json=true" }),
        __metadata("design:type", UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings)
    ], UserSettingsUpdateMultipartFormDataUserSettings.prototype, "recording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=schedule_meeting;json=true" }),
        __metadata("design:type", UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings1)
    ], UserSettingsUpdateMultipartFormDataUserSettings.prototype, "scheduleMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=telephony;json=true" }),
        __metadata("design:type", UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettings)
    ], UserSettingsUpdateMultipartFormDataUserSettings.prototype, "telephony", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=tsp;json=true" }),
        __metadata("design:type", UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsTspSettings)
    ], UserSettingsUpdateMultipartFormDataUserSettings.prototype, "tsp", void 0);
    return UserSettingsUpdateMultipartFormDataUserSettings;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateMultipartFormDataUserSettings = UserSettingsUpdateMultipartFormDataUserSettings;
var UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
(function (UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum) {
    UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum["EnhancedEncryption"] = "enhanced_encryption";
    UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum["E2ee"] = "e2ee";
})(UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = exports.UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum || (exports.UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = {}));
// UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
/**
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
var UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement, _super);
    function UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consecutive_characters_length" }),
        __metadata("design:type", Number)
    ], UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "consecutiveCharactersLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_letter" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveLetter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_number" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_upper_and_lower_characters" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveUpperAndLowerCharacters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_allow_numeric" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "onlyAllowNumeric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weak_enhance_detection" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "weakEnhanceDetection", void 0);
    return UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
// UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
/**
 * Specify the settings to be applied if waiting room is enabled.
**/
var UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings, _super);
    function UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants_to_place_in_waiting_room" }),
        __metadata("design:type", Number)
    ], UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "participantsToPlaceInWaitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users_who_can_admit_participants_from_waiting_room" }),
        __metadata("design:type", Number)
    ], UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "usersWhoCanAdmitParticipantsFromWaitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=whitelisted_domains_for_waiting_room" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "whitelistedDomainsForWaitingRoom", void 0);
    return UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
var UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity, _super);
    function UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_security" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "autoSecurity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed_password_in_join_link" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "embedPasswordInJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryption_type" }),
        __metadata("design:type", String)
    ], UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "encryptionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_to_end_encrypted_meetings" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "endToEndEncryptedMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "meetingPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password_requirement" }),
        __metadata("design:type", UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement)
    ], UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "meetingPasswordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_password" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "phonePassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pmi_password" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "pmiPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_meeting" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "requirePasswordForScheduledMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_webinar" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "requirePasswordForScheduledWebinar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room_settings" }),
        __metadata("design:type", UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings)
    ], UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "waitingRoomSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webinar_password" }),
        __metadata("design:type", Boolean)
    ], UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "webinarPassword", void 0);
    return UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity = UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity;
var UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings, _super);
    function UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=meeting_security;json=true" }),
        __metadata("design:type", UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity)
    ], UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings.prototype, "meetingSecurity", void 0);
    return UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings = UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings;
var UserSettingsUpdateRequests = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateRequests, _super);
    function UserSettingsUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], UserSettingsUpdateRequests.prototype, "oneOf", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", Object)
    ], UserSettingsUpdateRequests.prototype, "oneOf1", void 0);
    return UserSettingsUpdateRequests;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateRequests = UserSettingsUpdateRequests;
var UserSettingsUpdateSecurity = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateSecurity, _super);
    function UserSettingsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], UserSettingsUpdateSecurity.prototype, "oAuth", void 0);
    return UserSettingsUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateSecurity = UserSettingsUpdateSecurity;
var UserSettingsUpdateRequest = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateRequest, _super);
    function UserSettingsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserSettingsUpdatePathParams)
    ], UserSettingsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserSettingsUpdateQueryParams)
    ], UserSettingsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserSettingsUpdateRequests)
    ], UserSettingsUpdateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserSettingsUpdateSecurity)
    ], UserSettingsUpdateRequest.prototype, "security", void 0);
    return UserSettingsUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateRequest = UserSettingsUpdateRequest;
var UserSettingsUpdateResponse = /** @class */ (function (_super) {
    __extends(UserSettingsUpdateResponse, _super);
    function UserSettingsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserSettingsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UserSettingsUpdateResponse.prototype, "statusCode", void 0);
    return UserSettingsUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.UserSettingsUpdateResponse = UserSettingsUpdateResponse;
