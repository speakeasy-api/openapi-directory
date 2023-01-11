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
exports.GetAllPaymentsResponse = exports.GetAllPaymentsRequest = exports.GetAllPayments200ApplicationJson = exports.GetAllPaymentsSecurity = exports.GetAllPaymentsHeaders = exports.GetAllPaymentsQueryParams = exports.GetAllPaymentsSortEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetAllPaymentsSortEnum;
(function (GetAllPaymentsSortEnum) {
    GetAllPaymentsSortEnum["Asc"] = "asc";
    GetAllPaymentsSortEnum["Desc"] = "desc";
})(GetAllPaymentsSortEnum = exports.GetAllPaymentsSortEnum || (exports.GetAllPaymentsSortEnum = {}));
var GetAllPaymentsQueryParams = /** @class */ (function (_super) {
    __extends(GetAllPaymentsQueryParams, _super);
    function GetAllPaymentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_number" }),
        __metadata("design:type", String)
    ], GetAllPaymentsQueryParams.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", String)
    ], GetAllPaymentsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=payment_type" }),
        __metadata("design:type", String)
    ], GetAllPaymentsQueryParams.prototype, "paymentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=purpose" }),
        __metadata("design:type", String)
    ], GetAllPaymentsQueryParams.prototype, "purpose", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=service_provider" }),
        __metadata("design:type", String)
    ], GetAllPaymentsQueryParams.prototype, "serviceProvider", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetAllPaymentsQueryParams.prototype, "sort", void 0);
    return GetAllPaymentsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetAllPaymentsQueryParams = GetAllPaymentsQueryParams;
var GetAllPaymentsHeaders = /** @class */ (function (_super) {
    __extends(GetAllPaymentsHeaders, _super);
    function GetAllPaymentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], GetAllPaymentsHeaders.prototype, "xApiKey", void 0);
    return GetAllPaymentsHeaders;
}(utils_1.SpeakeasyBase));
exports.GetAllPaymentsHeaders = GetAllPaymentsHeaders;
var GetAllPaymentsSecurity = /** @class */ (function (_super) {
    __extends(GetAllPaymentsSecurity, _super);
    function GetAllPaymentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiSecretKey)
    ], GetAllPaymentsSecurity.prototype, "apiSecretKey", void 0);
    return GetAllPaymentsSecurity;
}(utils_1.SpeakeasyBase));
exports.GetAllPaymentsSecurity = GetAllPaymentsSecurity;
var GetAllPayments200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAllPayments200ApplicationJson, _super);
    function GetAllPayments200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_available" }),
        __metadata("design:type", Boolean)
    ], GetAllPayments200ApplicationJson.prototype, "nextPageAvailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payments" }),
        __metadata("design:type", Array)
    ], GetAllPayments200ApplicationJson.prototype, "payments", void 0);
    return GetAllPayments200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetAllPayments200ApplicationJson = GetAllPayments200ApplicationJson;
var GetAllPaymentsRequest = /** @class */ (function (_super) {
    __extends(GetAllPaymentsRequest, _super);
    function GetAllPaymentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllPaymentsQueryParams)
    ], GetAllPaymentsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllPaymentsHeaders)
    ], GetAllPaymentsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllPaymentsSecurity)
    ], GetAllPaymentsRequest.prototype, "security", void 0);
    return GetAllPaymentsRequest;
}(utils_1.SpeakeasyBase));
exports.GetAllPaymentsRequest = GetAllPaymentsRequest;
var GetAllPaymentsResponse = /** @class */ (function (_super) {
    __extends(GetAllPaymentsResponse, _super);
    function GetAllPaymentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAllPaymentsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAllPaymentsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAllPayments200ApplicationJson)
    ], GetAllPaymentsResponse.prototype, "getAllPayments200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllPaymentsResponse.prototype, "getAllPayments400ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllPaymentsResponse.prototype, "getAllPayments401ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllPaymentsResponse.prototype, "getAllPayments403ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllPaymentsResponse.prototype, "getAllPayments404ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllPaymentsResponse.prototype, "getAllPayments429ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAllPaymentsResponse.prototype, "getAllPayments500ApplicationJSONAny", void 0);
    return GetAllPaymentsResponse;
}(utils_1.SpeakeasyBase));
exports.GetAllPaymentsResponse = GetAllPaymentsResponse;
