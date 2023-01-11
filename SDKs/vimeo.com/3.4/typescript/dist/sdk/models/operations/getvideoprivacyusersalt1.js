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
exports.GetVideoPrivacyUsersAlt1Response = exports.GetVideoPrivacyUsersAlt1Request = exports.GetVideoPrivacyUsersAlt1QueryParams = exports.GetVideoPrivacyUsersAlt1PathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetVideoPrivacyUsersAlt1PathParams = /** @class */ (function (_super) {
    __extends(GetVideoPrivacyUsersAlt1PathParams, _super);
    function GetVideoPrivacyUsersAlt1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=channel_id" }),
        __metadata("design:type", Number)
    ], GetVideoPrivacyUsersAlt1PathParams.prototype, "channelId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], GetVideoPrivacyUsersAlt1PathParams.prototype, "videoId", void 0);
    return GetVideoPrivacyUsersAlt1PathParams;
}(utils_1.SpeakeasyBase));
exports.GetVideoPrivacyUsersAlt1PathParams = GetVideoPrivacyUsersAlt1PathParams;
var GetVideoPrivacyUsersAlt1QueryParams = /** @class */ (function (_super) {
    __extends(GetVideoPrivacyUsersAlt1QueryParams, _super);
    function GetVideoPrivacyUsersAlt1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetVideoPrivacyUsersAlt1QueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetVideoPrivacyUsersAlt1QueryParams.prototype, "perPage", void 0);
    return GetVideoPrivacyUsersAlt1QueryParams;
}(utils_1.SpeakeasyBase));
exports.GetVideoPrivacyUsersAlt1QueryParams = GetVideoPrivacyUsersAlt1QueryParams;
var GetVideoPrivacyUsersAlt1Request = /** @class */ (function (_super) {
    __extends(GetVideoPrivacyUsersAlt1Request, _super);
    function GetVideoPrivacyUsersAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetVideoPrivacyUsersAlt1PathParams)
    ], GetVideoPrivacyUsersAlt1Request.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetVideoPrivacyUsersAlt1QueryParams)
    ], GetVideoPrivacyUsersAlt1Request.prototype, "queryParams", void 0);
    return GetVideoPrivacyUsersAlt1Request;
}(utils_1.SpeakeasyBase));
exports.GetVideoPrivacyUsersAlt1Request = GetVideoPrivacyUsersAlt1Request;
var GetVideoPrivacyUsersAlt1Response = /** @class */ (function (_super) {
    __extends(GetVideoPrivacyUsersAlt1Response, _super);
    function GetVideoPrivacyUsersAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetVideoPrivacyUsersAlt1Response.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetVideoPrivacyUsersAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.LegacyError)
    ], GetVideoPrivacyUsersAlt1Response.prototype, "legacyError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.User }),
        __metadata("design:type", Array)
    ], GetVideoPrivacyUsersAlt1Response.prototype, "users", void 0);
    return GetVideoPrivacyUsersAlt1Response;
}(utils_1.SpeakeasyBase));
exports.GetVideoPrivacyUsersAlt1Response = GetVideoPrivacyUsersAlt1Response;
