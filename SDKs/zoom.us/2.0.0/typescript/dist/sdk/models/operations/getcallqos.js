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
exports.GetCallQoSResponse = exports.GetCallQoSRequest = exports.GetCallQoS200ApplicationJson = exports.GetCallQoS200ApplicationJsonCallerQos = exports.GetCallQoS200ApplicationJsonCallerQosSending = exports.GetCallQoS200ApplicationJsonCallerQosSendingQos = exports.GetCallQoS200ApplicationJsonCallerQosReceiving = exports.GetCallQoS200ApplicationJsonCallerQosReceivingQos = exports.GetCallQoS200ApplicationJsonCalleeQos = exports.GetCallQoS200ApplicationJsonCalleeQosSending = exports.GetCallQoS200ApplicationJsonCalleeQosSendingQos = exports.GetCallQoS200ApplicationJsonCalleeQosReceiving = exports.GetCallQoS200ApplicationJsonCalleeQosReceivingQos = exports.GetCallQoSPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetCallQoSPathParams = /** @class */ (function (_super) {
    __extends(GetCallQoSPathParams, _super);
    function GetCallQoSPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=callId" }),
        __metadata("design:type", String)
    ], GetCallQoSPathParams.prototype, "callId", void 0);
    return GetCallQoSPathParams;
}(utils_1.SpeakeasyBase));
exports.GetCallQoSPathParams = GetCallQoSPathParams;
var GetCallQoS200ApplicationJsonCalleeQosReceivingQos = /** @class */ (function (_super) {
    __extends(GetCallQoS200ApplicationJsonCalleeQosReceivingQos, _super);
    function GetCallQoS200ApplicationJsonCalleeQosReceivingQos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], GetCallQoS200ApplicationJsonCalleeQosReceivingQos.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], GetCallQoS200ApplicationJsonCalleeQosReceivingQos.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], GetCallQoS200ApplicationJsonCalleeQosReceivingQos.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], GetCallQoS200ApplicationJsonCalleeQosReceivingQos.prototype, "maxLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mos" }),
        __metadata("design:type", String)
    ], GetCallQoS200ApplicationJsonCalleeQosReceivingQos.prototype, "mos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network_delay" }),
        __metadata("design:type", String)
    ], GetCallQoS200ApplicationJsonCalleeQosReceivingQos.prototype, "networkDelay", void 0);
    return GetCallQoS200ApplicationJsonCalleeQosReceivingQos;
}(utils_1.SpeakeasyBase));
exports.GetCallQoS200ApplicationJsonCalleeQosReceivingQos = GetCallQoS200ApplicationJsonCalleeQosReceivingQos;
var GetCallQoS200ApplicationJsonCalleeQosReceiving = /** @class */ (function (_super) {
    __extends(GetCallQoS200ApplicationJsonCalleeQosReceiving, _super);
    function GetCallQoS200ApplicationJsonCalleeQosReceiving() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", Date)
    ], GetCallQoS200ApplicationJsonCalleeQosReceiving.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=qos" }),
        __metadata("design:type", GetCallQoS200ApplicationJsonCalleeQosReceivingQos)
    ], GetCallQoS200ApplicationJsonCalleeQosReceiving.prototype, "qos", void 0);
    return GetCallQoS200ApplicationJsonCalleeQosReceiving;
}(utils_1.SpeakeasyBase));
exports.GetCallQoS200ApplicationJsonCalleeQosReceiving = GetCallQoS200ApplicationJsonCalleeQosReceiving;
var GetCallQoS200ApplicationJsonCalleeQosSendingQos = /** @class */ (function (_super) {
    __extends(GetCallQoS200ApplicationJsonCalleeQosSendingQos, _super);
    function GetCallQoS200ApplicationJsonCalleeQosSendingQos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], GetCallQoS200ApplicationJsonCalleeQosSendingQos.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], GetCallQoS200ApplicationJsonCalleeQosSendingQos.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], GetCallQoS200ApplicationJsonCalleeQosSendingQos.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], GetCallQoS200ApplicationJsonCalleeQosSendingQos.prototype, "maxLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mos" }),
        __metadata("design:type", String)
    ], GetCallQoS200ApplicationJsonCalleeQosSendingQos.prototype, "mos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network_delay" }),
        __metadata("design:type", String)
    ], GetCallQoS200ApplicationJsonCalleeQosSendingQos.prototype, "networkDelay", void 0);
    return GetCallQoS200ApplicationJsonCalleeQosSendingQos;
}(utils_1.SpeakeasyBase));
exports.GetCallQoS200ApplicationJsonCalleeQosSendingQos = GetCallQoS200ApplicationJsonCalleeQosSendingQos;
var GetCallQoS200ApplicationJsonCalleeQosSending = /** @class */ (function (_super) {
    __extends(GetCallQoS200ApplicationJsonCalleeQosSending, _super);
    function GetCallQoS200ApplicationJsonCalleeQosSending() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", Date)
    ], GetCallQoS200ApplicationJsonCalleeQosSending.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=qos" }),
        __metadata("design:type", GetCallQoS200ApplicationJsonCalleeQosSendingQos)
    ], GetCallQoS200ApplicationJsonCalleeQosSending.prototype, "qos", void 0);
    return GetCallQoS200ApplicationJsonCalleeQosSending;
}(utils_1.SpeakeasyBase));
exports.GetCallQoS200ApplicationJsonCalleeQosSending = GetCallQoS200ApplicationJsonCalleeQosSending;
var GetCallQoS200ApplicationJsonCalleeQos = /** @class */ (function (_super) {
    __extends(GetCallQoS200ApplicationJsonCalleeQos, _super);
    function GetCallQoS200ApplicationJsonCalleeQos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=receiving", elemType: GetCallQoS200ApplicationJsonCalleeQosReceiving }),
        __metadata("design:type", Array)
    ], GetCallQoS200ApplicationJsonCalleeQos.prototype, "receiving", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sending", elemType: GetCallQoS200ApplicationJsonCalleeQosSending }),
        __metadata("design:type", Array)
    ], GetCallQoS200ApplicationJsonCalleeQos.prototype, "sending", void 0);
    return GetCallQoS200ApplicationJsonCalleeQos;
}(utils_1.SpeakeasyBase));
exports.GetCallQoS200ApplicationJsonCalleeQos = GetCallQoS200ApplicationJsonCalleeQos;
var GetCallQoS200ApplicationJsonCallerQosReceivingQos = /** @class */ (function (_super) {
    __extends(GetCallQoS200ApplicationJsonCallerQosReceivingQos, _super);
    function GetCallQoS200ApplicationJsonCallerQosReceivingQos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], GetCallQoS200ApplicationJsonCallerQosReceivingQos.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], GetCallQoS200ApplicationJsonCallerQosReceivingQos.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], GetCallQoS200ApplicationJsonCallerQosReceivingQos.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], GetCallQoS200ApplicationJsonCallerQosReceivingQos.prototype, "maxLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mos" }),
        __metadata("design:type", String)
    ], GetCallQoS200ApplicationJsonCallerQosReceivingQos.prototype, "mos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network_delay" }),
        __metadata("design:type", String)
    ], GetCallQoS200ApplicationJsonCallerQosReceivingQos.prototype, "networkDelay", void 0);
    return GetCallQoS200ApplicationJsonCallerQosReceivingQos;
}(utils_1.SpeakeasyBase));
exports.GetCallQoS200ApplicationJsonCallerQosReceivingQos = GetCallQoS200ApplicationJsonCallerQosReceivingQos;
var GetCallQoS200ApplicationJsonCallerQosReceiving = /** @class */ (function (_super) {
    __extends(GetCallQoS200ApplicationJsonCallerQosReceiving, _super);
    function GetCallQoS200ApplicationJsonCallerQosReceiving() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", Date)
    ], GetCallQoS200ApplicationJsonCallerQosReceiving.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=qos" }),
        __metadata("design:type", GetCallQoS200ApplicationJsonCallerQosReceivingQos)
    ], GetCallQoS200ApplicationJsonCallerQosReceiving.prototype, "qos", void 0);
    return GetCallQoS200ApplicationJsonCallerQosReceiving;
}(utils_1.SpeakeasyBase));
exports.GetCallQoS200ApplicationJsonCallerQosReceiving = GetCallQoS200ApplicationJsonCallerQosReceiving;
var GetCallQoS200ApplicationJsonCallerQosSendingQos = /** @class */ (function (_super) {
    __extends(GetCallQoS200ApplicationJsonCallerQosSendingQos, _super);
    function GetCallQoS200ApplicationJsonCallerQosSendingQos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_loss" }),
        __metadata("design:type", String)
    ], GetCallQoS200ApplicationJsonCallerQosSendingQos.prototype, "avgLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bitrate" }),
        __metadata("design:type", String)
    ], GetCallQoS200ApplicationJsonCallerQosSendingQos.prototype, "bitrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jitter" }),
        __metadata("design:type", String)
    ], GetCallQoS200ApplicationJsonCallerQosSendingQos.prototype, "jitter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_loss" }),
        __metadata("design:type", String)
    ], GetCallQoS200ApplicationJsonCallerQosSendingQos.prototype, "maxLoss", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mos" }),
        __metadata("design:type", String)
    ], GetCallQoS200ApplicationJsonCallerQosSendingQos.prototype, "mos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network_delay" }),
        __metadata("design:type", String)
    ], GetCallQoS200ApplicationJsonCallerQosSendingQos.prototype, "networkDelay", void 0);
    return GetCallQoS200ApplicationJsonCallerQosSendingQos;
}(utils_1.SpeakeasyBase));
exports.GetCallQoS200ApplicationJsonCallerQosSendingQos = GetCallQoS200ApplicationJsonCallerQosSendingQos;
var GetCallQoS200ApplicationJsonCallerQosSending = /** @class */ (function (_super) {
    __extends(GetCallQoS200ApplicationJsonCallerQosSending, _super);
    function GetCallQoS200ApplicationJsonCallerQosSending() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", Date)
    ], GetCallQoS200ApplicationJsonCallerQosSending.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=qos" }),
        __metadata("design:type", GetCallQoS200ApplicationJsonCallerQosSendingQos)
    ], GetCallQoS200ApplicationJsonCallerQosSending.prototype, "qos", void 0);
    return GetCallQoS200ApplicationJsonCallerQosSending;
}(utils_1.SpeakeasyBase));
exports.GetCallQoS200ApplicationJsonCallerQosSending = GetCallQoS200ApplicationJsonCallerQosSending;
// GetCallQoS200ApplicationJsonCallerQos
/**
 * Quality of Service object that represents the call quality data of the caller.
**/
var GetCallQoS200ApplicationJsonCallerQos = /** @class */ (function (_super) {
    __extends(GetCallQoS200ApplicationJsonCallerQos, _super);
    function GetCallQoS200ApplicationJsonCallerQos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=receiving", elemType: GetCallQoS200ApplicationJsonCallerQosReceiving }),
        __metadata("design:type", Array)
    ], GetCallQoS200ApplicationJsonCallerQos.prototype, "receiving", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sending", elemType: GetCallQoS200ApplicationJsonCallerQosSending }),
        __metadata("design:type", Array)
    ], GetCallQoS200ApplicationJsonCallerQos.prototype, "sending", void 0);
    return GetCallQoS200ApplicationJsonCallerQos;
}(utils_1.SpeakeasyBase));
exports.GetCallQoS200ApplicationJsonCallerQos = GetCallQoS200ApplicationJsonCallerQos;
var GetCallQoS200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCallQoS200ApplicationJson, _super);
    function GetCallQoS200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_id" }),
        __metadata("design:type", String)
    ], GetCallQoS200ApplicationJson.prototype, "callId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callee_qos" }),
        __metadata("design:type", GetCallQoS200ApplicationJsonCalleeQos)
    ], GetCallQoS200ApplicationJson.prototype, "calleeQos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caller_qos" }),
        __metadata("design:type", GetCallQoS200ApplicationJsonCallerQos)
    ], GetCallQoS200ApplicationJson.prototype, "callerQos", void 0);
    return GetCallQoS200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetCallQoS200ApplicationJson = GetCallQoS200ApplicationJson;
var GetCallQoSRequest = /** @class */ (function (_super) {
    __extends(GetCallQoSRequest, _super);
    function GetCallQoSRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCallQoSPathParams)
    ], GetCallQoSRequest.prototype, "pathParams", void 0);
    return GetCallQoSRequest;
}(utils_1.SpeakeasyBase));
exports.GetCallQoSRequest = GetCallQoSRequest;
var GetCallQoSResponse = /** @class */ (function (_super) {
    __extends(GetCallQoSResponse, _super);
    function GetCallQoSResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetCallQoSResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCallQoSResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCallQoSResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCallQoS200ApplicationJson)
    ], GetCallQoSResponse.prototype, "getCallQoS200ApplicationJSONObject", void 0);
    return GetCallQoSResponse;
}(utils_1.SpeakeasyBase));
exports.GetCallQoSResponse = GetCallQoSResponse;
