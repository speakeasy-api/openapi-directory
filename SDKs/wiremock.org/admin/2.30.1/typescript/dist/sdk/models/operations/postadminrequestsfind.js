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
exports.PostAdminRequestsFindResponse = exports.PostAdminRequestsFindRequest = exports.PostAdminRequestsFindRequestBody = exports.PostAdminRequestsFindRequestBodyBasicAuthCredentials = void 0;
var utils_1 = require("../../../internal/utils");
// PostAdminRequestsFindRequestBodyBasicAuthCredentials
/**
 * Pre-emptive basic auth credentials to match against
**/
var PostAdminRequestsFindRequestBodyBasicAuthCredentials = /** @class */ (function (_super) {
    __extends(PostAdminRequestsFindRequestBodyBasicAuthCredentials, _super);
    function PostAdminRequestsFindRequestBodyBasicAuthCredentials() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], PostAdminRequestsFindRequestBodyBasicAuthCredentials.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], PostAdminRequestsFindRequestBodyBasicAuthCredentials.prototype, "username", void 0);
    return PostAdminRequestsFindRequestBodyBasicAuthCredentials;
}(utils_1.SpeakeasyBase));
exports.PostAdminRequestsFindRequestBodyBasicAuthCredentials = PostAdminRequestsFindRequestBodyBasicAuthCredentials;
var PostAdminRequestsFindRequestBody = /** @class */ (function (_super) {
    __extends(PostAdminRequestsFindRequestBody, _super);
    function PostAdminRequestsFindRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=basicAuthCredentials" }),
        __metadata("design:type", PostAdminRequestsFindRequestBodyBasicAuthCredentials)
    ], PostAdminRequestsFindRequestBody.prototype, "basicAuthCredentials", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bodyPatterns" }),
        __metadata("design:type", Array)
    ], PostAdminRequestsFindRequestBody.prototype, "bodyPatterns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cookies" }),
        __metadata("design:type", Object)
    ], PostAdminRequestsFindRequestBody.prototype, "cookies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=headers" }),
        __metadata("design:type", Object)
    ], PostAdminRequestsFindRequestBody.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], PostAdminRequestsFindRequestBody.prototype, "method", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=queryParameters" }),
        __metadata("design:type", Object)
    ], PostAdminRequestsFindRequestBody.prototype, "queryParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PostAdminRequestsFindRequestBody.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urlPath" }),
        __metadata("design:type", String)
    ], PostAdminRequestsFindRequestBody.prototype, "urlPath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urlPathPattern" }),
        __metadata("design:type", String)
    ], PostAdminRequestsFindRequestBody.prototype, "urlPathPattern", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urlPattern" }),
        __metadata("design:type", String)
    ], PostAdminRequestsFindRequestBody.prototype, "urlPattern", void 0);
    return PostAdminRequestsFindRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostAdminRequestsFindRequestBody = PostAdminRequestsFindRequestBody;
var PostAdminRequestsFindRequest = /** @class */ (function (_super) {
    __extends(PostAdminRequestsFindRequest, _super);
    function PostAdminRequestsFindRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostAdminRequestsFindRequestBody)
    ], PostAdminRequestsFindRequest.prototype, "request", void 0);
    return PostAdminRequestsFindRequest;
}(utils_1.SpeakeasyBase));
exports.PostAdminRequestsFindRequest = PostAdminRequestsFindRequest;
var PostAdminRequestsFindResponse = /** @class */ (function (_super) {
    __extends(PostAdminRequestsFindResponse, _super);
    function PostAdminRequestsFindResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAdminRequestsFindResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAdminRequestsFindResponse.prototype, "statusCode", void 0);
    return PostAdminRequestsFindResponse;
}(utils_1.SpeakeasyBase));
exports.PostAdminRequestsFindResponse = PostAdminRequestsFindResponse;
