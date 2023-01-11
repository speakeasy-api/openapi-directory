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
exports.ListPastWebinarPollResultsResponse = exports.ListPastWebinarPollResultsRequest = exports.ListPastWebinarPollResults200ApplicationJson = exports.ListPastWebinarPollResults200ApplicationJsonQuestions = exports.ListPastWebinarPollResults200ApplicationJsonQuestionsQuestionDetails = exports.ListPastWebinarPollResultsSecurity = exports.ListPastWebinarPollResultsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListPastWebinarPollResultsPathParams = /** @class */ (function (_super) {
    __extends(ListPastWebinarPollResultsPathParams, _super);
    function ListPastWebinarPollResultsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", String)
    ], ListPastWebinarPollResultsPathParams.prototype, "webinarId", void 0);
    return ListPastWebinarPollResultsPathParams;
}(utils_1.SpeakeasyBase));
exports.ListPastWebinarPollResultsPathParams = ListPastWebinarPollResultsPathParams;
var ListPastWebinarPollResultsSecurity = /** @class */ (function (_super) {
    __extends(ListPastWebinarPollResultsSecurity, _super);
    function ListPastWebinarPollResultsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ListPastWebinarPollResultsSecurity.prototype, "oAuth", void 0);
    return ListPastWebinarPollResultsSecurity;
}(utils_1.SpeakeasyBase));
exports.ListPastWebinarPollResultsSecurity = ListPastWebinarPollResultsSecurity;
var ListPastWebinarPollResults200ApplicationJsonQuestionsQuestionDetails = /** @class */ (function (_super) {
    __extends(ListPastWebinarPollResults200ApplicationJsonQuestionsQuestionDetails, _super);
    function ListPastWebinarPollResults200ApplicationJsonQuestionsQuestionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answer" }),
        __metadata("design:type", String)
    ], ListPastWebinarPollResults200ApplicationJsonQuestionsQuestionDetails.prototype, "answer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", Date)
    ], ListPastWebinarPollResults200ApplicationJsonQuestionsQuestionDetails.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=polling_id" }),
        __metadata("design:type", String)
    ], ListPastWebinarPollResults200ApplicationJsonQuestionsQuestionDetails.prototype, "pollingId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=question" }),
        __metadata("design:type", String)
    ], ListPastWebinarPollResults200ApplicationJsonQuestionsQuestionDetails.prototype, "question", void 0);
    return ListPastWebinarPollResults200ApplicationJsonQuestionsQuestionDetails;
}(utils_1.SpeakeasyBase));
exports.ListPastWebinarPollResults200ApplicationJsonQuestionsQuestionDetails = ListPastWebinarPollResults200ApplicationJsonQuestionsQuestionDetails;
var ListPastWebinarPollResults200ApplicationJsonQuestions = /** @class */ (function (_super) {
    __extends(ListPastWebinarPollResults200ApplicationJsonQuestions, _super);
    function ListPastWebinarPollResults200ApplicationJsonQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ListPastWebinarPollResults200ApplicationJsonQuestions.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListPastWebinarPollResults200ApplicationJsonQuestions.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=question_details", elemType: ListPastWebinarPollResults200ApplicationJsonQuestionsQuestionDetails }),
        __metadata("design:type", Array)
    ], ListPastWebinarPollResults200ApplicationJsonQuestions.prototype, "questionDetails", void 0);
    return ListPastWebinarPollResults200ApplicationJsonQuestions;
}(utils_1.SpeakeasyBase));
exports.ListPastWebinarPollResults200ApplicationJsonQuestions = ListPastWebinarPollResults200ApplicationJsonQuestions;
var ListPastWebinarPollResults200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListPastWebinarPollResults200ApplicationJson, _super);
    function ListPastWebinarPollResults200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ListPastWebinarPollResults200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=questions", elemType: ListPastWebinarPollResults200ApplicationJsonQuestions }),
        __metadata("design:type", Array)
    ], ListPastWebinarPollResults200ApplicationJson.prototype, "questions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], ListPastWebinarPollResults200ApplicationJson.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], ListPastWebinarPollResults200ApplicationJson.prototype, "uuid", void 0);
    return ListPastWebinarPollResults200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListPastWebinarPollResults200ApplicationJson = ListPastWebinarPollResults200ApplicationJson;
var ListPastWebinarPollResultsRequest = /** @class */ (function (_super) {
    __extends(ListPastWebinarPollResultsRequest, _super);
    function ListPastWebinarPollResultsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPastWebinarPollResultsPathParams)
    ], ListPastWebinarPollResultsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPastWebinarPollResultsSecurity)
    ], ListPastWebinarPollResultsRequest.prototype, "security", void 0);
    return ListPastWebinarPollResultsRequest;
}(utils_1.SpeakeasyBase));
exports.ListPastWebinarPollResultsRequest = ListPastWebinarPollResultsRequest;
var ListPastWebinarPollResultsResponse = /** @class */ (function (_super) {
    __extends(ListPastWebinarPollResultsResponse, _super);
    function ListPastWebinarPollResultsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListPastWebinarPollResultsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListPastWebinarPollResultsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListPastWebinarPollResultsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPastWebinarPollResults200ApplicationJson)
    ], ListPastWebinarPollResultsResponse.prototype, "listPastWebinarPollResults200ApplicationJSONObject", void 0);
    return ListPastWebinarPollResultsResponse;
}(utils_1.SpeakeasyBase));
exports.ListPastWebinarPollResultsResponse = ListPastWebinarPollResultsResponse;
