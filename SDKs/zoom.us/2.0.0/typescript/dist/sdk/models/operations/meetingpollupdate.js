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
exports.MeetingPollUpdateResponse = exports.MeetingPollUpdateRequest = exports.MeetingPollUpdateSecurity = exports.MeetingPollUpdateRequests = exports.MeetingPollUpdatePoll = exports.MeetingPollUpdatePollQuestions = exports.MeetingPollUpdatePollQuestionsTypeEnum = exports.MeetingPollUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MeetingPollUpdatePathParams = /** @class */ (function (_super) {
    __extends(MeetingPollUpdatePathParams, _super);
    function MeetingPollUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", Number)
    ], MeetingPollUpdatePathParams.prototype, "meetingId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=pollId" }),
        __metadata("design:type", String)
    ], MeetingPollUpdatePathParams.prototype, "pollId", void 0);
    return MeetingPollUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.MeetingPollUpdatePathParams = MeetingPollUpdatePathParams;
var MeetingPollUpdatePollQuestionsTypeEnum;
(function (MeetingPollUpdatePollQuestionsTypeEnum) {
    MeetingPollUpdatePollQuestionsTypeEnum["Single"] = "single";
    MeetingPollUpdatePollQuestionsTypeEnum["Multiple"] = "multiple";
})(MeetingPollUpdatePollQuestionsTypeEnum = exports.MeetingPollUpdatePollQuestionsTypeEnum || (exports.MeetingPollUpdatePollQuestionsTypeEnum = {}));
var MeetingPollUpdatePollQuestions = /** @class */ (function (_super) {
    __extends(MeetingPollUpdatePollQuestions, _super);
    function MeetingPollUpdatePollQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answers" }),
        __metadata("design:type", Array)
    ], MeetingPollUpdatePollQuestions.prototype, "answers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MeetingPollUpdatePollQuestions.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], MeetingPollUpdatePollQuestions.prototype, "type", void 0);
    return MeetingPollUpdatePollQuestions;
}(utils_1.SpeakeasyBase));
exports.MeetingPollUpdatePollQuestions = MeetingPollUpdatePollQuestions;
// MeetingPollUpdatePoll
/**
 * Poll
**/
var MeetingPollUpdatePoll = /** @class */ (function (_super) {
    __extends(MeetingPollUpdatePoll, _super);
    function MeetingPollUpdatePoll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=questions, multipart_form, name=questions;json=true", elemType: MeetingPollUpdatePollQuestions }),
        __metadata("design:type", Array)
    ], MeetingPollUpdatePoll.prototype, "questions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title, multipart_form, name=title" }),
        __metadata("design:type", String)
    ], MeetingPollUpdatePoll.prototype, "title", void 0);
    return MeetingPollUpdatePoll;
}(utils_1.SpeakeasyBase));
exports.MeetingPollUpdatePoll = MeetingPollUpdatePoll;
var MeetingPollUpdateRequests = /** @class */ (function (_super) {
    __extends(MeetingPollUpdateRequests, _super);
    function MeetingPollUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", MeetingPollUpdatePoll)
    ], MeetingPollUpdateRequests.prototype, "poll", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", MeetingPollUpdatePoll)
    ], MeetingPollUpdateRequests.prototype, "poll1", void 0);
    return MeetingPollUpdateRequests;
}(utils_1.SpeakeasyBase));
exports.MeetingPollUpdateRequests = MeetingPollUpdateRequests;
var MeetingPollUpdateSecurity = /** @class */ (function (_super) {
    __extends(MeetingPollUpdateSecurity, _super);
    function MeetingPollUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], MeetingPollUpdateSecurity.prototype, "oAuth", void 0);
    return MeetingPollUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.MeetingPollUpdateSecurity = MeetingPollUpdateSecurity;
var MeetingPollUpdateRequest = /** @class */ (function (_super) {
    __extends(MeetingPollUpdateRequest, _super);
    function MeetingPollUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingPollUpdatePathParams)
    ], MeetingPollUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingPollUpdateRequests)
    ], MeetingPollUpdateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingPollUpdateSecurity)
    ], MeetingPollUpdateRequest.prototype, "security", void 0);
    return MeetingPollUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.MeetingPollUpdateRequest = MeetingPollUpdateRequest;
var MeetingPollUpdateResponse = /** @class */ (function (_super) {
    __extends(MeetingPollUpdateResponse, _super);
    function MeetingPollUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MeetingPollUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MeetingPollUpdateResponse.prototype, "statusCode", void 0);
    return MeetingPollUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.MeetingPollUpdateResponse = MeetingPollUpdateResponse;
