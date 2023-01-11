import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WebinarCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


// WebinarCreateApplicationJsonRecurrenceWebinar
/** 
 * Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time. 
**/
export class WebinarCreateApplicationJsonRecurrenceWebinar extends SpeakeasyBase {
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
  weeklyDays?: string;
}


// WebinarCreateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification
/** 
 * Send reminder email to attendees and panelists.
**/
export class WebinarCreateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}

export enum WebinarCreateApplicationJsonSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}

export enum WebinarCreateApplicationJsonSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}


// WebinarCreateApplicationJsonSettingsFollowUpAbsenteesEmailNotification
/** 
 * Send follow-up email to absentees.
**/
export class WebinarCreateApplicationJsonSettingsFollowUpAbsenteesEmailNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}


// WebinarCreateApplicationJsonSettingsFollowUpAttendeesEmailNotification
/** 
 * Send follow-up email to attendees.
**/
export class WebinarCreateApplicationJsonSettingsFollowUpAttendeesEmailNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}

export enum WebinarCreateApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum {
    Only = "only",
    All = "all"
}


// WebinarCreateApplicationJsonSettingsQuestionAndAnswer
/** 
 * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
**/
export class WebinarCreateApplicationJsonSettingsQuestionAndAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_anonymous_questions" })
  allowAnonymousQuestions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=answer_questions" })
  answerQuestions?: WebinarCreateApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum;

  @SpeakeasyMetadata({ data: "json, name=attendees_can_comment" })
  attendeesCanComment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=attendees_can_upvote" })
  attendeesCanUpvote?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;
}


// WebinarCreateApplicationJsonSettings
/** 
 * Create Webinar settings.
**/
export class WebinarCreateApplicationJsonSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_multiple_devices" })
  allowMultipleDevices?: boolean;

  @SpeakeasyMetadata({ data: "json, name=alternative_hosts" })
  alternativeHosts?: string;

  @SpeakeasyMetadata({ data: "json, name=approval_type" })
  approvalType?: number;

  @SpeakeasyMetadata({ data: "json, name=attendees_and_panelists_reminder_email_notification" })
  attendeesAndPanelistsReminderEmailNotification?: WebinarCreateApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification;

  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: WebinarCreateApplicationJsonSettingsAudioEnum;

  @SpeakeasyMetadata({ data: "json, name=authentication_domains" })
  authenticationDomains?: string;

  @SpeakeasyMetadata({ data: "json, name=authentication_option" })
  authenticationOption?: string;

  @SpeakeasyMetadata({ data: "json, name=auto_recording" })
  autoRecording?: WebinarCreateApplicationJsonSettingsAutoRecordingEnum;

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
  followUpAbsenteesEmailNotification?: WebinarCreateApplicationJsonSettingsFollowUpAbsenteesEmailNotification;

  @SpeakeasyMetadata({ data: "json, name=follow_up_attendees_email_notification" })
  followUpAttendeesEmailNotification?: WebinarCreateApplicationJsonSettingsFollowUpAttendeesEmailNotification;

  @SpeakeasyMetadata({ data: "json, name=global_dial_in_countries" })
  globalDialInCountries?: string[];

  @SpeakeasyMetadata({ data: "json, name=hd_video" })
  hdVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=host_video" })
  hostVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_authentication" })
  meetingAuthentication?: boolean;

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
  questionAndAnswer?: WebinarCreateApplicationJsonSettingsQuestionAndAnswer;

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


export class WebinarCreateApplicationJsonTrackingFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// WebinarCreateApplicationJson
/** 
 * Base webinar object for sessions.
**/
export class WebinarCreateApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agenda" })
  agenda?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=recurrence" })
  recurrence?: WebinarCreateApplicationJsonRecurrenceWebinar;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: WebinarCreateApplicationJsonSettings;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;

  @SpeakeasyMetadata({ data: "json, name=tracking_fields", elemType: WebinarCreateApplicationJsonTrackingFields })
  trackingFields?: WebinarCreateApplicationJsonTrackingFields[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}


// WebinarCreateMultipartFormDataRecurrenceWebinar
/** 
 * Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time. 
**/
export class WebinarCreateMultipartFormDataRecurrenceWebinar extends SpeakeasyBase {
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
  weeklyDays?: string;
}


// WebinarCreateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification
/** 
 * Send reminder email to attendees and panelists.
**/
export class WebinarCreateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}

export enum WebinarCreateMultipartFormDataSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}

export enum WebinarCreateMultipartFormDataSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}


// WebinarCreateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification
/** 
 * Send follow-up email to absentees.
**/
export class WebinarCreateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}


// WebinarCreateMultipartFormDataSettingsFollowUpAttendeesEmailNotification
/** 
 * Send follow-up email to attendees.
**/
export class WebinarCreateMultipartFormDataSettingsFollowUpAttendeesEmailNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}

export enum WebinarCreateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum {
    Only = "only",
    All = "all"
}


// WebinarCreateMultipartFormDataSettingsQuestionAndAnswer
/** 
 * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
**/
export class WebinarCreateMultipartFormDataSettingsQuestionAndAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_anonymous_questions" })
  allowAnonymousQuestions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=answer_questions" })
  answerQuestions?: WebinarCreateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum;

  @SpeakeasyMetadata({ data: "json, name=attendees_can_comment" })
  attendeesCanComment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=attendees_can_upvote" })
  attendeesCanUpvote?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;
}


// WebinarCreateMultipartFormDataSettings
/** 
 * Create Webinar settings.
**/
export class WebinarCreateMultipartFormDataSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_multiple_devices" })
  allowMultipleDevices?: boolean;

  @SpeakeasyMetadata({ data: "json, name=alternative_hosts" })
  alternativeHosts?: string;

  @SpeakeasyMetadata({ data: "json, name=approval_type" })
  approvalType?: number;

  @SpeakeasyMetadata({ data: "json, name=attendees_and_panelists_reminder_email_notification" })
  attendeesAndPanelistsReminderEmailNotification?: WebinarCreateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification;

  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: WebinarCreateMultipartFormDataSettingsAudioEnum;

  @SpeakeasyMetadata({ data: "json, name=authentication_domains" })
  authenticationDomains?: string;

  @SpeakeasyMetadata({ data: "json, name=authentication_option" })
  authenticationOption?: string;

  @SpeakeasyMetadata({ data: "json, name=auto_recording" })
  autoRecording?: WebinarCreateMultipartFormDataSettingsAutoRecordingEnum;

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
  followUpAbsenteesEmailNotification?: WebinarCreateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification;

  @SpeakeasyMetadata({ data: "json, name=follow_up_attendees_email_notification" })
  followUpAttendeesEmailNotification?: WebinarCreateMultipartFormDataSettingsFollowUpAttendeesEmailNotification;

  @SpeakeasyMetadata({ data: "json, name=global_dial_in_countries" })
  globalDialInCountries?: string[];

  @SpeakeasyMetadata({ data: "json, name=hd_video" })
  hdVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=host_video" })
  hostVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meeting_authentication" })
  meetingAuthentication?: boolean;

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
  questionAndAnswer?: WebinarCreateMultipartFormDataSettingsQuestionAndAnswer;

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


export class WebinarCreateMultipartFormDataTrackingFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// WebinarCreateMultipartFormData1
/** 
 * Base webinar object for sessions.
**/
export class WebinarCreateMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=agenda" })
  agenda?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=recurrence;json=true" })
  recurrence?: WebinarCreateMultipartFormDataRecurrenceWebinar;

  @SpeakeasyMetadata({ data: "multipart_form, name=settings;json=true" })
  settings?: WebinarCreateMultipartFormDataSettings;

  @SpeakeasyMetadata({ data: "multipart_form, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "multipart_form, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=topic" })
  topic?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=tracking_fields;json=true", elemType: WebinarCreateMultipartFormDataTrackingFields })
  trackingFields?: WebinarCreateMultipartFormDataTrackingFields[];

  @SpeakeasyMetadata({ data: "multipart_form, name=type" })
  type?: number;
}


export class WebinarCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: WebinarCreateApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: WebinarCreateMultipartFormData1;
}


export class WebinarCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


// WebinarCreate201ApplicationJsonOccurrences
/** 
 * Occurence object. This object is only returned for Recurring Webinars.
**/
export class WebinarCreate201ApplicationJsonOccurrences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=occurrence_id" })
  occurrenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


// WebinarCreate201ApplicationJsonRecurrenceWebinar
/** 
 * Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time. 
**/
export class WebinarCreate201ApplicationJsonRecurrenceWebinar extends SpeakeasyBase {
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
  weeklyDays?: string;
}


// WebinarCreate201ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification
/** 
 * Send reminder email to attendees and panelists.
**/
export class WebinarCreate201ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}

export enum WebinarCreate201ApplicationJsonSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}

export enum WebinarCreate201ApplicationJsonSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}


// WebinarCreate201ApplicationJsonSettingsFollowUpAbsenteesEmailNotification
/** 
 * Send follow-up email to absentees.
**/
export class WebinarCreate201ApplicationJsonSettingsFollowUpAbsenteesEmailNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}


// WebinarCreate201ApplicationJsonSettingsFollowUpAttendeesEmailNotification
/** 
 * Send follow-up email to attendees.
**/
export class WebinarCreate201ApplicationJsonSettingsFollowUpAttendeesEmailNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}

export enum WebinarCreate201ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum {
    Only = "only",
    All = "all"
}


// WebinarCreate201ApplicationJsonSettingsQuestionAndAnswer
/** 
 * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
**/
export class WebinarCreate201ApplicationJsonSettingsQuestionAndAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_anonymous_questions" })
  allowAnonymousQuestions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=answer_questions" })
  answerQuestions?: WebinarCreate201ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum;

  @SpeakeasyMetadata({ data: "json, name=attendees_can_comment" })
  attendeesCanComment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=attendees_can_upvote" })
  attendeesCanUpvote?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;
}


// WebinarCreate201ApplicationJsonSettings
/** 
 * Webinar settings.
**/
export class WebinarCreate201ApplicationJsonSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_multiple_devices" })
  allowMultipleDevices?: boolean;

  @SpeakeasyMetadata({ data: "json, name=alternative_hosts" })
  alternativeHosts?: string;

  @SpeakeasyMetadata({ data: "json, name=approval_type" })
  approvalType?: number;

  @SpeakeasyMetadata({ data: "json, name=attendees_and_panelists_reminder_email_notification" })
  attendeesAndPanelistsReminderEmailNotification?: WebinarCreate201ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification;

  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: WebinarCreate201ApplicationJsonSettingsAudioEnum;

  @SpeakeasyMetadata({ data: "json, name=authentication_domains" })
  authenticationDomains?: string;

  @SpeakeasyMetadata({ data: "json, name=authentication_name" })
  authenticationName?: string;

  @SpeakeasyMetadata({ data: "json, name=authentication_option" })
  authenticationOption?: string;

  @SpeakeasyMetadata({ data: "json, name=auto_recording" })
  autoRecording?: WebinarCreate201ApplicationJsonSettingsAutoRecordingEnum;

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
  followUpAbsenteesEmailNotification?: WebinarCreate201ApplicationJsonSettingsFollowUpAbsenteesEmailNotification;

  @SpeakeasyMetadata({ data: "json, name=follow_up_attendees_email_notification" })
  followUpAttendeesEmailNotification?: WebinarCreate201ApplicationJsonSettingsFollowUpAttendeesEmailNotification;

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
  questionAndAnswer?: WebinarCreate201ApplicationJsonSettingsQuestionAndAnswer;

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


export class WebinarCreate201ApplicationJsonTrackingFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// WebinarCreate201ApplicationJson
/** 
 * Webinar object.
**/
export class WebinarCreate201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agenda" })
  agenda?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=host_email" })
  hostEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=host_id" })
  hostId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=join_url" })
  joinUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=occurrences", elemType: WebinarCreate201ApplicationJsonOccurrences })
  occurrences?: WebinarCreate201ApplicationJsonOccurrences[];

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=recurrence" })
  recurrence?: WebinarCreate201ApplicationJsonRecurrenceWebinar;

  @SpeakeasyMetadata({ data: "json, name=registrants_confirmation_email" })
  registrantsConfirmationEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: WebinarCreate201ApplicationJsonSettings;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=start_url" })
  startUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=template_id" })
  templateId?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;

  @SpeakeasyMetadata({ data: "json, name=tracking_fields", elemType: WebinarCreate201ApplicationJsonTrackingFields })
  trackingFields?: WebinarCreate201ApplicationJsonTrackingFields[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class WebinarCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WebinarCreatePathParams;

  @SpeakeasyMetadata()
  request: WebinarCreateRequests;

  @SpeakeasyMetadata()
  security: WebinarCreateSecurity;
}


export class WebinarCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webinarCreate201ApplicationJSONObject?: WebinarCreate201ApplicationJson;
}
