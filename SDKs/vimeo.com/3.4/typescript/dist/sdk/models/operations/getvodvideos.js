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
exports.GetVodVideosResponse = exports.GetVodVideosRequest = exports.GetVodVideosQueryParams = exports.GetVodVideosSortEnum = exports.GetVodVideosFilterEnum = exports.GetVodVideosDirectionEnum = exports.GetVodVideosPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetVodVideosPathParams = /** @class */ (function (_super) {
    __extends(GetVodVideosPathParams, _super);
    function GetVodVideosPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ondemand_id" }),
        __metadata("design:type", Number)
    ], GetVodVideosPathParams.prototype, "ondemandId", void 0);
    return GetVodVideosPathParams;
}(utils_1.SpeakeasyBase));
exports.GetVodVideosPathParams = GetVodVideosPathParams;
var GetVodVideosDirectionEnum;
(function (GetVodVideosDirectionEnum) {
    GetVodVideosDirectionEnum["Asc"] = "asc";
    GetVodVideosDirectionEnum["Desc"] = "desc";
})(GetVodVideosDirectionEnum = exports.GetVodVideosDirectionEnum || (exports.GetVodVideosDirectionEnum = {}));
var GetVodVideosFilterEnum;
(function (GetVodVideosFilterEnum) {
    GetVodVideosFilterEnum["All"] = "all";
    GetVodVideosFilterEnum["Buy"] = "buy";
    GetVodVideosFilterEnum["ExpiringSoon"] = "expiring_soon";
    GetVodVideosFilterEnum["Extra"] = "extra";
    GetVodVideosFilterEnum["Main"] = "main";
    GetVodVideosFilterEnum["MainViewable"] = "main.viewable";
    GetVodVideosFilterEnum["Rent"] = "rent";
    GetVodVideosFilterEnum["Trailer"] = "trailer";
    GetVodVideosFilterEnum["Unwatched"] = "unwatched";
    GetVodVideosFilterEnum["Viewable"] = "viewable";
    GetVodVideosFilterEnum["Watched"] = "watched";
})(GetVodVideosFilterEnum = exports.GetVodVideosFilterEnum || (exports.GetVodVideosFilterEnum = {}));
var GetVodVideosSortEnum;
(function (GetVodVideosSortEnum) {
    GetVodVideosSortEnum["Date"] = "date";
    GetVodVideosSortEnum["Default"] = "default";
    GetVodVideosSortEnum["Episode"] = "episode";
    GetVodVideosSortEnum["Manual"] = "manual";
    GetVodVideosSortEnum["Name"] = "name";
    GetVodVideosSortEnum["PurchaseTime"] = "purchase_time";
    GetVodVideosSortEnum["ReleaseDate"] = "release_date";
})(GetVodVideosSortEnum = exports.GetVodVideosSortEnum || (exports.GetVodVideosSortEnum = {}));
var GetVodVideosQueryParams = /** @class */ (function (_super) {
    __extends(GetVodVideosQueryParams, _super);
    function GetVodVideosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetVodVideosQueryParams.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetVodVideosQueryParams.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetVodVideosQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetVodVideosQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetVodVideosQueryParams.prototype, "sort", void 0);
    return GetVodVideosQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetVodVideosQueryParams = GetVodVideosQueryParams;
var GetVodVideosRequest = /** @class */ (function (_super) {
    __extends(GetVodVideosRequest, _super);
    function GetVodVideosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetVodVideosPathParams)
    ], GetVodVideosRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetVodVideosQueryParams)
    ], GetVodVideosRequest.prototype, "queryParams", void 0);
    return GetVodVideosRequest;
}(utils_1.SpeakeasyBase));
exports.GetVodVideosRequest = GetVodVideosRequest;
var GetVodVideosResponse = /** @class */ (function (_super) {
    __extends(GetVodVideosResponse, _super);
    function GetVodVideosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetVodVideosResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetVodVideosResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.Video }),
        __metadata("design:type", Array)
    ], GetVodVideosResponse.prototype, "videos", void 0);
    return GetVodVideosResponse;
}(utils_1.SpeakeasyBase));
exports.GetVodVideosResponse = GetVodVideosResponse;
