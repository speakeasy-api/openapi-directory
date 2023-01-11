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
exports.FileListFromTaskResponse = exports.FileListFromTaskRequest = exports.FileListFromTaskHeaders = exports.FileListFromTaskQueryParams = exports.FileListFromTaskPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var FileListFromTaskPathParams = /** @class */ (function (_super) {
    __extends(FileListFromTaskPathParams, _super);
    function FileListFromTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], FileListFromTaskPathParams.prototype, "jobId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=taskId" }),
        __metadata("design:type", String)
    ], FileListFromTaskPathParams.prototype, "taskId", void 0);
    return FileListFromTaskPathParams;
}(utils_1.SpeakeasyBase));
exports.FileListFromTaskPathParams = FileListFromTaskPathParams;
var FileListFromTaskQueryParams = /** @class */ (function (_super) {
    __extends(FileListFromTaskQueryParams, _super);
    function FileListFromTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$filter" }),
        __metadata("design:type", String)
    ], FileListFromTaskQueryParams.prototype, "dollarFilter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], FileListFromTaskQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxresults" }),
        __metadata("design:type", Number)
    ], FileListFromTaskQueryParams.prototype, "maxresults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=recursive" }),
        __metadata("design:type", Boolean)
    ], FileListFromTaskQueryParams.prototype, "recursive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], FileListFromTaskQueryParams.prototype, "timeout", void 0);
    return FileListFromTaskQueryParams;
}(utils_1.SpeakeasyBase));
exports.FileListFromTaskQueryParams = FileListFromTaskQueryParams;
var FileListFromTaskHeaders = /** @class */ (function (_super) {
    __extends(FileListFromTaskHeaders, _super);
    function FileListFromTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], FileListFromTaskHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], FileListFromTaskHeaders.prototype, "ocpDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], FileListFromTaskHeaders.prototype, "returnClientRequestId", void 0);
    return FileListFromTaskHeaders;
}(utils_1.SpeakeasyBase));
exports.FileListFromTaskHeaders = FileListFromTaskHeaders;
var FileListFromTaskRequest = /** @class */ (function (_super) {
    __extends(FileListFromTaskRequest, _super);
    function FileListFromTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FileListFromTaskPathParams)
    ], FileListFromTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FileListFromTaskQueryParams)
    ], FileListFromTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FileListFromTaskHeaders)
    ], FileListFromTaskRequest.prototype, "headers", void 0);
    return FileListFromTaskRequest;
}(utils_1.SpeakeasyBase));
exports.FileListFromTaskRequest = FileListFromTaskRequest;
var FileListFromTaskResponse = /** @class */ (function (_super) {
    __extends(FileListFromTaskResponse, _super);
    function FileListFromTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], FileListFromTaskResponse.prototype, "batchError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FileListFromTaskResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], FileListFromTaskResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], FileListFromTaskResponse.prototype, "nodeFileListResult", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FileListFromTaskResponse.prototype, "statusCode", void 0);
    return FileListFromTaskResponse;
}(utils_1.SpeakeasyBase));
exports.FileListFromTaskResponse = FileListFromTaskResponse;
