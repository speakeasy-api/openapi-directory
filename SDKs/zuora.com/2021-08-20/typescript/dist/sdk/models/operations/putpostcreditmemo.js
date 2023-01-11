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
exports.PutPostCreditMemoResponse = exports.PutPostCreditMemoRequest = exports.PutPostCreditMemoHeaders = exports.PutPostCreditMemoPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PutPostCreditMemoPathParams = /** @class */ (function (_super) {
    __extends(PutPostCreditMemoPathParams, _super);
    function PutPostCreditMemoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=creditMemoId" }),
        __metadata("design:type", String)
    ], PutPostCreditMemoPathParams.prototype, "creditMemoId", void 0);
    return PutPostCreditMemoPathParams;
}(utils_1.SpeakeasyBase));
exports.PutPostCreditMemoPathParams = PutPostCreditMemoPathParams;
var PutPostCreditMemoHeaders = /** @class */ (function (_super) {
    __extends(PutPostCreditMemoHeaders, _super);
    function PutPostCreditMemoHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], PutPostCreditMemoHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], PutPostCreditMemoHeaders.prototype, "zuoraTrackId", void 0);
    return PutPostCreditMemoHeaders;
}(utils_1.SpeakeasyBase));
exports.PutPostCreditMemoHeaders = PutPostCreditMemoHeaders;
var PutPostCreditMemoRequest = /** @class */ (function (_super) {
    __extends(PutPostCreditMemoRequest, _super);
    function PutPostCreditMemoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutPostCreditMemoPathParams)
    ], PutPostCreditMemoRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutPostCreditMemoHeaders)
    ], PutPostCreditMemoRequest.prototype, "headers", void 0);
    return PutPostCreditMemoRequest;
}(utils_1.SpeakeasyBase));
exports.PutPostCreditMemoRequest = PutPostCreditMemoRequest;
var PutPostCreditMemoResponse = /** @class */ (function (_super) {
    __extends(PutPostCreditMemoResponse, _super);
    function PutPostCreditMemoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutPostCreditMemoResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutPostCreditMemoResponse.prototype, "getCreditMemoType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutPostCreditMemoResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutPostCreditMemoResponse.prototype, "statusCode", void 0);
    return PutPostCreditMemoResponse;
}(utils_1.SpeakeasyBase));
exports.PutPostCreditMemoResponse = PutPostCreditMemoResponse;
