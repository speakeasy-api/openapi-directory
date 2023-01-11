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
exports.GetVideosResponse = exports.GetVideosRequest = exports.GetVideosQueryParams = exports.GetVideosSortEnum = exports.GetVideosFilterEnum = exports.GetVideosDirectionEnum = exports.GetVideosPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetVideosPathParams = /** @class */ (function (_super) {
    __extends(GetVideosPathParams, _super);
    function GetVideosPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], GetVideosPathParams.prototype, "userId", void 0);
    return GetVideosPathParams;
}(utils_1.SpeakeasyBase));
exports.GetVideosPathParams = GetVideosPathParams;
var GetVideosDirectionEnum;
(function (GetVideosDirectionEnum) {
    GetVideosDirectionEnum["Asc"] = "asc";
    GetVideosDirectionEnum["Desc"] = "desc";
})(GetVideosDirectionEnum = exports.GetVideosDirectionEnum || (exports.GetVideosDirectionEnum = {}));
var GetVideosFilterEnum;
(function (GetVideosFilterEnum) {
    GetVideosFilterEnum["AppOnly"] = "app_only";
    GetVideosFilterEnum["Embeddable"] = "embeddable";
    GetVideosFilterEnum["Featured"] = "featured";
    GetVideosFilterEnum["Playable"] = "playable";
})(GetVideosFilterEnum = exports.GetVideosFilterEnum || (exports.GetVideosFilterEnum = {}));
var GetVideosSortEnum;
(function (GetVideosSortEnum) {
    GetVideosSortEnum["Alphabetical"] = "alphabetical";
    GetVideosSortEnum["Comments"] = "comments";
    GetVideosSortEnum["Date"] = "date";
    GetVideosSortEnum["Default"] = "default";
    GetVideosSortEnum["Duration"] = "duration";
    GetVideosSortEnum["LastUserActionEventDate"] = "last_user_action_event_date";
    GetVideosSortEnum["Likes"] = "likes";
    GetVideosSortEnum["ModifiedTime"] = "modified_time";
    GetVideosSortEnum["Plays"] = "plays";
})(GetVideosSortEnum = exports.GetVideosSortEnum || (exports.GetVideosSortEnum = {}));
var GetVideosQueryParams = /** @class */ (function (_super) {
    __extends(GetVideosQueryParams, _super);
    function GetVideosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=containing_uri" }),
        __metadata("design:type", String)
    ], GetVideosQueryParams.prototype, "containingUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetVideosQueryParams.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetVideosQueryParams.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter_embeddable" }),
        __metadata("design:type", Boolean)
    ], GetVideosQueryParams.prototype, "filterEmbeddable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter_playable" }),
        __metadata("design:type", Boolean)
    ], GetVideosQueryParams.prototype, "filterPlayable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetVideosQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetVideosQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetVideosQueryParams.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetVideosQueryParams.prototype, "sort", void 0);
    return GetVideosQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetVideosQueryParams = GetVideosQueryParams;
var GetVideosRequest = /** @class */ (function (_super) {
    __extends(GetVideosRequest, _super);
    function GetVideosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetVideosPathParams)
    ], GetVideosRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetVideosQueryParams)
    ], GetVideosRequest.prototype, "queryParams", void 0);
    return GetVideosRequest;
}(utils_1.SpeakeasyBase));
exports.GetVideosRequest = GetVideosRequest;
var GetVideosResponse = /** @class */ (function (_super) {
    __extends(GetVideosResponse, _super);
    function GetVideosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetVideosResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetVideosResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.Video }),
        __metadata("design:type", Array)
    ], GetVideosResponse.prototype, "videos", void 0);
    return GetVideosResponse;
}(utils_1.SpeakeasyBase));
exports.GetVideosResponse = GetVideosResponse;
