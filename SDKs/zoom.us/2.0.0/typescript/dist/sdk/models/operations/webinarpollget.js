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
exports.WebinarPollGetResponse = exports.WebinarPollGetRequest = exports.WebinarPollGetPoll = exports.WebinarPollGetPollStatusEnum = exports.WebinarPollGetPollQuestions = exports.WebinarPollGetPollQuestionsTypeEnum = exports.WebinarPollGetSecurity = exports.WebinarPollGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var WebinarPollGetPathParams = /** @class */ (function (_super) {
    __extends(WebinarPollGetPathParams, _super);
    function WebinarPollGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=pollId" }),
        __metadata("design:type", String)
    ], WebinarPollGetPathParams.prototype, "pollId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", Number)
    ], WebinarPollGetPathParams.prototype, "webinarId", void 0);
    return WebinarPollGetPathParams;
}(utils_1.SpeakeasyBase));
exports.WebinarPollGetPathParams = WebinarPollGetPathParams;
var WebinarPollGetSecurity = /** @class */ (function (_super) {
    __extends(WebinarPollGetSecurity, _super);
    function WebinarPollGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], WebinarPollGetSecurity.prototype, "oAuth", void 0);
    return WebinarPollGetSecurity;
}(utils_1.SpeakeasyBase));
exports.WebinarPollGetSecurity = WebinarPollGetSecurity;
var WebinarPollGetPollQuestionsTypeEnum;
(function (WebinarPollGetPollQuestionsTypeEnum) {
    WebinarPollGetPollQuestionsTypeEnum["Single"] = "single";
    WebinarPollGetPollQuestionsTypeEnum["Multiple"] = "multiple";
})(WebinarPollGetPollQuestionsTypeEnum = exports.WebinarPollGetPollQuestionsTypeEnum || (exports.WebinarPollGetPollQuestionsTypeEnum = {}));
var WebinarPollGetPollQuestions = /** @class */ (function (_super) {
    __extends(WebinarPollGetPollQuestions, _super);
    function WebinarPollGetPollQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answers" }),
        __metadata("design:type", Array)
    ], WebinarPollGetPollQuestions.prototype, "answers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WebinarPollGetPollQuestions.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WebinarPollGetPollQuestions.prototype, "type", void 0);
    return WebinarPollGetPollQuestions;
}(utils_1.SpeakeasyBase));
exports.WebinarPollGetPollQuestions = WebinarPollGetPollQuestions;
var WebinarPollGetPollStatusEnum;
(function (WebinarPollGetPollStatusEnum) {
    WebinarPollGetPollStatusEnum["Notstart"] = "notstart";
    WebinarPollGetPollStatusEnum["Started"] = "started";
    WebinarPollGetPollStatusEnum["Ended"] = "ended";
    WebinarPollGetPollStatusEnum["Sharing"] = "sharing";
})(WebinarPollGetPollStatusEnum = exports.WebinarPollGetPollStatusEnum || (exports.WebinarPollGetPollStatusEnum = {}));
// WebinarPollGetPoll
/**
 * Poll
**/
var WebinarPollGetPoll = /** @class */ (function (_super) {
    __extends(WebinarPollGetPoll, _super);
    function WebinarPollGetPoll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], WebinarPollGetPoll.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=questions", elemType: WebinarPollGetPollQuestions }),
        __metadata("design:type", Array)
    ], WebinarPollGetPoll.prototype, "questions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], WebinarPollGetPoll.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], WebinarPollGetPoll.prototype, "title", void 0);
    return WebinarPollGetPoll;
}(utils_1.SpeakeasyBase));
exports.WebinarPollGetPoll = WebinarPollGetPoll;
var WebinarPollGetRequest = /** @class */ (function (_super) {
    __extends(WebinarPollGetRequest, _super);
    function WebinarPollGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarPollGetPathParams)
    ], WebinarPollGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarPollGetSecurity)
    ], WebinarPollGetRequest.prototype, "security", void 0);
    return WebinarPollGetRequest;
}(utils_1.SpeakeasyBase));
exports.WebinarPollGetRequest = WebinarPollGetRequest;
var WebinarPollGetResponse = /** @class */ (function (_super) {
    __extends(WebinarPollGetResponse, _super);
    function WebinarPollGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], WebinarPollGetResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], WebinarPollGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarPollGetPoll)
    ], WebinarPollGetResponse.prototype, "poll", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], WebinarPollGetResponse.prototype, "statusCode", void 0);
    return WebinarPollGetResponse;
}(utils_1.SpeakeasyBase));
exports.WebinarPollGetResponse = WebinarPollGetResponse;
