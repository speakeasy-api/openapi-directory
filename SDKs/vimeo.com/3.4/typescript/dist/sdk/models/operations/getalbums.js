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
exports.GetAlbumsResponse = exports.GetAlbumsRequest = exports.GetAlbumsQueryParams = exports.GetAlbumsSortEnum = exports.GetAlbumsDirectionEnum = exports.GetAlbumsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetAlbumsPathParams = /** @class */ (function (_super) {
    __extends(GetAlbumsPathParams, _super);
    function GetAlbumsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], GetAlbumsPathParams.prototype, "userId", void 0);
    return GetAlbumsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetAlbumsPathParams = GetAlbumsPathParams;
var GetAlbumsDirectionEnum;
(function (GetAlbumsDirectionEnum) {
    GetAlbumsDirectionEnum["Asc"] = "asc";
    GetAlbumsDirectionEnum["Desc"] = "desc";
})(GetAlbumsDirectionEnum = exports.GetAlbumsDirectionEnum || (exports.GetAlbumsDirectionEnum = {}));
var GetAlbumsSortEnum;
(function (GetAlbumsSortEnum) {
    GetAlbumsSortEnum["Alphabetical"] = "alphabetical";
    GetAlbumsSortEnum["Date"] = "date";
    GetAlbumsSortEnum["Duration"] = "duration";
    GetAlbumsSortEnum["Videos"] = "videos";
})(GetAlbumsSortEnum = exports.GetAlbumsSortEnum || (exports.GetAlbumsSortEnum = {}));
var GetAlbumsQueryParams = /** @class */ (function (_super) {
    __extends(GetAlbumsQueryParams, _super);
    function GetAlbumsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetAlbumsQueryParams.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetAlbumsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetAlbumsQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetAlbumsQueryParams.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetAlbumsQueryParams.prototype, "sort", void 0);
    return GetAlbumsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetAlbumsQueryParams = GetAlbumsQueryParams;
var GetAlbumsRequest = /** @class */ (function (_super) {
    __extends(GetAlbumsRequest, _super);
    function GetAlbumsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAlbumsPathParams)
    ], GetAlbumsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAlbumsQueryParams)
    ], GetAlbumsRequest.prototype, "queryParams", void 0);
    return GetAlbumsRequest;
}(utils_1.SpeakeasyBase));
exports.GetAlbumsRequest = GetAlbumsRequest;
var GetAlbumsResponse = /** @class */ (function (_super) {
    __extends(GetAlbumsResponse, _super);
    function GetAlbumsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAlbumsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAlbumsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.Album }),
        __metadata("design:type", Array)
    ], GetAlbumsResponse.prototype, "albums", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.LegacyError)
    ], GetAlbumsResponse.prototype, "legacyError", void 0);
    return GetAlbumsResponse;
}(utils_1.SpeakeasyBase));
exports.GetAlbumsResponse = GetAlbumsResponse;
