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
exports.PutUpdateInvoiceResponse = exports.PutUpdateInvoiceRequest = exports.PutUpdateInvoiceHeaders = exports.PutUpdateInvoicePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PutUpdateInvoicePathParams = /** @class */ (function (_super) {
    __extends(PutUpdateInvoicePathParams, _super);
    function PutUpdateInvoicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=invoiceId" }),
        __metadata("design:type", String)
    ], PutUpdateInvoicePathParams.prototype, "invoiceId", void 0);
    return PutUpdateInvoicePathParams;
}(utils_1.SpeakeasyBase));
exports.PutUpdateInvoicePathParams = PutUpdateInvoicePathParams;
var PutUpdateInvoiceHeaders = /** @class */ (function (_super) {
    __extends(PutUpdateInvoiceHeaders, _super);
    function PutUpdateInvoiceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], PutUpdateInvoiceHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], PutUpdateInvoiceHeaders.prototype, "zuoraTrackId", void 0);
    return PutUpdateInvoiceHeaders;
}(utils_1.SpeakeasyBase));
exports.PutUpdateInvoiceHeaders = PutUpdateInvoiceHeaders;
var PutUpdateInvoiceRequest = /** @class */ (function (_super) {
    __extends(PutUpdateInvoiceRequest, _super);
    function PutUpdateInvoiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutUpdateInvoicePathParams)
    ], PutUpdateInvoiceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutUpdateInvoiceHeaders)
    ], PutUpdateInvoiceRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PutUpdateInvoiceRequest.prototype, "request", void 0);
    return PutUpdateInvoiceRequest;
}(utils_1.SpeakeasyBase));
exports.PutUpdateInvoiceRequest = PutUpdateInvoiceRequest;
var PutUpdateInvoiceResponse = /** @class */ (function (_super) {
    __extends(PutUpdateInvoiceResponse, _super);
    function PutUpdateInvoiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutUpdateInvoiceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutUpdateInvoiceResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutUpdateInvoiceResponse.prototype, "putInvoiceResponseType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutUpdateInvoiceResponse.prototype, "statusCode", void 0);
    return PutUpdateInvoiceResponse;
}(utils_1.SpeakeasyBase));
exports.PutUpdateInvoiceResponse = PutUpdateInvoiceResponse;
