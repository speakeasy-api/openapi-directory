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
exports.GetAccountingCodeResponse = exports.GetAccountingCodeRequest = exports.GetAccountingCodeHeaders = exports.GetAccountingCodePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetAccountingCodePathParams = /** @class */ (function (_super) {
    __extends(GetAccountingCodePathParams, _super);
    function GetAccountingCodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ac-id" }),
        __metadata("design:type", String)
    ], GetAccountingCodePathParams.prototype, "acId", void 0);
    return GetAccountingCodePathParams;
}(utils_1.SpeakeasyBase));
exports.GetAccountingCodePathParams = GetAccountingCodePathParams;
var GetAccountingCodeHeaders = /** @class */ (function (_super) {
    __extends(GetAccountingCodeHeaders, _super);
    function GetAccountingCodeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetAccountingCodeHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetAccountingCodeHeaders.prototype, "zuoraTrackId", void 0);
    return GetAccountingCodeHeaders;
}(utils_1.SpeakeasyBase));
exports.GetAccountingCodeHeaders = GetAccountingCodeHeaders;
var GetAccountingCodeRequest = /** @class */ (function (_super) {
    __extends(GetAccountingCodeRequest, _super);
    function GetAccountingCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAccountingCodePathParams)
    ], GetAccountingCodeRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAccountingCodeHeaders)
    ], GetAccountingCodeRequest.prototype, "headers", void 0);
    return GetAccountingCodeRequest;
}(utils_1.SpeakeasyBase));
exports.GetAccountingCodeRequest = GetAccountingCodeRequest;
var GetAccountingCodeResponse = /** @class */ (function (_super) {
    __extends(GetAccountingCodeResponse, _super);
    function GetAccountingCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAccountingCodeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAccountingCodeResponse.prototype, "getAccountingCodeItemType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAccountingCodeResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAccountingCodeResponse.prototype, "statusCode", void 0);
    return GetAccountingCodeResponse;
}(utils_1.SpeakeasyBase));
exports.GetAccountingCodeResponse = GetAccountingCodeResponse;
