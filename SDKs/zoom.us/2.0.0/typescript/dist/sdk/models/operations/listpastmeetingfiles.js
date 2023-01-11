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
exports.ListPastMeetingFilesResponse = exports.ListPastMeetingFilesRequest = exports.ListPastMeetingFiles200ApplicationJson = exports.ListPastMeetingFiles200ApplicationJsonInMeetingFiles = exports.ListPastMeetingFilesSecurity = exports.ListPastMeetingFilesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListPastMeetingFilesPathParams = /** @class */ (function (_super) {
    __extends(ListPastMeetingFilesPathParams, _super);
    function ListPastMeetingFilesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", Number)
    ], ListPastMeetingFilesPathParams.prototype, "meetingId", void 0);
    return ListPastMeetingFilesPathParams;
}(utils_1.SpeakeasyBase));
exports.ListPastMeetingFilesPathParams = ListPastMeetingFilesPathParams;
var ListPastMeetingFilesSecurity = /** @class */ (function (_super) {
    __extends(ListPastMeetingFilesSecurity, _super);
    function ListPastMeetingFilesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ListPastMeetingFilesSecurity.prototype, "oAuth", void 0);
    return ListPastMeetingFilesSecurity;
}(utils_1.SpeakeasyBase));
exports.ListPastMeetingFilesSecurity = ListPastMeetingFilesSecurity;
var ListPastMeetingFiles200ApplicationJsonInMeetingFiles = /** @class */ (function (_super) {
    __extends(ListPastMeetingFiles200ApplicationJsonInMeetingFiles, _super);
    function ListPastMeetingFiles200ApplicationJsonInMeetingFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download_url" }),
        __metadata("design:type", String)
    ], ListPastMeetingFiles200ApplicationJsonInMeetingFiles.prototype, "downloadUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_name" }),
        __metadata("design:type", String)
    ], ListPastMeetingFiles200ApplicationJsonInMeetingFiles.prototype, "fileName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_size" }),
        __metadata("design:type", Number)
    ], ListPastMeetingFiles200ApplicationJsonInMeetingFiles.prototype, "fileSize", void 0);
    return ListPastMeetingFiles200ApplicationJsonInMeetingFiles;
}(utils_1.SpeakeasyBase));
exports.ListPastMeetingFiles200ApplicationJsonInMeetingFiles = ListPastMeetingFiles200ApplicationJsonInMeetingFiles;
var ListPastMeetingFiles200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListPastMeetingFiles200ApplicationJson, _super);
    function ListPastMeetingFiles200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=in_meeting_files", elemType: ListPastMeetingFiles200ApplicationJsonInMeetingFiles }),
        __metadata("design:type", Array)
    ], ListPastMeetingFiles200ApplicationJson.prototype, "inMeetingFiles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], ListPastMeetingFiles200ApplicationJson.prototype, "totalRecords", void 0);
    return ListPastMeetingFiles200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListPastMeetingFiles200ApplicationJson = ListPastMeetingFiles200ApplicationJson;
var ListPastMeetingFilesRequest = /** @class */ (function (_super) {
    __extends(ListPastMeetingFilesRequest, _super);
    function ListPastMeetingFilesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPastMeetingFilesPathParams)
    ], ListPastMeetingFilesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPastMeetingFilesSecurity)
    ], ListPastMeetingFilesRequest.prototype, "security", void 0);
    return ListPastMeetingFilesRequest;
}(utils_1.SpeakeasyBase));
exports.ListPastMeetingFilesRequest = ListPastMeetingFilesRequest;
var ListPastMeetingFilesResponse = /** @class */ (function (_super) {
    __extends(ListPastMeetingFilesResponse, _super);
    function ListPastMeetingFilesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListPastMeetingFilesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListPastMeetingFilesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListPastMeetingFilesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPastMeetingFiles200ApplicationJson)
    ], ListPastMeetingFilesResponse.prototype, "listPastMeetingFiles200ApplicationJSONObject", void 0);
    return ListPastMeetingFilesResponse;
}(utils_1.SpeakeasyBase));
exports.ListPastMeetingFilesResponse = ListPastMeetingFilesResponse;
