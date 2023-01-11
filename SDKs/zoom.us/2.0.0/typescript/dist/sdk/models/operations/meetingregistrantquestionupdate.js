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
exports.MeetingRegistrantQuestionUpdateResponse = exports.MeetingRegistrantQuestionUpdateRequest = exports.MeetingRegistrantQuestionUpdateSecurity = exports.MeetingRegistrantQuestionUpdateRequests = exports.MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions = exports.MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestions = exports.MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum = exports.MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions = exports.MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestionsTypeEnum = exports.MeetingRegistrantQuestionUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MeetingRegistrantQuestionUpdatePathParams = /** @class */ (function (_super) {
    __extends(MeetingRegistrantQuestionUpdatePathParams, _super);
    function MeetingRegistrantQuestionUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", Number)
    ], MeetingRegistrantQuestionUpdatePathParams.prototype, "meetingId", void 0);
    return MeetingRegistrantQuestionUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantQuestionUpdatePathParams = MeetingRegistrantQuestionUpdatePathParams;
var MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestionsTypeEnum;
(function (MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestionsTypeEnum) {
    MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestionsTypeEnum["Short"] = "short";
    MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestionsTypeEnum["Single"] = "single";
})(MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestionsTypeEnum = exports.MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestionsTypeEnum || (exports.MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestionsTypeEnum = {}));
var MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions = /** @class */ (function (_super) {
    __extends(MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions, _super);
    function MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answers" }),
        __metadata("design:type", Array)
    ], MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions.prototype, "answers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions.prototype, "required", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions.prototype, "type", void 0);
    return MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions = MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions;
var MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum;
(function (MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum) {
    MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum["Address"] = "address";
    MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum["City"] = "city";
    MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum["Country"] = "country";
    MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum["Zip"] = "zip";
    MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum["State"] = "state";
    MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum["Phone"] = "phone";
    MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum["Industry"] = "industry";
    MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum["Org"] = "org";
    MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum["JobTitle"] = "job_title";
    MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum["PurchasingTimeFrame"] = "purchasing_time_frame";
    MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum["RoleInPurchaseProcess"] = "role_in_purchase_process";
    MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum["NoOfEmployees"] = "no_of_employees";
    MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum["Comments"] = "comments";
})(MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum = exports.MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum || (exports.MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum = {}));
var MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestions = /** @class */ (function (_super) {
    __extends(MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestions, _super);
    function MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field_name" }),
        __metadata("design:type", String)
    ], MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestions.prototype, "fieldName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestions.prototype, "required", void 0);
    return MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestions;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestions = MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestions;
// MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions
/**
 * Meeting Registrant Questions
**/
var MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions = /** @class */ (function (_super) {
    __extends(MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions, _super);
    function MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_questions, multipart_form, name=custom_questions;json=true", elemType: MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsCustomQuestions }),
        __metadata("design:type", Array)
    ], MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions.prototype, "customQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=questions, multipart_form, name=questions;json=true", elemType: MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestions }),
        __metadata("design:type", Array)
    ], MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions.prototype, "questions", void 0);
    return MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions = MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions;
var MeetingRegistrantQuestionUpdateRequests = /** @class */ (function (_super) {
    __extends(MeetingRegistrantQuestionUpdateRequests, _super);
    function MeetingRegistrantQuestionUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions)
    ], MeetingRegistrantQuestionUpdateRequests.prototype, "meetingRegistrantQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", MeetingRegistrantQuestionUpdateMeetingRegistrantQuestions)
    ], MeetingRegistrantQuestionUpdateRequests.prototype, "meetingRegistrantQuestions1", void 0);
    return MeetingRegistrantQuestionUpdateRequests;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantQuestionUpdateRequests = MeetingRegistrantQuestionUpdateRequests;
var MeetingRegistrantQuestionUpdateSecurity = /** @class */ (function (_super) {
    __extends(MeetingRegistrantQuestionUpdateSecurity, _super);
    function MeetingRegistrantQuestionUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], MeetingRegistrantQuestionUpdateSecurity.prototype, "oAuth", void 0);
    return MeetingRegistrantQuestionUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantQuestionUpdateSecurity = MeetingRegistrantQuestionUpdateSecurity;
var MeetingRegistrantQuestionUpdateRequest = /** @class */ (function (_super) {
    __extends(MeetingRegistrantQuestionUpdateRequest, _super);
    function MeetingRegistrantQuestionUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRegistrantQuestionUpdatePathParams)
    ], MeetingRegistrantQuestionUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRegistrantQuestionUpdateRequests)
    ], MeetingRegistrantQuestionUpdateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRegistrantQuestionUpdateSecurity)
    ], MeetingRegistrantQuestionUpdateRequest.prototype, "security", void 0);
    return MeetingRegistrantQuestionUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantQuestionUpdateRequest = MeetingRegistrantQuestionUpdateRequest;
var MeetingRegistrantQuestionUpdateResponse = /** @class */ (function (_super) {
    __extends(MeetingRegistrantQuestionUpdateResponse, _super);
    function MeetingRegistrantQuestionUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MeetingRegistrantQuestionUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MeetingRegistrantQuestionUpdateResponse.prototype, "statusCode", void 0);
    return MeetingRegistrantQuestionUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantQuestionUpdateResponse = MeetingRegistrantQuestionUpdateResponse;
