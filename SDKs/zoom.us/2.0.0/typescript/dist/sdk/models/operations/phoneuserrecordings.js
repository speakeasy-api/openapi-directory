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
exports.PhoneUserRecordingsResponse = exports.PhoneUserRecordingsRequest = exports.PhoneUserRecordings200ApplicationJson = exports.PhoneUserRecordings200ApplicationJsonRecordings = exports.PhoneUserRecordingsSecurity = exports.PhoneUserRecordingsQueryParams = exports.PhoneUserRecordingsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PhoneUserRecordingsPathParams = /** @class */ (function (_super) {
    __extends(PhoneUserRecordingsPathParams, _super);
    function PhoneUserRecordingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], PhoneUserRecordingsPathParams.prototype, "userId", void 0);
    return PhoneUserRecordingsPathParams;
}(utils_1.SpeakeasyBase));
exports.PhoneUserRecordingsPathParams = PhoneUserRecordingsPathParams;
var PhoneUserRecordingsQueryParams = /** @class */ (function (_super) {
    __extends(PhoneUserRecordingsQueryParams, _super);
    function PhoneUserRecordingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Date)
    ], PhoneUserRecordingsQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], PhoneUserRecordingsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], PhoneUserRecordingsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", Date)
    ], PhoneUserRecordingsQueryParams.prototype, "to", void 0);
    return PhoneUserRecordingsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PhoneUserRecordingsQueryParams = PhoneUserRecordingsQueryParams;
var PhoneUserRecordingsSecurity = /** @class */ (function (_super) {
    __extends(PhoneUserRecordingsSecurity, _super);
    function PhoneUserRecordingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], PhoneUserRecordingsSecurity.prototype, "oAuth", void 0);
    return PhoneUserRecordingsSecurity;
}(utils_1.SpeakeasyBase));
exports.PhoneUserRecordingsSecurity = PhoneUserRecordingsSecurity;
var PhoneUserRecordings200ApplicationJsonRecordings = /** @class */ (function (_super) {
    __extends(PhoneUserRecordings200ApplicationJsonRecordings, _super);
    function PhoneUserRecordings200ApplicationJsonRecordings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callee_name" }),
        __metadata("design:type", String)
    ], PhoneUserRecordings200ApplicationJsonRecordings.prototype, "calleeName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callee_number" }),
        __metadata("design:type", String)
    ], PhoneUserRecordings200ApplicationJsonRecordings.prototype, "calleeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callee_number_type" }),
        __metadata("design:type", String)
    ], PhoneUserRecordings200ApplicationJsonRecordings.prototype, "calleeNumberType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caller_name" }),
        __metadata("design:type", String)
    ], PhoneUserRecordings200ApplicationJsonRecordings.prototype, "callerName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caller_number" }),
        __metadata("design:type", String)
    ], PhoneUserRecordings200ApplicationJsonRecordings.prototype, "callerNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caller_number_type" }),
        __metadata("design:type", String)
    ], PhoneUserRecordings200ApplicationJsonRecordings.prototype, "callerNumberType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", String)
    ], PhoneUserRecordings200ApplicationJsonRecordings.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], PhoneUserRecordings200ApplicationJsonRecordings.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download_url" }),
        __metadata("design:type", String)
    ], PhoneUserRecordings200ApplicationJsonRecordings.prototype, "downloadUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], PhoneUserRecordings200ApplicationJsonRecordings.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PhoneUserRecordings200ApplicationJsonRecordings.prototype, "id", void 0);
    return PhoneUserRecordings200ApplicationJsonRecordings;
}(utils_1.SpeakeasyBase));
exports.PhoneUserRecordings200ApplicationJsonRecordings = PhoneUserRecordings200ApplicationJsonRecordings;
// PhoneUserRecordings200ApplicationJson
/**
 * Phone User Recordings
**/
var PhoneUserRecordings200ApplicationJson = /** @class */ (function (_super) {
    __extends(PhoneUserRecordings200ApplicationJson, _super);
    function PhoneUserRecordings200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", Date)
    ], PhoneUserRecordings200ApplicationJson.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], PhoneUserRecordings200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], PhoneUserRecordings200ApplicationJson.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], PhoneUserRecordings200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recordings", elemType: PhoneUserRecordings200ApplicationJsonRecordings }),
        __metadata("design:type", Array)
    ], PhoneUserRecordings200ApplicationJson.prototype, "recordings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", Date)
    ], PhoneUserRecordings200ApplicationJson.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], PhoneUserRecordings200ApplicationJson.prototype, "totalRecords", void 0);
    return PhoneUserRecordings200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PhoneUserRecordings200ApplicationJson = PhoneUserRecordings200ApplicationJson;
var PhoneUserRecordingsRequest = /** @class */ (function (_super) {
    __extends(PhoneUserRecordingsRequest, _super);
    function PhoneUserRecordingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PhoneUserRecordingsPathParams)
    ], PhoneUserRecordingsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PhoneUserRecordingsQueryParams)
    ], PhoneUserRecordingsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PhoneUserRecordingsSecurity)
    ], PhoneUserRecordingsRequest.prototype, "security", void 0);
    return PhoneUserRecordingsRequest;
}(utils_1.SpeakeasyBase));
exports.PhoneUserRecordingsRequest = PhoneUserRecordingsRequest;
var PhoneUserRecordingsResponse = /** @class */ (function (_super) {
    __extends(PhoneUserRecordingsResponse, _super);
    function PhoneUserRecordingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PhoneUserRecordingsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PhoneUserRecordingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PhoneUserRecordingsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PhoneUserRecordings200ApplicationJson)
    ], PhoneUserRecordingsResponse.prototype, "phoneUserRecordings200ApplicationJSONObject", void 0);
    return PhoneUserRecordingsResponse;
}(utils_1.SpeakeasyBase));
exports.PhoneUserRecordingsResponse = PhoneUserRecordingsResponse;
