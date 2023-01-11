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
exports.WebinarUpdateResponse = exports.WebinarUpdateRequest = exports.WebinarUpdateSecurity = exports.WebinarUpdateRequests = exports.WebinarUpdateMultipartFormData1 = exports.WebinarUpdateMultipartFormDataTrackingFields = exports.WebinarUpdateMultipartFormDataSettings = exports.WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer = exports.WebinarUpdateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum = exports.WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification = exports.WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification = exports.WebinarUpdateMultipartFormDataSettingsAutoRecordingEnum = exports.WebinarUpdateMultipartFormDataSettingsAudioEnum = exports.WebinarUpdateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification = exports.WebinarUpdateMultipartFormDataRecurrence = exports.WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum = exports.WebinarUpdateApplicationJson = exports.WebinarUpdateApplicationJsonTrackingFields = exports.WebinarUpdateApplicationJsonSettings = exports.WebinarUpdateApplicationJsonSettingsQuestionAndAnswer = exports.WebinarUpdateApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum = exports.WebinarUpdateApplicationJsonSettingsFollowUpAttendeesEmailNotification = exports.WebinarUpdateApplicationJsonSettingsFollowUpAbsenteesEmailNotification = exports.WebinarUpdateApplicationJsonSettingsAutoRecordingEnum = exports.WebinarUpdateApplicationJsonSettingsAudioEnum = exports.WebinarUpdateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification = exports.WebinarUpdateApplicationJsonRecurrence = exports.WebinarUpdateApplicationJsonRecurrenceWeeklyDaysEnum = exports.WebinarUpdateQueryParams = exports.WebinarUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var WebinarUpdatePathParams = /** @class */ (function (_super) {
    __extends(WebinarUpdatePathParams, _super);
    function WebinarUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", Number)
    ], WebinarUpdatePathParams.prototype, "webinarId", void 0);
    return WebinarUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.WebinarUpdatePathParams = WebinarUpdatePathParams;
var WebinarUpdateQueryParams = /** @class */ (function (_super) {
    __extends(WebinarUpdateQueryParams, _super);
    function WebinarUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=occurrence_id" }),
        __metadata("design:type", String)
    ], WebinarUpdateQueryParams.prototype, "occurrenceId", void 0);
    return WebinarUpdateQueryParams;
}(utils_1.SpeakeasyBase));
exports.WebinarUpdateQueryParams = WebinarUpdateQueryParams;
var WebinarUpdateApplicationJsonRecurrenceWeeklyDaysEnum;
(function (WebinarUpdateApplicationJsonRecurrenceWeeklyDaysEnum) {
    WebinarUpdateApplicationJsonRecurrenceWeeklyDaysEnum["One"] = "1";
    WebinarUpdateApplicationJsonRecurrenceWeeklyDaysEnum["Two"] = "2";
    WebinarUpdateApplicationJsonRecurrenceWeeklyDaysEnum["Three"] = "3";
    WebinarUpdateApplicationJsonRecurrenceWeeklyDaysEnum["Four"] = "4";
    WebinarUpdateApplicationJsonRecurrenceWeeklyDaysEnum["Five"] = "5";
    WebinarUpdateApplicationJsonRecurrenceWeeklyDaysEnum["Six"] = "6";
    WebinarUpdateApplicationJsonRecurrenceWeeklyDaysEnum["Seven"] = "7";
})(WebinarUpdateApplicationJsonRecurrenceWeeklyDaysEnum = exports.WebinarUpdateApplicationJsonRecurrenceWeeklyDaysEnum || (exports.WebinarUpdateApplicationJsonRecurrenceWeeklyDaysEnum = {}));
// WebinarUpdateApplicationJsonRecurrence
/**
 * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
**/
var WebinarUpdateApplicationJsonRecurrence = /** @class */ (function (_super) {
    __extends(WebinarUpdateApplicationJsonRecurrence, _super);
    function WebinarUpdateApplicationJsonRecurrence() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_date_time" }),
        __metadata("design:type", Date)
    ], WebinarUpdateApplicationJsonRecurrence.prototype, "endDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_times" }),
        __metadata("design:type", Number)
    ], WebinarUpdateApplicationJsonRecurrence.prototype, "endTimes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_day" }),
        __metadata("design:type", Number)
    ], WebinarUpdateApplicationJsonRecurrence.prototype, "monthlyDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_week" }),
        __metadata("design:type", Number)
    ], WebinarUpdateApplicationJsonRecurrence.prototype, "monthlyWeek", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_week_day" }),
        __metadata("design:type", Number)
    ], WebinarUpdateApplicationJsonRecurrence.prototype, "monthlyWeekDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repeat_interval" }),
        __metadata("design:type", Number)
    ], WebinarUpdateApplicationJsonRecurrence.prototype, "repeatInterval", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], WebinarUpdateApplicationJsonRecurrence.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weekly_days" }),
        __metadata("design:type", String)
    ], WebinarUpdateApplicationJsonRecurrence.prototype, "weeklyDays", void 0);
    return WebinarUpdateApplicationJsonRecurrence;
}(utils_1.SpeakeasyBase));
exports.WebinarUpdateApplicationJsonRecurrence = WebinarUpdateApplicationJsonRecurrence;
// WebinarUpdateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification
/**
 * Send reminder email to attendees and panelists.
**/
var WebinarUpdateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification = /** @class */ (function (_super) {
    __extends(WebinarUpdateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification, _super);
    function WebinarUpdateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], WebinarUpdateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification.prototype, "type", void 0);
    return WebinarUpdateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification;
}(utils_1.SpeakeasyBase));
exports.WebinarUpdateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification = WebinarUpdateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification;
var WebinarUpdateApplicationJsonSettingsAudioEnum;
(function (WebinarUpdateApplicationJsonSettingsAudioEnum) {
    WebinarUpdateApplicationJsonSettingsAudioEnum["Both"] = "both";
    WebinarUpdateApplicationJsonSettingsAudioEnum["Telephony"] = "telephony";
    WebinarUpdateApplicationJsonSettingsAudioEnum["Voip"] = "voip";
})(WebinarUpdateApplicationJsonSettingsAudioEnum = exports.WebinarUpdateApplicationJsonSettingsAudioEnum || (exports.WebinarUpdateApplicationJsonSettingsAudioEnum = {}));
var WebinarUpdateApplicationJsonSettingsAutoRecordingEnum;
(function (WebinarUpdateApplicationJsonSettingsAutoRecordingEnum) {
    WebinarUpdateApplicationJsonSettingsAutoRecordingEnum["Local"] = "local";
    WebinarUpdateApplicationJsonSettingsAutoRecordingEnum["Cloud"] = "cloud";
    WebinarUpdateApplicationJsonSettingsAutoRecordingEnum["None"] = "none";
})(WebinarUpdateApplicationJsonSettingsAutoRecordingEnum = exports.WebinarUpdateApplicationJsonSettingsAutoRecordingEnum || (exports.WebinarUpdateApplicationJsonSettingsAutoRecordingEnum = {}));
// WebinarUpdateApplicationJsonSettingsFollowUpAbsenteesEmailNotification
/**
 * Send follow-up email to absentees.
**/
var WebinarUpdateApplicationJsonSettingsFollowUpAbsenteesEmailNotification = /** @class */ (function (_super) {
    __extends(WebinarUpdateApplicationJsonSettingsFollowUpAbsenteesEmailNotification, _super);
    function WebinarUpdateApplicationJsonSettingsFollowUpAbsenteesEmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateApplicationJsonSettingsFollowUpAbsenteesEmailNotification.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], WebinarUpdateApplicationJsonSettingsFollowUpAbsenteesEmailNotification.prototype, "type", void 0);
    return WebinarUpdateApplicationJsonSettingsFollowUpAbsenteesEmailNotification;
}(utils_1.SpeakeasyBase));
exports.WebinarUpdateApplicationJsonSettingsFollowUpAbsenteesEmailNotification = WebinarUpdateApplicationJsonSettingsFollowUpAbsenteesEmailNotification;
// WebinarUpdateApplicationJsonSettingsFollowUpAttendeesEmailNotification
/**
 * Send follow-up email to attendees.
**/
var WebinarUpdateApplicationJsonSettingsFollowUpAttendeesEmailNotification = /** @class */ (function (_super) {
    __extends(WebinarUpdateApplicationJsonSettingsFollowUpAttendeesEmailNotification, _super);
    function WebinarUpdateApplicationJsonSettingsFollowUpAttendeesEmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateApplicationJsonSettingsFollowUpAttendeesEmailNotification.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], WebinarUpdateApplicationJsonSettingsFollowUpAttendeesEmailNotification.prototype, "type", void 0);
    return WebinarUpdateApplicationJsonSettingsFollowUpAttendeesEmailNotification;
}(utils_1.SpeakeasyBase));
exports.WebinarUpdateApplicationJsonSettingsFollowUpAttendeesEmailNotification = WebinarUpdateApplicationJsonSettingsFollowUpAttendeesEmailNotification;
var WebinarUpdateApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum;
(function (WebinarUpdateApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum) {
    WebinarUpdateApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum["Only"] = "only";
    WebinarUpdateApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum["All"] = "all";
})(WebinarUpdateApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum = exports.WebinarUpdateApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum || (exports.WebinarUpdateApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum = {}));
// WebinarUpdateApplicationJsonSettingsQuestionAndAnswer
/**
 * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
**/
var WebinarUpdateApplicationJsonSettingsQuestionAndAnswer = /** @class */ (function (_super) {
    __extends(WebinarUpdateApplicationJsonSettingsQuestionAndAnswer, _super);
    function WebinarUpdateApplicationJsonSettingsQuestionAndAnswer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_anonymous_questions" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateApplicationJsonSettingsQuestionAndAnswer.prototype, "allowAnonymousQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answer_questions" }),
        __metadata("design:type", String)
    ], WebinarUpdateApplicationJsonSettingsQuestionAndAnswer.prototype, "answerQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendees_can_comment" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateApplicationJsonSettingsQuestionAndAnswer.prototype, "attendeesCanComment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendees_can_upvote" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateApplicationJsonSettingsQuestionAndAnswer.prototype, "attendeesCanUpvote", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateApplicationJsonSettingsQuestionAndAnswer.prototype, "enable", void 0);
    return WebinarUpdateApplicationJsonSettingsQuestionAndAnswer;
}(utils_1.SpeakeasyBase));
exports.WebinarUpdateApplicationJsonSettingsQuestionAndAnswer = WebinarUpdateApplicationJsonSettingsQuestionAndAnswer;
// WebinarUpdateApplicationJsonSettings
/**
 * Webinar settings.
**/
var WebinarUpdateApplicationJsonSettings = /** @class */ (function (_super) {
    __extends(WebinarUpdateApplicationJsonSettings, _super);
    function WebinarUpdateApplicationJsonSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_multiple_devices" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateApplicationJsonSettings.prototype, "allowMultipleDevices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_hosts" }),
        __metadata("design:type", String)
    ], WebinarUpdateApplicationJsonSettings.prototype, "alternativeHosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approval_type" }),
        __metadata("design:type", Number)
    ], WebinarUpdateApplicationJsonSettings.prototype, "approvalType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendees_and_panelists_reminder_email_notification" }),
        __metadata("design:type", WebinarUpdateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification)
    ], WebinarUpdateApplicationJsonSettings.prototype, "attendeesAndPanelistsReminderEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio" }),
        __metadata("design:type", String)
    ], WebinarUpdateApplicationJsonSettings.prototype, "audio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_domains" }),
        __metadata("design:type", String)
    ], WebinarUpdateApplicationJsonSettings.prototype, "authenticationDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_name" }),
        __metadata("design:type", String)
    ], WebinarUpdateApplicationJsonSettings.prototype, "authenticationName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_option" }),
        __metadata("design:type", String)
    ], WebinarUpdateApplicationJsonSettings.prototype, "authenticationOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_recording" }),
        __metadata("design:type", String)
    ], WebinarUpdateApplicationJsonSettings.prototype, "autoRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=close_registration" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateApplicationJsonSettings.prototype, "closeRegistration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact_email" }),
        __metadata("design:type", String)
    ], WebinarUpdateApplicationJsonSettings.prototype, "contactEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact_name" }),
        __metadata("design:type", String)
    ], WebinarUpdateApplicationJsonSettings.prototype, "contactName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email_language" }),
        __metadata("design:type", String)
    ], WebinarUpdateApplicationJsonSettings.prototype, "emailLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateApplicationJsonSettings.prototype, "enforceLogin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login_domains" }),
        __metadata("design:type", String)
    ], WebinarUpdateApplicationJsonSettings.prototype, "enforceLoginDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=follow_up_absentees_email_notification" }),
        __metadata("design:type", WebinarUpdateApplicationJsonSettingsFollowUpAbsenteesEmailNotification)
    ], WebinarUpdateApplicationJsonSettings.prototype, "followUpAbsenteesEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=follow_up_attendees_email_notification" }),
        __metadata("design:type", WebinarUpdateApplicationJsonSettingsFollowUpAttendeesEmailNotification)
    ], WebinarUpdateApplicationJsonSettings.prototype, "followUpAttendeesEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=global_dial_in_countries" }),
        __metadata("design:type", Array)
    ], WebinarUpdateApplicationJsonSettings.prototype, "globalDialInCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hd_video" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateApplicationJsonSettings.prototype, "hdVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_video" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateApplicationJsonSettings.prototype, "hostVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_authentication" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateApplicationJsonSettings.prototype, "meetingAuthentication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notify_registrants" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateApplicationJsonSettings.prototype, "notifyRegistrants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=on_demand" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateApplicationJsonSettings.prototype, "onDemand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=panelists_invitation_email_notification" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateApplicationJsonSettings.prototype, "panelistsInvitationEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=panelists_video" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateApplicationJsonSettings.prototype, "panelistsVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=post_webinar_survey" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateApplicationJsonSettings.prototype, "postWebinarSurvey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=practice_session" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateApplicationJsonSettings.prototype, "practiceSession", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=question_and_answer" }),
        __metadata("design:type", WebinarUpdateApplicationJsonSettingsQuestionAndAnswer)
    ], WebinarUpdateApplicationJsonSettings.prototype, "questionAndAnswer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_confirmation_email" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateApplicationJsonSettings.prototype, "registrantsConfirmationEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_email_notification" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateApplicationJsonSettings.prototype, "registrantsEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_restrict_number" }),
        __metadata("design:type", Number)
    ], WebinarUpdateApplicationJsonSettings.prototype, "registrantsRestrictNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registration_type" }),
        __metadata("design:type", Number)
    ], WebinarUpdateApplicationJsonSettings.prototype, "registrationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_share_button" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateApplicationJsonSettings.prototype, "showShareButton", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=survey_url" }),
        __metadata("design:type", String)
    ], WebinarUpdateApplicationJsonSettings.prototype, "surveyUrl", void 0);
    return WebinarUpdateApplicationJsonSettings;
}(utils_1.SpeakeasyBase));
exports.WebinarUpdateApplicationJsonSettings = WebinarUpdateApplicationJsonSettings;
var WebinarUpdateApplicationJsonTrackingFields = /** @class */ (function (_super) {
    __extends(WebinarUpdateApplicationJsonTrackingFields, _super);
    function WebinarUpdateApplicationJsonTrackingFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], WebinarUpdateApplicationJsonTrackingFields.prototype, "field", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], WebinarUpdateApplicationJsonTrackingFields.prototype, "value", void 0);
    return WebinarUpdateApplicationJsonTrackingFields;
}(utils_1.SpeakeasyBase));
exports.WebinarUpdateApplicationJsonTrackingFields = WebinarUpdateApplicationJsonTrackingFields;
// WebinarUpdateApplicationJson
/**
 * Base webinar object for sessions.
**/
var WebinarUpdateApplicationJson = /** @class */ (function (_super) {
    __extends(WebinarUpdateApplicationJson, _super);
    function WebinarUpdateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=agenda" }),
        __metadata("design:type", String)
    ], WebinarUpdateApplicationJson.prototype, "agenda", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], WebinarUpdateApplicationJson.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], WebinarUpdateApplicationJson.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurrence" }),
        __metadata("design:type", WebinarUpdateApplicationJsonRecurrence)
    ], WebinarUpdateApplicationJson.prototype, "recurrence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", WebinarUpdateApplicationJsonSettings)
    ], WebinarUpdateApplicationJson.prototype, "settings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], WebinarUpdateApplicationJson.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], WebinarUpdateApplicationJson.prototype, "timezone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], WebinarUpdateApplicationJson.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tracking_fields", elemType: WebinarUpdateApplicationJsonTrackingFields }),
        __metadata("design:type", Array)
    ], WebinarUpdateApplicationJson.prototype, "trackingFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], WebinarUpdateApplicationJson.prototype, "type", void 0);
    return WebinarUpdateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.WebinarUpdateApplicationJson = WebinarUpdateApplicationJson;
var WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum;
(function (WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum) {
    WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum["One"] = "1";
    WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum["Two"] = "2";
    WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum["Three"] = "3";
    WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum["Four"] = "4";
    WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum["Five"] = "5";
    WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum["Six"] = "6";
    WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum["Seven"] = "7";
})(WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum = exports.WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum || (exports.WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum = {}));
// WebinarUpdateMultipartFormDataRecurrence
/**
 * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
**/
var WebinarUpdateMultipartFormDataRecurrence = /** @class */ (function (_super) {
    __extends(WebinarUpdateMultipartFormDataRecurrence, _super);
    function WebinarUpdateMultipartFormDataRecurrence() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_date_time" }),
        __metadata("design:type", Date)
    ], WebinarUpdateMultipartFormDataRecurrence.prototype, "endDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_times" }),
        __metadata("design:type", Number)
    ], WebinarUpdateMultipartFormDataRecurrence.prototype, "endTimes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_day" }),
        __metadata("design:type", Number)
    ], WebinarUpdateMultipartFormDataRecurrence.prototype, "monthlyDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_week" }),
        __metadata("design:type", Number)
    ], WebinarUpdateMultipartFormDataRecurrence.prototype, "monthlyWeek", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_week_day" }),
        __metadata("design:type", Number)
    ], WebinarUpdateMultipartFormDataRecurrence.prototype, "monthlyWeekDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repeat_interval" }),
        __metadata("design:type", Number)
    ], WebinarUpdateMultipartFormDataRecurrence.prototype, "repeatInterval", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], WebinarUpdateMultipartFormDataRecurrence.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weekly_days" }),
        __metadata("design:type", String)
    ], WebinarUpdateMultipartFormDataRecurrence.prototype, "weeklyDays", void 0);
    return WebinarUpdateMultipartFormDataRecurrence;
}(utils_1.SpeakeasyBase));
exports.WebinarUpdateMultipartFormDataRecurrence = WebinarUpdateMultipartFormDataRecurrence;
// WebinarUpdateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification
/**
 * Send reminder email to attendees and panelists.
**/
var WebinarUpdateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification = /** @class */ (function (_super) {
    __extends(WebinarUpdateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification, _super);
    function WebinarUpdateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], WebinarUpdateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification.prototype, "type", void 0);
    return WebinarUpdateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification;
}(utils_1.SpeakeasyBase));
exports.WebinarUpdateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification = WebinarUpdateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification;
var WebinarUpdateMultipartFormDataSettingsAudioEnum;
(function (WebinarUpdateMultipartFormDataSettingsAudioEnum) {
    WebinarUpdateMultipartFormDataSettingsAudioEnum["Both"] = "both";
    WebinarUpdateMultipartFormDataSettingsAudioEnum["Telephony"] = "telephony";
    WebinarUpdateMultipartFormDataSettingsAudioEnum["Voip"] = "voip";
})(WebinarUpdateMultipartFormDataSettingsAudioEnum = exports.WebinarUpdateMultipartFormDataSettingsAudioEnum || (exports.WebinarUpdateMultipartFormDataSettingsAudioEnum = {}));
var WebinarUpdateMultipartFormDataSettingsAutoRecordingEnum;
(function (WebinarUpdateMultipartFormDataSettingsAutoRecordingEnum) {
    WebinarUpdateMultipartFormDataSettingsAutoRecordingEnum["Local"] = "local";
    WebinarUpdateMultipartFormDataSettingsAutoRecordingEnum["Cloud"] = "cloud";
    WebinarUpdateMultipartFormDataSettingsAutoRecordingEnum["None"] = "none";
})(WebinarUpdateMultipartFormDataSettingsAutoRecordingEnum = exports.WebinarUpdateMultipartFormDataSettingsAutoRecordingEnum || (exports.WebinarUpdateMultipartFormDataSettingsAutoRecordingEnum = {}));
// WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification
/**
 * Send follow-up email to absentees.
**/
var WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification = /** @class */ (function (_super) {
    __extends(WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification, _super);
    function WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification.prototype, "type", void 0);
    return WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification;
}(utils_1.SpeakeasyBase));
exports.WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification = WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification;
// WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification
/**
 * Send follow-up email to attendees.
**/
var WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification = /** @class */ (function (_super) {
    __extends(WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification, _super);
    function WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification.prototype, "type", void 0);
    return WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification;
}(utils_1.SpeakeasyBase));
exports.WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification = WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification;
var WebinarUpdateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum;
(function (WebinarUpdateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum) {
    WebinarUpdateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum["Only"] = "only";
    WebinarUpdateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum["All"] = "all";
})(WebinarUpdateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum = exports.WebinarUpdateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum || (exports.WebinarUpdateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum = {}));
// WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer
/**
 * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
**/
var WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer = /** @class */ (function (_super) {
    __extends(WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer, _super);
    function WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_anonymous_questions" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer.prototype, "allowAnonymousQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answer_questions" }),
        __metadata("design:type", String)
    ], WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer.prototype, "answerQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendees_can_comment" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer.prototype, "attendeesCanComment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendees_can_upvote" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer.prototype, "attendeesCanUpvote", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer.prototype, "enable", void 0);
    return WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer;
}(utils_1.SpeakeasyBase));
exports.WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer = WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer;
// WebinarUpdateMultipartFormDataSettings
/**
 * Webinar settings.
**/
var WebinarUpdateMultipartFormDataSettings = /** @class */ (function (_super) {
    __extends(WebinarUpdateMultipartFormDataSettings, _super);
    function WebinarUpdateMultipartFormDataSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_multiple_devices" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "allowMultipleDevices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_hosts" }),
        __metadata("design:type", String)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "alternativeHosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approval_type" }),
        __metadata("design:type", Number)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "approvalType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendees_and_panelists_reminder_email_notification" }),
        __metadata("design:type", WebinarUpdateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "attendeesAndPanelistsReminderEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio" }),
        __metadata("design:type", String)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "audio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_domains" }),
        __metadata("design:type", String)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "authenticationDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_name" }),
        __metadata("design:type", String)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "authenticationName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_option" }),
        __metadata("design:type", String)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "authenticationOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_recording" }),
        __metadata("design:type", String)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "autoRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=close_registration" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "closeRegistration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact_email" }),
        __metadata("design:type", String)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "contactEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact_name" }),
        __metadata("design:type", String)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "contactName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email_language" }),
        __metadata("design:type", String)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "emailLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "enforceLogin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login_domains" }),
        __metadata("design:type", String)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "enforceLoginDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=follow_up_absentees_email_notification" }),
        __metadata("design:type", WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "followUpAbsenteesEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=follow_up_attendees_email_notification" }),
        __metadata("design:type", WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "followUpAttendeesEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=global_dial_in_countries" }),
        __metadata("design:type", Array)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "globalDialInCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hd_video" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "hdVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_video" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "hostVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_authentication" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "meetingAuthentication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notify_registrants" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "notifyRegistrants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=on_demand" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "onDemand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=panelists_invitation_email_notification" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "panelistsInvitationEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=panelists_video" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "panelistsVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=post_webinar_survey" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "postWebinarSurvey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=practice_session" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "practiceSession", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=question_and_answer" }),
        __metadata("design:type", WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "questionAndAnswer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_confirmation_email" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "registrantsConfirmationEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_email_notification" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "registrantsEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_restrict_number" }),
        __metadata("design:type", Number)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "registrantsRestrictNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registration_type" }),
        __metadata("design:type", Number)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "registrationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_share_button" }),
        __metadata("design:type", Boolean)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "showShareButton", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=survey_url" }),
        __metadata("design:type", String)
    ], WebinarUpdateMultipartFormDataSettings.prototype, "surveyUrl", void 0);
    return WebinarUpdateMultipartFormDataSettings;
}(utils_1.SpeakeasyBase));
exports.WebinarUpdateMultipartFormDataSettings = WebinarUpdateMultipartFormDataSettings;
var WebinarUpdateMultipartFormDataTrackingFields = /** @class */ (function (_super) {
    __extends(WebinarUpdateMultipartFormDataTrackingFields, _super);
    function WebinarUpdateMultipartFormDataTrackingFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], WebinarUpdateMultipartFormDataTrackingFields.prototype, "field", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], WebinarUpdateMultipartFormDataTrackingFields.prototype, "value", void 0);
    return WebinarUpdateMultipartFormDataTrackingFields;
}(utils_1.SpeakeasyBase));
exports.WebinarUpdateMultipartFormDataTrackingFields = WebinarUpdateMultipartFormDataTrackingFields;
// WebinarUpdateMultipartFormData1
/**
 * Base webinar object for sessions.
**/
var WebinarUpdateMultipartFormData1 = /** @class */ (function (_super) {
    __extends(WebinarUpdateMultipartFormData1, _super);
    function WebinarUpdateMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=agenda" }),
        __metadata("design:type", String)
    ], WebinarUpdateMultipartFormData1.prototype, "agenda", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=duration" }),
        __metadata("design:type", Number)
    ], WebinarUpdateMultipartFormData1.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=password" }),
        __metadata("design:type", String)
    ], WebinarUpdateMultipartFormData1.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=recurrence;json=true" }),
        __metadata("design:type", WebinarUpdateMultipartFormDataRecurrence)
    ], WebinarUpdateMultipartFormData1.prototype, "recurrence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=settings;json=true" }),
        __metadata("design:type", WebinarUpdateMultipartFormDataSettings)
    ], WebinarUpdateMultipartFormData1.prototype, "settings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=start_time" }),
        __metadata("design:type", Date)
    ], WebinarUpdateMultipartFormData1.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=timezone" }),
        __metadata("design:type", String)
    ], WebinarUpdateMultipartFormData1.prototype, "timezone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=topic" }),
        __metadata("design:type", String)
    ], WebinarUpdateMultipartFormData1.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=tracking_fields;json=true", elemType: WebinarUpdateMultipartFormDataTrackingFields }),
        __metadata("design:type", Array)
    ], WebinarUpdateMultipartFormData1.prototype, "trackingFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=type" }),
        __metadata("design:type", Number)
    ], WebinarUpdateMultipartFormData1.prototype, "type", void 0);
    return WebinarUpdateMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.WebinarUpdateMultipartFormData1 = WebinarUpdateMultipartFormData1;
var WebinarUpdateRequests = /** @class */ (function (_super) {
    __extends(WebinarUpdateRequests, _super);
    function WebinarUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", WebinarUpdateApplicationJson)
    ], WebinarUpdateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", WebinarUpdateMultipartFormData1)
    ], WebinarUpdateRequests.prototype, "object1", void 0);
    return WebinarUpdateRequests;
}(utils_1.SpeakeasyBase));
exports.WebinarUpdateRequests = WebinarUpdateRequests;
var WebinarUpdateSecurity = /** @class */ (function (_super) {
    __extends(WebinarUpdateSecurity, _super);
    function WebinarUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], WebinarUpdateSecurity.prototype, "oAuth", void 0);
    return WebinarUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.WebinarUpdateSecurity = WebinarUpdateSecurity;
var WebinarUpdateRequest = /** @class */ (function (_super) {
    __extends(WebinarUpdateRequest, _super);
    function WebinarUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarUpdatePathParams)
    ], WebinarUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarUpdateQueryParams)
    ], WebinarUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarUpdateRequests)
    ], WebinarUpdateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarUpdateSecurity)
    ], WebinarUpdateRequest.prototype, "security", void 0);
    return WebinarUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.WebinarUpdateRequest = WebinarUpdateRequest;
var WebinarUpdateResponse = /** @class */ (function (_super) {
    __extends(WebinarUpdateResponse, _super);
    function WebinarUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], WebinarUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], WebinarUpdateResponse.prototype, "statusCode", void 0);
    return WebinarUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.WebinarUpdateResponse = WebinarUpdateResponse;
