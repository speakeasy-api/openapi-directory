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
exports.GetBetHistoryResponse = exports.GetBetHistoryRequest = exports.GetBetHistoryHeaders = exports.GetBetHistoryQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetBetHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetBetHistoryQueryParams, _super);
    function GetBetHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=dateFrom" }),
        __metadata("design:type", String)
    ], GetBetHistoryQueryParams.prototype, "dateFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=dateTo" }),
        __metadata("design:type", String)
    ], GetBetHistoryQueryParams.prototype, "dateTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=exclude" }),
        __metadata("design:type", Array)
    ], GetBetHistoryQueryParams.prototype, "exclude", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", Array)
    ], GetBetHistoryQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=include" }),
        __metadata("design:type", Array)
    ], GetBetHistoryQueryParams.prototype, "include", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetBetHistoryQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetBetHistoryQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=settled" }),
        __metadata("design:type", Boolean)
    ], GetBetHistoryQueryParams.prototype, "settled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetBetHistoryQueryParams.prototype, "sort", void 0);
    return GetBetHistoryQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetBetHistoryQueryParams = GetBetHistoryQueryParams;
var GetBetHistoryHeaders = /** @class */ (function (_super) {
    __extends(GetBetHistoryHeaders, _super);
    function GetBetHistoryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=apiKey" }),
        __metadata("design:type", String)
    ], GetBetHistoryHeaders.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=apiSecret" }),
        __metadata("design:type", String)
    ], GetBetHistoryHeaders.prototype, "apiSecret", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=apiTicket" }),
        __metadata("design:type", String)
    ], GetBetHistoryHeaders.prototype, "apiTicket", void 0);
    return GetBetHistoryHeaders;
}(utils_1.SpeakeasyBase));
exports.GetBetHistoryHeaders = GetBetHistoryHeaders;
var GetBetHistoryRequest = /** @class */ (function (_super) {
    __extends(GetBetHistoryRequest, _super);
    function GetBetHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetBetHistoryQueryParams)
    ], GetBetHistoryRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetBetHistoryHeaders)
    ], GetBetHistoryRequest.prototype, "headers", void 0);
    return GetBetHistoryRequest;
}(utils_1.SpeakeasyBase));
exports.GetBetHistoryRequest = GetBetHistoryRequest;
var GetBetHistoryResponse = /** @class */ (function (_super) {
    __extends(GetBetHistoryResponse, _super);
    function GetBetHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetBetHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetBetHistoryResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BetHistoryResponse)
    ], GetBetHistoryResponse.prototype, "betHistoryResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Errors)
    ], GetBetHistoryResponse.prototype, "errors", void 0);
    return GetBetHistoryResponse;
}(utils_1.SpeakeasyBase));
exports.GetBetHistoryResponse = GetBetHistoryResponse;
