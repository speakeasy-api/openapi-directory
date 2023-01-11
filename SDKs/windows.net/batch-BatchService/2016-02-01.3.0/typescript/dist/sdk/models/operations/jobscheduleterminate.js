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
exports.JobScheduleTerminateResponse = exports.JobScheduleTerminateRequest = exports.JobScheduleTerminateHeaders = exports.JobScheduleTerminateQueryParams = exports.JobScheduleTerminatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var JobScheduleTerminatePathParams = /** @class */ (function (_super) {
    __extends(JobScheduleTerminatePathParams, _super);
    function JobScheduleTerminatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=jobScheduleId" }),
        __metadata("design:type", String)
    ], JobScheduleTerminatePathParams.prototype, "jobScheduleId", void 0);
    return JobScheduleTerminatePathParams;
}(utils_1.SpeakeasyBase));
exports.JobScheduleTerminatePathParams = JobScheduleTerminatePathParams;
var JobScheduleTerminateQueryParams = /** @class */ (function (_super) {
    __extends(JobScheduleTerminateQueryParams, _super);
    function JobScheduleTerminateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], JobScheduleTerminateQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], JobScheduleTerminateQueryParams.prototype, "timeout", void 0);
    return JobScheduleTerminateQueryParams;
}(utils_1.SpeakeasyBase));
exports.JobScheduleTerminateQueryParams = JobScheduleTerminateQueryParams;
var JobScheduleTerminateHeaders = /** @class */ (function (_super) {
    __extends(JobScheduleTerminateHeaders, _super);
    function JobScheduleTerminateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], JobScheduleTerminateHeaders.prototype, "ifMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], JobScheduleTerminateHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], JobScheduleTerminateHeaders.prototype, "ifNoneMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Unmodified-Since" }),
        __metadata("design:type", String)
    ], JobScheduleTerminateHeaders.prototype, "ifUnmodifiedSince", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], JobScheduleTerminateHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], JobScheduleTerminateHeaders.prototype, "ocpDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], JobScheduleTerminateHeaders.prototype, "returnClientRequestId", void 0);
    return JobScheduleTerminateHeaders;
}(utils_1.SpeakeasyBase));
exports.JobScheduleTerminateHeaders = JobScheduleTerminateHeaders;
var JobScheduleTerminateRequest = /** @class */ (function (_super) {
    __extends(JobScheduleTerminateRequest, _super);
    function JobScheduleTerminateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", JobScheduleTerminatePathParams)
    ], JobScheduleTerminateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", JobScheduleTerminateQueryParams)
    ], JobScheduleTerminateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", JobScheduleTerminateHeaders)
    ], JobScheduleTerminateRequest.prototype, "headers", void 0);
    return JobScheduleTerminateRequest;
}(utils_1.SpeakeasyBase));
exports.JobScheduleTerminateRequest = JobScheduleTerminateRequest;
var JobScheduleTerminateResponse = /** @class */ (function (_super) {
    __extends(JobScheduleTerminateResponse, _super);
    function JobScheduleTerminateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], JobScheduleTerminateResponse.prototype, "batchError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], JobScheduleTerminateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], JobScheduleTerminateResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], JobScheduleTerminateResponse.prototype, "statusCode", void 0);
    return JobScheduleTerminateResponse;
}(utils_1.SpeakeasyBase));
exports.JobScheduleTerminateResponse = JobScheduleTerminateResponse;
