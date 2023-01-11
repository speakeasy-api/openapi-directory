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
exports.GetRSbyInvoiceItemResponse = exports.GetRSbyInvoiceItemRequest = exports.GetRSbyInvoiceItemHeaders = exports.GetRSbyInvoiceItemPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetRSbyInvoiceItemPathParams = /** @class */ (function (_super) {
    __extends(GetRSbyInvoiceItemPathParams, _super);
    function GetRSbyInvoiceItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=invoice-item-id" }),
        __metadata("design:type", String)
    ], GetRSbyInvoiceItemPathParams.prototype, "invoiceItemId", void 0);
    return GetRSbyInvoiceItemPathParams;
}(utils_1.SpeakeasyBase));
exports.GetRSbyInvoiceItemPathParams = GetRSbyInvoiceItemPathParams;
var GetRSbyInvoiceItemHeaders = /** @class */ (function (_super) {
    __extends(GetRSbyInvoiceItemHeaders, _super);
    function GetRSbyInvoiceItemHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetRSbyInvoiceItemHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetRSbyInvoiceItemHeaders.prototype, "zuoraTrackId", void 0);
    return GetRSbyInvoiceItemHeaders;
}(utils_1.SpeakeasyBase));
exports.GetRSbyInvoiceItemHeaders = GetRSbyInvoiceItemHeaders;
var GetRSbyInvoiceItemRequest = /** @class */ (function (_super) {
    __extends(GetRSbyInvoiceItemRequest, _super);
    function GetRSbyInvoiceItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRSbyInvoiceItemPathParams)
    ], GetRSbyInvoiceItemRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRSbyInvoiceItemHeaders)
    ], GetRSbyInvoiceItemRequest.prototype, "headers", void 0);
    return GetRSbyInvoiceItemRequest;
}(utils_1.SpeakeasyBase));
exports.GetRSbyInvoiceItemRequest = GetRSbyInvoiceItemRequest;
var GetRSbyInvoiceItemResponse = /** @class */ (function (_super) {
    __extends(GetRSbyInvoiceItemResponse, _super);
    function GetRSbyInvoiceItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetRSbyInvoiceItemResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetRSbyInvoiceItemResponse.prototype, "getrsDetailType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetRSbyInvoiceItemResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetRSbyInvoiceItemResponse.prototype, "statusCode", void 0);
    return GetRSbyInvoiceItemResponse;
}(utils_1.SpeakeasyBase));
exports.GetRSbyInvoiceItemResponse = GetRSbyInvoiceItemResponse;
