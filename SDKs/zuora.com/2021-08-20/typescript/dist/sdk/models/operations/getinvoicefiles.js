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
exports.GetInvoiceFilesResponse = exports.GetInvoiceFilesRequest = exports.GetInvoiceFilesHeaders = exports.GetInvoiceFilesQueryParams = exports.GetInvoiceFilesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetInvoiceFilesPathParams = /** @class */ (function (_super) {
    __extends(GetInvoiceFilesPathParams, _super);
    function GetInvoiceFilesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=invoiceId" }),
        __metadata("design:type", String)
    ], GetInvoiceFilesPathParams.prototype, "invoiceId", void 0);
    return GetInvoiceFilesPathParams;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceFilesPathParams = GetInvoiceFilesPathParams;
var GetInvoiceFilesQueryParams = /** @class */ (function (_super) {
    __extends(GetInvoiceFilesQueryParams, _super);
    function GetInvoiceFilesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetInvoiceFilesQueryParams.prototype, "pageSize", void 0);
    return GetInvoiceFilesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceFilesQueryParams = GetInvoiceFilesQueryParams;
var GetInvoiceFilesHeaders = /** @class */ (function (_super) {
    __extends(GetInvoiceFilesHeaders, _super);
    function GetInvoiceFilesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetInvoiceFilesHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetInvoiceFilesHeaders.prototype, "zuoraTrackId", void 0);
    return GetInvoiceFilesHeaders;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceFilesHeaders = GetInvoiceFilesHeaders;
var GetInvoiceFilesRequest = /** @class */ (function (_super) {
    __extends(GetInvoiceFilesRequest, _super);
    function GetInvoiceFilesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetInvoiceFilesPathParams)
    ], GetInvoiceFilesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetInvoiceFilesQueryParams)
    ], GetInvoiceFilesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetInvoiceFilesHeaders)
    ], GetInvoiceFilesRequest.prototype, "headers", void 0);
    return GetInvoiceFilesRequest;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceFilesRequest = GetInvoiceFilesRequest;
var GetInvoiceFilesResponse = /** @class */ (function (_super) {
    __extends(GetInvoiceFilesResponse, _super);
    function GetInvoiceFilesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetInvoiceFilesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetInvoiceFilesResponse)
    ], GetInvoiceFilesResponse.prototype, "getInvoiceFilesResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetInvoiceFilesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetInvoiceFilesResponse.prototype, "statusCode", void 0);
    return GetInvoiceFilesResponse;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceFilesResponse = GetInvoiceFilesResponse;
