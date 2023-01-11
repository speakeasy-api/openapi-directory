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
exports.GetCreditMemoItemResponse = exports.GetCreditMemoItemRequest = exports.GetCreditMemoItemHeaders = exports.GetCreditMemoItemPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetCreditMemoItemPathParams = /** @class */ (function (_super) {
    __extends(GetCreditMemoItemPathParams, _super);
    function GetCreditMemoItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=cmitemid" }),
        __metadata("design:type", String)
    ], GetCreditMemoItemPathParams.prototype, "cmitemid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=creditMemoId" }),
        __metadata("design:type", String)
    ], GetCreditMemoItemPathParams.prototype, "creditMemoId", void 0);
    return GetCreditMemoItemPathParams;
}(utils_1.SpeakeasyBase));
exports.GetCreditMemoItemPathParams = GetCreditMemoItemPathParams;
var GetCreditMemoItemHeaders = /** @class */ (function (_super) {
    __extends(GetCreditMemoItemHeaders, _super);
    function GetCreditMemoItemHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetCreditMemoItemHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetCreditMemoItemHeaders.prototype, "zuoraTrackId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=zuora-version" }),
        __metadata("design:type", String)
    ], GetCreditMemoItemHeaders.prototype, "zuoraVersion", void 0);
    return GetCreditMemoItemHeaders;
}(utils_1.SpeakeasyBase));
exports.GetCreditMemoItemHeaders = GetCreditMemoItemHeaders;
var GetCreditMemoItemRequest = /** @class */ (function (_super) {
    __extends(GetCreditMemoItemRequest, _super);
    function GetCreditMemoItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCreditMemoItemPathParams)
    ], GetCreditMemoItemRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCreditMemoItemHeaders)
    ], GetCreditMemoItemRequest.prototype, "headers", void 0);
    return GetCreditMemoItemRequest;
}(utils_1.SpeakeasyBase));
exports.GetCreditMemoItemRequest = GetCreditMemoItemRequest;
var GetCreditMemoItemResponse = /** @class */ (function (_super) {
    __extends(GetCreditMemoItemResponse, _super);
    function GetCreditMemoItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCreditMemoItemResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetCreditMemoItemResponse.prototype, "getCreditMemoItemType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetCreditMemoItemResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCreditMemoItemResponse.prototype, "statusCode", void 0);
    return GetCreditMemoItemResponse;
}(utils_1.SpeakeasyBase));
exports.GetCreditMemoItemResponse = GetCreditMemoItemResponse;
