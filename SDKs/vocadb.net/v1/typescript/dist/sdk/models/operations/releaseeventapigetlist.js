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
exports.ReleaseEventApiGetListResponse = exports.ReleaseEventApiGetListRequest = exports.ReleaseEventApiGetListQueryParams = exports.ReleaseEventApiGetListStatusEnum = exports.ReleaseEventApiGetListSortEnum = exports.ReleaseEventApiGetListNameMatchModeEnum = exports.ReleaseEventApiGetListLangEnum = exports.ReleaseEventApiGetListFieldsEnum = exports.ReleaseEventApiGetListCategoryEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReleaseEventApiGetListCategoryEnum;
(function (ReleaseEventApiGetListCategoryEnum) {
    ReleaseEventApiGetListCategoryEnum["Unspecified"] = "Unspecified";
    ReleaseEventApiGetListCategoryEnum["AlbumRelease"] = "AlbumRelease";
    ReleaseEventApiGetListCategoryEnum["Anniversary"] = "Anniversary";
    ReleaseEventApiGetListCategoryEnum["Club"] = "Club";
    ReleaseEventApiGetListCategoryEnum["Concert"] = "Concert";
    ReleaseEventApiGetListCategoryEnum["Contest"] = "Contest";
    ReleaseEventApiGetListCategoryEnum["Convention"] = "Convention";
    ReleaseEventApiGetListCategoryEnum["Other"] = "Other";
})(ReleaseEventApiGetListCategoryEnum = exports.ReleaseEventApiGetListCategoryEnum || (exports.ReleaseEventApiGetListCategoryEnum = {}));
var ReleaseEventApiGetListFieldsEnum;
(function (ReleaseEventApiGetListFieldsEnum) {
    ReleaseEventApiGetListFieldsEnum["None"] = "None";
    ReleaseEventApiGetListFieldsEnum["AdditionalNames"] = "AdditionalNames";
    ReleaseEventApiGetListFieldsEnum["Artists"] = "Artists";
    ReleaseEventApiGetListFieldsEnum["Description"] = "Description";
    ReleaseEventApiGetListFieldsEnum["MainPicture"] = "MainPicture";
    ReleaseEventApiGetListFieldsEnum["Names"] = "Names";
    ReleaseEventApiGetListFieldsEnum["Series"] = "Series";
    ReleaseEventApiGetListFieldsEnum["SongList"] = "SongList";
    ReleaseEventApiGetListFieldsEnum["Tags"] = "Tags";
    ReleaseEventApiGetListFieldsEnum["Venue"] = "Venue";
    ReleaseEventApiGetListFieldsEnum["WebLinks"] = "WebLinks";
})(ReleaseEventApiGetListFieldsEnum = exports.ReleaseEventApiGetListFieldsEnum || (exports.ReleaseEventApiGetListFieldsEnum = {}));
var ReleaseEventApiGetListLangEnum;
(function (ReleaseEventApiGetListLangEnum) {
    ReleaseEventApiGetListLangEnum["Default"] = "Default";
    ReleaseEventApiGetListLangEnum["Japanese"] = "Japanese";
    ReleaseEventApiGetListLangEnum["Romaji"] = "Romaji";
    ReleaseEventApiGetListLangEnum["English"] = "English";
})(ReleaseEventApiGetListLangEnum = exports.ReleaseEventApiGetListLangEnum || (exports.ReleaseEventApiGetListLangEnum = {}));
var ReleaseEventApiGetListNameMatchModeEnum;
(function (ReleaseEventApiGetListNameMatchModeEnum) {
    ReleaseEventApiGetListNameMatchModeEnum["Auto"] = "Auto";
    ReleaseEventApiGetListNameMatchModeEnum["Partial"] = "Partial";
    ReleaseEventApiGetListNameMatchModeEnum["StartsWith"] = "StartsWith";
    ReleaseEventApiGetListNameMatchModeEnum["Exact"] = "Exact";
    ReleaseEventApiGetListNameMatchModeEnum["Words"] = "Words";
})(ReleaseEventApiGetListNameMatchModeEnum = exports.ReleaseEventApiGetListNameMatchModeEnum || (exports.ReleaseEventApiGetListNameMatchModeEnum = {}));
var ReleaseEventApiGetListSortEnum;
(function (ReleaseEventApiGetListSortEnum) {
    ReleaseEventApiGetListSortEnum["None"] = "None";
    ReleaseEventApiGetListSortEnum["Name"] = "Name";
    ReleaseEventApiGetListSortEnum["Date"] = "Date";
    ReleaseEventApiGetListSortEnum["AdditionDate"] = "AdditionDate";
    ReleaseEventApiGetListSortEnum["SeriesName"] = "SeriesName";
    ReleaseEventApiGetListSortEnum["VenueName"] = "VenueName";
})(ReleaseEventApiGetListSortEnum = exports.ReleaseEventApiGetListSortEnum || (exports.ReleaseEventApiGetListSortEnum = {}));
var ReleaseEventApiGetListStatusEnum;
(function (ReleaseEventApiGetListStatusEnum) {
    ReleaseEventApiGetListStatusEnum["Draft"] = "Draft";
    ReleaseEventApiGetListStatusEnum["Finished"] = "Finished";
    ReleaseEventApiGetListStatusEnum["Approved"] = "Approved";
    ReleaseEventApiGetListStatusEnum["Locked"] = "Locked";
})(ReleaseEventApiGetListStatusEnum = exports.ReleaseEventApiGetListStatusEnum || (exports.ReleaseEventApiGetListStatusEnum = {}));
var ReleaseEventApiGetListQueryParams = /** @class */ (function (_super) {
    __extends(ReleaseEventApiGetListQueryParams, _super);
    function ReleaseEventApiGetListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=afterDate" }),
        __metadata("design:type", Date)
    ], ReleaseEventApiGetListQueryParams.prototype, "afterDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=artistId" }),
        __metadata("design:type", Array)
    ], ReleaseEventApiGetListQueryParams.prototype, "artistId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=beforeDate" }),
        __metadata("design:type", Date)
    ], ReleaseEventApiGetListQueryParams.prototype, "beforeDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=category" }),
        __metadata("design:type", String)
    ], ReleaseEventApiGetListQueryParams.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=childTags" }),
        __metadata("design:type", Boolean)
    ], ReleaseEventApiGetListQueryParams.prototype, "childTags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=childVoicebanks" }),
        __metadata("design:type", Boolean)
    ], ReleaseEventApiGetListQueryParams.prototype, "childVoicebanks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ReleaseEventApiGetListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=getTotalCount" }),
        __metadata("design:type", Boolean)
    ], ReleaseEventApiGetListQueryParams.prototype, "getTotalCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=includeMembers" }),
        __metadata("design:type", Boolean)
    ], ReleaseEventApiGetListQueryParams.prototype, "includeMembers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], ReleaseEventApiGetListQueryParams.prototype, "lang", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ReleaseEventApiGetListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=nameMatchMode" }),
        __metadata("design:type", String)
    ], ReleaseEventApiGetListQueryParams.prototype, "nameMatchMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], ReleaseEventApiGetListQueryParams.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=seriesId" }),
        __metadata("design:type", Number)
    ], ReleaseEventApiGetListQueryParams.prototype, "seriesId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ReleaseEventApiGetListQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], ReleaseEventApiGetListQueryParams.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], ReleaseEventApiGetListQueryParams.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=tagId" }),
        __metadata("design:type", Array)
    ], ReleaseEventApiGetListQueryParams.prototype, "tagId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userCollectionId" }),
        __metadata("design:type", Number)
    ], ReleaseEventApiGetListQueryParams.prototype, "userCollectionId", void 0);
    return ReleaseEventApiGetListQueryParams;
}(utils_1.SpeakeasyBase));
exports.ReleaseEventApiGetListQueryParams = ReleaseEventApiGetListQueryParams;
var ReleaseEventApiGetListRequest = /** @class */ (function (_super) {
    __extends(ReleaseEventApiGetListRequest, _super);
    function ReleaseEventApiGetListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReleaseEventApiGetListQueryParams)
    ], ReleaseEventApiGetListRequest.prototype, "queryParams", void 0);
    return ReleaseEventApiGetListRequest;
}(utils_1.SpeakeasyBase));
exports.ReleaseEventApiGetListRequest = ReleaseEventApiGetListRequest;
var ReleaseEventApiGetListResponse = /** @class */ (function (_super) {
    __extends(ReleaseEventApiGetListResponse, _super);
    function ReleaseEventApiGetListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ReleaseEventApiGetListResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReleaseEventApiGetListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PartialFindResultReleaseEventForApiContract)
    ], ReleaseEventApiGetListResponse.prototype, "partialFindResultReleaseEventForApiContract", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReleaseEventApiGetListResponse.prototype, "statusCode", void 0);
    return ReleaseEventApiGetListResponse;
}(utils_1.SpeakeasyBase));
exports.ReleaseEventApiGetListResponse = ReleaseEventApiGetListResponse;
