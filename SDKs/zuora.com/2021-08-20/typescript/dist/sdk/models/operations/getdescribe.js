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
exports.GetDescribeResponse = exports.GetDescribeRequest = exports.GetDescribeHeaders = exports.GetDescribePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetDescribePathParams = /** @class */ (function (_super) {
    __extends(GetDescribePathParams, _super);
    function GetDescribePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=object" }),
        __metadata("design:type", String)
    ], GetDescribePathParams.prototype, "object", void 0);
    return GetDescribePathParams;
}(utils_1.SpeakeasyBase));
exports.GetDescribePathParams = GetDescribePathParams;
var GetDescribeHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeHeaders, _super);
    function GetDescribeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetDescribeHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetDescribeHeaders.prototype, "zuoraTrackId", void 0);
    return GetDescribeHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDescribeHeaders = GetDescribeHeaders;
var GetDescribeRequest = /** @class */ (function (_super) {
    __extends(GetDescribeRequest, _super);
    function GetDescribeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribePathParams)
    ], GetDescribeRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeHeaders)
    ], GetDescribeRequest.prototype, "headers", void 0);
    return GetDescribeRequest;
}(utils_1.SpeakeasyBase));
exports.GetDescribeRequest = GetDescribeRequest;
var GetDescribeResponse = /** @class */ (function (_super) {
    __extends(GetDescribeResponse, _super);
    function GetDescribeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDescribeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDescribeResponse.prototype, "getDescribe200TextXMLString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDescribeResponse.prototype, "getDescribe404TextXMLString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDescribeResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDescribeResponse.prototype, "statusCode", void 0);
    return GetDescribeResponse;
}(utils_1.SpeakeasyBase));
exports.GetDescribeResponse = GetDescribeResponse;
