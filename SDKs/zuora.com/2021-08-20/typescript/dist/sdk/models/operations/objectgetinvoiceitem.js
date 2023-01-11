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
exports.ObjectGetInvoiceItemResponse = exports.ObjectGetInvoiceItemRequest = exports.ObjectGetInvoiceItemHeaders = exports.ObjectGetInvoiceItemQueryParams = exports.ObjectGetInvoiceItemPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ObjectGetInvoiceItemPathParams = /** @class */ (function (_super) {
    __extends(ObjectGetInvoiceItemPathParams, _super);
    function ObjectGetInvoiceItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ObjectGetInvoiceItemPathParams.prototype, "id", void 0);
    return ObjectGetInvoiceItemPathParams;
}(utils_1.SpeakeasyBase));
exports.ObjectGetInvoiceItemPathParams = ObjectGetInvoiceItemPathParams;
var ObjectGetInvoiceItemQueryParams = /** @class */ (function (_super) {
    __extends(ObjectGetInvoiceItemQueryParams, _super);
    function ObjectGetInvoiceItemQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ObjectGetInvoiceItemQueryParams.prototype, "fields", void 0);
    return ObjectGetInvoiceItemQueryParams;
}(utils_1.SpeakeasyBase));
exports.ObjectGetInvoiceItemQueryParams = ObjectGetInvoiceItemQueryParams;
var ObjectGetInvoiceItemHeaders = /** @class */ (function (_super) {
    __extends(ObjectGetInvoiceItemHeaders, _super);
    function ObjectGetInvoiceItemHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], ObjectGetInvoiceItemHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], ObjectGetInvoiceItemHeaders.prototype, "zuoraTrackId", void 0);
    return ObjectGetInvoiceItemHeaders;
}(utils_1.SpeakeasyBase));
exports.ObjectGetInvoiceItemHeaders = ObjectGetInvoiceItemHeaders;
var ObjectGetInvoiceItemRequest = /** @class */ (function (_super) {
    __extends(ObjectGetInvoiceItemRequest, _super);
    function ObjectGetInvoiceItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ObjectGetInvoiceItemPathParams)
    ], ObjectGetInvoiceItemRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ObjectGetInvoiceItemQueryParams)
    ], ObjectGetInvoiceItemRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ObjectGetInvoiceItemHeaders)
    ], ObjectGetInvoiceItemRequest.prototype, "headers", void 0);
    return ObjectGetInvoiceItemRequest;
}(utils_1.SpeakeasyBase));
exports.ObjectGetInvoiceItemRequest = ObjectGetInvoiceItemRequest;
var ObjectGetInvoiceItemResponse = /** @class */ (function (_super) {
    __extends(ObjectGetInvoiceItemResponse, _super);
    function ObjectGetInvoiceItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ObjectGetInvoiceItemResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ObjectGetInvoiceItemResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ObjectGetInvoiceItemResponse.prototype, "proxyGetInvoiceItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ProxyNoDataResponse)
    ], ObjectGetInvoiceItemResponse.prototype, "proxyNoDataResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ProxyUnauthorizedResponse)
    ], ObjectGetInvoiceItemResponse.prototype, "proxyUnauthorizedResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ObjectGetInvoiceItemResponse.prototype, "statusCode", void 0);
    return ObjectGetInvoiceItemResponse;
}(utils_1.SpeakeasyBase));
exports.ObjectGetInvoiceItemResponse = ObjectGetInvoiceItemResponse;
