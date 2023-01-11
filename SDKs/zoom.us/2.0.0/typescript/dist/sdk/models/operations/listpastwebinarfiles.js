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
exports.ListPastWebinarFilesResponse = exports.ListPastWebinarFilesRequest = exports.ListPastWebinarFiles200ApplicationJson = exports.ListPastWebinarFiles200ApplicationJsonInMeetingFiles = exports.ListPastWebinarFilesSecurity = exports.ListPastWebinarFilesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListPastWebinarFilesPathParams = /** @class */ (function (_super) {
    __extends(ListPastWebinarFilesPathParams, _super);
    function ListPastWebinarFilesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", String)
    ], ListPastWebinarFilesPathParams.prototype, "webinarId", void 0);
    return ListPastWebinarFilesPathParams;
}(utils_1.SpeakeasyBase));
exports.ListPastWebinarFilesPathParams = ListPastWebinarFilesPathParams;
var ListPastWebinarFilesSecurity = /** @class */ (function (_super) {
    __extends(ListPastWebinarFilesSecurity, _super);
    function ListPastWebinarFilesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ListPastWebinarFilesSecurity.prototype, "oAuth", void 0);
    return ListPastWebinarFilesSecurity;
}(utils_1.SpeakeasyBase));
exports.ListPastWebinarFilesSecurity = ListPastWebinarFilesSecurity;
var ListPastWebinarFiles200ApplicationJsonInMeetingFiles = /** @class */ (function (_super) {
    __extends(ListPastWebinarFiles200ApplicationJsonInMeetingFiles, _super);
    function ListPastWebinarFiles200ApplicationJsonInMeetingFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download_url" }),
        __metadata("design:type", String)
    ], ListPastWebinarFiles200ApplicationJsonInMeetingFiles.prototype, "downloadUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_name" }),
        __metadata("design:type", String)
    ], ListPastWebinarFiles200ApplicationJsonInMeetingFiles.prototype, "fileName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_size" }),
        __metadata("design:type", Number)
    ], ListPastWebinarFiles200ApplicationJsonInMeetingFiles.prototype, "fileSize", void 0);
    return ListPastWebinarFiles200ApplicationJsonInMeetingFiles;
}(utils_1.SpeakeasyBase));
exports.ListPastWebinarFiles200ApplicationJsonInMeetingFiles = ListPastWebinarFiles200ApplicationJsonInMeetingFiles;
var ListPastWebinarFiles200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListPastWebinarFiles200ApplicationJson, _super);
    function ListPastWebinarFiles200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=in_meeting_files", elemType: ListPastWebinarFiles200ApplicationJsonInMeetingFiles }),
        __metadata("design:type", Array)
    ], ListPastWebinarFiles200ApplicationJson.prototype, "inMeetingFiles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], ListPastWebinarFiles200ApplicationJson.prototype, "totalRecords", void 0);
    return ListPastWebinarFiles200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListPastWebinarFiles200ApplicationJson = ListPastWebinarFiles200ApplicationJson;
var ListPastWebinarFilesRequest = /** @class */ (function (_super) {
    __extends(ListPastWebinarFilesRequest, _super);
    function ListPastWebinarFilesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPastWebinarFilesPathParams)
    ], ListPastWebinarFilesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPastWebinarFilesSecurity)
    ], ListPastWebinarFilesRequest.prototype, "security", void 0);
    return ListPastWebinarFilesRequest;
}(utils_1.SpeakeasyBase));
exports.ListPastWebinarFilesRequest = ListPastWebinarFilesRequest;
var ListPastWebinarFilesResponse = /** @class */ (function (_super) {
    __extends(ListPastWebinarFilesResponse, _super);
    function ListPastWebinarFilesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListPastWebinarFilesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListPastWebinarFilesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListPastWebinarFilesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPastWebinarFiles200ApplicationJson)
    ], ListPastWebinarFilesResponse.prototype, "listPastWebinarFiles200ApplicationJSONObject", void 0);
    return ListPastWebinarFilesResponse;
}(utils_1.SpeakeasyBase));
exports.ListPastWebinarFilesResponse = ListPastWebinarFilesResponse;
