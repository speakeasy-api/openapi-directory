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
exports.CreateAlbumAlt1Response = exports.CreateAlbumAlt1Request = exports.CreateAlbumAlt1Security = exports.CreateAlbumAlt1RequestBody = exports.CreateAlbumAlt1RequestBodyThemeEnum = exports.CreateAlbumAlt1RequestBodySortEnum = exports.CreateAlbumAlt1RequestBodyPrivacyEnum = exports.CreateAlbumAlt1RequestBodyLayoutEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateAlbumAlt1RequestBodyLayoutEnum;
(function (CreateAlbumAlt1RequestBodyLayoutEnum) {
    CreateAlbumAlt1RequestBodyLayoutEnum["Grid"] = "grid";
    CreateAlbumAlt1RequestBodyLayoutEnum["Player"] = "player";
})(CreateAlbumAlt1RequestBodyLayoutEnum = exports.CreateAlbumAlt1RequestBodyLayoutEnum || (exports.CreateAlbumAlt1RequestBodyLayoutEnum = {}));
var CreateAlbumAlt1RequestBodyPrivacyEnum;
(function (CreateAlbumAlt1RequestBodyPrivacyEnum) {
    CreateAlbumAlt1RequestBodyPrivacyEnum["Anybody"] = "anybody";
    CreateAlbumAlt1RequestBodyPrivacyEnum["EmbedOnly"] = "embed_only";
    CreateAlbumAlt1RequestBodyPrivacyEnum["Password"] = "password";
})(CreateAlbumAlt1RequestBodyPrivacyEnum = exports.CreateAlbumAlt1RequestBodyPrivacyEnum || (exports.CreateAlbumAlt1RequestBodyPrivacyEnum = {}));
var CreateAlbumAlt1RequestBodySortEnum;
(function (CreateAlbumAlt1RequestBodySortEnum) {
    CreateAlbumAlt1RequestBodySortEnum["AddedFirst"] = "added_first";
    CreateAlbumAlt1RequestBodySortEnum["AddedLast"] = "added_last";
    CreateAlbumAlt1RequestBodySortEnum["Alphabetical"] = "alphabetical";
    CreateAlbumAlt1RequestBodySortEnum["Arranged"] = "arranged";
    CreateAlbumAlt1RequestBodySortEnum["Comments"] = "comments";
    CreateAlbumAlt1RequestBodySortEnum["Likes"] = "likes";
    CreateAlbumAlt1RequestBodySortEnum["Newest"] = "newest";
    CreateAlbumAlt1RequestBodySortEnum["Oldest"] = "oldest";
    CreateAlbumAlt1RequestBodySortEnum["Plays"] = "plays";
})(CreateAlbumAlt1RequestBodySortEnum = exports.CreateAlbumAlt1RequestBodySortEnum || (exports.CreateAlbumAlt1RequestBodySortEnum = {}));
var CreateAlbumAlt1RequestBodyThemeEnum;
(function (CreateAlbumAlt1RequestBodyThemeEnum) {
    CreateAlbumAlt1RequestBodyThemeEnum["Dark"] = "dark";
    CreateAlbumAlt1RequestBodyThemeEnum["Standard"] = "standard";
})(CreateAlbumAlt1RequestBodyThemeEnum = exports.CreateAlbumAlt1RequestBodyThemeEnum || (exports.CreateAlbumAlt1RequestBodyThemeEnum = {}));
var CreateAlbumAlt1RequestBody = /** @class */ (function (_super) {
    __extends(CreateAlbumAlt1RequestBody, _super);
    function CreateAlbumAlt1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=brand_color" }),
        __metadata("design:type", String)
    ], CreateAlbumAlt1RequestBody.prototype, "brandColor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateAlbumAlt1RequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hide_nav" }),
        __metadata("design:type", Boolean)
    ], CreateAlbumAlt1RequestBody.prototype, "hideNav", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=layout" }),
        __metadata("design:type", String)
    ], CreateAlbumAlt1RequestBody.prototype, "layout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateAlbumAlt1RequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], CreateAlbumAlt1RequestBody.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privacy" }),
        __metadata("design:type", String)
    ], CreateAlbumAlt1RequestBody.prototype, "privacy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=review_mode" }),
        __metadata("design:type", Boolean)
    ], CreateAlbumAlt1RequestBody.prototype, "reviewMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sort" }),
        __metadata("design:type", String)
    ], CreateAlbumAlt1RequestBody.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=theme" }),
        __metadata("design:type", String)
    ], CreateAlbumAlt1RequestBody.prototype, "theme", void 0);
    return CreateAlbumAlt1RequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateAlbumAlt1RequestBody = CreateAlbumAlt1RequestBody;
var CreateAlbumAlt1Security = /** @class */ (function (_super) {
    __extends(CreateAlbumAlt1Security, _super);
    function CreateAlbumAlt1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CreateAlbumAlt1Security.prototype, "oauth2", void 0);
    return CreateAlbumAlt1Security;
}(utils_1.SpeakeasyBase));
exports.CreateAlbumAlt1Security = CreateAlbumAlt1Security;
var CreateAlbumAlt1Request = /** @class */ (function (_super) {
    __extends(CreateAlbumAlt1Request, _super);
    function CreateAlbumAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/vnd.vimeo.album+json" }),
        __metadata("design:type", CreateAlbumAlt1RequestBody)
    ], CreateAlbumAlt1Request.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateAlbumAlt1Security)
    ], CreateAlbumAlt1Request.prototype, "security", void 0);
    return CreateAlbumAlt1Request;
}(utils_1.SpeakeasyBase));
exports.CreateAlbumAlt1Request = CreateAlbumAlt1Request;
var CreateAlbumAlt1Response = /** @class */ (function (_super) {
    __extends(CreateAlbumAlt1Response, _super);
    function CreateAlbumAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateAlbumAlt1Response.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateAlbumAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Album)
    ], CreateAlbumAlt1Response.prototype, "album", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.LegacyError)
    ], CreateAlbumAlt1Response.prototype, "legacyError", void 0);
    return CreateAlbumAlt1Response;
}(utils_1.SpeakeasyBase));
exports.CreateAlbumAlt1Response = CreateAlbumAlt1Response;
