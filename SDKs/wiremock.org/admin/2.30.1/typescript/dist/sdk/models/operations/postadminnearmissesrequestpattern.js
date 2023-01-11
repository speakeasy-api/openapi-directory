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
exports.PostAdminNearMissesRequestPatternResponse = exports.PostAdminNearMissesRequestPatternRequest = exports.PostAdminNearMissesRequestPattern200ApplicationJson = exports.PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses = exports.PostAdminNearMissesRequestPatternRequestBody = exports.PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials = void 0;
var utils_1 = require("../../../internal/utils");
// PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials
/**
 * Pre-emptive basic auth credentials to match against
**/
var PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials = /** @class */ (function (_super) {
    __extends(PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials, _super);
    function PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials.prototype, "username", void 0);
    return PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials;
}(utils_1.SpeakeasyBase));
exports.PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials = PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials;
var PostAdminNearMissesRequestPatternRequestBody = /** @class */ (function (_super) {
    __extends(PostAdminNearMissesRequestPatternRequestBody, _super);
    function PostAdminNearMissesRequestPatternRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=basicAuthCredentials" }),
        __metadata("design:type", PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials)
    ], PostAdminNearMissesRequestPatternRequestBody.prototype, "basicAuthCredentials", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bodyPatterns" }),
        __metadata("design:type", Array)
    ], PostAdminNearMissesRequestPatternRequestBody.prototype, "bodyPatterns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cookies" }),
        __metadata("design:type", Object)
    ], PostAdminNearMissesRequestPatternRequestBody.prototype, "cookies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=headers" }),
        __metadata("design:type", Object)
    ], PostAdminNearMissesRequestPatternRequestBody.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], PostAdminNearMissesRequestPatternRequestBody.prototype, "method", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=queryParameters" }),
        __metadata("design:type", Object)
    ], PostAdminNearMissesRequestPatternRequestBody.prototype, "queryParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PostAdminNearMissesRequestPatternRequestBody.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urlPath" }),
        __metadata("design:type", String)
    ], PostAdminNearMissesRequestPatternRequestBody.prototype, "urlPath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urlPathPattern" }),
        __metadata("design:type", String)
    ], PostAdminNearMissesRequestPatternRequestBody.prototype, "urlPathPattern", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urlPattern" }),
        __metadata("design:type", String)
    ], PostAdminNearMissesRequestPatternRequestBody.prototype, "urlPattern", void 0);
    return PostAdminNearMissesRequestPatternRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostAdminNearMissesRequestPatternRequestBody = PostAdminNearMissesRequestPatternRequestBody;
var PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses = /** @class */ (function (_super) {
    __extends(PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses, _super);
    function PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=absoluteUrl" }),
        __metadata("design:type", String)
    ], PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses.prototype, "absoluteUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cookies" }),
        __metadata("design:type", Object)
    ], PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses.prototype, "cookies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=headers" }),
        __metadata("design:type", Object)
    ], PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses.prototype, "method", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses.prototype, "url", void 0);
    return PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses;
}(utils_1.SpeakeasyBase));
exports.PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses = PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses;
var PostAdminNearMissesRequestPattern200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAdminNearMissesRequestPattern200ApplicationJson, _super);
    function PostAdminNearMissesRequestPattern200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nearMisses", elemType: PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses }),
        __metadata("design:type", Array)
    ], PostAdminNearMissesRequestPattern200ApplicationJson.prototype, "nearMisses", void 0);
    return PostAdminNearMissesRequestPattern200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostAdminNearMissesRequestPattern200ApplicationJson = PostAdminNearMissesRequestPattern200ApplicationJson;
var PostAdminNearMissesRequestPatternRequest = /** @class */ (function (_super) {
    __extends(PostAdminNearMissesRequestPatternRequest, _super);
    function PostAdminNearMissesRequestPatternRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostAdminNearMissesRequestPatternRequestBody)
    ], PostAdminNearMissesRequestPatternRequest.prototype, "request", void 0);
    return PostAdminNearMissesRequestPatternRequest;
}(utils_1.SpeakeasyBase));
exports.PostAdminNearMissesRequestPatternRequest = PostAdminNearMissesRequestPatternRequest;
var PostAdminNearMissesRequestPatternResponse = /** @class */ (function (_super) {
    __extends(PostAdminNearMissesRequestPatternResponse, _super);
    function PostAdminNearMissesRequestPatternResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAdminNearMissesRequestPatternResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAdminNearMissesRequestPatternResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAdminNearMissesRequestPattern200ApplicationJson)
    ], PostAdminNearMissesRequestPatternResponse.prototype, "postAdminNearMissesRequestPattern200ApplicationJSONObject", void 0);
    return PostAdminNearMissesRequestPatternResponse;
}(utils_1.SpeakeasyBase));
exports.PostAdminNearMissesRequestPatternResponse = PostAdminNearMissesRequestPatternResponse;
