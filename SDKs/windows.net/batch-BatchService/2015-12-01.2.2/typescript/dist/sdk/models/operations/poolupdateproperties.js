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
exports.PoolUpdatePropertiesResponse = exports.PoolUpdatePropertiesRequest = exports.PoolUpdatePropertiesHeaders = exports.PoolUpdatePropertiesQueryParams = exports.PoolUpdatePropertiesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PoolUpdatePropertiesPathParams = /** @class */ (function (_super) {
    __extends(PoolUpdatePropertiesPathParams, _super);
    function PoolUpdatePropertiesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=poolId" }),
        __metadata("design:type", String)
    ], PoolUpdatePropertiesPathParams.prototype, "poolId", void 0);
    return PoolUpdatePropertiesPathParams;
}(utils_1.SpeakeasyBase));
exports.PoolUpdatePropertiesPathParams = PoolUpdatePropertiesPathParams;
var PoolUpdatePropertiesQueryParams = /** @class */ (function (_super) {
    __extends(PoolUpdatePropertiesQueryParams, _super);
    function PoolUpdatePropertiesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], PoolUpdatePropertiesQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], PoolUpdatePropertiesQueryParams.prototype, "timeout", void 0);
    return PoolUpdatePropertiesQueryParams;
}(utils_1.SpeakeasyBase));
exports.PoolUpdatePropertiesQueryParams = PoolUpdatePropertiesQueryParams;
var PoolUpdatePropertiesHeaders = /** @class */ (function (_super) {
    __extends(PoolUpdatePropertiesHeaders, _super);
    function PoolUpdatePropertiesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], PoolUpdatePropertiesHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], PoolUpdatePropertiesHeaders.prototype, "ocpDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], PoolUpdatePropertiesHeaders.prototype, "returnClientRequestId", void 0);
    return PoolUpdatePropertiesHeaders;
}(utils_1.SpeakeasyBase));
exports.PoolUpdatePropertiesHeaders = PoolUpdatePropertiesHeaders;
var PoolUpdatePropertiesRequest = /** @class */ (function (_super) {
    __extends(PoolUpdatePropertiesRequest, _super);
    function PoolUpdatePropertiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PoolUpdatePropertiesPathParams)
    ], PoolUpdatePropertiesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PoolUpdatePropertiesQueryParams)
    ], PoolUpdatePropertiesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PoolUpdatePropertiesHeaders)
    ], PoolUpdatePropertiesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PoolUpdatePropertiesRequest.prototype, "request", void 0);
    return PoolUpdatePropertiesRequest;
}(utils_1.SpeakeasyBase));
exports.PoolUpdatePropertiesRequest = PoolUpdatePropertiesRequest;
var PoolUpdatePropertiesResponse = /** @class */ (function (_super) {
    __extends(PoolUpdatePropertiesResponse, _super);
    function PoolUpdatePropertiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PoolUpdatePropertiesResponse.prototype, "batchError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PoolUpdatePropertiesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PoolUpdatePropertiesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PoolUpdatePropertiesResponse.prototype, "statusCode", void 0);
    return PoolUpdatePropertiesResponse;
}(utils_1.SpeakeasyBase));
exports.PoolUpdatePropertiesResponse = PoolUpdatePropertiesResponse;
