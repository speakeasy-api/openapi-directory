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
exports.ReportWebinarParticipantsResponse = exports.ReportWebinarParticipantsRequest = exports.ReportWebinarParticipants200ApplicationJson = exports.ReportWebinarParticipants200ApplicationJsonParticipants = exports.ReportWebinarParticipantsSecurity = exports.ReportWebinarParticipantsQueryParams = exports.ReportWebinarParticipantsIncludeFieldsEnum = exports.ReportWebinarParticipantsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReportWebinarParticipantsPathParams = /** @class */ (function (_super) {
    __extends(ReportWebinarParticipantsPathParams, _super);
    function ReportWebinarParticipantsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", String)
    ], ReportWebinarParticipantsPathParams.prototype, "webinarId", void 0);
    return ReportWebinarParticipantsPathParams;
}(utils_1.SpeakeasyBase));
exports.ReportWebinarParticipantsPathParams = ReportWebinarParticipantsPathParams;
var ReportWebinarParticipantsIncludeFieldsEnum;
(function (ReportWebinarParticipantsIncludeFieldsEnum) {
    ReportWebinarParticipantsIncludeFieldsEnum["RegistrantId"] = "registrant_id";
})(ReportWebinarParticipantsIncludeFieldsEnum = exports.ReportWebinarParticipantsIncludeFieldsEnum || (exports.ReportWebinarParticipantsIncludeFieldsEnum = {}));
var ReportWebinarParticipantsQueryParams = /** @class */ (function (_super) {
    __extends(ReportWebinarParticipantsQueryParams, _super);
    function ReportWebinarParticipantsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_fields" }),
        __metadata("design:type", String)
    ], ReportWebinarParticipantsQueryParams.prototype, "includeFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ReportWebinarParticipantsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ReportWebinarParticipantsQueryParams.prototype, "pageSize", void 0);
    return ReportWebinarParticipantsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ReportWebinarParticipantsQueryParams = ReportWebinarParticipantsQueryParams;
var ReportWebinarParticipantsSecurity = /** @class */ (function (_super) {
    __extends(ReportWebinarParticipantsSecurity, _super);
    function ReportWebinarParticipantsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ReportWebinarParticipantsSecurity.prototype, "oAuth", void 0);
    return ReportWebinarParticipantsSecurity;
}(utils_1.SpeakeasyBase));
exports.ReportWebinarParticipantsSecurity = ReportWebinarParticipantsSecurity;
var ReportWebinarParticipants200ApplicationJsonParticipants = /** @class */ (function (_super) {
    __extends(ReportWebinarParticipants200ApplicationJsonParticipants, _super);
    function ReportWebinarParticipants200ApplicationJsonParticipants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customer_key" }),
        __metadata("design:type", String)
    ], ReportWebinarParticipants200ApplicationJsonParticipants.prototype, "customerKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], ReportWebinarParticipants200ApplicationJsonParticipants.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=failover" }),
        __metadata("design:type", Boolean)
    ], ReportWebinarParticipants200ApplicationJsonParticipants.prototype, "failover", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ReportWebinarParticipants200ApplicationJsonParticipants.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_time" }),
        __metadata("design:type", Date)
    ], ReportWebinarParticipants200ApplicationJsonParticipants.prototype, "joinTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=leave_time" }),
        __metadata("design:type", Date)
    ], ReportWebinarParticipants200ApplicationJsonParticipants.prototype, "leaveTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReportWebinarParticipants200ApplicationJsonParticipants.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_email" }),
        __metadata("design:type", String)
    ], ReportWebinarParticipants200ApplicationJsonParticipants.prototype, "userEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_id" }),
        __metadata("design:type", String)
    ], ReportWebinarParticipants200ApplicationJsonParticipants.prototype, "userId", void 0);
    return ReportWebinarParticipants200ApplicationJsonParticipants;
}(utils_1.SpeakeasyBase));
exports.ReportWebinarParticipants200ApplicationJsonParticipants = ReportWebinarParticipants200ApplicationJsonParticipants;
// ReportWebinarParticipants200ApplicationJson
/**
 * Pagination object.
**/
var ReportWebinarParticipants200ApplicationJson = /** @class */ (function (_super) {
    __extends(ReportWebinarParticipants200ApplicationJson, _super);
    function ReportWebinarParticipants200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ReportWebinarParticipants200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], ReportWebinarParticipants200ApplicationJson.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ReportWebinarParticipants200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants", elemType: ReportWebinarParticipants200ApplicationJsonParticipants }),
        __metadata("design:type", Array)
    ], ReportWebinarParticipants200ApplicationJson.prototype, "participants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], ReportWebinarParticipants200ApplicationJson.prototype, "totalRecords", void 0);
    return ReportWebinarParticipants200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ReportWebinarParticipants200ApplicationJson = ReportWebinarParticipants200ApplicationJson;
var ReportWebinarParticipantsRequest = /** @class */ (function (_super) {
    __extends(ReportWebinarParticipantsRequest, _super);
    function ReportWebinarParticipantsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportWebinarParticipantsPathParams)
    ], ReportWebinarParticipantsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportWebinarParticipantsQueryParams)
    ], ReportWebinarParticipantsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportWebinarParticipantsSecurity)
    ], ReportWebinarParticipantsRequest.prototype, "security", void 0);
    return ReportWebinarParticipantsRequest;
}(utils_1.SpeakeasyBase));
exports.ReportWebinarParticipantsRequest = ReportWebinarParticipantsRequest;
var ReportWebinarParticipantsResponse = /** @class */ (function (_super) {
    __extends(ReportWebinarParticipantsResponse, _super);
    function ReportWebinarParticipantsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ReportWebinarParticipantsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReportWebinarParticipantsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReportWebinarParticipantsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportWebinarParticipants200ApplicationJson)
    ], ReportWebinarParticipantsResponse.prototype, "reportWebinarParticipants200ApplicationJSONObject", void 0);
    return ReportWebinarParticipantsResponse;
}(utils_1.SpeakeasyBase));
exports.ReportWebinarParticipantsResponse = ReportWebinarParticipantsResponse;
