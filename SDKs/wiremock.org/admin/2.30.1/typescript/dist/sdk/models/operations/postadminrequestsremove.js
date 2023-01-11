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
exports.PostAdminRequestsRemoveResponse = exports.PostAdminRequestsRemoveRequest = exports.PostAdminRequestsRemoveRequestBody = exports.PostAdminRequestsRemoveRequestBodyBasicAuthCredentials = void 0;
var utils_1 = require("../../../internal/utils");
// PostAdminRequestsRemoveRequestBodyBasicAuthCredentials
/**
 * Pre-emptive basic auth credentials to match against
**/
var PostAdminRequestsRemoveRequestBodyBasicAuthCredentials = /** @class */ (function (_super) {
    __extends(PostAdminRequestsRemoveRequestBodyBasicAuthCredentials, _super);
    function PostAdminRequestsRemoveRequestBodyBasicAuthCredentials() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], PostAdminRequestsRemoveRequestBodyBasicAuthCredentials.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], PostAdminRequestsRemoveRequestBodyBasicAuthCredentials.prototype, "username", void 0);
    return PostAdminRequestsRemoveRequestBodyBasicAuthCredentials;
}(utils_1.SpeakeasyBase));
exports.PostAdminRequestsRemoveRequestBodyBasicAuthCredentials = PostAdminRequestsRemoveRequestBodyBasicAuthCredentials;
var PostAdminRequestsRemoveRequestBody = /** @class */ (function (_super) {
    __extends(PostAdminRequestsRemoveRequestBody, _super);
    function PostAdminRequestsRemoveRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=basicAuthCredentials" }),
        __metadata("design:type", PostAdminRequestsRemoveRequestBodyBasicAuthCredentials)
    ], PostAdminRequestsRemoveRequestBody.prototype, "basicAuthCredentials", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bodyPatterns" }),
        __metadata("design:type", Array)
    ], PostAdminRequestsRemoveRequestBody.prototype, "bodyPatterns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cookies" }),
        __metadata("design:type", Object)
    ], PostAdminRequestsRemoveRequestBody.prototype, "cookies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=headers" }),
        __metadata("design:type", Object)
    ], PostAdminRequestsRemoveRequestBody.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], PostAdminRequestsRemoveRequestBody.prototype, "method", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=queryParameters" }),
        __metadata("design:type", Object)
    ], PostAdminRequestsRemoveRequestBody.prototype, "queryParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PostAdminRequestsRemoveRequestBody.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urlPath" }),
        __metadata("design:type", String)
    ], PostAdminRequestsRemoveRequestBody.prototype, "urlPath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urlPathPattern" }),
        __metadata("design:type", String)
    ], PostAdminRequestsRemoveRequestBody.prototype, "urlPathPattern", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urlPattern" }),
        __metadata("design:type", String)
    ], PostAdminRequestsRemoveRequestBody.prototype, "urlPattern", void 0);
    return PostAdminRequestsRemoveRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostAdminRequestsRemoveRequestBody = PostAdminRequestsRemoveRequestBody;
var PostAdminRequestsRemoveRequest = /** @class */ (function (_super) {
    __extends(PostAdminRequestsRemoveRequest, _super);
    function PostAdminRequestsRemoveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostAdminRequestsRemoveRequestBody)
    ], PostAdminRequestsRemoveRequest.prototype, "request", void 0);
    return PostAdminRequestsRemoveRequest;
}(utils_1.SpeakeasyBase));
exports.PostAdminRequestsRemoveRequest = PostAdminRequestsRemoveRequest;
var PostAdminRequestsRemoveResponse = /** @class */ (function (_super) {
    __extends(PostAdminRequestsRemoveResponse, _super);
    function PostAdminRequestsRemoveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAdminRequestsRemoveResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAdminRequestsRemoveResponse.prototype, "statusCode", void 0);
    return PostAdminRequestsRemoveResponse;
}(utils_1.SpeakeasyBase));
exports.PostAdminRequestsRemoveResponse = PostAdminRequestsRemoveResponse;
