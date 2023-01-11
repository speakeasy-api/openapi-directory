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
exports.GetTransactionsCountResponse = exports.GetTransactionsCountRequest = exports.GetTransactionsCountQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetTransactionsCountQueryParams = /** @class */ (function (_super) {
    __extends(GetTransactionsCountQueryParams, _super);
    function GetTransactionsCountQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=accountId" }),
        __metadata("design:type", String)
    ], GetTransactionsCountQueryParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=baseType" }),
        __metadata("design:type", String)
    ], GetTransactionsCountQueryParams.prototype, "baseType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=categoryId" }),
        __metadata("design:type", String)
    ], GetTransactionsCountQueryParams.prototype, "categoryId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=categoryType" }),
        __metadata("design:type", String)
    ], GetTransactionsCountQueryParams.prototype, "categoryType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=container" }),
        __metadata("design:type", String)
    ], GetTransactionsCountQueryParams.prototype, "container", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=detailCategoryId" }),
        __metadata("design:type", String)
    ], GetTransactionsCountQueryParams.prototype, "detailCategoryId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fromDate" }),
        __metadata("design:type", String)
    ], GetTransactionsCountQueryParams.prototype, "fromDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=highLevelCategoryId" }),
        __metadata("design:type", String)
    ], GetTransactionsCountQueryParams.prototype, "highLevelCategoryId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=keyword" }),
        __metadata("design:type", String)
    ], GetTransactionsCountQueryParams.prototype, "keyword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=toDate" }),
        __metadata("design:type", String)
    ], GetTransactionsCountQueryParams.prototype, "toDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetTransactionsCountQueryParams.prototype, "type", void 0);
    return GetTransactionsCountQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetTransactionsCountQueryParams = GetTransactionsCountQueryParams;
var GetTransactionsCountRequest = /** @class */ (function (_super) {
    __extends(GetTransactionsCountRequest, _super);
    function GetTransactionsCountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTransactionsCountQueryParams)
    ], GetTransactionsCountRequest.prototype, "queryParams", void 0);
    return GetTransactionsCountRequest;
}(utils_1.SpeakeasyBase));
exports.GetTransactionsCountRequest = GetTransactionsCountRequest;
var GetTransactionsCountResponse = /** @class */ (function (_super) {
    __extends(GetTransactionsCountResponse, _super);
    function GetTransactionsCountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTransactionsCountResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTransactionsCountResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.TransactionCountResponse)
    ], GetTransactionsCountResponse.prototype, "transactionCountResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.YodleeError)
    ], GetTransactionsCountResponse.prototype, "yodleeError", void 0);
    return GetTransactionsCountResponse;
}(utils_1.SpeakeasyBase));
exports.GetTransactionsCountResponse = GetTransactionsCountResponse;
