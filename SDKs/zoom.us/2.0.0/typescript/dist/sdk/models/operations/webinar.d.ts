import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebinarPathParams extends SpeakeasyBase {
    webinarId: number;
}
export declare class WebinarQueryParams extends SpeakeasyBase {
    occurrenceId?: string;
    showPreviousOccurrences?: boolean;
}
export declare class WebinarSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * Occurence object. This object is only returned for Recurring Webinars.
**/
export declare class Webinar200ApplicationJsonOccurrences extends SpeakeasyBase {
    duration?: number;
    occurrenceId?: string;
    startTime?: Date;
    status?: string;
}
/**
 * Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time.
**/
export declare class Webinar200ApplicationJsonRecurrenceWebinar extends SpeakeasyBase {
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
export declare class Webinar200ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification extends SpeakeasyBase {
    enable?: boolean;
    type?: number;
}
export declare enum Webinar200ApplicationJsonSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}
export declare enum Webinar200ApplicationJsonSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}
/**
 * Send follow-up email to absentees.
**/
export declare class Webinar200ApplicationJsonSettingsFollowUpAbsenteesEmailNotification extends SpeakeasyBase {
    enable?: boolean;
    type?: number;
}
/**
 * Send follow-up email to attendees.
**/
export declare class Webinar200ApplicationJsonSettingsFollowUpAttendeesEmailNotification extends SpeakeasyBase {
    enable?: boolean;
    type?: number;
}
export declare enum Webinar200ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum {
    Only = "only",
    All = "all"
}
/**
 * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
**/
export declare class Webinar200ApplicationJsonSettingsQuestionAndAnswer extends SpeakeasyBase {
    allowAnonymousQuestions?: boolean;
    answerQuestions?: Webinar200ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum;
    attendeesCanComment?: boolean;
    attendeesCanUpvote?: boolean;
    enable?: boolean;
}
/**
 * Webinar settings.
**/
export declare class Webinar200ApplicationJsonSettings extends SpeakeasyBase {
    allowMultipleDevices?: boolean;
    alternativeHosts?: string;
    approvalType?: number;
    attendeesAndPanelistsReminderEmailNotification?: Webinar200ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification;
    audio?: Webinar200ApplicationJsonSettingsAudioEnum;
    authenticationDomains?: string;
    authenticationName?: string;
    authenticationOption?: string;
    autoRecording?: Webinar200ApplicationJsonSettingsAutoRecordingEnum;
    closeRegistration?: boolean;
    contactEmail?: string;
    contactName?: string;
    emailLanguage?: string;
    enforceLogin?: boolean;
    enforceLoginDomains?: string;
    followUpAbsenteesEmailNotification?: Webinar200ApplicationJsonSettingsFollowUpAbsenteesEmailNotification;
    followUpAttendeesEmailNotification?: Webinar200ApplicationJsonSettingsFollowUpAttendeesEmailNotification;
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
    questionAndAnswer?: Webinar200ApplicationJsonSettingsQuestionAndAnswer;
    registrantsConfirmationEmail?: boolean;
    registrantsEmailNotification?: boolean;
    registrantsRestrictNumber?: number;
    registrationType?: number;
    showShareButton?: boolean;
    surveyUrl?: string;
}
export declare class Webinar200ApplicationJsonTrackingFields extends SpeakeasyBase {
    field?: string;
    value?: string;
}
/**
 * Webinar object.
**/
export declare class Webinar200ApplicationJson extends SpeakeasyBase {
    agenda?: string;
    createdAt?: Date;
    duration?: number;
    hostEmail?: string;
    hostId?: string;
    id?: number;
    joinUrl?: string;
    occurrences?: Webinar200ApplicationJsonOccurrences[];
    password?: string;
    recurrence?: Webinar200ApplicationJsonRecurrenceWebinar;
    settings?: Webinar200ApplicationJsonSettings;
    startTime?: Date;
    startUrl?: string;
    timezone?: string;
    topic?: string;
    trackingFields?: Webinar200ApplicationJsonTrackingFields[];
    type?: number;
    uuid?: string;
}
export declare class WebinarRequest extends SpeakeasyBase {
    pathParams: WebinarPathParams;
    queryParams: WebinarQueryParams;
    security: WebinarSecurity;
}
export declare class WebinarResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    webinar200ApplicationJSONObject?: Webinar200ApplicationJson;
}
