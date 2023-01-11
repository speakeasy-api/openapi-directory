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
exports.GetDebitMemoItemResponse = exports.GetDebitMemoItemRequest = exports.GetDebitMemoItemHeaders = exports.GetDebitMemoItemPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetDebitMemoItemPathParams = /** @class */ (function (_super) {
    __extends(GetDebitMemoItemPathParams, _super);
    function GetDebitMemoItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=debitMemoId" }),
        __metadata("design:type", String)
    ], GetDebitMemoItemPathParams.prototype, "debitMemoId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=dmitemid" }),
        __metadata("design:type", String)
    ], GetDebitMemoItemPathParams.prototype, "dmitemid", void 0);
    return GetDebitMemoItemPathParams;
}(utils_1.SpeakeasyBase));
exports.GetDebitMemoItemPathParams = GetDebitMemoItemPathParams;
var GetDebitMemoItemHeaders = /** @class */ (function (_super) {
    __extends(GetDebitMemoItemHeaders, _super);
    function GetDebitMemoItemHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetDebitMemoItemHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetDebitMemoItemHeaders.prototype, "zuoraTrackId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=zuora-version" }),
        __metadata("design:type", String)
    ], GetDebitMemoItemHeaders.prototype, "zuoraVersion", void 0);
    return GetDebitMemoItemHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDebitMemoItemHeaders = GetDebitMemoItemHeaders;
var GetDebitMemoItemRequest = /** @class */ (function (_super) {
    __extends(GetDebitMemoItemRequest, _super);
    function GetDebitMemoItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDebitMemoItemPathParams)
    ], GetDebitMemoItemRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDebitMemoItemHeaders)
    ], GetDebitMemoItemRequest.prototype, "headers", void 0);
    return GetDebitMemoItemRequest;
}(utils_1.SpeakeasyBase));
exports.GetDebitMemoItemRequest = GetDebitMemoItemRequest;
var GetDebitMemoItemResponse = /** @class */ (function (_super) {
    __extends(GetDebitMemoItemResponse, _super);
    function GetDebitMemoItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDebitMemoItemResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDebitMemoItemResponse.prototype, "getDebitMemoItemType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDebitMemoItemResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDebitMemoItemResponse.prototype, "statusCode", void 0);
    return GetDebitMemoItemResponse;
}(utils_1.SpeakeasyBase));
exports.GetDebitMemoItemResponse = GetDebitMemoItemResponse;
