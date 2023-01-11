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
exports.DashboardWebinarParticipantsResponse = exports.DashboardWebinarParticipantsRequest = exports.DashboardWebinarParticipants200ApplicationJson = exports.DashboardWebinarParticipants200ApplicationJsonParticipants = exports.DashboardWebinarParticipants200ApplicationJsonParticipantsVideoQualityEnum = exports.DashboardWebinarParticipants200ApplicationJsonParticipantsScreenShareQualityEnum = exports.DashboardWebinarParticipants200ApplicationJsonParticipantsAudioQualityEnum = exports.DashboardWebinarParticipantsSecurity = exports.DashboardWebinarParticipantsQueryParams = exports.DashboardWebinarParticipantsTypeEnum = exports.DashboardWebinarParticipantsIncludeFieldsEnum = exports.DashboardWebinarParticipantsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DashboardWebinarParticipantsPathParams = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantsPathParams, _super);
    function DashboardWebinarParticipantsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsPathParams.prototype, "webinarId", void 0);
    return DashboardWebinarParticipantsPathParams;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantsPathParams = DashboardWebinarParticipantsPathParams;
var DashboardWebinarParticipantsIncludeFieldsEnum;
(function (DashboardWebinarParticipantsIncludeFieldsEnum) {
    DashboardWebinarParticipantsIncludeFieldsEnum["RegistrantId"] = "registrant_id";
})(DashboardWebinarParticipantsIncludeFieldsEnum = exports.DashboardWebinarParticipantsIncludeFieldsEnum || (exports.DashboardWebinarParticipantsIncludeFieldsEnum = {}));
var DashboardWebinarParticipantsTypeEnum;
(function (DashboardWebinarParticipantsTypeEnum) {
    DashboardWebinarParticipantsTypeEnum["Past"] = "past";
    DashboardWebinarParticipantsTypeEnum["Live"] = "live";
})(DashboardWebinarParticipantsTypeEnum = exports.DashboardWebinarParticipantsTypeEnum || (exports.DashboardWebinarParticipantsTypeEnum = {}));
var DashboardWebinarParticipantsQueryParams = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantsQueryParams, _super);
    function DashboardWebinarParticipantsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_fields" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQueryParams.prototype, "includeFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], DashboardWebinarParticipantsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsQueryParams.prototype, "type", void 0);
    return DashboardWebinarParticipantsQueryParams;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantsQueryParams = DashboardWebinarParticipantsQueryParams;
var DashboardWebinarParticipantsSecurity = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantsSecurity, _super);
    function DashboardWebinarParticipantsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], DashboardWebinarParticipantsSecurity.prototype, "oAuth", void 0);
    return DashboardWebinarParticipantsSecurity;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantsSecurity = DashboardWebinarParticipantsSecurity;
var DashboardWebinarParticipants200ApplicationJsonParticipantsAudioQualityEnum;
(function (DashboardWebinarParticipants200ApplicationJsonParticipantsAudioQualityEnum) {
    DashboardWebinarParticipants200ApplicationJsonParticipantsAudioQualityEnum["Unknown"] = " ";
    DashboardWebinarParticipants200ApplicationJsonParticipantsAudioQualityEnum["Good"] = "good";
    DashboardWebinarParticipants200ApplicationJsonParticipantsAudioQualityEnum["Fair"] = "fair";
    DashboardWebinarParticipants200ApplicationJsonParticipantsAudioQualityEnum["Poor"] = "poor";
    DashboardWebinarParticipants200ApplicationJsonParticipantsAudioQualityEnum["Bad"] = "bad";
})(DashboardWebinarParticipants200ApplicationJsonParticipantsAudioQualityEnum = exports.DashboardWebinarParticipants200ApplicationJsonParticipantsAudioQualityEnum || (exports.DashboardWebinarParticipants200ApplicationJsonParticipantsAudioQualityEnum = {}));
var DashboardWebinarParticipants200ApplicationJsonParticipantsScreenShareQualityEnum;
(function (DashboardWebinarParticipants200ApplicationJsonParticipantsScreenShareQualityEnum) {
    DashboardWebinarParticipants200ApplicationJsonParticipantsScreenShareQualityEnum["Unknown"] = " ";
    DashboardWebinarParticipants200ApplicationJsonParticipantsScreenShareQualityEnum["Good"] = "good";
    DashboardWebinarParticipants200ApplicationJsonParticipantsScreenShareQualityEnum["Fair"] = "fair";
    DashboardWebinarParticipants200ApplicationJsonParticipantsScreenShareQualityEnum["Poor"] = "poor";
    DashboardWebinarParticipants200ApplicationJsonParticipantsScreenShareQualityEnum["Bad"] = "bad";
})(DashboardWebinarParticipants200ApplicationJsonParticipantsScreenShareQualityEnum = exports.DashboardWebinarParticipants200ApplicationJsonParticipantsScreenShareQualityEnum || (exports.DashboardWebinarParticipants200ApplicationJsonParticipantsScreenShareQualityEnum = {}));
var DashboardWebinarParticipants200ApplicationJsonParticipantsVideoQualityEnum;
(function (DashboardWebinarParticipants200ApplicationJsonParticipantsVideoQualityEnum) {
    DashboardWebinarParticipants200ApplicationJsonParticipantsVideoQualityEnum["Unknown"] = " ";
    DashboardWebinarParticipants200ApplicationJsonParticipantsVideoQualityEnum["Good"] = "good";
    DashboardWebinarParticipants200ApplicationJsonParticipantsVideoQualityEnum["Fair"] = "fair";
    DashboardWebinarParticipants200ApplicationJsonParticipantsVideoQualityEnum["Poor"] = "poor";
    DashboardWebinarParticipants200ApplicationJsonParticipantsVideoQualityEnum["Bad"] = "bad";
})(DashboardWebinarParticipants200ApplicationJsonParticipantsVideoQualityEnum = exports.DashboardWebinarParticipants200ApplicationJsonParticipantsVideoQualityEnum || (exports.DashboardWebinarParticipants200ApplicationJsonParticipantsVideoQualityEnum = {}));
var DashboardWebinarParticipants200ApplicationJsonParticipants = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipants200ApplicationJsonParticipants, _super);
    function DashboardWebinarParticipants200ApplicationJsonParticipants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio_quality" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "audioQuality", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connection_type" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "connectionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customer_key" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "customerKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_center" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "dataCenter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "device", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "domain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=harddisk_id" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "harddiskId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_address" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "ipAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_time" }),
        __metadata("design:type", Date)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "joinTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=leave_reason" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "leaveReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=leave_time" }),
        __metadata("design:type", Date)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "leaveTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mac_addr" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "macAddr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=microphone" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "microphone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network_type" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "networkType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pc_name" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "pcName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording" }),
        __metadata("design:type", Boolean)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "recording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrant_id" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "registrantId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=screen_share_quality" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "screenShareQuality", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=share_application" }),
        __metadata("design:type", Boolean)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "shareApplication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=share_desktop" }),
        __metadata("design:type", Boolean)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "shareDesktop", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=share_whiteboard" }),
        __metadata("design:type", Boolean)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "shareWhiteboard", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=speaker" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "speaker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_id" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "userId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_name" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "userName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "version", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=video_quality" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipants200ApplicationJsonParticipants.prototype, "videoQuality", void 0);
    return DashboardWebinarParticipants200ApplicationJsonParticipants;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipants200ApplicationJsonParticipants = DashboardWebinarParticipants200ApplicationJsonParticipants;
// DashboardWebinarParticipants200ApplicationJson
/**
 * Pagination object.
**/
var DashboardWebinarParticipants200ApplicationJson = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipants200ApplicationJson, _super);
    function DashboardWebinarParticipants200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipants200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], DashboardWebinarParticipants200ApplicationJson.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], DashboardWebinarParticipants200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants", elemType: DashboardWebinarParticipants200ApplicationJsonParticipants }),
        __metadata("design:type", Array)
    ], DashboardWebinarParticipants200ApplicationJson.prototype, "participants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], DashboardWebinarParticipants200ApplicationJson.prototype, "totalRecords", void 0);
    return DashboardWebinarParticipants200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipants200ApplicationJson = DashboardWebinarParticipants200ApplicationJson;
var DashboardWebinarParticipantsRequest = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantsRequest, _super);
    function DashboardWebinarParticipantsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardWebinarParticipantsPathParams)
    ], DashboardWebinarParticipantsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardWebinarParticipantsQueryParams)
    ], DashboardWebinarParticipantsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardWebinarParticipantsSecurity)
    ], DashboardWebinarParticipantsRequest.prototype, "security", void 0);
    return DashboardWebinarParticipantsRequest;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantsRequest = DashboardWebinarParticipantsRequest;
var DashboardWebinarParticipantsResponse = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantsResponse, _super);
    function DashboardWebinarParticipantsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DashboardWebinarParticipantsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DashboardWebinarParticipantsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardWebinarParticipants200ApplicationJson)
    ], DashboardWebinarParticipantsResponse.prototype, "dashboardWebinarParticipants200ApplicationJSONObject", void 0);
    return DashboardWebinarParticipantsResponse;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantsResponse = DashboardWebinarParticipantsResponse;
