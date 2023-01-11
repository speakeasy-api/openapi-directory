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
exports.DashboardWebinarsResponse = exports.DashboardWebinarsRequest = exports.DashboardWebinars200ApplicationJson = exports.DashboardWebinars200ApplicationJsonWebinarMetrics = exports.DashboardWebinars200ApplicationJsonWebinarMetricsCustomKeys = exports.DashboardWebinarsSecurity = exports.DashboardWebinarsQueryParams = exports.DashboardWebinarsTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DashboardWebinarsTypeEnum;
(function (DashboardWebinarsTypeEnum) {
    DashboardWebinarsTypeEnum["Past"] = "past";
    DashboardWebinarsTypeEnum["Live"] = "live";
})(DashboardWebinarsTypeEnum = exports.DashboardWebinarsTypeEnum || (exports.DashboardWebinarsTypeEnum = {}));
var DashboardWebinarsQueryParams = /** @class */ (function (_super) {
    __extends(DashboardWebinarsQueryParams, _super);
    function DashboardWebinarsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Date)
    ], DashboardWebinarsQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], DashboardWebinarsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], DashboardWebinarsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", Date)
    ], DashboardWebinarsQueryParams.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DashboardWebinarsQueryParams.prototype, "type", void 0);
    return DashboardWebinarsQueryParams;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarsQueryParams = DashboardWebinarsQueryParams;
var DashboardWebinarsSecurity = /** @class */ (function (_super) {
    __extends(DashboardWebinarsSecurity, _super);
    function DashboardWebinarsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], DashboardWebinarsSecurity.prototype, "oAuth", void 0);
    return DashboardWebinarsSecurity;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarsSecurity = DashboardWebinarsSecurity;
var DashboardWebinars200ApplicationJsonWebinarMetricsCustomKeys = /** @class */ (function (_super) {
    __extends(DashboardWebinars200ApplicationJsonWebinarMetricsCustomKeys, _super);
    function DashboardWebinars200ApplicationJsonWebinarMetricsCustomKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], DashboardWebinars200ApplicationJsonWebinarMetricsCustomKeys.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], DashboardWebinars200ApplicationJsonWebinarMetricsCustomKeys.prototype, "value", void 0);
    return DashboardWebinars200ApplicationJsonWebinarMetricsCustomKeys;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinars200ApplicationJsonWebinarMetricsCustomKeys = DashboardWebinars200ApplicationJsonWebinarMetricsCustomKeys;
// DashboardWebinars200ApplicationJsonWebinarMetrics
/**
 * Webinar metric details.
**/
var DashboardWebinars200ApplicationJsonWebinarMetrics = /** @class */ (function (_super) {
    __extends(DashboardWebinars200ApplicationJsonWebinarMetrics, _super);
    function DashboardWebinars200ApplicationJsonWebinarMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_keys", elemType: DashboardWebinars200ApplicationJsonWebinarMetricsCustomKeys }),
        __metadata("design:type", Array)
    ], DashboardWebinars200ApplicationJsonWebinarMetrics.prototype, "customKeys", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dept" }),
        __metadata("design:type", String)
    ], DashboardWebinars200ApplicationJsonWebinarMetrics.prototype, "dept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], DashboardWebinars200ApplicationJsonWebinarMetrics.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], DashboardWebinars200ApplicationJsonWebinarMetrics.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_time" }),
        __metadata("design:type", Date)
    ], DashboardWebinars200ApplicationJsonWebinarMetrics.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_3rd_party_audio" }),
        __metadata("design:type", Boolean)
    ], DashboardWebinars200ApplicationJsonWebinarMetrics.prototype, "has3rdPartyAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_pstn" }),
        __metadata("design:type", Boolean)
    ], DashboardWebinars200ApplicationJsonWebinarMetrics.prototype, "hasPstn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_recording" }),
        __metadata("design:type", Boolean)
    ], DashboardWebinars200ApplicationJsonWebinarMetrics.prototype, "hasRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_screen_share" }),
        __metadata("design:type", Boolean)
    ], DashboardWebinars200ApplicationJsonWebinarMetrics.prototype, "hasScreenShare", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_sip" }),
        __metadata("design:type", Boolean)
    ], DashboardWebinars200ApplicationJsonWebinarMetrics.prototype, "hasSip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_video" }),
        __metadata("design:type", Boolean)
    ], DashboardWebinars200ApplicationJsonWebinarMetrics.prototype, "hasVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_voip" }),
        __metadata("design:type", Boolean)
    ], DashboardWebinars200ApplicationJsonWebinarMetrics.prototype, "hasVoip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], DashboardWebinars200ApplicationJsonWebinarMetrics.prototype, "host", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DashboardWebinars200ApplicationJsonWebinarMetrics.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants" }),
        __metadata("design:type", Number)
    ], DashboardWebinars200ApplicationJsonWebinarMetrics.prototype, "participants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], DashboardWebinars200ApplicationJsonWebinarMetrics.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], DashboardWebinars200ApplicationJsonWebinarMetrics.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_type" }),
        __metadata("design:type", String)
    ], DashboardWebinars200ApplicationJsonWebinarMetrics.prototype, "userType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], DashboardWebinars200ApplicationJsonWebinarMetrics.prototype, "uuid", void 0);
    return DashboardWebinars200ApplicationJsonWebinarMetrics;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinars200ApplicationJsonWebinarMetrics = DashboardWebinars200ApplicationJsonWebinarMetrics;
// DashboardWebinars200ApplicationJson
/**
 * Pagination object.
**/
var DashboardWebinars200ApplicationJson = /** @class */ (function (_super) {
    __extends(DashboardWebinars200ApplicationJson, _super);
    function DashboardWebinars200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", Date)
    ], DashboardWebinars200ApplicationJson.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], DashboardWebinars200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], DashboardWebinars200ApplicationJson.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], DashboardWebinars200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", Date)
    ], DashboardWebinars200ApplicationJson.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], DashboardWebinars200ApplicationJson.prototype, "totalRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webinars", elemType: DashboardWebinars200ApplicationJsonWebinarMetrics }),
        __metadata("design:type", Array)
    ], DashboardWebinars200ApplicationJson.prototype, "webinars", void 0);
    return DashboardWebinars200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinars200ApplicationJson = DashboardWebinars200ApplicationJson;
var DashboardWebinarsRequest = /** @class */ (function (_super) {
    __extends(DashboardWebinarsRequest, _super);
    function DashboardWebinarsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardWebinarsQueryParams)
    ], DashboardWebinarsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardWebinarsSecurity)
    ], DashboardWebinarsRequest.prototype, "security", void 0);
    return DashboardWebinarsRequest;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarsRequest = DashboardWebinarsRequest;
var DashboardWebinarsResponse = /** @class */ (function (_super) {
    __extends(DashboardWebinarsResponse, _super);
    function DashboardWebinarsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DashboardWebinarsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DashboardWebinarsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DashboardWebinarsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardWebinars200ApplicationJson)
    ], DashboardWebinarsResponse.prototype, "dashboardWebinars200ApplicationJSONObject", void 0);
    return DashboardWebinarsResponse;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarsResponse = DashboardWebinarsResponse;
