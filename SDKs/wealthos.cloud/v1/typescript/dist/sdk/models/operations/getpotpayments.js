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
exports.GetPotPaymentsResponse = exports.GetPotPaymentsRequest = exports.GetPotPayments200ApplicationJson = exports.GetPotPaymentsSecurity = exports.GetPotPaymentsHeaders = exports.GetPotPaymentsQueryParams = exports.GetPotPaymentsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetPotPaymentsPathParams = /** @class */ (function (_super) {
    __extends(GetPotPaymentsPathParams, _super);
    function GetPotPaymentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=pot_id" }),
        __metadata("design:type", String)
    ], GetPotPaymentsPathParams.prototype, "potId", void 0);
    return GetPotPaymentsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetPotPaymentsPathParams = GetPotPaymentsPathParams;
var GetPotPaymentsQueryParams = /** @class */ (function (_super) {
    __extends(GetPotPaymentsQueryParams, _super);
    function GetPotPaymentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_number" }),
        __metadata("design:type", String)
    ], GetPotPaymentsQueryParams.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", String)
    ], GetPotPaymentsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=payment_type" }),
        __metadata("design:type", String)
    ], GetPotPaymentsQueryParams.prototype, "paymentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=purpose" }),
        __metadata("design:type", String)
    ], GetPotPaymentsQueryParams.prototype, "purpose", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=service_provider" }),
        __metadata("design:type", String)
    ], GetPotPaymentsQueryParams.prototype, "serviceProvider", void 0);
    return GetPotPaymentsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetPotPaymentsQueryParams = GetPotPaymentsQueryParams;
var GetPotPaymentsHeaders = /** @class */ (function (_super) {
    __extends(GetPotPaymentsHeaders, _super);
    function GetPotPaymentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], GetPotPaymentsHeaders.prototype, "xApiKey", void 0);
    return GetPotPaymentsHeaders;
}(utils_1.SpeakeasyBase));
exports.GetPotPaymentsHeaders = GetPotPaymentsHeaders;
var GetPotPaymentsSecurity = /** @class */ (function (_super) {
    __extends(GetPotPaymentsSecurity, _super);
    function GetPotPaymentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiSecretKey)
    ], GetPotPaymentsSecurity.prototype, "apiSecretKey", void 0);
    return GetPotPaymentsSecurity;
}(utils_1.SpeakeasyBase));
exports.GetPotPaymentsSecurity = GetPotPaymentsSecurity;
var GetPotPayments200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPotPayments200ApplicationJson, _super);
    function GetPotPayments200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_available" }),
        __metadata("design:type", Boolean)
    ], GetPotPayments200ApplicationJson.prototype, "nextPageAvailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payments" }),
        __metadata("design:type", Array)
    ], GetPotPayments200ApplicationJson.prototype, "payments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pot_id" }),
        __metadata("design:type", String)
    ], GetPotPayments200ApplicationJson.prototype, "potId", void 0);
    return GetPotPayments200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetPotPayments200ApplicationJson = GetPotPayments200ApplicationJson;
var GetPotPaymentsRequest = /** @class */ (function (_super) {
    __extends(GetPotPaymentsRequest, _super);
    function GetPotPaymentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPotPaymentsPathParams)
    ], GetPotPaymentsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPotPaymentsQueryParams)
    ], GetPotPaymentsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPotPaymentsHeaders)
    ], GetPotPaymentsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPotPaymentsSecurity)
    ], GetPotPaymentsRequest.prototype, "security", void 0);
    return GetPotPaymentsRequest;
}(utils_1.SpeakeasyBase));
exports.GetPotPaymentsRequest = GetPotPaymentsRequest;
var GetPotPaymentsResponse = /** @class */ (function (_super) {
    __extends(GetPotPaymentsResponse, _super);
    function GetPotPaymentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPotPaymentsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPotPaymentsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPotPayments200ApplicationJson)
    ], GetPotPaymentsResponse.prototype, "getPotPayments200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPotPaymentsResponse.prototype, "getPotPayments401ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPotPaymentsResponse.prototype, "getPotPayments403ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPotPaymentsResponse.prototype, "getPotPayments404ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPotPaymentsResponse.prototype, "getPotPayments429ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPotPaymentsResponse.prototype, "getPotPayments500ApplicationJSONAny", void 0);
    return GetPotPaymentsResponse;
}(utils_1.SpeakeasyBase));
exports.GetPotPaymentsResponse = GetPotPaymentsResponse;
