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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListArchivedFilesResponse = exports.ListArchivedFilesRequest = exports.ListArchivedFiles200ApplicationJson = exports.ListArchivedFiles200ApplicationJsonMeetings = exports.ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles = exports.ListArchivedFilesQueryParams = exports.ListArchivedFilesQueryDataTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var ListArchivedFilesQueryDataTypeEnum;
(function (ListArchivedFilesQueryDataTypeEnum) {
    ListArchivedFilesQueryDataTypeEnum["MeetingStartTime"] = "meeting_start_time";
    ListArchivedFilesQueryDataTypeEnum["ArchiveCompleteTime"] = "archive_complete_time";
})(ListArchivedFilesQueryDataTypeEnum = exports.ListArchivedFilesQueryDataTypeEnum || (exports.ListArchivedFilesQueryDataTypeEnum = {}));
var ListArchivedFilesQueryParams = /** @class */ (function (_super) {
    __extends(ListArchivedFilesQueryParams, _super);
    function ListArchivedFilesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", String)
    ], ListArchivedFilesQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ListArchivedFilesQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListArchivedFilesQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query_data_type" }),
        __metadata("design:type", String)
    ], ListArchivedFilesQueryParams.prototype, "queryDataType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", String)
    ], ListArchivedFilesQueryParams.prototype, "to", void 0);
    return ListArchivedFilesQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListArchivedFilesQueryParams = ListArchivedFilesQueryParams;
var ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles = /** @class */ (function (_super) {
    __extends(ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles, _super);
    function ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download_url" }),
        __metadata("design:type", String)
    ], ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles.prototype, "downloadUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_extension" }),
        __metadata("design:type", String)
    ], ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles.prototype, "fileExtension", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_size" }),
        __metadata("design:type", Number)
    ], ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles.prototype, "fileSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_type" }),
        __metadata("design:type", String)
    ], ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles.prototype, "fileType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_type" }),
        __metadata("design:type", String)
    ], ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles.prototype, "recordingType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles.prototype, "status", void 0);
    return ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles;
}(utils_1.SpeakeasyBase));
exports.ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles = ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles;
var ListArchivedFiles200ApplicationJsonMeetings = /** @class */ (function (_super) {
    __extends(ListArchivedFiles200ApplicationJsonMeetings, _super);
    function ListArchivedFiles200ApplicationJsonMeetings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=archive_files", elemType: ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles }),
        __metadata("design:type", Array)
    ], ListArchivedFiles200ApplicationJsonMeetings.prototype, "archiveFiles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], ListArchivedFiles200ApplicationJsonMeetings.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_id" }),
        __metadata("design:type", String)
    ], ListArchivedFiles200ApplicationJsonMeetings.prototype, "hostId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ListArchivedFiles200ApplicationJsonMeetings.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_count" }),
        __metadata("design:type", Number)
    ], ListArchivedFiles200ApplicationJsonMeetings.prototype, "recordingCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", String)
    ], ListArchivedFiles200ApplicationJsonMeetings.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], ListArchivedFiles200ApplicationJsonMeetings.prototype, "timezone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], ListArchivedFiles200ApplicationJsonMeetings.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_size" }),
        __metadata("design:type", Number)
    ], ListArchivedFiles200ApplicationJsonMeetings.prototype, "totalSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], ListArchivedFiles200ApplicationJsonMeetings.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], ListArchivedFiles200ApplicationJsonMeetings.prototype, "uuid", void 0);
    return ListArchivedFiles200ApplicationJsonMeetings;
}(utils_1.SpeakeasyBase));
exports.ListArchivedFiles200ApplicationJsonMeetings = ListArchivedFiles200ApplicationJsonMeetings;
var ListArchivedFiles200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListArchivedFiles200ApplicationJson, _super);
    function ListArchivedFiles200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], ListArchivedFiles200ApplicationJson.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meetings", elemType: ListArchivedFiles200ApplicationJsonMeetings }),
        __metadata("design:type", Array)
    ], ListArchivedFiles200ApplicationJson.prototype, "meetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ListArchivedFiles200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListArchivedFiles200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], ListArchivedFiles200ApplicationJson.prototype, "to", void 0);
    return ListArchivedFiles200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListArchivedFiles200ApplicationJson = ListArchivedFiles200ApplicationJson;
var ListArchivedFilesRequest = /** @class */ (function (_super) {
    __extends(ListArchivedFilesRequest, _super);
    function ListArchivedFilesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListArchivedFilesQueryParams)
    ], ListArchivedFilesRequest.prototype, "queryParams", void 0);
    return ListArchivedFilesRequest;
}(utils_1.SpeakeasyBase));
exports.ListArchivedFilesRequest = ListArchivedFilesRequest;
var ListArchivedFilesResponse = /** @class */ (function (_super) {
    __extends(ListArchivedFilesResponse, _super);
    function ListArchivedFilesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListArchivedFilesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListArchivedFilesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListArchivedFilesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListArchivedFiles200ApplicationJson)
    ], ListArchivedFilesResponse.prototype, "listArchivedFiles200ApplicationJSONObject", void 0);
    return ListArchivedFilesResponse;
}(utils_1.SpeakeasyBase));
exports.ListArchivedFilesResponse = ListArchivedFilesResponse;
