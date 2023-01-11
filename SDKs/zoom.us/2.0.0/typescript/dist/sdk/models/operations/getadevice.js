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
exports.GetADeviceResponse = exports.GetADeviceRequest = exports.GetADevice200ApplicationJson = exports.GetADevice200ApplicationJsonStatusEnum = exports.GetADevice200ApplicationJsonSite = exports.GetADevice200ApplicationJsonProvision = exports.GetADevice200ApplicationJsonProvisionTypeEnum = exports.GetADevice200ApplicationJsonProvisionSipAccounts = exports.GetADevice200ApplicationJsonProvisionSipAccountsSharedLine = exports.GetADevice200ApplicationJsonProvisionSipAccountsSharedLineLineSubscription = exports.GetADevice200ApplicationJsonAssignee = exports.GetADeviceSecurity = exports.GetADevicePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetADevicePathParams = /** @class */ (function (_super) {
    __extends(GetADevicePathParams, _super);
    function GetADevicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=deviceId" }),
        __metadata("design:type", String)
    ], GetADevicePathParams.prototype, "deviceId", void 0);
    return GetADevicePathParams;
}(utils_1.SpeakeasyBase));
exports.GetADevicePathParams = GetADevicePathParams;
var GetADeviceSecurity = /** @class */ (function (_super) {
    __extends(GetADeviceSecurity, _super);
    function GetADeviceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], GetADeviceSecurity.prototype, "oAuth", void 0);
    return GetADeviceSecurity;
}(utils_1.SpeakeasyBase));
exports.GetADeviceSecurity = GetADeviceSecurity;
// GetADevice200ApplicationJsonAssignee
/**
 * User to whom the device has been assigned.
**/
var GetADevice200ApplicationJsonAssignee = /** @class */ (function (_super) {
    __extends(GetADevice200ApplicationJsonAssignee, _super);
    function GetADevice200ApplicationJsonAssignee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", Number)
    ], GetADevice200ApplicationJsonAssignee.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetADevice200ApplicationJsonAssignee.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetADevice200ApplicationJsonAssignee.prototype, "name", void 0);
    return GetADevice200ApplicationJsonAssignee;
}(utils_1.SpeakeasyBase));
exports.GetADevice200ApplicationJsonAssignee = GetADevice200ApplicationJsonAssignee;
// GetADevice200ApplicationJsonProvisionSipAccountsSharedLineLineSubscription
/**
 * Line subscription.
**/
var GetADevice200ApplicationJsonProvisionSipAccountsSharedLineLineSubscription = /** @class */ (function (_super) {
    __extends(GetADevice200ApplicationJsonProvisionSipAccountsSharedLineLineSubscription, _super);
    function GetADevice200ApplicationJsonProvisionSipAccountsSharedLineLineSubscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], GetADevice200ApplicationJsonProvisionSipAccountsSharedLineLineSubscription.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", Number)
    ], GetADevice200ApplicationJsonProvisionSipAccountsSharedLineLineSubscription.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], GetADevice200ApplicationJsonProvisionSipAccountsSharedLineLineSubscription.prototype, "phoneNumber", void 0);
    return GetADevice200ApplicationJsonProvisionSipAccountsSharedLineLineSubscription;
}(utils_1.SpeakeasyBase));
exports.GetADevice200ApplicationJsonProvisionSipAccountsSharedLineLineSubscription = GetADevice200ApplicationJsonProvisionSipAccountsSharedLineLineSubscription;
// GetADevice200ApplicationJsonProvisionSipAccountsSharedLine
/**
 * Return additional provisioning information with generic device SIP credentials.
**/
var GetADevice200ApplicationJsonProvisionSipAccountsSharedLine = /** @class */ (function (_super) {
    __extends(GetADevice200ApplicationJsonProvisionSipAccountsSharedLine, _super);
    function GetADevice200ApplicationJsonProvisionSipAccountsSharedLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alias" }),
        __metadata("design:type", String)
    ], GetADevice200ApplicationJsonProvisionSipAccountsSharedLine.prototype, "alias", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=line_subscription" }),
        __metadata("design:type", GetADevice200ApplicationJsonProvisionSipAccountsSharedLineLineSubscription)
    ], GetADevice200ApplicationJsonProvisionSipAccountsSharedLine.prototype, "lineSubscription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outbound_caller_id" }),
        __metadata("design:type", String)
    ], GetADevice200ApplicationJsonProvisionSipAccountsSharedLine.prototype, "outboundCallerId", void 0);
    return GetADevice200ApplicationJsonProvisionSipAccountsSharedLine;
}(utils_1.SpeakeasyBase));
exports.GetADevice200ApplicationJsonProvisionSipAccountsSharedLine = GetADevice200ApplicationJsonProvisionSipAccountsSharedLine;
var GetADevice200ApplicationJsonProvisionSipAccounts = /** @class */ (function (_super) {
    __extends(GetADevice200ApplicationJsonProvisionSipAccounts, _super);
    function GetADevice200ApplicationJsonProvisionSipAccounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authorization_id" }),
        __metadata("design:type", String)
    ], GetADevice200ApplicationJsonProvisionSipAccounts.prototype, "authorizationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outbound_proxy" }),
        __metadata("design:type", String)
    ], GetADevice200ApplicationJsonProvisionSipAccounts.prototype, "outboundProxy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], GetADevice200ApplicationJsonProvisionSipAccounts.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shared_line" }),
        __metadata("design:type", GetADevice200ApplicationJsonProvisionSipAccountsSharedLine)
    ], GetADevice200ApplicationJsonProvisionSipAccounts.prototype, "sharedLine", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sip_domain" }),
        __metadata("design:type", String)
    ], GetADevice200ApplicationJsonProvisionSipAccounts.prototype, "sipDomain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_name" }),
        __metadata("design:type", String)
    ], GetADevice200ApplicationJsonProvisionSipAccounts.prototype, "userName", void 0);
    return GetADevice200ApplicationJsonProvisionSipAccounts;
}(utils_1.SpeakeasyBase));
exports.GetADevice200ApplicationJsonProvisionSipAccounts = GetADevice200ApplicationJsonProvisionSipAccounts;
var GetADevice200ApplicationJsonProvisionTypeEnum;
(function (GetADevice200ApplicationJsonProvisionTypeEnum) {
    GetADevice200ApplicationJsonProvisionTypeEnum["Assisted"] = "assisted";
    GetADevice200ApplicationJsonProvisionTypeEnum["Ztp"] = "ztp";
    GetADevice200ApplicationJsonProvisionTypeEnum["Manual"] = "manual";
})(GetADevice200ApplicationJsonProvisionTypeEnum = exports.GetADevice200ApplicationJsonProvisionTypeEnum || (exports.GetADevice200ApplicationJsonProvisionTypeEnum = {}));
// GetADevice200ApplicationJsonProvision
/**
 * Provisioning information of a device.
**/
var GetADevice200ApplicationJsonProvision = /** @class */ (function (_super) {
    __extends(GetADevice200ApplicationJsonProvision, _super);
    function GetADevice200ApplicationJsonProvision() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sip_accounts", elemType: GetADevice200ApplicationJsonProvisionSipAccounts }),
        __metadata("design:type", Array)
    ], GetADevice200ApplicationJsonProvision.prototype, "sipAccounts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetADevice200ApplicationJsonProvision.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetADevice200ApplicationJsonProvision.prototype, "url", void 0);
    return GetADevice200ApplicationJsonProvision;
}(utils_1.SpeakeasyBase));
exports.GetADevice200ApplicationJsonProvision = GetADevice200ApplicationJsonProvision;
var GetADevice200ApplicationJsonSite = /** @class */ (function (_super) {
    __extends(GetADevice200ApplicationJsonSite, _super);
    function GetADevice200ApplicationJsonSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetADevice200ApplicationJsonSite.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetADevice200ApplicationJsonSite.prototype, "name", void 0);
    return GetADevice200ApplicationJsonSite;
}(utils_1.SpeakeasyBase));
exports.GetADevice200ApplicationJsonSite = GetADevice200ApplicationJsonSite;
var GetADevice200ApplicationJsonStatusEnum;
(function (GetADevice200ApplicationJsonStatusEnum) {
    GetADevice200ApplicationJsonStatusEnum["Online"] = "online";
    GetADevice200ApplicationJsonStatusEnum["Offline"] = "offline";
})(GetADevice200ApplicationJsonStatusEnum = exports.GetADevice200ApplicationJsonStatusEnum || (exports.GetADevice200ApplicationJsonStatusEnum = {}));
var GetADevice200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetADevice200ApplicationJson, _super);
    function GetADevice200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assignee" }),
        __metadata("design:type", GetADevice200ApplicationJsonAssignee)
    ], GetADevice200ApplicationJson.prototype, "assignee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device_type" }),
        __metadata("design:type", String)
    ], GetADevice200ApplicationJson.prototype, "deviceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], GetADevice200ApplicationJson.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetADevice200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mac_address" }),
        __metadata("design:type", String)
    ], GetADevice200ApplicationJson.prototype, "macAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=provision" }),
        __metadata("design:type", GetADevice200ApplicationJsonProvision)
    ], GetADevice200ApplicationJson.prototype, "provision", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site" }),
        __metadata("design:type", GetADevice200ApplicationJsonSite)
    ], GetADevice200ApplicationJson.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetADevice200ApplicationJson.prototype, "status", void 0);
    return GetADevice200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetADevice200ApplicationJson = GetADevice200ApplicationJson;
var GetADeviceRequest = /** @class */ (function (_super) {
    __extends(GetADeviceRequest, _super);
    function GetADeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetADevicePathParams)
    ], GetADeviceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetADeviceSecurity)
    ], GetADeviceRequest.prototype, "security", void 0);
    return GetADeviceRequest;
}(utils_1.SpeakeasyBase));
exports.GetADeviceRequest = GetADeviceRequest;
var GetADeviceResponse = /** @class */ (function (_super) {
    __extends(GetADeviceResponse, _super);
    function GetADeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetADeviceResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetADeviceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetADeviceResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetADevice200ApplicationJson)
    ], GetADeviceResponse.prototype, "getADevice200ApplicationJSONObject", void 0);
    return GetADeviceResponse;
}(utils_1.SpeakeasyBase));
exports.GetADeviceResponse = GetADeviceResponse;
