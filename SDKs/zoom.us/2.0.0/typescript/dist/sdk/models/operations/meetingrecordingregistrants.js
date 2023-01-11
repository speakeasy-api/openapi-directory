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
exports.MeetingRecordingRegistrantsResponse = exports.MeetingRecordingRegistrantsRequest = exports.MeetingRecordingRegistrantsRecordingRegistrationList = exports.MeetingRecordingRegistrantsRecordingRegistrationListRegistrants = exports.MeetingRecordingRegistrantsRecordingRegistrationListRegistrantsCustomQuestions = exports.MeetingRecordingRegistrantsSecurity = exports.MeetingRecordingRegistrantsQueryParams = exports.MeetingRecordingRegistrantsStatusEnum = exports.MeetingRecordingRegistrantsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MeetingRecordingRegistrantsPathParams = /** @class */ (function (_super) {
    __extends(MeetingRecordingRegistrantsPathParams, _super);
    function MeetingRecordingRegistrantsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", Number)
    ], MeetingRecordingRegistrantsPathParams.prototype, "meetingId", void 0);
    return MeetingRecordingRegistrantsPathParams;
}(utils_1.SpeakeasyBase));
exports.MeetingRecordingRegistrantsPathParams = MeetingRecordingRegistrantsPathParams;
var MeetingRecordingRegistrantsStatusEnum;
(function (MeetingRecordingRegistrantsStatusEnum) {
    MeetingRecordingRegistrantsStatusEnum["Pending"] = "pending";
    MeetingRecordingRegistrantsStatusEnum["Approved"] = "approved";
    MeetingRecordingRegistrantsStatusEnum["Denied"] = "denied";
})(MeetingRecordingRegistrantsStatusEnum = exports.MeetingRecordingRegistrantsStatusEnum || (exports.MeetingRecordingRegistrantsStatusEnum = {}));
var MeetingRecordingRegistrantsQueryParams = /** @class */ (function (_super) {
    __extends(MeetingRecordingRegistrantsQueryParams, _super);
    function MeetingRecordingRegistrantsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_number" }),
        __metadata("design:type", Number)
    ], MeetingRecordingRegistrantsQueryParams.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], MeetingRecordingRegistrantsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantsQueryParams.prototype, "status", void 0);
    return MeetingRecordingRegistrantsQueryParams;
}(utils_1.SpeakeasyBase));
exports.MeetingRecordingRegistrantsQueryParams = MeetingRecordingRegistrantsQueryParams;
var MeetingRecordingRegistrantsSecurity = /** @class */ (function (_super) {
    __extends(MeetingRecordingRegistrantsSecurity, _super);
    function MeetingRecordingRegistrantsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], MeetingRecordingRegistrantsSecurity.prototype, "oAuth", void 0);
    return MeetingRecordingRegistrantsSecurity;
}(utils_1.SpeakeasyBase));
exports.MeetingRecordingRegistrantsSecurity = MeetingRecordingRegistrantsSecurity;
// MeetingRecordingRegistrantsRecordingRegistrationListRegistrantsCustomQuestions
/**
 * Custom Question.
**/
var MeetingRecordingRegistrantsRecordingRegistrationListRegistrantsCustomQuestions = /** @class */ (function (_super) {
    __extends(MeetingRecordingRegistrantsRecordingRegistrationListRegistrantsCustomQuestions, _super);
    function MeetingRecordingRegistrantsRecordingRegistrationListRegistrantsCustomQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantsRecordingRegistrationListRegistrantsCustomQuestions.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantsRecordingRegistrationListRegistrantsCustomQuestions.prototype, "value", void 0);
    return MeetingRecordingRegistrantsRecordingRegistrationListRegistrantsCustomQuestions;
}(utils_1.SpeakeasyBase));
exports.MeetingRecordingRegistrantsRecordingRegistrationListRegistrantsCustomQuestions = MeetingRecordingRegistrantsRecordingRegistrationListRegistrantsCustomQuestions;
// MeetingRecordingRegistrantsRecordingRegistrationListRegistrants
/**
 * Registrant base object.
**/
var MeetingRecordingRegistrantsRecordingRegistrationListRegistrants = /** @class */ (function (_super) {
    __extends(MeetingRecordingRegistrantsRecordingRegistrationListRegistrants, _super);
    function MeetingRecordingRegistrantsRecordingRegistrationListRegistrants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantsRecordingRegistrationListRegistrants.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantsRecordingRegistrationListRegistrants.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantsRecordingRegistrationListRegistrants.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantsRecordingRegistrationListRegistrants.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_questions", elemType: MeetingRecordingRegistrantsRecordingRegistrationListRegistrantsCustomQuestions }),
        __metadata("design:type", Array)
    ], MeetingRecordingRegistrantsRecordingRegistrationListRegistrants.prototype, "customQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantsRecordingRegistrationListRegistrants.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantsRecordingRegistrationListRegistrants.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantsRecordingRegistrationListRegistrants.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=industry" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantsRecordingRegistrationListRegistrants.prototype, "industry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=job_title" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantsRecordingRegistrationListRegistrants.prototype, "jobTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantsRecordingRegistrationListRegistrants.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=no_of_employees" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantsRecordingRegistrationListRegistrants.prototype, "noOfEmployees", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=org" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantsRecordingRegistrationListRegistrants.prototype, "org", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantsRecordingRegistrationListRegistrants.prototype, "phone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchasing_time_frame" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantsRecordingRegistrationListRegistrants.prototype, "purchasingTimeFrame", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role_in_purchase_process" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantsRecordingRegistrationListRegistrants.prototype, "roleInPurchaseProcess", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantsRecordingRegistrationListRegistrants.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantsRecordingRegistrationListRegistrants.prototype, "zip", void 0);
    return MeetingRecordingRegistrantsRecordingRegistrationListRegistrants;
}(utils_1.SpeakeasyBase));
exports.MeetingRecordingRegistrantsRecordingRegistrationListRegistrants = MeetingRecordingRegistrantsRecordingRegistrationListRegistrants;
// MeetingRecordingRegistrantsRecordingRegistrationList
/**
 * Pagination Object.
**/
var MeetingRecordingRegistrantsRecordingRegistrationList = /** @class */ (function (_super) {
    __extends(MeetingRecordingRegistrantsRecordingRegistrationList, _super);
    function MeetingRecordingRegistrantsRecordingRegistrationList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantsRecordingRegistrationList.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], MeetingRecordingRegistrantsRecordingRegistrationList.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_number" }),
        __metadata("design:type", Number)
    ], MeetingRecordingRegistrantsRecordingRegistrationList.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], MeetingRecordingRegistrantsRecordingRegistrationList.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants", elemType: MeetingRecordingRegistrantsRecordingRegistrationListRegistrants }),
        __metadata("design:type", Array)
    ], MeetingRecordingRegistrantsRecordingRegistrationList.prototype, "registrants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], MeetingRecordingRegistrantsRecordingRegistrationList.prototype, "totalRecords", void 0);
    return MeetingRecordingRegistrantsRecordingRegistrationList;
}(utils_1.SpeakeasyBase));
exports.MeetingRecordingRegistrantsRecordingRegistrationList = MeetingRecordingRegistrantsRecordingRegistrationList;
var MeetingRecordingRegistrantsRequest = /** @class */ (function (_super) {
    __extends(MeetingRecordingRegistrantsRequest, _super);
    function MeetingRecordingRegistrantsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRecordingRegistrantsPathParams)
    ], MeetingRecordingRegistrantsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRecordingRegistrantsQueryParams)
    ], MeetingRecordingRegistrantsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRecordingRegistrantsSecurity)
    ], MeetingRecordingRegistrantsRequest.prototype, "security", void 0);
    return MeetingRecordingRegistrantsRequest;
}(utils_1.SpeakeasyBase));
exports.MeetingRecordingRegistrantsRequest = MeetingRecordingRegistrantsRequest;
var MeetingRecordingRegistrantsResponse = /** @class */ (function (_super) {
    __extends(MeetingRecordingRegistrantsResponse, _super);
    function MeetingRecordingRegistrantsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], MeetingRecordingRegistrantsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRecordingRegistrantsRecordingRegistrationList)
    ], MeetingRecordingRegistrantsResponse.prototype, "recordingRegistrationList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MeetingRecordingRegistrantsResponse.prototype, "statusCode", void 0);
    return MeetingRecordingRegistrantsResponse;
}(utils_1.SpeakeasyBase));
exports.MeetingRecordingRegistrantsResponse = MeetingRecordingRegistrantsResponse;
