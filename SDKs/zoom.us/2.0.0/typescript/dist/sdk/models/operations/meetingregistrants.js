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
exports.MeetingRegistrantsResponse = exports.MeetingRegistrantsRequest = exports.MeetingRegistrantsRegistrationList = exports.MeetingRegistrantsRegistrationListRegistrants = exports.MeetingRegistrantsRegistrationListRegistrantsCustomQuestions = exports.MeetingRegistrantsSecurity = exports.MeetingRegistrantsQueryParams = exports.MeetingRegistrantsStatusEnum = exports.MeetingRegistrantsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MeetingRegistrantsPathParams = /** @class */ (function (_super) {
    __extends(MeetingRegistrantsPathParams, _super);
    function MeetingRegistrantsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", Number)
    ], MeetingRegistrantsPathParams.prototype, "meetingId", void 0);
    return MeetingRegistrantsPathParams;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantsPathParams = MeetingRegistrantsPathParams;
var MeetingRegistrantsStatusEnum;
(function (MeetingRegistrantsStatusEnum) {
    MeetingRegistrantsStatusEnum["Pending"] = "pending";
    MeetingRegistrantsStatusEnum["Approved"] = "approved";
    MeetingRegistrantsStatusEnum["Denied"] = "denied";
})(MeetingRegistrantsStatusEnum = exports.MeetingRegistrantsStatusEnum || (exports.MeetingRegistrantsStatusEnum = {}));
var MeetingRegistrantsQueryParams = /** @class */ (function (_super) {
    __extends(MeetingRegistrantsQueryParams, _super);
    function MeetingRegistrantsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=occurrence_id" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsQueryParams.prototype, "occurrenceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_number" }),
        __metadata("design:type", Number)
    ], MeetingRegistrantsQueryParams.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], MeetingRegistrantsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsQueryParams.prototype, "status", void 0);
    return MeetingRegistrantsQueryParams;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantsQueryParams = MeetingRegistrantsQueryParams;
var MeetingRegistrantsSecurity = /** @class */ (function (_super) {
    __extends(MeetingRegistrantsSecurity, _super);
    function MeetingRegistrantsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], MeetingRegistrantsSecurity.prototype, "oAuth", void 0);
    return MeetingRegistrantsSecurity;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantsSecurity = MeetingRegistrantsSecurity;
// MeetingRegistrantsRegistrationListRegistrantsCustomQuestions
/**
 * Custom Question.
**/
var MeetingRegistrantsRegistrationListRegistrantsCustomQuestions = /** @class */ (function (_super) {
    __extends(MeetingRegistrantsRegistrationListRegistrantsCustomQuestions, _super);
    function MeetingRegistrantsRegistrationListRegistrantsCustomQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsRegistrationListRegistrantsCustomQuestions.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsRegistrationListRegistrantsCustomQuestions.prototype, "value", void 0);
    return MeetingRegistrantsRegistrationListRegistrantsCustomQuestions;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantsRegistrationListRegistrantsCustomQuestions = MeetingRegistrantsRegistrationListRegistrantsCustomQuestions;
// MeetingRegistrantsRegistrationListRegistrants
/**
 * Registrant base object.
**/
var MeetingRegistrantsRegistrationListRegistrants = /** @class */ (function (_super) {
    __extends(MeetingRegistrantsRegistrationListRegistrants, _super);
    function MeetingRegistrantsRegistrationListRegistrants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsRegistrationListRegistrants.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsRegistrationListRegistrants.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsRegistrationListRegistrants.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsRegistrationListRegistrants.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=create_time" }),
        __metadata("design:type", Date)
    ], MeetingRegistrantsRegistrationListRegistrants.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_questions", elemType: MeetingRegistrantsRegistrationListRegistrantsCustomQuestions }),
        __metadata("design:type", Array)
    ], MeetingRegistrantsRegistrationListRegistrants.prototype, "customQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsRegistrationListRegistrants.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsRegistrationListRegistrants.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsRegistrationListRegistrants.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=industry" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsRegistrationListRegistrants.prototype, "industry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=job_title" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsRegistrationListRegistrants.prototype, "jobTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_url" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsRegistrationListRegistrants.prototype, "joinUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsRegistrationListRegistrants.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=no_of_employees" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsRegistrationListRegistrants.prototype, "noOfEmployees", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=org" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsRegistrationListRegistrants.prototype, "org", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsRegistrationListRegistrants.prototype, "phone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchasing_time_frame" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsRegistrationListRegistrants.prototype, "purchasingTimeFrame", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role_in_purchase_process" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsRegistrationListRegistrants.prototype, "roleInPurchaseProcess", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsRegistrationListRegistrants.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsRegistrationListRegistrants.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsRegistrationListRegistrants.prototype, "zip", void 0);
    return MeetingRegistrantsRegistrationListRegistrants;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantsRegistrationListRegistrants = MeetingRegistrantsRegistrationListRegistrants;
// MeetingRegistrantsRegistrationList
/**
 * Pagination Object.
**/
var MeetingRegistrantsRegistrationList = /** @class */ (function (_super) {
    __extends(MeetingRegistrantsRegistrationList, _super);
    function MeetingRegistrantsRegistrationList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsRegistrationList.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], MeetingRegistrantsRegistrationList.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_number" }),
        __metadata("design:type", Number)
    ], MeetingRegistrantsRegistrationList.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], MeetingRegistrantsRegistrationList.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants", elemType: MeetingRegistrantsRegistrationListRegistrants }),
        __metadata("design:type", Array)
    ], MeetingRegistrantsRegistrationList.prototype, "registrants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], MeetingRegistrantsRegistrationList.prototype, "totalRecords", void 0);
    return MeetingRegistrantsRegistrationList;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantsRegistrationList = MeetingRegistrantsRegistrationList;
var MeetingRegistrantsRequest = /** @class */ (function (_super) {
    __extends(MeetingRegistrantsRequest, _super);
    function MeetingRegistrantsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRegistrantsPathParams)
    ], MeetingRegistrantsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRegistrantsQueryParams)
    ], MeetingRegistrantsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRegistrantsSecurity)
    ], MeetingRegistrantsRequest.prototype, "security", void 0);
    return MeetingRegistrantsRequest;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantsRequest = MeetingRegistrantsRequest;
var MeetingRegistrantsResponse = /** @class */ (function (_super) {
    __extends(MeetingRegistrantsResponse, _super);
    function MeetingRegistrantsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], MeetingRegistrantsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MeetingRegistrantsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRegistrantsRegistrationList)
    ], MeetingRegistrantsResponse.prototype, "registrationList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MeetingRegistrantsResponse.prototype, "statusCode", void 0);
    return MeetingRegistrantsResponse;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantsResponse = MeetingRegistrantsResponse;
