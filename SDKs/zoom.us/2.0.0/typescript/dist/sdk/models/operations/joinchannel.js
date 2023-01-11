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
exports.JoinChannelResponse = exports.JoinChannelRequest = exports.JoinChannel201ApplicationJson = exports.JoinChannelSecurity = exports.JoinChannelPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var JoinChannelPathParams = /** @class */ (function (_super) {
    __extends(JoinChannelPathParams, _super);
    function JoinChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=channelId" }),
        __metadata("design:type", String)
    ], JoinChannelPathParams.prototype, "channelId", void 0);
    return JoinChannelPathParams;
}(utils_1.SpeakeasyBase));
exports.JoinChannelPathParams = JoinChannelPathParams;
var JoinChannelSecurity = /** @class */ (function (_super) {
    __extends(JoinChannelSecurity, _super);
    function JoinChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], JoinChannelSecurity.prototype, "oAuth", void 0);
    return JoinChannelSecurity;
}(utils_1.SpeakeasyBase));
exports.JoinChannelSecurity = JoinChannelSecurity;
var JoinChannel201ApplicationJson = /** @class */ (function (_super) {
    __extends(JoinChannel201ApplicationJson, _super);
    function JoinChannel201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=added_at" }),
        __metadata("design:type", Date)
    ], JoinChannel201ApplicationJson.prototype, "addedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], JoinChannel201ApplicationJson.prototype, "id", void 0);
    return JoinChannel201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.JoinChannel201ApplicationJson = JoinChannel201ApplicationJson;
var JoinChannelRequest = /** @class */ (function (_super) {
    __extends(JoinChannelRequest, _super);
    function JoinChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", JoinChannelPathParams)
    ], JoinChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", JoinChannelSecurity)
    ], JoinChannelRequest.prototype, "security", void 0);
    return JoinChannelRequest;
}(utils_1.SpeakeasyBase));
exports.JoinChannelRequest = JoinChannelRequest;
var JoinChannelResponse = /** @class */ (function (_super) {
    __extends(JoinChannelResponse, _super);
    function JoinChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], JoinChannelResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], JoinChannelResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], JoinChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", JoinChannel201ApplicationJson)
    ], JoinChannelResponse.prototype, "joinChannel201ApplicationJSONObject", void 0);
    return JoinChannelResponse;
}(utils_1.SpeakeasyBase));
exports.JoinChannelResponse = JoinChannelResponse;
