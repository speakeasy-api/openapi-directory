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
exports.ListPhoneUsersResponse = exports.ListPhoneUsersRequest = exports.ListPhoneUsers200ApplicationJson = exports.ListPhoneUsers200ApplicationJsonUsers = exports.ListPhoneUsers200ApplicationJsonUsersSite = exports.ListPhoneUsers200ApplicationJsonUsersCallingPlans = exports.ListPhoneUsersSecurity = exports.ListPhoneUsersQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListPhoneUsersQueryParams = /** @class */ (function (_super) {
    __extends(ListPhoneUsersQueryParams, _super);
    function ListPhoneUsersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ListPhoneUsersQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListPhoneUsersQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=site_id" }),
        __metadata("design:type", String)
    ], ListPhoneUsersQueryParams.prototype, "siteId", void 0);
    return ListPhoneUsersQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListPhoneUsersQueryParams = ListPhoneUsersQueryParams;
var ListPhoneUsersSecurity = /** @class */ (function (_super) {
    __extends(ListPhoneUsersSecurity, _super);
    function ListPhoneUsersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ListPhoneUsersSecurity.prototype, "oAuth", void 0);
    return ListPhoneUsersSecurity;
}(utils_1.SpeakeasyBase));
exports.ListPhoneUsersSecurity = ListPhoneUsersSecurity;
var ListPhoneUsers200ApplicationJsonUsersCallingPlans = /** @class */ (function (_super) {
    __extends(ListPhoneUsers200ApplicationJsonUsersCallingPlans, _super);
    function ListPhoneUsers200ApplicationJsonUsersCallingPlans() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListPhoneUsers200ApplicationJsonUsersCallingPlans.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ListPhoneUsers200ApplicationJsonUsersCallingPlans.prototype, "type", void 0);
    return ListPhoneUsers200ApplicationJsonUsersCallingPlans;
}(utils_1.SpeakeasyBase));
exports.ListPhoneUsers200ApplicationJsonUsersCallingPlans = ListPhoneUsers200ApplicationJsonUsersCallingPlans;
var ListPhoneUsers200ApplicationJsonUsersSite = /** @class */ (function (_super) {
    __extends(ListPhoneUsers200ApplicationJsonUsersSite, _super);
    function ListPhoneUsers200ApplicationJsonUsersSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListPhoneUsers200ApplicationJsonUsersSite.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListPhoneUsers200ApplicationJsonUsersSite.prototype, "name", void 0);
    return ListPhoneUsers200ApplicationJsonUsersSite;
}(utils_1.SpeakeasyBase));
exports.ListPhoneUsers200ApplicationJsonUsersSite = ListPhoneUsers200ApplicationJsonUsersSite;
var ListPhoneUsers200ApplicationJsonUsers = /** @class */ (function (_super) {
    __extends(ListPhoneUsers200ApplicationJsonUsers, _super);
    function ListPhoneUsers200ApplicationJsonUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calling_plans", elemType: ListPhoneUsers200ApplicationJsonUsersCallingPlans }),
        __metadata("design:type", Array)
    ], ListPhoneUsers200ApplicationJsonUsers.prototype, "callingPlans", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ListPhoneUsers200ApplicationJsonUsers.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", Number)
    ], ListPhoneUsers200ApplicationJsonUsers.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListPhoneUsers200ApplicationJsonUsers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListPhoneUsers200ApplicationJsonUsers.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_user_id" }),
        __metadata("design:type", String)
    ], ListPhoneUsers200ApplicationJsonUsers.prototype, "phoneUserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site" }),
        __metadata("design:type", ListPhoneUsers200ApplicationJsonUsersSite)
    ], ListPhoneUsers200ApplicationJsonUsers.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ListPhoneUsers200ApplicationJsonUsers.prototype, "status", void 0);
    return ListPhoneUsers200ApplicationJsonUsers;
}(utils_1.SpeakeasyBase));
exports.ListPhoneUsers200ApplicationJsonUsers = ListPhoneUsers200ApplicationJsonUsers;
var ListPhoneUsers200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListPhoneUsers200ApplicationJson, _super);
    function ListPhoneUsers200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ListPhoneUsers200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListPhoneUsers200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], ListPhoneUsers200ApplicationJson.prototype, "totalRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users", elemType: ListPhoneUsers200ApplicationJsonUsers }),
        __metadata("design:type", Array)
    ], ListPhoneUsers200ApplicationJson.prototype, "users", void 0);
    return ListPhoneUsers200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListPhoneUsers200ApplicationJson = ListPhoneUsers200ApplicationJson;
var ListPhoneUsersRequest = /** @class */ (function (_super) {
    __extends(ListPhoneUsersRequest, _super);
    function ListPhoneUsersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPhoneUsersQueryParams)
    ], ListPhoneUsersRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPhoneUsersSecurity)
    ], ListPhoneUsersRequest.prototype, "security", void 0);
    return ListPhoneUsersRequest;
}(utils_1.SpeakeasyBase));
exports.ListPhoneUsersRequest = ListPhoneUsersRequest;
var ListPhoneUsersResponse = /** @class */ (function (_super) {
    __extends(ListPhoneUsersResponse, _super);
    function ListPhoneUsersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListPhoneUsersResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListPhoneUsersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListPhoneUsersResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPhoneUsers200ApplicationJson)
    ], ListPhoneUsersResponse.prototype, "listPhoneUsers200ApplicationJSONObject", void 0);
    return ListPhoneUsersResponse;
}(utils_1.SpeakeasyBase));
exports.ListPhoneUsersResponse = ListPhoneUsersResponse;
