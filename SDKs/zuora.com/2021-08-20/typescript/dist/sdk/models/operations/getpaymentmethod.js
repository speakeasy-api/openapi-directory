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
exports.GetPaymentMethodResponse = exports.GetPaymentMethodRequest = exports.GetPaymentMethodHeaders = exports.GetPaymentMethodPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetPaymentMethodPathParams = /** @class */ (function (_super) {
    __extends(GetPaymentMethodPathParams, _super);
    function GetPaymentMethodPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=payment-method-id" }),
        __metadata("design:type", String)
    ], GetPaymentMethodPathParams.prototype, "paymentMethodId", void 0);
    return GetPaymentMethodPathParams;
}(utils_1.SpeakeasyBase));
exports.GetPaymentMethodPathParams = GetPaymentMethodPathParams;
var GetPaymentMethodHeaders = /** @class */ (function (_super) {
    __extends(GetPaymentMethodHeaders, _super);
    function GetPaymentMethodHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetPaymentMethodHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetPaymentMethodHeaders.prototype, "zuoraTrackId", void 0);
    return GetPaymentMethodHeaders;
}(utils_1.SpeakeasyBase));
exports.GetPaymentMethodHeaders = GetPaymentMethodHeaders;
var GetPaymentMethodRequest = /** @class */ (function (_super) {
    __extends(GetPaymentMethodRequest, _super);
    function GetPaymentMethodRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPaymentMethodPathParams)
    ], GetPaymentMethodRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPaymentMethodHeaders)
    ], GetPaymentMethodRequest.prototype, "headers", void 0);
    return GetPaymentMethodRequest;
}(utils_1.SpeakeasyBase));
exports.GetPaymentMethodRequest = GetPaymentMethodRequest;
var GetPaymentMethodResponse = /** @class */ (function (_super) {
    __extends(GetPaymentMethodResponse, _super);
    function GetPaymentMethodResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPaymentMethodResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPaymentMethodResponse.prototype, "getPaymentMethodResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPaymentMethodResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPaymentMethodResponse.prototype, "statusCode", void 0);
    return GetPaymentMethodResponse;
}(utils_1.SpeakeasyBase));
exports.GetPaymentMethodResponse = GetPaymentMethodResponse;
