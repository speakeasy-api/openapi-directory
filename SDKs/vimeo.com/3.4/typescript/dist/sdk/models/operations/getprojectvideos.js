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
exports.GetProjectVideosResponse = exports.GetProjectVideosRequest = exports.GetProjectVideosSecurity = exports.GetProjectVideosQueryParams = exports.GetProjectVideosSortEnum = exports.GetProjectVideosDirectionEnum = exports.GetProjectVideosPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetProjectVideosPathParams = /** @class */ (function (_super) {
    __extends(GetProjectVideosPathParams, _super);
    function GetProjectVideosPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", Number)
    ], GetProjectVideosPathParams.prototype, "projectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], GetProjectVideosPathParams.prototype, "userId", void 0);
    return GetProjectVideosPathParams;
}(utils_1.SpeakeasyBase));
exports.GetProjectVideosPathParams = GetProjectVideosPathParams;
var GetProjectVideosDirectionEnum;
(function (GetProjectVideosDirectionEnum) {
    GetProjectVideosDirectionEnum["Asc"] = "asc";
    GetProjectVideosDirectionEnum["Desc"] = "desc";
})(GetProjectVideosDirectionEnum = exports.GetProjectVideosDirectionEnum || (exports.GetProjectVideosDirectionEnum = {}));
var GetProjectVideosSortEnum;
(function (GetProjectVideosSortEnum) {
    GetProjectVideosSortEnum["Alphabetical"] = "alphabetical";
    GetProjectVideosSortEnum["Date"] = "date";
    GetProjectVideosSortEnum["Default"] = "default";
    GetProjectVideosSortEnum["Duration"] = "duration";
    GetProjectVideosSortEnum["LastUserActionEventDate"] = "last_user_action_event_date";
})(GetProjectVideosSortEnum = exports.GetProjectVideosSortEnum || (exports.GetProjectVideosSortEnum = {}));
var GetProjectVideosQueryParams = /** @class */ (function (_super) {
    __extends(GetProjectVideosQueryParams, _super);
    function GetProjectVideosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetProjectVideosQueryParams.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetProjectVideosQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetProjectVideosQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetProjectVideosQueryParams.prototype, "sort", void 0);
    return GetProjectVideosQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetProjectVideosQueryParams = GetProjectVideosQueryParams;
var GetProjectVideosSecurity = /** @class */ (function (_super) {
    __extends(GetProjectVideosSecurity, _super);
    function GetProjectVideosSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetProjectVideosSecurity.prototype, "oauth2", void 0);
    return GetProjectVideosSecurity;
}(utils_1.SpeakeasyBase));
exports.GetProjectVideosSecurity = GetProjectVideosSecurity;
var GetProjectVideosRequest = /** @class */ (function (_super) {
    __extends(GetProjectVideosRequest, _super);
    function GetProjectVideosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetProjectVideosPathParams)
    ], GetProjectVideosRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetProjectVideosQueryParams)
    ], GetProjectVideosRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetProjectVideosSecurity)
    ], GetProjectVideosRequest.prototype, "security", void 0);
    return GetProjectVideosRequest;
}(utils_1.SpeakeasyBase));
exports.GetProjectVideosRequest = GetProjectVideosRequest;
var GetProjectVideosResponse = /** @class */ (function (_super) {
    __extends(GetProjectVideosResponse, _super);
    function GetProjectVideosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetProjectVideosResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetProjectVideosResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], GetProjectVideosResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.Video }),
        __metadata("design:type", Array)
    ], GetProjectVideosResponse.prototype, "videos", void 0);
    return GetProjectVideosResponse;
}(utils_1.SpeakeasyBase));
exports.GetProjectVideosResponse = GetProjectVideosResponse;
