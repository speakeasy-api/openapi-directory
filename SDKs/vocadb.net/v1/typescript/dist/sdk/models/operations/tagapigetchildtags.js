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
exports.TagApiGetChildTagsResponse = exports.TagApiGetChildTagsRequest = exports.TagApiGetChildTagsQueryParams = exports.TagApiGetChildTagsLangEnum = exports.TagApiGetChildTagsFieldsEnum = exports.TagApiGetChildTagsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TagApiGetChildTagsPathParams = /** @class */ (function (_super) {
    __extends(TagApiGetChildTagsPathParams, _super);
    function TagApiGetChildTagsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=tagId" }),
        __metadata("design:type", Number)
    ], TagApiGetChildTagsPathParams.prototype, "tagId", void 0);
    return TagApiGetChildTagsPathParams;
}(utils_1.SpeakeasyBase));
exports.TagApiGetChildTagsPathParams = TagApiGetChildTagsPathParams;
var TagApiGetChildTagsFieldsEnum;
(function (TagApiGetChildTagsFieldsEnum) {
    TagApiGetChildTagsFieldsEnum["None"] = "None";
    TagApiGetChildTagsFieldsEnum["AdditionalNames"] = "AdditionalNames";
    TagApiGetChildTagsFieldsEnum["AliasedTo"] = "AliasedTo";
    TagApiGetChildTagsFieldsEnum["Description"] = "Description";
    TagApiGetChildTagsFieldsEnum["MainPicture"] = "MainPicture";
    TagApiGetChildTagsFieldsEnum["Names"] = "Names";
    TagApiGetChildTagsFieldsEnum["Parent"] = "Parent";
    TagApiGetChildTagsFieldsEnum["RelatedTags"] = "RelatedTags";
    TagApiGetChildTagsFieldsEnum["TranslatedDescription"] = "TranslatedDescription";
    TagApiGetChildTagsFieldsEnum["WebLinks"] = "WebLinks";
})(TagApiGetChildTagsFieldsEnum = exports.TagApiGetChildTagsFieldsEnum || (exports.TagApiGetChildTagsFieldsEnum = {}));
var TagApiGetChildTagsLangEnum;
(function (TagApiGetChildTagsLangEnum) {
    TagApiGetChildTagsLangEnum["Default"] = "Default";
    TagApiGetChildTagsLangEnum["Japanese"] = "Japanese";
    TagApiGetChildTagsLangEnum["Romaji"] = "Romaji";
    TagApiGetChildTagsLangEnum["English"] = "English";
})(TagApiGetChildTagsLangEnum = exports.TagApiGetChildTagsLangEnum || (exports.TagApiGetChildTagsLangEnum = {}));
var TagApiGetChildTagsQueryParams = /** @class */ (function (_super) {
    __extends(TagApiGetChildTagsQueryParams, _super);
    function TagApiGetChildTagsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagApiGetChildTagsQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], TagApiGetChildTagsQueryParams.prototype, "lang", void 0);
    return TagApiGetChildTagsQueryParams;
}(utils_1.SpeakeasyBase));
exports.TagApiGetChildTagsQueryParams = TagApiGetChildTagsQueryParams;
var TagApiGetChildTagsRequest = /** @class */ (function (_super) {
    __extends(TagApiGetChildTagsRequest, _super);
    function TagApiGetChildTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TagApiGetChildTagsPathParams)
    ], TagApiGetChildTagsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TagApiGetChildTagsQueryParams)
    ], TagApiGetChildTagsRequest.prototype, "queryParams", void 0);
    return TagApiGetChildTagsRequest;
}(utils_1.SpeakeasyBase));
exports.TagApiGetChildTagsRequest = TagApiGetChildTagsRequest;
var TagApiGetChildTagsResponse = /** @class */ (function (_super) {
    __extends(TagApiGetChildTagsResponse, _super);
    function TagApiGetChildTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], TagApiGetChildTagsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TagApiGetChildTagsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TagApiGetChildTagsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.TagForApiContract }),
        __metadata("design:type", Array)
    ], TagApiGetChildTagsResponse.prototype, "tagForApiContracts", void 0);
    return TagApiGetChildTagsResponse;
}(utils_1.SpeakeasyBase));
exports.TagApiGetChildTagsResponse = TagApiGetChildTagsResponse;
