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
exports.PutUpdateCreditMemoResponse = exports.PutUpdateCreditMemoRequest = exports.PutUpdateCreditMemoHeaders = exports.PutUpdateCreditMemoPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PutUpdateCreditMemoPathParams = /** @class */ (function (_super) {
    __extends(PutUpdateCreditMemoPathParams, _super);
    function PutUpdateCreditMemoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=creditMemoId" }),
        __metadata("design:type", String)
    ], PutUpdateCreditMemoPathParams.prototype, "creditMemoId", void 0);
    return PutUpdateCreditMemoPathParams;
}(utils_1.SpeakeasyBase));
exports.PutUpdateCreditMemoPathParams = PutUpdateCreditMemoPathParams;
var PutUpdateCreditMemoHeaders = /** @class */ (function (_super) {
    __extends(PutUpdateCreditMemoHeaders, _super);
    function PutUpdateCreditMemoHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], PutUpdateCreditMemoHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], PutUpdateCreditMemoHeaders.prototype, "zuoraTrackId", void 0);
    return PutUpdateCreditMemoHeaders;
}(utils_1.SpeakeasyBase));
exports.PutUpdateCreditMemoHeaders = PutUpdateCreditMemoHeaders;
var PutUpdateCreditMemoRequest = /** @class */ (function (_super) {
    __extends(PutUpdateCreditMemoRequest, _super);
    function PutUpdateCreditMemoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutUpdateCreditMemoPathParams)
    ], PutUpdateCreditMemoRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutUpdateCreditMemoHeaders)
    ], PutUpdateCreditMemoRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PutUpdateCreditMemoRequest.prototype, "request", void 0);
    return PutUpdateCreditMemoRequest;
}(utils_1.SpeakeasyBase));
exports.PutUpdateCreditMemoRequest = PutUpdateCreditMemoRequest;
var PutUpdateCreditMemoResponse = /** @class */ (function (_super) {
    __extends(PutUpdateCreditMemoResponse, _super);
    function PutUpdateCreditMemoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutUpdateCreditMemoResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutUpdateCreditMemoResponse.prototype, "getCreditMemoType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutUpdateCreditMemoResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutUpdateCreditMemoResponse.prototype, "statusCode", void 0);
    return PutUpdateCreditMemoResponse;
}(utils_1.SpeakeasyBase));
exports.PutUpdateCreditMemoResponse = PutUpdateCreditMemoResponse;
