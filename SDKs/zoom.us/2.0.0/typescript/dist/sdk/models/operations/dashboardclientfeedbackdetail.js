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
exports.DashboardClientFeedbackDetailResponse = exports.DashboardClientFeedbackDetailRequest = exports.DashboardClientFeedbackDetail200ApplicationJson = exports.DashboardClientFeedbackDetail200ApplicationJsonClientFeedbackDetails = exports.DashboardClientFeedbackDetailSecurity = exports.DashboardClientFeedbackDetailQueryParams = exports.DashboardClientFeedbackDetailPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DashboardClientFeedbackDetailPathParams = /** @class */ (function (_super) {
    __extends(DashboardClientFeedbackDetailPathParams, _super);
    function DashboardClientFeedbackDetailPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=feedbackId" }),
        __metadata("design:type", String)
    ], DashboardClientFeedbackDetailPathParams.prototype, "feedbackId", void 0);
    return DashboardClientFeedbackDetailPathParams;
}(utils_1.SpeakeasyBase));
exports.DashboardClientFeedbackDetailPathParams = DashboardClientFeedbackDetailPathParams;
var DashboardClientFeedbackDetailQueryParams = /** @class */ (function (_super) {
    __extends(DashboardClientFeedbackDetailQueryParams, _super);
    function DashboardClientFeedbackDetailQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Date)
    ], DashboardClientFeedbackDetailQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], DashboardClientFeedbackDetailQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], DashboardClientFeedbackDetailQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", Date)
    ], DashboardClientFeedbackDetailQueryParams.prototype, "to", void 0);
    return DashboardClientFeedbackDetailQueryParams;
}(utils_1.SpeakeasyBase));
exports.DashboardClientFeedbackDetailQueryParams = DashboardClientFeedbackDetailQueryParams;
var DashboardClientFeedbackDetailSecurity = /** @class */ (function (_super) {
    __extends(DashboardClientFeedbackDetailSecurity, _super);
    function DashboardClientFeedbackDetailSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], DashboardClientFeedbackDetailSecurity.prototype, "oAuth", void 0);
    return DashboardClientFeedbackDetailSecurity;
}(utils_1.SpeakeasyBase));
exports.DashboardClientFeedbackDetailSecurity = DashboardClientFeedbackDetailSecurity;
var DashboardClientFeedbackDetail200ApplicationJsonClientFeedbackDetails = /** @class */ (function (_super) {
    __extends(DashboardClientFeedbackDetail200ApplicationJsonClientFeedbackDetails, _super);
    function DashboardClientFeedbackDetail200ApplicationJsonClientFeedbackDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], DashboardClientFeedbackDetail200ApplicationJsonClientFeedbackDetails.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_id" }),
        __metadata("design:type", String)
    ], DashboardClientFeedbackDetail200ApplicationJsonClientFeedbackDetails.prototype, "meetingId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participant_name" }),
        __metadata("design:type", String)
    ], DashboardClientFeedbackDetail200ApplicationJsonClientFeedbackDetails.prototype, "participantName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time" }),
        __metadata("design:type", Date)
    ], DashboardClientFeedbackDetail200ApplicationJsonClientFeedbackDetails.prototype, "time", void 0);
    return DashboardClientFeedbackDetail200ApplicationJsonClientFeedbackDetails;
}(utils_1.SpeakeasyBase));
exports.DashboardClientFeedbackDetail200ApplicationJsonClientFeedbackDetails = DashboardClientFeedbackDetail200ApplicationJsonClientFeedbackDetails;
// DashboardClientFeedbackDetail200ApplicationJson
/**
 * Pagination object.
**/
var DashboardClientFeedbackDetail200ApplicationJson = /** @class */ (function (_super) {
    __extends(DashboardClientFeedbackDetail200ApplicationJson, _super);
    function DashboardClientFeedbackDetail200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_feedback_details", elemType: DashboardClientFeedbackDetail200ApplicationJsonClientFeedbackDetails }),
        __metadata("design:type", Array)
    ], DashboardClientFeedbackDetail200ApplicationJson.prototype, "clientFeedbackDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", Date)
    ], DashboardClientFeedbackDetail200ApplicationJson.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], DashboardClientFeedbackDetail200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], DashboardClientFeedbackDetail200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", Date)
    ], DashboardClientFeedbackDetail200ApplicationJson.prototype, "to", void 0);
    return DashboardClientFeedbackDetail200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DashboardClientFeedbackDetail200ApplicationJson = DashboardClientFeedbackDetail200ApplicationJson;
var DashboardClientFeedbackDetailRequest = /** @class */ (function (_super) {
    __extends(DashboardClientFeedbackDetailRequest, _super);
    function DashboardClientFeedbackDetailRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardClientFeedbackDetailPathParams)
    ], DashboardClientFeedbackDetailRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardClientFeedbackDetailQueryParams)
    ], DashboardClientFeedbackDetailRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardClientFeedbackDetailSecurity)
    ], DashboardClientFeedbackDetailRequest.prototype, "security", void 0);
    return DashboardClientFeedbackDetailRequest;
}(utils_1.SpeakeasyBase));
exports.DashboardClientFeedbackDetailRequest = DashboardClientFeedbackDetailRequest;
var DashboardClientFeedbackDetailResponse = /** @class */ (function (_super) {
    __extends(DashboardClientFeedbackDetailResponse, _super);
    function DashboardClientFeedbackDetailResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DashboardClientFeedbackDetailResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DashboardClientFeedbackDetailResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DashboardClientFeedbackDetailResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardClientFeedbackDetail200ApplicationJson)
    ], DashboardClientFeedbackDetailResponse.prototype, "dashboardClientFeedbackDetail200ApplicationJSONObject", void 0);
    return DashboardClientFeedbackDetailResponse;
}(utils_1.SpeakeasyBase));
exports.DashboardClientFeedbackDetailResponse = DashboardClientFeedbackDetailResponse;
