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
exports.PutCancelDebitMemoResponse = exports.PutCancelDebitMemoRequest = exports.PutCancelDebitMemoHeaders = exports.PutCancelDebitMemoPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PutCancelDebitMemoPathParams = /** @class */ (function (_super) {
    __extends(PutCancelDebitMemoPathParams, _super);
    function PutCancelDebitMemoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=debitMemoId" }),
        __metadata("design:type", String)
    ], PutCancelDebitMemoPathParams.prototype, "debitMemoId", void 0);
    return PutCancelDebitMemoPathParams;
}(utils_1.SpeakeasyBase));
exports.PutCancelDebitMemoPathParams = PutCancelDebitMemoPathParams;
var PutCancelDebitMemoHeaders = /** @class */ (function (_super) {
    __extends(PutCancelDebitMemoHeaders, _super);
    function PutCancelDebitMemoHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], PutCancelDebitMemoHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], PutCancelDebitMemoHeaders.prototype, "zuoraTrackId", void 0);
    return PutCancelDebitMemoHeaders;
}(utils_1.SpeakeasyBase));
exports.PutCancelDebitMemoHeaders = PutCancelDebitMemoHeaders;
var PutCancelDebitMemoRequest = /** @class */ (function (_super) {
    __extends(PutCancelDebitMemoRequest, _super);
    function PutCancelDebitMemoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutCancelDebitMemoPathParams)
    ], PutCancelDebitMemoRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutCancelDebitMemoHeaders)
    ], PutCancelDebitMemoRequest.prototype, "headers", void 0);
    return PutCancelDebitMemoRequest;
}(utils_1.SpeakeasyBase));
exports.PutCancelDebitMemoRequest = PutCancelDebitMemoRequest;
var PutCancelDebitMemoResponse = /** @class */ (function (_super) {
    __extends(PutCancelDebitMemoResponse, _super);
    function PutCancelDebitMemoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutCancelDebitMemoResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutCancelDebitMemoResponse.prototype, "getDebitMemoType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutCancelDebitMemoResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutCancelDebitMemoResponse.prototype, "statusCode", void 0);
    return PutCancelDebitMemoResponse;
}(utils_1.SpeakeasyBase));
exports.PutCancelDebitMemoResponse = PutCancelDebitMemoResponse;
