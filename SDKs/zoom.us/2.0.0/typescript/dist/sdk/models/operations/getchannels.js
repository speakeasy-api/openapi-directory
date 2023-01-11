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
exports.GetChannelsResponse = exports.GetChannelsRequest = exports.GetChannels200ApplicationJson = exports.GetChannels200ApplicationJsonChannels = exports.GetChannels200ApplicationJsonChannelsChannelsSettings = exports.GetChannelsSecurity = exports.GetChannelsQueryParams = exports.GetChannelsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetChannelsPathParams = /** @class */ (function (_super) {
    __extends(GetChannelsPathParams, _super);
    function GetChannelsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GetChannelsPathParams.prototype, "userId", void 0);
    return GetChannelsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetChannelsPathParams = GetChannelsPathParams;
var GetChannelsQueryParams = /** @class */ (function (_super) {
    __extends(GetChannelsQueryParams, _super);
    function GetChannelsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], GetChannelsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetChannelsQueryParams.prototype, "pageSize", void 0);
    return GetChannelsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetChannelsQueryParams = GetChannelsQueryParams;
var GetChannelsSecurity = /** @class */ (function (_super) {
    __extends(GetChannelsSecurity, _super);
    function GetChannelsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], GetChannelsSecurity.prototype, "oAuth", void 0);
    return GetChannelsSecurity;
}(utils_1.SpeakeasyBase));
exports.GetChannelsSecurity = GetChannelsSecurity;
var GetChannels200ApplicationJsonChannelsChannelsSettings = /** @class */ (function (_super) {
    __extends(GetChannels200ApplicationJsonChannelsChannelsSettings, _super);
    function GetChannels200ApplicationJsonChannelsChannelsSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_to_add_external_users" }),
        __metadata("design:type", Number)
    ], GetChannels200ApplicationJsonChannelsChannelsSettings.prototype, "allowToAddExternalUsers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=new_members_can_see_previous_messages_files" }),
        __metadata("design:type", Boolean)
    ], GetChannels200ApplicationJsonChannelsChannelsSettings.prototype, "newMembersCanSeePreviousMessagesFiles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=posting_permissions" }),
        __metadata("design:type", Number)
    ], GetChannels200ApplicationJsonChannelsChannelsSettings.prototype, "postingPermissions", void 0);
    return GetChannels200ApplicationJsonChannelsChannelsSettings;
}(utils_1.SpeakeasyBase));
exports.GetChannels200ApplicationJsonChannelsChannelsSettings = GetChannels200ApplicationJsonChannelsChannelsSettings;
var GetChannels200ApplicationJsonChannels = /** @class */ (function (_super) {
    __extends(GetChannels200ApplicationJsonChannels, _super);
    function GetChannels200ApplicationJsonChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channels_settings" }),
        __metadata("design:type", GetChannels200ApplicationJsonChannelsChannelsSettings)
    ], GetChannels200ApplicationJsonChannels.prototype, "channelsSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetChannels200ApplicationJsonChannels.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetChannels200ApplicationJsonChannels.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], GetChannels200ApplicationJsonChannels.prototype, "type", void 0);
    return GetChannels200ApplicationJsonChannels;
}(utils_1.SpeakeasyBase));
exports.GetChannels200ApplicationJsonChannels = GetChannels200ApplicationJsonChannels;
var GetChannels200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChannels200ApplicationJson, _super);
    function GetChannels200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channels", elemType: GetChannels200ApplicationJsonChannels }),
        __metadata("design:type", Array)
    ], GetChannels200ApplicationJson.prototype, "channels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], GetChannels200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], GetChannels200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], GetChannels200ApplicationJson.prototype, "totalRecords", void 0);
    return GetChannels200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetChannels200ApplicationJson = GetChannels200ApplicationJson;
var GetChannelsRequest = /** @class */ (function (_super) {
    __extends(GetChannelsRequest, _super);
    function GetChannelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetChannelsPathParams)
    ], GetChannelsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetChannelsQueryParams)
    ], GetChannelsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetChannelsSecurity)
    ], GetChannelsRequest.prototype, "security", void 0);
    return GetChannelsRequest;
}(utils_1.SpeakeasyBase));
exports.GetChannelsRequest = GetChannelsRequest;
var GetChannelsResponse = /** @class */ (function (_super) {
    __extends(GetChannelsResponse, _super);
    function GetChannelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetChannelsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetChannelsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetChannelsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetChannels200ApplicationJson)
    ], GetChannelsResponse.prototype, "getChannels200ApplicationJSONObject", void 0);
    return GetChannelsResponse;
}(utils_1.SpeakeasyBase));
exports.GetChannelsResponse = GetChannelsResponse;
