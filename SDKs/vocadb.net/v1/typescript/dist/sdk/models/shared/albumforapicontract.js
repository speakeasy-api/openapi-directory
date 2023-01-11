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
exports.AlbumForApiContract = exports.AlbumForApiContractStatusEnum = exports.AlbumForApiContractDiscTypeEnum = exports.AlbumForApiContractDefaultNameLanguageEnum = void 0;
var utils_1 = require("../../../internal/utils");
var artistforalbumforapicontract_1 = require("./artistforalbumforapicontract");
var albumdiscpropertiescontract_1 = require("./albumdiscpropertiescontract");
var albumidentifiercontract_1 = require("./albumidentifiercontract");
var entrythumbforapicontract_1 = require("./entrythumbforapicontract");
var localizedstringcontract_1 = require("./localizedstringcontract");
var pvcontract_1 = require("./pvcontract");
var optionaldatetimecontract_1 = require("./optionaldatetimecontract");
var releaseeventforapicontract_1 = require("./releaseeventforapicontract");
var tagusageforapicontract_1 = require("./tagusageforapicontract");
var songinalbumforapicontract_1 = require("./songinalbumforapicontract");
var weblinkforapicontract_1 = require("./weblinkforapicontract");
var AlbumForApiContractDefaultNameLanguageEnum;
(function (AlbumForApiContractDefaultNameLanguageEnum) {
    AlbumForApiContractDefaultNameLanguageEnum["Unspecified"] = "Unspecified";
    AlbumForApiContractDefaultNameLanguageEnum["Japanese"] = "Japanese";
    AlbumForApiContractDefaultNameLanguageEnum["Romaji"] = "Romaji";
    AlbumForApiContractDefaultNameLanguageEnum["English"] = "English";
})(AlbumForApiContractDefaultNameLanguageEnum = exports.AlbumForApiContractDefaultNameLanguageEnum || (exports.AlbumForApiContractDefaultNameLanguageEnum = {}));
var AlbumForApiContractDiscTypeEnum;
(function (AlbumForApiContractDiscTypeEnum) {
    AlbumForApiContractDiscTypeEnum["Unknown"] = "Unknown";
    AlbumForApiContractDiscTypeEnum["Album"] = "Album";
    AlbumForApiContractDiscTypeEnum["Single"] = "Single";
    AlbumForApiContractDiscTypeEnum["Ep"] = "EP";
    AlbumForApiContractDiscTypeEnum["SplitAlbum"] = "SplitAlbum";
    AlbumForApiContractDiscTypeEnum["Compilation"] = "Compilation";
    AlbumForApiContractDiscTypeEnum["Video"] = "Video";
    AlbumForApiContractDiscTypeEnum["Artbook"] = "Artbook";
    AlbumForApiContractDiscTypeEnum["Game"] = "Game";
    AlbumForApiContractDiscTypeEnum["Fanmade"] = "Fanmade";
    AlbumForApiContractDiscTypeEnum["Instrumental"] = "Instrumental";
    AlbumForApiContractDiscTypeEnum["Other"] = "Other";
})(AlbumForApiContractDiscTypeEnum = exports.AlbumForApiContractDiscTypeEnum || (exports.AlbumForApiContractDiscTypeEnum = {}));
var AlbumForApiContractStatusEnum;
(function (AlbumForApiContractStatusEnum) {
    AlbumForApiContractStatusEnum["Draft"] = "Draft";
    AlbumForApiContractStatusEnum["Finished"] = "Finished";
    AlbumForApiContractStatusEnum["Approved"] = "Approved";
    AlbumForApiContractStatusEnum["Locked"] = "Locked";
})(AlbumForApiContractStatusEnum = exports.AlbumForApiContractStatusEnum || (exports.AlbumForApiContractStatusEnum = {}));
var AlbumForApiContract = /** @class */ (function (_super) {
    __extends(AlbumForApiContract, _super);
    function AlbumForApiContract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additionalNames" }),
        __metadata("design:type", String)
    ], AlbumForApiContract.prototype, "additionalNames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=artistString" }),
        __metadata("design:type", String)
    ], AlbumForApiContract.prototype, "artistString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=artists", elemType: artistforalbumforapicontract_1.ArtistForAlbumForApiContract }),
        __metadata("design:type", Array)
    ], AlbumForApiContract.prototype, "artists", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=barcode" }),
        __metadata("design:type", String)
    ], AlbumForApiContract.prototype, "barcode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=catalogNumber" }),
        __metadata("design:type", String)
    ], AlbumForApiContract.prototype, "catalogNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createDate" }),
        __metadata("design:type", Date)
    ], AlbumForApiContract.prototype, "createDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=defaultName" }),
        __metadata("design:type", String)
    ], AlbumForApiContract.prototype, "defaultName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=defaultNameLanguage" }),
        __metadata("design:type", String)
    ], AlbumForApiContract.prototype, "defaultNameLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], AlbumForApiContract.prototype, "deleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], AlbumForApiContract.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discType" }),
        __metadata("design:type", String)
    ], AlbumForApiContract.prototype, "discType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discs", elemType: albumdiscpropertiescontract_1.AlbumDiscPropertiesContract }),
        __metadata("design:type", Array)
    ], AlbumForApiContract.prototype, "discs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], AlbumForApiContract.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=identifiers", elemType: albumidentifiercontract_1.AlbumIdentifierContract }),
        __metadata("design:type", Array)
    ], AlbumForApiContract.prototype, "identifiers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mainPicture" }),
        __metadata("design:type", entrythumbforapicontract_1.EntryThumbForApiContract)
    ], AlbumForApiContract.prototype, "mainPicture", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mergedTo" }),
        __metadata("design:type", Number)
    ], AlbumForApiContract.prototype, "mergedTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AlbumForApiContract.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=names", elemType: localizedstringcontract_1.LocalizedStringContract }),
        __metadata("design:type", Array)
    ], AlbumForApiContract.prototype, "names", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pvs", elemType: pvcontract_1.PvContract }),
        __metadata("design:type", Array)
    ], AlbumForApiContract.prototype, "pvs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ratingAverage" }),
        __metadata("design:type", Number)
    ], AlbumForApiContract.prototype, "ratingAverage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ratingCount" }),
        __metadata("design:type", Number)
    ], AlbumForApiContract.prototype, "ratingCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=releaseDate" }),
        __metadata("design:type", optionaldatetimecontract_1.OptionalDateTimeContract)
    ], AlbumForApiContract.prototype, "releaseDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=releaseEvent" }),
        __metadata("design:type", releaseeventforapicontract_1.ReleaseEventForApiContract)
    ], AlbumForApiContract.prototype, "releaseEvent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AlbumForApiContract.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags", elemType: tagusageforapicontract_1.TagUsageForApiContract }),
        __metadata("design:type", Array)
    ], AlbumForApiContract.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tracks", elemType: songinalbumforapicontract_1.SongInAlbumForApiContract }),
        __metadata("design:type", Array)
    ], AlbumForApiContract.prototype, "tracks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], AlbumForApiContract.prototype, "version", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webLinks", elemType: weblinkforapicontract_1.WebLinkForApiContract }),
        __metadata("design:type", Array)
    ], AlbumForApiContract.prototype, "webLinks", void 0);
    return AlbumForApiContract;
}(utils_1.SpeakeasyBase));
exports.AlbumForApiContract = AlbumForApiContract;
