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
exports.PoolEnableAutoScaleResponse = exports.PoolEnableAutoScaleRequest = exports.PoolEnableAutoScaleHeaders = exports.PoolEnableAutoScaleQueryParams = exports.PoolEnableAutoScalePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PoolEnableAutoScalePathParams = /** @class */ (function (_super) {
    __extends(PoolEnableAutoScalePathParams, _super);
    function PoolEnableAutoScalePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=poolId" }),
        __metadata("design:type", String)
    ], PoolEnableAutoScalePathParams.prototype, "poolId", void 0);
    return PoolEnableAutoScalePathParams;
}(utils_1.SpeakeasyBase));
exports.PoolEnableAutoScalePathParams = PoolEnableAutoScalePathParams;
var PoolEnableAutoScaleQueryParams = /** @class */ (function (_super) {
    __extends(PoolEnableAutoScaleQueryParams, _super);
    function PoolEnableAutoScaleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], PoolEnableAutoScaleQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], PoolEnableAutoScaleQueryParams.prototype, "timeout", void 0);
    return PoolEnableAutoScaleQueryParams;
}(utils_1.SpeakeasyBase));
exports.PoolEnableAutoScaleQueryParams = PoolEnableAutoScaleQueryParams;
var PoolEnableAutoScaleHeaders = /** @class */ (function (_super) {
    __extends(PoolEnableAutoScaleHeaders, _super);
    function PoolEnableAutoScaleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], PoolEnableAutoScaleHeaders.prototype, "ifMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], PoolEnableAutoScaleHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], PoolEnableAutoScaleHeaders.prototype, "ifNoneMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Unmodified-Since" }),
        __metadata("design:type", String)
    ], PoolEnableAutoScaleHeaders.prototype, "ifUnmodifiedSince", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], PoolEnableAutoScaleHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], PoolEnableAutoScaleHeaders.prototype, "ocpDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], PoolEnableAutoScaleHeaders.prototype, "returnClientRequestId", void 0);
    return PoolEnableAutoScaleHeaders;
}(utils_1.SpeakeasyBase));
exports.PoolEnableAutoScaleHeaders = PoolEnableAutoScaleHeaders;
var PoolEnableAutoScaleRequest = /** @class */ (function (_super) {
    __extends(PoolEnableAutoScaleRequest, _super);
    function PoolEnableAutoScaleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PoolEnableAutoScalePathParams)
    ], PoolEnableAutoScaleRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PoolEnableAutoScaleQueryParams)
    ], PoolEnableAutoScaleRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PoolEnableAutoScaleHeaders)
    ], PoolEnableAutoScaleRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PoolEnableAutoScaleRequest.prototype, "request", void 0);
    return PoolEnableAutoScaleRequest;
}(utils_1.SpeakeasyBase));
exports.PoolEnableAutoScaleRequest = PoolEnableAutoScaleRequest;
var PoolEnableAutoScaleResponse = /** @class */ (function (_super) {
    __extends(PoolEnableAutoScaleResponse, _super);
    function PoolEnableAutoScaleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PoolEnableAutoScaleResponse.prototype, "batchError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PoolEnableAutoScaleResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PoolEnableAutoScaleResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PoolEnableAutoScaleResponse.prototype, "statusCode", void 0);
    return PoolEnableAutoScaleResponse;
}(utils_1.SpeakeasyBase));
exports.PoolEnableAutoScaleResponse = PoolEnableAutoScaleResponse;
