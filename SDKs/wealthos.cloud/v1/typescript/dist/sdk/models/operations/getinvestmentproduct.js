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
exports.GetInvestmentProductResponse = exports.GetInvestmentProductRequest = exports.GetInvestmentProductSecurity = exports.GetInvestmentProductHeaders = exports.GetInvestmentProductPathParams = exports.GetInvestmentProductCategoryIdEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetInvestmentProductCategoryIdEnum;
(function (GetInvestmentProductCategoryIdEnum) {
    GetInvestmentProductCategoryIdEnum["Funds"] = "funds";
})(GetInvestmentProductCategoryIdEnum = exports.GetInvestmentProductCategoryIdEnum || (exports.GetInvestmentProductCategoryIdEnum = {}));
var GetInvestmentProductPathParams = /** @class */ (function (_super) {
    __extends(GetInvestmentProductPathParams, _super);
    function GetInvestmentProductPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=category_id" }),
        __metadata("design:type", String)
    ], GetInvestmentProductPathParams.prototype, "categoryId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=investment_product_id" }),
        __metadata("design:type", String)
    ], GetInvestmentProductPathParams.prototype, "investmentProductId", void 0);
    return GetInvestmentProductPathParams;
}(utils_1.SpeakeasyBase));
exports.GetInvestmentProductPathParams = GetInvestmentProductPathParams;
var GetInvestmentProductHeaders = /** @class */ (function (_super) {
    __extends(GetInvestmentProductHeaders, _super);
    function GetInvestmentProductHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], GetInvestmentProductHeaders.prototype, "xApiKey", void 0);
    return GetInvestmentProductHeaders;
}(utils_1.SpeakeasyBase));
exports.GetInvestmentProductHeaders = GetInvestmentProductHeaders;
var GetInvestmentProductSecurity = /** @class */ (function (_super) {
    __extends(GetInvestmentProductSecurity, _super);
    function GetInvestmentProductSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiSecretKey)
    ], GetInvestmentProductSecurity.prototype, "apiSecretKey", void 0);
    return GetInvestmentProductSecurity;
}(utils_1.SpeakeasyBase));
exports.GetInvestmentProductSecurity = GetInvestmentProductSecurity;
var GetInvestmentProductRequest = /** @class */ (function (_super) {
    __extends(GetInvestmentProductRequest, _super);
    function GetInvestmentProductRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetInvestmentProductPathParams)
    ], GetInvestmentProductRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetInvestmentProductHeaders)
    ], GetInvestmentProductRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetInvestmentProductSecurity)
    ], GetInvestmentProductRequest.prototype, "security", void 0);
    return GetInvestmentProductRequest;
}(utils_1.SpeakeasyBase));
exports.GetInvestmentProductRequest = GetInvestmentProductRequest;
var GetInvestmentProductResponse = /** @class */ (function (_super) {
    __extends(GetInvestmentProductResponse, _super);
    function GetInvestmentProductResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetInvestmentProductResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetInvestmentProductResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetInvestmentProductResponse.prototype, "getInvestmentProduct200ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetInvestmentProductResponse.prototype, "getInvestmentProduct401ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetInvestmentProductResponse.prototype, "getInvestmentProduct403ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetInvestmentProductResponse.prototype, "getInvestmentProduct404ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetInvestmentProductResponse.prototype, "getInvestmentProduct429ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetInvestmentProductResponse.prototype, "getInvestmentProduct500ApplicationJSONAny", void 0);
    return GetInvestmentProductResponse;
}(utils_1.SpeakeasyBase));
exports.GetInvestmentProductResponse = GetInvestmentProductResponse;
