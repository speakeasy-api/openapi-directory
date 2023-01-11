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
exports.GetUserGroupsAlt1Response = exports.GetUserGroupsAlt1Request = exports.GetUserGroupsAlt1QueryParams = exports.GetUserGroupsAlt1SortEnum = exports.GetUserGroupsAlt1FilterEnum = exports.GetUserGroupsAlt1DirectionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetUserGroupsAlt1DirectionEnum;
(function (GetUserGroupsAlt1DirectionEnum) {
    GetUserGroupsAlt1DirectionEnum["Asc"] = "asc";
    GetUserGroupsAlt1DirectionEnum["Desc"] = "desc";
})(GetUserGroupsAlt1DirectionEnum = exports.GetUserGroupsAlt1DirectionEnum || (exports.GetUserGroupsAlt1DirectionEnum = {}));
var GetUserGroupsAlt1FilterEnum;
(function (GetUserGroupsAlt1FilterEnum) {
    GetUserGroupsAlt1FilterEnum["Moderated"] = "moderated";
})(GetUserGroupsAlt1FilterEnum = exports.GetUserGroupsAlt1FilterEnum || (exports.GetUserGroupsAlt1FilterEnum = {}));
var GetUserGroupsAlt1SortEnum;
(function (GetUserGroupsAlt1SortEnum) {
    GetUserGroupsAlt1SortEnum["Alphabetical"] = "alphabetical";
    GetUserGroupsAlt1SortEnum["Date"] = "date";
    GetUserGroupsAlt1SortEnum["Members"] = "members";
    GetUserGroupsAlt1SortEnum["Videos"] = "videos";
})(GetUserGroupsAlt1SortEnum = exports.GetUserGroupsAlt1SortEnum || (exports.GetUserGroupsAlt1SortEnum = {}));
var GetUserGroupsAlt1QueryParams = /** @class */ (function (_super) {
    __extends(GetUserGroupsAlt1QueryParams, _super);
    function GetUserGroupsAlt1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetUserGroupsAlt1QueryParams.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUserGroupsAlt1QueryParams.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUserGroupsAlt1QueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetUserGroupsAlt1QueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetUserGroupsAlt1QueryParams.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetUserGroupsAlt1QueryParams.prototype, "sort", void 0);
    return GetUserGroupsAlt1QueryParams;
}(utils_1.SpeakeasyBase));
exports.GetUserGroupsAlt1QueryParams = GetUserGroupsAlt1QueryParams;
var GetUserGroupsAlt1Request = /** @class */ (function (_super) {
    __extends(GetUserGroupsAlt1Request, _super);
    function GetUserGroupsAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUserGroupsAlt1QueryParams)
    ], GetUserGroupsAlt1Request.prototype, "queryParams", void 0);
    return GetUserGroupsAlt1Request;
}(utils_1.SpeakeasyBase));
exports.GetUserGroupsAlt1Request = GetUserGroupsAlt1Request;
var GetUserGroupsAlt1Response = /** @class */ (function (_super) {
    __extends(GetUserGroupsAlt1Response, _super);
    function GetUserGroupsAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUserGroupsAlt1Response.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUserGroupsAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.Group }),
        __metadata("design:type", Array)
    ], GetUserGroupsAlt1Response.prototype, "groups", void 0);
    return GetUserGroupsAlt1Response;
}(utils_1.SpeakeasyBase));
exports.GetUserGroupsAlt1Response = GetUserGroupsAlt1Response;
