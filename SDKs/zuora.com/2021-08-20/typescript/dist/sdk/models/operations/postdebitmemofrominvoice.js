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
exports.PostDebitMemoFromInvoiceResponse = exports.PostDebitMemoFromInvoiceRequest = exports.PostDebitMemoFromInvoiceHeaders = exports.PostDebitMemoFromInvoicePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PostDebitMemoFromInvoicePathParams = /** @class */ (function (_super) {
    __extends(PostDebitMemoFromInvoicePathParams, _super);
    function PostDebitMemoFromInvoicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=invoiceId" }),
        __metadata("design:type", String)
    ], PostDebitMemoFromInvoicePathParams.prototype, "invoiceId", void 0);
    return PostDebitMemoFromInvoicePathParams;
}(utils_1.SpeakeasyBase));
exports.PostDebitMemoFromInvoicePathParams = PostDebitMemoFromInvoicePathParams;
var PostDebitMemoFromInvoiceHeaders = /** @class */ (function (_super) {
    __extends(PostDebitMemoFromInvoiceHeaders, _super);
    function PostDebitMemoFromInvoiceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], PostDebitMemoFromInvoiceHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], PostDebitMemoFromInvoiceHeaders.prototype, "zuoraTrackId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=zuora-version" }),
        __metadata("design:type", String)
    ], PostDebitMemoFromInvoiceHeaders.prototype, "zuoraVersion", void 0);
    return PostDebitMemoFromInvoiceHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDebitMemoFromInvoiceHeaders = PostDebitMemoFromInvoiceHeaders;
var PostDebitMemoFromInvoiceRequest = /** @class */ (function (_super) {
    __extends(PostDebitMemoFromInvoiceRequest, _super);
    function PostDebitMemoFromInvoiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDebitMemoFromInvoicePathParams)
    ], PostDebitMemoFromInvoiceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDebitMemoFromInvoiceHeaders)
    ], PostDebitMemoFromInvoiceRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostDebitMemoFromInvoiceRequest.prototype, "request", void 0);
    return PostDebitMemoFromInvoiceRequest;
}(utils_1.SpeakeasyBase));
exports.PostDebitMemoFromInvoiceRequest = PostDebitMemoFromInvoiceRequest;
var PostDebitMemoFromInvoiceResponse = /** @class */ (function (_super) {
    __extends(PostDebitMemoFromInvoiceResponse, _super);
    function PostDebitMemoFromInvoiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDebitMemoFromInvoiceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostDebitMemoFromInvoiceResponse.prototype, "getDebitMemoType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostDebitMemoFromInvoiceResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDebitMemoFromInvoiceResponse.prototype, "statusCode", void 0);
    return PostDebitMemoFromInvoiceResponse;
}(utils_1.SpeakeasyBase));
exports.PostDebitMemoFromInvoiceResponse = PostDebitMemoFromInvoiceResponse;
