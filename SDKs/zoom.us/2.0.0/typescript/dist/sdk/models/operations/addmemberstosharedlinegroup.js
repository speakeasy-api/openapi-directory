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
exports.AddMembersToSharedLineGroupResponse = exports.AddMembersToSharedLineGroupRequest = exports.AddMembersToSharedLineGroupRequests = exports.AddMembersToSharedLineGroupMultipartFormData = exports.AddMembersToSharedLineGroupMultipartFormDataMembers = exports.AddMembersToSharedLineGroupMultipartFormDataMembersUsers = exports.AddMembersToSharedLineGroupApplicationJson = exports.AddMembersToSharedLineGroupApplicationJsonMembers = exports.AddMembersToSharedLineGroupApplicationJsonMembersUsers = exports.AddMembersToSharedLineGroupPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var AddMembersToSharedLineGroupPathParams = /** @class */ (function (_super) {
    __extends(AddMembersToSharedLineGroupPathParams, _super);
    function AddMembersToSharedLineGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=sharedLineGroupId" }),
        __metadata("design:type", String)
    ], AddMembersToSharedLineGroupPathParams.prototype, "sharedLineGroupId", void 0);
    return AddMembersToSharedLineGroupPathParams;
}(utils_1.SpeakeasyBase));
exports.AddMembersToSharedLineGroupPathParams = AddMembersToSharedLineGroupPathParams;
var AddMembersToSharedLineGroupApplicationJsonMembersUsers = /** @class */ (function (_super) {
    __extends(AddMembersToSharedLineGroupApplicationJsonMembersUsers, _super);
    function AddMembersToSharedLineGroupApplicationJsonMembersUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], AddMembersToSharedLineGroupApplicationJsonMembersUsers.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AddMembersToSharedLineGroupApplicationJsonMembersUsers.prototype, "id", void 0);
    return AddMembersToSharedLineGroupApplicationJsonMembersUsers;
}(utils_1.SpeakeasyBase));
exports.AddMembersToSharedLineGroupApplicationJsonMembersUsers = AddMembersToSharedLineGroupApplicationJsonMembersUsers;
// AddMembersToSharedLineGroupApplicationJsonMembers
/**
 * Members can comprise of users on the account as well as common area phones. You can add a maximum of 10 members at once.
**/
var AddMembersToSharedLineGroupApplicationJsonMembers = /** @class */ (function (_super) {
    __extends(AddMembersToSharedLineGroupApplicationJsonMembers, _super);
    function AddMembersToSharedLineGroupApplicationJsonMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=common_area_phone_ids" }),
        __metadata("design:type", Array)
    ], AddMembersToSharedLineGroupApplicationJsonMembers.prototype, "commonAreaPhoneIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users", elemType: AddMembersToSharedLineGroupApplicationJsonMembersUsers }),
        __metadata("design:type", Array)
    ], AddMembersToSharedLineGroupApplicationJsonMembers.prototype, "users", void 0);
    return AddMembersToSharedLineGroupApplicationJsonMembers;
}(utils_1.SpeakeasyBase));
exports.AddMembersToSharedLineGroupApplicationJsonMembers = AddMembersToSharedLineGroupApplicationJsonMembers;
var AddMembersToSharedLineGroupApplicationJson = /** @class */ (function (_super) {
    __extends(AddMembersToSharedLineGroupApplicationJson, _super);
    function AddMembersToSharedLineGroupApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=members" }),
        __metadata("design:type", AddMembersToSharedLineGroupApplicationJsonMembers)
    ], AddMembersToSharedLineGroupApplicationJson.prototype, "members", void 0);
    return AddMembersToSharedLineGroupApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddMembersToSharedLineGroupApplicationJson = AddMembersToSharedLineGroupApplicationJson;
var AddMembersToSharedLineGroupMultipartFormDataMembersUsers = /** @class */ (function (_super) {
    __extends(AddMembersToSharedLineGroupMultipartFormDataMembersUsers, _super);
    function AddMembersToSharedLineGroupMultipartFormDataMembersUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], AddMembersToSharedLineGroupMultipartFormDataMembersUsers.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AddMembersToSharedLineGroupMultipartFormDataMembersUsers.prototype, "id", void 0);
    return AddMembersToSharedLineGroupMultipartFormDataMembersUsers;
}(utils_1.SpeakeasyBase));
exports.AddMembersToSharedLineGroupMultipartFormDataMembersUsers = AddMembersToSharedLineGroupMultipartFormDataMembersUsers;
// AddMembersToSharedLineGroupMultipartFormDataMembers
/**
 * Members can comprise of users on the account as well as common area phones. You can add a maximum of 10 members at once.
**/
var AddMembersToSharedLineGroupMultipartFormDataMembers = /** @class */ (function (_super) {
    __extends(AddMembersToSharedLineGroupMultipartFormDataMembers, _super);
    function AddMembersToSharedLineGroupMultipartFormDataMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=common_area_phone_ids" }),
        __metadata("design:type", Array)
    ], AddMembersToSharedLineGroupMultipartFormDataMembers.prototype, "commonAreaPhoneIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users", elemType: AddMembersToSharedLineGroupMultipartFormDataMembersUsers }),
        __metadata("design:type", Array)
    ], AddMembersToSharedLineGroupMultipartFormDataMembers.prototype, "users", void 0);
    return AddMembersToSharedLineGroupMultipartFormDataMembers;
}(utils_1.SpeakeasyBase));
exports.AddMembersToSharedLineGroupMultipartFormDataMembers = AddMembersToSharedLineGroupMultipartFormDataMembers;
var AddMembersToSharedLineGroupMultipartFormData = /** @class */ (function (_super) {
    __extends(AddMembersToSharedLineGroupMultipartFormData, _super);
    function AddMembersToSharedLineGroupMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=members;json=true" }),
        __metadata("design:type", AddMembersToSharedLineGroupMultipartFormDataMembers)
    ], AddMembersToSharedLineGroupMultipartFormData.prototype, "members", void 0);
    return AddMembersToSharedLineGroupMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.AddMembersToSharedLineGroupMultipartFormData = AddMembersToSharedLineGroupMultipartFormData;
var AddMembersToSharedLineGroupRequests = /** @class */ (function (_super) {
    __extends(AddMembersToSharedLineGroupRequests, _super);
    function AddMembersToSharedLineGroupRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddMembersToSharedLineGroupApplicationJson)
    ], AddMembersToSharedLineGroupRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AddMembersToSharedLineGroupMultipartFormData)
    ], AddMembersToSharedLineGroupRequests.prototype, "object1", void 0);
    return AddMembersToSharedLineGroupRequests;
}(utils_1.SpeakeasyBase));
exports.AddMembersToSharedLineGroupRequests = AddMembersToSharedLineGroupRequests;
var AddMembersToSharedLineGroupRequest = /** @class */ (function (_super) {
    __extends(AddMembersToSharedLineGroupRequest, _super);
    function AddMembersToSharedLineGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddMembersToSharedLineGroupPathParams)
    ], AddMembersToSharedLineGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddMembersToSharedLineGroupRequests)
    ], AddMembersToSharedLineGroupRequest.prototype, "request", void 0);
    return AddMembersToSharedLineGroupRequest;
}(utils_1.SpeakeasyBase));
exports.AddMembersToSharedLineGroupRequest = AddMembersToSharedLineGroupRequest;
var AddMembersToSharedLineGroupResponse = /** @class */ (function (_super) {
    __extends(AddMembersToSharedLineGroupResponse, _super);
    function AddMembersToSharedLineGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AddMembersToSharedLineGroupResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddMembersToSharedLineGroupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddMembersToSharedLineGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AddMembersToSharedLineGroupResponse.prototype, "addMembersToSharedLineGroup201ApplicationJSONAny", void 0);
    return AddMembersToSharedLineGroupResponse;
}(utils_1.SpeakeasyBase));
exports.AddMembersToSharedLineGroupResponse = AddMembersToSharedLineGroupResponse;
