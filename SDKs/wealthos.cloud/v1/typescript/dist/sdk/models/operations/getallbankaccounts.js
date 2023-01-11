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
exports.GetAllBankAccountsResponse = exports.GetAllBankAccountsRequest = exports.GetAllBankAccounts200ApplicationJson = exports.GetAllBankAccountsSecurity = exports.GetAllBankAccountsHeaders = exports.GetAllBankAccountsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetAllBankAccountsQueryParams = /** @class */ (function (_super) {
    __extends(GetAllBankAccountsQueryParams, _super);
    function GetAllBankAccountsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=investor_id" }),
        __metadata("design:type", String)
    ], GetAllBankAccountsQueryParams.prototype, "investorId", void 0);
    return GetAllBankAccountsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetAllBankAccountsQueryParams = GetAllBankAccountsQueryParams;
var GetAllBankAccountsHeaders = /** @class */ (function (_super) {
    __extends(GetAllBankAccountsHeaders, _super);
    function GetAllBankAccountsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], GetAllBankAccountsHeaders.prototype, "xApiKey", void 0);
    return GetAllBankAccountsHeaders;
}(utils_1.SpeakeasyBase));
exports.GetAllBankAccountsHeaders = GetAllBankAccountsHeaders;
var GetAllBankAccountsSecurity = /** @class */ (function (_super) {
    __extends(GetAllBankAccountsSecurity, _super);
    function GetAllBankAccountsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiSecretKey)
    ], GetAllBankAccountsSecurity.prototype, "apiSecretKey", void 0);
    return GetAllBankAccountsSecurity;
}(utils_1.SpeakeasyBase));
exports.GetAllBankAccountsSecurity = GetAllBankAccountsSecurity;
// GetAllBankAccounts200ApplicationJson
/**
 * Array of bank accounts
**/
var GetAllBankAccounts200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAllBankAccounts200ApplicationJson, _super);
    function GetAllBankAccounts200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bankAccounts" }),
        __metadata("design:type", Array)
    ], GetAllBankAccounts200ApplicationJson.prototype, "bankAccounts", void 0);
    return GetAllBankAccounts200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetAllBankAccounts200ApplicationJson = GetAllBankAccounts200ApplicationJson;
var GetAllBankAccountsRequest = /** @class */ (function (_super) {
    __extends(GetAllBankAccountsRequest, _super);
    function GetAllBankAccountsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllBankAccountsQueryParams)
    ], GetAllBankAccountsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllBankAccountsHeaders)
    ], GetAllBankAccountsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllBankAccountsSecurity)
    ], GetAllBankAccountsRequest.prototype, "security", void 0);
    return GetAllBankAccountsRequest;
}(utils_1.SpeakeasyBase));
exports.GetAllBankAccountsRequest = GetAllBankAccountsRequest;
var GetAllBankAccountsResponse = /** @class */ (function (_super) {
    __extends(GetAllBankAccountsResponse, _super);
    function GetAllBankAccountsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAllBankAccountsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAllBankAccountsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllBankAccounts200ApplicationJson)
    ], GetAllBankAccountsResponse.prototype, "getAllBankAccounts200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllBankAccountsResponse.prototype, "getAllBankAccounts400ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllBankAccountsResponse.prototype, "getAllBankAccounts401ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllBankAccountsResponse.prototype, "getAllBankAccounts403ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllBankAccountsResponse.prototype, "getAllBankAccounts404ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllBankAccountsResponse.prototype, "getAllBankAccounts409ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllBankAccountsResponse.prototype, "getAllBankAccounts429ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllBankAccountsResponse.prototype, "getAllBankAccounts500ApplicationJSONAny", void 0);
    return GetAllBankAccountsResponse;
}(utils_1.SpeakeasyBase));
exports.GetAllBankAccountsResponse = GetAllBankAccountsResponse;
