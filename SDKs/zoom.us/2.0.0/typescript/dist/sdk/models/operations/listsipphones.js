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
exports.ListSipPhonesResponse = exports.ListSipPhonesRequest = exports.ListSipPhones200ApplicationJson = exports.ListSipPhones200ApplicationJsonPhones = exports.ListSipPhones200ApplicationJsonPhonesTransportProtocol3Enum = exports.ListSipPhones200ApplicationJsonPhonesTransportProtocol2Enum = exports.ListSipPhones200ApplicationJsonPhonesTransportProtocolEnum = exports.ListSipPhonesSecurity = exports.ListSipPhonesQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListSipPhonesQueryParams = /** @class */ (function (_super) {
    __extends(ListSipPhonesQueryParams, _super);
    function ListSipPhonesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ListSipPhonesQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_number" }),
        __metadata("design:type", Number)
    ], ListSipPhonesQueryParams.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListSipPhonesQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=search_key" }),
        __metadata("design:type", String)
    ], ListSipPhonesQueryParams.prototype, "searchKey", void 0);
    return ListSipPhonesQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListSipPhonesQueryParams = ListSipPhonesQueryParams;
var ListSipPhonesSecurity = /** @class */ (function (_super) {
    __extends(ListSipPhonesSecurity, _super);
    function ListSipPhonesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ListSipPhonesSecurity.prototype, "oAuth", void 0);
    return ListSipPhonesSecurity;
}(utils_1.SpeakeasyBase));
exports.ListSipPhonesSecurity = ListSipPhonesSecurity;
var ListSipPhones200ApplicationJsonPhonesTransportProtocolEnum;
(function (ListSipPhones200ApplicationJsonPhonesTransportProtocolEnum) {
    ListSipPhones200ApplicationJsonPhonesTransportProtocolEnum["Udp"] = "UDP";
    ListSipPhones200ApplicationJsonPhonesTransportProtocolEnum["Tcp"] = "TCP";
    ListSipPhones200ApplicationJsonPhonesTransportProtocolEnum["Tls"] = "TLS";
    ListSipPhones200ApplicationJsonPhonesTransportProtocolEnum["Auto"] = "AUTO";
})(ListSipPhones200ApplicationJsonPhonesTransportProtocolEnum = exports.ListSipPhones200ApplicationJsonPhonesTransportProtocolEnum || (exports.ListSipPhones200ApplicationJsonPhonesTransportProtocolEnum = {}));
var ListSipPhones200ApplicationJsonPhonesTransportProtocol2Enum;
(function (ListSipPhones200ApplicationJsonPhonesTransportProtocol2Enum) {
    ListSipPhones200ApplicationJsonPhonesTransportProtocol2Enum["Udp"] = "UDP";
    ListSipPhones200ApplicationJsonPhonesTransportProtocol2Enum["Tcp"] = "TCP";
    ListSipPhones200ApplicationJsonPhonesTransportProtocol2Enum["Tls"] = "TLS";
    ListSipPhones200ApplicationJsonPhonesTransportProtocol2Enum["Auto"] = "AUTO";
})(ListSipPhones200ApplicationJsonPhonesTransportProtocol2Enum = exports.ListSipPhones200ApplicationJsonPhonesTransportProtocol2Enum || (exports.ListSipPhones200ApplicationJsonPhonesTransportProtocol2Enum = {}));
var ListSipPhones200ApplicationJsonPhonesTransportProtocol3Enum;
(function (ListSipPhones200ApplicationJsonPhonesTransportProtocol3Enum) {
    ListSipPhones200ApplicationJsonPhonesTransportProtocol3Enum["Udp"] = "UDP";
    ListSipPhones200ApplicationJsonPhonesTransportProtocol3Enum["Tcp"] = "TCP";
    ListSipPhones200ApplicationJsonPhonesTransportProtocol3Enum["Tls"] = "TLS";
    ListSipPhones200ApplicationJsonPhonesTransportProtocol3Enum["Auto"] = "AUTO";
})(ListSipPhones200ApplicationJsonPhonesTransportProtocol3Enum = exports.ListSipPhones200ApplicationJsonPhonesTransportProtocol3Enum || (exports.ListSipPhones200ApplicationJsonPhonesTransportProtocol3Enum = {}));
var ListSipPhones200ApplicationJsonPhones = /** @class */ (function (_super) {
    __extends(ListSipPhones200ApplicationJsonPhones, _super);
    function ListSipPhones200ApplicationJsonPhones() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authorization_name" }),
        __metadata("design:type", String)
    ], ListSipPhones200ApplicationJsonPhones.prototype, "authorizationName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], ListSipPhones200ApplicationJsonPhones.prototype, "domain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListSipPhones200ApplicationJsonPhones.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], ListSipPhones200ApplicationJsonPhones.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=proxy_server" }),
        __metadata("design:type", String)
    ], ListSipPhones200ApplicationJsonPhones.prototype, "proxyServer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=proxy_server2" }),
        __metadata("design:type", String)
    ], ListSipPhones200ApplicationJsonPhones.prototype, "proxyServer2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=proxy_server3" }),
        __metadata("design:type", String)
    ], ListSipPhones200ApplicationJsonPhones.prototype, "proxyServer3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=register_server" }),
        __metadata("design:type", String)
    ], ListSipPhones200ApplicationJsonPhones.prototype, "registerServer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=register_server2" }),
        __metadata("design:type", String)
    ], ListSipPhones200ApplicationJsonPhones.prototype, "registerServer2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=register_server3" }),
        __metadata("design:type", String)
    ], ListSipPhones200ApplicationJsonPhones.prototype, "registerServer3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registration_expire_time" }),
        __metadata("design:type", Number)
    ], ListSipPhones200ApplicationJsonPhones.prototype, "registrationExpireTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transport_protocol" }),
        __metadata("design:type", String)
    ], ListSipPhones200ApplicationJsonPhones.prototype, "transportProtocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transport_protocol2" }),
        __metadata("design:type", String)
    ], ListSipPhones200ApplicationJsonPhones.prototype, "transportProtocol2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transport_protocol3" }),
        __metadata("design:type", String)
    ], ListSipPhones200ApplicationJsonPhones.prototype, "transportProtocol3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_email" }),
        __metadata("design:type", String)
    ], ListSipPhones200ApplicationJsonPhones.prototype, "userEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_name" }),
        __metadata("design:type", String)
    ], ListSipPhones200ApplicationJsonPhones.prototype, "userName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=voice_mail" }),
        __metadata("design:type", String)
    ], ListSipPhones200ApplicationJsonPhones.prototype, "voiceMail", void 0);
    return ListSipPhones200ApplicationJsonPhones;
}(utils_1.SpeakeasyBase));
exports.ListSipPhones200ApplicationJsonPhones = ListSipPhones200ApplicationJsonPhones;
var ListSipPhones200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSipPhones200ApplicationJson, _super);
    function ListSipPhones200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ListSipPhones200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], ListSipPhones200ApplicationJson.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_number" }),
        __metadata("design:type", Number)
    ], ListSipPhones200ApplicationJson.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSipPhones200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phones", elemType: ListSipPhones200ApplicationJsonPhones }),
        __metadata("design:type", Array)
    ], ListSipPhones200ApplicationJson.prototype, "phones", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], ListSipPhones200ApplicationJson.prototype, "totalRecords", void 0);
    return ListSipPhones200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListSipPhones200ApplicationJson = ListSipPhones200ApplicationJson;
var ListSipPhonesRequest = /** @class */ (function (_super) {
    __extends(ListSipPhonesRequest, _super);
    function ListSipPhonesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSipPhonesQueryParams)
    ], ListSipPhonesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSipPhonesSecurity)
    ], ListSipPhonesRequest.prototype, "security", void 0);
    return ListSipPhonesRequest;
}(utils_1.SpeakeasyBase));
exports.ListSipPhonesRequest = ListSipPhonesRequest;
var ListSipPhonesResponse = /** @class */ (function (_super) {
    __extends(ListSipPhonesResponse, _super);
    function ListSipPhonesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListSipPhonesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSipPhonesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSipPhonesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSipPhones200ApplicationJson)
    ], ListSipPhonesResponse.prototype, "listSipPhones200ApplicationJSONObject", void 0);
    return ListSipPhonesResponse;
}(utils_1.SpeakeasyBase));
exports.ListSipPhonesResponse = ListSipPhonesResponse;
