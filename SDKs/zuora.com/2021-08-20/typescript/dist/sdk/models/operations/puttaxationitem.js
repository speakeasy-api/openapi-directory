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
exports.PutTaxationItemResponse = exports.PutTaxationItemRequest = exports.PutTaxationItemHeaders = exports.PutTaxationItemPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PutTaxationItemPathParams = /** @class */ (function (_super) {
    __extends(PutTaxationItemPathParams, _super);
    function PutTaxationItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutTaxationItemPathParams.prototype, "id", void 0);
    return PutTaxationItemPathParams;
}(utils_1.SpeakeasyBase));
exports.PutTaxationItemPathParams = PutTaxationItemPathParams;
var PutTaxationItemHeaders = /** @class */ (function (_super) {
    __extends(PutTaxationItemHeaders, _super);
    function PutTaxationItemHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], PutTaxationItemHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], PutTaxationItemHeaders.prototype, "zuoraTrackId", void 0);
    return PutTaxationItemHeaders;
}(utils_1.SpeakeasyBase));
exports.PutTaxationItemHeaders = PutTaxationItemHeaders;
var PutTaxationItemRequest = /** @class */ (function (_super) {
    __extends(PutTaxationItemRequest, _super);
    function PutTaxationItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTaxationItemPathParams)
    ], PutTaxationItemRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTaxationItemHeaders)
    ], PutTaxationItemRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PutTaxationItemRequest.prototype, "request", void 0);
    return PutTaxationItemRequest;
}(utils_1.SpeakeasyBase));
exports.PutTaxationItemRequest = PutTaxationItemRequest;
var PutTaxationItemResponse = /** @class */ (function (_super) {
    __extends(PutTaxationItemResponse, _super);
    function PutTaxationItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutTaxationItemResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutTaxationItemResponse.prototype, "getTaxationItemType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutTaxationItemResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutTaxationItemResponse.prototype, "statusCode", void 0);
    return PutTaxationItemResponse;
}(utils_1.SpeakeasyBase));
exports.PutTaxationItemResponse = PutTaxationItemResponse;
