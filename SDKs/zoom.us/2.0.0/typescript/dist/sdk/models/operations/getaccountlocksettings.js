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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAccountLockSettingsResponse = exports.GetAccountLockSettingsRequest = exports.GetAccountLockSettingsQueryParams = exports.GetAccountLockSettingsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetAccountLockSettingsPathParams = /** @class */ (function (_super) {
    __extends(GetAccountLockSettingsPathParams, _super);
    function GetAccountLockSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], GetAccountLockSettingsPathParams.prototype, "accountId", void 0);
    return GetAccountLockSettingsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetAccountLockSettingsPathParams = GetAccountLockSettingsPathParams;
var GetAccountLockSettingsQueryParams = /** @class */ (function (_super) {
    __extends(GetAccountLockSettingsQueryParams, _super);
    function GetAccountLockSettingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=custom_query_fields" }),
        __metadata("design:type", String)
    ], GetAccountLockSettingsQueryParams.prototype, "customQueryFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=option" }),
        __metadata("design:type", String)
    ], GetAccountLockSettingsQueryParams.prototype, "option", void 0);
    return GetAccountLockSettingsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetAccountLockSettingsQueryParams = GetAccountLockSettingsQueryParams;
var GetAccountLockSettingsRequest = /** @class */ (function (_super) {
    __extends(GetAccountLockSettingsRequest, _super);
    function GetAccountLockSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAccountLockSettingsPathParams)
    ], GetAccountLockSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAccountLockSettingsQueryParams)
    ], GetAccountLockSettingsRequest.prototype, "queryParams", void 0);
    return GetAccountLockSettingsRequest;
}(utils_1.SpeakeasyBase));
exports.GetAccountLockSettingsRequest = GetAccountLockSettingsRequest;
var GetAccountLockSettingsResponse = /** @class */ (function (_super) {
    __extends(GetAccountLockSettingsResponse, _super);
    function GetAccountLockSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetAccountLockSettingsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAccountLockSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAccountLockSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAccountLockSettingsResponse.prototype, "getAccountLockSettings200ApplicationJSONObject", void 0);
    return GetAccountLockSettingsResponse;
}(utils_1.SpeakeasyBase));
exports.GetAccountLockSettingsResponse = GetAccountLockSettingsResponse;
