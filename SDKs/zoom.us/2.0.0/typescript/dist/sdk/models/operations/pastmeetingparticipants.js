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
exports.PastMeetingParticipantsResponse = exports.PastMeetingParticipantsRequest = exports.PastMeetingParticipants200ApplicationJson = exports.PastMeetingParticipants200ApplicationJsonParticipants = exports.PastMeetingParticipantsSecurity = exports.PastMeetingParticipantsQueryParams = exports.PastMeetingParticipantsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PastMeetingParticipantsPathParams = /** @class */ (function (_super) {
    __extends(PastMeetingParticipantsPathParams, _super);
    function PastMeetingParticipantsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingUUID" }),
        __metadata("design:type", String)
    ], PastMeetingParticipantsPathParams.prototype, "meetingUUID", void 0);
    return PastMeetingParticipantsPathParams;
}(utils_1.SpeakeasyBase));
exports.PastMeetingParticipantsPathParams = PastMeetingParticipantsPathParams;
var PastMeetingParticipantsQueryParams = /** @class */ (function (_super) {
    __extends(PastMeetingParticipantsQueryParams, _super);
    function PastMeetingParticipantsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], PastMeetingParticipantsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], PastMeetingParticipantsQueryParams.prototype, "pageSize", void 0);
    return PastMeetingParticipantsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PastMeetingParticipantsQueryParams = PastMeetingParticipantsQueryParams;
var PastMeetingParticipantsSecurity = /** @class */ (function (_super) {
    __extends(PastMeetingParticipantsSecurity, _super);
    function PastMeetingParticipantsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], PastMeetingParticipantsSecurity.prototype, "oAuth", void 0);
    return PastMeetingParticipantsSecurity;
}(utils_1.SpeakeasyBase));
exports.PastMeetingParticipantsSecurity = PastMeetingParticipantsSecurity;
var PastMeetingParticipants200ApplicationJsonParticipants = /** @class */ (function (_super) {
    __extends(PastMeetingParticipants200ApplicationJsonParticipants, _super);
    function PastMeetingParticipants200ApplicationJsonParticipants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PastMeetingParticipants200ApplicationJsonParticipants.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PastMeetingParticipants200ApplicationJsonParticipants.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_email" }),
        __metadata("design:type", String)
    ], PastMeetingParticipants200ApplicationJsonParticipants.prototype, "userEmail", void 0);
    return PastMeetingParticipants200ApplicationJsonParticipants;
}(utils_1.SpeakeasyBase));
exports.PastMeetingParticipants200ApplicationJsonParticipants = PastMeetingParticipants200ApplicationJsonParticipants;
// PastMeetingParticipants200ApplicationJson
/**
 * Pagination object.
**/
var PastMeetingParticipants200ApplicationJson = /** @class */ (function (_super) {
    __extends(PastMeetingParticipants200ApplicationJson, _super);
    function PastMeetingParticipants200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], PastMeetingParticipants200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], PastMeetingParticipants200ApplicationJson.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], PastMeetingParticipants200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants", elemType: PastMeetingParticipants200ApplicationJsonParticipants }),
        __metadata("design:type", Array)
    ], PastMeetingParticipants200ApplicationJson.prototype, "participants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], PastMeetingParticipants200ApplicationJson.prototype, "totalRecords", void 0);
    return PastMeetingParticipants200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PastMeetingParticipants200ApplicationJson = PastMeetingParticipants200ApplicationJson;
var PastMeetingParticipantsRequest = /** @class */ (function (_super) {
    __extends(PastMeetingParticipantsRequest, _super);
    function PastMeetingParticipantsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PastMeetingParticipantsPathParams)
    ], PastMeetingParticipantsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PastMeetingParticipantsQueryParams)
    ], PastMeetingParticipantsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PastMeetingParticipantsSecurity)
    ], PastMeetingParticipantsRequest.prototype, "security", void 0);
    return PastMeetingParticipantsRequest;
}(utils_1.SpeakeasyBase));
exports.PastMeetingParticipantsRequest = PastMeetingParticipantsRequest;
var PastMeetingParticipantsResponse = /** @class */ (function (_super) {
    __extends(PastMeetingParticipantsResponse, _super);
    function PastMeetingParticipantsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PastMeetingParticipantsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PastMeetingParticipantsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PastMeetingParticipantsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PastMeetingParticipants200ApplicationJson)
    ], PastMeetingParticipantsResponse.prototype, "pastMeetingParticipants200ApplicationJSONObject", void 0);
    return PastMeetingParticipantsResponse;
}(utils_1.SpeakeasyBase));
exports.PastMeetingParticipantsResponse = PastMeetingParticipantsResponse;
