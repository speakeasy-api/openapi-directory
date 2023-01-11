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
exports.GroupMembersCreateResponse = exports.GroupMembersCreateRequest = exports.GroupMembersCreateRequests = exports.GroupMembersCreateMultipartFormData1 = exports.GroupMembersCreateMultipartFormDataMembers = exports.GroupMembersCreateApplicationJson = exports.GroupMembersCreateApplicationJsonMembers = exports.GroupMembersCreatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GroupMembersCreatePathParams = /** @class */ (function (_super) {
    __extends(GroupMembersCreatePathParams, _super);
    function GroupMembersCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", String)
    ], GroupMembersCreatePathParams.prototype, "groupId", void 0);
    return GroupMembersCreatePathParams;
}(utils_1.SpeakeasyBase));
exports.GroupMembersCreatePathParams = GroupMembersCreatePathParams;
var GroupMembersCreateApplicationJsonMembers = /** @class */ (function (_super) {
    __extends(GroupMembersCreateApplicationJsonMembers, _super);
    function GroupMembersCreateApplicationJsonMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GroupMembersCreateApplicationJsonMembers.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GroupMembersCreateApplicationJsonMembers.prototype, "id", void 0);
    return GroupMembersCreateApplicationJsonMembers;
}(utils_1.SpeakeasyBase));
exports.GroupMembersCreateApplicationJsonMembers = GroupMembersCreateApplicationJsonMembers;
var GroupMembersCreateApplicationJson = /** @class */ (function (_super) {
    __extends(GroupMembersCreateApplicationJson, _super);
    function GroupMembersCreateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=members", elemType: GroupMembersCreateApplicationJsonMembers }),
        __metadata("design:type", Array)
    ], GroupMembersCreateApplicationJson.prototype, "members", void 0);
    return GroupMembersCreateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GroupMembersCreateApplicationJson = GroupMembersCreateApplicationJson;
var GroupMembersCreateMultipartFormDataMembers = /** @class */ (function (_super) {
    __extends(GroupMembersCreateMultipartFormDataMembers, _super);
    function GroupMembersCreateMultipartFormDataMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GroupMembersCreateMultipartFormDataMembers.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GroupMembersCreateMultipartFormDataMembers.prototype, "id", void 0);
    return GroupMembersCreateMultipartFormDataMembers;
}(utils_1.SpeakeasyBase));
exports.GroupMembersCreateMultipartFormDataMembers = GroupMembersCreateMultipartFormDataMembers;
var GroupMembersCreateMultipartFormData1 = /** @class */ (function (_super) {
    __extends(GroupMembersCreateMultipartFormData1, _super);
    function GroupMembersCreateMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=members;json=true", elemType: GroupMembersCreateMultipartFormDataMembers }),
        __metadata("design:type", Array)
    ], GroupMembersCreateMultipartFormData1.prototype, "members", void 0);
    return GroupMembersCreateMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.GroupMembersCreateMultipartFormData1 = GroupMembersCreateMultipartFormData1;
var GroupMembersCreateRequests = /** @class */ (function (_super) {
    __extends(GroupMembersCreateRequests, _super);
    function GroupMembersCreateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", GroupMembersCreateApplicationJson)
    ], GroupMembersCreateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", GroupMembersCreateMultipartFormData1)
    ], GroupMembersCreateRequests.prototype, "object1", void 0);
    return GroupMembersCreateRequests;
}(utils_1.SpeakeasyBase));
exports.GroupMembersCreateRequests = GroupMembersCreateRequests;
var GroupMembersCreateRequest = /** @class */ (function (_super) {
    __extends(GroupMembersCreateRequest, _super);
    function GroupMembersCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GroupMembersCreatePathParams)
    ], GroupMembersCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GroupMembersCreateRequests)
    ], GroupMembersCreateRequest.prototype, "request", void 0);
    return GroupMembersCreateRequest;
}(utils_1.SpeakeasyBase));
exports.GroupMembersCreateRequest = GroupMembersCreateRequest;
var GroupMembersCreateResponse = /** @class */ (function (_super) {
    __extends(GroupMembersCreateResponse, _super);
    function GroupMembersCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GroupMembersCreateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GroupMembersCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GroupMembersCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GroupMembersCreateResponse.prototype, "groupMembersCreate201ApplicationJSONAny", void 0);
    return GroupMembersCreateResponse;
}(utils_1.SpeakeasyBase));
exports.GroupMembersCreateResponse = GroupMembersCreateResponse;
