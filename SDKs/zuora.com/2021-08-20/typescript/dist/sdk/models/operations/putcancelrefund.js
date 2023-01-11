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
exports.PutCancelRefundResponse = exports.PutCancelRefundRequest = exports.PutCancelRefundHeaders = exports.PutCancelRefundPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PutCancelRefundPathParams = /** @class */ (function (_super) {
    __extends(PutCancelRefundPathParams, _super);
    function PutCancelRefundPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=refundId" }),
        __metadata("design:type", String)
    ], PutCancelRefundPathParams.prototype, "refundId", void 0);
    return PutCancelRefundPathParams;
}(utils_1.SpeakeasyBase));
exports.PutCancelRefundPathParams = PutCancelRefundPathParams;
var PutCancelRefundHeaders = /** @class */ (function (_super) {
    __extends(PutCancelRefundHeaders, _super);
    function PutCancelRefundHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], PutCancelRefundHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], PutCancelRefundHeaders.prototype, "zuoraTrackId", void 0);
    return PutCancelRefundHeaders;
}(utils_1.SpeakeasyBase));
exports.PutCancelRefundHeaders = PutCancelRefundHeaders;
var PutCancelRefundRequest = /** @class */ (function (_super) {
    __extends(PutCancelRefundRequest, _super);
    function PutCancelRefundRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutCancelRefundPathParams)
    ], PutCancelRefundRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutCancelRefundHeaders)
    ], PutCancelRefundRequest.prototype, "headers", void 0);
    return PutCancelRefundRequest;
}(utils_1.SpeakeasyBase));
exports.PutCancelRefundRequest = PutCancelRefundRequest;
var PutCancelRefundResponse = /** @class */ (function (_super) {
    __extends(PutCancelRefundResponse, _super);
    function PutCancelRefundResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutCancelRefundResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutCancelRefundResponse.prototype, "getRefundType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutCancelRefundResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutCancelRefundResponse.prototype, "statusCode", void 0);
    return PutCancelRefundResponse;
}(utils_1.SpeakeasyBase));
exports.PutCancelRefundResponse = PutCancelRefundResponse;
