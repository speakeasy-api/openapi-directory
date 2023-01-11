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
exports.GetPsOperationLogsResponse = exports.GetPsOperationLogsRequest = exports.GetPsOperationLogs200ApplicationJson = exports.GetPsOperationLogs200ApplicationJsonOperationLogs = exports.GetPsOperationLogsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetPsOperationLogsQueryParams = /** @class */ (function (_super) {
    __extends(GetPsOperationLogsQueryParams, _super);
    function GetPsOperationLogsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=category_type" }),
        __metadata("design:type", String)
    ], GetPsOperationLogsQueryParams.prototype, "categoryType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", String)
    ], GetPsOperationLogsQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], GetPsOperationLogsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetPsOperationLogsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", String)
    ], GetPsOperationLogsQueryParams.prototype, "to", void 0);
    return GetPsOperationLogsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetPsOperationLogsQueryParams = GetPsOperationLogsQueryParams;
var GetPsOperationLogs200ApplicationJsonOperationLogs = /** @class */ (function (_super) {
    __extends(GetPsOperationLogs200ApplicationJsonOperationLogs, _super);
    function GetPsOperationLogs200ApplicationJsonOperationLogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetPsOperationLogs200ApplicationJsonOperationLogs.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=category_type" }),
        __metadata("design:type", String)
    ], GetPsOperationLogs200ApplicationJsonOperationLogs.prototype, "categoryType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=operation_detail" }),
        __metadata("design:type", String)
    ], GetPsOperationLogs200ApplicationJsonOperationLogs.prototype, "operationDetail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=operator" }),
        __metadata("design:type", String)
    ], GetPsOperationLogs200ApplicationJsonOperationLogs.prototype, "operator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time" }),
        __metadata("design:type", Date)
    ], GetPsOperationLogs200ApplicationJsonOperationLogs.prototype, "time", void 0);
    return GetPsOperationLogs200ApplicationJsonOperationLogs;
}(utils_1.SpeakeasyBase));
exports.GetPsOperationLogs200ApplicationJsonOperationLogs = GetPsOperationLogs200ApplicationJsonOperationLogs;
// GetPsOperationLogs200ApplicationJson
/**
 * Pagination object.
**/
var GetPsOperationLogs200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPsOperationLogs200ApplicationJson, _super);
    function GetPsOperationLogs200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], GetPsOperationLogs200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=operation_logs", elemType: GetPsOperationLogs200ApplicationJsonOperationLogs }),
        __metadata("design:type", Array)
    ], GetPsOperationLogs200ApplicationJson.prototype, "operationLogs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], GetPsOperationLogs200ApplicationJson.prototype, "pageSize", void 0);
    return GetPsOperationLogs200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetPsOperationLogs200ApplicationJson = GetPsOperationLogs200ApplicationJson;
var GetPsOperationLogsRequest = /** @class */ (function (_super) {
    __extends(GetPsOperationLogsRequest, _super);
    function GetPsOperationLogsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPsOperationLogsQueryParams)
    ], GetPsOperationLogsRequest.prototype, "queryParams", void 0);
    return GetPsOperationLogsRequest;
}(utils_1.SpeakeasyBase));
exports.GetPsOperationLogsRequest = GetPsOperationLogsRequest;
var GetPsOperationLogsResponse = /** @class */ (function (_super) {
    __extends(GetPsOperationLogsResponse, _super);
    function GetPsOperationLogsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetPsOperationLogsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPsOperationLogsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPsOperationLogsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPsOperationLogs200ApplicationJson)
    ], GetPsOperationLogsResponse.prototype, "getPSOperationLogs200ApplicationJSONObject", void 0);
    return GetPsOperationLogsResponse;
}(utils_1.SpeakeasyBase));
exports.GetPsOperationLogsResponse = GetPsOperationLogsResponse;
