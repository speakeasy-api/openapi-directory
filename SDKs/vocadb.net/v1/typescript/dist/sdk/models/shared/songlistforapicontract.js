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
exports.SongListForApiContract = exports.SongListForApiContractStatusEnum = exports.SongListForApiContractFeaturedCategoryEnum = void 0;
var utils_1 = require("../../../internal/utils");
var userforapicontract_1 = require("./userforapicontract");
var releaseeventforapicontract_1 = require("./releaseeventforapicontract");
var commentforapicontract_1 = require("./commentforapicontract");
var entrythumbforapicontract_1 = require("./entrythumbforapicontract");
var tagusageforapicontract_1 = require("./tagusageforapicontract");
var SongListForApiContractFeaturedCategoryEnum;
(function (SongListForApiContractFeaturedCategoryEnum) {
    SongListForApiContractFeaturedCategoryEnum["Nothing"] = "Nothing";
    SongListForApiContractFeaturedCategoryEnum["Concerts"] = "Concerts";
    SongListForApiContractFeaturedCategoryEnum["VocaloidRanking"] = "VocaloidRanking";
    SongListForApiContractFeaturedCategoryEnum["Pools"] = "Pools";
    SongListForApiContractFeaturedCategoryEnum["Other"] = "Other";
})(SongListForApiContractFeaturedCategoryEnum = exports.SongListForApiContractFeaturedCategoryEnum || (exports.SongListForApiContractFeaturedCategoryEnum = {}));
var SongListForApiContractStatusEnum;
(function (SongListForApiContractStatusEnum) {
    SongListForApiContractStatusEnum["Draft"] = "Draft";
    SongListForApiContractStatusEnum["Finished"] = "Finished";
    SongListForApiContractStatusEnum["Approved"] = "Approved";
    SongListForApiContractStatusEnum["Locked"] = "Locked";
})(SongListForApiContractStatusEnum = exports.SongListForApiContractStatusEnum || (exports.SongListForApiContractStatusEnum = {}));
var SongListForApiContract = /** @class */ (function (_super) {
    __extends(SongListForApiContract, _super);
    function SongListForApiContract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=author" }),
        __metadata("design:type", userforapicontract_1.UserForApiContract)
    ], SongListForApiContract.prototype, "author", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], SongListForApiContract.prototype, "deleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], SongListForApiContract.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eventDate" }),
        __metadata("design:type", Date)
    ], SongListForApiContract.prototype, "eventDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=events", elemType: releaseeventforapicontract_1.ReleaseEventForApiContract }),
        __metadata("design:type", Array)
    ], SongListForApiContract.prototype, "events", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=featuredCategory" }),
        __metadata("design:type", String)
    ], SongListForApiContract.prototype, "featuredCategory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], SongListForApiContract.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latestComments", elemType: commentforapicontract_1.CommentForApiContract }),
        __metadata("design:type", Array)
    ], SongListForApiContract.prototype, "latestComments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mainPicture" }),
        __metadata("design:type", entrythumbforapicontract_1.EntryThumbForApiContract)
    ], SongListForApiContract.prototype, "mainPicture", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SongListForApiContract.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], SongListForApiContract.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags", elemType: tagusageforapicontract_1.TagUsageForApiContract }),
        __metadata("design:type", Array)
    ], SongListForApiContract.prototype, "tags", void 0);
    return SongListForApiContract;
}(utils_1.SpeakeasyBase));
exports.SongListForApiContract = SongListForApiContract;
