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
exports.UserPasswordResponse = exports.UserPasswordRequest = exports.UserPasswordRequests = exports.UserPasswordMultipartFormData = exports.UserPasswordApplicationJson = exports.UserPasswordPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UserPasswordPathParams = /** @class */ (function (_super) {
    __extends(UserPasswordPathParams, _super);
    function UserPasswordPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UserPasswordPathParams.prototype, "userId", void 0);
    return UserPasswordPathParams;
}(utils_1.SpeakeasyBase));
exports.UserPasswordPathParams = UserPasswordPathParams;
var UserPasswordApplicationJson = /** @class */ (function (_super) {
    __extends(UserPasswordApplicationJson, _super);
    function UserPasswordApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], UserPasswordApplicationJson.prototype, "password", void 0);
    return UserPasswordApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UserPasswordApplicationJson = UserPasswordApplicationJson;
var UserPasswordMultipartFormData = /** @class */ (function (_super) {
    __extends(UserPasswordMultipartFormData, _super);
    function UserPasswordMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=password" }),
        __metadata("design:type", String)
    ], UserPasswordMultipartFormData.prototype, "password", void 0);
    return UserPasswordMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.UserPasswordMultipartFormData = UserPasswordMultipartFormData;
var UserPasswordRequests = /** @class */ (function (_super) {
    __extends(UserPasswordRequests, _super);
    function UserPasswordRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UserPasswordApplicationJson)
    ], UserPasswordRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UserPasswordMultipartFormData)
    ], UserPasswordRequests.prototype, "object1", void 0);
    return UserPasswordRequests;
}(utils_1.SpeakeasyBase));
exports.UserPasswordRequests = UserPasswordRequests;
var UserPasswordRequest = /** @class */ (function (_super) {
    __extends(UserPasswordRequest, _super);
    function UserPasswordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserPasswordPathParams)
    ], UserPasswordRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserPasswordRequests)
    ], UserPasswordRequest.prototype, "request", void 0);
    return UserPasswordRequest;
}(utils_1.SpeakeasyBase));
exports.UserPasswordRequest = UserPasswordRequest;
var UserPasswordResponse = /** @class */ (function (_super) {
    __extends(UserPasswordResponse, _super);
    function UserPasswordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserPasswordResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UserPasswordResponse.prototype, "statusCode", void 0);
    return UserPasswordResponse;
}(utils_1.SpeakeasyBase));
exports.UserPasswordResponse = UserPasswordResponse;
