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
exports.SongListApiGetSongsResponse = exports.SongListApiGetSongsRequest = exports.SongListApiGetSongsQueryParams = exports.SongListApiGetSongsSortEnum = exports.SongListApiGetSongsPvServicesEnum = exports.SongListApiGetSongsNameMatchModeEnum = exports.SongListApiGetSongsLangEnum = exports.SongListApiGetSongsFieldsEnum = exports.SongListApiGetSongsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SongListApiGetSongsPathParams = /** @class */ (function (_super) {
    __extends(SongListApiGetSongsPathParams, _super);
    function SongListApiGetSongsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=listId" }),
        __metadata("design:type", Number)
    ], SongListApiGetSongsPathParams.prototype, "listId", void 0);
    return SongListApiGetSongsPathParams;
}(utils_1.SpeakeasyBase));
exports.SongListApiGetSongsPathParams = SongListApiGetSongsPathParams;
var SongListApiGetSongsFieldsEnum;
(function (SongListApiGetSongsFieldsEnum) {
    SongListApiGetSongsFieldsEnum["None"] = "None";
    SongListApiGetSongsFieldsEnum["AdditionalNames"] = "AdditionalNames";
    SongListApiGetSongsFieldsEnum["Albums"] = "Albums";
    SongListApiGetSongsFieldsEnum["Artists"] = "Artists";
    SongListApiGetSongsFieldsEnum["Lyrics"] = "Lyrics";
    SongListApiGetSongsFieldsEnum["MainPicture"] = "MainPicture";
    SongListApiGetSongsFieldsEnum["Names"] = "Names";
    SongListApiGetSongsFieldsEnum["PVs"] = "PVs";
    SongListApiGetSongsFieldsEnum["ReleaseEvent"] = "ReleaseEvent";
    SongListApiGetSongsFieldsEnum["Tags"] = "Tags";
    SongListApiGetSongsFieldsEnum["ThumbUrl"] = "ThumbUrl";
    SongListApiGetSongsFieldsEnum["WebLinks"] = "WebLinks";
})(SongListApiGetSongsFieldsEnum = exports.SongListApiGetSongsFieldsEnum || (exports.SongListApiGetSongsFieldsEnum = {}));
var SongListApiGetSongsLangEnum;
(function (SongListApiGetSongsLangEnum) {
    SongListApiGetSongsLangEnum["Default"] = "Default";
    SongListApiGetSongsLangEnum["Japanese"] = "Japanese";
    SongListApiGetSongsLangEnum["Romaji"] = "Romaji";
    SongListApiGetSongsLangEnum["English"] = "English";
})(SongListApiGetSongsLangEnum = exports.SongListApiGetSongsLangEnum || (exports.SongListApiGetSongsLangEnum = {}));
var SongListApiGetSongsNameMatchModeEnum;
(function (SongListApiGetSongsNameMatchModeEnum) {
    SongListApiGetSongsNameMatchModeEnum["Auto"] = "Auto";
    SongListApiGetSongsNameMatchModeEnum["Partial"] = "Partial";
    SongListApiGetSongsNameMatchModeEnum["StartsWith"] = "StartsWith";
    SongListApiGetSongsNameMatchModeEnum["Exact"] = "Exact";
    SongListApiGetSongsNameMatchModeEnum["Words"] = "Words";
})(SongListApiGetSongsNameMatchModeEnum = exports.SongListApiGetSongsNameMatchModeEnum || (exports.SongListApiGetSongsNameMatchModeEnum = {}));
var SongListApiGetSongsPvServicesEnum;
(function (SongListApiGetSongsPvServicesEnum) {
    SongListApiGetSongsPvServicesEnum["Nothing"] = "Nothing";
    SongListApiGetSongsPvServicesEnum["NicoNicoDouga"] = "NicoNicoDouga";
    SongListApiGetSongsPvServicesEnum["Youtube"] = "Youtube";
    SongListApiGetSongsPvServicesEnum["SoundCloud"] = "SoundCloud";
    SongListApiGetSongsPvServicesEnum["Vimeo"] = "Vimeo";
    SongListApiGetSongsPvServicesEnum["Piapro"] = "Piapro";
    SongListApiGetSongsPvServicesEnum["Bilibili"] = "Bilibili";
    SongListApiGetSongsPvServicesEnum["File"] = "File";
    SongListApiGetSongsPvServicesEnum["LocalFile"] = "LocalFile";
    SongListApiGetSongsPvServicesEnum["Creofuga"] = "Creofuga";
    SongListApiGetSongsPvServicesEnum["Bandcamp"] = "Bandcamp";
})(SongListApiGetSongsPvServicesEnum = exports.SongListApiGetSongsPvServicesEnum || (exports.SongListApiGetSongsPvServicesEnum = {}));
var SongListApiGetSongsSortEnum;
(function (SongListApiGetSongsSortEnum) {
    SongListApiGetSongsSortEnum["None"] = "None";
    SongListApiGetSongsSortEnum["Name"] = "Name";
    SongListApiGetSongsSortEnum["AdditionDate"] = "AdditionDate";
    SongListApiGetSongsSortEnum["PublishDate"] = "PublishDate";
    SongListApiGetSongsSortEnum["FavoritedTimes"] = "FavoritedTimes";
    SongListApiGetSongsSortEnum["RatingScore"] = "RatingScore";
    SongListApiGetSongsSortEnum["TagUsageCount"] = "TagUsageCount";
})(SongListApiGetSongsSortEnum = exports.SongListApiGetSongsSortEnum || (exports.SongListApiGetSongsSortEnum = {}));
var SongListApiGetSongsQueryParams = /** @class */ (function (_super) {
    __extends(SongListApiGetSongsQueryParams, _super);
    function SongListApiGetSongsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=advancedFilters" }),
        __metadata("design:type", Array)
    ], SongListApiGetSongsQueryParams.prototype, "advancedFilters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=artistId" }),
        __metadata("design:type", Array)
    ], SongListApiGetSongsQueryParams.prototype, "artistId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=childVoicebanks" }),
        __metadata("design:type", Boolean)
    ], SongListApiGetSongsQueryParams.prototype, "childVoicebanks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SongListApiGetSongsQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=getTotalCount" }),
        __metadata("design:type", Boolean)
    ], SongListApiGetSongsQueryParams.prototype, "getTotalCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], SongListApiGetSongsQueryParams.prototype, "lang", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], SongListApiGetSongsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=nameMatchMode" }),
        __metadata("design:type", String)
    ], SongListApiGetSongsQueryParams.prototype, "nameMatchMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pvServices" }),
        __metadata("design:type", String)
    ], SongListApiGetSongsQueryParams.prototype, "pvServices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], SongListApiGetSongsQueryParams.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=songTypes" }),
        __metadata("design:type", String)
    ], SongListApiGetSongsQueryParams.prototype, "songTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], SongListApiGetSongsQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], SongListApiGetSongsQueryParams.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=tagId" }),
        __metadata("design:type", Array)
    ], SongListApiGetSongsQueryParams.prototype, "tagId", void 0);
    return SongListApiGetSongsQueryParams;
}(utils_1.SpeakeasyBase));
exports.SongListApiGetSongsQueryParams = SongListApiGetSongsQueryParams;
var SongListApiGetSongsRequest = /** @class */ (function (_super) {
    __extends(SongListApiGetSongsRequest, _super);
    function SongListApiGetSongsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SongListApiGetSongsPathParams)
    ], SongListApiGetSongsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SongListApiGetSongsQueryParams)
    ], SongListApiGetSongsRequest.prototype, "queryParams", void 0);
    return SongListApiGetSongsRequest;
}(utils_1.SpeakeasyBase));
exports.SongListApiGetSongsRequest = SongListApiGetSongsRequest;
var SongListApiGetSongsResponse = /** @class */ (function (_super) {
    __extends(SongListApiGetSongsResponse, _super);
    function SongListApiGetSongsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], SongListApiGetSongsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SongListApiGetSongsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PartialFindResultSongInListForApiContract)
    ], SongListApiGetSongsResponse.prototype, "partialFindResultSongInListForApiContract", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SongListApiGetSongsResponse.prototype, "statusCode", void 0);
    return SongListApiGetSongsResponse;
}(utils_1.SpeakeasyBase));
exports.SongListApiGetSongsResponse = SongListApiGetSongsResponse;
