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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectGetRefundInvoicePaymentResponse = exports.ObjectGetRefundInvoicePaymentRequest = exports.ObjectGetRefundInvoicePaymentHeaders = exports.ObjectGetRefundInvoicePaymentQueryParams = exports.ObjectGetRefundInvoicePaymentPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ObjectGetRefundInvoicePaymentPathParams = /** @class */ (function (_super) {
    __extends(ObjectGetRefundInvoicePaymentPathParams, _super);
    function ObjectGetRefundInvoicePaymentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ObjectGetRefundInvoicePaymentPathParams.prototype, "id", void 0);
    return ObjectGetRefundInvoicePaymentPathParams;
}(utils_1.SpeakeasyBase));
exports.ObjectGetRefundInvoicePaymentPathParams = ObjectGetRefundInvoicePaymentPathParams;
var ObjectGetRefundInvoicePaymentQueryParams = /** @class */ (function (_super) {
    __extends(ObjectGetRefundInvoicePaymentQueryParams, _super);
    function ObjectGetRefundInvoicePaymentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ObjectGetRefundInvoicePaymentQueryParams.prototype, "fields", void 0);
    return ObjectGetRefundInvoicePaymentQueryParams;
}(utils_1.SpeakeasyBase));
exports.ObjectGetRefundInvoicePaymentQueryParams = ObjectGetRefundInvoicePaymentQueryParams;
var ObjectGetRefundInvoicePaymentHeaders = /** @class */ (function (_super) {
    __extends(ObjectGetRefundInvoicePaymentHeaders, _super);
    function ObjectGetRefundInvoicePaymentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], ObjectGetRefundInvoicePaymentHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], ObjectGetRefundInvoicePaymentHeaders.prototype, "zuoraTrackId", void 0);
    return ObjectGetRefundInvoicePaymentHeaders;
}(utils_1.SpeakeasyBase));
exports.ObjectGetRefundInvoicePaymentHeaders = ObjectGetRefundInvoicePaymentHeaders;
var ObjectGetRefundInvoicePaymentRequest = /** @class */ (function (_super) {
    __extends(ObjectGetRefundInvoicePaymentRequest, _super);
    function ObjectGetRefundInvoicePaymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ObjectGetRefundInvoicePaymentPathParams)
    ], ObjectGetRefundInvoicePaymentRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ObjectGetRefundInvoicePaymentQueryParams)
    ], ObjectGetRefundInvoicePaymentRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ObjectGetRefundInvoicePaymentHeaders)
    ], ObjectGetRefundInvoicePaymentRequest.prototype, "headers", void 0);
    return ObjectGetRefundInvoicePaymentRequest;
}(utils_1.SpeakeasyBase));
exports.ObjectGetRefundInvoicePaymentRequest = ObjectGetRefundInvoicePaymentRequest;
var ObjectGetRefundInvoicePaymentResponse = /** @class */ (function (_super) {
    __extends(ObjectGetRefundInvoicePaymentResponse, _super);
    function ObjectGetRefundInvoicePaymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ObjectGetRefundInvoicePaymentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ObjectGetRefundInvoicePaymentResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ProxyGetRefundInvoicePayment)
    ], ObjectGetRefundInvoicePaymentResponse.prototype, "proxyGetRefundInvoicePayment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ProxyNoDataResponse)
    ], ObjectGetRefundInvoicePaymentResponse.prototype, "proxyNoDataResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ProxyUnauthorizedResponse)
    ], ObjectGetRefundInvoicePaymentResponse.prototype, "proxyUnauthorizedResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ObjectGetRefundInvoicePaymentResponse.prototype, "statusCode", void 0);
    return ObjectGetRefundInvoicePaymentResponse;
}(utils_1.SpeakeasyBase));
exports.ObjectGetRefundInvoicePaymentResponse = ObjectGetRefundInvoicePaymentResponse;
