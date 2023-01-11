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
exports.UserTsPsResponse = exports.UserTsPsRequest = exports.UserTsPs200ApplicationJson = exports.UserTsPs200ApplicationJsonTspAccountsList = exports.UserTsPs200ApplicationJsonTspAccountsListTspBridgeEnum = exports.UserTsPs200ApplicationJsonTspAccountsListDialInNumbers = exports.UserTsPs200ApplicationJsonTspAccountsListDialInNumbersTypeEnum = exports.UserTsPsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UserTsPsPathParams = /** @class */ (function (_super) {
    __extends(UserTsPsPathParams, _super);
    function UserTsPsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UserTsPsPathParams.prototype, "userId", void 0);
    return UserTsPsPathParams;
}(utils_1.SpeakeasyBase));
exports.UserTsPsPathParams = UserTsPsPathParams;
var UserTsPs200ApplicationJsonTspAccountsListDialInNumbersTypeEnum;
(function (UserTsPs200ApplicationJsonTspAccountsListDialInNumbersTypeEnum) {
    UserTsPs200ApplicationJsonTspAccountsListDialInNumbersTypeEnum["Toll"] = "toll";
    UserTsPs200ApplicationJsonTspAccountsListDialInNumbersTypeEnum["Tollfree"] = "tollfree";
    UserTsPs200ApplicationJsonTspAccountsListDialInNumbersTypeEnum["MediaLink"] = "media_link";
})(UserTsPs200ApplicationJsonTspAccountsListDialInNumbersTypeEnum = exports.UserTsPs200ApplicationJsonTspAccountsListDialInNumbersTypeEnum || (exports.UserTsPs200ApplicationJsonTspAccountsListDialInNumbersTypeEnum = {}));
var UserTsPs200ApplicationJsonTspAccountsListDialInNumbers = /** @class */ (function (_super) {
    __extends(UserTsPs200ApplicationJsonTspAccountsListDialInNumbers, _super);
    function UserTsPs200ApplicationJsonTspAccountsListDialInNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], UserTsPs200ApplicationJsonTspAccountsListDialInNumbers.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country_label" }),
        __metadata("design:type", String)
    ], UserTsPs200ApplicationJsonTspAccountsListDialInNumbers.prototype, "countryLabel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], UserTsPs200ApplicationJsonTspAccountsListDialInNumbers.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UserTsPs200ApplicationJsonTspAccountsListDialInNumbers.prototype, "type", void 0);
    return UserTsPs200ApplicationJsonTspAccountsListDialInNumbers;
}(utils_1.SpeakeasyBase));
exports.UserTsPs200ApplicationJsonTspAccountsListDialInNumbers = UserTsPs200ApplicationJsonTspAccountsListDialInNumbers;
var UserTsPs200ApplicationJsonTspAccountsListTspBridgeEnum;
(function (UserTsPs200ApplicationJsonTspAccountsListTspBridgeEnum) {
    UserTsPs200ApplicationJsonTspAccountsListTspBridgeEnum["UsTspTb"] = "US_TSP_TB";
    UserTsPs200ApplicationJsonTspAccountsListTspBridgeEnum["EuTspTb"] = "EU_TSP_TB";
})(UserTsPs200ApplicationJsonTspAccountsListTspBridgeEnum = exports.UserTsPs200ApplicationJsonTspAccountsListTspBridgeEnum || (exports.UserTsPs200ApplicationJsonTspAccountsListTspBridgeEnum = {}));
// UserTsPs200ApplicationJsonTspAccountsList
/**
 * List of TSP accounts.
**/
var UserTsPs200ApplicationJsonTspAccountsList = /** @class */ (function (_super) {
    __extends(UserTsPs200ApplicationJsonTspAccountsList, _super);
    function UserTsPs200ApplicationJsonTspAccountsList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=conference_code" }),
        __metadata("design:type", String)
    ], UserTsPs200ApplicationJsonTspAccountsList.prototype, "conferenceCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dial_in_numbers", elemType: UserTsPs200ApplicationJsonTspAccountsListDialInNumbers }),
        __metadata("design:type", Array)
    ], UserTsPs200ApplicationJsonTspAccountsList.prototype, "dialInNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], UserTsPs200ApplicationJsonTspAccountsList.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=leader_pin" }),
        __metadata("design:type", String)
    ], UserTsPs200ApplicationJsonTspAccountsList.prototype, "leaderPin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tsp_bridge" }),
        __metadata("design:type", String)
    ], UserTsPs200ApplicationJsonTspAccountsList.prototype, "tspBridge", void 0);
    return UserTsPs200ApplicationJsonTspAccountsList;
}(utils_1.SpeakeasyBase));
exports.UserTsPs200ApplicationJsonTspAccountsList = UserTsPs200ApplicationJsonTspAccountsList;
var UserTsPs200ApplicationJson = /** @class */ (function (_super) {
    __extends(UserTsPs200ApplicationJson, _super);
    function UserTsPs200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tsp_accounts", elemType: UserTsPs200ApplicationJsonTspAccountsList }),
        __metadata("design:type", Array)
    ], UserTsPs200ApplicationJson.prototype, "tspAccounts", void 0);
    return UserTsPs200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UserTsPs200ApplicationJson = UserTsPs200ApplicationJson;
var UserTsPsRequest = /** @class */ (function (_super) {
    __extends(UserTsPsRequest, _super);
    function UserTsPsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserTsPsPathParams)
    ], UserTsPsRequest.prototype, "pathParams", void 0);
    return UserTsPsRequest;
}(utils_1.SpeakeasyBase));
exports.UserTsPsRequest = UserTsPsRequest;
var UserTsPsResponse = /** @class */ (function (_super) {
    __extends(UserTsPsResponse, _super);
    function UserTsPsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UserTsPsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserTsPsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UserTsPsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserTsPs200ApplicationJson)
    ], UserTsPsResponse.prototype, "userTSPs200ApplicationJSONObject", void 0);
    return UserTsPsResponse;
}(utils_1.SpeakeasyBase));
exports.UserTsPsResponse = UserTsPsResponse;
