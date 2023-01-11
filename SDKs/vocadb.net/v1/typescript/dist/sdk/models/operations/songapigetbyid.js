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
exports.SongApiGetByIdResponse = exports.SongApiGetByIdRequest = exports.SongApiGetByIdQueryParams = exports.SongApiGetByIdLangEnum = exports.SongApiGetByIdFieldsEnum = exports.SongApiGetByIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SongApiGetByIdPathParams = /** @class */ (function (_super) {
    __extends(SongApiGetByIdPathParams, _super);
    function SongApiGetByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], SongApiGetByIdPathParams.prototype, "id", void 0);
    return SongApiGetByIdPathParams;
}(utils_1.SpeakeasyBase));
exports.SongApiGetByIdPathParams = SongApiGetByIdPathParams;
var SongApiGetByIdFieldsEnum;
(function (SongApiGetByIdFieldsEnum) {
    SongApiGetByIdFieldsEnum["None"] = "None";
    SongApiGetByIdFieldsEnum["AdditionalNames"] = "AdditionalNames";
    SongApiGetByIdFieldsEnum["Albums"] = "Albums";
    SongApiGetByIdFieldsEnum["Artists"] = "Artists";
    SongApiGetByIdFieldsEnum["Lyrics"] = "Lyrics";
    SongApiGetByIdFieldsEnum["MainPicture"] = "MainPicture";
    SongApiGetByIdFieldsEnum["Names"] = "Names";
    SongApiGetByIdFieldsEnum["PVs"] = "PVs";
    SongApiGetByIdFieldsEnum["ReleaseEvent"] = "ReleaseEvent";
    SongApiGetByIdFieldsEnum["Tags"] = "Tags";
    SongApiGetByIdFieldsEnum["ThumbUrl"] = "ThumbUrl";
    SongApiGetByIdFieldsEnum["WebLinks"] = "WebLinks";
})(SongApiGetByIdFieldsEnum = exports.SongApiGetByIdFieldsEnum || (exports.SongApiGetByIdFieldsEnum = {}));
var SongApiGetByIdLangEnum;
(function (SongApiGetByIdLangEnum) {
    SongApiGetByIdLangEnum["Default"] = "Default";
    SongApiGetByIdLangEnum["Japanese"] = "Japanese";
    SongApiGetByIdLangEnum["Romaji"] = "Romaji";
    SongApiGetByIdLangEnum["English"] = "English";
})(SongApiGetByIdLangEnum = exports.SongApiGetByIdLangEnum || (exports.SongApiGetByIdLangEnum = {}));
var SongApiGetByIdQueryParams = /** @class */ (function (_super) {
    __extends(SongApiGetByIdQueryParams, _super);
    function SongApiGetByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SongApiGetByIdQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], SongApiGetByIdQueryParams.prototype, "lang", void 0);
    return SongApiGetByIdQueryParams;
}(utils_1.SpeakeasyBase));
exports.SongApiGetByIdQueryParams = SongApiGetByIdQueryParams;
var SongApiGetByIdRequest = /** @class */ (function (_super) {
    __extends(SongApiGetByIdRequest, _super);
    function SongApiGetByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SongApiGetByIdPathParams)
    ], SongApiGetByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SongApiGetByIdQueryParams)
    ], SongApiGetByIdRequest.prototype, "queryParams", void 0);
    return SongApiGetByIdRequest;
}(utils_1.SpeakeasyBase));
exports.SongApiGetByIdRequest = SongApiGetByIdRequest;
var SongApiGetByIdResponse = /** @class */ (function (_super) {
    __extends(SongApiGetByIdResponse, _super);
    function SongApiGetByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], SongApiGetByIdResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SongApiGetByIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SongForApiContract)
    ], SongApiGetByIdResponse.prototype, "songForApiContract", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SongApiGetByIdResponse.prototype, "statusCode", void 0);
    return SongApiGetByIdResponse;
}(utils_1.SpeakeasyBase));
exports.SongApiGetByIdResponse = SongApiGetByIdResponse;
