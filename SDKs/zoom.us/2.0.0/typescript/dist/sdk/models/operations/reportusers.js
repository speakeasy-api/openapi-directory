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
exports.ReportUsersResponse = exports.ReportUsersRequest = exports.ReportUsers200ApplicationJson = exports.ReportUsers200ApplicationJsonUsers = exports.ReportUsers200ApplicationJsonUsersCustomAttributes = exports.ReportUsersSecurity = exports.ReportUsersQueryParams = exports.ReportUsersTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReportUsersTypeEnum;
(function (ReportUsersTypeEnum) {
    ReportUsersTypeEnum["Active"] = "active";
    ReportUsersTypeEnum["Inactive"] = "inactive";
})(ReportUsersTypeEnum = exports.ReportUsersTypeEnum || (exports.ReportUsersTypeEnum = {}));
var ReportUsersQueryParams = /** @class */ (function (_super) {
    __extends(ReportUsersQueryParams, _super);
    function ReportUsersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Date)
    ], ReportUsersQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ReportUsersQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_number" }),
        __metadata("design:type", Number)
    ], ReportUsersQueryParams.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ReportUsersQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", Date)
    ], ReportUsersQueryParams.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], ReportUsersQueryParams.prototype, "type", void 0);
    return ReportUsersQueryParams;
}(utils_1.SpeakeasyBase));
exports.ReportUsersQueryParams = ReportUsersQueryParams;
var ReportUsersSecurity = /** @class */ (function (_super) {
    __extends(ReportUsersSecurity, _super);
    function ReportUsersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ReportUsersSecurity.prototype, "oAuth", void 0);
    return ReportUsersSecurity;
}(utils_1.SpeakeasyBase));
exports.ReportUsersSecurity = ReportUsersSecurity;
// ReportUsers200ApplicationJsonUsersCustomAttributes
/**
 * Custom attribute(s) that have been assigned to the user.
**/
var ReportUsers200ApplicationJsonUsersCustomAttributes = /** @class */ (function (_super) {
    __extends(ReportUsers200ApplicationJsonUsersCustomAttributes, _super);
    function ReportUsers200ApplicationJsonUsersCustomAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ReportUsers200ApplicationJsonUsersCustomAttributes.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReportUsers200ApplicationJsonUsersCustomAttributes.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ReportUsers200ApplicationJsonUsersCustomAttributes.prototype, "value", void 0);
    return ReportUsers200ApplicationJsonUsersCustomAttributes;
}(utils_1.SpeakeasyBase));
exports.ReportUsers200ApplicationJsonUsersCustomAttributes = ReportUsers200ApplicationJsonUsersCustomAttributes;
var ReportUsers200ApplicationJsonUsers = /** @class */ (function (_super) {
    __extends(ReportUsers200ApplicationJsonUsers, _super);
    function ReportUsers200ApplicationJsonUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_attributes" }),
        __metadata("design:type", ReportUsers200ApplicationJsonUsersCustomAttributes)
    ], ReportUsers200ApplicationJsonUsers.prototype, "customAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dept" }),
        __metadata("design:type", String)
    ], ReportUsers200ApplicationJsonUsers.prototype, "dept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ReportUsers200ApplicationJsonUsers.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ReportUsers200ApplicationJsonUsers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_minutes" }),
        __metadata("design:type", Number)
    ], ReportUsers200ApplicationJsonUsers.prototype, "meetingMinutes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meetings" }),
        __metadata("design:type", Number)
    ], ReportUsers200ApplicationJsonUsers.prototype, "meetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants" }),
        __metadata("design:type", Number)
    ], ReportUsers200ApplicationJsonUsers.prototype, "participants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], ReportUsers200ApplicationJsonUsers.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_name" }),
        __metadata("design:type", String)
    ], ReportUsers200ApplicationJsonUsers.prototype, "userName", void 0);
    return ReportUsers200ApplicationJsonUsers;
}(utils_1.SpeakeasyBase));
exports.ReportUsers200ApplicationJsonUsers = ReportUsers200ApplicationJsonUsers;
var ReportUsers200ApplicationJson = /** @class */ (function (_super) {
    __extends(ReportUsers200ApplicationJson, _super);
    function ReportUsers200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", Date)
    ], ReportUsers200ApplicationJson.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ReportUsers200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], ReportUsers200ApplicationJson.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_number" }),
        __metadata("design:type", Number)
    ], ReportUsers200ApplicationJson.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ReportUsers200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", Date)
    ], ReportUsers200ApplicationJson.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_meeting_minutes" }),
        __metadata("design:type", Number)
    ], ReportUsers200ApplicationJson.prototype, "totalMeetingMinutes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_meetings" }),
        __metadata("design:type", Number)
    ], ReportUsers200ApplicationJson.prototype, "totalMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_participants" }),
        __metadata("design:type", Number)
    ], ReportUsers200ApplicationJson.prototype, "totalParticipants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], ReportUsers200ApplicationJson.prototype, "totalRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users", elemType: ReportUsers200ApplicationJsonUsers }),
        __metadata("design:type", Array)
    ], ReportUsers200ApplicationJson.prototype, "users", void 0);
    return ReportUsers200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ReportUsers200ApplicationJson = ReportUsers200ApplicationJson;
var ReportUsersRequest = /** @class */ (function (_super) {
    __extends(ReportUsersRequest, _super);
    function ReportUsersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportUsersQueryParams)
    ], ReportUsersRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportUsersSecurity)
    ], ReportUsersRequest.prototype, "security", void 0);
    return ReportUsersRequest;
}(utils_1.SpeakeasyBase));
exports.ReportUsersRequest = ReportUsersRequest;
var ReportUsersResponse = /** @class */ (function (_super) {
    __extends(ReportUsersResponse, _super);
    function ReportUsersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ReportUsersResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReportUsersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReportUsersResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportUsers200ApplicationJson)
    ], ReportUsersResponse.prototype, "reportUsers200ApplicationJSONObject", void 0);
    return ReportUsersResponse;
}(utils_1.SpeakeasyBase));
exports.ReportUsersResponse = ReportUsersResponse;
