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
exports.GetPortfolioVideosResponse = exports.GetPortfolioVideosRequest = exports.GetPortfolioVideosQueryParams = exports.GetPortfolioVideosSortEnum = exports.GetPortfolioVideosFilterEnum = exports.GetPortfolioVideosPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetPortfolioVideosPathParams = /** @class */ (function (_super) {
    __extends(GetPortfolioVideosPathParams, _super);
    function GetPortfolioVideosPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=portfolio_id" }),
        __metadata("design:type", Number)
    ], GetPortfolioVideosPathParams.prototype, "portfolioId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], GetPortfolioVideosPathParams.prototype, "userId", void 0);
    return GetPortfolioVideosPathParams;
}(utils_1.SpeakeasyBase));
exports.GetPortfolioVideosPathParams = GetPortfolioVideosPathParams;
var GetPortfolioVideosFilterEnum;
(function (GetPortfolioVideosFilterEnum) {
    GetPortfolioVideosFilterEnum["Embeddable"] = "embeddable";
})(GetPortfolioVideosFilterEnum = exports.GetPortfolioVideosFilterEnum || (exports.GetPortfolioVideosFilterEnum = {}));
var GetPortfolioVideosSortEnum;
(function (GetPortfolioVideosSortEnum) {
    GetPortfolioVideosSortEnum["Alphabetical"] = "alphabetical";
    GetPortfolioVideosSortEnum["Comments"] = "comments";
    GetPortfolioVideosSortEnum["Date"] = "date";
    GetPortfolioVideosSortEnum["Default"] = "default";
    GetPortfolioVideosSortEnum["Likes"] = "likes";
    GetPortfolioVideosSortEnum["Manual"] = "manual";
    GetPortfolioVideosSortEnum["Plays"] = "plays";
})(GetPortfolioVideosSortEnum = exports.GetPortfolioVideosSortEnum || (exports.GetPortfolioVideosSortEnum = {}));
var GetPortfolioVideosQueryParams = /** @class */ (function (_super) {
    __extends(GetPortfolioVideosQueryParams, _super);
    function GetPortfolioVideosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=containing_uri" }),
        __metadata("design:type", String)
    ], GetPortfolioVideosQueryParams.prototype, "containingUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetPortfolioVideosQueryParams.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter_embeddable" }),
        __metadata("design:type", Boolean)
    ], GetPortfolioVideosQueryParams.prototype, "filterEmbeddable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetPortfolioVideosQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetPortfolioVideosQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetPortfolioVideosQueryParams.prototype, "sort", void 0);
    return GetPortfolioVideosQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetPortfolioVideosQueryParams = GetPortfolioVideosQueryParams;
var GetPortfolioVideosRequest = /** @class */ (function (_super) {
    __extends(GetPortfolioVideosRequest, _super);
    function GetPortfolioVideosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPortfolioVideosPathParams)
    ], GetPortfolioVideosRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPortfolioVideosQueryParams)
    ], GetPortfolioVideosRequest.prototype, "queryParams", void 0);
    return GetPortfolioVideosRequest;
}(utils_1.SpeakeasyBase));
exports.GetPortfolioVideosRequest = GetPortfolioVideosRequest;
var GetPortfolioVideosResponse = /** @class */ (function (_super) {
    __extends(GetPortfolioVideosResponse, _super);
    function GetPortfolioVideosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPortfolioVideosResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPortfolioVideosResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.Video }),
        __metadata("design:type", Array)
    ], GetPortfolioVideosResponse.prototype, "videos", void 0);
    return GetPortfolioVideosResponse;
}(utils_1.SpeakeasyBase));
exports.GetPortfolioVideosResponse = GetPortfolioVideosResponse;
