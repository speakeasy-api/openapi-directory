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
exports.ComputeNodeGetRemoteLoginSettingsResponse = exports.ComputeNodeGetRemoteLoginSettingsRequest = exports.ComputeNodeGetRemoteLoginSettingsHeaders = exports.ComputeNodeGetRemoteLoginSettingsQueryParams = exports.ComputeNodeGetRemoteLoginSettingsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ComputeNodeGetRemoteLoginSettingsPathParams = /** @class */ (function (_super) {
    __extends(ComputeNodeGetRemoteLoginSettingsPathParams, _super);
    function ComputeNodeGetRemoteLoginSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], ComputeNodeGetRemoteLoginSettingsPathParams.prototype, "nodeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=poolId" }),
        __metadata("design:type", String)
    ], ComputeNodeGetRemoteLoginSettingsPathParams.prototype, "poolId", void 0);
    return ComputeNodeGetRemoteLoginSettingsPathParams;
}(utils_1.SpeakeasyBase));
exports.ComputeNodeGetRemoteLoginSettingsPathParams = ComputeNodeGetRemoteLoginSettingsPathParams;
var ComputeNodeGetRemoteLoginSettingsQueryParams = /** @class */ (function (_super) {
    __extends(ComputeNodeGetRemoteLoginSettingsQueryParams, _super);
    function ComputeNodeGetRemoteLoginSettingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], ComputeNodeGetRemoteLoginSettingsQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], ComputeNodeGetRemoteLoginSettingsQueryParams.prototype, "timeout", void 0);
    return ComputeNodeGetRemoteLoginSettingsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ComputeNodeGetRemoteLoginSettingsQueryParams = ComputeNodeGetRemoteLoginSettingsQueryParams;
var ComputeNodeGetRemoteLoginSettingsHeaders = /** @class */ (function (_super) {
    __extends(ComputeNodeGetRemoteLoginSettingsHeaders, _super);
    function ComputeNodeGetRemoteLoginSettingsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], ComputeNodeGetRemoteLoginSettingsHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], ComputeNodeGetRemoteLoginSettingsHeaders.prototype, "ocpDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], ComputeNodeGetRemoteLoginSettingsHeaders.prototype, "returnClientRequestId", void 0);
    return ComputeNodeGetRemoteLoginSettingsHeaders;
}(utils_1.SpeakeasyBase));
exports.ComputeNodeGetRemoteLoginSettingsHeaders = ComputeNodeGetRemoteLoginSettingsHeaders;
var ComputeNodeGetRemoteLoginSettingsRequest = /** @class */ (function (_super) {
    __extends(ComputeNodeGetRemoteLoginSettingsRequest, _super);
    function ComputeNodeGetRemoteLoginSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ComputeNodeGetRemoteLoginSettingsPathParams)
    ], ComputeNodeGetRemoteLoginSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ComputeNodeGetRemoteLoginSettingsQueryParams)
    ], ComputeNodeGetRemoteLoginSettingsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ComputeNodeGetRemoteLoginSettingsHeaders)
    ], ComputeNodeGetRemoteLoginSettingsRequest.prototype, "headers", void 0);
    return ComputeNodeGetRemoteLoginSettingsRequest;
}(utils_1.SpeakeasyBase));
exports.ComputeNodeGetRemoteLoginSettingsRequest = ComputeNodeGetRemoteLoginSettingsRequest;
var ComputeNodeGetRemoteLoginSettingsResponse = /** @class */ (function (_super) {
    __extends(ComputeNodeGetRemoteLoginSettingsResponse, _super);
    function ComputeNodeGetRemoteLoginSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ComputeNodeGetRemoteLoginSettingsResponse.prototype, "batchError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ComputeNodeGetRemoteLoginSettingsResponse.prototype, "computeNodeGetRemoteLoginSettingsResult", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ComputeNodeGetRemoteLoginSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ComputeNodeGetRemoteLoginSettingsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ComputeNodeGetRemoteLoginSettingsResponse.prototype, "statusCode", void 0);
    return ComputeNodeGetRemoteLoginSettingsResponse;
}(utils_1.SpeakeasyBase));
exports.ComputeNodeGetRemoteLoginSettingsResponse = ComputeNodeGetRemoteLoginSettingsResponse;
