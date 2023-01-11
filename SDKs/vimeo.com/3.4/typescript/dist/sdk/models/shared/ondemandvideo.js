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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnDemandVideo = exports.OnDemandVideoTypeEnum = exports.OnDemandVideoRent = exports.OnDemandVideoMetadata = exports.OnDemandVideoMetadataInteractions = exports.OnDemandVideoMetadataInteractionsWatchlater = exports.OnDemandVideoMetadataInteractionsLikes = exports.OnDemandVideoMetadataConnections = exports.OnDemandVideoMetadataConnectionsSeason = exports.OnDemandVideoInteractions = exports.OnDemandVideoInteractionsPage = exports.OnDemandVideoBuy = void 0;
var utils_1 = require("../../../internal/utils");
var picture_1 = require("./picture");
var user_1 = require("./user");
// OnDemandVideoBuy
/**
 * Information about purchasing this video.
**/
var OnDemandVideoBuy = /** @class */ (function (_super) {
    __extends(OnDemandVideoBuy, _super);
    function OnDemandVideoBuy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], OnDemandVideoBuy.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", Object)
    ], OnDemandVideoBuy.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchased" }),
        __metadata("design:type", Boolean)
    ], OnDemandVideoBuy.prototype, "purchased", void 0);
    return OnDemandVideoBuy;
}(utils_1.SpeakeasyBase));
exports.OnDemandVideoBuy = OnDemandVideoBuy;
// OnDemandVideoInteractionsPage
/**
 * Information about how the authenticated user can interact with the connection to the video's On Demand page.
**/
var OnDemandVideoInteractionsPage = /** @class */ (function (_super) {
    __extends(OnDemandVideoInteractionsPage, _super);
    function OnDemandVideoInteractionsPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], OnDemandVideoInteractionsPage.prototype, "added", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandVideoInteractionsPage.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandVideoInteractionsPage.prototype, "uri", void 0);
    return OnDemandVideoInteractionsPage;
}(utils_1.SpeakeasyBase));
exports.OnDemandVideoInteractionsPage = OnDemandVideoInteractionsPage;
// OnDemandVideoInteractions
/**
 * An object containing information about how the authenticated user can interact with this On Demand page.
**/
var OnDemandVideoInteractions = /** @class */ (function (_super) {
    __extends(OnDemandVideoInteractions, _super);
    function OnDemandVideoInteractions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", OnDemandVideoInteractionsPage)
    ], OnDemandVideoInteractions.prototype, "page", void 0);
    return OnDemandVideoInteractions;
}(utils_1.SpeakeasyBase));
exports.OnDemandVideoInteractions = OnDemandVideoInteractions;
// OnDemandVideoMetadataConnectionsSeason
/**
 * Information about this season.
**/
var OnDemandVideoMetadataConnectionsSeason = /** @class */ (function (_super) {
    __extends(OnDemandVideoMetadataConnectionsSeason, _super);
    function OnDemandVideoMetadataConnectionsSeason() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OnDemandVideoMetadataConnectionsSeason.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandVideoMetadataConnectionsSeason.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandVideoMetadataConnectionsSeason.prototype, "uri", void 0);
    return OnDemandVideoMetadataConnectionsSeason;
}(utils_1.SpeakeasyBase));
exports.OnDemandVideoMetadataConnectionsSeason = OnDemandVideoMetadataConnectionsSeason;
var OnDemandVideoMetadataConnections = /** @class */ (function (_super) {
    __extends(OnDemandVideoMetadataConnections, _super);
    function OnDemandVideoMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=season" }),
        __metadata("design:type", OnDemandVideoMetadataConnectionsSeason)
    ], OnDemandVideoMetadataConnections.prototype, "season", void 0);
    return OnDemandVideoMetadataConnections;
}(utils_1.SpeakeasyBase));
exports.OnDemandVideoMetadataConnections = OnDemandVideoMetadataConnections;
// OnDemandVideoMetadataInteractionsLikes
/**
 * Information about the user's Like interactions with this video.
**/
var OnDemandVideoMetadataInteractionsLikes = /** @class */ (function (_super) {
    __extends(OnDemandVideoMetadataInteractionsLikes, _super);
    function OnDemandVideoMetadataInteractionsLikes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], OnDemandVideoMetadataInteractionsLikes.prototype, "added", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=added_time" }),
        __metadata("design:type", String)
    ], OnDemandVideoMetadataInteractionsLikes.prototype, "addedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandVideoMetadataInteractionsLikes.prototype, "uri", void 0);
    return OnDemandVideoMetadataInteractionsLikes;
}(utils_1.SpeakeasyBase));
exports.OnDemandVideoMetadataInteractionsLikes = OnDemandVideoMetadataInteractionsLikes;
// OnDemandVideoMetadataInteractionsWatchlater
/**
 * Information about the user's Watch Later interactions with this video.
**/
var OnDemandVideoMetadataInteractionsWatchlater = /** @class */ (function (_super) {
    __extends(OnDemandVideoMetadataInteractionsWatchlater, _super);
    function OnDemandVideoMetadataInteractionsWatchlater() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], OnDemandVideoMetadataInteractionsWatchlater.prototype, "added", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=added_time" }),
        __metadata("design:type", String)
    ], OnDemandVideoMetadataInteractionsWatchlater.prototype, "addedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandVideoMetadataInteractionsWatchlater.prototype, "uri", void 0);
    return OnDemandVideoMetadataInteractionsWatchlater;
}(utils_1.SpeakeasyBase));
exports.OnDemandVideoMetadataInteractionsWatchlater = OnDemandVideoMetadataInteractionsWatchlater;
var OnDemandVideoMetadataInteractions = /** @class */ (function (_super) {
    __extends(OnDemandVideoMetadataInteractions, _super);
    function OnDemandVideoMetadataInteractions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=likes" }),
        __metadata("design:type", OnDemandVideoMetadataInteractionsLikes)
    ], OnDemandVideoMetadataInteractions.prototype, "likes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=watchlater" }),
        __metadata("design:type", OnDemandVideoMetadataInteractionsWatchlater)
    ], OnDemandVideoMetadataInteractions.prototype, "watchlater", void 0);
    return OnDemandVideoMetadataInteractions;
}(utils_1.SpeakeasyBase));
exports.OnDemandVideoMetadataInteractions = OnDemandVideoMetadataInteractions;
// OnDemandVideoMetadata
/**
 * Metadata information about this video.
**/
var OnDemandVideoMetadata = /** @class */ (function (_super) {
    __extends(OnDemandVideoMetadata, _super);
    function OnDemandVideoMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connections" }),
        __metadata("design:type", OnDemandVideoMetadataConnections)
    ], OnDemandVideoMetadata.prototype, "connections", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interactions" }),
        __metadata("design:type", OnDemandVideoMetadataInteractions)
    ], OnDemandVideoMetadata.prototype, "interactions", void 0);
    return OnDemandVideoMetadata;
}(utils_1.SpeakeasyBase));
exports.OnDemandVideoMetadata = OnDemandVideoMetadata;
// OnDemandVideoRent
/**
 * Information about renting this video.
**/
var OnDemandVideoRent = /** @class */ (function (_super) {
    __extends(OnDemandVideoRent, _super);
    function OnDemandVideoRent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], OnDemandVideoRent.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", Object)
    ], OnDemandVideoRent.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchased" }),
        __metadata("design:type", Boolean)
    ], OnDemandVideoRent.prototype, "purchased", void 0);
    return OnDemandVideoRent;
}(utils_1.SpeakeasyBase));
exports.OnDemandVideoRent = OnDemandVideoRent;
var OnDemandVideoTypeEnum;
(function (OnDemandVideoTypeEnum) {
    OnDemandVideoTypeEnum["Extra"] = "extra";
    OnDemandVideoTypeEnum["Main"] = "main";
    OnDemandVideoTypeEnum["Trailer"] = "trailer";
})(OnDemandVideoTypeEnum = exports.OnDemandVideoTypeEnum || (exports.OnDemandVideoTypeEnum = {}));
var OnDemandVideo = /** @class */ (function (_super) {
    __extends(OnDemandVideo, _super);
    function OnDemandVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=buy" }),
        __metadata("design:type", OnDemandVideoBuy)
    ], OnDemandVideo.prototype, "buy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], OnDemandVideo.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], OnDemandVideo.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=episode" }),
        __metadata("design:type", Number)
    ], OnDemandVideo.prototype, "episode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interactions" }),
        __metadata("design:type", OnDemandVideoInteractions)
    ], OnDemandVideo.prototype, "interactions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], OnDemandVideo.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", OnDemandVideoMetadata)
    ], OnDemandVideo.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OnDemandVideo.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandVideo.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pictures" }),
        __metadata("design:type", picture_1.Picture)
    ], OnDemandVideo.prototype, "pictures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=play_progress" }),
        __metadata("design:type", Number)
    ], OnDemandVideo.prototype, "playProgress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=position" }),
        __metadata("design:type", Number)
    ], OnDemandVideo.prototype, "position", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=release_date" }),
        __metadata("design:type", String)
    ], OnDemandVideo.prototype, "releaseDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=release_year" }),
        __metadata("design:type", Number)
    ], OnDemandVideo.prototype, "releaseYear", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rent" }),
        __metadata("design:type", OnDemandVideoRent)
    ], OnDemandVideo.prototype, "rent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], OnDemandVideo.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandVideo.prototype, "uri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", user_1.User)
    ], OnDemandVideo.prototype, "user", void 0);
    return OnDemandVideo;
}(utils_1.SpeakeasyBase));
exports.OnDemandVideo = OnDemandVideo;
