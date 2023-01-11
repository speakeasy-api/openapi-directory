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
exports.GetSettingTemplateResponse = exports.GetSettingTemplateRequest = exports.GetSettingTemplate200ApplicationJson = exports.GetSettingTemplate200ApplicationJsonUserSettings = exports.GetSettingTemplate200ApplicationJsonUserSettingsHoldMusicEnum = exports.GetSettingTemplate200ApplicationJsonUserSettingsDeskPhone = exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandling = exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHours = exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator = exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours = exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum = exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum = exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours = exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator = exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = exports.GetSettingTemplate200ApplicationJsonTypeEnum = exports.GetSettingTemplate200ApplicationJsonProfile = exports.GetSettingTemplate200ApplicationJsonPolicy = exports.GetSettingTemplate200ApplicationJsonPolicyVoicemail = exports.GetSettingTemplate200ApplicationJsonPolicySms = exports.GetSettingTemplate200ApplicationJsonPolicyAutoCallRecording = exports.GetSettingTemplate200ApplicationJsonPolicyAdHocCallRecording = exports.GetSettingTemplateSecurity = exports.GetSettingTemplateQueryParams = exports.GetSettingTemplatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetSettingTemplatePathParams = /** @class */ (function (_super) {
    __extends(GetSettingTemplatePathParams, _super);
    function GetSettingTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=templateId" }),
        __metadata("design:type", String)
    ], GetSettingTemplatePathParams.prototype, "templateId", void 0);
    return GetSettingTemplatePathParams;
}(utils_1.SpeakeasyBase));
exports.GetSettingTemplatePathParams = GetSettingTemplatePathParams;
var GetSettingTemplateQueryParams = /** @class */ (function (_super) {
    __extends(GetSettingTemplateQueryParams, _super);
    function GetSettingTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=custom_query_fields" }),
        __metadata("design:type", String)
    ], GetSettingTemplateQueryParams.prototype, "customQueryFields", void 0);
    return GetSettingTemplateQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSettingTemplateQueryParams = GetSettingTemplateQueryParams;
var GetSettingTemplateSecurity = /** @class */ (function (_super) {
    __extends(GetSettingTemplateSecurity, _super);
    function GetSettingTemplateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], GetSettingTemplateSecurity.prototype, "oAuth", void 0);
    return GetSettingTemplateSecurity;
}(utils_1.SpeakeasyBase));
exports.GetSettingTemplateSecurity = GetSettingTemplateSecurity;
var GetSettingTemplate200ApplicationJsonPolicyAdHocCallRecording = /** @class */ (function (_super) {
    __extends(GetSettingTemplate200ApplicationJsonPolicyAdHocCallRecording, _super);
    function GetSettingTemplate200ApplicationJsonPolicyAdHocCallRecording() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], GetSettingTemplate200ApplicationJsonPolicyAdHocCallRecording.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_start_prompt" }),
        __metadata("design:type", Boolean)
    ], GetSettingTemplate200ApplicationJsonPolicyAdHocCallRecording.prototype, "recordingStartPrompt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_transcription" }),
        __metadata("design:type", Boolean)
    ], GetSettingTemplate200ApplicationJsonPolicyAdHocCallRecording.prototype, "recordingTranscription", void 0);
    return GetSettingTemplate200ApplicationJsonPolicyAdHocCallRecording;
}(utils_1.SpeakeasyBase));
exports.GetSettingTemplate200ApplicationJsonPolicyAdHocCallRecording = GetSettingTemplate200ApplicationJsonPolicyAdHocCallRecording;
var GetSettingTemplate200ApplicationJsonPolicyAutoCallRecording = /** @class */ (function (_super) {
    __extends(GetSettingTemplate200ApplicationJsonPolicyAutoCallRecording, _super);
    function GetSettingTemplate200ApplicationJsonPolicyAutoCallRecording() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], GetSettingTemplate200ApplicationJsonPolicyAutoCallRecording.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_calls" }),
        __metadata("design:type", String)
    ], GetSettingTemplate200ApplicationJsonPolicyAutoCallRecording.prototype, "recordingCalls", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_start_prompt" }),
        __metadata("design:type", Boolean)
    ], GetSettingTemplate200ApplicationJsonPolicyAutoCallRecording.prototype, "recordingStartPrompt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_transcription" }),
        __metadata("design:type", Boolean)
    ], GetSettingTemplate200ApplicationJsonPolicyAutoCallRecording.prototype, "recordingTranscription", void 0);
    return GetSettingTemplate200ApplicationJsonPolicyAutoCallRecording;
}(utils_1.SpeakeasyBase));
exports.GetSettingTemplate200ApplicationJsonPolicyAutoCallRecording = GetSettingTemplate200ApplicationJsonPolicyAutoCallRecording;
var GetSettingTemplate200ApplicationJsonPolicySms = /** @class */ (function (_super) {
    __extends(GetSettingTemplate200ApplicationJsonPolicySms, _super);
    function GetSettingTemplate200ApplicationJsonPolicySms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], GetSettingTemplate200ApplicationJsonPolicySms.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=international_sms" }),
        __metadata("design:type", Boolean)
    ], GetSettingTemplate200ApplicationJsonPolicySms.prototype, "internationalSms", void 0);
    return GetSettingTemplate200ApplicationJsonPolicySms;
}(utils_1.SpeakeasyBase));
exports.GetSettingTemplate200ApplicationJsonPolicySms = GetSettingTemplate200ApplicationJsonPolicySms;
var GetSettingTemplate200ApplicationJsonPolicyVoicemail = /** @class */ (function (_super) {
    __extends(GetSettingTemplate200ApplicationJsonPolicyVoicemail, _super);
    function GetSettingTemplate200ApplicationJsonPolicyVoicemail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_transcription" }),
        __metadata("design:type", Boolean)
    ], GetSettingTemplate200ApplicationJsonPolicyVoicemail.prototype, "allowTranscription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], GetSettingTemplate200ApplicationJsonPolicyVoicemail.prototype, "enable", void 0);
    return GetSettingTemplate200ApplicationJsonPolicyVoicemail;
}(utils_1.SpeakeasyBase));
exports.GetSettingTemplate200ApplicationJsonPolicyVoicemail = GetSettingTemplate200ApplicationJsonPolicyVoicemail;
var GetSettingTemplate200ApplicationJsonPolicy = /** @class */ (function (_super) {
    __extends(GetSettingTemplate200ApplicationJsonPolicy, _super);
    function GetSettingTemplate200ApplicationJsonPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ad_hoc_call_recording" }),
        __metadata("design:type", GetSettingTemplate200ApplicationJsonPolicyAdHocCallRecording)
    ], GetSettingTemplate200ApplicationJsonPolicy.prototype, "adHocCallRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_call_recording" }),
        __metadata("design:type", GetSettingTemplate200ApplicationJsonPolicyAutoCallRecording)
    ], GetSettingTemplate200ApplicationJsonPolicy.prototype, "autoCallRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sms" }),
        __metadata("design:type", GetSettingTemplate200ApplicationJsonPolicySms)
    ], GetSettingTemplate200ApplicationJsonPolicy.prototype, "sms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=voicemail" }),
        __metadata("design:type", GetSettingTemplate200ApplicationJsonPolicyVoicemail)
    ], GetSettingTemplate200ApplicationJsonPolicy.prototype, "voicemail", void 0);
    return GetSettingTemplate200ApplicationJsonPolicy;
}(utils_1.SpeakeasyBase));
exports.GetSettingTemplate200ApplicationJsonPolicy = GetSettingTemplate200ApplicationJsonPolicy;
var GetSettingTemplate200ApplicationJsonProfile = /** @class */ (function (_super) {
    __extends(GetSettingTemplate200ApplicationJsonProfile, _super);
    function GetSettingTemplate200ApplicationJsonProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=area_code" }),
        __metadata("design:type", String)
    ], GetSettingTemplate200ApplicationJsonProfile.prototype, "areaCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], GetSettingTemplate200ApplicationJsonProfile.prototype, "country", void 0);
    return GetSettingTemplate200ApplicationJsonProfile;
}(utils_1.SpeakeasyBase));
exports.GetSettingTemplate200ApplicationJsonProfile = GetSettingTemplate200ApplicationJsonProfile;
var GetSettingTemplate200ApplicationJsonTypeEnum;
(function (GetSettingTemplate200ApplicationJsonTypeEnum) {
    GetSettingTemplate200ApplicationJsonTypeEnum["User"] = "user";
    GetSettingTemplate200ApplicationJsonTypeEnum["Group"] = "group";
    GetSettingTemplate200ApplicationJsonTypeEnum["AutoReceptionist"] = "autoReceptionist";
    GetSettingTemplate200ApplicationJsonTypeEnum["CommonArea"] = "commonArea";
    GetSettingTemplate200ApplicationJsonTypeEnum["Zr"] = "zr";
    GetSettingTemplate200ApplicationJsonTypeEnum["Interop"] = "interop";
})(GetSettingTemplate200ApplicationJsonTypeEnum = exports.GetSettingTemplate200ApplicationJsonTypeEnum || (exports.GetSettingTemplate200ApplicationJsonTypeEnum = {}));
var GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum;
(function (GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum) {
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum["User"] = "user";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum["ZoomRoom"] = "zoomRoom";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum["CommonAreaPhone"] = "commonAreaPhone";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum["AutoReceptionist"] = "autoReceptionist";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum["CallQueue"] = "callQueue";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum["SharedLineGroup"] = "sharedLineGroup";
})(GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum || (exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = {}));
// GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator
/**
 * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
**/
var GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator = /** @class */ (function (_super) {
    __extends(GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator, _super);
    function GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator.prototype, "type", void 0);
    return GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator;
}(utils_1.SpeakeasyBase));
exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator = GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator;
var GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours = /** @class */ (function (_super) {
    __extends(GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours, _super);
    function GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weekday" }),
        __metadata("design:type", Number)
    ], GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours.prototype, "weekday", void 0);
    return GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours;
}(utils_1.SpeakeasyBase));
exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours = GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours;
var GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum;
(function (GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum) {
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum["Zero"] = "0";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum["One"] = "1";
})(GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum = exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum || (exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum = {}));
var GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum;
(function (GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum) {
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum["Fifteen"] = "15";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum["Twenty"] = "20";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum["TwentyFive"] = "25";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum["Thirty"] = "30";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum["ThirtyFive"] = "35";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum["Forty"] = "40";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum["FortyFive"] = "45";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum["Fifty"] = "50";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum["FiftyFive"] = "55";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum["Sixty"] = "60";
})(GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum = exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum || (exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum = {}));
var GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours = /** @class */ (function (_super) {
    __extends(GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours, _super);
    function GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=business_hour_action" }),
        __metadata("design:type", Number)
    ], GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours.prototype, "businessHourAction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connect_to_operator" }),
        __metadata("design:type", GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator)
    ], GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours.prototype, "connectToOperator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_hours", elemType: GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours }),
        __metadata("design:type", Array)
    ], GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours.prototype, "customHours", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ring_type" }),
        __metadata("design:type", String)
    ], GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours.prototype, "ringType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ringing_duration" }),
        __metadata("design:type", String)
    ], GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours.prototype, "ringingDuration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours.prototype, "type", void 0);
    return GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours;
}(utils_1.SpeakeasyBase));
exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours = GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours;
var GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum;
(function (GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum) {
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum["User"] = "user";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum["ZoomRoom"] = "zoomRoom";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum["CommonAreaPhone"] = "commonAreaPhone";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum["AutoReceptionist"] = "autoReceptionist";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum["CallQueue"] = "callQueue";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum["SharedLineGroup"] = "sharedLineGroup";
})(GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum || (exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = {}));
// GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator
/**
 * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
**/
var GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator = /** @class */ (function (_super) {
    __extends(GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator, _super);
    function GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator.prototype, "type", void 0);
    return GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator;
}(utils_1.SpeakeasyBase));
exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator = GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator;
var GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum;
(function (GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum) {
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["Fifteen"] = "15";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["Twenty"] = "20";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["TwentyFive"] = "25";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["Thirty"] = "30";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["ThirtyFive"] = "35";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["Forty"] = "40";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["FortyFive"] = "45";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["Fifty"] = "50";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["FiftyFive"] = "55";
    GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum["Sixty"] = "60";
})(GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum || (exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = {}));
var GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHours = /** @class */ (function (_super) {
    __extends(GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHours, _super);
    function GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHours() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=close_hour_action" }),
        __metadata("design:type", Number)
    ], GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHours.prototype, "closeHourAction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connect_to_operator" }),
        __metadata("design:type", GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator)
    ], GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHours.prototype, "connectToOperator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_wait_time" }),
        __metadata("design:type", String)
    ], GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHours.prototype, "maxWaitTime", void 0);
    return GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHours;
}(utils_1.SpeakeasyBase));
exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHours = GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHours;
var GetSettingTemplate200ApplicationJsonUserSettingsCallHandling = /** @class */ (function (_super) {
    __extends(GetSettingTemplate200ApplicationJsonUserSettingsCallHandling, _super);
    function GetSettingTemplate200ApplicationJsonUserSettingsCallHandling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=business_hours" }),
        __metadata("design:type", GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours)
    ], GetSettingTemplate200ApplicationJsonUserSettingsCallHandling.prototype, "businessHours", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=close_hours" }),
        __metadata("design:type", GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHours)
    ], GetSettingTemplate200ApplicationJsonUserSettingsCallHandling.prototype, "closeHours", void 0);
    return GetSettingTemplate200ApplicationJsonUserSettingsCallHandling;
}(utils_1.SpeakeasyBase));
exports.GetSettingTemplate200ApplicationJsonUserSettingsCallHandling = GetSettingTemplate200ApplicationJsonUserSettingsCallHandling;
var GetSettingTemplate200ApplicationJsonUserSettingsDeskPhone = /** @class */ (function (_super) {
    __extends(GetSettingTemplate200ApplicationJsonUserSettingsDeskPhone, _super);
    function GetSettingTemplate200ApplicationJsonUserSettingsDeskPhone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pin_code" }),
        __metadata("design:type", String)
    ], GetSettingTemplate200ApplicationJsonUserSettingsDeskPhone.prototype, "pinCode", void 0);
    return GetSettingTemplate200ApplicationJsonUserSettingsDeskPhone;
}(utils_1.SpeakeasyBase));
exports.GetSettingTemplate200ApplicationJsonUserSettingsDeskPhone = GetSettingTemplate200ApplicationJsonUserSettingsDeskPhone;
var GetSettingTemplate200ApplicationJsonUserSettingsHoldMusicEnum;
(function (GetSettingTemplate200ApplicationJsonUserSettingsHoldMusicEnum) {
    GetSettingTemplate200ApplicationJsonUserSettingsHoldMusicEnum["Default"] = "default";
    GetSettingTemplate200ApplicationJsonUserSettingsHoldMusicEnum["Disable"] = "disable";
})(GetSettingTemplate200ApplicationJsonUserSettingsHoldMusicEnum = exports.GetSettingTemplate200ApplicationJsonUserSettingsHoldMusicEnum || (exports.GetSettingTemplate200ApplicationJsonUserSettingsHoldMusicEnum = {}));
var GetSettingTemplate200ApplicationJsonUserSettings = /** @class */ (function (_super) {
    __extends(GetSettingTemplate200ApplicationJsonUserSettings, _super);
    function GetSettingTemplate200ApplicationJsonUserSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_prompt_language" }),
        __metadata("design:type", String)
    ], GetSettingTemplate200ApplicationJsonUserSettings.prototype, "audioPromptLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=block_calls_without_caller_id" }),
        __metadata("design:type", Boolean)
    ], GetSettingTemplate200ApplicationJsonUserSettings.prototype, "blockCallsWithoutCallerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_handling" }),
        __metadata("design:type", GetSettingTemplate200ApplicationJsonUserSettingsCallHandling)
    ], GetSettingTemplate200ApplicationJsonUserSettings.prototype, "callHandling", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desk_phone" }),
        __metadata("design:type", GetSettingTemplate200ApplicationJsonUserSettingsDeskPhone)
    ], GetSettingTemplate200ApplicationJsonUserSettings.prototype, "deskPhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hold_music" }),
        __metadata("design:type", String)
    ], GetSettingTemplate200ApplicationJsonUserSettings.prototype, "holdMusic", void 0);
    return GetSettingTemplate200ApplicationJsonUserSettings;
}(utils_1.SpeakeasyBase));
exports.GetSettingTemplate200ApplicationJsonUserSettings = GetSettingTemplate200ApplicationJsonUserSettings;
var GetSettingTemplate200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSettingTemplate200ApplicationJson, _super);
    function GetSettingTemplate200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetSettingTemplate200ApplicationJson.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetSettingTemplate200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetSettingTemplate200ApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policy" }),
        __metadata("design:type", GetSettingTemplate200ApplicationJsonPolicy)
    ], GetSettingTemplate200ApplicationJson.prototype, "policy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=profile" }),
        __metadata("design:type", GetSettingTemplate200ApplicationJsonProfile)
    ], GetSettingTemplate200ApplicationJson.prototype, "profile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetSettingTemplate200ApplicationJson.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_settings" }),
        __metadata("design:type", GetSettingTemplate200ApplicationJsonUserSettings)
    ], GetSettingTemplate200ApplicationJson.prototype, "userSettings", void 0);
    return GetSettingTemplate200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetSettingTemplate200ApplicationJson = GetSettingTemplate200ApplicationJson;
var GetSettingTemplateRequest = /** @class */ (function (_super) {
    __extends(GetSettingTemplateRequest, _super);
    function GetSettingTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSettingTemplatePathParams)
    ], GetSettingTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSettingTemplateQueryParams)
    ], GetSettingTemplateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSettingTemplateSecurity)
    ], GetSettingTemplateRequest.prototype, "security", void 0);
    return GetSettingTemplateRequest;
}(utils_1.SpeakeasyBase));
exports.GetSettingTemplateRequest = GetSettingTemplateRequest;
var GetSettingTemplateResponse = /** @class */ (function (_super) {
    __extends(GetSettingTemplateResponse, _super);
    function GetSettingTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetSettingTemplateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSettingTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSettingTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSettingTemplate200ApplicationJson)
    ], GetSettingTemplateResponse.prototype, "getSettingTemplate200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetSettingTemplateResponse.prototype, "getSettingTemplate404ApplicationJSONAny", void 0);
    return GetSettingTemplateResponse;
}(utils_1.SpeakeasyBase));
exports.GetSettingTemplateResponse = GetSettingTemplateResponse;
