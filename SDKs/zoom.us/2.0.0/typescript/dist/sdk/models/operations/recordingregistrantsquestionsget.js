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
exports.RecordingRegistrantsQuestionsGetResponse = exports.RecordingRegistrantsQuestionsGetRequest = exports.RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions = exports.RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestions = exports.RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum = exports.RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions = exports.RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnum = exports.RecordingRegistrantsQuestionsGetSecurity = exports.RecordingRegistrantsQuestionsGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RecordingRegistrantsQuestionsGetPathParams = /** @class */ (function (_super) {
    __extends(RecordingRegistrantsQuestionsGetPathParams, _super);
    function RecordingRegistrantsQuestionsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", String)
    ], RecordingRegistrantsQuestionsGetPathParams.prototype, "meetingId", void 0);
    return RecordingRegistrantsQuestionsGetPathParams;
}(utils_1.SpeakeasyBase));
exports.RecordingRegistrantsQuestionsGetPathParams = RecordingRegistrantsQuestionsGetPathParams;
var RecordingRegistrantsQuestionsGetSecurity = /** @class */ (function (_super) {
    __extends(RecordingRegistrantsQuestionsGetSecurity, _super);
    function RecordingRegistrantsQuestionsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], RecordingRegistrantsQuestionsGetSecurity.prototype, "oAuth", void 0);
    return RecordingRegistrantsQuestionsGetSecurity;
}(utils_1.SpeakeasyBase));
exports.RecordingRegistrantsQuestionsGetSecurity = RecordingRegistrantsQuestionsGetSecurity;
var RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnum;
(function (RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnum) {
    RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnum["Short"] = "short";
    RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnum["Single"] = "single";
    RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnum["Multiple"] = "multiple";
})(RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnum = exports.RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnum || (exports.RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnum = {}));
var RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions = /** @class */ (function (_super) {
    __extends(RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions, _super);
    function RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answers" }),
        __metadata("design:type", Array)
    ], RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions.prototype, "answers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions.prototype, "required", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions.prototype, "type", void 0);
    return RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions;
}(utils_1.SpeakeasyBase));
exports.RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions = RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions;
var RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum;
(function (RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum) {
    RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum["LastName"] = "last_name";
    RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum["Address"] = "address";
    RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum["City"] = "city";
    RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum["Country"] = "country";
    RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum["Zip"] = "zip";
    RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum["State"] = "state";
    RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum["Phone"] = "phone";
    RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum["Industry"] = "industry";
    RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum["Org"] = "org";
    RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum["JobTitle"] = "job_title";
    RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum["PurchasingTimeFrame"] = "purchasing_time_frame";
    RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum["RoleInPurchaseProcess"] = "role_in_purchase_process";
    RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum["NoOfEmployees"] = "no_of_employees";
    RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum["Comments"] = "comments";
})(RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum = exports.RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum || (exports.RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum = {}));
var RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestions = /** @class */ (function (_super) {
    __extends(RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestions, _super);
    function RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field_name" }),
        __metadata("design:type", String)
    ], RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestions.prototype, "fieldName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestions.prototype, "required", void 0);
    return RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestions;
}(utils_1.SpeakeasyBase));
exports.RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestions = RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestions;
// RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions
/**
 * Recording Registrant Questions
**/
var RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions = /** @class */ (function (_super) {
    __extends(RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions, _super);
    function RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_questions", elemType: RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions }),
        __metadata("design:type", Array)
    ], RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions.prototype, "customQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=questions", elemType: RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestions }),
        __metadata("design:type", Array)
    ], RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions.prototype, "questions", void 0);
    return RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions;
}(utils_1.SpeakeasyBase));
exports.RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions = RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions;
var RecordingRegistrantsQuestionsGetRequest = /** @class */ (function (_super) {
    __extends(RecordingRegistrantsQuestionsGetRequest, _super);
    function RecordingRegistrantsQuestionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecordingRegistrantsQuestionsGetPathParams)
    ], RecordingRegistrantsQuestionsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecordingRegistrantsQuestionsGetSecurity)
    ], RecordingRegistrantsQuestionsGetRequest.prototype, "security", void 0);
    return RecordingRegistrantsQuestionsGetRequest;
}(utils_1.SpeakeasyBase));
exports.RecordingRegistrantsQuestionsGetRequest = RecordingRegistrantsQuestionsGetRequest;
var RecordingRegistrantsQuestionsGetResponse = /** @class */ (function (_super) {
    __extends(RecordingRegistrantsQuestionsGetResponse, _super);
    function RecordingRegistrantsQuestionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], RecordingRegistrantsQuestionsGetResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RecordingRegistrantsQuestionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions)
    ], RecordingRegistrantsQuestionsGetResponse.prototype, "recordingRegistrantQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RecordingRegistrantsQuestionsGetResponse.prototype, "statusCode", void 0);
    return RecordingRegistrantsQuestionsGetResponse;
}(utils_1.SpeakeasyBase));
exports.RecordingRegistrantsQuestionsGetResponse = RecordingRegistrantsQuestionsGetResponse;
