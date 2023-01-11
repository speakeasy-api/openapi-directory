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
exports.GetSubscriptionsByKeyResponse = exports.GetSubscriptionsByKeyRequest = exports.GetSubscriptionsByKeyHeaders = exports.GetSubscriptionsByKeyQueryParams = exports.GetSubscriptionsByKeyPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetSubscriptionsByKeyPathParams = /** @class */ (function (_super) {
    __extends(GetSubscriptionsByKeyPathParams, _super);
    function GetSubscriptionsByKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=subscription-key" }),
        __metadata("design:type", String)
    ], GetSubscriptionsByKeyPathParams.prototype, "subscriptionKey", void 0);
    return GetSubscriptionsByKeyPathParams;
}(utils_1.SpeakeasyBase));
exports.GetSubscriptionsByKeyPathParams = GetSubscriptionsByKeyPathParams;
var GetSubscriptionsByKeyQueryParams = /** @class */ (function (_super) {
    __extends(GetSubscriptionsByKeyQueryParams, _super);
    function GetSubscriptionsByKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=charge-detail" }),
        __metadata("design:type", String)
    ], GetSubscriptionsByKeyQueryParams.prototype, "chargeDetail", void 0);
    return GetSubscriptionsByKeyQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSubscriptionsByKeyQueryParams = GetSubscriptionsByKeyQueryParams;
var GetSubscriptionsByKeyHeaders = /** @class */ (function (_super) {
    __extends(GetSubscriptionsByKeyHeaders, _super);
    function GetSubscriptionsByKeyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetSubscriptionsByKeyHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetSubscriptionsByKeyHeaders.prototype, "zuoraTrackId", void 0);
    return GetSubscriptionsByKeyHeaders;
}(utils_1.SpeakeasyBase));
exports.GetSubscriptionsByKeyHeaders = GetSubscriptionsByKeyHeaders;
var GetSubscriptionsByKeyRequest = /** @class */ (function (_super) {
    __extends(GetSubscriptionsByKeyRequest, _super);
    function GetSubscriptionsByKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSubscriptionsByKeyPathParams)
    ], GetSubscriptionsByKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSubscriptionsByKeyQueryParams)
    ], GetSubscriptionsByKeyRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSubscriptionsByKeyHeaders)
    ], GetSubscriptionsByKeyRequest.prototype, "headers", void 0);
    return GetSubscriptionsByKeyRequest;
}(utils_1.SpeakeasyBase));
exports.GetSubscriptionsByKeyRequest = GetSubscriptionsByKeyRequest;
var GetSubscriptionsByKeyResponse = /** @class */ (function (_super) {
    __extends(GetSubscriptionsByKeyResponse, _super);
    function GetSubscriptionsByKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSubscriptionsByKeyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetSubscriptionsByKeyResponse.prototype, "getSubscriptionTypeWithSuccess", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetSubscriptionsByKeyResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSubscriptionsByKeyResponse.prototype, "statusCode", void 0);
    return GetSubscriptionsByKeyResponse;
}(utils_1.SpeakeasyBase));
exports.GetSubscriptionsByKeyResponse = GetSubscriptionsByKeyResponse;
