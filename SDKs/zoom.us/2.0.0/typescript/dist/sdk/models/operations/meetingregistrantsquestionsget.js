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
exports.MeetingRegistrantsQuestionsGetResponse = exports.MeetingRegistrantsQuestionsGetRequest = exports.MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions = exports.MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestions = exports.MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum = exports.MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions = exports.MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestionsTypeEnum = exports.MeetingRegistrantsQuestionsGetSecurity = exports.MeetingRegistrantsQuestionsGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MeetingRegistrantsQuestionsGetPathParams = /** @class */ (function (_super) {
    __extends(MeetingRegistrantsQuestionsGetPathParams, _super);
    function MeetingRegistrantsQuestionsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", Number)
    ], MeetingRegistrantsQuestionsGetPathParams.prototype, "meetingId", void 0);
    return MeetingRegistrantsQuestionsGetPathParams;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantsQuestionsGetPathParams = MeetingRegistrantsQuestionsGetPathParams;
var MeetingRegistrantsQuestionsGetSecurity = /** @class */ (function (_super) {
    __extends(MeetingRegistrantsQuestionsGetSecurity, _super);
    function MeetingRegistrantsQuestionsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], MeetingRegistrantsQuestionsGetSecurity.prototype, "oAuth", void 0);
    return MeetingRegistrantsQuestionsGetSecurity;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantsQuestionsGetSecurity = MeetingRegistrantsQuestionsGetSecurity;
var MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestionsTypeEnum;
(function (MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestionsTypeEnum) {
    MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestionsTypeEnum["Short"] = "short";
    MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestionsTypeEnum["Single"] = "single";
})(MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestionsTypeEnum = exports.MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestionsTypeEnum || (exports.MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestionsTypeEnum = {}));
var MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions = /** @class */ (function (_super) {
    __extends(MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions, _super);
    function MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answers" }),
        __metadata("design:type", Array)
    ], MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions.prototype, "answers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions.prototype, "required", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions.prototype, "type", void 0);
    return MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions = MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions;
var MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum;
(function (MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum) {
    MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum["Address"] = "address";
    MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum["City"] = "city";
    MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum["Country"] = "country";
    MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum["Zip"] = "zip";
    MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum["State"] = "state";
    MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum["Phone"] = "phone";
    MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum["Industry"] = "industry";
    MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum["Org"] = "org";
    MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum["JobTitle"] = "job_title";
    MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum["PurchasingTimeFrame"] = "purchasing_time_frame";
    MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum["RoleInPurchaseProcess"] = "role_in_purchase_process";
    MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum["NoOfEmployees"] = "no_of_employees";
    MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum["Comments"] = "comments";
})(MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum = exports.MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum || (exports.MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum = {}));
var MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestions = /** @class */ (function (_super) {
    __extends(MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestions, _super);
    function MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field_name" }),
        __metadata("design:type", String)
    ], MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestions.prototype, "fieldName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestions.prototype, "required", void 0);
    return MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestions;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestions = MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestions;
// MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions
/**
 * Meeting Registrant Questions
**/
var MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions = /** @class */ (function (_super) {
    __extends(MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions, _super);
    function MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_questions", elemType: MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsCustomQuestions }),
        __metadata("design:type", Array)
    ], MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions.prototype, "customQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=questions", elemType: MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestions }),
        __metadata("design:type", Array)
    ], MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions.prototype, "questions", void 0);
    return MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions = MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions;
var MeetingRegistrantsQuestionsGetRequest = /** @class */ (function (_super) {
    __extends(MeetingRegistrantsQuestionsGetRequest, _super);
    function MeetingRegistrantsQuestionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRegistrantsQuestionsGetPathParams)
    ], MeetingRegistrantsQuestionsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRegistrantsQuestionsGetSecurity)
    ], MeetingRegistrantsQuestionsGetRequest.prototype, "security", void 0);
    return MeetingRegistrantsQuestionsGetRequest;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantsQuestionsGetRequest = MeetingRegistrantsQuestionsGetRequest;
var MeetingRegistrantsQuestionsGetResponse = /** @class */ (function (_super) {
    __extends(MeetingRegistrantsQuestionsGetResponse, _super);
    function MeetingRegistrantsQuestionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], MeetingRegistrantsQuestionsGetResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MeetingRegistrantsQuestionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions)
    ], MeetingRegistrantsQuestionsGetResponse.prototype, "meetingRegistrantQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MeetingRegistrantsQuestionsGetResponse.prototype, "statusCode", void 0);
    return MeetingRegistrantsQuestionsGetResponse;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantsQuestionsGetResponse = MeetingRegistrantsQuestionsGetResponse;
