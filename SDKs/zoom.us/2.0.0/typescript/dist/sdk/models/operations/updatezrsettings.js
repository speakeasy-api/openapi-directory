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
exports.UpdateZrSettingsResponse = exports.UpdateZrSettingsRequest = exports.UpdateZrSettingsSecurity = exports.UpdateZrSettingsRequests = exports.UpdateZrSettingsQueryParams = exports.UpdateZrSettingsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateZrSettingsPathParams = /** @class */ (function (_super) {
    __extends(UpdateZrSettingsPathParams, _super);
    function UpdateZrSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=roomId" }),
        __metadata("design:type", String)
    ], UpdateZrSettingsPathParams.prototype, "roomId", void 0);
    return UpdateZrSettingsPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateZrSettingsPathParams = UpdateZrSettingsPathParams;
var UpdateZrSettingsQueryParams = /** @class */ (function (_super) {
    __extends(UpdateZrSettingsQueryParams, _super);
    function UpdateZrSettingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=setting_type" }),
        __metadata("design:type", String)
    ], UpdateZrSettingsQueryParams.prototype, "settingType", void 0);
    return UpdateZrSettingsQueryParams;
}(utils_1.SpeakeasyBase));
exports.UpdateZrSettingsQueryParams = UpdateZrSettingsQueryParams;
var UpdateZrSettingsRequests = /** @class */ (function (_super) {
    __extends(UpdateZrSettingsRequests, _super);
    function UpdateZrSettingsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], UpdateZrSettingsRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", Object)
    ], UpdateZrSettingsRequests.prototype, "object1", void 0);
    return UpdateZrSettingsRequests;
}(utils_1.SpeakeasyBase));
exports.UpdateZrSettingsRequests = UpdateZrSettingsRequests;
var UpdateZrSettingsSecurity = /** @class */ (function (_super) {
    __extends(UpdateZrSettingsSecurity, _super);
    function UpdateZrSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], UpdateZrSettingsSecurity.prototype, "oAuth", void 0);
    return UpdateZrSettingsSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateZrSettingsSecurity = UpdateZrSettingsSecurity;
var UpdateZrSettingsRequest = /** @class */ (function (_super) {
    __extends(UpdateZrSettingsRequest, _super);
    function UpdateZrSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateZrSettingsPathParams)
    ], UpdateZrSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateZrSettingsQueryParams)
    ], UpdateZrSettingsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateZrSettingsRequests)
    ], UpdateZrSettingsRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateZrSettingsSecurity)
    ], UpdateZrSettingsRequest.prototype, "security", void 0);
    return UpdateZrSettingsRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateZrSettingsRequest = UpdateZrSettingsRequest;
var UpdateZrSettingsResponse = /** @class */ (function (_super) {
    __extends(UpdateZrSettingsResponse, _super);
    function UpdateZrSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdateZrSettingsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateZrSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateZrSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateZrSettingsResponse.prototype, "updateZRSettings204ApplicationJSONAny", void 0);
    return UpdateZrSettingsResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateZrSettingsResponse = UpdateZrSettingsResponse;
