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
exports.ReportWebinarQaResponse = exports.ReportWebinarQaRequest = exports.ReportWebinarQa200ApplicationJson = exports.ReportWebinarQa200ApplicationJsonQuestions = exports.ReportWebinarQa200ApplicationJsonQuestionsQuestionDetails = exports.ReportWebinarQaSecurity = exports.ReportWebinarQaPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReportWebinarQaPathParams = /** @class */ (function (_super) {
    __extends(ReportWebinarQaPathParams, _super);
    function ReportWebinarQaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", String)
    ], ReportWebinarQaPathParams.prototype, "webinarId", void 0);
    return ReportWebinarQaPathParams;
}(utils_1.SpeakeasyBase));
exports.ReportWebinarQaPathParams = ReportWebinarQaPathParams;
var ReportWebinarQaSecurity = /** @class */ (function (_super) {
    __extends(ReportWebinarQaSecurity, _super);
    function ReportWebinarQaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ReportWebinarQaSecurity.prototype, "oAuth", void 0);
    return ReportWebinarQaSecurity;
}(utils_1.SpeakeasyBase));
exports.ReportWebinarQaSecurity = ReportWebinarQaSecurity;
var ReportWebinarQa200ApplicationJsonQuestionsQuestionDetails = /** @class */ (function (_super) {
    __extends(ReportWebinarQa200ApplicationJsonQuestionsQuestionDetails, _super);
    function ReportWebinarQa200ApplicationJsonQuestionsQuestionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answer" }),
        __metadata("design:type", String)
    ], ReportWebinarQa200ApplicationJsonQuestionsQuestionDetails.prototype, "answer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=question" }),
        __metadata("design:type", String)
    ], ReportWebinarQa200ApplicationJsonQuestionsQuestionDetails.prototype, "question", void 0);
    return ReportWebinarQa200ApplicationJsonQuestionsQuestionDetails;
}(utils_1.SpeakeasyBase));
exports.ReportWebinarQa200ApplicationJsonQuestionsQuestionDetails = ReportWebinarQa200ApplicationJsonQuestionsQuestionDetails;
var ReportWebinarQa200ApplicationJsonQuestions = /** @class */ (function (_super) {
    __extends(ReportWebinarQa200ApplicationJsonQuestions, _super);
    function ReportWebinarQa200ApplicationJsonQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ReportWebinarQa200ApplicationJsonQuestions.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReportWebinarQa200ApplicationJsonQuestions.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=question_details", elemType: ReportWebinarQa200ApplicationJsonQuestionsQuestionDetails }),
        __metadata("design:type", Array)
    ], ReportWebinarQa200ApplicationJsonQuestions.prototype, "questionDetails", void 0);
    return ReportWebinarQa200ApplicationJsonQuestions;
}(utils_1.SpeakeasyBase));
exports.ReportWebinarQa200ApplicationJsonQuestions = ReportWebinarQa200ApplicationJsonQuestions;
var ReportWebinarQa200ApplicationJson = /** @class */ (function (_super) {
    __extends(ReportWebinarQa200ApplicationJson, _super);
    function ReportWebinarQa200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ReportWebinarQa200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=questions", elemType: ReportWebinarQa200ApplicationJsonQuestions }),
        __metadata("design:type", Array)
    ], ReportWebinarQa200ApplicationJson.prototype, "questions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], ReportWebinarQa200ApplicationJson.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], ReportWebinarQa200ApplicationJson.prototype, "uuid", void 0);
    return ReportWebinarQa200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ReportWebinarQa200ApplicationJson = ReportWebinarQa200ApplicationJson;
var ReportWebinarQaRequest = /** @class */ (function (_super) {
    __extends(ReportWebinarQaRequest, _super);
    function ReportWebinarQaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportWebinarQaPathParams)
    ], ReportWebinarQaRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportWebinarQaSecurity)
    ], ReportWebinarQaRequest.prototype, "security", void 0);
    return ReportWebinarQaRequest;
}(utils_1.SpeakeasyBase));
exports.ReportWebinarQaRequest = ReportWebinarQaRequest;
var ReportWebinarQaResponse = /** @class */ (function (_super) {
    __extends(ReportWebinarQaResponse, _super);
    function ReportWebinarQaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ReportWebinarQaResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReportWebinarQaResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReportWebinarQaResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReportWebinarQa200ApplicationJson)
    ], ReportWebinarQaResponse.prototype, "reportWebinarQA200ApplicationJSONObject", void 0);
    return ReportWebinarQaResponse;
}(utils_1.SpeakeasyBase));
exports.ReportWebinarQaResponse = ReportWebinarQaResponse;
