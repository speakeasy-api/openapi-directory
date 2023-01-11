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
exports.PoolListPoolUsageMetricsResponse = exports.PoolListPoolUsageMetricsRequest = exports.PoolListPoolUsageMetricsHeaders = exports.PoolListPoolUsageMetricsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var PoolListPoolUsageMetricsQueryParams = /** @class */ (function (_super) {
    __extends(PoolListPoolUsageMetricsQueryParams, _super);
    function PoolListPoolUsageMetricsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$filter" }),
        __metadata("design:type", String)
    ], PoolListPoolUsageMetricsQueryParams.prototype, "dollarFilter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], PoolListPoolUsageMetricsQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=endtime" }),
        __metadata("design:type", Date)
    ], PoolListPoolUsageMetricsQueryParams.prototype, "endtime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxresults" }),
        __metadata("design:type", Number)
    ], PoolListPoolUsageMetricsQueryParams.prototype, "maxresults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=starttime" }),
        __metadata("design:type", Date)
    ], PoolListPoolUsageMetricsQueryParams.prototype, "starttime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], PoolListPoolUsageMetricsQueryParams.prototype, "timeout", void 0);
    return PoolListPoolUsageMetricsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PoolListPoolUsageMetricsQueryParams = PoolListPoolUsageMetricsQueryParams;
var PoolListPoolUsageMetricsHeaders = /** @class */ (function (_super) {
    __extends(PoolListPoolUsageMetricsHeaders, _super);
    function PoolListPoolUsageMetricsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], PoolListPoolUsageMetricsHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], PoolListPoolUsageMetricsHeaders.prototype, "ocpDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], PoolListPoolUsageMetricsHeaders.prototype, "returnClientRequestId", void 0);
    return PoolListPoolUsageMetricsHeaders;
}(utils_1.SpeakeasyBase));
exports.PoolListPoolUsageMetricsHeaders = PoolListPoolUsageMetricsHeaders;
var PoolListPoolUsageMetricsRequest = /** @class */ (function (_super) {
    __extends(PoolListPoolUsageMetricsRequest, _super);
    function PoolListPoolUsageMetricsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PoolListPoolUsageMetricsQueryParams)
    ], PoolListPoolUsageMetricsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PoolListPoolUsageMetricsHeaders)
    ], PoolListPoolUsageMetricsRequest.prototype, "headers", void 0);
    return PoolListPoolUsageMetricsRequest;
}(utils_1.SpeakeasyBase));
exports.PoolListPoolUsageMetricsRequest = PoolListPoolUsageMetricsRequest;
var PoolListPoolUsageMetricsResponse = /** @class */ (function (_super) {
    __extends(PoolListPoolUsageMetricsResponse, _super);
    function PoolListPoolUsageMetricsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PoolListPoolUsageMetricsResponse.prototype, "batchError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PoolListPoolUsageMetricsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PoolListPoolUsageMetricsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PoolListPoolUsageMetricsResponse.prototype, "poolListPoolUsageMetricsResult", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PoolListPoolUsageMetricsResponse.prototype, "statusCode", void 0);
    return PoolListPoolUsageMetricsResponse;
}(utils_1.SpeakeasyBase));
exports.PoolListPoolUsageMetricsResponse = PoolListPoolUsageMetricsResponse;
