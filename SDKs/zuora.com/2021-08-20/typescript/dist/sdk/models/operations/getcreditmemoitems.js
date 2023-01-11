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
exports.GetCreditMemoItemsResponse = exports.GetCreditMemoItemsRequest = exports.GetCreditMemoItemsHeaders = exports.GetCreditMemoItemsQueryParams = exports.GetCreditMemoItemsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetCreditMemoItemsPathParams = /** @class */ (function (_super) {
    __extends(GetCreditMemoItemsPathParams, _super);
    function GetCreditMemoItemsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=creditMemoId" }),
        __metadata("design:type", String)
    ], GetCreditMemoItemsPathParams.prototype, "creditMemoId", void 0);
    return GetCreditMemoItemsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetCreditMemoItemsPathParams = GetCreditMemoItemsPathParams;
var GetCreditMemoItemsQueryParams = /** @class */ (function (_super) {
    __extends(GetCreditMemoItemsQueryParams, _super);
    function GetCreditMemoItemsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=amount" }),
        __metadata("design:type", Number)
    ], GetCreditMemoItemsQueryParams.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=appliedAmount" }),
        __metadata("design:type", Number)
    ], GetCreditMemoItemsQueryParams.prototype, "appliedAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=createdById" }),
        __metadata("design:type", String)
    ], GetCreditMemoItemsQueryParams.prototype, "createdById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=createdDate" }),
        __metadata("design:type", Date)
    ], GetCreditMemoItemsQueryParams.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], GetCreditMemoItemsQueryParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetCreditMemoItemsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=refundAmount" }),
        __metadata("design:type", Number)
    ], GetCreditMemoItemsQueryParams.prototype, "refundAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=serviceEndDate" }),
        __metadata("design:type", Date)
    ], GetCreditMemoItemsQueryParams.prototype, "serviceEndDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=serviceStartDate" }),
        __metadata("design:type", Date)
    ], GetCreditMemoItemsQueryParams.prototype, "serviceStartDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sku" }),
        __metadata("design:type", String)
    ], GetCreditMemoItemsQueryParams.prototype, "sku", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=skuName" }),
        __metadata("design:type", String)
    ], GetCreditMemoItemsQueryParams.prototype, "skuName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCreditMemoItemsQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sourceItemId" }),
        __metadata("design:type", String)
    ], GetCreditMemoItemsQueryParams.prototype, "sourceItemId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=subscriptionId" }),
        __metadata("design:type", String)
    ], GetCreditMemoItemsQueryParams.prototype, "subscriptionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=updatedById" }),
        __metadata("design:type", String)
    ], GetCreditMemoItemsQueryParams.prototype, "updatedById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=updatedDate" }),
        __metadata("design:type", Date)
    ], GetCreditMemoItemsQueryParams.prototype, "updatedDate", void 0);
    return GetCreditMemoItemsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetCreditMemoItemsQueryParams = GetCreditMemoItemsQueryParams;
var GetCreditMemoItemsHeaders = /** @class */ (function (_super) {
    __extends(GetCreditMemoItemsHeaders, _super);
    function GetCreditMemoItemsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetCreditMemoItemsHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetCreditMemoItemsHeaders.prototype, "zuoraTrackId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=zuora-version" }),
        __metadata("design:type", String)
    ], GetCreditMemoItemsHeaders.prototype, "zuoraVersion", void 0);
    return GetCreditMemoItemsHeaders;
}(utils_1.SpeakeasyBase));
exports.GetCreditMemoItemsHeaders = GetCreditMemoItemsHeaders;
var GetCreditMemoItemsRequest = /** @class */ (function (_super) {
    __extends(GetCreditMemoItemsRequest, _super);
    function GetCreditMemoItemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCreditMemoItemsPathParams)
    ], GetCreditMemoItemsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCreditMemoItemsQueryParams)
    ], GetCreditMemoItemsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCreditMemoItemsHeaders)
    ], GetCreditMemoItemsRequest.prototype, "headers", void 0);
    return GetCreditMemoItemsRequest;
}(utils_1.SpeakeasyBase));
exports.GetCreditMemoItemsRequest = GetCreditMemoItemsRequest;
var GetCreditMemoItemsResponse = /** @class */ (function (_super) {
    __extends(GetCreditMemoItemsResponse, _super);
    function GetCreditMemoItemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCreditMemoItemsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetCreditMemoItemsListType)
    ], GetCreditMemoItemsResponse.prototype, "getCreditMemoItemsListType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetCreditMemoItemsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCreditMemoItemsResponse.prototype, "statusCode", void 0);
    return GetCreditMemoItemsResponse;
}(utils_1.SpeakeasyBase));
exports.GetCreditMemoItemsResponse = GetCreditMemoItemsResponse;
