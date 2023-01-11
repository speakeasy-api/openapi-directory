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
exports.UserTspDeleteResponse = exports.UserTspDeleteRequest = exports.UserTspDeletePathParams = exports.UserTspDeleteTspIdEnum = void 0;
var utils_1 = require("../../../internal/utils");
var UserTspDeleteTspIdEnum;
(function (UserTspDeleteTspIdEnum) {
    UserTspDeleteTspIdEnum["One"] = "1";
    UserTspDeleteTspIdEnum["Two"] = "2";
})(UserTspDeleteTspIdEnum = exports.UserTspDeleteTspIdEnum || (exports.UserTspDeleteTspIdEnum = {}));
var UserTspDeletePathParams = /** @class */ (function (_super) {
    __extends(UserTspDeletePathParams, _super);
    function UserTspDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=tspId" }),
        __metadata("design:type", String)
    ], UserTspDeletePathParams.prototype, "tspId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UserTspDeletePathParams.prototype, "userId", void 0);
    return UserTspDeletePathParams;
}(utils_1.SpeakeasyBase));
exports.UserTspDeletePathParams = UserTspDeletePathParams;
var UserTspDeleteRequest = /** @class */ (function (_super) {
    __extends(UserTspDeleteRequest, _super);
    function UserTspDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserTspDeletePathParams)
    ], UserTspDeleteRequest.prototype, "pathParams", void 0);
    return UserTspDeleteRequest;
}(utils_1.SpeakeasyBase));
exports.UserTspDeleteRequest = UserTspDeleteRequest;
var UserTspDeleteResponse = /** @class */ (function (_super) {
    __extends(UserTspDeleteResponse, _super);
    function UserTspDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserTspDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UserTspDeleteResponse.prototype, "statusCode", void 0);
    return UserTspDeleteResponse;
}(utils_1.SpeakeasyBase));
exports.UserTspDeleteResponse = UserTspDeleteResponse;
