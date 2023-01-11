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
exports.PastMeetingDetailsResponse = exports.PastMeetingDetailsRequest = exports.PastMeetingDetails200ApplicationJson = exports.PastMeetingDetailsSecurity = exports.PastMeetingDetailsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PastMeetingDetailsPathParams = /** @class */ (function (_super) {
    __extends(PastMeetingDetailsPathParams, _super);
    function PastMeetingDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingUUID" }),
        __metadata("design:type", String)
    ], PastMeetingDetailsPathParams.prototype, "meetingUUID", void 0);
    return PastMeetingDetailsPathParams;
}(utils_1.SpeakeasyBase));
exports.PastMeetingDetailsPathParams = PastMeetingDetailsPathParams;
var PastMeetingDetailsSecurity = /** @class */ (function (_super) {
    __extends(PastMeetingDetailsSecurity, _super);
    function PastMeetingDetailsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], PastMeetingDetailsSecurity.prototype, "oAuth", void 0);
    return PastMeetingDetailsSecurity;
}(utils_1.SpeakeasyBase));
exports.PastMeetingDetailsSecurity = PastMeetingDetailsSecurity;
var PastMeetingDetails200ApplicationJson = /** @class */ (function (_super) {
    __extends(PastMeetingDetails200ApplicationJson, _super);
    function PastMeetingDetails200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], PastMeetingDetails200ApplicationJson.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_time" }),
        __metadata("design:type", Date)
    ], PastMeetingDetails200ApplicationJson.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_id" }),
        __metadata("design:type", String)
    ], PastMeetingDetails200ApplicationJson.prototype, "hostId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PastMeetingDetails200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants_count" }),
        __metadata("design:type", Number)
    ], PastMeetingDetails200ApplicationJson.prototype, "participantsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], PastMeetingDetails200ApplicationJson.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], PastMeetingDetails200ApplicationJson.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_minutes" }),
        __metadata("design:type", Number)
    ], PastMeetingDetails200ApplicationJson.prototype, "totalMinutes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], PastMeetingDetails200ApplicationJson.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_email" }),
        __metadata("design:type", String)
    ], PastMeetingDetails200ApplicationJson.prototype, "userEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_name" }),
        __metadata("design:type", String)
    ], PastMeetingDetails200ApplicationJson.prototype, "userName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], PastMeetingDetails200ApplicationJson.prototype, "uuid", void 0);
    return PastMeetingDetails200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PastMeetingDetails200ApplicationJson = PastMeetingDetails200ApplicationJson;
var PastMeetingDetailsRequest = /** @class */ (function (_super) {
    __extends(PastMeetingDetailsRequest, _super);
    function PastMeetingDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PastMeetingDetailsPathParams)
    ], PastMeetingDetailsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PastMeetingDetailsSecurity)
    ], PastMeetingDetailsRequest.prototype, "security", void 0);
    return PastMeetingDetailsRequest;
}(utils_1.SpeakeasyBase));
exports.PastMeetingDetailsRequest = PastMeetingDetailsRequest;
var PastMeetingDetailsResponse = /** @class */ (function (_super) {
    __extends(PastMeetingDetailsResponse, _super);
    function PastMeetingDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PastMeetingDetailsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PastMeetingDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PastMeetingDetailsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PastMeetingDetails200ApplicationJson)
    ], PastMeetingDetailsResponse.prototype, "pastMeetingDetails200ApplicationJSONObject", void 0);
    return PastMeetingDetailsResponse;
}(utils_1.SpeakeasyBase));
exports.PastMeetingDetailsResponse = PastMeetingDetailsResponse;
