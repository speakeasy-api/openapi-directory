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
exports.ListPhoneDevicesResponse = exports.ListPhoneDevicesRequest = exports.ListPhoneDevices200ApplicationJson = exports.ListPhoneDevices200ApplicationJsonDevices = exports.ListPhoneDevices200ApplicationJsonDevicesStatusEnum = exports.ListPhoneDevices200ApplicationJsonDevicesSite = exports.ListPhoneDevices200ApplicationJsonDevicesAssignee = exports.ListPhoneDevicesSecurity = exports.ListPhoneDevicesQueryParams = exports.ListPhoneDevicesTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListPhoneDevicesTypeEnum;
(function (ListPhoneDevicesTypeEnum) {
    ListPhoneDevicesTypeEnum["Assigned"] = "assigned";
    ListPhoneDevicesTypeEnum["Unassigned"] = "unassigned";
})(ListPhoneDevicesTypeEnum = exports.ListPhoneDevicesTypeEnum || (exports.ListPhoneDevicesTypeEnum = {}));
var ListPhoneDevicesQueryParams = /** @class */ (function (_super) {
    __extends(ListPhoneDevicesQueryParams, _super);
    function ListPhoneDevicesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ListPhoneDevicesQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListPhoneDevicesQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], ListPhoneDevicesQueryParams.prototype, "type", void 0);
    return ListPhoneDevicesQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListPhoneDevicesQueryParams = ListPhoneDevicesQueryParams;
var ListPhoneDevicesSecurity = /** @class */ (function (_super) {
    __extends(ListPhoneDevicesSecurity, _super);
    function ListPhoneDevicesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ListPhoneDevicesSecurity.prototype, "oAuth", void 0);
    return ListPhoneDevicesSecurity;
}(utils_1.SpeakeasyBase));
exports.ListPhoneDevicesSecurity = ListPhoneDevicesSecurity;
var ListPhoneDevices200ApplicationJsonDevicesAssignee = /** @class */ (function (_super) {
    __extends(ListPhoneDevices200ApplicationJsonDevicesAssignee, _super);
    function ListPhoneDevices200ApplicationJsonDevicesAssignee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", Number)
    ], ListPhoneDevices200ApplicationJsonDevicesAssignee.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListPhoneDevices200ApplicationJsonDevicesAssignee.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListPhoneDevices200ApplicationJsonDevicesAssignee.prototype, "name", void 0);
    return ListPhoneDevices200ApplicationJsonDevicesAssignee;
}(utils_1.SpeakeasyBase));
exports.ListPhoneDevices200ApplicationJsonDevicesAssignee = ListPhoneDevices200ApplicationJsonDevicesAssignee;
var ListPhoneDevices200ApplicationJsonDevicesSite = /** @class */ (function (_super) {
    __extends(ListPhoneDevices200ApplicationJsonDevicesSite, _super);
    function ListPhoneDevices200ApplicationJsonDevicesSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListPhoneDevices200ApplicationJsonDevicesSite.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListPhoneDevices200ApplicationJsonDevicesSite.prototype, "name", void 0);
    return ListPhoneDevices200ApplicationJsonDevicesSite;
}(utils_1.SpeakeasyBase));
exports.ListPhoneDevices200ApplicationJsonDevicesSite = ListPhoneDevices200ApplicationJsonDevicesSite;
var ListPhoneDevices200ApplicationJsonDevicesStatusEnum;
(function (ListPhoneDevices200ApplicationJsonDevicesStatusEnum) {
    ListPhoneDevices200ApplicationJsonDevicesStatusEnum["Online"] = "online";
    ListPhoneDevices200ApplicationJsonDevicesStatusEnum["Offline"] = "offline";
})(ListPhoneDevices200ApplicationJsonDevicesStatusEnum = exports.ListPhoneDevices200ApplicationJsonDevicesStatusEnum || (exports.ListPhoneDevices200ApplicationJsonDevicesStatusEnum = {}));
var ListPhoneDevices200ApplicationJsonDevices = /** @class */ (function (_super) {
    __extends(ListPhoneDevices200ApplicationJsonDevices, _super);
    function ListPhoneDevices200ApplicationJsonDevices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assignee" }),
        __metadata("design:type", ListPhoneDevices200ApplicationJsonDevicesAssignee)
    ], ListPhoneDevices200ApplicationJsonDevices.prototype, "assignee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device_type" }),
        __metadata("design:type", String)
    ], ListPhoneDevices200ApplicationJsonDevices.prototype, "deviceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], ListPhoneDevices200ApplicationJsonDevices.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListPhoneDevices200ApplicationJsonDevices.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mac_address" }),
        __metadata("design:type", String)
    ], ListPhoneDevices200ApplicationJsonDevices.prototype, "macAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site" }),
        __metadata("design:type", ListPhoneDevices200ApplicationJsonDevicesSite)
    ], ListPhoneDevices200ApplicationJsonDevices.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ListPhoneDevices200ApplicationJsonDevices.prototype, "status", void 0);
    return ListPhoneDevices200ApplicationJsonDevices;
}(utils_1.SpeakeasyBase));
exports.ListPhoneDevices200ApplicationJsonDevices = ListPhoneDevices200ApplicationJsonDevices;
var ListPhoneDevices200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListPhoneDevices200ApplicationJson, _super);
    function ListPhoneDevices200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=devices", elemType: ListPhoneDevices200ApplicationJsonDevices }),
        __metadata("design:type", Array)
    ], ListPhoneDevices200ApplicationJson.prototype, "devices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ListPhoneDevices200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListPhoneDevices200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", String)
    ], ListPhoneDevices200ApplicationJson.prototype, "totalRecords", void 0);
    return ListPhoneDevices200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListPhoneDevices200ApplicationJson = ListPhoneDevices200ApplicationJson;
var ListPhoneDevicesRequest = /** @class */ (function (_super) {
    __extends(ListPhoneDevicesRequest, _super);
    function ListPhoneDevicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPhoneDevicesQueryParams)
    ], ListPhoneDevicesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPhoneDevicesSecurity)
    ], ListPhoneDevicesRequest.prototype, "security", void 0);
    return ListPhoneDevicesRequest;
}(utils_1.SpeakeasyBase));
exports.ListPhoneDevicesRequest = ListPhoneDevicesRequest;
var ListPhoneDevicesResponse = /** @class */ (function (_super) {
    __extends(ListPhoneDevicesResponse, _super);
    function ListPhoneDevicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListPhoneDevicesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListPhoneDevicesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListPhoneDevicesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPhoneDevices200ApplicationJson)
    ], ListPhoneDevicesResponse.prototype, "listPhoneDevices200ApplicationJSONObject", void 0);
    return ListPhoneDevicesResponse;
}(utils_1.SpeakeasyBase));
exports.ListPhoneDevicesResponse = ListPhoneDevicesResponse;
