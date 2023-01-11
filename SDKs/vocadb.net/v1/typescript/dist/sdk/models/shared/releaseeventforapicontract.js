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
exports.ReleaseEventForApiContractInput = exports.ReleaseEventForApiContract = exports.ReleaseEventForApiContractStatusEnum = exports.ReleaseEventForApiContractCategoryEnum = void 0;
var utils_1 = require("../../../internal/utils");
var artistforeventcontract_1 = require("./artistforeventcontract");
var entrythumbforapicontract_1 = require("./entrythumbforapicontract");
var localizedstringcontract_1 = require("./localizedstringcontract");
var releaseeventseriescontract_1 = require("./releaseeventseriescontract");
var songlistbasecontract_1 = require("./songlistbasecontract");
var tagusageforapicontract_1 = require("./tagusageforapicontract");
var venueforapicontract_1 = require("./venueforapicontract");
var weblinkforapicontract_1 = require("./weblinkforapicontract");
var venueforapicontract_2 = require("./venueforapicontract");
var ReleaseEventForApiContractCategoryEnum;
(function (ReleaseEventForApiContractCategoryEnum) {
    ReleaseEventForApiContractCategoryEnum["Unspecified"] = "Unspecified";
    ReleaseEventForApiContractCategoryEnum["AlbumRelease"] = "AlbumRelease";
    ReleaseEventForApiContractCategoryEnum["Anniversary"] = "Anniversary";
    ReleaseEventForApiContractCategoryEnum["Club"] = "Club";
    ReleaseEventForApiContractCategoryEnum["Concert"] = "Concert";
    ReleaseEventForApiContractCategoryEnum["Contest"] = "Contest";
    ReleaseEventForApiContractCategoryEnum["Convention"] = "Convention";
    ReleaseEventForApiContractCategoryEnum["Other"] = "Other";
})(ReleaseEventForApiContractCategoryEnum = exports.ReleaseEventForApiContractCategoryEnum || (exports.ReleaseEventForApiContractCategoryEnum = {}));
var ReleaseEventForApiContractStatusEnum;
(function (ReleaseEventForApiContractStatusEnum) {
    ReleaseEventForApiContractStatusEnum["Draft"] = "Draft";
    ReleaseEventForApiContractStatusEnum["Finished"] = "Finished";
    ReleaseEventForApiContractStatusEnum["Approved"] = "Approved";
    ReleaseEventForApiContractStatusEnum["Locked"] = "Locked";
})(ReleaseEventForApiContractStatusEnum = exports.ReleaseEventForApiContractStatusEnum || (exports.ReleaseEventForApiContractStatusEnum = {}));
var ReleaseEventForApiContract = /** @class */ (function (_super) {
    __extends(ReleaseEventForApiContract, _super);
    function ReleaseEventForApiContract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additionalNames" }),
        __metadata("design:type", String)
    ], ReleaseEventForApiContract.prototype, "additionalNames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=artists", elemType: artistforeventcontract_1.ArtistForEventContract }),
        __metadata("design:type", Array)
    ], ReleaseEventForApiContract.prototype, "artists", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], ReleaseEventForApiContract.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], ReleaseEventForApiContract.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ReleaseEventForApiContract.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endDate" }),
        __metadata("design:type", Date)
    ], ReleaseEventForApiContract.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ReleaseEventForApiContract.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mainPicture" }),
        __metadata("design:type", entrythumbforapicontract_1.EntryThumbForApiContract)
    ], ReleaseEventForApiContract.prototype, "mainPicture", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReleaseEventForApiContract.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=names", elemType: localizedstringcontract_1.LocalizedStringContract }),
        __metadata("design:type", Array)
    ], ReleaseEventForApiContract.prototype, "names", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=series" }),
        __metadata("design:type", releaseeventseriescontract_1.ReleaseEventSeriesContract)
    ], ReleaseEventForApiContract.prototype, "series", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=seriesId" }),
        __metadata("design:type", Number)
    ], ReleaseEventForApiContract.prototype, "seriesId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=seriesNumber" }),
        __metadata("design:type", Number)
    ], ReleaseEventForApiContract.prototype, "seriesNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=seriesSuffix" }),
        __metadata("design:type", String)
    ], ReleaseEventForApiContract.prototype, "seriesSuffix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=songList" }),
        __metadata("design:type", songlistbasecontract_1.SongListBaseContract)
    ], ReleaseEventForApiContract.prototype, "songList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ReleaseEventForApiContract.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags", elemType: tagusageforapicontract_1.TagUsageForApiContract }),
        __metadata("design:type", Array)
    ], ReleaseEventForApiContract.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urlSlug" }),
        __metadata("design:type", String)
    ], ReleaseEventForApiContract.prototype, "urlSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=venue" }),
        __metadata("design:type", venueforapicontract_1.VenueForApiContract)
    ], ReleaseEventForApiContract.prototype, "venue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=venueName" }),
        __metadata("design:type", String)
    ], ReleaseEventForApiContract.prototype, "venueName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], ReleaseEventForApiContract.prototype, "version", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webLinks", elemType: weblinkforapicontract_1.WebLinkForApiContract }),
        __metadata("design:type", Array)
    ], ReleaseEventForApiContract.prototype, "webLinks", void 0);
    return ReleaseEventForApiContract;
}(utils_1.SpeakeasyBase));
exports.ReleaseEventForApiContract = ReleaseEventForApiContract;
var ReleaseEventForApiContractInput = /** @class */ (function (_super) {
    __extends(ReleaseEventForApiContractInput, _super);
    function ReleaseEventForApiContractInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additionalNames" }),
        __metadata("design:type", String)
    ], ReleaseEventForApiContractInput.prototype, "additionalNames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=artists", elemType: artistforeventcontract_1.ArtistForEventContract }),
        __metadata("design:type", Array)
    ], ReleaseEventForApiContractInput.prototype, "artists", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], ReleaseEventForApiContractInput.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], ReleaseEventForApiContractInput.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ReleaseEventForApiContractInput.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endDate" }),
        __metadata("design:type", Date)
    ], ReleaseEventForApiContractInput.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ReleaseEventForApiContractInput.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mainPicture" }),
        __metadata("design:type", entrythumbforapicontract_1.EntryThumbForApiContract)
    ], ReleaseEventForApiContractInput.prototype, "mainPicture", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReleaseEventForApiContractInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=names", elemType: localizedstringcontract_1.LocalizedStringContract }),
        __metadata("design:type", Array)
    ], ReleaseEventForApiContractInput.prototype, "names", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=series" }),
        __metadata("design:type", releaseeventseriescontract_1.ReleaseEventSeriesContract)
    ], ReleaseEventForApiContractInput.prototype, "series", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=seriesId" }),
        __metadata("design:type", Number)
    ], ReleaseEventForApiContractInput.prototype, "seriesId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=seriesNumber" }),
        __metadata("design:type", Number)
    ], ReleaseEventForApiContractInput.prototype, "seriesNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=seriesSuffix" }),
        __metadata("design:type", String)
    ], ReleaseEventForApiContractInput.prototype, "seriesSuffix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=songList" }),
        __metadata("design:type", songlistbasecontract_1.SongListBaseContract)
    ], ReleaseEventForApiContractInput.prototype, "songList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ReleaseEventForApiContractInput.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags", elemType: tagusageforapicontract_1.TagUsageForApiContract }),
        __metadata("design:type", Array)
    ], ReleaseEventForApiContractInput.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urlSlug" }),
        __metadata("design:type", String)
    ], ReleaseEventForApiContractInput.prototype, "urlSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=venue" }),
        __metadata("design:type", venueforapicontract_2.VenueForApiContractInput)
    ], ReleaseEventForApiContractInput.prototype, "venue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=venueName" }),
        __metadata("design:type", String)
    ], ReleaseEventForApiContractInput.prototype, "venueName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], ReleaseEventForApiContractInput.prototype, "version", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webLinks", elemType: weblinkforapicontract_1.WebLinkForApiContract }),
        __metadata("design:type", Array)
    ], ReleaseEventForApiContractInput.prototype, "webLinks", void 0);
    return ReleaseEventForApiContractInput;
}(utils_1.SpeakeasyBase));
exports.ReleaseEventForApiContractInput = ReleaseEventForApiContractInput;
