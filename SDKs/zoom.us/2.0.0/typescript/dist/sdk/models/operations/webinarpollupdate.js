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
exports.WebinarPollUpdateResponse = exports.WebinarPollUpdateRequest = exports.WebinarPollUpdateSecurity = exports.WebinarPollUpdateRequests = exports.WebinarPollUpdatePoll = exports.WebinarPollUpdatePollQuestions = exports.WebinarPollUpdatePollQuestionsTypeEnum = exports.WebinarPollUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var WebinarPollUpdatePathParams = /** @class */ (function (_super) {
    __extends(WebinarPollUpdatePathParams, _super);
    function WebinarPollUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=pollId" }),
        __metadata("design:type", String)
    ], WebinarPollUpdatePathParams.prototype, "pollId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", Number)
    ], WebinarPollUpdatePathParams.prototype, "webinarId", void 0);
    return WebinarPollUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.WebinarPollUpdatePathParams = WebinarPollUpdatePathParams;
var WebinarPollUpdatePollQuestionsTypeEnum;
(function (WebinarPollUpdatePollQuestionsTypeEnum) {
    WebinarPollUpdatePollQuestionsTypeEnum["Single"] = "single";
    WebinarPollUpdatePollQuestionsTypeEnum["Multiple"] = "multiple";
})(WebinarPollUpdatePollQuestionsTypeEnum = exports.WebinarPollUpdatePollQuestionsTypeEnum || (exports.WebinarPollUpdatePollQuestionsTypeEnum = {}));
var WebinarPollUpdatePollQuestions = /** @class */ (function (_super) {
    __extends(WebinarPollUpdatePollQuestions, _super);
    function WebinarPollUpdatePollQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answers" }),
        __metadata("design:type", Array)
    ], WebinarPollUpdatePollQuestions.prototype, "answers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WebinarPollUpdatePollQuestions.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WebinarPollUpdatePollQuestions.prototype, "type", void 0);
    return WebinarPollUpdatePollQuestions;
}(utils_1.SpeakeasyBase));
exports.WebinarPollUpdatePollQuestions = WebinarPollUpdatePollQuestions;
// WebinarPollUpdatePoll
/**
 * Poll
**/
var WebinarPollUpdatePoll = /** @class */ (function (_super) {
    __extends(WebinarPollUpdatePoll, _super);
    function WebinarPollUpdatePoll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=questions, multipart_form, name=questions;json=true", elemType: WebinarPollUpdatePollQuestions }),
        __metadata("design:type", Array)
    ], WebinarPollUpdatePoll.prototype, "questions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title, multipart_form, name=title" }),
        __metadata("design:type", String)
    ], WebinarPollUpdatePoll.prototype, "title", void 0);
    return WebinarPollUpdatePoll;
}(utils_1.SpeakeasyBase));
exports.WebinarPollUpdatePoll = WebinarPollUpdatePoll;
var WebinarPollUpdateRequests = /** @class */ (function (_super) {
    __extends(WebinarPollUpdateRequests, _super);
    function WebinarPollUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", WebinarPollUpdatePoll)
    ], WebinarPollUpdateRequests.prototype, "poll", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", WebinarPollUpdatePoll)
    ], WebinarPollUpdateRequests.prototype, "poll1", void 0);
    return WebinarPollUpdateRequests;
}(utils_1.SpeakeasyBase));
exports.WebinarPollUpdateRequests = WebinarPollUpdateRequests;
var WebinarPollUpdateSecurity = /** @class */ (function (_super) {
    __extends(WebinarPollUpdateSecurity, _super);
    function WebinarPollUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], WebinarPollUpdateSecurity.prototype, "oAuth", void 0);
    return WebinarPollUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.WebinarPollUpdateSecurity = WebinarPollUpdateSecurity;
var WebinarPollUpdateRequest = /** @class */ (function (_super) {
    __extends(WebinarPollUpdateRequest, _super);
    function WebinarPollUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarPollUpdatePathParams)
    ], WebinarPollUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarPollUpdateRequests)
    ], WebinarPollUpdateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarPollUpdateSecurity)
    ], WebinarPollUpdateRequest.prototype, "security", void 0);
    return WebinarPollUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.WebinarPollUpdateRequest = WebinarPollUpdateRequest;
var WebinarPollUpdateResponse = /** @class */ (function (_super) {
    __extends(WebinarPollUpdateResponse, _super);
    function WebinarPollUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], WebinarPollUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], WebinarPollUpdateResponse.prototype, "statusCode", void 0);
    return WebinarPollUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.WebinarPollUpdateResponse = WebinarPollUpdateResponse;
