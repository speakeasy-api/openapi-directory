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
exports.DashboardWebinarParticipantShareResponse = exports.DashboardWebinarParticipantShareRequest = exports.DashboardWebinarParticipantShare200ApplicationJson = exports.DashboardWebinarParticipantShare200ApplicationJsonParticipants = exports.DashboardWebinarParticipantShare200ApplicationJsonParticipantsDetails = exports.DashboardWebinarParticipantShareSecurity = exports.DashboardWebinarParticipantShareQueryParams = exports.DashboardWebinarParticipantShareTypeEnum = exports.DashboardWebinarParticipantSharePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DashboardWebinarParticipantSharePathParams = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantSharePathParams, _super);
    function DashboardWebinarParticipantSharePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantSharePathParams.prototype, "webinarId", void 0);
    return DashboardWebinarParticipantSharePathParams;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantSharePathParams = DashboardWebinarParticipantSharePathParams;
var DashboardWebinarParticipantShareTypeEnum;
(function (DashboardWebinarParticipantShareTypeEnum) {
    DashboardWebinarParticipantShareTypeEnum["Past"] = "past";
    DashboardWebinarParticipantShareTypeEnum["Live"] = "live";
})(DashboardWebinarParticipantShareTypeEnum = exports.DashboardWebinarParticipantShareTypeEnum || (exports.DashboardWebinarParticipantShareTypeEnum = {}));
var DashboardWebinarParticipantShareQueryParams = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantShareQueryParams, _super);
    function DashboardWebinarParticipantShareQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantShareQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], DashboardWebinarParticipantShareQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantShareQueryParams.prototype, "type", void 0);
    return DashboardWebinarParticipantShareQueryParams;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantShareQueryParams = DashboardWebinarParticipantShareQueryParams;
var DashboardWebinarParticipantShareSecurity = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantShareSecurity, _super);
    function DashboardWebinarParticipantShareSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], DashboardWebinarParticipantShareSecurity.prototype, "oAuth", void 0);
    return DashboardWebinarParticipantShareSecurity;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantShareSecurity = DashboardWebinarParticipantShareSecurity;
var DashboardWebinarParticipantShare200ApplicationJsonParticipantsDetails = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantShare200ApplicationJsonParticipantsDetails, _super);
    function DashboardWebinarParticipantShare200ApplicationJsonParticipantsDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantShare200ApplicationJsonParticipantsDetails.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_time" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantShare200ApplicationJsonParticipantsDetails.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantShare200ApplicationJsonParticipantsDetails.prototype, "startTime", void 0);
    return DashboardWebinarParticipantShare200ApplicationJsonParticipantsDetails;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantShare200ApplicationJsonParticipantsDetails = DashboardWebinarParticipantShare200ApplicationJsonParticipantsDetails;
var DashboardWebinarParticipantShare200ApplicationJsonParticipants = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantShare200ApplicationJsonParticipants, _super);
    function DashboardWebinarParticipantShare200ApplicationJsonParticipants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=details", elemType: DashboardWebinarParticipantShare200ApplicationJsonParticipantsDetails }),
        __metadata("design:type", Array)
    ], DashboardWebinarParticipantShare200ApplicationJsonParticipants.prototype, "details", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantShare200ApplicationJsonParticipants.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_id" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantShare200ApplicationJsonParticipants.prototype, "userId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_name" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantShare200ApplicationJsonParticipants.prototype, "userName", void 0);
    return DashboardWebinarParticipantShare200ApplicationJsonParticipants;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantShare200ApplicationJsonParticipants = DashboardWebinarParticipantShare200ApplicationJsonParticipants;
// DashboardWebinarParticipantShare200ApplicationJson
/**
 * Pagination object.
**/
var DashboardWebinarParticipantShare200ApplicationJson = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantShare200ApplicationJson, _super);
    function DashboardWebinarParticipantShare200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantShare200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], DashboardWebinarParticipantShare200ApplicationJson.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], DashboardWebinarParticipantShare200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants", elemType: DashboardWebinarParticipantShare200ApplicationJsonParticipants }),
        __metadata("design:type", Array)
    ], DashboardWebinarParticipantShare200ApplicationJson.prototype, "participants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], DashboardWebinarParticipantShare200ApplicationJson.prototype, "totalRecords", void 0);
    return DashboardWebinarParticipantShare200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantShare200ApplicationJson = DashboardWebinarParticipantShare200ApplicationJson;
var DashboardWebinarParticipantShareRequest = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantShareRequest, _super);
    function DashboardWebinarParticipantShareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardWebinarParticipantSharePathParams)
    ], DashboardWebinarParticipantShareRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardWebinarParticipantShareQueryParams)
    ], DashboardWebinarParticipantShareRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardWebinarParticipantShareSecurity)
    ], DashboardWebinarParticipantShareRequest.prototype, "security", void 0);
    return DashboardWebinarParticipantShareRequest;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantShareRequest = DashboardWebinarParticipantShareRequest;
var DashboardWebinarParticipantShareResponse = /** @class */ (function (_super) {
    __extends(DashboardWebinarParticipantShareResponse, _super);
    function DashboardWebinarParticipantShareResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DashboardWebinarParticipantShareResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DashboardWebinarParticipantShareResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DashboardWebinarParticipantShareResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardWebinarParticipantShare200ApplicationJson)
    ], DashboardWebinarParticipantShareResponse.prototype, "dashboardWebinarParticipantShare200ApplicationJSONObject", void 0);
    return DashboardWebinarParticipantShareResponse;
}(utils_1.SpeakeasyBase));
exports.DashboardWebinarParticipantShareResponse = DashboardWebinarParticipantShareResponse;
