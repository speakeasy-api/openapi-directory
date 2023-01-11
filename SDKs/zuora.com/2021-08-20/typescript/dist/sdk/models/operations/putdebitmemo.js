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
exports.PutDebitMemoResponse = exports.PutDebitMemoRequest = exports.PutDebitMemoHeaders = exports.PutDebitMemoPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PutDebitMemoPathParams = /** @class */ (function (_super) {
    __extends(PutDebitMemoPathParams, _super);
    function PutDebitMemoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=debitMemoId" }),
        __metadata("design:type", String)
    ], PutDebitMemoPathParams.prototype, "debitMemoId", void 0);
    return PutDebitMemoPathParams;
}(utils_1.SpeakeasyBase));
exports.PutDebitMemoPathParams = PutDebitMemoPathParams;
var PutDebitMemoHeaders = /** @class */ (function (_super) {
    __extends(PutDebitMemoHeaders, _super);
    function PutDebitMemoHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], PutDebitMemoHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], PutDebitMemoHeaders.prototype, "zuoraTrackId", void 0);
    return PutDebitMemoHeaders;
}(utils_1.SpeakeasyBase));
exports.PutDebitMemoHeaders = PutDebitMemoHeaders;
var PutDebitMemoRequest = /** @class */ (function (_super) {
    __extends(PutDebitMemoRequest, _super);
    function PutDebitMemoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutDebitMemoPathParams)
    ], PutDebitMemoRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutDebitMemoHeaders)
    ], PutDebitMemoRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PutDebitMemoRequest.prototype, "request", void 0);
    return PutDebitMemoRequest;
}(utils_1.SpeakeasyBase));
exports.PutDebitMemoRequest = PutDebitMemoRequest;
var PutDebitMemoResponse = /** @class */ (function (_super) {
    __extends(PutDebitMemoResponse, _super);
    function PutDebitMemoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutDebitMemoResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutDebitMemoResponse.prototype, "getDebitMemoType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutDebitMemoResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutDebitMemoResponse.prototype, "statusCode", void 0);
    return PutDebitMemoResponse;
}(utils_1.SpeakeasyBase));
exports.PutDebitMemoResponse = PutDebitMemoResponse;
