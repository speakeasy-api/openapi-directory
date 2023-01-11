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
exports.UpdateUserSettingResponse = exports.UpdateUserSettingRequest = exports.UpdateUserSettingSecurity = exports.UpdateUserSettingRequests = exports.UpdateUserSettingMultipartFormData = exports.UpdateUserSettingMultipartFormDataVoiceMail = exports.UpdateUserSettingApplicationJson = exports.UpdateUserSettingApplicationJsonVoiceMail = exports.UpdateUserSettingPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateUserSettingPathParams = /** @class */ (function (_super) {
    __extends(UpdateUserSettingPathParams, _super);
    function UpdateUserSettingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=settingType" }),
        __metadata("design:type", String)
    ], UpdateUserSettingPathParams.prototype, "settingType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UpdateUserSettingPathParams.prototype, "userId", void 0);
    return UpdateUserSettingPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateUserSettingPathParams = UpdateUserSettingPathParams;
// UpdateUserSettingApplicationJsonVoiceMail
/**
 * Update the voicemail setting.
**/
var UpdateUserSettingApplicationJsonVoiceMail = /** @class */ (function (_super) {
    __extends(UpdateUserSettingApplicationJsonVoiceMail, _super);
    function UpdateUserSettingApplicationJsonVoiceMail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=access_user_id" }),
        __metadata("design:type", String)
    ], UpdateUserSettingApplicationJsonVoiceMail.prototype, "accessUserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], UpdateUserSettingApplicationJsonVoiceMail.prototype, "delete", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], UpdateUserSettingApplicationJsonVoiceMail.prototype, "download", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shared_id" }),
        __metadata("design:type", String)
    ], UpdateUserSettingApplicationJsonVoiceMail.prototype, "sharedId", void 0);
    return UpdateUserSettingApplicationJsonVoiceMail;
}(utils_1.SpeakeasyBase));
exports.UpdateUserSettingApplicationJsonVoiceMail = UpdateUserSettingApplicationJsonVoiceMail;
var UpdateUserSettingApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateUserSettingApplicationJson, _super);
    function UpdateUserSettingApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=voice_mail" }),
        __metadata("design:type", UpdateUserSettingApplicationJsonVoiceMail)
    ], UpdateUserSettingApplicationJson.prototype, "voiceMail", void 0);
    return UpdateUserSettingApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateUserSettingApplicationJson = UpdateUserSettingApplicationJson;
// UpdateUserSettingMultipartFormDataVoiceMail
/**
 * Update the voicemail setting.
**/
var UpdateUserSettingMultipartFormDataVoiceMail = /** @class */ (function (_super) {
    __extends(UpdateUserSettingMultipartFormDataVoiceMail, _super);
    function UpdateUserSettingMultipartFormDataVoiceMail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=access_user_id" }),
        __metadata("design:type", String)
    ], UpdateUserSettingMultipartFormDataVoiceMail.prototype, "accessUserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], UpdateUserSettingMultipartFormDataVoiceMail.prototype, "delete", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], UpdateUserSettingMultipartFormDataVoiceMail.prototype, "download", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shared_id" }),
        __metadata("design:type", String)
    ], UpdateUserSettingMultipartFormDataVoiceMail.prototype, "sharedId", void 0);
    return UpdateUserSettingMultipartFormDataVoiceMail;
}(utils_1.SpeakeasyBase));
exports.UpdateUserSettingMultipartFormDataVoiceMail = UpdateUserSettingMultipartFormDataVoiceMail;
var UpdateUserSettingMultipartFormData = /** @class */ (function (_super) {
    __extends(UpdateUserSettingMultipartFormData, _super);
    function UpdateUserSettingMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=voice_mail;json=true" }),
        __metadata("design:type", UpdateUserSettingMultipartFormDataVoiceMail)
    ], UpdateUserSettingMultipartFormData.prototype, "voiceMail", void 0);
    return UpdateUserSettingMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.UpdateUserSettingMultipartFormData = UpdateUserSettingMultipartFormData;
var UpdateUserSettingRequests = /** @class */ (function (_super) {
    __extends(UpdateUserSettingRequests, _super);
    function UpdateUserSettingRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateUserSettingApplicationJson)
    ], UpdateUserSettingRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdateUserSettingMultipartFormData)
    ], UpdateUserSettingRequests.prototype, "object1", void 0);
    return UpdateUserSettingRequests;
}(utils_1.SpeakeasyBase));
exports.UpdateUserSettingRequests = UpdateUserSettingRequests;
var UpdateUserSettingSecurity = /** @class */ (function (_super) {
    __extends(UpdateUserSettingSecurity, _super);
    function UpdateUserSettingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], UpdateUserSettingSecurity.prototype, "oAuth", void 0);
    return UpdateUserSettingSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateUserSettingSecurity = UpdateUserSettingSecurity;
var UpdateUserSettingRequest = /** @class */ (function (_super) {
    __extends(UpdateUserSettingRequest, _super);
    function UpdateUserSettingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateUserSettingPathParams)
    ], UpdateUserSettingRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateUserSettingRequests)
    ], UpdateUserSettingRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateUserSettingSecurity)
    ], UpdateUserSettingRequest.prototype, "security", void 0);
    return UpdateUserSettingRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateUserSettingRequest = UpdateUserSettingRequest;
var UpdateUserSettingResponse = /** @class */ (function (_super) {
    __extends(UpdateUserSettingResponse, _super);
    function UpdateUserSettingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdateUserSettingResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateUserSettingResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateUserSettingResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateUserSettingResponse.prototype, "updateUserSetting204ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateUserSettingResponse.prototype, "updateUserSetting400ApplicationJSONObject", void 0);
    return UpdateUserSettingResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateUserSettingResponse = UpdateUserSettingResponse;
