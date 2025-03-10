"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideosComments = void 0;
var utils = __importStar(require("../internal/utils"));
var operations = __importStar(require("./models/operations"));
var shared = __importStar(require("./models/shared"));
var VideosComments = /** @class */ (function () {
    function VideosComments(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * Add a comment to a video
     */
    VideosComments.prototype.createComment = function (req, security, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateCommentRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/videos/{video_id}/comments", req);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req, "requestBody", "json"), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.CreateCommentSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        var r = client.request(__assign({ url: url, method: "post", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.CreateCommentResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.matchContentType(contentType, "application/vnd.vimeo.comment+json")) {
                        res.comment = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.Comment);
                    }
                    break;
                case [400, 401, 403].includes(httpRes === null || httpRes === void 0 ? void 0 : httpRes.status):
                    if (utils.matchContentType(contentType, "application/vnd.vimeo.comment+json")) {
                        res.error = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.ErrorT);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Add a comment to a video
     */
    VideosComments.prototype.createCommentAlt1 = function (req, security, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateCommentAlt1Request(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/channels/{channel_id}/videos/{video_id}/comments", req);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req, "requestBody", "json"), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.CreateCommentAlt1Security(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        var r = client.request(__assign({ url: url, method: "post", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.CreateCommentAlt1Response({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.matchContentType(contentType, "application/vnd.vimeo.comment+json")) {
                        res.comment = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.Comment);
                    }
                    break;
                case [400, 401, 403].includes(httpRes === null || httpRes === void 0 ? void 0 : httpRes.status):
                    if (utils.matchContentType(contentType, "application/vnd.vimeo.comment+json")) {
                        res.error = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.ErrorT);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Add a reply to a video comment
     */
    VideosComments.prototype.createCommentReply = function (req, security, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateCommentReplyRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/videos/{video_id}/comments/{comment_id}/replies", req);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req, "requestBody", "json"), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.CreateCommentReplySecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        var r = client.request(__assign({ url: url, method: "post", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.CreateCommentReplyResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.matchContentType(contentType, "application/vnd.vimeo.comment+json")) {
                        res.comment = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.Comment);
                    }
                    break;
                case [400, 403].includes(httpRes === null || httpRes === void 0 ? void 0 : httpRes.status):
                    if (utils.matchContentType(contentType, "application/vnd.vimeo.comment+json")) {
                        res.error = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.ErrorT);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Delete a video comment
     */
    VideosComments.prototype.deleteComment = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteCommentRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/videos/{video_id}/comments/{comment_id}", req);
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.DeleteCommentSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var r = client.request(__assign({ url: url, method: "delete" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.DeleteCommentResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.error = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.ErrorT);
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.legacyError = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.LegacyError);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Edit a video comment
     */
    VideosComments.prototype.editComment = function (req, security, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EditCommentRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/videos/{video_id}/comments/{comment_id}", req);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req, "requestBody", "json"), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.EditCommentSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        var r = client.request(__assign({ url: url, method: "patch", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.EditCommentResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/vnd.vimeo.comment+json")) {
                        res.comment = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.Comment);
                    }
                    break;
                case [400, 403].includes(httpRes === null || httpRes === void 0 ? void 0 : httpRes.status):
                    if (utils.matchContentType(contentType, "application/vnd.vimeo.comment+json")) {
                        res.error = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.ErrorT);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Get a specific video comment
     */
    VideosComments.prototype.getComment = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCommentRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/videos/{video_id}/comments/{comment_id}", req);
        var client = this._securityClient || this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetCommentResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/vnd.vimeo.comment+json")) {
                        res.comment = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.Comment);
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.matchContentType(contentType, "application/vnd.vimeo.comment+json")) {
                        res.legacyError = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.LegacyError);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Get all the replies to a video comment
     */
    VideosComments.prototype.getCommentReplies = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCommentRepliesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/videos/{video_id}/comments/{comment_id}/replies", req);
        var client = this._securityClient || this._defaultClient;
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetCommentRepliesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/vnd.vimeo.comment+json")) {
                        res.comments = [];
                        var resFieldDepth = utils.getResFieldDepth(res);
                        res.comments = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.Comment, resFieldDepth);
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.matchContentType(contentType, "application/vnd.vimeo.comment+json")) {
                        res.legacyError = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.LegacyError);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Get all the comments on a video
     */
    VideosComments.prototype.getComments = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCommentsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/videos/{video_id}/comments", req);
        var client = this._securityClient || this._defaultClient;
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetCommentsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/vnd.vimeo.comment+json")) {
                        res.comments = [];
                        var resFieldDepth = utils.getResFieldDepth(res);
                        res.comments = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.Comment, resFieldDepth);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Get all the comments on a video
     */
    VideosComments.prototype.getCommentsAlt1 = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCommentsAlt1Request(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/channels/{channel_id}/videos/{video_id}/comments", req);
        var client = this._securityClient || this._defaultClient;
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetCommentsAlt1Response({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/vnd.vimeo.comment+json")) {
                        res.comments = [];
                        var resFieldDepth = utils.getResFieldDepth(res);
                        res.comments = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.Comment, resFieldDepth);
                    }
                    break;
            }
            return res;
        });
    };
    return VideosComments;
}());
exports.VideosComments = VideosComments;
