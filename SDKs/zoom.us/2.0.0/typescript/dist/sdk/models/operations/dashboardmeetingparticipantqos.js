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
exports.DashboardMeetingParticipantQosResponse = exports.DashboardMeetingParticipantQosRequest = exports.DashboardMeetingParticipantQosParticipantQos = exports.DashboardMeetingParticipantQosParticipantQosUserQos = exports.DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc = exports.DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc = exports.DashboardMeetingParticipantQosParticipantQosUserQosCpuUsage = exports.DashboardMeetingParticipantQosParticipantQosUserQosQosObject1 = exports.DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc = exports.DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc = exports.DashboardMeetingParticipantQosParticipantQosUserQosQosObject = exports.DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc = exports.DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc = exports.DashboardMeetingParticipantQosSecurity = exports.DashboardMeetingParticipantQosQueryParams = exports.DashboardMeetingParticipantQosTypeEnum = exports.DashboardMeetingParticipantQosPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DashboardMeetingParticipantQosPathParams = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantQosPathParams, _super);
    function DashboardMeetingParticipantQosPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosPathParams.prototype, "meetingId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=participantId" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosPathParams.prototype, "participantId", void 0);
    return DashboardMeetingParticipantQosPathParams;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantQosPathParams = DashboardMeetingParticipantQosPathParams;
var DashboardMeetingParticipantQosTypeEnum;
(function (DashboardMeetingParticipantQosTypeEnum) {
    DashboardMeetingParticipantQosTypeEnum["Past"] = "past";
    DashboardMeetingParticipantQosTypeEnum["PastOne"] = "pastOne";
    DashboardMeetingParticipantQosTypeEnum["Live"] = "live";
})(DashboardMeetingParticipantQosTypeEnum = exports.DashboardMeetingParticipantQosTypeEnum || (exports.DashboardMeetingParticipantQosTypeEnum = {}));
var DashboardMeetingParticipantQosQueryParams = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantQosQueryParams, _super);
    function DashboardMeetingParticipantQosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosQueryParams.prototype, "type", void 0);
    return DashboardMeetingParticipantQosQueryParams;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantQosQueryParams = DashboardMeetingParticipantQosQueryParams;
var DashboardMeetingParticipantQosSecurity = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantQosSecurity, _super);
    function DashboardMeetingParticipantQosSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], DashboardMeetingParticipantQosSecurity.prototype, "oAuth", void 0);
    return DashboardMeetingParticipantQosSecurity;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantQosSecurity = DashboardMeetingParticipantQosSecurity;
// DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc
/**
 * QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector.
**/
var DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc, _super);
    function DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc.prototype, "maxLoss", void 0);
    return DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc = DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc;
// DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc
/**
 * QoS metrics on screen shares output being received by a participant who joined the meeting via a Cloud Room Connector.
**/
var DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc, _super);
    function DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc.prototype, "maxLoss", void 0);
    return DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc = DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc;
// DashboardMeetingParticipantQosParticipantQosUserQosQosObject
/**
 * Quality of Service object.
**/
var DashboardMeetingParticipantQosParticipantQosUserQosQosObject = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantQosParticipantQosUserQosQosObject, _super);
    function DashboardMeetingParticipantQosParticipantQosUserQosQosObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosQosObject.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosQosObject.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=frame_rate" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosQosObject.prototype, "frameRate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosQosObject.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosQosObject.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosQosObject.prototype, "maxLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosQosObject.prototype, "resolution", void 0);
    return DashboardMeetingParticipantQosParticipantQosUserQosQosObject;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantQosParticipantQosUserQosQosObject = DashboardMeetingParticipantQosParticipantQosUserQosQosObject;
// DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc
/**
 * QoS metrics on audio being sent by a participant who joined the meeting via a Cloud Room Connector.
**/
var DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc, _super);
    function DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc.prototype, "maxLoss", void 0);
    return DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc = DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc;
// DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc
/**
 * QoS metrics on audio received by a participant who joined the meeting via a Cloud Room Connector.
**/
var DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc, _super);
    function DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc.prototype, "maxLoss", void 0);
    return DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc = DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc;
// DashboardMeetingParticipantQosParticipantQosUserQosQosObject1
/**
 * Quality of Service object.
**/
var DashboardMeetingParticipantQosParticipantQosUserQosQosObject1 = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantQosParticipantQosUserQosQosObject1, _super);
    function DashboardMeetingParticipantQosParticipantQosUserQosQosObject1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosQosObject1.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosQosObject1.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosQosObject1.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosQosObject1.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosQosObject1.prototype, "maxLoss", void 0);
    return DashboardMeetingParticipantQosParticipantQosUserQosQosObject1;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantQosParticipantQosUserQosQosObject1 = DashboardMeetingParticipantQosParticipantQosUserQosQosObject1;
var DashboardMeetingParticipantQosParticipantQosUserQosCpuUsage = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantQosParticipantQosUserQosCpuUsage, _super);
    function DashboardMeetingParticipantQosParticipantQosUserQosCpuUsage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=system_max_cpu_usage" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosCpuUsage.prototype, "systemMaxCpuUsage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zoom_avg_cpu_usage" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosCpuUsage.prototype, "zoomAvgCpuUsage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zoom_max_cpu_usage" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosCpuUsage.prototype, "zoomMaxCpuUsage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zoom_min_cpu_usage" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosCpuUsage.prototype, "zoomMinCpuUsage", void 0);
    return DashboardMeetingParticipantQosParticipantQosUserQosCpuUsage;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantQosParticipantQosUserQosCpuUsage = DashboardMeetingParticipantQosParticipantQosUserQosCpuUsage;
// DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc
/**
 * QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting.
**/
var DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc, _super);
    function DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc.prototype, "maxLoss", void 0);
    return DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc = DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc;
// DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc
/**
 * QoS metrics on video output received by a participant who joined the meeting via a Cloud Room Connector.
**/
var DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc, _super);
    function DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc.prototype, "maxLoss", void 0);
    return DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc = DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc;
var DashboardMeetingParticipantQosParticipantQosUserQos = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantQosParticipantQosUserQos, _super);
    function DashboardMeetingParticipantQosParticipantQosUserQos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=as_device_from_crc" }),
        __metadata("design:type", DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc)
    ], DashboardMeetingParticipantQosParticipantQosUserQos.prototype, "asDeviceFromCrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=as_device_to_crc" }),
        __metadata("design:type", DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc)
    ], DashboardMeetingParticipantQosParticipantQosUserQos.prototype, "asDeviceToCrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=as_input" }),
        __metadata("design:type", DashboardMeetingParticipantQosParticipantQosUserQosQosObject)
    ], DashboardMeetingParticipantQosParticipantQosUserQos.prototype, "asInput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=as_output" }),
        __metadata("design:type", DashboardMeetingParticipantQosParticipantQosUserQosQosObject)
    ], DashboardMeetingParticipantQosParticipantQosUserQos.prototype, "asOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_device_from_crc" }),
        __metadata("design:type", DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc)
    ], DashboardMeetingParticipantQosParticipantQosUserQos.prototype, "audioDeviceFromCrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_device_to_crc" }),
        __metadata("design:type", DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc)
    ], DashboardMeetingParticipantQosParticipantQosUserQos.prototype, "audioDeviceToCrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_input" }),
        __metadata("design:type", DashboardMeetingParticipantQosParticipantQosUserQosQosObject1)
    ], DashboardMeetingParticipantQosParticipantQosUserQos.prototype, "audioInput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_output" }),
        __metadata("design:type", DashboardMeetingParticipantQosParticipantQosUserQosQosObject1)
    ], DashboardMeetingParticipantQosParticipantQosUserQos.prototype, "audioOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cpu_usage" }),
        __metadata("design:type", DashboardMeetingParticipantQosParticipantQosUserQosCpuUsage)
    ], DashboardMeetingParticipantQosParticipantQosUserQos.prototype, "cpuUsage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", Date)
    ], DashboardMeetingParticipantQosParticipantQosUserQos.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video_device_from_crc" }),
        __metadata("design:type", DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc)
    ], DashboardMeetingParticipantQosParticipantQosUserQos.prototype, "videoDeviceFromCrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video_device_to_crc" }),
        __metadata("design:type", DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc)
    ], DashboardMeetingParticipantQosParticipantQosUserQos.prototype, "videoDeviceToCrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video_input" }),
        __metadata("design:type", DashboardMeetingParticipantQosParticipantQosUserQosQosObject)
    ], DashboardMeetingParticipantQosParticipantQosUserQos.prototype, "videoInput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video_output" }),
        __metadata("design:type", DashboardMeetingParticipantQosParticipantQosUserQosQosObject)
    ], DashboardMeetingParticipantQosParticipantQosUserQos.prototype, "videoOutput", void 0);
    return DashboardMeetingParticipantQosParticipantQosUserQos;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantQosParticipantQosUserQos = DashboardMeetingParticipantQosParticipantQosUserQos;
// DashboardMeetingParticipantQosParticipantQos
/**
 * Participant QOS.
**/
var DashboardMeetingParticipantQosParticipantQos = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantQosParticipantQos, _super);
    function DashboardMeetingParticipantQosParticipantQos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQos.prototype, "device", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQos.prototype, "domain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=harddisk_id" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQos.prototype, "harddiskId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_address" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQos.prototype, "ipAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_time" }),
        __metadata("design:type", Date)
    ], DashboardMeetingParticipantQosParticipantQos.prototype, "joinTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=leave_time" }),
        __metadata("design:type", Date)
    ], DashboardMeetingParticipantQosParticipantQos.prototype, "leaveTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQos.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mac_addr" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQos.prototype, "macAddr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pc_name" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQos.prototype, "pcName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_id" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQos.prototype, "userId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_name" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQos.prototype, "userName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_qos", elemType: DashboardMeetingParticipantQosParticipantQosUserQos }),
        __metadata("design:type", Array)
    ], DashboardMeetingParticipantQosParticipantQos.prototype, "userQos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosParticipantQos.prototype, "version", void 0);
    return DashboardMeetingParticipantQosParticipantQos;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantQosParticipantQos = DashboardMeetingParticipantQosParticipantQos;
var DashboardMeetingParticipantQosRequest = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantQosRequest, _super);
    function DashboardMeetingParticipantQosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardMeetingParticipantQosPathParams)
    ], DashboardMeetingParticipantQosRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardMeetingParticipantQosQueryParams)
    ], DashboardMeetingParticipantQosRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardMeetingParticipantQosSecurity)
    ], DashboardMeetingParticipantQosRequest.prototype, "security", void 0);
    return DashboardMeetingParticipantQosRequest;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantQosRequest = DashboardMeetingParticipantQosRequest;
var DashboardMeetingParticipantQosResponse = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantQosResponse, _super);
    function DashboardMeetingParticipantQosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DashboardMeetingParticipantQosResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantQosResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardMeetingParticipantQosParticipantQos)
    ], DashboardMeetingParticipantQosResponse.prototype, "participantQOS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DashboardMeetingParticipantQosResponse.prototype, "statusCode", void 0);
    return DashboardMeetingParticipantQosResponse;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantQosResponse = DashboardMeetingParticipantQosResponse;
