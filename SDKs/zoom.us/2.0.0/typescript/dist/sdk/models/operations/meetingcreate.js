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
exports.MeetingCreateRequest = exports.MeetingCreate201ApplicationJson = exports.MeetingCreate201ApplicationJsonTrackingFields = exports.MeetingCreate201ApplicationJsonSettings = exports.MeetingCreate201ApplicationJsonSettingsLanguageInterpretation = exports.MeetingCreate201ApplicationJsonSettingsLanguageInterpretationInterpreters = exports.MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbers = exports.MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbersTypeEnum = exports.MeetingCreate201ApplicationJsonSettingsEncryptionTypeEnum = exports.MeetingCreate201ApplicationJsonSettingsCustomKeys = exports.MeetingCreate201ApplicationJsonSettingsBreakoutRoom = exports.MeetingCreate201ApplicationJsonSettingsBreakoutRoomRooms = exports.MeetingCreate201ApplicationJsonSettingsAutoRecordingEnum = exports.MeetingCreate201ApplicationJsonSettingsAuthenticationException = exports.MeetingCreate201ApplicationJsonSettingsAudioEnum = exports.MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions = exports.MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = exports.MeetingCreate201ApplicationJsonRecurrence = exports.MeetingCreate201ApplicationJsonRecurrenceWeeklyDaysEnum = exports.MeetingCreate201ApplicationJsonOccurrences = exports.MeetingCreateRequests = exports.MeetingCreateMultipartFormData1 = exports.MeetingCreateMultipartFormDataTrackingFields = exports.MeetingCreateMultipartFormDataSettings = exports.MeetingCreateMultipartFormDataSettingsLanguageInterpretation = exports.MeetingCreateMultipartFormDataSettingsLanguageInterpretationInterpreters = exports.MeetingCreateMultipartFormDataSettingsEncryptionTypeEnum = exports.MeetingCreateMultipartFormDataSettingsBreakoutRoom = exports.MeetingCreateMultipartFormDataSettingsBreakoutRoomRooms = exports.MeetingCreateMultipartFormDataSettingsAutoRecordingEnum = exports.MeetingCreateMultipartFormDataSettingsAudioEnum = exports.MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions = exports.MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = exports.MeetingCreateMultipartFormDataRecurrence = exports.MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum = exports.MeetingCreateApplicationJson = exports.MeetingCreateApplicationJsonTrackingFields = exports.MeetingCreateApplicationJsonSettings = exports.MeetingCreateApplicationJsonSettingsLanguageInterpretation = exports.MeetingCreateApplicationJsonSettingsLanguageInterpretationInterpreters = exports.MeetingCreateApplicationJsonSettingsEncryptionTypeEnum = exports.MeetingCreateApplicationJsonSettingsBreakoutRoom = exports.MeetingCreateApplicationJsonSettingsBreakoutRoomRooms = exports.MeetingCreateApplicationJsonSettingsAutoRecordingEnum = exports.MeetingCreateApplicationJsonSettingsAudioEnum = exports.MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions = exports.MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = exports.MeetingCreateApplicationJsonRecurrence = exports.MeetingCreateApplicationJsonRecurrenceWeeklyDaysEnum = exports.MeetingCreatePathParams = void 0;
exports.MeetingCreateResponse = void 0;
var utils_1 = require("../../../internal/utils");
var MeetingCreatePathParams = /** @class */ (function (_super) {
    __extends(MeetingCreatePathParams, _super);
    function MeetingCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], MeetingCreatePathParams.prototype, "userId", void 0);
    return MeetingCreatePathParams;
}(utils_1.SpeakeasyBase));
exports.MeetingCreatePathParams = MeetingCreatePathParams;
var MeetingCreateApplicationJsonRecurrenceWeeklyDaysEnum;
(function (MeetingCreateApplicationJsonRecurrenceWeeklyDaysEnum) {
    MeetingCreateApplicationJsonRecurrenceWeeklyDaysEnum["One"] = "1";
    MeetingCreateApplicationJsonRecurrenceWeeklyDaysEnum["Two"] = "2";
    MeetingCreateApplicationJsonRecurrenceWeeklyDaysEnum["Three"] = "3";
    MeetingCreateApplicationJsonRecurrenceWeeklyDaysEnum["Four"] = "4";
    MeetingCreateApplicationJsonRecurrenceWeeklyDaysEnum["Five"] = "5";
    MeetingCreateApplicationJsonRecurrenceWeeklyDaysEnum["Six"] = "6";
    MeetingCreateApplicationJsonRecurrenceWeeklyDaysEnum["Seven"] = "7";
})(MeetingCreateApplicationJsonRecurrenceWeeklyDaysEnum = exports.MeetingCreateApplicationJsonRecurrenceWeeklyDaysEnum || (exports.MeetingCreateApplicationJsonRecurrenceWeeklyDaysEnum = {}));
// MeetingCreateApplicationJsonRecurrence
/**
 * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
**/
var MeetingCreateApplicationJsonRecurrence = /** @class */ (function (_super) {
    __extends(MeetingCreateApplicationJsonRecurrence, _super);
    function MeetingCreateApplicationJsonRecurrence() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_date_time" }),
        __metadata("design:type", Date)
    ], MeetingCreateApplicationJsonRecurrence.prototype, "endDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_times" }),
        __metadata("design:type", Number)
    ], MeetingCreateApplicationJsonRecurrence.prototype, "endTimes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_day" }),
        __metadata("design:type", Number)
    ], MeetingCreateApplicationJsonRecurrence.prototype, "monthlyDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_week" }),
        __metadata("design:type", Number)
    ], MeetingCreateApplicationJsonRecurrence.prototype, "monthlyWeek", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_week_day" }),
        __metadata("design:type", Number)
    ], MeetingCreateApplicationJsonRecurrence.prototype, "monthlyWeekDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repeat_interval" }),
        __metadata("design:type", Number)
    ], MeetingCreateApplicationJsonRecurrence.prototype, "repeatInterval", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], MeetingCreateApplicationJsonRecurrence.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weekly_days" }),
        __metadata("design:type", String)
    ], MeetingCreateApplicationJsonRecurrence.prototype, "weeklyDays", void 0);
    return MeetingCreateApplicationJsonRecurrence;
}(utils_1.SpeakeasyBase));
exports.MeetingCreateApplicationJsonRecurrence = MeetingCreateApplicationJsonRecurrence;
var MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum;
(function (MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum) {
    MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum["Approve"] = "approve";
    MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum["Deny"] = "deny";
})(MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = exports.MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum || (exports.MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = {}));
// MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions
/**
 * Approve or block users from specific regions/countries from joining this meeting.
 *
**/
var MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions = /** @class */ (function (_super) {
    __extends(MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions, _super);
    function MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approved_list" }),
        __metadata("design:type", Array)
    ], MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions.prototype, "approvedList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=denied_list" }),
        __metadata("design:type", Array)
    ], MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions.prototype, "deniedList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions.prototype, "method", void 0);
    return MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions;
}(utils_1.SpeakeasyBase));
exports.MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions = MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions;
var MeetingCreateApplicationJsonSettingsAudioEnum;
(function (MeetingCreateApplicationJsonSettingsAudioEnum) {
    MeetingCreateApplicationJsonSettingsAudioEnum["Both"] = "both";
    MeetingCreateApplicationJsonSettingsAudioEnum["Telephony"] = "telephony";
    MeetingCreateApplicationJsonSettingsAudioEnum["Voip"] = "voip";
})(MeetingCreateApplicationJsonSettingsAudioEnum = exports.MeetingCreateApplicationJsonSettingsAudioEnum || (exports.MeetingCreateApplicationJsonSettingsAudioEnum = {}));
var MeetingCreateApplicationJsonSettingsAutoRecordingEnum;
(function (MeetingCreateApplicationJsonSettingsAutoRecordingEnum) {
    MeetingCreateApplicationJsonSettingsAutoRecordingEnum["Local"] = "local";
    MeetingCreateApplicationJsonSettingsAutoRecordingEnum["Cloud"] = "cloud";
    MeetingCreateApplicationJsonSettingsAutoRecordingEnum["None"] = "none";
})(MeetingCreateApplicationJsonSettingsAutoRecordingEnum = exports.MeetingCreateApplicationJsonSettingsAutoRecordingEnum || (exports.MeetingCreateApplicationJsonSettingsAutoRecordingEnum = {}));
var MeetingCreateApplicationJsonSettingsBreakoutRoomRooms = /** @class */ (function (_super) {
    __extends(MeetingCreateApplicationJsonSettingsBreakoutRoomRooms, _super);
    function MeetingCreateApplicationJsonSettingsBreakoutRoomRooms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MeetingCreateApplicationJsonSettingsBreakoutRoomRooms.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants" }),
        __metadata("design:type", Array)
    ], MeetingCreateApplicationJsonSettingsBreakoutRoomRooms.prototype, "participants", void 0);
    return MeetingCreateApplicationJsonSettingsBreakoutRoomRooms;
}(utils_1.SpeakeasyBase));
exports.MeetingCreateApplicationJsonSettingsBreakoutRoomRooms = MeetingCreateApplicationJsonSettingsBreakoutRoomRooms;
// MeetingCreateApplicationJsonSettingsBreakoutRoom
/**
 * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
**/
var MeetingCreateApplicationJsonSettingsBreakoutRoom = /** @class */ (function (_super) {
    __extends(MeetingCreateApplicationJsonSettingsBreakoutRoom, _super);
    function MeetingCreateApplicationJsonSettingsBreakoutRoom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateApplicationJsonSettingsBreakoutRoom.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rooms", elemType: MeetingCreateApplicationJsonSettingsBreakoutRoomRooms }),
        __metadata("design:type", Array)
    ], MeetingCreateApplicationJsonSettingsBreakoutRoom.prototype, "rooms", void 0);
    return MeetingCreateApplicationJsonSettingsBreakoutRoom;
}(utils_1.SpeakeasyBase));
exports.MeetingCreateApplicationJsonSettingsBreakoutRoom = MeetingCreateApplicationJsonSettingsBreakoutRoom;
var MeetingCreateApplicationJsonSettingsEncryptionTypeEnum;
(function (MeetingCreateApplicationJsonSettingsEncryptionTypeEnum) {
    MeetingCreateApplicationJsonSettingsEncryptionTypeEnum["EnhancedEncryption"] = "enhanced_encryption";
    MeetingCreateApplicationJsonSettingsEncryptionTypeEnum["E2ee"] = "e2ee";
})(MeetingCreateApplicationJsonSettingsEncryptionTypeEnum = exports.MeetingCreateApplicationJsonSettingsEncryptionTypeEnum || (exports.MeetingCreateApplicationJsonSettingsEncryptionTypeEnum = {}));
var MeetingCreateApplicationJsonSettingsLanguageInterpretationInterpreters = /** @class */ (function (_super) {
    __extends(MeetingCreateApplicationJsonSettingsLanguageInterpretationInterpreters, _super);
    function MeetingCreateApplicationJsonSettingsLanguageInterpretationInterpreters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], MeetingCreateApplicationJsonSettingsLanguageInterpretationInterpreters.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=languages" }),
        __metadata("design:type", String)
    ], MeetingCreateApplicationJsonSettingsLanguageInterpretationInterpreters.prototype, "languages", void 0);
    return MeetingCreateApplicationJsonSettingsLanguageInterpretationInterpreters;
}(utils_1.SpeakeasyBase));
exports.MeetingCreateApplicationJsonSettingsLanguageInterpretationInterpreters = MeetingCreateApplicationJsonSettingsLanguageInterpretationInterpreters;
// MeetingCreateApplicationJsonSettingsLanguageInterpretation
/**
 * Language interpretation [settings](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars#h_01EGGQFD3Q4BST3378SA762MJ1) for meetings.
 *
 * **Note:** This feature is only available on certain Webinar add-on, Education, Business and higher plans. If this feature is not enabled on the host's account, this setting will not be applied for the meeting.
**/
var MeetingCreateApplicationJsonSettingsLanguageInterpretation = /** @class */ (function (_super) {
    __extends(MeetingCreateApplicationJsonSettingsLanguageInterpretation, _super);
    function MeetingCreateApplicationJsonSettingsLanguageInterpretation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateApplicationJsonSettingsLanguageInterpretation.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interpreters", elemType: MeetingCreateApplicationJsonSettingsLanguageInterpretationInterpreters }),
        __metadata("design:type", Array)
    ], MeetingCreateApplicationJsonSettingsLanguageInterpretation.prototype, "interpreters", void 0);
    return MeetingCreateApplicationJsonSettingsLanguageInterpretation;
}(utils_1.SpeakeasyBase));
exports.MeetingCreateApplicationJsonSettingsLanguageInterpretation = MeetingCreateApplicationJsonSettingsLanguageInterpretation;
// MeetingCreateApplicationJsonSettings
/**
 * Meeting settings.
**/
var MeetingCreateApplicationJsonSettings = /** @class */ (function (_super) {
    __extends(MeetingCreateApplicationJsonSettings, _super);
    function MeetingCreateApplicationJsonSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additional_data_center_regions" }),
        __metadata("design:type", Array)
    ], MeetingCreateApplicationJsonSettings.prototype, "additionalDataCenterRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_multiple_devices" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateApplicationJsonSettings.prototype, "allowMultipleDevices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_hosts" }),
        __metadata("design:type", String)
    ], MeetingCreateApplicationJsonSettings.prototype, "alternativeHosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_hosts_email_notification" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateApplicationJsonSettings.prototype, "alternativeHostsEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approval_type" }),
        __metadata("design:type", Number)
    ], MeetingCreateApplicationJsonSettings.prototype, "approvalType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approved_or_denied_countries_or_regions" }),
        __metadata("design:type", MeetingCreateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions)
    ], MeetingCreateApplicationJsonSettings.prototype, "approvedOrDeniedCountriesOrRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio" }),
        __metadata("design:type", String)
    ], MeetingCreateApplicationJsonSettings.prototype, "audio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_domains" }),
        __metadata("design:type", String)
    ], MeetingCreateApplicationJsonSettings.prototype, "authenticationDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_option" }),
        __metadata("design:type", String)
    ], MeetingCreateApplicationJsonSettings.prototype, "authenticationOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_recording" }),
        __metadata("design:type", String)
    ], MeetingCreateApplicationJsonSettings.prototype, "autoRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=breakout_room" }),
        __metadata("design:type", MeetingCreateApplicationJsonSettingsBreakoutRoom)
    ], MeetingCreateApplicationJsonSettings.prototype, "breakoutRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=close_registration" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateApplicationJsonSettings.prototype, "closeRegistration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cn_meeting" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateApplicationJsonSettings.prototype, "cnMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact_email" }),
        __metadata("design:type", String)
    ], MeetingCreateApplicationJsonSettings.prototype, "contactEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact_name" }),
        __metadata("design:type", String)
    ], MeetingCreateApplicationJsonSettings.prototype, "contactName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryption_type" }),
        __metadata("design:type", String)
    ], MeetingCreateApplicationJsonSettings.prototype, "encryptionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=global_dial_in_countries" }),
        __metadata("design:type", Array)
    ], MeetingCreateApplicationJsonSettings.prototype, "globalDialInCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_video" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateApplicationJsonSettings.prototype, "hostVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=in_meeting" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateApplicationJsonSettings.prototype, "inMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jbh_time" }),
        __metadata("design:type", Number)
    ], MeetingCreateApplicationJsonSettings.prototype, "jbhTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_before_host" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateApplicationJsonSettings.prototype, "joinBeforeHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=language_interpretation" }),
        __metadata("design:type", MeetingCreateApplicationJsonSettingsLanguageInterpretation)
    ], MeetingCreateApplicationJsonSettings.prototype, "languageInterpretation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_authentication" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateApplicationJsonSettings.prototype, "meetingAuthentication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mute_upon_entry" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateApplicationJsonSettings.prototype, "muteUponEntry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participant_video" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateApplicationJsonSettings.prototype, "participantVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_email_notification" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateApplicationJsonSettings.prototype, "registrantsEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registration_type" }),
        __metadata("design:type", Number)
    ], MeetingCreateApplicationJsonSettings.prototype, "registrationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_share_button" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateApplicationJsonSettings.prototype, "showShareButton", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_pmi" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateApplicationJsonSettings.prototype, "usePmi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateApplicationJsonSettings.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=watermark" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateApplicationJsonSettings.prototype, "watermark", void 0);
    return MeetingCreateApplicationJsonSettings;
}(utils_1.SpeakeasyBase));
exports.MeetingCreateApplicationJsonSettings = MeetingCreateApplicationJsonSettings;
var MeetingCreateApplicationJsonTrackingFields = /** @class */ (function (_super) {
    __extends(MeetingCreateApplicationJsonTrackingFields, _super);
    function MeetingCreateApplicationJsonTrackingFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], MeetingCreateApplicationJsonTrackingFields.prototype, "field", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], MeetingCreateApplicationJsonTrackingFields.prototype, "value", void 0);
    return MeetingCreateApplicationJsonTrackingFields;
}(utils_1.SpeakeasyBase));
exports.MeetingCreateApplicationJsonTrackingFields = MeetingCreateApplicationJsonTrackingFields;
// MeetingCreateApplicationJson
/**
 * Base object for meeting.
**/
var MeetingCreateApplicationJson = /** @class */ (function (_super) {
    __extends(MeetingCreateApplicationJson, _super);
    function MeetingCreateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=agenda" }),
        __metadata("design:type", String)
    ], MeetingCreateApplicationJson.prototype, "agenda", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], MeetingCreateApplicationJson.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], MeetingCreateApplicationJson.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurrence" }),
        __metadata("design:type", MeetingCreateApplicationJsonRecurrence)
    ], MeetingCreateApplicationJson.prototype, "recurrence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule_for" }),
        __metadata("design:type", String)
    ], MeetingCreateApplicationJson.prototype, "scheduleFor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", MeetingCreateApplicationJsonSettings)
    ], MeetingCreateApplicationJson.prototype, "settings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], MeetingCreateApplicationJson.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=template_id" }),
        __metadata("design:type", String)
    ], MeetingCreateApplicationJson.prototype, "templateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], MeetingCreateApplicationJson.prototype, "timezone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], MeetingCreateApplicationJson.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tracking_fields", elemType: MeetingCreateApplicationJsonTrackingFields }),
        __metadata("design:type", Array)
    ], MeetingCreateApplicationJson.prototype, "trackingFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], MeetingCreateApplicationJson.prototype, "type", void 0);
    return MeetingCreateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MeetingCreateApplicationJson = MeetingCreateApplicationJson;
var MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum;
(function (MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum) {
    MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum["One"] = "1";
    MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum["Two"] = "2";
    MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum["Three"] = "3";
    MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum["Four"] = "4";
    MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum["Five"] = "5";
    MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum["Six"] = "6";
    MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum["Seven"] = "7";
})(MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum = exports.MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum || (exports.MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum = {}));
// MeetingCreateMultipartFormDataRecurrence
/**
 * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
**/
var MeetingCreateMultipartFormDataRecurrence = /** @class */ (function (_super) {
    __extends(MeetingCreateMultipartFormDataRecurrence, _super);
    function MeetingCreateMultipartFormDataRecurrence() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_date_time" }),
        __metadata("design:type", Date)
    ], MeetingCreateMultipartFormDataRecurrence.prototype, "endDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_times" }),
        __metadata("design:type", Number)
    ], MeetingCreateMultipartFormDataRecurrence.prototype, "endTimes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_day" }),
        __metadata("design:type", Number)
    ], MeetingCreateMultipartFormDataRecurrence.prototype, "monthlyDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_week" }),
        __metadata("design:type", Number)
    ], MeetingCreateMultipartFormDataRecurrence.prototype, "monthlyWeek", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_week_day" }),
        __metadata("design:type", Number)
    ], MeetingCreateMultipartFormDataRecurrence.prototype, "monthlyWeekDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repeat_interval" }),
        __metadata("design:type", Number)
    ], MeetingCreateMultipartFormDataRecurrence.prototype, "repeatInterval", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], MeetingCreateMultipartFormDataRecurrence.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weekly_days" }),
        __metadata("design:type", String)
    ], MeetingCreateMultipartFormDataRecurrence.prototype, "weeklyDays", void 0);
    return MeetingCreateMultipartFormDataRecurrence;
}(utils_1.SpeakeasyBase));
exports.MeetingCreateMultipartFormDataRecurrence = MeetingCreateMultipartFormDataRecurrence;
var MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum;
(function (MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum) {
    MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum["Approve"] = "approve";
    MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum["Deny"] = "deny";
})(MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = exports.MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum || (exports.MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = {}));
// MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions
/**
 * Approve or block users from specific regions/countries from joining this meeting.
 *
**/
var MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions = /** @class */ (function (_super) {
    __extends(MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions, _super);
    function MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approved_list" }),
        __metadata("design:type", Array)
    ], MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions.prototype, "approvedList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=denied_list" }),
        __metadata("design:type", Array)
    ], MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions.prototype, "deniedList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions.prototype, "method", void 0);
    return MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions;
}(utils_1.SpeakeasyBase));
exports.MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions = MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions;
var MeetingCreateMultipartFormDataSettingsAudioEnum;
(function (MeetingCreateMultipartFormDataSettingsAudioEnum) {
    MeetingCreateMultipartFormDataSettingsAudioEnum["Both"] = "both";
    MeetingCreateMultipartFormDataSettingsAudioEnum["Telephony"] = "telephony";
    MeetingCreateMultipartFormDataSettingsAudioEnum["Voip"] = "voip";
})(MeetingCreateMultipartFormDataSettingsAudioEnum = exports.MeetingCreateMultipartFormDataSettingsAudioEnum || (exports.MeetingCreateMultipartFormDataSettingsAudioEnum = {}));
var MeetingCreateMultipartFormDataSettingsAutoRecordingEnum;
(function (MeetingCreateMultipartFormDataSettingsAutoRecordingEnum) {
    MeetingCreateMultipartFormDataSettingsAutoRecordingEnum["Local"] = "local";
    MeetingCreateMultipartFormDataSettingsAutoRecordingEnum["Cloud"] = "cloud";
    MeetingCreateMultipartFormDataSettingsAutoRecordingEnum["None"] = "none";
})(MeetingCreateMultipartFormDataSettingsAutoRecordingEnum = exports.MeetingCreateMultipartFormDataSettingsAutoRecordingEnum || (exports.MeetingCreateMultipartFormDataSettingsAutoRecordingEnum = {}));
var MeetingCreateMultipartFormDataSettingsBreakoutRoomRooms = /** @class */ (function (_super) {
    __extends(MeetingCreateMultipartFormDataSettingsBreakoutRoomRooms, _super);
    function MeetingCreateMultipartFormDataSettingsBreakoutRoomRooms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MeetingCreateMultipartFormDataSettingsBreakoutRoomRooms.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants" }),
        __metadata("design:type", Array)
    ], MeetingCreateMultipartFormDataSettingsBreakoutRoomRooms.prototype, "participants", void 0);
    return MeetingCreateMultipartFormDataSettingsBreakoutRoomRooms;
}(utils_1.SpeakeasyBase));
exports.MeetingCreateMultipartFormDataSettingsBreakoutRoomRooms = MeetingCreateMultipartFormDataSettingsBreakoutRoomRooms;
// MeetingCreateMultipartFormDataSettingsBreakoutRoom
/**
 * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
**/
var MeetingCreateMultipartFormDataSettingsBreakoutRoom = /** @class */ (function (_super) {
    __extends(MeetingCreateMultipartFormDataSettingsBreakoutRoom, _super);
    function MeetingCreateMultipartFormDataSettingsBreakoutRoom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateMultipartFormDataSettingsBreakoutRoom.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rooms", elemType: MeetingCreateMultipartFormDataSettingsBreakoutRoomRooms }),
        __metadata("design:type", Array)
    ], MeetingCreateMultipartFormDataSettingsBreakoutRoom.prototype, "rooms", void 0);
    return MeetingCreateMultipartFormDataSettingsBreakoutRoom;
}(utils_1.SpeakeasyBase));
exports.MeetingCreateMultipartFormDataSettingsBreakoutRoom = MeetingCreateMultipartFormDataSettingsBreakoutRoom;
var MeetingCreateMultipartFormDataSettingsEncryptionTypeEnum;
(function (MeetingCreateMultipartFormDataSettingsEncryptionTypeEnum) {
    MeetingCreateMultipartFormDataSettingsEncryptionTypeEnum["EnhancedEncryption"] = "enhanced_encryption";
    MeetingCreateMultipartFormDataSettingsEncryptionTypeEnum["E2ee"] = "e2ee";
})(MeetingCreateMultipartFormDataSettingsEncryptionTypeEnum = exports.MeetingCreateMultipartFormDataSettingsEncryptionTypeEnum || (exports.MeetingCreateMultipartFormDataSettingsEncryptionTypeEnum = {}));
var MeetingCreateMultipartFormDataSettingsLanguageInterpretationInterpreters = /** @class */ (function (_super) {
    __extends(MeetingCreateMultipartFormDataSettingsLanguageInterpretationInterpreters, _super);
    function MeetingCreateMultipartFormDataSettingsLanguageInterpretationInterpreters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], MeetingCreateMultipartFormDataSettingsLanguageInterpretationInterpreters.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=languages" }),
        __metadata("design:type", String)
    ], MeetingCreateMultipartFormDataSettingsLanguageInterpretationInterpreters.prototype, "languages", void 0);
    return MeetingCreateMultipartFormDataSettingsLanguageInterpretationInterpreters;
}(utils_1.SpeakeasyBase));
exports.MeetingCreateMultipartFormDataSettingsLanguageInterpretationInterpreters = MeetingCreateMultipartFormDataSettingsLanguageInterpretationInterpreters;
// MeetingCreateMultipartFormDataSettingsLanguageInterpretation
/**
 * Language interpretation [settings](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars#h_01EGGQFD3Q4BST3378SA762MJ1) for meetings.
 *
 * **Note:** This feature is only available on certain Webinar add-on, Education, Business and higher plans. If this feature is not enabled on the host's account, this setting will not be applied for the meeting.
**/
var MeetingCreateMultipartFormDataSettingsLanguageInterpretation = /** @class */ (function (_super) {
    __extends(MeetingCreateMultipartFormDataSettingsLanguageInterpretation, _super);
    function MeetingCreateMultipartFormDataSettingsLanguageInterpretation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateMultipartFormDataSettingsLanguageInterpretation.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interpreters", elemType: MeetingCreateMultipartFormDataSettingsLanguageInterpretationInterpreters }),
        __metadata("design:type", Array)
    ], MeetingCreateMultipartFormDataSettingsLanguageInterpretation.prototype, "interpreters", void 0);
    return MeetingCreateMultipartFormDataSettingsLanguageInterpretation;
}(utils_1.SpeakeasyBase));
exports.MeetingCreateMultipartFormDataSettingsLanguageInterpretation = MeetingCreateMultipartFormDataSettingsLanguageInterpretation;
// MeetingCreateMultipartFormDataSettings
/**
 * Meeting settings.
**/
var MeetingCreateMultipartFormDataSettings = /** @class */ (function (_super) {
    __extends(MeetingCreateMultipartFormDataSettings, _super);
    function MeetingCreateMultipartFormDataSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additional_data_center_regions" }),
        __metadata("design:type", Array)
    ], MeetingCreateMultipartFormDataSettings.prototype, "additionalDataCenterRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_multiple_devices" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateMultipartFormDataSettings.prototype, "allowMultipleDevices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_hosts" }),
        __metadata("design:type", String)
    ], MeetingCreateMultipartFormDataSettings.prototype, "alternativeHosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_hosts_email_notification" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateMultipartFormDataSettings.prototype, "alternativeHostsEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approval_type" }),
        __metadata("design:type", Number)
    ], MeetingCreateMultipartFormDataSettings.prototype, "approvalType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approved_or_denied_countries_or_regions" }),
        __metadata("design:type", MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions)
    ], MeetingCreateMultipartFormDataSettings.prototype, "approvedOrDeniedCountriesOrRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio" }),
        __metadata("design:type", String)
    ], MeetingCreateMultipartFormDataSettings.prototype, "audio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_domains" }),
        __metadata("design:type", String)
    ], MeetingCreateMultipartFormDataSettings.prototype, "authenticationDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_option" }),
        __metadata("design:type", String)
    ], MeetingCreateMultipartFormDataSettings.prototype, "authenticationOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_recording" }),
        __metadata("design:type", String)
    ], MeetingCreateMultipartFormDataSettings.prototype, "autoRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=breakout_room" }),
        __metadata("design:type", MeetingCreateMultipartFormDataSettingsBreakoutRoom)
    ], MeetingCreateMultipartFormDataSettings.prototype, "breakoutRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=close_registration" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateMultipartFormDataSettings.prototype, "closeRegistration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cn_meeting" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateMultipartFormDataSettings.prototype, "cnMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact_email" }),
        __metadata("design:type", String)
    ], MeetingCreateMultipartFormDataSettings.prototype, "contactEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact_name" }),
        __metadata("design:type", String)
    ], MeetingCreateMultipartFormDataSettings.prototype, "contactName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryption_type" }),
        __metadata("design:type", String)
    ], MeetingCreateMultipartFormDataSettings.prototype, "encryptionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=global_dial_in_countries" }),
        __metadata("design:type", Array)
    ], MeetingCreateMultipartFormDataSettings.prototype, "globalDialInCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_video" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateMultipartFormDataSettings.prototype, "hostVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=in_meeting" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateMultipartFormDataSettings.prototype, "inMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jbh_time" }),
        __metadata("design:type", Number)
    ], MeetingCreateMultipartFormDataSettings.prototype, "jbhTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_before_host" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateMultipartFormDataSettings.prototype, "joinBeforeHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=language_interpretation" }),
        __metadata("design:type", MeetingCreateMultipartFormDataSettingsLanguageInterpretation)
    ], MeetingCreateMultipartFormDataSettings.prototype, "languageInterpretation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_authentication" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateMultipartFormDataSettings.prototype, "meetingAuthentication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mute_upon_entry" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateMultipartFormDataSettings.prototype, "muteUponEntry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participant_video" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateMultipartFormDataSettings.prototype, "participantVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_email_notification" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateMultipartFormDataSettings.prototype, "registrantsEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registration_type" }),
        __metadata("design:type", Number)
    ], MeetingCreateMultipartFormDataSettings.prototype, "registrationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_share_button" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateMultipartFormDataSettings.prototype, "showShareButton", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_pmi" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateMultipartFormDataSettings.prototype, "usePmi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateMultipartFormDataSettings.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=watermark" }),
        __metadata("design:type", Boolean)
    ], MeetingCreateMultipartFormDataSettings.prototype, "watermark", void 0);
    return MeetingCreateMultipartFormDataSettings;
}(utils_1.SpeakeasyBase));
exports.MeetingCreateMultipartFormDataSettings = MeetingCreateMultipartFormDataSettings;
var MeetingCreateMultipartFormDataTrackingFields = /** @class */ (function (_super) {
    __extends(MeetingCreateMultipartFormDataTrackingFields, _super);
    function MeetingCreateMultipartFormDataTrackingFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], MeetingCreateMultipartFormDataTrackingFields.prototype, "field", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], MeetingCreateMultipartFormDataTrackingFields.prototype, "value", void 0);
    return MeetingCreateMultipartFormDataTrackingFields;
}(utils_1.SpeakeasyBase));
exports.MeetingCreateMultipartFormDataTrackingFields = MeetingCreateMultipartFormDataTrackingFields;
// MeetingCreateMultipartFormData1
/**
 * Base object for meeting.
**/
var MeetingCreateMultipartFormData1 = /** @class */ (function (_super) {
    __extends(MeetingCreateMultipartFormData1, _super);
    function MeetingCreateMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=agenda" }),
        __metadata("design:type", String)
    ], MeetingCreateMultipartFormData1.prototype, "agenda", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=duration" }),
        __metadata("design:type", Number)
    ], MeetingCreateMultipartFormData1.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=password" }),
        __metadata("design:type", String)
    ], MeetingCreateMultipartFormData1.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=recurrence;json=true" }),
        __metadata("design:type", MeetingCreateMultipartFormDataRecurrence)
    ], MeetingCreateMultipartFormData1.prototype, "recurrence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=schedule_for" }),
        __metadata("design:type", String)
    ], MeetingCreateMultipartFormData1.prototype, "scheduleFor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=settings;json=true" }),
        __metadata("design:type", MeetingCreateMultipartFormDataSettings)
    ], MeetingCreateMultipartFormData1.prototype, "settings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=start_time" }),
        __metadata("design:type", Date)
    ], MeetingCreateMultipartFormData1.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=template_id" }),
        __metadata("design:type", String)
    ], MeetingCreateMultipartFormData1.prototype, "templateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=timezone" }),
        __metadata("design:type", String)
    ], MeetingCreateMultipartFormData1.prototype, "timezone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=topic" }),
        __metadata("design:type", String)
    ], MeetingCreateMultipartFormData1.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=tracking_fields;json=true", elemType: MeetingCreateMultipartFormDataTrackingFields }),
        __metadata("design:type", Array)
    ], MeetingCreateMultipartFormData1.prototype, "trackingFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=type" }),
        __metadata("design:type", Number)
    ], MeetingCreateMultipartFormData1.prototype, "type", void 0);
    return MeetingCreateMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.MeetingCreateMultipartFormData1 = MeetingCreateMultipartFormData1;
var MeetingCreateRequests = /** @class */ (function (_super) {
    __extends(MeetingCreateRequests, _super);
    function MeetingCreateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", MeetingCreateApplicationJson)
    ], MeetingCreateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", MeetingCreateMultipartFormData1)
    ], MeetingCreateRequests.prototype, "object1", void 0);
    return MeetingCreateRequests;
}(utils_1.SpeakeasyBase));
exports.MeetingCreateRequests = MeetingCreateRequests;
// MeetingCreate201ApplicationJsonOccurrences
/**
 * Occurence object. This object is only returned for Recurring Webinars.
**/
var MeetingCreate201ApplicationJsonOccurrences = /** @class */ (function (_super) {
    __extends(MeetingCreate201ApplicationJsonOccurrences, _super);
    function MeetingCreate201ApplicationJsonOccurrences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], MeetingCreate201ApplicationJsonOccurrences.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=occurrence_id" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonOccurrences.prototype, "occurrenceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], MeetingCreate201ApplicationJsonOccurrences.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonOccurrences.prototype, "status", void 0);
    return MeetingCreate201ApplicationJsonOccurrences;
}(utils_1.SpeakeasyBase));
exports.MeetingCreate201ApplicationJsonOccurrences = MeetingCreate201ApplicationJsonOccurrences;
var MeetingCreate201ApplicationJsonRecurrenceWeeklyDaysEnum;
(function (MeetingCreate201ApplicationJsonRecurrenceWeeklyDaysEnum) {
    MeetingCreate201ApplicationJsonRecurrenceWeeklyDaysEnum["One"] = "1";
    MeetingCreate201ApplicationJsonRecurrenceWeeklyDaysEnum["Two"] = "2";
    MeetingCreate201ApplicationJsonRecurrenceWeeklyDaysEnum["Three"] = "3";
    MeetingCreate201ApplicationJsonRecurrenceWeeklyDaysEnum["Four"] = "4";
    MeetingCreate201ApplicationJsonRecurrenceWeeklyDaysEnum["Five"] = "5";
    MeetingCreate201ApplicationJsonRecurrenceWeeklyDaysEnum["Six"] = "6";
    MeetingCreate201ApplicationJsonRecurrenceWeeklyDaysEnum["Seven"] = "7";
})(MeetingCreate201ApplicationJsonRecurrenceWeeklyDaysEnum = exports.MeetingCreate201ApplicationJsonRecurrenceWeeklyDaysEnum || (exports.MeetingCreate201ApplicationJsonRecurrenceWeeklyDaysEnum = {}));
// MeetingCreate201ApplicationJsonRecurrence
/**
 * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
**/
var MeetingCreate201ApplicationJsonRecurrence = /** @class */ (function (_super) {
    __extends(MeetingCreate201ApplicationJsonRecurrence, _super);
    function MeetingCreate201ApplicationJsonRecurrence() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_date_time" }),
        __metadata("design:type", Date)
    ], MeetingCreate201ApplicationJsonRecurrence.prototype, "endDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_times" }),
        __metadata("design:type", Number)
    ], MeetingCreate201ApplicationJsonRecurrence.prototype, "endTimes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_day" }),
        __metadata("design:type", Number)
    ], MeetingCreate201ApplicationJsonRecurrence.prototype, "monthlyDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_week" }),
        __metadata("design:type", Number)
    ], MeetingCreate201ApplicationJsonRecurrence.prototype, "monthlyWeek", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_week_day" }),
        __metadata("design:type", Number)
    ], MeetingCreate201ApplicationJsonRecurrence.prototype, "monthlyWeekDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repeat_interval" }),
        __metadata("design:type", Number)
    ], MeetingCreate201ApplicationJsonRecurrence.prototype, "repeatInterval", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], MeetingCreate201ApplicationJsonRecurrence.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weekly_days" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonRecurrence.prototype, "weeklyDays", void 0);
    return MeetingCreate201ApplicationJsonRecurrence;
}(utils_1.SpeakeasyBase));
exports.MeetingCreate201ApplicationJsonRecurrence = MeetingCreate201ApplicationJsonRecurrence;
var MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum;
(function (MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum) {
    MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum["Approve"] = "approve";
    MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum["Deny"] = "deny";
})(MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = exports.MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum || (exports.MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = {}));
// MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions
/**
 * Approve or block users from specific regions/countries from joining this meeting.
 *
**/
var MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions = /** @class */ (function (_super) {
    __extends(MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions, _super);
    function MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approved_list" }),
        __metadata("design:type", Array)
    ], MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions.prototype, "approvedList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=denied_list" }),
        __metadata("design:type", Array)
    ], MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions.prototype, "deniedList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions.prototype, "method", void 0);
    return MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions;
}(utils_1.SpeakeasyBase));
exports.MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions = MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions;
var MeetingCreate201ApplicationJsonSettingsAudioEnum;
(function (MeetingCreate201ApplicationJsonSettingsAudioEnum) {
    MeetingCreate201ApplicationJsonSettingsAudioEnum["Both"] = "both";
    MeetingCreate201ApplicationJsonSettingsAudioEnum["Telephony"] = "telephony";
    MeetingCreate201ApplicationJsonSettingsAudioEnum["Voip"] = "voip";
})(MeetingCreate201ApplicationJsonSettingsAudioEnum = exports.MeetingCreate201ApplicationJsonSettingsAudioEnum || (exports.MeetingCreate201ApplicationJsonSettingsAudioEnum = {}));
var MeetingCreate201ApplicationJsonSettingsAuthenticationException = /** @class */ (function (_super) {
    __extends(MeetingCreate201ApplicationJsonSettingsAuthenticationException, _super);
    function MeetingCreate201ApplicationJsonSettingsAuthenticationException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonSettingsAuthenticationException.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonSettingsAuthenticationException.prototype, "name", void 0);
    return MeetingCreate201ApplicationJsonSettingsAuthenticationException;
}(utils_1.SpeakeasyBase));
exports.MeetingCreate201ApplicationJsonSettingsAuthenticationException = MeetingCreate201ApplicationJsonSettingsAuthenticationException;
var MeetingCreate201ApplicationJsonSettingsAutoRecordingEnum;
(function (MeetingCreate201ApplicationJsonSettingsAutoRecordingEnum) {
    MeetingCreate201ApplicationJsonSettingsAutoRecordingEnum["Local"] = "local";
    MeetingCreate201ApplicationJsonSettingsAutoRecordingEnum["Cloud"] = "cloud";
    MeetingCreate201ApplicationJsonSettingsAutoRecordingEnum["None"] = "none";
})(MeetingCreate201ApplicationJsonSettingsAutoRecordingEnum = exports.MeetingCreate201ApplicationJsonSettingsAutoRecordingEnum || (exports.MeetingCreate201ApplicationJsonSettingsAutoRecordingEnum = {}));
var MeetingCreate201ApplicationJsonSettingsBreakoutRoomRooms = /** @class */ (function (_super) {
    __extends(MeetingCreate201ApplicationJsonSettingsBreakoutRoomRooms, _super);
    function MeetingCreate201ApplicationJsonSettingsBreakoutRoomRooms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonSettingsBreakoutRoomRooms.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants" }),
        __metadata("design:type", Array)
    ], MeetingCreate201ApplicationJsonSettingsBreakoutRoomRooms.prototype, "participants", void 0);
    return MeetingCreate201ApplicationJsonSettingsBreakoutRoomRooms;
}(utils_1.SpeakeasyBase));
exports.MeetingCreate201ApplicationJsonSettingsBreakoutRoomRooms = MeetingCreate201ApplicationJsonSettingsBreakoutRoomRooms;
// MeetingCreate201ApplicationJsonSettingsBreakoutRoom
/**
 * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
**/
var MeetingCreate201ApplicationJsonSettingsBreakoutRoom = /** @class */ (function (_super) {
    __extends(MeetingCreate201ApplicationJsonSettingsBreakoutRoom, _super);
    function MeetingCreate201ApplicationJsonSettingsBreakoutRoom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], MeetingCreate201ApplicationJsonSettingsBreakoutRoom.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rooms", elemType: MeetingCreate201ApplicationJsonSettingsBreakoutRoomRooms }),
        __metadata("design:type", Array)
    ], MeetingCreate201ApplicationJsonSettingsBreakoutRoom.prototype, "rooms", void 0);
    return MeetingCreate201ApplicationJsonSettingsBreakoutRoom;
}(utils_1.SpeakeasyBase));
exports.MeetingCreate201ApplicationJsonSettingsBreakoutRoom = MeetingCreate201ApplicationJsonSettingsBreakoutRoom;
var MeetingCreate201ApplicationJsonSettingsCustomKeys = /** @class */ (function (_super) {
    __extends(MeetingCreate201ApplicationJsonSettingsCustomKeys, _super);
    function MeetingCreate201ApplicationJsonSettingsCustomKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonSettingsCustomKeys.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonSettingsCustomKeys.prototype, "value", void 0);
    return MeetingCreate201ApplicationJsonSettingsCustomKeys;
}(utils_1.SpeakeasyBase));
exports.MeetingCreate201ApplicationJsonSettingsCustomKeys = MeetingCreate201ApplicationJsonSettingsCustomKeys;
var MeetingCreate201ApplicationJsonSettingsEncryptionTypeEnum;
(function (MeetingCreate201ApplicationJsonSettingsEncryptionTypeEnum) {
    MeetingCreate201ApplicationJsonSettingsEncryptionTypeEnum["EnhancedEncryption"] = "enhanced_encryption";
    MeetingCreate201ApplicationJsonSettingsEncryptionTypeEnum["E2ee"] = "e2ee";
})(MeetingCreate201ApplicationJsonSettingsEncryptionTypeEnum = exports.MeetingCreate201ApplicationJsonSettingsEncryptionTypeEnum || (exports.MeetingCreate201ApplicationJsonSettingsEncryptionTypeEnum = {}));
var MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbersTypeEnum;
(function (MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbersTypeEnum) {
    MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbersTypeEnum["Toll"] = "toll";
    MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbersTypeEnum["Tollfree"] = "tollfree";
})(MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbersTypeEnum = exports.MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbersTypeEnum || (exports.MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbersTypeEnum = {}));
var MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbers = /** @class */ (function (_super) {
    __extends(MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbers, _super);
    function MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbers.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbers.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country_name" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbers.prototype, "countryName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbers.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbers.prototype, "type", void 0);
    return MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbers;
}(utils_1.SpeakeasyBase));
exports.MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbers = MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbers;
var MeetingCreate201ApplicationJsonSettingsLanguageInterpretationInterpreters = /** @class */ (function (_super) {
    __extends(MeetingCreate201ApplicationJsonSettingsLanguageInterpretationInterpreters, _super);
    function MeetingCreate201ApplicationJsonSettingsLanguageInterpretationInterpreters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonSettingsLanguageInterpretationInterpreters.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=languages" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonSettingsLanguageInterpretationInterpreters.prototype, "languages", void 0);
    return MeetingCreate201ApplicationJsonSettingsLanguageInterpretationInterpreters;
}(utils_1.SpeakeasyBase));
exports.MeetingCreate201ApplicationJsonSettingsLanguageInterpretationInterpreters = MeetingCreate201ApplicationJsonSettingsLanguageInterpretationInterpreters;
var MeetingCreate201ApplicationJsonSettingsLanguageInterpretation = /** @class */ (function (_super) {
    __extends(MeetingCreate201ApplicationJsonSettingsLanguageInterpretation, _super);
    function MeetingCreate201ApplicationJsonSettingsLanguageInterpretation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], MeetingCreate201ApplicationJsonSettingsLanguageInterpretation.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interpreters", elemType: MeetingCreate201ApplicationJsonSettingsLanguageInterpretationInterpreters }),
        __metadata("design:type", Array)
    ], MeetingCreate201ApplicationJsonSettingsLanguageInterpretation.prototype, "interpreters", void 0);
    return MeetingCreate201ApplicationJsonSettingsLanguageInterpretation;
}(utils_1.SpeakeasyBase));
exports.MeetingCreate201ApplicationJsonSettingsLanguageInterpretation = MeetingCreate201ApplicationJsonSettingsLanguageInterpretation;
// MeetingCreate201ApplicationJsonSettings
/**
 * Meeting settings.
**/
var MeetingCreate201ApplicationJsonSettings = /** @class */ (function (_super) {
    __extends(MeetingCreate201ApplicationJsonSettings, _super);
    function MeetingCreate201ApplicationJsonSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_multiple_devices" }),
        __metadata("design:type", Boolean)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "allowMultipleDevices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_hosts" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "alternativeHosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_hosts_email_notification" }),
        __metadata("design:type", Boolean)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "alternativeHostsEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approval_type" }),
        __metadata("design:type", Number)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "approvalType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approved_or_denied_countries_or_regions" }),
        __metadata("design:type", MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "approvedOrDeniedCountriesOrRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "audio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_domains" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "authenticationDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_exception", elemType: MeetingCreate201ApplicationJsonSettingsAuthenticationException }),
        __metadata("design:type", Array)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "authenticationException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_name" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "authenticationName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_option" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "authenticationOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_recording" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "autoRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=breakout_room" }),
        __metadata("design:type", MeetingCreate201ApplicationJsonSettingsBreakoutRoom)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "breakoutRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=close_registration" }),
        __metadata("design:type", Boolean)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "closeRegistration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cn_meeting" }),
        __metadata("design:type", Boolean)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "cnMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact_email" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "contactEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact_name" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "contactName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_keys", elemType: MeetingCreate201ApplicationJsonSettingsCustomKeys }),
        __metadata("design:type", Array)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "customKeys", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryption_type" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "encryptionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login" }),
        __metadata("design:type", Boolean)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "enforceLogin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login_domains" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "enforceLoginDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=global_dial_in_countries" }),
        __metadata("design:type", Array)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "globalDialInCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=global_dial_in_numbers", elemType: MeetingCreate201ApplicationJsonSettingsGlobalDialInNumbers }),
        __metadata("design:type", Array)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "globalDialInNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_video" }),
        __metadata("design:type", Boolean)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "hostVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=in_meeting" }),
        __metadata("design:type", Boolean)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "inMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jbh_time" }),
        __metadata("design:type", Number)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "jbhTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_before_host" }),
        __metadata("design:type", Boolean)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "joinBeforeHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=language_interpretation" }),
        __metadata("design:type", MeetingCreate201ApplicationJsonSettingsLanguageInterpretation)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "languageInterpretation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_authentication" }),
        __metadata("design:type", Boolean)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "meetingAuthentication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mute_upon_entry" }),
        __metadata("design:type", Boolean)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "muteUponEntry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participant_video" }),
        __metadata("design:type", Boolean)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "participantVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_confirmation_email" }),
        __metadata("design:type", Boolean)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "registrantsConfirmationEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_email_notification" }),
        __metadata("design:type", Boolean)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "registrantsEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registration_type" }),
        __metadata("design:type", Number)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "registrationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_share_button" }),
        __metadata("design:type", Boolean)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "showShareButton", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_pmi" }),
        __metadata("design:type", Boolean)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "usePmi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=watermark" }),
        __metadata("design:type", Boolean)
    ], MeetingCreate201ApplicationJsonSettings.prototype, "watermark", void 0);
    return MeetingCreate201ApplicationJsonSettings;
}(utils_1.SpeakeasyBase));
exports.MeetingCreate201ApplicationJsonSettings = MeetingCreate201ApplicationJsonSettings;
var MeetingCreate201ApplicationJsonTrackingFields = /** @class */ (function (_super) {
    __extends(MeetingCreate201ApplicationJsonTrackingFields, _super);
    function MeetingCreate201ApplicationJsonTrackingFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonTrackingFields.prototype, "field", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJsonTrackingFields.prototype, "value", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=visible" }),
        __metadata("design:type", Boolean)
    ], MeetingCreate201ApplicationJsonTrackingFields.prototype, "visible", void 0);
    return MeetingCreate201ApplicationJsonTrackingFields;
}(utils_1.SpeakeasyBase));
exports.MeetingCreate201ApplicationJsonTrackingFields = MeetingCreate201ApplicationJsonTrackingFields;
// MeetingCreate201ApplicationJson
/**
 * Meeting object
**/
var MeetingCreate201ApplicationJson = /** @class */ (function (_super) {
    __extends(MeetingCreate201ApplicationJson, _super);
    function MeetingCreate201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=agenda" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJson.prototype, "agenda", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assistant_id" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJson.prototype, "assistantId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], MeetingCreate201ApplicationJson.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], MeetingCreate201ApplicationJson.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=h323_password" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJson.prototype, "h323Password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_email" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJson.prototype, "hostEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], MeetingCreate201ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_url" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJson.prototype, "joinUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=occurrences", elemType: MeetingCreate201ApplicationJsonOccurrences }),
        __metadata("design:type", Array)
    ], MeetingCreate201ApplicationJson.prototype, "occurrences", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJson.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pmi" }),
        __metadata("design:type", Number)
    ], MeetingCreate201ApplicationJson.prototype, "pmi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurrence" }),
        __metadata("design:type", MeetingCreate201ApplicationJsonRecurrence)
    ], MeetingCreate201ApplicationJson.prototype, "recurrence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registration_url" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJson.prototype, "registrationUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", MeetingCreate201ApplicationJsonSettings)
    ], MeetingCreate201ApplicationJson.prototype, "settings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], MeetingCreate201ApplicationJson.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_url" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJson.prototype, "startUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJson.prototype, "timezone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], MeetingCreate201ApplicationJson.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tracking_fields", elemType: MeetingCreate201ApplicationJsonTrackingFields }),
        __metadata("design:type", Array)
    ], MeetingCreate201ApplicationJson.prototype, "trackingFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], MeetingCreate201ApplicationJson.prototype, "type", void 0);
    return MeetingCreate201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MeetingCreate201ApplicationJson = MeetingCreate201ApplicationJson;
var MeetingCreateRequest = /** @class */ (function (_super) {
    __extends(MeetingCreateRequest, _super);
    function MeetingCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingCreatePathParams)
    ], MeetingCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingCreateRequests)
    ], MeetingCreateRequest.prototype, "request", void 0);
    return MeetingCreateRequest;
}(utils_1.SpeakeasyBase));
exports.MeetingCreateRequest = MeetingCreateRequest;
var MeetingCreateResponse = /** @class */ (function (_super) {
    __extends(MeetingCreateResponse, _super);
    function MeetingCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], MeetingCreateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MeetingCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MeetingCreateResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MeetingCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingCreate201ApplicationJson)
    ], MeetingCreateResponse.prototype, "meetingCreate201ApplicationJSONObject", void 0);
    return MeetingCreateResponse;
}(utils_1.SpeakeasyBase));
exports.MeetingCreateResponse = MeetingCreateResponse;
