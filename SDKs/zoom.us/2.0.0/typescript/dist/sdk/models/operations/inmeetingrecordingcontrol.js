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
exports.InMeetingRecordingControlResponse = exports.InMeetingRecordingControlRequest = exports.InMeetingRecordingControlRequests = exports.InMeetingRecordingControlMultipartFormData = exports.InMeetingRecordingControlApplicationJson = exports.InMeetingRecordingControlPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var InMeetingRecordingControlPathParams = /** @class */ (function (_super) {
    __extends(InMeetingRecordingControlPathParams, _super);
    function InMeetingRecordingControlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", String)
    ], InMeetingRecordingControlPathParams.prototype, "meetingId", void 0);
    return InMeetingRecordingControlPathParams;
}(utils_1.SpeakeasyBase));
exports.InMeetingRecordingControlPathParams = InMeetingRecordingControlPathParams;
var InMeetingRecordingControlApplicationJson = /** @class */ (function (_super) {
    __extends(InMeetingRecordingControlApplicationJson, _super);
    function InMeetingRecordingControlApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], InMeetingRecordingControlApplicationJson.prototype, "method", void 0);
    return InMeetingRecordingControlApplicationJson;
}(utils_1.SpeakeasyBase));
exports.InMeetingRecordingControlApplicationJson = InMeetingRecordingControlApplicationJson;
var InMeetingRecordingControlMultipartFormData = /** @class */ (function (_super) {
    __extends(InMeetingRecordingControlMultipartFormData, _super);
    function InMeetingRecordingControlMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=method" }),
        __metadata("design:type", String)
    ], InMeetingRecordingControlMultipartFormData.prototype, "method", void 0);
    return InMeetingRecordingControlMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.InMeetingRecordingControlMultipartFormData = InMeetingRecordingControlMultipartFormData;
var InMeetingRecordingControlRequests = /** @class */ (function (_super) {
    __extends(InMeetingRecordingControlRequests, _super);
    function InMeetingRecordingControlRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", InMeetingRecordingControlApplicationJson)
    ], InMeetingRecordingControlRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", InMeetingRecordingControlMultipartFormData)
    ], InMeetingRecordingControlRequests.prototype, "object1", void 0);
    return InMeetingRecordingControlRequests;
}(utils_1.SpeakeasyBase));
exports.InMeetingRecordingControlRequests = InMeetingRecordingControlRequests;
var InMeetingRecordingControlRequest = /** @class */ (function (_super) {
    __extends(InMeetingRecordingControlRequest, _super);
    function InMeetingRecordingControlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", InMeetingRecordingControlPathParams)
    ], InMeetingRecordingControlRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", InMeetingRecordingControlRequests)
    ], InMeetingRecordingControlRequest.prototype, "request", void 0);
    return InMeetingRecordingControlRequest;
}(utils_1.SpeakeasyBase));
exports.InMeetingRecordingControlRequest = InMeetingRecordingControlRequest;
var InMeetingRecordingControlResponse = /** @class */ (function (_super) {
    __extends(InMeetingRecordingControlResponse, _super);
    function InMeetingRecordingControlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], InMeetingRecordingControlResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], InMeetingRecordingControlResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], InMeetingRecordingControlResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], InMeetingRecordingControlResponse.prototype, "inMeetingRecordingControl202ApplicationJSONAny", void 0);
    return InMeetingRecordingControlResponse;
}(utils_1.SpeakeasyBase));
exports.InMeetingRecordingControlResponse = InMeetingRecordingControlResponse;
