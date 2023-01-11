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
exports.ListZrDevicesResponse = exports.ListZrDevicesRequest = exports.ListZrDevices200ApplicationJson = exports.ListZrDevices200ApplicationJsonDevices = exports.ListZrDevices200ApplicationJsonDevicesStatusEnum = exports.ListZrDevices200ApplicationJsonDevicesDeviceTypeEnum = exports.ListZrDevicesSecurity = exports.ListZrDevicesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListZrDevicesPathParams = /** @class */ (function (_super) {
    __extends(ListZrDevicesPathParams, _super);
    function ListZrDevicesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=roomId" }),
        __metadata("design:type", String)
    ], ListZrDevicesPathParams.prototype, "roomId", void 0);
    return ListZrDevicesPathParams;
}(utils_1.SpeakeasyBase));
exports.ListZrDevicesPathParams = ListZrDevicesPathParams;
var ListZrDevicesSecurity = /** @class */ (function (_super) {
    __extends(ListZrDevicesSecurity, _super);
    function ListZrDevicesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ListZrDevicesSecurity.prototype, "oAuth", void 0);
    return ListZrDevicesSecurity;
}(utils_1.SpeakeasyBase));
exports.ListZrDevicesSecurity = ListZrDevicesSecurity;
var ListZrDevices200ApplicationJsonDevicesDeviceTypeEnum;
(function (ListZrDevices200ApplicationJsonDevicesDeviceTypeEnum) {
    ListZrDevices200ApplicationJsonDevicesDeviceTypeEnum["ZoomRoomsComputer"] = "Zoom Rooms Computer";
    ListZrDevices200ApplicationJsonDevicesDeviceTypeEnum["Controller"] = "Controller";
    ListZrDevices200ApplicationJsonDevicesDeviceTypeEnum["SchedulingDisplay"] = "Scheduling Display";
    ListZrDevices200ApplicationJsonDevicesDeviceTypeEnum["ZoomRoomsControlSystem"] = "Zoom Rooms Control System";
    ListZrDevices200ApplicationJsonDevicesDeviceTypeEnum["CompanionWhiteboard"] = "Companion Whiteboard";
})(ListZrDevices200ApplicationJsonDevicesDeviceTypeEnum = exports.ListZrDevices200ApplicationJsonDevicesDeviceTypeEnum || (exports.ListZrDevices200ApplicationJsonDevicesDeviceTypeEnum = {}));
var ListZrDevices200ApplicationJsonDevicesStatusEnum;
(function (ListZrDevices200ApplicationJsonDevicesStatusEnum) {
    ListZrDevices200ApplicationJsonDevicesStatusEnum["Online"] = "Online";
    ListZrDevices200ApplicationJsonDevicesStatusEnum["Offline"] = "Offline";
})(ListZrDevices200ApplicationJsonDevicesStatusEnum = exports.ListZrDevices200ApplicationJsonDevicesStatusEnum || (exports.ListZrDevices200ApplicationJsonDevicesStatusEnum = {}));
var ListZrDevices200ApplicationJsonDevices = /** @class */ (function (_super) {
    __extends(ListZrDevices200ApplicationJsonDevices, _super);
    function ListZrDevices200ApplicationJsonDevices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=app_version" }),
        __metadata("design:type", String)
    ], ListZrDevices200ApplicationJsonDevices.prototype, "appVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device_system" }),
        __metadata("design:type", String)
    ], ListZrDevices200ApplicationJsonDevices.prototype, "deviceSystem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device_type" }),
        __metadata("design:type", String)
    ], ListZrDevices200ApplicationJsonDevices.prototype, "deviceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListZrDevices200ApplicationJsonDevices.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=room_name" }),
        __metadata("design:type", String)
    ], ListZrDevices200ApplicationJsonDevices.prototype, "roomName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ListZrDevices200ApplicationJsonDevices.prototype, "status", void 0);
    return ListZrDevices200ApplicationJsonDevices;
}(utils_1.SpeakeasyBase));
exports.ListZrDevices200ApplicationJsonDevices = ListZrDevices200ApplicationJsonDevices;
var ListZrDevices200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListZrDevices200ApplicationJson, _super);
    function ListZrDevices200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=devices", elemType: ListZrDevices200ApplicationJsonDevices }),
        __metadata("design:type", Array)
    ], ListZrDevices200ApplicationJson.prototype, "devices", void 0);
    return ListZrDevices200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListZrDevices200ApplicationJson = ListZrDevices200ApplicationJson;
var ListZrDevicesRequest = /** @class */ (function (_super) {
    __extends(ListZrDevicesRequest, _super);
    function ListZrDevicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListZrDevicesPathParams)
    ], ListZrDevicesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListZrDevicesSecurity)
    ], ListZrDevicesRequest.prototype, "security", void 0);
    return ListZrDevicesRequest;
}(utils_1.SpeakeasyBase));
exports.ListZrDevicesRequest = ListZrDevicesRequest;
var ListZrDevicesResponse = /** @class */ (function (_super) {
    __extends(ListZrDevicesResponse, _super);
    function ListZrDevicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListZrDevicesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListZrDevicesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListZrDevicesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListZrDevices200ApplicationJson)
    ], ListZrDevicesResponse.prototype, "listZRDevices200ApplicationJSONObject", void 0);
    return ListZrDevicesResponse;
}(utils_1.SpeakeasyBase));
exports.ListZrDevicesResponse = ListZrDevicesResponse;
