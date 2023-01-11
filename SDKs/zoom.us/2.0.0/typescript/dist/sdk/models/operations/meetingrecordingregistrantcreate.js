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
exports.MeetingRecordingRegistrantCreateResponse = exports.MeetingRecordingRegistrantCreateRequest = exports.MeetingRecordingRegistrantCreate201ApplicationJson = exports.MeetingRecordingRegistrantCreateSecurity = exports.MeetingRecordingRegistrantCreateRequests = exports.MeetingRecordingRegistrantCreateMultipartFormData1 = exports.MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions = exports.MeetingRecordingRegistrantCreateApplicationJson = exports.MeetingRecordingRegistrantCreateApplicationJsonCustomQuestions = exports.MeetingRecordingRegistrantCreatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MeetingRecordingRegistrantCreatePathParams = /** @class */ (function (_super) {
    __extends(MeetingRecordingRegistrantCreatePathParams, _super);
    function MeetingRecordingRegistrantCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", Number)
    ], MeetingRecordingRegistrantCreatePathParams.prototype, "meetingId", void 0);
    return MeetingRecordingRegistrantCreatePathParams;
}(utils_1.SpeakeasyBase));
exports.MeetingRecordingRegistrantCreatePathParams = MeetingRecordingRegistrantCreatePathParams;
// MeetingRecordingRegistrantCreateApplicationJsonCustomQuestions
/**
 * Custom Question.
**/
var MeetingRecordingRegistrantCreateApplicationJsonCustomQuestions = /** @class */ (function (_super) {
    __extends(MeetingRecordingRegistrantCreateApplicationJsonCustomQuestions, _super);
    function MeetingRecordingRegistrantCreateApplicationJsonCustomQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateApplicationJsonCustomQuestions.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateApplicationJsonCustomQuestions.prototype, "value", void 0);
    return MeetingRecordingRegistrantCreateApplicationJsonCustomQuestions;
}(utils_1.SpeakeasyBase));
exports.MeetingRecordingRegistrantCreateApplicationJsonCustomQuestions = MeetingRecordingRegistrantCreateApplicationJsonCustomQuestions;
// MeetingRecordingRegistrantCreateApplicationJson
/**
 * Registrant base object.
**/
var MeetingRecordingRegistrantCreateApplicationJson = /** @class */ (function (_super) {
    __extends(MeetingRecordingRegistrantCreateApplicationJson, _super);
    function MeetingRecordingRegistrantCreateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateApplicationJson.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateApplicationJson.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateApplicationJson.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateApplicationJson.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_questions", elemType: MeetingRecordingRegistrantCreateApplicationJsonCustomQuestions }),
        __metadata("design:type", Array)
    ], MeetingRecordingRegistrantCreateApplicationJson.prototype, "customQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateApplicationJson.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateApplicationJson.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=industry" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateApplicationJson.prototype, "industry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=job_title" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateApplicationJson.prototype, "jobTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateApplicationJson.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=no_of_employees" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateApplicationJson.prototype, "noOfEmployees", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=org" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateApplicationJson.prototype, "org", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateApplicationJson.prototype, "phone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchasing_time_frame" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateApplicationJson.prototype, "purchasingTimeFrame", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role_in_purchase_process" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateApplicationJson.prototype, "roleInPurchaseProcess", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateApplicationJson.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateApplicationJson.prototype, "zip", void 0);
    return MeetingRecordingRegistrantCreateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MeetingRecordingRegistrantCreateApplicationJson = MeetingRecordingRegistrantCreateApplicationJson;
// MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions
/**
 * Custom Question.
**/
var MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions = /** @class */ (function (_super) {
    __extends(MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions, _super);
    function MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions.prototype, "value", void 0);
    return MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions;
}(utils_1.SpeakeasyBase));
exports.MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions = MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions;
// MeetingRecordingRegistrantCreateMultipartFormData1
/**
 * Registrant base object.
**/
var MeetingRecordingRegistrantCreateMultipartFormData1 = /** @class */ (function (_super) {
    __extends(MeetingRecordingRegistrantCreateMultipartFormData1, _super);
    function MeetingRecordingRegistrantCreateMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=address" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateMultipartFormData1.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=city" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateMultipartFormData1.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=comments" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateMultipartFormData1.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=country" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateMultipartFormData1.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=custom_questions;json=true", elemType: MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions }),
        __metadata("design:type", Array)
    ], MeetingRecordingRegistrantCreateMultipartFormData1.prototype, "customQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=email" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateMultipartFormData1.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=first_name" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateMultipartFormData1.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=industry" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateMultipartFormData1.prototype, "industry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=job_title" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateMultipartFormData1.prototype, "jobTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=last_name" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateMultipartFormData1.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=no_of_employees" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateMultipartFormData1.prototype, "noOfEmployees", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=org" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateMultipartFormData1.prototype, "org", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=phone" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateMultipartFormData1.prototype, "phone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=purchasing_time_frame" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateMultipartFormData1.prototype, "purchasingTimeFrame", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=role_in_purchase_process" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateMultipartFormData1.prototype, "roleInPurchaseProcess", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=state" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateMultipartFormData1.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=zip" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateMultipartFormData1.prototype, "zip", void 0);
    return MeetingRecordingRegistrantCreateMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.MeetingRecordingRegistrantCreateMultipartFormData1 = MeetingRecordingRegistrantCreateMultipartFormData1;
var MeetingRecordingRegistrantCreateRequests = /** @class */ (function (_super) {
    __extends(MeetingRecordingRegistrantCreateRequests, _super);
    function MeetingRecordingRegistrantCreateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", MeetingRecordingRegistrantCreateApplicationJson)
    ], MeetingRecordingRegistrantCreateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", MeetingRecordingRegistrantCreateMultipartFormData1)
    ], MeetingRecordingRegistrantCreateRequests.prototype, "object1", void 0);
    return MeetingRecordingRegistrantCreateRequests;
}(utils_1.SpeakeasyBase));
exports.MeetingRecordingRegistrantCreateRequests = MeetingRecordingRegistrantCreateRequests;
var MeetingRecordingRegistrantCreateSecurity = /** @class */ (function (_super) {
    __extends(MeetingRecordingRegistrantCreateSecurity, _super);
    function MeetingRecordingRegistrantCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], MeetingRecordingRegistrantCreateSecurity.prototype, "oAuth", void 0);
    return MeetingRecordingRegistrantCreateSecurity;
}(utils_1.SpeakeasyBase));
exports.MeetingRecordingRegistrantCreateSecurity = MeetingRecordingRegistrantCreateSecurity;
var MeetingRecordingRegistrantCreate201ApplicationJson = /** @class */ (function (_super) {
    __extends(MeetingRecordingRegistrantCreate201ApplicationJson, _super);
    function MeetingRecordingRegistrantCreate201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], MeetingRecordingRegistrantCreate201ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrant_id" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreate201ApplicationJson.prototype, "registrantId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=share_url" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreate201ApplicationJson.prototype, "shareUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreate201ApplicationJson.prototype, "topic", void 0);
    return MeetingRecordingRegistrantCreate201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MeetingRecordingRegistrantCreate201ApplicationJson = MeetingRecordingRegistrantCreate201ApplicationJson;
var MeetingRecordingRegistrantCreateRequest = /** @class */ (function (_super) {
    __extends(MeetingRecordingRegistrantCreateRequest, _super);
    function MeetingRecordingRegistrantCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRecordingRegistrantCreatePathParams)
    ], MeetingRecordingRegistrantCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRecordingRegistrantCreateRequests)
    ], MeetingRecordingRegistrantCreateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRecordingRegistrantCreateSecurity)
    ], MeetingRecordingRegistrantCreateRequest.prototype, "security", void 0);
    return MeetingRecordingRegistrantCreateRequest;
}(utils_1.SpeakeasyBase));
exports.MeetingRecordingRegistrantCreateRequest = MeetingRecordingRegistrantCreateRequest;
var MeetingRecordingRegistrantCreateResponse = /** @class */ (function (_super) {
    __extends(MeetingRecordingRegistrantCreateResponse, _super);
    function MeetingRecordingRegistrantCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], MeetingRecordingRegistrantCreateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MeetingRecordingRegistrantCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRecordingRegistrantCreate201ApplicationJson)
    ], MeetingRecordingRegistrantCreateResponse.prototype, "meetingRecordingRegistrantCreate201ApplicationJSONObject", void 0);
    return MeetingRecordingRegistrantCreateResponse;
}(utils_1.SpeakeasyBase));
exports.MeetingRecordingRegistrantCreateResponse = MeetingRecordingRegistrantCreateResponse;
