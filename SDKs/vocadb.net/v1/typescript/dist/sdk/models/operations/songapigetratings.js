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
exports.SongApiGetRatingsResponse = exports.SongApiGetRatingsRequest = exports.SongApiGetRatingsQueryParams = exports.SongApiGetRatingsUserFieldsEnum = exports.SongApiGetRatingsLangEnum = exports.SongApiGetRatingsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SongApiGetRatingsPathParams = /** @class */ (function (_super) {
    __extends(SongApiGetRatingsPathParams, _super);
    function SongApiGetRatingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], SongApiGetRatingsPathParams.prototype, "id", void 0);
    return SongApiGetRatingsPathParams;
}(utils_1.SpeakeasyBase));
exports.SongApiGetRatingsPathParams = SongApiGetRatingsPathParams;
var SongApiGetRatingsLangEnum;
(function (SongApiGetRatingsLangEnum) {
    SongApiGetRatingsLangEnum["Default"] = "Default";
    SongApiGetRatingsLangEnum["Japanese"] = "Japanese";
    SongApiGetRatingsLangEnum["Romaji"] = "Romaji";
    SongApiGetRatingsLangEnum["English"] = "English";
})(SongApiGetRatingsLangEnum = exports.SongApiGetRatingsLangEnum || (exports.SongApiGetRatingsLangEnum = {}));
var SongApiGetRatingsUserFieldsEnum;
(function (SongApiGetRatingsUserFieldsEnum) {
    SongApiGetRatingsUserFieldsEnum["None"] = "None";
    SongApiGetRatingsUserFieldsEnum["KnownLanguages"] = "KnownLanguages";
    SongApiGetRatingsUserFieldsEnum["MainPicture"] = "MainPicture";
    SongApiGetRatingsUserFieldsEnum["OldUsernames"] = "OldUsernames";
})(SongApiGetRatingsUserFieldsEnum = exports.SongApiGetRatingsUserFieldsEnum || (exports.SongApiGetRatingsUserFieldsEnum = {}));
var SongApiGetRatingsQueryParams = /** @class */ (function (_super) {
    __extends(SongApiGetRatingsQueryParams, _super);
    function SongApiGetRatingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], SongApiGetRatingsQueryParams.prototype, "lang", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userFields" }),
        __metadata("design:type", String)
    ], SongApiGetRatingsQueryParams.prototype, "userFields", void 0);
    return SongApiGetRatingsQueryParams;
}(utils_1.SpeakeasyBase));
exports.SongApiGetRatingsQueryParams = SongApiGetRatingsQueryParams;
var SongApiGetRatingsRequest = /** @class */ (function (_super) {
    __extends(SongApiGetRatingsRequest, _super);
    function SongApiGetRatingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SongApiGetRatingsPathParams)
    ], SongApiGetRatingsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SongApiGetRatingsQueryParams)
    ], SongApiGetRatingsRequest.prototype, "queryParams", void 0);
    return SongApiGetRatingsRequest;
}(utils_1.SpeakeasyBase));
exports.SongApiGetRatingsRequest = SongApiGetRatingsRequest;
var SongApiGetRatingsResponse = /** @class */ (function (_super) {
    __extends(SongApiGetRatingsResponse, _super);
    function SongApiGetRatingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], SongApiGetRatingsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SongApiGetRatingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.RatedSongForUserForApiContract }),
        __metadata("design:type", Array)
    ], SongApiGetRatingsResponse.prototype, "ratedSongForUserForApiContracts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SongApiGetRatingsResponse.prototype, "statusCode", void 0);
    return SongApiGetRatingsResponse;
}(utils_1.SpeakeasyBase));
exports.SongApiGetRatingsResponse = SongApiGetRatingsResponse;
