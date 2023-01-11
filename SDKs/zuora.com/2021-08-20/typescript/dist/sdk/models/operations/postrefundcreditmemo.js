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
exports.PostRefundCreditMemoResponse = exports.PostRefundCreditMemoRequest = exports.PostRefundCreditMemoHeaders = exports.PostRefundCreditMemoPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PostRefundCreditMemoPathParams = /** @class */ (function (_super) {
    __extends(PostRefundCreditMemoPathParams, _super);
    function PostRefundCreditMemoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=creditmemoId" }),
        __metadata("design:type", String)
    ], PostRefundCreditMemoPathParams.prototype, "creditmemoId", void 0);
    return PostRefundCreditMemoPathParams;
}(utils_1.SpeakeasyBase));
exports.PostRefundCreditMemoPathParams = PostRefundCreditMemoPathParams;
var PostRefundCreditMemoHeaders = /** @class */ (function (_super) {
    __extends(PostRefundCreditMemoHeaders, _super);
    function PostRefundCreditMemoHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], PostRefundCreditMemoHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], PostRefundCreditMemoHeaders.prototype, "zuoraTrackId", void 0);
    return PostRefundCreditMemoHeaders;
}(utils_1.SpeakeasyBase));
exports.PostRefundCreditMemoHeaders = PostRefundCreditMemoHeaders;
var PostRefundCreditMemoRequest = /** @class */ (function (_super) {
    __extends(PostRefundCreditMemoRequest, _super);
    function PostRefundCreditMemoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostRefundCreditMemoPathParams)
    ], PostRefundCreditMemoRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostRefundCreditMemoHeaders)
    ], PostRefundCreditMemoRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostRefundCreditMemoRequest.prototype, "request", void 0);
    return PostRefundCreditMemoRequest;
}(utils_1.SpeakeasyBase));
exports.PostRefundCreditMemoRequest = PostRefundCreditMemoRequest;
var PostRefundCreditMemoResponse = /** @class */ (function (_super) {
    __extends(PostRefundCreditMemoResponse, _super);
    function PostRefundCreditMemoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostRefundCreditMemoResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostRefundCreditMemoResponse.prototype, "getRefundCreditMemoType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostRefundCreditMemoResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostRefundCreditMemoResponse.prototype, "statusCode", void 0);
    return PostRefundCreditMemoResponse;
}(utils_1.SpeakeasyBase));
exports.PostRefundCreditMemoResponse = PostRefundCreditMemoResponse;
