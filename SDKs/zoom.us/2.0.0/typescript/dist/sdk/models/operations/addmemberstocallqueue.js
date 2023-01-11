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
exports.AddMembersToCallQueueResponse = exports.AddMembersToCallQueueRequest = exports.AddMembersToCallQueueSecurity = exports.AddMembersToCallQueueRequests = exports.AddMembersToCallQueueMultipartFormData = exports.AddMembersToCallQueueMultipartFormDataMembers = exports.AddMembersToCallQueueMultipartFormDataMembersUsers = exports.AddMembersToCallQueueApplicationJson = exports.AddMembersToCallQueueApplicationJsonMembers = exports.AddMembersToCallQueueApplicationJsonMembersUsers = exports.AddMembersToCallQueuePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AddMembersToCallQueuePathParams = /** @class */ (function (_super) {
    __extends(AddMembersToCallQueuePathParams, _super);
    function AddMembersToCallQueuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=callQueueId" }),
        __metadata("design:type", String)
    ], AddMembersToCallQueuePathParams.prototype, "callQueueId", void 0);
    return AddMembersToCallQueuePathParams;
}(utils_1.SpeakeasyBase));
exports.AddMembersToCallQueuePathParams = AddMembersToCallQueuePathParams;
var AddMembersToCallQueueApplicationJsonMembersUsers = /** @class */ (function (_super) {
    __extends(AddMembersToCallQueueApplicationJsonMembersUsers, _super);
    function AddMembersToCallQueueApplicationJsonMembersUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], AddMembersToCallQueueApplicationJsonMembersUsers.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AddMembersToCallQueueApplicationJsonMembersUsers.prototype, "id", void 0);
    return AddMembersToCallQueueApplicationJsonMembersUsers;
}(utils_1.SpeakeasyBase));
exports.AddMembersToCallQueueApplicationJsonMembersUsers = AddMembersToCallQueueApplicationJsonMembersUsers;
// AddMembersToCallQueueApplicationJsonMembers
/**
 * A maximum of 10 members can be added at a time.
**/
var AddMembersToCallQueueApplicationJsonMembers = /** @class */ (function (_super) {
    __extends(AddMembersToCallQueueApplicationJsonMembers, _super);
    function AddMembersToCallQueueApplicationJsonMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=common_area_phone_ids" }),
        __metadata("design:type", Array)
    ], AddMembersToCallQueueApplicationJsonMembers.prototype, "commonAreaPhoneIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users", elemType: AddMembersToCallQueueApplicationJsonMembersUsers }),
        __metadata("design:type", Array)
    ], AddMembersToCallQueueApplicationJsonMembers.prototype, "users", void 0);
    return AddMembersToCallQueueApplicationJsonMembers;
}(utils_1.SpeakeasyBase));
exports.AddMembersToCallQueueApplicationJsonMembers = AddMembersToCallQueueApplicationJsonMembers;
var AddMembersToCallQueueApplicationJson = /** @class */ (function (_super) {
    __extends(AddMembersToCallQueueApplicationJson, _super);
    function AddMembersToCallQueueApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=members" }),
        __metadata("design:type", AddMembersToCallQueueApplicationJsonMembers)
    ], AddMembersToCallQueueApplicationJson.prototype, "members", void 0);
    return AddMembersToCallQueueApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddMembersToCallQueueApplicationJson = AddMembersToCallQueueApplicationJson;
var AddMembersToCallQueueMultipartFormDataMembersUsers = /** @class */ (function (_super) {
    __extends(AddMembersToCallQueueMultipartFormDataMembersUsers, _super);
    function AddMembersToCallQueueMultipartFormDataMembersUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], AddMembersToCallQueueMultipartFormDataMembersUsers.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AddMembersToCallQueueMultipartFormDataMembersUsers.prototype, "id", void 0);
    return AddMembersToCallQueueMultipartFormDataMembersUsers;
}(utils_1.SpeakeasyBase));
exports.AddMembersToCallQueueMultipartFormDataMembersUsers = AddMembersToCallQueueMultipartFormDataMembersUsers;
// AddMembersToCallQueueMultipartFormDataMembers
/**
 * A maximum of 10 members can be added at a time.
**/
var AddMembersToCallQueueMultipartFormDataMembers = /** @class */ (function (_super) {
    __extends(AddMembersToCallQueueMultipartFormDataMembers, _super);
    function AddMembersToCallQueueMultipartFormDataMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=common_area_phone_ids" }),
        __metadata("design:type", Array)
    ], AddMembersToCallQueueMultipartFormDataMembers.prototype, "commonAreaPhoneIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users", elemType: AddMembersToCallQueueMultipartFormDataMembersUsers }),
        __metadata("design:type", Array)
    ], AddMembersToCallQueueMultipartFormDataMembers.prototype, "users", void 0);
    return AddMembersToCallQueueMultipartFormDataMembers;
}(utils_1.SpeakeasyBase));
exports.AddMembersToCallQueueMultipartFormDataMembers = AddMembersToCallQueueMultipartFormDataMembers;
var AddMembersToCallQueueMultipartFormData = /** @class */ (function (_super) {
    __extends(AddMembersToCallQueueMultipartFormData, _super);
    function AddMembersToCallQueueMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=members;json=true" }),
        __metadata("design:type", AddMembersToCallQueueMultipartFormDataMembers)
    ], AddMembersToCallQueueMultipartFormData.prototype, "members", void 0);
    return AddMembersToCallQueueMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.AddMembersToCallQueueMultipartFormData = AddMembersToCallQueueMultipartFormData;
var AddMembersToCallQueueRequests = /** @class */ (function (_super) {
    __extends(AddMembersToCallQueueRequests, _super);
    function AddMembersToCallQueueRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddMembersToCallQueueApplicationJson)
    ], AddMembersToCallQueueRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AddMembersToCallQueueMultipartFormData)
    ], AddMembersToCallQueueRequests.prototype, "object1", void 0);
    return AddMembersToCallQueueRequests;
}(utils_1.SpeakeasyBase));
exports.AddMembersToCallQueueRequests = AddMembersToCallQueueRequests;
var AddMembersToCallQueueSecurity = /** @class */ (function (_super) {
    __extends(AddMembersToCallQueueSecurity, _super);
    function AddMembersToCallQueueSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], AddMembersToCallQueueSecurity.prototype, "oAuth", void 0);
    return AddMembersToCallQueueSecurity;
}(utils_1.SpeakeasyBase));
exports.AddMembersToCallQueueSecurity = AddMembersToCallQueueSecurity;
var AddMembersToCallQueueRequest = /** @class */ (function (_super) {
    __extends(AddMembersToCallQueueRequest, _super);
    function AddMembersToCallQueueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddMembersToCallQueuePathParams)
    ], AddMembersToCallQueueRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddMembersToCallQueueRequests)
    ], AddMembersToCallQueueRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddMembersToCallQueueSecurity)
    ], AddMembersToCallQueueRequest.prototype, "security", void 0);
    return AddMembersToCallQueueRequest;
}(utils_1.SpeakeasyBase));
exports.AddMembersToCallQueueRequest = AddMembersToCallQueueRequest;
var AddMembersToCallQueueResponse = /** @class */ (function (_super) {
    __extends(AddMembersToCallQueueResponse, _super);
    function AddMembersToCallQueueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AddMembersToCallQueueResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddMembersToCallQueueResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddMembersToCallQueueResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AddMembersToCallQueueResponse.prototype, "addMembersToCallQueue201ApplicationJSONObject", void 0);
    return AddMembersToCallQueueResponse;
}(utils_1.SpeakeasyBase));
exports.AddMembersToCallQueueResponse = AddMembersToCallQueueResponse;
