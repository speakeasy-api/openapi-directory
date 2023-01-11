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
exports.UserApiGetNamesResponse = exports.UserApiGetNamesRequest = exports.UserApiGetNamesQueryParams = exports.UserApiGetNamesNameMatchModeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var UserApiGetNamesNameMatchModeEnum;
(function (UserApiGetNamesNameMatchModeEnum) {
    UserApiGetNamesNameMatchModeEnum["Auto"] = "Auto";
    UserApiGetNamesNameMatchModeEnum["Partial"] = "Partial";
    UserApiGetNamesNameMatchModeEnum["StartsWith"] = "StartsWith";
    UserApiGetNamesNameMatchModeEnum["Exact"] = "Exact";
    UserApiGetNamesNameMatchModeEnum["Words"] = "Words";
})(UserApiGetNamesNameMatchModeEnum = exports.UserApiGetNamesNameMatchModeEnum || (exports.UserApiGetNamesNameMatchModeEnum = {}));
var UserApiGetNamesQueryParams = /** @class */ (function (_super) {
    __extends(UserApiGetNamesQueryParams, _super);
    function UserApiGetNamesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=includeDisabled" }),
        __metadata("design:type", Boolean)
    ], UserApiGetNamesQueryParams.prototype, "includeDisabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], UserApiGetNamesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=nameMatchMode" }),
        __metadata("design:type", String)
    ], UserApiGetNamesQueryParams.prototype, "nameMatchMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], UserApiGetNamesQueryParams.prototype, "query", void 0);
    return UserApiGetNamesQueryParams;
}(utils_1.SpeakeasyBase));
exports.UserApiGetNamesQueryParams = UserApiGetNamesQueryParams;
var UserApiGetNamesRequest = /** @class */ (function (_super) {
    __extends(UserApiGetNamesRequest, _super);
    function UserApiGetNamesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserApiGetNamesQueryParams)
    ], UserApiGetNamesRequest.prototype, "queryParams", void 0);
    return UserApiGetNamesRequest;
}(utils_1.SpeakeasyBase));
exports.UserApiGetNamesRequest = UserApiGetNamesRequest;
var UserApiGetNamesResponse = /** @class */ (function (_super) {
    __extends(UserApiGetNamesResponse, _super);
    function UserApiGetNamesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UserApiGetNamesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserApiGetNamesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UserApiGetNamesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], UserApiGetNamesResponse.prototype, "userApiGetNames200ApplicationJSONStrings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], UserApiGetNamesResponse.prototype, "userApiGetNames200ApplicationJsonpStrings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], UserApiGetNamesResponse.prototype, "userApiGetNames200TextJSONStrings", void 0);
    return UserApiGetNamesResponse;
}(utils_1.SpeakeasyBase));
exports.UserApiGetNamesResponse = UserApiGetNamesResponse;
