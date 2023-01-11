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
exports.ImGroupMembersResponse = exports.ImGroupMembersRequest = exports.ImGroupMembersGroupMemberList = exports.ImGroupMembersGroupMemberListMembers = exports.ImGroupMembersSecurity = exports.ImGroupMembersQueryParams = exports.ImGroupMembersPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ImGroupMembersPathParams = /** @class */ (function (_super) {
    __extends(ImGroupMembersPathParams, _super);
    function ImGroupMembersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", String)
    ], ImGroupMembersPathParams.prototype, "groupId", void 0);
    return ImGroupMembersPathParams;
}(utils_1.SpeakeasyBase));
exports.ImGroupMembersPathParams = ImGroupMembersPathParams;
var ImGroupMembersQueryParams = /** @class */ (function (_super) {
    __extends(ImGroupMembersQueryParams, _super);
    function ImGroupMembersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ImGroupMembersQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_number" }),
        __metadata("design:type", Number)
    ], ImGroupMembersQueryParams.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ImGroupMembersQueryParams.prototype, "pageSize", void 0);
    return ImGroupMembersQueryParams;
}(utils_1.SpeakeasyBase));
exports.ImGroupMembersQueryParams = ImGroupMembersQueryParams;
var ImGroupMembersSecurity = /** @class */ (function (_super) {
    __extends(ImGroupMembersSecurity, _super);
    function ImGroupMembersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ImGroupMembersSecurity.prototype, "oAuth", void 0);
    return ImGroupMembersSecurity;
}(utils_1.SpeakeasyBase));
exports.ImGroupMembersSecurity = ImGroupMembersSecurity;
// ImGroupMembersGroupMemberListMembers
/**
 * Group member object.
**/
var ImGroupMembersGroupMemberListMembers = /** @class */ (function (_super) {
    __extends(ImGroupMembersGroupMemberListMembers, _super);
    function ImGroupMembersGroupMemberListMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ImGroupMembersGroupMemberListMembers.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], ImGroupMembersGroupMemberListMembers.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ImGroupMembersGroupMemberListMembers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], ImGroupMembersGroupMemberListMembers.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], ImGroupMembersGroupMemberListMembers.prototype, "type", void 0);
    return ImGroupMembersGroupMemberListMembers;
}(utils_1.SpeakeasyBase));
exports.ImGroupMembersGroupMemberListMembers = ImGroupMembersGroupMemberListMembers;
// ImGroupMembersGroupMemberList
/**
 * Pagination Object.
**/
var ImGroupMembersGroupMemberList = /** @class */ (function (_super) {
    __extends(ImGroupMembersGroupMemberList, _super);
    function ImGroupMembersGroupMemberList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=members", elemType: ImGroupMembersGroupMemberListMembers }),
        __metadata("design:type", Array)
    ], ImGroupMembersGroupMemberList.prototype, "members", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ImGroupMembersGroupMemberList.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], ImGroupMembersGroupMemberList.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_number" }),
        __metadata("design:type", Number)
    ], ImGroupMembersGroupMemberList.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ImGroupMembersGroupMemberList.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], ImGroupMembersGroupMemberList.prototype, "totalRecords", void 0);
    return ImGroupMembersGroupMemberList;
}(utils_1.SpeakeasyBase));
exports.ImGroupMembersGroupMemberList = ImGroupMembersGroupMemberList;
var ImGroupMembersRequest = /** @class */ (function (_super) {
    __extends(ImGroupMembersRequest, _super);
    function ImGroupMembersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImGroupMembersPathParams)
    ], ImGroupMembersRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImGroupMembersQueryParams)
    ], ImGroupMembersRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImGroupMembersSecurity)
    ], ImGroupMembersRequest.prototype, "security", void 0);
    return ImGroupMembersRequest;
}(utils_1.SpeakeasyBase));
exports.ImGroupMembersRequest = ImGroupMembersRequest;
var ImGroupMembersResponse = /** @class */ (function (_super) {
    __extends(ImGroupMembersResponse, _super);
    function ImGroupMembersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ImGroupMembersResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ImGroupMembersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImGroupMembersGroupMemberList)
    ], ImGroupMembersResponse.prototype, "groupMemberList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ImGroupMembersResponse.prototype, "statusCode", void 0);
    return ImGroupMembersResponse;
}(utils_1.SpeakeasyBase));
exports.ImGroupMembersResponse = ImGroupMembersResponse;
