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
exports.ComputeNodeGetRemoteDesktopResponse = exports.ComputeNodeGetRemoteDesktopRequest = exports.ComputeNodeGetRemoteDesktopHeaders = exports.ComputeNodeGetRemoteDesktopQueryParams = exports.ComputeNodeGetRemoteDesktopPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ComputeNodeGetRemoteDesktopPathParams = /** @class */ (function (_super) {
    __extends(ComputeNodeGetRemoteDesktopPathParams, _super);
    function ComputeNodeGetRemoteDesktopPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], ComputeNodeGetRemoteDesktopPathParams.prototype, "nodeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=poolId" }),
        __metadata("design:type", String)
    ], ComputeNodeGetRemoteDesktopPathParams.prototype, "poolId", void 0);
    return ComputeNodeGetRemoteDesktopPathParams;
}(utils_1.SpeakeasyBase));
exports.ComputeNodeGetRemoteDesktopPathParams = ComputeNodeGetRemoteDesktopPathParams;
var ComputeNodeGetRemoteDesktopQueryParams = /** @class */ (function (_super) {
    __extends(ComputeNodeGetRemoteDesktopQueryParams, _super);
    function ComputeNodeGetRemoteDesktopQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], ComputeNodeGetRemoteDesktopQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], ComputeNodeGetRemoteDesktopQueryParams.prototype, "timeout", void 0);
    return ComputeNodeGetRemoteDesktopQueryParams;
}(utils_1.SpeakeasyBase));
exports.ComputeNodeGetRemoteDesktopQueryParams = ComputeNodeGetRemoteDesktopQueryParams;
var ComputeNodeGetRemoteDesktopHeaders = /** @class */ (function (_super) {
    __extends(ComputeNodeGetRemoteDesktopHeaders, _super);
    function ComputeNodeGetRemoteDesktopHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], ComputeNodeGetRemoteDesktopHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], ComputeNodeGetRemoteDesktopHeaders.prototype, "ocpDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], ComputeNodeGetRemoteDesktopHeaders.prototype, "returnClientRequestId", void 0);
    return ComputeNodeGetRemoteDesktopHeaders;
}(utils_1.SpeakeasyBase));
exports.ComputeNodeGetRemoteDesktopHeaders = ComputeNodeGetRemoteDesktopHeaders;
var ComputeNodeGetRemoteDesktopRequest = /** @class */ (function (_super) {
    __extends(ComputeNodeGetRemoteDesktopRequest, _super);
    function ComputeNodeGetRemoteDesktopRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ComputeNodeGetRemoteDesktopPathParams)
    ], ComputeNodeGetRemoteDesktopRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ComputeNodeGetRemoteDesktopQueryParams)
    ], ComputeNodeGetRemoteDesktopRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ComputeNodeGetRemoteDesktopHeaders)
    ], ComputeNodeGetRemoteDesktopRequest.prototype, "headers", void 0);
    return ComputeNodeGetRemoteDesktopRequest;
}(utils_1.SpeakeasyBase));
exports.ComputeNodeGetRemoteDesktopRequest = ComputeNodeGetRemoteDesktopRequest;
var ComputeNodeGetRemoteDesktopResponse = /** @class */ (function (_super) {
    __extends(ComputeNodeGetRemoteDesktopResponse, _super);
    function ComputeNodeGetRemoteDesktopResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ComputeNodeGetRemoteDesktopResponse.prototype, "batchError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ComputeNodeGetRemoteDesktopResponse.prototype, "computeNodeGetRemoteDesktop200ApplicationJSONBinaryString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ComputeNodeGetRemoteDesktopResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ComputeNodeGetRemoteDesktopResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ComputeNodeGetRemoteDesktopResponse.prototype, "statusCode", void 0);
    return ComputeNodeGetRemoteDesktopResponse;
}(utils_1.SpeakeasyBase));
exports.ComputeNodeGetRemoteDesktopResponse = ComputeNodeGetRemoteDesktopResponse;
