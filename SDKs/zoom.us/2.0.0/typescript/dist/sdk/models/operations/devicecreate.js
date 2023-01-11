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
exports.DeviceCreateResponse = exports.DeviceCreateRequest = exports.DeviceCreateTheH323SipDeviceObject1 = exports.DeviceCreateSecurity = exports.DeviceCreateRequests = exports.DeviceCreateTheH323SipDeviceObject = exports.DeviceCreateTheH323SipDeviceObjectProtocolEnum = exports.DeviceCreateTheH323SipDeviceObjectEncryptionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DeviceCreateTheH323SipDeviceObjectEncryptionEnum;
(function (DeviceCreateTheH323SipDeviceObjectEncryptionEnum) {
    DeviceCreateTheH323SipDeviceObjectEncryptionEnum["Auto"] = "auto";
    DeviceCreateTheH323SipDeviceObjectEncryptionEnum["Yes"] = "yes";
    DeviceCreateTheH323SipDeviceObjectEncryptionEnum["No"] = "no";
})(DeviceCreateTheH323SipDeviceObjectEncryptionEnum = exports.DeviceCreateTheH323SipDeviceObjectEncryptionEnum || (exports.DeviceCreateTheH323SipDeviceObjectEncryptionEnum = {}));
var DeviceCreateTheH323SipDeviceObjectProtocolEnum;
(function (DeviceCreateTheH323SipDeviceObjectProtocolEnum) {
    DeviceCreateTheH323SipDeviceObjectProtocolEnum["H323"] = "H.323";
    DeviceCreateTheH323SipDeviceObjectProtocolEnum["Sip"] = "SIP";
})(DeviceCreateTheH323SipDeviceObjectProtocolEnum = exports.DeviceCreateTheH323SipDeviceObjectProtocolEnum || (exports.DeviceCreateTheH323SipDeviceObjectProtocolEnum = {}));
// DeviceCreateTheH323SipDeviceObject
/**
 * The H.323/SIP device object.
**/
var DeviceCreateTheH323SipDeviceObject = /** @class */ (function (_super) {
    __extends(DeviceCreateTheH323SipDeviceObject, _super);
    function DeviceCreateTheH323SipDeviceObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryption, multipart_form, name=encryption" }),
        __metadata("design:type", String)
    ], DeviceCreateTheH323SipDeviceObject.prototype, "encryption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip, multipart_form, name=ip" }),
        __metadata("design:type", String)
    ], DeviceCreateTheH323SipDeviceObject.prototype, "ip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name, multipart_form, name=name" }),
        __metadata("design:type", String)
    ], DeviceCreateTheH323SipDeviceObject.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol, multipart_form, name=protocol" }),
        __metadata("design:type", String)
    ], DeviceCreateTheH323SipDeviceObject.prototype, "protocol", void 0);
    return DeviceCreateTheH323SipDeviceObject;
}(utils_1.SpeakeasyBase));
exports.DeviceCreateTheH323SipDeviceObject = DeviceCreateTheH323SipDeviceObject;
var DeviceCreateRequests = /** @class */ (function (_super) {
    __extends(DeviceCreateRequests, _super);
    function DeviceCreateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", DeviceCreateTheH323SipDeviceObject)
    ], DeviceCreateRequests.prototype, "theH323SIPDeviceObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", DeviceCreateTheH323SipDeviceObject)
    ], DeviceCreateRequests.prototype, "theH323SIPDeviceObject1", void 0);
    return DeviceCreateRequests;
}(utils_1.SpeakeasyBase));
exports.DeviceCreateRequests = DeviceCreateRequests;
var DeviceCreateSecurity = /** @class */ (function (_super) {
    __extends(DeviceCreateSecurity, _super);
    function DeviceCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], DeviceCreateSecurity.prototype, "oAuth", void 0);
    return DeviceCreateSecurity;
}(utils_1.SpeakeasyBase));
exports.DeviceCreateSecurity = DeviceCreateSecurity;
// DeviceCreateTheH323SipDeviceObject1
/**
 * The H.323/SIP device object.
**/
var DeviceCreateTheH323SipDeviceObject1 = /** @class */ (function (_super) {
    __extends(DeviceCreateTheH323SipDeviceObject1, _super);
    function DeviceCreateTheH323SipDeviceObject1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryption" }),
        __metadata("design:type", String)
    ], DeviceCreateTheH323SipDeviceObject1.prototype, "encryption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DeviceCreateTheH323SipDeviceObject1.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], DeviceCreateTheH323SipDeviceObject1.prototype, "ip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DeviceCreateTheH323SipDeviceObject1.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], DeviceCreateTheH323SipDeviceObject1.prototype, "protocol", void 0);
    return DeviceCreateTheH323SipDeviceObject1;
}(utils_1.SpeakeasyBase));
exports.DeviceCreateTheH323SipDeviceObject1 = DeviceCreateTheH323SipDeviceObject1;
var DeviceCreateRequest = /** @class */ (function (_super) {
    __extends(DeviceCreateRequest, _super);
    function DeviceCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeviceCreateRequests)
    ], DeviceCreateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeviceCreateSecurity)
    ], DeviceCreateRequest.prototype, "security", void 0);
    return DeviceCreateRequest;
}(utils_1.SpeakeasyBase));
exports.DeviceCreateRequest = DeviceCreateRequest;
var DeviceCreateResponse = /** @class */ (function (_super) {
    __extends(DeviceCreateResponse, _super);
    function DeviceCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DeviceCreateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeviceCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeviceCreateResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeviceCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeviceCreateTheH323SipDeviceObject1)
    ], DeviceCreateResponse.prototype, "theH323SIPDeviceObject", void 0);
    return DeviceCreateResponse;
}(utils_1.SpeakeasyBase));
exports.DeviceCreateResponse = DeviceCreateResponse;
