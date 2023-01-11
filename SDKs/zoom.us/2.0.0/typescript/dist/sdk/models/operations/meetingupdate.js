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
exports.MeetingUpdateResponse = exports.MeetingUpdateRequest = exports.MeetingUpdateSecurity = exports.MeetingUpdateRequests = exports.MeetingUpdateMultipartFormData1 = exports.MeetingUpdateMultipartFormDataTrackingFields = exports.MeetingUpdateMultipartFormDataSettings = exports.MeetingUpdateMultipartFormDataSettingsLanguageInterpretation = exports.MeetingUpdateMultipartFormDataSettingsLanguageInterpretationInterpreters = exports.MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers = exports.MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbersTypeEnum = exports.MeetingUpdateMultipartFormDataSettingsEncryptionTypeEnum = exports.MeetingUpdateMultipartFormDataSettingsCustomKeys = exports.MeetingUpdateMultipartFormDataSettingsBreakoutRoom = exports.MeetingUpdateMultipartFormDataSettingsBreakoutRoomRooms = exports.MeetingUpdateMultipartFormDataSettingsAutoRecordingEnum = exports.MeetingUpdateMultipartFormDataSettingsAuthenticationException = exports.MeetingUpdateMultipartFormDataSettingsAudioEnum = exports.MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions = exports.MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = exports.MeetingUpdateMultipartFormDataRecurrence = exports.MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum = exports.MeetingUpdateApplicationJson = exports.MeetingUpdateApplicationJsonTrackingFields = exports.MeetingUpdateApplicationJsonSettings = exports.MeetingUpdateApplicationJsonSettingsLanguageInterpretation = exports.MeetingUpdateApplicationJsonSettingsLanguageInterpretationInterpreters = exports.MeetingUpdateApplicationJsonSettingsGlobalDialInNumbers = exports.MeetingUpdateApplicationJsonSettingsGlobalDialInNumbersTypeEnum = exports.MeetingUpdateApplicationJsonSettingsEncryptionTypeEnum = exports.MeetingUpdateApplicationJsonSettingsCustomKeys = exports.MeetingUpdateApplicationJsonSettingsBreakoutRoom = exports.MeetingUpdateApplicationJsonSettingsBreakoutRoomRooms = exports.MeetingUpdateApplicationJsonSettingsAutoRecordingEnum = exports.MeetingUpdateApplicationJsonSettingsAuthenticationException = exports.MeetingUpdateApplicationJsonSettingsAudioEnum = exports.MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions = exports.MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = exports.MeetingUpdateApplicationJsonRecurrence = exports.MeetingUpdateApplicationJsonRecurrenceWeeklyDaysEnum = exports.MeetingUpdateQueryParams = exports.MeetingUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MeetingUpdatePathParams = /** @class */ (function (_super) {
    __extends(MeetingUpdatePathParams, _super);
    function MeetingUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", Number)
    ], MeetingUpdatePathParams.prototype, "meetingId", void 0);
    return MeetingUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdatePathParams = MeetingUpdatePathParams;
var MeetingUpdateQueryParams = /** @class */ (function (_super) {
    __extends(MeetingUpdateQueryParams, _super);
    function MeetingUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=occurrence_id" }),
        __metadata("design:type", String)
    ], MeetingUpdateQueryParams.prototype, "occurrenceId", void 0);
    return MeetingUpdateQueryParams;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateQueryParams = MeetingUpdateQueryParams;
var MeetingUpdateApplicationJsonRecurrenceWeeklyDaysEnum;
(function (MeetingUpdateApplicationJsonRecurrenceWeeklyDaysEnum) {
    MeetingUpdateApplicationJsonRecurrenceWeeklyDaysEnum["One"] = "1";
    MeetingUpdateApplicationJsonRecurrenceWeeklyDaysEnum["Two"] = "2";
    MeetingUpdateApplicationJsonRecurrenceWeeklyDaysEnum["Three"] = "3";
    MeetingUpdateApplicationJsonRecurrenceWeeklyDaysEnum["Four"] = "4";
    MeetingUpdateApplicationJsonRecurrenceWeeklyDaysEnum["Five"] = "5";
    MeetingUpdateApplicationJsonRecurrenceWeeklyDaysEnum["Six"] = "6";
    MeetingUpdateApplicationJsonRecurrenceWeeklyDaysEnum["Seven"] = "7";
})(MeetingUpdateApplicationJsonRecurrenceWeeklyDaysEnum = exports.MeetingUpdateApplicationJsonRecurrenceWeeklyDaysEnum || (exports.MeetingUpdateApplicationJsonRecurrenceWeeklyDaysEnum = {}));
// MeetingUpdateApplicationJsonRecurrence
/**
 * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
**/
var MeetingUpdateApplicationJsonRecurrence = /** @class */ (function (_super) {
    __extends(MeetingUpdateApplicationJsonRecurrence, _super);
    function MeetingUpdateApplicationJsonRecurrence() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_date_time" }),
        __metadata("design:type", Date)
    ], MeetingUpdateApplicationJsonRecurrence.prototype, "endDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_times" }),
        __metadata("design:type", Number)
    ], MeetingUpdateApplicationJsonRecurrence.prototype, "endTimes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_day" }),
        __metadata("design:type", Number)
    ], MeetingUpdateApplicationJsonRecurrence.prototype, "monthlyDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_week" }),
        __metadata("design:type", Number)
    ], MeetingUpdateApplicationJsonRecurrence.prototype, "monthlyWeek", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_week_day" }),
        __metadata("design:type", Number)
    ], MeetingUpdateApplicationJsonRecurrence.prototype, "monthlyWeekDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repeat_interval" }),
        __metadata("design:type", Number)
    ], MeetingUpdateApplicationJsonRecurrence.prototype, "repeatInterval", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], MeetingUpdateApplicationJsonRecurrence.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weekly_days" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJsonRecurrence.prototype, "weeklyDays", void 0);
    return MeetingUpdateApplicationJsonRecurrence;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateApplicationJsonRecurrence = MeetingUpdateApplicationJsonRecurrence;
var MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum;
(function (MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum) {
    MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum["Approve"] = "approve";
    MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum["Deny"] = "deny";
})(MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = exports.MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum || (exports.MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = {}));
// MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions
/**
 * Approve or block users from specific regions/countries from joining this meeting.
 *
**/
var MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions = /** @class */ (function (_super) {
    __extends(MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions, _super);
    function MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approved_list" }),
        __metadata("design:type", Array)
    ], MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions.prototype, "approvedList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=denied_list" }),
        __metadata("design:type", Array)
    ], MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions.prototype, "deniedList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions.prototype, "method", void 0);
    return MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions = MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions;
var MeetingUpdateApplicationJsonSettingsAudioEnum;
(function (MeetingUpdateApplicationJsonSettingsAudioEnum) {
    MeetingUpdateApplicationJsonSettingsAudioEnum["Both"] = "both";
    MeetingUpdateApplicationJsonSettingsAudioEnum["Telephony"] = "telephony";
    MeetingUpdateApplicationJsonSettingsAudioEnum["Voip"] = "voip";
})(MeetingUpdateApplicationJsonSettingsAudioEnum = exports.MeetingUpdateApplicationJsonSettingsAudioEnum || (exports.MeetingUpdateApplicationJsonSettingsAudioEnum = {}));
var MeetingUpdateApplicationJsonSettingsAuthenticationException = /** @class */ (function (_super) {
    __extends(MeetingUpdateApplicationJsonSettingsAuthenticationException, _super);
    function MeetingUpdateApplicationJsonSettingsAuthenticationException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJsonSettingsAuthenticationException.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJsonSettingsAuthenticationException.prototype, "name", void 0);
    return MeetingUpdateApplicationJsonSettingsAuthenticationException;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateApplicationJsonSettingsAuthenticationException = MeetingUpdateApplicationJsonSettingsAuthenticationException;
var MeetingUpdateApplicationJsonSettingsAutoRecordingEnum;
(function (MeetingUpdateApplicationJsonSettingsAutoRecordingEnum) {
    MeetingUpdateApplicationJsonSettingsAutoRecordingEnum["Local"] = "local";
    MeetingUpdateApplicationJsonSettingsAutoRecordingEnum["Cloud"] = "cloud";
    MeetingUpdateApplicationJsonSettingsAutoRecordingEnum["None"] = "none";
})(MeetingUpdateApplicationJsonSettingsAutoRecordingEnum = exports.MeetingUpdateApplicationJsonSettingsAutoRecordingEnum || (exports.MeetingUpdateApplicationJsonSettingsAutoRecordingEnum = {}));
var MeetingUpdateApplicationJsonSettingsBreakoutRoomRooms = /** @class */ (function (_super) {
    __extends(MeetingUpdateApplicationJsonSettingsBreakoutRoomRooms, _super);
    function MeetingUpdateApplicationJsonSettingsBreakoutRoomRooms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJsonSettingsBreakoutRoomRooms.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants" }),
        __metadata("design:type", Array)
    ], MeetingUpdateApplicationJsonSettingsBreakoutRoomRooms.prototype, "participants", void 0);
    return MeetingUpdateApplicationJsonSettingsBreakoutRoomRooms;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateApplicationJsonSettingsBreakoutRoomRooms = MeetingUpdateApplicationJsonSettingsBreakoutRoomRooms;
// MeetingUpdateApplicationJsonSettingsBreakoutRoom
/**
 * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
**/
var MeetingUpdateApplicationJsonSettingsBreakoutRoom = /** @class */ (function (_super) {
    __extends(MeetingUpdateApplicationJsonSettingsBreakoutRoom, _super);
    function MeetingUpdateApplicationJsonSettingsBreakoutRoom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateApplicationJsonSettingsBreakoutRoom.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rooms", elemType: MeetingUpdateApplicationJsonSettingsBreakoutRoomRooms }),
        __metadata("design:type", Array)
    ], MeetingUpdateApplicationJsonSettingsBreakoutRoom.prototype, "rooms", void 0);
    return MeetingUpdateApplicationJsonSettingsBreakoutRoom;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateApplicationJsonSettingsBreakoutRoom = MeetingUpdateApplicationJsonSettingsBreakoutRoom;
var MeetingUpdateApplicationJsonSettingsCustomKeys = /** @class */ (function (_super) {
    __extends(MeetingUpdateApplicationJsonSettingsCustomKeys, _super);
    function MeetingUpdateApplicationJsonSettingsCustomKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJsonSettingsCustomKeys.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJsonSettingsCustomKeys.prototype, "value", void 0);
    return MeetingUpdateApplicationJsonSettingsCustomKeys;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateApplicationJsonSettingsCustomKeys = MeetingUpdateApplicationJsonSettingsCustomKeys;
var MeetingUpdateApplicationJsonSettingsEncryptionTypeEnum;
(function (MeetingUpdateApplicationJsonSettingsEncryptionTypeEnum) {
    MeetingUpdateApplicationJsonSettingsEncryptionTypeEnum["EnhancedEncryption"] = "enhanced_encryption";
    MeetingUpdateApplicationJsonSettingsEncryptionTypeEnum["E2ee"] = "e2ee";
})(MeetingUpdateApplicationJsonSettingsEncryptionTypeEnum = exports.MeetingUpdateApplicationJsonSettingsEncryptionTypeEnum || (exports.MeetingUpdateApplicationJsonSettingsEncryptionTypeEnum = {}));
var MeetingUpdateApplicationJsonSettingsGlobalDialInNumbersTypeEnum;
(function (MeetingUpdateApplicationJsonSettingsGlobalDialInNumbersTypeEnum) {
    MeetingUpdateApplicationJsonSettingsGlobalDialInNumbersTypeEnum["Toll"] = "toll";
    MeetingUpdateApplicationJsonSettingsGlobalDialInNumbersTypeEnum["Tollfree"] = "tollfree";
})(MeetingUpdateApplicationJsonSettingsGlobalDialInNumbersTypeEnum = exports.MeetingUpdateApplicationJsonSettingsGlobalDialInNumbersTypeEnum || (exports.MeetingUpdateApplicationJsonSettingsGlobalDialInNumbersTypeEnum = {}));
var MeetingUpdateApplicationJsonSettingsGlobalDialInNumbers = /** @class */ (function (_super) {
    __extends(MeetingUpdateApplicationJsonSettingsGlobalDialInNumbers, _super);
    function MeetingUpdateApplicationJsonSettingsGlobalDialInNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJsonSettingsGlobalDialInNumbers.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJsonSettingsGlobalDialInNumbers.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country_name" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJsonSettingsGlobalDialInNumbers.prototype, "countryName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJsonSettingsGlobalDialInNumbers.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJsonSettingsGlobalDialInNumbers.prototype, "type", void 0);
    return MeetingUpdateApplicationJsonSettingsGlobalDialInNumbers;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateApplicationJsonSettingsGlobalDialInNumbers = MeetingUpdateApplicationJsonSettingsGlobalDialInNumbers;
var MeetingUpdateApplicationJsonSettingsLanguageInterpretationInterpreters = /** @class */ (function (_super) {
    __extends(MeetingUpdateApplicationJsonSettingsLanguageInterpretationInterpreters, _super);
    function MeetingUpdateApplicationJsonSettingsLanguageInterpretationInterpreters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJsonSettingsLanguageInterpretationInterpreters.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=languages" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJsonSettingsLanguageInterpretationInterpreters.prototype, "languages", void 0);
    return MeetingUpdateApplicationJsonSettingsLanguageInterpretationInterpreters;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateApplicationJsonSettingsLanguageInterpretationInterpreters = MeetingUpdateApplicationJsonSettingsLanguageInterpretationInterpreters;
var MeetingUpdateApplicationJsonSettingsLanguageInterpretation = /** @class */ (function (_super) {
    __extends(MeetingUpdateApplicationJsonSettingsLanguageInterpretation, _super);
    function MeetingUpdateApplicationJsonSettingsLanguageInterpretation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateApplicationJsonSettingsLanguageInterpretation.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interpreters", elemType: MeetingUpdateApplicationJsonSettingsLanguageInterpretationInterpreters }),
        __metadata("design:type", Array)
    ], MeetingUpdateApplicationJsonSettingsLanguageInterpretation.prototype, "interpreters", void 0);
    return MeetingUpdateApplicationJsonSettingsLanguageInterpretation;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateApplicationJsonSettingsLanguageInterpretation = MeetingUpdateApplicationJsonSettingsLanguageInterpretation;
// MeetingUpdateApplicationJsonSettings
/**
 * Meeting settings.
**/
var MeetingUpdateApplicationJsonSettings = /** @class */ (function (_super) {
    __extends(MeetingUpdateApplicationJsonSettings, _super);
    function MeetingUpdateApplicationJsonSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_multiple_devices" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateApplicationJsonSettings.prototype, "allowMultipleDevices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_hosts" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJsonSettings.prototype, "alternativeHosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_hosts_email_notification" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateApplicationJsonSettings.prototype, "alternativeHostsEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approval_type" }),
        __metadata("design:type", Number)
    ], MeetingUpdateApplicationJsonSettings.prototype, "approvalType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approved_or_denied_countries_or_regions" }),
        __metadata("design:type", MeetingUpdateApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions)
    ], MeetingUpdateApplicationJsonSettings.prototype, "approvedOrDeniedCountriesOrRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJsonSettings.prototype, "audio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_domains" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJsonSettings.prototype, "authenticationDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_exception", elemType: MeetingUpdateApplicationJsonSettingsAuthenticationException }),
        __metadata("design:type", Array)
    ], MeetingUpdateApplicationJsonSettings.prototype, "authenticationException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_name" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJsonSettings.prototype, "authenticationName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_option" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJsonSettings.prototype, "authenticationOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_recording" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJsonSettings.prototype, "autoRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=breakout_room" }),
        __metadata("design:type", MeetingUpdateApplicationJsonSettingsBreakoutRoom)
    ], MeetingUpdateApplicationJsonSettings.prototype, "breakoutRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=close_registration" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateApplicationJsonSettings.prototype, "closeRegistration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cn_meeting" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateApplicationJsonSettings.prototype, "cnMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact_email" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJsonSettings.prototype, "contactEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact_name" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJsonSettings.prototype, "contactName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_keys", elemType: MeetingUpdateApplicationJsonSettingsCustomKeys }),
        __metadata("design:type", Array)
    ], MeetingUpdateApplicationJsonSettings.prototype, "customKeys", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryption_type" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJsonSettings.prototype, "encryptionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateApplicationJsonSettings.prototype, "enforceLogin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login_domains" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJsonSettings.prototype, "enforceLoginDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=global_dial_in_countries" }),
        __metadata("design:type", Array)
    ], MeetingUpdateApplicationJsonSettings.prototype, "globalDialInCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=global_dial_in_numbers", elemType: MeetingUpdateApplicationJsonSettingsGlobalDialInNumbers }),
        __metadata("design:type", Array)
    ], MeetingUpdateApplicationJsonSettings.prototype, "globalDialInNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_video" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateApplicationJsonSettings.prototype, "hostVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=in_meeting" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateApplicationJsonSettings.prototype, "inMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jbh_time" }),
        __metadata("design:type", Number)
    ], MeetingUpdateApplicationJsonSettings.prototype, "jbhTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_before_host" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateApplicationJsonSettings.prototype, "joinBeforeHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=language_interpretation" }),
        __metadata("design:type", MeetingUpdateApplicationJsonSettingsLanguageInterpretation)
    ], MeetingUpdateApplicationJsonSettings.prototype, "languageInterpretation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_authentication" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateApplicationJsonSettings.prototype, "meetingAuthentication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mute_upon_entry" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateApplicationJsonSettings.prototype, "muteUponEntry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participant_video" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateApplicationJsonSettings.prototype, "participantVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_confirmation_email" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateApplicationJsonSettings.prototype, "registrantsConfirmationEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_email_notification" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateApplicationJsonSettings.prototype, "registrantsEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registration_type" }),
        __metadata("design:type", Number)
    ], MeetingUpdateApplicationJsonSettings.prototype, "registrationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_share_button" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateApplicationJsonSettings.prototype, "showShareButton", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_pmi" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateApplicationJsonSettings.prototype, "usePmi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateApplicationJsonSettings.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=watermark" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateApplicationJsonSettings.prototype, "watermark", void 0);
    return MeetingUpdateApplicationJsonSettings;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateApplicationJsonSettings = MeetingUpdateApplicationJsonSettings;
var MeetingUpdateApplicationJsonTrackingFields = /** @class */ (function (_super) {
    __extends(MeetingUpdateApplicationJsonTrackingFields, _super);
    function MeetingUpdateApplicationJsonTrackingFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJsonTrackingFields.prototype, "field", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJsonTrackingFields.prototype, "value", void 0);
    return MeetingUpdateApplicationJsonTrackingFields;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateApplicationJsonTrackingFields = MeetingUpdateApplicationJsonTrackingFields;
// MeetingUpdateApplicationJson
/**
 * Base object for sessions.
**/
var MeetingUpdateApplicationJson = /** @class */ (function (_super) {
    __extends(MeetingUpdateApplicationJson, _super);
    function MeetingUpdateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=agenda" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJson.prototype, "agenda", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], MeetingUpdateApplicationJson.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJson.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurrence" }),
        __metadata("design:type", MeetingUpdateApplicationJsonRecurrence)
    ], MeetingUpdateApplicationJson.prototype, "recurrence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule_for" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJson.prototype, "scheduleFor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", MeetingUpdateApplicationJsonSettings)
    ], MeetingUpdateApplicationJson.prototype, "settings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], MeetingUpdateApplicationJson.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=template_id" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJson.prototype, "templateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJson.prototype, "timezone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], MeetingUpdateApplicationJson.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tracking_fields", elemType: MeetingUpdateApplicationJsonTrackingFields }),
        __metadata("design:type", Array)
    ], MeetingUpdateApplicationJson.prototype, "trackingFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], MeetingUpdateApplicationJson.prototype, "type", void 0);
    return MeetingUpdateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateApplicationJson = MeetingUpdateApplicationJson;
var MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum;
(function (MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum) {
    MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum["One"] = "1";
    MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum["Two"] = "2";
    MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum["Three"] = "3";
    MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum["Four"] = "4";
    MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum["Five"] = "5";
    MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum["Six"] = "6";
    MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum["Seven"] = "7";
})(MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum = exports.MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum || (exports.MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum = {}));
// MeetingUpdateMultipartFormDataRecurrence
/**
 * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
**/
var MeetingUpdateMultipartFormDataRecurrence = /** @class */ (function (_super) {
    __extends(MeetingUpdateMultipartFormDataRecurrence, _super);
    function MeetingUpdateMultipartFormDataRecurrence() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_date_time" }),
        __metadata("design:type", Date)
    ], MeetingUpdateMultipartFormDataRecurrence.prototype, "endDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_times" }),
        __metadata("design:type", Number)
    ], MeetingUpdateMultipartFormDataRecurrence.prototype, "endTimes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_day" }),
        __metadata("design:type", Number)
    ], MeetingUpdateMultipartFormDataRecurrence.prototype, "monthlyDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_week" }),
        __metadata("design:type", Number)
    ], MeetingUpdateMultipartFormDataRecurrence.prototype, "monthlyWeek", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_week_day" }),
        __metadata("design:type", Number)
    ], MeetingUpdateMultipartFormDataRecurrence.prototype, "monthlyWeekDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repeat_interval" }),
        __metadata("design:type", Number)
    ], MeetingUpdateMultipartFormDataRecurrence.prototype, "repeatInterval", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], MeetingUpdateMultipartFormDataRecurrence.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weekly_days" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormDataRecurrence.prototype, "weeklyDays", void 0);
    return MeetingUpdateMultipartFormDataRecurrence;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateMultipartFormDataRecurrence = MeetingUpdateMultipartFormDataRecurrence;
var MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum;
(function (MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum) {
    MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum["Approve"] = "approve";
    MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum["Deny"] = "deny";
})(MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = exports.MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum || (exports.MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum = {}));
// MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions
/**
 * Approve or block users from specific regions/countries from joining this meeting.
 *
**/
var MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions = /** @class */ (function (_super) {
    __extends(MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions, _super);
    function MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approved_list" }),
        __metadata("design:type", Array)
    ], MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions.prototype, "approvedList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=denied_list" }),
        __metadata("design:type", Array)
    ], MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions.prototype, "deniedList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions.prototype, "method", void 0);
    return MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions = MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions;
var MeetingUpdateMultipartFormDataSettingsAudioEnum;
(function (MeetingUpdateMultipartFormDataSettingsAudioEnum) {
    MeetingUpdateMultipartFormDataSettingsAudioEnum["Both"] = "both";
    MeetingUpdateMultipartFormDataSettingsAudioEnum["Telephony"] = "telephony";
    MeetingUpdateMultipartFormDataSettingsAudioEnum["Voip"] = "voip";
})(MeetingUpdateMultipartFormDataSettingsAudioEnum = exports.MeetingUpdateMultipartFormDataSettingsAudioEnum || (exports.MeetingUpdateMultipartFormDataSettingsAudioEnum = {}));
var MeetingUpdateMultipartFormDataSettingsAuthenticationException = /** @class */ (function (_super) {
    __extends(MeetingUpdateMultipartFormDataSettingsAuthenticationException, _super);
    function MeetingUpdateMultipartFormDataSettingsAuthenticationException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormDataSettingsAuthenticationException.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormDataSettingsAuthenticationException.prototype, "name", void 0);
    return MeetingUpdateMultipartFormDataSettingsAuthenticationException;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateMultipartFormDataSettingsAuthenticationException = MeetingUpdateMultipartFormDataSettingsAuthenticationException;
var MeetingUpdateMultipartFormDataSettingsAutoRecordingEnum;
(function (MeetingUpdateMultipartFormDataSettingsAutoRecordingEnum) {
    MeetingUpdateMultipartFormDataSettingsAutoRecordingEnum["Local"] = "local";
    MeetingUpdateMultipartFormDataSettingsAutoRecordingEnum["Cloud"] = "cloud";
    MeetingUpdateMultipartFormDataSettingsAutoRecordingEnum["None"] = "none";
})(MeetingUpdateMultipartFormDataSettingsAutoRecordingEnum = exports.MeetingUpdateMultipartFormDataSettingsAutoRecordingEnum || (exports.MeetingUpdateMultipartFormDataSettingsAutoRecordingEnum = {}));
var MeetingUpdateMultipartFormDataSettingsBreakoutRoomRooms = /** @class */ (function (_super) {
    __extends(MeetingUpdateMultipartFormDataSettingsBreakoutRoomRooms, _super);
    function MeetingUpdateMultipartFormDataSettingsBreakoutRoomRooms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormDataSettingsBreakoutRoomRooms.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants" }),
        __metadata("design:type", Array)
    ], MeetingUpdateMultipartFormDataSettingsBreakoutRoomRooms.prototype, "participants", void 0);
    return MeetingUpdateMultipartFormDataSettingsBreakoutRoomRooms;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateMultipartFormDataSettingsBreakoutRoomRooms = MeetingUpdateMultipartFormDataSettingsBreakoutRoomRooms;
// MeetingUpdateMultipartFormDataSettingsBreakoutRoom
/**
 * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
**/
var MeetingUpdateMultipartFormDataSettingsBreakoutRoom = /** @class */ (function (_super) {
    __extends(MeetingUpdateMultipartFormDataSettingsBreakoutRoom, _super);
    function MeetingUpdateMultipartFormDataSettingsBreakoutRoom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateMultipartFormDataSettingsBreakoutRoom.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rooms", elemType: MeetingUpdateMultipartFormDataSettingsBreakoutRoomRooms }),
        __metadata("design:type", Array)
    ], MeetingUpdateMultipartFormDataSettingsBreakoutRoom.prototype, "rooms", void 0);
    return MeetingUpdateMultipartFormDataSettingsBreakoutRoom;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateMultipartFormDataSettingsBreakoutRoom = MeetingUpdateMultipartFormDataSettingsBreakoutRoom;
var MeetingUpdateMultipartFormDataSettingsCustomKeys = /** @class */ (function (_super) {
    __extends(MeetingUpdateMultipartFormDataSettingsCustomKeys, _super);
    function MeetingUpdateMultipartFormDataSettingsCustomKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormDataSettingsCustomKeys.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormDataSettingsCustomKeys.prototype, "value", void 0);
    return MeetingUpdateMultipartFormDataSettingsCustomKeys;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateMultipartFormDataSettingsCustomKeys = MeetingUpdateMultipartFormDataSettingsCustomKeys;
var MeetingUpdateMultipartFormDataSettingsEncryptionTypeEnum;
(function (MeetingUpdateMultipartFormDataSettingsEncryptionTypeEnum) {
    MeetingUpdateMultipartFormDataSettingsEncryptionTypeEnum["EnhancedEncryption"] = "enhanced_encryption";
    MeetingUpdateMultipartFormDataSettingsEncryptionTypeEnum["E2ee"] = "e2ee";
})(MeetingUpdateMultipartFormDataSettingsEncryptionTypeEnum = exports.MeetingUpdateMultipartFormDataSettingsEncryptionTypeEnum || (exports.MeetingUpdateMultipartFormDataSettingsEncryptionTypeEnum = {}));
var MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbersTypeEnum;
(function (MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbersTypeEnum) {
    MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbersTypeEnum["Toll"] = "toll";
    MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbersTypeEnum["Tollfree"] = "tollfree";
})(MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbersTypeEnum = exports.MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbersTypeEnum || (exports.MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbersTypeEnum = {}));
var MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers = /** @class */ (function (_super) {
    __extends(MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers, _super);
    function MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country_name" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers.prototype, "countryName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers.prototype, "type", void 0);
    return MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers = MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers;
var MeetingUpdateMultipartFormDataSettingsLanguageInterpretationInterpreters = /** @class */ (function (_super) {
    __extends(MeetingUpdateMultipartFormDataSettingsLanguageInterpretationInterpreters, _super);
    function MeetingUpdateMultipartFormDataSettingsLanguageInterpretationInterpreters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormDataSettingsLanguageInterpretationInterpreters.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=languages" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormDataSettingsLanguageInterpretationInterpreters.prototype, "languages", void 0);
    return MeetingUpdateMultipartFormDataSettingsLanguageInterpretationInterpreters;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateMultipartFormDataSettingsLanguageInterpretationInterpreters = MeetingUpdateMultipartFormDataSettingsLanguageInterpretationInterpreters;
var MeetingUpdateMultipartFormDataSettingsLanguageInterpretation = /** @class */ (function (_super) {
    __extends(MeetingUpdateMultipartFormDataSettingsLanguageInterpretation, _super);
    function MeetingUpdateMultipartFormDataSettingsLanguageInterpretation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateMultipartFormDataSettingsLanguageInterpretation.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interpreters", elemType: MeetingUpdateMultipartFormDataSettingsLanguageInterpretationInterpreters }),
        __metadata("design:type", Array)
    ], MeetingUpdateMultipartFormDataSettingsLanguageInterpretation.prototype, "interpreters", void 0);
    return MeetingUpdateMultipartFormDataSettingsLanguageInterpretation;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateMultipartFormDataSettingsLanguageInterpretation = MeetingUpdateMultipartFormDataSettingsLanguageInterpretation;
// MeetingUpdateMultipartFormDataSettings
/**
 * Meeting settings.
**/
var MeetingUpdateMultipartFormDataSettings = /** @class */ (function (_super) {
    __extends(MeetingUpdateMultipartFormDataSettings, _super);
    function MeetingUpdateMultipartFormDataSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_multiple_devices" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "allowMultipleDevices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_hosts" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "alternativeHosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_hosts_email_notification" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "alternativeHostsEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approval_type" }),
        __metadata("design:type", Number)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "approvalType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approved_or_denied_countries_or_regions" }),
        __metadata("design:type", MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "approvedOrDeniedCountriesOrRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "audio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_domains" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "authenticationDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_exception", elemType: MeetingUpdateMultipartFormDataSettingsAuthenticationException }),
        __metadata("design:type", Array)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "authenticationException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_name" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "authenticationName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_option" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "authenticationOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_recording" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "autoRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=breakout_room" }),
        __metadata("design:type", MeetingUpdateMultipartFormDataSettingsBreakoutRoom)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "breakoutRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=close_registration" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "closeRegistration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cn_meeting" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "cnMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact_email" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "contactEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact_name" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "contactName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_keys", elemType: MeetingUpdateMultipartFormDataSettingsCustomKeys }),
        __metadata("design:type", Array)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "customKeys", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryption_type" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "encryptionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "enforceLogin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login_domains" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "enforceLoginDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=global_dial_in_countries" }),
        __metadata("design:type", Array)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "globalDialInCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=global_dial_in_numbers", elemType: MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers }),
        __metadata("design:type", Array)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "globalDialInNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_video" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "hostVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=in_meeting" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "inMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jbh_time" }),
        __metadata("design:type", Number)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "jbhTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_before_host" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "joinBeforeHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=language_interpretation" }),
        __metadata("design:type", MeetingUpdateMultipartFormDataSettingsLanguageInterpretation)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "languageInterpretation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_authentication" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "meetingAuthentication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mute_upon_entry" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "muteUponEntry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participant_video" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "participantVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_confirmation_email" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "registrantsConfirmationEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_email_notification" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "registrantsEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registration_type" }),
        __metadata("design:type", Number)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "registrationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_share_button" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "showShareButton", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_pmi" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "usePmi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_room" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "waitingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=watermark" }),
        __metadata("design:type", Boolean)
    ], MeetingUpdateMultipartFormDataSettings.prototype, "watermark", void 0);
    return MeetingUpdateMultipartFormDataSettings;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateMultipartFormDataSettings = MeetingUpdateMultipartFormDataSettings;
var MeetingUpdateMultipartFormDataTrackingFields = /** @class */ (function (_super) {
    __extends(MeetingUpdateMultipartFormDataTrackingFields, _super);
    function MeetingUpdateMultipartFormDataTrackingFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormDataTrackingFields.prototype, "field", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormDataTrackingFields.prototype, "value", void 0);
    return MeetingUpdateMultipartFormDataTrackingFields;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateMultipartFormDataTrackingFields = MeetingUpdateMultipartFormDataTrackingFields;
// MeetingUpdateMultipartFormData1
/**
 * Base object for sessions.
**/
var MeetingUpdateMultipartFormData1 = /** @class */ (function (_super) {
    __extends(MeetingUpdateMultipartFormData1, _super);
    function MeetingUpdateMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=agenda" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormData1.prototype, "agenda", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=duration" }),
        __metadata("design:type", Number)
    ], MeetingUpdateMultipartFormData1.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=password" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormData1.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=recurrence;json=true" }),
        __metadata("design:type", MeetingUpdateMultipartFormDataRecurrence)
    ], MeetingUpdateMultipartFormData1.prototype, "recurrence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=schedule_for" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormData1.prototype, "scheduleFor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=settings;json=true" }),
        __metadata("design:type", MeetingUpdateMultipartFormDataSettings)
    ], MeetingUpdateMultipartFormData1.prototype, "settings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=start_time" }),
        __metadata("design:type", Date)
    ], MeetingUpdateMultipartFormData1.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=template_id" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormData1.prototype, "templateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=timezone" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormData1.prototype, "timezone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=topic" }),
        __metadata("design:type", String)
    ], MeetingUpdateMultipartFormData1.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=tracking_fields;json=true", elemType: MeetingUpdateMultipartFormDataTrackingFields }),
        __metadata("design:type", Array)
    ], MeetingUpdateMultipartFormData1.prototype, "trackingFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=type" }),
        __metadata("design:type", Number)
    ], MeetingUpdateMultipartFormData1.prototype, "type", void 0);
    return MeetingUpdateMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateMultipartFormData1 = MeetingUpdateMultipartFormData1;
var MeetingUpdateRequests = /** @class */ (function (_super) {
    __extends(MeetingUpdateRequests, _super);
    function MeetingUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", MeetingUpdateApplicationJson)
    ], MeetingUpdateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", MeetingUpdateMultipartFormData1)
    ], MeetingUpdateRequests.prototype, "object1", void 0);
    return MeetingUpdateRequests;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateRequests = MeetingUpdateRequests;
var MeetingUpdateSecurity = /** @class */ (function (_super) {
    __extends(MeetingUpdateSecurity, _super);
    function MeetingUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], MeetingUpdateSecurity.prototype, "oAuth", void 0);
    return MeetingUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateSecurity = MeetingUpdateSecurity;
var MeetingUpdateRequest = /** @class */ (function (_super) {
    __extends(MeetingUpdateRequest, _super);
    function MeetingUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingUpdatePathParams)
    ], MeetingUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingUpdateQueryParams)
    ], MeetingUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingUpdateRequests)
    ], MeetingUpdateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingUpdateSecurity)
    ], MeetingUpdateRequest.prototype, "security", void 0);
    return MeetingUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateRequest = MeetingUpdateRequest;
var MeetingUpdateResponse = /** @class */ (function (_super) {
    __extends(MeetingUpdateResponse, _super);
    function MeetingUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MeetingUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MeetingUpdateResponse.prototype, "statusCode", void 0);
    return MeetingUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.MeetingUpdateResponse = MeetingUpdateResponse;
