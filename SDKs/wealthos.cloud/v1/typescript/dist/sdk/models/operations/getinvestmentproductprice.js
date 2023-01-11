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
exports.GetInvestmentProductPriceResponse = exports.GetInvestmentProductPriceRequest = exports.GetInvestmentProductPriceSecurity = exports.GetInvestmentProductPriceHeaders = exports.GetInvestmentProductPricePathParams = exports.GetInvestmentProductPriceCategoryIdEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetInvestmentProductPriceCategoryIdEnum;
(function (GetInvestmentProductPriceCategoryIdEnum) {
    GetInvestmentProductPriceCategoryIdEnum["Funds"] = "funds";
})(GetInvestmentProductPriceCategoryIdEnum = exports.GetInvestmentProductPriceCategoryIdEnum || (exports.GetInvestmentProductPriceCategoryIdEnum = {}));
var GetInvestmentProductPricePathParams = /** @class */ (function (_super) {
    __extends(GetInvestmentProductPricePathParams, _super);
    function GetInvestmentProductPricePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=category_id" }),
        __metadata("design:type", String)
    ], GetInvestmentProductPricePathParams.prototype, "categoryId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=investment_product_id" }),
        __metadata("design:type", String)
    ], GetInvestmentProductPricePathParams.prototype, "investmentProductId", void 0);
    return GetInvestmentProductPricePathParams;
}(utils_1.SpeakeasyBase));
exports.GetInvestmentProductPricePathParams = GetInvestmentProductPricePathParams;
var GetInvestmentProductPriceHeaders = /** @class */ (function (_super) {
    __extends(GetInvestmentProductPriceHeaders, _super);
    function GetInvestmentProductPriceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], GetInvestmentProductPriceHeaders.prototype, "xApiKey", void 0);
    return GetInvestmentProductPriceHeaders;
}(utils_1.SpeakeasyBase));
exports.GetInvestmentProductPriceHeaders = GetInvestmentProductPriceHeaders;
var GetInvestmentProductPriceSecurity = /** @class */ (function (_super) {
    __extends(GetInvestmentProductPriceSecurity, _super);
    function GetInvestmentProductPriceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiSecretKey)
    ], GetInvestmentProductPriceSecurity.prototype, "apiSecretKey", void 0);
    return GetInvestmentProductPriceSecurity;
}(utils_1.SpeakeasyBase));
exports.GetInvestmentProductPriceSecurity = GetInvestmentProductPriceSecurity;
var GetInvestmentProductPriceRequest = /** @class */ (function (_super) {
    __extends(GetInvestmentProductPriceRequest, _super);
    function GetInvestmentProductPriceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetInvestmentProductPricePathParams)
    ], GetInvestmentProductPriceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetInvestmentProductPriceHeaders)
    ], GetInvestmentProductPriceRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetInvestmentProductPriceSecurity)
    ], GetInvestmentProductPriceRequest.prototype, "security", void 0);
    return GetInvestmentProductPriceRequest;
}(utils_1.SpeakeasyBase));
exports.GetInvestmentProductPriceRequest = GetInvestmentProductPriceRequest;
var GetInvestmentProductPriceResponse = /** @class */ (function (_super) {
    __extends(GetInvestmentProductPriceResponse, _super);
    function GetInvestmentProductPriceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetInvestmentProductPriceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetInvestmentProductPriceResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetInvestmentProductPriceResponse.prototype, "getInvestmentProductPrice200ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetInvestmentProductPriceResponse.prototype, "getInvestmentProductPrice401ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetInvestmentProductPriceResponse.prototype, "getInvestmentProductPrice403ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetInvestmentProductPriceResponse.prototype, "getInvestmentProductPrice404ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetInvestmentProductPriceResponse.prototype, "getInvestmentProductPrice429ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetInvestmentProductPriceResponse.prototype, "getInvestmentProductPrice500ApplicationJSONAny", void 0);
    return GetInvestmentProductPriceResponse;
}(utils_1.SpeakeasyBase));
exports.GetInvestmentProductPriceResponse = GetInvestmentProductPriceResponse;
