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
exports.AlbumApiGetNewAlbumsResponse = exports.AlbumApiGetNewAlbumsRequest = exports.AlbumApiGetNewAlbumsQueryParams = exports.AlbumApiGetNewAlbumsLanguagePreferenceEnum = exports.AlbumApiGetNewAlbumsFieldsEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AlbumApiGetNewAlbumsFieldsEnum;
(function (AlbumApiGetNewAlbumsFieldsEnum) {
    AlbumApiGetNewAlbumsFieldsEnum["None"] = "None";
    AlbumApiGetNewAlbumsFieldsEnum["AdditionalNames"] = "AdditionalNames";
    AlbumApiGetNewAlbumsFieldsEnum["Artists"] = "Artists";
    AlbumApiGetNewAlbumsFieldsEnum["Description"] = "Description";
    AlbumApiGetNewAlbumsFieldsEnum["Discs"] = "Discs";
    AlbumApiGetNewAlbumsFieldsEnum["Identifiers"] = "Identifiers";
    AlbumApiGetNewAlbumsFieldsEnum["MainPicture"] = "MainPicture";
    AlbumApiGetNewAlbumsFieldsEnum["Names"] = "Names";
    AlbumApiGetNewAlbumsFieldsEnum["PVs"] = "PVs";
    AlbumApiGetNewAlbumsFieldsEnum["ReleaseEvent"] = "ReleaseEvent";
    AlbumApiGetNewAlbumsFieldsEnum["Tags"] = "Tags";
    AlbumApiGetNewAlbumsFieldsEnum["Tracks"] = "Tracks";
    AlbumApiGetNewAlbumsFieldsEnum["WebLinks"] = "WebLinks";
})(AlbumApiGetNewAlbumsFieldsEnum = exports.AlbumApiGetNewAlbumsFieldsEnum || (exports.AlbumApiGetNewAlbumsFieldsEnum = {}));
var AlbumApiGetNewAlbumsLanguagePreferenceEnum;
(function (AlbumApiGetNewAlbumsLanguagePreferenceEnum) {
    AlbumApiGetNewAlbumsLanguagePreferenceEnum["Default"] = "Default";
    AlbumApiGetNewAlbumsLanguagePreferenceEnum["Japanese"] = "Japanese";
    AlbumApiGetNewAlbumsLanguagePreferenceEnum["Romaji"] = "Romaji";
    AlbumApiGetNewAlbumsLanguagePreferenceEnum["English"] = "English";
})(AlbumApiGetNewAlbumsLanguagePreferenceEnum = exports.AlbumApiGetNewAlbumsLanguagePreferenceEnum || (exports.AlbumApiGetNewAlbumsLanguagePreferenceEnum = {}));
var AlbumApiGetNewAlbumsQueryParams = /** @class */ (function (_super) {
    __extends(AlbumApiGetNewAlbumsQueryParams, _super);
    function AlbumApiGetNewAlbumsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AlbumApiGetNewAlbumsQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=languagePreference" }),
        __metadata("design:type", String)
    ], AlbumApiGetNewAlbumsQueryParams.prototype, "languagePreference", void 0);
    return AlbumApiGetNewAlbumsQueryParams;
}(utils_1.SpeakeasyBase));
exports.AlbumApiGetNewAlbumsQueryParams = AlbumApiGetNewAlbumsQueryParams;
var AlbumApiGetNewAlbumsRequest = /** @class */ (function (_super) {
    __extends(AlbumApiGetNewAlbumsRequest, _super);
    function AlbumApiGetNewAlbumsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AlbumApiGetNewAlbumsQueryParams)
    ], AlbumApiGetNewAlbumsRequest.prototype, "queryParams", void 0);
    return AlbumApiGetNewAlbumsRequest;
}(utils_1.SpeakeasyBase));
exports.AlbumApiGetNewAlbumsRequest = AlbumApiGetNewAlbumsRequest;
var AlbumApiGetNewAlbumsResponse = /** @class */ (function (_super) {
    __extends(AlbumApiGetNewAlbumsResponse, _super);
    function AlbumApiGetNewAlbumsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.AlbumForApiContract }),
        __metadata("design:type", Array)
    ], AlbumApiGetNewAlbumsResponse.prototype, "albumForApiContracts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AlbumApiGetNewAlbumsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AlbumApiGetNewAlbumsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AlbumApiGetNewAlbumsResponse.prototype, "statusCode", void 0);
    return AlbumApiGetNewAlbumsResponse;
}(utils_1.SpeakeasyBase));
exports.AlbumApiGetNewAlbumsResponse = AlbumApiGetNewAlbumsResponse;
