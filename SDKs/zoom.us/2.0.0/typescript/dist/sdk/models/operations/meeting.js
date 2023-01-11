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
exports.MeetingResponse = exports.MeetingRequest = exports.Meeting200ApplicationJson = exports.Meeting200ApplicationJsonTrackingFields = exports.Meeting200ApplicationJsonStatusEnum = exports.Meeting200ApplicationJsonSettings = exports.Meeting200ApplicationJsonSettingsLanguageInterpretation = exports.Meeting200ApplicationJsonSettingsLanguageInterpretationInterpreters = exports.Meeting200ApplicationJsonSettingsGlobalDialInNumbers = exports.Meeting200ApplicationJsonSettingsGlobalDialInNumbersTypeEnum = exports.Meeting200ApplicationJsonSettingsEncryptionTypeEnum = exports.Meeting200ApplicationJsonSettingsCustomKeys = exports.Meeting200ApplicationJsonSettingsBreakoutRoom = exports.Meeting200ApplicationJsonSettingsBreakoutRoomRooms = exports.Meeting200ApplicationJsonSettingsAutoRecordingEnum = exports.Meeting200ApplicationJsonSettingsAuthenticationException = exports.Meeting200ApplicationJsonSettingsAudioEnum = exports.Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions = exports.Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = exports.Meeting200ApplicationJsonRecurrence = exports.Meeting200ApplicationJsonRecurrenceWeeklyDaysEnum = exports.Meeting200ApplicationJsonOccurrences = exports.MeetingSecurity = exports.MeetingQueryParams = exports.MeetingPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MeetingPathParams = /** @class */ (function (_super) {
    __extends(MeetingPathParams, _super);
    function MeetingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", Number)
    ], MeetingPathParams.prototype, "meetingId", void 0);
    return MeetingPathParams;
}(utils_1.SpeakeasyBase));
exports.MeetingPathParams = MeetingPathParams;
var MeetingQueryParams = /** @class */ (function (_super) {
    __extends(MeetingQueryParams, _super);
    function MeetingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=occurrence_id" }),
        __metadata("design:type", String)
    ], MeetingQueryParams.prototype, "occurrenceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=show_previous_occurrences" }),
        __metadata("design:type", Boolean)
    ], MeetingQueryParams.prototype, "showPreviousOccurrences", void 0);
    return MeetingQueryParams;
}(utils_1.SpeakeasyBase));
exports.MeetingQueryParams = MeetingQueryParams;
var MeetingSecurity = /** @class */ (function (_super) {
    __extends(MeetingSecurity, _super);
    function MeetingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], MeetingSecurity.prototype, "oAuth", void 0);
    return MeetingSecurity;
}(utils_1.SpeakeasyBase));
exports.MeetingSecurity = MeetingSecurity;
// Meeting200ApplicationJsonOccurrences
/**
 * Occurence object. This object is only returned for Recurring Webinars.
**/
var Meeting200ApplicationJsonOccurrences = /** @class */ (function (_super) {
    __extends(Meeting200ApplicationJsonOccurrences, _super);
    function Meeting200ApplicationJsonOccurrences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], Meeting200ApplicationJsonOccurrences.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=occurrence_id" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonOccurrences.prototype, "occurrenceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], Meeting200ApplicationJsonOccurrences.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonOccurrences.prototype, "status", void 0);
    return Meeting200ApplicationJsonOccurrences;
}(utils_1.SpeakeasyBase));
exports.Meeting200ApplicationJsonOccurrences = Meeting200ApplicationJsonOccurrences;
var Meeting200ApplicationJsonRecurrenceWeeklyDaysEnum;
(function (Meeting200ApplicationJsonRecurrenceWeeklyDaysEnum) {
    Meeting200ApplicationJsonRecurrenceWeeklyDaysEnum["One"] = "1";
    Meeting200ApplicationJsonRecurrenceWeeklyDaysEnum["Two"] = "2";
    Meeting200ApplicationJsonRecurrenceWeeklyDaysEnum["Three"] = "3";
    Meeting200ApplicationJsonRecurrenceWeeklyDaysEnum["Four"] = "4";
    Meeting200ApplicationJsonRecurrenceWeeklyDaysEnum["Five"] = "5";
    Meeting200ApplicationJsonRecurrenceWeeklyDaysEnum["Six"] = "6";
    Meeting200ApplicationJsonRecurrenceWeeklyDaysEnum["Seven"] = "7";
})(Meeting200ApplicationJsonRecurrenceWeeklyDaysEnum = exports.Meeting200ApplicationJsonRecurrenceWeeklyDaysEnum || (exports.Meeting200ApplicationJsonRecurrenceWeeklyDaysEnum = {}));
// Meeting200ApplicationJsonRecurrence
/**
 * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
**/
var Meeting200ApplicationJsonRecurrence = /** @class */ (function (_super) {
    __extends(Meeting200ApplicationJsonRecurrence, _super);
    function Meeting200ApplicationJsonRecurrence() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_date_time" }),
        __metadata("design:type", Date)
    ], Meeting200ApplicationJsonRecurrence.prototype, "endDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_times" }),
        __metadata("design:type", Number)
    ], Meeting200ApplicationJsonRecurrence.prototype, "endTimes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_day" }),
        __metadata("design:type", Number)
    ], Meeting200ApplicationJsonRecurrence.prototype, "monthlyDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_week" }),
        __metadata("design:type", Number)
    ], Meeting200ApplicationJsonRecurrence.prototype, "monthlyWeek", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_week_day" }),
        __metadata("design:type", Number)
    ], Meeting200ApplicationJsonRecurrence.prototype, "monthlyWeekDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repeat_interval" }),
        __metadata("design:type", Number)
    ], Meeting200ApplicationJsonRecurrence.prototype, "repeatInterval", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], Meeting200ApplicationJsonRecurrence.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weekly_days" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonRecurrence.prototype, "weeklyDays", void 0);
    return Meeting200ApplicationJsonRecurrence;
}(utils_1.SpeakeasyBase));
exports.Meeting200ApplicationJsonRecurrence = Meeting200ApplicationJsonRecurrence;
var Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum;
(function (Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum) {
    Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum["Approve"] = "approve";
    Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum["Deny"] = "deny";
})(Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = exports.Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum || (exports.Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = {}));
// Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions
/**
 * Approve or block users from specific regions/countries from joining this meeting.
 *
**/
var Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions = /** @class */ (function (_super) {
    __extends(Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions, _super);
    function Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approved_list" }),
        __metadata("design:type", Array)
    ], Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions.prototype, "approvedList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=denied_list" }),
        __metadata("design:type", Array)
    ], Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions.prototype, "deniedList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions.prototype, "method", void 0);
    return Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions;
}(utils_1.SpeakeasyBase));
exports.Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions = Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions;
var Meeting200ApplicationJsonSettingsAudioEnum;
(function (Meeting200ApplicationJsonSettingsAudioEnum) {
    Meeting200ApplicationJsonSettingsAudioEnum["Both"] = "both";
    Meeting200ApplicationJsonSettingsAudioEnum["Telephony"] = "telephony";
    Meeting200ApplicationJsonSettingsAudioEnum["Voip"] = "voip";
})(Meeting200ApplicationJsonSettingsAudioEnum = exports.Meeting200ApplicationJsonSettingsAudioEnum || (exports.Meeting200ApplicationJsonSettingsAudioEnum = {}));
var Meeting200ApplicationJsonSettingsAuthenticationException = /** @class */ (function (_super) {
    __extends(Meeting200ApplicationJsonSettingsAuthenticationException, _super);
    function Meeting200ApplicationJsonSettingsAuthenticationException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonSettingsAuthenticationException.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonSettingsAuthenticationException.prototype, "name", void 0);
    return Meeting200ApplicationJsonSettingsAuthenticationException;
}(utils_1.SpeakeasyBase));
exports.Meeting200ApplicationJsonSettingsAuthenticationException = Meeting200ApplicationJsonSettingsAuthenticationException;
var Meeting200ApplicationJsonSettingsAutoRecordingEnum;
(function (Meeting200ApplicationJsonSettingsAutoRecordingEnum) {
    Meeting200ApplicationJsonSettingsAutoRecordingEnum["Local"] = "local";
    Meeting200ApplicationJsonSettingsAutoRecordingEnum["Cloud"] = "cloud";
    Meeting200ApplicationJsonSettingsAutoRecordingEnum["None"] = "none";
})(Meeting200ApplicationJsonSettingsAutoRecordingEnum = exports.Meeting200ApplicationJsonSettingsAutoRecordingEnum || (exports.Meeting200ApplicationJsonSettingsAutoRecordingEnum = {}));
var Meeting200ApplicationJsonSettingsBreakoutRoomRooms = /** @class */ (function (_super) {
    __extends(Meeting200ApplicationJsonSettingsBreakoutRoomRooms, _super);
    function Meeting200ApplicationJsonSettingsBreakoutRoomRooms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonSettingsBreakoutRoomRooms.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants" }),
        __metadata("design:type", Array)
    ], Meeting200ApplicationJsonSettingsBreakoutRoomRooms.prototype, "participants", void 0);
    return Meeting200ApplicationJsonSettingsBreakoutRoomRooms;
}(utils_1.SpeakeasyBase));
exports.Meeting200ApplicationJsonSettingsBreakoutRoomRooms = Meeting200ApplicationJsonSettingsBreakoutRoomRooms;
// Meeting200ApplicationJsonSettingsBreakoutRoom
/**
 * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
**/
var Meeting200ApplicationJsonSettingsBreakoutRoom = /** @class */ (function (_super) {
    __extends(Meeting200ApplicationJsonSettingsBreakoutRoom, _super);
    function Meeting200ApplicationJsonSettingsBreakoutRoom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], Meeting200ApplicationJsonSettingsBreakoutRoom.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rooms", elemType: Meeting200ApplicationJsonSettingsBreakoutRoomRooms }),
        __metadata("design:type", Array)
    ], Meeting200ApplicationJsonSettingsBreakoutRoom.prototype, "rooms", void 0);
    return Meeting200ApplicationJsonSettingsBreakoutRoom;
}(utils_1.SpeakeasyBase));
exports.Meeting200ApplicationJsonSettingsBreakoutRoom = Meeting200ApplicationJsonSettingsBreakoutRoom;
var Meeting200ApplicationJsonSettingsCustomKeys = /** @class */ (function (_super) {
    __extends(Meeting200ApplicationJsonSettingsCustomKeys, _super);
    function Meeting200ApplicationJsonSettingsCustomKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonSettingsCustomKeys.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonSettingsCustomKeys.prototype, "value", void 0);
    return Meeting200ApplicationJsonSettingsCustomKeys;
}(utils_1.SpeakeasyBase));
exports.Meeting200ApplicationJsonSettingsCustomKeys = Meeting200ApplicationJsonSettingsCustomKeys;
var Meeting200ApplicationJsonSettingsEncryptionTypeEnum;
(function (Meeting200ApplicationJsonSettingsEncryptionTypeEnum) {
    Meeting200ApplicationJsonSettingsEncryptionTypeEnum["EnhancedEncryption"] = "enhanced_encryption";
    Meeting200ApplicationJsonSettingsEncryptionTypeEnum["E2ee"] = "e2ee";
})(Meeting200ApplicationJsonSettingsEncryptionTypeEnum = exports.Meeting200ApplicationJsonSettingsEncryptionTypeEnum || (exports.Meeting200ApplicationJsonSettingsEncryptionTypeEnum = {}));
var Meeting200ApplicationJsonSettingsGlobalDialInNumbersTypeEnum;
(function (Meeting200ApplicationJsonSettingsGlobalDialInNumbersTypeEnum) {
    Meeting200ApplicationJsonSettingsGlobalDialInNumbersTypeEnum["Toll"] = "toll";
    Meeting200ApplicationJsonSettingsGlobalDialInNumbersTypeEnum["Tollfree"] = "tollfree";
})(Meeting200ApplicationJsonSettingsGlobalDialInNumbersTypeEnum = exports.Meeting200ApplicationJsonSettingsGlobalDialInNumbersTypeEnum || (exports.Meeting200ApplicationJsonSettingsGlobalDialInNumbersTypeEnum = {}));
var Meeting200ApplicationJsonSettingsGlobalDialInNumbers = /** @class */ (function (_super) {
    __extends(Meeting200ApplicationJsonSettingsGlobalDialInNumbers, _super);
    function Meeting200ApplicationJsonSettingsGlobalDialInNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonSettingsGlobalDialInNumbers.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonSettingsGlobalDialInNumbers.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country_name" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonSettingsGlobalDialInNumbers.prototype, "countryName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonSettingsGlobalDialInNumbers.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonSettingsGlobalDialInNumbers.prototype, "type", void 0);
    return Meeting200ApplicationJsonSettingsGlobalDialInNumbers;
}(utils_1.SpeakeasyBase));
exports.Meeting200ApplicationJsonSettingsGlobalDialInNumbers = Meeting200ApplicationJsonSettingsGlobalDialInNumbers;
var Meeting200ApplicationJsonSettingsLanguageInterpretationInterpreters = /** @class */ (function (_super) {
    __extends(Meeting200ApplicationJsonSettingsLanguageInterpretationInterpreters, _super);
    function Meeting200ApplicationJsonSettingsLanguageInterpretationInterpreters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonSettingsLanguageInterpretationInterpreters.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=languages" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonSettingsLanguageInterpretationInterpreters.prototype, "languages", void 0);
    return Meeting200ApplicationJsonSettingsLanguageInterpretationInterpreters;
}(utils_1.SpeakeasyBase));
exports.Meeting200ApplicationJsonSettingsLanguageInterpretationInterpreters = Meeting200ApplicationJsonSettingsLanguageInterpretationInterpreters;
var Meeting200ApplicationJsonSettingsLanguageInterpretation = /** @class */ (function (_super) {
    __extends(Meeting200ApplicationJsonSettingsLanguageInterpretation, _super);
    function Meeting200ApplicationJsonSettingsLanguageInterpretation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], Meeting200ApplicationJsonSettingsLanguageInterpretation.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interpreters", elemType: Meeting200ApplicationJsonSettingsLanguageInterpretationInterpreters }),
        __metadata("design:type", Array)
    ], Meeting200ApplicationJsonSettingsLanguageInterpretation.prototype, "interpreters", void 0);
    return Meeting200ApplicationJsonSettingsLanguageInterpretation;
}(utils_1.SpeakeasyBase));
exports.Meeting200ApplicationJsonSettingsLanguageInterpretation = Meeting200ApplicationJsonSettingsLanguageInterpretation;
// Meeting200ApplicationJsonSettings
/**
 * Meeting settings.
**/
var Meeting200ApplicationJsonSettings = /** @class */ (function (_super) {
    __extends(Meeting200ApplicationJsonSettings, _super);
    function Meeting200ApplicationJsonSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_multiple_devices" }),
        __metadata("design:type", Boolean)
    ], Meeting200ApplicationJsonSettings.prototype, "allowMultipleDevices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_hosts" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonSettings.prototype, "alternativeHosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_hosts_email_notification" }),
        __metadata("design:type", Boolean)
    ], Meeting200ApplicationJsonSettings.prototype, "alternativeHostsEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approval_type" }),
        __metadata("design:type", Number)
    ], Meeting200ApplicationJsonSettings.prototype, "approvalType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approved_or_denied_countries_or_regions" }),
        __metadata("design:type", Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions)
    ], Meeting200ApplicationJsonSettings.prototype, "approvedOrDeniedCountriesOrRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonSettings.prototype, "audio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_domains" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonSettings.prototype, "authenticationDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_exception", elemType: Meeting200ApplicationJsonSettingsAuthenticationException }),
        __metadata("design:type", Array)
    ], Meeting200ApplicationJsonSettings.prototype, "authenticationException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_name" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonSettings.prototype, "authenticationName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_option" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonSettings.prototype, "authenticationOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_recording" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonSettings.prototype, "autoRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=breakout_room" }),
        __metadata("design:type", Meeting200ApplicationJsonSettingsBreakoutRoom)
    ], Meeting200ApplicationJsonSettings.prototype, "breakoutRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=close_registration" }),
        __metadata("design:type", Boolean)
    ], Meeting200ApplicationJsonSettings.prototype, "closeRegistration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cn_meeting" }),
        __metadata("design:type", Boolean)
    ], Meeting200ApplicationJsonSettings.prototype, "cnMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact_email" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonSettings.prototype, "contactEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact_name" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonSettings.prototype, "contactName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_keys", elemType: Meeting200ApplicationJsonSettingsCustomKeys }),
        __metadata("design:type", Array)
    ], Meeting200ApplicationJsonSettings.prototype, "customKeys", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryption_type" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonSettings.prototype, "encryptionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login" }),
        __metadata("design:type", Boolean)
    ], Meeting200ApplicationJsonSettings.prototype, "enforceLogin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login_domains" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonSettings.prototype, "enforceLoginDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=global_dial_in_countries" }),
        __metadata("design:type", Array)
    ], Meeting200ApplicationJsonSettings.prototype, "globalDialInCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=global_dial_in_numbers", elemType: Meeting200ApplicationJsonSettingsGlobalDialInNumbers }),
        __metadata("design:type", Array)
    ], Meeting200ApplicationJsonSettings.prototype, "globalDialInNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_video" }),
        __metadata("design:type", Boolean)
    ], Meeting200ApplicationJsonSettings.prototype, "hostVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=in_meeting" }),
        __metadata("design:type", Boolean)
    ], Meeting200ApplicationJsonSettings.prototype, "inMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jbh_time" }),
        __metadata("design:type", Number)
    ], Meeting200ApplicationJsonSettings.prototype, "jbhTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_before_host" }),
        __metadata("design:type", Boolean)
    ], Meeting200ApplicationJsonSettings.prototype, "joinBeforeHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=language_interpretation" }),
        __metadata("design:type", Meeting200ApplicationJsonSettingsLanguageInterpretation)
    ], Meeting200ApplicationJsonSettings.prototype, "languageInterpretation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_authentication" }),
        __metadata("design:type", Boolean)
    ], Meeting200ApplicationJsonSettings.prototype, "meetingAuthentication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mute_upon_entry" }),
        __metadata("design:type", Boolean)
    ], Meeting200ApplicationJsonSettings.prototype, "muteUponEntry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participant_video" }),
        __metadata("design:type", Boolean)
    ], Meeting200ApplicationJsonSettings.prototype, "participantVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_confirmation_email" }),
        __metadata("design:type", Boolean)
    ], Meeting200ApplicationJsonSettings.prototype, "registrantsConfirmationEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_email_notification" }),
        __metadata("design:type", Boolean)
    ], Meeting200ApplicationJsonSettings.prototype, "registrantsEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registration_type" }),
        __metadata("design:type", Number)
    ], Meeting200ApplicationJsonSettings.prototype, "registrationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_share_button" }),
        __metadata("design:type", Boolean)
    ], Meeting200ApplicationJsonSettings.prototype, "showShareButton", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_pmi" }),
        __metadata("design:type", Boolean)
    ], Meeting200ApplicationJsonSettings.prototype, "usePmi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], Meeting200ApplicationJsonSettings.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=watermark" }),
        __metadata("design:type", Boolean)
    ], Meeting200ApplicationJsonSettings.prototype, "watermark", void 0);
    return Meeting200ApplicationJsonSettings;
}(utils_1.SpeakeasyBase));
exports.Meeting200ApplicationJsonSettings = Meeting200ApplicationJsonSettings;
var Meeting200ApplicationJsonStatusEnum;
(function (Meeting200ApplicationJsonStatusEnum) {
    Meeting200ApplicationJsonStatusEnum["Waiting"] = "waiting";
    Meeting200ApplicationJsonStatusEnum["Started"] = "started";
})(Meeting200ApplicationJsonStatusEnum = exports.Meeting200ApplicationJsonStatusEnum || (exports.Meeting200ApplicationJsonStatusEnum = {}));
var Meeting200ApplicationJsonTrackingFields = /** @class */ (function (_super) {
    __extends(Meeting200ApplicationJsonTrackingFields, _super);
    function Meeting200ApplicationJsonTrackingFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonTrackingFields.prototype, "field", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJsonTrackingFields.prototype, "value", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=visible" }),
        __metadata("design:type", Boolean)
    ], Meeting200ApplicationJsonTrackingFields.prototype, "visible", void 0);
    return Meeting200ApplicationJsonTrackingFields;
}(utils_1.SpeakeasyBase));
exports.Meeting200ApplicationJsonTrackingFields = Meeting200ApplicationJsonTrackingFields;
// Meeting200ApplicationJson
/**
 * Meeting object.
**/
var Meeting200ApplicationJson = /** @class */ (function (_super) {
    __extends(Meeting200ApplicationJson, _super);
    function Meeting200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=agenda" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJson.prototype, "agenda", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assistant_id" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJson.prototype, "assistantId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Meeting200ApplicationJson.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], Meeting200ApplicationJson.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encrypted_password" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJson.prototype, "encryptedPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=h323_password" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJson.prototype, "h323Password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_email" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJson.prototype, "hostEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_id" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJson.prototype, "hostId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Meeting200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_url" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJson.prototype, "joinUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=occurrences", elemType: Meeting200ApplicationJsonOccurrences }),
        __metadata("design:type", Array)
    ], Meeting200ApplicationJson.prototype, "occurrences", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJson.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pmi" }),
        __metadata("design:type", Number)
    ], Meeting200ApplicationJson.prototype, "pmi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurrence" }),
        __metadata("design:type", Meeting200ApplicationJsonRecurrence)
    ], Meeting200ApplicationJson.prototype, "recurrence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", Meeting200ApplicationJsonSettings)
    ], Meeting200ApplicationJson.prototype, "settings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], Meeting200ApplicationJson.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_url" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJson.prototype, "startUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJson.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJson.prototype, "timezone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJson.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tracking_fields", elemType: Meeting200ApplicationJsonTrackingFields }),
        __metadata("design:type", Array)
    ], Meeting200ApplicationJson.prototype, "trackingFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], Meeting200ApplicationJson.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], Meeting200ApplicationJson.prototype, "uuid", void 0);
    return Meeting200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Meeting200ApplicationJson = Meeting200ApplicationJson;
var MeetingRequest = /** @class */ (function (_super) {
    __extends(MeetingRequest, _super);
    function MeetingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingPathParams)
    ], MeetingRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingQueryParams)
    ], MeetingRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingSecurity)
    ], MeetingRequest.prototype, "security", void 0);
    return MeetingRequest;
}(utils_1.SpeakeasyBase));
exports.MeetingRequest = MeetingRequest;
var MeetingResponse = /** @class */ (function (_super) {
    __extends(MeetingResponse, _super);
    function MeetingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], MeetingResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MeetingResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MeetingResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Meeting200ApplicationJson)
    ], MeetingResponse.prototype, "meeting200ApplicationJSONObject", void 0);
    return MeetingResponse;
}(utils_1.SpeakeasyBase));
exports.MeetingResponse = MeetingResponse;
