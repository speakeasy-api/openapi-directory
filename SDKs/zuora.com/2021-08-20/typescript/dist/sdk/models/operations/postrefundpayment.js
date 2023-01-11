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
exports.PostRefundPaymentResponse = exports.PostRefundPaymentRequest = exports.PostRefundPaymentHeaders = exports.PostRefundPaymentPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PostRefundPaymentPathParams = /** @class */ (function (_super) {
    __extends(PostRefundPaymentPathParams, _super);
    function PostRefundPaymentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=paymentId" }),
        __metadata("design:type", String)
    ], PostRefundPaymentPathParams.prototype, "paymentId", void 0);
    return PostRefundPaymentPathParams;
}(utils_1.SpeakeasyBase));
exports.PostRefundPaymentPathParams = PostRefundPaymentPathParams;
var PostRefundPaymentHeaders = /** @class */ (function (_super) {
    __extends(PostRefundPaymentHeaders, _super);
    function PostRefundPaymentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], PostRefundPaymentHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], PostRefundPaymentHeaders.prototype, "zuoraTrackId", void 0);
    return PostRefundPaymentHeaders;
}(utils_1.SpeakeasyBase));
exports.PostRefundPaymentHeaders = PostRefundPaymentHeaders;
var PostRefundPaymentRequest = /** @class */ (function (_super) {
    __extends(PostRefundPaymentRequest, _super);
    function PostRefundPaymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostRefundPaymentPathParams)
    ], PostRefundPaymentRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostRefundPaymentHeaders)
    ], PostRefundPaymentRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostRefundPaymentRequest.prototype, "request", void 0);
    return PostRefundPaymentRequest;
}(utils_1.SpeakeasyBase));
exports.PostRefundPaymentRequest = PostRefundPaymentRequest;
var PostRefundPaymentResponse = /** @class */ (function (_super) {
    __extends(PostRefundPaymentResponse, _super);
    function PostRefundPaymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostRefundPaymentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostRefundPaymentResponse.prototype, "getRefundPaymentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostRefundPaymentResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostRefundPaymentResponse.prototype, "statusCode", void 0);
    return PostRefundPaymentResponse;
}(utils_1.SpeakeasyBase));
exports.PostRefundPaymentResponse = PostRefundPaymentResponse;
