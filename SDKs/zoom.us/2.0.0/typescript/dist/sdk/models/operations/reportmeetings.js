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
exports.ReportMeetingsResponse = exports.ReportMeetingsRequest = exports.ReportMeetings200ApplicationJson = exports.ReportMeetings200ApplicationJsonMeetings = exports.ReportMeetings200ApplicationJsonMeetingsCustomKeys = exports.ReportMeetingsQueryParams = exports.ReportMeetingsTypeEnum = exports.ReportMeetingsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ReportMeetingsPathParams = /** @class */ (function (_super) {
    __extends(ReportMeetingsPathParams, _super);
    function ReportMeetingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], ReportMeetingsPathParams.prototype, "userId", void 0);
    return ReportMeetingsPathParams;
}(utils_1.SpeakeasyBase));
exports.ReportMeetingsPathParams = ReportMeetingsPathParams;
var ReportMeetingsTypeEnum;
(function (ReportMeetingsTypeEnum) {
    ReportMeetingsTypeEnum["Past"] = "past";
    ReportMeetingsTypeEnum["PastOne"] = "pastOne";
})(ReportMeetingsTypeEnum = exports.ReportMeetingsTypeEnum || (exports.ReportMeetingsTypeEnum = {}));
var ReportMeetingsQueryParams = /** @class */ (function (_super) {
    __extends(ReportMeetingsQueryParams, _super);
    function ReportMeetingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Date)
    ], ReportMeetingsQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ReportMeetingsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ReportMeetingsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", Date)
    ], ReportMeetingsQueryParams.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], ReportMeetingsQueryParams.prototype, "type", void 0);
    return ReportMeetingsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ReportMeetingsQueryParams = ReportMeetingsQueryParams;
var ReportMeetings200ApplicationJsonMeetingsCustomKeys = /** @class */ (function (_super) {
    __extends(ReportMeetings200ApplicationJsonMeetingsCustomKeys, _super);
    function ReportMeetings200ApplicationJsonMeetingsCustomKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ReportMeetings200ApplicationJsonMeetingsCustomKeys.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ReportMeetings200ApplicationJsonMeetingsCustomKeys.prototype, "value", void 0);
    return ReportMeetings200ApplicationJsonMeetingsCustomKeys;
}(utils_1.SpeakeasyBase));
exports.ReportMeetings200ApplicationJsonMeetingsCustomKeys = ReportMeetings200ApplicationJsonMeetingsCustomKeys;
var ReportMeetings200ApplicationJsonMeetings = /** @class */ (function (_super) {
    __extends(ReportMeetings200ApplicationJsonMeetings, _super);
    function ReportMeetings200ApplicationJsonMeetings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_keys", elemType: ReportMeetings200ApplicationJsonMeetingsCustomKeys }),
        __metadata("design:type", Array)
    ], ReportMeetings200ApplicationJsonMeetings.prototype, "customKeys", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], ReportMeetings200ApplicationJsonMeetings.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_time" }),
        __metadata("design:type", Date)
    ], ReportMeetings200ApplicationJsonMeetings.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ReportMeetings200ApplicationJsonMeetings.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants_count" }),
        __metadata("design:type", Number)
    ], ReportMeetings200ApplicationJsonMeetings.prototype, "participantsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], ReportMeetings200ApplicationJsonMeetings.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], ReportMeetings200ApplicationJsonMeetings.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], ReportMeetings200ApplicationJsonMeetings.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_minutes" }),
        __metadata("design:type", Number)
    ], ReportMeetings200ApplicationJsonMeetings.prototype, "totalMinutes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], ReportMeetings200ApplicationJsonMeetings.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_email" }),
        __metadata("design:type", String)
    ], ReportMeetings200ApplicationJsonMeetings.prototype, "userEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_name" }),
        __metadata("design:type", String)
    ], ReportMeetings200ApplicationJsonMeetings.prototype, "userName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], ReportMeetings200ApplicationJsonMeetings.prototype, "uuid", void 0);
    return ReportMeetings200ApplicationJsonMeetings;
}(utils_1.SpeakeasyBase));
exports.ReportMeetings200ApplicationJsonMeetings = ReportMeetings200ApplicationJsonMeetings;
// ReportMeetings200ApplicationJson
/**
 * Pagination Object.
**/
var ReportMeetings200ApplicationJson = /** @class */ (function (_super) {
    __extends(ReportMeetings200ApplicationJson, _super);
    function ReportMeetings200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", Date)
    ], ReportMeetings200ApplicationJson.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meetings", elemType: ReportMeetings200ApplicationJsonMeetings }),
        __metadata("design:type", Array)
    ], ReportMeetings200ApplicationJson.prototype, "meetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ReportMeetings200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], ReportMeetings200ApplicationJson.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_number" }),
        __metadata("design:type", Number)
    ], ReportMeetings200ApplicationJson.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ReportMeetings200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", Date)
    ], ReportMeetings200ApplicationJson.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], ReportMeetings200ApplicationJson.prototype, "totalRecords", void 0);
    return ReportMeetings200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ReportMeetings200ApplicationJson = ReportMeetings200ApplicationJson;
var ReportMeetingsRequest = /** @class */ (function (_super) {
    __extends(ReportMeetingsRequest, _super);
    function ReportMeetingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportMeetingsPathParams)
    ], ReportMeetingsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportMeetingsQueryParams)
    ], ReportMeetingsRequest.prototype, "queryParams", void 0);
    return ReportMeetingsRequest;
}(utils_1.SpeakeasyBase));
exports.ReportMeetingsRequest = ReportMeetingsRequest;
var ReportMeetingsResponse = /** @class */ (function (_super) {
    __extends(ReportMeetingsResponse, _super);
    function ReportMeetingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ReportMeetingsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReportMeetingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReportMeetingsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportMeetings200ApplicationJson)
    ], ReportMeetingsResponse.prototype, "reportMeetings200ApplicationJSONObject", void 0);
    return ReportMeetingsResponse;
}(utils_1.SpeakeasyBase));
exports.ReportMeetingsResponse = ReportMeetingsResponse;
