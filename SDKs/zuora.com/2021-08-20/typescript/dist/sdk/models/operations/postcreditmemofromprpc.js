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
exports.PostCreditMemoFromPrpcResponse = exports.PostCreditMemoFromPrpcRequest = exports.PostCreditMemoFromPrpcHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var PostCreditMemoFromPrpcHeaders = /** @class */ (function (_super) {
    __extends(PostCreditMemoFromPrpcHeaders, _super);
    function PostCreditMemoFromPrpcHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], PostCreditMemoFromPrpcHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], PostCreditMemoFromPrpcHeaders.prototype, "zuoraTrackId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=zuora-version" }),
        __metadata("design:type", String)
    ], PostCreditMemoFromPrpcHeaders.prototype, "zuoraVersion", void 0);
    return PostCreditMemoFromPrpcHeaders;
}(utils_1.SpeakeasyBase));
exports.PostCreditMemoFromPrpcHeaders = PostCreditMemoFromPrpcHeaders;
var PostCreditMemoFromPrpcRequest = /** @class */ (function (_super) {
    __extends(PostCreditMemoFromPrpcRequest, _super);
    function PostCreditMemoFromPrpcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCreditMemoFromPrpcHeaders)
    ], PostCreditMemoFromPrpcRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostCreditMemoFromPrpcRequest.prototype, "request", void 0);
    return PostCreditMemoFromPrpcRequest;
}(utils_1.SpeakeasyBase));
exports.PostCreditMemoFromPrpcRequest = PostCreditMemoFromPrpcRequest;
var PostCreditMemoFromPrpcResponse = /** @class */ (function (_super) {
    __extends(PostCreditMemoFromPrpcResponse, _super);
    function PostCreditMemoFromPrpcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostCreditMemoFromPrpcResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostCreditMemoFromPrpcResponse.prototype, "getCreditMemoType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostCreditMemoFromPrpcResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostCreditMemoFromPrpcResponse.prototype, "statusCode", void 0);
    return PostCreditMemoFromPrpcResponse;
}(utils_1.SpeakeasyBase));
exports.PostCreditMemoFromPrpcResponse = PostCreditMemoFromPrpcResponse;
