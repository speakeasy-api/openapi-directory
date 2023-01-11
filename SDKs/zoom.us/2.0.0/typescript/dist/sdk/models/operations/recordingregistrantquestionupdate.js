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
exports.RecordingRegistrantQuestionUpdateResponse = exports.RecordingRegistrantQuestionUpdateRequest = exports.RecordingRegistrantQuestionUpdateSecurity = exports.RecordingRegistrantQuestionUpdateRequests = exports.RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions = exports.RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestions = exports.RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum = exports.RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions = exports.RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestionsTypeEnum = exports.RecordingRegistrantQuestionUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RecordingRegistrantQuestionUpdatePathParams = /** @class */ (function (_super) {
    __extends(RecordingRegistrantQuestionUpdatePathParams, _super);
    function RecordingRegistrantQuestionUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", String)
    ], RecordingRegistrantQuestionUpdatePathParams.prototype, "meetingId", void 0);
    return RecordingRegistrantQuestionUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.RecordingRegistrantQuestionUpdatePathParams = RecordingRegistrantQuestionUpdatePathParams;
var RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestionsTypeEnum;
(function (RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestionsTypeEnum) {
    RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestionsTypeEnum["Short"] = "short";
    RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestionsTypeEnum["Single"] = "single";
    RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestionsTypeEnum["Multiple"] = "multiple";
})(RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestionsTypeEnum = exports.RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestionsTypeEnum || (exports.RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestionsTypeEnum = {}));
var RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions = /** @class */ (function (_super) {
    __extends(RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions, _super);
    function RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answers" }),
        __metadata("design:type", Array)
    ], RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions.prototype, "answers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions.prototype, "required", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions.prototype, "type", void 0);
    return RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions;
}(utils_1.SpeakeasyBase));
exports.RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions = RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions;
var RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum;
(function (RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum) {
    RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum["LastName"] = "last_name";
    RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum["Address"] = "address";
    RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum["City"] = "city";
    RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum["Country"] = "country";
    RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum["Zip"] = "zip";
    RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum["State"] = "state";
    RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum["Phone"] = "phone";
    RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum["Industry"] = "industry";
    RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum["Org"] = "org";
    RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum["JobTitle"] = "job_title";
    RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum["PurchasingTimeFrame"] = "purchasing_time_frame";
    RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum["RoleInPurchaseProcess"] = "role_in_purchase_process";
    RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum["NoOfEmployees"] = "no_of_employees";
    RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum["Comments"] = "comments";
})(RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum = exports.RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum || (exports.RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum = {}));
var RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestions = /** @class */ (function (_super) {
    __extends(RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestions, _super);
    function RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field_name" }),
        __metadata("design:type", String)
    ], RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestions.prototype, "fieldName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestions.prototype, "required", void 0);
    return RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestions;
}(utils_1.SpeakeasyBase));
exports.RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestions = RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestions;
// RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions
/**
 * Recording Registrant Questions
**/
var RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions = /** @class */ (function (_super) {
    __extends(RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions, _super);
    function RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_questions, multipart_form, name=custom_questions;json=true", elemType: RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions }),
        __metadata("design:type", Array)
    ], RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions.prototype, "customQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=questions, multipart_form, name=questions;json=true", elemType: RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestions }),
        __metadata("design:type", Array)
    ], RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions.prototype, "questions", void 0);
    return RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions;
}(utils_1.SpeakeasyBase));
exports.RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions = RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions;
var RecordingRegistrantQuestionUpdateRequests = /** @class */ (function (_super) {
    __extends(RecordingRegistrantQuestionUpdateRequests, _super);
    function RecordingRegistrantQuestionUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions)
    ], RecordingRegistrantQuestionUpdateRequests.prototype, "recordingRegistrantQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", RecordingRegistrantQuestionUpdateRecordingRegistrantQuestions)
    ], RecordingRegistrantQuestionUpdateRequests.prototype, "recordingRegistrantQuestions1", void 0);
    return RecordingRegistrantQuestionUpdateRequests;
}(utils_1.SpeakeasyBase));
exports.RecordingRegistrantQuestionUpdateRequests = RecordingRegistrantQuestionUpdateRequests;
var RecordingRegistrantQuestionUpdateSecurity = /** @class */ (function (_super) {
    __extends(RecordingRegistrantQuestionUpdateSecurity, _super);
    function RecordingRegistrantQuestionUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], RecordingRegistrantQuestionUpdateSecurity.prototype, "oAuth", void 0);
    return RecordingRegistrantQuestionUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.RecordingRegistrantQuestionUpdateSecurity = RecordingRegistrantQuestionUpdateSecurity;
var RecordingRegistrantQuestionUpdateRequest = /** @class */ (function (_super) {
    __extends(RecordingRegistrantQuestionUpdateRequest, _super);
    function RecordingRegistrantQuestionUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecordingRegistrantQuestionUpdatePathParams)
    ], RecordingRegistrantQuestionUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecordingRegistrantQuestionUpdateRequests)
    ], RecordingRegistrantQuestionUpdateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecordingRegistrantQuestionUpdateSecurity)
    ], RecordingRegistrantQuestionUpdateRequest.prototype, "security", void 0);
    return RecordingRegistrantQuestionUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.RecordingRegistrantQuestionUpdateRequest = RecordingRegistrantQuestionUpdateRequest;
var RecordingRegistrantQuestionUpdateResponse = /** @class */ (function (_super) {
    __extends(RecordingRegistrantQuestionUpdateResponse, _super);
    function RecordingRegistrantQuestionUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RecordingRegistrantQuestionUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RecordingRegistrantQuestionUpdateResponse.prototype, "statusCode", void 0);
    return RecordingRegistrantQuestionUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.RecordingRegistrantQuestionUpdateResponse = RecordingRegistrantQuestionUpdateResponse;
