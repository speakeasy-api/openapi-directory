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
exports.DashboardWebinarDetailResponse = exports.DashboardWebinarDetailRequest = exports.DashboardWebinarDetailWebinarMetrics = exports.DashboardWebinarDetailWebinarMetricsCustomKeys = exports.DashboardWebinarDetailSecurity = exports.DashboardWebinarDetailQueryParams = exports.DashboardWebinarDetailTypeEnum = exports.DashboardWebinarDetailPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DashboardWebinarDetailPathParams = /** @class */ (function (_super) {
    __extends(DashboardWebinarDetailPathParams, _super);
    function DashboardWebinarDetailPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", String)
    ], DashboardWebinarDetailPathParams.prototype, "webinarId", void 0);
    return DashboardWebinarDetailPathParams;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarDetailPathParams = DashboardWebinarDetailPathParams;
var DashboardWebinarDetailTypeEnum;
(function (DashboardWebinarDetailTypeEnum) {
    DashboardWebinarDetailTypeEnum["Past"] = "past";
    DashboardWebinarDetailTypeEnum["Live"] = "live";
})(DashboardWebinarDetailTypeEnum = exports.DashboardWebinarDetailTypeEnum || (exports.DashboardWebinarDetailTypeEnum = {}));
var DashboardWebinarDetailQueryParams = /** @class */ (function (_super) {
    __extends(DashboardWebinarDetailQueryParams, _super);
    function DashboardWebinarDetailQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DashboardWebinarDetailQueryParams.prototype, "type", void 0);
    return DashboardWebinarDetailQueryParams;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarDetailQueryParams = DashboardWebinarDetailQueryParams;
var DashboardWebinarDetailSecurity = /** @class */ (function (_super) {
    __extends(DashboardWebinarDetailSecurity, _super);
    function DashboardWebinarDetailSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], DashboardWebinarDetailSecurity.prototype, "oAuth", void 0);
    return DashboardWebinarDetailSecurity;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarDetailSecurity = DashboardWebinarDetailSecurity;
var DashboardWebinarDetailWebinarMetricsCustomKeys = /** @class */ (function (_super) {
    __extends(DashboardWebinarDetailWebinarMetricsCustomKeys, _super);
    function DashboardWebinarDetailWebinarMetricsCustomKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], DashboardWebinarDetailWebinarMetricsCustomKeys.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], DashboardWebinarDetailWebinarMetricsCustomKeys.prototype, "value", void 0);
    return DashboardWebinarDetailWebinarMetricsCustomKeys;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarDetailWebinarMetricsCustomKeys = DashboardWebinarDetailWebinarMetricsCustomKeys;
// DashboardWebinarDetailWebinarMetrics
/**
 * Webinar metric details.
**/
var DashboardWebinarDetailWebinarMetrics = /** @class */ (function (_super) {
    __extends(DashboardWebinarDetailWebinarMetrics, _super);
    function DashboardWebinarDetailWebinarMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_keys", elemType: DashboardWebinarDetailWebinarMetricsCustomKeys }),
        __metadata("design:type", Array)
    ], DashboardWebinarDetailWebinarMetrics.prototype, "customKeys", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dept" }),
        __metadata("design:type", String)
    ], DashboardWebinarDetailWebinarMetrics.prototype, "dept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], DashboardWebinarDetailWebinarMetrics.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], DashboardWebinarDetailWebinarMetrics.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_time" }),
        __metadata("design:type", Date)
    ], DashboardWebinarDetailWebinarMetrics.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_3rd_party_audio" }),
        __metadata("design:type", Boolean)
    ], DashboardWebinarDetailWebinarMetrics.prototype, "has3rdPartyAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_pstn" }),
        __metadata("design:type", Boolean)
    ], DashboardWebinarDetailWebinarMetrics.prototype, "hasPstn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_recording" }),
        __metadata("design:type", Boolean)
    ], DashboardWebinarDetailWebinarMetrics.prototype, "hasRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_screen_share" }),
        __metadata("design:type", Boolean)
    ], DashboardWebinarDetailWebinarMetrics.prototype, "hasScreenShare", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_sip" }),
        __metadata("design:type", Boolean)
    ], DashboardWebinarDetailWebinarMetrics.prototype, "hasSip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_video" }),
        __metadata("design:type", Boolean)
    ], DashboardWebinarDetailWebinarMetrics.prototype, "hasVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_voip" }),
        __metadata("design:type", Boolean)
    ], DashboardWebinarDetailWebinarMetrics.prototype, "hasVoip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], DashboardWebinarDetailWebinarMetrics.prototype, "host", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DashboardWebinarDetailWebinarMetrics.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants" }),
        __metadata("design:type", Number)
    ], DashboardWebinarDetailWebinarMetrics.prototype, "participants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], DashboardWebinarDetailWebinarMetrics.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], DashboardWebinarDetailWebinarMetrics.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_type" }),
        __metadata("design:type", String)
    ], DashboardWebinarDetailWebinarMetrics.prototype, "userType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], DashboardWebinarDetailWebinarMetrics.prototype, "uuid", void 0);
    return DashboardWebinarDetailWebinarMetrics;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarDetailWebinarMetrics = DashboardWebinarDetailWebinarMetrics;
var DashboardWebinarDetailRequest = /** @class */ (function (_super) {
    __extends(DashboardWebinarDetailRequest, _super);
    function DashboardWebinarDetailRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardWebinarDetailPathParams)
    ], DashboardWebinarDetailRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardWebinarDetailQueryParams)
    ], DashboardWebinarDetailRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardWebinarDetailSecurity)
    ], DashboardWebinarDetailRequest.prototype, "security", void 0);
    return DashboardWebinarDetailRequest;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarDetailRequest = DashboardWebinarDetailRequest;
var DashboardWebinarDetailResponse = /** @class */ (function (_super) {
    __extends(DashboardWebinarDetailResponse, _super);
    function DashboardWebinarDetailResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DashboardWebinarDetailResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DashboardWebinarDetailResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DashboardWebinarDetailResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardWebinarDetailWebinarMetrics)
    ], DashboardWebinarDetailResponse.prototype, "webinarMetrics", void 0);
    return DashboardWebinarDetailResponse;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarDetailResponse = DashboardWebinarDetailResponse;
