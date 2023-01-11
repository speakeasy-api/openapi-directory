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
exports.PoolStopResizeResponse = exports.PoolStopResizeRequest = exports.PoolStopResizeHeaders = exports.PoolStopResizeQueryParams = exports.PoolStopResizePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PoolStopResizePathParams = /** @class */ (function (_super) {
    __extends(PoolStopResizePathParams, _super);
    function PoolStopResizePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=poolId" }),
        __metadata("design:type", String)
    ], PoolStopResizePathParams.prototype, "poolId", void 0);
    return PoolStopResizePathParams;
}(utils_1.SpeakeasyBase));
exports.PoolStopResizePathParams = PoolStopResizePathParams;
var PoolStopResizeQueryParams = /** @class */ (function (_super) {
    __extends(PoolStopResizeQueryParams, _super);
    function PoolStopResizeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], PoolStopResizeQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], PoolStopResizeQueryParams.prototype, "timeout", void 0);
    return PoolStopResizeQueryParams;
}(utils_1.SpeakeasyBase));
exports.PoolStopResizeQueryParams = PoolStopResizeQueryParams;
var PoolStopResizeHeaders = /** @class */ (function (_super) {
    __extends(PoolStopResizeHeaders, _super);
    function PoolStopResizeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], PoolStopResizeHeaders.prototype, "ifMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], PoolStopResizeHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], PoolStopResizeHeaders.prototype, "ifNoneMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Unmodified-Since" }),
        __metadata("design:type", String)
    ], PoolStopResizeHeaders.prototype, "ifUnmodifiedSince", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], PoolStopResizeHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], PoolStopResizeHeaders.prototype, "ocpDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], PoolStopResizeHeaders.prototype, "returnClientRequestId", void 0);
    return PoolStopResizeHeaders;
}(utils_1.SpeakeasyBase));
exports.PoolStopResizeHeaders = PoolStopResizeHeaders;
var PoolStopResizeRequest = /** @class */ (function (_super) {
    __extends(PoolStopResizeRequest, _super);
    function PoolStopResizeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PoolStopResizePathParams)
    ], PoolStopResizeRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PoolStopResizeQueryParams)
    ], PoolStopResizeRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PoolStopResizeHeaders)
    ], PoolStopResizeRequest.prototype, "headers", void 0);
    return PoolStopResizeRequest;
}(utils_1.SpeakeasyBase));
exports.PoolStopResizeRequest = PoolStopResizeRequest;
var PoolStopResizeResponse = /** @class */ (function (_super) {
    __extends(PoolStopResizeResponse, _super);
    function PoolStopResizeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PoolStopResizeResponse.prototype, "batchError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PoolStopResizeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PoolStopResizeResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PoolStopResizeResponse.prototype, "statusCode", void 0);
    return PoolStopResizeResponse;
}(utils_1.SpeakeasyBase));
exports.PoolStopResizeResponse = PoolStopResizeResponse;
