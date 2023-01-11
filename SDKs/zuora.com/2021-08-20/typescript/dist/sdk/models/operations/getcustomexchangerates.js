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
exports.GetCustomExchangeRatesResponse = exports.GetCustomExchangeRatesRequest = exports.GetCustomExchangeRatesHeaders = exports.GetCustomExchangeRatesQueryParams = exports.GetCustomExchangeRatesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetCustomExchangeRatesPathParams = /** @class */ (function (_super) {
    __extends(GetCustomExchangeRatesPathParams, _super);
    function GetCustomExchangeRatesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=currency" }),
        __metadata("design:type", String)
    ], GetCustomExchangeRatesPathParams.prototype, "currency", void 0);
    return GetCustomExchangeRatesPathParams;
}(utils_1.SpeakeasyBase));
exports.GetCustomExchangeRatesPathParams = GetCustomExchangeRatesPathParams;
var GetCustomExchangeRatesQueryParams = /** @class */ (function (_super) {
    __extends(GetCustomExchangeRatesQueryParams, _super);
    function GetCustomExchangeRatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", String)
    ], GetCustomExchangeRatesQueryParams.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", String)
    ], GetCustomExchangeRatesQueryParams.prototype, "startDate", void 0);
    return GetCustomExchangeRatesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetCustomExchangeRatesQueryParams = GetCustomExchangeRatesQueryParams;
var GetCustomExchangeRatesHeaders = /** @class */ (function (_super) {
    __extends(GetCustomExchangeRatesHeaders, _super);
    function GetCustomExchangeRatesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetCustomExchangeRatesHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetCustomExchangeRatesHeaders.prototype, "zuoraTrackId", void 0);
    return GetCustomExchangeRatesHeaders;
}(utils_1.SpeakeasyBase));
exports.GetCustomExchangeRatesHeaders = GetCustomExchangeRatesHeaders;
var GetCustomExchangeRatesRequest = /** @class */ (function (_super) {
    __extends(GetCustomExchangeRatesRequest, _super);
    function GetCustomExchangeRatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCustomExchangeRatesPathParams)
    ], GetCustomExchangeRatesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCustomExchangeRatesQueryParams)
    ], GetCustomExchangeRatesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCustomExchangeRatesHeaders)
    ], GetCustomExchangeRatesRequest.prototype, "headers", void 0);
    return GetCustomExchangeRatesRequest;
}(utils_1.SpeakeasyBase));
exports.GetCustomExchangeRatesRequest = GetCustomExchangeRatesRequest;
var GetCustomExchangeRatesResponse = /** @class */ (function (_super) {
    __extends(GetCustomExchangeRatesResponse, _super);
    function GetCustomExchangeRatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCustomExchangeRatesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetCustomExchangeRatesType)
    ], GetCustomExchangeRatesResponse.prototype, "getCustomExchangeRatesType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetCustomExchangeRatesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCustomExchangeRatesResponse.prototype, "statusCode", void 0);
    return GetCustomExchangeRatesResponse;
}(utils_1.SpeakeasyBase));
exports.GetCustomExchangeRatesResponse = GetCustomExchangeRatesResponse;
