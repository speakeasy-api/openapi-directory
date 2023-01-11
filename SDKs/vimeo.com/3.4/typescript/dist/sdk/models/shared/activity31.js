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
exports.Activity31 = exports.Activity31TypeEnum = exports.Activity31Metadata = exports.Activity31MetadataConnections = exports.Activity31MetadataConnectionsRelated = void 0;
var utils_1 = require("../../../internal/utils");
var category_1 = require("./category");
var channel_1 = require("./channel");
var video_1 = require("./video");
var group_1 = require("./group");
var tag_1 = require("./tag");
var user_1 = require("./user");
// Activity31MetadataConnectionsRelated
/**
 * Related content for this activity.
**/
var Activity31MetadataConnectionsRelated = /** @class */ (function (_super) {
    __extends(Activity31MetadataConnectionsRelated, _super);
    function Activity31MetadataConnectionsRelated() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], Activity31MetadataConnectionsRelated.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], Activity31MetadataConnectionsRelated.prototype, "uri", void 0);
    return Activity31MetadataConnectionsRelated;
}(utils_1.SpeakeasyBase));
exports.Activity31MetadataConnectionsRelated = Activity31MetadataConnectionsRelated;
// Activity31MetadataConnections
/**
 * A list of resource URIs related to the activity.
**/
var Activity31MetadataConnections = /** @class */ (function (_super) {
    __extends(Activity31MetadataConnections, _super);
    function Activity31MetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=related" }),
        __metadata("design:type", Activity31MetadataConnectionsRelated)
    ], Activity31MetadataConnections.prototype, "related", void 0);
    return Activity31MetadataConnections;
}(utils_1.SpeakeasyBase));
exports.Activity31MetadataConnections = Activity31MetadataConnections;
// Activity31Metadata
/**
 * The activity's metadata.
**/
var Activity31Metadata = /** @class */ (function (_super) {
    __extends(Activity31Metadata, _super);
    function Activity31Metadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connections" }),
        __metadata("design:type", Activity31MetadataConnections)
    ], Activity31Metadata.prototype, "connections", void 0);
    return Activity31Metadata;
}(utils_1.SpeakeasyBase));
exports.Activity31Metadata = Activity31Metadata;
var Activity31TypeEnum;
(function (Activity31TypeEnum) {
    Activity31TypeEnum["Appearance"] = "appearance";
    Activity31TypeEnum["Category"] = "category";
    Activity31TypeEnum["Channel"] = "channel";
    Activity31TypeEnum["FacebookFeed"] = "facebook_feed";
    Activity31TypeEnum["Group"] = "group";
    Activity31TypeEnum["Like"] = "like";
    Activity31TypeEnum["Ondemand"] = "ondemand";
    Activity31TypeEnum["Share"] = "share";
    Activity31TypeEnum["Tag"] = "tag";
    Activity31TypeEnum["TwitterTimeline"] = "twitter_timeline";
    Activity31TypeEnum["Upload"] = "upload";
})(Activity31TypeEnum = exports.Activity31TypeEnum || (exports.Activity31TypeEnum = {}));
var Activity31 = /** @class */ (function (_super) {
    __extends(Activity31, _super);
    function Activity31() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=category" }),
        __metadata("design:type", category_1.Category)
    ], Activity31.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", channel_1.Channel)
    ], Activity31.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clip" }),
        __metadata("design:type", video_1.Video)
    ], Activity31.prototype, "clip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group" }),
        __metadata("design:type", group_1.Group)
    ], Activity31.prototype, "group", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", Activity31Metadata)
    ], Activity31.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag" }),
        __metadata("design:type", tag_1.Tag)
    ], Activity31.prototype, "tag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time" }),
        __metadata("design:type", String)
    ], Activity31.prototype, "time", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Activity31.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", user_1.User)
    ], Activity31.prototype, "user", void 0);
    return Activity31;
}(utils_1.SpeakeasyBase));
exports.Activity31 = Activity31;
