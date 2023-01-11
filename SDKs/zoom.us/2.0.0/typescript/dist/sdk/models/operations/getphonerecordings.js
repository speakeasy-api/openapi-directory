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
exports.GetPhoneRecordingsResponse = exports.GetPhoneRecordingsRequest = exports.GetPhoneRecordings200ApplicationJson = exports.GetPhoneRecordings200ApplicationJsonRecordings = exports.GetPhoneRecordings200ApplicationJsonRecordingsSite = exports.GetPhoneRecordings200ApplicationJsonRecordingsOwner = exports.GetPhoneRecordings200ApplicationJsonRecordingsOwnerTypeEnum = exports.GetPhoneRecordings200ApplicationJsonRecordingsDirectionEnum = exports.GetPhoneRecordings200ApplicationJsonRecordingsCallerNumberTypeEnum = exports.GetPhoneRecordings200ApplicationJsonRecordingsCalleeNumberTypeEnum = exports.GetPhoneRecordingsSecurity = exports.GetPhoneRecordingsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetPhoneRecordingsQueryParams = /** @class */ (function (_super) {
    __extends(GetPhoneRecordingsQueryParams, _super);
    function GetPhoneRecordingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", String)
    ], GetPhoneRecordingsQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], GetPhoneRecordingsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=owner_type" }),
        __metadata("design:type", String)
    ], GetPhoneRecordingsQueryParams.prototype, "ownerType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetPhoneRecordingsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=recording_type" }),
        __metadata("design:type", String)
    ], GetPhoneRecordingsQueryParams.prototype, "recordingType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=site_id" }),
        __metadata("design:type", String)
    ], GetPhoneRecordingsQueryParams.prototype, "siteId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", String)
    ], GetPhoneRecordingsQueryParams.prototype, "to", void 0);
    return GetPhoneRecordingsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetPhoneRecordingsQueryParams = GetPhoneRecordingsQueryParams;
var GetPhoneRecordingsSecurity = /** @class */ (function (_super) {
    __extends(GetPhoneRecordingsSecurity, _super);
    function GetPhoneRecordingsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], GetPhoneRecordingsSecurity.prototype, "oAuth", void 0);
    return GetPhoneRecordingsSecurity;
}(utils_1.SpeakeasyBase));
exports.GetPhoneRecordingsSecurity = GetPhoneRecordingsSecurity;
var GetPhoneRecordings200ApplicationJsonRecordingsCalleeNumberTypeEnum;
(function (GetPhoneRecordings200ApplicationJsonRecordingsCalleeNumberTypeEnum) {
    GetPhoneRecordings200ApplicationJsonRecordingsCalleeNumberTypeEnum["One"] = "1";
    GetPhoneRecordings200ApplicationJsonRecordingsCalleeNumberTypeEnum["Two"] = "2";
})(GetPhoneRecordings200ApplicationJsonRecordingsCalleeNumberTypeEnum = exports.GetPhoneRecordings200ApplicationJsonRecordingsCalleeNumberTypeEnum || (exports.GetPhoneRecordings200ApplicationJsonRecordingsCalleeNumberTypeEnum = {}));
var GetPhoneRecordings200ApplicationJsonRecordingsCallerNumberTypeEnum;
(function (GetPhoneRecordings200ApplicationJsonRecordingsCallerNumberTypeEnum) {
    GetPhoneRecordings200ApplicationJsonRecordingsCallerNumberTypeEnum["One"] = "1";
    GetPhoneRecordings200ApplicationJsonRecordingsCallerNumberTypeEnum["Two"] = "2";
})(GetPhoneRecordings200ApplicationJsonRecordingsCallerNumberTypeEnum = exports.GetPhoneRecordings200ApplicationJsonRecordingsCallerNumberTypeEnum || (exports.GetPhoneRecordings200ApplicationJsonRecordingsCallerNumberTypeEnum = {}));
var GetPhoneRecordings200ApplicationJsonRecordingsDirectionEnum;
(function (GetPhoneRecordings200ApplicationJsonRecordingsDirectionEnum) {
    GetPhoneRecordings200ApplicationJsonRecordingsDirectionEnum["Inbound"] = "inbound";
    GetPhoneRecordings200ApplicationJsonRecordingsDirectionEnum["Outbound"] = "outbound";
})(GetPhoneRecordings200ApplicationJsonRecordingsDirectionEnum = exports.GetPhoneRecordings200ApplicationJsonRecordingsDirectionEnum || (exports.GetPhoneRecordings200ApplicationJsonRecordingsDirectionEnum = {}));
var GetPhoneRecordings200ApplicationJsonRecordingsOwnerTypeEnum;
(function (GetPhoneRecordings200ApplicationJsonRecordingsOwnerTypeEnum) {
    GetPhoneRecordings200ApplicationJsonRecordingsOwnerTypeEnum["User"] = "user";
    GetPhoneRecordings200ApplicationJsonRecordingsOwnerTypeEnum["CallQueue"] = "call queue";
})(GetPhoneRecordings200ApplicationJsonRecordingsOwnerTypeEnum = exports.GetPhoneRecordings200ApplicationJsonRecordingsOwnerTypeEnum || (exports.GetPhoneRecordings200ApplicationJsonRecordingsOwnerTypeEnum = {}));
// GetPhoneRecordings200ApplicationJsonRecordingsOwner
/**
 * The owner of the recording.
**/
var GetPhoneRecordings200ApplicationJsonRecordingsOwner = /** @class */ (function (_super) {
    __extends(GetPhoneRecordings200ApplicationJsonRecordingsOwner, _super);
    function GetPhoneRecordings200ApplicationJsonRecordingsOwner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", String)
    ], GetPhoneRecordings200ApplicationJsonRecordingsOwner.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetPhoneRecordings200ApplicationJsonRecordingsOwner.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetPhoneRecordings200ApplicationJsonRecordingsOwner.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetPhoneRecordings200ApplicationJsonRecordingsOwner.prototype, "type", void 0);
    return GetPhoneRecordings200ApplicationJsonRecordingsOwner;
}(utils_1.SpeakeasyBase));
exports.GetPhoneRecordings200ApplicationJsonRecordingsOwner = GetPhoneRecordings200ApplicationJsonRecordingsOwner;
var GetPhoneRecordings200ApplicationJsonRecordingsSite = /** @class */ (function (_super) {
    __extends(GetPhoneRecordings200ApplicationJsonRecordingsSite, _super);
    function GetPhoneRecordings200ApplicationJsonRecordingsSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetPhoneRecordings200ApplicationJsonRecordingsSite.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetPhoneRecordings200ApplicationJsonRecordingsSite.prototype, "name", void 0);
    return GetPhoneRecordings200ApplicationJsonRecordingsSite;
}(utils_1.SpeakeasyBase));
exports.GetPhoneRecordings200ApplicationJsonRecordingsSite = GetPhoneRecordings200ApplicationJsonRecordingsSite;
var GetPhoneRecordings200ApplicationJsonRecordings = /** @class */ (function (_super) {
    __extends(GetPhoneRecordings200ApplicationJsonRecordings, _super);
    function GetPhoneRecordings200ApplicationJsonRecordings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callee_name" }),
        __metadata("design:type", String)
    ], GetPhoneRecordings200ApplicationJsonRecordings.prototype, "calleeName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callee_number" }),
        __metadata("design:type", String)
    ], GetPhoneRecordings200ApplicationJsonRecordings.prototype, "calleeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callee_number_type" }),
        __metadata("design:type", String)
    ], GetPhoneRecordings200ApplicationJsonRecordings.prototype, "calleeNumberType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caller_name" }),
        __metadata("design:type", String)
    ], GetPhoneRecordings200ApplicationJsonRecordings.prototype, "callerName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caller_number" }),
        __metadata("design:type", String)
    ], GetPhoneRecordings200ApplicationJsonRecordings.prototype, "callerNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caller_number_type" }),
        __metadata("design:type", String)
    ], GetPhoneRecordings200ApplicationJsonRecordings.prototype, "callerNumberType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", Date)
    ], GetPhoneRecordings200ApplicationJsonRecordings.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], GetPhoneRecordings200ApplicationJsonRecordings.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download_url" }),
        __metadata("design:type", String)
    ], GetPhoneRecordings200ApplicationJsonRecordings.prototype, "downloadUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], GetPhoneRecordings200ApplicationJsonRecordings.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetPhoneRecordings200ApplicationJsonRecordings.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=owner" }),
        __metadata("design:type", GetPhoneRecordings200ApplicationJsonRecordingsOwner)
    ], GetPhoneRecordings200ApplicationJsonRecordings.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recording_type" }),
        __metadata("design:type", String)
    ], GetPhoneRecordings200ApplicationJsonRecordings.prototype, "recordingType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site" }),
        __metadata("design:type", GetPhoneRecordings200ApplicationJsonRecordingsSite)
    ], GetPhoneRecordings200ApplicationJsonRecordings.prototype, "site", void 0);
    return GetPhoneRecordings200ApplicationJsonRecordings;
}(utils_1.SpeakeasyBase));
exports.GetPhoneRecordings200ApplicationJsonRecordings = GetPhoneRecordings200ApplicationJsonRecordings;
var GetPhoneRecordings200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPhoneRecordings200ApplicationJson, _super);
    function GetPhoneRecordings200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], GetPhoneRecordings200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], GetPhoneRecordings200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recordings", elemType: GetPhoneRecordings200ApplicationJsonRecordings }),
        __metadata("design:type", Array)
    ], GetPhoneRecordings200ApplicationJson.prototype, "recordings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], GetPhoneRecordings200ApplicationJson.prototype, "totalRecords", void 0);
    return GetPhoneRecordings200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetPhoneRecordings200ApplicationJson = GetPhoneRecordings200ApplicationJson;
var GetPhoneRecordingsRequest = /** @class */ (function (_super) {
    __extends(GetPhoneRecordingsRequest, _super);
    function GetPhoneRecordingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPhoneRecordingsQueryParams)
    ], GetPhoneRecordingsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPhoneRecordingsSecurity)
    ], GetPhoneRecordingsRequest.prototype, "security", void 0);
    return GetPhoneRecordingsRequest;
}(utils_1.SpeakeasyBase));
exports.GetPhoneRecordingsRequest = GetPhoneRecordingsRequest;
var GetPhoneRecordingsResponse = /** @class */ (function (_super) {
    __extends(GetPhoneRecordingsResponse, _super);
    function GetPhoneRecordingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetPhoneRecordingsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPhoneRecordingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPhoneRecordingsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPhoneRecordings200ApplicationJson)
    ], GetPhoneRecordingsResponse.prototype, "getPhoneRecordings200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPhoneRecordingsResponse.prototype, "getPhoneRecordings400ApplicationJSONAny", void 0);
    return GetPhoneRecordingsResponse;
}(utils_1.SpeakeasyBase));
exports.GetPhoneRecordingsResponse = GetPhoneRecordingsResponse;
