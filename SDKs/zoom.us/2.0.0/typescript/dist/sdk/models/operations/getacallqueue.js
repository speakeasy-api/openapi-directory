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
exports.GetACallQueueResponse = exports.GetACallQueueRequest = exports.GetACallQueue200ApplicationJson = exports.GetACallQueue200ApplicationJsonStatusEnum = exports.GetACallQueue200ApplicationJsonSite = exports.GetACallQueue200ApplicationJsonPhoneNumbers = exports.GetACallQueue200ApplicationJsonPhoneNumbersSourceEnum = exports.GetACallQueue200ApplicationJsonMembers = exports.GetACallQueue200ApplicationJsonMembersUsers = exports.GetACallQueue200ApplicationJsonMembersUsersLevelEnum = exports.GetACallQueue200ApplicationJsonMembersCommonAreaPhones = exports.GetACallQueueSecurity = exports.GetACallQueuePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetACallQueuePathParams = /** @class */ (function (_super) {
    __extends(GetACallQueuePathParams, _super);
    function GetACallQueuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=callQueueId" }),
        __metadata("design:type", String)
    ], GetACallQueuePathParams.prototype, "callQueueId", void 0);
    return GetACallQueuePathParams;
}(utils_1.SpeakeasyBase));
exports.GetACallQueuePathParams = GetACallQueuePathParams;
var GetACallQueueSecurity = /** @class */ (function (_super) {
    __extends(GetACallQueueSecurity, _super);
    function GetACallQueueSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], GetACallQueueSecurity.prototype, "oAuth", void 0);
    return GetACallQueueSecurity;
}(utils_1.SpeakeasyBase));
exports.GetACallQueueSecurity = GetACallQueueSecurity;
var GetACallQueue200ApplicationJsonMembersCommonAreaPhones = /** @class */ (function (_super) {
    __extends(GetACallQueue200ApplicationJsonMembersCommonAreaPhones, _super);
    function GetACallQueue200ApplicationJsonMembersCommonAreaPhones() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetACallQueue200ApplicationJsonMembersCommonAreaPhones.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetACallQueue200ApplicationJsonMembersCommonAreaPhones.prototype, "name", void 0);
    return GetACallQueue200ApplicationJsonMembersCommonAreaPhones;
}(utils_1.SpeakeasyBase));
exports.GetACallQueue200ApplicationJsonMembersCommonAreaPhones = GetACallQueue200ApplicationJsonMembersCommonAreaPhones;
var GetACallQueue200ApplicationJsonMembersUsersLevelEnum;
(function (GetACallQueue200ApplicationJsonMembersUsersLevelEnum) {
    GetACallQueue200ApplicationJsonMembersUsersLevelEnum["Manager"] = "manager";
    GetACallQueue200ApplicationJsonMembersUsersLevelEnum["User"] = "user";
})(GetACallQueue200ApplicationJsonMembersUsersLevelEnum = exports.GetACallQueue200ApplicationJsonMembersUsersLevelEnum || (exports.GetACallQueue200ApplicationJsonMembersUsersLevelEnum = {}));
var GetACallQueue200ApplicationJsonMembersUsers = /** @class */ (function (_super) {
    __extends(GetACallQueue200ApplicationJsonMembersUsers, _super);
    function GetACallQueue200ApplicationJsonMembersUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetACallQueue200ApplicationJsonMembersUsers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=level" }),
        __metadata("design:type", String)
    ], GetACallQueue200ApplicationJsonMembersUsers.prototype, "level", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetACallQueue200ApplicationJsonMembersUsers.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=receive_call" }),
        __metadata("design:type", Boolean)
    ], GetACallQueue200ApplicationJsonMembersUsers.prototype, "receiveCall", void 0);
    return GetACallQueue200ApplicationJsonMembersUsers;
}(utils_1.SpeakeasyBase));
exports.GetACallQueue200ApplicationJsonMembersUsers = GetACallQueue200ApplicationJsonMembersUsers;
var GetACallQueue200ApplicationJsonMembers = /** @class */ (function (_super) {
    __extends(GetACallQueue200ApplicationJsonMembers, _super);
    function GetACallQueue200ApplicationJsonMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=common_area_phones", elemType: GetACallQueue200ApplicationJsonMembersCommonAreaPhones }),
        __metadata("design:type", Array)
    ], GetACallQueue200ApplicationJsonMembers.prototype, "commonAreaPhones", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users", elemType: GetACallQueue200ApplicationJsonMembersUsers }),
        __metadata("design:type", Array)
    ], GetACallQueue200ApplicationJsonMembers.prototype, "users", void 0);
    return GetACallQueue200ApplicationJsonMembers;
}(utils_1.SpeakeasyBase));
exports.GetACallQueue200ApplicationJsonMembers = GetACallQueue200ApplicationJsonMembers;
var GetACallQueue200ApplicationJsonPhoneNumbersSourceEnum;
(function (GetACallQueue200ApplicationJsonPhoneNumbersSourceEnum) {
    GetACallQueue200ApplicationJsonPhoneNumbersSourceEnum["Internal"] = "internal";
    GetACallQueue200ApplicationJsonPhoneNumbersSourceEnum["External"] = "external";
})(GetACallQueue200ApplicationJsonPhoneNumbersSourceEnum = exports.GetACallQueue200ApplicationJsonPhoneNumbersSourceEnum || (exports.GetACallQueue200ApplicationJsonPhoneNumbersSourceEnum = {}));
var GetACallQueue200ApplicationJsonPhoneNumbers = /** @class */ (function (_super) {
    __extends(GetACallQueue200ApplicationJsonPhoneNumbers, _super);
    function GetACallQueue200ApplicationJsonPhoneNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetACallQueue200ApplicationJsonPhoneNumbers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], GetACallQueue200ApplicationJsonPhoneNumbers.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], GetACallQueue200ApplicationJsonPhoneNumbers.prototype, "source", void 0);
    return GetACallQueue200ApplicationJsonPhoneNumbers;
}(utils_1.SpeakeasyBase));
exports.GetACallQueue200ApplicationJsonPhoneNumbers = GetACallQueue200ApplicationJsonPhoneNumbers;
var GetACallQueue200ApplicationJsonSite = /** @class */ (function (_super) {
    __extends(GetACallQueue200ApplicationJsonSite, _super);
    function GetACallQueue200ApplicationJsonSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetACallQueue200ApplicationJsonSite.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetACallQueue200ApplicationJsonSite.prototype, "name", void 0);
    return GetACallQueue200ApplicationJsonSite;
}(utils_1.SpeakeasyBase));
exports.GetACallQueue200ApplicationJsonSite = GetACallQueue200ApplicationJsonSite;
var GetACallQueue200ApplicationJsonStatusEnum;
(function (GetACallQueue200ApplicationJsonStatusEnum) {
    GetACallQueue200ApplicationJsonStatusEnum["Active"] = "active";
    GetACallQueue200ApplicationJsonStatusEnum["Inactive"] = "inactive";
})(GetACallQueue200ApplicationJsonStatusEnum = exports.GetACallQueue200ApplicationJsonStatusEnum || (exports.GetACallQueue200ApplicationJsonStatusEnum = {}));
var GetACallQueue200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetACallQueue200ApplicationJson, _super);
    function GetACallQueue200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", Number)
    ], GetACallQueue200ApplicationJson.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetACallQueue200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=members" }),
        __metadata("design:type", GetACallQueue200ApplicationJsonMembers)
    ], GetACallQueue200ApplicationJson.prototype, "members", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetACallQueue200ApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_numbers", elemType: GetACallQueue200ApplicationJsonPhoneNumbers }),
        __metadata("design:type", Array)
    ], GetACallQueue200ApplicationJson.prototype, "phoneNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site" }),
        __metadata("design:type", GetACallQueue200ApplicationJsonSite)
    ], GetACallQueue200ApplicationJson.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetACallQueue200ApplicationJson.prototype, "status", void 0);
    return GetACallQueue200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetACallQueue200ApplicationJson = GetACallQueue200ApplicationJson;
var GetACallQueueRequest = /** @class */ (function (_super) {
    __extends(GetACallQueueRequest, _super);
    function GetACallQueueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetACallQueuePathParams)
    ], GetACallQueueRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetACallQueueSecurity)
    ], GetACallQueueRequest.prototype, "security", void 0);
    return GetACallQueueRequest;
}(utils_1.SpeakeasyBase));
exports.GetACallQueueRequest = GetACallQueueRequest;
var GetACallQueueResponse = /** @class */ (function (_super) {
    __extends(GetACallQueueResponse, _super);
    function GetACallQueueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetACallQueueResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetACallQueueResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetACallQueueResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetACallQueue200ApplicationJson)
    ], GetACallQueueResponse.prototype, "getACallQueue200ApplicationJSONObject", void 0);
    return GetACallQueueResponse;
}(utils_1.SpeakeasyBase));
exports.GetACallQueueResponse = GetACallQueueResponse;
