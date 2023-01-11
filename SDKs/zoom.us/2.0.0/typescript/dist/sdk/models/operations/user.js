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
exports.UserResponse = exports.UserRequest = exports.User200ApplicationJson = exports.User200ApplicationJsonStatusEnum = exports.User200ApplicationJsonPhoneNumbers = exports.User200ApplicationJsonCustomAttributes = exports.UserQueryParams = exports.UserLoginTypeEnum = exports.UserPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UserPathParams = /** @class */ (function (_super) {
    __extends(UserPathParams, _super);
    function UserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UserPathParams.prototype, "userId", void 0);
    return UserPathParams;
}(utils_1.SpeakeasyBase));
exports.UserPathParams = UserPathParams;
var UserLoginTypeEnum;
(function (UserLoginTypeEnum) {
    UserLoginTypeEnum["Zero"] = "0";
    UserLoginTypeEnum["One"] = "1";
    UserLoginTypeEnum["NinetyNine"] = "99";
    UserLoginTypeEnum["OneHundred"] = "100";
    UserLoginTypeEnum["OneHundredAndOne"] = "101";
})(UserLoginTypeEnum = exports.UserLoginTypeEnum || (exports.UserLoginTypeEnum = {}));
var UserQueryParams = /** @class */ (function (_super) {
    __extends(UserQueryParams, _super);
    function UserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=login_type" }),
        __metadata("design:type", String)
    ], UserQueryParams.prototype, "loginType", void 0);
    return UserQueryParams;
}(utils_1.SpeakeasyBase));
exports.UserQueryParams = UserQueryParams;
// User200ApplicationJsonCustomAttributes
/**
 * Custom attribute(s) that have been assigned to the user.
**/
var User200ApplicationJsonCustomAttributes = /** @class */ (function (_super) {
    __extends(User200ApplicationJsonCustomAttributes, _super);
    function User200ApplicationJsonCustomAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], User200ApplicationJsonCustomAttributes.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], User200ApplicationJsonCustomAttributes.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], User200ApplicationJsonCustomAttributes.prototype, "value", void 0);
    return User200ApplicationJsonCustomAttributes;
}(utils_1.SpeakeasyBase));
exports.User200ApplicationJsonCustomAttributes = User200ApplicationJsonCustomAttributes;
var User200ApplicationJsonPhoneNumbers = /** @class */ (function (_super) {
    __extends(User200ApplicationJsonPhoneNumbers, _super);
    function User200ApplicationJsonPhoneNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], User200ApplicationJsonPhoneNumbers.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], User200ApplicationJsonPhoneNumbers.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], User200ApplicationJsonPhoneNumbers.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verified" }),
        __metadata("design:type", Boolean)
    ], User200ApplicationJsonPhoneNumbers.prototype, "verified", void 0);
    return User200ApplicationJsonPhoneNumbers;
}(utils_1.SpeakeasyBase));
exports.User200ApplicationJsonPhoneNumbers = User200ApplicationJsonPhoneNumbers;
var User200ApplicationJsonStatusEnum;
(function (User200ApplicationJsonStatusEnum) {
    User200ApplicationJsonStatusEnum["Pending"] = "pending";
    User200ApplicationJsonStatusEnum["Active"] = "active";
    User200ApplicationJsonStatusEnum["Inactive"] = "inactive";
})(User200ApplicationJsonStatusEnum = exports.User200ApplicationJsonStatusEnum || (exports.User200ApplicationJsonStatusEnum = {}));
// User200ApplicationJson
/**
 * The user object represents a specific user on Zoom.
**/
var User200ApplicationJson = /** @class */ (function (_super) {
    __extends(User200ApplicationJson, _super);
    function User200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], User200ApplicationJson.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cms_user_id" }),
        __metadata("design:type", String)
    ], User200ApplicationJson.prototype, "cmsUserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=company" }),
        __metadata("design:type", String)
    ], User200ApplicationJson.prototype, "company", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], User200ApplicationJson.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_attributes" }),
        __metadata("design:type", User200ApplicationJsonCustomAttributes)
    ], User200ApplicationJson.prototype, "customAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dept" }),
        __metadata("design:type", String)
    ], User200ApplicationJson.prototype, "dept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], User200ApplicationJson.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], User200ApplicationJson.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_ids" }),
        __metadata("design:type", Array)
    ], User200ApplicationJson.prototype, "groupIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_key" }),
        __metadata("design:type", String)
    ], User200ApplicationJson.prototype, "hostKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], User200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=im_group_ids" }),
        __metadata("design:type", Array)
    ], User200ApplicationJson.prototype, "imGroupIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jid" }),
        __metadata("design:type", String)
    ], User200ApplicationJson.prototype, "jid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=job_title" }),
        __metadata("design:type", String)
    ], User200ApplicationJson.prototype, "jobTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], User200ApplicationJson.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_client_version" }),
        __metadata("design:type", String)
    ], User200ApplicationJson.prototype, "lastClientVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_login_time" }),
        __metadata("design:type", Date)
    ], User200ApplicationJson.prototype, "lastLoginTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], User200ApplicationJson.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], User200ApplicationJson.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=login_type" }),
        __metadata("design:type", Number)
    ], User200ApplicationJson.prototype, "loginType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=manager" }),
        __metadata("design:type", String)
    ], User200ApplicationJson.prototype, "manager", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=personal_meeting_url" }),
        __metadata("design:type", String)
    ], User200ApplicationJson.prototype, "personalMeetingUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_country" }),
        __metadata("design:type", String)
    ], User200ApplicationJson.prototype, "phoneCountry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], User200ApplicationJson.prototype, "phoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_numbers" }),
        __metadata("design:type", User200ApplicationJsonPhoneNumbers)
    ], User200ApplicationJson.prototype, "phoneNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pic_url" }),
        __metadata("design:type", String)
    ], User200ApplicationJson.prototype, "picUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_united_type" }),
        __metadata("design:type", String)
    ], User200ApplicationJson.prototype, "planUnitedType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pmi" }),
        __metadata("design:type", Number)
    ], User200ApplicationJson.prototype, "pmi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role_id" }),
        __metadata("design:type", String)
    ], User200ApplicationJson.prototype, "roleId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role_name" }),
        __metadata("design:type", String)
    ], User200ApplicationJson.prototype, "roleName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], User200ApplicationJson.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], User200ApplicationJson.prototype, "timezone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], User200ApplicationJson.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_pmi" }),
        __metadata("design:type", Boolean)
    ], User200ApplicationJson.prototype, "usePmi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vanity_url" }),
        __metadata("design:type", String)
    ], User200ApplicationJson.prototype, "vanityUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verified" }),
        __metadata("design:type", Number)
    ], User200ApplicationJson.prototype, "verified", void 0);
    return User200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.User200ApplicationJson = User200ApplicationJson;
var UserRequest = /** @class */ (function (_super) {
    __extends(UserRequest, _super);
    function UserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserPathParams)
    ], UserRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserQueryParams)
    ], UserRequest.prototype, "queryParams", void 0);
    return UserRequest;
}(utils_1.SpeakeasyBase));
exports.UserRequest = UserRequest;
var UserResponse = /** @class */ (function (_super) {
    __extends(UserResponse, _super);
    function UserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UserResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UserResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", User200ApplicationJson)
    ], UserResponse.prototype, "user200ApplicationJSONObject", void 0);
    return UserResponse;
}(utils_1.SpeakeasyBase));
exports.UserResponse = UserResponse;
