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
exports.UserPaCsResponse = exports.UserPaCsRequest = exports.UserPaCs200ApplicationJson = exports.UserPaCs200ApplicationJsonPacAccounts = exports.UserPaCs200ApplicationJsonPacAccountsGlobalDialInNumbers = exports.UserPaCs200ApplicationJsonPacAccountsDedicatedDialInNumber = exports.UserPaCsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UserPaCsPathParams = /** @class */ (function (_super) {
    __extends(UserPaCsPathParams, _super);
    function UserPaCsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UserPaCsPathParams.prototype, "userId", void 0);
    return UserPaCsPathParams;
}(utils_1.SpeakeasyBase));
exports.UserPaCsPathParams = UserPaCsPathParams;
var UserPaCs200ApplicationJsonPacAccountsDedicatedDialInNumber = /** @class */ (function (_super) {
    __extends(UserPaCs200ApplicationJsonPacAccountsDedicatedDialInNumber, _super);
    function UserPaCs200ApplicationJsonPacAccountsDedicatedDialInNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], UserPaCs200ApplicationJsonPacAccountsDedicatedDialInNumber.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], UserPaCs200ApplicationJsonPacAccountsDedicatedDialInNumber.prototype, "number", void 0);
    return UserPaCs200ApplicationJsonPacAccountsDedicatedDialInNumber;
}(utils_1.SpeakeasyBase));
exports.UserPaCs200ApplicationJsonPacAccountsDedicatedDialInNumber = UserPaCs200ApplicationJsonPacAccountsDedicatedDialInNumber;
var UserPaCs200ApplicationJsonPacAccountsGlobalDialInNumbers = /** @class */ (function (_super) {
    __extends(UserPaCs200ApplicationJsonPacAccountsGlobalDialInNumbers, _super);
    function UserPaCs200ApplicationJsonPacAccountsGlobalDialInNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], UserPaCs200ApplicationJsonPacAccountsGlobalDialInNumbers.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], UserPaCs200ApplicationJsonPacAccountsGlobalDialInNumbers.prototype, "number", void 0);
    return UserPaCs200ApplicationJsonPacAccountsGlobalDialInNumbers;
}(utils_1.SpeakeasyBase));
exports.UserPaCs200ApplicationJsonPacAccountsGlobalDialInNumbers = UserPaCs200ApplicationJsonPacAccountsGlobalDialInNumbers;
var UserPaCs200ApplicationJsonPacAccounts = /** @class */ (function (_super) {
    __extends(UserPaCs200ApplicationJsonPacAccounts, _super);
    function UserPaCs200ApplicationJsonPacAccounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=conference_id" }),
        __metadata("design:type", Number)
    ], UserPaCs200ApplicationJsonPacAccounts.prototype, "conferenceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dedicated_dial_in_number", elemType: UserPaCs200ApplicationJsonPacAccountsDedicatedDialInNumber }),
        __metadata("design:type", Array)
    ], UserPaCs200ApplicationJsonPacAccounts.prototype, "dedicatedDialInNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=global_dial_in_numbers", elemType: UserPaCs200ApplicationJsonPacAccountsGlobalDialInNumbers }),
        __metadata("design:type", Array)
    ], UserPaCs200ApplicationJsonPacAccounts.prototype, "globalDialInNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=listen_only_password" }),
        __metadata("design:type", String)
    ], UserPaCs200ApplicationJsonPacAccounts.prototype, "listenOnlyPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participant_password" }),
        __metadata("design:type", String)
    ], UserPaCs200ApplicationJsonPacAccounts.prototype, "participantPassword", void 0);
    return UserPaCs200ApplicationJsonPacAccounts;
}(utils_1.SpeakeasyBase));
exports.UserPaCs200ApplicationJsonPacAccounts = UserPaCs200ApplicationJsonPacAccounts;
var UserPaCs200ApplicationJson = /** @class */ (function (_super) {
    __extends(UserPaCs200ApplicationJson, _super);
    function UserPaCs200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pac_accounts", elemType: UserPaCs200ApplicationJsonPacAccounts }),
        __metadata("design:type", Array)
    ], UserPaCs200ApplicationJson.prototype, "pacAccounts", void 0);
    return UserPaCs200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UserPaCs200ApplicationJson = UserPaCs200ApplicationJson;
var UserPaCsRequest = /** @class */ (function (_super) {
    __extends(UserPaCsRequest, _super);
    function UserPaCsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserPaCsPathParams)
    ], UserPaCsRequest.prototype, "pathParams", void 0);
    return UserPaCsRequest;
}(utils_1.SpeakeasyBase));
exports.UserPaCsRequest = UserPaCsRequest;
var UserPaCsResponse = /** @class */ (function (_super) {
    __extends(UserPaCsResponse, _super);
    function UserPaCsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UserPaCsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserPaCsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UserPaCsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserPaCs200ApplicationJson)
    ], UserPaCsResponse.prototype, "userPACs200ApplicationJSONObject", void 0);
    return UserPaCsResponse;
}(utils_1.SpeakeasyBase));
exports.UserPaCsResponse = UserPaCsResponse;
