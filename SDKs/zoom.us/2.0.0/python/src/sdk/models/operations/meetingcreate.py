import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class MeetingCreatePathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    
class MeetingCreateApplicationJSONRecurrenceWeeklyDaysEnum(str, Enum):
    ONE = "1"
    TWO = "2"
    THREE = "3"
    FOUR = "4"
    FIVE = "5"
    SIX = "6"
    SEVEN = "7"


@dataclass_json
@dataclasses.dataclass
class MeetingCreateApplicationJSONRecurrence:
    r"""MeetingCreateApplicationJSONRecurrence
    Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time. 
    """
    
    type: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    end_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_times: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_times') }})
    monthly_day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_day') }})
    monthly_week: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_week') }})
    monthly_week_day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_week_day') }})
    repeat_interval: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeat_interval') }})
    weekly_days: Optional[MeetingCreateApplicationJSONRecurrenceWeeklyDaysEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekly_days') }})
    
class MeetingCreateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum(str, Enum):
    APPROVE = "approve"
    DENY = "deny"


@dataclass_json
@dataclasses.dataclass
class MeetingCreateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegions:
    r"""MeetingCreateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegions
    Approve or block users from specific regions/countries from joining this meeting. 
    
    """
    
    approved_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approved_list') }})
    denied_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('denied_list') }})
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    method: Optional[MeetingCreateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    
class MeetingCreateApplicationJSONSettingsAudioEnum(str, Enum):
    BOTH = "both"
    TELEPHONY = "telephony"
    VOIP = "voip"

class MeetingCreateApplicationJSONSettingsAutoRecordingEnum(str, Enum):
    LOCAL = "local"
    CLOUD = "cloud"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class MeetingCreateApplicationJSONSettingsBreakoutRoomRooms:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    participants: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingCreateApplicationJSONSettingsBreakoutRoom:
    r"""MeetingCreateApplicationJSONSettingsBreakoutRoom
    Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    rooms: Optional[list[MeetingCreateApplicationJSONSettingsBreakoutRoomRooms]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rooms') }})
    
class MeetingCreateApplicationJSONSettingsEncryptionTypeEnum(str, Enum):
    ENHANCED_ENCRYPTION = "enhanced_encryption"
    E2EE = "e2ee"


@dataclass_json
@dataclasses.dataclass
class MeetingCreateApplicationJSONSettingsLanguageInterpretationInterpreters:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    languages: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingCreateApplicationJSONSettingsLanguageInterpretation:
    r"""MeetingCreateApplicationJSONSettingsLanguageInterpretation
    Language interpretation [settings](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars#h_01EGGQFD3Q4BST3378SA762MJ1) for meetings. 
    
    **Note:** This feature is only available on certain Webinar add-on, Education, Business and higher plans. If this feature is not enabled on the host's account, this setting will not be applied for the meeting.
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    interpreters: Optional[list[MeetingCreateApplicationJSONSettingsLanguageInterpretationInterpreters]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interpreters') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingCreateApplicationJSONSettings:
    r"""MeetingCreateApplicationJSONSettings
    Meeting settings.
    """
    
    additional_data_center_regions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additional_data_center_regions') }})
    allow_multiple_devices: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_multiple_devices') }})
    alternative_hosts: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_hosts') }})
    alternative_hosts_email_notification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_hosts_email_notification') }})
    approval_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approval_type') }})
    approved_or_denied_countries_or_regions: Optional[MeetingCreateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approved_or_denied_countries_or_regions') }})
    audio: Optional[MeetingCreateApplicationJSONSettingsAudioEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    authentication_domains: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_domains') }})
    authentication_option: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_option') }})
    auto_recording: Optional[MeetingCreateApplicationJSONSettingsAutoRecordingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_recording') }})
    breakout_room: Optional[MeetingCreateApplicationJSONSettingsBreakoutRoom] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('breakout_room') }})
    close_registration: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('close_registration') }})
    cn_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cn_meeting') }})
    contact_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_email') }})
    contact_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_name') }})
    encryption_type: Optional[MeetingCreateApplicationJSONSettingsEncryptionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryption_type') }})
    global_dial_in_countries: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('global_dial_in_countries') }})
    host_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host_video') }})
    in_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in_meeting') }})
    jbh_time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jbh_time') }})
    join_before_host: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('join_before_host') }})
    language_interpretation: Optional[MeetingCreateApplicationJSONSettingsLanguageInterpretation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language_interpretation') }})
    meeting_authentication: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_authentication') }})
    mute_upon_entry: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mute_upon_entry') }})
    participant_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participant_video') }})
    registrants_email_notification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrants_email_notification') }})
    registration_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_type') }})
    show_share_button: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_share_button') }})
    use_pmi: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_pmi') }})
    waiting_room: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_room') }})
    watermark: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watermark') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingCreateApplicationJSONTrackingFields:
    field: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingCreateApplicationJSON:
    r"""MeetingCreateApplicationJSON
    Base object for meeting.
    """
    
    agenda: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agenda') }})
    duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    recurrence: Optional[MeetingCreateApplicationJSONRecurrence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurrence') }})
    schedule_for: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule_for') }})
    settings: Optional[MeetingCreateApplicationJSONSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    template_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_id') }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    topic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    tracking_fields: Optional[list[MeetingCreateApplicationJSONTrackingFields]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracking_fields') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum(str, Enum):
    ONE = "1"
    TWO = "2"
    THREE = "3"
    FOUR = "4"
    FIVE = "5"
    SIX = "6"
    SEVEN = "7"


@dataclass_json
@dataclasses.dataclass
class MeetingCreateMultipartFormDataRecurrence:
    r"""MeetingCreateMultipartFormDataRecurrence
    Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time. 
    """
    
    type: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    end_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_times: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_times') }})
    monthly_day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_day') }})
    monthly_week: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_week') }})
    monthly_week_day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_week_day') }})
    repeat_interval: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeat_interval') }})
    weekly_days: Optional[MeetingCreateMultipartFormDataRecurrenceWeeklyDaysEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekly_days') }})
    
class MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum(str, Enum):
    APPROVE = "approve"
    DENY = "deny"


@dataclass_json
@dataclasses.dataclass
class MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions:
    r"""MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions
    Approve or block users from specific regions/countries from joining this meeting. 
    
    """
    
    approved_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approved_list') }})
    denied_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('denied_list') }})
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    method: Optional[MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    
class MeetingCreateMultipartFormDataSettingsAudioEnum(str, Enum):
    BOTH = "both"
    TELEPHONY = "telephony"
    VOIP = "voip"

class MeetingCreateMultipartFormDataSettingsAutoRecordingEnum(str, Enum):
    LOCAL = "local"
    CLOUD = "cloud"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class MeetingCreateMultipartFormDataSettingsBreakoutRoomRooms:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    participants: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingCreateMultipartFormDataSettingsBreakoutRoom:
    r"""MeetingCreateMultipartFormDataSettingsBreakoutRoom
    Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    rooms: Optional[list[MeetingCreateMultipartFormDataSettingsBreakoutRoomRooms]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rooms') }})
    
class MeetingCreateMultipartFormDataSettingsEncryptionTypeEnum(str, Enum):
    ENHANCED_ENCRYPTION = "enhanced_encryption"
    E2EE = "e2ee"


@dataclass_json
@dataclasses.dataclass
class MeetingCreateMultipartFormDataSettingsLanguageInterpretationInterpreters:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    languages: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingCreateMultipartFormDataSettingsLanguageInterpretation:
    r"""MeetingCreateMultipartFormDataSettingsLanguageInterpretation
    Language interpretation [settings](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars#h_01EGGQFD3Q4BST3378SA762MJ1) for meetings. 
    
    **Note:** This feature is only available on certain Webinar add-on, Education, Business and higher plans. If this feature is not enabled on the host's account, this setting will not be applied for the meeting.
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    interpreters: Optional[list[MeetingCreateMultipartFormDataSettingsLanguageInterpretationInterpreters]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interpreters') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingCreateMultipartFormDataSettings:
    r"""MeetingCreateMultipartFormDataSettings
    Meeting settings.
    """
    
    additional_data_center_regions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additional_data_center_regions') }})
    allow_multiple_devices: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_multiple_devices') }})
    alternative_hosts: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_hosts') }})
    alternative_hosts_email_notification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_hosts_email_notification') }})
    approval_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approval_type') }})
    approved_or_denied_countries_or_regions: Optional[MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approved_or_denied_countries_or_regions') }})
    audio: Optional[MeetingCreateMultipartFormDataSettingsAudioEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    authentication_domains: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_domains') }})
    authentication_option: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_option') }})
    auto_recording: Optional[MeetingCreateMultipartFormDataSettingsAutoRecordingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_recording') }})
    breakout_room: Optional[MeetingCreateMultipartFormDataSettingsBreakoutRoom] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('breakout_room') }})
    close_registration: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('close_registration') }})
    cn_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cn_meeting') }})
    contact_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_email') }})
    contact_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_name') }})
    encryption_type: Optional[MeetingCreateMultipartFormDataSettingsEncryptionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryption_type') }})
    global_dial_in_countries: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('global_dial_in_countries') }})
    host_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host_video') }})
    in_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in_meeting') }})
    jbh_time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jbh_time') }})
    join_before_host: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('join_before_host') }})
    language_interpretation: Optional[MeetingCreateMultipartFormDataSettingsLanguageInterpretation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language_interpretation') }})
    meeting_authentication: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_authentication') }})
    mute_upon_entry: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mute_upon_entry') }})
    participant_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participant_video') }})
    registrants_email_notification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrants_email_notification') }})
    registration_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_type') }})
    show_share_button: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_share_button') }})
    use_pmi: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_pmi') }})
    waiting_room: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_room') }})
    watermark: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watermark') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingCreateMultipartFormDataTrackingFields:
    field: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclasses.dataclass
class MeetingCreateMultipartFormData1:
    r"""MeetingCreateMultipartFormData1
    Base object for meeting.
    """
    
    agenda: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'agenda' }})
    duration: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'duration' }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'password' }})
    recurrence: Optional[MeetingCreateMultipartFormDataRecurrence] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'recurrence', 'json': True }})
    schedule_for: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'schedule_for' }})
    settings: Optional[MeetingCreateMultipartFormDataSettings] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'settings', 'json': True }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'start_time' }})
    template_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'template_id' }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'timezone' }})
    topic: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'topic' }})
    tracking_fields: Optional[list[MeetingCreateMultipartFormDataTrackingFields]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'tracking_fields', 'json': True }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'type' }})
    

@dataclasses.dataclass
class MeetingCreateRequests:
    object: Optional[MeetingCreateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[MeetingCreateMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingCreate201ApplicationJSONOccurrences:
    r"""MeetingCreate201ApplicationJSONOccurrences
    Occurence object. This object is only returned for Recurring Webinars.
    """
    
    duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    occurrence_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occurrence_id') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class MeetingCreate201ApplicationJSONRecurrenceWeeklyDaysEnum(str, Enum):
    ONE = "1"
    TWO = "2"
    THREE = "3"
    FOUR = "4"
    FIVE = "5"
    SIX = "6"
    SEVEN = "7"


@dataclass_json
@dataclasses.dataclass
class MeetingCreate201ApplicationJSONRecurrence:
    r"""MeetingCreate201ApplicationJSONRecurrence
    Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time. 
    """
    
    type: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    end_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_times: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_times') }})
    monthly_day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_day') }})
    monthly_week: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_week') }})
    monthly_week_day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_week_day') }})
    repeat_interval: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeat_interval') }})
    weekly_days: Optional[MeetingCreate201ApplicationJSONRecurrenceWeeklyDaysEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekly_days') }})
    
class MeetingCreate201ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum(str, Enum):
    APPROVE = "approve"
    DENY = "deny"


@dataclass_json
@dataclasses.dataclass
class MeetingCreate201ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegions:
    r"""MeetingCreate201ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegions
    Approve or block users from specific regions/countries from joining this meeting. 
    
    """
    
    approved_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approved_list') }})
    denied_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('denied_list') }})
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    method: Optional[MeetingCreate201ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    
class MeetingCreate201ApplicationJSONSettingsAudioEnum(str, Enum):
    BOTH = "both"
    TELEPHONY = "telephony"
    VOIP = "voip"


@dataclass_json
@dataclasses.dataclass
class MeetingCreate201ApplicationJSONSettingsAuthenticationException:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class MeetingCreate201ApplicationJSONSettingsAutoRecordingEnum(str, Enum):
    LOCAL = "local"
    CLOUD = "cloud"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class MeetingCreate201ApplicationJSONSettingsBreakoutRoomRooms:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    participants: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingCreate201ApplicationJSONSettingsBreakoutRoom:
    r"""MeetingCreate201ApplicationJSONSettingsBreakoutRoom
    Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    rooms: Optional[list[MeetingCreate201ApplicationJSONSettingsBreakoutRoomRooms]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rooms') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingCreate201ApplicationJSONSettingsCustomKeys:
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class MeetingCreate201ApplicationJSONSettingsEncryptionTypeEnum(str, Enum):
    ENHANCED_ENCRYPTION = "enhanced_encryption"
    E2EE = "e2ee"

class MeetingCreate201ApplicationJSONSettingsGlobalDialInNumbersTypeEnum(str, Enum):
    TOLL = "toll"
    TOLLFREE = "tollfree"


@dataclass_json
@dataclasses.dataclass
class MeetingCreate201ApplicationJSONSettingsGlobalDialInNumbers:
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    country_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_name') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    type: Optional[MeetingCreate201ApplicationJSONSettingsGlobalDialInNumbersTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingCreate201ApplicationJSONSettingsLanguageInterpretationInterpreters:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    languages: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingCreate201ApplicationJSONSettingsLanguageInterpretation:
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    interpreters: Optional[list[MeetingCreate201ApplicationJSONSettingsLanguageInterpretationInterpreters]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interpreters') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingCreate201ApplicationJSONSettings:
    r"""MeetingCreate201ApplicationJSONSettings
    Meeting settings.
    """
    
    allow_multiple_devices: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_multiple_devices') }})
    alternative_hosts: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_hosts') }})
    alternative_hosts_email_notification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_hosts_email_notification') }})
    approval_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approval_type') }})
    approved_or_denied_countries_or_regions: Optional[MeetingCreate201ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approved_or_denied_countries_or_regions') }})
    audio: Optional[MeetingCreate201ApplicationJSONSettingsAudioEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    authentication_domains: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_domains') }})
    authentication_exception: Optional[list[MeetingCreate201ApplicationJSONSettingsAuthenticationException]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_exception') }})
    authentication_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_name') }})
    authentication_option: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_option') }})
    auto_recording: Optional[MeetingCreate201ApplicationJSONSettingsAutoRecordingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_recording') }})
    breakout_room: Optional[MeetingCreate201ApplicationJSONSettingsBreakoutRoom] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('breakout_room') }})
    close_registration: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('close_registration') }})
    cn_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cn_meeting') }})
    contact_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_email') }})
    contact_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_name') }})
    custom_keys: Optional[list[MeetingCreate201ApplicationJSONSettingsCustomKeys]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_keys') }})
    encryption_type: Optional[MeetingCreate201ApplicationJSONSettingsEncryptionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryption_type') }})
    enforce_login: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_login') }})
    enforce_login_domains: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_login_domains') }})
    global_dial_in_countries: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('global_dial_in_countries') }})
    global_dial_in_numbers: Optional[list[MeetingCreate201ApplicationJSONSettingsGlobalDialInNumbers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('global_dial_in_numbers') }})
    host_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host_video') }})
    in_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in_meeting') }})
    jbh_time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jbh_time') }})
    join_before_host: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('join_before_host') }})
    language_interpretation: Optional[MeetingCreate201ApplicationJSONSettingsLanguageInterpretation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language_interpretation') }})
    meeting_authentication: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_authentication') }})
    mute_upon_entry: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mute_upon_entry') }})
    participant_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participant_video') }})
    registrants_confirmation_email: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrants_confirmation_email') }})
    registrants_email_notification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrants_email_notification') }})
    registration_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_type') }})
    show_share_button: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_share_button') }})
    use_pmi: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_pmi') }})
    waiting_room: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_room') }})
    watermark: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watermark') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingCreate201ApplicationJSONTrackingFields:
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    visible: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visible') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingCreate201ApplicationJSON:
    r"""MeetingCreate201ApplicationJSON
    Meeting object
    """
    
    agenda: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agenda') }})
    assistant_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assistant_id') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    h323_password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('h323_password') }})
    host_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host_email') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    join_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('join_url') }})
    occurrences: Optional[list[MeetingCreate201ApplicationJSONOccurrences]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occurrences') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    pmi: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pmi') }})
    recurrence: Optional[MeetingCreate201ApplicationJSONRecurrence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurrence') }})
    registration_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_url') }})
    settings: Optional[MeetingCreate201ApplicationJSONSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_url') }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    topic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    tracking_fields: Optional[list[MeetingCreate201ApplicationJSONTrackingFields]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracking_fields') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class MeetingCreateRequest:
    path_params: MeetingCreatePathParams = dataclasses.field()
    request: MeetingCreateRequests = dataclasses.field()
    

@dataclasses.dataclass
class MeetingCreateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    meeting_create_201_application_json_object: Optional[MeetingCreate201ApplicationJSON] = dataclasses.field(default=None)
    
