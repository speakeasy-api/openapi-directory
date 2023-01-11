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
exports.DeviceUpdateResponse = exports.DeviceUpdateRequest = exports.DeviceUpdateRequests = exports.DeviceUpdateTheH323SipDeviceObject = exports.DeviceUpdateTheH323SipDeviceObjectProtocolEnum = exports.DeviceUpdateTheH323SipDeviceObjectEncryptionEnum = exports.DeviceUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeviceUpdatePathParams = /** @class */ (function (_super) {
    __extends(DeviceUpdatePathParams, _super);
    function DeviceUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=deviceId" }),
        __metadata("design:type", String)
    ], DeviceUpdatePathParams.prototype, "deviceId", void 0);
    return DeviceUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.DeviceUpdatePathParams = DeviceUpdatePathParams;
var DeviceUpdateTheH323SipDeviceObjectEncryptionEnum;
(function (DeviceUpdateTheH323SipDeviceObjectEncryptionEnum) {
    DeviceUpdateTheH323SipDeviceObjectEncryptionEnum["Auto"] = "auto";
    DeviceUpdateTheH323SipDeviceObjectEncryptionEnum["Yes"] = "yes";
    DeviceUpdateTheH323SipDeviceObjectEncryptionEnum["No"] = "no";
})(DeviceUpdateTheH323SipDeviceObjectEncryptionEnum = exports.DeviceUpdateTheH323SipDeviceObjectEncryptionEnum || (exports.DeviceUpdateTheH323SipDeviceObjectEncryptionEnum = {}));
var DeviceUpdateTheH323SipDeviceObjectProtocolEnum;
(function (DeviceUpdateTheH323SipDeviceObjectProtocolEnum) {
    DeviceUpdateTheH323SipDeviceObjectProtocolEnum["H323"] = "H.323";
    DeviceUpdateTheH323SipDeviceObjectProtocolEnum["Sip"] = "SIP";
})(DeviceUpdateTheH323SipDeviceObjectProtocolEnum = exports.DeviceUpdateTheH323SipDeviceObjectProtocolEnum || (exports.DeviceUpdateTheH323SipDeviceObjectProtocolEnum = {}));
// DeviceUpdateTheH323SipDeviceObject
/**
 * The H.323/SIP device object.
**/
var DeviceUpdateTheH323SipDeviceObject = /** @class */ (function (_super) {
    __extends(DeviceUpdateTheH323SipDeviceObject, _super);
    function DeviceUpdateTheH323SipDeviceObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryption, multipart_form, name=encryption" }),
        __metadata("design:type", String)
    ], DeviceUpdateTheH323SipDeviceObject.prototype, "encryption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip, multipart_form, name=ip" }),
        __metadata("design:type", String)
    ], DeviceUpdateTheH323SipDeviceObject.prototype, "ip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name, multipart_form, name=name" }),
        __metadata("design:type", String)
    ], DeviceUpdateTheH323SipDeviceObject.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol, multipart_form, name=protocol" }),
        __metadata("design:type", String)
    ], DeviceUpdateTheH323SipDeviceObject.prototype, "protocol", void 0);
    return DeviceUpdateTheH323SipDeviceObject;
}(utils_1.SpeakeasyBase));
exports.DeviceUpdateTheH323SipDeviceObject = DeviceUpdateTheH323SipDeviceObject;
var DeviceUpdateRequests = /** @class */ (function (_super) {
    __extends(DeviceUpdateRequests, _super);
    function DeviceUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", DeviceUpdateTheH323SipDeviceObject)
    ], DeviceUpdateRequests.prototype, "theH323SIPDeviceObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", DeviceUpdateTheH323SipDeviceObject)
    ], DeviceUpdateRequests.prototype, "theH323SIPDeviceObject1", void 0);
    return DeviceUpdateRequests;
}(utils_1.SpeakeasyBase));
exports.DeviceUpdateRequests = DeviceUpdateRequests;
var DeviceUpdateRequest = /** @class */ (function (_super) {
    __extends(DeviceUpdateRequest, _super);
    function DeviceUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeviceUpdatePathParams)
    ], DeviceUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeviceUpdateRequests)
    ], DeviceUpdateRequest.prototype, "request", void 0);
    return DeviceUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.DeviceUpdateRequest = DeviceUpdateRequest;
var DeviceUpdateResponse = /** @class */ (function (_super) {
    __extends(DeviceUpdateResponse, _super);
    function DeviceUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeviceUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeviceUpdateResponse.prototype, "statusCode", void 0);
    return DeviceUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.DeviceUpdateResponse = DeviceUpdateResponse;
