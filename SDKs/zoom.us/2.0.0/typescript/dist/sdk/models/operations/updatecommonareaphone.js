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
exports.UpdateCommonAreaPhoneResponse = exports.UpdateCommonAreaPhoneRequest = exports.UpdateCommonAreaPhoneSecurity = exports.UpdateCommonAreaPhoneRequests = exports.UpdateCommonAreaPhoneMultipartFormData = exports.UpdateCommonAreaPhoneApplicationJson = exports.UpdateCommonAreaPhonePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateCommonAreaPhonePathParams = /** @class */ (function (_super) {
    __extends(UpdateCommonAreaPhonePathParams, _super);
    function UpdateCommonAreaPhonePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=commonAreaPhoneId" }),
        __metadata("design:type", String)
    ], UpdateCommonAreaPhonePathParams.prototype, "commonAreaPhoneId", void 0);
    return UpdateCommonAreaPhonePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateCommonAreaPhonePathParams = UpdateCommonAreaPhonePathParams;
var UpdateCommonAreaPhoneApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateCommonAreaPhoneApplicationJson, _super);
    function UpdateCommonAreaPhoneApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], UpdateCommonAreaPhoneApplicationJson.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", Number)
    ], UpdateCommonAreaPhoneApplicationJson.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mac_address" }),
        __metadata("design:type", String)
    ], UpdateCommonAreaPhoneApplicationJson.prototype, "macAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site_id" }),
        __metadata("design:type", String)
    ], UpdateCommonAreaPhoneApplicationJson.prototype, "siteId", void 0);
    return UpdateCommonAreaPhoneApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateCommonAreaPhoneApplicationJson = UpdateCommonAreaPhoneApplicationJson;
var UpdateCommonAreaPhoneMultipartFormData = /** @class */ (function (_super) {
    __extends(UpdateCommonAreaPhoneMultipartFormData, _super);
    function UpdateCommonAreaPhoneMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=display_name" }),
        __metadata("design:type", String)
    ], UpdateCommonAreaPhoneMultipartFormData.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=extension_number" }),
        __metadata("design:type", Number)
    ], UpdateCommonAreaPhoneMultipartFormData.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=mac_address" }),
        __metadata("design:type", String)
    ], UpdateCommonAreaPhoneMultipartFormData.prototype, "macAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=site_id" }),
        __metadata("design:type", String)
    ], UpdateCommonAreaPhoneMultipartFormData.prototype, "siteId", void 0);
    return UpdateCommonAreaPhoneMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.UpdateCommonAreaPhoneMultipartFormData = UpdateCommonAreaPhoneMultipartFormData;
var UpdateCommonAreaPhoneRequests = /** @class */ (function (_super) {
    __extends(UpdateCommonAreaPhoneRequests, _super);
    function UpdateCommonAreaPhoneRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateCommonAreaPhoneApplicationJson)
    ], UpdateCommonAreaPhoneRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdateCommonAreaPhoneMultipartFormData)
    ], UpdateCommonAreaPhoneRequests.prototype, "object1", void 0);
    return UpdateCommonAreaPhoneRequests;
}(utils_1.SpeakeasyBase));
exports.UpdateCommonAreaPhoneRequests = UpdateCommonAreaPhoneRequests;
var UpdateCommonAreaPhoneSecurity = /** @class */ (function (_super) {
    __extends(UpdateCommonAreaPhoneSecurity, _super);
    function UpdateCommonAreaPhoneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], UpdateCommonAreaPhoneSecurity.prototype, "oAuth", void 0);
    return UpdateCommonAreaPhoneSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateCommonAreaPhoneSecurity = UpdateCommonAreaPhoneSecurity;
var UpdateCommonAreaPhoneRequest = /** @class */ (function (_super) {
    __extends(UpdateCommonAreaPhoneRequest, _super);
    function UpdateCommonAreaPhoneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateCommonAreaPhonePathParams)
    ], UpdateCommonAreaPhoneRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateCommonAreaPhoneRequests)
    ], UpdateCommonAreaPhoneRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateCommonAreaPhoneSecurity)
    ], UpdateCommonAreaPhoneRequest.prototype, "security", void 0);
    return UpdateCommonAreaPhoneRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateCommonAreaPhoneRequest = UpdateCommonAreaPhoneRequest;
var UpdateCommonAreaPhoneResponse = /** @class */ (function (_super) {
    __extends(UpdateCommonAreaPhoneResponse, _super);
    function UpdateCommonAreaPhoneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdateCommonAreaPhoneResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateCommonAreaPhoneResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateCommonAreaPhoneResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateCommonAreaPhoneResponse.prototype, "updateCommonAreaPhone204ApplicationJSONAny", void 0);
    return UpdateCommonAreaPhoneResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateCommonAreaPhoneResponse = UpdateCommonAreaPhoneResponse;
