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
exports.RecordingSettingsUpdateResponse = exports.RecordingSettingsUpdateRequest = exports.RecordingSettingsUpdateSecurity = exports.RecordingSettingsUpdateRequests = exports.RecordingSettingsUpdateRecordingSettings = exports.RecordingSettingsUpdateRecordingSettingsShareRecordingEnum = exports.RecordingSettingsUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RecordingSettingsUpdatePathParams = /** @class */ (function (_super) {
    __extends(RecordingSettingsUpdatePathParams, _super);
    function RecordingSettingsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", String)
    ], RecordingSettingsUpdatePathParams.prototype, "meetingId", void 0);
    return RecordingSettingsUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.RecordingSettingsUpdatePathParams = RecordingSettingsUpdatePathParams;
var RecordingSettingsUpdateRecordingSettingsShareRecordingEnum;
(function (RecordingSettingsUpdateRecordingSettingsShareRecordingEnum) {
    RecordingSettingsUpdateRecordingSettingsShareRecordingEnum["Publicly"] = "publicly";
    RecordingSettingsUpdateRecordingSettingsShareRecordingEnum["Internally"] = "internally";
    RecordingSettingsUpdateRecordingSettingsShareRecordingEnum["None"] = "none";
})(RecordingSettingsUpdateRecordingSettingsShareRecordingEnum = exports.RecordingSettingsUpdateRecordingSettingsShareRecordingEnum || (exports.RecordingSettingsUpdateRecordingSettingsShareRecordingEnum = {}));
var RecordingSettingsUpdateRecordingSettings = /** @class */ (function (_super) {
    __extends(RecordingSettingsUpdateRecordingSettings, _super);
    function RecordingSettingsUpdateRecordingSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approval_type, multipart_form, name=approval_type" }),
        __metadata("design:type", Number)
    ], RecordingSettingsUpdateRecordingSettings.prototype, "approvalType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_domains, multipart_form, name=authentication_domains" }),
        __metadata("design:type", String)
    ], RecordingSettingsUpdateRecordingSettings.prototype, "authenticationDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_option, multipart_form, name=authentication_option" }),
        __metadata("design:type", String)
    ], RecordingSettingsUpdateRecordingSettings.prototype, "authenticationOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=on_demand, multipart_form, name=on_demand" }),
        __metadata("design:type", Boolean)
    ], RecordingSettingsUpdateRecordingSettings.prototype, "onDemand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password, multipart_form, name=password" }),
        __metadata("design:type", String)
    ], RecordingSettingsUpdateRecordingSettings.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_authentication, multipart_form, name=recording_authentication" }),
        __metadata("design:type", Boolean)
    ], RecordingSettingsUpdateRecordingSettings.prototype, "recordingAuthentication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=send_email_to_host, multipart_form, name=send_email_to_host" }),
        __metadata("design:type", Boolean)
    ], RecordingSettingsUpdateRecordingSettings.prototype, "sendEmailToHost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=share_recording, multipart_form, name=share_recording" }),
        __metadata("design:type", String)
    ], RecordingSettingsUpdateRecordingSettings.prototype, "shareRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_social_share_buttons, multipart_form, name=show_social_share_buttons" }),
        __metadata("design:type", Boolean)
    ], RecordingSettingsUpdateRecordingSettings.prototype, "showSocialShareButtons", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic, multipart_form, name=topic" }),
        __metadata("design:type", String)
    ], RecordingSettingsUpdateRecordingSettings.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=viewer_download, multipart_form, name=viewer_download" }),
        __metadata("design:type", Boolean)
    ], RecordingSettingsUpdateRecordingSettings.prototype, "viewerDownload", void 0);
    return RecordingSettingsUpdateRecordingSettings;
}(utils_1.SpeakeasyBase));
exports.RecordingSettingsUpdateRecordingSettings = RecordingSettingsUpdateRecordingSettings;
var RecordingSettingsUpdateRequests = /** @class */ (function (_super) {
    __extends(RecordingSettingsUpdateRequests, _super);
    function RecordingSettingsUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", RecordingSettingsUpdateRecordingSettings)
    ], RecordingSettingsUpdateRequests.prototype, "recordingSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", RecordingSettingsUpdateRecordingSettings)
    ], RecordingSettingsUpdateRequests.prototype, "recordingSettings1", void 0);
    return RecordingSettingsUpdateRequests;
}(utils_1.SpeakeasyBase));
exports.RecordingSettingsUpdateRequests = RecordingSettingsUpdateRequests;
var RecordingSettingsUpdateSecurity = /** @class */ (function (_super) {
    __extends(RecordingSettingsUpdateSecurity, _super);
    function RecordingSettingsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], RecordingSettingsUpdateSecurity.prototype, "oAuth", void 0);
    return RecordingSettingsUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.RecordingSettingsUpdateSecurity = RecordingSettingsUpdateSecurity;
var RecordingSettingsUpdateRequest = /** @class */ (function (_super) {
    __extends(RecordingSettingsUpdateRequest, _super);
    function RecordingSettingsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecordingSettingsUpdatePathParams)
    ], RecordingSettingsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecordingSettingsUpdateRequests)
    ], RecordingSettingsUpdateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecordingSettingsUpdateSecurity)
    ], RecordingSettingsUpdateRequest.prototype, "security", void 0);
    return RecordingSettingsUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.RecordingSettingsUpdateRequest = RecordingSettingsUpdateRequest;
var RecordingSettingsUpdateResponse = /** @class */ (function (_super) {
    __extends(RecordingSettingsUpdateResponse, _super);
    function RecordingSettingsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RecordingSettingsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RecordingSettingsUpdateResponse.prototype, "statusCode", void 0);
    return RecordingSettingsUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.RecordingSettingsUpdateResponse = RecordingSettingsUpdateResponse;
