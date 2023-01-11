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
exports.SongApiGetByPvResponse = exports.SongApiGetByPvRequest = exports.SongApiGetByPvQueryParams = exports.SongApiGetByPvPvServiceEnum = exports.SongApiGetByPvLangEnum = exports.SongApiGetByPvFieldsEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SongApiGetByPvFieldsEnum;
(function (SongApiGetByPvFieldsEnum) {
    SongApiGetByPvFieldsEnum["None"] = "None";
    SongApiGetByPvFieldsEnum["AdditionalNames"] = "AdditionalNames";
    SongApiGetByPvFieldsEnum["Albums"] = "Albums";
    SongApiGetByPvFieldsEnum["Artists"] = "Artists";
    SongApiGetByPvFieldsEnum["Lyrics"] = "Lyrics";
    SongApiGetByPvFieldsEnum["MainPicture"] = "MainPicture";
    SongApiGetByPvFieldsEnum["Names"] = "Names";
    SongApiGetByPvFieldsEnum["PVs"] = "PVs";
    SongApiGetByPvFieldsEnum["ReleaseEvent"] = "ReleaseEvent";
    SongApiGetByPvFieldsEnum["Tags"] = "Tags";
    SongApiGetByPvFieldsEnum["ThumbUrl"] = "ThumbUrl";
    SongApiGetByPvFieldsEnum["WebLinks"] = "WebLinks";
})(SongApiGetByPvFieldsEnum = exports.SongApiGetByPvFieldsEnum || (exports.SongApiGetByPvFieldsEnum = {}));
var SongApiGetByPvLangEnum;
(function (SongApiGetByPvLangEnum) {
    SongApiGetByPvLangEnum["Default"] = "Default";
    SongApiGetByPvLangEnum["Japanese"] = "Japanese";
    SongApiGetByPvLangEnum["Romaji"] = "Romaji";
    SongApiGetByPvLangEnum["English"] = "English";
})(SongApiGetByPvLangEnum = exports.SongApiGetByPvLangEnum || (exports.SongApiGetByPvLangEnum = {}));
var SongApiGetByPvPvServiceEnum;
(function (SongApiGetByPvPvServiceEnum) {
    SongApiGetByPvPvServiceEnum["NicoNicoDouga"] = "NicoNicoDouga";
    SongApiGetByPvPvServiceEnum["Youtube"] = "Youtube";
    SongApiGetByPvPvServiceEnum["SoundCloud"] = "SoundCloud";
    SongApiGetByPvPvServiceEnum["Vimeo"] = "Vimeo";
    SongApiGetByPvPvServiceEnum["Piapro"] = "Piapro";
    SongApiGetByPvPvServiceEnum["Bilibili"] = "Bilibili";
    SongApiGetByPvPvServiceEnum["File"] = "File";
    SongApiGetByPvPvServiceEnum["LocalFile"] = "LocalFile";
    SongApiGetByPvPvServiceEnum["Creofuga"] = "Creofuga";
    SongApiGetByPvPvServiceEnum["Bandcamp"] = "Bandcamp";
})(SongApiGetByPvPvServiceEnum = exports.SongApiGetByPvPvServiceEnum || (exports.SongApiGetByPvPvServiceEnum = {}));
var SongApiGetByPvQueryParams = /** @class */ (function (_super) {
    __extends(SongApiGetByPvQueryParams, _super);
    function SongApiGetByPvQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SongApiGetByPvQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], SongApiGetByPvQueryParams.prototype, "lang", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pvId" }),
        __metadata("design:type", String)
    ], SongApiGetByPvQueryParams.prototype, "pvId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pvService" }),
        __metadata("design:type", String)
    ], SongApiGetByPvQueryParams.prototype, "pvService", void 0);
    return SongApiGetByPvQueryParams;
}(utils_1.SpeakeasyBase));
exports.SongApiGetByPvQueryParams = SongApiGetByPvQueryParams;
var SongApiGetByPvRequest = /** @class */ (function (_super) {
    __extends(SongApiGetByPvRequest, _super);
    function SongApiGetByPvRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SongApiGetByPvQueryParams)
    ], SongApiGetByPvRequest.prototype, "queryParams", void 0);
    return SongApiGetByPvRequest;
}(utils_1.SpeakeasyBase));
exports.SongApiGetByPvRequest = SongApiGetByPvRequest;
var SongApiGetByPvResponse = /** @class */ (function (_super) {
    __extends(SongApiGetByPvResponse, _super);
    function SongApiGetByPvResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], SongApiGetByPvResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SongApiGetByPvResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SongForApiContract)
    ], SongApiGetByPvResponse.prototype, "songForApiContract", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SongApiGetByPvResponse.prototype, "statusCode", void 0);
    return SongApiGetByPvResponse;
}(utils_1.SpeakeasyBase));
exports.SongApiGetByPvResponse = SongApiGetByPvResponse;
