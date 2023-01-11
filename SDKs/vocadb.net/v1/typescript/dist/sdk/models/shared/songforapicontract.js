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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongForApiContractInput = exports.SongForApiContract = exports.SongForApiContractStatusEnum = exports.SongForApiContractSongTypeEnum = exports.SongForApiContractPvServicesEnum = exports.SongForApiContractDefaultNameLanguageEnum = void 0;
var utils_1 = require("../../../internal/utils");
var albumcontract_1 = require("./albumcontract");
var artistforsongcontract_1 = require("./artistforsongcontract");
var lyricsforsongcontract_1 = require("./lyricsforsongcontract");
var entrythumbforapicontract_1 = require("./entrythumbforapicontract");
var localizedstringcontract_1 = require("./localizedstringcontract");
var pvcontract_1 = require("./pvcontract");
var releaseeventforapicontract_1 = require("./releaseeventforapicontract");
var tagusageforapicontract_1 = require("./tagusageforapicontract");
var weblinkforapicontract_1 = require("./weblinkforapicontract");
var albumcontract_2 = require("./albumcontract");
var releaseeventforapicontract_2 = require("./releaseeventforapicontract");
var SongForApiContractDefaultNameLanguageEnum;
(function (SongForApiContractDefaultNameLanguageEnum) {
    SongForApiContractDefaultNameLanguageEnum["Unspecified"] = "Unspecified";
    SongForApiContractDefaultNameLanguageEnum["Japanese"] = "Japanese";
    SongForApiContractDefaultNameLanguageEnum["Romaji"] = "Romaji";
    SongForApiContractDefaultNameLanguageEnum["English"] = "English";
})(SongForApiContractDefaultNameLanguageEnum = exports.SongForApiContractDefaultNameLanguageEnum || (exports.SongForApiContractDefaultNameLanguageEnum = {}));
var SongForApiContractPvServicesEnum;
(function (SongForApiContractPvServicesEnum) {
    SongForApiContractPvServicesEnum["Nothing"] = "Nothing";
    SongForApiContractPvServicesEnum["NicoNicoDouga"] = "NicoNicoDouga";
    SongForApiContractPvServicesEnum["Youtube"] = "Youtube";
    SongForApiContractPvServicesEnum["SoundCloud"] = "SoundCloud";
    SongForApiContractPvServicesEnum["Vimeo"] = "Vimeo";
    SongForApiContractPvServicesEnum["Piapro"] = "Piapro";
    SongForApiContractPvServicesEnum["Bilibili"] = "Bilibili";
    SongForApiContractPvServicesEnum["File"] = "File";
    SongForApiContractPvServicesEnum["LocalFile"] = "LocalFile";
    SongForApiContractPvServicesEnum["Creofuga"] = "Creofuga";
    SongForApiContractPvServicesEnum["Bandcamp"] = "Bandcamp";
})(SongForApiContractPvServicesEnum = exports.SongForApiContractPvServicesEnum || (exports.SongForApiContractPvServicesEnum = {}));
var SongForApiContractSongTypeEnum;
(function (SongForApiContractSongTypeEnum) {
    SongForApiContractSongTypeEnum["Unspecified"] = "Unspecified";
    SongForApiContractSongTypeEnum["Original"] = "Original";
    SongForApiContractSongTypeEnum["Remaster"] = "Remaster";
    SongForApiContractSongTypeEnum["Remix"] = "Remix";
    SongForApiContractSongTypeEnum["Cover"] = "Cover";
    SongForApiContractSongTypeEnum["Arrangement"] = "Arrangement";
    SongForApiContractSongTypeEnum["Instrumental"] = "Instrumental";
    SongForApiContractSongTypeEnum["Mashup"] = "Mashup";
    SongForApiContractSongTypeEnum["MusicPv"] = "MusicPV";
    SongForApiContractSongTypeEnum["DramaPv"] = "DramaPV";
    SongForApiContractSongTypeEnum["Live"] = "Live";
    SongForApiContractSongTypeEnum["Illustration"] = "Illustration";
    SongForApiContractSongTypeEnum["Other"] = "Other";
})(SongForApiContractSongTypeEnum = exports.SongForApiContractSongTypeEnum || (exports.SongForApiContractSongTypeEnum = {}));
var SongForApiContractStatusEnum;
(function (SongForApiContractStatusEnum) {
    SongForApiContractStatusEnum["Draft"] = "Draft";
    SongForApiContractStatusEnum["Finished"] = "Finished";
    SongForApiContractStatusEnum["Approved"] = "Approved";
    SongForApiContractStatusEnum["Locked"] = "Locked";
})(SongForApiContractStatusEnum = exports.SongForApiContractStatusEnum || (exports.SongForApiContractStatusEnum = {}));
var SongForApiContract = /** @class */ (function (_super) {
    __extends(SongForApiContract, _super);
    function SongForApiContract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additionalNames" }),
        __metadata("design:type", String)
    ], SongForApiContract.prototype, "additionalNames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=albums", elemType: albumcontract_1.AlbumContract }),
        __metadata("design:type", Array)
    ], SongForApiContract.prototype, "albums", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=artistString" }),
        __metadata("design:type", String)
    ], SongForApiContract.prototype, "artistString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=artists", elemType: artistforsongcontract_1.ArtistForSongContract }),
        __metadata("design:type", Array)
    ], SongForApiContract.prototype, "artists", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createDate" }),
        __metadata("design:type", Date)
    ], SongForApiContract.prototype, "createDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=defaultName" }),
        __metadata("design:type", String)
    ], SongForApiContract.prototype, "defaultName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=defaultNameLanguage" }),
        __metadata("design:type", String)
    ], SongForApiContract.prototype, "defaultNameLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], SongForApiContract.prototype, "deleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=favoritedTimes" }),
        __metadata("design:type", Number)
    ], SongForApiContract.prototype, "favoritedTimes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], SongForApiContract.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lengthSeconds" }),
        __metadata("design:type", Number)
    ], SongForApiContract.prototype, "lengthSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lyrics", elemType: lyricsforsongcontract_1.LyricsForSongContract }),
        __metadata("design:type", Array)
    ], SongForApiContract.prototype, "lyrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mainPicture" }),
        __metadata("design:type", entrythumbforapicontract_1.EntryThumbForApiContract)
    ], SongForApiContract.prototype, "mainPicture", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mergedTo" }),
        __metadata("design:type", Number)
    ], SongForApiContract.prototype, "mergedTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SongForApiContract.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=names", elemType: localizedstringcontract_1.LocalizedStringContract }),
        __metadata("design:type", Array)
    ], SongForApiContract.prototype, "names", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=originalVersionId" }),
        __metadata("design:type", Number)
    ], SongForApiContract.prototype, "originalVersionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publishDate" }),
        __metadata("design:type", Date)
    ], SongForApiContract.prototype, "publishDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pvServices" }),
        __metadata("design:type", String)
    ], SongForApiContract.prototype, "pvServices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pvs", elemType: pvcontract_1.PvContract }),
        __metadata("design:type", Array)
    ], SongForApiContract.prototype, "pvs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ratingScore" }),
        __metadata("design:type", Number)
    ], SongForApiContract.prototype, "ratingScore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=releaseEvent" }),
        __metadata("design:type", releaseeventforapicontract_1.ReleaseEventForApiContract)
    ], SongForApiContract.prototype, "releaseEvent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=songType" }),
        __metadata("design:type", String)
    ], SongForApiContract.prototype, "songType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], SongForApiContract.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags", elemType: tagusageforapicontract_1.TagUsageForApiContract }),
        __metadata("design:type", Array)
    ], SongForApiContract.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=thumbUrl" }),
        __metadata("design:type", String)
    ], SongForApiContract.prototype, "thumbUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], SongForApiContract.prototype, "version", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webLinks", elemType: weblinkforapicontract_1.WebLinkForApiContract }),
        __metadata("design:type", Array)
    ], SongForApiContract.prototype, "webLinks", void 0);
    return SongForApiContract;
}(utils_1.SpeakeasyBase));
exports.SongForApiContract = SongForApiContract;
var SongForApiContractInput = /** @class */ (function (_super) {
    __extends(SongForApiContractInput, _super);
    function SongForApiContractInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additionalNames" }),
        __metadata("design:type", String)
    ], SongForApiContractInput.prototype, "additionalNames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=albums", elemType: albumcontract_2.AlbumContractInput }),
        __metadata("design:type", Array)
    ], SongForApiContractInput.prototype, "albums", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=artistString" }),
        __metadata("design:type", String)
    ], SongForApiContractInput.prototype, "artistString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=artists", elemType: artistforsongcontract_1.ArtistForSongContract }),
        __metadata("design:type", Array)
    ], SongForApiContractInput.prototype, "artists", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createDate" }),
        __metadata("design:type", Date)
    ], SongForApiContractInput.prototype, "createDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=defaultName" }),
        __metadata("design:type", String)
    ], SongForApiContractInput.prototype, "defaultName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=defaultNameLanguage" }),
        __metadata("design:type", String)
    ], SongForApiContractInput.prototype, "defaultNameLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], SongForApiContractInput.prototype, "deleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=favoritedTimes" }),
        __metadata("design:type", Number)
    ], SongForApiContractInput.prototype, "favoritedTimes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], SongForApiContractInput.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lengthSeconds" }),
        __metadata("design:type", Number)
    ], SongForApiContractInput.prototype, "lengthSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lyrics", elemType: lyricsforsongcontract_1.LyricsForSongContract }),
        __metadata("design:type", Array)
    ], SongForApiContractInput.prototype, "lyrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mainPicture" }),
        __metadata("design:type", entrythumbforapicontract_1.EntryThumbForApiContract)
    ], SongForApiContractInput.prototype, "mainPicture", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mergedTo" }),
        __metadata("design:type", Number)
    ], SongForApiContractInput.prototype, "mergedTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SongForApiContractInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=names", elemType: localizedstringcontract_1.LocalizedStringContract }),
        __metadata("design:type", Array)
    ], SongForApiContractInput.prototype, "names", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=originalVersionId" }),
        __metadata("design:type", Number)
    ], SongForApiContractInput.prototype, "originalVersionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publishDate" }),
        __metadata("design:type", Date)
    ], SongForApiContractInput.prototype, "publishDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pvServices" }),
        __metadata("design:type", String)
    ], SongForApiContractInput.prototype, "pvServices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pvs", elemType: pvcontract_1.PvContract }),
        __metadata("design:type", Array)
    ], SongForApiContractInput.prototype, "pvs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ratingScore" }),
        __metadata("design:type", Number)
    ], SongForApiContractInput.prototype, "ratingScore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=releaseEvent" }),
        __metadata("design:type", releaseeventforapicontract_2.ReleaseEventForApiContractInput)
    ], SongForApiContractInput.prototype, "releaseEvent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=songType" }),
        __metadata("design:type", String)
    ], SongForApiContractInput.prototype, "songType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], SongForApiContractInput.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags", elemType: tagusageforapicontract_1.TagUsageForApiContract }),
        __metadata("design:type", Array)
    ], SongForApiContractInput.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=thumbUrl" }),
        __metadata("design:type", String)
    ], SongForApiContractInput.prototype, "thumbUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], SongForApiContractInput.prototype, "version", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webLinks", elemType: weblinkforapicontract_1.WebLinkForApiContract }),
        __metadata("design:type", Array)
    ], SongForApiContractInput.prototype, "webLinks", void 0);
    return SongForApiContractInput;
}(utils_1.SpeakeasyBase));
exports.SongForApiContractInput = SongForApiContractInput;
