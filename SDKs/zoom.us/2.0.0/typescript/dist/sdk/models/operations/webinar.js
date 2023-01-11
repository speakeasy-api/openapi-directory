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
exports.WebinarResponse = exports.WebinarRequest = exports.Webinar200ApplicationJson = exports.Webinar200ApplicationJsonTrackingFields = exports.Webinar200ApplicationJsonSettings = exports.Webinar200ApplicationJsonSettingsQuestionAndAnswer = exports.Webinar200ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum = exports.Webinar200ApplicationJsonSettingsFollowUpAttendeesEmailNotification = exports.Webinar200ApplicationJsonSettingsFollowUpAbsenteesEmailNotification = exports.Webinar200ApplicationJsonSettingsAutoRecordingEnum = exports.Webinar200ApplicationJsonSettingsAudioEnum = exports.Webinar200ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification = exports.Webinar200ApplicationJsonRecurrenceWebinar = exports.Webinar200ApplicationJsonOccurrences = exports.WebinarSecurity = exports.WebinarQueryParams = exports.WebinarPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var WebinarPathParams = /** @class */ (function (_super) {
    __extends(WebinarPathParams, _super);
    function WebinarPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", Number)
    ], WebinarPathParams.prototype, "webinarId", void 0);
    return WebinarPathParams;
}(utils_1.SpeakeasyBase));
exports.WebinarPathParams = WebinarPathParams;
var WebinarQueryParams = /** @class */ (function (_super) {
    __extends(WebinarQueryParams, _super);
    function WebinarQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=occurrence_id" }),
        __metadata("design:type", String)
    ], WebinarQueryParams.prototype, "occurrenceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=show_previous_occurrences" }),
        __metadata("design:type", Boolean)
    ], WebinarQueryParams.prototype, "showPreviousOccurrences", void 0);
    return WebinarQueryParams;
}(utils_1.SpeakeasyBase));
exports.WebinarQueryParams = WebinarQueryParams;
var WebinarSecurity = /** @class */ (function (_super) {
    __extends(WebinarSecurity, _super);
    function WebinarSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], WebinarSecurity.prototype, "oAuth", void 0);
    return WebinarSecurity;
}(utils_1.SpeakeasyBase));
exports.WebinarSecurity = WebinarSecurity;
// Webinar200ApplicationJsonOccurrences
/**
 * Occurence object. This object is only returned for Recurring Webinars.
**/
var Webinar200ApplicationJsonOccurrences = /** @class */ (function (_super) {
    __extends(Webinar200ApplicationJsonOccurrences, _super);
    function Webinar200ApplicationJsonOccurrences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], Webinar200ApplicationJsonOccurrences.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=occurrence_id" }),
        __metadata("design:type", String)
    ], Webinar200ApplicationJsonOccurrences.prototype, "occurrenceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], Webinar200ApplicationJsonOccurrences.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Webinar200ApplicationJsonOccurrences.prototype, "status", void 0);
    return Webinar200ApplicationJsonOccurrences;
}(utils_1.SpeakeasyBase));
exports.Webinar200ApplicationJsonOccurrences = Webinar200ApplicationJsonOccurrences;
// Webinar200ApplicationJsonRecurrenceWebinar
/**
 * Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time.
**/
var Webinar200ApplicationJsonRecurrenceWebinar = /** @class */ (function (_super) {
    __extends(Webinar200ApplicationJsonRecurrenceWebinar, _super);
    function Webinar200ApplicationJsonRecurrenceWebinar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_date_time" }),
        __metadata("design:type", Date)
    ], Webinar200ApplicationJsonRecurrenceWebinar.prototype, "endDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_times" }),
        __metadata("design:type", Number)
    ], Webinar200ApplicationJsonRecurrenceWebinar.prototype, "endTimes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_day" }),
        __metadata("design:type", Number)
    ], Webinar200ApplicationJsonRecurrenceWebinar.prototype, "monthlyDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_week" }),
        __metadata("design:type", Number)
    ], Webinar200ApplicationJsonRecurrenceWebinar.prototype, "monthlyWeek", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_week_day" }),
        __metadata("design:type", Number)
    ], Webinar200ApplicationJsonRecurrenceWebinar.prototype, "monthlyWeekDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repeat_interval" }),
        __metadata("design:type", Number)
    ], Webinar200ApplicationJsonRecurrenceWebinar.prototype, "repeatInterval", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], Webinar200ApplicationJsonRecurrenceWebinar.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weekly_days" }),
        __metadata("design:type", String)
    ], Webinar200ApplicationJsonRecurrenceWebinar.prototype, "weeklyDays", void 0);
    return Webinar200ApplicationJsonRecurrenceWebinar;
}(utils_1.SpeakeasyBase));
exports.Webinar200ApplicationJsonRecurrenceWebinar = Webinar200ApplicationJsonRecurrenceWebinar;
// Webinar200ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification
/**
 * Send reminder email to attendees and panelists.
**/
var Webinar200ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification = /** @class */ (function (_super) {
    __extends(Webinar200ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification, _super);
    function Webinar200ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], Webinar200ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], Webinar200ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification.prototype, "type", void 0);
    return Webinar200ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification;
}(utils_1.SpeakeasyBase));
exports.Webinar200ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification = Webinar200ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification;
var Webinar200ApplicationJsonSettingsAudioEnum;
(function (Webinar200ApplicationJsonSettingsAudioEnum) {
    Webinar200ApplicationJsonSettingsAudioEnum["Both"] = "both";
    Webinar200ApplicationJsonSettingsAudioEnum["Telephony"] = "telephony";
    Webinar200ApplicationJsonSettingsAudioEnum["Voip"] = "voip";
})(Webinar200ApplicationJsonSettingsAudioEnum = exports.Webinar200ApplicationJsonSettingsAudioEnum || (exports.Webinar200ApplicationJsonSettingsAudioEnum = {}));
var Webinar200ApplicationJsonSettingsAutoRecordingEnum;
(function (Webinar200ApplicationJsonSettingsAutoRecordingEnum) {
    Webinar200ApplicationJsonSettingsAutoRecordingEnum["Local"] = "local";
    Webinar200ApplicationJsonSettingsAutoRecordingEnum["Cloud"] = "cloud";
    Webinar200ApplicationJsonSettingsAutoRecordingEnum["None"] = "none";
})(Webinar200ApplicationJsonSettingsAutoRecordingEnum = exports.Webinar200ApplicationJsonSettingsAutoRecordingEnum || (exports.Webinar200ApplicationJsonSettingsAutoRecordingEnum = {}));
// Webinar200ApplicationJsonSettingsFollowUpAbsenteesEmailNotification
/**
 * Send follow-up email to absentees.
**/
var Webinar200ApplicationJsonSettingsFollowUpAbsenteesEmailNotification = /** @class */ (function (_super) {
    __extends(Webinar200ApplicationJsonSettingsFollowUpAbsenteesEmailNotification, _super);
    function Webinar200ApplicationJsonSettingsFollowUpAbsenteesEmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], Webinar200ApplicationJsonSettingsFollowUpAbsenteesEmailNotification.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], Webinar200ApplicationJsonSettingsFollowUpAbsenteesEmailNotification.prototype, "type", void 0);
    return Webinar200ApplicationJsonSettingsFollowUpAbsenteesEmailNotification;
}(utils_1.SpeakeasyBase));
exports.Webinar200ApplicationJsonSettingsFollowUpAbsenteesEmailNotification = Webinar200ApplicationJsonSettingsFollowUpAbsenteesEmailNotification;
// Webinar200ApplicationJsonSettingsFollowUpAttendeesEmailNotification
/**
 * Send follow-up email to attendees.
**/
var Webinar200ApplicationJsonSettingsFollowUpAttendeesEmailNotification = /** @class */ (function (_super) {
    __extends(Webinar200ApplicationJsonSettingsFollowUpAttendeesEmailNotification, _super);
    function Webinar200ApplicationJsonSettingsFollowUpAttendeesEmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], Webinar200ApplicationJsonSettingsFollowUpAttendeesEmailNotification.prototype, "enable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], Webinar200ApplicationJsonSettingsFollowUpAttendeesEmailNotification.prototype, "type", void 0);
    return Webinar200ApplicationJsonSettingsFollowUpAttendeesEmailNotification;
}(utils_1.SpeakeasyBase));
exports.Webinar200ApplicationJsonSettingsFollowUpAttendeesEmailNotification = Webinar200ApplicationJsonSettingsFollowUpAttendeesEmailNotification;
var Webinar200ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum;
(function (Webinar200ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum) {
    Webinar200ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum["Only"] = "only";
    Webinar200ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum["All"] = "all";
})(Webinar200ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum = exports.Webinar200ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum || (exports.Webinar200ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum = {}));
// Webinar200ApplicationJsonSettingsQuestionAndAnswer
/**
 * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
**/
var Webinar200ApplicationJsonSettingsQuestionAndAnswer = /** @class */ (function (_super) {
    __extends(Webinar200ApplicationJsonSettingsQuestionAndAnswer, _super);
    function Webinar200ApplicationJsonSettingsQuestionAndAnswer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_anonymous_questions" }),
        __metadata("design:type", Boolean)
    ], Webinar200ApplicationJsonSettingsQuestionAndAnswer.prototype, "allowAnonymousQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answer_questions" }),
        __metadata("design:type", String)
    ], Webinar200ApplicationJsonSettingsQuestionAndAnswer.prototype, "answerQuestions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendees_can_comment" }),
        __metadata("design:type", Boolean)
    ], Webinar200ApplicationJsonSettingsQuestionAndAnswer.prototype, "attendeesCanComment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendees_can_upvote" }),
        __metadata("design:type", Boolean)
    ], Webinar200ApplicationJsonSettingsQuestionAndAnswer.prototype, "attendeesCanUpvote", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], Webinar200ApplicationJsonSettingsQuestionAndAnswer.prototype, "enable", void 0);
    return Webinar200ApplicationJsonSettingsQuestionAndAnswer;
}(utils_1.SpeakeasyBase));
exports.Webinar200ApplicationJsonSettingsQuestionAndAnswer = Webinar200ApplicationJsonSettingsQuestionAndAnswer;
// Webinar200ApplicationJsonSettings
/**
 * Webinar settings.
**/
var Webinar200ApplicationJsonSettings = /** @class */ (function (_super) {
    __extends(Webinar200ApplicationJsonSettings, _super);
    function Webinar200ApplicationJsonSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_multiple_devices" }),
        __metadata("design:type", Boolean)
    ], Webinar200ApplicationJsonSettings.prototype, "allowMultipleDevices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_hosts" }),
        __metadata("design:type", String)
    ], Webinar200ApplicationJsonSettings.prototype, "alternativeHosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approval_type" }),
        __metadata("design:type", Number)
    ], Webinar200ApplicationJsonSettings.prototype, "approvalType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attendees_and_panelists_reminder_email_notification" }),
        __metadata("design:type", Webinar200ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification)
    ], Webinar200ApplicationJsonSettings.prototype, "attendeesAndPanelistsReminderEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio" }),
        __metadata("design:type", String)
    ], Webinar200ApplicationJsonSettings.prototype, "audio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_domains" }),
        __metadata("design:type", String)
    ], Webinar200ApplicationJsonSettings.prototype, "authenticationDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_name" }),
        __metadata("design:type", String)
    ], Webinar200ApplicationJsonSettings.prototype, "authenticationName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authentication_option" }),
        __metadata("design:type", String)
    ], Webinar200ApplicationJsonSettings.prototype, "authenticationOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_recording" }),
        __metadata("design:type", String)
    ], Webinar200ApplicationJsonSettings.prototype, "autoRecording", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=close_registration" }),
        __metadata("design:type", Boolean)
    ], Webinar200ApplicationJsonSettings.prototype, "closeRegistration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact_email" }),
        __metadata("design:type", String)
    ], Webinar200ApplicationJsonSettings.prototype, "contactEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact_name" }),
        __metadata("design:type", String)
    ], Webinar200ApplicationJsonSettings.prototype, "contactName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email_language" }),
        __metadata("design:type", String)
    ], Webinar200ApplicationJsonSettings.prototype, "emailLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login" }),
        __metadata("design:type", Boolean)
    ], Webinar200ApplicationJsonSettings.prototype, "enforceLogin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforce_login_domains" }),
        __metadata("design:type", String)
    ], Webinar200ApplicationJsonSettings.prototype, "enforceLoginDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=follow_up_absentees_email_notification" }),
        __metadata("design:type", Webinar200ApplicationJsonSettingsFollowUpAbsenteesEmailNotification)
    ], Webinar200ApplicationJsonSettings.prototype, "followUpAbsenteesEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=follow_up_attendees_email_notification" }),
        __metadata("design:type", Webinar200ApplicationJsonSettingsFollowUpAttendeesEmailNotification)
    ], Webinar200ApplicationJsonSettings.prototype, "followUpAttendeesEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=global_dial_in_countries" }),
        __metadata("design:type", Array)
    ], Webinar200ApplicationJsonSettings.prototype, "globalDialInCountries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hd_video" }),
        __metadata("design:type", Boolean)
    ], Webinar200ApplicationJsonSettings.prototype, "hdVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_video" }),
        __metadata("design:type", Boolean)
    ], Webinar200ApplicationJsonSettings.prototype, "hostVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_authentication" }),
        __metadata("design:type", Boolean)
    ], Webinar200ApplicationJsonSettings.prototype, "meetingAuthentication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notify_registrants" }),
        __metadata("design:type", Boolean)
    ], Webinar200ApplicationJsonSettings.prototype, "notifyRegistrants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=on_demand" }),
        __metadata("design:type", Boolean)
    ], Webinar200ApplicationJsonSettings.prototype, "onDemand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=panelists_invitation_email_notification" }),
        __metadata("design:type", Boolean)
    ], Webinar200ApplicationJsonSettings.prototype, "panelistsInvitationEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=panelists_video" }),
        __metadata("design:type", Boolean)
    ], Webinar200ApplicationJsonSettings.prototype, "panelistsVideo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=post_webinar_survey" }),
        __metadata("design:type", Boolean)
    ], Webinar200ApplicationJsonSettings.prototype, "postWebinarSurvey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=practice_session" }),
        __metadata("design:type", Boolean)
    ], Webinar200ApplicationJsonSettings.prototype, "practiceSession", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=question_and_answer" }),
        __metadata("design:type", Webinar200ApplicationJsonSettingsQuestionAndAnswer)
    ], Webinar200ApplicationJsonSettings.prototype, "questionAndAnswer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_confirmation_email" }),
        __metadata("design:type", Boolean)
    ], Webinar200ApplicationJsonSettings.prototype, "registrantsConfirmationEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_email_notification" }),
        __metadata("design:type", Boolean)
    ], Webinar200ApplicationJsonSettings.prototype, "registrantsEmailNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants_restrict_number" }),
        __metadata("design:type", Number)
    ], Webinar200ApplicationJsonSettings.prototype, "registrantsRestrictNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registration_type" }),
        __metadata("design:type", Number)
    ], Webinar200ApplicationJsonSettings.prototype, "registrationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_share_button" }),
        __metadata("design:type", Boolean)
    ], Webinar200ApplicationJsonSettings.prototype, "showShareButton", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=survey_url" }),
        __metadata("design:type", String)
    ], Webinar200ApplicationJsonSettings.prototype, "surveyUrl", void 0);
    return Webinar200ApplicationJsonSettings;
}(utils_1.SpeakeasyBase));
exports.Webinar200ApplicationJsonSettings = Webinar200ApplicationJsonSettings;
var Webinar200ApplicationJsonTrackingFields = /** @class */ (function (_super) {
    __extends(Webinar200ApplicationJsonTrackingFields, _super);
    function Webinar200ApplicationJsonTrackingFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], Webinar200ApplicationJsonTrackingFields.prototype, "field", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], Webinar200ApplicationJsonTrackingFields.prototype, "value", void 0);
    return Webinar200ApplicationJsonTrackingFields;
}(utils_1.SpeakeasyBase));
exports.Webinar200ApplicationJsonTrackingFields = Webinar200ApplicationJsonTrackingFields;
// Webinar200ApplicationJson
/**
 * Webinar object.
**/
var Webinar200ApplicationJson = /** @class */ (function (_super) {
    __extends(Webinar200ApplicationJson, _super);
    function Webinar200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=agenda" }),
        __metadata("design:type", String)
    ], Webinar200ApplicationJson.prototype, "agenda", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Webinar200ApplicationJson.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], Webinar200ApplicationJson.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_email" }),
        __metadata("design:type", String)
    ], Webinar200ApplicationJson.prototype, "hostEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host_id" }),
        __metadata("design:type", String)
    ], Webinar200ApplicationJson.prototype, "hostId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Webinar200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=join_url" }),
        __metadata("design:type", String)
    ], Webinar200ApplicationJson.prototype, "joinUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=occurrences", elemType: Webinar200ApplicationJsonOccurrences }),
        __metadata("design:type", Array)
    ], Webinar200ApplicationJson.prototype, "occurrences", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], Webinar200ApplicationJson.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurrence" }),
        __metadata("design:type", Webinar200ApplicationJsonRecurrenceWebinar)
    ], Webinar200ApplicationJson.prototype, "recurrence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", Webinar200ApplicationJsonSettings)
    ], Webinar200ApplicationJson.prototype, "settings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], Webinar200ApplicationJson.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_url" }),
        __metadata("design:type", String)
    ], Webinar200ApplicationJson.prototype, "startUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], Webinar200ApplicationJson.prototype, "timezone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], Webinar200ApplicationJson.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tracking_fields", elemType: Webinar200ApplicationJsonTrackingFields }),
        __metadata("design:type", Array)
    ], Webinar200ApplicationJson.prototype, "trackingFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], Webinar200ApplicationJson.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], Webinar200ApplicationJson.prototype, "uuid", void 0);
    return Webinar200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Webinar200ApplicationJson = Webinar200ApplicationJson;
var WebinarRequest = /** @class */ (function (_super) {
    __extends(WebinarRequest, _super);
    function WebinarRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarPathParams)
    ], WebinarRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarQueryParams)
    ], WebinarRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarSecurity)
    ], WebinarRequest.prototype, "security", void 0);
    return WebinarRequest;
}(utils_1.SpeakeasyBase));
exports.WebinarRequest = WebinarRequest;
var WebinarResponse = /** @class */ (function (_super) {
    __extends(WebinarResponse, _super);
    function WebinarResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], WebinarResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], WebinarResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], WebinarResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Webinar200ApplicationJson)
    ], WebinarResponse.prototype, "webinar200ApplicationJSONObject", void 0);
    return WebinarResponse;
}(utils_1.SpeakeasyBase));
exports.WebinarResponse = WebinarResponse;
