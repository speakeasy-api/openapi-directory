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
exports.UpdateSipPhoneResponse = exports.UpdateSipPhoneRequest = exports.UpdateSipPhoneSecurity = exports.UpdateSipPhoneRequests = exports.UpdateSipPhoneMultipartFormData = exports.UpdateSipPhoneMultipartFormDataTransportProtocol3Enum = exports.UpdateSipPhoneMultipartFormDataTransportProtocol2Enum = exports.UpdateSipPhoneMultipartFormDataTransportProtocolEnum = exports.UpdateSipPhoneApplicationJson = exports.UpdateSipPhoneApplicationJsonTransportProtocol3Enum = exports.UpdateSipPhoneApplicationJsonTransportProtocol2Enum = exports.UpdateSipPhoneApplicationJsonTransportProtocolEnum = exports.UpdateSipPhonePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateSipPhonePathParams = /** @class */ (function (_super) {
    __extends(UpdateSipPhonePathParams, _super);
    function UpdateSipPhonePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=phoneId" }),
        __metadata("design:type", String)
    ], UpdateSipPhonePathParams.prototype, "phoneId", void 0);
    return UpdateSipPhonePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateSipPhonePathParams = UpdateSipPhonePathParams;
var UpdateSipPhoneApplicationJsonTransportProtocolEnum;
(function (UpdateSipPhoneApplicationJsonTransportProtocolEnum) {
    UpdateSipPhoneApplicationJsonTransportProtocolEnum["Udp"] = "UDP";
    UpdateSipPhoneApplicationJsonTransportProtocolEnum["Tcp"] = "TCP";
    UpdateSipPhoneApplicationJsonTransportProtocolEnum["Tls"] = "TLS";
    UpdateSipPhoneApplicationJsonTransportProtocolEnum["Auto"] = "AUTO";
})(UpdateSipPhoneApplicationJsonTransportProtocolEnum = exports.UpdateSipPhoneApplicationJsonTransportProtocolEnum || (exports.UpdateSipPhoneApplicationJsonTransportProtocolEnum = {}));
var UpdateSipPhoneApplicationJsonTransportProtocol2Enum;
(function (UpdateSipPhoneApplicationJsonTransportProtocol2Enum) {
    UpdateSipPhoneApplicationJsonTransportProtocol2Enum["Udp"] = "UDP";
    UpdateSipPhoneApplicationJsonTransportProtocol2Enum["Tcp"] = "TCP";
    UpdateSipPhoneApplicationJsonTransportProtocol2Enum["Tls"] = "TLS";
    UpdateSipPhoneApplicationJsonTransportProtocol2Enum["Auto"] = "AUTO";
})(UpdateSipPhoneApplicationJsonTransportProtocol2Enum = exports.UpdateSipPhoneApplicationJsonTransportProtocol2Enum || (exports.UpdateSipPhoneApplicationJsonTransportProtocol2Enum = {}));
var UpdateSipPhoneApplicationJsonTransportProtocol3Enum;
(function (UpdateSipPhoneApplicationJsonTransportProtocol3Enum) {
    UpdateSipPhoneApplicationJsonTransportProtocol3Enum["Udp"] = "UDP";
    UpdateSipPhoneApplicationJsonTransportProtocol3Enum["Tcp"] = "TCP";
    UpdateSipPhoneApplicationJsonTransportProtocol3Enum["Tls"] = "TLS";
    UpdateSipPhoneApplicationJsonTransportProtocol3Enum["Auto"] = "AUTO";
})(UpdateSipPhoneApplicationJsonTransportProtocol3Enum = exports.UpdateSipPhoneApplicationJsonTransportProtocol3Enum || (exports.UpdateSipPhoneApplicationJsonTransportProtocol3Enum = {}));
var UpdateSipPhoneApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateSipPhoneApplicationJson, _super);
    function UpdateSipPhoneApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authorization_name" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneApplicationJson.prototype, "authorizationName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneApplicationJson.prototype, "domain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneApplicationJson.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=proxy_server" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneApplicationJson.prototype, "proxyServer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=proxy_server2" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneApplicationJson.prototype, "proxyServer2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=proxy_server3" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneApplicationJson.prototype, "proxyServer3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=register_server" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneApplicationJson.prototype, "registerServer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=register_server2" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneApplicationJson.prototype, "registerServer2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=register_server3" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneApplicationJson.prototype, "registerServer3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registration_expire_time" }),
        __metadata("design:type", Number)
    ], UpdateSipPhoneApplicationJson.prototype, "registrationExpireTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transport_protocol" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneApplicationJson.prototype, "transportProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transport_protocol2" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneApplicationJson.prototype, "transportProtocol2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transport_protocol3" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneApplicationJson.prototype, "transportProtocol3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_name" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneApplicationJson.prototype, "userName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=voice_mail" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneApplicationJson.prototype, "voiceMail", void 0);
    return UpdateSipPhoneApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateSipPhoneApplicationJson = UpdateSipPhoneApplicationJson;
var UpdateSipPhoneMultipartFormDataTransportProtocolEnum;
(function (UpdateSipPhoneMultipartFormDataTransportProtocolEnum) {
    UpdateSipPhoneMultipartFormDataTransportProtocolEnum["Udp"] = "UDP";
    UpdateSipPhoneMultipartFormDataTransportProtocolEnum["Tcp"] = "TCP";
    UpdateSipPhoneMultipartFormDataTransportProtocolEnum["Tls"] = "TLS";
    UpdateSipPhoneMultipartFormDataTransportProtocolEnum["Auto"] = "AUTO";
})(UpdateSipPhoneMultipartFormDataTransportProtocolEnum = exports.UpdateSipPhoneMultipartFormDataTransportProtocolEnum || (exports.UpdateSipPhoneMultipartFormDataTransportProtocolEnum = {}));
var UpdateSipPhoneMultipartFormDataTransportProtocol2Enum;
(function (UpdateSipPhoneMultipartFormDataTransportProtocol2Enum) {
    UpdateSipPhoneMultipartFormDataTransportProtocol2Enum["Udp"] = "UDP";
    UpdateSipPhoneMultipartFormDataTransportProtocol2Enum["Tcp"] = "TCP";
    UpdateSipPhoneMultipartFormDataTransportProtocol2Enum["Tls"] = "TLS";
    UpdateSipPhoneMultipartFormDataTransportProtocol2Enum["Auto"] = "AUTO";
})(UpdateSipPhoneMultipartFormDataTransportProtocol2Enum = exports.UpdateSipPhoneMultipartFormDataTransportProtocol2Enum || (exports.UpdateSipPhoneMultipartFormDataTransportProtocol2Enum = {}));
var UpdateSipPhoneMultipartFormDataTransportProtocol3Enum;
(function (UpdateSipPhoneMultipartFormDataTransportProtocol3Enum) {
    UpdateSipPhoneMultipartFormDataTransportProtocol3Enum["Udp"] = "UDP";
    UpdateSipPhoneMultipartFormDataTransportProtocol3Enum["Tcp"] = "TCP";
    UpdateSipPhoneMultipartFormDataTransportProtocol3Enum["Tls"] = "TLS";
    UpdateSipPhoneMultipartFormDataTransportProtocol3Enum["Auto"] = "AUTO";
})(UpdateSipPhoneMultipartFormDataTransportProtocol3Enum = exports.UpdateSipPhoneMultipartFormDataTransportProtocol3Enum || (exports.UpdateSipPhoneMultipartFormDataTransportProtocol3Enum = {}));
var UpdateSipPhoneMultipartFormData = /** @class */ (function (_super) {
    __extends(UpdateSipPhoneMultipartFormData, _super);
    function UpdateSipPhoneMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=authorization_name" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneMultipartFormData.prototype, "authorizationName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=domain" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneMultipartFormData.prototype, "domain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=password" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneMultipartFormData.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=proxy_server" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneMultipartFormData.prototype, "proxyServer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=proxy_server2" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneMultipartFormData.prototype, "proxyServer2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=proxy_server3" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneMultipartFormData.prototype, "proxyServer3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=register_server" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneMultipartFormData.prototype, "registerServer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=register_server2" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneMultipartFormData.prototype, "registerServer2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=register_server3" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneMultipartFormData.prototype, "registerServer3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=registration_expire_time" }),
        __metadata("design:type", Number)
    ], UpdateSipPhoneMultipartFormData.prototype, "registrationExpireTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=transport_protocol" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneMultipartFormData.prototype, "transportProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=transport_protocol2" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneMultipartFormData.prototype, "transportProtocol2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=transport_protocol3" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneMultipartFormData.prototype, "transportProtocol3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=user_name" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneMultipartFormData.prototype, "userName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=voice_mail" }),
        __metadata("design:type", String)
    ], UpdateSipPhoneMultipartFormData.prototype, "voiceMail", void 0);
    return UpdateSipPhoneMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.UpdateSipPhoneMultipartFormData = UpdateSipPhoneMultipartFormData;
var UpdateSipPhoneRequests = /** @class */ (function (_super) {
    __extends(UpdateSipPhoneRequests, _super);
    function UpdateSipPhoneRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateSipPhoneApplicationJson)
    ], UpdateSipPhoneRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdateSipPhoneMultipartFormData)
    ], UpdateSipPhoneRequests.prototype, "object1", void 0);
    return UpdateSipPhoneRequests;
}(utils_1.SpeakeasyBase));
exports.UpdateSipPhoneRequests = UpdateSipPhoneRequests;
var UpdateSipPhoneSecurity = /** @class */ (function (_super) {
    __extends(UpdateSipPhoneSecurity, _super);
    function UpdateSipPhoneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], UpdateSipPhoneSecurity.prototype, "oAuth", void 0);
    return UpdateSipPhoneSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateSipPhoneSecurity = UpdateSipPhoneSecurity;
var UpdateSipPhoneRequest = /** @class */ (function (_super) {
    __extends(UpdateSipPhoneRequest, _super);
    function UpdateSipPhoneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSipPhonePathParams)
    ], UpdateSipPhoneRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSipPhoneRequests)
    ], UpdateSipPhoneRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSipPhoneSecurity)
    ], UpdateSipPhoneRequest.prototype, "security", void 0);
    return UpdateSipPhoneRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateSipPhoneRequest = UpdateSipPhoneRequest;
var UpdateSipPhoneResponse = /** @class */ (function (_super) {
    __extends(UpdateSipPhoneResponse, _super);
    function UpdateSipPhoneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdateSipPhoneResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateSipPhoneResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateSipPhoneResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateSipPhoneResponse.prototype, "updateSIPPhone204ApplicationJSONObject", void 0);
    return UpdateSipPhoneResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateSipPhoneResponse = UpdateSipPhoneResponse;
