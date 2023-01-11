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
exports.DashboardZoomRoomIssueResponse = exports.DashboardZoomRoomIssueRequest = exports.DashboardZoomRoomIssue200ApplicationJson = exports.DashboardZoomRoomIssue200ApplicationJsonIssues = exports.DashboardZoomRoomIssueSecurity = exports.DashboardZoomRoomIssueQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DashboardZoomRoomIssueQueryParams = /** @class */ (function (_super) {
    __extends(DashboardZoomRoomIssueQueryParams, _super);
    function DashboardZoomRoomIssueQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Date)
    ], DashboardZoomRoomIssueQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", Date)
    ], DashboardZoomRoomIssueQueryParams.prototype, "to", void 0);
    return DashboardZoomRoomIssueQueryParams;
}(utils_1.SpeakeasyBase));
exports.DashboardZoomRoomIssueQueryParams = DashboardZoomRoomIssueQueryParams;
var DashboardZoomRoomIssueSecurity = /** @class */ (function (_super) {
    __extends(DashboardZoomRoomIssueSecurity, _super);
    function DashboardZoomRoomIssueSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], DashboardZoomRoomIssueSecurity.prototype, "oAuth", void 0);
    return DashboardZoomRoomIssueSecurity;
}(utils_1.SpeakeasyBase));
exports.DashboardZoomRoomIssueSecurity = DashboardZoomRoomIssueSecurity;
var DashboardZoomRoomIssue200ApplicationJsonIssues = /** @class */ (function (_super) {
    __extends(DashboardZoomRoomIssue200ApplicationJsonIssues, _super);
    function DashboardZoomRoomIssue200ApplicationJsonIssues() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issue_name" }),
        __metadata("design:type", String)
    ], DashboardZoomRoomIssue200ApplicationJsonIssues.prototype, "issueName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zoom_rooms_count" }),
        __metadata("design:type", Number)
    ], DashboardZoomRoomIssue200ApplicationJsonIssues.prototype, "zoomRoomsCount", void 0);
    return DashboardZoomRoomIssue200ApplicationJsonIssues;
}(utils_1.SpeakeasyBase));
exports.DashboardZoomRoomIssue200ApplicationJsonIssues = DashboardZoomRoomIssue200ApplicationJsonIssues;
var DashboardZoomRoomIssue200ApplicationJson = /** @class */ (function (_super) {
    __extends(DashboardZoomRoomIssue200ApplicationJson, _super);
    function DashboardZoomRoomIssue200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", Date)
    ], DashboardZoomRoomIssue200ApplicationJson.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issues", elemType: DashboardZoomRoomIssue200ApplicationJsonIssues }),
        __metadata("design:type", Array)
    ], DashboardZoomRoomIssue200ApplicationJson.prototype, "issues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", Date)
    ], DashboardZoomRoomIssue200ApplicationJson.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], DashboardZoomRoomIssue200ApplicationJson.prototype, "totalRecords", void 0);
    return DashboardZoomRoomIssue200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DashboardZoomRoomIssue200ApplicationJson = DashboardZoomRoomIssue200ApplicationJson;
var DashboardZoomRoomIssueRequest = /** @class */ (function (_super) {
    __extends(DashboardZoomRoomIssueRequest, _super);
    function DashboardZoomRoomIssueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardZoomRoomIssueQueryParams)
    ], DashboardZoomRoomIssueRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardZoomRoomIssueSecurity)
    ], DashboardZoomRoomIssueRequest.prototype, "security", void 0);
    return DashboardZoomRoomIssueRequest;
}(utils_1.SpeakeasyBase));
exports.DashboardZoomRoomIssueRequest = DashboardZoomRoomIssueRequest;
var DashboardZoomRoomIssueResponse = /** @class */ (function (_super) {
    __extends(DashboardZoomRoomIssueResponse, _super);
    function DashboardZoomRoomIssueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DashboardZoomRoomIssueResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DashboardZoomRoomIssueResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DashboardZoomRoomIssueResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardZoomRoomIssue200ApplicationJson)
    ], DashboardZoomRoomIssueResponse.prototype, "dashboardZoomRoomIssue200ApplicationJSONObject", void 0);
    return DashboardZoomRoomIssueResponse;
}(utils_1.SpeakeasyBase));
exports.DashboardZoomRoomIssueResponse = DashboardZoomRoomIssueResponse;
