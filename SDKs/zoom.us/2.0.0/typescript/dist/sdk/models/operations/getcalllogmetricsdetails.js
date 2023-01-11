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
exports.GetCallLogMetricsDetailsResponse = exports.GetCallLogMetricsDetailsRequest = exports.GetCallLogMetricsDetails200ApplicationJson = exports.GetCallLogMetricsDetails200ApplicationJsonCaller = exports.GetCallLogMetricsDetails200ApplicationJsonCallee = exports.GetCallLogMetricsDetailsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetCallLogMetricsDetailsPathParams = /** @class */ (function (_super) {
    __extends(GetCallLogMetricsDetailsPathParams, _super);
    function GetCallLogMetricsDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=call_id" }),
        __metadata("design:type", String)
    ], GetCallLogMetricsDetailsPathParams.prototype, "callId", void 0);
    return GetCallLogMetricsDetailsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetCallLogMetricsDetailsPathParams = GetCallLogMetricsDetailsPathParams;
// GetCallLogMetricsDetails200ApplicationJsonCallee
/**
 * Callee object contains information of the calee.
**/
var GetCallLogMetricsDetails200ApplicationJsonCallee = /** @class */ (function (_super) {
    __extends(GetCallLogMetricsDetails200ApplicationJsonCallee, _super);
    function GetCallLogMetricsDetails200ApplicationJsonCallee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=codec" }),
        __metadata("design:type", String)
    ], GetCallLogMetricsDetails200ApplicationJsonCallee.prototype, "codec", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device_type" }),
        __metadata("design:type", String)
    ], GetCallLogMetricsDetails200ApplicationJsonCallee.prototype, "deviceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", String)
    ], GetCallLogMetricsDetails200ApplicationJsonCallee.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=headset" }),
        __metadata("design:type", String)
    ], GetCallLogMetricsDetails200ApplicationJsonCallee.prototype, "headset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isp" }),
        __metadata("design:type", String)
    ], GetCallLogMetricsDetails200ApplicationJsonCallee.prototype, "isp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=microphone" }),
        __metadata("design:type", String)
    ], GetCallLogMetricsDetails200ApplicationJsonCallee.prototype, "microphone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], GetCallLogMetricsDetails200ApplicationJsonCallee.prototype, "phoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site_id" }),
        __metadata("design:type", String)
    ], GetCallLogMetricsDetails200ApplicationJsonCallee.prototype, "siteId", void 0);
    return GetCallLogMetricsDetails200ApplicationJsonCallee;
}(utils_1.SpeakeasyBase));
exports.GetCallLogMetricsDetails200ApplicationJsonCallee = GetCallLogMetricsDetails200ApplicationJsonCallee;
// GetCallLogMetricsDetails200ApplicationJsonCaller
/**
 * Caller object contains information of the caller.
**/
var GetCallLogMetricsDetails200ApplicationJsonCaller = /** @class */ (function (_super) {
    __extends(GetCallLogMetricsDetails200ApplicationJsonCaller, _super);
    function GetCallLogMetricsDetails200ApplicationJsonCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=codec" }),
        __metadata("design:type", String)
    ], GetCallLogMetricsDetails200ApplicationJsonCaller.prototype, "codec", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device_type" }),
        __metadata("design:type", String)
    ], GetCallLogMetricsDetails200ApplicationJsonCaller.prototype, "deviceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", String)
    ], GetCallLogMetricsDetails200ApplicationJsonCaller.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=headset" }),
        __metadata("design:type", String)
    ], GetCallLogMetricsDetails200ApplicationJsonCaller.prototype, "headset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isp" }),
        __metadata("design:type", String)
    ], GetCallLogMetricsDetails200ApplicationJsonCaller.prototype, "isp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=microphone" }),
        __metadata("design:type", String)
    ], GetCallLogMetricsDetails200ApplicationJsonCaller.prototype, "microphone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], GetCallLogMetricsDetails200ApplicationJsonCaller.prototype, "phoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site_id" }),
        __metadata("design:type", String)
    ], GetCallLogMetricsDetails200ApplicationJsonCaller.prototype, "siteId", void 0);
    return GetCallLogMetricsDetails200ApplicationJsonCaller;
}(utils_1.SpeakeasyBase));
exports.GetCallLogMetricsDetails200ApplicationJsonCaller = GetCallLogMetricsDetails200ApplicationJsonCaller;
var GetCallLogMetricsDetails200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCallLogMetricsDetails200ApplicationJson, _super);
    function GetCallLogMetricsDetails200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_id" }),
        __metadata("design:type", String)
    ], GetCallLogMetricsDetails200ApplicationJson.prototype, "callId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callee" }),
        __metadata("design:type", GetCallLogMetricsDetails200ApplicationJsonCallee)
    ], GetCallLogMetricsDetails200ApplicationJson.prototype, "callee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caller" }),
        __metadata("design:type", GetCallLogMetricsDetails200ApplicationJsonCaller)
    ], GetCallLogMetricsDetails200ApplicationJson.prototype, "caller", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", String)
    ], GetCallLogMetricsDetails200ApplicationJson.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], GetCallLogMetricsDetails200ApplicationJson.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], GetCallLogMetricsDetails200ApplicationJson.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mos" }),
        __metadata("design:type", String)
    ], GetCallLogMetricsDetails200ApplicationJson.prototype, "mos", void 0);
    return GetCallLogMetricsDetails200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetCallLogMetricsDetails200ApplicationJson = GetCallLogMetricsDetails200ApplicationJson;
var GetCallLogMetricsDetailsRequest = /** @class */ (function (_super) {
    __extends(GetCallLogMetricsDetailsRequest, _super);
    function GetCallLogMetricsDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCallLogMetricsDetailsPathParams)
    ], GetCallLogMetricsDetailsRequest.prototype, "pathParams", void 0);
    return GetCallLogMetricsDetailsRequest;
}(utils_1.SpeakeasyBase));
exports.GetCallLogMetricsDetailsRequest = GetCallLogMetricsDetailsRequest;
var GetCallLogMetricsDetailsResponse = /** @class */ (function (_super) {
    __extends(GetCallLogMetricsDetailsResponse, _super);
    function GetCallLogMetricsDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetCallLogMetricsDetailsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCallLogMetricsDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCallLogMetricsDetailsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCallLogMetricsDetails200ApplicationJson)
    ], GetCallLogMetricsDetailsResponse.prototype, "getCallLogMetricsDetails200ApplicationJSONObject", void 0);
    return GetCallLogMetricsDetailsResponse;
}(utils_1.SpeakeasyBase));
exports.GetCallLogMetricsDetailsResponse = GetCallLogMetricsDetailsResponse;
