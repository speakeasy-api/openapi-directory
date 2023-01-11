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
exports.ActivityEntryApiGetListResponse = exports.ActivityEntryApiGetListRequest = exports.ActivityEntryApiGetListQueryParams = exports.ActivityEntryApiGetListSortRuleEnum = exports.ActivityEntryApiGetListLangEnum = exports.ActivityEntryApiGetListFieldsEnum = exports.ActivityEntryApiGetListEntryTypeEnum = exports.ActivityEntryApiGetListEntryFieldsEnum = exports.ActivityEntryApiGetListEditEventEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ActivityEntryApiGetListEditEventEnum;
(function (ActivityEntryApiGetListEditEventEnum) {
    ActivityEntryApiGetListEditEventEnum["Created"] = "Created";
    ActivityEntryApiGetListEditEventEnum["Updated"] = "Updated";
    ActivityEntryApiGetListEditEventEnum["Deleted"] = "Deleted";
    ActivityEntryApiGetListEditEventEnum["Restored"] = "Restored";
})(ActivityEntryApiGetListEditEventEnum = exports.ActivityEntryApiGetListEditEventEnum || (exports.ActivityEntryApiGetListEditEventEnum = {}));
var ActivityEntryApiGetListEntryFieldsEnum;
(function (ActivityEntryApiGetListEntryFieldsEnum) {
    ActivityEntryApiGetListEntryFieldsEnum["None"] = "None";
    ActivityEntryApiGetListEntryFieldsEnum["AdditionalNames"] = "AdditionalNames";
    ActivityEntryApiGetListEntryFieldsEnum["Description"] = "Description";
    ActivityEntryApiGetListEntryFieldsEnum["MainPicture"] = "MainPicture";
    ActivityEntryApiGetListEntryFieldsEnum["Names"] = "Names";
    ActivityEntryApiGetListEntryFieldsEnum["PVs"] = "PVs";
    ActivityEntryApiGetListEntryFieldsEnum["Tags"] = "Tags";
    ActivityEntryApiGetListEntryFieldsEnum["WebLinks"] = "WebLinks";
})(ActivityEntryApiGetListEntryFieldsEnum = exports.ActivityEntryApiGetListEntryFieldsEnum || (exports.ActivityEntryApiGetListEntryFieldsEnum = {}));
var ActivityEntryApiGetListEntryTypeEnum;
(function (ActivityEntryApiGetListEntryTypeEnum) {
    ActivityEntryApiGetListEntryTypeEnum["Undefined"] = "Undefined";
    ActivityEntryApiGetListEntryTypeEnum["Album"] = "Album";
    ActivityEntryApiGetListEntryTypeEnum["Artist"] = "Artist";
    ActivityEntryApiGetListEntryTypeEnum["DiscussionTopic"] = "DiscussionTopic";
    ActivityEntryApiGetListEntryTypeEnum["Pv"] = "PV";
    ActivityEntryApiGetListEntryTypeEnum["ReleaseEvent"] = "ReleaseEvent";
    ActivityEntryApiGetListEntryTypeEnum["ReleaseEventSeries"] = "ReleaseEventSeries";
    ActivityEntryApiGetListEntryTypeEnum["Song"] = "Song";
    ActivityEntryApiGetListEntryTypeEnum["SongList"] = "SongList";
    ActivityEntryApiGetListEntryTypeEnum["Tag"] = "Tag";
    ActivityEntryApiGetListEntryTypeEnum["User"] = "User";
    ActivityEntryApiGetListEntryTypeEnum["Venue"] = "Venue";
})(ActivityEntryApiGetListEntryTypeEnum = exports.ActivityEntryApiGetListEntryTypeEnum || (exports.ActivityEntryApiGetListEntryTypeEnum = {}));
var ActivityEntryApiGetListFieldsEnum;
(function (ActivityEntryApiGetListFieldsEnum) {
    ActivityEntryApiGetListFieldsEnum["None"] = "None";
    ActivityEntryApiGetListFieldsEnum["ArchivedVersion"] = "ArchivedVersion";
    ActivityEntryApiGetListFieldsEnum["Entry"] = "Entry";
})(ActivityEntryApiGetListFieldsEnum = exports.ActivityEntryApiGetListFieldsEnum || (exports.ActivityEntryApiGetListFieldsEnum = {}));
var ActivityEntryApiGetListLangEnum;
(function (ActivityEntryApiGetListLangEnum) {
    ActivityEntryApiGetListLangEnum["Default"] = "Default";
    ActivityEntryApiGetListLangEnum["Japanese"] = "Japanese";
    ActivityEntryApiGetListLangEnum["Romaji"] = "Romaji";
    ActivityEntryApiGetListLangEnum["English"] = "English";
})(ActivityEntryApiGetListLangEnum = exports.ActivityEntryApiGetListLangEnum || (exports.ActivityEntryApiGetListLangEnum = {}));
var ActivityEntryApiGetListSortRuleEnum;
(function (ActivityEntryApiGetListSortRuleEnum) {
    ActivityEntryApiGetListSortRuleEnum["CreateDateDescending"] = "CreateDateDescending";
    ActivityEntryApiGetListSortRuleEnum["CreateDate"] = "CreateDate";
})(ActivityEntryApiGetListSortRuleEnum = exports.ActivityEntryApiGetListSortRuleEnum || (exports.ActivityEntryApiGetListSortRuleEnum = {}));
var ActivityEntryApiGetListQueryParams = /** @class */ (function (_super) {
    __extends(ActivityEntryApiGetListQueryParams, _super);
    function ActivityEntryApiGetListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=before" }),
        __metadata("design:type", Date)
    ], ActivityEntryApiGetListQueryParams.prototype, "before", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=editEvent" }),
        __metadata("design:type", String)
    ], ActivityEntryApiGetListQueryParams.prototype, "editEvent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=entryFields" }),
        __metadata("design:type", String)
    ], ActivityEntryApiGetListQueryParams.prototype, "entryFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=entryType" }),
        __metadata("design:type", String)
    ], ActivityEntryApiGetListQueryParams.prototype, "entryType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ActivityEntryApiGetListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=getTotalCount" }),
        __metadata("design:type", Boolean)
    ], ActivityEntryApiGetListQueryParams.prototype, "getTotalCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], ActivityEntryApiGetListQueryParams.prototype, "lang", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ActivityEntryApiGetListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", Date)
    ], ActivityEntryApiGetListQueryParams.prototype, "since", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sortRule" }),
        __metadata("design:type", String)
    ], ActivityEntryApiGetListQueryParams.prototype, "sortRule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", Number)
    ], ActivityEntryApiGetListQueryParams.prototype, "userId", void 0);
    return ActivityEntryApiGetListQueryParams;
}(utils_1.SpeakeasyBase));
exports.ActivityEntryApiGetListQueryParams = ActivityEntryApiGetListQueryParams;
var ActivityEntryApiGetListRequest = /** @class */ (function (_super) {
    __extends(ActivityEntryApiGetListRequest, _super);
    function ActivityEntryApiGetListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ActivityEntryApiGetListQueryParams)
    ], ActivityEntryApiGetListRequest.prototype, "queryParams", void 0);
    return ActivityEntryApiGetListRequest;
}(utils_1.SpeakeasyBase));
exports.ActivityEntryApiGetListRequest = ActivityEntryApiGetListRequest;
var ActivityEntryApiGetListResponse = /** @class */ (function (_super) {
    __extends(ActivityEntryApiGetListResponse, _super);
    function ActivityEntryApiGetListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ActivityEntryApiGetListResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ActivityEntryApiGetListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PartialFindResultActivityEntryForApiContract)
    ], ActivityEntryApiGetListResponse.prototype, "partialFindResultActivityEntryForApiContract", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ActivityEntryApiGetListResponse.prototype, "statusCode", void 0);
    return ActivityEntryApiGetListResponse;
}(utils_1.SpeakeasyBase));
exports.ActivityEntryApiGetListResponse = ActivityEntryApiGetListResponse;
