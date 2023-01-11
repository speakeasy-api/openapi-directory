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
exports.PostDebitMemoFromPrpcResponse = exports.PostDebitMemoFromPrpcRequest = exports.PostDebitMemoFromPrpcHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var PostDebitMemoFromPrpcHeaders = /** @class */ (function (_super) {
    __extends(PostDebitMemoFromPrpcHeaders, _super);
    function PostDebitMemoFromPrpcHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], PostDebitMemoFromPrpcHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], PostDebitMemoFromPrpcHeaders.prototype, "zuoraTrackId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=zuora-version" }),
        __metadata("design:type", String)
    ], PostDebitMemoFromPrpcHeaders.prototype, "zuoraVersion", void 0);
    return PostDebitMemoFromPrpcHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDebitMemoFromPrpcHeaders = PostDebitMemoFromPrpcHeaders;
var PostDebitMemoFromPrpcRequest = /** @class */ (function (_super) {
    __extends(PostDebitMemoFromPrpcRequest, _super);
    function PostDebitMemoFromPrpcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDebitMemoFromPrpcHeaders)
    ], PostDebitMemoFromPrpcRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostDebitMemoFromPrpcRequest.prototype, "request", void 0);
    return PostDebitMemoFromPrpcRequest;
}(utils_1.SpeakeasyBase));
exports.PostDebitMemoFromPrpcRequest = PostDebitMemoFromPrpcRequest;
var PostDebitMemoFromPrpcResponse = /** @class */ (function (_super) {
    __extends(PostDebitMemoFromPrpcResponse, _super);
    function PostDebitMemoFromPrpcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDebitMemoFromPrpcResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostDebitMemoFromPrpcResponse.prototype, "getDebitMemoType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostDebitMemoFromPrpcResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDebitMemoFromPrpcResponse.prototype, "statusCode", void 0);
    return PostDebitMemoFromPrpcResponse;
}(utils_1.SpeakeasyBase));
exports.PostDebitMemoFromPrpcResponse = PostDebitMemoFromPrpcResponse;
