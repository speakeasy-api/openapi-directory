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
exports.ReportMeetingPollsResponse = exports.ReportMeetingPollsRequest = exports.ReportMeetingPolls200ApplicationJson = exports.ReportMeetingPolls200ApplicationJsonQuestions = exports.ReportMeetingPolls200ApplicationJsonQuestionsQuestionDetails = exports.ReportMeetingPollsSecurity = exports.ReportMeetingPollsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReportMeetingPollsPathParams = /** @class */ (function (_super) {
    __extends(ReportMeetingPollsPathParams, _super);
    function ReportMeetingPollsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", String)
    ], ReportMeetingPollsPathParams.prototype, "meetingId", void 0);
    return ReportMeetingPollsPathParams;
}(utils_1.SpeakeasyBase));
exports.ReportMeetingPollsPathParams = ReportMeetingPollsPathParams;
var ReportMeetingPollsSecurity = /** @class */ (function (_super) {
    __extends(ReportMeetingPollsSecurity, _super);
    function ReportMeetingPollsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ReportMeetingPollsSecurity.prototype, "oAuth", void 0);
    return ReportMeetingPollsSecurity;
}(utils_1.SpeakeasyBase));
exports.ReportMeetingPollsSecurity = ReportMeetingPollsSecurity;
var ReportMeetingPolls200ApplicationJsonQuestionsQuestionDetails = /** @class */ (function (_super) {
    __extends(ReportMeetingPolls200ApplicationJsonQuestionsQuestionDetails, _super);
    function ReportMeetingPolls200ApplicationJsonQuestionsQuestionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answer" }),
        __metadata("design:type", String)
    ], ReportMeetingPolls200ApplicationJsonQuestionsQuestionDetails.prototype, "answer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", Date)
    ], ReportMeetingPolls200ApplicationJsonQuestionsQuestionDetails.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=polling_id" }),
        __metadata("design:type", String)
    ], ReportMeetingPolls200ApplicationJsonQuestionsQuestionDetails.prototype, "pollingId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=question" }),
        __metadata("design:type", String)
    ], ReportMeetingPolls200ApplicationJsonQuestionsQuestionDetails.prototype, "question", void 0);
    return ReportMeetingPolls200ApplicationJsonQuestionsQuestionDetails;
}(utils_1.SpeakeasyBase));
exports.ReportMeetingPolls200ApplicationJsonQuestionsQuestionDetails = ReportMeetingPolls200ApplicationJsonQuestionsQuestionDetails;
var ReportMeetingPolls200ApplicationJsonQuestions = /** @class */ (function (_super) {
    __extends(ReportMeetingPolls200ApplicationJsonQuestions, _super);
    function ReportMeetingPolls200ApplicationJsonQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ReportMeetingPolls200ApplicationJsonQuestions.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReportMeetingPolls200ApplicationJsonQuestions.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=question_details", elemType: ReportMeetingPolls200ApplicationJsonQuestionsQuestionDetails }),
        __metadata("design:type", Array)
    ], ReportMeetingPolls200ApplicationJsonQuestions.prototype, "questionDetails", void 0);
    return ReportMeetingPolls200ApplicationJsonQuestions;
}(utils_1.SpeakeasyBase));
exports.ReportMeetingPolls200ApplicationJsonQuestions = ReportMeetingPolls200ApplicationJsonQuestions;
var ReportMeetingPolls200ApplicationJson = /** @class */ (function (_super) {
    __extends(ReportMeetingPolls200ApplicationJson, _super);
    function ReportMeetingPolls200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ReportMeetingPolls200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=questions", elemType: ReportMeetingPolls200ApplicationJsonQuestions }),
        __metadata("design:type", Array)
    ], ReportMeetingPolls200ApplicationJson.prototype, "questions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], ReportMeetingPolls200ApplicationJson.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], ReportMeetingPolls200ApplicationJson.prototype, "uuid", void 0);
    return ReportMeetingPolls200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ReportMeetingPolls200ApplicationJson = ReportMeetingPolls200ApplicationJson;
var ReportMeetingPollsRequest = /** @class */ (function (_super) {
    __extends(ReportMeetingPollsRequest, _super);
    function ReportMeetingPollsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportMeetingPollsPathParams)
    ], ReportMeetingPollsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportMeetingPollsSecurity)
    ], ReportMeetingPollsRequest.prototype, "security", void 0);
    return ReportMeetingPollsRequest;
}(utils_1.SpeakeasyBase));
exports.ReportMeetingPollsRequest = ReportMeetingPollsRequest;
var ReportMeetingPollsResponse = /** @class */ (function (_super) {
    __extends(ReportMeetingPollsResponse, _super);
    function ReportMeetingPollsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ReportMeetingPollsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReportMeetingPollsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReportMeetingPollsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportMeetingPolls200ApplicationJson)
    ], ReportMeetingPollsResponse.prototype, "reportMeetingPolls200ApplicationJSONObject", void 0);
    return ReportMeetingPollsResponse;
}(utils_1.SpeakeasyBase));
exports.ReportMeetingPollsResponse = ReportMeetingPollsResponse;
