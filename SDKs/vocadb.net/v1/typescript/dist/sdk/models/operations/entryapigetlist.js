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
exports.EntryApiGetListResponse = exports.EntryApiGetListRequest = exports.EntryApiGetListQueryParams = exports.EntryApiGetListStatusEnum = exports.EntryApiGetListSortEnum = exports.EntryApiGetListNameMatchModeEnum = exports.EntryApiGetListLangEnum = exports.EntryApiGetListFieldsEnum = exports.EntryApiGetListEntryTypesEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EntryApiGetListEntryTypesEnum;
(function (EntryApiGetListEntryTypesEnum) {
    EntryApiGetListEntryTypesEnum["Nothing"] = "Nothing";
    EntryApiGetListEntryTypesEnum["Album"] = "Album";
    EntryApiGetListEntryTypesEnum["Artist"] = "Artist";
    EntryApiGetListEntryTypesEnum["DiscussionTopic"] = "DiscussionTopic";
    EntryApiGetListEntryTypesEnum["Pv"] = "PV";
    EntryApiGetListEntryTypesEnum["ReleaseEvent"] = "ReleaseEvent";
    EntryApiGetListEntryTypesEnum["ReleaseEventSeries"] = "ReleaseEventSeries";
    EntryApiGetListEntryTypesEnum["Song"] = "Song";
    EntryApiGetListEntryTypesEnum["SongList"] = "SongList";
    EntryApiGetListEntryTypesEnum["Tag"] = "Tag";
    EntryApiGetListEntryTypesEnum["User"] = "User";
    EntryApiGetListEntryTypesEnum["Venue"] = "Venue";
})(EntryApiGetListEntryTypesEnum = exports.EntryApiGetListEntryTypesEnum || (exports.EntryApiGetListEntryTypesEnum = {}));
var EntryApiGetListFieldsEnum;
(function (EntryApiGetListFieldsEnum) {
    EntryApiGetListFieldsEnum["None"] = "None";
    EntryApiGetListFieldsEnum["AdditionalNames"] = "AdditionalNames";
    EntryApiGetListFieldsEnum["Description"] = "Description";
    EntryApiGetListFieldsEnum["MainPicture"] = "MainPicture";
    EntryApiGetListFieldsEnum["Names"] = "Names";
    EntryApiGetListFieldsEnum["PVs"] = "PVs";
    EntryApiGetListFieldsEnum["Tags"] = "Tags";
    EntryApiGetListFieldsEnum["WebLinks"] = "WebLinks";
})(EntryApiGetListFieldsEnum = exports.EntryApiGetListFieldsEnum || (exports.EntryApiGetListFieldsEnum = {}));
var EntryApiGetListLangEnum;
(function (EntryApiGetListLangEnum) {
    EntryApiGetListLangEnum["Default"] = "Default";
    EntryApiGetListLangEnum["Japanese"] = "Japanese";
    EntryApiGetListLangEnum["Romaji"] = "Romaji";
    EntryApiGetListLangEnum["English"] = "English";
})(EntryApiGetListLangEnum = exports.EntryApiGetListLangEnum || (exports.EntryApiGetListLangEnum = {}));
var EntryApiGetListNameMatchModeEnum;
(function (EntryApiGetListNameMatchModeEnum) {
    EntryApiGetListNameMatchModeEnum["Auto"] = "Auto";
    EntryApiGetListNameMatchModeEnum["Partial"] = "Partial";
    EntryApiGetListNameMatchModeEnum["StartsWith"] = "StartsWith";
    EntryApiGetListNameMatchModeEnum["Exact"] = "Exact";
    EntryApiGetListNameMatchModeEnum["Words"] = "Words";
})(EntryApiGetListNameMatchModeEnum = exports.EntryApiGetListNameMatchModeEnum || (exports.EntryApiGetListNameMatchModeEnum = {}));
var EntryApiGetListSortEnum;
(function (EntryApiGetListSortEnum) {
    EntryApiGetListSortEnum["None"] = "None";
    EntryApiGetListSortEnum["Name"] = "Name";
    EntryApiGetListSortEnum["AdditionDate"] = "AdditionDate";
    EntryApiGetListSortEnum["ActivityDate"] = "ActivityDate";
})(EntryApiGetListSortEnum = exports.EntryApiGetListSortEnum || (exports.EntryApiGetListSortEnum = {}));
var EntryApiGetListStatusEnum;
(function (EntryApiGetListStatusEnum) {
    EntryApiGetListStatusEnum["Draft"] = "Draft";
    EntryApiGetListStatusEnum["Finished"] = "Finished";
    EntryApiGetListStatusEnum["Approved"] = "Approved";
    EntryApiGetListStatusEnum["Locked"] = "Locked";
})(EntryApiGetListStatusEnum = exports.EntryApiGetListStatusEnum || (exports.EntryApiGetListStatusEnum = {}));
var EntryApiGetListQueryParams = /** @class */ (function (_super) {
    __extends(EntryApiGetListQueryParams, _super);
    function EntryApiGetListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=childTags" }),
        __metadata("design:type", Boolean)
    ], EntryApiGetListQueryParams.prototype, "childTags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=entryTypes" }),
        __metadata("design:type", String)
    ], EntryApiGetListQueryParams.prototype, "entryTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], EntryApiGetListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=getTotalCount" }),
        __metadata("design:type", Boolean)
    ], EntryApiGetListQueryParams.prototype, "getTotalCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], EntryApiGetListQueryParams.prototype, "lang", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], EntryApiGetListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=nameMatchMode" }),
        __metadata("design:type", String)
    ], EntryApiGetListQueryParams.prototype, "nameMatchMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], EntryApiGetListQueryParams.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], EntryApiGetListQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], EntryApiGetListQueryParams.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], EntryApiGetListQueryParams.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=tagId" }),
        __metadata("design:type", Array)
    ], EntryApiGetListQueryParams.prototype, "tagId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=tagName" }),
        __metadata("design:type", Array)
    ], EntryApiGetListQueryParams.prototype, "tagName", void 0);
    return EntryApiGetListQueryParams;
}(utils_1.SpeakeasyBase));
exports.EntryApiGetListQueryParams = EntryApiGetListQueryParams;
var EntryApiGetListRequest = /** @class */ (function (_super) {
    __extends(EntryApiGetListRequest, _super);
    function EntryApiGetListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EntryApiGetListQueryParams)
    ], EntryApiGetListRequest.prototype, "queryParams", void 0);
    return EntryApiGetListRequest;
}(utils_1.SpeakeasyBase));
exports.EntryApiGetListRequest = EntryApiGetListRequest;
var EntryApiGetListResponse = /** @class */ (function (_super) {
    __extends(EntryApiGetListResponse, _super);
    function EntryApiGetListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], EntryApiGetListResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EntryApiGetListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PartialFindResultEntryForApiContract)
    ], EntryApiGetListResponse.prototype, "partialFindResultEntryForApiContract", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EntryApiGetListResponse.prototype, "statusCode", void 0);
    return EntryApiGetListResponse;
}(utils_1.SpeakeasyBase));
exports.EntryApiGetListResponse = EntryApiGetListResponse;
