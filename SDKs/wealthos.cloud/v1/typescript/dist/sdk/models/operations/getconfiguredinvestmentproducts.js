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
exports.GetConfiguredInvestmentProductsResponse = exports.GetConfiguredInvestmentProductsRequest = exports.GetConfiguredInvestmentProducts200ApplicationJson = exports.GetConfiguredInvestmentProductsSecurity = exports.GetConfiguredInvestmentProductsHeaders = exports.GetConfiguredInvestmentProductsQueryParams = exports.GetConfiguredInvestmentProductsStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetConfiguredInvestmentProductsStatusEnum;
(function (GetConfiguredInvestmentProductsStatusEnum) {
    GetConfiguredInvestmentProductsStatusEnum["Active"] = "active";
    GetConfiguredInvestmentProductsStatusEnum["Inactive"] = "inactive";
})(GetConfiguredInvestmentProductsStatusEnum = exports.GetConfiguredInvestmentProductsStatusEnum || (exports.GetConfiguredInvestmentProductsStatusEnum = {}));
var GetConfiguredInvestmentProductsQueryParams = /** @class */ (function (_super) {
    __extends(GetConfiguredInvestmentProductsQueryParams, _super);
    function GetConfiguredInvestmentProductsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_number" }),
        __metadata("design:type", String)
    ], GetConfiguredInvestmentProductsQueryParams.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", String)
    ], GetConfiguredInvestmentProductsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetConfiguredInvestmentProductsQueryParams.prototype, "status", void 0);
    return GetConfiguredInvestmentProductsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetConfiguredInvestmentProductsQueryParams = GetConfiguredInvestmentProductsQueryParams;
var GetConfiguredInvestmentProductsHeaders = /** @class */ (function (_super) {
    __extends(GetConfiguredInvestmentProductsHeaders, _super);
    function GetConfiguredInvestmentProductsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], GetConfiguredInvestmentProductsHeaders.prototype, "xApiKey", void 0);
    return GetConfiguredInvestmentProductsHeaders;
}(utils_1.SpeakeasyBase));
exports.GetConfiguredInvestmentProductsHeaders = GetConfiguredInvestmentProductsHeaders;
var GetConfiguredInvestmentProductsSecurity = /** @class */ (function (_super) {
    __extends(GetConfiguredInvestmentProductsSecurity, _super);
    function GetConfiguredInvestmentProductsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiSecretKey)
    ], GetConfiguredInvestmentProductsSecurity.prototype, "apiSecretKey", void 0);
    return GetConfiguredInvestmentProductsSecurity;
}(utils_1.SpeakeasyBase));
exports.GetConfiguredInvestmentProductsSecurity = GetConfiguredInvestmentProductsSecurity;
var GetConfiguredInvestmentProducts200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetConfiguredInvestmentProducts200ApplicationJson, _super);
    function GetConfiguredInvestmentProducts200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=investment_products" }),
        __metadata("design:type", Array)
    ], GetConfiguredInvestmentProducts200ApplicationJson.prototype, "investmentProducts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_available" }),
        __metadata("design:type", Boolean)
    ], GetConfiguredInvestmentProducts200ApplicationJson.prototype, "nextPageAvailable", void 0);
    return GetConfiguredInvestmentProducts200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetConfiguredInvestmentProducts200ApplicationJson = GetConfiguredInvestmentProducts200ApplicationJson;
var GetConfiguredInvestmentProductsRequest = /** @class */ (function (_super) {
    __extends(GetConfiguredInvestmentProductsRequest, _super);
    function GetConfiguredInvestmentProductsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetConfiguredInvestmentProductsQueryParams)
    ], GetConfiguredInvestmentProductsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetConfiguredInvestmentProductsHeaders)
    ], GetConfiguredInvestmentProductsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetConfiguredInvestmentProductsSecurity)
    ], GetConfiguredInvestmentProductsRequest.prototype, "security", void 0);
    return GetConfiguredInvestmentProductsRequest;
}(utils_1.SpeakeasyBase));
exports.GetConfiguredInvestmentProductsRequest = GetConfiguredInvestmentProductsRequest;
var GetConfiguredInvestmentProductsResponse = /** @class */ (function (_super) {
    __extends(GetConfiguredInvestmentProductsResponse, _super);
    function GetConfiguredInvestmentProductsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetConfiguredInvestmentProductsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetConfiguredInvestmentProductsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetConfiguredInvestmentProducts200ApplicationJson)
    ], GetConfiguredInvestmentProductsResponse.prototype, "getConfiguredInvestmentProducts200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetConfiguredInvestmentProductsResponse.prototype, "getConfiguredInvestmentProducts401ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetConfiguredInvestmentProductsResponse.prototype, "getConfiguredInvestmentProducts403ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetConfiguredInvestmentProductsResponse.prototype, "getConfiguredInvestmentProducts404ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetConfiguredInvestmentProductsResponse.prototype, "getConfiguredInvestmentProducts429ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetConfiguredInvestmentProductsResponse.prototype, "getConfiguredInvestmentProducts500ApplicationJSONAny", void 0);
    return GetConfiguredInvestmentProductsResponse;
}(utils_1.SpeakeasyBase));
exports.GetConfiguredInvestmentProductsResponse = GetConfiguredInvestmentProductsResponse;
