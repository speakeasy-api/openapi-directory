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
exports.PostAdminRequestsCountResponse = exports.PostAdminRequestsCountRequest = exports.PostAdminRequestsCount200ApplicationJson = exports.PostAdminRequestsCountRequestBody = exports.PostAdminRequestsCountRequestBodyBasicAuthCredentials = void 0;
var utils_1 = require("../../../internal/utils");
// PostAdminRequestsCountRequestBodyBasicAuthCredentials
/**
 * Pre-emptive basic auth credentials to match against
**/
var PostAdminRequestsCountRequestBodyBasicAuthCredentials = /** @class */ (function (_super) {
    __extends(PostAdminRequestsCountRequestBodyBasicAuthCredentials, _super);
    function PostAdminRequestsCountRequestBodyBasicAuthCredentials() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], PostAdminRequestsCountRequestBodyBasicAuthCredentials.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], PostAdminRequestsCountRequestBodyBasicAuthCredentials.prototype, "username", void 0);
    return PostAdminRequestsCountRequestBodyBasicAuthCredentials;
}(utils_1.SpeakeasyBase));
exports.PostAdminRequestsCountRequestBodyBasicAuthCredentials = PostAdminRequestsCountRequestBodyBasicAuthCredentials;
var PostAdminRequestsCountRequestBody = /** @class */ (function (_super) {
    __extends(PostAdminRequestsCountRequestBody, _super);
    function PostAdminRequestsCountRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=basicAuthCredentials" }),
        __metadata("design:type", PostAdminRequestsCountRequestBodyBasicAuthCredentials)
    ], PostAdminRequestsCountRequestBody.prototype, "basicAuthCredentials", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bodyPatterns" }),
        __metadata("design:type", Array)
    ], PostAdminRequestsCountRequestBody.prototype, "bodyPatterns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cookies" }),
        __metadata("design:type", Object)
    ], PostAdminRequestsCountRequestBody.prototype, "cookies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=headers" }),
        __metadata("design:type", Object)
    ], PostAdminRequestsCountRequestBody.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], PostAdminRequestsCountRequestBody.prototype, "method", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=queryParameters" }),
        __metadata("design:type", Object)
    ], PostAdminRequestsCountRequestBody.prototype, "queryParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PostAdminRequestsCountRequestBody.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urlPath" }),
        __metadata("design:type", String)
    ], PostAdminRequestsCountRequestBody.prototype, "urlPath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urlPathPattern" }),
        __metadata("design:type", String)
    ], PostAdminRequestsCountRequestBody.prototype, "urlPathPattern", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urlPattern" }),
        __metadata("design:type", String)
    ], PostAdminRequestsCountRequestBody.prototype, "urlPattern", void 0);
    return PostAdminRequestsCountRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostAdminRequestsCountRequestBody = PostAdminRequestsCountRequestBody;
var PostAdminRequestsCount200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAdminRequestsCount200ApplicationJson, _super);
    function PostAdminRequestsCount200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], PostAdminRequestsCount200ApplicationJson.prototype, "count", void 0);
    return PostAdminRequestsCount200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostAdminRequestsCount200ApplicationJson = PostAdminRequestsCount200ApplicationJson;
var PostAdminRequestsCountRequest = /** @class */ (function (_super) {
    __extends(PostAdminRequestsCountRequest, _super);
    function PostAdminRequestsCountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostAdminRequestsCountRequestBody)
    ], PostAdminRequestsCountRequest.prototype, "request", void 0);
    return PostAdminRequestsCountRequest;
}(utils_1.SpeakeasyBase));
exports.PostAdminRequestsCountRequest = PostAdminRequestsCountRequest;
var PostAdminRequestsCountResponse = /** @class */ (function (_super) {
    __extends(PostAdminRequestsCountResponse, _super);
    function PostAdminRequestsCountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAdminRequestsCountResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAdminRequestsCountResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAdminRequestsCount200ApplicationJson)
    ], PostAdminRequestsCountResponse.prototype, "postAdminRequestsCount200ApplicationJSONObject", void 0);
    return PostAdminRequestsCountResponse;
}(utils_1.SpeakeasyBase));
exports.PostAdminRequestsCountResponse = PostAdminRequestsCountResponse;
