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
exports.ObjectGetProductFeatureResponse = exports.ObjectGetProductFeatureRequest = exports.ObjectGetProductFeatureHeaders = exports.ObjectGetProductFeatureQueryParams = exports.ObjectGetProductFeaturePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ObjectGetProductFeaturePathParams = /** @class */ (function (_super) {
    __extends(ObjectGetProductFeaturePathParams, _super);
    function ObjectGetProductFeaturePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ObjectGetProductFeaturePathParams.prototype, "id", void 0);
    return ObjectGetProductFeaturePathParams;
}(utils_1.SpeakeasyBase));
exports.ObjectGetProductFeaturePathParams = ObjectGetProductFeaturePathParams;
var ObjectGetProductFeatureQueryParams = /** @class */ (function (_super) {
    __extends(ObjectGetProductFeatureQueryParams, _super);
    function ObjectGetProductFeatureQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ObjectGetProductFeatureQueryParams.prototype, "fields", void 0);
    return ObjectGetProductFeatureQueryParams;
}(utils_1.SpeakeasyBase));
exports.ObjectGetProductFeatureQueryParams = ObjectGetProductFeatureQueryParams;
var ObjectGetProductFeatureHeaders = /** @class */ (function (_super) {
    __extends(ObjectGetProductFeatureHeaders, _super);
    function ObjectGetProductFeatureHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], ObjectGetProductFeatureHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], ObjectGetProductFeatureHeaders.prototype, "zuoraTrackId", void 0);
    return ObjectGetProductFeatureHeaders;
}(utils_1.SpeakeasyBase));
exports.ObjectGetProductFeatureHeaders = ObjectGetProductFeatureHeaders;
var ObjectGetProductFeatureRequest = /** @class */ (function (_super) {
    __extends(ObjectGetProductFeatureRequest, _super);
    function ObjectGetProductFeatureRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ObjectGetProductFeaturePathParams)
    ], ObjectGetProductFeatureRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ObjectGetProductFeatureQueryParams)
    ], ObjectGetProductFeatureRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ObjectGetProductFeatureHeaders)
    ], ObjectGetProductFeatureRequest.prototype, "headers", void 0);
    return ObjectGetProductFeatureRequest;
}(utils_1.SpeakeasyBase));
exports.ObjectGetProductFeatureRequest = ObjectGetProductFeatureRequest;
var ObjectGetProductFeatureResponse = /** @class */ (function (_super) {
    __extends(ObjectGetProductFeatureResponse, _super);
    function ObjectGetProductFeatureResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ObjectGetProductFeatureResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ObjectGetProductFeatureResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ObjectGetProductFeatureResponse.prototype, "proxyGetProductFeature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ProxyNoDataResponse)
    ], ObjectGetProductFeatureResponse.prototype, "proxyNoDataResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ProxyUnauthorizedResponse)
    ], ObjectGetProductFeatureResponse.prototype, "proxyUnauthorizedResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ObjectGetProductFeatureResponse.prototype, "statusCode", void 0);
    return ObjectGetProductFeatureResponse;
}(utils_1.SpeakeasyBase));
exports.ObjectGetProductFeatureResponse = ObjectGetProductFeatureResponse;
