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
exports.ListPastMeetingPollsResponse = exports.ListPastMeetingPollsRequest = exports.ListPastMeetingPolls200ApplicationJson = exports.ListPastMeetingPolls200ApplicationJsonQuestions = exports.ListPastMeetingPolls200ApplicationJsonQuestionsQuestionDetails = exports.ListPastMeetingPollsSecurity = exports.ListPastMeetingPollsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListPastMeetingPollsPathParams = /** @class */ (function (_super) {
    __extends(ListPastMeetingPollsPathParams, _super);
    function ListPastMeetingPollsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", String)
    ], ListPastMeetingPollsPathParams.prototype, "meetingId", void 0);
    return ListPastMeetingPollsPathParams;
}(utils_1.SpeakeasyBase));
exports.ListPastMeetingPollsPathParams = ListPastMeetingPollsPathParams;
var ListPastMeetingPollsSecurity = /** @class */ (function (_super) {
    __extends(ListPastMeetingPollsSecurity, _super);
    function ListPastMeetingPollsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ListPastMeetingPollsSecurity.prototype, "oAuth", void 0);
    return ListPastMeetingPollsSecurity;
}(utils_1.SpeakeasyBase));
exports.ListPastMeetingPollsSecurity = ListPastMeetingPollsSecurity;
var ListPastMeetingPolls200ApplicationJsonQuestionsQuestionDetails = /** @class */ (function (_super) {
    __extends(ListPastMeetingPolls200ApplicationJsonQuestionsQuestionDetails, _super);
    function ListPastMeetingPolls200ApplicationJsonQuestionsQuestionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answer" }),
        __metadata("design:type", String)
    ], ListPastMeetingPolls200ApplicationJsonQuestionsQuestionDetails.prototype, "answer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", Date)
    ], ListPastMeetingPolls200ApplicationJsonQuestionsQuestionDetails.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=polling_id" }),
        __metadata("design:type", String)
    ], ListPastMeetingPolls200ApplicationJsonQuestionsQuestionDetails.prototype, "pollingId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=question" }),
        __metadata("design:type", String)
    ], ListPastMeetingPolls200ApplicationJsonQuestionsQuestionDetails.prototype, "question", void 0);
    return ListPastMeetingPolls200ApplicationJsonQuestionsQuestionDetails;
}(utils_1.SpeakeasyBase));
exports.ListPastMeetingPolls200ApplicationJsonQuestionsQuestionDetails = ListPastMeetingPolls200ApplicationJsonQuestionsQuestionDetails;
var ListPastMeetingPolls200ApplicationJsonQuestions = /** @class */ (function (_super) {
    __extends(ListPastMeetingPolls200ApplicationJsonQuestions, _super);
    function ListPastMeetingPolls200ApplicationJsonQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ListPastMeetingPolls200ApplicationJsonQuestions.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListPastMeetingPolls200ApplicationJsonQuestions.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=question_details", elemType: ListPastMeetingPolls200ApplicationJsonQuestionsQuestionDetails }),
        __metadata("design:type", Array)
    ], ListPastMeetingPolls200ApplicationJsonQuestions.prototype, "questionDetails", void 0);
    return ListPastMeetingPolls200ApplicationJsonQuestions;
}(utils_1.SpeakeasyBase));
exports.ListPastMeetingPolls200ApplicationJsonQuestions = ListPastMeetingPolls200ApplicationJsonQuestions;
var ListPastMeetingPolls200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListPastMeetingPolls200ApplicationJson, _super);
    function ListPastMeetingPolls200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ListPastMeetingPolls200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=questions", elemType: ListPastMeetingPolls200ApplicationJsonQuestions }),
        __metadata("design:type", Array)
    ], ListPastMeetingPolls200ApplicationJson.prototype, "questions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], ListPastMeetingPolls200ApplicationJson.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], ListPastMeetingPolls200ApplicationJson.prototype, "uuid", void 0);
    return ListPastMeetingPolls200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListPastMeetingPolls200ApplicationJson = ListPastMeetingPolls200ApplicationJson;
var ListPastMeetingPollsRequest = /** @class */ (function (_super) {
    __extends(ListPastMeetingPollsRequest, _super);
    function ListPastMeetingPollsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPastMeetingPollsPathParams)
    ], ListPastMeetingPollsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPastMeetingPollsSecurity)
    ], ListPastMeetingPollsRequest.prototype, "security", void 0);
    return ListPastMeetingPollsRequest;
}(utils_1.SpeakeasyBase));
exports.ListPastMeetingPollsRequest = ListPastMeetingPollsRequest;
var ListPastMeetingPollsResponse = /** @class */ (function (_super) {
    __extends(ListPastMeetingPollsResponse, _super);
    function ListPastMeetingPollsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListPastMeetingPollsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListPastMeetingPollsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListPastMeetingPollsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPastMeetingPolls200ApplicationJson)
    ], ListPastMeetingPollsResponse.prototype, "listPastMeetingPolls200ApplicationJSONObject", void 0);
    return ListPastMeetingPollsResponse;
}(utils_1.SpeakeasyBase));
exports.ListPastMeetingPollsResponse = ListPastMeetingPollsResponse;
