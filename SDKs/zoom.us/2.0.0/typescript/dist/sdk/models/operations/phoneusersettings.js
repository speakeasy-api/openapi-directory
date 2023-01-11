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
exports.PhoneUserSettingsResponse = exports.PhoneUserSettingsRequest = exports.PhoneUserSettings200ApplicationJson = exports.PhoneUserSettings200ApplicationJsonVoiceMail = exports.PhoneUserSettings200ApplicationJsonOutboundCallerIds = exports.PhoneUserSettings200ApplicationJsonOutboundCaller = exports.PhoneUserSettings200ApplicationJsonDeskPhone = exports.PhoneUserSettings200ApplicationJsonDeskPhoneKeysPositions = exports.PhoneUserSettingsSecurity = exports.PhoneUserSettingsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PhoneUserSettingsPathParams = /** @class */ (function (_super) {
    __extends(PhoneUserSettingsPathParams, _super);
    function PhoneUserSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], PhoneUserSettingsPathParams.prototype, "userId", void 0);
    return PhoneUserSettingsPathParams;
}(utils_1.SpeakeasyBase));
exports.PhoneUserSettingsPathParams = PhoneUserSettingsPathParams;
var PhoneUserSettingsSecurity = /** @class */ (function (_super) {
    __extends(PhoneUserSettingsSecurity, _super);
    function PhoneUserSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], PhoneUserSettingsSecurity.prototype, "oAuth", void 0);
    return PhoneUserSettingsSecurity;
}(utils_1.SpeakeasyBase));
exports.PhoneUserSettingsSecurity = PhoneUserSettingsSecurity;
var PhoneUserSettings200ApplicationJsonDeskPhoneKeysPositions = /** @class */ (function (_super) {
    __extends(PhoneUserSettings200ApplicationJsonDeskPhoneKeysPositions, _super);
    function PhoneUserSettings200ApplicationJsonDeskPhoneKeysPositions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primary_number" }),
        __metadata("design:type", String)
    ], PhoneUserSettings200ApplicationJsonDeskPhoneKeysPositions.prototype, "primaryNumber", void 0);
    return PhoneUserSettings200ApplicationJsonDeskPhoneKeysPositions;
}(utils_1.SpeakeasyBase));
exports.PhoneUserSettings200ApplicationJsonDeskPhoneKeysPositions = PhoneUserSettings200ApplicationJsonDeskPhoneKeysPositions;
// PhoneUserSettings200ApplicationJsonDeskPhone
/**
 * Contains information on phones or devices provisioned for the user.
**/
var PhoneUserSettings200ApplicationJsonDeskPhone = /** @class */ (function (_super) {
    __extends(PhoneUserSettings200ApplicationJsonDeskPhone, _super);
    function PhoneUserSettings200ApplicationJsonDeskPhone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=keys_positions" }),
        __metadata("design:type", PhoneUserSettings200ApplicationJsonDeskPhoneKeysPositions)
    ], PhoneUserSettings200ApplicationJsonDeskPhone.prototype, "keysPositions", void 0);
    return PhoneUserSettings200ApplicationJsonDeskPhone;
}(utils_1.SpeakeasyBase));
exports.PhoneUserSettings200ApplicationJsonDeskPhone = PhoneUserSettings200ApplicationJsonDeskPhone;
// PhoneUserSettings200ApplicationJsonOutboundCaller
/**
 * Outbound Caller Info
**/
var PhoneUserSettings200ApplicationJsonOutboundCaller = /** @class */ (function (_super) {
    __extends(PhoneUserSettings200ApplicationJsonOutboundCaller, _super);
    function PhoneUserSettings200ApplicationJsonOutboundCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], PhoneUserSettings200ApplicationJsonOutboundCaller.prototype, "number", void 0);
    return PhoneUserSettings200ApplicationJsonOutboundCaller;
}(utils_1.SpeakeasyBase));
exports.PhoneUserSettings200ApplicationJsonOutboundCaller = PhoneUserSettings200ApplicationJsonOutboundCaller;
var PhoneUserSettings200ApplicationJsonOutboundCallerIds = /** @class */ (function (_super) {
    __extends(PhoneUserSettings200ApplicationJsonOutboundCallerIds, _super);
    function PhoneUserSettings200ApplicationJsonOutboundCallerIds() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_default" }),
        __metadata("design:type", Boolean)
    ], PhoneUserSettings200ApplicationJsonOutboundCallerIds.prototype, "isDefault", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PhoneUserSettings200ApplicationJsonOutboundCallerIds.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], PhoneUserSettings200ApplicationJsonOutboundCallerIds.prototype, "number", void 0);
    return PhoneUserSettings200ApplicationJsonOutboundCallerIds;
}(utils_1.SpeakeasyBase));
exports.PhoneUserSettings200ApplicationJsonOutboundCallerIds = PhoneUserSettings200ApplicationJsonOutboundCallerIds;
// PhoneUserSettings200ApplicationJsonVoiceMail
/**
 * [Shared voicemail access](https://support.zoom.us/hc/en-us/articles/360033863991-Sharing-and-controlling-access-to-a-voicemail-inbox) assigned to user.
**/
var PhoneUserSettings200ApplicationJsonVoiceMail = /** @class */ (function (_super) {
    __extends(PhoneUserSettings200ApplicationJsonVoiceMail, _super);
    function PhoneUserSettings200ApplicationJsonVoiceMail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=access_user_id" }),
        __metadata("design:type", String)
    ], PhoneUserSettings200ApplicationJsonVoiceMail.prototype, "accessUserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], PhoneUserSettings200ApplicationJsonVoiceMail.prototype, "delete", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], PhoneUserSettings200ApplicationJsonVoiceMail.prototype, "download", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shared_id" }),
        __metadata("design:type", String)
    ], PhoneUserSettings200ApplicationJsonVoiceMail.prototype, "sharedId", void 0);
    return PhoneUserSettings200ApplicationJsonVoiceMail;
}(utils_1.SpeakeasyBase));
exports.PhoneUserSettings200ApplicationJsonVoiceMail = PhoneUserSettings200ApplicationJsonVoiceMail;
// PhoneUserSettings200ApplicationJson
/**
 * Phone User Setting
**/
var PhoneUserSettings200ApplicationJson = /** @class */ (function (_super) {
    __extends(PhoneUserSettings200ApplicationJson, _super);
    function PhoneUserSettings200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=area_code" }),
        __metadata("design:type", String)
    ], PhoneUserSettings200ApplicationJson.prototype, "areaCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=company_number" }),
        __metadata("design:type", String)
    ], PhoneUserSettings200ApplicationJson.prototype, "companyNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desk_phone" }),
        __metadata("design:type", PhoneUserSettings200ApplicationJsonDeskPhone)
    ], PhoneUserSettings200ApplicationJson.prototype, "deskPhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outbound_caller" }),
        __metadata("design:type", PhoneUserSettings200ApplicationJsonOutboundCaller)
    ], PhoneUserSettings200ApplicationJson.prototype, "outboundCaller", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outbound_caller_ids" }),
        __metadata("design:type", PhoneUserSettings200ApplicationJsonOutboundCallerIds)
    ], PhoneUserSettings200ApplicationJson.prototype, "outboundCallerIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=voice_mail" }),
        __metadata("design:type", PhoneUserSettings200ApplicationJsonVoiceMail)
    ], PhoneUserSettings200ApplicationJson.prototype, "voiceMail", void 0);
    return PhoneUserSettings200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PhoneUserSettings200ApplicationJson = PhoneUserSettings200ApplicationJson;
var PhoneUserSettingsRequest = /** @class */ (function (_super) {
    __extends(PhoneUserSettingsRequest, _super);
    function PhoneUserSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PhoneUserSettingsPathParams)
    ], PhoneUserSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PhoneUserSettingsSecurity)
    ], PhoneUserSettingsRequest.prototype, "security", void 0);
    return PhoneUserSettingsRequest;
}(utils_1.SpeakeasyBase));
exports.PhoneUserSettingsRequest = PhoneUserSettingsRequest;
var PhoneUserSettingsResponse = /** @class */ (function (_super) {
    __extends(PhoneUserSettingsResponse, _super);
    function PhoneUserSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PhoneUserSettingsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PhoneUserSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PhoneUserSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PhoneUserSettings200ApplicationJson)
    ], PhoneUserSettingsResponse.prototype, "phoneUserSettings200ApplicationJSONObject", void 0);
    return PhoneUserSettingsResponse;
}(utils_1.SpeakeasyBase));
exports.PhoneUserSettingsResponse = PhoneUserSettingsResponse;
