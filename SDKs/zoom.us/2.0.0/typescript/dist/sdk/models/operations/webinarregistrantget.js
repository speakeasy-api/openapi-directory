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
exports.WebinarRegistrantGetResponse = exports.WebinarRegistrantGetRequest = exports.WebinarRegistrantGetWebianrRegistrant = exports.WebinarRegistrantGetWebianrRegistrantCustomQuestions = exports.WebinarRegistrantGetSecurity = exports.WebinarRegistrantGetQueryParams = exports.WebinarRegistrantGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var WebinarRegistrantGetPathParams = /** @class */ (function (_super) {
    __extends(WebinarRegistrantGetPathParams, _super);
    function WebinarRegistrantGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=registrantId" }),
        __metadata("design:type", String)
    ], WebinarRegistrantGetPathParams.prototype, "registrantId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", Number)
    ], WebinarRegistrantGetPathParams.prototype, "webinarId", void 0);
    return WebinarRegistrantGetPathParams;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantGetPathParams = WebinarRegistrantGetPathParams;
var WebinarRegistrantGetQueryParams = /** @class */ (function (_super) {
    __extends(WebinarRegistrantGetQueryParams, _super);
    function WebinarRegistrantGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=occurrence_id" }),
        __metadata("design:type", String)
    ], WebinarRegistrantGetQueryParams.prototype, "occurrenceId", void 0);
    return WebinarRegistrantGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantGetQueryParams = WebinarRegistrantGetQueryParams;
var WebinarRegistrantGetSecurity = /** @class */ (function (_super) {
    __extends(WebinarRegistrantGetSecurity, _super);
    function WebinarRegistrantGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], WebinarRegistrantGetSecurity.prototype, "oAuth", void 0);
    return WebinarRegistrantGetSecurity;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantGetSecurity = WebinarRegistrantGetSecurity;
// WebinarRegistrantGetWebianrRegistrantCustomQuestions
/**
 * Custom Question.
**/
var WebinarRegistrantGetWebianrRegistrantCustomQuestions = /** @class */ (function (_super) {
    __extends(WebinarRegistrantGetWebianrRegistrantCustomQuestions, _super);
    function WebinarRegistrantGetWebianrRegistrantCustomQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], WebinarRegistrantGetWebianrRegistrantCustomQuestions.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], WebinarRegistrantGetWebianrRegistrantCustomQuestions.prototype, "value", void 0);
    return WebinarRegistrantGetWebianrRegistrantCustomQuestions;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantGetWebianrRegistrantCustomQuestions = WebinarRegistrantGetWebianrRegistrantCustomQuestions;
// WebinarRegistrantGetWebianrRegistrant
/**
 * Registrant base object.
**/
var WebinarRegistrantGetWebianrRegistrant = /** @class */ (function (_super) {
    __extends(WebinarRegistrantGetWebianrRegistrant, _super);
    function WebinarRegistrantGetWebianrRegistrant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], WebinarRegistrantGetWebianrRegistrant.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], WebinarRegistrantGetWebianrRegistrant.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], WebinarRegistrantGetWebianrRegistrant.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], WebinarRegistrantGetWebianrRegistrant.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=create_time" }),
        __metadata("design:type", Date)
    ], WebinarRegistrantGetWebianrRegistrant.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_questions", elemType: WebinarRegistrantGetWebianrRegistrantCustomQuestions }),
        __metadata("design:type", Array)
    ], WebinarRegistrantGetWebianrRegistrant.prototype, "customQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], WebinarRegistrantGetWebianrRegistrant.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], WebinarRegistrantGetWebianrRegistrant.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], WebinarRegistrantGetWebianrRegistrant.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=industry" }),
        __metadata("design:type", String)
    ], WebinarRegistrantGetWebianrRegistrant.prototype, "industry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=job_title" }),
        __metadata("design:type", String)
    ], WebinarRegistrantGetWebianrRegistrant.prototype, "jobTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_url" }),
        __metadata("design:type", String)
    ], WebinarRegistrantGetWebianrRegistrant.prototype, "joinUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], WebinarRegistrantGetWebianrRegistrant.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=no_of_employees" }),
        __metadata("design:type", String)
    ], WebinarRegistrantGetWebianrRegistrant.prototype, "noOfEmployees", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=org" }),
        __metadata("design:type", String)
    ], WebinarRegistrantGetWebianrRegistrant.prototype, "org", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], WebinarRegistrantGetWebianrRegistrant.prototype, "phone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchasing_time_frame" }),
        __metadata("design:type", String)
    ], WebinarRegistrantGetWebianrRegistrant.prototype, "purchasingTimeFrame", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role_in_purchase_process" }),
        __metadata("design:type", String)
    ], WebinarRegistrantGetWebianrRegistrant.prototype, "roleInPurchaseProcess", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], WebinarRegistrantGetWebianrRegistrant.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], WebinarRegistrantGetWebianrRegistrant.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], WebinarRegistrantGetWebianrRegistrant.prototype, "zip", void 0);
    return WebinarRegistrantGetWebianrRegistrant;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantGetWebianrRegistrant = WebinarRegistrantGetWebianrRegistrant;
var WebinarRegistrantGetRequest = /** @class */ (function (_super) {
    __extends(WebinarRegistrantGetRequest, _super);
    function WebinarRegistrantGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarRegistrantGetPathParams)
    ], WebinarRegistrantGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarRegistrantGetQueryParams)
    ], WebinarRegistrantGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarRegistrantGetSecurity)
    ], WebinarRegistrantGetRequest.prototype, "security", void 0);
    return WebinarRegistrantGetRequest;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantGetRequest = WebinarRegistrantGetRequest;
var WebinarRegistrantGetResponse = /** @class */ (function (_super) {
    __extends(WebinarRegistrantGetResponse, _super);
    function WebinarRegistrantGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], WebinarRegistrantGetResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], WebinarRegistrantGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], WebinarRegistrantGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarRegistrantGetWebianrRegistrant)
    ], WebinarRegistrantGetResponse.prototype, "webianrRegistrant", void 0);
    return WebinarRegistrantGetResponse;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantGetResponse = WebinarRegistrantGetResponse;
