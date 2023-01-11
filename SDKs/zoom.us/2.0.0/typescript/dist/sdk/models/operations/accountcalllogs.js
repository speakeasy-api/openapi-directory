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
exports.AccountCallLogsResponse = exports.AccountCallLogsRequest = exports.AccountCallLogs200ApplicationJson = exports.AccountCallLogs200ApplicationJsonCallLogs = exports.AccountCallLogs200ApplicationJsonCallLogsSite = exports.AccountCallLogs200ApplicationJsonCallLogsRecordingTypeEnum = exports.AccountCallLogs200ApplicationJsonCallLogsOwner = exports.AccountCallLogs200ApplicationJsonCallLogsOwnerTypeEnum = exports.AccountCallLogs200ApplicationJsonCallLogsCallTypeEnum = exports.AccountCallLogsSecurity = exports.AccountCallLogsQueryParams = exports.AccountCallLogsTimeTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AccountCallLogsTimeTypeEnum;
(function (AccountCallLogsTimeTypeEnum) {
    AccountCallLogsTimeTypeEnum["StartTime"] = "startTime";
    AccountCallLogsTimeTypeEnum["EndTime"] = "endTime";
})(AccountCallLogsTimeTypeEnum = exports.AccountCallLogsTimeTypeEnum || (exports.AccountCallLogsTimeTypeEnum = {}));
var AccountCallLogsQueryParams = /** @class */ (function (_super) {
    __extends(AccountCallLogsQueryParams, _super);
    function AccountCallLogsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", String)
    ], AccountCallLogsQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], AccountCallLogsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], AccountCallLogsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=path" }),
        __metadata("design:type", String)
    ], AccountCallLogsQueryParams.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=site_id" }),
        __metadata("design:type", String)
    ], AccountCallLogsQueryParams.prototype, "siteId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=time_type" }),
        __metadata("design:type", String)
    ], AccountCallLogsQueryParams.prototype, "timeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", String)
    ], AccountCallLogsQueryParams.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], AccountCallLogsQueryParams.prototype, "type", void 0);
    return AccountCallLogsQueryParams;
}(utils_1.SpeakeasyBase));
exports.AccountCallLogsQueryParams = AccountCallLogsQueryParams;
var AccountCallLogsSecurity = /** @class */ (function (_super) {
    __extends(AccountCallLogsSecurity, _super);
    function AccountCallLogsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], AccountCallLogsSecurity.prototype, "oAuth", void 0);
    return AccountCallLogsSecurity;
}(utils_1.SpeakeasyBase));
exports.AccountCallLogsSecurity = AccountCallLogsSecurity;
var AccountCallLogs200ApplicationJsonCallLogsCallTypeEnum;
(function (AccountCallLogs200ApplicationJsonCallLogsCallTypeEnum) {
    AccountCallLogs200ApplicationJsonCallLogsCallTypeEnum["Voip"] = "voip";
    AccountCallLogs200ApplicationJsonCallLogsCallTypeEnum["Pstn"] = "pstn";
    AccountCallLogs200ApplicationJsonCallLogsCallTypeEnum["Tollfree"] = "tollfree";
    AccountCallLogs200ApplicationJsonCallLogsCallTypeEnum["International"] = "international";
    AccountCallLogs200ApplicationJsonCallLogsCallTypeEnum["ContactCenter"] = "contactCenter";
})(AccountCallLogs200ApplicationJsonCallLogsCallTypeEnum = exports.AccountCallLogs200ApplicationJsonCallLogsCallTypeEnum || (exports.AccountCallLogs200ApplicationJsonCallLogsCallTypeEnum = {}));
var AccountCallLogs200ApplicationJsonCallLogsOwnerTypeEnum;
(function (AccountCallLogs200ApplicationJsonCallLogsOwnerTypeEnum) {
    AccountCallLogs200ApplicationJsonCallLogsOwnerTypeEnum["User"] = "user";
    AccountCallLogs200ApplicationJsonCallLogsOwnerTypeEnum["CallQueue"] = "callQueue";
    AccountCallLogs200ApplicationJsonCallLogsOwnerTypeEnum["AutoReceptionist"] = "autoReceptionist";
    AccountCallLogs200ApplicationJsonCallLogsOwnerTypeEnum["CommonAreaPhone"] = "commonAreaPhone";
    AccountCallLogs200ApplicationJsonCallLogsOwnerTypeEnum["SharedLineGroup"] = "sharedLineGroup";
})(AccountCallLogs200ApplicationJsonCallLogsOwnerTypeEnum = exports.AccountCallLogs200ApplicationJsonCallLogsOwnerTypeEnum || (exports.AccountCallLogs200ApplicationJsonCallLogsOwnerTypeEnum = {}));
var AccountCallLogs200ApplicationJsonCallLogsOwner = /** @class */ (function (_super) {
    __extends(AccountCallLogs200ApplicationJsonCallLogsOwner, _super);
    function AccountCallLogs200ApplicationJsonCallLogsOwner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", Number)
    ], AccountCallLogs200ApplicationJsonCallLogsOwner.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJsonCallLogsOwner.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJsonCallLogsOwner.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJsonCallLogsOwner.prototype, "type", void 0);
    return AccountCallLogs200ApplicationJsonCallLogsOwner;
}(utils_1.SpeakeasyBase));
exports.AccountCallLogs200ApplicationJsonCallLogsOwner = AccountCallLogs200ApplicationJsonCallLogsOwner;
var AccountCallLogs200ApplicationJsonCallLogsRecordingTypeEnum;
(function (AccountCallLogs200ApplicationJsonCallLogsRecordingTypeEnum) {
    AccountCallLogs200ApplicationJsonCallLogsRecordingTypeEnum["One"] = "1";
    AccountCallLogs200ApplicationJsonCallLogsRecordingTypeEnum["Two"] = "2";
})(AccountCallLogs200ApplicationJsonCallLogsRecordingTypeEnum = exports.AccountCallLogs200ApplicationJsonCallLogsRecordingTypeEnum || (exports.AccountCallLogs200ApplicationJsonCallLogsRecordingTypeEnum = {}));
var AccountCallLogs200ApplicationJsonCallLogsSite = /** @class */ (function (_super) {
    __extends(AccountCallLogs200ApplicationJsonCallLogsSite, _super);
    function AccountCallLogs200ApplicationJsonCallLogsSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJsonCallLogsSite.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJsonCallLogsSite.prototype, "name", void 0);
    return AccountCallLogs200ApplicationJsonCallLogsSite;
}(utils_1.SpeakeasyBase));
exports.AccountCallLogs200ApplicationJsonCallLogsSite = AccountCallLogs200ApplicationJsonCallLogsSite;
var AccountCallLogs200ApplicationJsonCallLogs = /** @class */ (function (_super) {
    __extends(AccountCallLogs200ApplicationJsonCallLogs, _super);
    function AccountCallLogs200ApplicationJsonCallLogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answer_start_time" }),
        __metadata("design:type", Date)
    ], AccountCallLogs200ApplicationJsonCallLogs.prototype, "answerStartTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_id" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJsonCallLogs.prototype, "callId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_type" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJsonCallLogs.prototype, "callType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callee_name" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJsonCallLogs.prototype, "calleeName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callee_number" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJsonCallLogs.prototype, "calleeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callee_number_type" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJsonCallLogs.prototype, "calleeNumberType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caller_name" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJsonCallLogs.prototype, "callerName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caller_number" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJsonCallLogs.prototype, "callerNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caller_number_type" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJsonCallLogs.prototype, "callerNumberType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=charge" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJsonCallLogs.prototype, "charge", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_code" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJsonCallLogs.prototype, "clientCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJsonCallLogs.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJsonCallLogs.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], AccountCallLogs200ApplicationJsonCallLogs.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJsonCallLogs.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=owner" }),
        __metadata("design:type", AccountCallLogs200ApplicationJsonCallLogsOwner)
    ], AccountCallLogs200ApplicationJsonCallLogs.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJsonCallLogs.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rate" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJsonCallLogs.prototype, "rate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_id" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJsonCallLogs.prototype, "recordingId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_type" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJsonCallLogs.prototype, "recordingType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJsonCallLogs.prototype, "result", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site" }),
        __metadata("design:type", AccountCallLogs200ApplicationJsonCallLogsSite)
    ], AccountCallLogs200ApplicationJsonCallLogs.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_id" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJsonCallLogs.prototype, "userId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_time" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJsonCallLogs.prototype, "waitingTime", void 0);
    return AccountCallLogs200ApplicationJsonCallLogs;
}(utils_1.SpeakeasyBase));
exports.AccountCallLogs200ApplicationJsonCallLogs = AccountCallLogs200ApplicationJsonCallLogs;
// AccountCallLogs200ApplicationJson
/**
 * Account Call Logs
**/
var AccountCallLogs200ApplicationJson = /** @class */ (function (_super) {
    __extends(AccountCallLogs200ApplicationJson, _super);
    function AccountCallLogs200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_logs", elemType: AccountCallLogs200ApplicationJsonCallLogs }),
        __metadata("design:type", Array)
    ], AccountCallLogs200ApplicationJson.prototype, "callLogs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJson.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], AccountCallLogs200ApplicationJson.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], AccountCallLogs200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], AccountCallLogs200ApplicationJson.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], AccountCallLogs200ApplicationJson.prototype, "totalRecords", void 0);
    return AccountCallLogs200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AccountCallLogs200ApplicationJson = AccountCallLogs200ApplicationJson;
var AccountCallLogsRequest = /** @class */ (function (_super) {
    __extends(AccountCallLogsRequest, _super);
    function AccountCallLogsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountCallLogsQueryParams)
    ], AccountCallLogsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountCallLogsSecurity)
    ], AccountCallLogsRequest.prototype, "security", void 0);
    return AccountCallLogsRequest;
}(utils_1.SpeakeasyBase));
exports.AccountCallLogsRequest = AccountCallLogsRequest;
var AccountCallLogsResponse = /** @class */ (function (_super) {
    __extends(AccountCallLogsResponse, _super);
    function AccountCallLogsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AccountCallLogsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AccountCallLogsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AccountCallLogsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountCallLogs200ApplicationJson)
    ], AccountCallLogsResponse.prototype, "accountCallLogs200ApplicationJSONObject", void 0);
    return AccountCallLogsResponse;
}(utils_1.SpeakeasyBase));
exports.AccountCallLogsResponse = AccountCallLogsResponse;
