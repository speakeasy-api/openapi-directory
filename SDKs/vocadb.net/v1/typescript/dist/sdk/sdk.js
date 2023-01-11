"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var activityentryapi_1 = require("./activityentryapi");
var albumapi_1 = require("./albumapi");
var artistapi_1 = require("./artistapi");
var commentapi_1 = require("./commentapi");
var discussionapi_1 = require("./discussionapi");
var entryapi_1 = require("./entryapi");
var entrytypesapi_1 = require("./entrytypesapi");
var pvapi_1 = require("./pvapi");
var releaseeventapi_1 = require("./releaseeventapi");
var releaseeventseriesapi_1 = require("./releaseeventseriesapi");
var resourcesapi_1 = require("./resourcesapi");
var songapi_1 = require("./songapi");
var songlistapi_1 = require("./songlistapi");
var tagapi_1 = require("./tagapi");
var userapi_1 = require("./userapi");
var venueapi_1 = require("./venueapi");
exports.ServerList = [
    "https://vocadb.net",
];
var SDK = /** @class */ (function () {
    function SDK(props) {
        var _a, _b;
        this._language = "typescript";
        this._sdkVersion = "0.0.1";
        this._genVersion = "internal";
        this._serverURL = (_a = props.serverUrl) !== null && _a !== void 0 ? _a : exports.ServerList[0];
        this._defaultClient = (_b = props.defaultClient) !== null && _b !== void 0 ? _b : axios_1.default.create({ baseURL: this._serverURL });
        this._securityClient = this._defaultClient;
        this.activityEntryApi = new activityentryapi_1.ActivityEntryApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.albumApi = new albumapi_1.AlbumApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.artistApi = new artistapi_1.ArtistApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.commentApi = new commentapi_1.CommentApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.discussionApi = new discussionapi_1.DiscussionApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.entryApi = new entryapi_1.EntryApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.entryTypesApi = new entrytypesapi_1.EntryTypesApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.pvApi = new pvapi_1.PvApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.releaseEventApi = new releaseeventapi_1.ReleaseEventApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.releaseEventSeriesApi = new releaseeventseriesapi_1.ReleaseEventSeriesApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.resourcesApi = new resourcesapi_1.ResourcesApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.songApi = new songapi_1.SongApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.songListApi = new songlistapi_1.SongListApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.tagApi = new tagapi_1.TagApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.userApi = new userapi_1.UserApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.venueApi = new venueapi_1.VenueApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;
