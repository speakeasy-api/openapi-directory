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
exports.AlbumContractInput = exports.AlbumContract = exports.AlbumContractStatusEnum = exports.AlbumContractDiscTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var optionaldatetimecontract_1 = require("./optionaldatetimecontract");
var releaseeventforapicontract_1 = require("./releaseeventforapicontract");
var releaseeventforapicontract_2 = require("./releaseeventforapicontract");
var AlbumContractDiscTypeEnum;
(function (AlbumContractDiscTypeEnum) {
    AlbumContractDiscTypeEnum["Unknown"] = "Unknown";
    AlbumContractDiscTypeEnum["Album"] = "Album";
    AlbumContractDiscTypeEnum["Single"] = "Single";
    AlbumContractDiscTypeEnum["Ep"] = "EP";
    AlbumContractDiscTypeEnum["SplitAlbum"] = "SplitAlbum";
    AlbumContractDiscTypeEnum["Compilation"] = "Compilation";
    AlbumContractDiscTypeEnum["Video"] = "Video";
    AlbumContractDiscTypeEnum["Artbook"] = "Artbook";
    AlbumContractDiscTypeEnum["Game"] = "Game";
    AlbumContractDiscTypeEnum["Fanmade"] = "Fanmade";
    AlbumContractDiscTypeEnum["Instrumental"] = "Instrumental";
    AlbumContractDiscTypeEnum["Other"] = "Other";
})(AlbumContractDiscTypeEnum = exports.AlbumContractDiscTypeEnum || (exports.AlbumContractDiscTypeEnum = {}));
var AlbumContractStatusEnum;
(function (AlbumContractStatusEnum) {
    AlbumContractStatusEnum["Draft"] = "Draft";
    AlbumContractStatusEnum["Finished"] = "Finished";
    AlbumContractStatusEnum["Approved"] = "Approved";
    AlbumContractStatusEnum["Locked"] = "Locked";
})(AlbumContractStatusEnum = exports.AlbumContractStatusEnum || (exports.AlbumContractStatusEnum = {}));
var AlbumContract = /** @class */ (function (_super) {
    __extends(AlbumContract, _super);
    function AlbumContract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additionalNames" }),
        __metadata("design:type", String)
    ], AlbumContract.prototype, "additionalNames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=artistString" }),
        __metadata("design:type", String)
    ], AlbumContract.prototype, "artistString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=coverPictureMime" }),
        __metadata("design:type", String)
    ], AlbumContract.prototype, "coverPictureMime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createDate" }),
        __metadata("design:type", Date)
    ], AlbumContract.prototype, "createDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], AlbumContract.prototype, "deleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discType" }),
        __metadata("design:type", String)
    ], AlbumContract.prototype, "discType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], AlbumContract.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AlbumContract.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ratingAverage" }),
        __metadata("design:type", Number)
    ], AlbumContract.prototype, "ratingAverage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ratingCount" }),
        __metadata("design:type", Number)
    ], AlbumContract.prototype, "ratingCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=releaseDate" }),
        __metadata("design:type", optionaldatetimecontract_1.OptionalDateTimeContract)
    ], AlbumContract.prototype, "releaseDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=releaseEvent" }),
        __metadata("design:type", releaseeventforapicontract_1.ReleaseEventForApiContract)
    ], AlbumContract.prototype, "releaseEvent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AlbumContract.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], AlbumContract.prototype, "version", void 0);
    return AlbumContract;
}(utils_1.SpeakeasyBase));
exports.AlbumContract = AlbumContract;
var AlbumContractInput = /** @class */ (function (_super) {
    __extends(AlbumContractInput, _super);
    function AlbumContractInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additionalNames" }),
        __metadata("design:type", String)
    ], AlbumContractInput.prototype, "additionalNames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=artistString" }),
        __metadata("design:type", String)
    ], AlbumContractInput.prototype, "artistString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=coverPictureMime" }),
        __metadata("design:type", String)
    ], AlbumContractInput.prototype, "coverPictureMime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createDate" }),
        __metadata("design:type", Date)
    ], AlbumContractInput.prototype, "createDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], AlbumContractInput.prototype, "deleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discType" }),
        __metadata("design:type", String)
    ], AlbumContractInput.prototype, "discType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], AlbumContractInput.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AlbumContractInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ratingAverage" }),
        __metadata("design:type", Number)
    ], AlbumContractInput.prototype, "ratingAverage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ratingCount" }),
        __metadata("design:type", Number)
    ], AlbumContractInput.prototype, "ratingCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=releaseDate" }),
        __metadata("design:type", optionaldatetimecontract_1.OptionalDateTimeContract)
    ], AlbumContractInput.prototype, "releaseDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=releaseEvent" }),
        __metadata("design:type", releaseeventforapicontract_2.ReleaseEventForApiContractInput)
    ], AlbumContractInput.prototype, "releaseEvent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AlbumContractInput.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], AlbumContractInput.prototype, "version", void 0);
    return AlbumContractInput;
}(utils_1.SpeakeasyBase));
exports.AlbumContractInput = AlbumContractInput;
