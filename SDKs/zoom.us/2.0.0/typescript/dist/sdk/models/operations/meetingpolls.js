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
exports.MeetingPollsResponse = exports.MeetingPollsRequest = exports.MeetingPollsPollList = exports.MeetingPollsPollListPoll = exports.MeetingPollsPollListPollStatusEnum = exports.MeetingPollsPollListPollQuestions = exports.MeetingPollsPollListPollQuestionsTypeEnum = exports.MeetingPollsSecurity = exports.MeetingPollsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MeetingPollsPathParams = /** @class */ (function (_super) {
    __extends(MeetingPollsPathParams, _super);
    function MeetingPollsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", Number)
    ], MeetingPollsPathParams.prototype, "meetingId", void 0);
    return MeetingPollsPathParams;
}(utils_1.SpeakeasyBase));
exports.MeetingPollsPathParams = MeetingPollsPathParams;
var MeetingPollsSecurity = /** @class */ (function (_super) {
    __extends(MeetingPollsSecurity, _super);
    function MeetingPollsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], MeetingPollsSecurity.prototype, "oAuth", void 0);
    return MeetingPollsSecurity;
}(utils_1.SpeakeasyBase));
exports.MeetingPollsSecurity = MeetingPollsSecurity;
var MeetingPollsPollListPollQuestionsTypeEnum;
(function (MeetingPollsPollListPollQuestionsTypeEnum) {
    MeetingPollsPollListPollQuestionsTypeEnum["Single"] = "single";
    MeetingPollsPollListPollQuestionsTypeEnum["Multiple"] = "multiple";
})(MeetingPollsPollListPollQuestionsTypeEnum = exports.MeetingPollsPollListPollQuestionsTypeEnum || (exports.MeetingPollsPollListPollQuestionsTypeEnum = {}));
var MeetingPollsPollListPollQuestions = /** @class */ (function (_super) {
    __extends(MeetingPollsPollListPollQuestions, _super);
    function MeetingPollsPollListPollQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answers" }),
        __metadata("design:type", Array)
    ], MeetingPollsPollListPollQuestions.prototype, "answers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MeetingPollsPollListPollQuestions.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], MeetingPollsPollListPollQuestions.prototype, "type", void 0);
    return MeetingPollsPollListPollQuestions;
}(utils_1.SpeakeasyBase));
exports.MeetingPollsPollListPollQuestions = MeetingPollsPollListPollQuestions;
var MeetingPollsPollListPollStatusEnum;
(function (MeetingPollsPollListPollStatusEnum) {
    MeetingPollsPollListPollStatusEnum["Notstart"] = "notstart";
    MeetingPollsPollListPollStatusEnum["Started"] = "started";
    MeetingPollsPollListPollStatusEnum["Ended"] = "ended";
    MeetingPollsPollListPollStatusEnum["Sharing"] = "sharing";
})(MeetingPollsPollListPollStatusEnum = exports.MeetingPollsPollListPollStatusEnum || (exports.MeetingPollsPollListPollStatusEnum = {}));
// MeetingPollsPollListPoll
/**
 * Poll
**/
var MeetingPollsPollListPoll = /** @class */ (function (_super) {
    __extends(MeetingPollsPollListPoll, _super);
    function MeetingPollsPollListPoll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], MeetingPollsPollListPoll.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=questions", elemType: MeetingPollsPollListPollQuestions }),
        __metadata("design:type", Array)
    ], MeetingPollsPollListPoll.prototype, "questions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], MeetingPollsPollListPoll.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], MeetingPollsPollListPoll.prototype, "title", void 0);
    return MeetingPollsPollListPoll;
}(utils_1.SpeakeasyBase));
exports.MeetingPollsPollListPoll = MeetingPollsPollListPoll;
// MeetingPollsPollList
/**
 * Poll List
**/
var MeetingPollsPollList = /** @class */ (function (_super) {
    __extends(MeetingPollsPollList, _super);
    function MeetingPollsPollList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=polls", elemType: MeetingPollsPollListPoll }),
        __metadata("design:type", Array)
    ], MeetingPollsPollList.prototype, "polls", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], MeetingPollsPollList.prototype, "totalRecords", void 0);
    return MeetingPollsPollList;
}(utils_1.SpeakeasyBase));
exports.MeetingPollsPollList = MeetingPollsPollList;
var MeetingPollsRequest = /** @class */ (function (_super) {
    __extends(MeetingPollsRequest, _super);
    function MeetingPollsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingPollsPathParams)
    ], MeetingPollsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingPollsSecurity)
    ], MeetingPollsRequest.prototype, "security", void 0);
    return MeetingPollsRequest;
}(utils_1.SpeakeasyBase));
exports.MeetingPollsRequest = MeetingPollsRequest;
var MeetingPollsResponse = /** @class */ (function (_super) {
    __extends(MeetingPollsResponse, _super);
    function MeetingPollsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], MeetingPollsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MeetingPollsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingPollsPollList)
    ], MeetingPollsResponse.prototype, "pollList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MeetingPollsResponse.prototype, "statusCode", void 0);
    return MeetingPollsResponse;
}(utils_1.SpeakeasyBase));
exports.MeetingPollsResponse = MeetingPollsResponse;
