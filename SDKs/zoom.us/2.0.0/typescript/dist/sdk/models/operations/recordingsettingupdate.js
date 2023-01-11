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
exports.RecordingSettingUpdateResponse = exports.RecordingSettingUpdateRequest = exports.RecordingSettingUpdateRecordingSettings = exports.RecordingSettingUpdateRecordingSettingsShareRecordingEnum = exports.RecordingSettingUpdateSecurity = exports.RecordingSettingUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RecordingSettingUpdatePathParams = /** @class */ (function (_super) {
    __extends(RecordingSettingUpdatePathParams, _super);
    function RecordingSettingUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", String)
    ], RecordingSettingUpdatePathParams.prototype, "meetingId", void 0);
    return RecordingSettingUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.RecordingSettingUpdatePathParams = RecordingSettingUpdatePathParams;
var RecordingSettingUpdateSecurity = /** @class */ (function (_super) {
    __extends(RecordingSettingUpdateSecurity, _super);
    function RecordingSettingUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], RecordingSettingUpdateSecurity.prototype, "oAuth", void 0);
    return RecordingSettingUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.RecordingSettingUpdateSecurity = RecordingSettingUpdateSecurity;
var RecordingSettingUpdateRecordingSettingsShareRecordingEnum;
(function (RecordingSettingUpdateRecordingSettingsShareRecordingEnum) {
    RecordingSettingUpdateRecordingSettingsShareRecordingEnum["Publicly"] = "publicly";
    RecordingSettingUpdateRecordingSettingsShareRecordingEnum["Internally"] = "internally";
    RecordingSettingUpdateRecordingSettingsShareRecordingEnum["None"] = "none";
})(RecordingSettingUpdateRecordingSettingsShareRecordingEnum = exports.RecordingSettingUpdateRecordingSettingsShareRecordingEnum || (exports.RecordingSettingUpdateRecordingSettingsShareRecordingEnum = {}));
var RecordingSettingUpdateRecordingSettings = /** @class */ (function (_super) {
    __extends(RecordingSettingUpdateRecordingSettings, _super);
    function RecordingSettingUpdateRecordingSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approval_type" }),
        __metadata("design:type", Number)
    ], RecordingSettingUpdateRecordingSettings.prototype, "approvalType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_domains" }),
        __metadata("design:type", String)
    ], RecordingSettingUpdateRecordingSettings.prototype, "authenticationDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_option" }),
        __metadata("design:type", String)
    ], RecordingSettingUpdateRecordingSettings.prototype, "authenticationOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=on_demand" }),
        __metadata("design:type", Boolean)
    ], RecordingSettingUpdateRecordingSettings.prototype, "onDemand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], RecordingSettingUpdateRecordingSettings.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_authentication" }),
        __metadata("design:type", Boolean)
    ], RecordingSettingUpdateRecordingSettings.prototype, "recordingAuthentication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=send_email_to_host" }),
        __metadata("design:type", Boolean)
    ], RecordingSettingUpdateRecordingSettings.prototype, "sendEmailToHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=share_recording" }),
        __metadata("design:type", String)
    ], RecordingSettingUpdateRecordingSettings.prototype, "shareRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_social_share_buttons" }),
        __metadata("design:type", Boolean)
    ], RecordingSettingUpdateRecordingSettings.prototype, "showSocialShareButtons", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], RecordingSettingUpdateRecordingSettings.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=viewer_download" }),
        __metadata("design:type", Boolean)
    ], RecordingSettingUpdateRecordingSettings.prototype, "viewerDownload", void 0);
    return RecordingSettingUpdateRecordingSettings;
}(utils_1.SpeakeasyBase));
exports.RecordingSettingUpdateRecordingSettings = RecordingSettingUpdateRecordingSettings;
var RecordingSettingUpdateRequest = /** @class */ (function (_super) {
    __extends(RecordingSettingUpdateRequest, _super);
    function RecordingSettingUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecordingSettingUpdatePathParams)
    ], RecordingSettingUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecordingSettingUpdateSecurity)
    ], RecordingSettingUpdateRequest.prototype, "security", void 0);
    return RecordingSettingUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.RecordingSettingUpdateRequest = RecordingSettingUpdateRequest;
var RecordingSettingUpdateResponse = /** @class */ (function (_super) {
    __extends(RecordingSettingUpdateResponse, _super);
    function RecordingSettingUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], RecordingSettingUpdateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RecordingSettingUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecordingSettingUpdateRecordingSettings)
    ], RecordingSettingUpdateResponse.prototype, "recordingSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RecordingSettingUpdateResponse.prototype, "statusCode", void 0);
    return RecordingSettingUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.RecordingSettingUpdateResponse = RecordingSettingUpdateResponse;
