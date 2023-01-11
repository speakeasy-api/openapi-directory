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
exports.GetRSbyDebitMemoItemResponse = exports.GetRSbyDebitMemoItemRequest = exports.GetRSbyDebitMemoItemHeaders = exports.GetRSbyDebitMemoItemPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetRSbyDebitMemoItemPathParams = /** @class */ (function (_super) {
    __extends(GetRSbyDebitMemoItemPathParams, _super);
    function GetRSbyDebitMemoItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=dmi-id" }),
        __metadata("design:type", String)
    ], GetRSbyDebitMemoItemPathParams.prototype, "dmiId", void 0);
    return GetRSbyDebitMemoItemPathParams;
}(utils_1.SpeakeasyBase));
exports.GetRSbyDebitMemoItemPathParams = GetRSbyDebitMemoItemPathParams;
var GetRSbyDebitMemoItemHeaders = /** @class */ (function (_super) {
    __extends(GetRSbyDebitMemoItemHeaders, _super);
    function GetRSbyDebitMemoItemHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetRSbyDebitMemoItemHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetRSbyDebitMemoItemHeaders.prototype, "zuoraTrackId", void 0);
    return GetRSbyDebitMemoItemHeaders;
}(utils_1.SpeakeasyBase));
exports.GetRSbyDebitMemoItemHeaders = GetRSbyDebitMemoItemHeaders;
var GetRSbyDebitMemoItemRequest = /** @class */ (function (_super) {
    __extends(GetRSbyDebitMemoItemRequest, _super);
    function GetRSbyDebitMemoItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRSbyDebitMemoItemPathParams)
    ], GetRSbyDebitMemoItemRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRSbyDebitMemoItemHeaders)
    ], GetRSbyDebitMemoItemRequest.prototype, "headers", void 0);
    return GetRSbyDebitMemoItemRequest;
}(utils_1.SpeakeasyBase));
exports.GetRSbyDebitMemoItemRequest = GetRSbyDebitMemoItemRequest;
var GetRSbyDebitMemoItemResponse = /** @class */ (function (_super) {
    __extends(GetRSbyDebitMemoItemResponse, _super);
    function GetRSbyDebitMemoItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetRSbyDebitMemoItemResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetRSbyDebitMemoItemResponse.prototype, "getrsDetailType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetRSbyDebitMemoItemResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetRSbyDebitMemoItemResponse.prototype, "statusCode", void 0);
    return GetRSbyDebitMemoItemResponse;
}(utils_1.SpeakeasyBase));
exports.GetRSbyDebitMemoItemResponse = GetRSbyDebitMemoItemResponse;
