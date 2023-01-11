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
exports.GetCategoryVideosResponse = exports.GetCategoryVideosRequest = exports.GetCategoryVideosQueryParams = exports.GetCategoryVideosSortEnum = exports.GetCategoryVideosFilterEnum = exports.GetCategoryVideosDirectionEnum = exports.GetCategoryVideosPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetCategoryVideosPathParams = /** @class */ (function (_super) {
    __extends(GetCategoryVideosPathParams, _super);
    function GetCategoryVideosPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=category" }),
        __metadata("design:type", String)
    ], GetCategoryVideosPathParams.prototype, "category", void 0);
    return GetCategoryVideosPathParams;
}(utils_1.SpeakeasyBase));
exports.GetCategoryVideosPathParams = GetCategoryVideosPathParams;
var GetCategoryVideosDirectionEnum;
(function (GetCategoryVideosDirectionEnum) {
    GetCategoryVideosDirectionEnum["Asc"] = "asc";
    GetCategoryVideosDirectionEnum["Desc"] = "desc";
})(GetCategoryVideosDirectionEnum = exports.GetCategoryVideosDirectionEnum || (exports.GetCategoryVideosDirectionEnum = {}));
var GetCategoryVideosFilterEnum;
(function (GetCategoryVideosFilterEnum) {
    GetCategoryVideosFilterEnum["ConditionalFeatured"] = "conditional_featured";
    GetCategoryVideosFilterEnum["Embeddable"] = "embeddable";
})(GetCategoryVideosFilterEnum = exports.GetCategoryVideosFilterEnum || (exports.GetCategoryVideosFilterEnum = {}));
var GetCategoryVideosSortEnum;
(function (GetCategoryVideosSortEnum) {
    GetCategoryVideosSortEnum["Alphabetical"] = "alphabetical";
    GetCategoryVideosSortEnum["Comments"] = "comments";
    GetCategoryVideosSortEnum["Date"] = "date";
    GetCategoryVideosSortEnum["Duration"] = "duration";
    GetCategoryVideosSortEnum["Featured"] = "featured";
    GetCategoryVideosSortEnum["Likes"] = "likes";
    GetCategoryVideosSortEnum["Plays"] = "plays";
    GetCategoryVideosSortEnum["Relevant"] = "relevant";
})(GetCategoryVideosSortEnum = exports.GetCategoryVideosSortEnum || (exports.GetCategoryVideosSortEnum = {}));
var GetCategoryVideosQueryParams = /** @class */ (function (_super) {
    __extends(GetCategoryVideosQueryParams, _super);
    function GetCategoryVideosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetCategoryVideosQueryParams.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetCategoryVideosQueryParams.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter_embeddable" }),
        __metadata("design:type", Boolean)
    ], GetCategoryVideosQueryParams.prototype, "filterEmbeddable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCategoryVideosQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCategoryVideosQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetCategoryVideosQueryParams.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCategoryVideosQueryParams.prototype, "sort", void 0);
    return GetCategoryVideosQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetCategoryVideosQueryParams = GetCategoryVideosQueryParams;
var GetCategoryVideosRequest = /** @class */ (function (_super) {
    __extends(GetCategoryVideosRequest, _super);
    function GetCategoryVideosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCategoryVideosPathParams)
    ], GetCategoryVideosRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCategoryVideosQueryParams)
    ], GetCategoryVideosRequest.prototype, "queryParams", void 0);
    return GetCategoryVideosRequest;
}(utils_1.SpeakeasyBase));
exports.GetCategoryVideosRequest = GetCategoryVideosRequest;
var GetCategoryVideosResponse = /** @class */ (function (_super) {
    __extends(GetCategoryVideosResponse, _super);
    function GetCategoryVideosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCategoryVideosResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCategoryVideosResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.LegacyError)
    ], GetCategoryVideosResponse.prototype, "legacyError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.Video }),
        __metadata("design:type", Array)
    ], GetCategoryVideosResponse.prototype, "videos", void 0);
    return GetCategoryVideosResponse;
}(utils_1.SpeakeasyBase));
exports.GetCategoryVideosResponse = GetCategoryVideosResponse;
