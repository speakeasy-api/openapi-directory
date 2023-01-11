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
exports.UpdateADeviceResponse = exports.UpdateADeviceRequest = exports.UpdateADeviceSecurity = exports.UpdateADeviceRequests = exports.UpdateADeviceMultipartFormData = exports.UpdateADeviceApplicationJson = exports.UpdateADevicePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateADevicePathParams = /** @class */ (function (_super) {
    __extends(UpdateADevicePathParams, _super);
    function UpdateADevicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=deviceId" }),
        __metadata("design:type", String)
    ], UpdateADevicePathParams.prototype, "deviceId", void 0);
    return UpdateADevicePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateADevicePathParams = UpdateADevicePathParams;
var UpdateADeviceApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateADeviceApplicationJson, _super);
    function UpdateADeviceApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assigned_to" }),
        __metadata("design:type", String)
    ], UpdateADeviceApplicationJson.prototype, "assignedTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], UpdateADeviceApplicationJson.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mac_address" }),
        __metadata("design:type", String)
    ], UpdateADeviceApplicationJson.prototype, "macAddress", void 0);
    return UpdateADeviceApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateADeviceApplicationJson = UpdateADeviceApplicationJson;
var UpdateADeviceMultipartFormData = /** @class */ (function (_super) {
    __extends(UpdateADeviceMultipartFormData, _super);
    function UpdateADeviceMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=assigned_to" }),
        __metadata("design:type", String)
    ], UpdateADeviceMultipartFormData.prototype, "assignedTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=display_name" }),
        __metadata("design:type", String)
    ], UpdateADeviceMultipartFormData.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=mac_address" }),
        __metadata("design:type", String)
    ], UpdateADeviceMultipartFormData.prototype, "macAddress", void 0);
    return UpdateADeviceMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.UpdateADeviceMultipartFormData = UpdateADeviceMultipartFormData;
var UpdateADeviceRequests = /** @class */ (function (_super) {
    __extends(UpdateADeviceRequests, _super);
    function UpdateADeviceRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateADeviceApplicationJson)
    ], UpdateADeviceRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdateADeviceMultipartFormData)
    ], UpdateADeviceRequests.prototype, "object1", void 0);
    return UpdateADeviceRequests;
}(utils_1.SpeakeasyBase));
exports.UpdateADeviceRequests = UpdateADeviceRequests;
var UpdateADeviceSecurity = /** @class */ (function (_super) {
    __extends(UpdateADeviceSecurity, _super);
    function UpdateADeviceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], UpdateADeviceSecurity.prototype, "oAuth", void 0);
    return UpdateADeviceSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateADeviceSecurity = UpdateADeviceSecurity;
var UpdateADeviceRequest = /** @class */ (function (_super) {
    __extends(UpdateADeviceRequest, _super);
    function UpdateADeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateADevicePathParams)
    ], UpdateADeviceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateADeviceRequests)
    ], UpdateADeviceRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateADeviceSecurity)
    ], UpdateADeviceRequest.prototype, "security", void 0);
    return UpdateADeviceRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateADeviceRequest = UpdateADeviceRequest;
var UpdateADeviceResponse = /** @class */ (function (_super) {
    __extends(UpdateADeviceResponse, _super);
    function UpdateADeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdateADeviceResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateADeviceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateADeviceResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateADeviceResponse.prototype, "updateADevice204ApplicationJSONAny", void 0);
    return UpdateADeviceResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateADeviceResponse = UpdateADeviceResponse;
