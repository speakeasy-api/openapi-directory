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
exports.GetRetrieveAllPaymentsResponse = exports.GetRetrieveAllPaymentsRequest = exports.GetRetrieveAllPaymentsHeaders = exports.GetRetrieveAllPaymentsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetRetrieveAllPaymentsQueryParams = /** @class */ (function (_super) {
    __extends(GetRetrieveAllPaymentsQueryParams, _super);
    function GetRetrieveAllPaymentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=accountId" }),
        __metadata("design:type", String)
    ], GetRetrieveAllPaymentsQueryParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=amount" }),
        __metadata("design:type", Number)
    ], GetRetrieveAllPaymentsQueryParams.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=appliedAmount" }),
        __metadata("design:type", Number)
    ], GetRetrieveAllPaymentsQueryParams.prototype, "appliedAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=createdById" }),
        __metadata("design:type", String)
    ], GetRetrieveAllPaymentsQueryParams.prototype, "createdById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=createdDate" }),
        __metadata("design:type", Date)
    ], GetRetrieveAllPaymentsQueryParams.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=creditBalanceAmount" }),
        __metadata("design:type", Number)
    ], GetRetrieveAllPaymentsQueryParams.prototype, "creditBalanceAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=currency" }),
        __metadata("design:type", String)
    ], GetRetrieveAllPaymentsQueryParams.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=effectiveDate" }),
        __metadata("design:type", Date)
    ], GetRetrieveAllPaymentsQueryParams.prototype, "effectiveDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=number" }),
        __metadata("design:type", String)
    ], GetRetrieveAllPaymentsQueryParams.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetRetrieveAllPaymentsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=refundAmount" }),
        __metadata("design:type", Number)
    ], GetRetrieveAllPaymentsQueryParams.prototype, "refundAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetRetrieveAllPaymentsQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetRetrieveAllPaymentsQueryParams.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetRetrieveAllPaymentsQueryParams.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=unappliedAmount" }),
        __metadata("design:type", Number)
    ], GetRetrieveAllPaymentsQueryParams.prototype, "unappliedAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=updatedById" }),
        __metadata("design:type", String)
    ], GetRetrieveAllPaymentsQueryParams.prototype, "updatedById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=updatedDate" }),
        __metadata("design:type", Date)
    ], GetRetrieveAllPaymentsQueryParams.prototype, "updatedDate", void 0);
    return GetRetrieveAllPaymentsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetRetrieveAllPaymentsQueryParams = GetRetrieveAllPaymentsQueryParams;
var GetRetrieveAllPaymentsHeaders = /** @class */ (function (_super) {
    __extends(GetRetrieveAllPaymentsHeaders, _super);
    function GetRetrieveAllPaymentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetRetrieveAllPaymentsHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetRetrieveAllPaymentsHeaders.prototype, "zuoraTrackId", void 0);
    return GetRetrieveAllPaymentsHeaders;
}(utils_1.SpeakeasyBase));
exports.GetRetrieveAllPaymentsHeaders = GetRetrieveAllPaymentsHeaders;
var GetRetrieveAllPaymentsRequest = /** @class */ (function (_super) {
    __extends(GetRetrieveAllPaymentsRequest, _super);
    function GetRetrieveAllPaymentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRetrieveAllPaymentsQueryParams)
    ], GetRetrieveAllPaymentsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRetrieveAllPaymentsHeaders)
    ], GetRetrieveAllPaymentsRequest.prototype, "headers", void 0);
    return GetRetrieveAllPaymentsRequest;
}(utils_1.SpeakeasyBase));
exports.GetRetrieveAllPaymentsRequest = GetRetrieveAllPaymentsRequest;
var GetRetrieveAllPaymentsResponse = /** @class */ (function (_super) {
    __extends(GetRetrieveAllPaymentsResponse, _super);
    function GetRetrieveAllPaymentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetRetrieveAllPaymentsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetRetrieveAllPaymentsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PaymentCollectionResponseType)
    ], GetRetrieveAllPaymentsResponse.prototype, "paymentCollectionResponseType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetRetrieveAllPaymentsResponse.prototype, "statusCode", void 0);
    return GetRetrieveAllPaymentsResponse;
}(utils_1.SpeakeasyBase));
exports.GetRetrieveAllPaymentsResponse = GetRetrieveAllPaymentsResponse;
