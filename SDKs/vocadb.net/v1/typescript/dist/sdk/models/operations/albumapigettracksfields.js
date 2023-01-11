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
exports.AlbumApiGetTracksFieldsResponse = exports.AlbumApiGetTracksFieldsRequest = exports.AlbumApiGetTracksFieldsQueryParams = exports.AlbumApiGetTracksFieldsLangEnum = exports.AlbumApiGetTracksFieldsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var AlbumApiGetTracksFieldsPathParams = /** @class */ (function (_super) {
    __extends(AlbumApiGetTracksFieldsPathParams, _super);
    function AlbumApiGetTracksFieldsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], AlbumApiGetTracksFieldsPathParams.prototype, "id", void 0);
    return AlbumApiGetTracksFieldsPathParams;
}(utils_1.SpeakeasyBase));
exports.AlbumApiGetTracksFieldsPathParams = AlbumApiGetTracksFieldsPathParams;
var AlbumApiGetTracksFieldsLangEnum;
(function (AlbumApiGetTracksFieldsLangEnum) {
    AlbumApiGetTracksFieldsLangEnum["Default"] = "Default";
    AlbumApiGetTracksFieldsLangEnum["Japanese"] = "Japanese";
    AlbumApiGetTracksFieldsLangEnum["Romaji"] = "Romaji";
    AlbumApiGetTracksFieldsLangEnum["English"] = "English";
})(AlbumApiGetTracksFieldsLangEnum = exports.AlbumApiGetTracksFieldsLangEnum || (exports.AlbumApiGetTracksFieldsLangEnum = {}));
var AlbumApiGetTracksFieldsQueryParams = /** @class */ (function (_super) {
    __extends(AlbumApiGetTracksFieldsQueryParams, _super);
    function AlbumApiGetTracksFieldsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=discNumber" }),
        __metadata("design:type", Number)
    ], AlbumApiGetTracksFieldsQueryParams.prototype, "discNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=field" }),
        __metadata("design:type", Array)
    ], AlbumApiGetTracksFieldsQueryParams.prototype, "field", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], AlbumApiGetTracksFieldsQueryParams.prototype, "lang", void 0);
    return AlbumApiGetTracksFieldsQueryParams;
}(utils_1.SpeakeasyBase));
exports.AlbumApiGetTracksFieldsQueryParams = AlbumApiGetTracksFieldsQueryParams;
var AlbumApiGetTracksFieldsRequest = /** @class */ (function (_super) {
    __extends(AlbumApiGetTracksFieldsRequest, _super);
    function AlbumApiGetTracksFieldsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AlbumApiGetTracksFieldsPathParams)
    ], AlbumApiGetTracksFieldsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AlbumApiGetTracksFieldsQueryParams)
    ], AlbumApiGetTracksFieldsRequest.prototype, "queryParams", void 0);
    return AlbumApiGetTracksFieldsRequest;
}(utils_1.SpeakeasyBase));
exports.AlbumApiGetTracksFieldsRequest = AlbumApiGetTracksFieldsRequest;
var AlbumApiGetTracksFieldsResponse = /** @class */ (function (_super) {
    __extends(AlbumApiGetTracksFieldsResponse, _super);
    function AlbumApiGetTracksFieldsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], AlbumApiGetTracksFieldsResponse.prototype, "albumApiGetTracksFields200ApplicationJSONObjects", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], AlbumApiGetTracksFieldsResponse.prototype, "albumApiGetTracksFields200ApplicationJsonpObjects", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], AlbumApiGetTracksFieldsResponse.prototype, "albumApiGetTracksFields200TextJSONObjects", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AlbumApiGetTracksFieldsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AlbumApiGetTracksFieldsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AlbumApiGetTracksFieldsResponse.prototype, "statusCode", void 0);
    return AlbumApiGetTracksFieldsResponse;
}(utils_1.SpeakeasyBase));
exports.AlbumApiGetTracksFieldsResponse = AlbumApiGetTracksFieldsResponse;
