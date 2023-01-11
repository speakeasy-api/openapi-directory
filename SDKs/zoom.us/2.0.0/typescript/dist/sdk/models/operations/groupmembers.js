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
exports.GroupMembersResponse = exports.GroupMembersRequest = exports.GroupMembers200ApplicationJson = exports.GroupMembers200ApplicationJsonMembers = exports.GroupMembersSecurity = exports.GroupMembersQueryParams = exports.GroupMembersPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GroupMembersPathParams = /** @class */ (function (_super) {
    __extends(GroupMembersPathParams, _super);
    function GroupMembersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", String)
    ], GroupMembersPathParams.prototype, "groupId", void 0);
    return GroupMembersPathParams;
}(utils_1.SpeakeasyBase));
exports.GroupMembersPathParams = GroupMembersPathParams;
var GroupMembersQueryParams = /** @class */ (function (_super) {
    __extends(GroupMembersQueryParams, _super);
    function GroupMembersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], GroupMembersQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_number" }),
        __metadata("design:type", Number)
    ], GroupMembersQueryParams.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GroupMembersQueryParams.prototype, "pageSize", void 0);
    return GroupMembersQueryParams;
}(utils_1.SpeakeasyBase));
exports.GroupMembersQueryParams = GroupMembersQueryParams;
var GroupMembersSecurity = /** @class */ (function (_super) {
    __extends(GroupMembersSecurity, _super);
    function GroupMembersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], GroupMembersSecurity.prototype, "oAuth", void 0);
    return GroupMembersSecurity;
}(utils_1.SpeakeasyBase));
exports.GroupMembersSecurity = GroupMembersSecurity;
var GroupMembers200ApplicationJsonMembers = /** @class */ (function (_super) {
    __extends(GroupMembers200ApplicationJsonMembers, _super);
    function GroupMembers200ApplicationJsonMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GroupMembers200ApplicationJsonMembers.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], GroupMembers200ApplicationJsonMembers.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GroupMembers200ApplicationJsonMembers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], GroupMembers200ApplicationJsonMembers.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], GroupMembers200ApplicationJsonMembers.prototype, "type", void 0);
    return GroupMembers200ApplicationJsonMembers;
}(utils_1.SpeakeasyBase));
exports.GroupMembers200ApplicationJsonMembers = GroupMembers200ApplicationJsonMembers;
var GroupMembers200ApplicationJson = /** @class */ (function (_super) {
    __extends(GroupMembers200ApplicationJson, _super);
    function GroupMembers200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=members", elemType: GroupMembers200ApplicationJsonMembers }),
        __metadata("design:type", Array)
    ], GroupMembers200ApplicationJson.prototype, "members", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], GroupMembers200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], GroupMembers200ApplicationJson.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_number" }),
        __metadata("design:type", Number)
    ], GroupMembers200ApplicationJson.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], GroupMembers200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], GroupMembers200ApplicationJson.prototype, "totalRecords", void 0);
    return GroupMembers200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GroupMembers200ApplicationJson = GroupMembers200ApplicationJson;
var GroupMembersRequest = /** @class */ (function (_super) {
    __extends(GroupMembersRequest, _super);
    function GroupMembersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GroupMembersPathParams)
    ], GroupMembersRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GroupMembersQueryParams)
    ], GroupMembersRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GroupMembersSecurity)
    ], GroupMembersRequest.prototype, "security", void 0);
    return GroupMembersRequest;
}(utils_1.SpeakeasyBase));
exports.GroupMembersRequest = GroupMembersRequest;
var GroupMembersResponse = /** @class */ (function (_super) {
    __extends(GroupMembersResponse, _super);
    function GroupMembersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GroupMembersResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GroupMembersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GroupMembersResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GroupMembers200ApplicationJson)
    ], GroupMembersResponse.prototype, "groupMembers200ApplicationJSONObject", void 0);
    return GroupMembersResponse;
}(utils_1.SpeakeasyBase));
exports.GroupMembersResponse = GroupMembersResponse;
