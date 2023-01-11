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
exports.GetASharedLineGroupResponse = exports.GetASharedLineGroupRequest = exports.GetASharedLineGroup200ApplicationJson = exports.GetASharedLineGroup200ApplicationJsonStatusEnum = exports.GetASharedLineGroup200ApplicationJsonSite = exports.GetASharedLineGroup200ApplicationJsonPhoneNumbers = exports.GetASharedLineGroup200ApplicationJsonMembers = exports.GetASharedLineGroup200ApplicationJsonMembersUsers = exports.GetASharedLineGroup200ApplicationJsonMembersCommonAreaPhones = exports.GetASharedLineGroupPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetASharedLineGroupPathParams = /** @class */ (function (_super) {
    __extends(GetASharedLineGroupPathParams, _super);
    function GetASharedLineGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=sharedLineGroupId" }),
        __metadata("design:type", String)
    ], GetASharedLineGroupPathParams.prototype, "sharedLineGroupId", void 0);
    return GetASharedLineGroupPathParams;
}(utils_1.SpeakeasyBase));
exports.GetASharedLineGroupPathParams = GetASharedLineGroupPathParams;
var GetASharedLineGroup200ApplicationJsonMembersCommonAreaPhones = /** @class */ (function (_super) {
    __extends(GetASharedLineGroup200ApplicationJsonMembersCommonAreaPhones, _super);
    function GetASharedLineGroup200ApplicationJsonMembersCommonAreaPhones() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetASharedLineGroup200ApplicationJsonMembersCommonAreaPhones.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetASharedLineGroup200ApplicationJsonMembersCommonAreaPhones.prototype, "name", void 0);
    return GetASharedLineGroup200ApplicationJsonMembersCommonAreaPhones;
}(utils_1.SpeakeasyBase));
exports.GetASharedLineGroup200ApplicationJsonMembersCommonAreaPhones = GetASharedLineGroup200ApplicationJsonMembersCommonAreaPhones;
var GetASharedLineGroup200ApplicationJsonMembersUsers = /** @class */ (function (_super) {
    __extends(GetASharedLineGroup200ApplicationJsonMembersUsers, _super);
    function GetASharedLineGroup200ApplicationJsonMembersUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetASharedLineGroup200ApplicationJsonMembersUsers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetASharedLineGroup200ApplicationJsonMembersUsers.prototype, "name", void 0);
    return GetASharedLineGroup200ApplicationJsonMembersUsers;
}(utils_1.SpeakeasyBase));
exports.GetASharedLineGroup200ApplicationJsonMembersUsers = GetASharedLineGroup200ApplicationJsonMembersUsers;
// GetASharedLineGroup200ApplicationJsonMembers
/**
 * View current [members](https://support.zoom.us/hc/en-us/articles/360038850792-Setting-up-shared-line-groups#h_3ffbbb77-a009-4c09-91e4-81fc264b61d6) of the shared line group.
**/
var GetASharedLineGroup200ApplicationJsonMembers = /** @class */ (function (_super) {
    __extends(GetASharedLineGroup200ApplicationJsonMembers, _super);
    function GetASharedLineGroup200ApplicationJsonMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=common_area_phones", elemType: GetASharedLineGroup200ApplicationJsonMembersCommonAreaPhones }),
        __metadata("design:type", Array)
    ], GetASharedLineGroup200ApplicationJsonMembers.prototype, "commonAreaPhones", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users", elemType: GetASharedLineGroup200ApplicationJsonMembersUsers }),
        __metadata("design:type", Array)
    ], GetASharedLineGroup200ApplicationJsonMembers.prototype, "users", void 0);
    return GetASharedLineGroup200ApplicationJsonMembers;
}(utils_1.SpeakeasyBase));
exports.GetASharedLineGroup200ApplicationJsonMembers = GetASharedLineGroup200ApplicationJsonMembers;
var GetASharedLineGroup200ApplicationJsonPhoneNumbers = /** @class */ (function (_super) {
    __extends(GetASharedLineGroup200ApplicationJsonPhoneNumbers, _super);
    function GetASharedLineGroup200ApplicationJsonPhoneNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetASharedLineGroup200ApplicationJsonPhoneNumbers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], GetASharedLineGroup200ApplicationJsonPhoneNumbers.prototype, "number", void 0);
    return GetASharedLineGroup200ApplicationJsonPhoneNumbers;
}(utils_1.SpeakeasyBase));
exports.GetASharedLineGroup200ApplicationJsonPhoneNumbers = GetASharedLineGroup200ApplicationJsonPhoneNumbers;
// GetASharedLineGroup200ApplicationJsonSite
/**
 * Site assigned to the Shared Line Group.
**/
var GetASharedLineGroup200ApplicationJsonSite = /** @class */ (function (_super) {
    __extends(GetASharedLineGroup200ApplicationJsonSite, _super);
    function GetASharedLineGroup200ApplicationJsonSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetASharedLineGroup200ApplicationJsonSite.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetASharedLineGroup200ApplicationJsonSite.prototype, "name", void 0);
    return GetASharedLineGroup200ApplicationJsonSite;
}(utils_1.SpeakeasyBase));
exports.GetASharedLineGroup200ApplicationJsonSite = GetASharedLineGroup200ApplicationJsonSite;
var GetASharedLineGroup200ApplicationJsonStatusEnum;
(function (GetASharedLineGroup200ApplicationJsonStatusEnum) {
    GetASharedLineGroup200ApplicationJsonStatusEnum["Active"] = "active";
    GetASharedLineGroup200ApplicationJsonStatusEnum["Inactive"] = "inactive";
})(GetASharedLineGroup200ApplicationJsonStatusEnum = exports.GetASharedLineGroup200ApplicationJsonStatusEnum || (exports.GetASharedLineGroup200ApplicationJsonStatusEnum = {}));
var GetASharedLineGroup200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetASharedLineGroup200ApplicationJson, _super);
    function GetASharedLineGroup200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], GetASharedLineGroup200ApplicationJson.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", Number)
    ], GetASharedLineGroup200ApplicationJson.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetASharedLineGroup200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=members" }),
        __metadata("design:type", GetASharedLineGroup200ApplicationJsonMembers)
    ], GetASharedLineGroup200ApplicationJson.prototype, "members", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_numbers", elemType: GetASharedLineGroup200ApplicationJsonPhoneNumbers }),
        __metadata("design:type", Array)
    ], GetASharedLineGroup200ApplicationJson.prototype, "phoneNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primary_number" }),
        __metadata("design:type", String)
    ], GetASharedLineGroup200ApplicationJson.prototype, "primaryNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site" }),
        __metadata("design:type", GetASharedLineGroup200ApplicationJsonSite)
    ], GetASharedLineGroup200ApplicationJson.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetASharedLineGroup200ApplicationJson.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], GetASharedLineGroup200ApplicationJson.prototype, "timezone", void 0);
    return GetASharedLineGroup200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetASharedLineGroup200ApplicationJson = GetASharedLineGroup200ApplicationJson;
var GetASharedLineGroupRequest = /** @class */ (function (_super) {
    __extends(GetASharedLineGroupRequest, _super);
    function GetASharedLineGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetASharedLineGroupPathParams)
    ], GetASharedLineGroupRequest.prototype, "pathParams", void 0);
    return GetASharedLineGroupRequest;
}(utils_1.SpeakeasyBase));
exports.GetASharedLineGroupRequest = GetASharedLineGroupRequest;
var GetASharedLineGroupResponse = /** @class */ (function (_super) {
    __extends(GetASharedLineGroupResponse, _super);
    function GetASharedLineGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetASharedLineGroupResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetASharedLineGroupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetASharedLineGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetASharedLineGroup200ApplicationJson)
    ], GetASharedLineGroupResponse.prototype, "getASharedLineGroup200ApplicationJSONObject", void 0);
    return GetASharedLineGroupResponse;
}(utils_1.SpeakeasyBase));
exports.GetASharedLineGroupResponse = GetASharedLineGroupResponse;
