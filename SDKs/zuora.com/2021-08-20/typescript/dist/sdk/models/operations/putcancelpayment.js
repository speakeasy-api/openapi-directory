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
exports.PutCancelPaymentResponse = exports.PutCancelPaymentRequest = exports.PutCancelPaymentHeaders = exports.PutCancelPaymentPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PutCancelPaymentPathParams = /** @class */ (function (_super) {
    __extends(PutCancelPaymentPathParams, _super);
    function PutCancelPaymentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=paymentId" }),
        __metadata("design:type", String)
    ], PutCancelPaymentPathParams.prototype, "paymentId", void 0);
    return PutCancelPaymentPathParams;
}(utils_1.SpeakeasyBase));
exports.PutCancelPaymentPathParams = PutCancelPaymentPathParams;
var PutCancelPaymentHeaders = /** @class */ (function (_super) {
    __extends(PutCancelPaymentHeaders, _super);
    function PutCancelPaymentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], PutCancelPaymentHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], PutCancelPaymentHeaders.prototype, "zuoraTrackId", void 0);
    return PutCancelPaymentHeaders;
}(utils_1.SpeakeasyBase));
exports.PutCancelPaymentHeaders = PutCancelPaymentHeaders;
var PutCancelPaymentRequest = /** @class */ (function (_super) {
    __extends(PutCancelPaymentRequest, _super);
    function PutCancelPaymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutCancelPaymentPathParams)
    ], PutCancelPaymentRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutCancelPaymentHeaders)
    ], PutCancelPaymentRequest.prototype, "headers", void 0);
    return PutCancelPaymentRequest;
}(utils_1.SpeakeasyBase));
exports.PutCancelPaymentRequest = PutCancelPaymentRequest;
var PutCancelPaymentResponse = /** @class */ (function (_super) {
    __extends(PutCancelPaymentResponse, _super);
    function PutCancelPaymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutCancelPaymentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutCancelPaymentResponse.prototype, "getarPaymentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutCancelPaymentResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutCancelPaymentResponse.prototype, "statusCode", void 0);
    return PutCancelPaymentResponse;
}(utils_1.SpeakeasyBase));
exports.PutCancelPaymentResponse = PutCancelPaymentResponse;
