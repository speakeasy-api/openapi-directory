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
exports.AlbumApiGetListResponse = exports.AlbumApiGetListRequest = exports.AlbumApiGetListQueryParams = exports.AlbumApiGetListStatusEnum = exports.AlbumApiGetListSortEnum = exports.AlbumApiGetListNameMatchModeEnum = exports.AlbumApiGetListLangEnum = exports.AlbumApiGetListFieldsEnum = exports.AlbumApiGetListDiscTypesEnum = exports.AlbumApiGetListArtistParticipationStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AlbumApiGetListArtistParticipationStatusEnum;
(function (AlbumApiGetListArtistParticipationStatusEnum) {
    AlbumApiGetListArtistParticipationStatusEnum["Everything"] = "Everything";
    AlbumApiGetListArtistParticipationStatusEnum["OnlyMainAlbums"] = "OnlyMainAlbums";
    AlbumApiGetListArtistParticipationStatusEnum["OnlyCollaborations"] = "OnlyCollaborations";
})(AlbumApiGetListArtistParticipationStatusEnum = exports.AlbumApiGetListArtistParticipationStatusEnum || (exports.AlbumApiGetListArtistParticipationStatusEnum = {}));
var AlbumApiGetListDiscTypesEnum;
(function (AlbumApiGetListDiscTypesEnum) {
    AlbumApiGetListDiscTypesEnum["Unknown"] = "Unknown";
    AlbumApiGetListDiscTypesEnum["Album"] = "Album";
    AlbumApiGetListDiscTypesEnum["Single"] = "Single";
    AlbumApiGetListDiscTypesEnum["Ep"] = "EP";
    AlbumApiGetListDiscTypesEnum["SplitAlbum"] = "SplitAlbum";
    AlbumApiGetListDiscTypesEnum["Compilation"] = "Compilation";
    AlbumApiGetListDiscTypesEnum["Video"] = "Video";
    AlbumApiGetListDiscTypesEnum["Artbook"] = "Artbook";
    AlbumApiGetListDiscTypesEnum["Game"] = "Game";
    AlbumApiGetListDiscTypesEnum["Fanmade"] = "Fanmade";
    AlbumApiGetListDiscTypesEnum["Instrumental"] = "Instrumental";
    AlbumApiGetListDiscTypesEnum["Other"] = "Other";
})(AlbumApiGetListDiscTypesEnum = exports.AlbumApiGetListDiscTypesEnum || (exports.AlbumApiGetListDiscTypesEnum = {}));
var AlbumApiGetListFieldsEnum;
(function (AlbumApiGetListFieldsEnum) {
    AlbumApiGetListFieldsEnum["None"] = "None";
    AlbumApiGetListFieldsEnum["AdditionalNames"] = "AdditionalNames";
    AlbumApiGetListFieldsEnum["Artists"] = "Artists";
    AlbumApiGetListFieldsEnum["Description"] = "Description";
    AlbumApiGetListFieldsEnum["Discs"] = "Discs";
    AlbumApiGetListFieldsEnum["Identifiers"] = "Identifiers";
    AlbumApiGetListFieldsEnum["MainPicture"] = "MainPicture";
    AlbumApiGetListFieldsEnum["Names"] = "Names";
    AlbumApiGetListFieldsEnum["PVs"] = "PVs";
    AlbumApiGetListFieldsEnum["ReleaseEvent"] = "ReleaseEvent";
    AlbumApiGetListFieldsEnum["Tags"] = "Tags";
    AlbumApiGetListFieldsEnum["Tracks"] = "Tracks";
    AlbumApiGetListFieldsEnum["WebLinks"] = "WebLinks";
})(AlbumApiGetListFieldsEnum = exports.AlbumApiGetListFieldsEnum || (exports.AlbumApiGetListFieldsEnum = {}));
var AlbumApiGetListLangEnum;
(function (AlbumApiGetListLangEnum) {
    AlbumApiGetListLangEnum["Default"] = "Default";
    AlbumApiGetListLangEnum["Japanese"] = "Japanese";
    AlbumApiGetListLangEnum["Romaji"] = "Romaji";
    AlbumApiGetListLangEnum["English"] = "English";
})(AlbumApiGetListLangEnum = exports.AlbumApiGetListLangEnum || (exports.AlbumApiGetListLangEnum = {}));
var AlbumApiGetListNameMatchModeEnum;
(function (AlbumApiGetListNameMatchModeEnum) {
    AlbumApiGetListNameMatchModeEnum["Auto"] = "Auto";
    AlbumApiGetListNameMatchModeEnum["Partial"] = "Partial";
    AlbumApiGetListNameMatchModeEnum["StartsWith"] = "StartsWith";
    AlbumApiGetListNameMatchModeEnum["Exact"] = "Exact";
    AlbumApiGetListNameMatchModeEnum["Words"] = "Words";
})(AlbumApiGetListNameMatchModeEnum = exports.AlbumApiGetListNameMatchModeEnum || (exports.AlbumApiGetListNameMatchModeEnum = {}));
var AlbumApiGetListSortEnum;
(function (AlbumApiGetListSortEnum) {
    AlbumApiGetListSortEnum["None"] = "None";
    AlbumApiGetListSortEnum["Name"] = "Name";
    AlbumApiGetListSortEnum["ReleaseDate"] = "ReleaseDate";
    AlbumApiGetListSortEnum["ReleaseDateWithNulls"] = "ReleaseDateWithNulls";
    AlbumApiGetListSortEnum["AdditionDate"] = "AdditionDate";
    AlbumApiGetListSortEnum["RatingAverage"] = "RatingAverage";
    AlbumApiGetListSortEnum["RatingTotal"] = "RatingTotal";
    AlbumApiGetListSortEnum["NameThenReleaseDate"] = "NameThenReleaseDate";
    AlbumApiGetListSortEnum["CollectionCount"] = "CollectionCount";
})(AlbumApiGetListSortEnum = exports.AlbumApiGetListSortEnum || (exports.AlbumApiGetListSortEnum = {}));
var AlbumApiGetListStatusEnum;
(function (AlbumApiGetListStatusEnum) {
    AlbumApiGetListStatusEnum["Draft"] = "Draft";
    AlbumApiGetListStatusEnum["Finished"] = "Finished";
    AlbumApiGetListStatusEnum["Approved"] = "Approved";
    AlbumApiGetListStatusEnum["Locked"] = "Locked";
})(AlbumApiGetListStatusEnum = exports.AlbumApiGetListStatusEnum || (exports.AlbumApiGetListStatusEnum = {}));
var AlbumApiGetListQueryParams = /** @class */ (function (_super) {
    __extends(AlbumApiGetListQueryParams, _super);
    function AlbumApiGetListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=advancedFilters" }),
        __metadata("design:type", Array)
    ], AlbumApiGetListQueryParams.prototype, "advancedFilters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=artistId" }),
        __metadata("design:type", Array)
    ], AlbumApiGetListQueryParams.prototype, "artistId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=artistParticipationStatus" }),
        __metadata("design:type", String)
    ], AlbumApiGetListQueryParams.prototype, "artistParticipationStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=barcode" }),
        __metadata("design:type", String)
    ], AlbumApiGetListQueryParams.prototype, "barcode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=childTags" }),
        __metadata("design:type", Boolean)
    ], AlbumApiGetListQueryParams.prototype, "childTags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=childVoicebanks" }),
        __metadata("design:type", Boolean)
    ], AlbumApiGetListQueryParams.prototype, "childVoicebanks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=deleted" }),
        __metadata("design:type", Boolean)
    ], AlbumApiGetListQueryParams.prototype, "deleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=discTypes" }),
        __metadata("design:type", String)
    ], AlbumApiGetListQueryParams.prototype, "discTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AlbumApiGetListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=getTotalCount" }),
        __metadata("design:type", Boolean)
    ], AlbumApiGetListQueryParams.prototype, "getTotalCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=includeMembers" }),
        __metadata("design:type", Boolean)
    ], AlbumApiGetListQueryParams.prototype, "includeMembers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], AlbumApiGetListQueryParams.prototype, "lang", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], AlbumApiGetListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=nameMatchMode" }),
        __metadata("design:type", String)
    ], AlbumApiGetListQueryParams.prototype, "nameMatchMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=preferAccurateMatches" }),
        __metadata("design:type", Boolean)
    ], AlbumApiGetListQueryParams.prototype, "preferAccurateMatches", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], AlbumApiGetListQueryParams.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=releaseDateAfter" }),
        __metadata("design:type", Date)
    ], AlbumApiGetListQueryParams.prototype, "releaseDateAfter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=releaseDateBefore" }),
        __metadata("design:type", Date)
    ], AlbumApiGetListQueryParams.prototype, "releaseDateBefore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], AlbumApiGetListQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], AlbumApiGetListQueryParams.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], AlbumApiGetListQueryParams.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=tagId" }),
        __metadata("design:type", Array)
    ], AlbumApiGetListQueryParams.prototype, "tagId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=tagName" }),
        __metadata("design:type", Array)
    ], AlbumApiGetListQueryParams.prototype, "tagName", void 0);
    return AlbumApiGetListQueryParams;
}(utils_1.SpeakeasyBase));
exports.AlbumApiGetListQueryParams = AlbumApiGetListQueryParams;
var AlbumApiGetListRequest = /** @class */ (function (_super) {
    __extends(AlbumApiGetListRequest, _super);
    function AlbumApiGetListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AlbumApiGetListQueryParams)
    ], AlbumApiGetListRequest.prototype, "queryParams", void 0);
    return AlbumApiGetListRequest;
}(utils_1.SpeakeasyBase));
exports.AlbumApiGetListRequest = AlbumApiGetListRequest;
var AlbumApiGetListResponse = /** @class */ (function (_super) {
    __extends(AlbumApiGetListResponse, _super);
    function AlbumApiGetListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AlbumApiGetListResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AlbumApiGetListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PartialFindResultAlbumForApiContract)
    ], AlbumApiGetListResponse.prototype, "partialFindResultAlbumForApiContract", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AlbumApiGetListResponse.prototype, "statusCode", void 0);
    return AlbumApiGetListResponse;
}(utils_1.SpeakeasyBase));
exports.AlbumApiGetListResponse = AlbumApiGetListResponse;
