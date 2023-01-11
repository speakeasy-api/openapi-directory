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
exports.DashboardIssueDetailZoomRoomResponse = exports.DashboardIssueDetailZoomRoomRequest = exports.DashboardIssueDetailZoomRoom200ApplicationJson = exports.DashboardIssueDetailZoomRoom200ApplicationJsonIssueDetails = exports.DashboardIssueDetailZoomRoomSecurity = exports.DashboardIssueDetailZoomRoomQueryParams = exports.DashboardIssueDetailZoomRoomPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DashboardIssueDetailZoomRoomPathParams = /** @class */ (function (_super) {
    __extends(DashboardIssueDetailZoomRoomPathParams, _super);
    function DashboardIssueDetailZoomRoomPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=zoomroomId" }),
        __metadata("design:type", String)
    ], DashboardIssueDetailZoomRoomPathParams.prototype, "zoomroomId", void 0);
    return DashboardIssueDetailZoomRoomPathParams;
}(utils_1.SpeakeasyBase));
exports.DashboardIssueDetailZoomRoomPathParams = DashboardIssueDetailZoomRoomPathParams;
var DashboardIssueDetailZoomRoomQueryParams = /** @class */ (function (_super) {
    __extends(DashboardIssueDetailZoomRoomQueryParams, _super);
    function DashboardIssueDetailZoomRoomQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Date)
    ], DashboardIssueDetailZoomRoomQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], DashboardIssueDetailZoomRoomQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], DashboardIssueDetailZoomRoomQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", Date)
    ], DashboardIssueDetailZoomRoomQueryParams.prototype, "to", void 0);
    return DashboardIssueDetailZoomRoomQueryParams;
}(utils_1.SpeakeasyBase));
exports.DashboardIssueDetailZoomRoomQueryParams = DashboardIssueDetailZoomRoomQueryParams;
var DashboardIssueDetailZoomRoomSecurity = /** @class */ (function (_super) {
    __extends(DashboardIssueDetailZoomRoomSecurity, _super);
    function DashboardIssueDetailZoomRoomSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], DashboardIssueDetailZoomRoomSecurity.prototype, "oAuth", void 0);
    return DashboardIssueDetailZoomRoomSecurity;
}(utils_1.SpeakeasyBase));
exports.DashboardIssueDetailZoomRoomSecurity = DashboardIssueDetailZoomRoomSecurity;
var DashboardIssueDetailZoomRoom200ApplicationJsonIssueDetails = /** @class */ (function (_super) {
    __extends(DashboardIssueDetailZoomRoom200ApplicationJsonIssueDetails, _super);
    function DashboardIssueDetailZoomRoom200ApplicationJsonIssueDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issue" }),
        __metadata("design:type", String)
    ], DashboardIssueDetailZoomRoom200ApplicationJsonIssueDetails.prototype, "issue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time" }),
        __metadata("design:type", Date)
    ], DashboardIssueDetailZoomRoom200ApplicationJsonIssueDetails.prototype, "time", void 0);
    return DashboardIssueDetailZoomRoom200ApplicationJsonIssueDetails;
}(utils_1.SpeakeasyBase));
exports.DashboardIssueDetailZoomRoom200ApplicationJsonIssueDetails = DashboardIssueDetailZoomRoom200ApplicationJsonIssueDetails;
// DashboardIssueDetailZoomRoom200ApplicationJson
/**
 * Pagination object.
**/
var DashboardIssueDetailZoomRoom200ApplicationJson = /** @class */ (function (_super) {
    __extends(DashboardIssueDetailZoomRoom200ApplicationJson, _super);
    function DashboardIssueDetailZoomRoom200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", Date)
    ], DashboardIssueDetailZoomRoom200ApplicationJson.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issue_details", elemType: DashboardIssueDetailZoomRoom200ApplicationJsonIssueDetails }),
        __metadata("design:type", Array)
    ], DashboardIssueDetailZoomRoom200ApplicationJson.prototype, "issueDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], DashboardIssueDetailZoomRoom200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], DashboardIssueDetailZoomRoom200ApplicationJson.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], DashboardIssueDetailZoomRoom200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", Date)
    ], DashboardIssueDetailZoomRoom200ApplicationJson.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], DashboardIssueDetailZoomRoom200ApplicationJson.prototype, "totalRecords", void 0);
    return DashboardIssueDetailZoomRoom200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DashboardIssueDetailZoomRoom200ApplicationJson = DashboardIssueDetailZoomRoom200ApplicationJson;
var DashboardIssueDetailZoomRoomRequest = /** @class */ (function (_super) {
    __extends(DashboardIssueDetailZoomRoomRequest, _super);
    function DashboardIssueDetailZoomRoomRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardIssueDetailZoomRoomPathParams)
    ], DashboardIssueDetailZoomRoomRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardIssueDetailZoomRoomQueryParams)
    ], DashboardIssueDetailZoomRoomRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardIssueDetailZoomRoomSecurity)
    ], DashboardIssueDetailZoomRoomRequest.prototype, "security", void 0);
    return DashboardIssueDetailZoomRoomRequest;
}(utils_1.SpeakeasyBase));
exports.DashboardIssueDetailZoomRoomRequest = DashboardIssueDetailZoomRoomRequest;
var DashboardIssueDetailZoomRoomResponse = /** @class */ (function (_super) {
    __extends(DashboardIssueDetailZoomRoomResponse, _super);
    function DashboardIssueDetailZoomRoomResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DashboardIssueDetailZoomRoomResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DashboardIssueDetailZoomRoomResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DashboardIssueDetailZoomRoomResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardIssueDetailZoomRoom200ApplicationJson)
    ], DashboardIssueDetailZoomRoomResponse.prototype, "dashboardIssueDetailZoomRoom200ApplicationJSONObject", void 0);
    return DashboardIssueDetailZoomRoomResponse;
}(utils_1.SpeakeasyBase));
exports.DashboardIssueDetailZoomRoomResponse = DashboardIssueDetailZoomRoomResponse;
