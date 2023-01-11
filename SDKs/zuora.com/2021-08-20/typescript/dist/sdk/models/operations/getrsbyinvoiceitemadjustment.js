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
exports.GetRSbyInvoiceItemAdjustmentResponse = exports.GetRSbyInvoiceItemAdjustmentRequest = exports.GetRSbyInvoiceItemAdjustmentHeaders = exports.GetRSbyInvoiceItemAdjustmentPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetRSbyInvoiceItemAdjustmentPathParams = /** @class */ (function (_super) {
    __extends(GetRSbyInvoiceItemAdjustmentPathParams, _super);
    function GetRSbyInvoiceItemAdjustmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=invoice-item-adj-key" }),
        __metadata("design:type", String)
    ], GetRSbyInvoiceItemAdjustmentPathParams.prototype, "invoiceItemAdjKey", void 0);
    return GetRSbyInvoiceItemAdjustmentPathParams;
}(utils_1.SpeakeasyBase));
exports.GetRSbyInvoiceItemAdjustmentPathParams = GetRSbyInvoiceItemAdjustmentPathParams;
var GetRSbyInvoiceItemAdjustmentHeaders = /** @class */ (function (_super) {
    __extends(GetRSbyInvoiceItemAdjustmentHeaders, _super);
    function GetRSbyInvoiceItemAdjustmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetRSbyInvoiceItemAdjustmentHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetRSbyInvoiceItemAdjustmentHeaders.prototype, "zuoraTrackId", void 0);
    return GetRSbyInvoiceItemAdjustmentHeaders;
}(utils_1.SpeakeasyBase));
exports.GetRSbyInvoiceItemAdjustmentHeaders = GetRSbyInvoiceItemAdjustmentHeaders;
var GetRSbyInvoiceItemAdjustmentRequest = /** @class */ (function (_super) {
    __extends(GetRSbyInvoiceItemAdjustmentRequest, _super);
    function GetRSbyInvoiceItemAdjustmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRSbyInvoiceItemAdjustmentPathParams)
    ], GetRSbyInvoiceItemAdjustmentRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRSbyInvoiceItemAdjustmentHeaders)
    ], GetRSbyInvoiceItemAdjustmentRequest.prototype, "headers", void 0);
    return GetRSbyInvoiceItemAdjustmentRequest;
}(utils_1.SpeakeasyBase));
exports.GetRSbyInvoiceItemAdjustmentRequest = GetRSbyInvoiceItemAdjustmentRequest;
var GetRSbyInvoiceItemAdjustmentResponse = /** @class */ (function (_super) {
    __extends(GetRSbyInvoiceItemAdjustmentResponse, _super);
    function GetRSbyInvoiceItemAdjustmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetRSbyInvoiceItemAdjustmentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetRSbyInvoiceItemAdjustmentResponse.prototype, "getrsDetailType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetRSbyInvoiceItemAdjustmentResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetRSbyInvoiceItemAdjustmentResponse.prototype, "statusCode", void 0);
    return GetRSbyInvoiceItemAdjustmentResponse;
}(utils_1.SpeakeasyBase));
exports.GetRSbyInvoiceItemAdjustmentResponse = GetRSbyInvoiceItemAdjustmentResponse;
