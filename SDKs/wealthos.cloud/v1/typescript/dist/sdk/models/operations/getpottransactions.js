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
exports.GetPotTransactionsResponse = exports.GetPotTransactionsRequest = exports.GetPotTransactionsSecurity = exports.GetPotTransactionsHeaders = exports.GetPotTransactionsQueryParams = exports.GetPotTransactionsSortEnum = exports.GetPotTransactionsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetPotTransactionsPathParams = /** @class */ (function (_super) {
    __extends(GetPotTransactionsPathParams, _super);
    function GetPotTransactionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=pot_id" }),
        __metadata("design:type", String)
    ], GetPotTransactionsPathParams.prototype, "potId", void 0);
    return GetPotTransactionsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetPotTransactionsPathParams = GetPotTransactionsPathParams;
var GetPotTransactionsSortEnum;
(function (GetPotTransactionsSortEnum) {
    GetPotTransactionsSortEnum["Asc"] = "asc";
    GetPotTransactionsSortEnum["Desc"] = "desc";
})(GetPotTransactionsSortEnum = exports.GetPotTransactionsSortEnum || (exports.GetPotTransactionsSortEnum = {}));
var GetPotTransactionsQueryParams = /** @class */ (function (_super) {
    __extends(GetPotTransactionsQueryParams, _super);
    function GetPotTransactionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", String)
    ], GetPotTransactionsQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_number" }),
        __metadata("design:type", String)
    ], GetPotTransactionsQueryParams.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", String)
    ], GetPotTransactionsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetPotTransactionsQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sub_transaction_type" }),
        __metadata("design:type", String)
    ], GetPotTransactionsQueryParams.prototype, "subTransactionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", String)
    ], GetPotTransactionsQueryParams.prototype, "to", void 0);
    return GetPotTransactionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetPotTransactionsQueryParams = GetPotTransactionsQueryParams;
var GetPotTransactionsHeaders = /** @class */ (function (_super) {
    __extends(GetPotTransactionsHeaders, _super);
    function GetPotTransactionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], GetPotTransactionsHeaders.prototype, "xApiKey", void 0);
    return GetPotTransactionsHeaders;
}(utils_1.SpeakeasyBase));
exports.GetPotTransactionsHeaders = GetPotTransactionsHeaders;
var GetPotTransactionsSecurity = /** @class */ (function (_super) {
    __extends(GetPotTransactionsSecurity, _super);
    function GetPotTransactionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiSecretKey)
    ], GetPotTransactionsSecurity.prototype, "apiSecretKey", void 0);
    return GetPotTransactionsSecurity;
}(utils_1.SpeakeasyBase));
exports.GetPotTransactionsSecurity = GetPotTransactionsSecurity;
var GetPotTransactionsRequest = /** @class */ (function (_super) {
    __extends(GetPotTransactionsRequest, _super);
    function GetPotTransactionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPotTransactionsPathParams)
    ], GetPotTransactionsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPotTransactionsQueryParams)
    ], GetPotTransactionsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPotTransactionsHeaders)
    ], GetPotTransactionsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPotTransactionsSecurity)
    ], GetPotTransactionsRequest.prototype, "security", void 0);
    return GetPotTransactionsRequest;
}(utils_1.SpeakeasyBase));
exports.GetPotTransactionsRequest = GetPotTransactionsRequest;
var GetPotTransactionsResponse = /** @class */ (function (_super) {
    __extends(GetPotTransactionsResponse, _super);
    function GetPotTransactionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPotTransactionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPotTransactionsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPotTransactionsResponse.prototype, "getPotTransactions200ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPotTransactionsResponse.prototype, "getPotTransactions401ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPotTransactionsResponse.prototype, "getPotTransactions403ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPotTransactionsResponse.prototype, "getPotTransactions404ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPotTransactionsResponse.prototype, "getPotTransactions429ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPotTransactionsResponse.prototype, "getPotTransactions500ApplicationJSONAny", void 0);
    return GetPotTransactionsResponse;
}(utils_1.SpeakeasyBase));
exports.GetPotTransactionsResponse = GetPotTransactionsResponse;
