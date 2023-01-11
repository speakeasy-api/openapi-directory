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
exports.GetProjectsAlt1Response = exports.GetProjectsAlt1Request = exports.GetProjectsAlt1Security = exports.GetProjectsAlt1QueryParams = exports.GetProjectsAlt1SortEnum = exports.GetProjectsAlt1DirectionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetProjectsAlt1DirectionEnum;
(function (GetProjectsAlt1DirectionEnum) {
    GetProjectsAlt1DirectionEnum["Asc"] = "asc";
    GetProjectsAlt1DirectionEnum["Desc"] = "desc";
})(GetProjectsAlt1DirectionEnum = exports.GetProjectsAlt1DirectionEnum || (exports.GetProjectsAlt1DirectionEnum = {}));
var GetProjectsAlt1SortEnum;
(function (GetProjectsAlt1SortEnum) {
    GetProjectsAlt1SortEnum["Date"] = "date";
    GetProjectsAlt1SortEnum["Default"] = "default";
    GetProjectsAlt1SortEnum["ModifiedTime"] = "modified_time";
    GetProjectsAlt1SortEnum["Name"] = "name";
})(GetProjectsAlt1SortEnum = exports.GetProjectsAlt1SortEnum || (exports.GetProjectsAlt1SortEnum = {}));
var GetProjectsAlt1QueryParams = /** @class */ (function (_super) {
    __extends(GetProjectsAlt1QueryParams, _super);
    function GetProjectsAlt1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetProjectsAlt1QueryParams.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetProjectsAlt1QueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetProjectsAlt1QueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetProjectsAlt1QueryParams.prototype, "sort", void 0);
    return GetProjectsAlt1QueryParams;
}(utils_1.SpeakeasyBase));
exports.GetProjectsAlt1QueryParams = GetProjectsAlt1QueryParams;
var GetProjectsAlt1Security = /** @class */ (function (_super) {
    __extends(GetProjectsAlt1Security, _super);
    function GetProjectsAlt1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetProjectsAlt1Security.prototype, "oauth2", void 0);
    return GetProjectsAlt1Security;
}(utils_1.SpeakeasyBase));
exports.GetProjectsAlt1Security = GetProjectsAlt1Security;
var GetProjectsAlt1Request = /** @class */ (function (_super) {
    __extends(GetProjectsAlt1Request, _super);
    function GetProjectsAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetProjectsAlt1QueryParams)
    ], GetProjectsAlt1Request.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetProjectsAlt1Security)
    ], GetProjectsAlt1Request.prototype, "security", void 0);
    return GetProjectsAlt1Request;
}(utils_1.SpeakeasyBase));
exports.GetProjectsAlt1Request = GetProjectsAlt1Request;
var GetProjectsAlt1Response = /** @class */ (function (_super) {
    __extends(GetProjectsAlt1Response, _super);
    function GetProjectsAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetProjectsAlt1Response.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetProjectsAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], GetProjectsAlt1Response.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.Project }),
        __metadata("design:type", Array)
    ], GetProjectsAlt1Response.prototype, "projects", void 0);
    return GetProjectsAlt1Response;
}(utils_1.SpeakeasyBase));
exports.GetProjectsAlt1Response = GetProjectsAlt1Response;
