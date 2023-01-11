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
exports.RecordingGetResponse = exports.RecordingGetRequest = exports.RecordingGetRecordingFileList = exports.RecordingGetRecordingFileListRecordingFiles = exports.RecordingGetRecordingFileListRecordingFilesStatusEnum = exports.RecordingGetSecurity = exports.RecordingGetQueryParams = exports.RecordingGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RecordingGetPathParams = /** @class */ (function (_super) {
    __extends(RecordingGetPathParams, _super);
    function RecordingGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", String)
    ], RecordingGetPathParams.prototype, "meetingId", void 0);
    return RecordingGetPathParams;
}(utils_1.SpeakeasyBase));
exports.RecordingGetPathParams = RecordingGetPathParams;
var RecordingGetQueryParams = /** @class */ (function (_super) {
    __extends(RecordingGetQueryParams, _super);
    function RecordingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_fields" }),
        __metadata("design:type", String)
    ], RecordingGetQueryParams.prototype, "includeFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ttl" }),
        __metadata("design:type", Number)
    ], RecordingGetQueryParams.prototype, "ttl", void 0);
    return RecordingGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.RecordingGetQueryParams = RecordingGetQueryParams;
var RecordingGetSecurity = /** @class */ (function (_super) {
    __extends(RecordingGetSecurity, _super);
    function RecordingGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], RecordingGetSecurity.prototype, "oAuth", void 0);
    return RecordingGetSecurity;
}(utils_1.SpeakeasyBase));
exports.RecordingGetSecurity = RecordingGetSecurity;
var RecordingGetRecordingFileListRecordingFilesStatusEnum;
(function (RecordingGetRecordingFileListRecordingFilesStatusEnum) {
    RecordingGetRecordingFileListRecordingFilesStatusEnum["Completed"] = "completed";
})(RecordingGetRecordingFileListRecordingFilesStatusEnum = exports.RecordingGetRecordingFileListRecordingFilesStatusEnum || (exports.RecordingGetRecordingFileListRecordingFilesStatusEnum = {}));
// RecordingGetRecordingFileListRecordingFiles
/**
 * Recording file object.
**/
var RecordingGetRecordingFileListRecordingFiles = /** @class */ (function (_super) {
    __extends(RecordingGetRecordingFileListRecordingFiles, _super);
    function RecordingGetRecordingFileListRecordingFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleted_time" }),
        __metadata("design:type", String)
    ], RecordingGetRecordingFileListRecordingFiles.prototype, "deletedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download_url" }),
        __metadata("design:type", String)
    ], RecordingGetRecordingFileListRecordingFiles.prototype, "downloadUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_size" }),
        __metadata("design:type", Number)
    ], RecordingGetRecordingFileListRecordingFiles.prototype, "fileSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_type" }),
        __metadata("design:type", String)
    ], RecordingGetRecordingFileListRecordingFiles.prototype, "fileType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RecordingGetRecordingFileListRecordingFiles.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_id" }),
        __metadata("design:type", String)
    ], RecordingGetRecordingFileListRecordingFiles.prototype, "meetingId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=play_url" }),
        __metadata("design:type", String)
    ], RecordingGetRecordingFileListRecordingFiles.prototype, "playUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_end" }),
        __metadata("design:type", String)
    ], RecordingGetRecordingFileListRecordingFiles.prototype, "recordingEnd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_start" }),
        __metadata("design:type", String)
    ], RecordingGetRecordingFileListRecordingFiles.prototype, "recordingStart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_type" }),
        __metadata("design:type", String)
    ], RecordingGetRecordingFileListRecordingFiles.prototype, "recordingType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], RecordingGetRecordingFileListRecordingFiles.prototype, "status", void 0);
    return RecordingGetRecordingFileListRecordingFiles;
}(utils_1.SpeakeasyBase));
exports.RecordingGetRecordingFileListRecordingFiles = RecordingGetRecordingFileListRecordingFiles;
// RecordingGetRecordingFileList
/**
 * List of recording file.
**/
var RecordingGetRecordingFileList = /** @class */ (function (_super) {
    __extends(RecordingGetRecordingFileList, _super);
    function RecordingGetRecordingFileList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], RecordingGetRecordingFileList.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download_access_token" }),
        __metadata("design:type", String)
    ], RecordingGetRecordingFileList.prototype, "downloadAccessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], RecordingGetRecordingFileList.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_id" }),
        __metadata("design:type", String)
    ], RecordingGetRecordingFileList.prototype, "hostId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RecordingGetRecordingFileList.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_count" }),
        __metadata("design:type", String)
    ], RecordingGetRecordingFileList.prototype, "recordingCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_files", elemType: RecordingGetRecordingFileListRecordingFiles }),
        __metadata("design:type", Array)
    ], RecordingGetRecordingFileList.prototype, "recordingFiles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], RecordingGetRecordingFileList.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], RecordingGetRecordingFileList.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_size" }),
        __metadata("design:type", String)
    ], RecordingGetRecordingFileList.prototype, "totalSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RecordingGetRecordingFileList.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], RecordingGetRecordingFileList.prototype, "uuid", void 0);
    return RecordingGetRecordingFileList;
}(utils_1.SpeakeasyBase));
exports.RecordingGetRecordingFileList = RecordingGetRecordingFileList;
var RecordingGetRequest = /** @class */ (function (_super) {
    __extends(RecordingGetRequest, _super);
    function RecordingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecordingGetPathParams)
    ], RecordingGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecordingGetQueryParams)
    ], RecordingGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecordingGetSecurity)
    ], RecordingGetRequest.prototype, "security", void 0);
    return RecordingGetRequest;
}(utils_1.SpeakeasyBase));
exports.RecordingGetRequest = RecordingGetRequest;
var RecordingGetResponse = /** @class */ (function (_super) {
    __extends(RecordingGetResponse, _super);
    function RecordingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], RecordingGetResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RecordingGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecordingGetRecordingFileList)
    ], RecordingGetResponse.prototype, "recordingFileList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RecordingGetResponse.prototype, "statusCode", void 0);
    return RecordingGetResponse;
}(utils_1.SpeakeasyBase));
exports.RecordingGetResponse = RecordingGetResponse;
