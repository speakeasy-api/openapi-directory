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
exports.GetProviderAccountResponse = exports.GetProviderAccountRequest = exports.GetProviderAccountQueryParams = exports.GetProviderAccountPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetProviderAccountPathParams = /** @class */ (function (_super) {
    __extends(GetProviderAccountPathParams, _super);
    function GetProviderAccountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=providerAccountId" }),
        __metadata("design:type", Number)
    ], GetProviderAccountPathParams.prototype, "providerAccountId", void 0);
    return GetProviderAccountPathParams;
}(utils_1.SpeakeasyBase));
exports.GetProviderAccountPathParams = GetProviderAccountPathParams;
var GetProviderAccountQueryParams = /** @class */ (function (_super) {
    __extends(GetProviderAccountQueryParams, _super);
    function GetProviderAccountQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include" }),
        __metadata("design:type", String)
    ], GetProviderAccountQueryParams.prototype, "include", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], GetProviderAccountQueryParams.prototype, "requestId", void 0);
    return GetProviderAccountQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetProviderAccountQueryParams = GetProviderAccountQueryParams;
var GetProviderAccountRequest = /** @class */ (function (_super) {
    __extends(GetProviderAccountRequest, _super);
    function GetProviderAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetProviderAccountPathParams)
    ], GetProviderAccountRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetProviderAccountQueryParams)
    ], GetProviderAccountRequest.prototype, "queryParams", void 0);
    return GetProviderAccountRequest;
}(utils_1.SpeakeasyBase));
exports.GetProviderAccountRequest = GetProviderAccountRequest;
var GetProviderAccountResponse = /** @class */ (function (_super) {
    __extends(GetProviderAccountResponse, _super);
    function GetProviderAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetProviderAccountResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ProviderAccountDetailResponse)
    ], GetProviderAccountResponse.prototype, "providerAccountDetailResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetProviderAccountResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.YodleeError)
    ], GetProviderAccountResponse.prototype, "yodleeError", void 0);
    return GetProviderAccountResponse;
}(utils_1.SpeakeasyBase));
exports.GetProviderAccountResponse = GetProviderAccountResponse;
