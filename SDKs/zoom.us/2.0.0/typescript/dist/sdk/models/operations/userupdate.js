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
exports.UserUpdateResponse = exports.UserUpdateRequest = exports.UserUpdateRequests = exports.UserUpdateMultipartFormData = exports.UserUpdateMultipartFormDataPhoneNumbers = exports.UserUpdateMultipartFormDataCustomAttributes = exports.UserUpdateApplicationJson = exports.UserUpdateApplicationJsonPhoneNumbers = exports.UserUpdateApplicationJsonCustomAttributes = exports.UserUpdateQueryParams = exports.UserUpdateLoginTypeEnum = exports.UserUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UserUpdatePathParams = /** @class */ (function (_super) {
    __extends(UserUpdatePathParams, _super);
    function UserUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UserUpdatePathParams.prototype, "userId", void 0);
    return UserUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.UserUpdatePathParams = UserUpdatePathParams;
var UserUpdateLoginTypeEnum;
(function (UserUpdateLoginTypeEnum) {
    UserUpdateLoginTypeEnum["Zero"] = "0";
    UserUpdateLoginTypeEnum["One"] = "1";
    UserUpdateLoginTypeEnum["NinetyNine"] = "99";
    UserUpdateLoginTypeEnum["OneHundred"] = "100";
    UserUpdateLoginTypeEnum["OneHundredAndOne"] = "101";
})(UserUpdateLoginTypeEnum = exports.UserUpdateLoginTypeEnum || (exports.UserUpdateLoginTypeEnum = {}));
var UserUpdateQueryParams = /** @class */ (function (_super) {
    __extends(UserUpdateQueryParams, _super);
    function UserUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=login_type" }),
        __metadata("design:type", String)
    ], UserUpdateQueryParams.prototype, "loginType", void 0);
    return UserUpdateQueryParams;
}(utils_1.SpeakeasyBase));
exports.UserUpdateQueryParams = UserUpdateQueryParams;
// UserUpdateApplicationJsonCustomAttributes
/**
 * Custom attribute(s) of the user.
**/
var UserUpdateApplicationJsonCustomAttributes = /** @class */ (function (_super) {
    __extends(UserUpdateApplicationJsonCustomAttributes, _super);
    function UserUpdateApplicationJsonCustomAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], UserUpdateApplicationJsonCustomAttributes.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UserUpdateApplicationJsonCustomAttributes.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], UserUpdateApplicationJsonCustomAttributes.prototype, "value", void 0);
    return UserUpdateApplicationJsonCustomAttributes;
}(utils_1.SpeakeasyBase));
exports.UserUpdateApplicationJsonCustomAttributes = UserUpdateApplicationJsonCustomAttributes;
var UserUpdateApplicationJsonPhoneNumbers = /** @class */ (function (_super) {
    __extends(UserUpdateApplicationJsonPhoneNumbers, _super);
    function UserUpdateApplicationJsonPhoneNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], UserUpdateApplicationJsonPhoneNumbers.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], UserUpdateApplicationJsonPhoneNumbers.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], UserUpdateApplicationJsonPhoneNumbers.prototype, "number", void 0);
    return UserUpdateApplicationJsonPhoneNumbers;
}(utils_1.SpeakeasyBase));
exports.UserUpdateApplicationJsonPhoneNumbers = UserUpdateApplicationJsonPhoneNumbers;
// UserUpdateApplicationJson
/**
 * The user update object represents a user on Zoom.
**/
var UserUpdateApplicationJson = /** @class */ (function (_super) {
    __extends(UserUpdateApplicationJson, _super);
    function UserUpdateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cms_user_id" }),
        __metadata("design:type", String)
    ], UserUpdateApplicationJson.prototype, "cmsUserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=company" }),
        __metadata("design:type", String)
    ], UserUpdateApplicationJson.prototype, "company", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_attributes" }),
        __metadata("design:type", UserUpdateApplicationJsonCustomAttributes)
    ], UserUpdateApplicationJson.prototype, "customAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dept" }),
        __metadata("design:type", String)
    ], UserUpdateApplicationJson.prototype, "dept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], UserUpdateApplicationJson.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_id" }),
        __metadata("design:type", String)
    ], UserUpdateApplicationJson.prototype, "groupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_key" }),
        __metadata("design:type", String)
    ], UserUpdateApplicationJson.prototype, "hostKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=job_title" }),
        __metadata("design:type", String)
    ], UserUpdateApplicationJson.prototype, "jobTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], UserUpdateApplicationJson.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], UserUpdateApplicationJson.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], UserUpdateApplicationJson.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=manager" }),
        __metadata("design:type", String)
    ], UserUpdateApplicationJson.prototype, "manager", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_country" }),
        __metadata("design:type", String)
    ], UserUpdateApplicationJson.prototype, "phoneCountry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], UserUpdateApplicationJson.prototype, "phoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_numbers" }),
        __metadata("design:type", UserUpdateApplicationJsonPhoneNumbers)
    ], UserUpdateApplicationJson.prototype, "phoneNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pmi" }),
        __metadata("design:type", Number)
    ], UserUpdateApplicationJson.prototype, "pmi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], UserUpdateApplicationJson.prototype, "timezone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], UserUpdateApplicationJson.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_pmi" }),
        __metadata("design:type", Boolean)
    ], UserUpdateApplicationJson.prototype, "usePmi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vanity_name" }),
        __metadata("design:type", String)
    ], UserUpdateApplicationJson.prototype, "vanityName", void 0);
    return UserUpdateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UserUpdateApplicationJson = UserUpdateApplicationJson;
// UserUpdateMultipartFormDataCustomAttributes
/**
 * Custom attribute(s) of the user.
**/
var UserUpdateMultipartFormDataCustomAttributes = /** @class */ (function (_super) {
    __extends(UserUpdateMultipartFormDataCustomAttributes, _super);
    function UserUpdateMultipartFormDataCustomAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], UserUpdateMultipartFormDataCustomAttributes.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UserUpdateMultipartFormDataCustomAttributes.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], UserUpdateMultipartFormDataCustomAttributes.prototype, "value", void 0);
    return UserUpdateMultipartFormDataCustomAttributes;
}(utils_1.SpeakeasyBase));
exports.UserUpdateMultipartFormDataCustomAttributes = UserUpdateMultipartFormDataCustomAttributes;
var UserUpdateMultipartFormDataPhoneNumbers = /** @class */ (function (_super) {
    __extends(UserUpdateMultipartFormDataPhoneNumbers, _super);
    function UserUpdateMultipartFormDataPhoneNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], UserUpdateMultipartFormDataPhoneNumbers.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], UserUpdateMultipartFormDataPhoneNumbers.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], UserUpdateMultipartFormDataPhoneNumbers.prototype, "number", void 0);
    return UserUpdateMultipartFormDataPhoneNumbers;
}(utils_1.SpeakeasyBase));
exports.UserUpdateMultipartFormDataPhoneNumbers = UserUpdateMultipartFormDataPhoneNumbers;
// UserUpdateMultipartFormData
/**
 * The user update object represents a user on Zoom.
**/
var UserUpdateMultipartFormData = /** @class */ (function (_super) {
    __extends(UserUpdateMultipartFormData, _super);
    function UserUpdateMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=cms_user_id" }),
        __metadata("design:type", String)
    ], UserUpdateMultipartFormData.prototype, "cmsUserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=company" }),
        __metadata("design:type", String)
    ], UserUpdateMultipartFormData.prototype, "company", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=custom_attributes;json=true" }),
        __metadata("design:type", UserUpdateMultipartFormDataCustomAttributes)
    ], UserUpdateMultipartFormData.prototype, "customAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=dept" }),
        __metadata("design:type", String)
    ], UserUpdateMultipartFormData.prototype, "dept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=first_name" }),
        __metadata("design:type", String)
    ], UserUpdateMultipartFormData.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=group_id" }),
        __metadata("design:type", String)
    ], UserUpdateMultipartFormData.prototype, "groupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=host_key" }),
        __metadata("design:type", String)
    ], UserUpdateMultipartFormData.prototype, "hostKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=job_title" }),
        __metadata("design:type", String)
    ], UserUpdateMultipartFormData.prototype, "jobTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=language" }),
        __metadata("design:type", String)
    ], UserUpdateMultipartFormData.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=last_name" }),
        __metadata("design:type", String)
    ], UserUpdateMultipartFormData.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=location" }),
        __metadata("design:type", String)
    ], UserUpdateMultipartFormData.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=manager" }),
        __metadata("design:type", String)
    ], UserUpdateMultipartFormData.prototype, "manager", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=phone_country" }),
        __metadata("design:type", String)
    ], UserUpdateMultipartFormData.prototype, "phoneCountry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=phone_number" }),
        __metadata("design:type", String)
    ], UserUpdateMultipartFormData.prototype, "phoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=phone_numbers;json=true" }),
        __metadata("design:type", UserUpdateMultipartFormDataPhoneNumbers)
    ], UserUpdateMultipartFormData.prototype, "phoneNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=pmi" }),
        __metadata("design:type", Number)
    ], UserUpdateMultipartFormData.prototype, "pmi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=timezone" }),
        __metadata("design:type", String)
    ], UserUpdateMultipartFormData.prototype, "timezone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=type" }),
        __metadata("design:type", Number)
    ], UserUpdateMultipartFormData.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=use_pmi" }),
        __metadata("design:type", Boolean)
    ], UserUpdateMultipartFormData.prototype, "usePmi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=vanity_name" }),
        __metadata("design:type", String)
    ], UserUpdateMultipartFormData.prototype, "vanityName", void 0);
    return UserUpdateMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.UserUpdateMultipartFormData = UserUpdateMultipartFormData;
var UserUpdateRequests = /** @class */ (function (_super) {
    __extends(UserUpdateRequests, _super);
    function UserUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UserUpdateApplicationJson)
    ], UserUpdateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UserUpdateMultipartFormData)
    ], UserUpdateRequests.prototype, "object1", void 0);
    return UserUpdateRequests;
}(utils_1.SpeakeasyBase));
exports.UserUpdateRequests = UserUpdateRequests;
var UserUpdateRequest = /** @class */ (function (_super) {
    __extends(UserUpdateRequest, _super);
    function UserUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserUpdatePathParams)
    ], UserUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserUpdateQueryParams)
    ], UserUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UserUpdateRequests)
    ], UserUpdateRequest.prototype, "request", void 0);
    return UserUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.UserUpdateRequest = UserUpdateRequest;
var UserUpdateResponse = /** @class */ (function (_super) {
    __extends(UserUpdateResponse, _super);
    function UserUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UserUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UserUpdateResponse.prototype, "statusCode", void 0);
    return UserUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.UserUpdateResponse = UserUpdateResponse;
