import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class WebinarUpdatePathParams:
    webinar_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'webinarId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WebinarUpdateQueryParams:
    occurrence_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'occurrence_id', 'style': 'form', 'explode': True }})
    
class WebinarUpdateApplicationJSONRecurrenceWeeklyDaysEnum(str, Enum):
    ONE = "1"
    TWO = "2"
    THREE = "3"
    FOUR = "4"
    FIVE = "5"
    SIX = "6"
    SEVEN = "7"


@dataclass_json
@dataclasses.dataclass
class WebinarUpdateApplicationJSONRecurrence:
    r"""WebinarUpdateApplicationJSONRecurrence
    Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time. 
    """
    
    type: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    end_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_times: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_times') }})
    monthly_day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_day') }})
    monthly_week: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_week') }})
    monthly_week_day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_week_day') }})
    repeat_interval: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeat_interval') }})
    weekly_days: Optional[WebinarUpdateApplicationJSONRecurrenceWeeklyDaysEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekly_days') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarUpdateApplicationJSONSettingsAttendeesAndPanelistsReminderEmailNotification:
    r"""WebinarUpdateApplicationJSONSettingsAttendeesAndPanelistsReminderEmailNotification
    Send reminder email to attendees and panelists.
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class WebinarUpdateApplicationJSONSettingsAudioEnum(str, Enum):
    BOTH = "both"
    TELEPHONY = "telephony"
    VOIP = "voip"

class WebinarUpdateApplicationJSONSettingsAutoRecordingEnum(str, Enum):
    LOCAL = "local"
    CLOUD = "cloud"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class WebinarUpdateApplicationJSONSettingsFollowUpAbsenteesEmailNotification:
    r"""WebinarUpdateApplicationJSONSettingsFollowUpAbsenteesEmailNotification
    Send follow-up email to absentees.
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarUpdateApplicationJSONSettingsFollowUpAttendeesEmailNotification:
    r"""WebinarUpdateApplicationJSONSettingsFollowUpAttendeesEmailNotification
    Send follow-up email to attendees.
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class WebinarUpdateApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnum(str, Enum):
    ONLY = "only"
    ALL = "all"


@dataclass_json
@dataclasses.dataclass
class WebinarUpdateApplicationJSONSettingsQuestionAndAnswer:
    r"""WebinarUpdateApplicationJSONSettingsQuestionAndAnswer
    [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
    """
    
    allow_anonymous_questions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_anonymous_questions') }})
    answer_questions: Optional[WebinarUpdateApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer_questions') }})
    attendees_can_comment: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attendees_can_comment') }})
    attendees_can_upvote: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attendees_can_upvote') }})
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarUpdateApplicationJSONSettings:
    r"""WebinarUpdateApplicationJSONSettings
    Webinar settings.
    """
    
    allow_multiple_devices: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_multiple_devices') }})
    alternative_hosts: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_hosts') }})
    approval_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approval_type') }})
    attendees_and_panelists_reminder_email_notification: Optional[WebinarUpdateApplicationJSONSettingsAttendeesAndPanelistsReminderEmailNotification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attendees_and_panelists_reminder_email_notification') }})
    audio: Optional[WebinarUpdateApplicationJSONSettingsAudioEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    authentication_domains: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_domains') }})
    authentication_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_name') }})
    authentication_option: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_option') }})
    auto_recording: Optional[WebinarUpdateApplicationJSONSettingsAutoRecordingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_recording') }})
    close_registration: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('close_registration') }})
    contact_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_email') }})
    contact_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_name') }})
    email_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_language') }})
    enforce_login: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_login') }})
    enforce_login_domains: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_login_domains') }})
    follow_up_absentees_email_notification: Optional[WebinarUpdateApplicationJSONSettingsFollowUpAbsenteesEmailNotification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow_up_absentees_email_notification') }})
    follow_up_attendees_email_notification: Optional[WebinarUpdateApplicationJSONSettingsFollowUpAttendeesEmailNotification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow_up_attendees_email_notification') }})
    global_dial_in_countries: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('global_dial_in_countries') }})
    hd_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hd_video') }})
    host_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host_video') }})
    meeting_authentication: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_authentication') }})
    notify_registrants: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notify_registrants') }})
    on_demand: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('on_demand') }})
    panelists_invitation_email_notification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('panelists_invitation_email_notification') }})
    panelists_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('panelists_video') }})
    post_webinar_survey: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post_webinar_survey') }})
    practice_session: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('practice_session') }})
    question_and_answer: Optional[WebinarUpdateApplicationJSONSettingsQuestionAndAnswer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('question_and_answer') }})
    registrants_confirmation_email: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrants_confirmation_email') }})
    registrants_email_notification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrants_email_notification') }})
    registrants_restrict_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrants_restrict_number') }})
    registration_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_type') }})
    show_share_button: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_share_button') }})
    survey_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('survey_url') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarUpdateApplicationJSONTrackingFields:
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarUpdateApplicationJSON:
    r"""WebinarUpdateApplicationJSON
    Base webinar object for sessions.
    """
    
    agenda: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agenda') }})
    duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    recurrence: Optional[WebinarUpdateApplicationJSONRecurrence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurrence') }})
    settings: Optional[WebinarUpdateApplicationJSONSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    topic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    tracking_fields: Optional[list[WebinarUpdateApplicationJSONTrackingFields]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracking_fields') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum(str, Enum):
    ONE = "1"
    TWO = "2"
    THREE = "3"
    FOUR = "4"
    FIVE = "5"
    SIX = "6"
    SEVEN = "7"


@dataclass_json
@dataclasses.dataclass
class WebinarUpdateMultipartFormDataRecurrence:
    r"""WebinarUpdateMultipartFormDataRecurrence
    Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time. 
    """
    
    type: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    end_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_times: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_times') }})
    monthly_day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_day') }})
    monthly_week: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_week') }})
    monthly_week_day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_week_day') }})
    repeat_interval: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeat_interval') }})
    weekly_days: Optional[WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekly_days') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarUpdateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification:
    r"""WebinarUpdateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification
    Send reminder email to attendees and panelists.
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class WebinarUpdateMultipartFormDataSettingsAudioEnum(str, Enum):
    BOTH = "both"
    TELEPHONY = "telephony"
    VOIP = "voip"

class WebinarUpdateMultipartFormDataSettingsAutoRecordingEnum(str, Enum):
    LOCAL = "local"
    CLOUD = "cloud"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification:
    r"""WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification
    Send follow-up email to absentees.
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification:
    r"""WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification
    Send follow-up email to attendees.
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class WebinarUpdateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum(str, Enum):
    ONLY = "only"
    ALL = "all"


@dataclass_json
@dataclasses.dataclass
class WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer:
    r"""WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer
    [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
    """
    
    allow_anonymous_questions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_anonymous_questions') }})
    answer_questions: Optional[WebinarUpdateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer_questions') }})
    attendees_can_comment: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attendees_can_comment') }})
    attendees_can_upvote: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attendees_can_upvote') }})
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarUpdateMultipartFormDataSettings:
    r"""WebinarUpdateMultipartFormDataSettings
    Webinar settings.
    """
    
    allow_multiple_devices: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_multiple_devices') }})
    alternative_hosts: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_hosts') }})
    approval_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approval_type') }})
    attendees_and_panelists_reminder_email_notification: Optional[WebinarUpdateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attendees_and_panelists_reminder_email_notification') }})
    audio: Optional[WebinarUpdateMultipartFormDataSettingsAudioEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    authentication_domains: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_domains') }})
    authentication_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_name') }})
    authentication_option: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_option') }})
    auto_recording: Optional[WebinarUpdateMultipartFormDataSettingsAutoRecordingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_recording') }})
    close_registration: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('close_registration') }})
    contact_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_email') }})
    contact_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_name') }})
    email_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_language') }})
    enforce_login: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_login') }})
    enforce_login_domains: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_login_domains') }})
    follow_up_absentees_email_notification: Optional[WebinarUpdateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow_up_absentees_email_notification') }})
    follow_up_attendees_email_notification: Optional[WebinarUpdateMultipartFormDataSettingsFollowUpAttendeesEmailNotification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow_up_attendees_email_notification') }})
    global_dial_in_countries: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('global_dial_in_countries') }})
    hd_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hd_video') }})
    host_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host_video') }})
    meeting_authentication: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_authentication') }})
    notify_registrants: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notify_registrants') }})
    on_demand: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('on_demand') }})
    panelists_invitation_email_notification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('panelists_invitation_email_notification') }})
    panelists_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('panelists_video') }})
    post_webinar_survey: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post_webinar_survey') }})
    practice_session: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('practice_session') }})
    question_and_answer: Optional[WebinarUpdateMultipartFormDataSettingsQuestionAndAnswer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('question_and_answer') }})
    registrants_confirmation_email: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrants_confirmation_email') }})
    registrants_email_notification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrants_email_notification') }})
    registrants_restrict_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrants_restrict_number') }})
    registration_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_type') }})
    show_share_button: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_share_button') }})
    survey_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('survey_url') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarUpdateMultipartFormDataTrackingFields:
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclasses.dataclass
class WebinarUpdateMultipartFormData1:
    r"""WebinarUpdateMultipartFormData1
    Base webinar object for sessions.
    """
    
    agenda: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'agenda' }})
    duration: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'duration' }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'password' }})
    recurrence: Optional[WebinarUpdateMultipartFormDataRecurrence] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'recurrence', 'json': True }})
    settings: Optional[WebinarUpdateMultipartFormDataSettings] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'settings', 'json': True }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'start_time' }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'timezone' }})
    topic: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'topic' }})
    tracking_fields: Optional[list[WebinarUpdateMultipartFormDataTrackingFields]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'tracking_fields', 'json': True }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'type' }})
    

@dataclasses.dataclass
class WebinarUpdateRequests:
    object: Optional[WebinarUpdateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[WebinarUpdateMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class WebinarUpdateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class WebinarUpdateRequest:
    path_params: WebinarUpdatePathParams = dataclasses.field()
    query_params: WebinarUpdateQueryParams = dataclasses.field()
    request: WebinarUpdateRequests = dataclasses.field()
    security: WebinarUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class WebinarUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
