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
exports.TagApiPostReportResponse = exports.TagApiPostReportRequest = exports.TagApiPostReportQueryParams = exports.TagApiPostReportReportTypeEnum = exports.TagApiPostReportPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var TagApiPostReportPathParams = /** @class */ (function (_super) {
    __extends(TagApiPostReportPathParams, _super);
    function TagApiPostReportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=tagId" }),
        __metadata("design:type", Number)
    ], TagApiPostReportPathParams.prototype, "tagId", void 0);
    return TagApiPostReportPathParams;
}(utils_1.SpeakeasyBase));
exports.TagApiPostReportPathParams = TagApiPostReportPathParams;
var TagApiPostReportReportTypeEnum;
(function (TagApiPostReportReportTypeEnum) {
    TagApiPostReportReportTypeEnum["InvalidInfo"] = "InvalidInfo";
    TagApiPostReportReportTypeEnum["Duplicate"] = "Duplicate";
    TagApiPostReportReportTypeEnum["Inappropriate"] = "Inappropriate";
    TagApiPostReportReportTypeEnum["Other"] = "Other";
})(TagApiPostReportReportTypeEnum = exports.TagApiPostReportReportTypeEnum || (exports.TagApiPostReportReportTypeEnum = {}));
var TagApiPostReportQueryParams = /** @class */ (function (_super) {
    __extends(TagApiPostReportQueryParams, _super);
    function TagApiPostReportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=notes" }),
        __metadata("design:type", String)
    ], TagApiPostReportQueryParams.prototype, "notes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=reportType" }),
        __metadata("design:type", String)
    ], TagApiPostReportQueryParams.prototype, "reportType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=versionNumber" }),
        __metadata("design:type", Number)
    ], TagApiPostReportQueryParams.prototype, "versionNumber", void 0);
    return TagApiPostReportQueryParams;
}(utils_1.SpeakeasyBase));
exports.TagApiPostReportQueryParams = TagApiPostReportQueryParams;
var TagApiPostReportRequest = /** @class */ (function (_super) {
    __extends(TagApiPostReportRequest, _super);
    function TagApiPostReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TagApiPostReportPathParams)
    ], TagApiPostReportRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TagApiPostReportQueryParams)
    ], TagApiPostReportRequest.prototype, "queryParams", void 0);
    return TagApiPostReportRequest;
}(utils_1.SpeakeasyBase));
exports.TagApiPostReportRequest = TagApiPostReportRequest;
var TagApiPostReportResponse = /** @class */ (function (_super) {
    __extends(TagApiPostReportResponse, _super);
    function TagApiPostReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TagApiPostReportResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TagApiPostReportResponse.prototype, "statusCode", void 0);
    return TagApiPostReportResponse;
}(utils_1.SpeakeasyBase));
exports.TagApiPostReportResponse = TagApiPostReportResponse;
