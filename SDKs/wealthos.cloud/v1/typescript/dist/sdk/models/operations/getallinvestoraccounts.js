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
exports.GetAllinvestorAccountsResponse = exports.GetAllinvestorAccountsRequest = exports.GetAllinvestorAccounts200ApplicationJson = exports.GetAllinvestorAccountsSecurity = exports.GetAllinvestorAccountsHeaders = exports.GetAllinvestorAccountsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetAllinvestorAccountsQueryParams = /** @class */ (function (_super) {
    __extends(GetAllinvestorAccountsQueryParams, _super);
    function GetAllinvestorAccountsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=account_id" }),
        __metadata("design:type", String)
    ], GetAllinvestorAccountsQueryParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=financial_product_id" }),
        __metadata("design:type", String)
    ], GetAllinvestorAccountsQueryParams.prototype, "financialProductId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=investor_id" }),
        __metadata("design:type", String)
    ], GetAllinvestorAccountsQueryParams.prototype, "investorId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_number" }),
        __metadata("design:type", String)
    ], GetAllinvestorAccountsQueryParams.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", String)
    ], GetAllinvestorAccountsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetAllinvestorAccountsQueryParams.prototype, "status", void 0);
    return GetAllinvestorAccountsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetAllinvestorAccountsQueryParams = GetAllinvestorAccountsQueryParams;
var GetAllinvestorAccountsHeaders = /** @class */ (function (_super) {
    __extends(GetAllinvestorAccountsHeaders, _super);
    function GetAllinvestorAccountsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], GetAllinvestorAccountsHeaders.prototype, "xApiKey", void 0);
    return GetAllinvestorAccountsHeaders;
}(utils_1.SpeakeasyBase));
exports.GetAllinvestorAccountsHeaders = GetAllinvestorAccountsHeaders;
var GetAllinvestorAccountsSecurity = /** @class */ (function (_super) {
    __extends(GetAllinvestorAccountsSecurity, _super);
    function GetAllinvestorAccountsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiSecretKey)
    ], GetAllinvestorAccountsSecurity.prototype, "apiSecretKey", void 0);
    return GetAllinvestorAccountsSecurity;
}(utils_1.SpeakeasyBase));
exports.GetAllinvestorAccountsSecurity = GetAllinvestorAccountsSecurity;
// GetAllinvestorAccounts200ApplicationJson
/**
 * Array of investor accounts
**/
var GetAllinvestorAccounts200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAllinvestorAccounts200ApplicationJson, _super);
    function GetAllinvestorAccounts200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=investor_accounts" }),
        __metadata("design:type", Array)
    ], GetAllinvestorAccounts200ApplicationJson.prototype, "investorAccounts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_available" }),
        __metadata("design:type", Boolean)
    ], GetAllinvestorAccounts200ApplicationJson.prototype, "nextPageAvailable", void 0);
    return GetAllinvestorAccounts200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetAllinvestorAccounts200ApplicationJson = GetAllinvestorAccounts200ApplicationJson;
var GetAllinvestorAccountsRequest = /** @class */ (function (_super) {
    __extends(GetAllinvestorAccountsRequest, _super);
    function GetAllinvestorAccountsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllinvestorAccountsQueryParams)
    ], GetAllinvestorAccountsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllinvestorAccountsHeaders)
    ], GetAllinvestorAccountsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllinvestorAccountsSecurity)
    ], GetAllinvestorAccountsRequest.prototype, "security", void 0);
    return GetAllinvestorAccountsRequest;
}(utils_1.SpeakeasyBase));
exports.GetAllinvestorAccountsRequest = GetAllinvestorAccountsRequest;
var GetAllinvestorAccountsResponse = /** @class */ (function (_super) {
    __extends(GetAllinvestorAccountsResponse, _super);
    function GetAllinvestorAccountsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAllinvestorAccountsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAllinvestorAccountsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllinvestorAccounts200ApplicationJson)
    ], GetAllinvestorAccountsResponse.prototype, "getAllinvestorAccounts200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllinvestorAccountsResponse.prototype, "getAllinvestorAccounts400ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllinvestorAccountsResponse.prototype, "getAllinvestorAccounts401ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllinvestorAccountsResponse.prototype, "getAllinvestorAccounts403ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllinvestorAccountsResponse.prototype, "getAllinvestorAccounts404ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllinvestorAccountsResponse.prototype, "getAllinvestorAccounts409ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllinvestorAccountsResponse.prototype, "getAllinvestorAccounts429ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllinvestorAccountsResponse.prototype, "getAllinvestorAccounts500ApplicationJSONAny", void 0);
    return GetAllinvestorAccountsResponse;
}(utils_1.SpeakeasyBase));
exports.GetAllinvestorAccountsResponse = GetAllinvestorAccountsResponse;
