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
exports.UserApiPostAlbumStatusResponse = exports.UserApiPostAlbumStatusRequest = exports.UserApiPostAlbumStatusQueryParams = exports.UserApiPostAlbumStatusMediaTypeEnum = exports.UserApiPostAlbumStatusCollectionStatusEnum = exports.UserApiPostAlbumStatusPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UserApiPostAlbumStatusPathParams = /** @class */ (function (_super) {
    __extends(UserApiPostAlbumStatusPathParams, _super);
    function UserApiPostAlbumStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=albumId" }),
        __metadata("design:type", Number)
    ], UserApiPostAlbumStatusPathParams.prototype, "albumId", void 0);
    return UserApiPostAlbumStatusPathParams;
}(utils_1.SpeakeasyBase));
exports.UserApiPostAlbumStatusPathParams = UserApiPostAlbumStatusPathParams;
var UserApiPostAlbumStatusCollectionStatusEnum;
(function (UserApiPostAlbumStatusCollectionStatusEnum) {
    UserApiPostAlbumStatusCollectionStatusEnum["Nothing"] = "Nothing";
    UserApiPostAlbumStatusCollectionStatusEnum["Wishlisted"] = "Wishlisted";
    UserApiPostAlbumStatusCollectionStatusEnum["Ordered"] = "Ordered";
    UserApiPostAlbumStatusCollectionStatusEnum["Owned"] = "Owned";
})(UserApiPostAlbumStatusCollectionStatusEnum = exports.UserApiPostAlbumStatusCollectionStatusEnum || (exports.UserApiPostAlbumStatusCollectionStatusEnum = {}));
var UserApiPostAlbumStatusMediaTypeEnum;
(function (UserApiPostAlbumStatusMediaTypeEnum) {
    UserApiPostAlbumStatusMediaTypeEnum["PhysicalDisc"] = "PhysicalDisc";
    UserApiPostAlbumStatusMediaTypeEnum["DigitalDownload"] = "DigitalDownload";
    UserApiPostAlbumStatusMediaTypeEnum["Other"] = "Other";
})(UserApiPostAlbumStatusMediaTypeEnum = exports.UserApiPostAlbumStatusMediaTypeEnum || (exports.UserApiPostAlbumStatusMediaTypeEnum = {}));
var UserApiPostAlbumStatusQueryParams = /** @class */ (function (_super) {
    __extends(UserApiPostAlbumStatusQueryParams, _super);
    function UserApiPostAlbumStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=collectionStatus" }),
        __metadata("design:type", String)
    ], UserApiPostAlbumStatusQueryParams.prototype, "collectionStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=mediaType" }),
        __metadata("design:type", String)
    ], UserApiPostAlbumStatusQueryParams.prototype, "mediaType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=rating" }),
        __metadata("design:type", Number)
    ], UserApiPostAlbumStatusQueryParams.prototype, "rating", void 0);
    return UserApiPostAlbumStatusQueryParams;
}(utils_1.SpeakeasyBase));
exports.UserApiPostAlbumStatusQueryParams = UserApiPostAlbumStatusQueryParams;
var UserApiPostAlbumStatusRequest = /** @class */ (function (_super) {
    __extends(UserApiPostAlbumStatusRequest, _super);
    function UserApiPostAlbumStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserApiPostAlbumStatusPathParams)
    ], UserApiPostAlbumStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserApiPostAlbumStatusQueryParams)
    ], UserApiPostAlbumStatusRequest.prototype, "queryParams", void 0);
    return UserApiPostAlbumStatusRequest;
}(utils_1.SpeakeasyBase));
exports.UserApiPostAlbumStatusRequest = UserApiPostAlbumStatusRequest;
var UserApiPostAlbumStatusResponse = /** @class */ (function (_super) {
    __extends(UserApiPostAlbumStatusResponse, _super);
    function UserApiPostAlbumStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserApiPostAlbumStatusResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UserApiPostAlbumStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserApiPostAlbumStatusResponse.prototype, "userApiPostAlbumStatus200ApplicationJSONString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserApiPostAlbumStatusResponse.prototype, "userApiPostAlbumStatus200ApplicationJavascriptString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserApiPostAlbumStatusResponse.prototype, "userApiPostAlbumStatus200ApplicationJsonpString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserApiPostAlbumStatusResponse.prototype, "userApiPostAlbumStatus200ApplicationXMLString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserApiPostAlbumStatusResponse.prototype, "userApiPostAlbumStatus200TextJSONString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserApiPostAlbumStatusResponse.prototype, "userApiPostAlbumStatus200TextJavascriptString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserApiPostAlbumStatusResponse.prototype, "userApiPostAlbumStatus200TextXMLString", void 0);
    return UserApiPostAlbumStatusResponse;
}(utils_1.SpeakeasyBase));
exports.UserApiPostAlbumStatusResponse = UserApiPostAlbumStatusResponse;
