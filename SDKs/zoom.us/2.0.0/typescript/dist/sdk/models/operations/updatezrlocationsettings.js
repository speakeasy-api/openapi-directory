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
exports.UpdateZrLocationSettingsResponse = exports.UpdateZrLocationSettingsRequest = exports.UpdateZrLocationSettingsSecurity = exports.UpdateZrLocationSettingsRequests = exports.UpdateZrLocationSettingsQueryParams = exports.UpdateZrLocationSettingsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateZrLocationSettingsPathParams = /** @class */ (function (_super) {
    __extends(UpdateZrLocationSettingsPathParams, _super);
    function UpdateZrLocationSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=locationId" }),
        __metadata("design:type", String)
    ], UpdateZrLocationSettingsPathParams.prototype, "locationId", void 0);
    return UpdateZrLocationSettingsPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateZrLocationSettingsPathParams = UpdateZrLocationSettingsPathParams;
var UpdateZrLocationSettingsQueryParams = /** @class */ (function (_super) {
    __extends(UpdateZrLocationSettingsQueryParams, _super);
    function UpdateZrLocationSettingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=setting_type" }),
        __metadata("design:type", String)
    ], UpdateZrLocationSettingsQueryParams.prototype, "settingType", void 0);
    return UpdateZrLocationSettingsQueryParams;
}(utils_1.SpeakeasyBase));
exports.UpdateZrLocationSettingsQueryParams = UpdateZrLocationSettingsQueryParams;
var UpdateZrLocationSettingsRequests = /** @class */ (function (_super) {
    __extends(UpdateZrLocationSettingsRequests, _super);
    function UpdateZrLocationSettingsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], UpdateZrLocationSettingsRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", Object)
    ], UpdateZrLocationSettingsRequests.prototype, "object1", void 0);
    return UpdateZrLocationSettingsRequests;
}(utils_1.SpeakeasyBase));
exports.UpdateZrLocationSettingsRequests = UpdateZrLocationSettingsRequests;
var UpdateZrLocationSettingsSecurity = /** @class */ (function (_super) {
    __extends(UpdateZrLocationSettingsSecurity, _super);
    function UpdateZrLocationSettingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], UpdateZrLocationSettingsSecurity.prototype, "oAuth", void 0);
    return UpdateZrLocationSettingsSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateZrLocationSettingsSecurity = UpdateZrLocationSettingsSecurity;
var UpdateZrLocationSettingsRequest = /** @class */ (function (_super) {
    __extends(UpdateZrLocationSettingsRequest, _super);
    function UpdateZrLocationSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateZrLocationSettingsPathParams)
    ], UpdateZrLocationSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateZrLocationSettingsQueryParams)
    ], UpdateZrLocationSettingsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateZrLocationSettingsRequests)
    ], UpdateZrLocationSettingsRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateZrLocationSettingsSecurity)
    ], UpdateZrLocationSettingsRequest.prototype, "security", void 0);
    return UpdateZrLocationSettingsRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateZrLocationSettingsRequest = UpdateZrLocationSettingsRequest;
var UpdateZrLocationSettingsResponse = /** @class */ (function (_super) {
    __extends(UpdateZrLocationSettingsResponse, _super);
    function UpdateZrLocationSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdateZrLocationSettingsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateZrLocationSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateZrLocationSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateZrLocationSettingsResponse.prototype, "updateZRLocationSettings204ApplicationJSONAny", void 0);
    return UpdateZrLocationSettingsResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateZrLocationSettingsResponse = UpdateZrLocationSettingsResponse;
