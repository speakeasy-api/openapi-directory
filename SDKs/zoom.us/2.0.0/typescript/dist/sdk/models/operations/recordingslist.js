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
exports.RecordingsListResponse = exports.RecordingsListRequest = exports.RecordingsListRecordingList = exports.RecordingsListRecordingListRecordingFileList = exports.RecordingsListRecordingListRecordingFileListRecordingFiles = exports.RecordingsListRecordingListRecordingFileListRecordingFilesStatusEnum = exports.RecordingsListSecurity = exports.RecordingsListQueryParams = exports.RecordingsListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RecordingsListPathParams = /** @class */ (function (_super) {
    __extends(RecordingsListPathParams, _super);
    function RecordingsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], RecordingsListPathParams.prototype, "userId", void 0);
    return RecordingsListPathParams;
}(utils_1.SpeakeasyBase));
exports.RecordingsListPathParams = RecordingsListPathParams;
var RecordingsListQueryParams = /** @class */ (function (_super) {
    __extends(RecordingsListQueryParams, _super);
    function RecordingsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Date)
    ], RecordingsListQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=mc" }),
        __metadata("design:type", String)
    ], RecordingsListQueryParams.prototype, "mc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], RecordingsListQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], RecordingsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", Date)
    ], RecordingsListQueryParams.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=trash" }),
        __metadata("design:type", Boolean)
    ], RecordingsListQueryParams.prototype, "trash", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=trash_type" }),
        __metadata("design:type", String)
    ], RecordingsListQueryParams.prototype, "trashType", void 0);
    return RecordingsListQueryParams;
}(utils_1.SpeakeasyBase));
exports.RecordingsListQueryParams = RecordingsListQueryParams;
var RecordingsListSecurity = /** @class */ (function (_super) {
    __extends(RecordingsListSecurity, _super);
    function RecordingsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], RecordingsListSecurity.prototype, "oAuth", void 0);
    return RecordingsListSecurity;
}(utils_1.SpeakeasyBase));
exports.RecordingsListSecurity = RecordingsListSecurity;
var RecordingsListRecordingListRecordingFileListRecordingFilesStatusEnum;
(function (RecordingsListRecordingListRecordingFileListRecordingFilesStatusEnum) {
    RecordingsListRecordingListRecordingFileListRecordingFilesStatusEnum["Completed"] = "completed";
})(RecordingsListRecordingListRecordingFileListRecordingFilesStatusEnum = exports.RecordingsListRecordingListRecordingFileListRecordingFilesStatusEnum || (exports.RecordingsListRecordingListRecordingFileListRecordingFilesStatusEnum = {}));
// RecordingsListRecordingListRecordingFileListRecordingFiles
/**
 * Recording file object.
**/
var RecordingsListRecordingListRecordingFileListRecordingFiles = /** @class */ (function (_super) {
    __extends(RecordingsListRecordingListRecordingFileListRecordingFiles, _super);
    function RecordingsListRecordingListRecordingFileListRecordingFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleted_time" }),
        __metadata("design:type", String)
    ], RecordingsListRecordingListRecordingFileListRecordingFiles.prototype, "deletedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download_url" }),
        __metadata("design:type", String)
    ], RecordingsListRecordingListRecordingFileListRecordingFiles.prototype, "downloadUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_size" }),
        __metadata("design:type", Number)
    ], RecordingsListRecordingListRecordingFileListRecordingFiles.prototype, "fileSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_type" }),
        __metadata("design:type", String)
    ], RecordingsListRecordingListRecordingFileListRecordingFiles.prototype, "fileType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RecordingsListRecordingListRecordingFileListRecordingFiles.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_id" }),
        __metadata("design:type", String)
    ], RecordingsListRecordingListRecordingFileListRecordingFiles.prototype, "meetingId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=play_url" }),
        __metadata("design:type", String)
    ], RecordingsListRecordingListRecordingFileListRecordingFiles.prototype, "playUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_end" }),
        __metadata("design:type", String)
    ], RecordingsListRecordingListRecordingFileListRecordingFiles.prototype, "recordingEnd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_start" }),
        __metadata("design:type", String)
    ], RecordingsListRecordingListRecordingFileListRecordingFiles.prototype, "recordingStart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_type" }),
        __metadata("design:type", String)
    ], RecordingsListRecordingListRecordingFileListRecordingFiles.prototype, "recordingType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], RecordingsListRecordingListRecordingFileListRecordingFiles.prototype, "status", void 0);
    return RecordingsListRecordingListRecordingFileListRecordingFiles;
}(utils_1.SpeakeasyBase));
exports.RecordingsListRecordingListRecordingFileListRecordingFiles = RecordingsListRecordingListRecordingFileListRecordingFiles;
// RecordingsListRecordingListRecordingFileList
/**
 * List of recording file.
**/
var RecordingsListRecordingListRecordingFileList = /** @class */ (function (_super) {
    __extends(RecordingsListRecordingListRecordingFileList, _super);
    function RecordingsListRecordingListRecordingFileList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], RecordingsListRecordingListRecordingFileList.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], RecordingsListRecordingListRecordingFileList.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_id" }),
        __metadata("design:type", String)
    ], RecordingsListRecordingListRecordingFileList.prototype, "hostId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RecordingsListRecordingListRecordingFileList.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_count" }),
        __metadata("design:type", String)
    ], RecordingsListRecordingListRecordingFileList.prototype, "recordingCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_files", elemType: RecordingsListRecordingListRecordingFileListRecordingFiles }),
        __metadata("design:type", Array)
    ], RecordingsListRecordingListRecordingFileList.prototype, "recordingFiles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], RecordingsListRecordingListRecordingFileList.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], RecordingsListRecordingListRecordingFileList.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_size" }),
        __metadata("design:type", String)
    ], RecordingsListRecordingListRecordingFileList.prototype, "totalSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RecordingsListRecordingListRecordingFileList.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], RecordingsListRecordingListRecordingFileList.prototype, "uuid", void 0);
    return RecordingsListRecordingListRecordingFileList;
}(utils_1.SpeakeasyBase));
exports.RecordingsListRecordingListRecordingFileList = RecordingsListRecordingListRecordingFileList;
// RecordingsListRecordingList
/**
 * Pagination object.
**/
var RecordingsListRecordingList = /** @class */ (function (_super) {
    __extends(RecordingsListRecordingList, _super);
    function RecordingsListRecordingList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", Date)
    ], RecordingsListRecordingList.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meetings", elemType: RecordingsListRecordingListRecordingFileList }),
        __metadata("design:type", Array)
    ], RecordingsListRecordingList.prototype, "meetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], RecordingsListRecordingList.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], RecordingsListRecordingList.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], RecordingsListRecordingList.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", Date)
    ], RecordingsListRecordingList.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], RecordingsListRecordingList.prototype, "totalRecords", void 0);
    return RecordingsListRecordingList;
}(utils_1.SpeakeasyBase));
exports.RecordingsListRecordingList = RecordingsListRecordingList;
var RecordingsListRequest = /** @class */ (function (_super) {
    __extends(RecordingsListRequest, _super);
    function RecordingsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecordingsListPathParams)
    ], RecordingsListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecordingsListQueryParams)
    ], RecordingsListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecordingsListSecurity)
    ], RecordingsListRequest.prototype, "security", void 0);
    return RecordingsListRequest;
}(utils_1.SpeakeasyBase));
exports.RecordingsListRequest = RecordingsListRequest;
var RecordingsListResponse = /** @class */ (function (_super) {
    __extends(RecordingsListResponse, _super);
    function RecordingsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], RecordingsListResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RecordingsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecordingsListRecordingList)
    ], RecordingsListResponse.prototype, "recordingList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RecordingsListResponse.prototype, "statusCode", void 0);
    return RecordingsListResponse;
}(utils_1.SpeakeasyBase));
exports.RecordingsListResponse = RecordingsListResponse;
