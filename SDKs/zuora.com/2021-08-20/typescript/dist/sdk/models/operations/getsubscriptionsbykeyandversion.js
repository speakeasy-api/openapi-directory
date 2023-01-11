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
exports.GetSubscriptionsByKeyAndVersionResponse = exports.GetSubscriptionsByKeyAndVersionRequest = exports.GetSubscriptionsByKeyAndVersionHeaders = exports.GetSubscriptionsByKeyAndVersionQueryParams = exports.GetSubscriptionsByKeyAndVersionPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetSubscriptionsByKeyAndVersionPathParams = /** @class */ (function (_super) {
    __extends(GetSubscriptionsByKeyAndVersionPathParams, _super);
    function GetSubscriptionsByKeyAndVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=subscription-key" }),
        __metadata("design:type", String)
    ], GetSubscriptionsByKeyAndVersionPathParams.prototype, "subscriptionKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", String)
    ], GetSubscriptionsByKeyAndVersionPathParams.prototype, "version", void 0);
    return GetSubscriptionsByKeyAndVersionPathParams;
}(utils_1.SpeakeasyBase));
exports.GetSubscriptionsByKeyAndVersionPathParams = GetSubscriptionsByKeyAndVersionPathParams;
var GetSubscriptionsByKeyAndVersionQueryParams = /** @class */ (function (_super) {
    __extends(GetSubscriptionsByKeyAndVersionQueryParams, _super);
    function GetSubscriptionsByKeyAndVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=charge-detail" }),
        __metadata("design:type", String)
    ], GetSubscriptionsByKeyAndVersionQueryParams.prototype, "chargeDetail", void 0);
    return GetSubscriptionsByKeyAndVersionQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSubscriptionsByKeyAndVersionQueryParams = GetSubscriptionsByKeyAndVersionQueryParams;
var GetSubscriptionsByKeyAndVersionHeaders = /** @class */ (function (_super) {
    __extends(GetSubscriptionsByKeyAndVersionHeaders, _super);
    function GetSubscriptionsByKeyAndVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetSubscriptionsByKeyAndVersionHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetSubscriptionsByKeyAndVersionHeaders.prototype, "zuoraTrackId", void 0);
    return GetSubscriptionsByKeyAndVersionHeaders;
}(utils_1.SpeakeasyBase));
exports.GetSubscriptionsByKeyAndVersionHeaders = GetSubscriptionsByKeyAndVersionHeaders;
var GetSubscriptionsByKeyAndVersionRequest = /** @class */ (function (_super) {
    __extends(GetSubscriptionsByKeyAndVersionRequest, _super);
    function GetSubscriptionsByKeyAndVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSubscriptionsByKeyAndVersionPathParams)
    ], GetSubscriptionsByKeyAndVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSubscriptionsByKeyAndVersionQueryParams)
    ], GetSubscriptionsByKeyAndVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSubscriptionsByKeyAndVersionHeaders)
    ], GetSubscriptionsByKeyAndVersionRequest.prototype, "headers", void 0);
    return GetSubscriptionsByKeyAndVersionRequest;
}(utils_1.SpeakeasyBase));
exports.GetSubscriptionsByKeyAndVersionRequest = GetSubscriptionsByKeyAndVersionRequest;
var GetSubscriptionsByKeyAndVersionResponse = /** @class */ (function (_super) {
    __extends(GetSubscriptionsByKeyAndVersionResponse, _super);
    function GetSubscriptionsByKeyAndVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSubscriptionsByKeyAndVersionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetSubscriptionsByKeyAndVersionResponse.prototype, "getSubscriptionTypeWithSuccess", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetSubscriptionsByKeyAndVersionResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSubscriptionsByKeyAndVersionResponse.prototype, "statusCode", void 0);
    return GetSubscriptionsByKeyAndVersionResponse;
}(utils_1.SpeakeasyBase));
exports.GetSubscriptionsByKeyAndVersionResponse = GetSubscriptionsByKeyAndVersionResponse;
