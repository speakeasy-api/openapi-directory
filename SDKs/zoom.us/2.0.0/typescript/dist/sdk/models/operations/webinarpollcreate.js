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
exports.WebinarPollCreateResponse = exports.WebinarPollCreateRequest = exports.WebinarPollCreatePoll2 = exports.WebinarPollCreatePollStatusEnum = exports.WebinarPollCreateSecurity = exports.WebinarPollCreateRequests = exports.WebinarPollCreatePoll = exports.WebinarPollCreatePollQuestions = exports.WebinarPollCreatePollQuestionsTypeEnum = exports.WebinarPollCreatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var WebinarPollCreatePathParams = /** @class */ (function (_super) {
    __extends(WebinarPollCreatePathParams, _super);
    function WebinarPollCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", Number)
    ], WebinarPollCreatePathParams.prototype, "webinarId", void 0);
    return WebinarPollCreatePathParams;
}(utils_1.SpeakeasyBase));
exports.WebinarPollCreatePathParams = WebinarPollCreatePathParams;
var WebinarPollCreatePollQuestionsTypeEnum;
(function (WebinarPollCreatePollQuestionsTypeEnum) {
    WebinarPollCreatePollQuestionsTypeEnum["Single"] = "single";
    WebinarPollCreatePollQuestionsTypeEnum["Multiple"] = "multiple";
})(WebinarPollCreatePollQuestionsTypeEnum = exports.WebinarPollCreatePollQuestionsTypeEnum || (exports.WebinarPollCreatePollQuestionsTypeEnum = {}));
var WebinarPollCreatePollQuestions = /** @class */ (function (_super) {
    __extends(WebinarPollCreatePollQuestions, _super);
    function WebinarPollCreatePollQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answers" }),
        __metadata("design:type", Array)
    ], WebinarPollCreatePollQuestions.prototype, "answers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WebinarPollCreatePollQuestions.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WebinarPollCreatePollQuestions.prototype, "type", void 0);
    return WebinarPollCreatePollQuestions;
}(utils_1.SpeakeasyBase));
exports.WebinarPollCreatePollQuestions = WebinarPollCreatePollQuestions;
// WebinarPollCreatePoll
/**
 * Poll
**/
var WebinarPollCreatePoll = /** @class */ (function (_super) {
    __extends(WebinarPollCreatePoll, _super);
    function WebinarPollCreatePoll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=questions, multipart_form, name=questions;json=true", elemType: WebinarPollCreatePollQuestions }),
        __metadata("design:type", Array)
    ], WebinarPollCreatePoll.prototype, "questions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title, multipart_form, name=title" }),
        __metadata("design:type", String)
    ], WebinarPollCreatePoll.prototype, "title", void 0);
    return WebinarPollCreatePoll;
}(utils_1.SpeakeasyBase));
exports.WebinarPollCreatePoll = WebinarPollCreatePoll;
var WebinarPollCreateRequests = /** @class */ (function (_super) {
    __extends(WebinarPollCreateRequests, _super);
    function WebinarPollCreateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", WebinarPollCreatePoll)
    ], WebinarPollCreateRequests.prototype, "poll", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", WebinarPollCreatePoll)
    ], WebinarPollCreateRequests.prototype, "poll1", void 0);
    return WebinarPollCreateRequests;
}(utils_1.SpeakeasyBase));
exports.WebinarPollCreateRequests = WebinarPollCreateRequests;
var WebinarPollCreateSecurity = /** @class */ (function (_super) {
    __extends(WebinarPollCreateSecurity, _super);
    function WebinarPollCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], WebinarPollCreateSecurity.prototype, "oAuth", void 0);
    return WebinarPollCreateSecurity;
}(utils_1.SpeakeasyBase));
exports.WebinarPollCreateSecurity = WebinarPollCreateSecurity;
var WebinarPollCreatePollStatusEnum;
(function (WebinarPollCreatePollStatusEnum) {
    WebinarPollCreatePollStatusEnum["Notstart"] = "notstart";
    WebinarPollCreatePollStatusEnum["Started"] = "started";
    WebinarPollCreatePollStatusEnum["Ended"] = "ended";
    WebinarPollCreatePollStatusEnum["Sharing"] = "sharing";
})(WebinarPollCreatePollStatusEnum = exports.WebinarPollCreatePollStatusEnum || (exports.WebinarPollCreatePollStatusEnum = {}));
// WebinarPollCreatePoll2
/**
 * Poll
**/
var WebinarPollCreatePoll2 = /** @class */ (function (_super) {
    __extends(WebinarPollCreatePoll2, _super);
    function WebinarPollCreatePoll2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], WebinarPollCreatePoll2.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=questions", elemType: WebinarPollCreatePollQuestions }),
        __metadata("design:type", Array)
    ], WebinarPollCreatePoll2.prototype, "questions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], WebinarPollCreatePoll2.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], WebinarPollCreatePoll2.prototype, "title", void 0);
    return WebinarPollCreatePoll2;
}(utils_1.SpeakeasyBase));
exports.WebinarPollCreatePoll2 = WebinarPollCreatePoll2;
var WebinarPollCreateRequest = /** @class */ (function (_super) {
    __extends(WebinarPollCreateRequest, _super);
    function WebinarPollCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarPollCreatePathParams)
    ], WebinarPollCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarPollCreateRequests)
    ], WebinarPollCreateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarPollCreateSecurity)
    ], WebinarPollCreateRequest.prototype, "security", void 0);
    return WebinarPollCreateRequest;
}(utils_1.SpeakeasyBase));
exports.WebinarPollCreateRequest = WebinarPollCreateRequest;
var WebinarPollCreateResponse = /** @class */ (function (_super) {
    __extends(WebinarPollCreateResponse, _super);
    function WebinarPollCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], WebinarPollCreateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], WebinarPollCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], WebinarPollCreateResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarPollCreatePoll2)
    ], WebinarPollCreateResponse.prototype, "poll", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], WebinarPollCreateResponse.prototype, "statusCode", void 0);
    return WebinarPollCreateResponse;
}(utils_1.SpeakeasyBase));
exports.WebinarPollCreateResponse = WebinarPollCreateResponse;
