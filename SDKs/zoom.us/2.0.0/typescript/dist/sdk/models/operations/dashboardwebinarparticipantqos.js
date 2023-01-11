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
exports.DashboardWebinarParticipantQosResponse = exports.DashboardWebinarParticipantQosRequest = exports.DashboardWebinarParticipantQosParticipantQos = exports.DashboardWebinarParticipantQosParticipantQosUserQos = exports.DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceToCrc = exports.DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc = exports.DashboardWebinarParticipantQosParticipantQosUserQosCpuUsage = exports.DashboardWebinarParticipantQosParticipantQosUserQosQosObject1 = exports.DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceToCrc = exports.DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceFromCrc = exports.DashboardWebinarParticipantQosParticipantQosUserQosQosObject = exports.DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceToCrc = exports.DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc = exports.DashboardWebinarParticipantQosSecurity = exports.DashboardWebinarParticipantQosQueryParams = exports.DashboardWebinarParticipantQosTypeEnum = exports.DashboardWebinarParticipantQosPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DashboardWebinarParticipantQosPathParams = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantQosPathParams, _super);
    function DashboardWebinarParticipantQosPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=participantId" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosPathParams.prototype, "participantId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosPathParams.prototype, "webinarId", void 0);
    return DashboardWebinarParticipantQosPathParams;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantQosPathParams = DashboardWebinarParticipantQosPathParams;
var DashboardWebinarParticipantQosTypeEnum;
(function (DashboardWebinarParticipantQosTypeEnum) {
    DashboardWebinarParticipantQosTypeEnum["Past"] = "past";
    DashboardWebinarParticipantQosTypeEnum["Live"] = "live";
})(DashboardWebinarParticipantQosTypeEnum = exports.DashboardWebinarParticipantQosTypeEnum || (exports.DashboardWebinarParticipantQosTypeEnum = {}));
var DashboardWebinarParticipantQosQueryParams = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantQosQueryParams, _super);
    function DashboardWebinarParticipantQosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosQueryParams.prototype, "type", void 0);
    return DashboardWebinarParticipantQosQueryParams;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantQosQueryParams = DashboardWebinarParticipantQosQueryParams;
var DashboardWebinarParticipantQosSecurity = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantQosSecurity, _super);
    function DashboardWebinarParticipantQosSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], DashboardWebinarParticipantQosSecurity.prototype, "oAuth", void 0);
    return DashboardWebinarParticipantQosSecurity;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantQosSecurity = DashboardWebinarParticipantQosSecurity;
// DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc
/**
 * QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector.
**/
var DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc, _super);
    function DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc.prototype, "maxLoss", void 0);
    return DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc = DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc;
// DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceToCrc
/**
 * QoS metrics on screen shares output being received by a participant who joined the meeting via a Cloud Room Connector.
**/
var DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceToCrc = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceToCrc, _super);
    function DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceToCrc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceToCrc.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceToCrc.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceToCrc.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceToCrc.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceToCrc.prototype, "maxLoss", void 0);
    return DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceToCrc;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceToCrc = DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceToCrc;
// DashboardWebinarParticipantQosParticipantQosUserQosQosObject
/**
 * Quality of Service object.
**/
var DashboardWebinarParticipantQosParticipantQosUserQosQosObject = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantQosParticipantQosUserQosQosObject, _super);
    function DashboardWebinarParticipantQosParticipantQosUserQosQosObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosQosObject.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosQosObject.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=frame_rate" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosQosObject.prototype, "frameRate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosQosObject.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosQosObject.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosQosObject.prototype, "maxLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosQosObject.prototype, "resolution", void 0);
    return DashboardWebinarParticipantQosParticipantQosUserQosQosObject;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantQosParticipantQosUserQosQosObject = DashboardWebinarParticipantQosParticipantQosUserQosQosObject;
// DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceFromCrc
/**
 * QoS metrics on audio being sent by a participant who joined the meeting via a Cloud Room Connector.
**/
var DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceFromCrc = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceFromCrc, _super);
    function DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceFromCrc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceFromCrc.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceFromCrc.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceFromCrc.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceFromCrc.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceFromCrc.prototype, "maxLoss", void 0);
    return DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceFromCrc;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceFromCrc = DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceFromCrc;
// DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceToCrc
/**
 * QoS metrics on audio received by a participant who joined the meeting via a Cloud Room Connector.
**/
var DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceToCrc = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceToCrc, _super);
    function DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceToCrc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceToCrc.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceToCrc.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceToCrc.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceToCrc.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceToCrc.prototype, "maxLoss", void 0);
    return DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceToCrc;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceToCrc = DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceToCrc;
// DashboardWebinarParticipantQosParticipantQosUserQosQosObject1
/**
 * Quality of Service object.
**/
var DashboardWebinarParticipantQosParticipantQosUserQosQosObject1 = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantQosParticipantQosUserQosQosObject1, _super);
    function DashboardWebinarParticipantQosParticipantQosUserQosQosObject1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosQosObject1.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosQosObject1.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosQosObject1.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosQosObject1.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosQosObject1.prototype, "maxLoss", void 0);
    return DashboardWebinarParticipantQosParticipantQosUserQosQosObject1;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantQosParticipantQosUserQosQosObject1 = DashboardWebinarParticipantQosParticipantQosUserQosQosObject1;
var DashboardWebinarParticipantQosParticipantQosUserQosCpuUsage = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantQosParticipantQosUserQosCpuUsage, _super);
    function DashboardWebinarParticipantQosParticipantQosUserQosCpuUsage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=system_max_cpu_usage" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosCpuUsage.prototype, "systemMaxCpuUsage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zoom_avg_cpu_usage" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosCpuUsage.prototype, "zoomAvgCpuUsage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zoom_max_cpu_usage" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosCpuUsage.prototype, "zoomMaxCpuUsage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zoom_min_cpu_usage" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosCpuUsage.prototype, "zoomMinCpuUsage", void 0);
    return DashboardWebinarParticipantQosParticipantQosUserQosCpuUsage;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantQosParticipantQosUserQosCpuUsage = DashboardWebinarParticipantQosParticipantQosUserQosCpuUsage;
// DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc
/**
 * QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting.
**/
var DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc, _super);
    function DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc.prototype, "maxLoss", void 0);
    return DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc = DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc;
// DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceToCrc
/**
 * QoS metrics on video output received by a participant who joined the meeting via a Cloud Room Connector.
**/
var DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceToCrc = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceToCrc, _super);
    function DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceToCrc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceToCrc.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceToCrc.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceToCrc.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceToCrc.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceToCrc.prototype, "maxLoss", void 0);
    return DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceToCrc;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceToCrc = DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceToCrc;
var DashboardWebinarParticipantQosParticipantQosUserQos = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantQosParticipantQosUserQos, _super);
    function DashboardWebinarParticipantQosParticipantQosUserQos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=as_device_from_crc" }),
        __metadata("design:type", DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc)
    ], DashboardWebinarParticipantQosParticipantQosUserQos.prototype, "asDeviceFromCrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=as_device_to_crc" }),
        __metadata("design:type", DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceToCrc)
    ], DashboardWebinarParticipantQosParticipantQosUserQos.prototype, "asDeviceToCrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=as_input" }),
        __metadata("design:type", DashboardWebinarParticipantQosParticipantQosUserQosQosObject)
    ], DashboardWebinarParticipantQosParticipantQosUserQos.prototype, "asInput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=as_output" }),
        __metadata("design:type", DashboardWebinarParticipantQosParticipantQosUserQosQosObject)
    ], DashboardWebinarParticipantQosParticipantQosUserQos.prototype, "asOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_device_from_crc" }),
        __metadata("design:type", DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceFromCrc)
    ], DashboardWebinarParticipantQosParticipantQosUserQos.prototype, "audioDeviceFromCrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_device_to_crc" }),
        __metadata("design:type", DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceToCrc)
    ], DashboardWebinarParticipantQosParticipantQosUserQos.prototype, "audioDeviceToCrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_input" }),
        __metadata("design:type", DashboardWebinarParticipantQosParticipantQosUserQosQosObject1)
    ], DashboardWebinarParticipantQosParticipantQosUserQos.prototype, "audioInput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_output" }),
        __metadata("design:type", DashboardWebinarParticipantQosParticipantQosUserQosQosObject1)
    ], DashboardWebinarParticipantQosParticipantQosUserQos.prototype, "audioOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cpu_usage" }),
        __metadata("design:type", DashboardWebinarParticipantQosParticipantQosUserQosCpuUsage)
    ], DashboardWebinarParticipantQosParticipantQosUserQos.prototype, "cpuUsage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", Date)
    ], DashboardWebinarParticipantQosParticipantQosUserQos.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video_device_from_crc" }),
        __metadata("design:type", DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc)
    ], DashboardWebinarParticipantQosParticipantQosUserQos.prototype, "videoDeviceFromCrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video_device_to_crc" }),
        __metadata("design:type", DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceToCrc)
    ], DashboardWebinarParticipantQosParticipantQosUserQos.prototype, "videoDeviceToCrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video_input" }),
        __metadata("design:type", DashboardWebinarParticipantQosParticipantQosUserQosQosObject)
    ], DashboardWebinarParticipantQosParticipantQosUserQos.prototype, "videoInput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video_output" }),
        __metadata("design:type", DashboardWebinarParticipantQosParticipantQosUserQosQosObject)
    ], DashboardWebinarParticipantQosParticipantQosUserQos.prototype, "videoOutput", void 0);
    return DashboardWebinarParticipantQosParticipantQosUserQos;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantQosParticipantQosUserQos = DashboardWebinarParticipantQosParticipantQosUserQos;
// DashboardWebinarParticipantQosParticipantQos
/**
 * Participant QOS.
**/
var DashboardWebinarParticipantQosParticipantQos = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantQosParticipantQos, _super);
    function DashboardWebinarParticipantQosParticipantQos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQos.prototype, "device", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQos.prototype, "domain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=harddisk_id" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQos.prototype, "harddiskId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_address" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQos.prototype, "ipAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_time" }),
        __metadata("design:type", Date)
    ], DashboardWebinarParticipantQosParticipantQos.prototype, "joinTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=leave_time" }),
        __metadata("design:type", Date)
    ], DashboardWebinarParticipantQosParticipantQos.prototype, "leaveTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQos.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mac_addr" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQos.prototype, "macAddr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pc_name" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQos.prototype, "pcName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_id" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQos.prototype, "userId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_name" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQos.prototype, "userName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_qos", elemType: DashboardWebinarParticipantQosParticipantQosUserQos }),
        __metadata("design:type", Array)
    ], DashboardWebinarParticipantQosParticipantQos.prototype, "userQos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosParticipantQos.prototype, "version", void 0);
    return DashboardWebinarParticipantQosParticipantQos;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantQosParticipantQos = DashboardWebinarParticipantQosParticipantQos;
var DashboardWebinarParticipantQosRequest = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantQosRequest, _super);
    function DashboardWebinarParticipantQosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardWebinarParticipantQosPathParams)
    ], DashboardWebinarParticipantQosRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardWebinarParticipantQosQueryParams)
    ], DashboardWebinarParticipantQosRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardWebinarParticipantQosSecurity)
    ], DashboardWebinarParticipantQosRequest.prototype, "security", void 0);
    return DashboardWebinarParticipantQosRequest;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantQosRequest = DashboardWebinarParticipantQosRequest;
var DashboardWebinarParticipantQosResponse = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantQosResponse, _super);
    function DashboardWebinarParticipantQosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DashboardWebinarParticipantQosResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantQosResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardWebinarParticipantQosParticipantQos)
    ], DashboardWebinarParticipantQosResponse.prototype, "participantQOS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DashboardWebinarParticipantQosResponse.prototype, "statusCode", void 0);
    return DashboardWebinarParticipantQosResponse;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantQosResponse = DashboardWebinarParticipantQosResponse;
