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
exports.GetPotHoldingsResponse = exports.GetPotHoldingsRequest = exports.GetPotHoldingsSecurity = exports.GetPotHoldingsHeaders = exports.GetPotHoldingsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetPotHoldingsPathParams = /** @class */ (function (_super) {
    __extends(GetPotHoldingsPathParams, _super);
    function GetPotHoldingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=pot_id" }),
        __metadata("design:type", String)
    ], GetPotHoldingsPathParams.prototype, "potId", void 0);
    return GetPotHoldingsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetPotHoldingsPathParams = GetPotHoldingsPathParams;
var GetPotHoldingsHeaders = /** @class */ (function (_super) {
    __extends(GetPotHoldingsHeaders, _super);
    function GetPotHoldingsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], GetPotHoldingsHeaders.prototype, "xApiKey", void 0);
    return GetPotHoldingsHeaders;
}(utils_1.SpeakeasyBase));
exports.GetPotHoldingsHeaders = GetPotHoldingsHeaders;
var GetPotHoldingsSecurity = /** @class */ (function (_super) {
    __extends(GetPotHoldingsSecurity, _super);
    function GetPotHoldingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiSecretKey)
    ], GetPotHoldingsSecurity.prototype, "apiSecretKey", void 0);
    return GetPotHoldingsSecurity;
}(utils_1.SpeakeasyBase));
exports.GetPotHoldingsSecurity = GetPotHoldingsSecurity;
var GetPotHoldingsRequest = /** @class */ (function (_super) {
    __extends(GetPotHoldingsRequest, _super);
    function GetPotHoldingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPotHoldingsPathParams)
    ], GetPotHoldingsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPotHoldingsHeaders)
    ], GetPotHoldingsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPotHoldingsSecurity)
    ], GetPotHoldingsRequest.prototype, "security", void 0);
    return GetPotHoldingsRequest;
}(utils_1.SpeakeasyBase));
exports.GetPotHoldingsRequest = GetPotHoldingsRequest;
var GetPotHoldingsResponse = /** @class */ (function (_super) {
    __extends(GetPotHoldingsResponse, _super);
    function GetPotHoldingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPotHoldingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPotHoldingsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPotHoldingsResponse.prototype, "getPotHoldings200ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPotHoldingsResponse.prototype, "getPotHoldings400ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPotHoldingsResponse.prototype, "getPotHoldings401ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPotHoldingsResponse.prototype, "getPotHoldings403ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPotHoldingsResponse.prototype, "getPotHoldings404ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPotHoldingsResponse.prototype, "getPotHoldings429ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPotHoldingsResponse.prototype, "getPotHoldings500ApplicationJSONAny", void 0);
    return GetPotHoldingsResponse;
}(utils_1.SpeakeasyBase));
exports.GetPotHoldingsResponse = GetPotHoldingsResponse;
