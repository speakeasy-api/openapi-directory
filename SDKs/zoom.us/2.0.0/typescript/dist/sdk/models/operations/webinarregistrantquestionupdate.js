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
exports.WebinarRegistrantQuestionUpdateResponse = exports.WebinarRegistrantQuestionUpdateRequest = exports.WebinarRegistrantQuestionUpdateSecurity = exports.WebinarRegistrantQuestionUpdateRequests = exports.WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions = exports.WebinarRegistrantQuestionUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var WebinarRegistrantQuestionUpdatePathParams = /** @class */ (function (_super) {
    __extends(WebinarRegistrantQuestionUpdatePathParams, _super);
    function WebinarRegistrantQuestionUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", Number)
    ], WebinarRegistrantQuestionUpdatePathParams.prototype, "webinarId", void 0);
    return WebinarRegistrantQuestionUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantQuestionUpdatePathParams = WebinarRegistrantQuestionUpdatePathParams;
// WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions
/**
 * Webinar Registrant Questions
**/
var WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions = /** @class */ (function (_super) {
    __extends(WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions, _super);
    function WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_questions, multipart_form, name=custom_questions;json=true" }),
        __metadata("design:type", Array)
    ], WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions.prototype, "customQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=questions, multipart_form, name=questions;json=true" }),
        __metadata("design:type", Array)
    ], WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions.prototype, "questions", void 0);
    return WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions = WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions;
var WebinarRegistrantQuestionUpdateRequests = /** @class */ (function (_super) {
    __extends(WebinarRegistrantQuestionUpdateRequests, _super);
    function WebinarRegistrantQuestionUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions)
    ], WebinarRegistrantQuestionUpdateRequests.prototype, "webinarRegistrantQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions)
    ], WebinarRegistrantQuestionUpdateRequests.prototype, "webinarRegistrantQuestions1", void 0);
    return WebinarRegistrantQuestionUpdateRequests;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantQuestionUpdateRequests = WebinarRegistrantQuestionUpdateRequests;
var WebinarRegistrantQuestionUpdateSecurity = /** @class */ (function (_super) {
    __extends(WebinarRegistrantQuestionUpdateSecurity, _super);
    function WebinarRegistrantQuestionUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], WebinarRegistrantQuestionUpdateSecurity.prototype, "oAuth", void 0);
    return WebinarRegistrantQuestionUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantQuestionUpdateSecurity = WebinarRegistrantQuestionUpdateSecurity;
var WebinarRegistrantQuestionUpdateRequest = /** @class */ (function (_super) {
    __extends(WebinarRegistrantQuestionUpdateRequest, _super);
    function WebinarRegistrantQuestionUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarRegistrantQuestionUpdatePathParams)
    ], WebinarRegistrantQuestionUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarRegistrantQuestionUpdateRequests)
    ], WebinarRegistrantQuestionUpdateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarRegistrantQuestionUpdateSecurity)
    ], WebinarRegistrantQuestionUpdateRequest.prototype, "security", void 0);
    return WebinarRegistrantQuestionUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantQuestionUpdateRequest = WebinarRegistrantQuestionUpdateRequest;
var WebinarRegistrantQuestionUpdateResponse = /** @class */ (function (_super) {
    __extends(WebinarRegistrantQuestionUpdateResponse, _super);
    function WebinarRegistrantQuestionUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], WebinarRegistrantQuestionUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], WebinarRegistrantQuestionUpdateResponse.prototype, "statusCode", void 0);
    return WebinarRegistrantQuestionUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantQuestionUpdateResponse = WebinarRegistrantQuestionUpdateResponse;
