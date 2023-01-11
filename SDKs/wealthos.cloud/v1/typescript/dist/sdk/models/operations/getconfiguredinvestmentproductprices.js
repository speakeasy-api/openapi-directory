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
exports.GetConfiguredInvestmentProductPricesResponse = exports.GetConfiguredInvestmentProductPricesRequest = exports.GetConfiguredInvestmentProductPrices200ApplicationJson = exports.GetConfiguredInvestmentProductPricesSecurity = exports.GetConfiguredInvestmentProductPricesHeaders = exports.GetConfiguredInvestmentProductPricesQueryParams = exports.GetConfiguredInvestmentProductPricesStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetConfiguredInvestmentProductPricesStatusEnum;
(function (GetConfiguredInvestmentProductPricesStatusEnum) {
    GetConfiguredInvestmentProductPricesStatusEnum["Active"] = "active";
    GetConfiguredInvestmentProductPricesStatusEnum["Inactive"] = "inactive";
})(GetConfiguredInvestmentProductPricesStatusEnum = exports.GetConfiguredInvestmentProductPricesStatusEnum || (exports.GetConfiguredInvestmentProductPricesStatusEnum = {}));
var GetConfiguredInvestmentProductPricesQueryParams = /** @class */ (function (_super) {
    __extends(GetConfiguredInvestmentProductPricesQueryParams, _super);
    function GetConfiguredInvestmentProductPricesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_number" }),
        __metadata("design:type", String)
    ], GetConfiguredInvestmentProductPricesQueryParams.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", String)
    ], GetConfiguredInvestmentProductPricesQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetConfiguredInvestmentProductPricesQueryParams.prototype, "status", void 0);
    return GetConfiguredInvestmentProductPricesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetConfiguredInvestmentProductPricesQueryParams = GetConfiguredInvestmentProductPricesQueryParams;
var GetConfiguredInvestmentProductPricesHeaders = /** @class */ (function (_super) {
    __extends(GetConfiguredInvestmentProductPricesHeaders, _super);
    function GetConfiguredInvestmentProductPricesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], GetConfiguredInvestmentProductPricesHeaders.prototype, "xApiKey", void 0);
    return GetConfiguredInvestmentProductPricesHeaders;
}(utils_1.SpeakeasyBase));
exports.GetConfiguredInvestmentProductPricesHeaders = GetConfiguredInvestmentProductPricesHeaders;
var GetConfiguredInvestmentProductPricesSecurity = /** @class */ (function (_super) {
    __extends(GetConfiguredInvestmentProductPricesSecurity, _super);
    function GetConfiguredInvestmentProductPricesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiSecretKey)
    ], GetConfiguredInvestmentProductPricesSecurity.prototype, "apiSecretKey", void 0);
    return GetConfiguredInvestmentProductPricesSecurity;
}(utils_1.SpeakeasyBase));
exports.GetConfiguredInvestmentProductPricesSecurity = GetConfiguredInvestmentProductPricesSecurity;
var GetConfiguredInvestmentProductPrices200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetConfiguredInvestmentProductPrices200ApplicationJson, _super);
    function GetConfiguredInvestmentProductPrices200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=investment_product_unit_prices" }),
        __metadata("design:type", Array)
    ], GetConfiguredInvestmentProductPrices200ApplicationJson.prototype, "investmentProductUnitPrices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_available" }),
        __metadata("design:type", Boolean)
    ], GetConfiguredInvestmentProductPrices200ApplicationJson.prototype, "nextPageAvailable", void 0);
    return GetConfiguredInvestmentProductPrices200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetConfiguredInvestmentProductPrices200ApplicationJson = GetConfiguredInvestmentProductPrices200ApplicationJson;
var GetConfiguredInvestmentProductPricesRequest = /** @class */ (function (_super) {
    __extends(GetConfiguredInvestmentProductPricesRequest, _super);
    function GetConfiguredInvestmentProductPricesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetConfiguredInvestmentProductPricesQueryParams)
    ], GetConfiguredInvestmentProductPricesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetConfiguredInvestmentProductPricesHeaders)
    ], GetConfiguredInvestmentProductPricesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetConfiguredInvestmentProductPricesSecurity)
    ], GetConfiguredInvestmentProductPricesRequest.prototype, "security", void 0);
    return GetConfiguredInvestmentProductPricesRequest;
}(utils_1.SpeakeasyBase));
exports.GetConfiguredInvestmentProductPricesRequest = GetConfiguredInvestmentProductPricesRequest;
var GetConfiguredInvestmentProductPricesResponse = /** @class */ (function (_super) {
    __extends(GetConfiguredInvestmentProductPricesResponse, _super);
    function GetConfiguredInvestmentProductPricesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetConfiguredInvestmentProductPricesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetConfiguredInvestmentProductPricesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetConfiguredInvestmentProductPrices200ApplicationJson)
    ], GetConfiguredInvestmentProductPricesResponse.prototype, "getConfiguredInvestmentProductPrices200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetConfiguredInvestmentProductPricesResponse.prototype, "getConfiguredInvestmentProductPrices401ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetConfiguredInvestmentProductPricesResponse.prototype, "getConfiguredInvestmentProductPrices403ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetConfiguredInvestmentProductPricesResponse.prototype, "getConfiguredInvestmentProductPrices404ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetConfiguredInvestmentProductPricesResponse.prototype, "getConfiguredInvestmentProductPrices429ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetConfiguredInvestmentProductPricesResponse.prototype, "getConfiguredInvestmentProductPrices500ApplicationJSONAny", void 0);
    return GetConfiguredInvestmentProductPricesResponse;
}(utils_1.SpeakeasyBase));
exports.GetConfiguredInvestmentProductPricesResponse = GetConfiguredInvestmentProductPricesResponse;
