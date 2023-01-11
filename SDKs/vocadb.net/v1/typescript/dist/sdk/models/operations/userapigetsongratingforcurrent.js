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
exports.UserApiGetSongRatingForCurrentResponse = exports.UserApiGetSongRatingForCurrentRequest = exports.UserApiGetSongRatingForCurrent200TextJsonEnum = exports.UserApiGetSongRatingForCurrent200ApplicationJsonpEnum = exports.UserApiGetSongRatingForCurrent200ApplicationJsonEnum = exports.UserApiGetSongRatingForCurrentPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UserApiGetSongRatingForCurrentPathParams = /** @class */ (function (_super) {
    __extends(UserApiGetSongRatingForCurrentPathParams, _super);
    function UserApiGetSongRatingForCurrentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=songId" }),
        __metadata("design:type", Number)
    ], UserApiGetSongRatingForCurrentPathParams.prototype, "songId", void 0);
    return UserApiGetSongRatingForCurrentPathParams;
}(utils_1.SpeakeasyBase));
exports.UserApiGetSongRatingForCurrentPathParams = UserApiGetSongRatingForCurrentPathParams;
var UserApiGetSongRatingForCurrent200ApplicationJsonEnum;
(function (UserApiGetSongRatingForCurrent200ApplicationJsonEnum) {
    UserApiGetSongRatingForCurrent200ApplicationJsonEnum["Nothing"] = "Nothing";
    UserApiGetSongRatingForCurrent200ApplicationJsonEnum["Dislike"] = "Dislike";
    UserApiGetSongRatingForCurrent200ApplicationJsonEnum["Like"] = "Like";
    UserApiGetSongRatingForCurrent200ApplicationJsonEnum["Favorite"] = "Favorite";
})(UserApiGetSongRatingForCurrent200ApplicationJsonEnum = exports.UserApiGetSongRatingForCurrent200ApplicationJsonEnum || (exports.UserApiGetSongRatingForCurrent200ApplicationJsonEnum = {}));
var UserApiGetSongRatingForCurrent200ApplicationJsonpEnum;
(function (UserApiGetSongRatingForCurrent200ApplicationJsonpEnum) {
    UserApiGetSongRatingForCurrent200ApplicationJsonpEnum["Nothing"] = "Nothing";
    UserApiGetSongRatingForCurrent200ApplicationJsonpEnum["Dislike"] = "Dislike";
    UserApiGetSongRatingForCurrent200ApplicationJsonpEnum["Like"] = "Like";
    UserApiGetSongRatingForCurrent200ApplicationJsonpEnum["Favorite"] = "Favorite";
})(UserApiGetSongRatingForCurrent200ApplicationJsonpEnum = exports.UserApiGetSongRatingForCurrent200ApplicationJsonpEnum || (exports.UserApiGetSongRatingForCurrent200ApplicationJsonpEnum = {}));
var UserApiGetSongRatingForCurrent200TextJsonEnum;
(function (UserApiGetSongRatingForCurrent200TextJsonEnum) {
    UserApiGetSongRatingForCurrent200TextJsonEnum["Nothing"] = "Nothing";
    UserApiGetSongRatingForCurrent200TextJsonEnum["Dislike"] = "Dislike";
    UserApiGetSongRatingForCurrent200TextJsonEnum["Like"] = "Like";
    UserApiGetSongRatingForCurrent200TextJsonEnum["Favorite"] = "Favorite";
})(UserApiGetSongRatingForCurrent200TextJsonEnum = exports.UserApiGetSongRatingForCurrent200TextJsonEnum || (exports.UserApiGetSongRatingForCurrent200TextJsonEnum = {}));
var UserApiGetSongRatingForCurrentRequest = /** @class */ (function (_super) {
    __extends(UserApiGetSongRatingForCurrentRequest, _super);
    function UserApiGetSongRatingForCurrentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserApiGetSongRatingForCurrentPathParams)
    ], UserApiGetSongRatingForCurrentRequest.prototype, "pathParams", void 0);
    return UserApiGetSongRatingForCurrentRequest;
}(utils_1.SpeakeasyBase));
exports.UserApiGetSongRatingForCurrentRequest = UserApiGetSongRatingForCurrentRequest;
var UserApiGetSongRatingForCurrentResponse = /** @class */ (function (_super) {
    __extends(UserApiGetSongRatingForCurrentResponse, _super);
    function UserApiGetSongRatingForCurrentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UserApiGetSongRatingForCurrentResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserApiGetSongRatingForCurrentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UserApiGetSongRatingForCurrentResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserApiGetSongRatingForCurrentResponse.prototype, "userApiGetSongRatingForCurrent200ApplicationJSONStringEnum", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserApiGetSongRatingForCurrentResponse.prototype, "userApiGetSongRatingForCurrent200ApplicationJsonpStringEnum", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserApiGetSongRatingForCurrentResponse.prototype, "userApiGetSongRatingForCurrent200TextJSONStringEnum", void 0);
    return UserApiGetSongRatingForCurrentResponse;
}(utils_1.SpeakeasyBase));
exports.UserApiGetSongRatingForCurrentResponse = UserApiGetSongRatingForCurrentResponse;
