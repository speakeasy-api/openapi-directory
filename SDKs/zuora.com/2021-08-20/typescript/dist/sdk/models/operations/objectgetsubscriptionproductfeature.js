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
exports.ObjectGetSubscriptionProductFeatureResponse = exports.ObjectGetSubscriptionProductFeatureRequest = exports.ObjectGetSubscriptionProductFeatureHeaders = exports.ObjectGetSubscriptionProductFeatureQueryParams = exports.ObjectGetSubscriptionProductFeaturePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ObjectGetSubscriptionProductFeaturePathParams = /** @class */ (function (_super) {
    __extends(ObjectGetSubscriptionProductFeaturePathParams, _super);
    function ObjectGetSubscriptionProductFeaturePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ObjectGetSubscriptionProductFeaturePathParams.prototype, "id", void 0);
    return ObjectGetSubscriptionProductFeaturePathParams;
}(utils_1.SpeakeasyBase));
exports.ObjectGetSubscriptionProductFeaturePathParams = ObjectGetSubscriptionProductFeaturePathParams;
var ObjectGetSubscriptionProductFeatureQueryParams = /** @class */ (function (_super) {
    __extends(ObjectGetSubscriptionProductFeatureQueryParams, _super);
    function ObjectGetSubscriptionProductFeatureQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ObjectGetSubscriptionProductFeatureQueryParams.prototype, "fields", void 0);
    return ObjectGetSubscriptionProductFeatureQueryParams;
}(utils_1.SpeakeasyBase));
exports.ObjectGetSubscriptionProductFeatureQueryParams = ObjectGetSubscriptionProductFeatureQueryParams;
var ObjectGetSubscriptionProductFeatureHeaders = /** @class */ (function (_super) {
    __extends(ObjectGetSubscriptionProductFeatureHeaders, _super);
    function ObjectGetSubscriptionProductFeatureHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], ObjectGetSubscriptionProductFeatureHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], ObjectGetSubscriptionProductFeatureHeaders.prototype, "zuoraTrackId", void 0);
    return ObjectGetSubscriptionProductFeatureHeaders;
}(utils_1.SpeakeasyBase));
exports.ObjectGetSubscriptionProductFeatureHeaders = ObjectGetSubscriptionProductFeatureHeaders;
var ObjectGetSubscriptionProductFeatureRequest = /** @class */ (function (_super) {
    __extends(ObjectGetSubscriptionProductFeatureRequest, _super);
    function ObjectGetSubscriptionProductFeatureRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ObjectGetSubscriptionProductFeaturePathParams)
    ], ObjectGetSubscriptionProductFeatureRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ObjectGetSubscriptionProductFeatureQueryParams)
    ], ObjectGetSubscriptionProductFeatureRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ObjectGetSubscriptionProductFeatureHeaders)
    ], ObjectGetSubscriptionProductFeatureRequest.prototype, "headers", void 0);
    return ObjectGetSubscriptionProductFeatureRequest;
}(utils_1.SpeakeasyBase));
exports.ObjectGetSubscriptionProductFeatureRequest = ObjectGetSubscriptionProductFeatureRequest;
var ObjectGetSubscriptionProductFeatureResponse = /** @class */ (function (_super) {
    __extends(ObjectGetSubscriptionProductFeatureResponse, _super);
    function ObjectGetSubscriptionProductFeatureResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ObjectGetSubscriptionProductFeatureResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ObjectGetSubscriptionProductFeatureResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ObjectGetSubscriptionProductFeatureResponse.prototype, "proxyGetSubscriptionProductFeature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ProxyNoDataResponse)
    ], ObjectGetSubscriptionProductFeatureResponse.prototype, "proxyNoDataResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ProxyUnauthorizedResponse)
    ], ObjectGetSubscriptionProductFeatureResponse.prototype, "proxyUnauthorizedResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ObjectGetSubscriptionProductFeatureResponse.prototype, "statusCode", void 0);
    return ObjectGetSubscriptionProductFeatureResponse;
}(utils_1.SpeakeasyBase));
exports.ObjectGetSubscriptionProductFeatureResponse = ObjectGetSubscriptionProductFeatureResponse;
