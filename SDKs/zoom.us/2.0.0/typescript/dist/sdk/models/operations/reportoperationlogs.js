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
exports.ReportOperationLogsResponse = exports.ReportOperationLogsRequest = exports.ReportOperationLogs200ApplicationJson = exports.ReportOperationLogs200ApplicationJsonOperationLogs = exports.ReportOperationLogsSecurity = exports.ReportOperationLogsQueryParams = exports.ReportOperationLogsCategoryTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReportOperationLogsCategoryTypeEnum;
(function (ReportOperationLogsCategoryTypeEnum) {
    ReportOperationLogsCategoryTypeEnum["All"] = "all";
    ReportOperationLogsCategoryTypeEnum["User"] = "user";
    ReportOperationLogsCategoryTypeEnum["UserSettings"] = "user_settings";
    ReportOperationLogsCategoryTypeEnum["Account"] = "account";
    ReportOperationLogsCategoryTypeEnum["Billing"] = "billing";
    ReportOperationLogsCategoryTypeEnum["Im"] = "im";
    ReportOperationLogsCategoryTypeEnum["Recording"] = "recording";
    ReportOperationLogsCategoryTypeEnum["PhoneContacts"] = "phone_contacts";
    ReportOperationLogsCategoryTypeEnum["Webinar"] = "webinar";
    ReportOperationLogsCategoryTypeEnum["SubAccount"] = "sub_account";
    ReportOperationLogsCategoryTypeEnum["Role"] = "role";
    ReportOperationLogsCategoryTypeEnum["ZoomRooms"] = "zoom_rooms";
})(ReportOperationLogsCategoryTypeEnum = exports.ReportOperationLogsCategoryTypeEnum || (exports.ReportOperationLogsCategoryTypeEnum = {}));
var ReportOperationLogsQueryParams = /** @class */ (function (_super) {
    __extends(ReportOperationLogsQueryParams, _super);
    function ReportOperationLogsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=category_type" }),
        __metadata("design:type", String)
    ], ReportOperationLogsQueryParams.prototype, "categoryType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Date)
    ], ReportOperationLogsQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ReportOperationLogsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ReportOperationLogsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", Date)
    ], ReportOperationLogsQueryParams.prototype, "to", void 0);
    return ReportOperationLogsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ReportOperationLogsQueryParams = ReportOperationLogsQueryParams;
var ReportOperationLogsSecurity = /** @class */ (function (_super) {
    __extends(ReportOperationLogsSecurity, _super);
    function ReportOperationLogsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ReportOperationLogsSecurity.prototype, "oAuth", void 0);
    return ReportOperationLogsSecurity;
}(utils_1.SpeakeasyBase));
exports.ReportOperationLogsSecurity = ReportOperationLogsSecurity;
var ReportOperationLogs200ApplicationJsonOperationLogs = /** @class */ (function (_super) {
    __extends(ReportOperationLogs200ApplicationJsonOperationLogs, _super);
    function ReportOperationLogs200ApplicationJsonOperationLogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ReportOperationLogs200ApplicationJsonOperationLogs.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=category_type" }),
        __metadata("design:type", String)
    ], ReportOperationLogs200ApplicationJsonOperationLogs.prototype, "categoryType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=operation_detail" }),
        __metadata("design:type", String)
    ], ReportOperationLogs200ApplicationJsonOperationLogs.prototype, "operationDetail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=operator" }),
        __metadata("design:type", String)
    ], ReportOperationLogs200ApplicationJsonOperationLogs.prototype, "operator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time" }),
        __metadata("design:type", Date)
    ], ReportOperationLogs200ApplicationJsonOperationLogs.prototype, "time", void 0);
    return ReportOperationLogs200ApplicationJsonOperationLogs;
}(utils_1.SpeakeasyBase));
exports.ReportOperationLogs200ApplicationJsonOperationLogs = ReportOperationLogs200ApplicationJsonOperationLogs;
// ReportOperationLogs200ApplicationJson
/**
 * Pagination object.
**/
var ReportOperationLogs200ApplicationJson = /** @class */ (function (_super) {
    __extends(ReportOperationLogs200ApplicationJson, _super);
    function ReportOperationLogs200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ReportOperationLogs200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=operation_logs", elemType: ReportOperationLogs200ApplicationJsonOperationLogs }),
        __metadata("design:type", Array)
    ], ReportOperationLogs200ApplicationJson.prototype, "operationLogs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ReportOperationLogs200ApplicationJson.prototype, "pageSize", void 0);
    return ReportOperationLogs200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ReportOperationLogs200ApplicationJson = ReportOperationLogs200ApplicationJson;
var ReportOperationLogsRequest = /** @class */ (function (_super) {
    __extends(ReportOperationLogsRequest, _super);
    function ReportOperationLogsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportOperationLogsQueryParams)
    ], ReportOperationLogsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportOperationLogsSecurity)
    ], ReportOperationLogsRequest.prototype, "security", void 0);
    return ReportOperationLogsRequest;
}(utils_1.SpeakeasyBase));
exports.ReportOperationLogsRequest = ReportOperationLogsRequest;
var ReportOperationLogsResponse = /** @class */ (function (_super) {
    __extends(ReportOperationLogsResponse, _super);
    function ReportOperationLogsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ReportOperationLogsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReportOperationLogsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReportOperationLogsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportOperationLogs200ApplicationJson)
    ], ReportOperationLogsResponse.prototype, "reportOperationLogs200ApplicationJSONObject", void 0);
    return ReportOperationLogsResponse;
}(utils_1.SpeakeasyBase));
exports.ReportOperationLogsResponse = ReportOperationLogsResponse;
