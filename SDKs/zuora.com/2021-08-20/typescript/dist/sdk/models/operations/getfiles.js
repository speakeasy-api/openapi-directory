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
exports.GetFilesResponse = exports.GetFilesRequest = exports.GetFilesHeaders = exports.GetFilesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetFilesPathParams = /** @class */ (function (_super) {
    __extends(GetFilesPathParams, _super);
    function GetFilesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=file-id" }),
        __metadata("design:type", String)
    ], GetFilesPathParams.prototype, "fileId", void 0);
    return GetFilesPathParams;
}(utils_1.SpeakeasyBase));
exports.GetFilesPathParams = GetFilesPathParams;
var GetFilesHeaders = /** @class */ (function (_super) {
    __extends(GetFilesHeaders, _super);
    function GetFilesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetFilesHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetFilesHeaders.prototype, "zuoraTrackId", void 0);
    return GetFilesHeaders;
}(utils_1.SpeakeasyBase));
exports.GetFilesHeaders = GetFilesHeaders;
var GetFilesRequest = /** @class */ (function (_super) {
    __extends(GetFilesRequest, _super);
    function GetFilesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFilesPathParams)
    ], GetFilesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFilesHeaders)
    ], GetFilesRequest.prototype, "headers", void 0);
    return GetFilesRequest;
}(utils_1.SpeakeasyBase));
exports.GetFilesRequest = GetFilesRequest;
var GetFilesResponse = /** @class */ (function (_super) {
    __extends(GetFilesResponse, _super);
    function GetFilesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetFilesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetFilesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetFilesResponse.prototype, "statusCode", void 0);
    return GetFilesResponse;
}(utils_1.SpeakeasyBase));
exports.GetFilesResponse = GetFilesResponse;
