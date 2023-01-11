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
exports.ObjectGetRefundTransactionLogResponse = exports.ObjectGetRefundTransactionLogRequest = exports.ObjectGetRefundTransactionLogHeaders = exports.ObjectGetRefundTransactionLogQueryParams = exports.ObjectGetRefundTransactionLogPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ObjectGetRefundTransactionLogPathParams = /** @class */ (function (_super) {
    __extends(ObjectGetRefundTransactionLogPathParams, _super);
    function ObjectGetRefundTransactionLogPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ObjectGetRefundTransactionLogPathParams.prototype, "id", void 0);
    return ObjectGetRefundTransactionLogPathParams;
}(utils_1.SpeakeasyBase));
exports.ObjectGetRefundTransactionLogPathParams = ObjectGetRefundTransactionLogPathParams;
var ObjectGetRefundTransactionLogQueryParams = /** @class */ (function (_super) {
    __extends(ObjectGetRefundTransactionLogQueryParams, _super);
    function ObjectGetRefundTransactionLogQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ObjectGetRefundTransactionLogQueryParams.prototype, "fields", void 0);
    return ObjectGetRefundTransactionLogQueryParams;
}(utils_1.SpeakeasyBase));
exports.ObjectGetRefundTransactionLogQueryParams = ObjectGetRefundTransactionLogQueryParams;
var ObjectGetRefundTransactionLogHeaders = /** @class */ (function (_super) {
    __extends(ObjectGetRefundTransactionLogHeaders, _super);
    function ObjectGetRefundTransactionLogHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], ObjectGetRefundTransactionLogHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], ObjectGetRefundTransactionLogHeaders.prototype, "zuoraTrackId", void 0);
    return ObjectGetRefundTransactionLogHeaders;
}(utils_1.SpeakeasyBase));
exports.ObjectGetRefundTransactionLogHeaders = ObjectGetRefundTransactionLogHeaders;
var ObjectGetRefundTransactionLogRequest = /** @class */ (function (_super) {
    __extends(ObjectGetRefundTransactionLogRequest, _super);
    function ObjectGetRefundTransactionLogRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ObjectGetRefundTransactionLogPathParams)
    ], ObjectGetRefundTransactionLogRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ObjectGetRefundTransactionLogQueryParams)
    ], ObjectGetRefundTransactionLogRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ObjectGetRefundTransactionLogHeaders)
    ], ObjectGetRefundTransactionLogRequest.prototype, "headers", void 0);
    return ObjectGetRefundTransactionLogRequest;
}(utils_1.SpeakeasyBase));
exports.ObjectGetRefundTransactionLogRequest = ObjectGetRefundTransactionLogRequest;
var ObjectGetRefundTransactionLogResponse = /** @class */ (function (_super) {
    __extends(ObjectGetRefundTransactionLogResponse, _super);
    function ObjectGetRefundTransactionLogResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ObjectGetRefundTransactionLogResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ObjectGetRefundTransactionLogResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ProxyGetRefundTransactionLog)
    ], ObjectGetRefundTransactionLogResponse.prototype, "proxyGetRefundTransactionLog", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ProxyNoDataResponse)
    ], ObjectGetRefundTransactionLogResponse.prototype, "proxyNoDataResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ProxyUnauthorizedResponse)
    ], ObjectGetRefundTransactionLogResponse.prototype, "proxyUnauthorizedResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ObjectGetRefundTransactionLogResponse.prototype, "statusCode", void 0);
    return ObjectGetRefundTransactionLogResponse;
}(utils_1.SpeakeasyBase));
exports.ObjectGetRefundTransactionLogResponse = ObjectGetRefundTransactionLogResponse;
