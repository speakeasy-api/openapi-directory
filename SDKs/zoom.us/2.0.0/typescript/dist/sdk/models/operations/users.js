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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersResponse = exports.UsersRequest = exports.Users200ApplicationJson = exports.Users200ApplicationJsonUsers = exports.Users200ApplicationJsonUsersCustomAttributes = exports.UsersSecurity = exports.UsersQueryParams = exports.UsersStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UsersStatusEnum;
(function (UsersStatusEnum) {
    UsersStatusEnum["Active"] = "active";
    UsersStatusEnum["Inactive"] = "inactive";
    UsersStatusEnum["Pending"] = "pending";
})(UsersStatusEnum = exports.UsersStatusEnum || (exports.UsersStatusEnum = {}));
var UsersQueryParams = /** @class */ (function (_super) {
    __extends(UsersQueryParams, _super);
    function UsersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_fields" }),
        __metadata("design:type", String)
    ], UsersQueryParams.prototype, "includeFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], UsersQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_number" }),
        __metadata("design:type", String)
    ], UsersQueryParams.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], UsersQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=role_id" }),
        __metadata("design:type", String)
    ], UsersQueryParams.prototype, "roleId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], UsersQueryParams.prototype, "status", void 0);
    return UsersQueryParams;
}(utils_1.SpeakeasyBase));
exports.UsersQueryParams = UsersQueryParams;
var UsersSecurity = /** @class */ (function (_super) {
    __extends(UsersSecurity, _super);
    function UsersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], UsersSecurity.prototype, "oAuth", void 0);
    return UsersSecurity;
}(utils_1.SpeakeasyBase));
exports.UsersSecurity = UsersSecurity;
var Users200ApplicationJsonUsersCustomAttributes = /** @class */ (function (_super) {
    __extends(Users200ApplicationJsonUsersCustomAttributes, _super);
    function Users200ApplicationJsonUsersCustomAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], Users200ApplicationJsonUsersCustomAttributes.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Users200ApplicationJsonUsersCustomAttributes.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], Users200ApplicationJsonUsersCustomAttributes.prototype, "value", void 0);
    return Users200ApplicationJsonUsersCustomAttributes;
}(utils_1.SpeakeasyBase));
exports.Users200ApplicationJsonUsersCustomAttributes = Users200ApplicationJsonUsersCustomAttributes;
var Users200ApplicationJsonUsers = /** @class */ (function (_super) {
    __extends(Users200ApplicationJsonUsers, _super);
    function Users200ApplicationJsonUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Users200ApplicationJsonUsers.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_attributes", elemType: Users200ApplicationJsonUsersCustomAttributes }),
        __metadata("design:type", Array)
    ], Users200ApplicationJsonUsers.prototype, "customAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dept" }),
        __metadata("design:type", String)
    ], Users200ApplicationJsonUsers.prototype, "dept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], Users200ApplicationJsonUsers.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], Users200ApplicationJsonUsers.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_ids" }),
        __metadata("design:type", Array)
    ], Users200ApplicationJsonUsers.prototype, "groupIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_key" }),
        __metadata("design:type", String)
    ], Users200ApplicationJsonUsers.prototype, "hostKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Users200ApplicationJsonUsers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=im_group_ids" }),
        __metadata("design:type", Array)
    ], Users200ApplicationJsonUsers.prototype, "imGroupIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_client_version" }),
        __metadata("design:type", String)
    ], Users200ApplicationJsonUsers.prototype, "lastClientVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_login_time" }),
        __metadata("design:type", Date)
    ], Users200ApplicationJsonUsers.prototype, "lastLoginTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], Users200ApplicationJsonUsers.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_united_type" }),
        __metadata("design:type", String)
    ], Users200ApplicationJsonUsers.prototype, "planUnitedType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pmi" }),
        __metadata("design:type", Number)
    ], Users200ApplicationJsonUsers.prototype, "pmi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role_id" }),
        __metadata("design:type", String)
    ], Users200ApplicationJsonUsers.prototype, "roleId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Users200ApplicationJsonUsers.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], Users200ApplicationJsonUsers.prototype, "timezone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], Users200ApplicationJsonUsers.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verified" }),
        __metadata("design:type", Number)
    ], Users200ApplicationJsonUsers.prototype, "verified", void 0);
    return Users200ApplicationJsonUsers;
}(utils_1.SpeakeasyBase));
exports.Users200ApplicationJsonUsers = Users200ApplicationJsonUsers;
var Users200ApplicationJson = /** @class */ (function (_super) {
    __extends(Users200ApplicationJson, _super);
    function Users200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], Users200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], Users200ApplicationJson.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_number" }),
        __metadata("design:type", Number)
    ], Users200ApplicationJson.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], Users200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], Users200ApplicationJson.prototype, "totalRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users", elemType: Users200ApplicationJsonUsers }),
        __metadata("design:type", Array)
    ], Users200ApplicationJson.prototype, "users", void 0);
    return Users200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Users200ApplicationJson = Users200ApplicationJson;
var UsersRequest = /** @class */ (function (_super) {
    __extends(UsersRequest, _super);
    function UsersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UsersQueryParams)
    ], UsersRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UsersSecurity)
    ], UsersRequest.prototype, "security", void 0);
    return UsersRequest;
}(utils_1.SpeakeasyBase));
exports.UsersRequest = UsersRequest;
var UsersResponse = /** @class */ (function (_super) {
    __extends(UsersResponse, _super);
    function UsersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UsersResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UsersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UsersResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Users200ApplicationJson)
    ], UsersResponse.prototype, "users200ApplicationJSONObject", void 0);
    return UsersResponse;
}(utils_1.SpeakeasyBase));
exports.UsersResponse = UsersResponse;
