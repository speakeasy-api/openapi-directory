import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebinarCreatePathParams extends SpeakeasyBase {
    userId: string;
}
/**
 * Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time.
**/
export declare class WebinarCreateApplicationJsonRecurrenceWebinar extends SpeakeasyBase {
    endDateTime?: Date;
    endTimes?: number;
    monthlyDay?: number;
    monthlyWeek?: number;
    monthlyWeekDay?: number;
    repeatInterval?: number;
    type: number;
    weeklyDays?: string;
}
/**
 * Send reminder email to attendees and panelists.
**/
export declare class WebinarCreateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification extends SpeakeasyBase {
    enable?: boolean;
    type?: number;
}
export declare enum WebinarCreateApplicationJsonSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}
export declare enum WebinarCreateApplicationJsonSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}
/**
 * Send follow-up email to absentees.
**/
export declare class WebinarCreateApplicationJsonSettingsFollowUpAbsenteesEmailNotification extends SpeakeasyBase {
    enable?: boolean;
    type?: number;
}
/**
 * Send follow-up email to attendees.
**/
export declare class WebinarCreateApplicationJsonSettingsFollowUpAttendeesEmailNotification extends SpeakeasyBase {
    enable?: boolean;
    type?: number;
}
export declare enum WebinarCreateApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum {
    Only = "only",
    All = "all"
}
/**
 * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
**/
export declare class WebinarCreateApplicationJsonSettingsQuestionAndAnswer extends SpeakeasyBase {
    allowAnonymousQuestions?: boolean;
    answerQuestions?: WebinarCreateApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum;
    attendeesCanComment?: boolean;
    attendeesCanUpvote?: boolean;
    enable?: boolean;
}
/**
 * Create Webinar settings.
**/
export declare class WebinarCreateApplicationJsonSettings extends SpeakeasyBase {
    allowMultipleDevices?: boolean;
    alternativeHosts?: string;
    approvalType?: number;
    attendeesAndPanelistsReminderEmailNotification?: WebinarCreateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification;
    audio?: WebinarCreateApplicationJsonSettingsAudioEnum;
    authenticationDomains?: string;
    authenticationOption?: string;
    autoRecording?: WebinarCreateApplicationJsonSettingsAutoRecordingEnum;
    closeRegistration?: boolean;
    contactEmail?: string;
    contactName?: string;
    emailLanguage?: string;
    enforceLogin?: boolean;
    enforceLoginDomains?: string;
    followUpAbsenteesEmailNotification?: WebinarCreateApplicationJsonSettingsFollowUpAbsenteesEmailNotification;
    followUpAttendeesEmailNotification?: WebinarCreateApplicationJsonSettingsFollowUpAttendeesEmailNotification;
    globalDialInCountries?: string[];
    hdVideo?: boolean;
    hostVideo?: boolean;
    meetingAuthentication?: boolean;
    onDemand?: boolean;
    panelistsInvitationEmailNotification?: boolean;
    panelistsVideo?: boolean;
    postWebinarSurvey?: boolean;
    practiceSession?: boolean;
    questionAndAnswer?: WebinarCreateApplicationJsonSettingsQuestionAndAnswer;
    registrantsEmailNotification?: boolean;
    registrantsRestrictNumber?: number;
    registrationType?: number;
    showShareButton?: boolean;
    surveyUrl?: string;
}
export declare class WebinarCreateApplicationJsonTrackingFields extends SpeakeasyBase {
    field: string;
    value?: string;
}
/**
 * Base webinar object for sessions.
**/
export declare class WebinarCreateApplicationJson extends SpeakeasyBase {
    agenda?: string;
    duration?: number;
    password?: string;
    recurrence?: WebinarCreateApplicationJsonRecurrenceWebinar;
    settings?: WebinarCreateApplicationJsonSettings;
    startTime?: Date;
    timezone?: string;
    topic?: string;
    trackingFields?: WebinarCreateApplicationJsonTrackingFields[];
    type?: number;
}
/**
 * Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time.
**/
export declare class WebinarCreateMultipartFormDataRecurrenceWebinar extends SpeakeasyBase {
    endDateTime?: Date;
    endTimes?: number;
    monthlyDay?: number;
    monthlyWeek?: number;
    monthlyWeekDay?: number;
    repeatInterval?: number;
    type: number;
    weeklyDays?: string;
}
/**
 * Send reminder email to attendees and panelists.
**/
export declare class WebinarCreateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification extends SpeakeasyBase {
    enable?: boolean;
    type?: number;
}
export declare enum WebinarCreateMultipartFormDataSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}
export declare enum WebinarCreateMultipartFormDataSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}
/**
 * Send follow-up email to absentees.
**/
export declare class WebinarCreateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification extends SpeakeasyBase {
    enable?: boolean;
    type?: number;
}
/**
 * Send follow-up email to attendees.
**/
export declare class WebinarCreateMultipartFormDataSettingsFollowUpAttendeesEmailNotification extends SpeakeasyBase {
    enable?: boolean;
    type?: number;
}
export declare enum WebinarCreateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum {
    Only = "only",
    All = "all"
}
/**
 * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
**/
export declare class WebinarCreateMultipartFormDataSettingsQuestionAndAnswer extends SpeakeasyBase {
    allowAnonymousQuestions?: boolean;
    answerQuestions?: WebinarCreateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum;
    attendeesCanComment?: boolean;
    attendeesCanUpvote?: boolean;
    enable?: boolean;
}
/**
 * Create Webinar settings.
**/
export declare class WebinarCreateMultipartFormDataSettings extends SpeakeasyBase {
    allowMultipleDevices?: boolean;
    alternativeHosts?: string;
    approvalType?: number;
    attendeesAndPanelistsReminderEmailNotification?: WebinarCreateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification;
    audio?: WebinarCreateMultipartFormDataSettingsAudioEnum;
    authenticationDomains?: string;
    authenticationOption?: string;
    autoRecording?: WebinarCreateMultipartFormDataSettingsAutoRecordingEnum;
    closeRegistration?: boolean;
    contactEmail?: string;
    contactName?: string;
    emailLanguage?: string;
    enforceLogin?: boolean;
    enforceLoginDomains?: string;
    followUpAbsenteesEmailNotification?: WebinarCreateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification;
    followUpAttendeesEmailNotification?: WebinarCreateMultipartFormDataSettingsFollowUpAttendeesEmailNotification;
    globalDialInCountries?: string[];
    hdVideo?: boolean;
    hostVideo?: boolean;
    meetingAuthentication?: boolean;
    onDemand?: boolean;
    panelistsInvitationEmailNotification?: boolean;
    panelistsVideo?: boolean;
    postWebinarSurvey?: boolean;
    practiceSession?: boolean;
    questionAndAnswer?: WebinarCreateMultipartFormDataSettingsQuestionAndAnswer;
    registrantsEmailNotification?: boolean;
    registrantsRestrictNumber?: number;
    registrationType?: number;
    showShareButton?: boolean;
    surveyUrl?: string;
}
export declare class WebinarCreateMultipartFormDataTrackingFields extends SpeakeasyBase {
    field: string;
    value?: string;
}
/**
 * Base webinar object for sessions.
**/
export declare class WebinarCreateMultipartFormData1 extends SpeakeasyBase {
    agenda?: string;
    duration?: number;
    password?: string;
    recurrence?: WebinarCreateMultipartFormDataRecurrenceWebinar;
    settings?: WebinarCreateMultipartFormDataSettings;
    startTime?: Date;
    timezone?: string;
    topic?: string;
    trackingFields?: WebinarCreateMultipartFormDataTrackingFields[];
    type?: number;
}
export declare class WebinarCreateRequests extends SpeakeasyBase {
    object?: WebinarCreateApplicationJson;
    object1?: WebinarCreateMultipartFormData1;
}
export declare class WebinarCreateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * Occurence object. This object is only returned for Recurring Webinars.
**/
export declare class WebinarCreate201ApplicationJsonOccurrences extends SpeakeasyBase {
    duration?: number;
    occurrenceId?: string;
    startTime?: Date;
    status?: string;
}
/**
 * Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time.
**/
export declare class WebinarCreate201ApplicationJsonRecurrenceWebinar extends SpeakeasyBase {
    endDateTime?: Date;
    endTimes?: number;
    monthlyDay?: number;
    monthlyWeek?: number;
    monthlyWeekDay?: number;
    repeatInterval?: number;
    type: number;
    weeklyDays?: string;
}
/**
 * Send reminder email to attendees and panelists.
**/
export declare class WebinarCreate201ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification extends SpeakeasyBase {
    enable?: boolean;
    type?: number;
}
export declare enum WebinarCreate201ApplicationJsonSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}
export declare enum WebinarCreate201ApplicationJsonSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}
/**
 * Send follow-up email to absentees.
**/
export declare class WebinarCreate201ApplicationJsonSettingsFollowUpAbsenteesEmailNotification extends SpeakeasyBase {
    enable?: boolean;
    type?: number;
}
/**
 * Send follow-up email to attendees.
**/
export declare class WebinarCreate201ApplicationJsonSettingsFollowUpAttendeesEmailNotification extends SpeakeasyBase {
    enable?: boolean;
    type?: number;
}
export declare enum WebinarCreate201ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum {
    Only = "only",
    All = "all"
}
/**
 * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
**/
export declare class WebinarCreate201ApplicationJsonSettingsQuestionAndAnswer extends SpeakeasyBase {
    allowAnonymousQuestions?: boolean;
    answerQuestions?: WebinarCreate201ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum;
    attendeesCanComment?: boolean;
    attendeesCanUpvote?: boolean;
    enable?: boolean;
}
/**
 * Webinar settings.
**/
export declare class WebinarCreate201ApplicationJsonSettings extends SpeakeasyBase {
    allowMultipleDevices?: boolean;
    alternativeHosts?: string;
    approvalType?: number;
    attendeesAndPanelistsReminderEmailNotification?: WebinarCreate201ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification;
    audio?: WebinarCreate201ApplicationJsonSettingsAudioEnum;
    authenticationDomains?: string;
    authenticationName?: string;
    authenticationOption?: string;
    autoRecording?: WebinarCreate201ApplicationJsonSettingsAutoRecordingEnum;
    closeRegistration?: boolean;
    contactEmail?: string;
    contactName?: string;
    emailLanguage?: string;
    enforceLogin?: boolean;
    enforceLoginDomains?: string;
    followUpAbsenteesEmailNotification?: WebinarCreate201ApplicationJsonSettingsFollowUpAbsenteesEmailNotification;
    followUpAttendeesEmailNotification?: WebinarCreate201ApplicationJsonSettingsFollowUpAttendeesEmailNotification;
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
    questionAndAnswer?: WebinarCreate201ApplicationJsonSettingsQuestionAndAnswer;
    registrantsConfirmationEmail?: boolean;
    registrantsEmailNotification?: boolean;
    registrantsRestrictNumber?: number;
    registrationType?: number;
    showShareButton?: boolean;
    surveyUrl?: string;
}
export declare class WebinarCreate201ApplicationJsonTrackingFields extends SpeakeasyBase {
    field?: string;
    value?: string;
}
/**
 * Webinar object.
**/
export declare class WebinarCreate201ApplicationJson extends SpeakeasyBase {
    agenda?: string;
    createdAt?: Date;
    duration?: number;
    hostEmail?: string;
    hostId?: string;
    id?: number;
    joinUrl?: string;
    occurrences?: WebinarCreate201ApplicationJsonOccurrences[];
    password?: string;
    recurrence?: WebinarCreate201ApplicationJsonRecurrenceWebinar;
    registrantsConfirmationEmail?: boolean;
    settings?: WebinarCreate201ApplicationJsonSettings;
    startTime?: Date;
    startUrl?: string;
    templateId?: string;
    timezone?: string;
    topic?: string;
    trackingFields?: WebinarCreate201ApplicationJsonTrackingFields[];
    type?: number;
    uuid?: string;
}
export declare class WebinarCreateRequest extends SpeakeasyBase {
    pathParams: WebinarCreatePathParams;
    request: WebinarCreateRequests;
    security: WebinarCreateSecurity;
}
export declare class WebinarCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    webinarCreate201ApplicationJSONObject?: WebinarCreate201ApplicationJson;
}
