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
exports.TagApiGetListResponse = exports.TagApiGetListRequest = exports.TagApiGetListQueryParams = exports.TagApiGetListTargetEnum = exports.TagApiGetListSortEnum = exports.TagApiGetListNameMatchModeEnum = exports.TagApiGetListLangEnum = exports.TagApiGetListFieldsEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TagApiGetListFieldsEnum;
(function (TagApiGetListFieldsEnum) {
    TagApiGetListFieldsEnum["None"] = "None";
    TagApiGetListFieldsEnum["AdditionalNames"] = "AdditionalNames";
    TagApiGetListFieldsEnum["AliasedTo"] = "AliasedTo";
    TagApiGetListFieldsEnum["Description"] = "Description";
    TagApiGetListFieldsEnum["MainPicture"] = "MainPicture";
    TagApiGetListFieldsEnum["Names"] = "Names";
    TagApiGetListFieldsEnum["Parent"] = "Parent";
    TagApiGetListFieldsEnum["RelatedTags"] = "RelatedTags";
    TagApiGetListFieldsEnum["TranslatedDescription"] = "TranslatedDescription";
    TagApiGetListFieldsEnum["WebLinks"] = "WebLinks";
})(TagApiGetListFieldsEnum = exports.TagApiGetListFieldsEnum || (exports.TagApiGetListFieldsEnum = {}));
var TagApiGetListLangEnum;
(function (TagApiGetListLangEnum) {
    TagApiGetListLangEnum["Default"] = "Default";
    TagApiGetListLangEnum["Japanese"] = "Japanese";
    TagApiGetListLangEnum["Romaji"] = "Romaji";
    TagApiGetListLangEnum["English"] = "English";
})(TagApiGetListLangEnum = exports.TagApiGetListLangEnum || (exports.TagApiGetListLangEnum = {}));
var TagApiGetListNameMatchModeEnum;
(function (TagApiGetListNameMatchModeEnum) {
    TagApiGetListNameMatchModeEnum["Auto"] = "Auto";
    TagApiGetListNameMatchModeEnum["Partial"] = "Partial";
    TagApiGetListNameMatchModeEnum["StartsWith"] = "StartsWith";
    TagApiGetListNameMatchModeEnum["Exact"] = "Exact";
    TagApiGetListNameMatchModeEnum["Words"] = "Words";
})(TagApiGetListNameMatchModeEnum = exports.TagApiGetListNameMatchModeEnum || (exports.TagApiGetListNameMatchModeEnum = {}));
var TagApiGetListSortEnum;
(function (TagApiGetListSortEnum) {
    TagApiGetListSortEnum["Nothing"] = "Nothing";
    TagApiGetListSortEnum["Name"] = "Name";
    TagApiGetListSortEnum["AdditionDate"] = "AdditionDate";
    TagApiGetListSortEnum["UsageCount"] = "UsageCount";
})(TagApiGetListSortEnum = exports.TagApiGetListSortEnum || (exports.TagApiGetListSortEnum = {}));
var TagApiGetListTargetEnum;
(function (TagApiGetListTargetEnum) {
    TagApiGetListTargetEnum["Nothing"] = "Nothing";
    TagApiGetListTargetEnum["Album"] = "Album";
    TagApiGetListTargetEnum["Artist"] = "Artist";
    TagApiGetListTargetEnum["AlbumArtist"] = "AlbumArtist";
    TagApiGetListTargetEnum["Event"] = "Event";
    TagApiGetListTargetEnum["Song"] = "Song";
    TagApiGetListTargetEnum["AlbumSong"] = "AlbumSong";
    TagApiGetListTargetEnum["ArtistSong"] = "ArtistSong";
    TagApiGetListTargetEnum["All"] = "All";
})(TagApiGetListTargetEnum = exports.TagApiGetListTargetEnum || (exports.TagApiGetListTargetEnum = {}));
var TagApiGetListQueryParams = /** @class */ (function (_super) {
    __extends(TagApiGetListQueryParams, _super);
    function TagApiGetListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=allowChildren" }),
        __metadata("design:type", Boolean)
    ], TagApiGetListQueryParams.prototype, "allowChildren", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=categoryName" }),
        __metadata("design:type", String)
    ], TagApiGetListQueryParams.prototype, "categoryName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagApiGetListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=getTotalCount" }),
        __metadata("design:type", Boolean)
    ], TagApiGetListQueryParams.prototype, "getTotalCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], TagApiGetListQueryParams.prototype, "lang", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], TagApiGetListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=nameMatchMode" }),
        __metadata("design:type", String)
    ], TagApiGetListQueryParams.prototype, "nameMatchMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=preferAccurateMatches" }),
        __metadata("design:type", Boolean)
    ], TagApiGetListQueryParams.prototype, "preferAccurateMatches", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], TagApiGetListQueryParams.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], TagApiGetListQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], TagApiGetListQueryParams.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=target" }),
        __metadata("design:type", String)
    ], TagApiGetListQueryParams.prototype, "target", void 0);
    return TagApiGetListQueryParams;
}(utils_1.SpeakeasyBase));
exports.TagApiGetListQueryParams = TagApiGetListQueryParams;
var TagApiGetListRequest = /** @class */ (function (_super) {
    __extends(TagApiGetListRequest, _super);
    function TagApiGetListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TagApiGetListQueryParams)
    ], TagApiGetListRequest.prototype, "queryParams", void 0);
    return TagApiGetListRequest;
}(utils_1.SpeakeasyBase));
exports.TagApiGetListRequest = TagApiGetListRequest;
var TagApiGetListResponse = /** @class */ (function (_super) {
    __extends(TagApiGetListResponse, _super);
    function TagApiGetListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], TagApiGetListResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TagApiGetListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PartialFindResultTagForApiContract)
    ], TagApiGetListResponse.prototype, "partialFindResultTagForApiContract", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TagApiGetListResponse.prototype, "statusCode", void 0);
    return TagApiGetListResponse;
}(utils_1.SpeakeasyBase));
exports.TagApiGetListResponse = TagApiGetListResponse;
