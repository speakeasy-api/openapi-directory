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
exports.UpdateSettingTemplateResponse = exports.UpdateSettingTemplateRequest = exports.UpdateSettingTemplateSecurity = exports.UpdateSettingTemplateRequests = exports.UpdateSettingTemplateMultipartFormData = exports.UpdateSettingTemplateMultipartFormDataUserSettings = exports.UpdateSettingTemplateMultipartFormDataUserSettingsHoldMusicEnum = exports.UpdateSettingTemplateMultipartFormDataUserSettingsDeskPhone = exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandling = exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHours = exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperator = exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours = exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum = exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingTypeEnum = exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours = exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperator = exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = exports.UpdateSettingTemplateMultipartFormDataProfile = exports.UpdateSettingTemplateMultipartFormDataPolicy = exports.UpdateSettingTemplateMultipartFormDataPolicyVoicemail = exports.UpdateSettingTemplateMultipartFormDataPolicySms = exports.UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording = exports.UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecordingRecordingCallsEnum = exports.UpdateSettingTemplateMultipartFormDataPolicyAdHocCallRecording = exports.UpdateSettingTemplateApplicationJson = exports.UpdateSettingTemplateApplicationJsonUserSettings = exports.UpdateSettingTemplateApplicationJsonUserSettingsHoldMusicEnum = exports.UpdateSettingTemplateApplicationJsonUserSettingsDeskPhone = exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandling = exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHours = exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator = exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours = exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum = exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum = exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours = exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator = exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = exports.UpdateSettingTemplateApplicationJsonProfile = exports.UpdateSettingTemplateApplicationJsonPolicy = exports.UpdateSettingTemplateApplicationJsonPolicyVoicemail = exports.UpdateSettingTemplateApplicationJsonPolicySms = exports.UpdateSettingTemplateApplicationJsonPolicyAutoCallRecording = exports.UpdateSettingTemplateApplicationJsonPolicyAutoCallRecordingRecordingCallsEnum = exports.UpdateSettingTemplateApplicationJsonPolicyAdHocCallRecording = exports.UpdateSettingTemplatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateSettingTemplatePathParams = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplatePathParams, _super);
    function UpdateSettingTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=templateId" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplatePathParams.prototype, "templateId", void 0);
    return UpdateSettingTemplatePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplatePathParams = UpdateSettingTemplatePathParams;
var UpdateSettingTemplateApplicationJsonPolicyAdHocCallRecording = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateApplicationJsonPolicyAdHocCallRecording, _super);
    function UpdateSettingTemplateApplicationJsonPolicyAdHocCallRecording() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], UpdateSettingTemplateApplicationJsonPolicyAdHocCallRecording.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_start_prompt" }),
        __metadata("design:type", Boolean)
    ], UpdateSettingTemplateApplicationJsonPolicyAdHocCallRecording.prototype, "recordingStartPrompt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_transcription" }),
        __metadata("design:type", Boolean)
    ], UpdateSettingTemplateApplicationJsonPolicyAdHocCallRecording.prototype, "recordingTranscription", void 0);
    return UpdateSettingTemplateApplicationJsonPolicyAdHocCallRecording;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateApplicationJsonPolicyAdHocCallRecording = UpdateSettingTemplateApplicationJsonPolicyAdHocCallRecording;
var UpdateSettingTemplateApplicationJsonPolicyAutoCallRecordingRecordingCallsEnum;
(function (UpdateSettingTemplateApplicationJsonPolicyAutoCallRecordingRecordingCallsEnum) {
    UpdateSettingTemplateApplicationJsonPolicyAutoCallRecordingRecordingCallsEnum["Inbound"] = "inbound";
    UpdateSettingTemplateApplicationJsonPolicyAutoCallRecordingRecordingCallsEnum["Outbound"] = "outbound";
    UpdateSettingTemplateApplicationJsonPolicyAutoCallRecordingRecordingCallsEnum["Both"] = "both";
})(UpdateSettingTemplateApplicationJsonPolicyAutoCallRecordingRecordingCallsEnum = exports.UpdateSettingTemplateApplicationJsonPolicyAutoCallRecordingRecordingCallsEnum || (exports.UpdateSettingTemplateApplicationJsonPolicyAutoCallRecordingRecordingCallsEnum = {}));
var UpdateSettingTemplateApplicationJsonPolicyAutoCallRecording = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateApplicationJsonPolicyAutoCallRecording, _super);
    function UpdateSettingTemplateApplicationJsonPolicyAutoCallRecording() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], UpdateSettingTemplateApplicationJsonPolicyAutoCallRecording.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_calls" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateApplicationJsonPolicyAutoCallRecording.prototype, "recordingCalls", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_start_prompt" }),
        __metadata("design:type", Boolean)
    ], UpdateSettingTemplateApplicationJsonPolicyAutoCallRecording.prototype, "recordingStartPrompt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_transcription" }),
        __metadata("design:type", Boolean)
    ], UpdateSettingTemplateApplicationJsonPolicyAutoCallRecording.prototype, "recordingTranscription", void 0);
    return UpdateSettingTemplateApplicationJsonPolicyAutoCallRecording;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateApplicationJsonPolicyAutoCallRecording = UpdateSettingTemplateApplicationJsonPolicyAutoCallRecording;
var UpdateSettingTemplateApplicationJsonPolicySms = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateApplicationJsonPolicySms, _super);
    function UpdateSettingTemplateApplicationJsonPolicySms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], UpdateSettingTemplateApplicationJsonPolicySms.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=international_sms" }),
        __metadata("design:type", Boolean)
    ], UpdateSettingTemplateApplicationJsonPolicySms.prototype, "internationalSms", void 0);
    return UpdateSettingTemplateApplicationJsonPolicySms;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateApplicationJsonPolicySms = UpdateSettingTemplateApplicationJsonPolicySms;
var UpdateSettingTemplateApplicationJsonPolicyVoicemail = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateApplicationJsonPolicyVoicemail, _super);
    function UpdateSettingTemplateApplicationJsonPolicyVoicemail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_transcription" }),
        __metadata("design:type", Boolean)
    ], UpdateSettingTemplateApplicationJsonPolicyVoicemail.prototype, "allowTranscription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], UpdateSettingTemplateApplicationJsonPolicyVoicemail.prototype, "enable", void 0);
    return UpdateSettingTemplateApplicationJsonPolicyVoicemail;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateApplicationJsonPolicyVoicemail = UpdateSettingTemplateApplicationJsonPolicyVoicemail;
var UpdateSettingTemplateApplicationJsonPolicy = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateApplicationJsonPolicy, _super);
    function UpdateSettingTemplateApplicationJsonPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ad_hoc_call_recording" }),
        __metadata("design:type", UpdateSettingTemplateApplicationJsonPolicyAdHocCallRecording)
    ], UpdateSettingTemplateApplicationJsonPolicy.prototype, "adHocCallRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_call_recording" }),
        __metadata("design:type", UpdateSettingTemplateApplicationJsonPolicyAutoCallRecording)
    ], UpdateSettingTemplateApplicationJsonPolicy.prototype, "autoCallRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sms" }),
        __metadata("design:type", UpdateSettingTemplateApplicationJsonPolicySms)
    ], UpdateSettingTemplateApplicationJsonPolicy.prototype, "sms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=voicemail" }),
        __metadata("design:type", UpdateSettingTemplateApplicationJsonPolicyVoicemail)
    ], UpdateSettingTemplateApplicationJsonPolicy.prototype, "voicemail", void 0);
    return UpdateSettingTemplateApplicationJsonPolicy;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateApplicationJsonPolicy = UpdateSettingTemplateApplicationJsonPolicy;
var UpdateSettingTemplateApplicationJsonProfile = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateApplicationJsonProfile, _super);
    function UpdateSettingTemplateApplicationJsonProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=area_code" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateApplicationJsonProfile.prototype, "areaCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateApplicationJsonProfile.prototype, "country", void 0);
    return UpdateSettingTemplateApplicationJsonProfile;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateApplicationJsonProfile = UpdateSettingTemplateApplicationJsonProfile;
var UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum;
(function (UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum) {
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum["User"] = "user";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum["ZoomRoom"] = "zoomRoom";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum["CommonAreaPhone"] = "commonAreaPhone";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum["AutoReceptionist"] = "autoReceptionist";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum["CallQueue"] = "callQueue";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum["SharedLineGroup"] = "sharedLineGroup";
})(UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum || (exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = {}));
// UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator
/**
 * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
**/
var UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator, _super);
    function UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator.prototype, "type", void 0);
    return UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator = UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator;
var UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours, _super);
    function UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weekday" }),
        __metadata("design:type", Number)
    ], UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours.prototype, "weekday", void 0);
    return UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours = UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours;
var UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum;
(function (UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum) {
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum["Zero"] = "0";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum["One"] = "1";
})(UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum = exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum || (exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum = {}));
var UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum;
(function (UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum) {
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum["Fifteen"] = "15";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum["Twenty"] = "20";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum["TwentyFive"] = "25";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum["Thirty"] = "30";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum["ThirtyFive"] = "35";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum["Forty"] = "40";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum["FortyFive"] = "45";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum["Fifty"] = "50";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum["FiftyFive"] = "55";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum["Sixty"] = "60";
})(UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum = exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum || (exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum = {}));
var UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours, _super);
    function UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=business_hour_action" }),
        __metadata("design:type", Number)
    ], UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours.prototype, "businessHourAction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connect_to_operator" }),
        __metadata("design:type", UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator)
    ], UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours.prototype, "connectToOperator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_hours", elemType: UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours }),
        __metadata("design:type", Array)
    ], UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours.prototype, "customHours", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ring_type" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours.prototype, "ringType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ringing_duration" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours.prototype, "ringingDuration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours.prototype, "type", void 0);
    return UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours = UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours;
var UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum;
(function (UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum) {
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum["User"] = "user";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum["ZoomRoom"] = "zoomRoom";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum["CommonAreaPhone"] = "commonAreaPhone";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum["AutoReceptionist"] = "autoReceptionist";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum["CallQueue"] = "callQueue";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum["SharedLineGroup"] = "sharedLineGroup";
})(UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum || (exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = {}));
// UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator
/**
 * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
**/
var UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator, _super);
    function UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator.prototype, "type", void 0);
    return UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator = UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator;
var UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum;
(function (UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum) {
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["Fifteen"] = "15";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["Twenty"] = "20";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["TwentyFive"] = "25";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["Thirty"] = "30";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["ThirtyFive"] = "35";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["Forty"] = "40";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["FortyFive"] = "45";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["Fifty"] = "50";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["FiftyFive"] = "55";
    UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["Sixty"] = "60";
})(UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum || (exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = {}));
var UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHours = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHours, _super);
    function UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHours() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=close_hour_action" }),
        __metadata("design:type", Number)
    ], UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHours.prototype, "closeHourAction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connect_to_operator" }),
        __metadata("design:type", UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator)
    ], UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHours.prototype, "connectToOperator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_wait_time" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHours.prototype, "maxWaitTime", void 0);
    return UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHours;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHours = UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHours;
var UpdateSettingTemplateApplicationJsonUserSettingsCallHandling = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateApplicationJsonUserSettingsCallHandling, _super);
    function UpdateSettingTemplateApplicationJsonUserSettingsCallHandling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=business_hours" }),
        __metadata("design:type", UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours)
    ], UpdateSettingTemplateApplicationJsonUserSettingsCallHandling.prototype, "businessHours", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=close_hours" }),
        __metadata("design:type", UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHours)
    ], UpdateSettingTemplateApplicationJsonUserSettingsCallHandling.prototype, "closeHours", void 0);
    return UpdateSettingTemplateApplicationJsonUserSettingsCallHandling;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateApplicationJsonUserSettingsCallHandling = UpdateSettingTemplateApplicationJsonUserSettingsCallHandling;
var UpdateSettingTemplateApplicationJsonUserSettingsDeskPhone = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateApplicationJsonUserSettingsDeskPhone, _super);
    function UpdateSettingTemplateApplicationJsonUserSettingsDeskPhone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pin_code" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateApplicationJsonUserSettingsDeskPhone.prototype, "pinCode", void 0);
    return UpdateSettingTemplateApplicationJsonUserSettingsDeskPhone;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateApplicationJsonUserSettingsDeskPhone = UpdateSettingTemplateApplicationJsonUserSettingsDeskPhone;
var UpdateSettingTemplateApplicationJsonUserSettingsHoldMusicEnum;
(function (UpdateSettingTemplateApplicationJsonUserSettingsHoldMusicEnum) {
    UpdateSettingTemplateApplicationJsonUserSettingsHoldMusicEnum["Default"] = "default";
    UpdateSettingTemplateApplicationJsonUserSettingsHoldMusicEnum["Disable"] = "disable";
})(UpdateSettingTemplateApplicationJsonUserSettingsHoldMusicEnum = exports.UpdateSettingTemplateApplicationJsonUserSettingsHoldMusicEnum || (exports.UpdateSettingTemplateApplicationJsonUserSettingsHoldMusicEnum = {}));
var UpdateSettingTemplateApplicationJsonUserSettings = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateApplicationJsonUserSettings, _super);
    function UpdateSettingTemplateApplicationJsonUserSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_prompt_language" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateApplicationJsonUserSettings.prototype, "audioPromptLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=block_calls_without_caller_id" }),
        __metadata("design:type", Boolean)
    ], UpdateSettingTemplateApplicationJsonUserSettings.prototype, "blockCallsWithoutCallerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_handling" }),
        __metadata("design:type", UpdateSettingTemplateApplicationJsonUserSettingsCallHandling)
    ], UpdateSettingTemplateApplicationJsonUserSettings.prototype, "callHandling", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desk_phone" }),
        __metadata("design:type", UpdateSettingTemplateApplicationJsonUserSettingsDeskPhone)
    ], UpdateSettingTemplateApplicationJsonUserSettings.prototype, "deskPhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hold_music" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateApplicationJsonUserSettings.prototype, "holdMusic", void 0);
    return UpdateSettingTemplateApplicationJsonUserSettings;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateApplicationJsonUserSettings = UpdateSettingTemplateApplicationJsonUserSettings;
var UpdateSettingTemplateApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateApplicationJson, _super);
    function UpdateSettingTemplateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateApplicationJson.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policy" }),
        __metadata("design:type", UpdateSettingTemplateApplicationJsonPolicy)
    ], UpdateSettingTemplateApplicationJson.prototype, "policy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=profile" }),
        __metadata("design:type", UpdateSettingTemplateApplicationJsonProfile)
    ], UpdateSettingTemplateApplicationJson.prototype, "profile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_settings" }),
        __metadata("design:type", UpdateSettingTemplateApplicationJsonUserSettings)
    ], UpdateSettingTemplateApplicationJson.prototype, "userSettings", void 0);
    return UpdateSettingTemplateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateApplicationJson = UpdateSettingTemplateApplicationJson;
var UpdateSettingTemplateMultipartFormDataPolicyAdHocCallRecording = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateMultipartFormDataPolicyAdHocCallRecording, _super);
    function UpdateSettingTemplateMultipartFormDataPolicyAdHocCallRecording() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], UpdateSettingTemplateMultipartFormDataPolicyAdHocCallRecording.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_start_prompt" }),
        __metadata("design:type", Boolean)
    ], UpdateSettingTemplateMultipartFormDataPolicyAdHocCallRecording.prototype, "recordingStartPrompt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_transcription" }),
        __metadata("design:type", Boolean)
    ], UpdateSettingTemplateMultipartFormDataPolicyAdHocCallRecording.prototype, "recordingTranscription", void 0);
    return UpdateSettingTemplateMultipartFormDataPolicyAdHocCallRecording;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateMultipartFormDataPolicyAdHocCallRecording = UpdateSettingTemplateMultipartFormDataPolicyAdHocCallRecording;
var UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecordingRecordingCallsEnum;
(function (UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecordingRecordingCallsEnum) {
    UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecordingRecordingCallsEnum["Inbound"] = "inbound";
    UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecordingRecordingCallsEnum["Outbound"] = "outbound";
    UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecordingRecordingCallsEnum["Both"] = "both";
})(UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecordingRecordingCallsEnum = exports.UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecordingRecordingCallsEnum || (exports.UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecordingRecordingCallsEnum = {}));
var UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording, _super);
    function UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_calls" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording.prototype, "recordingCalls", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_start_prompt" }),
        __metadata("design:type", Boolean)
    ], UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording.prototype, "recordingStartPrompt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_transcription" }),
        __metadata("design:type", Boolean)
    ], UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording.prototype, "recordingTranscription", void 0);
    return UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording = UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording;
var UpdateSettingTemplateMultipartFormDataPolicySms = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateMultipartFormDataPolicySms, _super);
    function UpdateSettingTemplateMultipartFormDataPolicySms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], UpdateSettingTemplateMultipartFormDataPolicySms.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=international_sms" }),
        __metadata("design:type", Boolean)
    ], UpdateSettingTemplateMultipartFormDataPolicySms.prototype, "internationalSms", void 0);
    return UpdateSettingTemplateMultipartFormDataPolicySms;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateMultipartFormDataPolicySms = UpdateSettingTemplateMultipartFormDataPolicySms;
var UpdateSettingTemplateMultipartFormDataPolicyVoicemail = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateMultipartFormDataPolicyVoicemail, _super);
    function UpdateSettingTemplateMultipartFormDataPolicyVoicemail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_transcription" }),
        __metadata("design:type", Boolean)
    ], UpdateSettingTemplateMultipartFormDataPolicyVoicemail.prototype, "allowTranscription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], UpdateSettingTemplateMultipartFormDataPolicyVoicemail.prototype, "enable", void 0);
    return UpdateSettingTemplateMultipartFormDataPolicyVoicemail;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateMultipartFormDataPolicyVoicemail = UpdateSettingTemplateMultipartFormDataPolicyVoicemail;
var UpdateSettingTemplateMultipartFormDataPolicy = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateMultipartFormDataPolicy, _super);
    function UpdateSettingTemplateMultipartFormDataPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ad_hoc_call_recording" }),
        __metadata("design:type", UpdateSettingTemplateMultipartFormDataPolicyAdHocCallRecording)
    ], UpdateSettingTemplateMultipartFormDataPolicy.prototype, "adHocCallRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_call_recording" }),
        __metadata("design:type", UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording)
    ], UpdateSettingTemplateMultipartFormDataPolicy.prototype, "autoCallRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sms" }),
        __metadata("design:type", UpdateSettingTemplateMultipartFormDataPolicySms)
    ], UpdateSettingTemplateMultipartFormDataPolicy.prototype, "sms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=voicemail" }),
        __metadata("design:type", UpdateSettingTemplateMultipartFormDataPolicyVoicemail)
    ], UpdateSettingTemplateMultipartFormDataPolicy.prototype, "voicemail", void 0);
    return UpdateSettingTemplateMultipartFormDataPolicy;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateMultipartFormDataPolicy = UpdateSettingTemplateMultipartFormDataPolicy;
var UpdateSettingTemplateMultipartFormDataProfile = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateMultipartFormDataProfile, _super);
    function UpdateSettingTemplateMultipartFormDataProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=area_code" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateMultipartFormDataProfile.prototype, "areaCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateMultipartFormDataProfile.prototype, "country", void 0);
    return UpdateSettingTemplateMultipartFormDataProfile;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateMultipartFormDataProfile = UpdateSettingTemplateMultipartFormDataProfile;
var UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum;
(function (UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum) {
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum["User"] = "user";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum["ZoomRoom"] = "zoomRoom";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum["CommonAreaPhone"] = "commonAreaPhone";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum["AutoReceptionist"] = "autoReceptionist";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum["CallQueue"] = "callQueue";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum["SharedLineGroup"] = "sharedLineGroup";
})(UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum || (exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = {}));
// UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperator
/**
 * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
**/
var UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperator = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperator, _super);
    function UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperator.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperator.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperator.prototype, "type", void 0);
    return UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperator;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperator = UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperator;
var UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours, _super);
    function UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weekday" }),
        __metadata("design:type", Number)
    ], UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours.prototype, "weekday", void 0);
    return UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours = UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours;
var UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingTypeEnum;
(function (UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingTypeEnum) {
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingTypeEnum["Zero"] = "0";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingTypeEnum["One"] = "1";
})(UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingTypeEnum = exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingTypeEnum || (exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingTypeEnum = {}));
var UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum;
(function (UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum) {
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum["Fifteen"] = "15";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum["Twenty"] = "20";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum["TwentyFive"] = "25";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum["Thirty"] = "30";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum["ThirtyFive"] = "35";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum["Forty"] = "40";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum["FortyFive"] = "45";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum["Fifty"] = "50";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum["FiftyFive"] = "55";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum["Sixty"] = "60";
})(UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum = exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum || (exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum = {}));
var UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours, _super);
    function UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=business_hour_action" }),
        __metadata("design:type", Number)
    ], UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours.prototype, "businessHourAction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connect_to_operator" }),
        __metadata("design:type", UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperator)
    ], UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours.prototype, "connectToOperator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_hours", elemType: UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours }),
        __metadata("design:type", Array)
    ], UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours.prototype, "customHours", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ring_type" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours.prototype, "ringType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ringing_duration" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours.prototype, "ringingDuration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours.prototype, "type", void 0);
    return UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours = UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours;
var UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum;
(function (UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum) {
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum["User"] = "user";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum["ZoomRoom"] = "zoomRoom";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum["CommonAreaPhone"] = "commonAreaPhone";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum["AutoReceptionist"] = "autoReceptionist";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum["CallQueue"] = "callQueue";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum["SharedLineGroup"] = "sharedLineGroup";
})(UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum || (exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = {}));
// UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperator
/**
 * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
**/
var UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperator = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperator, _super);
    function UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperator.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperator.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperator.prototype, "type", void 0);
    return UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperator;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperator = UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperator;
var UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum;
(function (UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum) {
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["Fifteen"] = "15";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["Twenty"] = "20";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["TwentyFive"] = "25";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["Thirty"] = "30";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["ThirtyFive"] = "35";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["Forty"] = "40";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["FortyFive"] = "45";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["Fifty"] = "50";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["FiftyFive"] = "55";
    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["Sixty"] = "60";
})(UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum || (exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = {}));
var UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHours = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHours, _super);
    function UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHours() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=close_hour_action" }),
        __metadata("design:type", Number)
    ], UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHours.prototype, "closeHourAction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connect_to_operator" }),
        __metadata("design:type", UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperator)
    ], UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHours.prototype, "connectToOperator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_wait_time" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHours.prototype, "maxWaitTime", void 0);
    return UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHours;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHours = UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHours;
var UpdateSettingTemplateMultipartFormDataUserSettingsCallHandling = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateMultipartFormDataUserSettingsCallHandling, _super);
    function UpdateSettingTemplateMultipartFormDataUserSettingsCallHandling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=business_hours" }),
        __metadata("design:type", UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours)
    ], UpdateSettingTemplateMultipartFormDataUserSettingsCallHandling.prototype, "businessHours", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=close_hours" }),
        __metadata("design:type", UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHours)
    ], UpdateSettingTemplateMultipartFormDataUserSettingsCallHandling.prototype, "closeHours", void 0);
    return UpdateSettingTemplateMultipartFormDataUserSettingsCallHandling;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateMultipartFormDataUserSettingsCallHandling = UpdateSettingTemplateMultipartFormDataUserSettingsCallHandling;
var UpdateSettingTemplateMultipartFormDataUserSettingsDeskPhone = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateMultipartFormDataUserSettingsDeskPhone, _super);
    function UpdateSettingTemplateMultipartFormDataUserSettingsDeskPhone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pin_code" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateMultipartFormDataUserSettingsDeskPhone.prototype, "pinCode", void 0);
    return UpdateSettingTemplateMultipartFormDataUserSettingsDeskPhone;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateMultipartFormDataUserSettingsDeskPhone = UpdateSettingTemplateMultipartFormDataUserSettingsDeskPhone;
var UpdateSettingTemplateMultipartFormDataUserSettingsHoldMusicEnum;
(function (UpdateSettingTemplateMultipartFormDataUserSettingsHoldMusicEnum) {
    UpdateSettingTemplateMultipartFormDataUserSettingsHoldMusicEnum["Default"] = "default";
    UpdateSettingTemplateMultipartFormDataUserSettingsHoldMusicEnum["Disable"] = "disable";
})(UpdateSettingTemplateMultipartFormDataUserSettingsHoldMusicEnum = exports.UpdateSettingTemplateMultipartFormDataUserSettingsHoldMusicEnum || (exports.UpdateSettingTemplateMultipartFormDataUserSettingsHoldMusicEnum = {}));
var UpdateSettingTemplateMultipartFormDataUserSettings = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateMultipartFormDataUserSettings, _super);
    function UpdateSettingTemplateMultipartFormDataUserSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_prompt_language" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateMultipartFormDataUserSettings.prototype, "audioPromptLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=block_calls_without_caller_id" }),
        __metadata("design:type", Boolean)
    ], UpdateSettingTemplateMultipartFormDataUserSettings.prototype, "blockCallsWithoutCallerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_handling" }),
        __metadata("design:type", UpdateSettingTemplateMultipartFormDataUserSettingsCallHandling)
    ], UpdateSettingTemplateMultipartFormDataUserSettings.prototype, "callHandling", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desk_phone" }),
        __metadata("design:type", UpdateSettingTemplateMultipartFormDataUserSettingsDeskPhone)
    ], UpdateSettingTemplateMultipartFormDataUserSettings.prototype, "deskPhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hold_music" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateMultipartFormDataUserSettings.prototype, "holdMusic", void 0);
    return UpdateSettingTemplateMultipartFormDataUserSettings;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateMultipartFormDataUserSettings = UpdateSettingTemplateMultipartFormDataUserSettings;
var UpdateSettingTemplateMultipartFormData = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateMultipartFormData, _super);
    function UpdateSettingTemplateMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=description" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateMultipartFormData.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], UpdateSettingTemplateMultipartFormData.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=policy;json=true" }),
        __metadata("design:type", UpdateSettingTemplateMultipartFormDataPolicy)
    ], UpdateSettingTemplateMultipartFormData.prototype, "policy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=profile;json=true" }),
        __metadata("design:type", UpdateSettingTemplateMultipartFormDataProfile)
    ], UpdateSettingTemplateMultipartFormData.prototype, "profile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=user_settings;json=true" }),
        __metadata("design:type", UpdateSettingTemplateMultipartFormDataUserSettings)
    ], UpdateSettingTemplateMultipartFormData.prototype, "userSettings", void 0);
    return UpdateSettingTemplateMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateMultipartFormData = UpdateSettingTemplateMultipartFormData;
var UpdateSettingTemplateRequests = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateRequests, _super);
    function UpdateSettingTemplateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateSettingTemplateApplicationJson)
    ], UpdateSettingTemplateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdateSettingTemplateMultipartFormData)
    ], UpdateSettingTemplateRequests.prototype, "object1", void 0);
    return UpdateSettingTemplateRequests;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateRequests = UpdateSettingTemplateRequests;
var UpdateSettingTemplateSecurity = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateSecurity, _super);
    function UpdateSettingTemplateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], UpdateSettingTemplateSecurity.prototype, "oAuth", void 0);
    return UpdateSettingTemplateSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateSecurity = UpdateSettingTemplateSecurity;
var UpdateSettingTemplateRequest = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateRequest, _super);
    function UpdateSettingTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSettingTemplatePathParams)
    ], UpdateSettingTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSettingTemplateRequests)
    ], UpdateSettingTemplateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSettingTemplateSecurity)
    ], UpdateSettingTemplateRequest.prototype, "security", void 0);
    return UpdateSettingTemplateRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateRequest = UpdateSettingTemplateRequest;
var UpdateSettingTemplateResponse = /** @class */ (function (_super) {
    __extends(UpdateSettingTemplateResponse, _super);
    function UpdateSettingTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdateSettingTemplateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateSettingTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateSettingTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateSettingTemplateResponse.prototype, "updateSettingTemplate204ApplicationJSONAny", void 0);
    return UpdateSettingTemplateResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateSettingTemplateResponse = UpdateSettingTemplateResponse;
