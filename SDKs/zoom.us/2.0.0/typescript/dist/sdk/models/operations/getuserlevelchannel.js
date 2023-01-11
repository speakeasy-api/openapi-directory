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
exports.GetUserLevelChannelResponse = exports.GetUserLevelChannelRequest = exports.GetUserLevelChannel200ApplicationJson = exports.GetUserLevelChannelSecurity = exports.GetUserLevelChannelPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetUserLevelChannelPathParams = /** @class */ (function (_super) {
    __extends(GetUserLevelChannelPathParams, _super);
    function GetUserLevelChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=channelId" }),
        __metadata("design:type", String)
    ], GetUserLevelChannelPathParams.prototype, "channelId", void 0);
    return GetUserLevelChannelPathParams;
}(utils_1.SpeakeasyBase));
exports.GetUserLevelChannelPathParams = GetUserLevelChannelPathParams;
var GetUserLevelChannelSecurity = /** @class */ (function (_super) {
    __extends(GetUserLevelChannelSecurity, _super);
    function GetUserLevelChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], GetUserLevelChannelSecurity.prototype, "oAuth", void 0);
    return GetUserLevelChannelSecurity;
}(utils_1.SpeakeasyBase));
exports.GetUserLevelChannelSecurity = GetUserLevelChannelSecurity;
// GetUserLevelChannel200ApplicationJson
/**
 * The channel object represents a Zoom chat [channel](https://support.zoom.us/hc/en-us/articles/200912909-Getting-Started-With-Channels-Group-Messaging-).
**/
var GetUserLevelChannel200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetUserLevelChannel200ApplicationJson, _super);
    function GetUserLevelChannel200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetUserLevelChannel200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetUserLevelChannel200ApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], GetUserLevelChannel200ApplicationJson.prototype, "type", void 0);
    return GetUserLevelChannel200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetUserLevelChannel200ApplicationJson = GetUserLevelChannel200ApplicationJson;
var GetUserLevelChannelRequest = /** @class */ (function (_super) {
    __extends(GetUserLevelChannelRequest, _super);
    function GetUserLevelChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUserLevelChannelPathParams)
    ], GetUserLevelChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUserLevelChannelSecurity)
    ], GetUserLevelChannelRequest.prototype, "security", void 0);
    return GetUserLevelChannelRequest;
}(utils_1.SpeakeasyBase));
exports.GetUserLevelChannelRequest = GetUserLevelChannelRequest;
var GetUserLevelChannelResponse = /** @class */ (function (_super) {
    __extends(GetUserLevelChannelResponse, _super);
    function GetUserLevelChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetUserLevelChannelResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUserLevelChannelResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUserLevelChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUserLevelChannel200ApplicationJson)
    ], GetUserLevelChannelResponse.prototype, "getUserLevelChannel200ApplicationJSONObject", void 0);
    return GetUserLevelChannelResponse;
}(utils_1.SpeakeasyBase));
exports.GetUserLevelChannelResponse = GetUserLevelChannelResponse;
