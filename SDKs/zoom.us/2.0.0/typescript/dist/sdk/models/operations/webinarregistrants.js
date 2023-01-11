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
exports.WebinarRegistrantsResponse = exports.WebinarRegistrantsRequest = exports.WebinarRegistrantsRegistrationList = exports.WebinarRegistrantsRegistrationListRegistrants = exports.WebinarRegistrantsRegistrationListRegistrantsCustomQuestions = exports.WebinarRegistrantsSecurity = exports.WebinarRegistrantsQueryParams = exports.WebinarRegistrantsStatusEnum = exports.WebinarRegistrantsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var WebinarRegistrantsPathParams = /** @class */ (function (_super) {
    __extends(WebinarRegistrantsPathParams, _super);
    function WebinarRegistrantsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", Number)
    ], WebinarRegistrantsPathParams.prototype, "webinarId", void 0);
    return WebinarRegistrantsPathParams;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantsPathParams = WebinarRegistrantsPathParams;
var WebinarRegistrantsStatusEnum;
(function (WebinarRegistrantsStatusEnum) {
    WebinarRegistrantsStatusEnum["Pending"] = "pending";
    WebinarRegistrantsStatusEnum["Approved"] = "approved";
    WebinarRegistrantsStatusEnum["Denied"] = "denied";
})(WebinarRegistrantsStatusEnum = exports.WebinarRegistrantsStatusEnum || (exports.WebinarRegistrantsStatusEnum = {}));
var WebinarRegistrantsQueryParams = /** @class */ (function (_super) {
    __extends(WebinarRegistrantsQueryParams, _super);
    function WebinarRegistrantsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], WebinarRegistrantsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=occurrence_id" }),
        __metadata("design:type", String)
    ], WebinarRegistrantsQueryParams.prototype, "occurrenceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_number" }),
        __metadata("design:type", Number)
    ], WebinarRegistrantsQueryParams.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], WebinarRegistrantsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], WebinarRegistrantsQueryParams.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=tracking_source_id" }),
        __metadata("design:type", String)
    ], WebinarRegistrantsQueryParams.prototype, "trackingSourceId", void 0);
    return WebinarRegistrantsQueryParams;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantsQueryParams = WebinarRegistrantsQueryParams;
var WebinarRegistrantsSecurity = /** @class */ (function (_super) {
    __extends(WebinarRegistrantsSecurity, _super);
    function WebinarRegistrantsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], WebinarRegistrantsSecurity.prototype, "oAuth", void 0);
    return WebinarRegistrantsSecurity;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantsSecurity = WebinarRegistrantsSecurity;
// WebinarRegistrantsRegistrationListRegistrantsCustomQuestions
/**
 * Custom Question.
**/
var WebinarRegistrantsRegistrationListRegistrantsCustomQuestions = /** @class */ (function (_super) {
    __extends(WebinarRegistrantsRegistrationListRegistrantsCustomQuestions, _super);
    function WebinarRegistrantsRegistrationListRegistrantsCustomQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], WebinarRegistrantsRegistrationListRegistrantsCustomQuestions.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], WebinarRegistrantsRegistrationListRegistrantsCustomQuestions.prototype, "value", void 0);
    return WebinarRegistrantsRegistrationListRegistrantsCustomQuestions;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantsRegistrationListRegistrantsCustomQuestions = WebinarRegistrantsRegistrationListRegistrantsCustomQuestions;
// WebinarRegistrantsRegistrationListRegistrants
/**
 * Registrant base object.
**/
var WebinarRegistrantsRegistrationListRegistrants = /** @class */ (function (_super) {
    __extends(WebinarRegistrantsRegistrationListRegistrants, _super);
    function WebinarRegistrantsRegistrationListRegistrants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], WebinarRegistrantsRegistrationListRegistrants.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], WebinarRegistrantsRegistrationListRegistrants.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], WebinarRegistrantsRegistrationListRegistrants.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], WebinarRegistrantsRegistrationListRegistrants.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=create_time" }),
        __metadata("design:type", Date)
    ], WebinarRegistrantsRegistrationListRegistrants.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_questions", elemType: WebinarRegistrantsRegistrationListRegistrantsCustomQuestions }),
        __metadata("design:type", Array)
    ], WebinarRegistrantsRegistrationListRegistrants.prototype, "customQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], WebinarRegistrantsRegistrationListRegistrants.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], WebinarRegistrantsRegistrationListRegistrants.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], WebinarRegistrantsRegistrationListRegistrants.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=industry" }),
        __metadata("design:type", String)
    ], WebinarRegistrantsRegistrationListRegistrants.prototype, "industry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=job_title" }),
        __metadata("design:type", String)
    ], WebinarRegistrantsRegistrationListRegistrants.prototype, "jobTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_url" }),
        __metadata("design:type", String)
    ], WebinarRegistrantsRegistrationListRegistrants.prototype, "joinUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], WebinarRegistrantsRegistrationListRegistrants.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=no_of_employees" }),
        __metadata("design:type", String)
    ], WebinarRegistrantsRegistrationListRegistrants.prototype, "noOfEmployees", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=org" }),
        __metadata("design:type", String)
    ], WebinarRegistrantsRegistrationListRegistrants.prototype, "org", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], WebinarRegistrantsRegistrationListRegistrants.prototype, "phone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchasing_time_frame" }),
        __metadata("design:type", String)
    ], WebinarRegistrantsRegistrationListRegistrants.prototype, "purchasingTimeFrame", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role_in_purchase_process" }),
        __metadata("design:type", String)
    ], WebinarRegistrantsRegistrationListRegistrants.prototype, "roleInPurchaseProcess", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], WebinarRegistrantsRegistrationListRegistrants.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], WebinarRegistrantsRegistrationListRegistrants.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], WebinarRegistrantsRegistrationListRegistrants.prototype, "zip", void 0);
    return WebinarRegistrantsRegistrationListRegistrants;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantsRegistrationListRegistrants = WebinarRegistrantsRegistrationListRegistrants;
// WebinarRegistrantsRegistrationList
/**
 * Pagination Object.
**/
var WebinarRegistrantsRegistrationList = /** @class */ (function (_super) {
    __extends(WebinarRegistrantsRegistrationList, _super);
    function WebinarRegistrantsRegistrationList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], WebinarRegistrantsRegistrationList.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], WebinarRegistrantsRegistrationList.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_number" }),
        __metadata("design:type", Number)
    ], WebinarRegistrantsRegistrationList.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], WebinarRegistrantsRegistrationList.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants", elemType: WebinarRegistrantsRegistrationListRegistrants }),
        __metadata("design:type", Array)
    ], WebinarRegistrantsRegistrationList.prototype, "registrants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], WebinarRegistrantsRegistrationList.prototype, "totalRecords", void 0);
    return WebinarRegistrantsRegistrationList;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantsRegistrationList = WebinarRegistrantsRegistrationList;
var WebinarRegistrantsRequest = /** @class */ (function (_super) {
    __extends(WebinarRegistrantsRequest, _super);
    function WebinarRegistrantsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarRegistrantsPathParams)
    ], WebinarRegistrantsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarRegistrantsQueryParams)
    ], WebinarRegistrantsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarRegistrantsSecurity)
    ], WebinarRegistrantsRequest.prototype, "security", void 0);
    return WebinarRegistrantsRequest;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantsRequest = WebinarRegistrantsRequest;
var WebinarRegistrantsResponse = /** @class */ (function (_super) {
    __extends(WebinarRegistrantsResponse, _super);
    function WebinarRegistrantsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], WebinarRegistrantsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], WebinarRegistrantsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarRegistrantsRegistrationList)
    ], WebinarRegistrantsResponse.prototype, "registrationList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], WebinarRegistrantsResponse.prototype, "statusCode", void 0);
    return WebinarRegistrantsResponse;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantsResponse = WebinarRegistrantsResponse;
