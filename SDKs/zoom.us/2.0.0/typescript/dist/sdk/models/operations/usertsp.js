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
exports.UserTspResponse = exports.UserTspRequest = exports.UserTspTspAccount = exports.UserTspTspAccountTspBridgeEnum = exports.UserTspTspAccountDialInNumbers = exports.UserTspTspAccountDialInNumbersTypeEnum = exports.UserTspPathParams = exports.UserTspTspIdEnum = void 0;
var utils_1 = require("../../../internal/utils");
var UserTspTspIdEnum;
(function (UserTspTspIdEnum) {
    UserTspTspIdEnum["One"] = "1";
    UserTspTspIdEnum["Two"] = "2";
})(UserTspTspIdEnum = exports.UserTspTspIdEnum || (exports.UserTspTspIdEnum = {}));
var UserTspPathParams = /** @class */ (function (_super) {
    __extends(UserTspPathParams, _super);
    function UserTspPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=tspId" }),
        __metadata("design:type", String)
    ], UserTspPathParams.prototype, "tspId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UserTspPathParams.prototype, "userId", void 0);
    return UserTspPathParams;
}(utils_1.SpeakeasyBase));
exports.UserTspPathParams = UserTspPathParams;
var UserTspTspAccountDialInNumbersTypeEnum;
(function (UserTspTspAccountDialInNumbersTypeEnum) {
    UserTspTspAccountDialInNumbersTypeEnum["Toll"] = "toll";
    UserTspTspAccountDialInNumbersTypeEnum["Tollfree"] = "tollfree";
    UserTspTspAccountDialInNumbersTypeEnum["MediaLink"] = "media_link";
})(UserTspTspAccountDialInNumbersTypeEnum = exports.UserTspTspAccountDialInNumbersTypeEnum || (exports.UserTspTspAccountDialInNumbersTypeEnum = {}));
var UserTspTspAccountDialInNumbers = /** @class */ (function (_super) {
    __extends(UserTspTspAccountDialInNumbers, _super);
    function UserTspTspAccountDialInNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], UserTspTspAccountDialInNumbers.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country_label" }),
        __metadata("design:type", String)
    ], UserTspTspAccountDialInNumbers.prototype, "countryLabel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], UserTspTspAccountDialInNumbers.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UserTspTspAccountDialInNumbers.prototype, "type", void 0);
    return UserTspTspAccountDialInNumbers;
}(utils_1.SpeakeasyBase));
exports.UserTspTspAccountDialInNumbers = UserTspTspAccountDialInNumbers;
var UserTspTspAccountTspBridgeEnum;
(function (UserTspTspAccountTspBridgeEnum) {
    UserTspTspAccountTspBridgeEnum["UsTspTb"] = "US_TSP_TB";
    UserTspTspAccountTspBridgeEnum["EuTspTb"] = "EU_TSP_TB";
})(UserTspTspAccountTspBridgeEnum = exports.UserTspTspAccountTspBridgeEnum || (exports.UserTspTspAccountTspBridgeEnum = {}));
// UserTspTspAccount
/**
 * TSP account of the user.
**/
var UserTspTspAccount = /** @class */ (function (_super) {
    __extends(UserTspTspAccount, _super);
    function UserTspTspAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=conference_code" }),
        __metadata("design:type", String)
    ], UserTspTspAccount.prototype, "conferenceCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dial_in_numbers", elemType: UserTspTspAccountDialInNumbers }),
        __metadata("design:type", Array)
    ], UserTspTspAccount.prototype, "dialInNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], UserTspTspAccount.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=leader_pin" }),
        __metadata("design:type", String)
    ], UserTspTspAccount.prototype, "leaderPin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tsp_bridge" }),
        __metadata("design:type", String)
    ], UserTspTspAccount.prototype, "tspBridge", void 0);
    return UserTspTspAccount;
}(utils_1.SpeakeasyBase));
exports.UserTspTspAccount = UserTspTspAccount;
var UserTspRequest = /** @class */ (function (_super) {
    __extends(UserTspRequest, _super);
    function UserTspRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserTspPathParams)
    ], UserTspRequest.prototype, "pathParams", void 0);
    return UserTspRequest;
}(utils_1.SpeakeasyBase));
exports.UserTspRequest = UserTspRequest;
var UserTspResponse = /** @class */ (function (_super) {
    __extends(UserTspResponse, _super);
    function UserTspResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UserTspResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserTspResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UserTspResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserTspTspAccount)
    ], UserTspResponse.prototype, "tspAccount", void 0);
    return UserTspResponse;
}(utils_1.SpeakeasyBase));
exports.UserTspResponse = UserTspResponse;
