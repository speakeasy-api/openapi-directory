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
exports.UserSettingsResponse = exports.UserSettingsRequest = exports.UserSettings200ApplicationJsonMeetingWebinarSecuritySettings = exports.UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity = exports.UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = exports.UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = exports.UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = exports.UserSettings200ApplicationJsonUserSettings = exports.UserSettings200ApplicationJsonUserSettingsUserSettingsTspSettings = exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings2 = exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsTelephonyRegions = exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1 = exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum = exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement = exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum = exports.UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings = exports.UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement = exports.UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl = exports.UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum = exports.UserSettings200ApplicationJsonUserSettingsProfile = exports.UserSettings200ApplicationJsonUserSettingsProfileRecordingStorageLocation = exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings = exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum = exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum = exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings = exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles = exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum = exports.UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings = exports.UserSettings200ApplicationJsonUserSettingsUserSettingsNotificationSettings = exports.UserSettingsSecurity = exports.UserSettingsQueryParams = exports.UserSettingsOptionEnum = exports.UserSettingsLoginTypeEnum = exports.UserSettingsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UserSettingsPathParams = /** @class */ (function (_super) {
    __extends(UserSettingsPathParams, _super);
    function UserSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UserSettingsPathParams.prototype, "userId", void 0);
    return UserSettingsPathParams;
}(utils_1.SpeakeasyBase));
exports.UserSettingsPathParams = UserSettingsPathParams;
var UserSettingsLoginTypeEnum;
(function (UserSettingsLoginTypeEnum) {
    UserSettingsLoginTypeEnum["Zero"] = "0";
    UserSettingsLoginTypeEnum["One"] = "1";
    UserSettingsLoginTypeEnum["NinetyNine"] = "99";
    UserSettingsLoginTypeEnum["OneHundred"] = "100";
    UserSettingsLoginTypeEnum["OneHundredAndOne"] = "101";
})(UserSettingsLoginTypeEnum = exports.UserSettingsLoginTypeEnum || (exports.UserSettingsLoginTypeEnum = {}));
var UserSettingsOptionEnum;
(function (UserSettingsOptionEnum) {
    UserSettingsOptionEnum["MeetingAuthentication"] = "meeting_authentication";
    UserSettingsOptionEnum["RecordingAuthentication"] = "recording_authentication";
})(UserSettingsOptionEnum = exports.UserSettingsOptionEnum || (exports.UserSettingsOptionEnum = {}));
var UserSettingsQueryParams = /** @class */ (function (_super) {
    __extends(UserSettingsQueryParams, _super);
    function UserSettingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=custom_query_fields" }),
        __metadata("design:type", String)
    ], UserSettingsQueryParams.prototype, "customQueryFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=login_type" }),
        __metadata("design:type", String)
    ], UserSettingsQueryParams.prototype, "loginType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=option" }),
        __metadata("design:type", String)
    ], UserSettingsQueryParams.prototype, "option", void 0);
    return UserSettingsQueryParams;
}(utils_1.SpeakeasyBase));
exports.UserSettingsQueryParams = UserSettingsQueryParams;
var UserSettingsSecurity = /** @class */ (function (_super) {
    __extends(UserSettingsSecurity, _super);
    function UserSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], UserSettingsSecurity.prototype, "oAuth", void 0);
    return UserSettingsSecurity;
}(utils_1.SpeakeasyBase));
exports.UserSettingsSecurity = UserSettingsSecurity;
var UserSettings200ApplicationJsonUserSettingsUserSettingsNotificationSettings = /** @class */ (function (_super) {
    __extends(UserSettings200ApplicationJsonUserSettingsUserSettingsNotificationSettings, _super);
    function UserSettings200ApplicationJsonUserSettingsUserSettingsNotificationSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_host_reminder" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsNotificationSettings.prototype, "alternativeHostReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancel_meeting_reminder" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsNotificationSettings.prototype, "cancelMeetingReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jbh_reminder" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsNotificationSettings.prototype, "jbhReminder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule_for_reminder" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsNotificationSettings.prototype, "scheduleForReminder", void 0);
    return UserSettings200ApplicationJsonUserSettingsUserSettingsNotificationSettings;
}(utils_1.SpeakeasyBase));
exports.UserSettings200ApplicationJsonUserSettingsUserSettingsNotificationSettings = UserSettings200ApplicationJsonUserSettingsUserSettingsNotificationSettings;
var UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings = /** @class */ (function (_super) {
    __extends(UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings, _super);
    function UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cn_meeting" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings.prototype, "cnMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=in_meeting" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings.prototype, "inMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=large_meeting" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings.prototype, "largeMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=large_meeting_capacity" }),
        __metadata("design:type", Number)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings.prototype, "largeMeetingCapacity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_capacity" }),
        __metadata("design:type", Number)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings.prototype, "meetingCapacity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webinar" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings.prototype, "webinar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webinar_capacity" }),
        __metadata("design:type", Number)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings.prototype, "webinarCapacity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zoom_phone" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings.prototype, "zoomPhone", void 0);
    return UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings;
}(utils_1.SpeakeasyBase));
exports.UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings = UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings;
var UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum;
(function (UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum) {
    UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum["Host"] = "host";
    UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum["All"] = "all";
    UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum["None"] = "none";
})(UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum = exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum || (exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum = {}));
var UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles = /** @class */ (function (_super) {
    __extends(UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles, _super);
    function UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_default" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles.prototype, "isDefault", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles.prototype, "type", void 0);
    return UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles;
}(utils_1.SpeakeasyBase));
exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles = UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles;
// UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings
/**
 * Settings to manage virtual background.
**/
var UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings = /** @class */ (function (_super) {
    __extends(UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings, _super);
    function UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_upload_custom" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings.prototype, "allowUploadCustom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_videos" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings.prototype, "allowVideos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=files", elemType: UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles }),
        __metadata("design:type", Array)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings.prototype, "files", void 0);
    return UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings;
}(utils_1.SpeakeasyBase));
exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings = UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings;
var UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum;
(function (UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum) {
    UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum["Host"] = "host";
    UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum["All"] = "all";
})(UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum = exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum || (exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum = {}));
var UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum;
(function (UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum) {
    UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum["Host"] = "host";
    UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum["All"] = "all";
})(UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum = exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum || (exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum = {}));
var UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings = /** @class */ (function (_super) {
    __extends(UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings, _super);
    function UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_live_streaming" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "allowLiveStreaming", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annotation" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "annotation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendee_on_hold" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "attendeeOnHold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_saving_chat" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "autoSavingChat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=breakout_room" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "breakoutRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chat" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "chat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=closed_caption" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "closedCaption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=co_host" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "coHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_data_center_regions" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "customDataCenterRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_live_streaming_service" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "customLiveStreamingService", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_service_instructions" }),
        __metadata("design:type", String)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "customServiceInstructions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_center_regions" }),
        __metadata("design:type", Array)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "dataCenterRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=e2e_encryption" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "e2eEncryption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entry_exit_chime" }),
        __metadata("design:type", String)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "entryExitChime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=far_end_camera_control" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "farEndCameraControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=feedback" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "feedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_transfer" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "fileTransfer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_hd" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "groupHd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_verbal_feedback" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "nonVerbalFeedback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=polling" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "polling", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=private_chat" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "privateChat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_play_voice" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "recordPlayVoice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remote_control" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "remoteControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remote_support" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "remoteSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_permission_to_unmute" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "requestPermissionToUnmute", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=screen_sharing" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "screenSharing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=share_dual_camera" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "shareDualCamera", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_meeting_control_toolbar" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "showMeetingControlToolbar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtual_background" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "virtualBackground", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtual_background_settings" }),
        __metadata("design:type", UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "virtualBackgroundSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=who_can_share_screen" }),
        __metadata("design:type", String)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "whoCanShareScreen", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=who_can_share_screen_when_someone_is_sharing" }),
        __metadata("design:type", String)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "whoCanShareScreenWhenSomeoneIsSharing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workplace_by_facebook" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings.prototype, "workplaceByFacebook", void 0);
    return UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings;
}(utils_1.SpeakeasyBase));
exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings = UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings;
var UserSettings200ApplicationJsonUserSettingsProfileRecordingStorageLocation = /** @class */ (function (_super) {
    __extends(UserSettings200ApplicationJsonUserSettingsProfileRecordingStorageLocation, _super);
    function UserSettings200ApplicationJsonUserSettingsProfileRecordingStorageLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowed_values" }),
        __metadata("design:type", Array)
    ], UserSettings200ApplicationJsonUserSettingsProfileRecordingStorageLocation.prototype, "allowedValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], UserSettings200ApplicationJsonUserSettingsProfileRecordingStorageLocation.prototype, "value", void 0);
    return UserSettings200ApplicationJsonUserSettingsProfileRecordingStorageLocation;
}(utils_1.SpeakeasyBase));
exports.UserSettings200ApplicationJsonUserSettingsProfileRecordingStorageLocation = UserSettings200ApplicationJsonUserSettingsProfileRecordingStorageLocation;
var UserSettings200ApplicationJsonUserSettingsProfile = /** @class */ (function (_super) {
    __extends(UserSettings200ApplicationJsonUserSettingsProfile, _super);
    function UserSettings200ApplicationJsonUserSettingsProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_storage_location" }),
        __metadata("design:type", UserSettings200ApplicationJsonUserSettingsProfileRecordingStorageLocation)
    ], UserSettings200ApplicationJsonUserSettingsProfile.prototype, "recordingStorageLocation", void 0);
    return UserSettings200ApplicationJsonUserSettingsProfile;
}(utils_1.SpeakeasyBase));
exports.UserSettings200ApplicationJsonUserSettingsProfile = UserSettings200ApplicationJsonUserSettingsProfile;
var UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum;
(function (UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum) {
    UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum["Local"] = "local";
    UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum["Cloud"] = "cloud";
    UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum["None"] = "none";
})(UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum = exports.UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum || (exports.UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum = {}));
// UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl
/**
 * Setting to allow cloud recording access only from specific IP address ranges.
 *
**/
var UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl = /** @class */ (function (_super) {
    __extends(UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl, _super);
    function UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_addresses_or_ranges" }),
        __metadata("design:type", String)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl.prototype, "ipAddressesOrRanges", void 0);
    return UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl;
}(utils_1.SpeakeasyBase));
exports.UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl = UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl;
// UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement
/**
 * This object represents the minimum passcode requirements set for recordings via Account Recording Settings.
**/
var UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement = /** @class */ (function (_super) {
    __extends(UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement, _super);
    function UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_letter" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement.prototype, "haveLetter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_number" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement.prototype, "haveNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_allow_numeric" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement.prototype, "onlyAllowNumeric", void 0);
    return UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement = UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement;
var UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings = /** @class */ (function (_super) {
    __extends(UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings, _super);
    function UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ask_host_to_confirm_disclaimer" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "askHostToConfirmDisclaimer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ask_participants_to_consent_disclaimer" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "askParticipantsToConsentDisclaimer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_delete_cmr" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "autoDeleteCmr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_delete_cmr_days" }),
        __metadata("design:type", Number)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "autoDeleteCmrDays", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_recording" }),
        __metadata("design:type", String)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "autoRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloud_recording" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "cloudRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_pause_stop_recording" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "hostPauseStopRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_address_access_control" }),
        __metadata("design:type", UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "ipAddressAccessControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=local_recording" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "localRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_audio_file" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "recordAudioFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_gallery_view" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "recordGalleryView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_speaker_view" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "recordSpeakerView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_audio_transcript" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "recordingAudioTranscript", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_disclaimer" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "recordingDisclaimer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_password_requirement" }),
        __metadata("design:type", UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "recordingPasswordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=save_chat_text" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "saveChatText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_timestamp" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings.prototype, "showTimestamp", void 0);
    return UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings;
}(utils_1.SpeakeasyBase));
exports.UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings = UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings;
var UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum;
(function (UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum) {
    UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum["Both"] = "both";
    UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum["Telephony"] = "telephony";
    UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum["Voip"] = "voip";
    UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum["ThirdParty"] = "thirdParty";
})(UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum = exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum || (exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsAudioTypeEnum = {}));
// UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement
/**
 * Account wide meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
var UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement = /** @class */ (function (_super) {
    __extends(UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement, _super);
    function UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consecutive_characters_length" }),
        __metadata("design:type", Number)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement.prototype, "consecutiveCharactersLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_letter" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement.prototype, "haveLetter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_number" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement.prototype, "haveNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_upper_and_lower_characters" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement.prototype, "haveUpperAndLowerCharacters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_allow_numeric" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement.prototype, "onlyAllowNumeric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weak_enhance_detection" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement.prototype, "weakEnhanceDetection", void 0);
    return UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement = UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement;
var UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum;
(function (UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum) {
    UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum["JbhOnly"] = "jbh_only";
    UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum["All"] = "all";
    UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum["None"] = "none";
})(UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum = exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum || (exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum = {}));
var UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1 = /** @class */ (function (_super) {
    __extends(UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1, _super);
    function UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_type" }),
        __metadata("design:type", String)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "audioType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=default_password_for_scheduled_meetings" }),
        __metadata("design:type", String)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "defaultPasswordForScheduledMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed_password_in_join_link" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "embedPasswordInJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=force_pmi_jbh_password" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "forcePmiJbhPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_video" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "hostVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_before_host" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "joinBeforeHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password_requirement" }),
        __metadata("design:type", UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "meetingPasswordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants_video" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "participantsVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=personal_meeting" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "personalMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pmi_password" }),
        __metadata("design:type", String)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "pmiPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pstn_password_protected" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "pstnPasswordProtected", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_instant_meetings" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "requirePasswordForInstantMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_pmi_meetings" }),
        __metadata("design:type", String)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "requirePasswordForPmiMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_meetings" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "requirePasswordForScheduledMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduling_new_meetings" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "requirePasswordForSchedulingNewMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_pmi_for_instant_meetings" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "usePmiForInstantMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_pmi_for_scheduled_meetings" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1.prototype, "usePmiForScheduledMeetings", void 0);
    return UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1;
}(utils_1.SpeakeasyBase));
exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1 = UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1;
// UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsTelephonyRegions
/**
 * Indicates where most of the participants call into or call from duriing a meeting.
**/
var UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsTelephonyRegions = /** @class */ (function (_super) {
    __extends(UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsTelephonyRegions, _super);
    function UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsTelephonyRegions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowed_values" }),
        __metadata("design:type", Array)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsTelephonyRegions.prototype, "allowedValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=selection_values" }),
        __metadata("design:type", Array)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsTelephonyRegions.prototype, "selectionValues", void 0);
    return UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsTelephonyRegions;
}(utils_1.SpeakeasyBase));
exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsTelephonyRegions = UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsTelephonyRegions;
var UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings2 = /** @class */ (function (_super) {
    __extends(UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings2, _super);
    function UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_conference_info" }),
        __metadata("design:type", String)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings2.prototype, "audioConferenceInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_international_numbers_link" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings2.prototype, "showInternationalNumbersLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=telephony_regions" }),
        __metadata("design:type", UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsTelephonyRegions)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings2.prototype, "telephonyRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=third_party_audio" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings2.prototype, "thirdPartyAudio", void 0);
    return UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings2;
}(utils_1.SpeakeasyBase));
exports.UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings2 = UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings2;
// UserSettings200ApplicationJsonUserSettingsUserSettingsTspSettings
/**
 * Account Settings: TSP.
**/
var UserSettings200ApplicationJsonUserSettingsUserSettingsTspSettings = /** @class */ (function (_super) {
    __extends(UserSettings200ApplicationJsonUserSettingsUserSettingsTspSettings, _super);
    function UserSettings200ApplicationJsonUserSettingsUserSettingsTspSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_out" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsTspSettings.prototype, "callOut", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_out_countries" }),
        __metadata("design:type", Array)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsTspSettings.prototype, "callOutCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_international_numbers_link" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonUserSettingsUserSettingsTspSettings.prototype, "showInternationalNumbersLink", void 0);
    return UserSettings200ApplicationJsonUserSettingsUserSettingsTspSettings;
}(utils_1.SpeakeasyBase));
exports.UserSettings200ApplicationJsonUserSettingsUserSettingsTspSettings = UserSettings200ApplicationJsonUserSettingsUserSettingsTspSettings;
var UserSettings200ApplicationJsonUserSettings = /** @class */ (function (_super) {
    __extends(UserSettings200ApplicationJsonUserSettings, _super);
    function UserSettings200ApplicationJsonUserSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email_notification" }),
        __metadata("design:type", UserSettings200ApplicationJsonUserSettingsUserSettingsNotificationSettings)
    ], UserSettings200ApplicationJsonUserSettings.prototype, "emailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=feature" }),
        __metadata("design:type", UserSettings200ApplicationJsonUserSettingsUserSettingsFeatureSettings)
    ], UserSettings200ApplicationJsonUserSettings.prototype, "feature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=in_meeting" }),
        __metadata("design:type", UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings)
    ], UserSettings200ApplicationJsonUserSettings.prototype, "inMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=profile" }),
        __metadata("design:type", UserSettings200ApplicationJsonUserSettingsProfile)
    ], UserSettings200ApplicationJsonUserSettings.prototype, "profile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording" }),
        __metadata("design:type", UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings)
    ], UserSettings200ApplicationJsonUserSettings.prototype, "recording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule_meeting" }),
        __metadata("design:type", UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings1)
    ], UserSettings200ApplicationJsonUserSettings.prototype, "scheduleMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=telephony" }),
        __metadata("design:type", UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings2)
    ], UserSettings200ApplicationJsonUserSettings.prototype, "telephony", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tsp" }),
        __metadata("design:type", UserSettings200ApplicationJsonUserSettingsUserSettingsTspSettings)
    ], UserSettings200ApplicationJsonUserSettings.prototype, "tsp", void 0);
    return UserSettings200ApplicationJsonUserSettings;
}(utils_1.SpeakeasyBase));
exports.UserSettings200ApplicationJsonUserSettings = UserSettings200ApplicationJsonUserSettings;
var UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum;
(function (UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum) {
    UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum["EnhancedEncryption"] = "enhanced_encryption";
    UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum["E2ee"] = "e2ee";
})(UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = exports.UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum || (exports.UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum = {}));
// UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
/**
 * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
**/
var UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = /** @class */ (function (_super) {
    __extends(UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement, _super);
    function UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consecutive_characters_length" }),
        __metadata("design:type", Number)
    ], UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "consecutiveCharactersLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_letter" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveLetter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_number" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_special_character" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveSpecialCharacter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=have_upper_and_lower_characters" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "haveUpperAndLowerCharacters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=only_allow_numeric" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "onlyAllowNumeric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weak_enhance_detection" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement.prototype, "weakEnhanceDetection", void 0);
    return UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
}(utils_1.SpeakeasyBase));
exports.UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement = UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement;
// UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
/**
 * Specify the settings to be applied if waiting room is enabled.
**/
var UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = /** @class */ (function (_super) {
    __extends(UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings, _super);
    function UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants_to_place_in_waiting_room" }),
        __metadata("design:type", Number)
    ], UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "participantsToPlaceInWaitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users_who_can_admit_participants_from_waiting_room" }),
        __metadata("design:type", Number)
    ], UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "usersWhoCanAdmitParticipantsFromWaitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=whitelisted_domains_for_waiting_room" }),
        __metadata("design:type", String)
    ], UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings.prototype, "whitelistedDomainsForWaitingRoom", void 0);
    return UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
}(utils_1.SpeakeasyBase));
exports.UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings = UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings;
var UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity = /** @class */ (function (_super) {
    __extends(UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity, _super);
    function UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_security" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "autoSecurity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed_password_in_join_link" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "embedPasswordInJoinLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryption_type" }),
        __metadata("design:type", String)
    ], UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "encryptionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_to_end_encrypted_meetings" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "endToEndEncryptedMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "meetingPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_password_requirement" }),
        __metadata("design:type", UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement)
    ], UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "meetingPasswordRequirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_password" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "phonePassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pmi_password" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "pmiPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_meeting" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "requirePasswordForScheduledMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_password_for_scheduled_webinar" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "requirePasswordForScheduledWebinar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room_settings" }),
        __metadata("design:type", UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings)
    ], UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "waitingRoomSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webinar_password" }),
        __metadata("design:type", Boolean)
    ], UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity.prototype, "webinarPassword", void 0);
    return UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
}(utils_1.SpeakeasyBase));
exports.UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity = UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity;
var UserSettings200ApplicationJsonMeetingWebinarSecuritySettings = /** @class */ (function (_super) {
    __extends(UserSettings200ApplicationJsonMeetingWebinarSecuritySettings, _super);
    function UserSettings200ApplicationJsonMeetingWebinarSecuritySettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_security" }),
        __metadata("design:type", UserSettings200ApplicationJsonMeetingWebinarSecuritySettingsMeetingSecurity)
    ], UserSettings200ApplicationJsonMeetingWebinarSecuritySettings.prototype, "meetingSecurity", void 0);
    return UserSettings200ApplicationJsonMeetingWebinarSecuritySettings;
}(utils_1.SpeakeasyBase));
exports.UserSettings200ApplicationJsonMeetingWebinarSecuritySettings = UserSettings200ApplicationJsonMeetingWebinarSecuritySettings;
var UserSettingsRequest = /** @class */ (function (_super) {
    __extends(UserSettingsRequest, _super);
    function UserSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserSettingsPathParams)
    ], UserSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserSettingsQueryParams)
    ], UserSettingsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserSettingsSecurity)
    ], UserSettingsRequest.prototype, "security", void 0);
    return UserSettingsRequest;
}(utils_1.SpeakeasyBase));
exports.UserSettingsRequest = UserSettingsRequest;
var UserSettingsResponse = /** @class */ (function (_super) {
    __extends(UserSettingsResponse, _super);
    function UserSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UserSettingsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UserSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UserSettingsResponse.prototype, "userSettings200ApplicationJSONOneOf", void 0);
    return UserSettingsResponse;
}(utils_1.SpeakeasyBase));
exports.UserSettingsResponse = UserSettingsResponse;
