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
exports.GetAssetsResponse = exports.GetAssetsRequest = exports.GetAssetsSecurity = exports.GetAssetsHeaders = exports.GetAssetsQueryParams = exports.GetAssetsSortDirectionEnum = exports.GetAssetsOrderByEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetAssetsOrderByEnum;
(function (GetAssetsOrderByEnum) {
    GetAssetsOrderByEnum["AssetType"] = "AssetType";
    GetAssetsOrderByEnum["AssetName"] = "AssetName";
    GetAssetsOrderByEnum["AssetNumber"] = "AssetNumber";
    GetAssetsOrderByEnum["PurchaseDate"] = "PurchaseDate";
    GetAssetsOrderByEnum["PurchasePrice"] = "PurchasePrice";
    GetAssetsOrderByEnum["DisposalDate"] = "DisposalDate";
    GetAssetsOrderByEnum["DisposalPrice"] = "DisposalPrice";
})(GetAssetsOrderByEnum = exports.GetAssetsOrderByEnum || (exports.GetAssetsOrderByEnum = {}));
var GetAssetsSortDirectionEnum;
(function (GetAssetsSortDirectionEnum) {
    GetAssetsSortDirectionEnum["Asc"] = "asc";
    GetAssetsSortDirectionEnum["Desc"] = "desc";
})(GetAssetsSortDirectionEnum = exports.GetAssetsSortDirectionEnum || (exports.GetAssetsSortDirectionEnum = {}));
var GetAssetsQueryParams = /** @class */ (function (_super) {
    __extends(GetAssetsQueryParams, _super);
    function GetAssetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filterBy" }),
        __metadata("design:type", String)
    ], GetAssetsQueryParams.prototype, "filterBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], GetAssetsQueryParams.prototype, "orderBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetAssetsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetAssetsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sortDirection" }),
        __metadata("design:type", String)
    ], GetAssetsQueryParams.prototype, "sortDirection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetAssetsQueryParams.prototype, "status", void 0);
    return GetAssetsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetAssetsQueryParams = GetAssetsQueryParams;
var GetAssetsHeaders = /** @class */ (function (_super) {
    __extends(GetAssetsHeaders, _super);
    function GetAssetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=xero-tenant-id" }),
        __metadata("design:type", String)
    ], GetAssetsHeaders.prototype, "xeroTenantId", void 0);
    return GetAssetsHeaders;
}(utils_1.SpeakeasyBase));
exports.GetAssetsHeaders = GetAssetsHeaders;
var GetAssetsSecurity = /** @class */ (function (_super) {
    __extends(GetAssetsSecurity, _super);
    function GetAssetsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetAssetsSecurity.prototype, "oAuth2", void 0);
    return GetAssetsSecurity;
}(utils_1.SpeakeasyBase));
exports.GetAssetsSecurity = GetAssetsSecurity;
var GetAssetsRequest = /** @class */ (function (_super) {
    __extends(GetAssetsRequest, _super);
    function GetAssetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAssetsQueryParams)
    ], GetAssetsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAssetsHeaders)
    ], GetAssetsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAssetsSecurity)
    ], GetAssetsRequest.prototype, "security", void 0);
    return GetAssetsRequest;
}(utils_1.SpeakeasyBase));
exports.GetAssetsRequest = GetAssetsRequest;
var GetAssetsResponse = /** @class */ (function (_super) {
    __extends(GetAssetsResponse, _super);
    function GetAssetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Assets)
    ], GetAssetsResponse.prototype, "assets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAssetsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAssetsResponse.prototype, "statusCode", void 0);
    return GetAssetsResponse;
}(utils_1.SpeakeasyBase));
exports.GetAssetsResponse = GetAssetsResponse;
