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
exports.GetAccountingPeriodResponse = exports.GetAccountingPeriodRequest = exports.GetAccountingPeriodHeaders = exports.GetAccountingPeriodPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetAccountingPeriodPathParams = /** @class */ (function (_super) {
    __extends(GetAccountingPeriodPathParams, _super);
    function GetAccountingPeriodPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ap-id" }),
        __metadata("design:type", String)
    ], GetAccountingPeriodPathParams.prototype, "apId", void 0);
    return GetAccountingPeriodPathParams;
}(utils_1.SpeakeasyBase));
exports.GetAccountingPeriodPathParams = GetAccountingPeriodPathParams;
var GetAccountingPeriodHeaders = /** @class */ (function (_super) {
    __extends(GetAccountingPeriodHeaders, _super);
    function GetAccountingPeriodHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetAccountingPeriodHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetAccountingPeriodHeaders.prototype, "zuoraTrackId", void 0);
    return GetAccountingPeriodHeaders;
}(utils_1.SpeakeasyBase));
exports.GetAccountingPeriodHeaders = GetAccountingPeriodHeaders;
var GetAccountingPeriodRequest = /** @class */ (function (_super) {
    __extends(GetAccountingPeriodRequest, _super);
    function GetAccountingPeriodRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAccountingPeriodPathParams)
    ], GetAccountingPeriodRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAccountingPeriodHeaders)
    ], GetAccountingPeriodRequest.prototype, "headers", void 0);
    return GetAccountingPeriodRequest;
}(utils_1.SpeakeasyBase));
exports.GetAccountingPeriodRequest = GetAccountingPeriodRequest;
var GetAccountingPeriodResponse = /** @class */ (function (_super) {
    __extends(GetAccountingPeriodResponse, _super);
    function GetAccountingPeriodResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAccountingPeriodResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAccountingPeriodResponse.prototype, "getAccountingPeriodType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAccountingPeriodResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAccountingPeriodResponse.prototype, "statusCode", void 0);
    return GetAccountingPeriodResponse;
}(utils_1.SpeakeasyBase));
exports.GetAccountingPeriodResponse = GetAccountingPeriodResponse;
