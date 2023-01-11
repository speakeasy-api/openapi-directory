import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebinarUpdatePathParams extends SpeakeasyBase {
    webinarId: number;
}
export declare class WebinarUpdateQueryParams extends SpeakeasyBase {
    occurrenceId?: string;
}
export declare enum WebinarUpdateApplicationJsonRecurrenceWeeklyDaysEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}
/**
 * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
**/
export declare class WebinarUpdateApplicationJsonRecurrence extends SpeakeasyBase {
    endDateTime?: Date;
    endTimes?: number;
    monthlyDay?: number;
    monthlyWeek?: number;
    monthlyWeekDay?: number;
    repeatInterval?: number;
    type: number;
    weeklyDays?: WebinarUpdateApplicationJsonRecurrenceWeeklyDaysEnum;
}
/**
 * Send reminder email to attendees and panelists.
**/
export declare class WebinarUpdateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification extends SpeakeasyBase {
    enable?: boolean;
    type?: number;
}
export declare enum WebinarUpdateApplicationJsonSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}
export declare enum WebinarUpdateApplicationJsonSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}
/**
 * Send follow-up email to absentees.
**/
export declare class WebinarUpdateApplicationJsonSettingsFollowUpAbsenteesEmailNotification extends SpeakeasyBase {
    enable?: boolean;
    type?: number;
}
/**
 * Send follow-up email to attendees.
**/
export declare class WebinarUpdateApplicationJsonSettingsFollowUpAttendeesEmailNotification extends SpeakeasyBase {
    enable?: boolean;
    type?: number;
}
export declare enum WebinarUpdateApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum {
    Only = "only",
    All = "all"
}
/**
 * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
**/
export declare class WebinarUpdateApplicationJsonSettingsQuestionAndAnswer extends SpeakeasyBase {
    allowAnonymousQuestions?: boolean;
    answerQuestions?: WebinarUpdateApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum;
    attendeesCanComment?: boolean;
    attendeesCanUpvote?: boolean;
    enable?: boolean;
}
/**
 * Webinar settings.
**/
export declare class WebinarUpdateApplicationJsonSettings extends SpeakeasyBase {
    allowMultipleDevices?: boolean;
    alternativeHosts?: string;
    approvalType?: number;
    attendeesAndPanelistsReminderEmailNotification?: WebinarUpdateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification;
    audio?: WebinarUpdateApplicationJsonSettingsAudioEnum;
    authenticationDomains?: string;
    authenticationName?: string;
    authenticationOption?: string;
    autoRecording?: WebinarUpdateApplicationJsonSettingsAutoRecordingEnum;
    closeRegistration?: boolean;
    contactEmail?: string;
    contactName?: string;
    emailLanguage?: string;
    enforceLogin?: boolean;
    enforceLoginDomains?: string;
    followUpAbsenteesEmailNotification?: WebinarUpdateApplicationJsonSettingsFollowUpAbsenteesEmailNotification;
    followUpAttendeesEmailNotification?: WebinarUpdateApplicationJsonSettingsFollowUpAttendeesEmailNotification;
    globalDialInCountries?: string[];
    hdVideo?: boolean;
    hostVideo?: boolean;
    meetingAuthentication?: boolean;
    notifyRegistrants?: boolean;
    onDemand?: boolean;
    panelistsInvitationEmailNotification?: boolean;
    panelistsVideo?: boolean;
    postWebinarSurvey?: boolean;
    practiceSession?: boolean;
    questionAndAnswer?: WebinarUpdateApplicationJsonSettingsQuestionAndAnswer;
    registrantsConfirmationEmail?: boolean;
    registrantsEmailNotification?: boolean;
    registrantsRestrictNumber?: number;
    registrationType?: number;
    showShareButton?: boolean;
    surveyUrl?: string;
}
export declare class WebinarUpdateApplicationJsonTrackingFields extends SpeakeasyBase {
    field?: string;
    value?: string;
}
/**
 * Base webinar object for sessions.
**/
export declare class WebinarUpdateApplicationJson extends SpeakeasyBase {
    agenda?: string;
    duration?: number;
    password?: string;
    recurrence?: WebinarUpdateApplicationJsonRecurrence;
    settings?: WebinarUpdateApplicationJsonSettings;
    startTime?: Date;
    timezone?: string;
    topic?: string;
    trackingFields?: WebinarUpdateApplicationJsonTrackingFields[];
    type?: number;
}
export declare enum WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}
/**
 * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
**/
export declare class WebinarUpdateMultipartFormDataRecurrence extends SpeakeasyBase {
    endDateTime?: Date;
    endTimes?: number;
    monthlyDay?: number;
    monthlyWeek?: number;
    monthlyWeekDay?: number;
    repeatInterval?: number;
    type: number;
    weeklyDays?: WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum;
}
/**
 * Send reminder email to attendees and panelists.
**/
export declare class WebinarUpdateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification extends SpeakeasyBase {
    enable?: boolean;
    type?: number;
}
export declare enum WebinarUpdateMultipartFormDataSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}
export declare enum WebinarUpdateMultipartFormDataSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}
/**
 * Send follow-up email to absentees.
**/
export declare class WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification extends SpeakeasyBase {
    enable?: boolean;
    type?: number;
}
/**
 * Send follow-up email to attendees.
**/
export declare class WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification extends SpeakeasyBase {
    enable?: boolean;
    type?: number;
}
export declare enum WebinarUpdateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum {
    Only = "only",
    All = "all"
}
/**
 * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
**/
export declare class WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer extends SpeakeasyBase {
    allowAnonymousQuestions?: boolean;
    answerQuestions?: WebinarUpdateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum;
    attendeesCanComment?: boolean;
    attendeesCanUpvote?: boolean;
    enable?: boolean;
}
/**
 * Webinar settings.
**/
export declare class WebinarUpdateMultipartFormDataSettings extends SpeakeasyBase {
    allowMultipleDevices?: boolean;
    alternativeHosts?: string;
    approvalType?: number;
    attendeesAndPanelistsReminderEmailNotification?: WebinarUpdateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification;
    audio?: WebinarUpdateMultipartFormDataSettingsAudioEnum;
    authenticationDomains?: string;
    authenticationName?: string;
    authenticationOption?: string;
    autoRecording?: WebinarUpdateMultipartFormDataSettingsAutoRecordingEnum;
    closeRegistration?: boolean;
    contactEmail?: string;
    contactName?: string;
    emailLanguage?: string;
    enforceLogin?: boolean;
    enforceLoginDomains?: string;
    followUpAbsenteesEmailNotification?: WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification;
    followUpAttendeesEmailNotification?: WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification;
    globalDialInCountries?: string[];
    hdVideo?: boolean;
    hostVideo?: boolean;
    meetingAuthentication?: boolean;
    notifyRegistrants?: boolean;
    onDemand?: boolean;
    panelistsInvitationEmailNotification?: boolean;
    panelistsVideo?: boolean;
    postWebinarSurvey?: boolean;
    practiceSession?: boolean;
    questionAndAnswer?: WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer;
    registrantsConfirmationEmail?: boolean;
    registrantsEmailNotification?: boolean;
    registrantsRestrictNumber?: number;
    registrationType?: number;
    showShareButton?: boolean;
    surveyUrl?: string;
}
export declare class WebinarUpdateMultipartFormDataTrackingFields extends SpeakeasyBase {
    field?: string;
    value?: string;
}
/**
 * Base webinar object for sessions.
**/
export declare class WebinarUpdateMultipartFormData1 extends SpeakeasyBase {
    agenda?: string;
    duration?: number;
    password?: string;
    recurrence?: WebinarUpdateMultipartFormDataRecurrence;
    settings?: WebinarUpdateMultipartFormDataSettings;
    startTime?: Date;
    timezone?: string;
    topic?: string;
    trackingFields?: WebinarUpdateMultipartFormDataTrackingFields[];
    type?: number;
}
export declare class WebinarUpdateRequests extends SpeakeasyBase {
    object?: WebinarUpdateApplicationJson;
    object1?: WebinarUpdateMultipartFormData1;
}
export declare class WebinarUpdateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class WebinarUpdateRequest extends SpeakeasyBase {
    pathParams: WebinarUpdatePathParams;
    queryParams: WebinarUpdateQueryParams;
    request: WebinarUpdateRequests;
    security: WebinarUpdateSecurity;
}
export declare class WebinarUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
