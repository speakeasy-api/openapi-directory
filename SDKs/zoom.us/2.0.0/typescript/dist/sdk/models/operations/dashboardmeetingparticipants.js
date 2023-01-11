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
exports.DashboardMeetingParticipantsResponse = exports.DashboardMeetingParticipantsRequest = exports.DashboardMeetingParticipants200ApplicationJson = exports.DashboardMeetingParticipants200ApplicationJsonParticipants = exports.DashboardMeetingParticipants200ApplicationJsonParticipantsVideoQualityEnum = exports.DashboardMeetingParticipants200ApplicationJsonParticipantsStatusEnum = exports.DashboardMeetingParticipants200ApplicationJsonParticipantsScreenShareQualityEnum = exports.DashboardMeetingParticipants200ApplicationJsonParticipantsNetworkTypeEnum = exports.DashboardMeetingParticipants200ApplicationJsonParticipantsAudioQualityEnum = exports.DashboardMeetingParticipantsSecurity = exports.DashboardMeetingParticipantsQueryParams = exports.DashboardMeetingParticipantsTypeEnum = exports.DashboardMeetingParticipantsIncludeFieldsEnum = exports.DashboardMeetingParticipantsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DashboardMeetingParticipantsPathParams = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantsPathParams, _super);
    function DashboardMeetingParticipantsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsPathParams.prototype, "meetingId", void 0);
    return DashboardMeetingParticipantsPathParams;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantsPathParams = DashboardMeetingParticipantsPathParams;
var DashboardMeetingParticipantsIncludeFieldsEnum;
(function (DashboardMeetingParticipantsIncludeFieldsEnum) {
    DashboardMeetingParticipantsIncludeFieldsEnum["RegistrantId"] = "registrant_id";
})(DashboardMeetingParticipantsIncludeFieldsEnum = exports.DashboardMeetingParticipantsIncludeFieldsEnum || (exports.DashboardMeetingParticipantsIncludeFieldsEnum = {}));
var DashboardMeetingParticipantsTypeEnum;
(function (DashboardMeetingParticipantsTypeEnum) {
    DashboardMeetingParticipantsTypeEnum["Past"] = "past";
    DashboardMeetingParticipantsTypeEnum["PastOne"] = "pastOne";
    DashboardMeetingParticipantsTypeEnum["Live"] = "live";
})(DashboardMeetingParticipantsTypeEnum = exports.DashboardMeetingParticipantsTypeEnum || (exports.DashboardMeetingParticipantsTypeEnum = {}));
var DashboardMeetingParticipantsQueryParams = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantsQueryParams, _super);
    function DashboardMeetingParticipantsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_fields" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQueryParams.prototype, "includeFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], DashboardMeetingParticipantsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsQueryParams.prototype, "type", void 0);
    return DashboardMeetingParticipantsQueryParams;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantsQueryParams = DashboardMeetingParticipantsQueryParams;
var DashboardMeetingParticipantsSecurity = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantsSecurity, _super);
    function DashboardMeetingParticipantsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], DashboardMeetingParticipantsSecurity.prototype, "oAuth", void 0);
    return DashboardMeetingParticipantsSecurity;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantsSecurity = DashboardMeetingParticipantsSecurity;
var DashboardMeetingParticipants200ApplicationJsonParticipantsAudioQualityEnum;
(function (DashboardMeetingParticipants200ApplicationJsonParticipantsAudioQualityEnum) {
    DashboardMeetingParticipants200ApplicationJsonParticipantsAudioQualityEnum["Unknown"] = " ";
    DashboardMeetingParticipants200ApplicationJsonParticipantsAudioQualityEnum["Good"] = "good";
    DashboardMeetingParticipants200ApplicationJsonParticipantsAudioQualityEnum["Fair"] = "fair";
    DashboardMeetingParticipants200ApplicationJsonParticipantsAudioQualityEnum["Poor"] = "poor";
    DashboardMeetingParticipants200ApplicationJsonParticipantsAudioQualityEnum["Bad"] = "bad";
})(DashboardMeetingParticipants200ApplicationJsonParticipantsAudioQualityEnum = exports.DashboardMeetingParticipants200ApplicationJsonParticipantsAudioQualityEnum || (exports.DashboardMeetingParticipants200ApplicationJsonParticipantsAudioQualityEnum = {}));
var DashboardMeetingParticipants200ApplicationJsonParticipantsNetworkTypeEnum;
(function (DashboardMeetingParticipants200ApplicationJsonParticipantsNetworkTypeEnum) {
    DashboardMeetingParticipants200ApplicationJsonParticipantsNetworkTypeEnum["Wired"] = "Wired";
    DashboardMeetingParticipants200ApplicationJsonParticipantsNetworkTypeEnum["Wifi"] = "Wifi";
    DashboardMeetingParticipants200ApplicationJsonParticipantsNetworkTypeEnum["Ppp"] = "PPP";
    DashboardMeetingParticipants200ApplicationJsonParticipantsNetworkTypeEnum["Cellular3GAnd4G"] = "Cellular (3G and 4G)";
    DashboardMeetingParticipants200ApplicationJsonParticipantsNetworkTypeEnum["Others"] = "Others";
})(DashboardMeetingParticipants200ApplicationJsonParticipantsNetworkTypeEnum = exports.DashboardMeetingParticipants200ApplicationJsonParticipantsNetworkTypeEnum || (exports.DashboardMeetingParticipants200ApplicationJsonParticipantsNetworkTypeEnum = {}));
var DashboardMeetingParticipants200ApplicationJsonParticipantsScreenShareQualityEnum;
(function (DashboardMeetingParticipants200ApplicationJsonParticipantsScreenShareQualityEnum) {
    DashboardMeetingParticipants200ApplicationJsonParticipantsScreenShareQualityEnum["Unknown"] = " ";
    DashboardMeetingParticipants200ApplicationJsonParticipantsScreenShareQualityEnum["Good"] = "good";
    DashboardMeetingParticipants200ApplicationJsonParticipantsScreenShareQualityEnum["Fair"] = "fair";
    DashboardMeetingParticipants200ApplicationJsonParticipantsScreenShareQualityEnum["Poor"] = "poor";
    DashboardMeetingParticipants200ApplicationJsonParticipantsScreenShareQualityEnum["Bad"] = "bad";
})(DashboardMeetingParticipants200ApplicationJsonParticipantsScreenShareQualityEnum = exports.DashboardMeetingParticipants200ApplicationJsonParticipantsScreenShareQualityEnum || (exports.DashboardMeetingParticipants200ApplicationJsonParticipantsScreenShareQualityEnum = {}));
var DashboardMeetingParticipants200ApplicationJsonParticipantsStatusEnum;
(function (DashboardMeetingParticipants200ApplicationJsonParticipantsStatusEnum) {
    DashboardMeetingParticipants200ApplicationJsonParticipantsStatusEnum["InMeeting"] = "in_meeting";
    DashboardMeetingParticipants200ApplicationJsonParticipantsStatusEnum["InWaitingRoom"] = "in_waiting_room";
})(DashboardMeetingParticipants200ApplicationJsonParticipantsStatusEnum = exports.DashboardMeetingParticipants200ApplicationJsonParticipantsStatusEnum || (exports.DashboardMeetingParticipants200ApplicationJsonParticipantsStatusEnum = {}));
var DashboardMeetingParticipants200ApplicationJsonParticipantsVideoQualityEnum;
(function (DashboardMeetingParticipants200ApplicationJsonParticipantsVideoQualityEnum) {
    DashboardMeetingParticipants200ApplicationJsonParticipantsVideoQualityEnum["Unknown"] = " ";
    DashboardMeetingParticipants200ApplicationJsonParticipantsVideoQualityEnum["Good"] = "good";
    DashboardMeetingParticipants200ApplicationJsonParticipantsVideoQualityEnum["Fair"] = "fair";
    DashboardMeetingParticipants200ApplicationJsonParticipantsVideoQualityEnum["Poor"] = "poor";
    DashboardMeetingParticipants200ApplicationJsonParticipantsVideoQualityEnum["Bad"] = "bad";
})(DashboardMeetingParticipants200ApplicationJsonParticipantsVideoQualityEnum = exports.DashboardMeetingParticipants200ApplicationJsonParticipantsVideoQualityEnum || (exports.DashboardMeetingParticipants200ApplicationJsonParticipantsVideoQualityEnum = {}));
var DashboardMeetingParticipants200ApplicationJsonParticipants = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipants200ApplicationJsonParticipants, _super);
    function DashboardMeetingParticipants200ApplicationJsonParticipants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_quality" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "audioQuality", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=camera" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "camera", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connection_type" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "connectionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customer_key" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "customerKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_center" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "dataCenter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "device", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "domain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=harddisk_id" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "harddiskId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=in_room_participants" }),
        __metadata("design:type", Number)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "inRoomParticipants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_address" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "ipAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_time" }),
        __metadata("design:type", Date)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "joinTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=leave_reason" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "leaveReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=leave_time" }),
        __metadata("design:type", Date)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "leaveTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mac_addr" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "macAddr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=microphone" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "microphone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network_type" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "networkType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pc_name" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "pcName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording" }),
        __metadata("design:type", Boolean)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "recording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrant_id" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "registrantId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=screen_share_quality" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "screenShareQuality", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=share_application" }),
        __metadata("design:type", Boolean)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "shareApplication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=share_desktop" }),
        __metadata("design:type", Boolean)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "shareDesktop", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=share_whiteboard" }),
        __metadata("design:type", Boolean)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "shareWhiteboard", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=speaker" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "speaker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_id" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "userId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_name" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "userName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "version", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video_quality" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipants200ApplicationJsonParticipants.prototype, "videoQuality", void 0);
    return DashboardMeetingParticipants200ApplicationJsonParticipants;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipants200ApplicationJsonParticipants = DashboardMeetingParticipants200ApplicationJsonParticipants;
// DashboardMeetingParticipants200ApplicationJson
/**
 * Pagination object.
**/
var DashboardMeetingParticipants200ApplicationJson = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipants200ApplicationJson, _super);
    function DashboardMeetingParticipants200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], DashboardMeetingParticipants200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], DashboardMeetingParticipants200ApplicationJson.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], DashboardMeetingParticipants200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants", elemType: DashboardMeetingParticipants200ApplicationJsonParticipants }),
        __metadata("design:type", Array)
    ], DashboardMeetingParticipants200ApplicationJson.prototype, "participants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], DashboardMeetingParticipants200ApplicationJson.prototype, "totalRecords", void 0);
    return DashboardMeetingParticipants200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipants200ApplicationJson = DashboardMeetingParticipants200ApplicationJson;
var DashboardMeetingParticipantsRequest = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantsRequest, _super);
    function DashboardMeetingParticipantsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardMeetingParticipantsPathParams)
    ], DashboardMeetingParticipantsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardMeetingParticipantsQueryParams)
    ], DashboardMeetingParticipantsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardMeetingParticipantsSecurity)
    ], DashboardMeetingParticipantsRequest.prototype, "security", void 0);
    return DashboardMeetingParticipantsRequest;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantsRequest = DashboardMeetingParticipantsRequest;
var DashboardMeetingParticipantsResponse = /** @class */ (function (_super) {
    __extends(DashboardMeetingParticipantsResponse, _super);
    function DashboardMeetingParticipantsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DashboardMeetingParticipantsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DashboardMeetingParticipantsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DashboardMeetingParticipantsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardMeetingParticipants200ApplicationJson)
    ], DashboardMeetingParticipantsResponse.prototype, "dashboardMeetingParticipants200ApplicationJSONObject", void 0);
    return DashboardMeetingParticipantsResponse;
}(utils_1.SpeakeasyBase));
exports.DashboardMeetingParticipantsResponse = DashboardMeetingParticipantsResponse;
