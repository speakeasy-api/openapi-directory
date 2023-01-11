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
exports.SongApiGetTopSongsResponse = exports.SongApiGetTopSongsRequest = exports.SongApiGetTopSongsQueryParams = exports.SongApiGetTopSongsVocalistEnum = exports.SongApiGetTopSongsLanguagePreferenceEnum = exports.SongApiGetTopSongsFilterByEnum = exports.SongApiGetTopSongsFieldsEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SongApiGetTopSongsFieldsEnum;
(function (SongApiGetTopSongsFieldsEnum) {
    SongApiGetTopSongsFieldsEnum["None"] = "None";
    SongApiGetTopSongsFieldsEnum["AdditionalNames"] = "AdditionalNames";
    SongApiGetTopSongsFieldsEnum["Albums"] = "Albums";
    SongApiGetTopSongsFieldsEnum["Artists"] = "Artists";
    SongApiGetTopSongsFieldsEnum["Lyrics"] = "Lyrics";
    SongApiGetTopSongsFieldsEnum["MainPicture"] = "MainPicture";
    SongApiGetTopSongsFieldsEnum["Names"] = "Names";
    SongApiGetTopSongsFieldsEnum["PVs"] = "PVs";
    SongApiGetTopSongsFieldsEnum["ReleaseEvent"] = "ReleaseEvent";
    SongApiGetTopSongsFieldsEnum["Tags"] = "Tags";
    SongApiGetTopSongsFieldsEnum["ThumbUrl"] = "ThumbUrl";
    SongApiGetTopSongsFieldsEnum["WebLinks"] = "WebLinks";
})(SongApiGetTopSongsFieldsEnum = exports.SongApiGetTopSongsFieldsEnum || (exports.SongApiGetTopSongsFieldsEnum = {}));
var SongApiGetTopSongsFilterByEnum;
(function (SongApiGetTopSongsFilterByEnum) {
    SongApiGetTopSongsFilterByEnum["CreateDate"] = "CreateDate";
    SongApiGetTopSongsFilterByEnum["PublishDate"] = "PublishDate";
    SongApiGetTopSongsFilterByEnum["Popularity"] = "Popularity";
})(SongApiGetTopSongsFilterByEnum = exports.SongApiGetTopSongsFilterByEnum || (exports.SongApiGetTopSongsFilterByEnum = {}));
var SongApiGetTopSongsLanguagePreferenceEnum;
(function (SongApiGetTopSongsLanguagePreferenceEnum) {
    SongApiGetTopSongsLanguagePreferenceEnum["Default"] = "Default";
    SongApiGetTopSongsLanguagePreferenceEnum["Japanese"] = "Japanese";
    SongApiGetTopSongsLanguagePreferenceEnum["Romaji"] = "Romaji";
    SongApiGetTopSongsLanguagePreferenceEnum["English"] = "English";
})(SongApiGetTopSongsLanguagePreferenceEnum = exports.SongApiGetTopSongsLanguagePreferenceEnum || (exports.SongApiGetTopSongsLanguagePreferenceEnum = {}));
var SongApiGetTopSongsVocalistEnum;
(function (SongApiGetTopSongsVocalistEnum) {
    SongApiGetTopSongsVocalistEnum["Nothing"] = "Nothing";
    SongApiGetTopSongsVocalistEnum["Vocaloid"] = "Vocaloid";
    SongApiGetTopSongsVocalistEnum["Utau"] = "UTAU";
    SongApiGetTopSongsVocalistEnum["Other"] = "Other";
})(SongApiGetTopSongsVocalistEnum = exports.SongApiGetTopSongsVocalistEnum || (exports.SongApiGetTopSongsVocalistEnum = {}));
var SongApiGetTopSongsQueryParams = /** @class */ (function (_super) {
    __extends(SongApiGetTopSongsQueryParams, _super);
    function SongApiGetTopSongsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=durationHours" }),
        __metadata("design:type", Number)
    ], SongApiGetTopSongsQueryParams.prototype, "durationHours", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SongApiGetTopSongsQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filterBy" }),
        __metadata("design:type", String)
    ], SongApiGetTopSongsQueryParams.prototype, "filterBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=languagePreference" }),
        __metadata("design:type", String)
    ], SongApiGetTopSongsQueryParams.prototype, "languagePreference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], SongApiGetTopSongsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", Date)
    ], SongApiGetTopSongsQueryParams.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vocalist" }),
        __metadata("design:type", String)
    ], SongApiGetTopSongsQueryParams.prototype, "vocalist", void 0);
    return SongApiGetTopSongsQueryParams;
}(utils_1.SpeakeasyBase));
exports.SongApiGetTopSongsQueryParams = SongApiGetTopSongsQueryParams;
var SongApiGetTopSongsRequest = /** @class */ (function (_super) {
    __extends(SongApiGetTopSongsRequest, _super);
    function SongApiGetTopSongsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SongApiGetTopSongsQueryParams)
    ], SongApiGetTopSongsRequest.prototype, "queryParams", void 0);
    return SongApiGetTopSongsRequest;
}(utils_1.SpeakeasyBase));
exports.SongApiGetTopSongsRequest = SongApiGetTopSongsRequest;
var SongApiGetTopSongsResponse = /** @class */ (function (_super) {
    __extends(SongApiGetTopSongsResponse, _super);
    function SongApiGetTopSongsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], SongApiGetTopSongsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SongApiGetTopSongsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.SongForApiContract }),
        __metadata("design:type", Array)
    ], SongApiGetTopSongsResponse.prototype, "songForApiContracts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SongApiGetTopSongsResponse.prototype, "statusCode", void 0);
    return SongApiGetTopSongsResponse;
}(utils_1.SpeakeasyBase));
exports.SongApiGetTopSongsResponse = SongApiGetTopSongsResponse;
