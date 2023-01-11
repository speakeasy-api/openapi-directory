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
exports.PutUnpostCreditMemoResponse = exports.PutUnpostCreditMemoRequest = exports.PutUnpostCreditMemoHeaders = exports.PutUnpostCreditMemoPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PutUnpostCreditMemoPathParams = /** @class */ (function (_super) {
    __extends(PutUnpostCreditMemoPathParams, _super);
    function PutUnpostCreditMemoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=creditMemoId" }),
        __metadata("design:type", String)
    ], PutUnpostCreditMemoPathParams.prototype, "creditMemoId", void 0);
    return PutUnpostCreditMemoPathParams;
}(utils_1.SpeakeasyBase));
exports.PutUnpostCreditMemoPathParams = PutUnpostCreditMemoPathParams;
var PutUnpostCreditMemoHeaders = /** @class */ (function (_super) {
    __extends(PutUnpostCreditMemoHeaders, _super);
    function PutUnpostCreditMemoHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], PutUnpostCreditMemoHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], PutUnpostCreditMemoHeaders.prototype, "zuoraTrackId", void 0);
    return PutUnpostCreditMemoHeaders;
}(utils_1.SpeakeasyBase));
exports.PutUnpostCreditMemoHeaders = PutUnpostCreditMemoHeaders;
var PutUnpostCreditMemoRequest = /** @class */ (function (_super) {
    __extends(PutUnpostCreditMemoRequest, _super);
    function PutUnpostCreditMemoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutUnpostCreditMemoPathParams)
    ], PutUnpostCreditMemoRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutUnpostCreditMemoHeaders)
    ], PutUnpostCreditMemoRequest.prototype, "headers", void 0);
    return PutUnpostCreditMemoRequest;
}(utils_1.SpeakeasyBase));
exports.PutUnpostCreditMemoRequest = PutUnpostCreditMemoRequest;
var PutUnpostCreditMemoResponse = /** @class */ (function (_super) {
    __extends(PutUnpostCreditMemoResponse, _super);
    function PutUnpostCreditMemoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutUnpostCreditMemoResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutUnpostCreditMemoResponse.prototype, "getCreditMemoType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutUnpostCreditMemoResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutUnpostCreditMemoResponse.prototype, "statusCode", void 0);
    return PutUnpostCreditMemoResponse;
}(utils_1.SpeakeasyBase));
exports.PutUnpostCreditMemoResponse = PutUnpostCreditMemoResponse;
