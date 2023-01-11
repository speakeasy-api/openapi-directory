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
exports.UserApiGetFollowedArtistsResponse = exports.UserApiGetFollowedArtistsRequest = exports.UserApiGetFollowedArtistsQueryParams = exports.UserApiGetFollowedArtistsSortEnum = exports.UserApiGetFollowedArtistsNameMatchModeEnum = exports.UserApiGetFollowedArtistsLangEnum = exports.UserApiGetFollowedArtistsFieldsEnum = exports.UserApiGetFollowedArtistsArtistTypeEnum = exports.UserApiGetFollowedArtistsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UserApiGetFollowedArtistsPathParams = /** @class */ (function (_super) {
    __extends(UserApiGetFollowedArtistsPathParams, _super);
    function UserApiGetFollowedArtistsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], UserApiGetFollowedArtistsPathParams.prototype, "id", void 0);
    return UserApiGetFollowedArtistsPathParams;
}(utils_1.SpeakeasyBase));
exports.UserApiGetFollowedArtistsPathParams = UserApiGetFollowedArtistsPathParams;
var UserApiGetFollowedArtistsArtistTypeEnum;
(function (UserApiGetFollowedArtistsArtistTypeEnum) {
    UserApiGetFollowedArtistsArtistTypeEnum["Unknown"] = "Unknown";
    UserApiGetFollowedArtistsArtistTypeEnum["Circle"] = "Circle";
    UserApiGetFollowedArtistsArtistTypeEnum["Label"] = "Label";
    UserApiGetFollowedArtistsArtistTypeEnum["Producer"] = "Producer";
    UserApiGetFollowedArtistsArtistTypeEnum["Animator"] = "Animator";
    UserApiGetFollowedArtistsArtistTypeEnum["Illustrator"] = "Illustrator";
    UserApiGetFollowedArtistsArtistTypeEnum["Lyricist"] = "Lyricist";
    UserApiGetFollowedArtistsArtistTypeEnum["Vocaloid"] = "Vocaloid";
    UserApiGetFollowedArtistsArtistTypeEnum["Utau"] = "UTAU";
    UserApiGetFollowedArtistsArtistTypeEnum["CeVio"] = "CeVIO";
    UserApiGetFollowedArtistsArtistTypeEnum["OtherVoiceSynthesizer"] = "OtherVoiceSynthesizer";
    UserApiGetFollowedArtistsArtistTypeEnum["OtherVocalist"] = "OtherVocalist";
    UserApiGetFollowedArtistsArtistTypeEnum["OtherGroup"] = "OtherGroup";
    UserApiGetFollowedArtistsArtistTypeEnum["OtherIndividual"] = "OtherIndividual";
    UserApiGetFollowedArtistsArtistTypeEnum["Utaite"] = "Utaite";
    UserApiGetFollowedArtistsArtistTypeEnum["Band"] = "Band";
    UserApiGetFollowedArtistsArtistTypeEnum["Vocalist"] = "Vocalist";
    UserApiGetFollowedArtistsArtistTypeEnum["Character"] = "Character";
    UserApiGetFollowedArtistsArtistTypeEnum["SynthesizerV"] = "SynthesizerV";
})(UserApiGetFollowedArtistsArtistTypeEnum = exports.UserApiGetFollowedArtistsArtistTypeEnum || (exports.UserApiGetFollowedArtistsArtistTypeEnum = {}));
var UserApiGetFollowedArtistsFieldsEnum;
(function (UserApiGetFollowedArtistsFieldsEnum) {
    UserApiGetFollowedArtistsFieldsEnum["None"] = "None";
    UserApiGetFollowedArtistsFieldsEnum["AdditionalNames"] = "AdditionalNames";
    UserApiGetFollowedArtistsFieldsEnum["ArtistLinks"] = "ArtistLinks";
    UserApiGetFollowedArtistsFieldsEnum["ArtistLinksReverse"] = "ArtistLinksReverse";
    UserApiGetFollowedArtistsFieldsEnum["BaseVoicebank"] = "BaseVoicebank";
    UserApiGetFollowedArtistsFieldsEnum["Description"] = "Description";
    UserApiGetFollowedArtistsFieldsEnum["MainPicture"] = "MainPicture";
    UserApiGetFollowedArtistsFieldsEnum["Names"] = "Names";
    UserApiGetFollowedArtistsFieldsEnum["Tags"] = "Tags";
    UserApiGetFollowedArtistsFieldsEnum["WebLinks"] = "WebLinks";
})(UserApiGetFollowedArtistsFieldsEnum = exports.UserApiGetFollowedArtistsFieldsEnum || (exports.UserApiGetFollowedArtistsFieldsEnum = {}));
var UserApiGetFollowedArtistsLangEnum;
(function (UserApiGetFollowedArtistsLangEnum) {
    UserApiGetFollowedArtistsLangEnum["Default"] = "Default";
    UserApiGetFollowedArtistsLangEnum["Japanese"] = "Japanese";
    UserApiGetFollowedArtistsLangEnum["Romaji"] = "Romaji";
    UserApiGetFollowedArtistsLangEnum["English"] = "English";
})(UserApiGetFollowedArtistsLangEnum = exports.UserApiGetFollowedArtistsLangEnum || (exports.UserApiGetFollowedArtistsLangEnum = {}));
var UserApiGetFollowedArtistsNameMatchModeEnum;
(function (UserApiGetFollowedArtistsNameMatchModeEnum) {
    UserApiGetFollowedArtistsNameMatchModeEnum["Auto"] = "Auto";
    UserApiGetFollowedArtistsNameMatchModeEnum["Partial"] = "Partial";
    UserApiGetFollowedArtistsNameMatchModeEnum["StartsWith"] = "StartsWith";
    UserApiGetFollowedArtistsNameMatchModeEnum["Exact"] = "Exact";
    UserApiGetFollowedArtistsNameMatchModeEnum["Words"] = "Words";
})(UserApiGetFollowedArtistsNameMatchModeEnum = exports.UserApiGetFollowedArtistsNameMatchModeEnum || (exports.UserApiGetFollowedArtistsNameMatchModeEnum = {}));
var UserApiGetFollowedArtistsSortEnum;
(function (UserApiGetFollowedArtistsSortEnum) {
    UserApiGetFollowedArtistsSortEnum["None"] = "None";
    UserApiGetFollowedArtistsSortEnum["Name"] = "Name";
    UserApiGetFollowedArtistsSortEnum["AdditionDate"] = "AdditionDate";
    UserApiGetFollowedArtistsSortEnum["AdditionDateAsc"] = "AdditionDateAsc";
    UserApiGetFollowedArtistsSortEnum["ReleaseDate"] = "ReleaseDate";
    UserApiGetFollowedArtistsSortEnum["SongCount"] = "SongCount";
    UserApiGetFollowedArtistsSortEnum["SongRating"] = "SongRating";
    UserApiGetFollowedArtistsSortEnum["FollowerCount"] = "FollowerCount";
})(UserApiGetFollowedArtistsSortEnum = exports.UserApiGetFollowedArtistsSortEnum || (exports.UserApiGetFollowedArtistsSortEnum = {}));
var UserApiGetFollowedArtistsQueryParams = /** @class */ (function (_super) {
    __extends(UserApiGetFollowedArtistsQueryParams, _super);
    function UserApiGetFollowedArtistsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=artistType" }),
        __metadata("design:type", String)
    ], UserApiGetFollowedArtistsQueryParams.prototype, "artistType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], UserApiGetFollowedArtistsQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=getTotalCount" }),
        __metadata("design:type", Boolean)
    ], UserApiGetFollowedArtistsQueryParams.prototype, "getTotalCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], UserApiGetFollowedArtistsQueryParams.prototype, "lang", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], UserApiGetFollowedArtistsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=nameMatchMode" }),
        __metadata("design:type", String)
    ], UserApiGetFollowedArtistsQueryParams.prototype, "nameMatchMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], UserApiGetFollowedArtistsQueryParams.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], UserApiGetFollowedArtistsQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], UserApiGetFollowedArtistsQueryParams.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=tagId" }),
        __metadata("design:type", Array)
    ], UserApiGetFollowedArtistsQueryParams.prototype, "tagId", void 0);
    return UserApiGetFollowedArtistsQueryParams;
}(utils_1.SpeakeasyBase));
exports.UserApiGetFollowedArtistsQueryParams = UserApiGetFollowedArtistsQueryParams;
var UserApiGetFollowedArtistsRequest = /** @class */ (function (_super) {
    __extends(UserApiGetFollowedArtistsRequest, _super);
    function UserApiGetFollowedArtistsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserApiGetFollowedArtistsPathParams)
    ], UserApiGetFollowedArtistsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserApiGetFollowedArtistsQueryParams)
    ], UserApiGetFollowedArtistsRequest.prototype, "queryParams", void 0);
    return UserApiGetFollowedArtistsRequest;
}(utils_1.SpeakeasyBase));
exports.UserApiGetFollowedArtistsRequest = UserApiGetFollowedArtistsRequest;
var UserApiGetFollowedArtistsResponse = /** @class */ (function (_super) {
    __extends(UserApiGetFollowedArtistsResponse, _super);
    function UserApiGetFollowedArtistsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UserApiGetFollowedArtistsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserApiGetFollowedArtistsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PartialFindResultArtistForUserForApiContract)
    ], UserApiGetFollowedArtistsResponse.prototype, "partialFindResultArtistForUserForApiContract", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UserApiGetFollowedArtistsResponse.prototype, "statusCode", void 0);
    return UserApiGetFollowedArtistsResponse;
}(utils_1.SpeakeasyBase));
exports.UserApiGetFollowedArtistsResponse = UserApiGetFollowedArtistsResponse;
