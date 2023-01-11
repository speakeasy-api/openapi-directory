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
exports.PhoneUserCallLogsResponse = exports.PhoneUserCallLogsRequest = exports.PhoneUserCallLogs200ApplicationJson = exports.PhoneUserCallLogs200ApplicationJsonCallLogs = exports.PhoneUserCallLogs200ApplicationJsonCallLogsSite = exports.PhoneUserCallLogs200ApplicationJsonCallLogsOutgoingBy = exports.PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo = exports.PhoneUserCallLogs200ApplicationJsonCallLogsForwardedBy = exports.PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy = exports.PhoneUserCallLogsSecurity = exports.PhoneUserCallLogsQueryParams = exports.PhoneUserCallLogsTypeEnum = exports.PhoneUserCallLogsTimeTypeEnum = exports.PhoneUserCallLogsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PhoneUserCallLogsPathParams = /** @class */ (function (_super) {
    __extends(PhoneUserCallLogsPathParams, _super);
    function PhoneUserCallLogsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogsPathParams.prototype, "userId", void 0);
    return PhoneUserCallLogsPathParams;
}(utils_1.SpeakeasyBase));
exports.PhoneUserCallLogsPathParams = PhoneUserCallLogsPathParams;
var PhoneUserCallLogsTimeTypeEnum;
(function (PhoneUserCallLogsTimeTypeEnum) {
    PhoneUserCallLogsTimeTypeEnum["StartTime"] = "startTime";
    PhoneUserCallLogsTimeTypeEnum["EndTime"] = "endTime";
})(PhoneUserCallLogsTimeTypeEnum = exports.PhoneUserCallLogsTimeTypeEnum || (exports.PhoneUserCallLogsTimeTypeEnum = {}));
var PhoneUserCallLogsTypeEnum;
(function (PhoneUserCallLogsTypeEnum) {
    PhoneUserCallLogsTypeEnum["All"] = "all";
    PhoneUserCallLogsTypeEnum["Missed"] = "missed";
})(PhoneUserCallLogsTypeEnum = exports.PhoneUserCallLogsTypeEnum || (exports.PhoneUserCallLogsTypeEnum = {}));
var PhoneUserCallLogsQueryParams = /** @class */ (function (_super) {
    __extends(PhoneUserCallLogsQueryParams, _super);
    function PhoneUserCallLogsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Date)
    ], PhoneUserCallLogsQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], PhoneUserCallLogsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=phone_number" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogsQueryParams.prototype, "phoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=time_type" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogsQueryParams.prototype, "timeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", Date)
    ], PhoneUserCallLogsQueryParams.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogsQueryParams.prototype, "type", void 0);
    return PhoneUserCallLogsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PhoneUserCallLogsQueryParams = PhoneUserCallLogsQueryParams;
var PhoneUserCallLogsSecurity = /** @class */ (function (_super) {
    __extends(PhoneUserCallLogsSecurity, _super);
    function PhoneUserCallLogsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], PhoneUserCallLogsSecurity.prototype, "oAuth", void 0);
    return PhoneUserCallLogsSecurity;
}(utils_1.SpeakeasyBase));
exports.PhoneUserCallLogsSecurity = PhoneUserCallLogsSecurity;
// PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy
/**
 * Indicates who accepted the call.
**/
var PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy = /** @class */ (function (_super) {
    __extends(PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy, _super);
    function PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number_type" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy.prototype, "numberType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy.prototype, "phoneNumber", void 0);
    return PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy;
}(utils_1.SpeakeasyBase));
exports.PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy = PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy;
// PhoneUserCallLogs200ApplicationJsonCallLogsForwardedBy
/**
 * Indicates where the call was forwarded from.
**/
var PhoneUserCallLogs200ApplicationJsonCallLogsForwardedBy = /** @class */ (function (_super) {
    __extends(PhoneUserCallLogs200ApplicationJsonCallLogsForwardedBy, _super);
    function PhoneUserCallLogs200ApplicationJsonCallLogsForwardedBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogsForwardedBy.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogsForwardedBy.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogsForwardedBy.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number_type" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogsForwardedBy.prototype, "numberType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogsForwardedBy.prototype, "phoneNumber", void 0);
    return PhoneUserCallLogs200ApplicationJsonCallLogsForwardedBy;
}(utils_1.SpeakeasyBase));
exports.PhoneUserCallLogs200ApplicationJsonCallLogsForwardedBy = PhoneUserCallLogs200ApplicationJsonCallLogsForwardedBy;
// PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo
/**
 * Indicates who the call was forwarded to.
**/
var PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo = /** @class */ (function (_super) {
    __extends(PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo, _super);
    function PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number_type" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo.prototype, "numberType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo.prototype, "phoneNumber", void 0);
    return PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo;
}(utils_1.SpeakeasyBase));
exports.PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo = PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo;
var PhoneUserCallLogs200ApplicationJsonCallLogsOutgoingBy = /** @class */ (function (_super) {
    __extends(PhoneUserCallLogs200ApplicationJsonCallLogsOutgoingBy, _super);
    function PhoneUserCallLogs200ApplicationJsonCallLogsOutgoingBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogsOutgoingBy.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogsOutgoingBy.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogsOutgoingBy.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number_type" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogsOutgoingBy.prototype, "numberType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogsOutgoingBy.prototype, "phoneNumber", void 0);
    return PhoneUserCallLogs200ApplicationJsonCallLogsOutgoingBy;
}(utils_1.SpeakeasyBase));
exports.PhoneUserCallLogs200ApplicationJsonCallLogsOutgoingBy = PhoneUserCallLogs200ApplicationJsonCallLogsOutgoingBy;
var PhoneUserCallLogs200ApplicationJsonCallLogsSite = /** @class */ (function (_super) {
    __extends(PhoneUserCallLogs200ApplicationJsonCallLogsSite, _super);
    function PhoneUserCallLogs200ApplicationJsonCallLogsSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogsSite.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogsSite.prototype, "name", void 0);
    return PhoneUserCallLogs200ApplicationJsonCallLogsSite;
}(utils_1.SpeakeasyBase));
exports.PhoneUserCallLogs200ApplicationJsonCallLogsSite = PhoneUserCallLogs200ApplicationJsonCallLogsSite;
var PhoneUserCallLogs200ApplicationJsonCallLogs = /** @class */ (function (_super) {
    __extends(PhoneUserCallLogs200ApplicationJsonCallLogs, _super);
    function PhoneUserCallLogs200ApplicationJsonCallLogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accepted_by" }),
        __metadata("design:type", PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy)
    ], PhoneUserCallLogs200ApplicationJsonCallLogs.prototype, "acceptedBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_id" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogs.prototype, "callId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callee_name" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogs.prototype, "calleeName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callee_number" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogs.prototype, "calleeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callee_number_type" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogs.prototype, "calleeNumberType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caller_name" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogs.prototype, "callerName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caller_number" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogs.prototype, "callerNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caller_number_type" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogs.prototype, "callerNumberType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=charge" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogs.prototype, "charge", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_code" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogs.prototype, "clientCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogs.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogs.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], PhoneUserCallLogs200ApplicationJsonCallLogs.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=forwarded_by" }),
        __metadata("design:type", PhoneUserCallLogs200ApplicationJsonCallLogsForwardedBy)
    ], PhoneUserCallLogs200ApplicationJsonCallLogs.prototype, "forwardedBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=forwarded_to" }),
        __metadata("design:type", PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo)
    ], PhoneUserCallLogs200ApplicationJsonCallLogs.prototype, "forwardedTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_recording" }),
        __metadata("design:type", Boolean)
    ], PhoneUserCallLogs200ApplicationJsonCallLogs.prototype, "hasRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_voicemail" }),
        __metadata("design:type", Boolean)
    ], PhoneUserCallLogs200ApplicationJsonCallLogs.prototype, "hasVoicemail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogs.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outgoing_by" }),
        __metadata("design:type", PhoneUserCallLogs200ApplicationJsonCallLogsOutgoingBy)
    ], PhoneUserCallLogs200ApplicationJsonCallLogs.prototype, "outgoingBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogs.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rate" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogs.prototype, "rate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_type" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogs.prototype, "recordingType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogs.prototype, "result", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site" }),
        __metadata("design:type", PhoneUserCallLogs200ApplicationJsonCallLogsSite)
    ], PhoneUserCallLogs200ApplicationJsonCallLogs.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_id" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJsonCallLogs.prototype, "userId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waiting_time" }),
        __metadata("design:type", Number)
    ], PhoneUserCallLogs200ApplicationJsonCallLogs.prototype, "waitingTime", void 0);
    return PhoneUserCallLogs200ApplicationJsonCallLogs;
}(utils_1.SpeakeasyBase));
exports.PhoneUserCallLogs200ApplicationJsonCallLogs = PhoneUserCallLogs200ApplicationJsonCallLogs;
// PhoneUserCallLogs200ApplicationJson
/**
 * Phone User Call Logs
**/
var PhoneUserCallLogs200ApplicationJson = /** @class */ (function (_super) {
    __extends(PhoneUserCallLogs200ApplicationJson, _super);
    function PhoneUserCallLogs200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_logs", elemType: PhoneUserCallLogs200ApplicationJsonCallLogs }),
        __metadata("design:type", Array)
    ], PhoneUserCallLogs200ApplicationJson.prototype, "callLogs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJson.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], PhoneUserCallLogs200ApplicationJson.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], PhoneUserCallLogs200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], PhoneUserCallLogs200ApplicationJson.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], PhoneUserCallLogs200ApplicationJson.prototype, "totalRecords", void 0);
    return PhoneUserCallLogs200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PhoneUserCallLogs200ApplicationJson = PhoneUserCallLogs200ApplicationJson;
var PhoneUserCallLogsRequest = /** @class */ (function (_super) {
    __extends(PhoneUserCallLogsRequest, _super);
    function PhoneUserCallLogsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PhoneUserCallLogsPathParams)
    ], PhoneUserCallLogsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PhoneUserCallLogsQueryParams)
    ], PhoneUserCallLogsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PhoneUserCallLogsSecurity)
    ], PhoneUserCallLogsRequest.prototype, "security", void 0);
    return PhoneUserCallLogsRequest;
}(utils_1.SpeakeasyBase));
exports.PhoneUserCallLogsRequest = PhoneUserCallLogsRequest;
var PhoneUserCallLogsResponse = /** @class */ (function (_super) {
    __extends(PhoneUserCallLogsResponse, _super);
    function PhoneUserCallLogsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PhoneUserCallLogsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PhoneUserCallLogsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PhoneUserCallLogsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PhoneUserCallLogs200ApplicationJson)
    ], PhoneUserCallLogsResponse.prototype, "phoneUserCallLogs200ApplicationJSONObject", void 0);
    return PhoneUserCallLogsResponse;
}(utils_1.SpeakeasyBase));
exports.PhoneUserCallLogsResponse = PhoneUserCallLogsResponse;
