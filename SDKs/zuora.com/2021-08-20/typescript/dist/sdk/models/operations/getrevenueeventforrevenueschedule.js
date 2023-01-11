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
exports.GetRevenueEventForRevenueScheduleResponse = exports.GetRevenueEventForRevenueScheduleRequest = exports.GetRevenueEventForRevenueScheduleHeaders = exports.GetRevenueEventForRevenueScheduleQueryParams = exports.GetRevenueEventForRevenueSchedulePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetRevenueEventForRevenueSchedulePathParams = /** @class */ (function (_super) {
    __extends(GetRevenueEventForRevenueSchedulePathParams, _super);
    function GetRevenueEventForRevenueSchedulePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=rs-number" }),
        __metadata("design:type", String)
    ], GetRevenueEventForRevenueSchedulePathParams.prototype, "rsNumber", void 0);
    return GetRevenueEventForRevenueSchedulePathParams;
}(utils_1.SpeakeasyBase));
exports.GetRevenueEventForRevenueSchedulePathParams = GetRevenueEventForRevenueSchedulePathParams;
var GetRevenueEventForRevenueScheduleQueryParams = /** @class */ (function (_super) {
    __extends(GetRevenueEventForRevenueScheduleQueryParams, _super);
    function GetRevenueEventForRevenueScheduleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetRevenueEventForRevenueScheduleQueryParams.prototype, "pageSize", void 0);
    return GetRevenueEventForRevenueScheduleQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetRevenueEventForRevenueScheduleQueryParams = GetRevenueEventForRevenueScheduleQueryParams;
var GetRevenueEventForRevenueScheduleHeaders = /** @class */ (function (_super) {
    __extends(GetRevenueEventForRevenueScheduleHeaders, _super);
    function GetRevenueEventForRevenueScheduleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], GetRevenueEventForRevenueScheduleHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], GetRevenueEventForRevenueScheduleHeaders.prototype, "zuoraTrackId", void 0);
    return GetRevenueEventForRevenueScheduleHeaders;
}(utils_1.SpeakeasyBase));
exports.GetRevenueEventForRevenueScheduleHeaders = GetRevenueEventForRevenueScheduleHeaders;
var GetRevenueEventForRevenueScheduleRequest = /** @class */ (function (_super) {
    __extends(GetRevenueEventForRevenueScheduleRequest, _super);
    function GetRevenueEventForRevenueScheduleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRevenueEventForRevenueSchedulePathParams)
    ], GetRevenueEventForRevenueScheduleRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRevenueEventForRevenueScheduleQueryParams)
    ], GetRevenueEventForRevenueScheduleRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRevenueEventForRevenueScheduleHeaders)
    ], GetRevenueEventForRevenueScheduleRequest.prototype, "headers", void 0);
    return GetRevenueEventForRevenueScheduleRequest;
}(utils_1.SpeakeasyBase));
exports.GetRevenueEventForRevenueScheduleRequest = GetRevenueEventForRevenueScheduleRequest;
var GetRevenueEventForRevenueScheduleResponse = /** @class */ (function (_super) {
    __extends(GetRevenueEventForRevenueScheduleResponse, _super);
    function GetRevenueEventForRevenueScheduleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetRevenueEventForRevenueScheduleResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetRevenueEventDetailsType)
    ], GetRevenueEventForRevenueScheduleResponse.prototype, "getRevenueEventDetailsType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetRevenueEventForRevenueScheduleResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetRevenueEventForRevenueScheduleResponse.prototype, "statusCode", void 0);
    return GetRevenueEventForRevenueScheduleResponse;
}(utils_1.SpeakeasyBase));
exports.GetRevenueEventForRevenueScheduleResponse = GetRevenueEventForRevenueScheduleResponse;
