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
exports.AddPhoneDeviceResponse = exports.AddPhoneDeviceRequest = exports.AddPhoneDeviceSecurity = exports.AddPhoneDeviceRequests = exports.AddPhoneDeviceMultipartFormData = exports.AddPhoneDeviceApplicationJson = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AddPhoneDeviceApplicationJson = /** @class */ (function (_super) {
    __extends(AddPhoneDeviceApplicationJson, _super);
    function AddPhoneDeviceApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assigned_to" }),
        __metadata("design:type", String)
    ], AddPhoneDeviceApplicationJson.prototype, "assignedTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], AddPhoneDeviceApplicationJson.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mac_address" }),
        __metadata("design:type", String)
    ], AddPhoneDeviceApplicationJson.prototype, "macAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], AddPhoneDeviceApplicationJson.prototype, "model", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AddPhoneDeviceApplicationJson.prototype, "type", void 0);
    return AddPhoneDeviceApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddPhoneDeviceApplicationJson = AddPhoneDeviceApplicationJson;
var AddPhoneDeviceMultipartFormData = /** @class */ (function (_super) {
    __extends(AddPhoneDeviceMultipartFormData, _super);
    function AddPhoneDeviceMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=assigned_to" }),
        __metadata("design:type", String)
    ], AddPhoneDeviceMultipartFormData.prototype, "assignedTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=display_name" }),
        __metadata("design:type", String)
    ], AddPhoneDeviceMultipartFormData.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=mac_address" }),
        __metadata("design:type", String)
    ], AddPhoneDeviceMultipartFormData.prototype, "macAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=model" }),
        __metadata("design:type", String)
    ], AddPhoneDeviceMultipartFormData.prototype, "model", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=type" }),
        __metadata("design:type", String)
    ], AddPhoneDeviceMultipartFormData.prototype, "type", void 0);
    return AddPhoneDeviceMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.AddPhoneDeviceMultipartFormData = AddPhoneDeviceMultipartFormData;
var AddPhoneDeviceRequests = /** @class */ (function (_super) {
    __extends(AddPhoneDeviceRequests, _super);
    function AddPhoneDeviceRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddPhoneDeviceApplicationJson)
    ], AddPhoneDeviceRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AddPhoneDeviceMultipartFormData)
    ], AddPhoneDeviceRequests.prototype, "object1", void 0);
    return AddPhoneDeviceRequests;
}(utils_1.SpeakeasyBase));
exports.AddPhoneDeviceRequests = AddPhoneDeviceRequests;
var AddPhoneDeviceSecurity = /** @class */ (function (_super) {
    __extends(AddPhoneDeviceSecurity, _super);
    function AddPhoneDeviceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], AddPhoneDeviceSecurity.prototype, "oAuth", void 0);
    return AddPhoneDeviceSecurity;
}(utils_1.SpeakeasyBase));
exports.AddPhoneDeviceSecurity = AddPhoneDeviceSecurity;
var AddPhoneDeviceRequest = /** @class */ (function (_super) {
    __extends(AddPhoneDeviceRequest, _super);
    function AddPhoneDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddPhoneDeviceRequests)
    ], AddPhoneDeviceRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddPhoneDeviceSecurity)
    ], AddPhoneDeviceRequest.prototype, "security", void 0);
    return AddPhoneDeviceRequest;
}(utils_1.SpeakeasyBase));
exports.AddPhoneDeviceRequest = AddPhoneDeviceRequest;
var AddPhoneDeviceResponse = /** @class */ (function (_super) {
    __extends(AddPhoneDeviceResponse, _super);
    function AddPhoneDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AddPhoneDeviceResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddPhoneDeviceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddPhoneDeviceResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AddPhoneDeviceResponse.prototype, "addPhoneDevice201ApplicationJSONAny", void 0);
    return AddPhoneDeviceResponse;
}(utils_1.SpeakeasyBase));
exports.AddPhoneDeviceResponse = AddPhoneDeviceResponse;
