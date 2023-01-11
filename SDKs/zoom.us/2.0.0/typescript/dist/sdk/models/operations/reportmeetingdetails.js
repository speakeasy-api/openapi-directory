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
exports.ReportMeetingDetailsResponse = exports.ReportMeetingDetailsRequest = exports.ReportMeetingDetails200ApplicationJson = exports.ReportMeetingDetails200ApplicationJsonTrackingFields = exports.ReportMeetingDetails200ApplicationJsonCustomKeys = exports.ReportMeetingDetailsSecurity = exports.ReportMeetingDetailsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReportMeetingDetailsPathParams = /** @class */ (function (_super) {
    __extends(ReportMeetingDetailsPathParams, _super);
    function ReportMeetingDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", String)
    ], ReportMeetingDetailsPathParams.prototype, "meetingId", void 0);
    return ReportMeetingDetailsPathParams;
}(utils_1.SpeakeasyBase));
exports.ReportMeetingDetailsPathParams = ReportMeetingDetailsPathParams;
var ReportMeetingDetailsSecurity = /** @class */ (function (_super) {
    __extends(ReportMeetingDetailsSecurity, _super);
    function ReportMeetingDetailsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ReportMeetingDetailsSecurity.prototype, "oAuth", void 0);
    return ReportMeetingDetailsSecurity;
}(utils_1.SpeakeasyBase));
exports.ReportMeetingDetailsSecurity = ReportMeetingDetailsSecurity;
var ReportMeetingDetails200ApplicationJsonCustomKeys = /** @class */ (function (_super) {
    __extends(ReportMeetingDetails200ApplicationJsonCustomKeys, _super);
    function ReportMeetingDetails200ApplicationJsonCustomKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ReportMeetingDetails200ApplicationJsonCustomKeys.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ReportMeetingDetails200ApplicationJsonCustomKeys.prototype, "value", void 0);
    return ReportMeetingDetails200ApplicationJsonCustomKeys;
}(utils_1.SpeakeasyBase));
exports.ReportMeetingDetails200ApplicationJsonCustomKeys = ReportMeetingDetails200ApplicationJsonCustomKeys;
var ReportMeetingDetails200ApplicationJsonTrackingFields = /** @class */ (function (_super) {
    __extends(ReportMeetingDetails200ApplicationJsonTrackingFields, _super);
    function ReportMeetingDetails200ApplicationJsonTrackingFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], ReportMeetingDetails200ApplicationJsonTrackingFields.prototype, "field", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ReportMeetingDetails200ApplicationJsonTrackingFields.prototype, "value", void 0);
    return ReportMeetingDetails200ApplicationJsonTrackingFields;
}(utils_1.SpeakeasyBase));
exports.ReportMeetingDetails200ApplicationJsonTrackingFields = ReportMeetingDetails200ApplicationJsonTrackingFields;
var ReportMeetingDetails200ApplicationJson = /** @class */ (function (_super) {
    __extends(ReportMeetingDetails200ApplicationJson, _super);
    function ReportMeetingDetails200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_keys", elemType: ReportMeetingDetails200ApplicationJsonCustomKeys }),
        __metadata("design:type", Array)
    ], ReportMeetingDetails200ApplicationJson.prototype, "customKeys", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dept" }),
        __metadata("design:type", String)
    ], ReportMeetingDetails200ApplicationJson.prototype, "dept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], ReportMeetingDetails200ApplicationJson.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_time" }),
        __metadata("design:type", Date)
    ], ReportMeetingDetails200ApplicationJson.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ReportMeetingDetails200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants_count" }),
        __metadata("design:type", Number)
    ], ReportMeetingDetails200ApplicationJson.prototype, "participantsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], ReportMeetingDetails200ApplicationJson.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], ReportMeetingDetails200ApplicationJson.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_minutes" }),
        __metadata("design:type", Number)
    ], ReportMeetingDetails200ApplicationJson.prototype, "totalMinutes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tracking_fields", elemType: ReportMeetingDetails200ApplicationJsonTrackingFields }),
        __metadata("design:type", Array)
    ], ReportMeetingDetails200ApplicationJson.prototype, "trackingFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], ReportMeetingDetails200ApplicationJson.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_email" }),
        __metadata("design:type", String)
    ], ReportMeetingDetails200ApplicationJson.prototype, "userEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_name" }),
        __metadata("design:type", String)
    ], ReportMeetingDetails200ApplicationJson.prototype, "userName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], ReportMeetingDetails200ApplicationJson.prototype, "uuid", void 0);
    return ReportMeetingDetails200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ReportMeetingDetails200ApplicationJson = ReportMeetingDetails200ApplicationJson;
var ReportMeetingDetailsRequest = /** @class */ (function (_super) {
    __extends(ReportMeetingDetailsRequest, _super);
    function ReportMeetingDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportMeetingDetailsPathParams)
    ], ReportMeetingDetailsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportMeetingDetailsSecurity)
    ], ReportMeetingDetailsRequest.prototype, "security", void 0);
    return ReportMeetingDetailsRequest;
}(utils_1.SpeakeasyBase));
exports.ReportMeetingDetailsRequest = ReportMeetingDetailsRequest;
var ReportMeetingDetailsResponse = /** @class */ (function (_super) {
    __extends(ReportMeetingDetailsResponse, _super);
    function ReportMeetingDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ReportMeetingDetailsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReportMeetingDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReportMeetingDetailsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportMeetingDetails200ApplicationJson)
    ], ReportMeetingDetailsResponse.prototype, "reportMeetingDetails200ApplicationJSONObject", void 0);
    return ReportMeetingDetailsResponse;
}(utils_1.SpeakeasyBase));
exports.ReportMeetingDetailsResponse = ReportMeetingDetailsResponse;
