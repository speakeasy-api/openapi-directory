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
exports.GetPaymentResponse = exports.GetPaymentRequest = exports.GetPaymentHeaders = exports.GetPaymentPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetPaymentPathParams = /** @class */ (function (_super) {
    __extends(GetPaymentPathParams, _super);
    function GetPaymentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=paymentId" }),
        __metadata("design:type", String)
    ], GetPaymentPathParams.prototype, "paymentId", void 0);
    return GetPaymentPathParams;
}(utils_1.SpeakeasyBase));
exports.GetPaymentPathParams = GetPaymentPathParams;
var GetPaymentHeaders = /** @class */ (function (_super) {
    __extends(GetPaymentHeaders, _super);
    function GetPaymentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetPaymentHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetPaymentHeaders.prototype, "zuoraTrackId", void 0);
    return GetPaymentHeaders;
}(utils_1.SpeakeasyBase));
exports.GetPaymentHeaders = GetPaymentHeaders;
var GetPaymentRequest = /** @class */ (function (_super) {
    __extends(GetPaymentRequest, _super);
    function GetPaymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPaymentPathParams)
    ], GetPaymentRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPaymentHeaders)
    ], GetPaymentRequest.prototype, "headers", void 0);
    return GetPaymentRequest;
}(utils_1.SpeakeasyBase));
exports.GetPaymentRequest = GetPaymentRequest;
var GetPaymentResponse = /** @class */ (function (_super) {
    __extends(GetPaymentResponse, _super);
    function GetPaymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPaymentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPaymentResponse.prototype, "getarPaymentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPaymentResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPaymentResponse.prototype, "statusCode", void 0);
    return GetPaymentResponse;
}(utils_1.SpeakeasyBase));
exports.GetPaymentResponse = GetPaymentResponse;
