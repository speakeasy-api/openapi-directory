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
exports.GetACommonAreaPhoneResponse = exports.GetACommonAreaPhoneRequest = exports.GetACommonAreaPhone200ApplicationJson = exports.GetACommonAreaPhone200ApplicationJsonSite = exports.GetACommonAreaPhone200ApplicationJsonProvision = exports.GetACommonAreaPhone200ApplicationJsonProvisionTypeEnum = exports.GetACommonAreaPhone200ApplicationJsonProvisionSipAccounts = exports.GetACommonAreaPhoneSecurity = exports.GetACommonAreaPhonePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetACommonAreaPhonePathParams = /** @class */ (function (_super) {
    __extends(GetACommonAreaPhonePathParams, _super);
    function GetACommonAreaPhonePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=commonAreaPhoneId" }),
        __metadata("design:type", String)
    ], GetACommonAreaPhonePathParams.prototype, "commonAreaPhoneId", void 0);
    return GetACommonAreaPhonePathParams;
}(utils_1.SpeakeasyBase));
exports.GetACommonAreaPhonePathParams = GetACommonAreaPhonePathParams;
var GetACommonAreaPhoneSecurity = /** @class */ (function (_super) {
    __extends(GetACommonAreaPhoneSecurity, _super);
    function GetACommonAreaPhoneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], GetACommonAreaPhoneSecurity.prototype, "oAuth", void 0);
    return GetACommonAreaPhoneSecurity;
}(utils_1.SpeakeasyBase));
exports.GetACommonAreaPhoneSecurity = GetACommonAreaPhoneSecurity;
var GetACommonAreaPhone200ApplicationJsonProvisionSipAccounts = /** @class */ (function (_super) {
    __extends(GetACommonAreaPhone200ApplicationJsonProvisionSipAccounts, _super);
    function GetACommonAreaPhone200ApplicationJsonProvisionSipAccounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authorization_id" }),
        __metadata("design:type", String)
    ], GetACommonAreaPhone200ApplicationJsonProvisionSipAccounts.prototype, "authorizationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outbound_proxy" }),
        __metadata("design:type", String)
    ], GetACommonAreaPhone200ApplicationJsonProvisionSipAccounts.prototype, "outboundProxy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], GetACommonAreaPhone200ApplicationJsonProvisionSipAccounts.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sip_domain" }),
        __metadata("design:type", String)
    ], GetACommonAreaPhone200ApplicationJsonProvisionSipAccounts.prototype, "sipDomain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_name" }),
        __metadata("design:type", String)
    ], GetACommonAreaPhone200ApplicationJsonProvisionSipAccounts.prototype, "userName", void 0);
    return GetACommonAreaPhone200ApplicationJsonProvisionSipAccounts;
}(utils_1.SpeakeasyBase));
exports.GetACommonAreaPhone200ApplicationJsonProvisionSipAccounts = GetACommonAreaPhone200ApplicationJsonProvisionSipAccounts;
var GetACommonAreaPhone200ApplicationJsonProvisionTypeEnum;
(function (GetACommonAreaPhone200ApplicationJsonProvisionTypeEnum) {
    GetACommonAreaPhone200ApplicationJsonProvisionTypeEnum["Assisted"] = "assisted";
    GetACommonAreaPhone200ApplicationJsonProvisionTypeEnum["Ztp"] = "ztp";
    GetACommonAreaPhone200ApplicationJsonProvisionTypeEnum["Manual"] = "manual";
})(GetACommonAreaPhone200ApplicationJsonProvisionTypeEnum = exports.GetACommonAreaPhone200ApplicationJsonProvisionTypeEnum || (exports.GetACommonAreaPhone200ApplicationJsonProvisionTypeEnum = {}));
// GetACommonAreaPhone200ApplicationJsonProvision
/**
 * Provisioning information of the common area phone.
**/
var GetACommonAreaPhone200ApplicationJsonProvision = /** @class */ (function (_super) {
    __extends(GetACommonAreaPhone200ApplicationJsonProvision, _super);
    function GetACommonAreaPhone200ApplicationJsonProvision() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sip_accounts", elemType: GetACommonAreaPhone200ApplicationJsonProvisionSipAccounts }),
        __metadata("design:type", Array)
    ], GetACommonAreaPhone200ApplicationJsonProvision.prototype, "sipAccounts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetACommonAreaPhone200ApplicationJsonProvision.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetACommonAreaPhone200ApplicationJsonProvision.prototype, "url", void 0);
    return GetACommonAreaPhone200ApplicationJsonProvision;
}(utils_1.SpeakeasyBase));
exports.GetACommonAreaPhone200ApplicationJsonProvision = GetACommonAreaPhone200ApplicationJsonProvision;
var GetACommonAreaPhone200ApplicationJsonSite = /** @class */ (function (_super) {
    __extends(GetACommonAreaPhone200ApplicationJsonSite, _super);
    function GetACommonAreaPhone200ApplicationJsonSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetACommonAreaPhone200ApplicationJsonSite.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetACommonAreaPhone200ApplicationJsonSite.prototype, "name", void 0);
    return GetACommonAreaPhone200ApplicationJsonSite;
}(utils_1.SpeakeasyBase));
exports.GetACommonAreaPhone200ApplicationJsonSite = GetACommonAreaPhone200ApplicationJsonSite;
var GetACommonAreaPhone200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetACommonAreaPhone200ApplicationJson, _super);
    function GetACommonAreaPhone200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device_type" }),
        __metadata("design:type", String)
    ], GetACommonAreaPhone200ApplicationJson.prototype, "deviceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetACommonAreaPhone200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mac_address" }),
        __metadata("design:type", String)
    ], GetACommonAreaPhone200ApplicationJson.prototype, "macAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetACommonAreaPhone200ApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=provision" }),
        __metadata("design:type", GetACommonAreaPhone200ApplicationJsonProvision)
    ], GetACommonAreaPhone200ApplicationJson.prototype, "provision", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site" }),
        __metadata("design:type", GetACommonAreaPhone200ApplicationJsonSite)
    ], GetACommonAreaPhone200ApplicationJson.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetACommonAreaPhone200ApplicationJson.prototype, "status", void 0);
    return GetACommonAreaPhone200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetACommonAreaPhone200ApplicationJson = GetACommonAreaPhone200ApplicationJson;
var GetACommonAreaPhoneRequest = /** @class */ (function (_super) {
    __extends(GetACommonAreaPhoneRequest, _super);
    function GetACommonAreaPhoneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetACommonAreaPhonePathParams)
    ], GetACommonAreaPhoneRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetACommonAreaPhoneSecurity)
    ], GetACommonAreaPhoneRequest.prototype, "security", void 0);
    return GetACommonAreaPhoneRequest;
}(utils_1.SpeakeasyBase));
exports.GetACommonAreaPhoneRequest = GetACommonAreaPhoneRequest;
var GetACommonAreaPhoneResponse = /** @class */ (function (_super) {
    __extends(GetACommonAreaPhoneResponse, _super);
    function GetACommonAreaPhoneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetACommonAreaPhoneResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetACommonAreaPhoneResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetACommonAreaPhoneResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetACommonAreaPhone200ApplicationJson)
    ], GetACommonAreaPhoneResponse.prototype, "getACommonAreaPhone200ApplicationJSONObject", void 0);
    return GetACommonAreaPhoneResponse;
}(utils_1.SpeakeasyBase));
exports.GetACommonAreaPhoneResponse = GetACommonAreaPhoneResponse;
