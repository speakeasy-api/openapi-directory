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
exports.GetVodPromotionCodesResponse = exports.GetVodPromotionCodesRequest = exports.GetVodPromotionCodesSecurity = exports.GetVodPromotionCodesQueryParams = exports.GetVodPromotionCodesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetVodPromotionCodesPathParams = /** @class */ (function (_super) {
    __extends(GetVodPromotionCodesPathParams, _super);
    function GetVodPromotionCodesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ondemand_id" }),
        __metadata("design:type", Number)
    ], GetVodPromotionCodesPathParams.prototype, "ondemandId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=promotion_id" }),
        __metadata("design:type", Number)
    ], GetVodPromotionCodesPathParams.prototype, "promotionId", void 0);
    return GetVodPromotionCodesPathParams;
}(utils_1.SpeakeasyBase));
exports.GetVodPromotionCodesPathParams = GetVodPromotionCodesPathParams;
var GetVodPromotionCodesQueryParams = /** @class */ (function (_super) {
    __extends(GetVodPromotionCodesQueryParams, _super);
    function GetVodPromotionCodesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetVodPromotionCodesQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetVodPromotionCodesQueryParams.prototype, "perPage", void 0);
    return GetVodPromotionCodesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetVodPromotionCodesQueryParams = GetVodPromotionCodesQueryParams;
var GetVodPromotionCodesSecurity = /** @class */ (function (_super) {
    __extends(GetVodPromotionCodesSecurity, _super);
    function GetVodPromotionCodesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetVodPromotionCodesSecurity.prototype, "oauth2", void 0);
    return GetVodPromotionCodesSecurity;
}(utils_1.SpeakeasyBase));
exports.GetVodPromotionCodesSecurity = GetVodPromotionCodesSecurity;
var GetVodPromotionCodesRequest = /** @class */ (function (_super) {
    __extends(GetVodPromotionCodesRequest, _super);
    function GetVodPromotionCodesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetVodPromotionCodesPathParams)
    ], GetVodPromotionCodesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetVodPromotionCodesQueryParams)
    ], GetVodPromotionCodesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetVodPromotionCodesSecurity)
    ], GetVodPromotionCodesRequest.prototype, "security", void 0);
    return GetVodPromotionCodesRequest;
}(utils_1.SpeakeasyBase));
exports.GetVodPromotionCodesRequest = GetVodPromotionCodesRequest;
var GetVodPromotionCodesResponse = /** @class */ (function (_super) {
    __extends(GetVodPromotionCodesResponse, _super);
    function GetVodPromotionCodesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetVodPromotionCodesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetVodPromotionCodesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.LegacyError)
    ], GetVodPromotionCodesResponse.prototype, "legacyError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.OnDemandPromotionCode)
    ], GetVodPromotionCodesResponse.prototype, "onDemandPromotionCode", void 0);
    return GetVodPromotionCodesResponse;
}(utils_1.SpeakeasyBase));
exports.GetVodPromotionCodesResponse = GetVodPromotionCodesResponse;
