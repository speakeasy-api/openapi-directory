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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBatchPollsResponse = exports.CreateBatchPollsRequest = exports.CreateBatchPolls201ApplicationJson = exports.CreateBatchPolls201ApplicationJsonPolls = exports.CreateBatchPolls201ApplicationJsonPollsStatusEnum = exports.CreateBatchPolls201ApplicationJsonPollsQuestions = exports.CreateBatchPolls201ApplicationJsonPollsQuestionsTypeEnum = exports.CreateBatchPollsRequests = exports.CreateBatchPollsMultipartFormData1 = exports.CreateBatchPollsMultipartFormDataQuestions = exports.CreateBatchPollsMultipartFormDataQuestionsTypeEnum = exports.CreateBatchPollsApplicationJson = exports.CreateBatchPollsApplicationJsonQuestions = exports.CreateBatchPollsApplicationJsonQuestionsTypeEnum = exports.CreateBatchPollsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var CreateBatchPollsPathParams = /** @class */ (function (_super) {
    __extends(CreateBatchPollsPathParams, _super);
    function CreateBatchPollsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", String)
    ], CreateBatchPollsPathParams.prototype, "meetingId", void 0);
    return CreateBatchPollsPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateBatchPollsPathParams = CreateBatchPollsPathParams;
var CreateBatchPollsApplicationJsonQuestionsTypeEnum;
(function (CreateBatchPollsApplicationJsonQuestionsTypeEnum) {
    CreateBatchPollsApplicationJsonQuestionsTypeEnum["Single"] = "single";
    CreateBatchPollsApplicationJsonQuestionsTypeEnum["Multiple"] = "multiple";
})(CreateBatchPollsApplicationJsonQuestionsTypeEnum = exports.CreateBatchPollsApplicationJsonQuestionsTypeEnum || (exports.CreateBatchPollsApplicationJsonQuestionsTypeEnum = {}));
var CreateBatchPollsApplicationJsonQuestions = /** @class */ (function (_super) {
    __extends(CreateBatchPollsApplicationJsonQuestions, _super);
    function CreateBatchPollsApplicationJsonQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answers" }),
        __metadata("design:type", Array)
    ], CreateBatchPollsApplicationJsonQuestions.prototype, "answers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateBatchPollsApplicationJsonQuestions.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateBatchPollsApplicationJsonQuestions.prototype, "type", void 0);
    return CreateBatchPollsApplicationJsonQuestions;
}(utils_1.SpeakeasyBase));
exports.CreateBatchPollsApplicationJsonQuestions = CreateBatchPollsApplicationJsonQuestions;
var CreateBatchPollsApplicationJson = /** @class */ (function (_super) {
    __extends(CreateBatchPollsApplicationJson, _super);
    function CreateBatchPollsApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=questions", elemType: CreateBatchPollsApplicationJsonQuestions }),
        __metadata("design:type", Array)
    ], CreateBatchPollsApplicationJson.prototype, "questions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], CreateBatchPollsApplicationJson.prototype, "title", void 0);
    return CreateBatchPollsApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateBatchPollsApplicationJson = CreateBatchPollsApplicationJson;
var CreateBatchPollsMultipartFormDataQuestionsTypeEnum;
(function (CreateBatchPollsMultipartFormDataQuestionsTypeEnum) {
    CreateBatchPollsMultipartFormDataQuestionsTypeEnum["Single"] = "single";
    CreateBatchPollsMultipartFormDataQuestionsTypeEnum["Multiple"] = "multiple";
})(CreateBatchPollsMultipartFormDataQuestionsTypeEnum = exports.CreateBatchPollsMultipartFormDataQuestionsTypeEnum || (exports.CreateBatchPollsMultipartFormDataQuestionsTypeEnum = {}));
var CreateBatchPollsMultipartFormDataQuestions = /** @class */ (function (_super) {
    __extends(CreateBatchPollsMultipartFormDataQuestions, _super);
    function CreateBatchPollsMultipartFormDataQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answers" }),
        __metadata("design:type", Array)
    ], CreateBatchPollsMultipartFormDataQuestions.prototype, "answers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateBatchPollsMultipartFormDataQuestions.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateBatchPollsMultipartFormDataQuestions.prototype, "type", void 0);
    return CreateBatchPollsMultipartFormDataQuestions;
}(utils_1.SpeakeasyBase));
exports.CreateBatchPollsMultipartFormDataQuestions = CreateBatchPollsMultipartFormDataQuestions;
var CreateBatchPollsMultipartFormData1 = /** @class */ (function (_super) {
    __extends(CreateBatchPollsMultipartFormData1, _super);
    function CreateBatchPollsMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=questions;json=true", elemType: CreateBatchPollsMultipartFormDataQuestions }),
        __metadata("design:type", Array)
    ], CreateBatchPollsMultipartFormData1.prototype, "questions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=title" }),
        __metadata("design:type", String)
    ], CreateBatchPollsMultipartFormData1.prototype, "title", void 0);
    return CreateBatchPollsMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.CreateBatchPollsMultipartFormData1 = CreateBatchPollsMultipartFormData1;
var CreateBatchPollsRequests = /** @class */ (function (_super) {
    __extends(CreateBatchPollsRequests, _super);
    function CreateBatchPollsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateBatchPollsApplicationJson)
    ], CreateBatchPollsRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", CreateBatchPollsMultipartFormData1)
    ], CreateBatchPollsRequests.prototype, "object1", void 0);
    return CreateBatchPollsRequests;
}(utils_1.SpeakeasyBase));
exports.CreateBatchPollsRequests = CreateBatchPollsRequests;
var CreateBatchPolls201ApplicationJsonPollsQuestionsTypeEnum;
(function (CreateBatchPolls201ApplicationJsonPollsQuestionsTypeEnum) {
    CreateBatchPolls201ApplicationJsonPollsQuestionsTypeEnum["Single"] = "single";
    CreateBatchPolls201ApplicationJsonPollsQuestionsTypeEnum["Multiple"] = "multiple";
})(CreateBatchPolls201ApplicationJsonPollsQuestionsTypeEnum = exports.CreateBatchPolls201ApplicationJsonPollsQuestionsTypeEnum || (exports.CreateBatchPolls201ApplicationJsonPollsQuestionsTypeEnum = {}));
var CreateBatchPolls201ApplicationJsonPollsQuestions = /** @class */ (function (_super) {
    __extends(CreateBatchPolls201ApplicationJsonPollsQuestions, _super);
    function CreateBatchPolls201ApplicationJsonPollsQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answers" }),
        __metadata("design:type", Array)
    ], CreateBatchPolls201ApplicationJsonPollsQuestions.prototype, "answers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateBatchPolls201ApplicationJsonPollsQuestions.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateBatchPolls201ApplicationJsonPollsQuestions.prototype, "type", void 0);
    return CreateBatchPolls201ApplicationJsonPollsQuestions;
}(utils_1.SpeakeasyBase));
exports.CreateBatchPolls201ApplicationJsonPollsQuestions = CreateBatchPolls201ApplicationJsonPollsQuestions;
var CreateBatchPolls201ApplicationJsonPollsStatusEnum;
(function (CreateBatchPolls201ApplicationJsonPollsStatusEnum) {
    CreateBatchPolls201ApplicationJsonPollsStatusEnum["Notstart"] = "notstart";
    CreateBatchPolls201ApplicationJsonPollsStatusEnum["Started"] = "started";
    CreateBatchPolls201ApplicationJsonPollsStatusEnum["Ended"] = "ended";
    CreateBatchPolls201ApplicationJsonPollsStatusEnum["Sharing"] = "sharing";
})(CreateBatchPolls201ApplicationJsonPollsStatusEnum = exports.CreateBatchPolls201ApplicationJsonPollsStatusEnum || (exports.CreateBatchPolls201ApplicationJsonPollsStatusEnum = {}));
var CreateBatchPolls201ApplicationJsonPolls = /** @class */ (function (_super) {
    __extends(CreateBatchPolls201ApplicationJsonPolls, _super);
    function CreateBatchPolls201ApplicationJsonPolls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateBatchPolls201ApplicationJsonPolls.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=questions", elemType: CreateBatchPolls201ApplicationJsonPollsQuestions }),
        __metadata("design:type", Array)
    ], CreateBatchPolls201ApplicationJsonPolls.prototype, "questions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CreateBatchPolls201ApplicationJsonPolls.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], CreateBatchPolls201ApplicationJsonPolls.prototype, "title", void 0);
    return CreateBatchPolls201ApplicationJsonPolls;
}(utils_1.SpeakeasyBase));
exports.CreateBatchPolls201ApplicationJsonPolls = CreateBatchPolls201ApplicationJsonPolls;
var CreateBatchPolls201ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateBatchPolls201ApplicationJson, _super);
    function CreateBatchPolls201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=polls", elemType: CreateBatchPolls201ApplicationJsonPolls }),
        __metadata("design:type", Array)
    ], CreateBatchPolls201ApplicationJson.prototype, "polls", void 0);
    return CreateBatchPolls201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateBatchPolls201ApplicationJson = CreateBatchPolls201ApplicationJson;
var CreateBatchPollsRequest = /** @class */ (function (_super) {
    __extends(CreateBatchPollsRequest, _super);
    function CreateBatchPollsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateBatchPollsPathParams)
    ], CreateBatchPollsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateBatchPollsRequests)
    ], CreateBatchPollsRequest.prototype, "request", void 0);
    return CreateBatchPollsRequest;
}(utils_1.SpeakeasyBase));
exports.CreateBatchPollsRequest = CreateBatchPollsRequest;
var CreateBatchPollsResponse = /** @class */ (function (_super) {
    __extends(CreateBatchPollsResponse, _super);
    function CreateBatchPollsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], CreateBatchPollsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateBatchPollsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateBatchPollsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateBatchPolls201ApplicationJson)
    ], CreateBatchPollsResponse.prototype, "createBatchPolls201ApplicationJSONObject", void 0);
    return CreateBatchPollsResponse;
}(utils_1.SpeakeasyBase));
exports.CreateBatchPollsResponse = CreateBatchPollsResponse;
