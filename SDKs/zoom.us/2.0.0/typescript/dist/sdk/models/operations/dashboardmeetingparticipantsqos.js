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
exports.DashboardMeetingParticipantsQosResponse = exports.DashboardMeetingParticipantsQosRequest = exports.DashboardMeetingParticipantsQosParticipantQosList = exports.DashboardMeetingParticipantsQosParticipantQosListParticipantQos = exports.DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos = exports.DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc = exports.DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc = exports.DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage = exports.DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1 = exports.DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc = exports.DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc = exports.DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject = exports.DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc = exports.DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc = exports.DashboardMeetingParticipantsQosSecurity = exports.DashboardMeetingParticipantsQosQueryParams = exports.DashboardMeetingParticipantsQosTypeEnum = exports.DashboardMeetingParticipantsQosPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DashboardMeetingParticipantsQosPathParams = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantsQosPathParams, _super);
    function DashboardMeetingParticipantsQosPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosPathParams.prototype, "meetingId", void 0);
    return DashboardMeetingParticipantsQosPathParams;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantsQosPathParams = DashboardMeetingParticipantsQosPathParams;
var DashboardMeetingParticipantsQosTypeEnum;
(function (DashboardMeetingParticipantsQosTypeEnum) {
    DashboardMeetingParticipantsQosTypeEnum["Past"] = "past";
    DashboardMeetingParticipantsQosTypeEnum["PastOne"] = "pastOne";
    DashboardMeetingParticipantsQosTypeEnum["Live"] = "live";
})(DashboardMeetingParticipantsQosTypeEnum = exports.DashboardMeetingParticipantsQosTypeEnum || (exports.DashboardMeetingParticipantsQosTypeEnum = {}));
var DashboardMeetingParticipantsQosQueryParams = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantsQosQueryParams, _super);
    function DashboardMeetingParticipantsQosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], DashboardMeetingParticipantsQosQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosQueryParams.prototype, "type", void 0);
    return DashboardMeetingParticipantsQosQueryParams;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantsQosQueryParams = DashboardMeetingParticipantsQosQueryParams;
var DashboardMeetingParticipantsQosSecurity = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantsQosSecurity, _super);
    function DashboardMeetingParticipantsQosSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], DashboardMeetingParticipantsQosSecurity.prototype, "oAuth", void 0);
    return DashboardMeetingParticipantsQosSecurity;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantsQosSecurity = DashboardMeetingParticipantsQosSecurity;
// DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc
/**
 * QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector.
**/
var DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc, _super);
    function DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc.prototype, "maxLoss", void 0);
    return DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc = DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc;
// DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc
/**
 * QoS metrics on screen shares output being received by a participant who joined the meeting via a Cloud Room Connector.
**/
var DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc, _super);
    function DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc.prototype, "maxLoss", void 0);
    return DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc = DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc;
// DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject
/**
 * Quality of Service object.
**/
var DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject, _super);
    function DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=frame_rate" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject.prototype, "frameRate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject.prototype, "maxLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject.prototype, "resolution", void 0);
    return DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject = DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject;
// DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc
/**
 * QoS metrics on audio being sent by a participant who joined the meeting via a Cloud Room Connector.
**/
var DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc, _super);
    function DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc.prototype, "maxLoss", void 0);
    return DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc = DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc;
// DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc
/**
 * QoS metrics on audio received by a participant who joined the meeting via a Cloud Room Connector.
**/
var DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc, _super);
    function DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc.prototype, "maxLoss", void 0);
    return DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc = DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc;
// DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1
/**
 * Quality of Service object.
**/
var DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1 = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1, _super);
    function DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1.prototype, "maxLoss", void 0);
    return DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1 = DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1;
var DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage, _super);
    function DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=system_max_cpu_usage" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage.prototype, "systemMaxCpuUsage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zoom_avg_cpu_usage" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage.prototype, "zoomAvgCpuUsage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zoom_max_cpu_usage" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage.prototype, "zoomMaxCpuUsage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zoom_min_cpu_usage" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage.prototype, "zoomMinCpuUsage", void 0);
    return DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage = DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage;
// DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc
/**
 * QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting.
**/
var DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc, _super);
    function DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc.prototype, "maxLoss", void 0);
    return DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc = DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc;
// DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc
/**
 * QoS metrics on video output received by a participant who joined the meeting via a Cloud Room Connector.
**/
var DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc, _super);
    function DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc.prototype, "maxLoss", void 0);
    return DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc = DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc;
var DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos, _super);
    function DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=as_device_from_crc" }),
        __metadata("design:type", DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "asDeviceFromCrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=as_device_to_crc" }),
        __metadata("design:type", DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "asDeviceToCrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=as_input" }),
        __metadata("design:type", DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "asInput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=as_output" }),
        __metadata("design:type", DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "asOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_device_from_crc" }),
        __metadata("design:type", DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "audioDeviceFromCrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_device_to_crc" }),
        __metadata("design:type", DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "audioDeviceToCrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_input" }),
        __metadata("design:type", DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "audioInput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_output" }),
        __metadata("design:type", DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "audioOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cpu_usage" }),
        __metadata("design:type", DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "cpuUsage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", Date)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video_device_from_crc" }),
        __metadata("design:type", DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "videoDeviceFromCrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video_device_to_crc" }),
        __metadata("design:type", DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "videoDeviceToCrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video_input" }),
        __metadata("design:type", DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "videoInput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video_output" }),
        __metadata("design:type", DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "videoOutput", void 0);
    return DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos = DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos;
// DashboardMeetingParticipantsQosParticipantQosListParticipantQos
/**
 * Participant QOS.
**/
var DashboardMeetingParticipantsQosParticipantQosListParticipantQos = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantsQosParticipantQosListParticipantQos, _super);
    function DashboardMeetingParticipantsQosParticipantQosListParticipantQos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQos.prototype, "device", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQos.prototype, "domain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=harddisk_id" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQos.prototype, "harddiskId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_address" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQos.prototype, "ipAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_time" }),
        __metadata("design:type", Date)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQos.prototype, "joinTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=leave_time" }),
        __metadata("design:type", Date)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQos.prototype, "leaveTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQos.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mac_addr" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQos.prototype, "macAddr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pc_name" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQos.prototype, "pcName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_id" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQos.prototype, "userId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_name" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQos.prototype, "userName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_qos", elemType: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos }),
        __metadata("design:type", Array)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQos.prototype, "userQos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosListParticipantQos.prototype, "version", void 0);
    return DashboardMeetingParticipantsQosParticipantQosListParticipantQos;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantsQosParticipantQosListParticipantQos = DashboardMeetingParticipantsQosParticipantQosListParticipantQos;
// DashboardMeetingParticipantsQosParticipantQosList
/**
 * Pagination object.
**/
var DashboardMeetingParticipantsQosParticipantQosList = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantsQosParticipantQosList, _super);
    function DashboardMeetingParticipantsQosParticipantQosList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosParticipantQosList.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], DashboardMeetingParticipantsQosParticipantQosList.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], DashboardMeetingParticipantsQosParticipantQosList.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants", elemType: DashboardMeetingParticipantsQosParticipantQosListParticipantQos }),
        __metadata("design:type", Array)
    ], DashboardMeetingParticipantsQosParticipantQosList.prototype, "participants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], DashboardMeetingParticipantsQosParticipantQosList.prototype, "totalRecords", void 0);
    return DashboardMeetingParticipantsQosParticipantQosList;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantsQosParticipantQosList = DashboardMeetingParticipantsQosParticipantQosList;
var DashboardMeetingParticipantsQosRequest = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantsQosRequest, _super);
    function DashboardMeetingParticipantsQosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardMeetingParticipantsQosPathParams)
    ], DashboardMeetingParticipantsQosRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardMeetingParticipantsQosQueryParams)
    ], DashboardMeetingParticipantsQosRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardMeetingParticipantsQosSecurity)
    ], DashboardMeetingParticipantsQosRequest.prototype, "security", void 0);
    return DashboardMeetingParticipantsQosRequest;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantsQosRequest = DashboardMeetingParticipantsQosRequest;
var DashboardMeetingParticipantsQosResponse = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantsQosResponse, _super);
    function DashboardMeetingParticipantsQosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DashboardMeetingParticipantsQosResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQosResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardMeetingParticipantsQosParticipantQosList)
    ], DashboardMeetingParticipantsQosResponse.prototype, "participantQOSList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DashboardMeetingParticipantsQosResponse.prototype, "statusCode", void 0);
    return DashboardMeetingParticipantsQosResponse;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantsQosResponse = DashboardMeetingParticipantsQosResponse;
