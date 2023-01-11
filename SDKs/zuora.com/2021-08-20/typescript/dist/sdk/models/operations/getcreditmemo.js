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
exports.GetCreditMemoResponse = exports.GetCreditMemoRequest = exports.GetCreditMemoHeaders = exports.GetCreditMemoPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetCreditMemoPathParams = /** @class */ (function (_super) {
    __extends(GetCreditMemoPathParams, _super);
    function GetCreditMemoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=creditMemoId" }),
        __metadata("design:type", String)
    ], GetCreditMemoPathParams.prototype, "creditMemoId", void 0);
    return GetCreditMemoPathParams;
}(utils_1.SpeakeasyBase));
exports.GetCreditMemoPathParams = GetCreditMemoPathParams;
var GetCreditMemoHeaders = /** @class */ (function (_super) {
    __extends(GetCreditMemoHeaders, _super);
    function GetCreditMemoHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetCreditMemoHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetCreditMemoHeaders.prototype, "zuoraTrackId", void 0);
    return GetCreditMemoHeaders;
}(utils_1.SpeakeasyBase));
exports.GetCreditMemoHeaders = GetCreditMemoHeaders;
var GetCreditMemoRequest = /** @class */ (function (_super) {
    __extends(GetCreditMemoRequest, _super);
    function GetCreditMemoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCreditMemoPathParams)
    ], GetCreditMemoRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCreditMemoHeaders)
    ], GetCreditMemoRequest.prototype, "headers", void 0);
    return GetCreditMemoRequest;
}(utils_1.SpeakeasyBase));
exports.GetCreditMemoRequest = GetCreditMemoRequest;
var GetCreditMemoResponse = /** @class */ (function (_super) {
    __extends(GetCreditMemoResponse, _super);
    function GetCreditMemoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCreditMemoResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetCreditMemoResponse.prototype, "getCreditMemoType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetCreditMemoResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCreditMemoResponse.prototype, "statusCode", void 0);
    return GetCreditMemoResponse;
}(utils_1.SpeakeasyBase));
exports.GetCreditMemoResponse = GetCreditMemoResponse;
