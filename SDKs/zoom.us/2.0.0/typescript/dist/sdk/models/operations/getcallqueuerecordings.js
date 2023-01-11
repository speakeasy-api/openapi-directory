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
exports.GetCallQueueRecordingsResponse = exports.GetCallQueueRecordingsRequest = exports.GetCallQueueRecordings200ApplicationJson = exports.GetCallQueueRecordings200ApplicationJsonRecordings = exports.GetCallQueueRecordingsQueryParams = exports.GetCallQueueRecordingsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetCallQueueRecordingsPathParams = /** @class */ (function (_super) {
    __extends(GetCallQueueRecordingsPathParams, _super);
    function GetCallQueueRecordingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=callQueueId" }),
        __metadata("design:type", String)
    ], GetCallQueueRecordingsPathParams.prototype, "callQueueId", void 0);
    return GetCallQueueRecordingsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetCallQueueRecordingsPathParams = GetCallQueueRecordingsPathParams;
var GetCallQueueRecordingsQueryParams = /** @class */ (function (_super) {
    __extends(GetCallQueueRecordingsQueryParams, _super);
    function GetCallQueueRecordingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Date)
    ], GetCallQueueRecordingsQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], GetCallQueueRecordingsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetCallQueueRecordingsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", Date)
    ], GetCallQueueRecordingsQueryParams.prototype, "to", void 0);
    return GetCallQueueRecordingsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetCallQueueRecordingsQueryParams = GetCallQueueRecordingsQueryParams;
var GetCallQueueRecordings200ApplicationJsonRecordings = /** @class */ (function (_super) {
    __extends(GetCallQueueRecordings200ApplicationJsonRecordings, _super);
    function GetCallQueueRecordings200ApplicationJsonRecordings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callee_name" }),
        __metadata("design:type", String)
    ], GetCallQueueRecordings200ApplicationJsonRecordings.prototype, "calleeName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callee_number" }),
        __metadata("design:type", String)
    ], GetCallQueueRecordings200ApplicationJsonRecordings.prototype, "calleeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callee_number_type" }),
        __metadata("design:type", String)
    ], GetCallQueueRecordings200ApplicationJsonRecordings.prototype, "calleeNumberType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caller_name" }),
        __metadata("design:type", String)
    ], GetCallQueueRecordings200ApplicationJsonRecordings.prototype, "callerName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caller_number" }),
        __metadata("design:type", String)
    ], GetCallQueueRecordings200ApplicationJsonRecordings.prototype, "callerNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caller_number_type" }),
        __metadata("design:type", String)
    ], GetCallQueueRecordings200ApplicationJsonRecordings.prototype, "callerNumberType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", Date)
    ], GetCallQueueRecordings200ApplicationJsonRecordings.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], GetCallQueueRecordings200ApplicationJsonRecordings.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download_url" }),
        __metadata("design:type", String)
    ], GetCallQueueRecordings200ApplicationJsonRecordings.prototype, "downloadUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], GetCallQueueRecordings200ApplicationJsonRecordings.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetCallQueueRecordings200ApplicationJsonRecordings.prototype, "id", void 0);
    return GetCallQueueRecordings200ApplicationJsonRecordings;
}(utils_1.SpeakeasyBase));
exports.GetCallQueueRecordings200ApplicationJsonRecordings = GetCallQueueRecordings200ApplicationJsonRecordings;
var GetCallQueueRecordings200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCallQueueRecordings200ApplicationJson, _super);
    function GetCallQueueRecordings200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], GetCallQueueRecordings200ApplicationJson.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], GetCallQueueRecordings200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], GetCallQueueRecordings200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recordings", elemType: GetCallQueueRecordings200ApplicationJsonRecordings }),
        __metadata("design:type", Array)
    ], GetCallQueueRecordings200ApplicationJson.prototype, "recordings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], GetCallQueueRecordings200ApplicationJson.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", String)
    ], GetCallQueueRecordings200ApplicationJson.prototype, "totalRecords", void 0);
    return GetCallQueueRecordings200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetCallQueueRecordings200ApplicationJson = GetCallQueueRecordings200ApplicationJson;
var GetCallQueueRecordingsRequest = /** @class */ (function (_super) {
    __extends(GetCallQueueRecordingsRequest, _super);
    function GetCallQueueRecordingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCallQueueRecordingsPathParams)
    ], GetCallQueueRecordingsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCallQueueRecordingsQueryParams)
    ], GetCallQueueRecordingsRequest.prototype, "queryParams", void 0);
    return GetCallQueueRecordingsRequest;
}(utils_1.SpeakeasyBase));
exports.GetCallQueueRecordingsRequest = GetCallQueueRecordingsRequest;
var GetCallQueueRecordingsResponse = /** @class */ (function (_super) {
    __extends(GetCallQueueRecordingsResponse, _super);
    function GetCallQueueRecordingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetCallQueueRecordingsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCallQueueRecordingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCallQueueRecordingsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCallQueueRecordings200ApplicationJson)
    ], GetCallQueueRecordingsResponse.prototype, "getCallQueueRecordings200ApplicationJSONObject", void 0);
    return GetCallQueueRecordingsResponse;
}(utils_1.SpeakeasyBase));
exports.GetCallQueueRecordingsResponse = GetCallQueueRecordingsResponse;
