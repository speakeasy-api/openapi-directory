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
exports.AddUserSettingResponse = exports.AddUserSettingRequest = exports.AddUserSetting201ApplicationJson = exports.AddUserSetting201ApplicationJsonVoiceMail = exports.AddUserSettingSecurity = exports.AddUserSettingRequests = exports.AddUserSettingMultipartFormData = exports.AddUserSettingMultipartFormDataVoiceMail = exports.AddUserSettingApplicationJson = exports.AddUserSettingApplicationJsonVoiceMail = exports.AddUserSettingPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AddUserSettingPathParams = /** @class */ (function (_super) {
    __extends(AddUserSettingPathParams, _super);
    function AddUserSettingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=settingType" }),
        __metadata("design:type", String)
    ], AddUserSettingPathParams.prototype, "settingType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], AddUserSettingPathParams.prototype, "userId", void 0);
    return AddUserSettingPathParams;
}(utils_1.SpeakeasyBase));
exports.AddUserSettingPathParams = AddUserSettingPathParams;
// AddUserSettingApplicationJsonVoiceMail
/**
 * Update the voicemail setting.
**/
var AddUserSettingApplicationJsonVoiceMail = /** @class */ (function (_super) {
    __extends(AddUserSettingApplicationJsonVoiceMail, _super);
    function AddUserSettingApplicationJsonVoiceMail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=access_user_id" }),
        __metadata("design:type", String)
    ], AddUserSettingApplicationJsonVoiceMail.prototype, "accessUserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], AddUserSettingApplicationJsonVoiceMail.prototype, "delete", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], AddUserSettingApplicationJsonVoiceMail.prototype, "download", void 0);
    return AddUserSettingApplicationJsonVoiceMail;
}(utils_1.SpeakeasyBase));
exports.AddUserSettingApplicationJsonVoiceMail = AddUserSettingApplicationJsonVoiceMail;
var AddUserSettingApplicationJson = /** @class */ (function (_super) {
    __extends(AddUserSettingApplicationJson, _super);
    function AddUserSettingApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=voice_mail" }),
        __metadata("design:type", AddUserSettingApplicationJsonVoiceMail)
    ], AddUserSettingApplicationJson.prototype, "voiceMail", void 0);
    return AddUserSettingApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddUserSettingApplicationJson = AddUserSettingApplicationJson;
// AddUserSettingMultipartFormDataVoiceMail
/**
 * Update the voicemail setting.
**/
var AddUserSettingMultipartFormDataVoiceMail = /** @class */ (function (_super) {
    __extends(AddUserSettingMultipartFormDataVoiceMail, _super);
    function AddUserSettingMultipartFormDataVoiceMail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=access_user_id" }),
        __metadata("design:type", String)
    ], AddUserSettingMultipartFormDataVoiceMail.prototype, "accessUserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], AddUserSettingMultipartFormDataVoiceMail.prototype, "delete", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], AddUserSettingMultipartFormDataVoiceMail.prototype, "download", void 0);
    return AddUserSettingMultipartFormDataVoiceMail;
}(utils_1.SpeakeasyBase));
exports.AddUserSettingMultipartFormDataVoiceMail = AddUserSettingMultipartFormDataVoiceMail;
var AddUserSettingMultipartFormData = /** @class */ (function (_super) {
    __extends(AddUserSettingMultipartFormData, _super);
    function AddUserSettingMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=voice_mail;json=true" }),
        __metadata("design:type", AddUserSettingMultipartFormDataVoiceMail)
    ], AddUserSettingMultipartFormData.prototype, "voiceMail", void 0);
    return AddUserSettingMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.AddUserSettingMultipartFormData = AddUserSettingMultipartFormData;
var AddUserSettingRequests = /** @class */ (function (_super) {
    __extends(AddUserSettingRequests, _super);
    function AddUserSettingRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddUserSettingApplicationJson)
    ], AddUserSettingRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AddUserSettingMultipartFormData)
    ], AddUserSettingRequests.prototype, "object1", void 0);
    return AddUserSettingRequests;
}(utils_1.SpeakeasyBase));
exports.AddUserSettingRequests = AddUserSettingRequests;
var AddUserSettingSecurity = /** @class */ (function (_super) {
    __extends(AddUserSettingSecurity, _super);
    function AddUserSettingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], AddUserSettingSecurity.prototype, "oAuth", void 0);
    return AddUserSettingSecurity;
}(utils_1.SpeakeasyBase));
exports.AddUserSettingSecurity = AddUserSettingSecurity;
var AddUserSetting201ApplicationJsonVoiceMail = /** @class */ (function (_super) {
    __extends(AddUserSetting201ApplicationJsonVoiceMail, _super);
    function AddUserSetting201ApplicationJsonVoiceMail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=access_user_id" }),
        __metadata("design:type", String)
    ], AddUserSetting201ApplicationJsonVoiceMail.prototype, "accessUserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], AddUserSetting201ApplicationJsonVoiceMail.prototype, "delete", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], AddUserSetting201ApplicationJsonVoiceMail.prototype, "download", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shared_id" }),
        __metadata("design:type", String)
    ], AddUserSetting201ApplicationJsonVoiceMail.prototype, "sharedId", void 0);
    return AddUserSetting201ApplicationJsonVoiceMail;
}(utils_1.SpeakeasyBase));
exports.AddUserSetting201ApplicationJsonVoiceMail = AddUserSetting201ApplicationJsonVoiceMail;
var AddUserSetting201ApplicationJson = /** @class */ (function (_super) {
    __extends(AddUserSetting201ApplicationJson, _super);
    function AddUserSetting201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=voice_mail" }),
        __metadata("design:type", AddUserSetting201ApplicationJsonVoiceMail)
    ], AddUserSetting201ApplicationJson.prototype, "voiceMail", void 0);
    return AddUserSetting201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddUserSetting201ApplicationJson = AddUserSetting201ApplicationJson;
var AddUserSettingRequest = /** @class */ (function (_super) {
    __extends(AddUserSettingRequest, _super);
    function AddUserSettingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddUserSettingPathParams)
    ], AddUserSettingRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddUserSettingRequests)
    ], AddUserSettingRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddUserSettingSecurity)
    ], AddUserSettingRequest.prototype, "security", void 0);
    return AddUserSettingRequest;
}(utils_1.SpeakeasyBase));
exports.AddUserSettingRequest = AddUserSettingRequest;
var AddUserSettingResponse = /** @class */ (function (_super) {
    __extends(AddUserSettingResponse, _super);
    function AddUserSettingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AddUserSettingResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddUserSettingResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddUserSettingResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddUserSetting201ApplicationJson)
    ], AddUserSettingResponse.prototype, "addUserSetting201ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AddUserSettingResponse.prototype, "addUserSetting400ApplicationJSONAny", void 0);
    return AddUserSettingResponse;
}(utils_1.SpeakeasyBase));
exports.AddUserSettingResponse = AddUserSettingResponse;
