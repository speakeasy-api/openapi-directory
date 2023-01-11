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
exports.UpdatePortfolioTemplateResponse = exports.UpdatePortfolioTemplateRequest = exports.UpdatePortfolioTemplateSecurity = exports.UpdatePortfolioTemplateHeaders = exports.UpdatePortfolioTemplatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdatePortfolioTemplatePathParams = /** @class */ (function (_super) {
    __extends(UpdatePortfolioTemplatePathParams, _super);
    function UpdatePortfolioTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=portfolio_template_id" }),
        __metadata("design:type", String)
    ], UpdatePortfolioTemplatePathParams.prototype, "portfolioTemplateId", void 0);
    return UpdatePortfolioTemplatePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdatePortfolioTemplatePathParams = UpdatePortfolioTemplatePathParams;
var UpdatePortfolioTemplateHeaders = /** @class */ (function (_super) {
    __extends(UpdatePortfolioTemplateHeaders, _super);
    function UpdatePortfolioTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], UpdatePortfolioTemplateHeaders.prototype, "xApiKey", void 0);
    return UpdatePortfolioTemplateHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdatePortfolioTemplateHeaders = UpdatePortfolioTemplateHeaders;
var UpdatePortfolioTemplateSecurity = /** @class */ (function (_super) {
    __extends(UpdatePortfolioTemplateSecurity, _super);
    function UpdatePortfolioTemplateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiSecretKey)
    ], UpdatePortfolioTemplateSecurity.prototype, "apiSecretKey", void 0);
    return UpdatePortfolioTemplateSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdatePortfolioTemplateSecurity = UpdatePortfolioTemplateSecurity;
var UpdatePortfolioTemplateRequest = /** @class */ (function (_super) {
    __extends(UpdatePortfolioTemplateRequest, _super);
    function UpdatePortfolioTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdatePortfolioTemplatePathParams)
    ], UpdatePortfolioTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdatePortfolioTemplateHeaders)
    ], UpdatePortfolioTemplateRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], UpdatePortfolioTemplateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdatePortfolioTemplateSecurity)
    ], UpdatePortfolioTemplateRequest.prototype, "security", void 0);
    return UpdatePortfolioTemplateRequest;
}(utils_1.SpeakeasyBase));
exports.UpdatePortfolioTemplateRequest = UpdatePortfolioTemplateRequest;
var UpdatePortfolioTemplateResponse = /** @class */ (function (_super) {
    __extends(UpdatePortfolioTemplateResponse, _super);
    function UpdatePortfolioTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdatePortfolioTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdatePortfolioTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdatePortfolioTemplateResponse.prototype, "updatePortfolioTemplate200ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdatePortfolioTemplateResponse.prototype, "updatePortfolioTemplate400ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdatePortfolioTemplateResponse.prototype, "updatePortfolioTemplate401ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdatePortfolioTemplateResponse.prototype, "updatePortfolioTemplate403ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdatePortfolioTemplateResponse.prototype, "updatePortfolioTemplate404ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdatePortfolioTemplateResponse.prototype, "updatePortfolioTemplate409ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdatePortfolioTemplateResponse.prototype, "updatePortfolioTemplate429ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdatePortfolioTemplateResponse.prototype, "updatePortfolioTemplate500ApplicationJSONAny", void 0);
    return UpdatePortfolioTemplateResponse;
}(utils_1.SpeakeasyBase));
exports.UpdatePortfolioTemplateResponse = UpdatePortfolioTemplateResponse;
