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
exports.WebinarRegistrantCreateResponse = exports.WebinarRegistrantCreateRequest = exports.WebinarRegistrantCreate201ApplicationJson = exports.WebinarRegistrantCreateSecurity = exports.WebinarRegistrantCreateRequests = exports.WebinarRegistrantCreateMultipartFormData1 = exports.WebinarRegistrantCreateMultipartFormDataCustomQuestions = exports.WebinarRegistrantCreateApplicationJson = exports.WebinarRegistrantCreateApplicationJsonCustomQuestions = exports.WebinarRegistrantCreateQueryParams = exports.WebinarRegistrantCreatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var WebinarRegistrantCreatePathParams = /** @class */ (function (_super) {
    __extends(WebinarRegistrantCreatePathParams, _super);
    function WebinarRegistrantCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", Number)
    ], WebinarRegistrantCreatePathParams.prototype, "webinarId", void 0);
    return WebinarRegistrantCreatePathParams;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantCreatePathParams = WebinarRegistrantCreatePathParams;
var WebinarRegistrantCreateQueryParams = /** @class */ (function (_super) {
    __extends(WebinarRegistrantCreateQueryParams, _super);
    function WebinarRegistrantCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=occurrence_ids" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateQueryParams.prototype, "occurrenceIds", void 0);
    return WebinarRegistrantCreateQueryParams;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantCreateQueryParams = WebinarRegistrantCreateQueryParams;
// WebinarRegistrantCreateApplicationJsonCustomQuestions
/**
 * Custom Question.
**/
var WebinarRegistrantCreateApplicationJsonCustomQuestions = /** @class */ (function (_super) {
    __extends(WebinarRegistrantCreateApplicationJsonCustomQuestions, _super);
    function WebinarRegistrantCreateApplicationJsonCustomQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateApplicationJsonCustomQuestions.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateApplicationJsonCustomQuestions.prototype, "value", void 0);
    return WebinarRegistrantCreateApplicationJsonCustomQuestions;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantCreateApplicationJsonCustomQuestions = WebinarRegistrantCreateApplicationJsonCustomQuestions;
// WebinarRegistrantCreateApplicationJson
/**
 * Registrant base object.
**/
var WebinarRegistrantCreateApplicationJson = /** @class */ (function (_super) {
    __extends(WebinarRegistrantCreateApplicationJson, _super);
    function WebinarRegistrantCreateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateApplicationJson.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateApplicationJson.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateApplicationJson.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateApplicationJson.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_questions", elemType: WebinarRegistrantCreateApplicationJsonCustomQuestions }),
        __metadata("design:type", Array)
    ], WebinarRegistrantCreateApplicationJson.prototype, "customQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateApplicationJson.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateApplicationJson.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=industry" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateApplicationJson.prototype, "industry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=job_title" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateApplicationJson.prototype, "jobTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateApplicationJson.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=no_of_employees" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateApplicationJson.prototype, "noOfEmployees", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=org" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateApplicationJson.prototype, "org", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateApplicationJson.prototype, "phone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchasing_time_frame" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateApplicationJson.prototype, "purchasingTimeFrame", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role_in_purchase_process" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateApplicationJson.prototype, "roleInPurchaseProcess", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateApplicationJson.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateApplicationJson.prototype, "zip", void 0);
    return WebinarRegistrantCreateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantCreateApplicationJson = WebinarRegistrantCreateApplicationJson;
// WebinarRegistrantCreateMultipartFormDataCustomQuestions
/**
 * Custom Question.
**/
var WebinarRegistrantCreateMultipartFormDataCustomQuestions = /** @class */ (function (_super) {
    __extends(WebinarRegistrantCreateMultipartFormDataCustomQuestions, _super);
    function WebinarRegistrantCreateMultipartFormDataCustomQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateMultipartFormDataCustomQuestions.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateMultipartFormDataCustomQuestions.prototype, "value", void 0);
    return WebinarRegistrantCreateMultipartFormDataCustomQuestions;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantCreateMultipartFormDataCustomQuestions = WebinarRegistrantCreateMultipartFormDataCustomQuestions;
// WebinarRegistrantCreateMultipartFormData1
/**
 * Registrant base object.
**/
var WebinarRegistrantCreateMultipartFormData1 = /** @class */ (function (_super) {
    __extends(WebinarRegistrantCreateMultipartFormData1, _super);
    function WebinarRegistrantCreateMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=address" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateMultipartFormData1.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=city" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateMultipartFormData1.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=comments" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateMultipartFormData1.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=country" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateMultipartFormData1.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=custom_questions;json=true", elemType: WebinarRegistrantCreateMultipartFormDataCustomQuestions }),
        __metadata("design:type", Array)
    ], WebinarRegistrantCreateMultipartFormData1.prototype, "customQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=email" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateMultipartFormData1.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=first_name" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateMultipartFormData1.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=industry" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateMultipartFormData1.prototype, "industry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=job_title" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateMultipartFormData1.prototype, "jobTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=last_name" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateMultipartFormData1.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=no_of_employees" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateMultipartFormData1.prototype, "noOfEmployees", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=org" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateMultipartFormData1.prototype, "org", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=phone" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateMultipartFormData1.prototype, "phone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=purchasing_time_frame" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateMultipartFormData1.prototype, "purchasingTimeFrame", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=role_in_purchase_process" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateMultipartFormData1.prototype, "roleInPurchaseProcess", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=state" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateMultipartFormData1.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=zip" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateMultipartFormData1.prototype, "zip", void 0);
    return WebinarRegistrantCreateMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantCreateMultipartFormData1 = WebinarRegistrantCreateMultipartFormData1;
var WebinarRegistrantCreateRequests = /** @class */ (function (_super) {
    __extends(WebinarRegistrantCreateRequests, _super);
    function WebinarRegistrantCreateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", WebinarRegistrantCreateApplicationJson)
    ], WebinarRegistrantCreateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", WebinarRegistrantCreateMultipartFormData1)
    ], WebinarRegistrantCreateRequests.prototype, "object1", void 0);
    return WebinarRegistrantCreateRequests;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantCreateRequests = WebinarRegistrantCreateRequests;
var WebinarRegistrantCreateSecurity = /** @class */ (function (_super) {
    __extends(WebinarRegistrantCreateSecurity, _super);
    function WebinarRegistrantCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], WebinarRegistrantCreateSecurity.prototype, "oAuth", void 0);
    return WebinarRegistrantCreateSecurity;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantCreateSecurity = WebinarRegistrantCreateSecurity;
var WebinarRegistrantCreate201ApplicationJson = /** @class */ (function (_super) {
    __extends(WebinarRegistrantCreate201ApplicationJson, _super);
    function WebinarRegistrantCreate201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreate201ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_url" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreate201ApplicationJson.prototype, "joinUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrant_id" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreate201ApplicationJson.prototype, "registrantId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], WebinarRegistrantCreate201ApplicationJson.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], WebinarRegistrantCreate201ApplicationJson.prototype, "topic", void 0);
    return WebinarRegistrantCreate201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantCreate201ApplicationJson = WebinarRegistrantCreate201ApplicationJson;
var WebinarRegistrantCreateRequest = /** @class */ (function (_super) {
    __extends(WebinarRegistrantCreateRequest, _super);
    function WebinarRegistrantCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarRegistrantCreatePathParams)
    ], WebinarRegistrantCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarRegistrantCreateQueryParams)
    ], WebinarRegistrantCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarRegistrantCreateRequests)
    ], WebinarRegistrantCreateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarRegistrantCreateSecurity)
    ], WebinarRegistrantCreateRequest.prototype, "security", void 0);
    return WebinarRegistrantCreateRequest;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantCreateRequest = WebinarRegistrantCreateRequest;
var WebinarRegistrantCreateResponse = /** @class */ (function (_super) {
    __extends(WebinarRegistrantCreateResponse, _super);
    function WebinarRegistrantCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], WebinarRegistrantCreateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], WebinarRegistrantCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], WebinarRegistrantCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarRegistrantCreate201ApplicationJson)
    ], WebinarRegistrantCreateResponse.prototype, "webinarRegistrantCreate201ApplicationJSONObject", void 0);
    return WebinarRegistrantCreateResponse;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantCreateResponse = WebinarRegistrantCreateResponse;
