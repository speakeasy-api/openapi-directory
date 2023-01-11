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
exports.DownloadInvoicePdfResponse = exports.DownloadInvoicePdfRequest = exports.DownloadInvoicePdfPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var DownloadInvoicePdfPathParams = /** @class */ (function (_super) {
    __extends(DownloadInvoicePdfPathParams, _super);
    function DownloadInvoicePdfPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=invoiceId" }),
        __metadata("design:type", String)
    ], DownloadInvoicePdfPathParams.prototype, "invoiceId", void 0);
    return DownloadInvoicePdfPathParams;
}(utils_1.SpeakeasyBase));
exports.DownloadInvoicePdfPathParams = DownloadInvoicePdfPathParams;
var DownloadInvoicePdfRequest = /** @class */ (function (_super) {
    __extends(DownloadInvoicePdfRequest, _super);
    function DownloadInvoicePdfRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DownloadInvoicePdfPathParams)
    ], DownloadInvoicePdfRequest.prototype, "pathParams", void 0);
    return DownloadInvoicePdfRequest;
}(utils_1.SpeakeasyBase));
exports.DownloadInvoicePdfRequest = DownloadInvoicePdfRequest;
var DownloadInvoicePdfResponse = /** @class */ (function (_super) {
    __extends(DownloadInvoicePdfResponse, _super);
    function DownloadInvoicePdfResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DownloadInvoicePdfResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DownloadInvoicePdfResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DownloadInvoicePdfResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DownloadInvoicePdfResponse.prototype, "downloadInvoicePDF200ApplicationJSONAny", void 0);
    return DownloadInvoicePdfResponse;
}(utils_1.SpeakeasyBase));
exports.DownloadInvoicePdfResponse = DownloadInvoicePdfResponse;
