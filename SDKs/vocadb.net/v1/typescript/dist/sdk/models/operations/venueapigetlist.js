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
exports.VenueApiGetListResponse = exports.VenueApiGetListRequest = exports.VenueApiGetListQueryParams = exports.VenueApiGetListSortRuleEnum = exports.VenueApiGetListNameMatchModeEnum = exports.VenueApiGetListLangEnum = exports.VenueApiGetListFieldsEnum = exports.VenueApiGetListDistanceUnitEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var VenueApiGetListDistanceUnitEnum;
(function (VenueApiGetListDistanceUnitEnum) {
    VenueApiGetListDistanceUnitEnum["Kilometers"] = "Kilometers";
    VenueApiGetListDistanceUnitEnum["Miles"] = "Miles";
})(VenueApiGetListDistanceUnitEnum = exports.VenueApiGetListDistanceUnitEnum || (exports.VenueApiGetListDistanceUnitEnum = {}));
var VenueApiGetListFieldsEnum;
(function (VenueApiGetListFieldsEnum) {
    VenueApiGetListFieldsEnum["None"] = "None";
    VenueApiGetListFieldsEnum["AdditionalNames"] = "AdditionalNames";
    VenueApiGetListFieldsEnum["Description"] = "Description";
    VenueApiGetListFieldsEnum["Events"] = "Events";
    VenueApiGetListFieldsEnum["Names"] = "Names";
    VenueApiGetListFieldsEnum["WebLinks"] = "WebLinks";
})(VenueApiGetListFieldsEnum = exports.VenueApiGetListFieldsEnum || (exports.VenueApiGetListFieldsEnum = {}));
var VenueApiGetListLangEnum;
(function (VenueApiGetListLangEnum) {
    VenueApiGetListLangEnum["Default"] = "Default";
    VenueApiGetListLangEnum["Japanese"] = "Japanese";
    VenueApiGetListLangEnum["Romaji"] = "Romaji";
    VenueApiGetListLangEnum["English"] = "English";
})(VenueApiGetListLangEnum = exports.VenueApiGetListLangEnum || (exports.VenueApiGetListLangEnum = {}));
var VenueApiGetListNameMatchModeEnum;
(function (VenueApiGetListNameMatchModeEnum) {
    VenueApiGetListNameMatchModeEnum["Auto"] = "Auto";
    VenueApiGetListNameMatchModeEnum["Partial"] = "Partial";
    VenueApiGetListNameMatchModeEnum["StartsWith"] = "StartsWith";
    VenueApiGetListNameMatchModeEnum["Exact"] = "Exact";
    VenueApiGetListNameMatchModeEnum["Words"] = "Words";
})(VenueApiGetListNameMatchModeEnum = exports.VenueApiGetListNameMatchModeEnum || (exports.VenueApiGetListNameMatchModeEnum = {}));
var VenueApiGetListSortRuleEnum;
(function (VenueApiGetListSortRuleEnum) {
    VenueApiGetListSortRuleEnum["None"] = "None";
    VenueApiGetListSortRuleEnum["Name"] = "Name";
    VenueApiGetListSortRuleEnum["Distance"] = "Distance";
})(VenueApiGetListSortRuleEnum = exports.VenueApiGetListSortRuleEnum || (exports.VenueApiGetListSortRuleEnum = {}));
var VenueApiGetListQueryParams = /** @class */ (function (_super) {
    __extends(VenueApiGetListQueryParams, _super);
    function VenueApiGetListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=distanceUnit" }),
        __metadata("design:type", String)
    ], VenueApiGetListQueryParams.prototype, "distanceUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VenueApiGetListQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=getTotalCount" }),
        __metadata("design:type", Boolean)
    ], VenueApiGetListQueryParams.prototype, "getTotalCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], VenueApiGetListQueryParams.prototype, "lang", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=latitude" }),
        __metadata("design:type", Number)
    ], VenueApiGetListQueryParams.prototype, "latitude", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=longitude" }),
        __metadata("design:type", Number)
    ], VenueApiGetListQueryParams.prototype, "longitude", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], VenueApiGetListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=nameMatchMode" }),
        __metadata("design:type", String)
    ], VenueApiGetListQueryParams.prototype, "nameMatchMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], VenueApiGetListQueryParams.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], VenueApiGetListQueryParams.prototype, "radius", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sortRule" }),
        __metadata("design:type", String)
    ], VenueApiGetListQueryParams.prototype, "sortRule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], VenueApiGetListQueryParams.prototype, "start", void 0);
    return VenueApiGetListQueryParams;
}(utils_1.SpeakeasyBase));
exports.VenueApiGetListQueryParams = VenueApiGetListQueryParams;
var VenueApiGetListRequest = /** @class */ (function (_super) {
    __extends(VenueApiGetListRequest, _super);
    function VenueApiGetListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", VenueApiGetListQueryParams)
    ], VenueApiGetListRequest.prototype, "queryParams", void 0);
    return VenueApiGetListRequest;
}(utils_1.SpeakeasyBase));
exports.VenueApiGetListRequest = VenueApiGetListRequest;
var VenueApiGetListResponse = /** @class */ (function (_super) {
    __extends(VenueApiGetListResponse, _super);
    function VenueApiGetListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], VenueApiGetListResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], VenueApiGetListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PartialFindResultVenueForApiContract)
    ], VenueApiGetListResponse.prototype, "partialFindResultVenueForApiContract", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], VenueApiGetListResponse.prototype, "statusCode", void 0);
    return VenueApiGetListResponse;
}(utils_1.SpeakeasyBase));
exports.VenueApiGetListResponse = VenueApiGetListResponse;
