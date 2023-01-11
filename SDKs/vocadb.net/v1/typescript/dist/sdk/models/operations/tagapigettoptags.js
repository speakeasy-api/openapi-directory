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
exports.TagApiGetTopTagsResponse = exports.TagApiGetTopTagsRequest = exports.TagApiGetTopTagsQueryParams = exports.TagApiGetTopTagsLangEnum = exports.TagApiGetTopTagsEntryTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TagApiGetTopTagsEntryTypeEnum;
(function (TagApiGetTopTagsEntryTypeEnum) {
    TagApiGetTopTagsEntryTypeEnum["Undefined"] = "Undefined";
    TagApiGetTopTagsEntryTypeEnum["Album"] = "Album";
    TagApiGetTopTagsEntryTypeEnum["Artist"] = "Artist";
    TagApiGetTopTagsEntryTypeEnum["DiscussionTopic"] = "DiscussionTopic";
    TagApiGetTopTagsEntryTypeEnum["Pv"] = "PV";
    TagApiGetTopTagsEntryTypeEnum["ReleaseEvent"] = "ReleaseEvent";
    TagApiGetTopTagsEntryTypeEnum["ReleaseEventSeries"] = "ReleaseEventSeries";
    TagApiGetTopTagsEntryTypeEnum["Song"] = "Song";
    TagApiGetTopTagsEntryTypeEnum["SongList"] = "SongList";
    TagApiGetTopTagsEntryTypeEnum["Tag"] = "Tag";
    TagApiGetTopTagsEntryTypeEnum["User"] = "User";
    TagApiGetTopTagsEntryTypeEnum["Venue"] = "Venue";
})(TagApiGetTopTagsEntryTypeEnum = exports.TagApiGetTopTagsEntryTypeEnum || (exports.TagApiGetTopTagsEntryTypeEnum = {}));
var TagApiGetTopTagsLangEnum;
(function (TagApiGetTopTagsLangEnum) {
    TagApiGetTopTagsLangEnum["Default"] = "Default";
    TagApiGetTopTagsLangEnum["Japanese"] = "Japanese";
    TagApiGetTopTagsLangEnum["Romaji"] = "Romaji";
    TagApiGetTopTagsLangEnum["English"] = "English";
})(TagApiGetTopTagsLangEnum = exports.TagApiGetTopTagsLangEnum || (exports.TagApiGetTopTagsLangEnum = {}));
var TagApiGetTopTagsQueryParams = /** @class */ (function (_super) {
    __extends(TagApiGetTopTagsQueryParams, _super);
    function TagApiGetTopTagsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=categoryName" }),
        __metadata("design:type", String)
    ], TagApiGetTopTagsQueryParams.prototype, "categoryName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=entryType" }),
        __metadata("design:type", String)
    ], TagApiGetTopTagsQueryParams.prototype, "entryType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], TagApiGetTopTagsQueryParams.prototype, "lang", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], TagApiGetTopTagsQueryParams.prototype, "maxResults", void 0);
    return TagApiGetTopTagsQueryParams;
}(utils_1.SpeakeasyBase));
exports.TagApiGetTopTagsQueryParams = TagApiGetTopTagsQueryParams;
var TagApiGetTopTagsRequest = /** @class */ (function (_super) {
    __extends(TagApiGetTopTagsRequest, _super);
    function TagApiGetTopTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TagApiGetTopTagsQueryParams)
    ], TagApiGetTopTagsRequest.prototype, "queryParams", void 0);
    return TagApiGetTopTagsRequest;
}(utils_1.SpeakeasyBase));
exports.TagApiGetTopTagsRequest = TagApiGetTopTagsRequest;
var TagApiGetTopTagsResponse = /** @class */ (function (_super) {
    __extends(TagApiGetTopTagsResponse, _super);
    function TagApiGetTopTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], TagApiGetTopTagsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TagApiGetTopTagsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TagApiGetTopTagsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.TagBaseContract }),
        __metadata("design:type", Array)
    ], TagApiGetTopTagsResponse.prototype, "tagBaseContracts", void 0);
    return TagApiGetTopTagsResponse;
}(utils_1.SpeakeasyBase));
exports.TagApiGetTopTagsResponse = TagApiGetTopTagsResponse;
