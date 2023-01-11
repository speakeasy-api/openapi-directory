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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLiveStreamDetailsResponse = exports.GetLiveStreamDetailsRequest = exports.GetLiveStreamDetails200ApplicationJson = exports.GetLiveStreamDetailsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetLiveStreamDetailsPathParams = /** @class */ (function (_super) {
    __extends(GetLiveStreamDetailsPathParams, _super);
    function GetLiveStreamDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", String)
    ], GetLiveStreamDetailsPathParams.prototype, "meetingId", void 0);
    return GetLiveStreamDetailsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetLiveStreamDetailsPathParams = GetLiveStreamDetailsPathParams;
var GetLiveStreamDetails200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLiveStreamDetails200ApplicationJson, _super);
    function GetLiveStreamDetails200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_url" }),
        __metadata("design:type", String)
    ], GetLiveStreamDetails200ApplicationJson.prototype, "pageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stream_key" }),
        __metadata("design:type", String)
    ], GetLiveStreamDetails200ApplicationJson.prototype, "streamKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stream_url" }),
        __metadata("design:type", String)
    ], GetLiveStreamDetails200ApplicationJson.prototype, "streamUrl", void 0);
    return GetLiveStreamDetails200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetLiveStreamDetails200ApplicationJson = GetLiveStreamDetails200ApplicationJson;
var GetLiveStreamDetailsRequest = /** @class */ (function (_super) {
    __extends(GetLiveStreamDetailsRequest, _super);
    function GetLiveStreamDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLiveStreamDetailsPathParams)
    ], GetLiveStreamDetailsRequest.prototype, "pathParams", void 0);
    return GetLiveStreamDetailsRequest;
}(utils_1.SpeakeasyBase));
exports.GetLiveStreamDetailsRequest = GetLiveStreamDetailsRequest;
var GetLiveStreamDetailsResponse = /** @class */ (function (_super) {
    __extends(GetLiveStreamDetailsResponse, _super);
    function GetLiveStreamDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetLiveStreamDetailsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetLiveStreamDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetLiveStreamDetailsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLiveStreamDetails200ApplicationJson)
    ], GetLiveStreamDetailsResponse.prototype, "getLiveStreamDetails200ApplicationJSONObject", void 0);
    return GetLiveStreamDetailsResponse;
}(utils_1.SpeakeasyBase));
exports.GetLiveStreamDetailsResponse = GetLiveStreamDetailsResponse;
