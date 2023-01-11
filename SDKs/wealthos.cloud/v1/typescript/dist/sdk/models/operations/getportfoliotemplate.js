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
exports.GetPortfolioTemplateResponse = exports.GetPortfolioTemplateRequest = exports.GetPortfolioTemplateSecurity = exports.GetPortfolioTemplateHeaders = exports.GetPortfolioTemplatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetPortfolioTemplatePathParams = /** @class */ (function (_super) {
    __extends(GetPortfolioTemplatePathParams, _super);
    function GetPortfolioTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=portfolio_template_id" }),
        __metadata("design:type", String)
    ], GetPortfolioTemplatePathParams.prototype, "portfolioTemplateId", void 0);
    return GetPortfolioTemplatePathParams;
}(utils_1.SpeakeasyBase));
exports.GetPortfolioTemplatePathParams = GetPortfolioTemplatePathParams;
var GetPortfolioTemplateHeaders = /** @class */ (function (_super) {
    __extends(GetPortfolioTemplateHeaders, _super);
    function GetPortfolioTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], GetPortfolioTemplateHeaders.prototype, "xApiKey", void 0);
    return GetPortfolioTemplateHeaders;
}(utils_1.SpeakeasyBase));
exports.GetPortfolioTemplateHeaders = GetPortfolioTemplateHeaders;
var GetPortfolioTemplateSecurity = /** @class */ (function (_super) {
    __extends(GetPortfolioTemplateSecurity, _super);
    function GetPortfolioTemplateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiSecretKey)
    ], GetPortfolioTemplateSecurity.prototype, "apiSecretKey", void 0);
    return GetPortfolioTemplateSecurity;
}(utils_1.SpeakeasyBase));
exports.GetPortfolioTemplateSecurity = GetPortfolioTemplateSecurity;
var GetPortfolioTemplateRequest = /** @class */ (function (_super) {
    __extends(GetPortfolioTemplateRequest, _super);
    function GetPortfolioTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPortfolioTemplatePathParams)
    ], GetPortfolioTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPortfolioTemplateHeaders)
    ], GetPortfolioTemplateRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPortfolioTemplateSecurity)
    ], GetPortfolioTemplateRequest.prototype, "security", void 0);
    return GetPortfolioTemplateRequest;
}(utils_1.SpeakeasyBase));
exports.GetPortfolioTemplateRequest = GetPortfolioTemplateRequest;
var GetPortfolioTemplateResponse = /** @class */ (function (_super) {
    __extends(GetPortfolioTemplateResponse, _super);
    function GetPortfolioTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPortfolioTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPortfolioTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPortfolioTemplateResponse.prototype, "getPortfolioTemplate200ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPortfolioTemplateResponse.prototype, "getPortfolioTemplate401ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPortfolioTemplateResponse.prototype, "getPortfolioTemplate403ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPortfolioTemplateResponse.prototype, "getPortfolioTemplate404ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPortfolioTemplateResponse.prototype, "getPortfolioTemplate429ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPortfolioTemplateResponse.prototype, "getPortfolioTemplate500ApplicationJSONAny", void 0);
    return GetPortfolioTemplateResponse;
}(utils_1.SpeakeasyBase));
exports.GetPortfolioTemplateResponse = GetPortfolioTemplateResponse;
