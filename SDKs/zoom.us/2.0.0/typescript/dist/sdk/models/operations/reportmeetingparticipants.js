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
exports.ReportMeetingParticipantsResponse = exports.ReportMeetingParticipantsRequest = exports.ReportMeetingParticipants200ApplicationJson = exports.ReportMeetingParticipants200ApplicationJsonParticipants = exports.ReportMeetingParticipantsSecurity = exports.ReportMeetingParticipantsQueryParams = exports.ReportMeetingParticipantsIncludeFieldsEnum = exports.ReportMeetingParticipantsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReportMeetingParticipantsPathParams = /** @class */ (function (_super) {
    __extends(ReportMeetingParticipantsPathParams, _super);
    function ReportMeetingParticipantsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", String)
    ], ReportMeetingParticipantsPathParams.prototype, "meetingId", void 0);
    return ReportMeetingParticipantsPathParams;
}(utils_1.SpeakeasyBase));
exports.ReportMeetingParticipantsPathParams = ReportMeetingParticipantsPathParams;
var ReportMeetingParticipantsIncludeFieldsEnum;
(function (ReportMeetingParticipantsIncludeFieldsEnum) {
    ReportMeetingParticipantsIncludeFieldsEnum["RegistrantId"] = "registrant_id";
})(ReportMeetingParticipantsIncludeFieldsEnum = exports.ReportMeetingParticipantsIncludeFieldsEnum || (exports.ReportMeetingParticipantsIncludeFieldsEnum = {}));
var ReportMeetingParticipantsQueryParams = /** @class */ (function (_super) {
    __extends(ReportMeetingParticipantsQueryParams, _super);
    function ReportMeetingParticipantsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_fields" }),
        __metadata("design:type", String)
    ], ReportMeetingParticipantsQueryParams.prototype, "includeFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ReportMeetingParticipantsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ReportMeetingParticipantsQueryParams.prototype, "pageSize", void 0);
    return ReportMeetingParticipantsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ReportMeetingParticipantsQueryParams = ReportMeetingParticipantsQueryParams;
var ReportMeetingParticipantsSecurity = /** @class */ (function (_super) {
    __extends(ReportMeetingParticipantsSecurity, _super);
    function ReportMeetingParticipantsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ReportMeetingParticipantsSecurity.prototype, "oAuth", void 0);
    return ReportMeetingParticipantsSecurity;
}(utils_1.SpeakeasyBase));
exports.ReportMeetingParticipantsSecurity = ReportMeetingParticipantsSecurity;
var ReportMeetingParticipants200ApplicationJsonParticipants = /** @class */ (function (_super) {
    __extends(ReportMeetingParticipants200ApplicationJsonParticipants, _super);
    function ReportMeetingParticipants200ApplicationJsonParticipants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customer_key" }),
        __metadata("design:type", String)
    ], ReportMeetingParticipants200ApplicationJsonParticipants.prototype, "customerKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], ReportMeetingParticipants200ApplicationJsonParticipants.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=failover" }),
        __metadata("design:type", Boolean)
    ], ReportMeetingParticipants200ApplicationJsonParticipants.prototype, "failover", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ReportMeetingParticipants200ApplicationJsonParticipants.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_time" }),
        __metadata("design:type", Date)
    ], ReportMeetingParticipants200ApplicationJsonParticipants.prototype, "joinTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=leave_time" }),
        __metadata("design:type", Date)
    ], ReportMeetingParticipants200ApplicationJsonParticipants.prototype, "leaveTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReportMeetingParticipants200ApplicationJsonParticipants.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrant_id" }),
        __metadata("design:type", String)
    ], ReportMeetingParticipants200ApplicationJsonParticipants.prototype, "registrantId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_email" }),
        __metadata("design:type", String)
    ], ReportMeetingParticipants200ApplicationJsonParticipants.prototype, "userEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_id" }),
        __metadata("design:type", String)
    ], ReportMeetingParticipants200ApplicationJsonParticipants.prototype, "userId", void 0);
    return ReportMeetingParticipants200ApplicationJsonParticipants;
}(utils_1.SpeakeasyBase));
exports.ReportMeetingParticipants200ApplicationJsonParticipants = ReportMeetingParticipants200ApplicationJsonParticipants;
// ReportMeetingParticipants200ApplicationJson
/**
 * Pagination object.
**/
var ReportMeetingParticipants200ApplicationJson = /** @class */ (function (_super) {
    __extends(ReportMeetingParticipants200ApplicationJson, _super);
    function ReportMeetingParticipants200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ReportMeetingParticipants200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], ReportMeetingParticipants200ApplicationJson.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ReportMeetingParticipants200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants", elemType: ReportMeetingParticipants200ApplicationJsonParticipants }),
        __metadata("design:type", Array)
    ], ReportMeetingParticipants200ApplicationJson.prototype, "participants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], ReportMeetingParticipants200ApplicationJson.prototype, "totalRecords", void 0);
    return ReportMeetingParticipants200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ReportMeetingParticipants200ApplicationJson = ReportMeetingParticipants200ApplicationJson;
var ReportMeetingParticipantsRequest = /** @class */ (function (_super) {
    __extends(ReportMeetingParticipantsRequest, _super);
    function ReportMeetingParticipantsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportMeetingParticipantsPathParams)
    ], ReportMeetingParticipantsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportMeetingParticipantsQueryParams)
    ], ReportMeetingParticipantsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportMeetingParticipantsSecurity)
    ], ReportMeetingParticipantsRequest.prototype, "security", void 0);
    return ReportMeetingParticipantsRequest;
}(utils_1.SpeakeasyBase));
exports.ReportMeetingParticipantsRequest = ReportMeetingParticipantsRequest;
var ReportMeetingParticipantsResponse = /** @class */ (function (_super) {
    __extends(ReportMeetingParticipantsResponse, _super);
    function ReportMeetingParticipantsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ReportMeetingParticipantsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReportMeetingParticipantsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReportMeetingParticipantsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportMeetingParticipants200ApplicationJson)
    ], ReportMeetingParticipantsResponse.prototype, "reportMeetingParticipants200ApplicationJSONObject", void 0);
    return ReportMeetingParticipantsResponse;
}(utils_1.SpeakeasyBase));
exports.ReportMeetingParticipantsResponse = ReportMeetingParticipantsResponse;
