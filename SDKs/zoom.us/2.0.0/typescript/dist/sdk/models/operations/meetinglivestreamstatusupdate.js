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
exports.MeetingLiveStreamStatusUpdateResponse = exports.MeetingLiveStreamStatusUpdateRequest = exports.MeetingLiveStreamStatusUpdateSecurity = exports.MeetingLiveStreamStatusUpdateRequests = exports.MeetingLiveStreamStatusUpdateMultipartFormData = exports.MeetingLiveStreamStatusUpdateMultipartFormDataSettings = exports.MeetingLiveStreamStatusUpdateMultipartFormDataActionEnum = exports.MeetingLiveStreamStatusUpdateApplicationJson = exports.MeetingLiveStreamStatusUpdateApplicationJsonSettings = exports.MeetingLiveStreamStatusUpdateApplicationJsonActionEnum = exports.MeetingLiveStreamStatusUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MeetingLiveStreamStatusUpdatePathParams = /** @class */ (function (_super) {
    __extends(MeetingLiveStreamStatusUpdatePathParams, _super);
    function MeetingLiveStreamStatusUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", Number)
    ], MeetingLiveStreamStatusUpdatePathParams.prototype, "meetingId", void 0);
    return MeetingLiveStreamStatusUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.MeetingLiveStreamStatusUpdatePathParams = MeetingLiveStreamStatusUpdatePathParams;
var MeetingLiveStreamStatusUpdateApplicationJsonActionEnum;
(function (MeetingLiveStreamStatusUpdateApplicationJsonActionEnum) {
    MeetingLiveStreamStatusUpdateApplicationJsonActionEnum["Start"] = "start";
    MeetingLiveStreamStatusUpdateApplicationJsonActionEnum["Stop"] = "stop";
})(MeetingLiveStreamStatusUpdateApplicationJsonActionEnum = exports.MeetingLiveStreamStatusUpdateApplicationJsonActionEnum || (exports.MeetingLiveStreamStatusUpdateApplicationJsonActionEnum = {}));
// MeetingLiveStreamStatusUpdateApplicationJsonSettings
/**
 * Update the settings of a live streaming session. The settings can only be updated for a live stream that has been stopped. You can not update the settings of an ongoing live stream.
**/
var MeetingLiveStreamStatusUpdateApplicationJsonSettings = /** @class */ (function (_super) {
    __extends(MeetingLiveStreamStatusUpdateApplicationJsonSettings, _super);
    function MeetingLiveStreamStatusUpdateApplicationJsonSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active_speaker_name" }),
        __metadata("design:type", Boolean)
    ], MeetingLiveStreamStatusUpdateApplicationJsonSettings.prototype, "activeSpeakerName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], MeetingLiveStreamStatusUpdateApplicationJsonSettings.prototype, "displayName", void 0);
    return MeetingLiveStreamStatusUpdateApplicationJsonSettings;
}(utils_1.SpeakeasyBase));
exports.MeetingLiveStreamStatusUpdateApplicationJsonSettings = MeetingLiveStreamStatusUpdateApplicationJsonSettings;
// MeetingLiveStreamStatusUpdateApplicationJson
/**
 * Meeting live stream status.
**/
var MeetingLiveStreamStatusUpdateApplicationJson = /** @class */ (function (_super) {
    __extends(MeetingLiveStreamStatusUpdateApplicationJson, _super);
    function MeetingLiveStreamStatusUpdateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], MeetingLiveStreamStatusUpdateApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", MeetingLiveStreamStatusUpdateApplicationJsonSettings)
    ], MeetingLiveStreamStatusUpdateApplicationJson.prototype, "settings", void 0);
    return MeetingLiveStreamStatusUpdateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MeetingLiveStreamStatusUpdateApplicationJson = MeetingLiveStreamStatusUpdateApplicationJson;
var MeetingLiveStreamStatusUpdateMultipartFormDataActionEnum;
(function (MeetingLiveStreamStatusUpdateMultipartFormDataActionEnum) {
    MeetingLiveStreamStatusUpdateMultipartFormDataActionEnum["Start"] = "start";
    MeetingLiveStreamStatusUpdateMultipartFormDataActionEnum["Stop"] = "stop";
})(MeetingLiveStreamStatusUpdateMultipartFormDataActionEnum = exports.MeetingLiveStreamStatusUpdateMultipartFormDataActionEnum || (exports.MeetingLiveStreamStatusUpdateMultipartFormDataActionEnum = {}));
// MeetingLiveStreamStatusUpdateMultipartFormDataSettings
/**
 * Update the settings of a live streaming session. The settings can only be updated for a live stream that has been stopped. You can not update the settings of an ongoing live stream.
**/
var MeetingLiveStreamStatusUpdateMultipartFormDataSettings = /** @class */ (function (_super) {
    __extends(MeetingLiveStreamStatusUpdateMultipartFormDataSettings, _super);
    function MeetingLiveStreamStatusUpdateMultipartFormDataSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active_speaker_name" }),
        __metadata("design:type", Boolean)
    ], MeetingLiveStreamStatusUpdateMultipartFormDataSettings.prototype, "activeSpeakerName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], MeetingLiveStreamStatusUpdateMultipartFormDataSettings.prototype, "displayName", void 0);
    return MeetingLiveStreamStatusUpdateMultipartFormDataSettings;
}(utils_1.SpeakeasyBase));
exports.MeetingLiveStreamStatusUpdateMultipartFormDataSettings = MeetingLiveStreamStatusUpdateMultipartFormDataSettings;
// MeetingLiveStreamStatusUpdateMultipartFormData
/**
 * Meeting live stream status.
**/
var MeetingLiveStreamStatusUpdateMultipartFormData = /** @class */ (function (_super) {
    __extends(MeetingLiveStreamStatusUpdateMultipartFormData, _super);
    function MeetingLiveStreamStatusUpdateMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=action" }),
        __metadata("design:type", String)
    ], MeetingLiveStreamStatusUpdateMultipartFormData.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=settings;json=true" }),
        __metadata("design:type", MeetingLiveStreamStatusUpdateMultipartFormDataSettings)
    ], MeetingLiveStreamStatusUpdateMultipartFormData.prototype, "settings", void 0);
    return MeetingLiveStreamStatusUpdateMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.MeetingLiveStreamStatusUpdateMultipartFormData = MeetingLiveStreamStatusUpdateMultipartFormData;
var MeetingLiveStreamStatusUpdateRequests = /** @class */ (function (_super) {
    __extends(MeetingLiveStreamStatusUpdateRequests, _super);
    function MeetingLiveStreamStatusUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", MeetingLiveStreamStatusUpdateApplicationJson)
    ], MeetingLiveStreamStatusUpdateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", MeetingLiveStreamStatusUpdateMultipartFormData)
    ], MeetingLiveStreamStatusUpdateRequests.prototype, "object1", void 0);
    return MeetingLiveStreamStatusUpdateRequests;
}(utils_1.SpeakeasyBase));
exports.MeetingLiveStreamStatusUpdateRequests = MeetingLiveStreamStatusUpdateRequests;
var MeetingLiveStreamStatusUpdateSecurity = /** @class */ (function (_super) {
    __extends(MeetingLiveStreamStatusUpdateSecurity, _super);
    function MeetingLiveStreamStatusUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], MeetingLiveStreamStatusUpdateSecurity.prototype, "oAuth", void 0);
    return MeetingLiveStreamStatusUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.MeetingLiveStreamStatusUpdateSecurity = MeetingLiveStreamStatusUpdateSecurity;
var MeetingLiveStreamStatusUpdateRequest = /** @class */ (function (_super) {
    __extends(MeetingLiveStreamStatusUpdateRequest, _super);
    function MeetingLiveStreamStatusUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingLiveStreamStatusUpdatePathParams)
    ], MeetingLiveStreamStatusUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingLiveStreamStatusUpdateRequests)
    ], MeetingLiveStreamStatusUpdateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingLiveStreamStatusUpdateSecurity)
    ], MeetingLiveStreamStatusUpdateRequest.prototype, "security", void 0);
    return MeetingLiveStreamStatusUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.MeetingLiveStreamStatusUpdateRequest = MeetingLiveStreamStatusUpdateRequest;
var MeetingLiveStreamStatusUpdateResponse = /** @class */ (function (_super) {
    __extends(MeetingLiveStreamStatusUpdateResponse, _super);
    function MeetingLiveStreamStatusUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MeetingLiveStreamStatusUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MeetingLiveStreamStatusUpdateResponse.prototype, "statusCode", void 0);
    return MeetingLiveStreamStatusUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.MeetingLiveStreamStatusUpdateResponse = MeetingLiveStreamStatusUpdateResponse;
