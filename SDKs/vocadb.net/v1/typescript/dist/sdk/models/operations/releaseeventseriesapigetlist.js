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
exports.ReleaseEventSeriesApiGetListResponse = exports.ReleaseEventSeriesApiGetListRequest = exports.ReleaseEventSeriesApiGetListQueryParams = exports.ReleaseEventSeriesApiGetListNameMatchModeEnum = exports.ReleaseEventSeriesApiGetListLangEnum = exports.ReleaseEventSeriesApiGetListFieldsEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReleaseEventSeriesApiGetListFieldsEnum;
(function (ReleaseEventSeriesApiGetListFieldsEnum) {
    ReleaseEventSeriesApiGetListFieldsEnum["None"] = "None";
    ReleaseEventSeriesApiGetListFieldsEnum["AdditionalNames"] = "AdditionalNames";
    ReleaseEventSeriesApiGetListFieldsEnum["Description"] = "Description";
    ReleaseEventSeriesApiGetListFieldsEnum["Events"] = "Events";
    ReleaseEventSeriesApiGetListFieldsEnum["MainPicture"] = "MainPicture";
    ReleaseEventSeriesApiGetListFieldsEnum["Names"] = "Names";
    ReleaseEventSeriesApiGetListFieldsEnum["WebLinks"] = "WebLinks";
})(ReleaseEventSeriesApiGetListFieldsEnum = exports.ReleaseEventSeriesApiGetListFieldsEnum || (exports.ReleaseEventSeriesApiGetListFieldsEnum = {}));
var ReleaseEventSeriesApiGetListLangEnum;
(function (ReleaseEventSeriesApiGetListLangEnum) {
    ReleaseEventSeriesApiGetListLangEnum["Default"] = "Default";
    ReleaseEventSeriesApiGetListLangEnum["Japanese"] = "Japanese";
    ReleaseEventSeriesApiGetListLangEnum["Romaji"] = "Romaji";
    ReleaseEventSeriesApiGetListLangEnum["English"] = "English";
})(ReleaseEventSeriesApiGetListLangEnum = exports.ReleaseEventSeriesApiGetListLangEnum || (exports.ReleaseEventSeriesApiGetListLangEnum = {}));
var ReleaseEventSeriesApiGetListNameMatchModeEnum;
(function (ReleaseEventSeriesApiGetListNameMatchModeEnum) {
    ReleaseEventSeriesApiGetListNameMatchModeEnum["Auto"] = "Auto";
    ReleaseEventSeriesApiGetListNameMatchModeEnum["Partial"] = "Partial";
    ReleaseEventSeriesApiGetListNameMatchModeEnum["StartsWith"] = "StartsWith";
    ReleaseEventSeriesApiGetListNameMatchModeEnum["Exact"] = "Exact";
    ReleaseEventSeriesApiGetListNameMatchModeEnum["Words"] = "Words";
})(ReleaseEventSeriesApiGetListNameMatchModeEnum = exports.ReleaseEventSeriesApiGetListNameMatchModeEnum || (exports.ReleaseEventSeriesApiGetListNameMatchModeEnum = {}));
var ReleaseEventSeriesApiGetListQueryParams = /** @class */ (function (_super) {
    __extends(ReleaseEventSeriesApiGetListQueryParams, _super);
    function ReleaseEventSeriesApiGetListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ReleaseEventSeriesApiGetListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=getTotalCount" }),
        __metadata("design:type", Boolean)
    ], ReleaseEventSeriesApiGetListQueryParams.prototype, "getTotalCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], ReleaseEventSeriesApiGetListQueryParams.prototype, "lang", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ReleaseEventSeriesApiGetListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=nameMatchMode" }),
        __metadata("design:type", String)
    ], ReleaseEventSeriesApiGetListQueryParams.prototype, "nameMatchMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], ReleaseEventSeriesApiGetListQueryParams.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], ReleaseEventSeriesApiGetListQueryParams.prototype, "start", void 0);
    return ReleaseEventSeriesApiGetListQueryParams;
}(utils_1.SpeakeasyBase));
exports.ReleaseEventSeriesApiGetListQueryParams = ReleaseEventSeriesApiGetListQueryParams;
var ReleaseEventSeriesApiGetListRequest = /** @class */ (function (_super) {
    __extends(ReleaseEventSeriesApiGetListRequest, _super);
    function ReleaseEventSeriesApiGetListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReleaseEventSeriesApiGetListQueryParams)
    ], ReleaseEventSeriesApiGetListRequest.prototype, "queryParams", void 0);
    return ReleaseEventSeriesApiGetListRequest;
}(utils_1.SpeakeasyBase));
exports.ReleaseEventSeriesApiGetListRequest = ReleaseEventSeriesApiGetListRequest;
var ReleaseEventSeriesApiGetListResponse = /** @class */ (function (_super) {
    __extends(ReleaseEventSeriesApiGetListResponse, _super);
    function ReleaseEventSeriesApiGetListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ReleaseEventSeriesApiGetListResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReleaseEventSeriesApiGetListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PartialFindResultReleaseEventSeriesForApiContract)
    ], ReleaseEventSeriesApiGetListResponse.prototype, "partialFindResultReleaseEventSeriesForApiContract", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReleaseEventSeriesApiGetListResponse.prototype, "statusCode", void 0);
    return ReleaseEventSeriesApiGetListResponse;
}(utils_1.SpeakeasyBase));
exports.ReleaseEventSeriesApiGetListResponse = ReleaseEventSeriesApiGetListResponse;
