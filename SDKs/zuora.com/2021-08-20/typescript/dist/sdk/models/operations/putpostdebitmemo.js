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
exports.PutPostDebitMemoResponse = exports.PutPostDebitMemoRequest = exports.PutPostDebitMemoHeaders = exports.PutPostDebitMemoPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PutPostDebitMemoPathParams = /** @class */ (function (_super) {
    __extends(PutPostDebitMemoPathParams, _super);
    function PutPostDebitMemoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=debitMemoId" }),
        __metadata("design:type", String)
    ], PutPostDebitMemoPathParams.prototype, "debitMemoId", void 0);
    return PutPostDebitMemoPathParams;
}(utils_1.SpeakeasyBase));
exports.PutPostDebitMemoPathParams = PutPostDebitMemoPathParams;
var PutPostDebitMemoHeaders = /** @class */ (function (_super) {
    __extends(PutPostDebitMemoHeaders, _super);
    function PutPostDebitMemoHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], PutPostDebitMemoHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], PutPostDebitMemoHeaders.prototype, "zuoraTrackId", void 0);
    return PutPostDebitMemoHeaders;
}(utils_1.SpeakeasyBase));
exports.PutPostDebitMemoHeaders = PutPostDebitMemoHeaders;
var PutPostDebitMemoRequest = /** @class */ (function (_super) {
    __extends(PutPostDebitMemoRequest, _super);
    function PutPostDebitMemoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutPostDebitMemoPathParams)
    ], PutPostDebitMemoRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutPostDebitMemoHeaders)
    ], PutPostDebitMemoRequest.prototype, "headers", void 0);
    return PutPostDebitMemoRequest;
}(utils_1.SpeakeasyBase));
exports.PutPostDebitMemoRequest = PutPostDebitMemoRequest;
var PutPostDebitMemoResponse = /** @class */ (function (_super) {
    __extends(PutPostDebitMemoResponse, _super);
    function PutPostDebitMemoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutPostDebitMemoResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutPostDebitMemoResponse.prototype, "getDebitMemoType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutPostDebitMemoResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutPostDebitMemoResponse.prototype, "statusCode", void 0);
    return PutPostDebitMemoResponse;
}(utils_1.SpeakeasyBase));
exports.PutPostDebitMemoResponse = PutPostDebitMemoResponse;
