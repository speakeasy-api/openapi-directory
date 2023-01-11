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
exports.CreateSipPhoneResponse = exports.CreateSipPhoneRequest = exports.CreateSipPhoneSecurity = exports.CreateSipPhoneRequests = exports.CreateSipPhoneMultipartFormData = exports.CreateSipPhoneMultipartFormDataTransportProtocol3Enum = exports.CreateSipPhoneMultipartFormDataTransportProtocol2Enum = exports.CreateSipPhoneMultipartFormDataTransportProtocolEnum = exports.CreateSipPhoneApplicationJson = exports.CreateSipPhoneApplicationJsonTransportProtocol3Enum = exports.CreateSipPhoneApplicationJsonTransportProtocol2Enum = exports.CreateSipPhoneApplicationJsonTransportProtocolEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateSipPhoneApplicationJsonTransportProtocolEnum;
(function (CreateSipPhoneApplicationJsonTransportProtocolEnum) {
    CreateSipPhoneApplicationJsonTransportProtocolEnum["Udp"] = "UDP";
    CreateSipPhoneApplicationJsonTransportProtocolEnum["Tcp"] = "TCP";
    CreateSipPhoneApplicationJsonTransportProtocolEnum["Tls"] = "TLS";
    CreateSipPhoneApplicationJsonTransportProtocolEnum["Auto"] = "AUTO";
})(CreateSipPhoneApplicationJsonTransportProtocolEnum = exports.CreateSipPhoneApplicationJsonTransportProtocolEnum || (exports.CreateSipPhoneApplicationJsonTransportProtocolEnum = {}));
var CreateSipPhoneApplicationJsonTransportProtocol2Enum;
(function (CreateSipPhoneApplicationJsonTransportProtocol2Enum) {
    CreateSipPhoneApplicationJsonTransportProtocol2Enum["Udp"] = "UDP";
    CreateSipPhoneApplicationJsonTransportProtocol2Enum["Tcp"] = "TCP";
    CreateSipPhoneApplicationJsonTransportProtocol2Enum["Tls"] = "TLS";
    CreateSipPhoneApplicationJsonTransportProtocol2Enum["Auto"] = "AUTO";
})(CreateSipPhoneApplicationJsonTransportProtocol2Enum = exports.CreateSipPhoneApplicationJsonTransportProtocol2Enum || (exports.CreateSipPhoneApplicationJsonTransportProtocol2Enum = {}));
var CreateSipPhoneApplicationJsonTransportProtocol3Enum;
(function (CreateSipPhoneApplicationJsonTransportProtocol3Enum) {
    CreateSipPhoneApplicationJsonTransportProtocol3Enum["Udp"] = "UDP";
    CreateSipPhoneApplicationJsonTransportProtocol3Enum["Tcp"] = "TCP";
    CreateSipPhoneApplicationJsonTransportProtocol3Enum["Tls"] = "TLS";
    CreateSipPhoneApplicationJsonTransportProtocol3Enum["Auto"] = "AUTO";
})(CreateSipPhoneApplicationJsonTransportProtocol3Enum = exports.CreateSipPhoneApplicationJsonTransportProtocol3Enum || (exports.CreateSipPhoneApplicationJsonTransportProtocol3Enum = {}));
var CreateSipPhoneApplicationJson = /** @class */ (function (_super) {
    __extends(CreateSipPhoneApplicationJson, _super);
    function CreateSipPhoneApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authorization_name" }),
        __metadata("design:type", String)
    ], CreateSipPhoneApplicationJson.prototype, "authorizationName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], CreateSipPhoneApplicationJson.prototype, "domain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], CreateSipPhoneApplicationJson.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=proxy_server" }),
        __metadata("design:type", String)
    ], CreateSipPhoneApplicationJson.prototype, "proxyServer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=proxy_server2" }),
        __metadata("design:type", String)
    ], CreateSipPhoneApplicationJson.prototype, "proxyServer2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=proxy_server3" }),
        __metadata("design:type", String)
    ], CreateSipPhoneApplicationJson.prototype, "proxyServer3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=register_server" }),
        __metadata("design:type", String)
    ], CreateSipPhoneApplicationJson.prototype, "registerServer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=register_server2" }),
        __metadata("design:type", String)
    ], CreateSipPhoneApplicationJson.prototype, "registerServer2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=register_server3" }),
        __metadata("design:type", String)
    ], CreateSipPhoneApplicationJson.prototype, "registerServer3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registration_expire_time" }),
        __metadata("design:type", Number)
    ], CreateSipPhoneApplicationJson.prototype, "registrationExpireTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transport_protocol" }),
        __metadata("design:type", String)
    ], CreateSipPhoneApplicationJson.prototype, "transportProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transport_protocol2" }),
        __metadata("design:type", String)
    ], CreateSipPhoneApplicationJson.prototype, "transportProtocol2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transport_protocol3" }),
        __metadata("design:type", String)
    ], CreateSipPhoneApplicationJson.prototype, "transportProtocol3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_email" }),
        __metadata("design:type", String)
    ], CreateSipPhoneApplicationJson.prototype, "userEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_name" }),
        __metadata("design:type", String)
    ], CreateSipPhoneApplicationJson.prototype, "userName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=voice_mail" }),
        __metadata("design:type", String)
    ], CreateSipPhoneApplicationJson.prototype, "voiceMail", void 0);
    return CreateSipPhoneApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateSipPhoneApplicationJson = CreateSipPhoneApplicationJson;
var CreateSipPhoneMultipartFormDataTransportProtocolEnum;
(function (CreateSipPhoneMultipartFormDataTransportProtocolEnum) {
    CreateSipPhoneMultipartFormDataTransportProtocolEnum["Udp"] = "UDP";
    CreateSipPhoneMultipartFormDataTransportProtocolEnum["Tcp"] = "TCP";
    CreateSipPhoneMultipartFormDataTransportProtocolEnum["Tls"] = "TLS";
    CreateSipPhoneMultipartFormDataTransportProtocolEnum["Auto"] = "AUTO";
})(CreateSipPhoneMultipartFormDataTransportProtocolEnum = exports.CreateSipPhoneMultipartFormDataTransportProtocolEnum || (exports.CreateSipPhoneMultipartFormDataTransportProtocolEnum = {}));
var CreateSipPhoneMultipartFormDataTransportProtocol2Enum;
(function (CreateSipPhoneMultipartFormDataTransportProtocol2Enum) {
    CreateSipPhoneMultipartFormDataTransportProtocol2Enum["Udp"] = "UDP";
    CreateSipPhoneMultipartFormDataTransportProtocol2Enum["Tcp"] = "TCP";
    CreateSipPhoneMultipartFormDataTransportProtocol2Enum["Tls"] = "TLS";
    CreateSipPhoneMultipartFormDataTransportProtocol2Enum["Auto"] = "AUTO";
})(CreateSipPhoneMultipartFormDataTransportProtocol2Enum = exports.CreateSipPhoneMultipartFormDataTransportProtocol2Enum || (exports.CreateSipPhoneMultipartFormDataTransportProtocol2Enum = {}));
var CreateSipPhoneMultipartFormDataTransportProtocol3Enum;
(function (CreateSipPhoneMultipartFormDataTransportProtocol3Enum) {
    CreateSipPhoneMultipartFormDataTransportProtocol3Enum["Udp"] = "UDP";
    CreateSipPhoneMultipartFormDataTransportProtocol3Enum["Tcp"] = "TCP";
    CreateSipPhoneMultipartFormDataTransportProtocol3Enum["Tls"] = "TLS";
    CreateSipPhoneMultipartFormDataTransportProtocol3Enum["Auto"] = "AUTO";
})(CreateSipPhoneMultipartFormDataTransportProtocol3Enum = exports.CreateSipPhoneMultipartFormDataTransportProtocol3Enum || (exports.CreateSipPhoneMultipartFormDataTransportProtocol3Enum = {}));
var CreateSipPhoneMultipartFormData = /** @class */ (function (_super) {
    __extends(CreateSipPhoneMultipartFormData, _super);
    function CreateSipPhoneMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=authorization_name" }),
        __metadata("design:type", String)
    ], CreateSipPhoneMultipartFormData.prototype, "authorizationName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=domain" }),
        __metadata("design:type", String)
    ], CreateSipPhoneMultipartFormData.prototype, "domain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=password" }),
        __metadata("design:type", String)
    ], CreateSipPhoneMultipartFormData.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=proxy_server" }),
        __metadata("design:type", String)
    ], CreateSipPhoneMultipartFormData.prototype, "proxyServer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=proxy_server2" }),
        __metadata("design:type", String)
    ], CreateSipPhoneMultipartFormData.prototype, "proxyServer2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=proxy_server3" }),
        __metadata("design:type", String)
    ], CreateSipPhoneMultipartFormData.prototype, "proxyServer3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=register_server" }),
        __metadata("design:type", String)
    ], CreateSipPhoneMultipartFormData.prototype, "registerServer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=register_server2" }),
        __metadata("design:type", String)
    ], CreateSipPhoneMultipartFormData.prototype, "registerServer2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=register_server3" }),
        __metadata("design:type", String)
    ], CreateSipPhoneMultipartFormData.prototype, "registerServer3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=registration_expire_time" }),
        __metadata("design:type", Number)
    ], CreateSipPhoneMultipartFormData.prototype, "registrationExpireTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=transport_protocol" }),
        __metadata("design:type", String)
    ], CreateSipPhoneMultipartFormData.prototype, "transportProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=transport_protocol2" }),
        __metadata("design:type", String)
    ], CreateSipPhoneMultipartFormData.prototype, "transportProtocol2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=transport_protocol3" }),
        __metadata("design:type", String)
    ], CreateSipPhoneMultipartFormData.prototype, "transportProtocol3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=user_email" }),
        __metadata("design:type", String)
    ], CreateSipPhoneMultipartFormData.prototype, "userEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=user_name" }),
        __metadata("design:type", String)
    ], CreateSipPhoneMultipartFormData.prototype, "userName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=voice_mail" }),
        __metadata("design:type", String)
    ], CreateSipPhoneMultipartFormData.prototype, "voiceMail", void 0);
    return CreateSipPhoneMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.CreateSipPhoneMultipartFormData = CreateSipPhoneMultipartFormData;
var CreateSipPhoneRequests = /** @class */ (function (_super) {
    __extends(CreateSipPhoneRequests, _super);
    function CreateSipPhoneRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateSipPhoneApplicationJson)
    ], CreateSipPhoneRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", CreateSipPhoneMultipartFormData)
    ], CreateSipPhoneRequests.prototype, "object1", void 0);
    return CreateSipPhoneRequests;
}(utils_1.SpeakeasyBase));
exports.CreateSipPhoneRequests = CreateSipPhoneRequests;
var CreateSipPhoneSecurity = /** @class */ (function (_super) {
    __extends(CreateSipPhoneSecurity, _super);
    function CreateSipPhoneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], CreateSipPhoneSecurity.prototype, "oAuth", void 0);
    return CreateSipPhoneSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateSipPhoneSecurity = CreateSipPhoneSecurity;
var CreateSipPhoneRequest = /** @class */ (function (_super) {
    __extends(CreateSipPhoneRequest, _super);
    function CreateSipPhoneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateSipPhoneRequests)
    ], CreateSipPhoneRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateSipPhoneSecurity)
    ], CreateSipPhoneRequest.prototype, "security", void 0);
    return CreateSipPhoneRequest;
}(utils_1.SpeakeasyBase));
exports.CreateSipPhoneRequest = CreateSipPhoneRequest;
var CreateSipPhoneResponse = /** @class */ (function (_super) {
    __extends(CreateSipPhoneResponse, _super);
    function CreateSipPhoneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateSipPhoneResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateSipPhoneResponse.prototype, "statusCode", void 0);
    return CreateSipPhoneResponse;
}(utils_1.SpeakeasyBase));
exports.CreateSipPhoneResponse = CreateSipPhoneResponse;
