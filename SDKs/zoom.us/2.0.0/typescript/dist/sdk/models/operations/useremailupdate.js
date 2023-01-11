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
exports.UserEmailUpdateResponse = exports.UserEmailUpdateRequest = exports.UserEmailUpdateRequests = exports.UserEmailUpdateMultipartFormData = exports.UserEmailUpdateApplicationJson = exports.UserEmailUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UserEmailUpdatePathParams = /** @class */ (function (_super) {
    __extends(UserEmailUpdatePathParams, _super);
    function UserEmailUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UserEmailUpdatePathParams.prototype, "userId", void 0);
    return UserEmailUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.UserEmailUpdatePathParams = UserEmailUpdatePathParams;
var UserEmailUpdateApplicationJson = /** @class */ (function (_super) {
    __extends(UserEmailUpdateApplicationJson, _super);
    function UserEmailUpdateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UserEmailUpdateApplicationJson.prototype, "email", void 0);
    return UserEmailUpdateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UserEmailUpdateApplicationJson = UserEmailUpdateApplicationJson;
var UserEmailUpdateMultipartFormData = /** @class */ (function (_super) {
    __extends(UserEmailUpdateMultipartFormData, _super);
    function UserEmailUpdateMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=email" }),
        __metadata("design:type", String)
    ], UserEmailUpdateMultipartFormData.prototype, "email", void 0);
    return UserEmailUpdateMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.UserEmailUpdateMultipartFormData = UserEmailUpdateMultipartFormData;
var UserEmailUpdateRequests = /** @class */ (function (_super) {
    __extends(UserEmailUpdateRequests, _super);
    function UserEmailUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UserEmailUpdateApplicationJson)
    ], UserEmailUpdateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UserEmailUpdateMultipartFormData)
    ], UserEmailUpdateRequests.prototype, "object1", void 0);
    return UserEmailUpdateRequests;
}(utils_1.SpeakeasyBase));
exports.UserEmailUpdateRequests = UserEmailUpdateRequests;
var UserEmailUpdateRequest = /** @class */ (function (_super) {
    __extends(UserEmailUpdateRequest, _super);
    function UserEmailUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserEmailUpdatePathParams)
    ], UserEmailUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserEmailUpdateRequests)
    ], UserEmailUpdateRequest.prototype, "request", void 0);
    return UserEmailUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.UserEmailUpdateRequest = UserEmailUpdateRequest;
var UserEmailUpdateResponse = /** @class */ (function (_super) {
    __extends(UserEmailUpdateResponse, _super);
    function UserEmailUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserEmailUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UserEmailUpdateResponse.prototype, "statusCode", void 0);
    return UserEmailUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.UserEmailUpdateResponse = UserEmailUpdateResponse;
