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
exports.GetAccountCloudRecordingResponse = exports.GetAccountCloudRecordingRequest = exports.GetAccountCloudRecording200ApplicationJson = exports.GetAccountCloudRecording200ApplicationJsonMeetings = exports.GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles = exports.GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesStatusEnum = exports.GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum = exports.GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesFileTypeEnum = exports.GetAccountCloudRecordingSecurity = exports.GetAccountCloudRecordingQueryParams = exports.GetAccountCloudRecordingPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetAccountCloudRecordingPathParams = /** @class */ (function (_super) {
    __extends(GetAccountCloudRecordingPathParams, _super);
    function GetAccountCloudRecordingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], GetAccountCloudRecordingPathParams.prototype, "accountId", void 0);
    return GetAccountCloudRecordingPathParams;
}(utils_1.SpeakeasyBase));
exports.GetAccountCloudRecordingPathParams = GetAccountCloudRecordingPathParams;
var GetAccountCloudRecordingQueryParams = /** @class */ (function (_super) {
    __extends(GetAccountCloudRecordingQueryParams, _super);
    function GetAccountCloudRecordingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Date)
    ], GetAccountCloudRecordingQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], GetAccountCloudRecordingQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetAccountCloudRecordingQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", Date)
    ], GetAccountCloudRecordingQueryParams.prototype, "to", void 0);
    return GetAccountCloudRecordingQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetAccountCloudRecordingQueryParams = GetAccountCloudRecordingQueryParams;
var GetAccountCloudRecordingSecurity = /** @class */ (function (_super) {
    __extends(GetAccountCloudRecordingSecurity, _super);
    function GetAccountCloudRecordingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], GetAccountCloudRecordingSecurity.prototype, "oAuth", void 0);
    return GetAccountCloudRecordingSecurity;
}(utils_1.SpeakeasyBase));
exports.GetAccountCloudRecordingSecurity = GetAccountCloudRecordingSecurity;
var GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesFileTypeEnum;
(function (GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesFileTypeEnum) {
    GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesFileTypeEnum["Mp4"] = "MP4";
    GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesFileTypeEnum["M4A"] = "M4A";
    GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesFileTypeEnum["Chat"] = "CHAT";
    GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesFileTypeEnum["Transcript"] = "TRANSCRIPT";
    GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesFileTypeEnum["Cc"] = "CC";
    GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesFileTypeEnum["Csv"] = "CSV";
    GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesFileTypeEnum["Tb"] = "TB";
})(GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesFileTypeEnum = exports.GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesFileTypeEnum || (exports.GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesFileTypeEnum = {}));
var GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum;
(function (GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum) {
    GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum["SharedScreenWithSpeakerViewCc"] = "shared_screen_with_speaker_view(CC)";
    GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum["SharedScreenWithSpeakerView"] = "shared_screen_with_speaker_view";
    GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum["SharedScreenWithGalleryView"] = "shared_screen_with_gallery_view";
    GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum["ActiveSpeaker"] = "active_speaker";
    GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum["GalleryView"] = "gallery_view";
    GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum["SharedScreen"] = "shared_screen";
    GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum["AudioOnly"] = "audio_only";
    GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum["AudioTranscript"] = "audio_transcript";
    GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum["ChatFile"] = "chat_file";
    GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum["Poll"] = "poll";
    GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum["HostVideo"] = "host_video";
    GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum["ClosedCaption"] = "closed_caption";
    GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum["Timeline"] = "timeline";
    GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum["Thumbnail"] = "thumbnail";
})(GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum = exports.GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum || (exports.GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum = {}));
var GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesStatusEnum;
(function (GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesStatusEnum) {
    GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesStatusEnum["Completed"] = "completed";
    GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesStatusEnum["Processing"] = "processing";
})(GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesStatusEnum = exports.GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesStatusEnum || (exports.GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesStatusEnum = {}));
var GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles = /** @class */ (function (_super) {
    __extends(GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles, _super);
    function GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download_url" }),
        __metadata("design:type", String)
    ], GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles.prototype, "downloadUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_size" }),
        __metadata("design:type", Number)
    ], GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles.prototype, "fileSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_type" }),
        __metadata("design:type", String)
    ], GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles.prototype, "fileType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_id" }),
        __metadata("design:type", String)
    ], GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles.prototype, "meetingId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=play_url" }),
        __metadata("design:type", String)
    ], GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles.prototype, "playUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_end" }),
        __metadata("design:type", String)
    ], GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles.prototype, "recordingEnd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_start" }),
        __metadata("design:type", String)
    ], GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles.prototype, "recordingStart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_type" }),
        __metadata("design:type", String)
    ], GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles.prototype, "recordingType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles.prototype, "status", void 0);
    return GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles;
}(utils_1.SpeakeasyBase));
exports.GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles = GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles;
var GetAccountCloudRecording200ApplicationJsonMeetings = /** @class */ (function (_super) {
    __extends(GetAccountCloudRecording200ApplicationJsonMeetings, _super);
    function GetAccountCloudRecording200ApplicationJsonMeetings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], GetAccountCloudRecording200ApplicationJsonMeetings.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_id" }),
        __metadata("design:type", String)
    ], GetAccountCloudRecording200ApplicationJsonMeetings.prototype, "hostId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetAccountCloudRecording200ApplicationJsonMeetings.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_count" }),
        __metadata("design:type", Number)
    ], GetAccountCloudRecording200ApplicationJsonMeetings.prototype, "recordingCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_files", elemType: GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles }),
        __metadata("design:type", Array)
    ], GetAccountCloudRecording200ApplicationJsonMeetings.prototype, "recordingFiles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], GetAccountCloudRecording200ApplicationJsonMeetings.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], GetAccountCloudRecording200ApplicationJsonMeetings.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_size" }),
        __metadata("design:type", Number)
    ], GetAccountCloudRecording200ApplicationJsonMeetings.prototype, "totalSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], GetAccountCloudRecording200ApplicationJsonMeetings.prototype, "uuid", void 0);
    return GetAccountCloudRecording200ApplicationJsonMeetings;
}(utils_1.SpeakeasyBase));
exports.GetAccountCloudRecording200ApplicationJsonMeetings = GetAccountCloudRecording200ApplicationJsonMeetings;
var GetAccountCloudRecording200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAccountCloudRecording200ApplicationJson, _super);
    function GetAccountCloudRecording200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", Date)
    ], GetAccountCloudRecording200ApplicationJson.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meetings", elemType: GetAccountCloudRecording200ApplicationJsonMeetings }),
        __metadata("design:type", Array)
    ], GetAccountCloudRecording200ApplicationJson.prototype, "meetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], GetAccountCloudRecording200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], GetAccountCloudRecording200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", Date)
    ], GetAccountCloudRecording200ApplicationJson.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], GetAccountCloudRecording200ApplicationJson.prototype, "totalRecords", void 0);
    return GetAccountCloudRecording200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetAccountCloudRecording200ApplicationJson = GetAccountCloudRecording200ApplicationJson;
var GetAccountCloudRecordingRequest = /** @class */ (function (_super) {
    __extends(GetAccountCloudRecordingRequest, _super);
    function GetAccountCloudRecordingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAccountCloudRecordingPathParams)
    ], GetAccountCloudRecordingRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAccountCloudRecordingQueryParams)
    ], GetAccountCloudRecordingRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAccountCloudRecordingSecurity)
    ], GetAccountCloudRecordingRequest.prototype, "security", void 0);
    return GetAccountCloudRecordingRequest;
}(utils_1.SpeakeasyBase));
exports.GetAccountCloudRecordingRequest = GetAccountCloudRecordingRequest;
var GetAccountCloudRecordingResponse = /** @class */ (function (_super) {
    __extends(GetAccountCloudRecordingResponse, _super);
    function GetAccountCloudRecordingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetAccountCloudRecordingResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAccountCloudRecordingResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAccountCloudRecordingResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAccountCloudRecording200ApplicationJson)
    ], GetAccountCloudRecordingResponse.prototype, "getAccountCloudRecording200ApplicationJSONObject", void 0);
    return GetAccountCloudRecordingResponse;
}(utils_1.SpeakeasyBase));
exports.GetAccountCloudRecordingResponse = GetAccountCloudRecordingResponse;
