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
exports.UserTspUpdateResponse = exports.UserTspUpdateRequest = exports.UserTspUpdateRequests = exports.UserTspUpdateTspAccount = exports.UserTspUpdateTspAccountTspBridgeEnum = exports.UserTspUpdateTspAccountDialInNumbers = exports.UserTspUpdateTspAccountDialInNumbersTypeEnum = exports.UserTspUpdatePathParams = exports.UserTspUpdateTspIdEnum = void 0;
var utils_1 = require("../../../internal/utils");
var UserTspUpdateTspIdEnum;
(function (UserTspUpdateTspIdEnum) {
    UserTspUpdateTspIdEnum["One"] = "1";
    UserTspUpdateTspIdEnum["Two"] = "2";
})(UserTspUpdateTspIdEnum = exports.UserTspUpdateTspIdEnum || (exports.UserTspUpdateTspIdEnum = {}));
var UserTspUpdatePathParams = /** @class */ (function (_super) {
    __extends(UserTspUpdatePathParams, _super);
    function UserTspUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=tspId" }),
        __metadata("design:type", String)
    ], UserTspUpdatePathParams.prototype, "tspId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UserTspUpdatePathParams.prototype, "userId", void 0);
    return UserTspUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.UserTspUpdatePathParams = UserTspUpdatePathParams;
var UserTspUpdateTspAccountDialInNumbersTypeEnum;
(function (UserTspUpdateTspAccountDialInNumbersTypeEnum) {
    UserTspUpdateTspAccountDialInNumbersTypeEnum["Toll"] = "toll";
    UserTspUpdateTspAccountDialInNumbersTypeEnum["Tollfree"] = "tollfree";
    UserTspUpdateTspAccountDialInNumbersTypeEnum["MediaLink"] = "media_link";
})(UserTspUpdateTspAccountDialInNumbersTypeEnum = exports.UserTspUpdateTspAccountDialInNumbersTypeEnum || (exports.UserTspUpdateTspAccountDialInNumbersTypeEnum = {}));
var UserTspUpdateTspAccountDialInNumbers = /** @class */ (function (_super) {
    __extends(UserTspUpdateTspAccountDialInNumbers, _super);
    function UserTspUpdateTspAccountDialInNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], UserTspUpdateTspAccountDialInNumbers.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country_label" }),
        __metadata("design:type", String)
    ], UserTspUpdateTspAccountDialInNumbers.prototype, "countryLabel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], UserTspUpdateTspAccountDialInNumbers.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UserTspUpdateTspAccountDialInNumbers.prototype, "type", void 0);
    return UserTspUpdateTspAccountDialInNumbers;
}(utils_1.SpeakeasyBase));
exports.UserTspUpdateTspAccountDialInNumbers = UserTspUpdateTspAccountDialInNumbers;
var UserTspUpdateTspAccountTspBridgeEnum;
(function (UserTspUpdateTspAccountTspBridgeEnum) {
    UserTspUpdateTspAccountTspBridgeEnum["UsTspTb"] = "US_TSP_TB";
    UserTspUpdateTspAccountTspBridgeEnum["EuTspTb"] = "EU_TSP_TB";
})(UserTspUpdateTspAccountTspBridgeEnum = exports.UserTspUpdateTspAccountTspBridgeEnum || (exports.UserTspUpdateTspAccountTspBridgeEnum = {}));
// UserTspUpdateTspAccount
/**
 * TSP account.
**/
var UserTspUpdateTspAccount = /** @class */ (function (_super) {
    __extends(UserTspUpdateTspAccount, _super);
    function UserTspUpdateTspAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=conference_code, multipart_form, name=conference_code" }),
        __metadata("design:type", String)
    ], UserTspUpdateTspAccount.prototype, "conferenceCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dial_in_numbers, multipart_form, name=dial_in_numbers;json=true", elemType: UserTspUpdateTspAccountDialInNumbers }),
        __metadata("design:type", Array)
    ], UserTspUpdateTspAccount.prototype, "dialInNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=leader_pin, multipart_form, name=leader_pin" }),
        __metadata("design:type", String)
    ], UserTspUpdateTspAccount.prototype, "leaderPin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tsp_bridge, multipart_form, name=tsp_bridge" }),
        __metadata("design:type", String)
    ], UserTspUpdateTspAccount.prototype, "tspBridge", void 0);
    return UserTspUpdateTspAccount;
}(utils_1.SpeakeasyBase));
exports.UserTspUpdateTspAccount = UserTspUpdateTspAccount;
var UserTspUpdateRequests = /** @class */ (function (_super) {
    __extends(UserTspUpdateRequests, _super);
    function UserTspUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UserTspUpdateTspAccount)
    ], UserTspUpdateRequests.prototype, "tspAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UserTspUpdateTspAccount)
    ], UserTspUpdateRequests.prototype, "tspAccount1", void 0);
    return UserTspUpdateRequests;
}(utils_1.SpeakeasyBase));
exports.UserTspUpdateRequests = UserTspUpdateRequests;
var UserTspUpdateRequest = /** @class */ (function (_super) {
    __extends(UserTspUpdateRequest, _super);
    function UserTspUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserTspUpdatePathParams)
    ], UserTspUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserTspUpdateRequests)
    ], UserTspUpdateRequest.prototype, "request", void 0);
    return UserTspUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.UserTspUpdateRequest = UserTspUpdateRequest;
var UserTspUpdateResponse = /** @class */ (function (_super) {
    __extends(UserTspUpdateResponse, _super);
    function UserTspUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserTspUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UserTspUpdateResponse.prototype, "statusCode", void 0);
    return UserTspUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.UserTspUpdateResponse = UserTspUpdateResponse;
