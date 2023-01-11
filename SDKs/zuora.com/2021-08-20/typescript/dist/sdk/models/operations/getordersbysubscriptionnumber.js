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
exports.GetOrdersBySubscriptionNumberResponse = exports.GetOrdersBySubscriptionNumberRequest = exports.GetOrdersBySubscriptionNumberHeaders = exports.GetOrdersBySubscriptionNumberQueryParams = exports.GetOrdersBySubscriptionNumberPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetOrdersBySubscriptionNumberPathParams = /** @class */ (function (_super) {
    __extends(GetOrdersBySubscriptionNumberPathParams, _super);
    function GetOrdersBySubscriptionNumberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=subscriptionNumber" }),
        __metadata("design:type", String)
    ], GetOrdersBySubscriptionNumberPathParams.prototype, "subscriptionNumber", void 0);
    return GetOrdersBySubscriptionNumberPathParams;
}(utils_1.SpeakeasyBase));
exports.GetOrdersBySubscriptionNumberPathParams = GetOrdersBySubscriptionNumberPathParams;
var GetOrdersBySubscriptionNumberQueryParams = /** @class */ (function (_super) {
    __extends(GetOrdersBySubscriptionNumberQueryParams, _super);
    function GetOrdersBySubscriptionNumberQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=dateFilterOption" }),
        __metadata("design:type", String)
    ], GetOrdersBySubscriptionNumberQueryParams.prototype, "dateFilterOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", Date)
    ], GetOrdersBySubscriptionNumberQueryParams.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetOrdersBySubscriptionNumberQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetOrdersBySubscriptionNumberQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", Date)
    ], GetOrdersBySubscriptionNumberQueryParams.prototype, "startDate", void 0);
    return GetOrdersBySubscriptionNumberQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetOrdersBySubscriptionNumberQueryParams = GetOrdersBySubscriptionNumberQueryParams;
var GetOrdersBySubscriptionNumberHeaders = /** @class */ (function (_super) {
    __extends(GetOrdersBySubscriptionNumberHeaders, _super);
    function GetOrdersBySubscriptionNumberHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetOrdersBySubscriptionNumberHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetOrdersBySubscriptionNumberHeaders.prototype, "zuoraTrackId", void 0);
    return GetOrdersBySubscriptionNumberHeaders;
}(utils_1.SpeakeasyBase));
exports.GetOrdersBySubscriptionNumberHeaders = GetOrdersBySubscriptionNumberHeaders;
var GetOrdersBySubscriptionNumberRequest = /** @class */ (function (_super) {
    __extends(GetOrdersBySubscriptionNumberRequest, _super);
    function GetOrdersBySubscriptionNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOrdersBySubscriptionNumberPathParams)
    ], GetOrdersBySubscriptionNumberRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOrdersBySubscriptionNumberQueryParams)
    ], GetOrdersBySubscriptionNumberRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOrdersBySubscriptionNumberHeaders)
    ], GetOrdersBySubscriptionNumberRequest.prototype, "headers", void 0);
    return GetOrdersBySubscriptionNumberRequest;
}(utils_1.SpeakeasyBase));
exports.GetOrdersBySubscriptionNumberRequest = GetOrdersBySubscriptionNumberRequest;
var GetOrdersBySubscriptionNumberResponse = /** @class */ (function (_super) {
    __extends(GetOrdersBySubscriptionNumberResponse, _super);
    function GetOrdersBySubscriptionNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetOrdersBySubscriptionNumberResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetOrdersResponse)
    ], GetOrdersBySubscriptionNumberResponse.prototype, "getOrdersResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetOrdersBySubscriptionNumberResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetOrdersBySubscriptionNumberResponse.prototype, "statusCode", void 0);
    return GetOrdersBySubscriptionNumberResponse;
}(utils_1.SpeakeasyBase));
exports.GetOrdersBySubscriptionNumberResponse = GetOrdersBySubscriptionNumberResponse;
