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
exports.DashboardMeetingParticipantShareResponse = exports.DashboardMeetingParticipantShareRequest = exports.DashboardMeetingParticipantShare200ApplicationJson = exports.DashboardMeetingParticipantShare200ApplicationJsonParticipants = exports.DashboardMeetingParticipantShare200ApplicationJsonParticipantsDetails = exports.DashboardMeetingParticipantShareSecurity = exports.DashboardMeetingParticipantShareQueryParams = exports.DashboardMeetingParticipantShareTypeEnum = exports.DashboardMeetingParticipantSharePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DashboardMeetingParticipantSharePathParams = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantSharePathParams, _super);
    function DashboardMeetingParticipantSharePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantSharePathParams.prototype, "meetingId", void 0);
    return DashboardMeetingParticipantSharePathParams;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantSharePathParams = DashboardMeetingParticipantSharePathParams;
var DashboardMeetingParticipantShareTypeEnum;
(function (DashboardMeetingParticipantShareTypeEnum) {
    DashboardMeetingParticipantShareTypeEnum["Past"] = "past";
    DashboardMeetingParticipantShareTypeEnum["PastOne"] = "pastOne";
    DashboardMeetingParticipantShareTypeEnum["Live"] = "live";
})(DashboardMeetingParticipantShareTypeEnum = exports.DashboardMeetingParticipantShareTypeEnum || (exports.DashboardMeetingParticipantShareTypeEnum = {}));
var DashboardMeetingParticipantShareQueryParams = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantShareQueryParams, _super);
    function DashboardMeetingParticipantShareQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantShareQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], DashboardMeetingParticipantShareQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantShareQueryParams.prototype, "type", void 0);
    return DashboardMeetingParticipantShareQueryParams;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantShareQueryParams = DashboardMeetingParticipantShareQueryParams;
var DashboardMeetingParticipantShareSecurity = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantShareSecurity, _super);
    function DashboardMeetingParticipantShareSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], DashboardMeetingParticipantShareSecurity.prototype, "oAuth", void 0);
    return DashboardMeetingParticipantShareSecurity;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantShareSecurity = DashboardMeetingParticipantShareSecurity;
var DashboardMeetingParticipantShare200ApplicationJsonParticipantsDetails = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantShare200ApplicationJsonParticipantsDetails, _super);
    function DashboardMeetingParticipantShare200ApplicationJsonParticipantsDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantShare200ApplicationJsonParticipantsDetails.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_time" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantShare200ApplicationJsonParticipantsDetails.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantShare200ApplicationJsonParticipantsDetails.prototype, "startTime", void 0);
    return DashboardMeetingParticipantShare200ApplicationJsonParticipantsDetails;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantShare200ApplicationJsonParticipantsDetails = DashboardMeetingParticipantShare200ApplicationJsonParticipantsDetails;
var DashboardMeetingParticipantShare200ApplicationJsonParticipants = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantShare200ApplicationJsonParticipants, _super);
    function DashboardMeetingParticipantShare200ApplicationJsonParticipants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=details", elemType: DashboardMeetingParticipantShare200ApplicationJsonParticipantsDetails }),
        __metadata("design:type", Array)
    ], DashboardMeetingParticipantShare200ApplicationJsonParticipants.prototype, "details", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantShare200ApplicationJsonParticipants.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_id" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantShare200ApplicationJsonParticipants.prototype, "userId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_name" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantShare200ApplicationJsonParticipants.prototype, "userName", void 0);
    return DashboardMeetingParticipantShare200ApplicationJsonParticipants;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantShare200ApplicationJsonParticipants = DashboardMeetingParticipantShare200ApplicationJsonParticipants;
// DashboardMeetingParticipantShare200ApplicationJson
/**
 * Pagination object.
**/
var DashboardMeetingParticipantShare200ApplicationJson = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantShare200ApplicationJson, _super);
    function DashboardMeetingParticipantShare200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantShare200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], DashboardMeetingParticipantShare200ApplicationJson.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], DashboardMeetingParticipantShare200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants", elemType: DashboardMeetingParticipantShare200ApplicationJsonParticipants }),
        __metadata("design:type", Array)
    ], DashboardMeetingParticipantShare200ApplicationJson.prototype, "participants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], DashboardMeetingParticipantShare200ApplicationJson.prototype, "totalRecords", void 0);
    return DashboardMeetingParticipantShare200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantShare200ApplicationJson = DashboardMeetingParticipantShare200ApplicationJson;
var DashboardMeetingParticipantShareRequest = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantShareRequest, _super);
    function DashboardMeetingParticipantShareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardMeetingParticipantSharePathParams)
    ], DashboardMeetingParticipantShareRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardMeetingParticipantShareQueryParams)
    ], DashboardMeetingParticipantShareRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardMeetingParticipantShareSecurity)
    ], DashboardMeetingParticipantShareRequest.prototype, "security", void 0);
    return DashboardMeetingParticipantShareRequest;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantShareRequest = DashboardMeetingParticipantShareRequest;
var DashboardMeetingParticipantShareResponse = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantShareResponse, _super);
    function DashboardMeetingParticipantShareResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DashboardMeetingParticipantShareResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantShareResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DashboardMeetingParticipantShareResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardMeetingParticipantShare200ApplicationJson)
    ], DashboardMeetingParticipantShareResponse.prototype, "dashboardMeetingParticipantShare200ApplicationJSONObject", void 0);
    return DashboardMeetingParticipantShareResponse;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantShareResponse = DashboardMeetingParticipantShareResponse;
