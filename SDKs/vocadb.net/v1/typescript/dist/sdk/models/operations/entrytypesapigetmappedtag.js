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
exports.EntryTypesApiGetMappedTagResponse = exports.EntryTypesApiGetMappedTagRequest = exports.EntryTypesApiGetMappedTagQueryParams = exports.EntryTypesApiGetMappedTagFieldsEnum = exports.EntryTypesApiGetMappedTagPathParams = exports.EntryTypesApiGetMappedTagEntryTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EntryTypesApiGetMappedTagEntryTypeEnum;
(function (EntryTypesApiGetMappedTagEntryTypeEnum) {
    EntryTypesApiGetMappedTagEntryTypeEnum["Undefined"] = "Undefined";
    EntryTypesApiGetMappedTagEntryTypeEnum["Album"] = "Album";
    EntryTypesApiGetMappedTagEntryTypeEnum["Artist"] = "Artist";
    EntryTypesApiGetMappedTagEntryTypeEnum["DiscussionTopic"] = "DiscussionTopic";
    EntryTypesApiGetMappedTagEntryTypeEnum["Pv"] = "PV";
    EntryTypesApiGetMappedTagEntryTypeEnum["ReleaseEvent"] = "ReleaseEvent";
    EntryTypesApiGetMappedTagEntryTypeEnum["ReleaseEventSeries"] = "ReleaseEventSeries";
    EntryTypesApiGetMappedTagEntryTypeEnum["Song"] = "Song";
    EntryTypesApiGetMappedTagEntryTypeEnum["SongList"] = "SongList";
    EntryTypesApiGetMappedTagEntryTypeEnum["Tag"] = "Tag";
    EntryTypesApiGetMappedTagEntryTypeEnum["User"] = "User";
    EntryTypesApiGetMappedTagEntryTypeEnum["Venue"] = "Venue";
})(EntryTypesApiGetMappedTagEntryTypeEnum = exports.EntryTypesApiGetMappedTagEntryTypeEnum || (exports.EntryTypesApiGetMappedTagEntryTypeEnum = {}));
var EntryTypesApiGetMappedTagPathParams = /** @class */ (function (_super) {
    __extends(EntryTypesApiGetMappedTagPathParams, _super);
    function EntryTypesApiGetMappedTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=entryType" }),
        __metadata("design:type", String)
    ], EntryTypesApiGetMappedTagPathParams.prototype, "entryType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=subType" }),
        __metadata("design:type", String)
    ], EntryTypesApiGetMappedTagPathParams.prototype, "subType", void 0);
    return EntryTypesApiGetMappedTagPathParams;
}(utils_1.SpeakeasyBase));
exports.EntryTypesApiGetMappedTagPathParams = EntryTypesApiGetMappedTagPathParams;
var EntryTypesApiGetMappedTagFieldsEnum;
(function (EntryTypesApiGetMappedTagFieldsEnum) {
    EntryTypesApiGetMappedTagFieldsEnum["None"] = "None";
    EntryTypesApiGetMappedTagFieldsEnum["AdditionalNames"] = "AdditionalNames";
    EntryTypesApiGetMappedTagFieldsEnum["AliasedTo"] = "AliasedTo";
    EntryTypesApiGetMappedTagFieldsEnum["Description"] = "Description";
    EntryTypesApiGetMappedTagFieldsEnum["MainPicture"] = "MainPicture";
    EntryTypesApiGetMappedTagFieldsEnum["Names"] = "Names";
    EntryTypesApiGetMappedTagFieldsEnum["Parent"] = "Parent";
    EntryTypesApiGetMappedTagFieldsEnum["RelatedTags"] = "RelatedTags";
    EntryTypesApiGetMappedTagFieldsEnum["TranslatedDescription"] = "TranslatedDescription";
    EntryTypesApiGetMappedTagFieldsEnum["WebLinks"] = "WebLinks";
})(EntryTypesApiGetMappedTagFieldsEnum = exports.EntryTypesApiGetMappedTagFieldsEnum || (exports.EntryTypesApiGetMappedTagFieldsEnum = {}));
var EntryTypesApiGetMappedTagQueryParams = /** @class */ (function (_super) {
    __extends(EntryTypesApiGetMappedTagQueryParams, _super);
    function EntryTypesApiGetMappedTagQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], EntryTypesApiGetMappedTagQueryParams.prototype, "fields", void 0);
    return EntryTypesApiGetMappedTagQueryParams;
}(utils_1.SpeakeasyBase));
exports.EntryTypesApiGetMappedTagQueryParams = EntryTypesApiGetMappedTagQueryParams;
var EntryTypesApiGetMappedTagRequest = /** @class */ (function (_super) {
    __extends(EntryTypesApiGetMappedTagRequest, _super);
    function EntryTypesApiGetMappedTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EntryTypesApiGetMappedTagPathParams)
    ], EntryTypesApiGetMappedTagRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EntryTypesApiGetMappedTagQueryParams)
    ], EntryTypesApiGetMappedTagRequest.prototype, "queryParams", void 0);
    return EntryTypesApiGetMappedTagRequest;
}(utils_1.SpeakeasyBase));
exports.EntryTypesApiGetMappedTagRequest = EntryTypesApiGetMappedTagRequest;
var EntryTypesApiGetMappedTagResponse = /** @class */ (function (_super) {
    __extends(EntryTypesApiGetMappedTagResponse, _super);
    function EntryTypesApiGetMappedTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], EntryTypesApiGetMappedTagResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EntryTypesApiGetMappedTagResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EntryTypesApiGetMappedTagResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.TagForApiContract)
    ], EntryTypesApiGetMappedTagResponse.prototype, "tagForApiContract", void 0);
    return EntryTypesApiGetMappedTagResponse;
}(utils_1.SpeakeasyBase));
exports.EntryTypesApiGetMappedTagResponse = EntryTypesApiGetMappedTagResponse;
