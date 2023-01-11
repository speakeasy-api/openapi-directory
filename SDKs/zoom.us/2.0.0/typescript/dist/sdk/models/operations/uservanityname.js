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
exports.UserVanityNameResponse = exports.UserVanityNameRequest = exports.UserVanityName200ApplicationJson = exports.UserVanityNameQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var UserVanityNameQueryParams = /** @class */ (function (_super) {
    __extends(UserVanityNameQueryParams, _super);
    function UserVanityNameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vanity_name" }),
        __metadata("design:type", String)
    ], UserVanityNameQueryParams.prototype, "vanityName", void 0);
    return UserVanityNameQueryParams;
}(utils_1.SpeakeasyBase));
exports.UserVanityNameQueryParams = UserVanityNameQueryParams;
var UserVanityName200ApplicationJson = /** @class */ (function (_super) {
    __extends(UserVanityName200ApplicationJson, _super);
    function UserVanityName200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=existed" }),
        __metadata("design:type", Boolean)
    ], UserVanityName200ApplicationJson.prototype, "existed", void 0);
    return UserVanityName200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UserVanityName200ApplicationJson = UserVanityName200ApplicationJson;
var UserVanityNameRequest = /** @class */ (function (_super) {
    __extends(UserVanityNameRequest, _super);
    function UserVanityNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserVanityNameQueryParams)
    ], UserVanityNameRequest.prototype, "queryParams", void 0);
    return UserVanityNameRequest;
}(utils_1.SpeakeasyBase));
exports.UserVanityNameRequest = UserVanityNameRequest;
var UserVanityNameResponse = /** @class */ (function (_super) {
    __extends(UserVanityNameResponse, _super);
    function UserVanityNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UserVanityNameResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserVanityNameResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UserVanityNameResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserVanityName200ApplicationJson)
    ], UserVanityNameResponse.prototype, "userVanityName200ApplicationJSONObject", void 0);
    return UserVanityNameResponse;
}(utils_1.SpeakeasyBase));
exports.UserVanityNameResponse = UserVanityNameResponse;
