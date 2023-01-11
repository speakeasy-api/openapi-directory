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
exports.UpdatePhoneSettingsResponse = exports.UpdatePhoneSettingsRequest = exports.UpdatePhoneSettingsSecurity = exports.UpdatePhoneSettingsRequests = exports.UpdatePhoneSettingsMultipartFormData = exports.UpdatePhoneSettingsMultipartFormDataByoc = exports.UpdatePhoneSettingsApplicationJson = exports.UpdatePhoneSettingsApplicationJsonByoc = exports.UpdatePhoneSettingsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdatePhoneSettingsPathParams = /** @class */ (function (_super) {
    __extends(UpdatePhoneSettingsPathParams, _super);
    function UpdatePhoneSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], UpdatePhoneSettingsPathParams.prototype, "accountId", void 0);
    return UpdatePhoneSettingsPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdatePhoneSettingsPathParams = UpdatePhoneSettingsPathParams;
var UpdatePhoneSettingsApplicationJsonByoc = /** @class */ (function (_super) {
    __extends(UpdatePhoneSettingsApplicationJsonByoc, _super);
    function UpdatePhoneSettingsApplicationJsonByoc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], UpdatePhoneSettingsApplicationJsonByoc.prototype, "enable", void 0);
    return UpdatePhoneSettingsApplicationJsonByoc;
}(utils_1.SpeakeasyBase));
exports.UpdatePhoneSettingsApplicationJsonByoc = UpdatePhoneSettingsApplicationJsonByoc;
var UpdatePhoneSettingsApplicationJson = /** @class */ (function (_super) {
    __extends(UpdatePhoneSettingsApplicationJson, _super);
    function UpdatePhoneSettingsApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=byoc" }),
        __metadata("design:type", UpdatePhoneSettingsApplicationJsonByoc)
    ], UpdatePhoneSettingsApplicationJson.prototype, "byoc", void 0);
    return UpdatePhoneSettingsApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdatePhoneSettingsApplicationJson = UpdatePhoneSettingsApplicationJson;
var UpdatePhoneSettingsMultipartFormDataByoc = /** @class */ (function (_super) {
    __extends(UpdatePhoneSettingsMultipartFormDataByoc, _super);
    function UpdatePhoneSettingsMultipartFormDataByoc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], UpdatePhoneSettingsMultipartFormDataByoc.prototype, "enable", void 0);
    return UpdatePhoneSettingsMultipartFormDataByoc;
}(utils_1.SpeakeasyBase));
exports.UpdatePhoneSettingsMultipartFormDataByoc = UpdatePhoneSettingsMultipartFormDataByoc;
var UpdatePhoneSettingsMultipartFormData = /** @class */ (function (_super) {
    __extends(UpdatePhoneSettingsMultipartFormData, _super);
    function UpdatePhoneSettingsMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=byoc;json=true" }),
        __metadata("design:type", UpdatePhoneSettingsMultipartFormDataByoc)
    ], UpdatePhoneSettingsMultipartFormData.prototype, "byoc", void 0);
    return UpdatePhoneSettingsMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.UpdatePhoneSettingsMultipartFormData = UpdatePhoneSettingsMultipartFormData;
var UpdatePhoneSettingsRequests = /** @class */ (function (_super) {
    __extends(UpdatePhoneSettingsRequests, _super);
    function UpdatePhoneSettingsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdatePhoneSettingsApplicationJson)
    ], UpdatePhoneSettingsRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdatePhoneSettingsMultipartFormData)
    ], UpdatePhoneSettingsRequests.prototype, "object1", void 0);
    return UpdatePhoneSettingsRequests;
}(utils_1.SpeakeasyBase));
exports.UpdatePhoneSettingsRequests = UpdatePhoneSettingsRequests;
var UpdatePhoneSettingsSecurity = /** @class */ (function (_super) {
    __extends(UpdatePhoneSettingsSecurity, _super);
    function UpdatePhoneSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], UpdatePhoneSettingsSecurity.prototype, "oAuth", void 0);
    return UpdatePhoneSettingsSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdatePhoneSettingsSecurity = UpdatePhoneSettingsSecurity;
var UpdatePhoneSettingsRequest = /** @class */ (function (_super) {
    __extends(UpdatePhoneSettingsRequest, _super);
    function UpdatePhoneSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdatePhoneSettingsPathParams)
    ], UpdatePhoneSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdatePhoneSettingsRequests)
    ], UpdatePhoneSettingsRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdatePhoneSettingsSecurity)
    ], UpdatePhoneSettingsRequest.prototype, "security", void 0);
    return UpdatePhoneSettingsRequest;
}(utils_1.SpeakeasyBase));
exports.UpdatePhoneSettingsRequest = UpdatePhoneSettingsRequest;
var UpdatePhoneSettingsResponse = /** @class */ (function (_super) {
    __extends(UpdatePhoneSettingsResponse, _super);
    function UpdatePhoneSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdatePhoneSettingsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdatePhoneSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdatePhoneSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdatePhoneSettingsResponse.prototype, "updatePhoneSettings204ApplicationJSONAny", void 0);
    return UpdatePhoneSettingsResponse;
}(utils_1.SpeakeasyBase));
exports.UpdatePhoneSettingsResponse = UpdatePhoneSettingsResponse;
