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
exports.SongListApiGetFeaturedListsResponse = exports.SongListApiGetFeaturedListsRequest = exports.SongListApiGetFeaturedListsQueryParams = exports.SongListApiGetFeaturedListsSortEnum = exports.SongListApiGetFeaturedListsNameMatchModeEnum = exports.SongListApiGetFeaturedListsLangEnum = exports.SongListApiGetFeaturedListsFieldsEnum = exports.SongListApiGetFeaturedListsFeaturedCategoryEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SongListApiGetFeaturedListsFeaturedCategoryEnum;
(function (SongListApiGetFeaturedListsFeaturedCategoryEnum) {
    SongListApiGetFeaturedListsFeaturedCategoryEnum["Nothing"] = "Nothing";
    SongListApiGetFeaturedListsFeaturedCategoryEnum["Concerts"] = "Concerts";
    SongListApiGetFeaturedListsFeaturedCategoryEnum["VocaloidRanking"] = "VocaloidRanking";
    SongListApiGetFeaturedListsFeaturedCategoryEnum["Pools"] = "Pools";
    SongListApiGetFeaturedListsFeaturedCategoryEnum["Other"] = "Other";
})(SongListApiGetFeaturedListsFeaturedCategoryEnum = exports.SongListApiGetFeaturedListsFeaturedCategoryEnum || (exports.SongListApiGetFeaturedListsFeaturedCategoryEnum = {}));
var SongListApiGetFeaturedListsFieldsEnum;
(function (SongListApiGetFeaturedListsFieldsEnum) {
    SongListApiGetFeaturedListsFieldsEnum["None"] = "None";
    SongListApiGetFeaturedListsFieldsEnum["Description"] = "Description";
    SongListApiGetFeaturedListsFieldsEnum["Events"] = "Events";
    SongListApiGetFeaturedListsFieldsEnum["MainPicture"] = "MainPicture";
    SongListApiGetFeaturedListsFieldsEnum["Tags"] = "Tags";
})(SongListApiGetFeaturedListsFieldsEnum = exports.SongListApiGetFeaturedListsFieldsEnum || (exports.SongListApiGetFeaturedListsFieldsEnum = {}));
var SongListApiGetFeaturedListsLangEnum;
(function (SongListApiGetFeaturedListsLangEnum) {
    SongListApiGetFeaturedListsLangEnum["Default"] = "Default";
    SongListApiGetFeaturedListsLangEnum["Japanese"] = "Japanese";
    SongListApiGetFeaturedListsLangEnum["Romaji"] = "Romaji";
    SongListApiGetFeaturedListsLangEnum["English"] = "English";
})(SongListApiGetFeaturedListsLangEnum = exports.SongListApiGetFeaturedListsLangEnum || (exports.SongListApiGetFeaturedListsLangEnum = {}));
var SongListApiGetFeaturedListsNameMatchModeEnum;
(function (SongListApiGetFeaturedListsNameMatchModeEnum) {
    SongListApiGetFeaturedListsNameMatchModeEnum["Auto"] = "Auto";
    SongListApiGetFeaturedListsNameMatchModeEnum["Partial"] = "Partial";
    SongListApiGetFeaturedListsNameMatchModeEnum["StartsWith"] = "StartsWith";
    SongListApiGetFeaturedListsNameMatchModeEnum["Exact"] = "Exact";
    SongListApiGetFeaturedListsNameMatchModeEnum["Words"] = "Words";
})(SongListApiGetFeaturedListsNameMatchModeEnum = exports.SongListApiGetFeaturedListsNameMatchModeEnum || (exports.SongListApiGetFeaturedListsNameMatchModeEnum = {}));
var SongListApiGetFeaturedListsSortEnum;
(function (SongListApiGetFeaturedListsSortEnum) {
    SongListApiGetFeaturedListsSortEnum["None"] = "None";
    SongListApiGetFeaturedListsSortEnum["Name"] = "Name";
    SongListApiGetFeaturedListsSortEnum["Date"] = "Date";
    SongListApiGetFeaturedListsSortEnum["CreateDate"] = "CreateDate";
})(SongListApiGetFeaturedListsSortEnum = exports.SongListApiGetFeaturedListsSortEnum || (exports.SongListApiGetFeaturedListsSortEnum = {}));
var SongListApiGetFeaturedListsQueryParams = /** @class */ (function (_super) {
    __extends(SongListApiGetFeaturedListsQueryParams, _super);
    function SongListApiGetFeaturedListsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=childTags" }),
        __metadata("design:type", Boolean)
    ], SongListApiGetFeaturedListsQueryParams.prototype, "childTags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=featuredCategory" }),
        __metadata("design:type", String)
    ], SongListApiGetFeaturedListsQueryParams.prototype, "featuredCategory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SongListApiGetFeaturedListsQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=getTotalCount" }),
        __metadata("design:type", Boolean)
    ], SongListApiGetFeaturedListsQueryParams.prototype, "getTotalCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], SongListApiGetFeaturedListsQueryParams.prototype, "lang", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], SongListApiGetFeaturedListsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=nameMatchMode" }),
        __metadata("design:type", String)
    ], SongListApiGetFeaturedListsQueryParams.prototype, "nameMatchMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], SongListApiGetFeaturedListsQueryParams.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], SongListApiGetFeaturedListsQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], SongListApiGetFeaturedListsQueryParams.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=tagId" }),
        __metadata("design:type", Array)
    ], SongListApiGetFeaturedListsQueryParams.prototype, "tagId", void 0);
    return SongListApiGetFeaturedListsQueryParams;
}(utils_1.SpeakeasyBase));
exports.SongListApiGetFeaturedListsQueryParams = SongListApiGetFeaturedListsQueryParams;
var SongListApiGetFeaturedListsRequest = /** @class */ (function (_super) {
    __extends(SongListApiGetFeaturedListsRequest, _super);
    function SongListApiGetFeaturedListsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SongListApiGetFeaturedListsQueryParams)
    ], SongListApiGetFeaturedListsRequest.prototype, "queryParams", void 0);
    return SongListApiGetFeaturedListsRequest;
}(utils_1.SpeakeasyBase));
exports.SongListApiGetFeaturedListsRequest = SongListApiGetFeaturedListsRequest;
var SongListApiGetFeaturedListsResponse = /** @class */ (function (_super) {
    __extends(SongListApiGetFeaturedListsResponse, _super);
    function SongListApiGetFeaturedListsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], SongListApiGetFeaturedListsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SongListApiGetFeaturedListsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PartialFindResultSongListForApiContract)
    ], SongListApiGetFeaturedListsResponse.prototype, "partialFindResultSongListForApiContract", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SongListApiGetFeaturedListsResponse.prototype, "statusCode", void 0);
    return SongListApiGetFeaturedListsResponse;
}(utils_1.SpeakeasyBase));
exports.SongListApiGetFeaturedListsResponse = SongListApiGetFeaturedListsResponse;
