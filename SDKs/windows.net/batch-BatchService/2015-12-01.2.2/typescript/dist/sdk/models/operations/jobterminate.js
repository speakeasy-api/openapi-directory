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
exports.JobTerminateResponse = exports.JobTerminateRequest = exports.JobTerminateHeaders = exports.JobTerminateQueryParams = exports.JobTerminatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var JobTerminatePathParams = /** @class */ (function (_super) {
    __extends(JobTerminatePathParams, _super);
    function JobTerminatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], JobTerminatePathParams.prototype, "jobId", void 0);
    return JobTerminatePathParams;
}(utils_1.SpeakeasyBase));
exports.JobTerminatePathParams = JobTerminatePathParams;
var JobTerminateQueryParams = /** @class */ (function (_super) {
    __extends(JobTerminateQueryParams, _super);
    function JobTerminateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], JobTerminateQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], JobTerminateQueryParams.prototype, "timeout", void 0);
    return JobTerminateQueryParams;
}(utils_1.SpeakeasyBase));
exports.JobTerminateQueryParams = JobTerminateQueryParams;
var JobTerminateHeaders = /** @class */ (function (_super) {
    __extends(JobTerminateHeaders, _super);
    function JobTerminateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], JobTerminateHeaders.prototype, "ifMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], JobTerminateHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], JobTerminateHeaders.prototype, "ifNoneMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Unmodified-Since" }),
        __metadata("design:type", String)
    ], JobTerminateHeaders.prototype, "ifUnmodifiedSince", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], JobTerminateHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], JobTerminateHeaders.prototype, "ocpDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], JobTerminateHeaders.prototype, "returnClientRequestId", void 0);
    return JobTerminateHeaders;
}(utils_1.SpeakeasyBase));
exports.JobTerminateHeaders = JobTerminateHeaders;
var JobTerminateRequest = /** @class */ (function (_super) {
    __extends(JobTerminateRequest, _super);
    function JobTerminateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", JobTerminatePathParams)
    ], JobTerminateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", JobTerminateQueryParams)
    ], JobTerminateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", JobTerminateHeaders)
    ], JobTerminateRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], JobTerminateRequest.prototype, "request", void 0);
    return JobTerminateRequest;
}(utils_1.SpeakeasyBase));
exports.JobTerminateRequest = JobTerminateRequest;
var JobTerminateResponse = /** @class */ (function (_super) {
    __extends(JobTerminateResponse, _super);
    function JobTerminateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], JobTerminateResponse.prototype, "batchError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], JobTerminateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], JobTerminateResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], JobTerminateResponse.prototype, "statusCode", void 0);
    return JobTerminateResponse;
}(utils_1.SpeakeasyBase));
exports.JobTerminateResponse = JobTerminateResponse;
