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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrderMetricsforEvergreenSubscriptionResponse = exports.GetOrderMetricsforEvergreenSubscriptionRequest = exports.GetOrderMetricsforEvergreenSubscriptionHeaders = exports.GetOrderMetricsforEvergreenSubscriptionQueryParams = exports.GetOrderMetricsforEvergreenSubscriptionPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetOrderMetricsforEvergreenSubscriptionPathParams = /** @class */ (function (_super) {
    __extends(GetOrderMetricsforEvergreenSubscriptionPathParams, _super);
    function GetOrderMetricsforEvergreenSubscriptionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=orderNumber" }),
        __metadata("design:type", String)
    ], GetOrderMetricsforEvergreenSubscriptionPathParams.prototype, "orderNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=subscriptionNumber" }),
        __metadata("design:type", String)
    ], GetOrderMetricsforEvergreenSubscriptionPathParams.prototype, "subscriptionNumber", void 0);
    return GetOrderMetricsforEvergreenSubscriptionPathParams;
}(utils_1.SpeakeasyBase));
exports.GetOrderMetricsforEvergreenSubscriptionPathParams = GetOrderMetricsforEvergreenSubscriptionPathParams;
var GetOrderMetricsforEvergreenSubscriptionQueryParams = /** @class */ (function (_super) {
    __extends(GetOrderMetricsforEvergreenSubscriptionQueryParams, _super);
    function GetOrderMetricsforEvergreenSubscriptionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", Date)
    ], GetOrderMetricsforEvergreenSubscriptionQueryParams.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", Date)
    ], GetOrderMetricsforEvergreenSubscriptionQueryParams.prototype, "startDate", void 0);
    return GetOrderMetricsforEvergreenSubscriptionQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetOrderMetricsforEvergreenSubscriptionQueryParams = GetOrderMetricsforEvergreenSubscriptionQueryParams;
var GetOrderMetricsforEvergreenSubscriptionHeaders = /** @class */ (function (_super) {
    __extends(GetOrderMetricsforEvergreenSubscriptionHeaders, _super);
    function GetOrderMetricsforEvergreenSubscriptionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetOrderMetricsforEvergreenSubscriptionHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetOrderMetricsforEvergreenSubscriptionHeaders.prototype, "zuoraTrackId", void 0);
    return GetOrderMetricsforEvergreenSubscriptionHeaders;
}(utils_1.SpeakeasyBase));
exports.GetOrderMetricsforEvergreenSubscriptionHeaders = GetOrderMetricsforEvergreenSubscriptionHeaders;
var GetOrderMetricsforEvergreenSubscriptionRequest = /** @class */ (function (_super) {
    __extends(GetOrderMetricsforEvergreenSubscriptionRequest, _super);
    function GetOrderMetricsforEvergreenSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOrderMetricsforEvergreenSubscriptionPathParams)
    ], GetOrderMetricsforEvergreenSubscriptionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOrderMetricsforEvergreenSubscriptionQueryParams)
    ], GetOrderMetricsforEvergreenSubscriptionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOrderMetricsforEvergreenSubscriptionHeaders)
    ], GetOrderMetricsforEvergreenSubscriptionRequest.prototype, "headers", void 0);
    return GetOrderMetricsforEvergreenSubscriptionRequest;
}(utils_1.SpeakeasyBase));
exports.GetOrderMetricsforEvergreenSubscriptionRequest = GetOrderMetricsforEvergreenSubscriptionRequest;
var GetOrderMetricsforEvergreenSubscriptionResponse = /** @class */ (function (_super) {
    __extends(GetOrderMetricsforEvergreenSubscriptionResponse, _super);
    function GetOrderMetricsforEvergreenSubscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetOrderMetricsforEvergreenSubscriptionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetOrderResponseForEvergreen)
    ], GetOrderMetricsforEvergreenSubscriptionResponse.prototype, "getOrderResponseForEvergreen", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetOrderMetricsforEvergreenSubscriptionResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetOrderMetricsforEvergreenSubscriptionResponse.prototype, "statusCode", void 0);
    return GetOrderMetricsforEvergreenSubscriptionResponse;
}(utils_1.SpeakeasyBase));
exports.GetOrderMetricsforEvergreenSubscriptionResponse = GetOrderMetricsforEvergreenSubscriptionResponse;
