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
exports.PhoneUserVoiceMailsResponse = exports.PhoneUserVoiceMailsRequest = exports.PhoneUserVoiceMails200ApplicationJson = exports.PhoneUserVoiceMails200ApplicationJsonVoiceMails = exports.PhoneUserVoiceMails200ApplicationJsonVoiceMailsStatusEnum = exports.PhoneUserVoiceMailsSecurity = exports.PhoneUserVoiceMailsQueryParams = exports.PhoneUserVoiceMailsStatusEnum = exports.PhoneUserVoiceMailsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PhoneUserVoiceMailsPathParams = /** @class */ (function (_super) {
    __extends(PhoneUserVoiceMailsPathParams, _super);
    function PhoneUserVoiceMailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], PhoneUserVoiceMailsPathParams.prototype, "userId", void 0);
    return PhoneUserVoiceMailsPathParams;
}(utils_1.SpeakeasyBase));
exports.PhoneUserVoiceMailsPathParams = PhoneUserVoiceMailsPathParams;
var PhoneUserVoiceMailsStatusEnum;
(function (PhoneUserVoiceMailsStatusEnum) {
    PhoneUserVoiceMailsStatusEnum["All"] = "all";
    PhoneUserVoiceMailsStatusEnum["Read"] = "read";
    PhoneUserVoiceMailsStatusEnum["Unread"] = "unread";
})(PhoneUserVoiceMailsStatusEnum = exports.PhoneUserVoiceMailsStatusEnum || (exports.PhoneUserVoiceMailsStatusEnum = {}));
var PhoneUserVoiceMailsQueryParams = /** @class */ (function (_super) {
    __extends(PhoneUserVoiceMailsQueryParams, _super);
    function PhoneUserVoiceMailsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Date)
    ], PhoneUserVoiceMailsQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], PhoneUserVoiceMailsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], PhoneUserVoiceMailsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], PhoneUserVoiceMailsQueryParams.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", Date)
    ], PhoneUserVoiceMailsQueryParams.prototype, "to", void 0);
    return PhoneUserVoiceMailsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PhoneUserVoiceMailsQueryParams = PhoneUserVoiceMailsQueryParams;
var PhoneUserVoiceMailsSecurity = /** @class */ (function (_super) {
    __extends(PhoneUserVoiceMailsSecurity, _super);
    function PhoneUserVoiceMailsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], PhoneUserVoiceMailsSecurity.prototype, "oAuth", void 0);
    return PhoneUserVoiceMailsSecurity;
}(utils_1.SpeakeasyBase));
exports.PhoneUserVoiceMailsSecurity = PhoneUserVoiceMailsSecurity;
var PhoneUserVoiceMails200ApplicationJsonVoiceMailsStatusEnum;
(function (PhoneUserVoiceMails200ApplicationJsonVoiceMailsStatusEnum) {
    PhoneUserVoiceMails200ApplicationJsonVoiceMailsStatusEnum["Read"] = "read";
    PhoneUserVoiceMails200ApplicationJsonVoiceMailsStatusEnum["Unread"] = "unread";
})(PhoneUserVoiceMails200ApplicationJsonVoiceMailsStatusEnum = exports.PhoneUserVoiceMails200ApplicationJsonVoiceMailsStatusEnum || (exports.PhoneUserVoiceMails200ApplicationJsonVoiceMailsStatusEnum = {}));
var PhoneUserVoiceMails200ApplicationJsonVoiceMails = /** @class */ (function (_super) {
    __extends(PhoneUserVoiceMails200ApplicationJsonVoiceMails, _super);
    function PhoneUserVoiceMails200ApplicationJsonVoiceMails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callee_name" }),
        __metadata("design:type", String)
    ], PhoneUserVoiceMails200ApplicationJsonVoiceMails.prototype, "calleeName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callee_number" }),
        __metadata("design:type", String)
    ], PhoneUserVoiceMails200ApplicationJsonVoiceMails.prototype, "calleeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callee_number_type" }),
        __metadata("design:type", String)
    ], PhoneUserVoiceMails200ApplicationJsonVoiceMails.prototype, "calleeNumberType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caller_name" }),
        __metadata("design:type", String)
    ], PhoneUserVoiceMails200ApplicationJsonVoiceMails.prototype, "callerName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caller_number" }),
        __metadata("design:type", String)
    ], PhoneUserVoiceMails200ApplicationJsonVoiceMails.prototype, "callerNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caller_number_type" }),
        __metadata("design:type", String)
    ], PhoneUserVoiceMails200ApplicationJsonVoiceMails.prototype, "callerNumberType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", String)
    ], PhoneUserVoiceMails200ApplicationJsonVoiceMails.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download_url" }),
        __metadata("design:type", String)
    ], PhoneUserVoiceMails200ApplicationJsonVoiceMails.prototype, "downloadUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], PhoneUserVoiceMails200ApplicationJsonVoiceMails.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PhoneUserVoiceMails200ApplicationJsonVoiceMails.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PhoneUserVoiceMails200ApplicationJsonVoiceMails.prototype, "status", void 0);
    return PhoneUserVoiceMails200ApplicationJsonVoiceMails;
}(utils_1.SpeakeasyBase));
exports.PhoneUserVoiceMails200ApplicationJsonVoiceMails = PhoneUserVoiceMails200ApplicationJsonVoiceMails;
// PhoneUserVoiceMails200ApplicationJson
/**
 * Phone User Voice Mails
**/
var PhoneUserVoiceMails200ApplicationJson = /** @class */ (function (_super) {
    __extends(PhoneUserVoiceMails200ApplicationJson, _super);
    function PhoneUserVoiceMails200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", Date)
    ], PhoneUserVoiceMails200ApplicationJson.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], PhoneUserVoiceMails200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], PhoneUserVoiceMails200ApplicationJson.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], PhoneUserVoiceMails200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", Date)
    ], PhoneUserVoiceMails200ApplicationJson.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], PhoneUserVoiceMails200ApplicationJson.prototype, "totalRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=voice_mails", elemType: PhoneUserVoiceMails200ApplicationJsonVoiceMails }),
        __metadata("design:type", Array)
    ], PhoneUserVoiceMails200ApplicationJson.prototype, "voiceMails", void 0);
    return PhoneUserVoiceMails200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PhoneUserVoiceMails200ApplicationJson = PhoneUserVoiceMails200ApplicationJson;
var PhoneUserVoiceMailsRequest = /** @class */ (function (_super) {
    __extends(PhoneUserVoiceMailsRequest, _super);
    function PhoneUserVoiceMailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PhoneUserVoiceMailsPathParams)
    ], PhoneUserVoiceMailsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PhoneUserVoiceMailsQueryParams)
    ], PhoneUserVoiceMailsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PhoneUserVoiceMailsSecurity)
    ], PhoneUserVoiceMailsRequest.prototype, "security", void 0);
    return PhoneUserVoiceMailsRequest;
}(utils_1.SpeakeasyBase));
exports.PhoneUserVoiceMailsRequest = PhoneUserVoiceMailsRequest;
var PhoneUserVoiceMailsResponse = /** @class */ (function (_super) {
    __extends(PhoneUserVoiceMailsResponse, _super);
    function PhoneUserVoiceMailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PhoneUserVoiceMailsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PhoneUserVoiceMailsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PhoneUserVoiceMailsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PhoneUserVoiceMails200ApplicationJson)
    ], PhoneUserVoiceMailsResponse.prototype, "phoneUserVoiceMails200ApplicationJSONObject", void 0);
    return PhoneUserVoiceMailsResponse;
}(utils_1.SpeakeasyBase));
exports.PhoneUserVoiceMailsResponse = PhoneUserVoiceMailsResponse;
