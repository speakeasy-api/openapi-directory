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
exports.UserApiGetRatedSongsResponse = exports.UserApiGetRatedSongsRequest = exports.UserApiGetRatedSongsQueryParams = exports.UserApiGetRatedSongsSortEnum = exports.UserApiGetRatedSongsRatingEnum = exports.UserApiGetRatedSongsPvServicesEnum = exports.UserApiGetRatedSongsNameMatchModeEnum = exports.UserApiGetRatedSongsLangEnum = exports.UserApiGetRatedSongsFieldsEnum = exports.UserApiGetRatedSongsArtistGroupingEnum = exports.UserApiGetRatedSongsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UserApiGetRatedSongsPathParams = /** @class */ (function (_super) {
    __extends(UserApiGetRatedSongsPathParams, _super);
    function UserApiGetRatedSongsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], UserApiGetRatedSongsPathParams.prototype, "id", void 0);
    return UserApiGetRatedSongsPathParams;
}(utils_1.SpeakeasyBase));
exports.UserApiGetRatedSongsPathParams = UserApiGetRatedSongsPathParams;
var UserApiGetRatedSongsArtistGroupingEnum;
(function (UserApiGetRatedSongsArtistGroupingEnum) {
    UserApiGetRatedSongsArtistGroupingEnum["And"] = "And";
    UserApiGetRatedSongsArtistGroupingEnum["Or"] = "Or";
})(UserApiGetRatedSongsArtistGroupingEnum = exports.UserApiGetRatedSongsArtistGroupingEnum || (exports.UserApiGetRatedSongsArtistGroupingEnum = {}));
var UserApiGetRatedSongsFieldsEnum;
(function (UserApiGetRatedSongsFieldsEnum) {
    UserApiGetRatedSongsFieldsEnum["None"] = "None";
    UserApiGetRatedSongsFieldsEnum["AdditionalNames"] = "AdditionalNames";
    UserApiGetRatedSongsFieldsEnum["Albums"] = "Albums";
    UserApiGetRatedSongsFieldsEnum["Artists"] = "Artists";
    UserApiGetRatedSongsFieldsEnum["Lyrics"] = "Lyrics";
    UserApiGetRatedSongsFieldsEnum["MainPicture"] = "MainPicture";
    UserApiGetRatedSongsFieldsEnum["Names"] = "Names";
    UserApiGetRatedSongsFieldsEnum["PVs"] = "PVs";
    UserApiGetRatedSongsFieldsEnum["ReleaseEvent"] = "ReleaseEvent";
    UserApiGetRatedSongsFieldsEnum["Tags"] = "Tags";
    UserApiGetRatedSongsFieldsEnum["ThumbUrl"] = "ThumbUrl";
    UserApiGetRatedSongsFieldsEnum["WebLinks"] = "WebLinks";
})(UserApiGetRatedSongsFieldsEnum = exports.UserApiGetRatedSongsFieldsEnum || (exports.UserApiGetRatedSongsFieldsEnum = {}));
var UserApiGetRatedSongsLangEnum;
(function (UserApiGetRatedSongsLangEnum) {
    UserApiGetRatedSongsLangEnum["Default"] = "Default";
    UserApiGetRatedSongsLangEnum["Japanese"] = "Japanese";
    UserApiGetRatedSongsLangEnum["Romaji"] = "Romaji";
    UserApiGetRatedSongsLangEnum["English"] = "English";
})(UserApiGetRatedSongsLangEnum = exports.UserApiGetRatedSongsLangEnum || (exports.UserApiGetRatedSongsLangEnum = {}));
var UserApiGetRatedSongsNameMatchModeEnum;
(function (UserApiGetRatedSongsNameMatchModeEnum) {
    UserApiGetRatedSongsNameMatchModeEnum["Auto"] = "Auto";
    UserApiGetRatedSongsNameMatchModeEnum["Partial"] = "Partial";
    UserApiGetRatedSongsNameMatchModeEnum["StartsWith"] = "StartsWith";
    UserApiGetRatedSongsNameMatchModeEnum["Exact"] = "Exact";
    UserApiGetRatedSongsNameMatchModeEnum["Words"] = "Words";
})(UserApiGetRatedSongsNameMatchModeEnum = exports.UserApiGetRatedSongsNameMatchModeEnum || (exports.UserApiGetRatedSongsNameMatchModeEnum = {}));
var UserApiGetRatedSongsPvServicesEnum;
(function (UserApiGetRatedSongsPvServicesEnum) {
    UserApiGetRatedSongsPvServicesEnum["Nothing"] = "Nothing";
    UserApiGetRatedSongsPvServicesEnum["NicoNicoDouga"] = "NicoNicoDouga";
    UserApiGetRatedSongsPvServicesEnum["Youtube"] = "Youtube";
    UserApiGetRatedSongsPvServicesEnum["SoundCloud"] = "SoundCloud";
    UserApiGetRatedSongsPvServicesEnum["Vimeo"] = "Vimeo";
    UserApiGetRatedSongsPvServicesEnum["Piapro"] = "Piapro";
    UserApiGetRatedSongsPvServicesEnum["Bilibili"] = "Bilibili";
    UserApiGetRatedSongsPvServicesEnum["File"] = "File";
    UserApiGetRatedSongsPvServicesEnum["LocalFile"] = "LocalFile";
    UserApiGetRatedSongsPvServicesEnum["Creofuga"] = "Creofuga";
    UserApiGetRatedSongsPvServicesEnum["Bandcamp"] = "Bandcamp";
})(UserApiGetRatedSongsPvServicesEnum = exports.UserApiGetRatedSongsPvServicesEnum || (exports.UserApiGetRatedSongsPvServicesEnum = {}));
var UserApiGetRatedSongsRatingEnum;
(function (UserApiGetRatedSongsRatingEnum) {
    UserApiGetRatedSongsRatingEnum["Nothing"] = "Nothing";
    UserApiGetRatedSongsRatingEnum["Dislike"] = "Dislike";
    UserApiGetRatedSongsRatingEnum["Like"] = "Like";
    UserApiGetRatedSongsRatingEnum["Favorite"] = "Favorite";
})(UserApiGetRatedSongsRatingEnum = exports.UserApiGetRatedSongsRatingEnum || (exports.UserApiGetRatedSongsRatingEnum = {}));
var UserApiGetRatedSongsSortEnum;
(function (UserApiGetRatedSongsSortEnum) {
    UserApiGetRatedSongsSortEnum["None"] = "None";
    UserApiGetRatedSongsSortEnum["Name"] = "Name";
    UserApiGetRatedSongsSortEnum["AdditionDate"] = "AdditionDate";
    UserApiGetRatedSongsSortEnum["PublishDate"] = "PublishDate";
    UserApiGetRatedSongsSortEnum["FavoritedTimes"] = "FavoritedTimes";
    UserApiGetRatedSongsSortEnum["RatingScore"] = "RatingScore";
    UserApiGetRatedSongsSortEnum["RatingDate"] = "RatingDate";
})(UserApiGetRatedSongsSortEnum = exports.UserApiGetRatedSongsSortEnum || (exports.UserApiGetRatedSongsSortEnum = {}));
var UserApiGetRatedSongsQueryParams = /** @class */ (function (_super) {
    __extends(UserApiGetRatedSongsQueryParams, _super);
    function UserApiGetRatedSongsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=advancedFilters" }),
        __metadata("design:type", Array)
    ], UserApiGetRatedSongsQueryParams.prototype, "advancedFilters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=artistGrouping" }),
        __metadata("design:type", String)
    ], UserApiGetRatedSongsQueryParams.prototype, "artistGrouping", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=artistId" }),
        __metadata("design:type", Array)
    ], UserApiGetRatedSongsQueryParams.prototype, "artistId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=childVoicebanks" }),
        __metadata("design:type", Boolean)
    ], UserApiGetRatedSongsQueryParams.prototype, "childVoicebanks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], UserApiGetRatedSongsQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=getTotalCount" }),
        __metadata("design:type", Boolean)
    ], UserApiGetRatedSongsQueryParams.prototype, "getTotalCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=groupByRating" }),
        __metadata("design:type", Boolean)
    ], UserApiGetRatedSongsQueryParams.prototype, "groupByRating", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], UserApiGetRatedSongsQueryParams.prototype, "lang", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], UserApiGetRatedSongsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=nameMatchMode" }),
        __metadata("design:type", String)
    ], UserApiGetRatedSongsQueryParams.prototype, "nameMatchMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pvServices" }),
        __metadata("design:type", String)
    ], UserApiGetRatedSongsQueryParams.prototype, "pvServices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], UserApiGetRatedSongsQueryParams.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=rating" }),
        __metadata("design:type", String)
    ], UserApiGetRatedSongsQueryParams.prototype, "rating", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=songListId" }),
        __metadata("design:type", Number)
    ], UserApiGetRatedSongsQueryParams.prototype, "songListId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], UserApiGetRatedSongsQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], UserApiGetRatedSongsQueryParams.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=tagId" }),
        __metadata("design:type", Array)
    ], UserApiGetRatedSongsQueryParams.prototype, "tagId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=tagName" }),
        __metadata("design:type", String)
    ], UserApiGetRatedSongsQueryParams.prototype, "tagName", void 0);
    return UserApiGetRatedSongsQueryParams;
}(utils_1.SpeakeasyBase));
exports.UserApiGetRatedSongsQueryParams = UserApiGetRatedSongsQueryParams;
var UserApiGetRatedSongsRequest = /** @class */ (function (_super) {
    __extends(UserApiGetRatedSongsRequest, _super);
    function UserApiGetRatedSongsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserApiGetRatedSongsPathParams)
    ], UserApiGetRatedSongsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserApiGetRatedSongsQueryParams)
    ], UserApiGetRatedSongsRequest.prototype, "queryParams", void 0);
    return UserApiGetRatedSongsRequest;
}(utils_1.SpeakeasyBase));
exports.UserApiGetRatedSongsRequest = UserApiGetRatedSongsRequest;
var UserApiGetRatedSongsResponse = /** @class */ (function (_super) {
    __extends(UserApiGetRatedSongsResponse, _super);
    function UserApiGetRatedSongsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UserApiGetRatedSongsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserApiGetRatedSongsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PartialFindResultRatedSongForUserForApiContract)
    ], UserApiGetRatedSongsResponse.prototype, "partialFindResultRatedSongForUserForApiContract", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UserApiGetRatedSongsResponse.prototype, "statusCode", void 0);
    return UserApiGetRatedSongsResponse;
}(utils_1.SpeakeasyBase));
exports.UserApiGetRatedSongsResponse = UserApiGetRatedSongsResponse;
