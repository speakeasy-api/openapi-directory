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
exports.GetTaxationItemsOfCreditMemoItemResponse = exports.GetTaxationItemsOfCreditMemoItemRequest = exports.GetTaxationItemsOfCreditMemoItem200ApplicationJson = exports.GetTaxationItemsOfCreditMemoItemHeaders = exports.GetTaxationItemsOfCreditMemoItemQueryParams = exports.GetTaxationItemsOfCreditMemoItemPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetTaxationItemsOfCreditMemoItemPathParams = /** @class */ (function (_super) {
    __extends(GetTaxationItemsOfCreditMemoItemPathParams, _super);
    function GetTaxationItemsOfCreditMemoItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=cmitemid" }),
        __metadata("design:type", String)
    ], GetTaxationItemsOfCreditMemoItemPathParams.prototype, "cmitemid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=creditMemoId" }),
        __metadata("design:type", String)
    ], GetTaxationItemsOfCreditMemoItemPathParams.prototype, "creditMemoId", void 0);
    return GetTaxationItemsOfCreditMemoItemPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTaxationItemsOfCreditMemoItemPathParams = GetTaxationItemsOfCreditMemoItemPathParams;
var GetTaxationItemsOfCreditMemoItemQueryParams = /** @class */ (function (_super) {
    __extends(GetTaxationItemsOfCreditMemoItemQueryParams, _super);
    function GetTaxationItemsOfCreditMemoItemQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetTaxationItemsOfCreditMemoItemQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetTaxationItemsOfCreditMemoItemQueryParams.prototype, "pageSize", void 0);
    return GetTaxationItemsOfCreditMemoItemQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetTaxationItemsOfCreditMemoItemQueryParams = GetTaxationItemsOfCreditMemoItemQueryParams;
var GetTaxationItemsOfCreditMemoItemHeaders = /** @class */ (function (_super) {
    __extends(GetTaxationItemsOfCreditMemoItemHeaders, _super);
    function GetTaxationItemsOfCreditMemoItemHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetTaxationItemsOfCreditMemoItemHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetTaxationItemsOfCreditMemoItemHeaders.prototype, "zuoraTrackId", void 0);
    return GetTaxationItemsOfCreditMemoItemHeaders;
}(utils_1.SpeakeasyBase));
exports.GetTaxationItemsOfCreditMemoItemHeaders = GetTaxationItemsOfCreditMemoItemHeaders;
var GetTaxationItemsOfCreditMemoItem200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTaxationItemsOfCreditMemoItem200ApplicationJson, _super);
    function GetTaxationItemsOfCreditMemoItem200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Array)
    ], GetTaxationItemsOfCreditMemoItem200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nextPage" }),
        __metadata("design:type", String)
    ], GetTaxationItemsOfCreditMemoItem200ApplicationJson.prototype, "nextPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], GetTaxationItemsOfCreditMemoItem200ApplicationJson.prototype, "success", void 0);
    return GetTaxationItemsOfCreditMemoItem200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTaxationItemsOfCreditMemoItem200ApplicationJson = GetTaxationItemsOfCreditMemoItem200ApplicationJson;
var GetTaxationItemsOfCreditMemoItemRequest = /** @class */ (function (_super) {
    __extends(GetTaxationItemsOfCreditMemoItemRequest, _super);
    function GetTaxationItemsOfCreditMemoItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTaxationItemsOfCreditMemoItemPathParams)
    ], GetTaxationItemsOfCreditMemoItemRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTaxationItemsOfCreditMemoItemQueryParams)
    ], GetTaxationItemsOfCreditMemoItemRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTaxationItemsOfCreditMemoItemHeaders)
    ], GetTaxationItemsOfCreditMemoItemRequest.prototype, "headers", void 0);
    return GetTaxationItemsOfCreditMemoItemRequest;
}(utils_1.SpeakeasyBase));
exports.GetTaxationItemsOfCreditMemoItemRequest = GetTaxationItemsOfCreditMemoItemRequest;
var GetTaxationItemsOfCreditMemoItemResponse = /** @class */ (function (_super) {
    __extends(GetTaxationItemsOfCreditMemoItemResponse, _super);
    function GetTaxationItemsOfCreditMemoItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTaxationItemsOfCreditMemoItemResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTaxationItemsOfCreditMemoItem200ApplicationJson)
    ], GetTaxationItemsOfCreditMemoItemResponse.prototype, "getTaxationItemsOfCreditMemoItem200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetTaxationItemsOfCreditMemoItemResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTaxationItemsOfCreditMemoItemResponse.prototype, "statusCode", void 0);
    return GetTaxationItemsOfCreditMemoItemResponse;
}(utils_1.SpeakeasyBase));
exports.GetTaxationItemsOfCreditMemoItemResponse = GetTaxationItemsOfCreditMemoItemResponse;
