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
exports.FileGetFromComputeNodeResponse = exports.FileGetFromComputeNodeRequest = exports.FileGetFromComputeNodeHeaders = exports.FileGetFromComputeNodeQueryParams = exports.FileGetFromComputeNodePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var FileGetFromComputeNodePathParams = /** @class */ (function (_super) {
    __extends(FileGetFromComputeNodePathParams, _super);
    function FileGetFromComputeNodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=fileName" }),
        __metadata("design:type", String)
    ], FileGetFromComputeNodePathParams.prototype, "fileName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], FileGetFromComputeNodePathParams.prototype, "nodeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=poolId" }),
        __metadata("design:type", String)
    ], FileGetFromComputeNodePathParams.prototype, "poolId", void 0);
    return FileGetFromComputeNodePathParams;
}(utils_1.SpeakeasyBase));
exports.FileGetFromComputeNodePathParams = FileGetFromComputeNodePathParams;
var FileGetFromComputeNodeQueryParams = /** @class */ (function (_super) {
    __extends(FileGetFromComputeNodeQueryParams, _super);
    function FileGetFromComputeNodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], FileGetFromComputeNodeQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], FileGetFromComputeNodeQueryParams.prototype, "timeout", void 0);
    return FileGetFromComputeNodeQueryParams;
}(utils_1.SpeakeasyBase));
exports.FileGetFromComputeNodeQueryParams = FileGetFromComputeNodeQueryParams;
var FileGetFromComputeNodeHeaders = /** @class */ (function (_super) {
    __extends(FileGetFromComputeNodeHeaders, _super);
    function FileGetFromComputeNodeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], FileGetFromComputeNodeHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Unmodified-Since" }),
        __metadata("design:type", String)
    ], FileGetFromComputeNodeHeaders.prototype, "ifUnmodifiedSince", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], FileGetFromComputeNodeHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], FileGetFromComputeNodeHeaders.prototype, "ocpDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ocp-range" }),
        __metadata("design:type", String)
    ], FileGetFromComputeNodeHeaders.prototype, "ocpRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], FileGetFromComputeNodeHeaders.prototype, "returnClientRequestId", void 0);
    return FileGetFromComputeNodeHeaders;
}(utils_1.SpeakeasyBase));
exports.FileGetFromComputeNodeHeaders = FileGetFromComputeNodeHeaders;
var FileGetFromComputeNodeRequest = /** @class */ (function (_super) {
    __extends(FileGetFromComputeNodeRequest, _super);
    function FileGetFromComputeNodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FileGetFromComputeNodePathParams)
    ], FileGetFromComputeNodeRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FileGetFromComputeNodeQueryParams)
    ], FileGetFromComputeNodeRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FileGetFromComputeNodeHeaders)
    ], FileGetFromComputeNodeRequest.prototype, "headers", void 0);
    return FileGetFromComputeNodeRequest;
}(utils_1.SpeakeasyBase));
exports.FileGetFromComputeNodeRequest = FileGetFromComputeNodeRequest;
var FileGetFromComputeNodeResponse = /** @class */ (function (_super) {
    __extends(FileGetFromComputeNodeResponse, _super);
    function FileGetFromComputeNodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], FileGetFromComputeNodeResponse.prototype, "batchError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FileGetFromComputeNodeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], FileGetFromComputeNodeResponse.prototype, "fileGetFromComputeNode200ApplicationJSONBinaryString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], FileGetFromComputeNodeResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FileGetFromComputeNodeResponse.prototype, "statusCode", void 0);
    return FileGetFromComputeNodeResponse;
}(utils_1.SpeakeasyBase));
exports.FileGetFromComputeNodeResponse = FileGetFromComputeNodeResponse;
