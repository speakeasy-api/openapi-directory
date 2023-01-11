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
exports.MeetingRegistrantCreateResponse = exports.MeetingRegistrantCreateRequest = exports.MeetingRegistrantCreate201ApplicationJson = exports.MeetingRegistrantCreateSecurity = exports.MeetingRegistrantCreateRequests = exports.MeetingRegistrantCreateMultipartFormData1 = exports.MeetingRegistrantCreateMultipartFormDataCustomQuestions = exports.MeetingRegistrantCreateApplicationJson = exports.MeetingRegistrantCreateApplicationJsonCustomQuestions = exports.MeetingRegistrantCreateQueryParams = exports.MeetingRegistrantCreatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MeetingRegistrantCreatePathParams = /** @class */ (function (_super) {
    __extends(MeetingRegistrantCreatePathParams, _super);
    function MeetingRegistrantCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", Number)
    ], MeetingRegistrantCreatePathParams.prototype, "meetingId", void 0);
    return MeetingRegistrantCreatePathParams;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantCreatePathParams = MeetingRegistrantCreatePathParams;
var MeetingRegistrantCreateQueryParams = /** @class */ (function (_super) {
    __extends(MeetingRegistrantCreateQueryParams, _super);
    function MeetingRegistrantCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=occurrence_ids" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateQueryParams.prototype, "occurrenceIds", void 0);
    return MeetingRegistrantCreateQueryParams;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantCreateQueryParams = MeetingRegistrantCreateQueryParams;
// MeetingRegistrantCreateApplicationJsonCustomQuestions
/**
 * Custom Question.
**/
var MeetingRegistrantCreateApplicationJsonCustomQuestions = /** @class */ (function (_super) {
    __extends(MeetingRegistrantCreateApplicationJsonCustomQuestions, _super);
    function MeetingRegistrantCreateApplicationJsonCustomQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateApplicationJsonCustomQuestions.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateApplicationJsonCustomQuestions.prototype, "value", void 0);
    return MeetingRegistrantCreateApplicationJsonCustomQuestions;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantCreateApplicationJsonCustomQuestions = MeetingRegistrantCreateApplicationJsonCustomQuestions;
// MeetingRegistrantCreateApplicationJson
/**
 * Registrant base object.
**/
var MeetingRegistrantCreateApplicationJson = /** @class */ (function (_super) {
    __extends(MeetingRegistrantCreateApplicationJson, _super);
    function MeetingRegistrantCreateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateApplicationJson.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_approve" }),
        __metadata("design:type", Boolean)
    ], MeetingRegistrantCreateApplicationJson.prototype, "autoApprove", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateApplicationJson.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateApplicationJson.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateApplicationJson.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_questions", elemType: MeetingRegistrantCreateApplicationJsonCustomQuestions }),
        __metadata("design:type", Array)
    ], MeetingRegistrantCreateApplicationJson.prototype, "customQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateApplicationJson.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateApplicationJson.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=industry" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateApplicationJson.prototype, "industry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=job_title" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateApplicationJson.prototype, "jobTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateApplicationJson.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateApplicationJson.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=no_of_employees" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateApplicationJson.prototype, "noOfEmployees", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=org" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateApplicationJson.prototype, "org", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateApplicationJson.prototype, "phone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchasing_time_frame" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateApplicationJson.prototype, "purchasingTimeFrame", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role_in_purchase_process" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateApplicationJson.prototype, "roleInPurchaseProcess", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateApplicationJson.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateApplicationJson.prototype, "zip", void 0);
    return MeetingRegistrantCreateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantCreateApplicationJson = MeetingRegistrantCreateApplicationJson;
// MeetingRegistrantCreateMultipartFormDataCustomQuestions
/**
 * Custom Question.
**/
var MeetingRegistrantCreateMultipartFormDataCustomQuestions = /** @class */ (function (_super) {
    __extends(MeetingRegistrantCreateMultipartFormDataCustomQuestions, _super);
    function MeetingRegistrantCreateMultipartFormDataCustomQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateMultipartFormDataCustomQuestions.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateMultipartFormDataCustomQuestions.prototype, "value", void 0);
    return MeetingRegistrantCreateMultipartFormDataCustomQuestions;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantCreateMultipartFormDataCustomQuestions = MeetingRegistrantCreateMultipartFormDataCustomQuestions;
// MeetingRegistrantCreateMultipartFormData1
/**
 * Registrant base object.
**/
var MeetingRegistrantCreateMultipartFormData1 = /** @class */ (function (_super) {
    __extends(MeetingRegistrantCreateMultipartFormData1, _super);
    function MeetingRegistrantCreateMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=address" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateMultipartFormData1.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=auto_approve" }),
        __metadata("design:type", Boolean)
    ], MeetingRegistrantCreateMultipartFormData1.prototype, "autoApprove", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=city" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateMultipartFormData1.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=comments" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateMultipartFormData1.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=country" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateMultipartFormData1.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=custom_questions;json=true", elemType: MeetingRegistrantCreateMultipartFormDataCustomQuestions }),
        __metadata("design:type", Array)
    ], MeetingRegistrantCreateMultipartFormData1.prototype, "customQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=email" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateMultipartFormData1.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=first_name" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateMultipartFormData1.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=industry" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateMultipartFormData1.prototype, "industry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=job_title" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateMultipartFormData1.prototype, "jobTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=language" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateMultipartFormData1.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=last_name" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateMultipartFormData1.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=no_of_employees" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateMultipartFormData1.prototype, "noOfEmployees", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=org" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateMultipartFormData1.prototype, "org", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=phone" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateMultipartFormData1.prototype, "phone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=purchasing_time_frame" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateMultipartFormData1.prototype, "purchasingTimeFrame", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=role_in_purchase_process" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateMultipartFormData1.prototype, "roleInPurchaseProcess", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=state" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateMultipartFormData1.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=zip" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateMultipartFormData1.prototype, "zip", void 0);
    return MeetingRegistrantCreateMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantCreateMultipartFormData1 = MeetingRegistrantCreateMultipartFormData1;
var MeetingRegistrantCreateRequests = /** @class */ (function (_super) {
    __extends(MeetingRegistrantCreateRequests, _super);
    function MeetingRegistrantCreateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", MeetingRegistrantCreateApplicationJson)
    ], MeetingRegistrantCreateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", MeetingRegistrantCreateMultipartFormData1)
    ], MeetingRegistrantCreateRequests.prototype, "object1", void 0);
    return MeetingRegistrantCreateRequests;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantCreateRequests = MeetingRegistrantCreateRequests;
var MeetingRegistrantCreateSecurity = /** @class */ (function (_super) {
    __extends(MeetingRegistrantCreateSecurity, _super);
    function MeetingRegistrantCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], MeetingRegistrantCreateSecurity.prototype, "oAuth", void 0);
    return MeetingRegistrantCreateSecurity;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantCreateSecurity = MeetingRegistrantCreateSecurity;
var MeetingRegistrantCreate201ApplicationJson = /** @class */ (function (_super) {
    __extends(MeetingRegistrantCreate201ApplicationJson, _super);
    function MeetingRegistrantCreate201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], MeetingRegistrantCreate201ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_url" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreate201ApplicationJson.prototype, "joinUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrant_id" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreate201ApplicationJson.prototype, "registrantId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreate201ApplicationJson.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], MeetingRegistrantCreate201ApplicationJson.prototype, "topic", void 0);
    return MeetingRegistrantCreate201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantCreate201ApplicationJson = MeetingRegistrantCreate201ApplicationJson;
var MeetingRegistrantCreateRequest = /** @class */ (function (_super) {
    __extends(MeetingRegistrantCreateRequest, _super);
    function MeetingRegistrantCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRegistrantCreatePathParams)
    ], MeetingRegistrantCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRegistrantCreateQueryParams)
    ], MeetingRegistrantCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRegistrantCreateRequests)
    ], MeetingRegistrantCreateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRegistrantCreateSecurity)
    ], MeetingRegistrantCreateRequest.prototype, "security", void 0);
    return MeetingRegistrantCreateRequest;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantCreateRequest = MeetingRegistrantCreateRequest;
var MeetingRegistrantCreateResponse = /** @class */ (function (_super) {
    __extends(MeetingRegistrantCreateResponse, _super);
    function MeetingRegistrantCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], MeetingRegistrantCreateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MeetingRegistrantCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MeetingRegistrantCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRegistrantCreate201ApplicationJson)
    ], MeetingRegistrantCreateResponse.prototype, "meetingRegistrantCreate201ApplicationJSONObject", void 0);
    return MeetingRegistrantCreateResponse;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantCreateResponse = MeetingRegistrantCreateResponse;
