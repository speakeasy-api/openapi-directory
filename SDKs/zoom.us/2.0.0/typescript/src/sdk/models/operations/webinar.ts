import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WebinarPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: number;
}


export class WebinarQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurrence_id" })
  occurrenceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=show_previous_occurrences" })
  showPreviousOccurrences?: boolean;
}


export class WebinarSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


// Webinar200ApplicationJsonOccurrences
/** 
 * Occurence object. This object is only returned for Recurring Webinars.
**/
export class Webinar200ApplicationJsonOccurrences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=occurrence_id" })
  occurrenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


// Webinar200ApplicationJsonRecurrenceWebinar
/** 
 * Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time. 
**/
export class Webinar200ApplicationJsonRecurrenceWebinar extends SpeakeasyBase {
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


// Webinar200ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification
/** 
 * Send reminder email to attendees and panelists.
**/
export class Webinar200ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}

export enum Webinar200ApplicationJsonSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}

export enum Webinar200ApplicationJsonSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}


// Webinar200ApplicationJsonSettingsFollowUpAbsenteesEmailNotification
/** 
 * Send follow-up email to absentees.
**/
export class Webinar200ApplicationJsonSettingsFollowUpAbsenteesEmailNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}


// Webinar200ApplicationJsonSettingsFollowUpAttendeesEmailNotification
/** 
 * Send follow-up email to attendees.
**/
export class Webinar200ApplicationJsonSettingsFollowUpAttendeesEmailNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}

export enum Webinar200ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum {
    Only = "only",
    All = "all"
}


// Webinar200ApplicationJsonSettingsQuestionAndAnswer
/** 
 * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
**/
export class Webinar200ApplicationJsonSettingsQuestionAndAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_anonymous_questions" })
  allowAnonymousQuestions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=answer_questions" })
  answerQuestions?: Webinar200ApplicationJsonSettingsQuestionAndAnswerAnswerQuestionsEnum;

  @SpeakeasyMetadata({ data: "json, name=attendees_can_comment" })
  attendeesCanComment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=attendees_can_upvote" })
  attendeesCanUpvote?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;
}


// Webinar200ApplicationJsonSettings
/** 
 * Webinar settings.
**/
export class Webinar200ApplicationJsonSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_multiple_devices" })
  allowMultipleDevices?: boolean;

  @SpeakeasyMetadata({ data: "json, name=alternative_hosts" })
  alternativeHosts?: string;

  @SpeakeasyMetadata({ data: "json, name=approval_type" })
  approvalType?: number;

  @SpeakeasyMetadata({ data: "json, name=attendees_and_panelists_reminder_email_notification" })
  attendeesAndPanelistsReminderEmailNotification?: Webinar200ApplicationJsonSettingsAttendeesAndPanelistsReminderEmailNotification;

  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: Webinar200ApplicationJsonSettingsAudioEnum;

  @SpeakeasyMetadata({ data: "json, name=authentication_domains" })
  authenticationDomains?: string;

  @SpeakeasyMetadata({ data: "json, name=authentication_name" })
  authenticationName?: string;

  @SpeakeasyMetadata({ data: "json, name=authentication_option" })
  authenticationOption?: string;

  @SpeakeasyMetadata({ data: "json, name=auto_recording" })
  autoRecording?: Webinar200ApplicationJsonSettingsAutoRecordingEnum;

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
  followUpAbsenteesEmailNotification?: Webinar200ApplicationJsonSettingsFollowUpAbsenteesEmailNotification;

  @SpeakeasyMetadata({ data: "json, name=follow_up_attendees_email_notification" })
  followUpAttendeesEmailNotification?: Webinar200ApplicationJsonSettingsFollowUpAttendeesEmailNotification;

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
  questionAndAnswer?: Webinar200ApplicationJsonSettingsQuestionAndAnswer;

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


export class Webinar200ApplicationJsonTrackingFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Webinar200ApplicationJson
/** 
 * Webinar object.
**/
export class Webinar200ApplicationJson extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=occurrences", elemType: Webinar200ApplicationJsonOccurrences })
  occurrences?: Webinar200ApplicationJsonOccurrences[];

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=recurrence" })
  recurrence?: Webinar200ApplicationJsonRecurrenceWebinar;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: Webinar200ApplicationJsonSettings;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=start_url" })
  startUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;

  @SpeakeasyMetadata({ data: "json, name=tracking_fields", elemType: Webinar200ApplicationJsonTrackingFields })
  trackingFields?: Webinar200ApplicationJsonTrackingFields[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class WebinarRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WebinarPathParams;

  @SpeakeasyMetadata()
  queryParams: WebinarQueryParams;

  @SpeakeasyMetadata()
  security: WebinarSecurity;
}


export class WebinarResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webinar200ApplicationJSONObject?: Webinar200ApplicationJson;
}
