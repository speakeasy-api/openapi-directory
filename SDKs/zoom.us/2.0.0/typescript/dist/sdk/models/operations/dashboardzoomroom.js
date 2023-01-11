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
exports.DashboardZoomRoomResponse = exports.DashboardZoomRoomRequest = exports.DashboardZoomRoomZoomRoom = exports.DashboardZoomRoomZoomRoomPastMeetings = exports.DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics = exports.DashboardZoomRoomZoomRoomPastMeetingsMeetingMetricsCustomKeys = exports.DashboardZoomRoomZoomRoomMeetingMetrics = exports.DashboardZoomRoomZoomRoomMeetingMetricsCustomKeys = exports.DashboardZoomRoomSecurity = exports.DashboardZoomRoomQueryParams = exports.DashboardZoomRoomPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DashboardZoomRoomPathParams = /** @class */ (function (_super) {
    __extends(DashboardZoomRoomPathParams, _super);
    function DashboardZoomRoomPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=zoomroomId" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomPathParams.prototype, "zoomroomId", void 0);
    return DashboardZoomRoomPathParams;
}(utils_1.SpeakeasyBase));
exports.DashboardZoomRoomPathParams = DashboardZoomRoomPathParams;
var DashboardZoomRoomQueryParams = /** @class */ (function (_super) {
    __extends(DashboardZoomRoomQueryParams, _super);
    function DashboardZoomRoomQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Date)
    ], DashboardZoomRoomQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], DashboardZoomRoomQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", Date)
    ], DashboardZoomRoomQueryParams.prototype, "to", void 0);
    return DashboardZoomRoomQueryParams;
}(utils_1.SpeakeasyBase));
exports.DashboardZoomRoomQueryParams = DashboardZoomRoomQueryParams;
var DashboardZoomRoomSecurity = /** @class */ (function (_super) {
    __extends(DashboardZoomRoomSecurity, _super);
    function DashboardZoomRoomSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], DashboardZoomRoomSecurity.prototype, "oAuth", void 0);
    return DashboardZoomRoomSecurity;
}(utils_1.SpeakeasyBase));
exports.DashboardZoomRoomSecurity = DashboardZoomRoomSecurity;
var DashboardZoomRoomZoomRoomMeetingMetricsCustomKeys = /** @class */ (function (_super) {
    __extends(DashboardZoomRoomZoomRoomMeetingMetricsCustomKeys, _super);
    function DashboardZoomRoomZoomRoomMeetingMetricsCustomKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoomMeetingMetricsCustomKeys.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoomMeetingMetricsCustomKeys.prototype, "value", void 0);
    return DashboardZoomRoomZoomRoomMeetingMetricsCustomKeys;
}(utils_1.SpeakeasyBase));
exports.DashboardZoomRoomZoomRoomMeetingMetricsCustomKeys = DashboardZoomRoomZoomRoomMeetingMetricsCustomKeys;
// DashboardZoomRoomZoomRoomMeetingMetrics
/**
 * Meeting metric details.
**/
var DashboardZoomRoomZoomRoomMeetingMetrics = /** @class */ (function (_super) {
    __extends(DashboardZoomRoomZoomRoomMeetingMetrics, _super);
    function DashboardZoomRoomZoomRoomMeetingMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_keys", elemType: DashboardZoomRoomZoomRoomMeetingMetricsCustomKeys }),
        __metadata("design:type", Array)
    ], DashboardZoomRoomZoomRoomMeetingMetrics.prototype, "customKeys", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dept" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoomMeetingMetrics.prototype, "dept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoomMeetingMetrics.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoomMeetingMetrics.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_time" }),
        __metadata("design:type", Date)
    ], DashboardZoomRoomZoomRoomMeetingMetrics.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_3rd_party_audio" }),
        __metadata("design:type", Boolean)
    ], DashboardZoomRoomZoomRoomMeetingMetrics.prototype, "has3rdPartyAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_pstn" }),
        __metadata("design:type", Boolean)
    ], DashboardZoomRoomZoomRoomMeetingMetrics.prototype, "hasPstn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_recording" }),
        __metadata("design:type", Boolean)
    ], DashboardZoomRoomZoomRoomMeetingMetrics.prototype, "hasRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_screen_share" }),
        __metadata("design:type", Boolean)
    ], DashboardZoomRoomZoomRoomMeetingMetrics.prototype, "hasScreenShare", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_sip" }),
        __metadata("design:type", Boolean)
    ], DashboardZoomRoomZoomRoomMeetingMetrics.prototype, "hasSip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_video" }),
        __metadata("design:type", Boolean)
    ], DashboardZoomRoomZoomRoomMeetingMetrics.prototype, "hasVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_voip" }),
        __metadata("design:type", Boolean)
    ], DashboardZoomRoomZoomRoomMeetingMetrics.prototype, "hasVoip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoomMeetingMetrics.prototype, "host", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DashboardZoomRoomZoomRoomMeetingMetrics.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=in_room_participants" }),
        __metadata("design:type", Number)
    ], DashboardZoomRoomZoomRoomMeetingMetrics.prototype, "inRoomParticipants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants" }),
        __metadata("design:type", Number)
    ], DashboardZoomRoomZoomRoomMeetingMetrics.prototype, "participants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], DashboardZoomRoomZoomRoomMeetingMetrics.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoomMeetingMetrics.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_type" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoomMeetingMetrics.prototype, "userType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoomMeetingMetrics.prototype, "uuid", void 0);
    return DashboardZoomRoomZoomRoomMeetingMetrics;
}(utils_1.SpeakeasyBase));
exports.DashboardZoomRoomZoomRoomMeetingMetrics = DashboardZoomRoomZoomRoomMeetingMetrics;
var DashboardZoomRoomZoomRoomPastMeetingsMeetingMetricsCustomKeys = /** @class */ (function (_super) {
    __extends(DashboardZoomRoomZoomRoomPastMeetingsMeetingMetricsCustomKeys, _super);
    function DashboardZoomRoomZoomRoomPastMeetingsMeetingMetricsCustomKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoomPastMeetingsMeetingMetricsCustomKeys.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoomPastMeetingsMeetingMetricsCustomKeys.prototype, "value", void 0);
    return DashboardZoomRoomZoomRoomPastMeetingsMeetingMetricsCustomKeys;
}(utils_1.SpeakeasyBase));
exports.DashboardZoomRoomZoomRoomPastMeetingsMeetingMetricsCustomKeys = DashboardZoomRoomZoomRoomPastMeetingsMeetingMetricsCustomKeys;
// DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics
/**
 * Meeting metric details.
**/
var DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics = /** @class */ (function (_super) {
    __extends(DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics, _super);
    function DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_keys", elemType: DashboardZoomRoomZoomRoomPastMeetingsMeetingMetricsCustomKeys }),
        __metadata("design:type", Array)
    ], DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics.prototype, "customKeys", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dept" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics.prototype, "dept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_time" }),
        __metadata("design:type", Date)
    ], DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_3rd_party_audio" }),
        __metadata("design:type", Boolean)
    ], DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics.prototype, "has3rdPartyAudio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_pstn" }),
        __metadata("design:type", Boolean)
    ], DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics.prototype, "hasPstn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_recording" }),
        __metadata("design:type", Boolean)
    ], DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics.prototype, "hasRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_screen_share" }),
        __metadata("design:type", Boolean)
    ], DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics.prototype, "hasScreenShare", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_sip" }),
        __metadata("design:type", Boolean)
    ], DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics.prototype, "hasSip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_video" }),
        __metadata("design:type", Boolean)
    ], DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics.prototype, "hasVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_voip" }),
        __metadata("design:type", Boolean)
    ], DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics.prototype, "hasVoip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics.prototype, "host", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=in_room_participants" }),
        __metadata("design:type", Number)
    ], DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics.prototype, "inRoomParticipants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants" }),
        __metadata("design:type", Number)
    ], DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics.prototype, "participants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_type" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics.prototype, "userType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics.prototype, "uuid", void 0);
    return DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics;
}(utils_1.SpeakeasyBase));
exports.DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics = DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics;
// DashboardZoomRoomZoomRoomPastMeetings
/**
 * Pagination object.
**/
var DashboardZoomRoomZoomRoomPastMeetings = /** @class */ (function (_super) {
    __extends(DashboardZoomRoomZoomRoomPastMeetings, _super);
    function DashboardZoomRoomZoomRoomPastMeetings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", Date)
    ], DashboardZoomRoomZoomRoomPastMeetings.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meetings", elemType: DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics }),
        __metadata("design:type", Array)
    ], DashboardZoomRoomZoomRoomPastMeetings.prototype, "meetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoomPastMeetings.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], DashboardZoomRoomZoomRoomPastMeetings.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], DashboardZoomRoomZoomRoomPastMeetings.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", Date)
    ], DashboardZoomRoomZoomRoomPastMeetings.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], DashboardZoomRoomZoomRoomPastMeetings.prototype, "totalRecords", void 0);
    return DashboardZoomRoomZoomRoomPastMeetings;
}(utils_1.SpeakeasyBase));
exports.DashboardZoomRoomZoomRoomPastMeetings = DashboardZoomRoomZoomRoomPastMeetings;
// DashboardZoomRoomZoomRoom
/**
 * Zoom room.
**/
var DashboardZoomRoomZoomRoom = /** @class */ (function (_super) {
    __extends(DashboardZoomRoomZoomRoom, _super);
    function DashboardZoomRoomZoomRoom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_type" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoom.prototype, "accountType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calender_name" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoom.prototype, "calenderName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=camera" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoom.prototype, "camera", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device_ip" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoom.prototype, "deviceIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoom.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=health" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoom.prototype, "health", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoom.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issues" }),
        __metadata("design:type", Array)
    ], DashboardZoomRoomZoomRoom.prototype, "issues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_start_time" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoom.prototype, "lastStartTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=live_meeting" }),
        __metadata("design:type", DashboardZoomRoomZoomRoomMeetingMetrics)
    ], DashboardZoomRoomZoomRoom.prototype, "liveMeeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoom.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=microphone" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoom.prototype, "microphone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=past_meetings" }),
        __metadata("design:type", DashboardZoomRoomZoomRoomPastMeetings)
    ], DashboardZoomRoomZoomRoom.prototype, "pastMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=room_name" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoom.prototype, "roomName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=speaker" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoom.prototype, "speaker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomZoomRoom.prototype, "status", void 0);
    return DashboardZoomRoomZoomRoom;
}(utils_1.SpeakeasyBase));
exports.DashboardZoomRoomZoomRoom = DashboardZoomRoomZoomRoom;
var DashboardZoomRoomRequest = /** @class */ (function (_super) {
    __extends(DashboardZoomRoomRequest, _super);
    function DashboardZoomRoomRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardZoomRoomPathParams)
    ], DashboardZoomRoomRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardZoomRoomQueryParams)
    ], DashboardZoomRoomRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardZoomRoomSecurity)
    ], DashboardZoomRoomRequest.prototype, "security", void 0);
    return DashboardZoomRoomRequest;
}(utils_1.SpeakeasyBase));
exports.DashboardZoomRoomRequest = DashboardZoomRoomRequest;
var DashboardZoomRoomResponse = /** @class */ (function (_super) {
    __extends(DashboardZoomRoomResponse, _super);
    function DashboardZoomRoomResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DashboardZoomRoomResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DashboardZoomRoomResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DashboardZoomRoomResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardZoomRoomZoomRoom)
    ], DashboardZoomRoomResponse.prototype, "zoomRoom", void 0);
    return DashboardZoomRoomResponse;
}(utils_1.SpeakeasyBase));
exports.DashboardZoomRoomResponse = DashboardZoomRoomResponse;
