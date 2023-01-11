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
exports.VideoVersions = exports.VideoVersionsUser = exports.VideoVersionsUserWebsites = exports.VideoVersionsUserUploadQuota = exports.VideoVersionsUserUploadQuotaSpace = exports.VideoVersionsUserUploadQuotaSpaceShowingEnum = exports.VideoVersionsUserUploadQuotaPeriodic = exports.VideoVersionsUserUploadQuotaLifetime = exports.VideoVersionsUserPreferences = exports.VideoVersionsUserPreferencesVideos = exports.VideoVersionsUserPreferencesVideosPrivacy = exports.VideoVersionsUserPreferencesVideosPrivacyViewEnum = exports.VideoVersionsUserPreferencesVideosPrivacyEmbedEnum = exports.VideoVersionsUserPreferencesVideosPrivacyCommentsEnum = exports.VideoVersionsUserMetadata = exports.VideoVersionsUserMetadataInteractions = exports.VideoVersionsUserMetadataInteractionsReport = exports.VideoVersionsUserMetadataInteractionsFollow = exports.VideoVersionsUserMetadataInteractionsBlock = exports.VideoVersionsUserMetadataInteractionsAddPrivacyUser = exports.VideoVersionsUserMetadataConnections = exports.VideoVersionsUserMetadataConnectionsWatchlater = exports.VideoVersionsUserMetadataConnectionsWatchedVideos = exports.VideoVersionsUserMetadataConnectionsVideos = exports.VideoVersionsUserMetadataConnectionsShared = exports.VideoVersionsUserMetadataConnectionsRecommendedUsers = exports.VideoVersionsUserMetadataConnectionsRecommendedChannels = exports.VideoVersionsUserMetadataConnectionsPortfolios = exports.VideoVersionsUserMetadataConnectionsPictures = exports.VideoVersionsUserMetadataConnectionsModeratedChannels = exports.VideoVersionsUserMetadataConnectionsLikes = exports.VideoVersionsUserMetadataConnectionsGroups = exports.VideoVersionsUserMetadataConnectionsFollowing = exports.VideoVersionsUserMetadataConnectionsFollowers = exports.VideoVersionsUserMetadataConnectionsFolders = exports.VideoVersionsUserMetadataConnectionsFeed = exports.VideoVersionsUserMetadataConnectionsChannels = exports.VideoVersionsUserMetadataConnectionsCategories = exports.VideoVersionsUserMetadataConnectionsBlock = exports.VideoVersionsUserMetadataConnectionsAppearances = exports.VideoVersionsUserMetadataConnectionsAlbums = exports.VideoVersionsUserAccountEnum = exports.VideoVersionsUpload = exports.VideoVersionsUploadStatusEnum = exports.VideoVersionsUploadApproachEnum = exports.VideoVersionsMetadata = exports.VideoVersionsMetadataConnections = exports.VideoVersionsMetadataConnectionsVideo = void 0;
var utils_1 = require("../../../internal/utils");
var picture_1 = require("./picture");
var apiapp_1 = require("./apiapp");
var play_1 = require("./play");
// VideoVersionsMetadataConnectionsVideo
/**
 * Data from video associated with version
**/
var VideoVersionsMetadataConnectionsVideo = /** @class */ (function (_super) {
    __extends(VideoVersionsMetadataConnectionsVideo, _super);
    function VideoVersionsMetadataConnectionsVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoVersionsMetadataConnectionsVideo.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoVersionsMetadataConnectionsVideo.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersionsMetadataConnectionsVideo.prototype, "uri", void 0);
    return VideoVersionsMetadataConnectionsVideo;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsMetadataConnectionsVideo = VideoVersionsMetadataConnectionsVideo;
var VideoVersionsMetadataConnections = /** @class */ (function (_super) {
    __extends(VideoVersionsMetadataConnections, _super);
    function VideoVersionsMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video" }),
        __metadata("design:type", VideoVersionsMetadataConnectionsVideo)
    ], VideoVersionsMetadataConnections.prototype, "video", void 0);
    return VideoVersionsMetadataConnections;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsMetadataConnections = VideoVersionsMetadataConnections;
// VideoVersionsMetadata
/**
 * The video version's metadata.
**/
var VideoVersionsMetadata = /** @class */ (function (_super) {
    __extends(VideoVersionsMetadata, _super);
    function VideoVersionsMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connections" }),
        __metadata("design:type", VideoVersionsMetadataConnections)
    ], VideoVersionsMetadata.prototype, "connections", void 0);
    return VideoVersionsMetadata;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsMetadata = VideoVersionsMetadata;
var VideoVersionsUploadApproachEnum;
(function (VideoVersionsUploadApproachEnum) {
    VideoVersionsUploadApproachEnum["Post"] = "post";
    VideoVersionsUploadApproachEnum["Pull"] = "pull";
    VideoVersionsUploadApproachEnum["Streaming"] = "streaming";
    VideoVersionsUploadApproachEnum["Tus"] = "tus";
})(VideoVersionsUploadApproachEnum = exports.VideoVersionsUploadApproachEnum || (exports.VideoVersionsUploadApproachEnum = {}));
var VideoVersionsUploadStatusEnum;
(function (VideoVersionsUploadStatusEnum) {
    VideoVersionsUploadStatusEnum["Complete"] = "complete";
    VideoVersionsUploadStatusEnum["Error"] = "error";
    VideoVersionsUploadStatusEnum["InProgress"] = "in_progress";
})(VideoVersionsUploadStatusEnum = exports.VideoVersionsUploadStatusEnum || (exports.VideoVersionsUploadStatusEnum = {}));
// VideoVersionsUpload
/**
 * The upload information for this version.
**/
var VideoVersionsUpload = /** @class */ (function (_super) {
    __extends(VideoVersionsUpload, _super);
    function VideoVersionsUpload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approach" }),
        __metadata("design:type", String)
    ], VideoVersionsUpload.prototype, "approach", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=complete_uri" }),
        __metadata("design:type", String)
    ], VideoVersionsUpload.prototype, "completeUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=form" }),
        __metadata("design:type", String)
    ], VideoVersionsUpload.prototype, "form", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], VideoVersionsUpload.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=redirect_url" }),
        __metadata("design:type", String)
    ], VideoVersionsUpload.prototype, "redirectUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], VideoVersionsUpload.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], VideoVersionsUpload.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upload_link" }),
        __metadata("design:type", String)
    ], VideoVersionsUpload.prototype, "uploadLink", void 0);
    return VideoVersionsUpload;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUpload = VideoVersionsUpload;
var VideoVersionsUserAccountEnum;
(function (VideoVersionsUserAccountEnum) {
    VideoVersionsUserAccountEnum["Basic"] = "basic";
    VideoVersionsUserAccountEnum["Business"] = "business";
    VideoVersionsUserAccountEnum["LiveBusiness"] = "live_business";
    VideoVersionsUserAccountEnum["LivePremium"] = "live_premium";
    VideoVersionsUserAccountEnum["LivePro"] = "live_pro";
    VideoVersionsUserAccountEnum["Plus"] = "plus";
    VideoVersionsUserAccountEnum["Pro"] = "pro";
    VideoVersionsUserAccountEnum["ProUnlimited"] = "pro_unlimited";
    VideoVersionsUserAccountEnum["Producer"] = "producer";
})(VideoVersionsUserAccountEnum = exports.VideoVersionsUserAccountEnum || (exports.VideoVersionsUserAccountEnum = {}));
// VideoVersionsUserMetadataConnectionsAlbums
/**
 * Information about the albums created by this user.
**/
var VideoVersionsUserMetadataConnectionsAlbums = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadataConnectionsAlbums, _super);
    function VideoVersionsUserMetadataConnectionsAlbums() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoVersionsUserMetadataConnectionsAlbums.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserMetadataConnectionsAlbums.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersionsUserMetadataConnectionsAlbums.prototype, "uri", void 0);
    return VideoVersionsUserMetadataConnectionsAlbums;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadataConnectionsAlbums = VideoVersionsUserMetadataConnectionsAlbums;
// VideoVersionsUserMetadataConnectionsAppearances
/**
 * Information about the appearances of this user in other videos.
**/
var VideoVersionsUserMetadataConnectionsAppearances = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadataConnectionsAppearances, _super);
    function VideoVersionsUserMetadataConnectionsAppearances() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoVersionsUserMetadataConnectionsAppearances.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserMetadataConnectionsAppearances.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersionsUserMetadataConnectionsAppearances.prototype, "uri", void 0);
    return VideoVersionsUserMetadataConnectionsAppearances;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadataConnectionsAppearances = VideoVersionsUserMetadataConnectionsAppearances;
// VideoVersionsUserMetadataConnectionsBlock
/**
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
var VideoVersionsUserMetadataConnectionsBlock = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadataConnectionsBlock, _super);
    function VideoVersionsUserMetadataConnectionsBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoVersionsUserMetadataConnectionsBlock.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserMetadataConnectionsBlock.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersionsUserMetadataConnectionsBlock.prototype, "uri", void 0);
    return VideoVersionsUserMetadataConnectionsBlock;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadataConnectionsBlock = VideoVersionsUserMetadataConnectionsBlock;
// VideoVersionsUserMetadataConnectionsCategories
/**
 * Information about this user's followed categories.
**/
var VideoVersionsUserMetadataConnectionsCategories = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadataConnectionsCategories, _super);
    function VideoVersionsUserMetadataConnectionsCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoVersionsUserMetadataConnectionsCategories.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserMetadataConnectionsCategories.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersionsUserMetadataConnectionsCategories.prototype, "uri", void 0);
    return VideoVersionsUserMetadataConnectionsCategories;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadataConnectionsCategories = VideoVersionsUserMetadataConnectionsCategories;
// VideoVersionsUserMetadataConnectionsChannels
/**
 * Information about this user's subscribed channels.
**/
var VideoVersionsUserMetadataConnectionsChannels = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadataConnectionsChannels, _super);
    function VideoVersionsUserMetadataConnectionsChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoVersionsUserMetadataConnectionsChannels.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserMetadataConnectionsChannels.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersionsUserMetadataConnectionsChannels.prototype, "uri", void 0);
    return VideoVersionsUserMetadataConnectionsChannels;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadataConnectionsChannels = VideoVersionsUserMetadataConnectionsChannels;
// VideoVersionsUserMetadataConnectionsFeed
/**
 * Information about this user's feed.
**/
var VideoVersionsUserMetadataConnectionsFeed = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadataConnectionsFeed, _super);
    function VideoVersionsUserMetadataConnectionsFeed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoVersionsUserMetadataConnectionsFeed.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersionsUserMetadataConnectionsFeed.prototype, "uri", void 0);
    return VideoVersionsUserMetadataConnectionsFeed;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadataConnectionsFeed = VideoVersionsUserMetadataConnectionsFeed;
// VideoVersionsUserMetadataConnectionsFolders
/**
 * Information about this user's folders.
**/
var VideoVersionsUserMetadataConnectionsFolders = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadataConnectionsFolders, _super);
    function VideoVersionsUserMetadataConnectionsFolders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoVersionsUserMetadataConnectionsFolders.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserMetadataConnectionsFolders.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersionsUserMetadataConnectionsFolders.prototype, "uri", void 0);
    return VideoVersionsUserMetadataConnectionsFolders;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadataConnectionsFolders = VideoVersionsUserMetadataConnectionsFolders;
// VideoVersionsUserMetadataConnectionsFollowers
/**
 * Information about the user's followers.
**/
var VideoVersionsUserMetadataConnectionsFollowers = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadataConnectionsFollowers, _super);
    function VideoVersionsUserMetadataConnectionsFollowers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoVersionsUserMetadataConnectionsFollowers.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserMetadataConnectionsFollowers.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersionsUserMetadataConnectionsFollowers.prototype, "uri", void 0);
    return VideoVersionsUserMetadataConnectionsFollowers;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadataConnectionsFollowers = VideoVersionsUserMetadataConnectionsFollowers;
// VideoVersionsUserMetadataConnectionsFollowing
/**
 * Information about the users that the current user is following.
**/
var VideoVersionsUserMetadataConnectionsFollowing = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadataConnectionsFollowing, _super);
    function VideoVersionsUserMetadataConnectionsFollowing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoVersionsUserMetadataConnectionsFollowing.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserMetadataConnectionsFollowing.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersionsUserMetadataConnectionsFollowing.prototype, "uri", void 0);
    return VideoVersionsUserMetadataConnectionsFollowing;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadataConnectionsFollowing = VideoVersionsUserMetadataConnectionsFollowing;
// VideoVersionsUserMetadataConnectionsGroups
/**
 * Information about the groups created by this user.
**/
var VideoVersionsUserMetadataConnectionsGroups = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadataConnectionsGroups, _super);
    function VideoVersionsUserMetadataConnectionsGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoVersionsUserMetadataConnectionsGroups.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserMetadataConnectionsGroups.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersionsUserMetadataConnectionsGroups.prototype, "uri", void 0);
    return VideoVersionsUserMetadataConnectionsGroups;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadataConnectionsGroups = VideoVersionsUserMetadataConnectionsGroups;
// VideoVersionsUserMetadataConnectionsLikes
/**
 * Information about the videos that this user has liked.
**/
var VideoVersionsUserMetadataConnectionsLikes = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadataConnectionsLikes, _super);
    function VideoVersionsUserMetadataConnectionsLikes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoVersionsUserMetadataConnectionsLikes.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserMetadataConnectionsLikes.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersionsUserMetadataConnectionsLikes.prototype, "uri", void 0);
    return VideoVersionsUserMetadataConnectionsLikes;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadataConnectionsLikes = VideoVersionsUserMetadataConnectionsLikes;
// VideoVersionsUserMetadataConnectionsModeratedChannels
/**
 * Information about the channels that this user moderates.
**/
var VideoVersionsUserMetadataConnectionsModeratedChannels = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadataConnectionsModeratedChannels, _super);
    function VideoVersionsUserMetadataConnectionsModeratedChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoVersionsUserMetadataConnectionsModeratedChannels.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserMetadataConnectionsModeratedChannels.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersionsUserMetadataConnectionsModeratedChannels.prototype, "uri", void 0);
    return VideoVersionsUserMetadataConnectionsModeratedChannels;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadataConnectionsModeratedChannels = VideoVersionsUserMetadataConnectionsModeratedChannels;
// VideoVersionsUserMetadataConnectionsPictures
/**
 * Information about this user's portraits.
**/
var VideoVersionsUserMetadataConnectionsPictures = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadataConnectionsPictures, _super);
    function VideoVersionsUserMetadataConnectionsPictures() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoVersionsUserMetadataConnectionsPictures.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserMetadataConnectionsPictures.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersionsUserMetadataConnectionsPictures.prototype, "uri", void 0);
    return VideoVersionsUserMetadataConnectionsPictures;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadataConnectionsPictures = VideoVersionsUserMetadataConnectionsPictures;
// VideoVersionsUserMetadataConnectionsPortfolios
/**
 * Information about this user's portfolios.
**/
var VideoVersionsUserMetadataConnectionsPortfolios = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadataConnectionsPortfolios, _super);
    function VideoVersionsUserMetadataConnectionsPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoVersionsUserMetadataConnectionsPortfolios.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserMetadataConnectionsPortfolios.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersionsUserMetadataConnectionsPortfolios.prototype, "uri", void 0);
    return VideoVersionsUserMetadataConnectionsPortfolios;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadataConnectionsPortfolios = VideoVersionsUserMetadataConnectionsPortfolios;
// VideoVersionsUserMetadataConnectionsRecommendedChannels
/**
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
var VideoVersionsUserMetadataConnectionsRecommendedChannels = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadataConnectionsRecommendedChannels, _super);
    function VideoVersionsUserMetadataConnectionsRecommendedChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoVersionsUserMetadataConnectionsRecommendedChannels.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserMetadataConnectionsRecommendedChannels.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersionsUserMetadataConnectionsRecommendedChannels.prototype, "uri", void 0);
    return VideoVersionsUserMetadataConnectionsRecommendedChannels;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadataConnectionsRecommendedChannels = VideoVersionsUserMetadataConnectionsRecommendedChannels;
// VideoVersionsUserMetadataConnectionsRecommendedUsers
/**
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
var VideoVersionsUserMetadataConnectionsRecommendedUsers = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadataConnectionsRecommendedUsers, _super);
    function VideoVersionsUserMetadataConnectionsRecommendedUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoVersionsUserMetadataConnectionsRecommendedUsers.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserMetadataConnectionsRecommendedUsers.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersionsUserMetadataConnectionsRecommendedUsers.prototype, "uri", void 0);
    return VideoVersionsUserMetadataConnectionsRecommendedUsers;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadataConnectionsRecommendedUsers = VideoVersionsUserMetadataConnectionsRecommendedUsers;
// VideoVersionsUserMetadataConnectionsShared
/**
 * Information about the videos that have been shared with this user.
**/
var VideoVersionsUserMetadataConnectionsShared = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadataConnectionsShared, _super);
    function VideoVersionsUserMetadataConnectionsShared() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoVersionsUserMetadataConnectionsShared.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserMetadataConnectionsShared.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersionsUserMetadataConnectionsShared.prototype, "uri", void 0);
    return VideoVersionsUserMetadataConnectionsShared;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadataConnectionsShared = VideoVersionsUserMetadataConnectionsShared;
// VideoVersionsUserMetadataConnectionsVideos
/**
 * Information about the videos uploaded by this user.
**/
var VideoVersionsUserMetadataConnectionsVideos = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadataConnectionsVideos, _super);
    function VideoVersionsUserMetadataConnectionsVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoVersionsUserMetadataConnectionsVideos.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserMetadataConnectionsVideos.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersionsUserMetadataConnectionsVideos.prototype, "uri", void 0);
    return VideoVersionsUserMetadataConnectionsVideos;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadataConnectionsVideos = VideoVersionsUserMetadataConnectionsVideos;
// VideoVersionsUserMetadataConnectionsWatchedVideos
/**
 * Information about the videos that this user has watched.
**/
var VideoVersionsUserMetadataConnectionsWatchedVideos = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadataConnectionsWatchedVideos, _super);
    function VideoVersionsUserMetadataConnectionsWatchedVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoVersionsUserMetadataConnectionsWatchedVideos.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserMetadataConnectionsWatchedVideos.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersionsUserMetadataConnectionsWatchedVideos.prototype, "uri", void 0);
    return VideoVersionsUserMetadataConnectionsWatchedVideos;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadataConnectionsWatchedVideos = VideoVersionsUserMetadataConnectionsWatchedVideos;
// VideoVersionsUserMetadataConnectionsWatchlater
/**
 * Information about the videos that this user wants to watch later.
**/
var VideoVersionsUserMetadataConnectionsWatchlater = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadataConnectionsWatchlater, _super);
    function VideoVersionsUserMetadataConnectionsWatchlater() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoVersionsUserMetadataConnectionsWatchlater.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserMetadataConnectionsWatchlater.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersionsUserMetadataConnectionsWatchlater.prototype, "uri", void 0);
    return VideoVersionsUserMetadataConnectionsWatchlater;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadataConnectionsWatchlater = VideoVersionsUserMetadataConnectionsWatchlater;
// VideoVersionsUserMetadataConnections
/**
 * The list of resource URIs related to the user.
**/
var VideoVersionsUserMetadataConnections = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadataConnections, _super);
    function VideoVersionsUserMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=albums" }),
        __metadata("design:type", VideoVersionsUserMetadataConnectionsAlbums)
    ], VideoVersionsUserMetadataConnections.prototype, "albums", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appearances" }),
        __metadata("design:type", VideoVersionsUserMetadataConnectionsAppearances)
    ], VideoVersionsUserMetadataConnections.prototype, "appearances", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=block" }),
        __metadata("design:type", VideoVersionsUserMetadataConnectionsBlock)
    ], VideoVersionsUserMetadataConnections.prototype, "block", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categories" }),
        __metadata("design:type", VideoVersionsUserMetadataConnectionsCategories)
    ], VideoVersionsUserMetadataConnections.prototype, "categories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channels" }),
        __metadata("design:type", VideoVersionsUserMetadataConnectionsChannels)
    ], VideoVersionsUserMetadataConnections.prototype, "channels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=feed" }),
        __metadata("design:type", VideoVersionsUserMetadataConnectionsFeed)
    ], VideoVersionsUserMetadataConnections.prototype, "feed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=folders" }),
        __metadata("design:type", VideoVersionsUserMetadataConnectionsFolders)
    ], VideoVersionsUserMetadataConnections.prototype, "folders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=followers" }),
        __metadata("design:type", VideoVersionsUserMetadataConnectionsFollowers)
    ], VideoVersionsUserMetadataConnections.prototype, "followers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=following" }),
        __metadata("design:type", VideoVersionsUserMetadataConnectionsFollowing)
    ], VideoVersionsUserMetadataConnections.prototype, "following", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=groups" }),
        __metadata("design:type", VideoVersionsUserMetadataConnectionsGroups)
    ], VideoVersionsUserMetadataConnections.prototype, "groups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=likes" }),
        __metadata("design:type", VideoVersionsUserMetadataConnectionsLikes)
    ], VideoVersionsUserMetadataConnections.prototype, "likes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=moderated_channels" }),
        __metadata("design:type", VideoVersionsUserMetadataConnectionsModeratedChannels)
    ], VideoVersionsUserMetadataConnections.prototype, "moderatedChannels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pictures" }),
        __metadata("design:type", VideoVersionsUserMetadataConnectionsPictures)
    ], VideoVersionsUserMetadataConnections.prototype, "pictures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portfolios" }),
        __metadata("design:type", VideoVersionsUserMetadataConnectionsPortfolios)
    ], VideoVersionsUserMetadataConnections.prototype, "portfolios", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recommended_channels" }),
        __metadata("design:type", VideoVersionsUserMetadataConnectionsRecommendedChannels)
    ], VideoVersionsUserMetadataConnections.prototype, "recommendedChannels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recommended_users" }),
        __metadata("design:type", VideoVersionsUserMetadataConnectionsRecommendedUsers)
    ], VideoVersionsUserMetadataConnections.prototype, "recommendedUsers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shared" }),
        __metadata("design:type", VideoVersionsUserMetadataConnectionsShared)
    ], VideoVersionsUserMetadataConnections.prototype, "shared", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=videos" }),
        __metadata("design:type", VideoVersionsUserMetadataConnectionsVideos)
    ], VideoVersionsUserMetadataConnections.prototype, "videos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=watched_videos" }),
        __metadata("design:type", VideoVersionsUserMetadataConnectionsWatchedVideos)
    ], VideoVersionsUserMetadataConnections.prototype, "watchedVideos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=watchlater" }),
        __metadata("design:type", VideoVersionsUserMetadataConnectionsWatchlater)
    ], VideoVersionsUserMetadataConnections.prototype, "watchlater", void 0);
    return VideoVersionsUserMetadataConnections;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadataConnections = VideoVersionsUserMetadataConnections;
var VideoVersionsUserMetadataInteractionsAddPrivacyUser = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadataInteractionsAddPrivacyUser, _super);
    function VideoVersionsUserMetadataInteractionsAddPrivacyUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoVersionsUserMetadataInteractionsAddPrivacyUser.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersionsUserMetadataInteractionsAddPrivacyUser.prototype, "uri", void 0);
    return VideoVersionsUserMetadataInteractionsAddPrivacyUser;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadataInteractionsAddPrivacyUser = VideoVersionsUserMetadataInteractionsAddPrivacyUser;
// VideoVersionsUserMetadataInteractionsBlock
/**
 * Information related to the block status of this user.
**/
var VideoVersionsUserMetadataInteractionsBlock = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadataInteractionsBlock, _super);
    function VideoVersionsUserMetadataInteractionsBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], VideoVersionsUserMetadataInteractionsBlock.prototype, "added", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=added_time" }),
        __metadata("design:type", String)
    ], VideoVersionsUserMetadataInteractionsBlock.prototype, "addedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoVersionsUserMetadataInteractionsBlock.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersionsUserMetadataInteractionsBlock.prototype, "uri", void 0);
    return VideoVersionsUserMetadataInteractionsBlock;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadataInteractionsBlock = VideoVersionsUserMetadataInteractionsBlock;
// VideoVersionsUserMetadataInteractionsFollow
/**
 * Information related to the followed status of this user.
**/
var VideoVersionsUserMetadataInteractionsFollow = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadataInteractionsFollow, _super);
    function VideoVersionsUserMetadataInteractionsFollow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], VideoVersionsUserMetadataInteractionsFollow.prototype, "added", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoVersionsUserMetadataInteractionsFollow.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersionsUserMetadataInteractionsFollow.prototype, "uri", void 0);
    return VideoVersionsUserMetadataInteractionsFollow;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadataInteractionsFollow = VideoVersionsUserMetadataInteractionsFollow;
// VideoVersionsUserMetadataInteractionsReport
/**
 * Information regarding where and how to report a user.
**/
var VideoVersionsUserMetadataInteractionsReport = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadataInteractionsReport, _super);
    function VideoVersionsUserMetadataInteractionsReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoVersionsUserMetadataInteractionsReport.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reason" }),
        __metadata("design:type", Array)
    ], VideoVersionsUserMetadataInteractionsReport.prototype, "reason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersionsUserMetadataInteractionsReport.prototype, "uri", void 0);
    return VideoVersionsUserMetadataInteractionsReport;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadataInteractionsReport = VideoVersionsUserMetadataInteractionsReport;
var VideoVersionsUserMetadataInteractions = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadataInteractions, _super);
    function VideoVersionsUserMetadataInteractions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=add_privacy_user" }),
        __metadata("design:type", VideoVersionsUserMetadataInteractionsAddPrivacyUser)
    ], VideoVersionsUserMetadataInteractions.prototype, "addPrivacyUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=block" }),
        __metadata("design:type", VideoVersionsUserMetadataInteractionsBlock)
    ], VideoVersionsUserMetadataInteractions.prototype, "block", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=follow" }),
        __metadata("design:type", VideoVersionsUserMetadataInteractionsFollow)
    ], VideoVersionsUserMetadataInteractions.prototype, "follow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=report" }),
        __metadata("design:type", VideoVersionsUserMetadataInteractionsReport)
    ], VideoVersionsUserMetadataInteractions.prototype, "report", void 0);
    return VideoVersionsUserMetadataInteractions;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadataInteractions = VideoVersionsUserMetadataInteractions;
// VideoVersionsUserMetadata
/**
 * The user's metadata.
**/
var VideoVersionsUserMetadata = /** @class */ (function (_super) {
    __extends(VideoVersionsUserMetadata, _super);
    function VideoVersionsUserMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connections" }),
        __metadata("design:type", VideoVersionsUserMetadataConnections)
    ], VideoVersionsUserMetadata.prototype, "connections", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interactions" }),
        __metadata("design:type", VideoVersionsUserMetadataInteractions)
    ], VideoVersionsUserMetadata.prototype, "interactions", void 0);
    return VideoVersionsUserMetadata;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserMetadata = VideoVersionsUserMetadata;
var VideoVersionsUserPreferencesVideosPrivacyCommentsEnum;
(function (VideoVersionsUserPreferencesVideosPrivacyCommentsEnum) {
    VideoVersionsUserPreferencesVideosPrivacyCommentsEnum["Anybody"] = "anybody";
    VideoVersionsUserPreferencesVideosPrivacyCommentsEnum["Contacts"] = "contacts";
    VideoVersionsUserPreferencesVideosPrivacyCommentsEnum["Nobody"] = "nobody";
})(VideoVersionsUserPreferencesVideosPrivacyCommentsEnum = exports.VideoVersionsUserPreferencesVideosPrivacyCommentsEnum || (exports.VideoVersionsUserPreferencesVideosPrivacyCommentsEnum = {}));
var VideoVersionsUserPreferencesVideosPrivacyEmbedEnum;
(function (VideoVersionsUserPreferencesVideosPrivacyEmbedEnum) {
    VideoVersionsUserPreferencesVideosPrivacyEmbedEnum["Private"] = "private";
    VideoVersionsUserPreferencesVideosPrivacyEmbedEnum["Public"] = "public";
    VideoVersionsUserPreferencesVideosPrivacyEmbedEnum["Whitelist"] = "whitelist";
})(VideoVersionsUserPreferencesVideosPrivacyEmbedEnum = exports.VideoVersionsUserPreferencesVideosPrivacyEmbedEnum || (exports.VideoVersionsUserPreferencesVideosPrivacyEmbedEnum = {}));
var VideoVersionsUserPreferencesVideosPrivacyViewEnum;
(function (VideoVersionsUserPreferencesVideosPrivacyViewEnum) {
    VideoVersionsUserPreferencesVideosPrivacyViewEnum["Anybody"] = "anybody";
    VideoVersionsUserPreferencesVideosPrivacyViewEnum["Contacts"] = "contacts";
    VideoVersionsUserPreferencesVideosPrivacyViewEnum["Disable"] = "disable";
    VideoVersionsUserPreferencesVideosPrivacyViewEnum["Nobody"] = "nobody";
    VideoVersionsUserPreferencesVideosPrivacyViewEnum["Password"] = "password";
    VideoVersionsUserPreferencesVideosPrivacyViewEnum["Unlisted"] = "unlisted";
    VideoVersionsUserPreferencesVideosPrivacyViewEnum["Users"] = "users";
})(VideoVersionsUserPreferencesVideosPrivacyViewEnum = exports.VideoVersionsUserPreferencesVideosPrivacyViewEnum || (exports.VideoVersionsUserPreferencesVideosPrivacyViewEnum = {}));
var VideoVersionsUserPreferencesVideosPrivacy = /** @class */ (function (_super) {
    __extends(VideoVersionsUserPreferencesVideosPrivacy, _super);
    function VideoVersionsUserPreferencesVideosPrivacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=add" }),
        __metadata("design:type", Boolean)
    ], VideoVersionsUserPreferencesVideosPrivacy.prototype, "add", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], VideoVersionsUserPreferencesVideosPrivacy.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], VideoVersionsUserPreferencesVideosPrivacy.prototype, "download", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed" }),
        __metadata("design:type", String)
    ], VideoVersionsUserPreferencesVideosPrivacy.prototype, "embed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=view" }),
        __metadata("design:type", String)
    ], VideoVersionsUserPreferencesVideosPrivacy.prototype, "view", void 0);
    return VideoVersionsUserPreferencesVideosPrivacy;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserPreferencesVideosPrivacy = VideoVersionsUserPreferencesVideosPrivacy;
var VideoVersionsUserPreferencesVideos = /** @class */ (function (_super) {
    __extends(VideoVersionsUserPreferencesVideos, _super);
    function VideoVersionsUserPreferencesVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privacy" }),
        __metadata("design:type", VideoVersionsUserPreferencesVideosPrivacy)
    ], VideoVersionsUserPreferencesVideos.prototype, "privacy", void 0);
    return VideoVersionsUserPreferencesVideos;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserPreferencesVideos = VideoVersionsUserPreferencesVideos;
var VideoVersionsUserPreferences = /** @class */ (function (_super) {
    __extends(VideoVersionsUserPreferences, _super);
    function VideoVersionsUserPreferences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=videos" }),
        __metadata("design:type", VideoVersionsUserPreferencesVideos)
    ], VideoVersionsUserPreferences.prototype, "videos", void 0);
    return VideoVersionsUserPreferences;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserPreferences = VideoVersionsUserPreferences;
// VideoVersionsUserUploadQuotaLifetime
/**
 * Information about the user's lifetime upload usage.
**/
var VideoVersionsUserUploadQuotaLifetime = /** @class */ (function (_super) {
    __extends(VideoVersionsUserUploadQuotaLifetime, _super);
    function VideoVersionsUserUploadQuotaLifetime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserUploadQuotaLifetime.prototype, "free", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserUploadQuotaLifetime.prototype, "max", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserUploadQuotaLifetime.prototype, "used", void 0);
    return VideoVersionsUserUploadQuotaLifetime;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserUploadQuotaLifetime = VideoVersionsUserUploadQuotaLifetime;
// VideoVersionsUserUploadQuotaPeriodic
/**
 * Information about the user's usage for the current period.
**/
var VideoVersionsUserUploadQuotaPeriodic = /** @class */ (function (_super) {
    __extends(VideoVersionsUserUploadQuotaPeriodic, _super);
    function VideoVersionsUserUploadQuotaPeriodic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserUploadQuotaPeriodic.prototype, "free", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserUploadQuotaPeriodic.prototype, "max", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reset_date" }),
        __metadata("design:type", String)
    ], VideoVersionsUserUploadQuotaPeriodic.prototype, "resetDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserUploadQuotaPeriodic.prototype, "used", void 0);
    return VideoVersionsUserUploadQuotaPeriodic;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserUploadQuotaPeriodic = VideoVersionsUserUploadQuotaPeriodic;
var VideoVersionsUserUploadQuotaSpaceShowingEnum;
(function (VideoVersionsUserUploadQuotaSpaceShowingEnum) {
    VideoVersionsUserUploadQuotaSpaceShowingEnum["Lifetime"] = "lifetime";
    VideoVersionsUserUploadQuotaSpaceShowingEnum["Periodic"] = "periodic";
})(VideoVersionsUserUploadQuotaSpaceShowingEnum = exports.VideoVersionsUserUploadQuotaSpaceShowingEnum || (exports.VideoVersionsUserUploadQuotaSpaceShowingEnum = {}));
// VideoVersionsUserUploadQuotaSpace
/**
 * Information about the user's upload space remaining for the current period.
**/
var VideoVersionsUserUploadQuotaSpace = /** @class */ (function (_super) {
    __extends(VideoVersionsUserUploadQuotaSpace, _super);
    function VideoVersionsUserUploadQuotaSpace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserUploadQuotaSpace.prototype, "free", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserUploadQuotaSpace.prototype, "max", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=showing" }),
        __metadata("design:type", String)
    ], VideoVersionsUserUploadQuotaSpace.prototype, "showing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], VideoVersionsUserUploadQuotaSpace.prototype, "used", void 0);
    return VideoVersionsUserUploadQuotaSpace;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserUploadQuotaSpace = VideoVersionsUserUploadQuotaSpace;
// VideoVersionsUserUploadQuota
/**
 * Appears only when the user has upload access and is looking at their own user record.
**/
var VideoVersionsUserUploadQuota = /** @class */ (function (_super) {
    __extends(VideoVersionsUserUploadQuota, _super);
    function VideoVersionsUserUploadQuota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lifetime" }),
        __metadata("design:type", VideoVersionsUserUploadQuotaLifetime)
    ], VideoVersionsUserUploadQuota.prototype, "lifetime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=periodic" }),
        __metadata("design:type", VideoVersionsUserUploadQuotaPeriodic)
    ], VideoVersionsUserUploadQuota.prototype, "periodic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=space" }),
        __metadata("design:type", VideoVersionsUserUploadQuotaSpace)
    ], VideoVersionsUserUploadQuota.prototype, "space", void 0);
    return VideoVersionsUserUploadQuota;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserUploadQuota = VideoVersionsUserUploadQuota;
var VideoVersionsUserWebsites = /** @class */ (function (_super) {
    __extends(VideoVersionsUserWebsites, _super);
    function VideoVersionsUserWebsites() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], VideoVersionsUserWebsites.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], VideoVersionsUserWebsites.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], VideoVersionsUserWebsites.prototype, "name", void 0);
    return VideoVersionsUserWebsites;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUserWebsites = VideoVersionsUserWebsites;
// VideoVersionsUser
/**
 * The owner of the video version.
**/
var VideoVersionsUser = /** @class */ (function (_super) {
    __extends(VideoVersionsUser, _super);
    function VideoVersionsUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account" }),
        __metadata("design:type", String)
    ], VideoVersionsUser.prototype, "account", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bio" }),
        __metadata("design:type", String)
    ], VideoVersionsUser.prototype, "bio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content_filter" }),
        __metadata("design:type", Array)
    ], VideoVersionsUser.prototype, "contentFilter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], VideoVersionsUser.prototype, "createdTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], VideoVersionsUser.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], VideoVersionsUser.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], VideoVersionsUser.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", VideoVersionsUserMetadata)
    ], VideoVersionsUser.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], VideoVersionsUser.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pictures" }),
        __metadata("design:type", picture_1.Picture)
    ], VideoVersionsUser.prototype, "pictures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preferences" }),
        __metadata("design:type", VideoVersionsUserPreferences)
    ], VideoVersionsUser.prototype, "preferences", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], VideoVersionsUser.prototype, "resourceKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upload_quota" }),
        __metadata("design:type", VideoVersionsUserUploadQuota)
    ], VideoVersionsUser.prototype, "uploadQuota", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersionsUser.prototype, "uri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=websites", elemType: VideoVersionsUserWebsites }),
        __metadata("design:type", Array)
    ], VideoVersionsUser.prototype, "websites", void 0);
    return VideoVersionsUser;
}(utils_1.SpeakeasyBase));
exports.VideoVersionsUser = VideoVersionsUser;
var VideoVersions = /** @class */ (function (_super) {
    __extends(VideoVersions, _super);
    function VideoVersions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], VideoVersions.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=app" }),
        __metadata("design:type", apiapp_1.ApiApp)
    ], VideoVersions.prototype, "app", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], VideoVersions.prototype, "createdTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], VideoVersions.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filename" }),
        __metadata("design:type", String)
    ], VideoVersions.prototype, "filename", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filesize" }),
        __metadata("design:type", Number)
    ], VideoVersions.prototype, "filesize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", VideoVersionsMetadata)
    ], VideoVersions.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified_time" }),
        __metadata("design:type", String)
    ], VideoVersions.prototype, "modifiedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=play" }),
        __metadata("design:type", play_1.Play)
    ], VideoVersions.prototype, "play", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upload" }),
        __metadata("design:type", VideoVersionsUpload)
    ], VideoVersions.prototype, "upload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upload_date" }),
        __metadata("design:type", String)
    ], VideoVersions.prototype, "uploadDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoVersions.prototype, "uri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", VideoVersionsUser)
    ], VideoVersions.prototype, "user", void 0);
    return VideoVersions;
}(utils_1.SpeakeasyBase));
exports.VideoVersions = VideoVersions;
