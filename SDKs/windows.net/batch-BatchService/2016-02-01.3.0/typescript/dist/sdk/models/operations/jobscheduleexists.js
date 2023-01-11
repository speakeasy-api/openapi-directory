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
exports.JobScheduleExistsResponse = exports.JobScheduleExistsRequest = exports.JobScheduleExistsHeaders = exports.JobScheduleExistsQueryParams = exports.JobScheduleExistsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var JobScheduleExistsPathParams = /** @class */ (function (_super) {
    __extends(JobScheduleExistsPathParams, _super);
    function JobScheduleExistsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=jobScheduleId" }),
        __metadata("design:type", String)
    ], JobScheduleExistsPathParams.prototype, "jobScheduleId", void 0);
    return JobScheduleExistsPathParams;
}(utils_1.SpeakeasyBase));
exports.JobScheduleExistsPathParams = JobScheduleExistsPathParams;
var JobScheduleExistsQueryParams = /** @class */ (function (_super) {
    __extends(JobScheduleExistsQueryParams, _super);
    function JobScheduleExistsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], JobScheduleExistsQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], JobScheduleExistsQueryParams.prototype, "timeout", void 0);
    return JobScheduleExistsQueryParams;
}(utils_1.SpeakeasyBase));
exports.JobScheduleExistsQueryParams = JobScheduleExistsQueryParams;
var JobScheduleExistsHeaders = /** @class */ (function (_super) {
    __extends(JobScheduleExistsHeaders, _super);
    function JobScheduleExistsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], JobScheduleExistsHeaders.prototype, "ifMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], JobScheduleExistsHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], JobScheduleExistsHeaders.prototype, "ifNoneMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Unmodified-Since" }),
        __metadata("design:type", String)
    ], JobScheduleExistsHeaders.prototype, "ifUnmodifiedSince", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], JobScheduleExistsHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], JobScheduleExistsHeaders.prototype, "ocpDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], JobScheduleExistsHeaders.prototype, "returnClientRequestId", void 0);
    return JobScheduleExistsHeaders;
}(utils_1.SpeakeasyBase));
exports.JobScheduleExistsHeaders = JobScheduleExistsHeaders;
var JobScheduleExistsRequest = /** @class */ (function (_super) {
    __extends(JobScheduleExistsRequest, _super);
    function JobScheduleExistsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", JobScheduleExistsPathParams)
    ], JobScheduleExistsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", JobScheduleExistsQueryParams)
    ], JobScheduleExistsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", JobScheduleExistsHeaders)
    ], JobScheduleExistsRequest.prototype, "headers", void 0);
    return JobScheduleExistsRequest;
}(utils_1.SpeakeasyBase));
exports.JobScheduleExistsRequest = JobScheduleExistsRequest;
var JobScheduleExistsResponse = /** @class */ (function (_super) {
    __extends(JobScheduleExistsResponse, _super);
    function JobScheduleExistsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], JobScheduleExistsResponse.prototype, "batchError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], JobScheduleExistsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], JobScheduleExistsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], JobScheduleExistsResponse.prototype, "statusCode", void 0);
    return JobScheduleExistsResponse;
}(utils_1.SpeakeasyBase));
exports.JobScheduleExistsResponse = JobScheduleExistsResponse;
