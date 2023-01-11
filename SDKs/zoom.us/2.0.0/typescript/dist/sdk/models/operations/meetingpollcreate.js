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
exports.MeetingPollCreateResponse = exports.MeetingPollCreateRequest = exports.MeetingPollCreatePoll2 = exports.MeetingPollCreatePollStatusEnum = exports.MeetingPollCreateSecurity = exports.MeetingPollCreateRequests = exports.MeetingPollCreatePoll = exports.MeetingPollCreatePollQuestions = exports.MeetingPollCreatePollQuestionsTypeEnum = exports.MeetingPollCreatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MeetingPollCreatePathParams = /** @class */ (function (_super) {
    __extends(MeetingPollCreatePathParams, _super);
    function MeetingPollCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", Number)
    ], MeetingPollCreatePathParams.prototype, "meetingId", void 0);
    return MeetingPollCreatePathParams;
}(utils_1.SpeakeasyBase));
exports.MeetingPollCreatePathParams = MeetingPollCreatePathParams;
var MeetingPollCreatePollQuestionsTypeEnum;
(function (MeetingPollCreatePollQuestionsTypeEnum) {
    MeetingPollCreatePollQuestionsTypeEnum["Single"] = "single";
    MeetingPollCreatePollQuestionsTypeEnum["Multiple"] = "multiple";
})(MeetingPollCreatePollQuestionsTypeEnum = exports.MeetingPollCreatePollQuestionsTypeEnum || (exports.MeetingPollCreatePollQuestionsTypeEnum = {}));
var MeetingPollCreatePollQuestions = /** @class */ (function (_super) {
    __extends(MeetingPollCreatePollQuestions, _super);
    function MeetingPollCreatePollQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answers" }),
        __metadata("design:type", Array)
    ], MeetingPollCreatePollQuestions.prototype, "answers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MeetingPollCreatePollQuestions.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], MeetingPollCreatePollQuestions.prototype, "type", void 0);
    return MeetingPollCreatePollQuestions;
}(utils_1.SpeakeasyBase));
exports.MeetingPollCreatePollQuestions = MeetingPollCreatePollQuestions;
// MeetingPollCreatePoll
/**
 * Poll
**/
var MeetingPollCreatePoll = /** @class */ (function (_super) {
    __extends(MeetingPollCreatePoll, _super);
    function MeetingPollCreatePoll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=questions, multipart_form, name=questions;json=true", elemType: MeetingPollCreatePollQuestions }),
        __metadata("design:type", Array)
    ], MeetingPollCreatePoll.prototype, "questions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title, multipart_form, name=title" }),
        __metadata("design:type", String)
    ], MeetingPollCreatePoll.prototype, "title", void 0);
    return MeetingPollCreatePoll;
}(utils_1.SpeakeasyBase));
exports.MeetingPollCreatePoll = MeetingPollCreatePoll;
var MeetingPollCreateRequests = /** @class */ (function (_super) {
    __extends(MeetingPollCreateRequests, _super);
    function MeetingPollCreateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", MeetingPollCreatePoll)
    ], MeetingPollCreateRequests.prototype, "poll", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", MeetingPollCreatePoll)
    ], MeetingPollCreateRequests.prototype, "poll1", void 0);
    return MeetingPollCreateRequests;
}(utils_1.SpeakeasyBase));
exports.MeetingPollCreateRequests = MeetingPollCreateRequests;
var MeetingPollCreateSecurity = /** @class */ (function (_super) {
    __extends(MeetingPollCreateSecurity, _super);
    function MeetingPollCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], MeetingPollCreateSecurity.prototype, "oAuth", void 0);
    return MeetingPollCreateSecurity;
}(utils_1.SpeakeasyBase));
exports.MeetingPollCreateSecurity = MeetingPollCreateSecurity;
var MeetingPollCreatePollStatusEnum;
(function (MeetingPollCreatePollStatusEnum) {
    MeetingPollCreatePollStatusEnum["Notstart"] = "notstart";
    MeetingPollCreatePollStatusEnum["Started"] = "started";
    MeetingPollCreatePollStatusEnum["Ended"] = "ended";
    MeetingPollCreatePollStatusEnum["Sharing"] = "sharing";
})(MeetingPollCreatePollStatusEnum = exports.MeetingPollCreatePollStatusEnum || (exports.MeetingPollCreatePollStatusEnum = {}));
// MeetingPollCreatePoll2
/**
 * Poll
**/
var MeetingPollCreatePoll2 = /** @class */ (function (_super) {
    __extends(MeetingPollCreatePoll2, _super);
    function MeetingPollCreatePoll2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], MeetingPollCreatePoll2.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=questions", elemType: MeetingPollCreatePollQuestions }),
        __metadata("design:type", Array)
    ], MeetingPollCreatePoll2.prototype, "questions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], MeetingPollCreatePoll2.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], MeetingPollCreatePoll2.prototype, "title", void 0);
    return MeetingPollCreatePoll2;
}(utils_1.SpeakeasyBase));
exports.MeetingPollCreatePoll2 = MeetingPollCreatePoll2;
var MeetingPollCreateRequest = /** @class */ (function (_super) {
    __extends(MeetingPollCreateRequest, _super);
    function MeetingPollCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingPollCreatePathParams)
    ], MeetingPollCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingPollCreateRequests)
    ], MeetingPollCreateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingPollCreateSecurity)
    ], MeetingPollCreateRequest.prototype, "security", void 0);
    return MeetingPollCreateRequest;
}(utils_1.SpeakeasyBase));
exports.MeetingPollCreateRequest = MeetingPollCreateRequest;
var MeetingPollCreateResponse = /** @class */ (function (_super) {
    __extends(MeetingPollCreateResponse, _super);
    function MeetingPollCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], MeetingPollCreateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MeetingPollCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MeetingPollCreateResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingPollCreatePoll2)
    ], MeetingPollCreateResponse.prototype, "poll", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MeetingPollCreateResponse.prototype, "statusCode", void 0);
    return MeetingPollCreateResponse;
}(utils_1.SpeakeasyBase));
exports.MeetingPollCreateResponse = MeetingPollCreateResponse;
