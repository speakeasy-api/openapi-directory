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
exports.CreateCallQueueResponse = exports.CreateCallQueueRequest = exports.CreateCallQueue201ApplicationJson = exports.CreateCallQueueSecurity = exports.CreateCallQueueRequests = exports.CreateCallQueueMultipartFormData = exports.CreateCallQueueMultipartFormDataMembers = exports.CreateCallQueueMultipartFormDataMembersUsers = exports.CreateCallQueueApplicationJson = exports.CreateCallQueueApplicationJsonMembers = exports.CreateCallQueueApplicationJsonMembersUsers = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateCallQueueApplicationJsonMembersUsers = /** @class */ (function (_super) {
    __extends(CreateCallQueueApplicationJsonMembersUsers, _super);
    function CreateCallQueueApplicationJsonMembersUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], CreateCallQueueApplicationJsonMembersUsers.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateCallQueueApplicationJsonMembersUsers.prototype, "id", void 0);
    return CreateCallQueueApplicationJsonMembersUsers;
}(utils_1.SpeakeasyBase));
exports.CreateCallQueueApplicationJsonMembersUsers = CreateCallQueueApplicationJsonMembersUsers;
// CreateCallQueueApplicationJsonMembers
/**
 * A list of one or more phone users to be included in the call queue. Provide either users or common area phone(s). Provide at least one user in the users object.
**/
var CreateCallQueueApplicationJsonMembers = /** @class */ (function (_super) {
    __extends(CreateCallQueueApplicationJsonMembers, _super);
    function CreateCallQueueApplicationJsonMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=common_area_phone_ids" }),
        __metadata("design:type", Array)
    ], CreateCallQueueApplicationJsonMembers.prototype, "commonAreaPhoneIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users", elemType: CreateCallQueueApplicationJsonMembersUsers }),
        __metadata("design:type", Array)
    ], CreateCallQueueApplicationJsonMembers.prototype, "users", void 0);
    return CreateCallQueueApplicationJsonMembers;
}(utils_1.SpeakeasyBase));
exports.CreateCallQueueApplicationJsonMembers = CreateCallQueueApplicationJsonMembers;
var CreateCallQueueApplicationJson = /** @class */ (function (_super) {
    __extends(CreateCallQueueApplicationJson, _super);
    function CreateCallQueueApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateCallQueueApplicationJson.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", Number)
    ], CreateCallQueueApplicationJson.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=members" }),
        __metadata("design:type", CreateCallQueueApplicationJsonMembers)
    ], CreateCallQueueApplicationJson.prototype, "members", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateCallQueueApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site_id" }),
        __metadata("design:type", String)
    ], CreateCallQueueApplicationJson.prototype, "siteId", void 0);
    return CreateCallQueueApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateCallQueueApplicationJson = CreateCallQueueApplicationJson;
var CreateCallQueueMultipartFormDataMembersUsers = /** @class */ (function (_super) {
    __extends(CreateCallQueueMultipartFormDataMembersUsers, _super);
    function CreateCallQueueMultipartFormDataMembersUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], CreateCallQueueMultipartFormDataMembersUsers.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateCallQueueMultipartFormDataMembersUsers.prototype, "id", void 0);
    return CreateCallQueueMultipartFormDataMembersUsers;
}(utils_1.SpeakeasyBase));
exports.CreateCallQueueMultipartFormDataMembersUsers = CreateCallQueueMultipartFormDataMembersUsers;
// CreateCallQueueMultipartFormDataMembers
/**
 * A list of one or more phone users to be included in the call queue. Provide either users or common area phone(s). Provide at least one user in the users object.
**/
var CreateCallQueueMultipartFormDataMembers = /** @class */ (function (_super) {
    __extends(CreateCallQueueMultipartFormDataMembers, _super);
    function CreateCallQueueMultipartFormDataMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=common_area_phone_ids" }),
        __metadata("design:type", Array)
    ], CreateCallQueueMultipartFormDataMembers.prototype, "commonAreaPhoneIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users", elemType: CreateCallQueueMultipartFormDataMembersUsers }),
        __metadata("design:type", Array)
    ], CreateCallQueueMultipartFormDataMembers.prototype, "users", void 0);
    return CreateCallQueueMultipartFormDataMembers;
}(utils_1.SpeakeasyBase));
exports.CreateCallQueueMultipartFormDataMembers = CreateCallQueueMultipartFormDataMembers;
var CreateCallQueueMultipartFormData = /** @class */ (function (_super) {
    __extends(CreateCallQueueMultipartFormData, _super);
    function CreateCallQueueMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=description" }),
        __metadata("design:type", String)
    ], CreateCallQueueMultipartFormData.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=extension_number" }),
        __metadata("design:type", Number)
    ], CreateCallQueueMultipartFormData.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=members;json=true" }),
        __metadata("design:type", CreateCallQueueMultipartFormDataMembers)
    ], CreateCallQueueMultipartFormData.prototype, "members", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], CreateCallQueueMultipartFormData.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=site_id" }),
        __metadata("design:type", String)
    ], CreateCallQueueMultipartFormData.prototype, "siteId", void 0);
    return CreateCallQueueMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.CreateCallQueueMultipartFormData = CreateCallQueueMultipartFormData;
var CreateCallQueueRequests = /** @class */ (function (_super) {
    __extends(CreateCallQueueRequests, _super);
    function CreateCallQueueRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateCallQueueApplicationJson)
    ], CreateCallQueueRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", CreateCallQueueMultipartFormData)
    ], CreateCallQueueRequests.prototype, "object1", void 0);
    return CreateCallQueueRequests;
}(utils_1.SpeakeasyBase));
exports.CreateCallQueueRequests = CreateCallQueueRequests;
var CreateCallQueueSecurity = /** @class */ (function (_super) {
    __extends(CreateCallQueueSecurity, _super);
    function CreateCallQueueSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], CreateCallQueueSecurity.prototype, "oAuth", void 0);
    return CreateCallQueueSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateCallQueueSecurity = CreateCallQueueSecurity;
var CreateCallQueue201ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateCallQueue201ApplicationJson, _super);
    function CreateCallQueue201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", Number)
    ], CreateCallQueue201ApplicationJson.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateCallQueue201ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateCallQueue201ApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CreateCallQueue201ApplicationJson.prototype, "status", void 0);
    return CreateCallQueue201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateCallQueue201ApplicationJson = CreateCallQueue201ApplicationJson;
var CreateCallQueueRequest = /** @class */ (function (_super) {
    __extends(CreateCallQueueRequest, _super);
    function CreateCallQueueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateCallQueueRequests)
    ], CreateCallQueueRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateCallQueueSecurity)
    ], CreateCallQueueRequest.prototype, "security", void 0);
    return CreateCallQueueRequest;
}(utils_1.SpeakeasyBase));
exports.CreateCallQueueRequest = CreateCallQueueRequest;
var CreateCallQueueResponse = /** @class */ (function (_super) {
    __extends(CreateCallQueueResponse, _super);
    function CreateCallQueueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], CreateCallQueueResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateCallQueueResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateCallQueueResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateCallQueue201ApplicationJson)
    ], CreateCallQueueResponse.prototype, "createCallQueue201ApplicationJSONObject", void 0);
    return CreateCallQueueResponse;
}(utils_1.SpeakeasyBase));
exports.CreateCallQueueResponse = CreateCallQueueResponse;
