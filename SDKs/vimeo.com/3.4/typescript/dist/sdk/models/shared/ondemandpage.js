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
exports.OnDemandPageVideoMetadataInteractions = exports.OnDemandPageVideoMetadataInteractionsWatchlater = exports.OnDemandPageVideoMetadataInteractionsWatched = exports.OnDemandPageVideoMetadataInteractionsSubscribe = exports.OnDemandPageVideoMetadataInteractionsReport = exports.OnDemandPageVideoMetadataInteractionsRent = exports.OnDemandPageVideoMetadataInteractionsRentStreamEnum = exports.OnDemandPageVideoMetadataInteractionsLike = exports.OnDemandPageVideoMetadataInteractionsChannel = exports.OnDemandPageVideoMetadataInteractionsBuy = exports.OnDemandPageVideoMetadataInteractionsBuyStreamEnum = exports.OnDemandPageVideoMetadataInteractionsBuyDownloadEnum = exports.OnDemandPageVideoMetadataConnections = exports.OnDemandPageVideoMetadataConnectionsVersions = exports.OnDemandPageVideoMetadataConnectionsUsersWithAccess = exports.OnDemandPageVideoMetadataConnectionsTrailer = exports.OnDemandPageVideoMetadataConnectionsTexttracks = exports.OnDemandPageVideoMetadataConnectionsSeason = exports.OnDemandPageVideoMetadataConnectionsRelated = exports.OnDemandPageVideoMetadataConnectionsRecommendations = exports.OnDemandPageVideoMetadataConnectionsPlayback = exports.OnDemandPageVideoMetadataConnectionsPictures = exports.OnDemandPageVideoMetadataConnectionsOndemand = exports.OnDemandPageVideoMetadataConnectionsLikes = exports.OnDemandPageVideoMetadataConnectionsCredits = exports.OnDemandPageVideoMetadataConnectionsComments = exports.OnDemandPageVideoLicenseEnum = exports.OnDemandPageVideoContext = exports.OnDemandPageVideoContextActionEnum = exports.OnDemandPageSubscription = exports.OnDemandPagePublished = exports.OnDemandPagePreorder = exports.OnDemandPageMetadata = exports.OnDemandPageMetadataConnections = exports.OnDemandPageMetadataConnectionsMetadata = exports.OnDemandPageMetadataConnectionsMetadataConnections = exports.OnDemandPageMetadataConnectionsMetadataConnectionsVideos = exports.OnDemandPageMetadataConnectionsMetadataConnectionsSeasons = exports.OnDemandPageMetadataConnectionsMetadataConnectionsPictures = exports.OnDemandPageMetadataConnectionsMetadataConnectionsLikes = exports.OnDemandPageMetadataConnectionsMetadataConnectionsGenres = exports.OnDemandPageMetadataConnectionsMetadataConnectionsComments = exports.OnDemandPageEpisodes = exports.OnDemandPageEpisodesRent = exports.OnDemandPageEpisodesRentPeriodEnum = exports.OnDemandPageEpisodesBuy = exports.OnDemandPageColors = exports.OnDemandPagePicture = exports.OnDemandPagePictureTypeEnum = exports.OnDemandPagePictureSizes = void 0;
exports.OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum = exports.OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum = exports.OnDemandPageVideoUserMetadata = exports.OnDemandPageVideoUserMetadataInteractions = exports.OnDemandPageVideoUserMetadataInteractionsReport = exports.OnDemandPageVideoUserMetadataInteractionsFollow = exports.OnDemandPageVideoUserMetadataInteractionsBlock = exports.OnDemandPageVideoUserMetadataInteractionsAddPrivacyUser = exports.OnDemandPageVideoUserMetadataConnections = exports.OnDemandPageVideoUserMetadataConnectionsWatchlater = exports.OnDemandPageVideoUserMetadataConnectionsWatchedVideos = exports.OnDemandPageVideoUserMetadataConnectionsVideos = exports.OnDemandPageVideoUserMetadataConnectionsShared = exports.OnDemandPageVideoUserMetadataConnectionsRecommendedUsers = exports.OnDemandPageVideoUserMetadataConnectionsRecommendedChannels = exports.OnDemandPageVideoUserMetadataConnectionsPortfolios = exports.OnDemandPageVideoUserMetadataConnectionsPictures = exports.OnDemandPageVideoUserMetadataConnectionsModeratedChannels = exports.OnDemandPageVideoUserMetadataConnectionsLikes = exports.OnDemandPageVideoUserMetadataConnectionsGroups = exports.OnDemandPageVideoUserMetadataConnectionsFollowing = exports.OnDemandPageVideoUserMetadataConnectionsFollowers = exports.OnDemandPageVideoUserMetadataConnectionsFolders = exports.OnDemandPageVideoUserMetadataConnectionsFeed = exports.OnDemandPageVideoUserMetadataConnectionsChannels = exports.OnDemandPageVideoUserMetadataConnectionsCategories = exports.OnDemandPageVideoUserMetadataConnectionsBlock = exports.OnDemandPageVideoUserMetadataConnectionsAppearances = exports.OnDemandPageVideoUserMetadataConnectionsAlbums = exports.OnDemandPageVideoUserAccountEnum = exports.OnDemandPageVideoUpload = exports.OnDemandPageVideoUploadStatusEnum = exports.OnDemandPageVideoUploadApproachEnum = exports.OnDemandPageVideoTranscode = exports.OnDemandPageVideoTranscodeStatusEnum = exports.OnDemandPageVideoStatusEnum = exports.OnDemandPageVideoStats = exports.OnDemandPageVideoSpatial = exports.OnDemandPageVideoSpatialStereoFormatEnum = exports.OnDemandPageVideoSpatialProjectionEnum = exports.OnDemandPageVideoSpatialDirectorTimeline = exports.OnDemandPageVideoPrivacy = exports.OnDemandPageVideoPrivacyViewEnum = exports.OnDemandPageVideoPrivacyEmbedEnum = exports.OnDemandPageVideoPrivacyCommentsEnum = exports.OnDemandPageVideoProject = exports.OnDemandPageVideoProjectMetadata = exports.OnDemandPageVideoProjectMetadataConnections = exports.OnDemandPageVideoProjectMetadataConnectionsVideos = exports.OnDemandPageVideoMetadata = void 0;
exports.OnDemandPageUserUploadQuotaSpaceShowingEnum = exports.OnDemandPageUserUploadQuotaPeriodic = exports.OnDemandPageUserUploadQuotaLifetime = exports.OnDemandPageUserPreferences = exports.OnDemandPageUserPreferencesVideos = exports.OnDemandPageUserPreferencesVideosPrivacy = exports.OnDemandPageUserPreferencesVideosPrivacyViewEnum = exports.OnDemandPageUserPreferencesVideosPrivacyEmbedEnum = exports.OnDemandPageUserPreferencesVideosPrivacyCommentsEnum = exports.OnDemandPageUserMetadata = exports.OnDemandPageUserMetadataInteractions = exports.OnDemandPageUserMetadataInteractionsReport = exports.OnDemandPageUserMetadataInteractionsFollow = exports.OnDemandPageUserMetadataInteractionsBlock = exports.OnDemandPageUserMetadataInteractionsAddPrivacyUser = exports.OnDemandPageUserMetadataConnections = exports.OnDemandPageUserMetadataConnectionsWatchlater = exports.OnDemandPageUserMetadataConnectionsWatchedVideos = exports.OnDemandPageUserMetadataConnectionsVideos = exports.OnDemandPageUserMetadataConnectionsShared = exports.OnDemandPageUserMetadataConnectionsRecommendedUsers = exports.OnDemandPageUserMetadataConnectionsRecommendedChannels = exports.OnDemandPageUserMetadataConnectionsPortfolios = exports.OnDemandPageUserMetadataConnectionsPictures = exports.OnDemandPageUserMetadataConnectionsModeratedChannels = exports.OnDemandPageUserMetadataConnectionsLikes = exports.OnDemandPageUserMetadataConnectionsGroups = exports.OnDemandPageUserMetadataConnectionsFollowing = exports.OnDemandPageUserMetadataConnectionsFollowers = exports.OnDemandPageUserMetadataConnectionsFolders = exports.OnDemandPageUserMetadataConnectionsFeed = exports.OnDemandPageUserMetadataConnectionsChannels = exports.OnDemandPageUserMetadataConnectionsCategories = exports.OnDemandPageUserMetadataConnectionsBlock = exports.OnDemandPageUserMetadataConnectionsAppearances = exports.OnDemandPageUserMetadataConnectionsAlbums = exports.OnDemandPageUserAccountEnum = exports.OnDemandPageTypeEnum = exports.OnDemandPageVideo = exports.OnDemandPageVideoUser = exports.OnDemandPageVideoUserWebsites = exports.OnDemandPageVideoUserUploadQuota = exports.OnDemandPageVideoUserUploadQuotaSpace = exports.OnDemandPageVideoUserUploadQuotaSpaceShowingEnum = exports.OnDemandPageVideoUserUploadQuotaPeriodic = exports.OnDemandPageVideoUserUploadQuotaLifetime = exports.OnDemandPageVideoUserPreferences = exports.OnDemandPageVideoUserPreferencesVideos = exports.OnDemandPageVideoUserPreferencesVideosPrivacy = exports.OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum = void 0;
exports.OnDemandPage = exports.OnDemandPageUser = exports.OnDemandPageUserWebsites = exports.OnDemandPageUserUploadQuota = exports.OnDemandPageUserUploadQuotaSpace = void 0;
var utils_1 = require("../../../internal/utils");
var purchaseinteraction_1 = require("./purchaseinteraction");
var user_1 = require("./user");
var picture_1 = require("./picture");
var category_1 = require("./category");
var embedsettings_1 = require("./embedsettings");
var tag_1 = require("./tag");
var video_1 = require("./video");
var ondemandgenre_1 = require("./ondemandgenre");
var OnDemandPagePictureSizes = /** @class */ (function (_super) {
    __extends(OnDemandPagePictureSizes, _super);
    function OnDemandPagePictureSizes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], OnDemandPagePictureSizes.prototype, "height", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], OnDemandPagePictureSizes.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link_with_play_button" }),
        __metadata("design:type", String)
    ], OnDemandPagePictureSizes.prototype, "linkWithPlayButton", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], OnDemandPagePictureSizes.prototype, "width", void 0);
    return OnDemandPagePictureSizes;
}(utils_1.SpeakeasyBase));
exports.OnDemandPagePictureSizes = OnDemandPagePictureSizes;
var OnDemandPagePictureTypeEnum;
(function (OnDemandPagePictureTypeEnum) {
    OnDemandPagePictureTypeEnum["Caution"] = "caution";
    OnDemandPagePictureTypeEnum["Custom"] = "custom";
    OnDemandPagePictureTypeEnum["Default"] = "default";
})(OnDemandPagePictureTypeEnum = exports.OnDemandPagePictureTypeEnum || (exports.OnDemandPagePictureTypeEnum = {}));
// OnDemandPagePicture
/**
 * The background image for the On Demand page on Vimeo.
**/
var OnDemandPagePicture = /** @class */ (function (_super) {
    __extends(OnDemandPagePicture, _super);
    function OnDemandPagePicture() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], OnDemandPagePicture.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], OnDemandPagePicture.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], OnDemandPagePicture.prototype, "resourceKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sizes", elemType: OnDemandPagePictureSizes }),
        __metadata("design:type", Array)
    ], OnDemandPagePicture.prototype, "sizes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], OnDemandPagePicture.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPagePicture.prototype, "uri", void 0);
    return OnDemandPagePicture;
}(utils_1.SpeakeasyBase));
exports.OnDemandPagePicture = OnDemandPagePicture;
// OnDemandPageColors
/**
 * The primary and secondary colors used for rendering this On Demand page.
**/
var OnDemandPageColors = /** @class */ (function (_super) {
    __extends(OnDemandPageColors, _super);
    function OnDemandPageColors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primary" }),
        __metadata("design:type", String)
    ], OnDemandPageColors.prototype, "primary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=secondary" }),
        __metadata("design:type", String)
    ], OnDemandPageColors.prototype, "secondary", void 0);
    return OnDemandPageColors;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageColors = OnDemandPageColors;
var OnDemandPageEpisodesBuy = /** @class */ (function (_super) {
    __extends(OnDemandPageEpisodesBuy, _super);
    function OnDemandPageEpisodesBuy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], OnDemandPageEpisodesBuy.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], OnDemandPageEpisodesBuy.prototype, "price", void 0);
    return OnDemandPageEpisodesBuy;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageEpisodesBuy = OnDemandPageEpisodesBuy;
var OnDemandPageEpisodesRentPeriodEnum;
(function (OnDemandPageEpisodesRentPeriodEnum) {
    OnDemandPageEpisodesRentPeriodEnum["OneDay"] = "1 day";
    OnDemandPageEpisodesRentPeriodEnum["OneMonth"] = "1 month";
    OnDemandPageEpisodesRentPeriodEnum["OneWeek"] = "1 week";
    OnDemandPageEpisodesRentPeriodEnum["OneYear"] = "1 year";
    OnDemandPageEpisodesRentPeriodEnum["TwoDay"] = "2 day";
    OnDemandPageEpisodesRentPeriodEnum["TwentyFourHour"] = "24 hour";
    OnDemandPageEpisodesRentPeriodEnum["ThreeDay"] = "3 day";
    OnDemandPageEpisodesRentPeriodEnum["ThreeMonth"] = "3 month";
    OnDemandPageEpisodesRentPeriodEnum["ThirtyDay"] = "30 day";
    OnDemandPageEpisodesRentPeriodEnum["FortyEightHour"] = "48 hour";
    OnDemandPageEpisodesRentPeriodEnum["SixMonth"] = "6 month";
    OnDemandPageEpisodesRentPeriodEnum["SixtyDay"] = "60 day";
    OnDemandPageEpisodesRentPeriodEnum["SevenDay"] = "7 day";
    OnDemandPageEpisodesRentPeriodEnum["SeventyTwoHour"] = "72 hour";
})(OnDemandPageEpisodesRentPeriodEnum = exports.OnDemandPageEpisodesRentPeriodEnum || (exports.OnDemandPageEpisodesRentPeriodEnum = {}));
var OnDemandPageEpisodesRent = /** @class */ (function (_super) {
    __extends(OnDemandPageEpisodesRent, _super);
    function OnDemandPageEpisodesRent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], OnDemandPageEpisodesRent.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=period" }),
        __metadata("design:type", String)
    ], OnDemandPageEpisodesRent.prototype, "period", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], OnDemandPageEpisodesRent.prototype, "price", void 0);
    return OnDemandPageEpisodesRent;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageEpisodesRent = OnDemandPageEpisodesRent;
// OnDemandPageEpisodes
/**
 * Information about this On Demand page's episodes, if the page is for a series.
**/
var OnDemandPageEpisodes = /** @class */ (function (_super) {
    __extends(OnDemandPageEpisodes, _super);
    function OnDemandPageEpisodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=buy" }),
        __metadata("design:type", OnDemandPageEpisodesBuy)
    ], OnDemandPageEpisodes.prototype, "buy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rent" }),
        __metadata("design:type", OnDemandPageEpisodesRent)
    ], OnDemandPageEpisodes.prototype, "rent", void 0);
    return OnDemandPageEpisodes;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageEpisodes = OnDemandPageEpisodes;
// OnDemandPageMetadataConnectionsMetadataConnectionsComments
/**
 * Information about the comments associated with this page.
**/
var OnDemandPageMetadataConnectionsMetadataConnectionsComments = /** @class */ (function (_super) {
    __extends(OnDemandPageMetadataConnectionsMetadataConnectionsComments, _super);
    function OnDemandPageMetadataConnectionsMetadataConnectionsComments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageMetadataConnectionsMetadataConnectionsComments.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageMetadataConnectionsMetadataConnectionsComments.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageMetadataConnectionsMetadataConnectionsComments.prototype, "uri", void 0);
    return OnDemandPageMetadataConnectionsMetadataConnectionsComments;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageMetadataConnectionsMetadataConnectionsComments = OnDemandPageMetadataConnectionsMetadataConnectionsComments;
// OnDemandPageMetadataConnectionsMetadataConnectionsGenres
/**
 * Information about the genres associated with this page.
**/
var OnDemandPageMetadataConnectionsMetadataConnectionsGenres = /** @class */ (function (_super) {
    __extends(OnDemandPageMetadataConnectionsMetadataConnectionsGenres, _super);
    function OnDemandPageMetadataConnectionsMetadataConnectionsGenres() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageMetadataConnectionsMetadataConnectionsGenres.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageMetadataConnectionsMetadataConnectionsGenres.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageMetadataConnectionsMetadataConnectionsGenres.prototype, "uri", void 0);
    return OnDemandPageMetadataConnectionsMetadataConnectionsGenres;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageMetadataConnectionsMetadataConnectionsGenres = OnDemandPageMetadataConnectionsMetadataConnectionsGenres;
// OnDemandPageMetadataConnectionsMetadataConnectionsLikes
/**
 * Information about the likes associated with this page.
**/
var OnDemandPageMetadataConnectionsMetadataConnectionsLikes = /** @class */ (function (_super) {
    __extends(OnDemandPageMetadataConnectionsMetadataConnectionsLikes, _super);
    function OnDemandPageMetadataConnectionsMetadataConnectionsLikes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageMetadataConnectionsMetadataConnectionsLikes.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageMetadataConnectionsMetadataConnectionsLikes.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageMetadataConnectionsMetadataConnectionsLikes.prototype, "uri", void 0);
    return OnDemandPageMetadataConnectionsMetadataConnectionsLikes;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageMetadataConnectionsMetadataConnectionsLikes = OnDemandPageMetadataConnectionsMetadataConnectionsLikes;
// OnDemandPageMetadataConnectionsMetadataConnectionsPictures
/**
 * Information about the pictures associated with this page.
**/
var OnDemandPageMetadataConnectionsMetadataConnectionsPictures = /** @class */ (function (_super) {
    __extends(OnDemandPageMetadataConnectionsMetadataConnectionsPictures, _super);
    function OnDemandPageMetadataConnectionsMetadataConnectionsPictures() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageMetadataConnectionsMetadataConnectionsPictures.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageMetadataConnectionsMetadataConnectionsPictures.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageMetadataConnectionsMetadataConnectionsPictures.prototype, "uri", void 0);
    return OnDemandPageMetadataConnectionsMetadataConnectionsPictures;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageMetadataConnectionsMetadataConnectionsPictures = OnDemandPageMetadataConnectionsMetadataConnectionsPictures;
// OnDemandPageMetadataConnectionsMetadataConnectionsSeasons
/**
 * Information about the seasons associated with this page.
**/
var OnDemandPageMetadataConnectionsMetadataConnectionsSeasons = /** @class */ (function (_super) {
    __extends(OnDemandPageMetadataConnectionsMetadataConnectionsSeasons, _super);
    function OnDemandPageMetadataConnectionsMetadataConnectionsSeasons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageMetadataConnectionsMetadataConnectionsSeasons.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageMetadataConnectionsMetadataConnectionsSeasons.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageMetadataConnectionsMetadataConnectionsSeasons.prototype, "uri", void 0);
    return OnDemandPageMetadataConnectionsMetadataConnectionsSeasons;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageMetadataConnectionsMetadataConnectionsSeasons = OnDemandPageMetadataConnectionsMetadataConnectionsSeasons;
// OnDemandPageMetadataConnectionsMetadataConnectionsVideos
/**
 * Information about the videos associated with this page.
**/
var OnDemandPageMetadataConnectionsMetadataConnectionsVideos = /** @class */ (function (_super) {
    __extends(OnDemandPageMetadataConnectionsMetadataConnectionsVideos, _super);
    function OnDemandPageMetadataConnectionsMetadataConnectionsVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extra_total" }),
        __metadata("design:type", Number)
    ], OnDemandPageMetadataConnectionsMetadataConnectionsVideos.prototype, "extraTotal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=main_total" }),
        __metadata("design:type", Number)
    ], OnDemandPageMetadataConnectionsMetadataConnectionsVideos.prototype, "mainTotal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageMetadataConnectionsMetadataConnectionsVideos.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageMetadataConnectionsMetadataConnectionsVideos.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageMetadataConnectionsMetadataConnectionsVideos.prototype, "uri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=viewable_total" }),
        __metadata("design:type", Number)
    ], OnDemandPageMetadataConnectionsMetadataConnectionsVideos.prototype, "viewableTotal", void 0);
    return OnDemandPageMetadataConnectionsMetadataConnectionsVideos;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageMetadataConnectionsMetadataConnectionsVideos = OnDemandPageMetadataConnectionsMetadataConnectionsVideos;
var OnDemandPageMetadataConnectionsMetadataConnections = /** @class */ (function (_super) {
    __extends(OnDemandPageMetadataConnectionsMetadataConnections, _super);
    function OnDemandPageMetadataConnectionsMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comments" }),
        __metadata("design:type", OnDemandPageMetadataConnectionsMetadataConnectionsComments)
    ], OnDemandPageMetadataConnectionsMetadataConnections.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=genres" }),
        __metadata("design:type", OnDemandPageMetadataConnectionsMetadataConnectionsGenres)
    ], OnDemandPageMetadataConnectionsMetadataConnections.prototype, "genres", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=likes" }),
        __metadata("design:type", OnDemandPageMetadataConnectionsMetadataConnectionsLikes)
    ], OnDemandPageMetadataConnectionsMetadataConnections.prototype, "likes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pictures" }),
        __metadata("design:type", OnDemandPageMetadataConnectionsMetadataConnectionsPictures)
    ], OnDemandPageMetadataConnectionsMetadataConnections.prototype, "pictures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=seasons" }),
        __metadata("design:type", OnDemandPageMetadataConnectionsMetadataConnectionsSeasons)
    ], OnDemandPageMetadataConnectionsMetadataConnections.prototype, "seasons", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=videos" }),
        __metadata("design:type", OnDemandPageMetadataConnectionsMetadataConnectionsVideos)
    ], OnDemandPageMetadataConnectionsMetadataConnections.prototype, "videos", void 0);
    return OnDemandPageMetadataConnectionsMetadataConnections;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageMetadataConnectionsMetadataConnections = OnDemandPageMetadataConnectionsMetadataConnections;
var OnDemandPageMetadataConnectionsMetadata = /** @class */ (function (_super) {
    __extends(OnDemandPageMetadataConnectionsMetadata, _super);
    function OnDemandPageMetadataConnectionsMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connections" }),
        __metadata("design:type", OnDemandPageMetadataConnectionsMetadataConnections)
    ], OnDemandPageMetadataConnectionsMetadata.prototype, "connections", void 0);
    return OnDemandPageMetadataConnectionsMetadata;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageMetadataConnectionsMetadata = OnDemandPageMetadataConnectionsMetadata;
// OnDemandPageMetadataConnections
/**
 * A collection of information that is connected to this resource, including videos, genres, and pictures connections.
**/
var OnDemandPageMetadataConnections = /** @class */ (function (_super) {
    __extends(OnDemandPageMetadataConnections, _super);
    function OnDemandPageMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", OnDemandPageMetadataConnectionsMetadata)
    ], OnDemandPageMetadataConnections.prototype, "metadata", void 0);
    return OnDemandPageMetadataConnections;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageMetadataConnections = OnDemandPageMetadataConnections;
// OnDemandPageMetadata
/**
 * Metadata about the On Demand page.
**/
var OnDemandPageMetadata = /** @class */ (function (_super) {
    __extends(OnDemandPageMetadata, _super);
    function OnDemandPageMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connections" }),
        __metadata("design:type", OnDemandPageMetadataConnections)
    ], OnDemandPageMetadata.prototype, "connections", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interactions" }),
        __metadata("design:type", purchaseinteraction_1.PurchaseInteraction)
    ], OnDemandPageMetadata.prototype, "interactions", void 0);
    return OnDemandPageMetadata;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageMetadata = OnDemandPageMetadata;
var OnDemandPagePreorder = /** @class */ (function (_super) {
    __extends(OnDemandPagePreorder, _super);
    function OnDemandPagePreorder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], OnDemandPagePreorder.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancel_time" }),
        __metadata("design:type", String)
    ], OnDemandPagePreorder.prototype, "cancelTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publish_time" }),
        __metadata("design:type", String)
    ], OnDemandPagePreorder.prototype, "publishTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time" }),
        __metadata("design:type", String)
    ], OnDemandPagePreorder.prototype, "time", void 0);
    return OnDemandPagePreorder;
}(utils_1.SpeakeasyBase));
exports.OnDemandPagePreorder = OnDemandPagePreorder;
var OnDemandPagePublished = /** @class */ (function (_super) {
    __extends(OnDemandPagePublished, _super);
    function OnDemandPagePublished() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], OnDemandPagePublished.prototype, "enabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time" }),
        __metadata("design:type", String)
    ], OnDemandPagePublished.prototype, "time", void 0);
    return OnDemandPagePublished;
}(utils_1.SpeakeasyBase));
exports.OnDemandPagePublished = OnDemandPagePublished;
// OnDemandPageSubscription
/**
 * Information about subscribing to this On Demand page, if enabled.
**/
var OnDemandPageSubscription = /** @class */ (function (_super) {
    __extends(OnDemandPageSubscription, _super);
    function OnDemandPageSubscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], OnDemandPageSubscription.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], OnDemandPageSubscription.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=period" }),
        __metadata("design:type", String)
    ], OnDemandPageSubscription.prototype, "period", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", Object)
    ], OnDemandPageSubscription.prototype, "price", void 0);
    return OnDemandPageSubscription;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageSubscription = OnDemandPageSubscription;
var OnDemandPageVideoContextActionEnum;
(function (OnDemandPageVideoContextActionEnum) {
    OnDemandPageVideoContextActionEnum["AddedTo"] = "Added to";
    OnDemandPageVideoContextActionEnum["AppearanceBy"] = "Appearance by";
    OnDemandPageVideoContextActionEnum["LikedBy"] = "Liked by";
    OnDemandPageVideoContextActionEnum["UploadedBy"] = "Uploaded by";
})(OnDemandPageVideoContextActionEnum = exports.OnDemandPageVideoContextActionEnum || (exports.OnDemandPageVideoContextActionEnum = {}));
// OnDemandPageVideoContext
/**
 * The context of the video's subscription, if this video is part of a subscription.
**/
var OnDemandPageVideoContext = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoContext, _super);
    function OnDemandPageVideoContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoContext.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource" }),
        __metadata("design:type", Object)
    ], OnDemandPageVideoContext.prototype, "resource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoContext.prototype, "resourceType", void 0);
    return OnDemandPageVideoContext;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoContext = OnDemandPageVideoContext;
var OnDemandPageVideoLicenseEnum;
(function (OnDemandPageVideoLicenseEnum) {
    OnDemandPageVideoLicenseEnum["By"] = "by";
    OnDemandPageVideoLicenseEnum["ByNc"] = "by-nc";
    OnDemandPageVideoLicenseEnum["ByNcNd"] = "by-nc-nd";
    OnDemandPageVideoLicenseEnum["ByNcSa"] = "by-nc-sa";
    OnDemandPageVideoLicenseEnum["ByNd"] = "by-nd";
    OnDemandPageVideoLicenseEnum["BySa"] = "by-sa";
    OnDemandPageVideoLicenseEnum["Cc0"] = "cc0";
})(OnDemandPageVideoLicenseEnum = exports.OnDemandPageVideoLicenseEnum || (exports.OnDemandPageVideoLicenseEnum = {}));
// OnDemandPageVideoMetadataConnectionsComments
/**
 * Information about the comments on this video.
**/
var OnDemandPageVideoMetadataConnectionsComments = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoMetadataConnectionsComments, _super);
    function OnDemandPageVideoMetadataConnectionsComments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoMetadataConnectionsComments.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoMetadataConnectionsComments.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataConnectionsComments.prototype, "uri", void 0);
    return OnDemandPageVideoMetadataConnectionsComments;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoMetadataConnectionsComments = OnDemandPageVideoMetadataConnectionsComments;
// OnDemandPageVideoMetadataConnectionsCredits
/**
 * Information about the users credited in this video.
**/
var OnDemandPageVideoMetadataConnectionsCredits = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoMetadataConnectionsCredits, _super);
    function OnDemandPageVideoMetadataConnectionsCredits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoMetadataConnectionsCredits.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoMetadataConnectionsCredits.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataConnectionsCredits.prototype, "uri", void 0);
    return OnDemandPageVideoMetadataConnectionsCredits;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoMetadataConnectionsCredits = OnDemandPageVideoMetadataConnectionsCredits;
// OnDemandPageVideoMetadataConnectionsLikes
/**
 * Information about the users who have liked this video.
**/
var OnDemandPageVideoMetadataConnectionsLikes = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoMetadataConnectionsLikes, _super);
    function OnDemandPageVideoMetadataConnectionsLikes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoMetadataConnectionsLikes.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoMetadataConnectionsLikes.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataConnectionsLikes.prototype, "uri", void 0);
    return OnDemandPageVideoMetadataConnectionsLikes;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoMetadataConnectionsLikes = OnDemandPageVideoMetadataConnectionsLikes;
// OnDemandPageVideoMetadataConnectionsOndemand
/**
 * Information about this video's ondemand data.
**/
var OnDemandPageVideoMetadataConnectionsOndemand = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoMetadataConnectionsOndemand, _super);
    function OnDemandPageVideoMetadataConnectionsOndemand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoMetadataConnectionsOndemand.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataConnectionsOndemand.prototype, "resourceKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataConnectionsOndemand.prototype, "uri", void 0);
    return OnDemandPageVideoMetadataConnectionsOndemand;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoMetadataConnectionsOndemand = OnDemandPageVideoMetadataConnectionsOndemand;
// OnDemandPageVideoMetadataConnectionsPictures
/**
 * Information about this video's thumbnails.
**/
var OnDemandPageVideoMetadataConnectionsPictures = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoMetadataConnectionsPictures, _super);
    function OnDemandPageVideoMetadataConnectionsPictures() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoMetadataConnectionsPictures.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoMetadataConnectionsPictures.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataConnectionsPictures.prototype, "uri", void 0);
    return OnDemandPageVideoMetadataConnectionsPictures;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoMetadataConnectionsPictures = OnDemandPageVideoMetadataConnectionsPictures;
// OnDemandPageVideoMetadataConnectionsPlayback
/**
 * The DRM playback status connection for this video.
**/
var OnDemandPageVideoMetadataConnectionsPlayback = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoMetadataConnectionsPlayback, _super);
    function OnDemandPageVideoMetadataConnectionsPlayback() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoMetadataConnectionsPlayback.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataConnectionsPlayback.prototype, "uri", void 0);
    return OnDemandPageVideoMetadataConnectionsPlayback;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoMetadataConnectionsPlayback = OnDemandPageVideoMetadataConnectionsPlayback;
// OnDemandPageVideoMetadataConnectionsRecommendations
/**
 * The recommendations for this video.
**/
var OnDemandPageVideoMetadataConnectionsRecommendations = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoMetadataConnectionsRecommendations, _super);
    function OnDemandPageVideoMetadataConnectionsRecommendations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoMetadataConnectionsRecommendations.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataConnectionsRecommendations.prototype, "uri", void 0);
    return OnDemandPageVideoMetadataConnectionsRecommendations;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoMetadataConnectionsRecommendations = OnDemandPageVideoMetadataConnectionsRecommendations;
// OnDemandPageVideoMetadataConnectionsRelated
/**
 * Related content for this video.
**/
var OnDemandPageVideoMetadataConnectionsRelated = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoMetadataConnectionsRelated, _super);
    function OnDemandPageVideoMetadataConnectionsRelated() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoMetadataConnectionsRelated.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataConnectionsRelated.prototype, "uri", void 0);
    return OnDemandPageVideoMetadataConnectionsRelated;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoMetadataConnectionsRelated = OnDemandPageVideoMetadataConnectionsRelated;
// OnDemandPageVideoMetadataConnectionsSeason
/**
 * Information about the video's season.
**/
var OnDemandPageVideoMetadataConnectionsSeason = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoMetadataConnectionsSeason, _super);
    function OnDemandPageVideoMetadataConnectionsSeason() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataConnectionsSeason.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoMetadataConnectionsSeason.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataConnectionsSeason.prototype, "uri", void 0);
    return OnDemandPageVideoMetadataConnectionsSeason;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoMetadataConnectionsSeason = OnDemandPageVideoMetadataConnectionsSeason;
// OnDemandPageVideoMetadataConnectionsTexttracks
/**
 * Information about this video's text tracks.
**/
var OnDemandPageVideoMetadataConnectionsTexttracks = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoMetadataConnectionsTexttracks, _super);
    function OnDemandPageVideoMetadataConnectionsTexttracks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoMetadataConnectionsTexttracks.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoMetadataConnectionsTexttracks.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataConnectionsTexttracks.prototype, "uri", void 0);
    return OnDemandPageVideoMetadataConnectionsTexttracks;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoMetadataConnectionsTexttracks = OnDemandPageVideoMetadataConnectionsTexttracks;
// OnDemandPageVideoMetadataConnectionsTrailer
/**
 * Information about this video's VOD trailer.
**/
var OnDemandPageVideoMetadataConnectionsTrailer = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoMetadataConnectionsTrailer, _super);
    function OnDemandPageVideoMetadataConnectionsTrailer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoMetadataConnectionsTrailer.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataConnectionsTrailer.prototype, "resourceKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataConnectionsTrailer.prototype, "uri", void 0);
    return OnDemandPageVideoMetadataConnectionsTrailer;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoMetadataConnectionsTrailer = OnDemandPageVideoMetadataConnectionsTrailer;
// OnDemandPageVideoMetadataConnectionsUsersWithAccess
/**
 * Information about the user privacy of this video, if the video privacy is `users`.
**/
var OnDemandPageVideoMetadataConnectionsUsersWithAccess = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoMetadataConnectionsUsersWithAccess, _super);
    function OnDemandPageVideoMetadataConnectionsUsersWithAccess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoMetadataConnectionsUsersWithAccess.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoMetadataConnectionsUsersWithAccess.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataConnectionsUsersWithAccess.prototype, "uri", void 0);
    return OnDemandPageVideoMetadataConnectionsUsersWithAccess;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoMetadataConnectionsUsersWithAccess = OnDemandPageVideoMetadataConnectionsUsersWithAccess;
// OnDemandPageVideoMetadataConnectionsVersions
/**
 * Information about the versions of this video.
**/
var OnDemandPageVideoMetadataConnectionsVersions = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoMetadataConnectionsVersions, _super);
    function OnDemandPageVideoMetadataConnectionsVersions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=current_uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataConnectionsVersions.prototype, "currentUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoMetadataConnectionsVersions.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoMetadataConnectionsVersions.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataConnectionsVersions.prototype, "uri", void 0);
    return OnDemandPageVideoMetadataConnectionsVersions;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoMetadataConnectionsVersions = OnDemandPageVideoMetadataConnectionsVersions;
// OnDemandPageVideoMetadataConnections
/**
 * A list of resource URIs related to the video.
**/
var OnDemandPageVideoMetadataConnections = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoMetadataConnections, _super);
    function OnDemandPageVideoMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comments" }),
        __metadata("design:type", OnDemandPageVideoMetadataConnectionsComments)
    ], OnDemandPageVideoMetadataConnections.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=credits" }),
        __metadata("design:type", OnDemandPageVideoMetadataConnectionsCredits)
    ], OnDemandPageVideoMetadataConnections.prototype, "credits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=likes" }),
        __metadata("design:type", OnDemandPageVideoMetadataConnectionsLikes)
    ], OnDemandPageVideoMetadataConnections.prototype, "likes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ondemand" }),
        __metadata("design:type", OnDemandPageVideoMetadataConnectionsOndemand)
    ], OnDemandPageVideoMetadataConnections.prototype, "ondemand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pictures" }),
        __metadata("design:type", OnDemandPageVideoMetadataConnectionsPictures)
    ], OnDemandPageVideoMetadataConnections.prototype, "pictures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=playback" }),
        __metadata("design:type", OnDemandPageVideoMetadataConnectionsPlayback)
    ], OnDemandPageVideoMetadataConnections.prototype, "playback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recommendations" }),
        __metadata("design:type", OnDemandPageVideoMetadataConnectionsRecommendations)
    ], OnDemandPageVideoMetadataConnections.prototype, "recommendations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=related" }),
        __metadata("design:type", OnDemandPageVideoMetadataConnectionsRelated)
    ], OnDemandPageVideoMetadataConnections.prototype, "related", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=season" }),
        __metadata("design:type", OnDemandPageVideoMetadataConnectionsSeason)
    ], OnDemandPageVideoMetadataConnections.prototype, "season", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=texttracks" }),
        __metadata("design:type", OnDemandPageVideoMetadataConnectionsTexttracks)
    ], OnDemandPageVideoMetadataConnections.prototype, "texttracks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trailer" }),
        __metadata("design:type", OnDemandPageVideoMetadataConnectionsTrailer)
    ], OnDemandPageVideoMetadataConnections.prototype, "trailer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users_with_access" }),
        __metadata("design:type", OnDemandPageVideoMetadataConnectionsUsersWithAccess)
    ], OnDemandPageVideoMetadataConnections.prototype, "usersWithAccess", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=versions" }),
        __metadata("design:type", OnDemandPageVideoMetadataConnectionsVersions)
    ], OnDemandPageVideoMetadataConnections.prototype, "versions", void 0);
    return OnDemandPageVideoMetadataConnections;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoMetadataConnections = OnDemandPageVideoMetadataConnections;
var OnDemandPageVideoMetadataInteractionsBuyDownloadEnum;
(function (OnDemandPageVideoMetadataInteractionsBuyDownloadEnum) {
    OnDemandPageVideoMetadataInteractionsBuyDownloadEnum["Available"] = "available";
    OnDemandPageVideoMetadataInteractionsBuyDownloadEnum["Purchased"] = "purchased";
    OnDemandPageVideoMetadataInteractionsBuyDownloadEnum["Restricted"] = "restricted";
    OnDemandPageVideoMetadataInteractionsBuyDownloadEnum["Unavailable"] = "unavailable";
})(OnDemandPageVideoMetadataInteractionsBuyDownloadEnum = exports.OnDemandPageVideoMetadataInteractionsBuyDownloadEnum || (exports.OnDemandPageVideoMetadataInteractionsBuyDownloadEnum = {}));
var OnDemandPageVideoMetadataInteractionsBuyStreamEnum;
(function (OnDemandPageVideoMetadataInteractionsBuyStreamEnum) {
    OnDemandPageVideoMetadataInteractionsBuyStreamEnum["Available"] = "available";
    OnDemandPageVideoMetadataInteractionsBuyStreamEnum["Purchased"] = "purchased";
    OnDemandPageVideoMetadataInteractionsBuyStreamEnum["Restricted"] = "restricted";
    OnDemandPageVideoMetadataInteractionsBuyStreamEnum["Unavailable"] = "unavailable";
})(OnDemandPageVideoMetadataInteractionsBuyStreamEnum = exports.OnDemandPageVideoMetadataInteractionsBuyStreamEnum || (exports.OnDemandPageVideoMetadataInteractionsBuyStreamEnum = {}));
// OnDemandPageVideoMetadataInteractionsBuy
/**
 * The Buy interaction for a On Demand video.
**/
var OnDemandPageVideoMetadataInteractionsBuy = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoMetadataInteractionsBuy, _super);
    function OnDemandPageVideoMetadataInteractionsBuy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataInteractionsBuy.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_price" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataInteractionsBuy.prototype, "displayPrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataInteractionsBuy.prototype, "download", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=drm" }),
        __metadata("design:type", Boolean)
    ], OnDemandPageVideoMetadataInteractionsBuy.prototype, "drm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataInteractionsBuy.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoMetadataInteractionsBuy.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchase_time" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataInteractionsBuy.prototype, "purchaseTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stream" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataInteractionsBuy.prototype, "stream", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataInteractionsBuy.prototype, "uri", void 0);
    return OnDemandPageVideoMetadataInteractionsBuy;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoMetadataInteractionsBuy = OnDemandPageVideoMetadataInteractionsBuy;
// OnDemandPageVideoMetadataInteractionsChannel
/**
 * When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
**/
var OnDemandPageVideoMetadataInteractionsChannel = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoMetadataInteractionsChannel, _super);
    function OnDemandPageVideoMetadataInteractionsChannel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoMetadataInteractionsChannel.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataInteractionsChannel.prototype, "uri", void 0);
    return OnDemandPageVideoMetadataInteractionsChannel;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoMetadataInteractionsChannel = OnDemandPageVideoMetadataInteractionsChannel;
// OnDemandPageVideoMetadataInteractionsLike
/**
 * Information about whether the authenticated user has liked this video.
**/
var OnDemandPageVideoMetadataInteractionsLike = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoMetadataInteractionsLike, _super);
    function OnDemandPageVideoMetadataInteractionsLike() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], OnDemandPageVideoMetadataInteractionsLike.prototype, "added", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=added_time" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataInteractionsLike.prototype, "addedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoMetadataInteractionsLike.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataInteractionsLike.prototype, "uri", void 0);
    return OnDemandPageVideoMetadataInteractionsLike;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoMetadataInteractionsLike = OnDemandPageVideoMetadataInteractionsLike;
var OnDemandPageVideoMetadataInteractionsRentStreamEnum;
(function (OnDemandPageVideoMetadataInteractionsRentStreamEnum) {
    OnDemandPageVideoMetadataInteractionsRentStreamEnum["Available"] = "available";
    OnDemandPageVideoMetadataInteractionsRentStreamEnum["Purchased"] = "purchased";
    OnDemandPageVideoMetadataInteractionsRentStreamEnum["Restricted"] = "restricted";
    OnDemandPageVideoMetadataInteractionsRentStreamEnum["Unavailable"] = "unavailable";
})(OnDemandPageVideoMetadataInteractionsRentStreamEnum = exports.OnDemandPageVideoMetadataInteractionsRentStreamEnum || (exports.OnDemandPageVideoMetadataInteractionsRentStreamEnum = {}));
// OnDemandPageVideoMetadataInteractionsRent
/**
 * The Rent interaction for an On Demand video.
**/
var OnDemandPageVideoMetadataInteractionsRent = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoMetadataInteractionsRent, _super);
    function OnDemandPageVideoMetadataInteractionsRent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataInteractionsRent.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_price" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataInteractionsRent.prototype, "displayPrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=drm" }),
        __metadata("design:type", Boolean)
    ], OnDemandPageVideoMetadataInteractionsRent.prototype, "drm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expires_time" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataInteractionsRent.prototype, "expiresTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataInteractionsRent.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoMetadataInteractionsRent.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchase_time" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataInteractionsRent.prototype, "purchaseTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stream" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataInteractionsRent.prototype, "stream", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataInteractionsRent.prototype, "uri", void 0);
    return OnDemandPageVideoMetadataInteractionsRent;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoMetadataInteractionsRent = OnDemandPageVideoMetadataInteractionsRent;
// OnDemandPageVideoMetadataInteractionsReport
/**
 * Information about where and how to report a video.
**/
var OnDemandPageVideoMetadataInteractionsReport = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoMetadataInteractionsReport, _super);
    function OnDemandPageVideoMetadataInteractionsReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoMetadataInteractionsReport.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reason" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoMetadataInteractionsReport.prototype, "reason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataInteractionsReport.prototype, "uri", void 0);
    return OnDemandPageVideoMetadataInteractionsReport;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoMetadataInteractionsReport = OnDemandPageVideoMetadataInteractionsReport;
// OnDemandPageVideoMetadataInteractionsSubscribe
/**
 * Subscription information for an On Demand video.
**/
var OnDemandPageVideoMetadataInteractionsSubscribe = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoMetadataInteractionsSubscribe, _super);
    function OnDemandPageVideoMetadataInteractionsSubscribe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=drm" }),
        __metadata("design:type", Boolean)
    ], OnDemandPageVideoMetadataInteractionsSubscribe.prototype, "drm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expires_time" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataInteractionsSubscribe.prototype, "expiresTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchase_time" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataInteractionsSubscribe.prototype, "purchaseTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stream" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataInteractionsSubscribe.prototype, "stream", void 0);
    return OnDemandPageVideoMetadataInteractionsSubscribe;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoMetadataInteractionsSubscribe = OnDemandPageVideoMetadataInteractionsSubscribe;
// OnDemandPageVideoMetadataInteractionsWatched
/**
 * Information about removing this video from the user's list of watched videos.
**/
var OnDemandPageVideoMetadataInteractionsWatched = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoMetadataInteractionsWatched, _super);
    function OnDemandPageVideoMetadataInteractionsWatched() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], OnDemandPageVideoMetadataInteractionsWatched.prototype, "added", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=added_time" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataInteractionsWatched.prototype, "addedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoMetadataInteractionsWatched.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataInteractionsWatched.prototype, "uri", void 0);
    return OnDemandPageVideoMetadataInteractionsWatched;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoMetadataInteractionsWatched = OnDemandPageVideoMetadataInteractionsWatched;
// OnDemandPageVideoMetadataInteractionsWatchlater
/**
 * Information about whether this video appears on the authenticated user's Watch Later list.
**/
var OnDemandPageVideoMetadataInteractionsWatchlater = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoMetadataInteractionsWatchlater, _super);
    function OnDemandPageVideoMetadataInteractionsWatchlater() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], OnDemandPageVideoMetadataInteractionsWatchlater.prototype, "added", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=added_time" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataInteractionsWatchlater.prototype, "addedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoMetadataInteractionsWatchlater.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoMetadataInteractionsWatchlater.prototype, "uri", void 0);
    return OnDemandPageVideoMetadataInteractionsWatchlater;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoMetadataInteractionsWatchlater = OnDemandPageVideoMetadataInteractionsWatchlater;
// OnDemandPageVideoMetadataInteractions
/**
 * A list of resource URIs related to the video.
**/
var OnDemandPageVideoMetadataInteractions = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoMetadataInteractions, _super);
    function OnDemandPageVideoMetadataInteractions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=buy" }),
        __metadata("design:type", OnDemandPageVideoMetadataInteractionsBuy)
    ], OnDemandPageVideoMetadataInteractions.prototype, "buy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", OnDemandPageVideoMetadataInteractionsChannel)
    ], OnDemandPageVideoMetadataInteractions.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=like" }),
        __metadata("design:type", OnDemandPageVideoMetadataInteractionsLike)
    ], OnDemandPageVideoMetadataInteractions.prototype, "like", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rent" }),
        __metadata("design:type", OnDemandPageVideoMetadataInteractionsRent)
    ], OnDemandPageVideoMetadataInteractions.prototype, "rent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=report" }),
        __metadata("design:type", OnDemandPageVideoMetadataInteractionsReport)
    ], OnDemandPageVideoMetadataInteractions.prototype, "report", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscribe" }),
        __metadata("design:type", OnDemandPageVideoMetadataInteractionsSubscribe)
    ], OnDemandPageVideoMetadataInteractions.prototype, "subscribe", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=watched" }),
        __metadata("design:type", OnDemandPageVideoMetadataInteractionsWatched)
    ], OnDemandPageVideoMetadataInteractions.prototype, "watched", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=watchlater" }),
        __metadata("design:type", OnDemandPageVideoMetadataInteractionsWatchlater)
    ], OnDemandPageVideoMetadataInteractions.prototype, "watchlater", void 0);
    return OnDemandPageVideoMetadataInteractions;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoMetadataInteractions = OnDemandPageVideoMetadataInteractions;
// OnDemandPageVideoMetadata
/**
 * The video's metadata.
**/
var OnDemandPageVideoMetadata = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoMetadata, _super);
    function OnDemandPageVideoMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connections" }),
        __metadata("design:type", OnDemandPageVideoMetadataConnections)
    ], OnDemandPageVideoMetadata.prototype, "connections", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interactions" }),
        __metadata("design:type", OnDemandPageVideoMetadataInteractions)
    ], OnDemandPageVideoMetadata.prototype, "interactions", void 0);
    return OnDemandPageVideoMetadata;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoMetadata = OnDemandPageVideoMetadata;
// OnDemandPageVideoProjectMetadataConnectionsVideos
/**
 * A standard connection object indicating how to get all the videos in this project.
**/
var OnDemandPageVideoProjectMetadataConnectionsVideos = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoProjectMetadataConnectionsVideos, _super);
    function OnDemandPageVideoProjectMetadataConnectionsVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoProjectMetadataConnectionsVideos.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoProjectMetadataConnectionsVideos.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoProjectMetadataConnectionsVideos.prototype, "uri", void 0);
    return OnDemandPageVideoProjectMetadataConnectionsVideos;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoProjectMetadataConnectionsVideos = OnDemandPageVideoProjectMetadataConnectionsVideos;
// OnDemandPageVideoProjectMetadataConnections
/**
 * A list of resource URIs related to the project.
**/
var OnDemandPageVideoProjectMetadataConnections = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoProjectMetadataConnections, _super);
    function OnDemandPageVideoProjectMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=videos" }),
        __metadata("design:type", OnDemandPageVideoProjectMetadataConnectionsVideos)
    ], OnDemandPageVideoProjectMetadataConnections.prototype, "videos", void 0);
    return OnDemandPageVideoProjectMetadataConnections;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoProjectMetadataConnections = OnDemandPageVideoProjectMetadataConnections;
// OnDemandPageVideoProjectMetadata
/**
 * The project's metadata.
**/
var OnDemandPageVideoProjectMetadata = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoProjectMetadata, _super);
    function OnDemandPageVideoProjectMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connections" }),
        __metadata("design:type", OnDemandPageVideoProjectMetadataConnections)
    ], OnDemandPageVideoProjectMetadata.prototype, "connections", void 0);
    return OnDemandPageVideoProjectMetadata;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoProjectMetadata = OnDemandPageVideoProjectMetadata;
// OnDemandPageVideoProject
/**
 * Information about the folder that contains this video.
**/
var OnDemandPageVideoProject = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoProject, _super);
    function OnDemandPageVideoProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoProject.prototype, "createdTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", OnDemandPageVideoProjectMetadata)
    ], OnDemandPageVideoProject.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified_time" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoProject.prototype, "modifiedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoProject.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoProject.prototype, "resourceKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoProject.prototype, "uri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", user_1.User)
    ], OnDemandPageVideoProject.prototype, "user", void 0);
    return OnDemandPageVideoProject;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoProject = OnDemandPageVideoProject;
var OnDemandPageVideoPrivacyCommentsEnum;
(function (OnDemandPageVideoPrivacyCommentsEnum) {
    OnDemandPageVideoPrivacyCommentsEnum["Anybody"] = "anybody";
    OnDemandPageVideoPrivacyCommentsEnum["Contacts"] = "contacts";
    OnDemandPageVideoPrivacyCommentsEnum["Nobody"] = "nobody";
})(OnDemandPageVideoPrivacyCommentsEnum = exports.OnDemandPageVideoPrivacyCommentsEnum || (exports.OnDemandPageVideoPrivacyCommentsEnum = {}));
var OnDemandPageVideoPrivacyEmbedEnum;
(function (OnDemandPageVideoPrivacyEmbedEnum) {
    OnDemandPageVideoPrivacyEmbedEnum["Private"] = "private";
    OnDemandPageVideoPrivacyEmbedEnum["Public"] = "public";
})(OnDemandPageVideoPrivacyEmbedEnum = exports.OnDemandPageVideoPrivacyEmbedEnum || (exports.OnDemandPageVideoPrivacyEmbedEnum = {}));
var OnDemandPageVideoPrivacyViewEnum;
(function (OnDemandPageVideoPrivacyViewEnum) {
    OnDemandPageVideoPrivacyViewEnum["Anybody"] = "anybody";
    OnDemandPageVideoPrivacyViewEnum["Contacts"] = "contacts";
    OnDemandPageVideoPrivacyViewEnum["Disable"] = "disable";
    OnDemandPageVideoPrivacyViewEnum["Nobody"] = "nobody";
    OnDemandPageVideoPrivacyViewEnum["Password"] = "password";
    OnDemandPageVideoPrivacyViewEnum["Unlisted"] = "unlisted";
    OnDemandPageVideoPrivacyViewEnum["Users"] = "users";
})(OnDemandPageVideoPrivacyViewEnum = exports.OnDemandPageVideoPrivacyViewEnum || (exports.OnDemandPageVideoPrivacyViewEnum = {}));
// OnDemandPageVideoPrivacy
/**
 * The video's privacy setting.
**/
var OnDemandPageVideoPrivacy = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoPrivacy, _super);
    function OnDemandPageVideoPrivacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=add" }),
        __metadata("design:type", Boolean)
    ], OnDemandPageVideoPrivacy.prototype, "add", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoPrivacy.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], OnDemandPageVideoPrivacy.prototype, "download", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoPrivacy.prototype, "embed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=view" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoPrivacy.prototype, "view", void 0);
    return OnDemandPageVideoPrivacy;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoPrivacy = OnDemandPageVideoPrivacy;
var OnDemandPageVideoSpatialDirectorTimeline = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoSpatialDirectorTimeline, _super);
    function OnDemandPageVideoSpatialDirectorTimeline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pitch" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoSpatialDirectorTimeline.prototype, "pitch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=roll" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoSpatialDirectorTimeline.prototype, "roll", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time_code" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoSpatialDirectorTimeline.prototype, "timeCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=yaw" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoSpatialDirectorTimeline.prototype, "yaw", void 0);
    return OnDemandPageVideoSpatialDirectorTimeline;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoSpatialDirectorTimeline = OnDemandPageVideoSpatialDirectorTimeline;
var OnDemandPageVideoSpatialProjectionEnum;
(function (OnDemandPageVideoSpatialProjectionEnum) {
    OnDemandPageVideoSpatialProjectionEnum["Cubical"] = "cubical";
    OnDemandPageVideoSpatialProjectionEnum["Cylindrical"] = "cylindrical";
    OnDemandPageVideoSpatialProjectionEnum["Dome"] = "dome";
    OnDemandPageVideoSpatialProjectionEnum["Equirectangular"] = "equirectangular";
    OnDemandPageVideoSpatialProjectionEnum["Pyramid"] = "pyramid";
})(OnDemandPageVideoSpatialProjectionEnum = exports.OnDemandPageVideoSpatialProjectionEnum || (exports.OnDemandPageVideoSpatialProjectionEnum = {}));
var OnDemandPageVideoSpatialStereoFormatEnum;
(function (OnDemandPageVideoSpatialStereoFormatEnum) {
    OnDemandPageVideoSpatialStereoFormatEnum["LeftRight"] = "left-right";
    OnDemandPageVideoSpatialStereoFormatEnum["Mono"] = "mono";
    OnDemandPageVideoSpatialStereoFormatEnum["TopBottom"] = "top-bottom";
})(OnDemandPageVideoSpatialStereoFormatEnum = exports.OnDemandPageVideoSpatialStereoFormatEnum || (exports.OnDemandPageVideoSpatialStereoFormatEnum = {}));
// OnDemandPageVideoSpatial
/**
 * 360 spatial data.
**/
var OnDemandPageVideoSpatial = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoSpatial, _super);
    function OnDemandPageVideoSpatial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=director_timeline", elemType: OnDemandPageVideoSpatialDirectorTimeline }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoSpatial.prototype, "directorTimeline", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field_of_view" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoSpatial.prototype, "fieldOfView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=projection" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoSpatial.prototype, "projection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stereo_format" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoSpatial.prototype, "stereoFormat", void 0);
    return OnDemandPageVideoSpatial;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoSpatial = OnDemandPageVideoSpatial;
// OnDemandPageVideoStats
/**
 * A collection of stats associated with this video.
**/
var OnDemandPageVideoStats = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoStats, _super);
    function OnDemandPageVideoStats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plays" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoStats.prototype, "plays", void 0);
    return OnDemandPageVideoStats;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoStats = OnDemandPageVideoStats;
var OnDemandPageVideoStatusEnum;
(function (OnDemandPageVideoStatusEnum) {
    OnDemandPageVideoStatusEnum["Available"] = "available";
    OnDemandPageVideoStatusEnum["QuotaExceeded"] = "quota_exceeded";
    OnDemandPageVideoStatusEnum["TotalCapExceeded"] = "total_cap_exceeded";
    OnDemandPageVideoStatusEnum["TranscodeStarting"] = "transcode_starting";
    OnDemandPageVideoStatusEnum["Transcoding"] = "transcoding";
    OnDemandPageVideoStatusEnum["TranscodingError"] = "transcoding_error";
    OnDemandPageVideoStatusEnum["Unavailable"] = "unavailable";
    OnDemandPageVideoStatusEnum["Uploading"] = "uploading";
    OnDemandPageVideoStatusEnum["UploadingError"] = "uploading_error";
})(OnDemandPageVideoStatusEnum = exports.OnDemandPageVideoStatusEnum || (exports.OnDemandPageVideoStatusEnum = {}));
var OnDemandPageVideoTranscodeStatusEnum;
(function (OnDemandPageVideoTranscodeStatusEnum) {
    OnDemandPageVideoTranscodeStatusEnum["Complete"] = "complete";
    OnDemandPageVideoTranscodeStatusEnum["Error"] = "error";
    OnDemandPageVideoTranscodeStatusEnum["InProgress"] = "in_progress";
})(OnDemandPageVideoTranscodeStatusEnum = exports.OnDemandPageVideoTranscodeStatusEnum || (exports.OnDemandPageVideoTranscodeStatusEnum = {}));
// OnDemandPageVideoTranscode
/**
 * The transcode information for a video upload.
**/
var OnDemandPageVideoTranscode = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoTranscode, _super);
    function OnDemandPageVideoTranscode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoTranscode.prototype, "status", void 0);
    return OnDemandPageVideoTranscode;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoTranscode = OnDemandPageVideoTranscode;
var OnDemandPageVideoUploadApproachEnum;
(function (OnDemandPageVideoUploadApproachEnum) {
    OnDemandPageVideoUploadApproachEnum["Post"] = "post";
    OnDemandPageVideoUploadApproachEnum["Pull"] = "pull";
    OnDemandPageVideoUploadApproachEnum["Streaming"] = "streaming";
    OnDemandPageVideoUploadApproachEnum["Tus"] = "tus";
})(OnDemandPageVideoUploadApproachEnum = exports.OnDemandPageVideoUploadApproachEnum || (exports.OnDemandPageVideoUploadApproachEnum = {}));
var OnDemandPageVideoUploadStatusEnum;
(function (OnDemandPageVideoUploadStatusEnum) {
    OnDemandPageVideoUploadStatusEnum["Complete"] = "complete";
    OnDemandPageVideoUploadStatusEnum["Error"] = "error";
    OnDemandPageVideoUploadStatusEnum["InProgress"] = "in_progress";
})(OnDemandPageVideoUploadStatusEnum = exports.OnDemandPageVideoUploadStatusEnum || (exports.OnDemandPageVideoUploadStatusEnum = {}));
// OnDemandPageVideoUpload
/**
 * The upload information for this video.
**/
var OnDemandPageVideoUpload = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUpload, _super);
    function OnDemandPageVideoUpload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approach" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUpload.prototype, "approach", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=complete_uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUpload.prototype, "completeUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=form" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUpload.prototype, "form", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUpload.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=redirect_url" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUpload.prototype, "redirectUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUpload.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUpload.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upload_link" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUpload.prototype, "uploadLink", void 0);
    return OnDemandPageVideoUpload;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUpload = OnDemandPageVideoUpload;
var OnDemandPageVideoUserAccountEnum;
(function (OnDemandPageVideoUserAccountEnum) {
    OnDemandPageVideoUserAccountEnum["Basic"] = "basic";
    OnDemandPageVideoUserAccountEnum["Business"] = "business";
    OnDemandPageVideoUserAccountEnum["LiveBusiness"] = "live_business";
    OnDemandPageVideoUserAccountEnum["LivePremium"] = "live_premium";
    OnDemandPageVideoUserAccountEnum["LivePro"] = "live_pro";
    OnDemandPageVideoUserAccountEnum["Plus"] = "plus";
    OnDemandPageVideoUserAccountEnum["Pro"] = "pro";
    OnDemandPageVideoUserAccountEnum["ProUnlimited"] = "pro_unlimited";
    OnDemandPageVideoUserAccountEnum["Producer"] = "producer";
})(OnDemandPageVideoUserAccountEnum = exports.OnDemandPageVideoUserAccountEnum || (exports.OnDemandPageVideoUserAccountEnum = {}));
// OnDemandPageVideoUserMetadataConnectionsAlbums
/**
 * Information about the albums created by this user.
**/
var OnDemandPageVideoUserMetadataConnectionsAlbums = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadataConnectionsAlbums, _super);
    function OnDemandPageVideoUserMetadataConnectionsAlbums() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUserMetadataConnectionsAlbums.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserMetadataConnectionsAlbums.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserMetadataConnectionsAlbums.prototype, "uri", void 0);
    return OnDemandPageVideoUserMetadataConnectionsAlbums;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadataConnectionsAlbums = OnDemandPageVideoUserMetadataConnectionsAlbums;
// OnDemandPageVideoUserMetadataConnectionsAppearances
/**
 * Information about the appearances of this user in other videos.
**/
var OnDemandPageVideoUserMetadataConnectionsAppearances = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadataConnectionsAppearances, _super);
    function OnDemandPageVideoUserMetadataConnectionsAppearances() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUserMetadataConnectionsAppearances.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserMetadataConnectionsAppearances.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserMetadataConnectionsAppearances.prototype, "uri", void 0);
    return OnDemandPageVideoUserMetadataConnectionsAppearances;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadataConnectionsAppearances = OnDemandPageVideoUserMetadataConnectionsAppearances;
// OnDemandPageVideoUserMetadataConnectionsBlock
/**
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
var OnDemandPageVideoUserMetadataConnectionsBlock = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadataConnectionsBlock, _super);
    function OnDemandPageVideoUserMetadataConnectionsBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUserMetadataConnectionsBlock.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserMetadataConnectionsBlock.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserMetadataConnectionsBlock.prototype, "uri", void 0);
    return OnDemandPageVideoUserMetadataConnectionsBlock;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadataConnectionsBlock = OnDemandPageVideoUserMetadataConnectionsBlock;
// OnDemandPageVideoUserMetadataConnectionsCategories
/**
 * Information about this user's followed categories.
**/
var OnDemandPageVideoUserMetadataConnectionsCategories = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadataConnectionsCategories, _super);
    function OnDemandPageVideoUserMetadataConnectionsCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUserMetadataConnectionsCategories.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserMetadataConnectionsCategories.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserMetadataConnectionsCategories.prototype, "uri", void 0);
    return OnDemandPageVideoUserMetadataConnectionsCategories;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadataConnectionsCategories = OnDemandPageVideoUserMetadataConnectionsCategories;
// OnDemandPageVideoUserMetadataConnectionsChannels
/**
 * Information about this user's subscribed channels.
**/
var OnDemandPageVideoUserMetadataConnectionsChannels = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadataConnectionsChannels, _super);
    function OnDemandPageVideoUserMetadataConnectionsChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUserMetadataConnectionsChannels.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserMetadataConnectionsChannels.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserMetadataConnectionsChannels.prototype, "uri", void 0);
    return OnDemandPageVideoUserMetadataConnectionsChannels;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadataConnectionsChannels = OnDemandPageVideoUserMetadataConnectionsChannels;
// OnDemandPageVideoUserMetadataConnectionsFeed
/**
 * Information about this user's feed.
**/
var OnDemandPageVideoUserMetadataConnectionsFeed = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadataConnectionsFeed, _super);
    function OnDemandPageVideoUserMetadataConnectionsFeed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUserMetadataConnectionsFeed.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserMetadataConnectionsFeed.prototype, "uri", void 0);
    return OnDemandPageVideoUserMetadataConnectionsFeed;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadataConnectionsFeed = OnDemandPageVideoUserMetadataConnectionsFeed;
// OnDemandPageVideoUserMetadataConnectionsFolders
/**
 * Information about this user's folders.
**/
var OnDemandPageVideoUserMetadataConnectionsFolders = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadataConnectionsFolders, _super);
    function OnDemandPageVideoUserMetadataConnectionsFolders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUserMetadataConnectionsFolders.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserMetadataConnectionsFolders.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserMetadataConnectionsFolders.prototype, "uri", void 0);
    return OnDemandPageVideoUserMetadataConnectionsFolders;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadataConnectionsFolders = OnDemandPageVideoUserMetadataConnectionsFolders;
// OnDemandPageVideoUserMetadataConnectionsFollowers
/**
 * Information about the user's followers.
**/
var OnDemandPageVideoUserMetadataConnectionsFollowers = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadataConnectionsFollowers, _super);
    function OnDemandPageVideoUserMetadataConnectionsFollowers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUserMetadataConnectionsFollowers.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserMetadataConnectionsFollowers.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserMetadataConnectionsFollowers.prototype, "uri", void 0);
    return OnDemandPageVideoUserMetadataConnectionsFollowers;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadataConnectionsFollowers = OnDemandPageVideoUserMetadataConnectionsFollowers;
// OnDemandPageVideoUserMetadataConnectionsFollowing
/**
 * Information about the users that the current user is following.
**/
var OnDemandPageVideoUserMetadataConnectionsFollowing = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadataConnectionsFollowing, _super);
    function OnDemandPageVideoUserMetadataConnectionsFollowing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUserMetadataConnectionsFollowing.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserMetadataConnectionsFollowing.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserMetadataConnectionsFollowing.prototype, "uri", void 0);
    return OnDemandPageVideoUserMetadataConnectionsFollowing;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadataConnectionsFollowing = OnDemandPageVideoUserMetadataConnectionsFollowing;
// OnDemandPageVideoUserMetadataConnectionsGroups
/**
 * Information about the groups created by this user.
**/
var OnDemandPageVideoUserMetadataConnectionsGroups = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadataConnectionsGroups, _super);
    function OnDemandPageVideoUserMetadataConnectionsGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUserMetadataConnectionsGroups.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserMetadataConnectionsGroups.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserMetadataConnectionsGroups.prototype, "uri", void 0);
    return OnDemandPageVideoUserMetadataConnectionsGroups;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadataConnectionsGroups = OnDemandPageVideoUserMetadataConnectionsGroups;
// OnDemandPageVideoUserMetadataConnectionsLikes
/**
 * Information about the videos that this user has liked.
**/
var OnDemandPageVideoUserMetadataConnectionsLikes = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadataConnectionsLikes, _super);
    function OnDemandPageVideoUserMetadataConnectionsLikes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUserMetadataConnectionsLikes.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserMetadataConnectionsLikes.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserMetadataConnectionsLikes.prototype, "uri", void 0);
    return OnDemandPageVideoUserMetadataConnectionsLikes;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadataConnectionsLikes = OnDemandPageVideoUserMetadataConnectionsLikes;
// OnDemandPageVideoUserMetadataConnectionsModeratedChannels
/**
 * Information about the channels that this user moderates.
**/
var OnDemandPageVideoUserMetadataConnectionsModeratedChannels = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadataConnectionsModeratedChannels, _super);
    function OnDemandPageVideoUserMetadataConnectionsModeratedChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUserMetadataConnectionsModeratedChannels.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserMetadataConnectionsModeratedChannels.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserMetadataConnectionsModeratedChannels.prototype, "uri", void 0);
    return OnDemandPageVideoUserMetadataConnectionsModeratedChannels;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadataConnectionsModeratedChannels = OnDemandPageVideoUserMetadataConnectionsModeratedChannels;
// OnDemandPageVideoUserMetadataConnectionsPictures
/**
 * Information about this user's portraits.
**/
var OnDemandPageVideoUserMetadataConnectionsPictures = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadataConnectionsPictures, _super);
    function OnDemandPageVideoUserMetadataConnectionsPictures() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUserMetadataConnectionsPictures.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserMetadataConnectionsPictures.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserMetadataConnectionsPictures.prototype, "uri", void 0);
    return OnDemandPageVideoUserMetadataConnectionsPictures;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadataConnectionsPictures = OnDemandPageVideoUserMetadataConnectionsPictures;
// OnDemandPageVideoUserMetadataConnectionsPortfolios
/**
 * Information about this user's portfolios.
**/
var OnDemandPageVideoUserMetadataConnectionsPortfolios = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadataConnectionsPortfolios, _super);
    function OnDemandPageVideoUserMetadataConnectionsPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUserMetadataConnectionsPortfolios.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserMetadataConnectionsPortfolios.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserMetadataConnectionsPortfolios.prototype, "uri", void 0);
    return OnDemandPageVideoUserMetadataConnectionsPortfolios;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadataConnectionsPortfolios = OnDemandPageVideoUserMetadataConnectionsPortfolios;
// OnDemandPageVideoUserMetadataConnectionsRecommendedChannels
/**
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
var OnDemandPageVideoUserMetadataConnectionsRecommendedChannels = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadataConnectionsRecommendedChannels, _super);
    function OnDemandPageVideoUserMetadataConnectionsRecommendedChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUserMetadataConnectionsRecommendedChannels.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserMetadataConnectionsRecommendedChannels.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserMetadataConnectionsRecommendedChannels.prototype, "uri", void 0);
    return OnDemandPageVideoUserMetadataConnectionsRecommendedChannels;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadataConnectionsRecommendedChannels = OnDemandPageVideoUserMetadataConnectionsRecommendedChannels;
// OnDemandPageVideoUserMetadataConnectionsRecommendedUsers
/**
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
var OnDemandPageVideoUserMetadataConnectionsRecommendedUsers = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadataConnectionsRecommendedUsers, _super);
    function OnDemandPageVideoUserMetadataConnectionsRecommendedUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUserMetadataConnectionsRecommendedUsers.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserMetadataConnectionsRecommendedUsers.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserMetadataConnectionsRecommendedUsers.prototype, "uri", void 0);
    return OnDemandPageVideoUserMetadataConnectionsRecommendedUsers;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadataConnectionsRecommendedUsers = OnDemandPageVideoUserMetadataConnectionsRecommendedUsers;
// OnDemandPageVideoUserMetadataConnectionsShared
/**
 * Information about the videos that have been shared with this user.
**/
var OnDemandPageVideoUserMetadataConnectionsShared = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadataConnectionsShared, _super);
    function OnDemandPageVideoUserMetadataConnectionsShared() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUserMetadataConnectionsShared.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserMetadataConnectionsShared.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserMetadataConnectionsShared.prototype, "uri", void 0);
    return OnDemandPageVideoUserMetadataConnectionsShared;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadataConnectionsShared = OnDemandPageVideoUserMetadataConnectionsShared;
// OnDemandPageVideoUserMetadataConnectionsVideos
/**
 * Information about the videos uploaded by this user.
**/
var OnDemandPageVideoUserMetadataConnectionsVideos = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadataConnectionsVideos, _super);
    function OnDemandPageVideoUserMetadataConnectionsVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUserMetadataConnectionsVideos.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserMetadataConnectionsVideos.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserMetadataConnectionsVideos.prototype, "uri", void 0);
    return OnDemandPageVideoUserMetadataConnectionsVideos;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadataConnectionsVideos = OnDemandPageVideoUserMetadataConnectionsVideos;
// OnDemandPageVideoUserMetadataConnectionsWatchedVideos
/**
 * Information about the videos that this user has watched.
**/
var OnDemandPageVideoUserMetadataConnectionsWatchedVideos = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadataConnectionsWatchedVideos, _super);
    function OnDemandPageVideoUserMetadataConnectionsWatchedVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUserMetadataConnectionsWatchedVideos.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserMetadataConnectionsWatchedVideos.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserMetadataConnectionsWatchedVideos.prototype, "uri", void 0);
    return OnDemandPageVideoUserMetadataConnectionsWatchedVideos;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadataConnectionsWatchedVideos = OnDemandPageVideoUserMetadataConnectionsWatchedVideos;
// OnDemandPageVideoUserMetadataConnectionsWatchlater
/**
 * Information about the videos that this user wants to watch later.
**/
var OnDemandPageVideoUserMetadataConnectionsWatchlater = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadataConnectionsWatchlater, _super);
    function OnDemandPageVideoUserMetadataConnectionsWatchlater() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUserMetadataConnectionsWatchlater.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserMetadataConnectionsWatchlater.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserMetadataConnectionsWatchlater.prototype, "uri", void 0);
    return OnDemandPageVideoUserMetadataConnectionsWatchlater;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadataConnectionsWatchlater = OnDemandPageVideoUserMetadataConnectionsWatchlater;
// OnDemandPageVideoUserMetadataConnections
/**
 * The list of resource URIs related to the user.
**/
var OnDemandPageVideoUserMetadataConnections = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadataConnections, _super);
    function OnDemandPageVideoUserMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=albums" }),
        __metadata("design:type", OnDemandPageVideoUserMetadataConnectionsAlbums)
    ], OnDemandPageVideoUserMetadataConnections.prototype, "albums", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appearances" }),
        __metadata("design:type", OnDemandPageVideoUserMetadataConnectionsAppearances)
    ], OnDemandPageVideoUserMetadataConnections.prototype, "appearances", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=block" }),
        __metadata("design:type", OnDemandPageVideoUserMetadataConnectionsBlock)
    ], OnDemandPageVideoUserMetadataConnections.prototype, "block", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categories" }),
        __metadata("design:type", OnDemandPageVideoUserMetadataConnectionsCategories)
    ], OnDemandPageVideoUserMetadataConnections.prototype, "categories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channels" }),
        __metadata("design:type", OnDemandPageVideoUserMetadataConnectionsChannels)
    ], OnDemandPageVideoUserMetadataConnections.prototype, "channels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=feed" }),
        __metadata("design:type", OnDemandPageVideoUserMetadataConnectionsFeed)
    ], OnDemandPageVideoUserMetadataConnections.prototype, "feed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=folders" }),
        __metadata("design:type", OnDemandPageVideoUserMetadataConnectionsFolders)
    ], OnDemandPageVideoUserMetadataConnections.prototype, "folders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=followers" }),
        __metadata("design:type", OnDemandPageVideoUserMetadataConnectionsFollowers)
    ], OnDemandPageVideoUserMetadataConnections.prototype, "followers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=following" }),
        __metadata("design:type", OnDemandPageVideoUserMetadataConnectionsFollowing)
    ], OnDemandPageVideoUserMetadataConnections.prototype, "following", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=groups" }),
        __metadata("design:type", OnDemandPageVideoUserMetadataConnectionsGroups)
    ], OnDemandPageVideoUserMetadataConnections.prototype, "groups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=likes" }),
        __metadata("design:type", OnDemandPageVideoUserMetadataConnectionsLikes)
    ], OnDemandPageVideoUserMetadataConnections.prototype, "likes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=moderated_channels" }),
        __metadata("design:type", OnDemandPageVideoUserMetadataConnectionsModeratedChannels)
    ], OnDemandPageVideoUserMetadataConnections.prototype, "moderatedChannels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pictures" }),
        __metadata("design:type", OnDemandPageVideoUserMetadataConnectionsPictures)
    ], OnDemandPageVideoUserMetadataConnections.prototype, "pictures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portfolios" }),
        __metadata("design:type", OnDemandPageVideoUserMetadataConnectionsPortfolios)
    ], OnDemandPageVideoUserMetadataConnections.prototype, "portfolios", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recommended_channels" }),
        __metadata("design:type", OnDemandPageVideoUserMetadataConnectionsRecommendedChannels)
    ], OnDemandPageVideoUserMetadataConnections.prototype, "recommendedChannels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recommended_users" }),
        __metadata("design:type", OnDemandPageVideoUserMetadataConnectionsRecommendedUsers)
    ], OnDemandPageVideoUserMetadataConnections.prototype, "recommendedUsers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shared" }),
        __metadata("design:type", OnDemandPageVideoUserMetadataConnectionsShared)
    ], OnDemandPageVideoUserMetadataConnections.prototype, "shared", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=videos" }),
        __metadata("design:type", OnDemandPageVideoUserMetadataConnectionsVideos)
    ], OnDemandPageVideoUserMetadataConnections.prototype, "videos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=watched_videos" }),
        __metadata("design:type", OnDemandPageVideoUserMetadataConnectionsWatchedVideos)
    ], OnDemandPageVideoUserMetadataConnections.prototype, "watchedVideos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=watchlater" }),
        __metadata("design:type", OnDemandPageVideoUserMetadataConnectionsWatchlater)
    ], OnDemandPageVideoUserMetadataConnections.prototype, "watchlater", void 0);
    return OnDemandPageVideoUserMetadataConnections;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadataConnections = OnDemandPageVideoUserMetadataConnections;
var OnDemandPageVideoUserMetadataInteractionsAddPrivacyUser = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadataInteractionsAddPrivacyUser, _super);
    function OnDemandPageVideoUserMetadataInteractionsAddPrivacyUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUserMetadataInteractionsAddPrivacyUser.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserMetadataInteractionsAddPrivacyUser.prototype, "uri", void 0);
    return OnDemandPageVideoUserMetadataInteractionsAddPrivacyUser;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadataInteractionsAddPrivacyUser = OnDemandPageVideoUserMetadataInteractionsAddPrivacyUser;
// OnDemandPageVideoUserMetadataInteractionsBlock
/**
 * Information related to the block status of this user.
**/
var OnDemandPageVideoUserMetadataInteractionsBlock = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadataInteractionsBlock, _super);
    function OnDemandPageVideoUserMetadataInteractionsBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], OnDemandPageVideoUserMetadataInteractionsBlock.prototype, "added", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=added_time" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserMetadataInteractionsBlock.prototype, "addedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUserMetadataInteractionsBlock.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserMetadataInteractionsBlock.prototype, "uri", void 0);
    return OnDemandPageVideoUserMetadataInteractionsBlock;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadataInteractionsBlock = OnDemandPageVideoUserMetadataInteractionsBlock;
// OnDemandPageVideoUserMetadataInteractionsFollow
/**
 * Information related to the followed status of this user.
**/
var OnDemandPageVideoUserMetadataInteractionsFollow = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadataInteractionsFollow, _super);
    function OnDemandPageVideoUserMetadataInteractionsFollow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], OnDemandPageVideoUserMetadataInteractionsFollow.prototype, "added", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUserMetadataInteractionsFollow.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserMetadataInteractionsFollow.prototype, "uri", void 0);
    return OnDemandPageVideoUserMetadataInteractionsFollow;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadataInteractionsFollow = OnDemandPageVideoUserMetadataInteractionsFollow;
// OnDemandPageVideoUserMetadataInteractionsReport
/**
 * Information regarding where and how to report a user.
**/
var OnDemandPageVideoUserMetadataInteractionsReport = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadataInteractionsReport, _super);
    function OnDemandPageVideoUserMetadataInteractionsReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUserMetadataInteractionsReport.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reason" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUserMetadataInteractionsReport.prototype, "reason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserMetadataInteractionsReport.prototype, "uri", void 0);
    return OnDemandPageVideoUserMetadataInteractionsReport;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadataInteractionsReport = OnDemandPageVideoUserMetadataInteractionsReport;
var OnDemandPageVideoUserMetadataInteractions = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadataInteractions, _super);
    function OnDemandPageVideoUserMetadataInteractions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=add_privacy_user" }),
        __metadata("design:type", OnDemandPageVideoUserMetadataInteractionsAddPrivacyUser)
    ], OnDemandPageVideoUserMetadataInteractions.prototype, "addPrivacyUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=block" }),
        __metadata("design:type", OnDemandPageVideoUserMetadataInteractionsBlock)
    ], OnDemandPageVideoUserMetadataInteractions.prototype, "block", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=follow" }),
        __metadata("design:type", OnDemandPageVideoUserMetadataInteractionsFollow)
    ], OnDemandPageVideoUserMetadataInteractions.prototype, "follow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=report" }),
        __metadata("design:type", OnDemandPageVideoUserMetadataInteractionsReport)
    ], OnDemandPageVideoUserMetadataInteractions.prototype, "report", void 0);
    return OnDemandPageVideoUserMetadataInteractions;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadataInteractions = OnDemandPageVideoUserMetadataInteractions;
// OnDemandPageVideoUserMetadata
/**
 * The user's metadata.
**/
var OnDemandPageVideoUserMetadata = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserMetadata, _super);
    function OnDemandPageVideoUserMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connections" }),
        __metadata("design:type", OnDemandPageVideoUserMetadataConnections)
    ], OnDemandPageVideoUserMetadata.prototype, "connections", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interactions" }),
        __metadata("design:type", OnDemandPageVideoUserMetadataInteractions)
    ], OnDemandPageVideoUserMetadata.prototype, "interactions", void 0);
    return OnDemandPageVideoUserMetadata;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserMetadata = OnDemandPageVideoUserMetadata;
var OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum;
(function (OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum) {
    OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum["Anybody"] = "anybody";
    OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum["Contacts"] = "contacts";
    OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum["Nobody"] = "nobody";
})(OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum = exports.OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum || (exports.OnDemandPageVideoUserPreferencesVideosPrivacyCommentsEnum = {}));
var OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum;
(function (OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum) {
    OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum["Private"] = "private";
    OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum["Public"] = "public";
    OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum["Whitelist"] = "whitelist";
})(OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum = exports.OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum || (exports.OnDemandPageVideoUserPreferencesVideosPrivacyEmbedEnum = {}));
var OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum;
(function (OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum) {
    OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum["Anybody"] = "anybody";
    OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum["Contacts"] = "contacts";
    OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum["Disable"] = "disable";
    OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum["Nobody"] = "nobody";
    OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum["Password"] = "password";
    OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum["Unlisted"] = "unlisted";
    OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum["Users"] = "users";
})(OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum = exports.OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum || (exports.OnDemandPageVideoUserPreferencesVideosPrivacyViewEnum = {}));
var OnDemandPageVideoUserPreferencesVideosPrivacy = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserPreferencesVideosPrivacy, _super);
    function OnDemandPageVideoUserPreferencesVideosPrivacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=add" }),
        __metadata("design:type", Boolean)
    ], OnDemandPageVideoUserPreferencesVideosPrivacy.prototype, "add", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserPreferencesVideosPrivacy.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], OnDemandPageVideoUserPreferencesVideosPrivacy.prototype, "download", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserPreferencesVideosPrivacy.prototype, "embed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=view" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserPreferencesVideosPrivacy.prototype, "view", void 0);
    return OnDemandPageVideoUserPreferencesVideosPrivacy;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserPreferencesVideosPrivacy = OnDemandPageVideoUserPreferencesVideosPrivacy;
var OnDemandPageVideoUserPreferencesVideos = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserPreferencesVideos, _super);
    function OnDemandPageVideoUserPreferencesVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privacy" }),
        __metadata("design:type", OnDemandPageVideoUserPreferencesVideosPrivacy)
    ], OnDemandPageVideoUserPreferencesVideos.prototype, "privacy", void 0);
    return OnDemandPageVideoUserPreferencesVideos;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserPreferencesVideos = OnDemandPageVideoUserPreferencesVideos;
var OnDemandPageVideoUserPreferences = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserPreferences, _super);
    function OnDemandPageVideoUserPreferences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=videos" }),
        __metadata("design:type", OnDemandPageVideoUserPreferencesVideos)
    ], OnDemandPageVideoUserPreferences.prototype, "videos", void 0);
    return OnDemandPageVideoUserPreferences;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserPreferences = OnDemandPageVideoUserPreferences;
// OnDemandPageVideoUserUploadQuotaLifetime
/**
 * Information about the user's lifetime upload usage.
**/
var OnDemandPageVideoUserUploadQuotaLifetime = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserUploadQuotaLifetime, _super);
    function OnDemandPageVideoUserUploadQuotaLifetime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserUploadQuotaLifetime.prototype, "free", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserUploadQuotaLifetime.prototype, "max", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserUploadQuotaLifetime.prototype, "used", void 0);
    return OnDemandPageVideoUserUploadQuotaLifetime;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserUploadQuotaLifetime = OnDemandPageVideoUserUploadQuotaLifetime;
// OnDemandPageVideoUserUploadQuotaPeriodic
/**
 * Information about the user's usage for the current period.
**/
var OnDemandPageVideoUserUploadQuotaPeriodic = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserUploadQuotaPeriodic, _super);
    function OnDemandPageVideoUserUploadQuotaPeriodic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserUploadQuotaPeriodic.prototype, "free", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserUploadQuotaPeriodic.prototype, "max", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reset_date" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserUploadQuotaPeriodic.prototype, "resetDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserUploadQuotaPeriodic.prototype, "used", void 0);
    return OnDemandPageVideoUserUploadQuotaPeriodic;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserUploadQuotaPeriodic = OnDemandPageVideoUserUploadQuotaPeriodic;
var OnDemandPageVideoUserUploadQuotaSpaceShowingEnum;
(function (OnDemandPageVideoUserUploadQuotaSpaceShowingEnum) {
    OnDemandPageVideoUserUploadQuotaSpaceShowingEnum["Lifetime"] = "lifetime";
    OnDemandPageVideoUserUploadQuotaSpaceShowingEnum["Periodic"] = "periodic";
})(OnDemandPageVideoUserUploadQuotaSpaceShowingEnum = exports.OnDemandPageVideoUserUploadQuotaSpaceShowingEnum || (exports.OnDemandPageVideoUserUploadQuotaSpaceShowingEnum = {}));
// OnDemandPageVideoUserUploadQuotaSpace
/**
 * Information about the user's upload space remaining for the current period.
**/
var OnDemandPageVideoUserUploadQuotaSpace = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserUploadQuotaSpace, _super);
    function OnDemandPageVideoUserUploadQuotaSpace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserUploadQuotaSpace.prototype, "free", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserUploadQuotaSpace.prototype, "max", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=showing" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserUploadQuotaSpace.prototype, "showing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideoUserUploadQuotaSpace.prototype, "used", void 0);
    return OnDemandPageVideoUserUploadQuotaSpace;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserUploadQuotaSpace = OnDemandPageVideoUserUploadQuotaSpace;
// OnDemandPageVideoUserUploadQuota
/**
 * Appears only when the user has upload access and is looking at their own user record.
**/
var OnDemandPageVideoUserUploadQuota = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserUploadQuota, _super);
    function OnDemandPageVideoUserUploadQuota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lifetime" }),
        __metadata("design:type", OnDemandPageVideoUserUploadQuotaLifetime)
    ], OnDemandPageVideoUserUploadQuota.prototype, "lifetime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=periodic" }),
        __metadata("design:type", OnDemandPageVideoUserUploadQuotaPeriodic)
    ], OnDemandPageVideoUserUploadQuota.prototype, "periodic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=space" }),
        __metadata("design:type", OnDemandPageVideoUserUploadQuotaSpace)
    ], OnDemandPageVideoUserUploadQuota.prototype, "space", void 0);
    return OnDemandPageVideoUserUploadQuota;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserUploadQuota = OnDemandPageVideoUserUploadQuota;
var OnDemandPageVideoUserWebsites = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUserWebsites, _super);
    function OnDemandPageVideoUserWebsites() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserWebsites.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserWebsites.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUserWebsites.prototype, "name", void 0);
    return OnDemandPageVideoUserWebsites;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUserWebsites = OnDemandPageVideoUserWebsites;
// OnDemandPageVideoUser
/**
 * The video owner.
**/
var OnDemandPageVideoUser = /** @class */ (function (_super) {
    __extends(OnDemandPageVideoUser, _super);
    function OnDemandPageVideoUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUser.prototype, "account", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bio" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUser.prototype, "bio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content_filter" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUser.prototype, "contentFilter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUser.prototype, "createdTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUser.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUser.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUser.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", OnDemandPageVideoUserMetadata)
    ], OnDemandPageVideoUser.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUser.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pictures" }),
        __metadata("design:type", picture_1.Picture)
    ], OnDemandPageVideoUser.prototype, "pictures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preferences" }),
        __metadata("design:type", OnDemandPageVideoUserPreferences)
    ], OnDemandPageVideoUser.prototype, "preferences", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUser.prototype, "resourceKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upload_quota" }),
        __metadata("design:type", OnDemandPageVideoUserUploadQuota)
    ], OnDemandPageVideoUser.prototype, "uploadQuota", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideoUser.prototype, "uri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=websites", elemType: OnDemandPageVideoUserWebsites }),
        __metadata("design:type", Array)
    ], OnDemandPageVideoUser.prototype, "websites", void 0);
    return OnDemandPageVideoUser;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideoUser = OnDemandPageVideoUser;
// OnDemandPageVideo
/**
 * The trailer for this On Demand page.
**/
var OnDemandPageVideo = /** @class */ (function (_super) {
    __extends(OnDemandPageVideo, _super);
    function OnDemandPageVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categories", elemType: category_1.Category }),
        __metadata("design:type", Array)
    ], OnDemandPageVideo.prototype, "categories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content_rating" }),
        __metadata("design:type", Array)
    ], OnDemandPageVideo.prototype, "contentRating", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=context" }),
        __metadata("design:type", OnDemandPageVideoContext)
    ], OnDemandPageVideo.prototype, "context", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], OnDemandPageVideo.prototype, "createdTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], OnDemandPageVideo.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideo.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed" }),
        __metadata("design:type", embedsettings_1.EmbedSettings)
    ], OnDemandPageVideo.prototype, "embed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideo.prototype, "height", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], OnDemandPageVideo.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_user_action_event_date" }),
        __metadata("design:type", String)
    ], OnDemandPageVideo.prototype, "lastUserActionEventDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=license" }),
        __metadata("design:type", String)
    ], OnDemandPageVideo.prototype, "license", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], OnDemandPageVideo.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", OnDemandPageVideoMetadata)
    ], OnDemandPageVideo.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified_time" }),
        __metadata("design:type", String)
    ], OnDemandPageVideo.prototype, "modifiedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OnDemandPageVideo.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parent_folder" }),
        __metadata("design:type", OnDemandPageVideoProject)
    ], OnDemandPageVideo.prototype, "parentFolder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], OnDemandPageVideo.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pictures" }),
        __metadata("design:type", picture_1.Picture)
    ], OnDemandPageVideo.prototype, "pictures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privacy" }),
        __metadata("design:type", OnDemandPageVideoPrivacy)
    ], OnDemandPageVideo.prototype, "privacy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=release_time" }),
        __metadata("design:type", String)
    ], OnDemandPageVideo.prototype, "releaseTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], OnDemandPageVideo.prototype, "resourceKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spatial" }),
        __metadata("design:type", OnDemandPageVideoSpatial)
    ], OnDemandPageVideo.prototype, "spatial", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stats" }),
        __metadata("design:type", OnDemandPageVideoStats)
    ], OnDemandPageVideo.prototype, "stats", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], OnDemandPageVideo.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags", elemType: tag_1.Tag }),
        __metadata("design:type", Array)
    ], OnDemandPageVideo.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transcode" }),
        __metadata("design:type", OnDemandPageVideoTranscode)
    ], OnDemandPageVideo.prototype, "transcode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upload" }),
        __metadata("design:type", OnDemandPageVideoUpload)
    ], OnDemandPageVideo.prototype, "upload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageVideo.prototype, "uri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", OnDemandPageVideoUser)
    ], OnDemandPageVideo.prototype, "user", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], OnDemandPageVideo.prototype, "width", void 0);
    return OnDemandPageVideo;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageVideo = OnDemandPageVideo;
var OnDemandPageTypeEnum;
(function (OnDemandPageTypeEnum) {
    OnDemandPageTypeEnum["Film"] = "film";
    OnDemandPageTypeEnum["Series"] = "series";
})(OnDemandPageTypeEnum = exports.OnDemandPageTypeEnum || (exports.OnDemandPageTypeEnum = {}));
var OnDemandPageUserAccountEnum;
(function (OnDemandPageUserAccountEnum) {
    OnDemandPageUserAccountEnum["Basic"] = "basic";
    OnDemandPageUserAccountEnum["Business"] = "business";
    OnDemandPageUserAccountEnum["LiveBusiness"] = "live_business";
    OnDemandPageUserAccountEnum["LivePremium"] = "live_premium";
    OnDemandPageUserAccountEnum["LivePro"] = "live_pro";
    OnDemandPageUserAccountEnum["Plus"] = "plus";
    OnDemandPageUserAccountEnum["Pro"] = "pro";
    OnDemandPageUserAccountEnum["ProUnlimited"] = "pro_unlimited";
    OnDemandPageUserAccountEnum["Producer"] = "producer";
})(OnDemandPageUserAccountEnum = exports.OnDemandPageUserAccountEnum || (exports.OnDemandPageUserAccountEnum = {}));
// OnDemandPageUserMetadataConnectionsAlbums
/**
 * Information about the albums created by this user.
**/
var OnDemandPageUserMetadataConnectionsAlbums = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadataConnectionsAlbums, _super);
    function OnDemandPageUserMetadataConnectionsAlbums() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageUserMetadataConnectionsAlbums.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserMetadataConnectionsAlbums.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageUserMetadataConnectionsAlbums.prototype, "uri", void 0);
    return OnDemandPageUserMetadataConnectionsAlbums;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadataConnectionsAlbums = OnDemandPageUserMetadataConnectionsAlbums;
// OnDemandPageUserMetadataConnectionsAppearances
/**
 * Information about the appearances of this user in other videos.
**/
var OnDemandPageUserMetadataConnectionsAppearances = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadataConnectionsAppearances, _super);
    function OnDemandPageUserMetadataConnectionsAppearances() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageUserMetadataConnectionsAppearances.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserMetadataConnectionsAppearances.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageUserMetadataConnectionsAppearances.prototype, "uri", void 0);
    return OnDemandPageUserMetadataConnectionsAppearances;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadataConnectionsAppearances = OnDemandPageUserMetadataConnectionsAppearances;
// OnDemandPageUserMetadataConnectionsBlock
/**
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
var OnDemandPageUserMetadataConnectionsBlock = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadataConnectionsBlock, _super);
    function OnDemandPageUserMetadataConnectionsBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageUserMetadataConnectionsBlock.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserMetadataConnectionsBlock.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageUserMetadataConnectionsBlock.prototype, "uri", void 0);
    return OnDemandPageUserMetadataConnectionsBlock;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadataConnectionsBlock = OnDemandPageUserMetadataConnectionsBlock;
// OnDemandPageUserMetadataConnectionsCategories
/**
 * Information about this user's followed categories.
**/
var OnDemandPageUserMetadataConnectionsCategories = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadataConnectionsCategories, _super);
    function OnDemandPageUserMetadataConnectionsCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageUserMetadataConnectionsCategories.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserMetadataConnectionsCategories.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageUserMetadataConnectionsCategories.prototype, "uri", void 0);
    return OnDemandPageUserMetadataConnectionsCategories;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadataConnectionsCategories = OnDemandPageUserMetadataConnectionsCategories;
// OnDemandPageUserMetadataConnectionsChannels
/**
 * Information about this user's subscribed channels.
**/
var OnDemandPageUserMetadataConnectionsChannels = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadataConnectionsChannels, _super);
    function OnDemandPageUserMetadataConnectionsChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageUserMetadataConnectionsChannels.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserMetadataConnectionsChannels.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageUserMetadataConnectionsChannels.prototype, "uri", void 0);
    return OnDemandPageUserMetadataConnectionsChannels;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadataConnectionsChannels = OnDemandPageUserMetadataConnectionsChannels;
// OnDemandPageUserMetadataConnectionsFeed
/**
 * Information about this user's feed.
**/
var OnDemandPageUserMetadataConnectionsFeed = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadataConnectionsFeed, _super);
    function OnDemandPageUserMetadataConnectionsFeed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageUserMetadataConnectionsFeed.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageUserMetadataConnectionsFeed.prototype, "uri", void 0);
    return OnDemandPageUserMetadataConnectionsFeed;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadataConnectionsFeed = OnDemandPageUserMetadataConnectionsFeed;
// OnDemandPageUserMetadataConnectionsFolders
/**
 * Information about this user's folders.
**/
var OnDemandPageUserMetadataConnectionsFolders = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadataConnectionsFolders, _super);
    function OnDemandPageUserMetadataConnectionsFolders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageUserMetadataConnectionsFolders.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserMetadataConnectionsFolders.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageUserMetadataConnectionsFolders.prototype, "uri", void 0);
    return OnDemandPageUserMetadataConnectionsFolders;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadataConnectionsFolders = OnDemandPageUserMetadataConnectionsFolders;
// OnDemandPageUserMetadataConnectionsFollowers
/**
 * Information about the user's followers.
**/
var OnDemandPageUserMetadataConnectionsFollowers = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadataConnectionsFollowers, _super);
    function OnDemandPageUserMetadataConnectionsFollowers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageUserMetadataConnectionsFollowers.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserMetadataConnectionsFollowers.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageUserMetadataConnectionsFollowers.prototype, "uri", void 0);
    return OnDemandPageUserMetadataConnectionsFollowers;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadataConnectionsFollowers = OnDemandPageUserMetadataConnectionsFollowers;
// OnDemandPageUserMetadataConnectionsFollowing
/**
 * Information about the users that the current user is following.
**/
var OnDemandPageUserMetadataConnectionsFollowing = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadataConnectionsFollowing, _super);
    function OnDemandPageUserMetadataConnectionsFollowing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageUserMetadataConnectionsFollowing.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserMetadataConnectionsFollowing.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageUserMetadataConnectionsFollowing.prototype, "uri", void 0);
    return OnDemandPageUserMetadataConnectionsFollowing;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadataConnectionsFollowing = OnDemandPageUserMetadataConnectionsFollowing;
// OnDemandPageUserMetadataConnectionsGroups
/**
 * Information about the groups created by this user.
**/
var OnDemandPageUserMetadataConnectionsGroups = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadataConnectionsGroups, _super);
    function OnDemandPageUserMetadataConnectionsGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageUserMetadataConnectionsGroups.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserMetadataConnectionsGroups.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageUserMetadataConnectionsGroups.prototype, "uri", void 0);
    return OnDemandPageUserMetadataConnectionsGroups;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadataConnectionsGroups = OnDemandPageUserMetadataConnectionsGroups;
// OnDemandPageUserMetadataConnectionsLikes
/**
 * Information about the videos that this user has liked.
**/
var OnDemandPageUserMetadataConnectionsLikes = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadataConnectionsLikes, _super);
    function OnDemandPageUserMetadataConnectionsLikes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageUserMetadataConnectionsLikes.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserMetadataConnectionsLikes.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageUserMetadataConnectionsLikes.prototype, "uri", void 0);
    return OnDemandPageUserMetadataConnectionsLikes;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadataConnectionsLikes = OnDemandPageUserMetadataConnectionsLikes;
// OnDemandPageUserMetadataConnectionsModeratedChannels
/**
 * Information about the channels that this user moderates.
**/
var OnDemandPageUserMetadataConnectionsModeratedChannels = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadataConnectionsModeratedChannels, _super);
    function OnDemandPageUserMetadataConnectionsModeratedChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageUserMetadataConnectionsModeratedChannels.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserMetadataConnectionsModeratedChannels.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageUserMetadataConnectionsModeratedChannels.prototype, "uri", void 0);
    return OnDemandPageUserMetadataConnectionsModeratedChannels;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadataConnectionsModeratedChannels = OnDemandPageUserMetadataConnectionsModeratedChannels;
// OnDemandPageUserMetadataConnectionsPictures
/**
 * Information about this user's portraits.
**/
var OnDemandPageUserMetadataConnectionsPictures = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadataConnectionsPictures, _super);
    function OnDemandPageUserMetadataConnectionsPictures() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageUserMetadataConnectionsPictures.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserMetadataConnectionsPictures.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageUserMetadataConnectionsPictures.prototype, "uri", void 0);
    return OnDemandPageUserMetadataConnectionsPictures;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadataConnectionsPictures = OnDemandPageUserMetadataConnectionsPictures;
// OnDemandPageUserMetadataConnectionsPortfolios
/**
 * Information about this user's portfolios.
**/
var OnDemandPageUserMetadataConnectionsPortfolios = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadataConnectionsPortfolios, _super);
    function OnDemandPageUserMetadataConnectionsPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageUserMetadataConnectionsPortfolios.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserMetadataConnectionsPortfolios.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageUserMetadataConnectionsPortfolios.prototype, "uri", void 0);
    return OnDemandPageUserMetadataConnectionsPortfolios;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadataConnectionsPortfolios = OnDemandPageUserMetadataConnectionsPortfolios;
// OnDemandPageUserMetadataConnectionsRecommendedChannels
/**
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
var OnDemandPageUserMetadataConnectionsRecommendedChannels = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadataConnectionsRecommendedChannels, _super);
    function OnDemandPageUserMetadataConnectionsRecommendedChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageUserMetadataConnectionsRecommendedChannels.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserMetadataConnectionsRecommendedChannels.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageUserMetadataConnectionsRecommendedChannels.prototype, "uri", void 0);
    return OnDemandPageUserMetadataConnectionsRecommendedChannels;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadataConnectionsRecommendedChannels = OnDemandPageUserMetadataConnectionsRecommendedChannels;
// OnDemandPageUserMetadataConnectionsRecommendedUsers
/**
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
var OnDemandPageUserMetadataConnectionsRecommendedUsers = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadataConnectionsRecommendedUsers, _super);
    function OnDemandPageUserMetadataConnectionsRecommendedUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageUserMetadataConnectionsRecommendedUsers.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserMetadataConnectionsRecommendedUsers.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageUserMetadataConnectionsRecommendedUsers.prototype, "uri", void 0);
    return OnDemandPageUserMetadataConnectionsRecommendedUsers;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadataConnectionsRecommendedUsers = OnDemandPageUserMetadataConnectionsRecommendedUsers;
// OnDemandPageUserMetadataConnectionsShared
/**
 * Information about the videos that have been shared with this user.
**/
var OnDemandPageUserMetadataConnectionsShared = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadataConnectionsShared, _super);
    function OnDemandPageUserMetadataConnectionsShared() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageUserMetadataConnectionsShared.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserMetadataConnectionsShared.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageUserMetadataConnectionsShared.prototype, "uri", void 0);
    return OnDemandPageUserMetadataConnectionsShared;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadataConnectionsShared = OnDemandPageUserMetadataConnectionsShared;
// OnDemandPageUserMetadataConnectionsVideos
/**
 * Information about the videos uploaded by this user.
**/
var OnDemandPageUserMetadataConnectionsVideos = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadataConnectionsVideos, _super);
    function OnDemandPageUserMetadataConnectionsVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageUserMetadataConnectionsVideos.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserMetadataConnectionsVideos.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageUserMetadataConnectionsVideos.prototype, "uri", void 0);
    return OnDemandPageUserMetadataConnectionsVideos;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadataConnectionsVideos = OnDemandPageUserMetadataConnectionsVideos;
// OnDemandPageUserMetadataConnectionsWatchedVideos
/**
 * Information about the videos that this user has watched.
**/
var OnDemandPageUserMetadataConnectionsWatchedVideos = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadataConnectionsWatchedVideos, _super);
    function OnDemandPageUserMetadataConnectionsWatchedVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageUserMetadataConnectionsWatchedVideos.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserMetadataConnectionsWatchedVideos.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageUserMetadataConnectionsWatchedVideos.prototype, "uri", void 0);
    return OnDemandPageUserMetadataConnectionsWatchedVideos;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadataConnectionsWatchedVideos = OnDemandPageUserMetadataConnectionsWatchedVideos;
// OnDemandPageUserMetadataConnectionsWatchlater
/**
 * Information about the videos that this user wants to watch later.
**/
var OnDemandPageUserMetadataConnectionsWatchlater = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadataConnectionsWatchlater, _super);
    function OnDemandPageUserMetadataConnectionsWatchlater() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageUserMetadataConnectionsWatchlater.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserMetadataConnectionsWatchlater.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageUserMetadataConnectionsWatchlater.prototype, "uri", void 0);
    return OnDemandPageUserMetadataConnectionsWatchlater;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadataConnectionsWatchlater = OnDemandPageUserMetadataConnectionsWatchlater;
// OnDemandPageUserMetadataConnections
/**
 * The list of resource URIs related to the user.
**/
var OnDemandPageUserMetadataConnections = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadataConnections, _super);
    function OnDemandPageUserMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=albums" }),
        __metadata("design:type", OnDemandPageUserMetadataConnectionsAlbums)
    ], OnDemandPageUserMetadataConnections.prototype, "albums", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appearances" }),
        __metadata("design:type", OnDemandPageUserMetadataConnectionsAppearances)
    ], OnDemandPageUserMetadataConnections.prototype, "appearances", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=block" }),
        __metadata("design:type", OnDemandPageUserMetadataConnectionsBlock)
    ], OnDemandPageUserMetadataConnections.prototype, "block", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categories" }),
        __metadata("design:type", OnDemandPageUserMetadataConnectionsCategories)
    ], OnDemandPageUserMetadataConnections.prototype, "categories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channels" }),
        __metadata("design:type", OnDemandPageUserMetadataConnectionsChannels)
    ], OnDemandPageUserMetadataConnections.prototype, "channels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=feed" }),
        __metadata("design:type", OnDemandPageUserMetadataConnectionsFeed)
    ], OnDemandPageUserMetadataConnections.prototype, "feed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=folders" }),
        __metadata("design:type", OnDemandPageUserMetadataConnectionsFolders)
    ], OnDemandPageUserMetadataConnections.prototype, "folders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=followers" }),
        __metadata("design:type", OnDemandPageUserMetadataConnectionsFollowers)
    ], OnDemandPageUserMetadataConnections.prototype, "followers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=following" }),
        __metadata("design:type", OnDemandPageUserMetadataConnectionsFollowing)
    ], OnDemandPageUserMetadataConnections.prototype, "following", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=groups" }),
        __metadata("design:type", OnDemandPageUserMetadataConnectionsGroups)
    ], OnDemandPageUserMetadataConnections.prototype, "groups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=likes" }),
        __metadata("design:type", OnDemandPageUserMetadataConnectionsLikes)
    ], OnDemandPageUserMetadataConnections.prototype, "likes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=moderated_channels" }),
        __metadata("design:type", OnDemandPageUserMetadataConnectionsModeratedChannels)
    ], OnDemandPageUserMetadataConnections.prototype, "moderatedChannels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pictures" }),
        __metadata("design:type", OnDemandPageUserMetadataConnectionsPictures)
    ], OnDemandPageUserMetadataConnections.prototype, "pictures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portfolios" }),
        __metadata("design:type", OnDemandPageUserMetadataConnectionsPortfolios)
    ], OnDemandPageUserMetadataConnections.prototype, "portfolios", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recommended_channels" }),
        __metadata("design:type", OnDemandPageUserMetadataConnectionsRecommendedChannels)
    ], OnDemandPageUserMetadataConnections.prototype, "recommendedChannels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recommended_users" }),
        __metadata("design:type", OnDemandPageUserMetadataConnectionsRecommendedUsers)
    ], OnDemandPageUserMetadataConnections.prototype, "recommendedUsers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shared" }),
        __metadata("design:type", OnDemandPageUserMetadataConnectionsShared)
    ], OnDemandPageUserMetadataConnections.prototype, "shared", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=videos" }),
        __metadata("design:type", OnDemandPageUserMetadataConnectionsVideos)
    ], OnDemandPageUserMetadataConnections.prototype, "videos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=watched_videos" }),
        __metadata("design:type", OnDemandPageUserMetadataConnectionsWatchedVideos)
    ], OnDemandPageUserMetadataConnections.prototype, "watchedVideos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=watchlater" }),
        __metadata("design:type", OnDemandPageUserMetadataConnectionsWatchlater)
    ], OnDemandPageUserMetadataConnections.prototype, "watchlater", void 0);
    return OnDemandPageUserMetadataConnections;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadataConnections = OnDemandPageUserMetadataConnections;
var OnDemandPageUserMetadataInteractionsAddPrivacyUser = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadataInteractionsAddPrivacyUser, _super);
    function OnDemandPageUserMetadataInteractionsAddPrivacyUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageUserMetadataInteractionsAddPrivacyUser.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageUserMetadataInteractionsAddPrivacyUser.prototype, "uri", void 0);
    return OnDemandPageUserMetadataInteractionsAddPrivacyUser;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadataInteractionsAddPrivacyUser = OnDemandPageUserMetadataInteractionsAddPrivacyUser;
// OnDemandPageUserMetadataInteractionsBlock
/**
 * Information related to the block status of this user.
**/
var OnDemandPageUserMetadataInteractionsBlock = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadataInteractionsBlock, _super);
    function OnDemandPageUserMetadataInteractionsBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], OnDemandPageUserMetadataInteractionsBlock.prototype, "added", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=added_time" }),
        __metadata("design:type", String)
    ], OnDemandPageUserMetadataInteractionsBlock.prototype, "addedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageUserMetadataInteractionsBlock.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageUserMetadataInteractionsBlock.prototype, "uri", void 0);
    return OnDemandPageUserMetadataInteractionsBlock;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadataInteractionsBlock = OnDemandPageUserMetadataInteractionsBlock;
// OnDemandPageUserMetadataInteractionsFollow
/**
 * Information related to the followed status of this user.
**/
var OnDemandPageUserMetadataInteractionsFollow = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadataInteractionsFollow, _super);
    function OnDemandPageUserMetadataInteractionsFollow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], OnDemandPageUserMetadataInteractionsFollow.prototype, "added", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageUserMetadataInteractionsFollow.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageUserMetadataInteractionsFollow.prototype, "uri", void 0);
    return OnDemandPageUserMetadataInteractionsFollow;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadataInteractionsFollow = OnDemandPageUserMetadataInteractionsFollow;
// OnDemandPageUserMetadataInteractionsReport
/**
 * Information regarding where and how to report a user.
**/
var OnDemandPageUserMetadataInteractionsReport = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadataInteractionsReport, _super);
    function OnDemandPageUserMetadataInteractionsReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandPageUserMetadataInteractionsReport.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reason" }),
        __metadata("design:type", Array)
    ], OnDemandPageUserMetadataInteractionsReport.prototype, "reason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageUserMetadataInteractionsReport.prototype, "uri", void 0);
    return OnDemandPageUserMetadataInteractionsReport;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadataInteractionsReport = OnDemandPageUserMetadataInteractionsReport;
var OnDemandPageUserMetadataInteractions = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadataInteractions, _super);
    function OnDemandPageUserMetadataInteractions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=add_privacy_user" }),
        __metadata("design:type", OnDemandPageUserMetadataInteractionsAddPrivacyUser)
    ], OnDemandPageUserMetadataInteractions.prototype, "addPrivacyUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=block" }),
        __metadata("design:type", OnDemandPageUserMetadataInteractionsBlock)
    ], OnDemandPageUserMetadataInteractions.prototype, "block", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=follow" }),
        __metadata("design:type", OnDemandPageUserMetadataInteractionsFollow)
    ], OnDemandPageUserMetadataInteractions.prototype, "follow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=report" }),
        __metadata("design:type", OnDemandPageUserMetadataInteractionsReport)
    ], OnDemandPageUserMetadataInteractions.prototype, "report", void 0);
    return OnDemandPageUserMetadataInteractions;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadataInteractions = OnDemandPageUserMetadataInteractions;
// OnDemandPageUserMetadata
/**
 * The user's metadata.
**/
var OnDemandPageUserMetadata = /** @class */ (function (_super) {
    __extends(OnDemandPageUserMetadata, _super);
    function OnDemandPageUserMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connections" }),
        __metadata("design:type", OnDemandPageUserMetadataConnections)
    ], OnDemandPageUserMetadata.prototype, "connections", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interactions" }),
        __metadata("design:type", OnDemandPageUserMetadataInteractions)
    ], OnDemandPageUserMetadata.prototype, "interactions", void 0);
    return OnDemandPageUserMetadata;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserMetadata = OnDemandPageUserMetadata;
var OnDemandPageUserPreferencesVideosPrivacyCommentsEnum;
(function (OnDemandPageUserPreferencesVideosPrivacyCommentsEnum) {
    OnDemandPageUserPreferencesVideosPrivacyCommentsEnum["Anybody"] = "anybody";
    OnDemandPageUserPreferencesVideosPrivacyCommentsEnum["Contacts"] = "contacts";
    OnDemandPageUserPreferencesVideosPrivacyCommentsEnum["Nobody"] = "nobody";
})(OnDemandPageUserPreferencesVideosPrivacyCommentsEnum = exports.OnDemandPageUserPreferencesVideosPrivacyCommentsEnum || (exports.OnDemandPageUserPreferencesVideosPrivacyCommentsEnum = {}));
var OnDemandPageUserPreferencesVideosPrivacyEmbedEnum;
(function (OnDemandPageUserPreferencesVideosPrivacyEmbedEnum) {
    OnDemandPageUserPreferencesVideosPrivacyEmbedEnum["Private"] = "private";
    OnDemandPageUserPreferencesVideosPrivacyEmbedEnum["Public"] = "public";
    OnDemandPageUserPreferencesVideosPrivacyEmbedEnum["Whitelist"] = "whitelist";
})(OnDemandPageUserPreferencesVideosPrivacyEmbedEnum = exports.OnDemandPageUserPreferencesVideosPrivacyEmbedEnum || (exports.OnDemandPageUserPreferencesVideosPrivacyEmbedEnum = {}));
var OnDemandPageUserPreferencesVideosPrivacyViewEnum;
(function (OnDemandPageUserPreferencesVideosPrivacyViewEnum) {
    OnDemandPageUserPreferencesVideosPrivacyViewEnum["Anybody"] = "anybody";
    OnDemandPageUserPreferencesVideosPrivacyViewEnum["Contacts"] = "contacts";
    OnDemandPageUserPreferencesVideosPrivacyViewEnum["Disable"] = "disable";
    OnDemandPageUserPreferencesVideosPrivacyViewEnum["Nobody"] = "nobody";
    OnDemandPageUserPreferencesVideosPrivacyViewEnum["Password"] = "password";
    OnDemandPageUserPreferencesVideosPrivacyViewEnum["Unlisted"] = "unlisted";
    OnDemandPageUserPreferencesVideosPrivacyViewEnum["Users"] = "users";
})(OnDemandPageUserPreferencesVideosPrivacyViewEnum = exports.OnDemandPageUserPreferencesVideosPrivacyViewEnum || (exports.OnDemandPageUserPreferencesVideosPrivacyViewEnum = {}));
var OnDemandPageUserPreferencesVideosPrivacy = /** @class */ (function (_super) {
    __extends(OnDemandPageUserPreferencesVideosPrivacy, _super);
    function OnDemandPageUserPreferencesVideosPrivacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=add" }),
        __metadata("design:type", Boolean)
    ], OnDemandPageUserPreferencesVideosPrivacy.prototype, "add", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], OnDemandPageUserPreferencesVideosPrivacy.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], OnDemandPageUserPreferencesVideosPrivacy.prototype, "download", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed" }),
        __metadata("design:type", String)
    ], OnDemandPageUserPreferencesVideosPrivacy.prototype, "embed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=view" }),
        __metadata("design:type", String)
    ], OnDemandPageUserPreferencesVideosPrivacy.prototype, "view", void 0);
    return OnDemandPageUserPreferencesVideosPrivacy;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserPreferencesVideosPrivacy = OnDemandPageUserPreferencesVideosPrivacy;
var OnDemandPageUserPreferencesVideos = /** @class */ (function (_super) {
    __extends(OnDemandPageUserPreferencesVideos, _super);
    function OnDemandPageUserPreferencesVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privacy" }),
        __metadata("design:type", OnDemandPageUserPreferencesVideosPrivacy)
    ], OnDemandPageUserPreferencesVideos.prototype, "privacy", void 0);
    return OnDemandPageUserPreferencesVideos;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserPreferencesVideos = OnDemandPageUserPreferencesVideos;
var OnDemandPageUserPreferences = /** @class */ (function (_super) {
    __extends(OnDemandPageUserPreferences, _super);
    function OnDemandPageUserPreferences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=videos" }),
        __metadata("design:type", OnDemandPageUserPreferencesVideos)
    ], OnDemandPageUserPreferences.prototype, "videos", void 0);
    return OnDemandPageUserPreferences;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserPreferences = OnDemandPageUserPreferences;
// OnDemandPageUserUploadQuotaLifetime
/**
 * Information about the user's lifetime upload usage.
**/
var OnDemandPageUserUploadQuotaLifetime = /** @class */ (function (_super) {
    __extends(OnDemandPageUserUploadQuotaLifetime, _super);
    function OnDemandPageUserUploadQuotaLifetime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserUploadQuotaLifetime.prototype, "free", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserUploadQuotaLifetime.prototype, "max", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserUploadQuotaLifetime.prototype, "used", void 0);
    return OnDemandPageUserUploadQuotaLifetime;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserUploadQuotaLifetime = OnDemandPageUserUploadQuotaLifetime;
// OnDemandPageUserUploadQuotaPeriodic
/**
 * Information about the user's usage for the current period.
**/
var OnDemandPageUserUploadQuotaPeriodic = /** @class */ (function (_super) {
    __extends(OnDemandPageUserUploadQuotaPeriodic, _super);
    function OnDemandPageUserUploadQuotaPeriodic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserUploadQuotaPeriodic.prototype, "free", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserUploadQuotaPeriodic.prototype, "max", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reset_date" }),
        __metadata("design:type", String)
    ], OnDemandPageUserUploadQuotaPeriodic.prototype, "resetDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserUploadQuotaPeriodic.prototype, "used", void 0);
    return OnDemandPageUserUploadQuotaPeriodic;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserUploadQuotaPeriodic = OnDemandPageUserUploadQuotaPeriodic;
var OnDemandPageUserUploadQuotaSpaceShowingEnum;
(function (OnDemandPageUserUploadQuotaSpaceShowingEnum) {
    OnDemandPageUserUploadQuotaSpaceShowingEnum["Lifetime"] = "lifetime";
    OnDemandPageUserUploadQuotaSpaceShowingEnum["Periodic"] = "periodic";
})(OnDemandPageUserUploadQuotaSpaceShowingEnum = exports.OnDemandPageUserUploadQuotaSpaceShowingEnum || (exports.OnDemandPageUserUploadQuotaSpaceShowingEnum = {}));
// OnDemandPageUserUploadQuotaSpace
/**
 * Information about the user's upload space remaining for the current period.
**/
var OnDemandPageUserUploadQuotaSpace = /** @class */ (function (_super) {
    __extends(OnDemandPageUserUploadQuotaSpace, _super);
    function OnDemandPageUserUploadQuotaSpace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserUploadQuotaSpace.prototype, "free", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserUploadQuotaSpace.prototype, "max", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=showing" }),
        __metadata("design:type", String)
    ], OnDemandPageUserUploadQuotaSpace.prototype, "showing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], OnDemandPageUserUploadQuotaSpace.prototype, "used", void 0);
    return OnDemandPageUserUploadQuotaSpace;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserUploadQuotaSpace = OnDemandPageUserUploadQuotaSpace;
// OnDemandPageUserUploadQuota
/**
 * Appears only when the user has upload access and is looking at their own user record.
**/
var OnDemandPageUserUploadQuota = /** @class */ (function (_super) {
    __extends(OnDemandPageUserUploadQuota, _super);
    function OnDemandPageUserUploadQuota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lifetime" }),
        __metadata("design:type", OnDemandPageUserUploadQuotaLifetime)
    ], OnDemandPageUserUploadQuota.prototype, "lifetime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=periodic" }),
        __metadata("design:type", OnDemandPageUserUploadQuotaPeriodic)
    ], OnDemandPageUserUploadQuota.prototype, "periodic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=space" }),
        __metadata("design:type", OnDemandPageUserUploadQuotaSpace)
    ], OnDemandPageUserUploadQuota.prototype, "space", void 0);
    return OnDemandPageUserUploadQuota;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserUploadQuota = OnDemandPageUserUploadQuota;
var OnDemandPageUserWebsites = /** @class */ (function (_super) {
    __extends(OnDemandPageUserWebsites, _super);
    function OnDemandPageUserWebsites() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], OnDemandPageUserWebsites.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], OnDemandPageUserWebsites.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OnDemandPageUserWebsites.prototype, "name", void 0);
    return OnDemandPageUserWebsites;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUserWebsites = OnDemandPageUserWebsites;
// OnDemandPageUser
/**
 * The user who created this On Demand page.
**/
var OnDemandPageUser = /** @class */ (function (_super) {
    __extends(OnDemandPageUser, _super);
    function OnDemandPageUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account" }),
        __metadata("design:type", String)
    ], OnDemandPageUser.prototype, "account", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bio" }),
        __metadata("design:type", String)
    ], OnDemandPageUser.prototype, "bio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content_filter" }),
        __metadata("design:type", Array)
    ], OnDemandPageUser.prototype, "contentFilter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], OnDemandPageUser.prototype, "createdTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], OnDemandPageUser.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], OnDemandPageUser.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], OnDemandPageUser.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", OnDemandPageUserMetadata)
    ], OnDemandPageUser.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OnDemandPageUser.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pictures" }),
        __metadata("design:type", picture_1.Picture)
    ], OnDemandPageUser.prototype, "pictures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preferences" }),
        __metadata("design:type", OnDemandPageUserPreferences)
    ], OnDemandPageUser.prototype, "preferences", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], OnDemandPageUser.prototype, "resourceKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upload_quota" }),
        __metadata("design:type", OnDemandPageUserUploadQuota)
    ], OnDemandPageUser.prototype, "uploadQuota", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPageUser.prototype, "uri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=websites", elemType: OnDemandPageUserWebsites }),
        __metadata("design:type", Array)
    ], OnDemandPageUser.prototype, "websites", void 0);
    return OnDemandPageUser;
}(utils_1.SpeakeasyBase));
exports.OnDemandPageUser = OnDemandPageUser;
var OnDemandPage = /** @class */ (function (_super) {
    __extends(OnDemandPage, _super);
    function OnDemandPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=background" }),
        __metadata("design:type", OnDemandPagePicture)
    ], OnDemandPage.prototype, "background", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=colors" }),
        __metadata("design:type", OnDemandPageColors)
    ], OnDemandPage.prototype, "colors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content_rating" }),
        __metadata("design:type", Array)
    ], OnDemandPage.prototype, "contentRating", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], OnDemandPage.prototype, "createdTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], OnDemandPage.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain_link" }),
        __metadata("design:type", String)
    ], OnDemandPage.prototype, "domainLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=episodes" }),
        __metadata("design:type", OnDemandPageEpisodes)
    ], OnDemandPage.prototype, "episodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=film" }),
        __metadata("design:type", video_1.Video)
    ], OnDemandPage.prototype, "film", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=genres", elemType: ondemandgenre_1.OnDemandGenre }),
        __metadata("design:type", Array)
    ], OnDemandPage.prototype, "genres", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], OnDemandPage.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", OnDemandPageMetadata)
    ], OnDemandPage.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified_time" }),
        __metadata("design:type", String)
    ], OnDemandPage.prototype, "modifiedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OnDemandPage.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pictures" }),
        __metadata("design:type", OnDemandPagePicture)
    ], OnDemandPage.prototype, "pictures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preorder" }),
        __metadata("design:type", OnDemandPagePreorder)
    ], OnDemandPage.prototype, "preorder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=published" }),
        __metadata("design:type", OnDemandPagePublished)
    ], OnDemandPage.prototype, "published", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rating" }),
        __metadata("design:type", Number)
    ], OnDemandPage.prototype, "rating", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], OnDemandPage.prototype, "resourceKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], OnDemandPage.prototype, "sku", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscription" }),
        __metadata("design:type", OnDemandPageSubscription)
    ], OnDemandPage.prototype, "subscription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=theme" }),
        __metadata("design:type", String)
    ], OnDemandPage.prototype, "theme", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=thumbnail" }),
        __metadata("design:type", OnDemandPagePicture)
    ], OnDemandPage.prototype, "thumbnail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trailer" }),
        __metadata("design:type", OnDemandPageVideo)
    ], OnDemandPage.prototype, "trailer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], OnDemandPage.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandPage.prototype, "uri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", OnDemandPageUser)
    ], OnDemandPage.prototype, "user", void 0);
    return OnDemandPage;
}(utils_1.SpeakeasyBase));
exports.OnDemandPage = OnDemandPage;
