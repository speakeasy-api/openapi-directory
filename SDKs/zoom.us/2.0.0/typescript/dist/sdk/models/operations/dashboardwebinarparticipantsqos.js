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
exports.DashboardWebinarParticipantsQosResponse = exports.DashboardWebinarParticipantsQosRequest = exports.DashboardWebinarParticipantsQosParticipantQosList = exports.DashboardWebinarParticipantsQosParticipantQosListParticipantQos = exports.DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos = exports.DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc = exports.DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc = exports.DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage = exports.DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1 = exports.DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc = exports.DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc = exports.DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject = exports.DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc = exports.DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc = exports.DashboardWebinarParticipantsQosSecurity = exports.DashboardWebinarParticipantsQosQueryParams = exports.DashboardWebinarParticipantsQosTypeEnum = exports.DashboardWebinarParticipantsQosPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DashboardWebinarParticipantsQosPathParams = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantsQosPathParams, _super);
    function DashboardWebinarParticipantsQosPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosPathParams.prototype, "webinarId", void 0);
    return DashboardWebinarParticipantsQosPathParams;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantsQosPathParams = DashboardWebinarParticipantsQosPathParams;
var DashboardWebinarParticipantsQosTypeEnum;
(function (DashboardWebinarParticipantsQosTypeEnum) {
    DashboardWebinarParticipantsQosTypeEnum["Past"] = "past";
    DashboardWebinarParticipantsQosTypeEnum["Live"] = "live";
})(DashboardWebinarParticipantsQosTypeEnum = exports.DashboardWebinarParticipantsQosTypeEnum || (exports.DashboardWebinarParticipantsQosTypeEnum = {}));
var DashboardWebinarParticipantsQosQueryParams = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantsQosQueryParams, _super);
    function DashboardWebinarParticipantsQosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], DashboardWebinarParticipantsQosQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosQueryParams.prototype, "type", void 0);
    return DashboardWebinarParticipantsQosQueryParams;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantsQosQueryParams = DashboardWebinarParticipantsQosQueryParams;
var DashboardWebinarParticipantsQosSecurity = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantsQosSecurity, _super);
    function DashboardWebinarParticipantsQosSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], DashboardWebinarParticipantsQosSecurity.prototype, "oAuth", void 0);
    return DashboardWebinarParticipantsQosSecurity;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantsQosSecurity = DashboardWebinarParticipantsQosSecurity;
// DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc
/**
 * QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector.
**/
var DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc, _super);
    function DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc.prototype, "maxLoss", void 0);
    return DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc = DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc;
// DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc
/**
 * QoS metrics on screen shares output being received by a participant who joined the meeting via a Cloud Room Connector.
**/
var DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc, _super);
    function DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc.prototype, "maxLoss", void 0);
    return DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc = DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc;
// DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject
/**
 * Quality of Service object.
**/
var DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject, _super);
    function DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=frame_rate" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject.prototype, "frameRate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject.prototype, "maxLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject.prototype, "resolution", void 0);
    return DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject = DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject;
// DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc
/**
 * QoS metrics on audio being sent by a participant who joined the meeting via a Cloud Room Connector.
**/
var DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc, _super);
    function DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc.prototype, "maxLoss", void 0);
    return DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc = DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc;
// DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc
/**
 * QoS metrics on audio received by a participant who joined the meeting via a Cloud Room Connector.
**/
var DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc, _super);
    function DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc.prototype, "maxLoss", void 0);
    return DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc = DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc;
// DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1
/**
 * Quality of Service object.
**/
var DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1 = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1, _super);
    function DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1.prototype, "maxLoss", void 0);
    return DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1 = DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1;
var DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage, _super);
    function DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=system_max_cpu_usage" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage.prototype, "systemMaxCpuUsage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zoom_avg_cpu_usage" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage.prototype, "zoomAvgCpuUsage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zoom_max_cpu_usage" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage.prototype, "zoomMaxCpuUsage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zoom_min_cpu_usage" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage.prototype, "zoomMinCpuUsage", void 0);
    return DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage = DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage;
// DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc
/**
 * QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting.
**/
var DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc, _super);
    function DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc.prototype, "maxLoss", void 0);
    return DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc = DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc;
// DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc
/**
 * QoS metrics on video output received by a participant who joined the meeting via a Cloud Room Connector.
**/
var DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc, _super);
    function DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc.prototype, "latency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc.prototype, "maxLoss", void 0);
    return DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc = DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc;
var DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos, _super);
    function DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=as_device_from_crc" }),
        __metadata("design:type", DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "asDeviceFromCrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=as_device_to_crc" }),
        __metadata("design:type", DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "asDeviceToCrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=as_input" }),
        __metadata("design:type", DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "asInput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=as_output" }),
        __metadata("design:type", DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "asOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_device_from_crc" }),
        __metadata("design:type", DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "audioDeviceFromCrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_device_to_crc" }),
        __metadata("design:type", DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "audioDeviceToCrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_input" }),
        __metadata("design:type", DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "audioInput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_output" }),
        __metadata("design:type", DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "audioOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cpu_usage" }),
        __metadata("design:type", DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "cpuUsage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", Date)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video_device_from_crc" }),
        __metadata("design:type", DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "videoDeviceFromCrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video_device_to_crc" }),
        __metadata("design:type", DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "videoDeviceToCrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video_input" }),
        __metadata("design:type", DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "videoInput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video_output" }),
        __metadata("design:type", DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos.prototype, "videoOutput", void 0);
    return DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos = DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos;
// DashboardWebinarParticipantsQosParticipantQosListParticipantQos
/**
 * Participant QOS.
**/
var DashboardWebinarParticipantsQosParticipantQosListParticipantQos = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantsQosParticipantQosListParticipantQos, _super);
    function DashboardWebinarParticipantsQosParticipantQosListParticipantQos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQos.prototype, "device", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQos.prototype, "domain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=harddisk_id" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQos.prototype, "harddiskId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_address" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQos.prototype, "ipAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_time" }),
        __metadata("design:type", Date)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQos.prototype, "joinTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=leave_time" }),
        __metadata("design:type", Date)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQos.prototype, "leaveTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQos.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mac_addr" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQos.prototype, "macAddr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pc_name" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQos.prototype, "pcName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_id" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQos.prototype, "userId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_name" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQos.prototype, "userName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_qos", elemType: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos }),
        __metadata("design:type", Array)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQos.prototype, "userQos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosListParticipantQos.prototype, "version", void 0);
    return DashboardWebinarParticipantsQosParticipantQosListParticipantQos;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantsQosParticipantQosListParticipantQos = DashboardWebinarParticipantsQosParticipantQosListParticipantQos;
// DashboardWebinarParticipantsQosParticipantQosList
/**
 * Pagination object.
**/
var DashboardWebinarParticipantsQosParticipantQosList = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantsQosParticipantQosList, _super);
    function DashboardWebinarParticipantsQosParticipantQosList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosParticipantQosList.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], DashboardWebinarParticipantsQosParticipantQosList.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], DashboardWebinarParticipantsQosParticipantQosList.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants", elemType: DashboardWebinarParticipantsQosParticipantQosListParticipantQos }),
        __metadata("design:type", Array)
    ], DashboardWebinarParticipantsQosParticipantQosList.prototype, "participants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], DashboardWebinarParticipantsQosParticipantQosList.prototype, "totalRecords", void 0);
    return DashboardWebinarParticipantsQosParticipantQosList;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantsQosParticipantQosList = DashboardWebinarParticipantsQosParticipantQosList;
var DashboardWebinarParticipantsQosRequest = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantsQosRequest, _super);
    function DashboardWebinarParticipantsQosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardWebinarParticipantsQosPathParams)
    ], DashboardWebinarParticipantsQosRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardWebinarParticipantsQosQueryParams)
    ], DashboardWebinarParticipantsQosRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardWebinarParticipantsQosSecurity)
    ], DashboardWebinarParticipantsQosRequest.prototype, "security", void 0);
    return DashboardWebinarParticipantsQosRequest;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantsQosRequest = DashboardWebinarParticipantsQosRequest;
var DashboardWebinarParticipantsQosResponse = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantsQosResponse, _super);
    function DashboardWebinarParticipantsQosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DashboardWebinarParticipantsQosResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQosResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardWebinarParticipantsQosParticipantQosList)
    ], DashboardWebinarParticipantsQosResponse.prototype, "participantQOSList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DashboardWebinarParticipantsQosResponse.prototype, "statusCode", void 0);
    return DashboardWebinarParticipantsQosResponse;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantsQosResponse = DashboardWebinarParticipantsQosResponse;
