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
exports.GetAlbumVideosResponse = exports.GetAlbumVideosRequest = exports.GetAlbumVideosQueryParams = exports.GetAlbumVideosSortEnum = exports.GetAlbumVideosFilterEnum = exports.GetAlbumVideosDirectionEnum = exports.GetAlbumVideosPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetAlbumVideosPathParams = /** @class */ (function (_super) {
    __extends(GetAlbumVideosPathParams, _super);
    function GetAlbumVideosPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=album_id" }),
        __metadata("design:type", Number)
    ], GetAlbumVideosPathParams.prototype, "albumId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], GetAlbumVideosPathParams.prototype, "userId", void 0);
    return GetAlbumVideosPathParams;
}(utils_1.SpeakeasyBase));
exports.GetAlbumVideosPathParams = GetAlbumVideosPathParams;
var GetAlbumVideosDirectionEnum;
(function (GetAlbumVideosDirectionEnum) {
    GetAlbumVideosDirectionEnum["Asc"] = "asc";
    GetAlbumVideosDirectionEnum["Desc"] = "desc";
})(GetAlbumVideosDirectionEnum = exports.GetAlbumVideosDirectionEnum || (exports.GetAlbumVideosDirectionEnum = {}));
var GetAlbumVideosFilterEnum;
(function (GetAlbumVideosFilterEnum) {
    GetAlbumVideosFilterEnum["Embeddable"] = "embeddable";
})(GetAlbumVideosFilterEnum = exports.GetAlbumVideosFilterEnum || (exports.GetAlbumVideosFilterEnum = {}));
var GetAlbumVideosSortEnum;
(function (GetAlbumVideosSortEnum) {
    GetAlbumVideosSortEnum["Alphabetical"] = "alphabetical";
    GetAlbumVideosSortEnum["Comments"] = "comments";
    GetAlbumVideosSortEnum["Date"] = "date";
    GetAlbumVideosSortEnum["Default"] = "default";
    GetAlbumVideosSortEnum["Duration"] = "duration";
    GetAlbumVideosSortEnum["Likes"] = "likes";
    GetAlbumVideosSortEnum["Manual"] = "manual";
    GetAlbumVideosSortEnum["ModifiedTime"] = "modified_time";
    GetAlbumVideosSortEnum["Plays"] = "plays";
})(GetAlbumVideosSortEnum = exports.GetAlbumVideosSortEnum || (exports.GetAlbumVideosSortEnum = {}));
var GetAlbumVideosQueryParams = /** @class */ (function (_super) {
    __extends(GetAlbumVideosQueryParams, _super);
    function GetAlbumVideosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=containing_uri" }),
        __metadata("design:type", String)
    ], GetAlbumVideosQueryParams.prototype, "containingUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetAlbumVideosQueryParams.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetAlbumVideosQueryParams.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter_embeddable" }),
        __metadata("design:type", Boolean)
    ], GetAlbumVideosQueryParams.prototype, "filterEmbeddable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetAlbumVideosQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=password" }),
        __metadata("design:type", String)
    ], GetAlbumVideosQueryParams.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetAlbumVideosQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetAlbumVideosQueryParams.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetAlbumVideosQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=weak_search" }),
        __metadata("design:type", Boolean)
    ], GetAlbumVideosQueryParams.prototype, "weakSearch", void 0);
    return GetAlbumVideosQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetAlbumVideosQueryParams = GetAlbumVideosQueryParams;
var GetAlbumVideosRequest = /** @class */ (function (_super) {
    __extends(GetAlbumVideosRequest, _super);
    function GetAlbumVideosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAlbumVideosPathParams)
    ], GetAlbumVideosRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAlbumVideosQueryParams)
    ], GetAlbumVideosRequest.prototype, "queryParams", void 0);
    return GetAlbumVideosRequest;
}(utils_1.SpeakeasyBase));
exports.GetAlbumVideosRequest = GetAlbumVideosRequest;
var GetAlbumVideosResponse = /** @class */ (function (_super) {
    __extends(GetAlbumVideosResponse, _super);
    function GetAlbumVideosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAlbumVideosResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAlbumVideosResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.LegacyError)
    ], GetAlbumVideosResponse.prototype, "legacyError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.Video }),
        __metadata("design:type", Array)
    ], GetAlbumVideosResponse.prototype, "videos", void 0);
    return GetAlbumVideosResponse;
}(utils_1.SpeakeasyBase));
exports.GetAlbumVideosResponse = GetAlbumVideosResponse;
