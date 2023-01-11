import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WebinarUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: number;
}


export class WebinarUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurrence_id" })
  occurrenceId?: string;
}

export enum WebinarUpdateApplicationJsonRecurrenceWeeklyDaysEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}


// WebinarUpdateApplicationJsonRecurrence
/** 
 * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time. 
**/
export class WebinarUpdateApplicationJsonRecurrence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_date_time" })
  endDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=end_times" })
  endTimes?: number;

  @SpeakeasyMetadata({ data: "json, name=monthly_day" })
  monthlyDay?: number;

  @SpeakeasyMetadata({ data: "json, name=monthly_week" })
  monthlyWeek?: number;

  @SpeakeasyMetadata({ data: "json, name=monthly_week_day" })
  monthlyWeekDay?: number;

  @SpeakeasyMetadata({ data: "json, name=repeat_interval" })
  repeatInterval?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: number;

  @SpeakeasyMetadata({ data: "json, name=weekly_days" })
  weeklyDays?: WebinarUpdateApplicationJsonRecurrenceWeeklyDaysEnum;
}


// WebinarUpdateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification
/** 
 * Send reminder email to attendees and panelists.
**/
export class WebinarUpdateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}

export enum WebinarUpdateApplicationJsonSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}

export enum WebinarUpdateApplicationJsonSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}


// WebinarUpdateApplicationJsonSettingsFollowUpAbsenteesEmailNotification
/** 
 * Send follow-up email to absentees.
**/
export class WebinarUpdateApplicationJsonSettingsFollowUpAbsenteesEmailNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}


// WebinarUpdateApplicationJsonSettingsFollowUpAttendeesEmailNotification
/** 
 * Send follow-up email to attendees.
**/
export class WebinarUpdateApplicationJsonSettingsFollowUpAttendeesEmailNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}

export enum WebinarUpdateApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum {
    Only = "only",
    All = "all"
}


// WebinarUpdateApplicationJsonSettingsQuestionAndAnswer
/** 
 * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
**/
export class WebinarUpdateApplicationJsonSettingsQuestionAndAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_anonymous_questions" })
  allowAnonymousQuestions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=answer_questions" })
  answerQuestions?: WebinarUpdateApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum;

  @SpeakeasyMetadata({ data: "json, name=attendees_can_comment" })
  attendeesCanComment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=attendees_can_upvote" })
  attendeesCanUpvote?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;
}


// WebinarUpdateApplicationJsonSettings
/** 
 * Webinar settings.
**/
export class WebinarUpdateApplicationJsonSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_multiple_devices" })
  allowMultipleDevices?: boolean;

  @SpeakeasyMetadata({ data: "json, name=alternative_hosts" })
  alternativeHosts?: string;

  @SpeakeasyMetadata({ data: "json, name=approval_type" })
  approvalType?: number;

  @SpeakeasyMetadata({ data: "json, name=attendees_and_panelists_reminder_email_notification" })
  attendeesAndPanelistsReminderEmailNotification?: WebinarUpdateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification;

  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: WebinarUpdateApplicationJsonSettingsAudioEnum;

  @SpeakeasyMetadata({ data: "json, name=authentication_domains" })
  authenticationDomains?: string;

  @SpeakeasyMetadata({ data: "json, name=authentication_name" })
  authenticationName?: string;

  @SpeakeasyMetadata({ data: "json, name=authentication_option" })
  authenticationOption?: string;

  @SpeakeasyMetadata({ data: "json, name=auto_recording" })
  autoRecording?: WebinarUpdateApplicationJsonSettingsAutoRecordingEnum;

  @SpeakeasyMetadata({ data: "json, name=close_registration" })
  closeRegistration?: boolean;

  @SpeakeasyMetadata({ data: "json, name=contact_email" })
  contactEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_name" })
  contactName?: string;

  @SpeakeasyMetadata({ data: "json, name=email_language" })
  emailLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=enforce_login" })
  enforceLogin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enforce_login_domains" })
  enforceLoginDomains?: string;

  @SpeakeasyMetadata({ data: "json, name=follow_up_absentees_email_notification" })
  followUpAbsenteesEmailNotification?: WebinarUpdateApplicationJsonSettingsFollowUpAbsenteesEmailNotification;

  @SpeakeasyMetadata({ data: "json, name=follow_up_attendees_email_notification" })
  followUpAttendeesEmailNotification?: WebinarUpdateApplicationJsonSettingsFollowUpAttendeesEmailNotification;

  @SpeakeasyMetadata({ data: "json, name=global_dial_in_countries" })
  globalDialInCountries?: string[];

  @SpeakeasyMetadata({ data: "json, name=hd_video" })
  hdVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=host_video" })
  hostVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_authentication" })
  meetingAuthentication?: boolean;

  @SpeakeasyMetadata({ data: "json, name=notify_registrants" })
  notifyRegistrants?: boolean;

  @SpeakeasyMetadata({ data: "json, name=on_demand" })
  onDemand?: boolean;

  @SpeakeasyMetadata({ data: "json, name=panelists_invitation_email_notification" })
  panelistsInvitationEmailNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=panelists_video" })
  panelistsVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=post_webinar_survey" })
  postWebinarSurvey?: boolean;

  @SpeakeasyMetadata({ data: "json, name=practice_session" })
  practiceSession?: boolean;

  @SpeakeasyMetadata({ data: "json, name=question_and_answer" })
  questionAndAnswer?: WebinarUpdateApplicationJsonSettingsQuestionAndAnswer;

  @SpeakeasyMetadata({ data: "json, name=registrants_confirmation_email" })
  registrantsConfirmationEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=registrants_email_notification" })
  registrantsEmailNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=registrants_restrict_number" })
  registrantsRestrictNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=registration_type" })
  registrationType?: number;

  @SpeakeasyMetadata({ data: "json, name=show_share_button" })
  showShareButton?: boolean;

  @SpeakeasyMetadata({ data: "json, name=survey_url" })
  surveyUrl?: string;
}


export class WebinarUpdateApplicationJsonTrackingFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// WebinarUpdateApplicationJson
/** 
 * Base webinar object for sessions.
**/
export class WebinarUpdateApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agenda" })
  agenda?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=recurrence" })
  recurrence?: WebinarUpdateApplicationJsonRecurrence;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: WebinarUpdateApplicationJsonSettings;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;

  @SpeakeasyMetadata({ data: "json, name=tracking_fields", elemType: WebinarUpdateApplicationJsonTrackingFields })
  trackingFields?: WebinarUpdateApplicationJsonTrackingFields[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}

export enum WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}


// WebinarUpdateMultipartFormDataRecurrence
/** 
 * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time. 
**/
export class WebinarUpdateMultipartFormDataRecurrence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_date_time" })
  endDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=end_times" })
  endTimes?: number;

  @SpeakeasyMetadata({ data: "json, name=monthly_day" })
  monthlyDay?: number;

  @SpeakeasyMetadata({ data: "json, name=monthly_week" })
  monthlyWeek?: number;

  @SpeakeasyMetadata({ data: "json, name=monthly_week_day" })
  monthlyWeekDay?: number;

  @SpeakeasyMetadata({ data: "json, name=repeat_interval" })
  repeatInterval?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: number;

  @SpeakeasyMetadata({ data: "json, name=weekly_days" })
  weeklyDays?: WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum;
}


// WebinarUpdateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification
/** 
 * Send reminder email to attendees and panelists.
**/
export class WebinarUpdateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}

export enum WebinarUpdateMultipartFormDataSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}

export enum WebinarUpdateMultipartFormDataSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}


// WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification
/** 
 * Send follow-up email to absentees.
**/
export class WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}


// WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification
/** 
 * Send follow-up email to attendees.
**/
export class WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}

export enum WebinarUpdateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum {
    Only = "only",
    All = "all"
}


// WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer
/** 
 * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
**/
export class WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_anonymous_questions" })
  allowAnonymousQuestions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=answer_questions" })
  answerQuestions?: WebinarUpdateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum;

  @SpeakeasyMetadata({ data: "json, name=attendees_can_comment" })
  attendeesCanComment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=attendees_can_upvote" })
  attendeesCanUpvote?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;
}


// WebinarUpdateMultipartFormDataSettings
/** 
 * Webinar settings.
**/
export class WebinarUpdateMultipartFormDataSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_multiple_devices" })
  allowMultipleDevices?: boolean;

  @SpeakeasyMetadata({ data: "json, name=alternative_hosts" })
  alternativeHosts?: string;

  @SpeakeasyMetadata({ data: "json, name=approval_type" })
  approvalType?: number;

  @SpeakeasyMetadata({ data: "json, name=attendees_and_panelists_reminder_email_notification" })
  attendeesAndPanelistsReminderEmailNotification?: WebinarUpdateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification;

  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: WebinarUpdateMultipartFormDataSettingsAudioEnum;

  @SpeakeasyMetadata({ data: "json, name=authentication_domains" })
  authenticationDomains?: string;

  @SpeakeasyMetadata({ data: "json, name=authentication_name" })
  authenticationName?: string;

  @SpeakeasyMetadata({ data: "json, name=authentication_option" })
  authenticationOption?: string;

  @SpeakeasyMetadata({ data: "json, name=auto_recording" })
  autoRecording?: WebinarUpdateMultipartFormDataSettingsAutoRecordingEnum;

  @SpeakeasyMetadata({ data: "json, name=close_registration" })
  closeRegistration?: boolean;

  @SpeakeasyMetadata({ data: "json, name=contact_email" })
  contactEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_name" })
  contactName?: string;

  @SpeakeasyMetadata({ data: "json, name=email_language" })
  emailLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=enforce_login" })
  enforceLogin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enforce_login_domains" })
  enforceLoginDomains?: string;

  @SpeakeasyMetadata({ data: "json, name=follow_up_absentees_email_notification" })
  followUpAbsenteesEmailNotification?: WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification;

  @SpeakeasyMetadata({ data: "json, name=follow_up_attendees_email_notification" })
  followUpAttendeesEmailNotification?: WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification;

  @SpeakeasyMetadata({ data: "json, name=global_dial_in_countries" })
  globalDialInCountries?: string[];

  @SpeakeasyMetadata({ data: "json, name=hd_video" })
  hdVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=host_video" })
  hostVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_authentication" })
  meetingAuthentication?: boolean;

  @SpeakeasyMetadata({ data: "json, name=notify_registrants" })
  notifyRegistrants?: boolean;

  @SpeakeasyMetadata({ data: "json, name=on_demand" })
  onDemand?: boolean;

  @SpeakeasyMetadata({ data: "json, name=panelists_invitation_email_notification" })
  panelistsInvitationEmailNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=panelists_video" })
  panelistsVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=post_webinar_survey" })
  postWebinarSurvey?: boolean;

  @SpeakeasyMetadata({ data: "json, name=practice_session" })
  practiceSession?: boolean;

  @SpeakeasyMetadata({ data: "json, name=question_and_answer" })
  questionAndAnswer?: WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer;

  @SpeakeasyMetadata({ data: "json, name=registrants_confirmation_email" })
  registrantsConfirmationEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=registrants_email_notification" })
  registrantsEmailNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=registrants_restrict_number" })
  registrantsRestrictNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=registration_type" })
  registrationType?: number;

  @SpeakeasyMetadata({ data: "json, name=show_share_button" })
  showShareButton?: boolean;

  @SpeakeasyMetadata({ data: "json, name=survey_url" })
  surveyUrl?: string;
}


export class WebinarUpdateMultipartFormDataTrackingFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// WebinarUpdateMultipartFormData1
/** 
 * Base webinar object for sessions.
**/
export class WebinarUpdateMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=agenda" })
  agenda?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=recurrence;json=true" })
  recurrence?: WebinarUpdateMultipartFormDataRecurrence;

  @SpeakeasyMetadata({ data: "multipart_form, name=settings;json=true" })
  settings?: WebinarUpdateMultipartFormDataSettings;

  @SpeakeasyMetadata({ data: "multipart_form, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "multipart_form, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=topic" })
  topic?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=tracking_fields;json=true", elemType: WebinarUpdateMultipartFormDataTrackingFields })
  trackingFields?: WebinarUpdateMultipartFormDataTrackingFields[];

  @SpeakeasyMetadata({ data: "multipart_form, name=type" })
  type?: number;
}


export class WebinarUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: WebinarUpdateApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: WebinarUpdateMultipartFormData1;
}


export class WebinarUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class WebinarUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WebinarUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: WebinarUpdateQueryParams;

  @SpeakeasyMetadata()
  request: WebinarUpdateRequests;

  @SpeakeasyMetadata()
  security: WebinarUpdateSecurity;
}


export class WebinarUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
