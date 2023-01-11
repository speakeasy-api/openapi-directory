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
exports.ListCallLogsMetricsResponse = exports.ListCallLogsMetricsRequest = exports.ListCallLogsMetrics200ApplicationJson = exports.ListCallLogsMetrics200ApplicationJsonCallLogs = exports.ListCallLogsMetrics200ApplicationJsonCallLogsCaller = exports.ListCallLogsMetrics200ApplicationJsonCallLogsCallee = exports.ListCallLogsMetricsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var ListCallLogsMetricsQueryParams = /** @class */ (function (_super) {
    __extends(ListCallLogsMetricsQueryParams, _super);
    function ListCallLogsMetricsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", String)
    ], ListCallLogsMetricsQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ListCallLogsMetricsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListCallLogsMetricsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quality_type" }),
        __metadata("design:type", String)
    ], ListCallLogsMetricsQueryParams.prototype, "qualityType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=site_id" }),
        __metadata("design:type", String)
    ], ListCallLogsMetricsQueryParams.prototype, "siteId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", String)
    ], ListCallLogsMetricsQueryParams.prototype, "to", void 0);
    return ListCallLogsMetricsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListCallLogsMetricsQueryParams = ListCallLogsMetricsQueryParams;
// ListCallLogsMetrics200ApplicationJsonCallLogsCallee
/**
 * Callee object contains information of the calee.
**/
var ListCallLogsMetrics200ApplicationJsonCallLogsCallee = /** @class */ (function (_super) {
    __extends(ListCallLogsMetrics200ApplicationJsonCallLogsCallee, _super);
    function ListCallLogsMetrics200ApplicationJsonCallLogsCallee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=codec" }),
        __metadata("design:type", String)
    ], ListCallLogsMetrics200ApplicationJsonCallLogsCallee.prototype, "codec", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device_type" }),
        __metadata("design:type", String)
    ], ListCallLogsMetrics200ApplicationJsonCallLogsCallee.prototype, "deviceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", String)
    ], ListCallLogsMetrics200ApplicationJsonCallLogsCallee.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=headset" }),
        __metadata("design:type", String)
    ], ListCallLogsMetrics200ApplicationJsonCallLogsCallee.prototype, "headset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isp" }),
        __metadata("design:type", String)
    ], ListCallLogsMetrics200ApplicationJsonCallLogsCallee.prototype, "isp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=microphone" }),
        __metadata("design:type", String)
    ], ListCallLogsMetrics200ApplicationJsonCallLogsCallee.prototype, "microphone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], ListCallLogsMetrics200ApplicationJsonCallLogsCallee.prototype, "phoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site_id" }),
        __metadata("design:type", String)
    ], ListCallLogsMetrics200ApplicationJsonCallLogsCallee.prototype, "siteId", void 0);
    return ListCallLogsMetrics200ApplicationJsonCallLogsCallee;
}(utils_1.SpeakeasyBase));
exports.ListCallLogsMetrics200ApplicationJsonCallLogsCallee = ListCallLogsMetrics200ApplicationJsonCallLogsCallee;
// ListCallLogsMetrics200ApplicationJsonCallLogsCaller
/**
 * Caller object contains information of the caller.
**/
var ListCallLogsMetrics200ApplicationJsonCallLogsCaller = /** @class */ (function (_super) {
    __extends(ListCallLogsMetrics200ApplicationJsonCallLogsCaller, _super);
    function ListCallLogsMetrics200ApplicationJsonCallLogsCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=codec" }),
        __metadata("design:type", String)
    ], ListCallLogsMetrics200ApplicationJsonCallLogsCaller.prototype, "codec", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device_type" }),
        __metadata("design:type", String)
    ], ListCallLogsMetrics200ApplicationJsonCallLogsCaller.prototype, "deviceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", String)
    ], ListCallLogsMetrics200ApplicationJsonCallLogsCaller.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=headset" }),
        __metadata("design:type", String)
    ], ListCallLogsMetrics200ApplicationJsonCallLogsCaller.prototype, "headset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isp" }),
        __metadata("design:type", String)
    ], ListCallLogsMetrics200ApplicationJsonCallLogsCaller.prototype, "isp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=microphone" }),
        __metadata("design:type", String)
    ], ListCallLogsMetrics200ApplicationJsonCallLogsCaller.prototype, "microphone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], ListCallLogsMetrics200ApplicationJsonCallLogsCaller.prototype, "phoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site_id" }),
        __metadata("design:type", String)
    ], ListCallLogsMetrics200ApplicationJsonCallLogsCaller.prototype, "siteId", void 0);
    return ListCallLogsMetrics200ApplicationJsonCallLogsCaller;
}(utils_1.SpeakeasyBase));
exports.ListCallLogsMetrics200ApplicationJsonCallLogsCaller = ListCallLogsMetrics200ApplicationJsonCallLogsCaller;
var ListCallLogsMetrics200ApplicationJsonCallLogs = /** @class */ (function (_super) {
    __extends(ListCallLogsMetrics200ApplicationJsonCallLogs, _super);
    function ListCallLogsMetrics200ApplicationJsonCallLogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_id" }),
        __metadata("design:type", String)
    ], ListCallLogsMetrics200ApplicationJsonCallLogs.prototype, "callId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callee" }),
        __metadata("design:type", ListCallLogsMetrics200ApplicationJsonCallLogsCallee)
    ], ListCallLogsMetrics200ApplicationJsonCallLogs.prototype, "callee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caller" }),
        __metadata("design:type", ListCallLogsMetrics200ApplicationJsonCallLogsCaller)
    ], ListCallLogsMetrics200ApplicationJsonCallLogs.prototype, "caller", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", String)
    ], ListCallLogsMetrics200ApplicationJsonCallLogs.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], ListCallLogsMetrics200ApplicationJsonCallLogs.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], ListCallLogsMetrics200ApplicationJsonCallLogs.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mos" }),
        __metadata("design:type", String)
    ], ListCallLogsMetrics200ApplicationJsonCallLogs.prototype, "mos", void 0);
    return ListCallLogsMetrics200ApplicationJsonCallLogs;
}(utils_1.SpeakeasyBase));
exports.ListCallLogsMetrics200ApplicationJsonCallLogs = ListCallLogsMetrics200ApplicationJsonCallLogs;
var ListCallLogsMetrics200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListCallLogsMetrics200ApplicationJson, _super);
    function ListCallLogsMetrics200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_logs", elemType: ListCallLogsMetrics200ApplicationJsonCallLogs }),
        __metadata("design:type", Array)
    ], ListCallLogsMetrics200ApplicationJson.prototype, "callLogs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], ListCallLogsMetrics200ApplicationJson.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ListCallLogsMetrics200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListCallLogsMetrics200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], ListCallLogsMetrics200ApplicationJson.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], ListCallLogsMetrics200ApplicationJson.prototype, "totalRecords", void 0);
    return ListCallLogsMetrics200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListCallLogsMetrics200ApplicationJson = ListCallLogsMetrics200ApplicationJson;
var ListCallLogsMetricsRequest = /** @class */ (function (_super) {
    __extends(ListCallLogsMetricsRequest, _super);
    function ListCallLogsMetricsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCallLogsMetricsQueryParams)
    ], ListCallLogsMetricsRequest.prototype, "queryParams", void 0);
    return ListCallLogsMetricsRequest;
}(utils_1.SpeakeasyBase));
exports.ListCallLogsMetricsRequest = ListCallLogsMetricsRequest;
var ListCallLogsMetricsResponse = /** @class */ (function (_super) {
    __extends(ListCallLogsMetricsResponse, _super);
    function ListCallLogsMetricsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListCallLogsMetricsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListCallLogsMetricsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListCallLogsMetricsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCallLogsMetrics200ApplicationJson)
    ], ListCallLogsMetricsResponse.prototype, "listCallLogsMetrics200ApplicationJSONObject", void 0);
    return ListCallLogsMetricsResponse;
}(utils_1.SpeakeasyBase));
exports.ListCallLogsMetricsResponse = ListCallLogsMetricsResponse;
