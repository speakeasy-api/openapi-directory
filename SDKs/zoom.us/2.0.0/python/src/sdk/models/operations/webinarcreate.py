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
class WebinarCreatePathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarCreateApplicationJSONRecurrenceWebinar:
    r"""WebinarCreateApplicationJSONRecurrenceWebinar
    Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time. 
    """
    
    type: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    end_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_times: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_times') }})
    monthly_day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_day') }})
    monthly_week: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_week') }})
    monthly_week_day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_week_day') }})
    repeat_interval: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeat_interval') }})
    weekly_days: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekly_days') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarCreateApplicationJSONSettingsAttendeesAndPanelistsReminderEmailNotification:
    r"""WebinarCreateApplicationJSONSettingsAttendeesAndPanelistsReminderEmailNotification
    Send reminder email to attendees and panelists.
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class WebinarCreateApplicationJSONSettingsAudioEnum(str, Enum):
    BOTH = "both"
    TELEPHONY = "telephony"
    VOIP = "voip"

class WebinarCreateApplicationJSONSettingsAutoRecordingEnum(str, Enum):
    LOCAL = "local"
    CLOUD = "cloud"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class WebinarCreateApplicationJSONSettingsFollowUpAbsenteesEmailNotification:
    r"""WebinarCreateApplicationJSONSettingsFollowUpAbsenteesEmailNotification
    Send follow-up email to absentees.
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarCreateApplicationJSONSettingsFollowUpAttendeesEmailNotification:
    r"""WebinarCreateApplicationJSONSettingsFollowUpAttendeesEmailNotification
    Send follow-up email to attendees.
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class WebinarCreateApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnum(str, Enum):
    ONLY = "only"
    ALL = "all"


@dataclass_json
@dataclasses.dataclass
class WebinarCreateApplicationJSONSettingsQuestionAndAnswer:
    r"""WebinarCreateApplicationJSONSettingsQuestionAndAnswer
    [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
    """
    
    allow_anonymous_questions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_anonymous_questions') }})
    answer_questions: Optional[WebinarCreateApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer_questions') }})
    attendees_can_comment: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attendees_can_comment') }})
    attendees_can_upvote: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attendees_can_upvote') }})
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarCreateApplicationJSONSettings:
    r"""WebinarCreateApplicationJSONSettings
    Create Webinar settings.
    """
    
    allow_multiple_devices: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_multiple_devices') }})
    alternative_hosts: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_hosts') }})
    approval_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approval_type') }})
    attendees_and_panelists_reminder_email_notification: Optional[WebinarCreateApplicationJSONSettingsAttendeesAndPanelistsReminderEmailNotification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attendees_and_panelists_reminder_email_notification') }})
    audio: Optional[WebinarCreateApplicationJSONSettingsAudioEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    authentication_domains: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_domains') }})
    authentication_option: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_option') }})
    auto_recording: Optional[WebinarCreateApplicationJSONSettingsAutoRecordingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_recording') }})
    close_registration: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('close_registration') }})
    contact_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_email') }})
    contact_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_name') }})
    email_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_language') }})
    enforce_login: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_login') }})
    enforce_login_domains: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_login_domains') }})
    follow_up_absentees_email_notification: Optional[WebinarCreateApplicationJSONSettingsFollowUpAbsenteesEmailNotification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow_up_absentees_email_notification') }})
    follow_up_attendees_email_notification: Optional[WebinarCreateApplicationJSONSettingsFollowUpAttendeesEmailNotification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow_up_attendees_email_notification') }})
    global_dial_in_countries: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('global_dial_in_countries') }})
    hd_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hd_video') }})
    host_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host_video') }})
    meeting_authentication: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_authentication') }})
    on_demand: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('on_demand') }})
    panelists_invitation_email_notification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('panelists_invitation_email_notification') }})
    panelists_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('panelists_video') }})
    post_webinar_survey: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post_webinar_survey') }})
    practice_session: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('practice_session') }})
    question_and_answer: Optional[WebinarCreateApplicationJSONSettingsQuestionAndAnswer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('question_and_answer') }})
    registrants_email_notification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrants_email_notification') }})
    registrants_restrict_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrants_restrict_number') }})
    registration_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_type') }})
    show_share_button: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_share_button') }})
    survey_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('survey_url') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarCreateApplicationJSONTrackingFields:
    field: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarCreateApplicationJSON:
    r"""WebinarCreateApplicationJSON
    Base webinar object for sessions.
    """
    
    agenda: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agenda') }})
    duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    recurrence: Optional[WebinarCreateApplicationJSONRecurrenceWebinar] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurrence') }})
    settings: Optional[WebinarCreateApplicationJSONSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    topic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    tracking_fields: Optional[list[WebinarCreateApplicationJSONTrackingFields]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracking_fields') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarCreateMultipartFormDataRecurrenceWebinar:
    r"""WebinarCreateMultipartFormDataRecurrenceWebinar
    Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time. 
    """
    
    type: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    end_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_times: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_times') }})
    monthly_day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_day') }})
    monthly_week: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_week') }})
    monthly_week_day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_week_day') }})
    repeat_interval: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeat_interval') }})
    weekly_days: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekly_days') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarCreateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification:
    r"""WebinarCreateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification
    Send reminder email to attendees and panelists.
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class WebinarCreateMultipartFormDataSettingsAudioEnum(str, Enum):
    BOTH = "both"
    TELEPHONY = "telephony"
    VOIP = "voip"

class WebinarCreateMultipartFormDataSettingsAutoRecordingEnum(str, Enum):
    LOCAL = "local"
    CLOUD = "cloud"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class WebinarCreateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification:
    r"""WebinarCreateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification
    Send follow-up email to absentees.
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarCreateMultipartFormDataSettingsFollowUpAttendeesEmailNotification:
    r"""WebinarCreateMultipartFormDataSettingsFollowUpAttendeesEmailNotification
    Send follow-up email to attendees.
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class WebinarCreateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum(str, Enum):
    ONLY = "only"
    ALL = "all"


@dataclass_json
@dataclasses.dataclass
class WebinarCreateMultipartFormDataSettingsQuestionAndAnswer:
    r"""WebinarCreateMultipartFormDataSettingsQuestionAndAnswer
    [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
    """
    
    allow_anonymous_questions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_anonymous_questions') }})
    answer_questions: Optional[WebinarCreateMultipartFormDataSettingsQuestionAndAnswerAnswerQuestionsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer_questions') }})
    attendees_can_comment: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attendees_can_comment') }})
    attendees_can_upvote: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attendees_can_upvote') }})
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarCreateMultipartFormDataSettings:
    r"""WebinarCreateMultipartFormDataSettings
    Create Webinar settings.
    """
    
    allow_multiple_devices: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_multiple_devices') }})
    alternative_hosts: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_hosts') }})
    approval_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approval_type') }})
    attendees_and_panelists_reminder_email_notification: Optional[WebinarCreateMultipartFormDataSettingsAttendeesAndPanelistsReminderEmailNotification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attendees_and_panelists_reminder_email_notification') }})
    audio: Optional[WebinarCreateMultipartFormDataSettingsAudioEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    authentication_domains: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_domains') }})
    authentication_option: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_option') }})
    auto_recording: Optional[WebinarCreateMultipartFormDataSettingsAutoRecordingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_recording') }})
    close_registration: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('close_registration') }})
    contact_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_email') }})
    contact_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_name') }})
    email_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_language') }})
    enforce_login: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_login') }})
    enforce_login_domains: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_login_domains') }})
    follow_up_absentees_email_notification: Optional[WebinarCreateMultipartFormDataSettingsFollowUpAbsenteesEmailNotification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow_up_absentees_email_notification') }})
    follow_up_attendees_email_notification: Optional[WebinarCreateMultipartFormDataSettingsFollowUpAttendeesEmailNotification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow_up_attendees_email_notification') }})
    global_dial_in_countries: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('global_dial_in_countries') }})
    hd_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hd_video') }})
    host_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host_video') }})
    meeting_authentication: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_authentication') }})
    on_demand: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('on_demand') }})
    panelists_invitation_email_notification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('panelists_invitation_email_notification') }})
    panelists_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('panelists_video') }})
    post_webinar_survey: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post_webinar_survey') }})
    practice_session: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('practice_session') }})
    question_and_answer: Optional[WebinarCreateMultipartFormDataSettingsQuestionAndAnswer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('question_and_answer') }})
    registrants_email_notification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrants_email_notification') }})
    registrants_restrict_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrants_restrict_number') }})
    registration_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_type') }})
    show_share_button: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_share_button') }})
    survey_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('survey_url') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarCreateMultipartFormDataTrackingFields:
    field: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclasses.dataclass
class WebinarCreateMultipartFormData1:
    r"""WebinarCreateMultipartFormData1
    Base webinar object for sessions.
    """
    
    agenda: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'agenda' }})
    duration: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'duration' }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'password' }})
    recurrence: Optional[WebinarCreateMultipartFormDataRecurrenceWebinar] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'recurrence', 'json': True }})
    settings: Optional[WebinarCreateMultipartFormDataSettings] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'settings', 'json': True }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'start_time' }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'timezone' }})
    topic: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'topic' }})
    tracking_fields: Optional[list[WebinarCreateMultipartFormDataTrackingFields]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'tracking_fields', 'json': True }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'type' }})
    

@dataclasses.dataclass
class WebinarCreateRequests:
    object: Optional[WebinarCreateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[WebinarCreateMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class WebinarCreateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarCreate201ApplicationJSONOccurrences:
    r"""WebinarCreate201ApplicationJSONOccurrences
    Occurence object. This object is only returned for Recurring Webinars.
    """
    
    duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    occurrence_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occurrence_id') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarCreate201ApplicationJSONRecurrenceWebinar:
    r"""WebinarCreate201ApplicationJSONRecurrenceWebinar
    Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time. 
    """
    
    type: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    end_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_times: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_times') }})
    monthly_day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_day') }})
    monthly_week: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_week') }})
    monthly_week_day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_week_day') }})
    repeat_interval: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeat_interval') }})
    weekly_days: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekly_days') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarCreate201ApplicationJSONSettingsAttendeesAndPanelistsReminderEmailNotification:
    r"""WebinarCreate201ApplicationJSONSettingsAttendeesAndPanelistsReminderEmailNotification
    Send reminder email to attendees and panelists.
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class WebinarCreate201ApplicationJSONSettingsAudioEnum(str, Enum):
    BOTH = "both"
    TELEPHONY = "telephony"
    VOIP = "voip"

class WebinarCreate201ApplicationJSONSettingsAutoRecordingEnum(str, Enum):
    LOCAL = "local"
    CLOUD = "cloud"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class WebinarCreate201ApplicationJSONSettingsFollowUpAbsenteesEmailNotification:
    r"""WebinarCreate201ApplicationJSONSettingsFollowUpAbsenteesEmailNotification
    Send follow-up email to absentees.
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarCreate201ApplicationJSONSettingsFollowUpAttendeesEmailNotification:
    r"""WebinarCreate201ApplicationJSONSettingsFollowUpAttendeesEmailNotification
    Send follow-up email to attendees.
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class WebinarCreate201ApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnum(str, Enum):
    ONLY = "only"
    ALL = "all"


@dataclass_json
@dataclasses.dataclass
class WebinarCreate201ApplicationJSONSettingsQuestionAndAnswer:
    r"""WebinarCreate201ApplicationJSONSettingsQuestionAndAnswer
    [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
    """
    
    allow_anonymous_questions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_anonymous_questions') }})
    answer_questions: Optional[WebinarCreate201ApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer_questions') }})
    attendees_can_comment: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attendees_can_comment') }})
    attendees_can_upvote: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attendees_can_upvote') }})
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarCreate201ApplicationJSONSettings:
    r"""WebinarCreate201ApplicationJSONSettings
    Webinar settings.
    """
    
    allow_multiple_devices: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_multiple_devices') }})
    alternative_hosts: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_hosts') }})
    approval_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approval_type') }})
    attendees_and_panelists_reminder_email_notification: Optional[WebinarCreate201ApplicationJSONSettingsAttendeesAndPanelistsReminderEmailNotification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attendees_and_panelists_reminder_email_notification') }})
    audio: Optional[WebinarCreate201ApplicationJSONSettingsAudioEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    authentication_domains: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_domains') }})
    authentication_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_name') }})
    authentication_option: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_option') }})
    auto_recording: Optional[WebinarCreate201ApplicationJSONSettingsAutoRecordingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_recording') }})
    close_registration: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('close_registration') }})
    contact_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_email') }})
    contact_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_name') }})
    email_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_language') }})
    enforce_login: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_login') }})
    enforce_login_domains: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_login_domains') }})
    follow_up_absentees_email_notification: Optional[WebinarCreate201ApplicationJSONSettingsFollowUpAbsenteesEmailNotification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow_up_absentees_email_notification') }})
    follow_up_attendees_email_notification: Optional[WebinarCreate201ApplicationJSONSettingsFollowUpAttendeesEmailNotification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('follow_up_attendees_email_notification') }})
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
    question_and_answer: Optional[WebinarCreate201ApplicationJSONSettingsQuestionAndAnswer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('question_and_answer') }})
    registrants_confirmation_email: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrants_confirmation_email') }})
    registrants_email_notification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrants_email_notification') }})
    registrants_restrict_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrants_restrict_number') }})
    registration_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_type') }})
    show_share_button: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_share_button') }})
    survey_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('survey_url') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarCreate201ApplicationJSONTrackingFields:
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class WebinarCreate201ApplicationJSON:
    r"""WebinarCreate201ApplicationJSON
    Webinar object.
    """
    
    agenda: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agenda') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    host_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host_email') }})
    host_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host_id') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    join_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('join_url') }})
    occurrences: Optional[list[WebinarCreate201ApplicationJSONOccurrences]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occurrences') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    recurrence: Optional[WebinarCreate201ApplicationJSONRecurrenceWebinar] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurrence') }})
    registrants_confirmation_email: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrants_confirmation_email') }})
    settings: Optional[WebinarCreate201ApplicationJSONSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_url') }})
    template_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_id') }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    topic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    tracking_fields: Optional[list[WebinarCreate201ApplicationJSONTrackingFields]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracking_fields') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    

@dataclasses.dataclass
class WebinarCreateRequest:
    path_params: WebinarCreatePathParams = dataclasses.field()
    request: WebinarCreateRequests = dataclasses.field()
    security: WebinarCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class WebinarCreateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    webinar_create_201_application_json_object: Optional[WebinarCreate201ApplicationJSON] = dataclasses.field(default=None)
    
