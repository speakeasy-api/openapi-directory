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
exports.WebinarCreateResponse = exports.WebinarCreateRequest = exports.WebinarCreate201ApplicationJson = exports.WebinarCreate201ApplicationJsonTrackingFields = exports.WebinarCreate201ApplicationJsonSettings = exports.WebinarCreate201ApplicationJsonSettingsQuestionAndAnswer = exports.WebinarCreate201ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum = exports.WebinarCreate201ApplicationJsonSettingsFollowUpAttendeesEmailNotification = exports.WebinarCreate201ApplicationJsonSettingsFollowUpAbsenteesEmailNotification = exports.WebinarCreate201ApplicationJsonSettingsAutoRecordingEnum = exports.WebinarCreate201ApplicationJsonSettingsAudioEnum = exports.WebinarCreate201ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification = exports.WebinarCreate201ApplicationJsonRecurrenceWebinar = exports.WebinarCreate201ApplicationJsonOccurrences = exports.WebinarCreateSecurity = exports.WebinarCreateRequests = exports.WebinarCreateMultipartFormData1 = exports.WebinarCreateMultipartFormDataTrackingFields = exports.WebinarCreateMultipartFormDataSettings = exports.WebinarCreateMultipartFormDataSettingsQuestionAndAnswer = exports.WebinarCreateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum = exports.WebinarCreateMultipartFormDataSettingsFollowUpAttendeesEmailNotification = exports.WebinarCreateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification = exports.WebinarCreateMultipartFormDataSettingsAutoRecordingEnum = exports.WebinarCreateMultipartFormDataSettingsAudioEnum = exports.WebinarCreateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification = exports.WebinarCreateMultipartFormDataRecurrenceWebinar = exports.WebinarCreateApplicationJson = exports.WebinarCreateApplicationJsonTrackingFields = exports.WebinarCreateApplicationJsonSettings = exports.WebinarCreateApplicationJsonSettingsQuestionAndAnswer = exports.WebinarCreateApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum = exports.WebinarCreateApplicationJsonSettingsFollowUpAttendeesEmailNotification = exports.WebinarCreateApplicationJsonSettingsFollowUpAbsenteesEmailNotification = exports.WebinarCreateApplicationJsonSettingsAutoRecordingEnum = exports.WebinarCreateApplicationJsonSettingsAudioEnum = exports.WebinarCreateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification = exports.WebinarCreateApplicationJsonRecurrenceWebinar = exports.WebinarCreatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var WebinarCreatePathParams = /** @class */ (function (_super) {
    __extends(WebinarCreatePathParams, _super);
    function WebinarCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], WebinarCreatePathParams.prototype, "userId", void 0);
    return WebinarCreatePathParams;
}(utils_1.SpeakeasyBase));
exports.WebinarCreatePathParams = WebinarCreatePathParams;
// WebinarCreateApplicationJsonRecurrenceWebinar
/**
 * Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time.
**/
var WebinarCreateApplicationJsonRecurrenceWebinar = /** @class */ (function (_super) {
    __extends(WebinarCreateApplicationJsonRecurrenceWebinar, _super);
    function WebinarCreateApplicationJsonRecurrenceWebinar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_date_time" }),
        __metadata("design:type", Date)
    ], WebinarCreateApplicationJsonRecurrenceWebinar.prototype, "endDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_times" }),
        __metadata("design:type", Number)
    ], WebinarCreateApplicationJsonRecurrenceWebinar.prototype, "endTimes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_day" }),
        __metadata("design:type", Number)
    ], WebinarCreateApplicationJsonRecurrenceWebinar.prototype, "monthlyDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_week" }),
        __metadata("design:type", Number)
    ], WebinarCreateApplicationJsonRecurrenceWebinar.prototype, "monthlyWeek", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_week_day" }),
        __metadata("design:type", Number)
    ], WebinarCreateApplicationJsonRecurrenceWebinar.prototype, "monthlyWeekDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repeat_interval" }),
        __metadata("design:type", Number)
    ], WebinarCreateApplicationJsonRecurrenceWebinar.prototype, "repeatInterval", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], WebinarCreateApplicationJsonRecurrenceWebinar.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weekly_days" }),
        __metadata("design:type", String)
    ], WebinarCreateApplicationJsonRecurrenceWebinar.prototype, "weeklyDays", void 0);
    return WebinarCreateApplicationJsonRecurrenceWebinar;
}(utils_1.SpeakeasyBase));
exports.WebinarCreateApplicationJsonRecurrenceWebinar = WebinarCreateApplicationJsonRecurrenceWebinar;
// WebinarCreateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification
/**
 * Send reminder email to attendees and panelists.
**/
var WebinarCreateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification = /** @class */ (function (_super) {
    __extends(WebinarCreateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification, _super);
    function WebinarCreateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], WebinarCreateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification.prototype, "type", void 0);
    return WebinarCreateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification;
}(utils_1.SpeakeasyBase));
exports.WebinarCreateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification = WebinarCreateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification;
var WebinarCreateApplicationJsonSettingsAudioEnum;
(function (WebinarCreateApplicationJsonSettingsAudioEnum) {
    WebinarCreateApplicationJsonSettingsAudioEnum["Both"] = "both";
    WebinarCreateApplicationJsonSettingsAudioEnum["Telephony"] = "telephony";
    WebinarCreateApplicationJsonSettingsAudioEnum["Voip"] = "voip";
})(WebinarCreateApplicationJsonSettingsAudioEnum = exports.WebinarCreateApplicationJsonSettingsAudioEnum || (exports.WebinarCreateApplicationJsonSettingsAudioEnum = {}));
var WebinarCreateApplicationJsonSettingsAutoRecordingEnum;
(function (WebinarCreateApplicationJsonSettingsAutoRecordingEnum) {
    WebinarCreateApplicationJsonSettingsAutoRecordingEnum["Local"] = "local";
    WebinarCreateApplicationJsonSettingsAutoRecordingEnum["Cloud"] = "cloud";
    WebinarCreateApplicationJsonSettingsAutoRecordingEnum["None"] = "none";
})(WebinarCreateApplicationJsonSettingsAutoRecordingEnum = exports.WebinarCreateApplicationJsonSettingsAutoRecordingEnum || (exports.WebinarCreateApplicationJsonSettingsAutoRecordingEnum = {}));
// WebinarCreateApplicationJsonSettingsFollowUpAbsenteesEmailNotification
/**
 * Send follow-up email to absentees.
**/
var WebinarCreateApplicationJsonSettingsFollowUpAbsenteesEmailNotification = /** @class */ (function (_super) {
    __extends(WebinarCreateApplicationJsonSettingsFollowUpAbsenteesEmailNotification, _super);
    function WebinarCreateApplicationJsonSettingsFollowUpAbsenteesEmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateApplicationJsonSettingsFollowUpAbsenteesEmailNotification.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], WebinarCreateApplicationJsonSettingsFollowUpAbsenteesEmailNotification.prototype, "type", void 0);
    return WebinarCreateApplicationJsonSettingsFollowUpAbsenteesEmailNotification;
}(utils_1.SpeakeasyBase));
exports.WebinarCreateApplicationJsonSettingsFollowUpAbsenteesEmailNotification = WebinarCreateApplicationJsonSettingsFollowUpAbsenteesEmailNotification;
// WebinarCreateApplicationJsonSettingsFollowUpAttendeesEmailNotification
/**
 * Send follow-up email to attendees.
**/
var WebinarCreateApplicationJsonSettingsFollowUpAttendeesEmailNotification = /** @class */ (function (_super) {
    __extends(WebinarCreateApplicationJsonSettingsFollowUpAttendeesEmailNotification, _super);
    function WebinarCreateApplicationJsonSettingsFollowUpAttendeesEmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateApplicationJsonSettingsFollowUpAttendeesEmailNotification.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], WebinarCreateApplicationJsonSettingsFollowUpAttendeesEmailNotification.prototype, "type", void 0);
    return WebinarCreateApplicationJsonSettingsFollowUpAttendeesEmailNotification;
}(utils_1.SpeakeasyBase));
exports.WebinarCreateApplicationJsonSettingsFollowUpAttendeesEmailNotification = WebinarCreateApplicationJsonSettingsFollowUpAttendeesEmailNotification;
var WebinarCreateApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum;
(function (WebinarCreateApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum) {
    WebinarCreateApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum["Only"] = "only";
    WebinarCreateApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum["All"] = "all";
})(WebinarCreateApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum = exports.WebinarCreateApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum || (exports.WebinarCreateApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum = {}));
// WebinarCreateApplicationJsonSettingsQuestionAndAnswer
/**
 * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
**/
var WebinarCreateApplicationJsonSettingsQuestionAndAnswer = /** @class */ (function (_super) {
    __extends(WebinarCreateApplicationJsonSettingsQuestionAndAnswer, _super);
    function WebinarCreateApplicationJsonSettingsQuestionAndAnswer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_anonymous_questions" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateApplicationJsonSettingsQuestionAndAnswer.prototype, "allowAnonymousQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answer_questions" }),
        __metadata("design:type", String)
    ], WebinarCreateApplicationJsonSettingsQuestionAndAnswer.prototype, "answerQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendees_can_comment" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateApplicationJsonSettingsQuestionAndAnswer.prototype, "attendeesCanComment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendees_can_upvote" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateApplicationJsonSettingsQuestionAndAnswer.prototype, "attendeesCanUpvote", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateApplicationJsonSettingsQuestionAndAnswer.prototype, "enable", void 0);
    return WebinarCreateApplicationJsonSettingsQuestionAndAnswer;
}(utils_1.SpeakeasyBase));
exports.WebinarCreateApplicationJsonSettingsQuestionAndAnswer = WebinarCreateApplicationJsonSettingsQuestionAndAnswer;
// WebinarCreateApplicationJsonSettings
/**
 * Create Webinar settings.
**/
var WebinarCreateApplicationJsonSettings = /** @class */ (function (_super) {
    __extends(WebinarCreateApplicationJsonSettings, _super);
    function WebinarCreateApplicationJsonSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_multiple_devices" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateApplicationJsonSettings.prototype, "allowMultipleDevices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_hosts" }),
        __metadata("design:type", String)
    ], WebinarCreateApplicationJsonSettings.prototype, "alternativeHosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approval_type" }),
        __metadata("design:type", Number)
    ], WebinarCreateApplicationJsonSettings.prototype, "approvalType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendees_and_panelists_reminder_email_notification" }),
        __metadata("design:type", WebinarCreateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification)
    ], WebinarCreateApplicationJsonSettings.prototype, "attendeesAndPanelistsReminderEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio" }),
        __metadata("design:type", String)
    ], WebinarCreateApplicationJsonSettings.prototype, "audio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_domains" }),
        __metadata("design:type", String)
    ], WebinarCreateApplicationJsonSettings.prototype, "authenticationDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_option" }),
        __metadata("design:type", String)
    ], WebinarCreateApplicationJsonSettings.prototype, "authenticationOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_recording" }),
        __metadata("design:type", String)
    ], WebinarCreateApplicationJsonSettings.prototype, "autoRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=close_registration" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateApplicationJsonSettings.prototype, "closeRegistration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact_email" }),
        __metadata("design:type", String)
    ], WebinarCreateApplicationJsonSettings.prototype, "contactEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact_name" }),
        __metadata("design:type", String)
    ], WebinarCreateApplicationJsonSettings.prototype, "contactName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email_language" }),
        __metadata("design:type", String)
    ], WebinarCreateApplicationJsonSettings.prototype, "emailLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateApplicationJsonSettings.prototype, "enforceLogin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login_domains" }),
        __metadata("design:type", String)
    ], WebinarCreateApplicationJsonSettings.prototype, "enforceLoginDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=follow_up_absentees_email_notification" }),
        __metadata("design:type", WebinarCreateApplicationJsonSettingsFollowUpAbsenteesEmailNotification)
    ], WebinarCreateApplicationJsonSettings.prototype, "followUpAbsenteesEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=follow_up_attendees_email_notification" }),
        __metadata("design:type", WebinarCreateApplicationJsonSettingsFollowUpAttendeesEmailNotification)
    ], WebinarCreateApplicationJsonSettings.prototype, "followUpAttendeesEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=global_dial_in_countries" }),
        __metadata("design:type", Array)
    ], WebinarCreateApplicationJsonSettings.prototype, "globalDialInCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hd_video" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateApplicationJsonSettings.prototype, "hdVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_video" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateApplicationJsonSettings.prototype, "hostVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_authentication" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateApplicationJsonSettings.prototype, "meetingAuthentication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=on_demand" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateApplicationJsonSettings.prototype, "onDemand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=panelists_invitation_email_notification" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateApplicationJsonSettings.prototype, "panelistsInvitationEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=panelists_video" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateApplicationJsonSettings.prototype, "panelistsVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=post_webinar_survey" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateApplicationJsonSettings.prototype, "postWebinarSurvey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=practice_session" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateApplicationJsonSettings.prototype, "practiceSession", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=question_and_answer" }),
        __metadata("design:type", WebinarCreateApplicationJsonSettingsQuestionAndAnswer)
    ], WebinarCreateApplicationJsonSettings.prototype, "questionAndAnswer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_email_notification" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateApplicationJsonSettings.prototype, "registrantsEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_restrict_number" }),
        __metadata("design:type", Number)
    ], WebinarCreateApplicationJsonSettings.prototype, "registrantsRestrictNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registration_type" }),
        __metadata("design:type", Number)
    ], WebinarCreateApplicationJsonSettings.prototype, "registrationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_share_button" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateApplicationJsonSettings.prototype, "showShareButton", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=survey_url" }),
        __metadata("design:type", String)
    ], WebinarCreateApplicationJsonSettings.prototype, "surveyUrl", void 0);
    return WebinarCreateApplicationJsonSettings;
}(utils_1.SpeakeasyBase));
exports.WebinarCreateApplicationJsonSettings = WebinarCreateApplicationJsonSettings;
var WebinarCreateApplicationJsonTrackingFields = /** @class */ (function (_super) {
    __extends(WebinarCreateApplicationJsonTrackingFields, _super);
    function WebinarCreateApplicationJsonTrackingFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], WebinarCreateApplicationJsonTrackingFields.prototype, "field", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], WebinarCreateApplicationJsonTrackingFields.prototype, "value", void 0);
    return WebinarCreateApplicationJsonTrackingFields;
}(utils_1.SpeakeasyBase));
exports.WebinarCreateApplicationJsonTrackingFields = WebinarCreateApplicationJsonTrackingFields;
// WebinarCreateApplicationJson
/**
 * Base webinar object for sessions.
**/
var WebinarCreateApplicationJson = /** @class */ (function (_super) {
    __extends(WebinarCreateApplicationJson, _super);
    function WebinarCreateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=agenda" }),
        __metadata("design:type", String)
    ], WebinarCreateApplicationJson.prototype, "agenda", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], WebinarCreateApplicationJson.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], WebinarCreateApplicationJson.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurrence" }),
        __metadata("design:type", WebinarCreateApplicationJsonRecurrenceWebinar)
    ], WebinarCreateApplicationJson.prototype, "recurrence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", WebinarCreateApplicationJsonSettings)
    ], WebinarCreateApplicationJson.prototype, "settings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], WebinarCreateApplicationJson.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], WebinarCreateApplicationJson.prototype, "timezone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], WebinarCreateApplicationJson.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tracking_fields", elemType: WebinarCreateApplicationJsonTrackingFields }),
        __metadata("design:type", Array)
    ], WebinarCreateApplicationJson.prototype, "trackingFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], WebinarCreateApplicationJson.prototype, "type", void 0);
    return WebinarCreateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.WebinarCreateApplicationJson = WebinarCreateApplicationJson;
// WebinarCreateMultipartFormDataRecurrenceWebinar
/**
 * Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time.
**/
var WebinarCreateMultipartFormDataRecurrenceWebinar = /** @class */ (function (_super) {
    __extends(WebinarCreateMultipartFormDataRecurrenceWebinar, _super);
    function WebinarCreateMultipartFormDataRecurrenceWebinar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_date_time" }),
        __metadata("design:type", Date)
    ], WebinarCreateMultipartFormDataRecurrenceWebinar.prototype, "endDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_times" }),
        __metadata("design:type", Number)
    ], WebinarCreateMultipartFormDataRecurrenceWebinar.prototype, "endTimes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_day" }),
        __metadata("design:type", Number)
    ], WebinarCreateMultipartFormDataRecurrenceWebinar.prototype, "monthlyDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_week" }),
        __metadata("design:type", Number)
    ], WebinarCreateMultipartFormDataRecurrenceWebinar.prototype, "monthlyWeek", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_week_day" }),
        __metadata("design:type", Number)
    ], WebinarCreateMultipartFormDataRecurrenceWebinar.prototype, "monthlyWeekDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repeat_interval" }),
        __metadata("design:type", Number)
    ], WebinarCreateMultipartFormDataRecurrenceWebinar.prototype, "repeatInterval", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], WebinarCreateMultipartFormDataRecurrenceWebinar.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weekly_days" }),
        __metadata("design:type", String)
    ], WebinarCreateMultipartFormDataRecurrenceWebinar.prototype, "weeklyDays", void 0);
    return WebinarCreateMultipartFormDataRecurrenceWebinar;
}(utils_1.SpeakeasyBase));
exports.WebinarCreateMultipartFormDataRecurrenceWebinar = WebinarCreateMultipartFormDataRecurrenceWebinar;
// WebinarCreateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification
/**
 * Send reminder email to attendees and panelists.
**/
var WebinarCreateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification = /** @class */ (function (_super) {
    __extends(WebinarCreateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification, _super);
    function WebinarCreateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], WebinarCreateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification.prototype, "type", void 0);
    return WebinarCreateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification;
}(utils_1.SpeakeasyBase));
exports.WebinarCreateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification = WebinarCreateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification;
var WebinarCreateMultipartFormDataSettingsAudioEnum;
(function (WebinarCreateMultipartFormDataSettingsAudioEnum) {
    WebinarCreateMultipartFormDataSettingsAudioEnum["Both"] = "both";
    WebinarCreateMultipartFormDataSettingsAudioEnum["Telephony"] = "telephony";
    WebinarCreateMultipartFormDataSettingsAudioEnum["Voip"] = "voip";
})(WebinarCreateMultipartFormDataSettingsAudioEnum = exports.WebinarCreateMultipartFormDataSettingsAudioEnum || (exports.WebinarCreateMultipartFormDataSettingsAudioEnum = {}));
var WebinarCreateMultipartFormDataSettingsAutoRecordingEnum;
(function (WebinarCreateMultipartFormDataSettingsAutoRecordingEnum) {
    WebinarCreateMultipartFormDataSettingsAutoRecordingEnum["Local"] = "local";
    WebinarCreateMultipartFormDataSettingsAutoRecordingEnum["Cloud"] = "cloud";
    WebinarCreateMultipartFormDataSettingsAutoRecordingEnum["None"] = "none";
})(WebinarCreateMultipartFormDataSettingsAutoRecordingEnum = exports.WebinarCreateMultipartFormDataSettingsAutoRecordingEnum || (exports.WebinarCreateMultipartFormDataSettingsAutoRecordingEnum = {}));
// WebinarCreateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification
/**
 * Send follow-up email to absentees.
**/
var WebinarCreateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification = /** @class */ (function (_super) {
    __extends(WebinarCreateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification, _super);
    function WebinarCreateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], WebinarCreateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification.prototype, "type", void 0);
    return WebinarCreateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification;
}(utils_1.SpeakeasyBase));
exports.WebinarCreateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification = WebinarCreateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification;
// WebinarCreateMultipartFormDataSettingsFollowUpAttendeesEmailNotification
/**
 * Send follow-up email to attendees.
**/
var WebinarCreateMultipartFormDataSettingsFollowUpAttendeesEmailNotification = /** @class */ (function (_super) {
    __extends(WebinarCreateMultipartFormDataSettingsFollowUpAttendeesEmailNotification, _super);
    function WebinarCreateMultipartFormDataSettingsFollowUpAttendeesEmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateMultipartFormDataSettingsFollowUpAttendeesEmailNotification.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], WebinarCreateMultipartFormDataSettingsFollowUpAttendeesEmailNotification.prototype, "type", void 0);
    return WebinarCreateMultipartFormDataSettingsFollowUpAttendeesEmailNotification;
}(utils_1.SpeakeasyBase));
exports.WebinarCreateMultipartFormDataSettingsFollowUpAttendeesEmailNotification = WebinarCreateMultipartFormDataSettingsFollowUpAttendeesEmailNotification;
var WebinarCreateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum;
(function (WebinarCreateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum) {
    WebinarCreateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum["Only"] = "only";
    WebinarCreateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum["All"] = "all";
})(WebinarCreateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum = exports.WebinarCreateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum || (exports.WebinarCreateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum = {}));
// WebinarCreateMultipartFormDataSettingsQuestionAndAnswer
/**
 * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
**/
var WebinarCreateMultipartFormDataSettingsQuestionAndAnswer = /** @class */ (function (_super) {
    __extends(WebinarCreateMultipartFormDataSettingsQuestionAndAnswer, _super);
    function WebinarCreateMultipartFormDataSettingsQuestionAndAnswer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_anonymous_questions" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateMultipartFormDataSettingsQuestionAndAnswer.prototype, "allowAnonymousQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answer_questions" }),
        __metadata("design:type", String)
    ], WebinarCreateMultipartFormDataSettingsQuestionAndAnswer.prototype, "answerQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendees_can_comment" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateMultipartFormDataSettingsQuestionAndAnswer.prototype, "attendeesCanComment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendees_can_upvote" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateMultipartFormDataSettingsQuestionAndAnswer.prototype, "attendeesCanUpvote", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateMultipartFormDataSettingsQuestionAndAnswer.prototype, "enable", void 0);
    return WebinarCreateMultipartFormDataSettingsQuestionAndAnswer;
}(utils_1.SpeakeasyBase));
exports.WebinarCreateMultipartFormDataSettingsQuestionAndAnswer = WebinarCreateMultipartFormDataSettingsQuestionAndAnswer;
// WebinarCreateMultipartFormDataSettings
/**
 * Create Webinar settings.
**/
var WebinarCreateMultipartFormDataSettings = /** @class */ (function (_super) {
    __extends(WebinarCreateMultipartFormDataSettings, _super);
    function WebinarCreateMultipartFormDataSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_multiple_devices" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateMultipartFormDataSettings.prototype, "allowMultipleDevices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_hosts" }),
        __metadata("design:type", String)
    ], WebinarCreateMultipartFormDataSettings.prototype, "alternativeHosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approval_type" }),
        __metadata("design:type", Number)
    ], WebinarCreateMultipartFormDataSettings.prototype, "approvalType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendees_and_panelists_reminder_email_notification" }),
        __metadata("design:type", WebinarCreateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification)
    ], WebinarCreateMultipartFormDataSettings.prototype, "attendeesAndPanelistsReminderEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio" }),
        __metadata("design:type", String)
    ], WebinarCreateMultipartFormDataSettings.prototype, "audio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_domains" }),
        __metadata("design:type", String)
    ], WebinarCreateMultipartFormDataSettings.prototype, "authenticationDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_option" }),
        __metadata("design:type", String)
    ], WebinarCreateMultipartFormDataSettings.prototype, "authenticationOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_recording" }),
        __metadata("design:type", String)
    ], WebinarCreateMultipartFormDataSettings.prototype, "autoRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=close_registration" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateMultipartFormDataSettings.prototype, "closeRegistration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact_email" }),
        __metadata("design:type", String)
    ], WebinarCreateMultipartFormDataSettings.prototype, "contactEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact_name" }),
        __metadata("design:type", String)
    ], WebinarCreateMultipartFormDataSettings.prototype, "contactName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email_language" }),
        __metadata("design:type", String)
    ], WebinarCreateMultipartFormDataSettings.prototype, "emailLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateMultipartFormDataSettings.prototype, "enforceLogin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login_domains" }),
        __metadata("design:type", String)
    ], WebinarCreateMultipartFormDataSettings.prototype, "enforceLoginDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=follow_up_absentees_email_notification" }),
        __metadata("design:type", WebinarCreateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification)
    ], WebinarCreateMultipartFormDataSettings.prototype, "followUpAbsenteesEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=follow_up_attendees_email_notification" }),
        __metadata("design:type", WebinarCreateMultipartFormDataSettingsFollowUpAttendeesEmailNotification)
    ], WebinarCreateMultipartFormDataSettings.prototype, "followUpAttendeesEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=global_dial_in_countries" }),
        __metadata("design:type", Array)
    ], WebinarCreateMultipartFormDataSettings.prototype, "globalDialInCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hd_video" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateMultipartFormDataSettings.prototype, "hdVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_video" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateMultipartFormDataSettings.prototype, "hostVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_authentication" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateMultipartFormDataSettings.prototype, "meetingAuthentication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=on_demand" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateMultipartFormDataSettings.prototype, "onDemand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=panelists_invitation_email_notification" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateMultipartFormDataSettings.prototype, "panelistsInvitationEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=panelists_video" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateMultipartFormDataSettings.prototype, "panelistsVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=post_webinar_survey" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateMultipartFormDataSettings.prototype, "postWebinarSurvey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=practice_session" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateMultipartFormDataSettings.prototype, "practiceSession", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=question_and_answer" }),
        __metadata("design:type", WebinarCreateMultipartFormDataSettingsQuestionAndAnswer)
    ], WebinarCreateMultipartFormDataSettings.prototype, "questionAndAnswer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_email_notification" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateMultipartFormDataSettings.prototype, "registrantsEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_restrict_number" }),
        __metadata("design:type", Number)
    ], WebinarCreateMultipartFormDataSettings.prototype, "registrantsRestrictNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registration_type" }),
        __metadata("design:type", Number)
    ], WebinarCreateMultipartFormDataSettings.prototype, "registrationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_share_button" }),
        __metadata("design:type", Boolean)
    ], WebinarCreateMultipartFormDataSettings.prototype, "showShareButton", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=survey_url" }),
        __metadata("design:type", String)
    ], WebinarCreateMultipartFormDataSettings.prototype, "surveyUrl", void 0);
    return WebinarCreateMultipartFormDataSettings;
}(utils_1.SpeakeasyBase));
exports.WebinarCreateMultipartFormDataSettings = WebinarCreateMultipartFormDataSettings;
var WebinarCreateMultipartFormDataTrackingFields = /** @class */ (function (_super) {
    __extends(WebinarCreateMultipartFormDataTrackingFields, _super);
    function WebinarCreateMultipartFormDataTrackingFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], WebinarCreateMultipartFormDataTrackingFields.prototype, "field", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], WebinarCreateMultipartFormDataTrackingFields.prototype, "value", void 0);
    return WebinarCreateMultipartFormDataTrackingFields;
}(utils_1.SpeakeasyBase));
exports.WebinarCreateMultipartFormDataTrackingFields = WebinarCreateMultipartFormDataTrackingFields;
// WebinarCreateMultipartFormData1
/**
 * Base webinar object for sessions.
**/
var WebinarCreateMultipartFormData1 = /** @class */ (function (_super) {
    __extends(WebinarCreateMultipartFormData1, _super);
    function WebinarCreateMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=agenda" }),
        __metadata("design:type", String)
    ], WebinarCreateMultipartFormData1.prototype, "agenda", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=duration" }),
        __metadata("design:type", Number)
    ], WebinarCreateMultipartFormData1.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=password" }),
        __metadata("design:type", String)
    ], WebinarCreateMultipartFormData1.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=recurrence;json=true" }),
        __metadata("design:type", WebinarCreateMultipartFormDataRecurrenceWebinar)
    ], WebinarCreateMultipartFormData1.prototype, "recurrence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=settings;json=true" }),
        __metadata("design:type", WebinarCreateMultipartFormDataSettings)
    ], WebinarCreateMultipartFormData1.prototype, "settings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=start_time" }),
        __metadata("design:type", Date)
    ], WebinarCreateMultipartFormData1.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=timezone" }),
        __metadata("design:type", String)
    ], WebinarCreateMultipartFormData1.prototype, "timezone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=topic" }),
        __metadata("design:type", String)
    ], WebinarCreateMultipartFormData1.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=tracking_fields;json=true", elemType: WebinarCreateMultipartFormDataTrackingFields }),
        __metadata("design:type", Array)
    ], WebinarCreateMultipartFormData1.prototype, "trackingFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=type" }),
        __metadata("design:type", Number)
    ], WebinarCreateMultipartFormData1.prototype, "type", void 0);
    return WebinarCreateMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.WebinarCreateMultipartFormData1 = WebinarCreateMultipartFormData1;
var WebinarCreateRequests = /** @class */ (function (_super) {
    __extends(WebinarCreateRequests, _super);
    function WebinarCreateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", WebinarCreateApplicationJson)
    ], WebinarCreateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", WebinarCreateMultipartFormData1)
    ], WebinarCreateRequests.prototype, "object1", void 0);
    return WebinarCreateRequests;
}(utils_1.SpeakeasyBase));
exports.WebinarCreateRequests = WebinarCreateRequests;
var WebinarCreateSecurity = /** @class */ (function (_super) {
    __extends(WebinarCreateSecurity, _super);
    function WebinarCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], WebinarCreateSecurity.prototype, "oAuth", void 0);
    return WebinarCreateSecurity;
}(utils_1.SpeakeasyBase));
exports.WebinarCreateSecurity = WebinarCreateSecurity;
// WebinarCreate201ApplicationJsonOccurrences
/**
 * Occurence object. This object is only returned for Recurring Webinars.
**/
var WebinarCreate201ApplicationJsonOccurrences = /** @class */ (function (_super) {
    __extends(WebinarCreate201ApplicationJsonOccurrences, _super);
    function WebinarCreate201ApplicationJsonOccurrences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], WebinarCreate201ApplicationJsonOccurrences.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=occurrence_id" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJsonOccurrences.prototype, "occurrenceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], WebinarCreate201ApplicationJsonOccurrences.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJsonOccurrences.prototype, "status", void 0);
    return WebinarCreate201ApplicationJsonOccurrences;
}(utils_1.SpeakeasyBase));
exports.WebinarCreate201ApplicationJsonOccurrences = WebinarCreate201ApplicationJsonOccurrences;
// WebinarCreate201ApplicationJsonRecurrenceWebinar
/**
 * Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time.
**/
var WebinarCreate201ApplicationJsonRecurrenceWebinar = /** @class */ (function (_super) {
    __extends(WebinarCreate201ApplicationJsonRecurrenceWebinar, _super);
    function WebinarCreate201ApplicationJsonRecurrenceWebinar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_date_time" }),
        __metadata("design:type", Date)
    ], WebinarCreate201ApplicationJsonRecurrenceWebinar.prototype, "endDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_times" }),
        __metadata("design:type", Number)
    ], WebinarCreate201ApplicationJsonRecurrenceWebinar.prototype, "endTimes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_day" }),
        __metadata("design:type", Number)
    ], WebinarCreate201ApplicationJsonRecurrenceWebinar.prototype, "monthlyDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_week" }),
        __metadata("design:type", Number)
    ], WebinarCreate201ApplicationJsonRecurrenceWebinar.prototype, "monthlyWeek", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_week_day" }),
        __metadata("design:type", Number)
    ], WebinarCreate201ApplicationJsonRecurrenceWebinar.prototype, "monthlyWeekDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repeat_interval" }),
        __metadata("design:type", Number)
    ], WebinarCreate201ApplicationJsonRecurrenceWebinar.prototype, "repeatInterval", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], WebinarCreate201ApplicationJsonRecurrenceWebinar.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weekly_days" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJsonRecurrenceWebinar.prototype, "weeklyDays", void 0);
    return WebinarCreate201ApplicationJsonRecurrenceWebinar;
}(utils_1.SpeakeasyBase));
exports.WebinarCreate201ApplicationJsonRecurrenceWebinar = WebinarCreate201ApplicationJsonRecurrenceWebinar;
// WebinarCreate201ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification
/**
 * Send reminder email to attendees and panelists.
**/
var WebinarCreate201ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification = /** @class */ (function (_super) {
    __extends(WebinarCreate201ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification, _super);
    function WebinarCreate201ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], WebinarCreate201ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], WebinarCreate201ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification.prototype, "type", void 0);
    return WebinarCreate201ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification;
}(utils_1.SpeakeasyBase));
exports.WebinarCreate201ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification = WebinarCreate201ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification;
var WebinarCreate201ApplicationJsonSettingsAudioEnum;
(function (WebinarCreate201ApplicationJsonSettingsAudioEnum) {
    WebinarCreate201ApplicationJsonSettingsAudioEnum["Both"] = "both";
    WebinarCreate201ApplicationJsonSettingsAudioEnum["Telephony"] = "telephony";
    WebinarCreate201ApplicationJsonSettingsAudioEnum["Voip"] = "voip";
})(WebinarCreate201ApplicationJsonSettingsAudioEnum = exports.WebinarCreate201ApplicationJsonSettingsAudioEnum || (exports.WebinarCreate201ApplicationJsonSettingsAudioEnum = {}));
var WebinarCreate201ApplicationJsonSettingsAutoRecordingEnum;
(function (WebinarCreate201ApplicationJsonSettingsAutoRecordingEnum) {
    WebinarCreate201ApplicationJsonSettingsAutoRecordingEnum["Local"] = "local";
    WebinarCreate201ApplicationJsonSettingsAutoRecordingEnum["Cloud"] = "cloud";
    WebinarCreate201ApplicationJsonSettingsAutoRecordingEnum["None"] = "none";
})(WebinarCreate201ApplicationJsonSettingsAutoRecordingEnum = exports.WebinarCreate201ApplicationJsonSettingsAutoRecordingEnum || (exports.WebinarCreate201ApplicationJsonSettingsAutoRecordingEnum = {}));
// WebinarCreate201ApplicationJsonSettingsFollowUpAbsenteesEmailNotification
/**
 * Send follow-up email to absentees.
**/
var WebinarCreate201ApplicationJsonSettingsFollowUpAbsenteesEmailNotification = /** @class */ (function (_super) {
    __extends(WebinarCreate201ApplicationJsonSettingsFollowUpAbsenteesEmailNotification, _super);
    function WebinarCreate201ApplicationJsonSettingsFollowUpAbsenteesEmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], WebinarCreate201ApplicationJsonSettingsFollowUpAbsenteesEmailNotification.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], WebinarCreate201ApplicationJsonSettingsFollowUpAbsenteesEmailNotification.prototype, "type", void 0);
    return WebinarCreate201ApplicationJsonSettingsFollowUpAbsenteesEmailNotification;
}(utils_1.SpeakeasyBase));
exports.WebinarCreate201ApplicationJsonSettingsFollowUpAbsenteesEmailNotification = WebinarCreate201ApplicationJsonSettingsFollowUpAbsenteesEmailNotification;
// WebinarCreate201ApplicationJsonSettingsFollowUpAttendeesEmailNotification
/**
 * Send follow-up email to attendees.
**/
var WebinarCreate201ApplicationJsonSettingsFollowUpAttendeesEmailNotification = /** @class */ (function (_super) {
    __extends(WebinarCreate201ApplicationJsonSettingsFollowUpAttendeesEmailNotification, _super);
    function WebinarCreate201ApplicationJsonSettingsFollowUpAttendeesEmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], WebinarCreate201ApplicationJsonSettingsFollowUpAttendeesEmailNotification.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], WebinarCreate201ApplicationJsonSettingsFollowUpAttendeesEmailNotification.prototype, "type", void 0);
    return WebinarCreate201ApplicationJsonSettingsFollowUpAttendeesEmailNotification;
}(utils_1.SpeakeasyBase));
exports.WebinarCreate201ApplicationJsonSettingsFollowUpAttendeesEmailNotification = WebinarCreate201ApplicationJsonSettingsFollowUpAttendeesEmailNotification;
var WebinarCreate201ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum;
(function (WebinarCreate201ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum) {
    WebinarCreate201ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum["Only"] = "only";
    WebinarCreate201ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum["All"] = "all";
})(WebinarCreate201ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum = exports.WebinarCreate201ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum || (exports.WebinarCreate201ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum = {}));
// WebinarCreate201ApplicationJsonSettingsQuestionAndAnswer
/**
 * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
**/
var WebinarCreate201ApplicationJsonSettingsQuestionAndAnswer = /** @class */ (function (_super) {
    __extends(WebinarCreate201ApplicationJsonSettingsQuestionAndAnswer, _super);
    function WebinarCreate201ApplicationJsonSettingsQuestionAndAnswer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_anonymous_questions" }),
        __metadata("design:type", Boolean)
    ], WebinarCreate201ApplicationJsonSettingsQuestionAndAnswer.prototype, "allowAnonymousQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answer_questions" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJsonSettingsQuestionAndAnswer.prototype, "answerQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendees_can_comment" }),
        __metadata("design:type", Boolean)
    ], WebinarCreate201ApplicationJsonSettingsQuestionAndAnswer.prototype, "attendeesCanComment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendees_can_upvote" }),
        __metadata("design:type", Boolean)
    ], WebinarCreate201ApplicationJsonSettingsQuestionAndAnswer.prototype, "attendeesCanUpvote", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], WebinarCreate201ApplicationJsonSettingsQuestionAndAnswer.prototype, "enable", void 0);
    return WebinarCreate201ApplicationJsonSettingsQuestionAndAnswer;
}(utils_1.SpeakeasyBase));
exports.WebinarCreate201ApplicationJsonSettingsQuestionAndAnswer = WebinarCreate201ApplicationJsonSettingsQuestionAndAnswer;
// WebinarCreate201ApplicationJsonSettings
/**
 * Webinar settings.
**/
var WebinarCreate201ApplicationJsonSettings = /** @class */ (function (_super) {
    __extends(WebinarCreate201ApplicationJsonSettings, _super);
    function WebinarCreate201ApplicationJsonSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_multiple_devices" }),
        __metadata("design:type", Boolean)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "allowMultipleDevices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_hosts" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "alternativeHosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approval_type" }),
        __metadata("design:type", Number)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "approvalType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendees_and_panelists_reminder_email_notification" }),
        __metadata("design:type", WebinarCreate201ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "attendeesAndPanelistsReminderEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "audio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_domains" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "authenticationDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_name" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "authenticationName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_option" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "authenticationOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_recording" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "autoRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=close_registration" }),
        __metadata("design:type", Boolean)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "closeRegistration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact_email" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "contactEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact_name" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "contactName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email_language" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "emailLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login" }),
        __metadata("design:type", Boolean)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "enforceLogin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login_domains" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "enforceLoginDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=follow_up_absentees_email_notification" }),
        __metadata("design:type", WebinarCreate201ApplicationJsonSettingsFollowUpAbsenteesEmailNotification)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "followUpAbsenteesEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=follow_up_attendees_email_notification" }),
        __metadata("design:type", WebinarCreate201ApplicationJsonSettingsFollowUpAttendeesEmailNotification)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "followUpAttendeesEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=global_dial_in_countries" }),
        __metadata("design:type", Array)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "globalDialInCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hd_video" }),
        __metadata("design:type", Boolean)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "hdVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_video" }),
        __metadata("design:type", Boolean)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "hostVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_authentication" }),
        __metadata("design:type", Boolean)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "meetingAuthentication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notify_registrants" }),
        __metadata("design:type", Boolean)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "notifyRegistrants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=on_demand" }),
        __metadata("design:type", Boolean)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "onDemand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=panelists_invitation_email_notification" }),
        __metadata("design:type", Boolean)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "panelistsInvitationEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=panelists_video" }),
        __metadata("design:type", Boolean)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "panelistsVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=post_webinar_survey" }),
        __metadata("design:type", Boolean)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "postWebinarSurvey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=practice_session" }),
        __metadata("design:type", Boolean)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "practiceSession", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=question_and_answer" }),
        __metadata("design:type", WebinarCreate201ApplicationJsonSettingsQuestionAndAnswer)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "questionAndAnswer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_confirmation_email" }),
        __metadata("design:type", Boolean)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "registrantsConfirmationEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_email_notification" }),
        __metadata("design:type", Boolean)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "registrantsEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_restrict_number" }),
        __metadata("design:type", Number)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "registrantsRestrictNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registration_type" }),
        __metadata("design:type", Number)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "registrationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_share_button" }),
        __metadata("design:type", Boolean)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "showShareButton", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=survey_url" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJsonSettings.prototype, "surveyUrl", void 0);
    return WebinarCreate201ApplicationJsonSettings;
}(utils_1.SpeakeasyBase));
exports.WebinarCreate201ApplicationJsonSettings = WebinarCreate201ApplicationJsonSettings;
var WebinarCreate201ApplicationJsonTrackingFields = /** @class */ (function (_super) {
    __extends(WebinarCreate201ApplicationJsonTrackingFields, _super);
    function WebinarCreate201ApplicationJsonTrackingFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJsonTrackingFields.prototype, "field", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJsonTrackingFields.prototype, "value", void 0);
    return WebinarCreate201ApplicationJsonTrackingFields;
}(utils_1.SpeakeasyBase));
exports.WebinarCreate201ApplicationJsonTrackingFields = WebinarCreate201ApplicationJsonTrackingFields;
// WebinarCreate201ApplicationJson
/**
 * Webinar object.
**/
var WebinarCreate201ApplicationJson = /** @class */ (function (_super) {
    __extends(WebinarCreate201ApplicationJson, _super);
    function WebinarCreate201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=agenda" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJson.prototype, "agenda", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], WebinarCreate201ApplicationJson.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], WebinarCreate201ApplicationJson.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_email" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJson.prototype, "hostEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_id" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJson.prototype, "hostId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], WebinarCreate201ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_url" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJson.prototype, "joinUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=occurrences", elemType: WebinarCreate201ApplicationJsonOccurrences }),
        __metadata("design:type", Array)
    ], WebinarCreate201ApplicationJson.prototype, "occurrences", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJson.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurrence" }),
        __metadata("design:type", WebinarCreate201ApplicationJsonRecurrenceWebinar)
    ], WebinarCreate201ApplicationJson.prototype, "recurrence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_confirmation_email" }),
        __metadata("design:type", Boolean)
    ], WebinarCreate201ApplicationJson.prototype, "registrantsConfirmationEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", WebinarCreate201ApplicationJsonSettings)
    ], WebinarCreate201ApplicationJson.prototype, "settings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], WebinarCreate201ApplicationJson.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_url" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJson.prototype, "startUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=template_id" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJson.prototype, "templateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJson.prototype, "timezone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJson.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tracking_fields", elemType: WebinarCreate201ApplicationJsonTrackingFields }),
        __metadata("design:type", Array)
    ], WebinarCreate201ApplicationJson.prototype, "trackingFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], WebinarCreate201ApplicationJson.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], WebinarCreate201ApplicationJson.prototype, "uuid", void 0);
    return WebinarCreate201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.WebinarCreate201ApplicationJson = WebinarCreate201ApplicationJson;
var WebinarCreateRequest = /** @class */ (function (_super) {
    __extends(WebinarCreateRequest, _super);
    function WebinarCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarCreatePathParams)
    ], WebinarCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarCreateRequests)
    ], WebinarCreateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarCreateSecurity)
    ], WebinarCreateRequest.prototype, "security", void 0);
    return WebinarCreateRequest;
}(utils_1.SpeakeasyBase));
exports.WebinarCreateRequest = WebinarCreateRequest;
var WebinarCreateResponse = /** @class */ (function (_super) {
    __extends(WebinarCreateResponse, _super);
    function WebinarCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], WebinarCreateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], WebinarCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], WebinarCreateResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], WebinarCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarCreate201ApplicationJson)
    ], WebinarCreateResponse.prototype, "webinarCreate201ApplicationJSONObject", void 0);
    return WebinarCreateResponse;
}(utils_1.SpeakeasyBase));
exports.WebinarCreateResponse = WebinarCreateResponse;
