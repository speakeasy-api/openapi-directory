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
exports.ArtistRelationsForApi = void 0;
var utils_1 = require("../../../internal/utils");
var albumforapicontract_1 = require("./albumforapicontract");
var releaseeventforapicontract_1 = require("./releaseeventforapicontract");
var songforapicontract_1 = require("./songforapicontract");
var ArtistRelationsForApi = /** @class */ (function (_super) {
    __extends(ArtistRelationsForApi, _super);
    function ArtistRelationsForApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latestAlbums", elemType: albumforapicontract_1.AlbumForApiContract }),
        __metadata("design:type", Array)
    ], ArtistRelationsForApi.prototype, "latestAlbums", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latestEvents", elemType: releaseeventforapicontract_1.ReleaseEventForApiContract }),
        __metadata("design:type", Array)
    ], ArtistRelationsForApi.prototype, "latestEvents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latestSongs", elemType: songforapicontract_1.SongForApiContract }),
        __metadata("design:type", Array)
    ], ArtistRelationsForApi.prototype, "latestSongs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=popularAlbums", elemType: albumforapicontract_1.AlbumForApiContract }),
        __metadata("design:type", Array)
    ], ArtistRelationsForApi.prototype, "popularAlbums", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=popularSongs", elemType: songforapicontract_1.SongForApiContract }),
        __metadata("design:type", Array)
    ], ArtistRelationsForApi.prototype, "popularSongs", void 0);
    return ArtistRelationsForApi;
}(utils_1.SpeakeasyBase));
exports.ArtistRelationsForApi = ArtistRelationsForApi;
