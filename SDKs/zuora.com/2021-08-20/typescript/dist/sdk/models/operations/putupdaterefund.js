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
exports.PutUpdateRefundResponse = exports.PutUpdateRefundRequest = exports.PutUpdateRefundHeaders = exports.PutUpdateRefundPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PutUpdateRefundPathParams = /** @class */ (function (_super) {
    __extends(PutUpdateRefundPathParams, _super);
    function PutUpdateRefundPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=refundId" }),
        __metadata("design:type", String)
    ], PutUpdateRefundPathParams.prototype, "refundId", void 0);
    return PutUpdateRefundPathParams;
}(utils_1.SpeakeasyBase));
exports.PutUpdateRefundPathParams = PutUpdateRefundPathParams;
var PutUpdateRefundHeaders = /** @class */ (function (_super) {
    __extends(PutUpdateRefundHeaders, _super);
    function PutUpdateRefundHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], PutUpdateRefundHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], PutUpdateRefundHeaders.prototype, "zuoraTrackId", void 0);
    return PutUpdateRefundHeaders;
}(utils_1.SpeakeasyBase));
exports.PutUpdateRefundHeaders = PutUpdateRefundHeaders;
var PutUpdateRefundRequest = /** @class */ (function (_super) {
    __extends(PutUpdateRefundRequest, _super);
    function PutUpdateRefundRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutUpdateRefundPathParams)
    ], PutUpdateRefundRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutUpdateRefundHeaders)
    ], PutUpdateRefundRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PutUpdateRefundRequest.prototype, "request", void 0);
    return PutUpdateRefundRequest;
}(utils_1.SpeakeasyBase));
exports.PutUpdateRefundRequest = PutUpdateRefundRequest;
var PutUpdateRefundResponse = /** @class */ (function (_super) {
    __extends(PutUpdateRefundResponse, _super);
    function PutUpdateRefundResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutUpdateRefundResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutUpdateRefundResponse.prototype, "getRefundType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutUpdateRefundResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutUpdateRefundResponse.prototype, "statusCode", void 0);
    return PutUpdateRefundResponse;
}(utils_1.SpeakeasyBase));
exports.PutUpdateRefundResponse = PutUpdateRefundResponse;
