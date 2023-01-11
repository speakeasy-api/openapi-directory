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
exports.GetTaxationItemResponse = exports.GetTaxationItemRequest = exports.GetTaxationItemHeaders = exports.GetTaxationItemPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetTaxationItemPathParams = /** @class */ (function (_super) {
    __extends(GetTaxationItemPathParams, _super);
    function GetTaxationItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetTaxationItemPathParams.prototype, "id", void 0);
    return GetTaxationItemPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTaxationItemPathParams = GetTaxationItemPathParams;
var GetTaxationItemHeaders = /** @class */ (function (_super) {
    __extends(GetTaxationItemHeaders, _super);
    function GetTaxationItemHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetTaxationItemHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetTaxationItemHeaders.prototype, "zuoraTrackId", void 0);
    return GetTaxationItemHeaders;
}(utils_1.SpeakeasyBase));
exports.GetTaxationItemHeaders = GetTaxationItemHeaders;
var GetTaxationItemRequest = /** @class */ (function (_super) {
    __extends(GetTaxationItemRequest, _super);
    function GetTaxationItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTaxationItemPathParams)
    ], GetTaxationItemRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTaxationItemHeaders)
    ], GetTaxationItemRequest.prototype, "headers", void 0);
    return GetTaxationItemRequest;
}(utils_1.SpeakeasyBase));
exports.GetTaxationItemRequest = GetTaxationItemRequest;
var GetTaxationItemResponse = /** @class */ (function (_super) {
    __extends(GetTaxationItemResponse, _super);
    function GetTaxationItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTaxationItemResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetTaxationItemResponse.prototype, "getTaxationItemType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetTaxationItemResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTaxationItemResponse.prototype, "statusCode", void 0);
    return GetTaxationItemResponse;
}(utils_1.SpeakeasyBase));
exports.GetTaxationItemResponse = GetTaxationItemResponse;
