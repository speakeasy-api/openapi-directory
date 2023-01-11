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
exports.GetAllFinancialProductsResponse = exports.GetAllFinancialProductsRequest = exports.GetAllFinancialProducts200ApplicationJson = exports.GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts = exports.GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsWithdrawalPreferences = exports.GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInvestmentPreferences = exports.GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInterestPreferences = exports.GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsFlexibleEnum = exports.GetAllFinancialProductsSecurity = exports.GetAllFinancialProductsHeaders = exports.GetAllFinancialProductsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetAllFinancialProductsQueryParams = /** @class */ (function (_super) {
    __extends(GetAllFinancialProductsQueryParams, _super);
    function GetAllFinancialProductsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=product_types" }),
        __metadata("design:type", String)
    ], GetAllFinancialProductsQueryParams.prototype, "productTypes", void 0);
    return GetAllFinancialProductsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetAllFinancialProductsQueryParams = GetAllFinancialProductsQueryParams;
var GetAllFinancialProductsHeaders = /** @class */ (function (_super) {
    __extends(GetAllFinancialProductsHeaders, _super);
    function GetAllFinancialProductsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], GetAllFinancialProductsHeaders.prototype, "xApiKey", void 0);
    return GetAllFinancialProductsHeaders;
}(utils_1.SpeakeasyBase));
exports.GetAllFinancialProductsHeaders = GetAllFinancialProductsHeaders;
var GetAllFinancialProductsSecurity = /** @class */ (function (_super) {
    __extends(GetAllFinancialProductsSecurity, _super);
    function GetAllFinancialProductsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiSecretKey)
    ], GetAllFinancialProductsSecurity.prototype, "apiSecretKey", void 0);
    return GetAllFinancialProductsSecurity;
}(utils_1.SpeakeasyBase));
exports.GetAllFinancialProductsSecurity = GetAllFinancialProductsSecurity;
var GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsFlexibleEnum;
(function (GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsFlexibleEnum) {
    GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsFlexibleEnum["Yes"] = "YES";
    GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsFlexibleEnum["No"] = "NO";
})(GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsFlexibleEnum = exports.GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsFlexibleEnum || (exports.GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsFlexibleEnum = {}));
var GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInterestPreferences = /** @class */ (function (_super) {
    __extends(GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInterestPreferences, _super);
    function GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInterestPreferences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interest_accrual_basis" }),
        __metadata("design:type", String)
    ], GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInterestPreferences.prototype, "interestAccrualBasis", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interest_payment_frequency" }),
        __metadata("design:type", String)
    ], GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInterestPreferences.prototype, "interestPaymentFrequency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pay_interest" }),
        __metadata("design:type", String)
    ], GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInterestPreferences.prototype, "payInterest", void 0);
    return GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInterestPreferences;
}(utils_1.SpeakeasyBase));
exports.GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInterestPreferences = GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInterestPreferences;
var GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInvestmentPreferences = /** @class */ (function (_super) {
    __extends(GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInvestmentPreferences, _super);
    function GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInvestmentPreferences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minimum_one_off_investment" }),
        __metadata("design:type", String)
    ], GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInvestmentPreferences.prototype, "minimumOneOffInvestment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minimum_regular_monthly_investment" }),
        __metadata("design:type", String)
    ], GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInvestmentPreferences.prototype, "minimumRegularMonthlyInvestment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=regular_investment_dates" }),
        __metadata("design:type", Array)
    ], GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInvestmentPreferences.prototype, "regularInvestmentDates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=regular_investment_frequencies" }),
        __metadata("design:type", Array)
    ], GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInvestmentPreferences.prototype, "regularInvestmentFrequencies", void 0);
    return GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInvestmentPreferences;
}(utils_1.SpeakeasyBase));
exports.GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInvestmentPreferences = GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInvestmentPreferences;
var GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsWithdrawalPreferences = /** @class */ (function (_super) {
    __extends(GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsWithdrawalPreferences, _super);
    function GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsWithdrawalPreferences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minimum_one_off_withdrawal" }),
        __metadata("design:type", String)
    ], GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsWithdrawalPreferences.prototype, "minimumOneOffWithdrawal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minimum_regular_monthly_withdrawal" }),
        __metadata("design:type", String)
    ], GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsWithdrawalPreferences.prototype, "minimumRegularMonthlyWithdrawal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=regular_withdrawal_frequencies" }),
        __metadata("design:type", Array)
    ], GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsWithdrawalPreferences.prototype, "regularWithdrawalFrequencies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=regular_withdrawal_payment_dates" }),
        __metadata("design:type", Array)
    ], GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsWithdrawalPreferences.prototype, "regularWithdrawalPaymentDates", void 0);
    return GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsWithdrawalPreferences;
}(utils_1.SpeakeasyBase));
exports.GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsWithdrawalPreferences = GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsWithdrawalPreferences;
var GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts = /** @class */ (function (_super) {
    __extends(GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts, _super);
    function GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additional_cash_currencies" }),
        __metadata("design:type", Array)
    ], GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts.prototype, "additionalCashCurrencies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=availability" }),
        __metadata("design:type", Array)
    ], GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts.prototype, "availability", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dividend_options" }),
        __metadata("design:type", Array)
    ], GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts.prototype, "dividendOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=financial_product_id" }),
        __metadata("design:type", String)
    ], GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts.prototype, "financialProductId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=flexible" }),
        __metadata("design:type", String)
    ], GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts.prototype, "flexible", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interest_preferences" }),
        __metadata("design:type", GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInterestPreferences)
    ], GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts.prototype, "interestPreferences", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=investment_preferences" }),
        __metadata("design:type", GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInvestmentPreferences)
    ], GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts.prototype, "investmentPreferences", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=product_type" }),
        __metadata("design:type", String)
    ], GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts.prototype, "productType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=withdrawal_preferences" }),
        __metadata("design:type", GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsWithdrawalPreferences)
    ], GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts.prototype, "withdrawalPreferences", void 0);
    return GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts;
}(utils_1.SpeakeasyBase));
exports.GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts = GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts;
var GetAllFinancialProducts200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAllFinancialProducts200ApplicationJson, _super);
    function GetAllFinancialProducts200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=financial_products", elemType: GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts }),
        __metadata("design:type", Array)
    ], GetAllFinancialProducts200ApplicationJson.prototype, "financialProducts", void 0);
    return GetAllFinancialProducts200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetAllFinancialProducts200ApplicationJson = GetAllFinancialProducts200ApplicationJson;
var GetAllFinancialProductsRequest = /** @class */ (function (_super) {
    __extends(GetAllFinancialProductsRequest, _super);
    function GetAllFinancialProductsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllFinancialProductsQueryParams)
    ], GetAllFinancialProductsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllFinancialProductsHeaders)
    ], GetAllFinancialProductsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllFinancialProductsSecurity)
    ], GetAllFinancialProductsRequest.prototype, "security", void 0);
    return GetAllFinancialProductsRequest;
}(utils_1.SpeakeasyBase));
exports.GetAllFinancialProductsRequest = GetAllFinancialProductsRequest;
var GetAllFinancialProductsResponse = /** @class */ (function (_super) {
    __extends(GetAllFinancialProductsResponse, _super);
    function GetAllFinancialProductsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAllFinancialProductsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAllFinancialProductsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllFinancialProducts200ApplicationJson)
    ], GetAllFinancialProductsResponse.prototype, "getAllFinancialProducts200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllFinancialProductsResponse.prototype, "getAllFinancialProducts400ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllFinancialProductsResponse.prototype, "getAllFinancialProducts401ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllFinancialProductsResponse.prototype, "getAllFinancialProducts403ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllFinancialProductsResponse.prototype, "getAllFinancialProducts404ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllFinancialProductsResponse.prototype, "getAllFinancialProducts429ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllFinancialProductsResponse.prototype, "getAllFinancialProducts500ApplicationJSONAny", void 0);
    return GetAllFinancialProductsResponse;
}(utils_1.SpeakeasyBase));
exports.GetAllFinancialProductsResponse = GetAllFinancialProductsResponse;
