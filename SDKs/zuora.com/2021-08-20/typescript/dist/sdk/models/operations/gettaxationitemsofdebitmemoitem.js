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
exports.GetTaxationItemsOfDebitMemoItemResponse = exports.GetTaxationItemsOfDebitMemoItemRequest = exports.GetTaxationItemsOfDebitMemoItem200ApplicationJson = exports.GetTaxationItemsOfDebitMemoItemHeaders = exports.GetTaxationItemsOfDebitMemoItemQueryParams = exports.GetTaxationItemsOfDebitMemoItemPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetTaxationItemsOfDebitMemoItemPathParams = /** @class */ (function (_super) {
    __extends(GetTaxationItemsOfDebitMemoItemPathParams, _super);
    function GetTaxationItemsOfDebitMemoItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=debitMemoId" }),
        __metadata("design:type", String)
    ], GetTaxationItemsOfDebitMemoItemPathParams.prototype, "debitMemoId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=dmitemid" }),
        __metadata("design:type", String)
    ], GetTaxationItemsOfDebitMemoItemPathParams.prototype, "dmitemid", void 0);
    return GetTaxationItemsOfDebitMemoItemPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTaxationItemsOfDebitMemoItemPathParams = GetTaxationItemsOfDebitMemoItemPathParams;
var GetTaxationItemsOfDebitMemoItemQueryParams = /** @class */ (function (_super) {
    __extends(GetTaxationItemsOfDebitMemoItemQueryParams, _super);
    function GetTaxationItemsOfDebitMemoItemQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetTaxationItemsOfDebitMemoItemQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetTaxationItemsOfDebitMemoItemQueryParams.prototype, "pageSize", void 0);
    return GetTaxationItemsOfDebitMemoItemQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetTaxationItemsOfDebitMemoItemQueryParams = GetTaxationItemsOfDebitMemoItemQueryParams;
var GetTaxationItemsOfDebitMemoItemHeaders = /** @class */ (function (_super) {
    __extends(GetTaxationItemsOfDebitMemoItemHeaders, _super);
    function GetTaxationItemsOfDebitMemoItemHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetTaxationItemsOfDebitMemoItemHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetTaxationItemsOfDebitMemoItemHeaders.prototype, "zuoraTrackId", void 0);
    return GetTaxationItemsOfDebitMemoItemHeaders;
}(utils_1.SpeakeasyBase));
exports.GetTaxationItemsOfDebitMemoItemHeaders = GetTaxationItemsOfDebitMemoItemHeaders;
var GetTaxationItemsOfDebitMemoItem200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTaxationItemsOfDebitMemoItem200ApplicationJson, _super);
    function GetTaxationItemsOfDebitMemoItem200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Array)
    ], GetTaxationItemsOfDebitMemoItem200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nextPage" }),
        __metadata("design:type", String)
    ], GetTaxationItemsOfDebitMemoItem200ApplicationJson.prototype, "nextPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], GetTaxationItemsOfDebitMemoItem200ApplicationJson.prototype, "success", void 0);
    return GetTaxationItemsOfDebitMemoItem200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTaxationItemsOfDebitMemoItem200ApplicationJson = GetTaxationItemsOfDebitMemoItem200ApplicationJson;
var GetTaxationItemsOfDebitMemoItemRequest = /** @class */ (function (_super) {
    __extends(GetTaxationItemsOfDebitMemoItemRequest, _super);
    function GetTaxationItemsOfDebitMemoItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTaxationItemsOfDebitMemoItemPathParams)
    ], GetTaxationItemsOfDebitMemoItemRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTaxationItemsOfDebitMemoItemQueryParams)
    ], GetTaxationItemsOfDebitMemoItemRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTaxationItemsOfDebitMemoItemHeaders)
    ], GetTaxationItemsOfDebitMemoItemRequest.prototype, "headers", void 0);
    return GetTaxationItemsOfDebitMemoItemRequest;
}(utils_1.SpeakeasyBase));
exports.GetTaxationItemsOfDebitMemoItemRequest = GetTaxationItemsOfDebitMemoItemRequest;
var GetTaxationItemsOfDebitMemoItemResponse = /** @class */ (function (_super) {
    __extends(GetTaxationItemsOfDebitMemoItemResponse, _super);
    function GetTaxationItemsOfDebitMemoItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTaxationItemsOfDebitMemoItemResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTaxationItemsOfDebitMemoItem200ApplicationJson)
    ], GetTaxationItemsOfDebitMemoItemResponse.prototype, "getTaxationItemsOfDebitMemoItem200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetTaxationItemsOfDebitMemoItemResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTaxationItemsOfDebitMemoItemResponse.prototype, "statusCode", void 0);
    return GetTaxationItemsOfDebitMemoItemResponse;
}(utils_1.SpeakeasyBase));
exports.GetTaxationItemsOfDebitMemoItemResponse = GetTaxationItemsOfDebitMemoItemResponse;
