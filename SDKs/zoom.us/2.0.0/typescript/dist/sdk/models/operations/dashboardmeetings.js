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
exports.DashboardMeetingsResponse = exports.DashboardMeetingsRequest = exports.DashboardMeetings200ApplicationJson = exports.DashboardMeetings200ApplicationJsonMetrics = exports.DashboardMeetings200ApplicationJsonMetricsTrackingFields = exports.DashboardMeetings200ApplicationJsonMetricsCustomKeys = exports.DashboardMeetingsSecurity = exports.DashboardMeetingsQueryParams = exports.DashboardMeetingsTypeEnum = exports.DashboardMeetingsIncludeFieldsEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DashboardMeetingsIncludeFieldsEnum;
(function (DashboardMeetingsIncludeFieldsEnum) {
    DashboardMeetingsIncludeFieldsEnum["TrackingFields"] = "tracking_fields";
})(DashboardMeetingsIncludeFieldsEnum = exports.DashboardMeetingsIncludeFieldsEnum || (exports.DashboardMeetingsIncludeFieldsEnum = {}));
var DashboardMeetingsTypeEnum;
(function (DashboardMeetingsTypeEnum) {
    DashboardMeetingsTypeEnum["Past"] = "past";
    DashboardMeetingsTypeEnum["PastOne"] = "pastOne";
    DashboardMeetingsTypeEnum["Live"] = "live";
})(DashboardMeetingsTypeEnum = exports.DashboardMeetingsTypeEnum || (exports.DashboardMeetingsTypeEnum = {}));
var DashboardMeetingsQueryParams = /** @class */ (function (_super) {
    __extends(DashboardMeetingsQueryParams, _super);
    function DashboardMeetingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Date)
    ], DashboardMeetingsQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_fields" }),
        __metadata("design:type", String)
    ], DashboardMeetingsQueryParams.prototype, "includeFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], DashboardMeetingsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], DashboardMeetingsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", Date)
    ], DashboardMeetingsQueryParams.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DashboardMeetingsQueryParams.prototype, "type", void 0);
    return DashboardMeetingsQueryParams;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingsQueryParams = DashboardMeetingsQueryParams;
var DashboardMeetingsSecurity = /** @class */ (function (_super) {
    __extends(DashboardMeetingsSecurity, _super);
    function DashboardMeetingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], DashboardMeetingsSecurity.prototype, "oAuth", void 0);
    return DashboardMeetingsSecurity;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingsSecurity = DashboardMeetingsSecurity;
var DashboardMeetings200ApplicationJsonMetricsCustomKeys = /** @class */ (function (_super) {
    __extends(DashboardMeetings200ApplicationJsonMetricsCustomKeys, _super);
    function DashboardMeetings200ApplicationJsonMetricsCustomKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], DashboardMeetings200ApplicationJsonMetricsCustomKeys.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], DashboardMeetings200ApplicationJsonMetricsCustomKeys.prototype, "value", void 0);
    return DashboardMeetings200ApplicationJsonMetricsCustomKeys;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetings200ApplicationJsonMetricsCustomKeys = DashboardMeetings200ApplicationJsonMetricsCustomKeys;
var DashboardMeetings200ApplicationJsonMetricsTrackingFields = /** @class */ (function (_super) {
    __extends(DashboardMeetings200ApplicationJsonMetricsTrackingFields, _super);
    function DashboardMeetings200ApplicationJsonMetricsTrackingFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], DashboardMeetings200ApplicationJsonMetricsTrackingFields.prototype, "field", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], DashboardMeetings200ApplicationJsonMetricsTrackingFields.prototype, "value", void 0);
    return DashboardMeetings200ApplicationJsonMetricsTrackingFields;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetings200ApplicationJsonMetricsTrackingFields = DashboardMeetings200ApplicationJsonMetricsTrackingFields;
// DashboardMeetings200ApplicationJsonMetrics
/**
 * Meeting metric details.
**/
var DashboardMeetings200ApplicationJsonMetrics = /** @class */ (function (_super) {
    __extends(DashboardMeetings200ApplicationJsonMetrics, _super);
    function DashboardMeetings200ApplicationJsonMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_keys", elemType: DashboardMeetings200ApplicationJsonMetricsCustomKeys }),
        __metadata("design:type", Array)
    ], DashboardMeetings200ApplicationJsonMetrics.prototype, "customKeys", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dept" }),
        __metadata("design:type", String)
    ], DashboardMeetings200ApplicationJsonMetrics.prototype, "dept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], DashboardMeetings200ApplicationJsonMetrics.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], DashboardMeetings200ApplicationJsonMetrics.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_time" }),
        __metadata("design:type", Date)
    ], DashboardMeetings200ApplicationJsonMetrics.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_3rd_party_audio" }),
        __metadata("design:type", Boolean)
    ], DashboardMeetings200ApplicationJsonMetrics.prototype, "has3rdPartyAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_pstn" }),
        __metadata("design:type", Boolean)
    ], DashboardMeetings200ApplicationJsonMetrics.prototype, "hasPstn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_recording" }),
        __metadata("design:type", Boolean)
    ], DashboardMeetings200ApplicationJsonMetrics.prototype, "hasRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_screen_share" }),
        __metadata("design:type", Boolean)
    ], DashboardMeetings200ApplicationJsonMetrics.prototype, "hasScreenShare", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_sip" }),
        __metadata("design:type", Boolean)
    ], DashboardMeetings200ApplicationJsonMetrics.prototype, "hasSip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_video" }),
        __metadata("design:type", Boolean)
    ], DashboardMeetings200ApplicationJsonMetrics.prototype, "hasVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_voip" }),
        __metadata("design:type", Boolean)
    ], DashboardMeetings200ApplicationJsonMetrics.prototype, "hasVoip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], DashboardMeetings200ApplicationJsonMetrics.prototype, "host", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DashboardMeetings200ApplicationJsonMetrics.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=in_room_participants" }),
        __metadata("design:type", Number)
    ], DashboardMeetings200ApplicationJsonMetrics.prototype, "inRoomParticipants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants" }),
        __metadata("design:type", Number)
    ], DashboardMeetings200ApplicationJsonMetrics.prototype, "participants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], DashboardMeetings200ApplicationJsonMetrics.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], DashboardMeetings200ApplicationJsonMetrics.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tracking_fields", elemType: DashboardMeetings200ApplicationJsonMetricsTrackingFields }),
        __metadata("design:type", Array)
    ], DashboardMeetings200ApplicationJsonMetrics.prototype, "trackingFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_type" }),
        __metadata("design:type", String)
    ], DashboardMeetings200ApplicationJsonMetrics.prototype, "userType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], DashboardMeetings200ApplicationJsonMetrics.prototype, "uuid", void 0);
    return DashboardMeetings200ApplicationJsonMetrics;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetings200ApplicationJsonMetrics = DashboardMeetings200ApplicationJsonMetrics;
// DashboardMeetings200ApplicationJson
/**
 * Pagination object.
**/
var DashboardMeetings200ApplicationJson = /** @class */ (function (_super) {
    __extends(DashboardMeetings200ApplicationJson, _super);
    function DashboardMeetings200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", Date)
    ], DashboardMeetings200ApplicationJson.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meetings", elemType: DashboardMeetings200ApplicationJsonMetrics }),
        __metadata("design:type", Array)
    ], DashboardMeetings200ApplicationJson.prototype, "meetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], DashboardMeetings200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], DashboardMeetings200ApplicationJson.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], DashboardMeetings200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", Date)
    ], DashboardMeetings200ApplicationJson.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], DashboardMeetings200ApplicationJson.prototype, "totalRecords", void 0);
    return DashboardMeetings200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetings200ApplicationJson = DashboardMeetings200ApplicationJson;
var DashboardMeetingsRequest = /** @class */ (function (_super) {
    __extends(DashboardMeetingsRequest, _super);
    function DashboardMeetingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardMeetingsQueryParams)
    ], DashboardMeetingsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardMeetingsSecurity)
    ], DashboardMeetingsRequest.prototype, "security", void 0);
    return DashboardMeetingsRequest;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingsRequest = DashboardMeetingsRequest;
var DashboardMeetingsResponse = /** @class */ (function (_super) {
    __extends(DashboardMeetingsResponse, _super);
    function DashboardMeetingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DashboardMeetingsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DashboardMeetingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DashboardMeetingsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardMeetings200ApplicationJson)
    ], DashboardMeetingsResponse.prototype, "dashboardMeetings200ApplicationJSONObject", void 0);
    return DashboardMeetingsResponse;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingsResponse = DashboardMeetingsResponse;
