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
exports.GetRefundResponse = exports.GetRefundRequest = exports.GetRefundHeaders = exports.GetRefundPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetRefundPathParams = /** @class */ (function (_super) {
    __extends(GetRefundPathParams, _super);
    function GetRefundPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=refundId" }),
        __metadata("design:type", String)
    ], GetRefundPathParams.prototype, "refundId", void 0);
    return GetRefundPathParams;
}(utils_1.SpeakeasyBase));
exports.GetRefundPathParams = GetRefundPathParams;
var GetRefundHeaders = /** @class */ (function (_super) {
    __extends(GetRefundHeaders, _super);
    function GetRefundHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetRefundHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetRefundHeaders.prototype, "zuoraTrackId", void 0);
    return GetRefundHeaders;
}(utils_1.SpeakeasyBase));
exports.GetRefundHeaders = GetRefundHeaders;
var GetRefundRequest = /** @class */ (function (_super) {
    __extends(GetRefundRequest, _super);
    function GetRefundRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRefundPathParams)
    ], GetRefundRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRefundHeaders)
    ], GetRefundRequest.prototype, "headers", void 0);
    return GetRefundRequest;
}(utils_1.SpeakeasyBase));
exports.GetRefundRequest = GetRefundRequest;
var GetRefundResponse = /** @class */ (function (_super) {
    __extends(GetRefundResponse, _super);
    function GetRefundResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetRefundResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetRefundResponse.prototype, "getRefundType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetRefundResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetRefundResponse.prototype, "statusCode", void 0);
    return GetRefundResponse;
}(utils_1.SpeakeasyBase));
exports.GetRefundResponse = GetRefundResponse;
