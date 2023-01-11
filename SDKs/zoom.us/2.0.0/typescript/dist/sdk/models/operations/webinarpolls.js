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
exports.WebinarPollsResponse = exports.WebinarPollsRequest = exports.WebinarPollsPollList = exports.WebinarPollsPollListPoll = exports.WebinarPollsPollListPollStatusEnum = exports.WebinarPollsPollListPollQuestions = exports.WebinarPollsPollListPollQuestionsTypeEnum = exports.WebinarPollsSecurity = exports.WebinarPollsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var WebinarPollsPathParams = /** @class */ (function (_super) {
    __extends(WebinarPollsPathParams, _super);
    function WebinarPollsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", Number)
    ], WebinarPollsPathParams.prototype, "webinarId", void 0);
    return WebinarPollsPathParams;
}(utils_1.SpeakeasyBase));
exports.WebinarPollsPathParams = WebinarPollsPathParams;
var WebinarPollsSecurity = /** @class */ (function (_super) {
    __extends(WebinarPollsSecurity, _super);
    function WebinarPollsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], WebinarPollsSecurity.prototype, "oAuth", void 0);
    return WebinarPollsSecurity;
}(utils_1.SpeakeasyBase));
exports.WebinarPollsSecurity = WebinarPollsSecurity;
var WebinarPollsPollListPollQuestionsTypeEnum;
(function (WebinarPollsPollListPollQuestionsTypeEnum) {
    WebinarPollsPollListPollQuestionsTypeEnum["Single"] = "single";
    WebinarPollsPollListPollQuestionsTypeEnum["Multiple"] = "multiple";
})(WebinarPollsPollListPollQuestionsTypeEnum = exports.WebinarPollsPollListPollQuestionsTypeEnum || (exports.WebinarPollsPollListPollQuestionsTypeEnum = {}));
var WebinarPollsPollListPollQuestions = /** @class */ (function (_super) {
    __extends(WebinarPollsPollListPollQuestions, _super);
    function WebinarPollsPollListPollQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answers" }),
        __metadata("design:type", Array)
    ], WebinarPollsPollListPollQuestions.prototype, "answers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WebinarPollsPollListPollQuestions.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WebinarPollsPollListPollQuestions.prototype, "type", void 0);
    return WebinarPollsPollListPollQuestions;
}(utils_1.SpeakeasyBase));
exports.WebinarPollsPollListPollQuestions = WebinarPollsPollListPollQuestions;
var WebinarPollsPollListPollStatusEnum;
(function (WebinarPollsPollListPollStatusEnum) {
    WebinarPollsPollListPollStatusEnum["Notstart"] = "notstart";
    WebinarPollsPollListPollStatusEnum["Started"] = "started";
    WebinarPollsPollListPollStatusEnum["Ended"] = "ended";
    WebinarPollsPollListPollStatusEnum["Sharing"] = "sharing";
})(WebinarPollsPollListPollStatusEnum = exports.WebinarPollsPollListPollStatusEnum || (exports.WebinarPollsPollListPollStatusEnum = {}));
// WebinarPollsPollListPoll
/**
 * Poll
**/
var WebinarPollsPollListPoll = /** @class */ (function (_super) {
    __extends(WebinarPollsPollListPoll, _super);
    function WebinarPollsPollListPoll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], WebinarPollsPollListPoll.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=questions", elemType: WebinarPollsPollListPollQuestions }),
        __metadata("design:type", Array)
    ], WebinarPollsPollListPoll.prototype, "questions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], WebinarPollsPollListPoll.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], WebinarPollsPollListPoll.prototype, "title", void 0);
    return WebinarPollsPollListPoll;
}(utils_1.SpeakeasyBase));
exports.WebinarPollsPollListPoll = WebinarPollsPollListPoll;
// WebinarPollsPollList
/**
 * Poll List
**/
var WebinarPollsPollList = /** @class */ (function (_super) {
    __extends(WebinarPollsPollList, _super);
    function WebinarPollsPollList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=polls", elemType: WebinarPollsPollListPoll }),
        __metadata("design:type", Array)
    ], WebinarPollsPollList.prototype, "polls", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], WebinarPollsPollList.prototype, "totalRecords", void 0);
    return WebinarPollsPollList;
}(utils_1.SpeakeasyBase));
exports.WebinarPollsPollList = WebinarPollsPollList;
var WebinarPollsRequest = /** @class */ (function (_super) {
    __extends(WebinarPollsRequest, _super);
    function WebinarPollsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarPollsPathParams)
    ], WebinarPollsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarPollsSecurity)
    ], WebinarPollsRequest.prototype, "security", void 0);
    return WebinarPollsRequest;
}(utils_1.SpeakeasyBase));
exports.WebinarPollsRequest = WebinarPollsRequest;
var WebinarPollsResponse = /** @class */ (function (_super) {
    __extends(WebinarPollsResponse, _super);
    function WebinarPollsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], WebinarPollsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], WebinarPollsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarPollsPollList)
    ], WebinarPollsResponse.prototype, "pollList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], WebinarPollsResponse.prototype, "statusCode", void 0);
    return WebinarPollsResponse;
}(utils_1.SpeakeasyBase));
exports.WebinarPollsResponse = WebinarPollsResponse;
