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
class MeetingUpdatePathParams:
    meeting_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MeetingUpdateQueryParams:
    occurrence_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'occurrence_id', 'style': 'form', 'explode': True }})
    
class MeetingUpdateApplicationJSONRecurrenceWeeklyDaysEnum(str, Enum):
    ONE = "1"
    TWO = "2"
    THREE = "3"
    FOUR = "4"
    FIVE = "5"
    SIX = "6"
    SEVEN = "7"


@dataclass_json
@dataclasses.dataclass
class MeetingUpdateApplicationJSONRecurrence:
    r"""MeetingUpdateApplicationJSONRecurrence
    Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time. 
    """
    
    type: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    end_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_times: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_times') }})
    monthly_day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_day') }})
    monthly_week: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_week') }})
    monthly_week_day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_week_day') }})
    repeat_interval: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeat_interval') }})
    weekly_days: Optional[MeetingUpdateApplicationJSONRecurrenceWeeklyDaysEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekly_days') }})
    
class MeetingUpdateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum(str, Enum):
    APPROVE = "approve"
    DENY = "deny"


@dataclass_json
@dataclasses.dataclass
class MeetingUpdateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegions:
    r"""MeetingUpdateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegions
    Approve or block users from specific regions/countries from joining this meeting. 
    
    """
    
    approved_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approved_list') }})
    denied_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('denied_list') }})
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    method: Optional[MeetingUpdateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    
class MeetingUpdateApplicationJSONSettingsAudioEnum(str, Enum):
    BOTH = "both"
    TELEPHONY = "telephony"
    VOIP = "voip"


@dataclass_json
@dataclasses.dataclass
class MeetingUpdateApplicationJSONSettingsAuthenticationException:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class MeetingUpdateApplicationJSONSettingsAutoRecordingEnum(str, Enum):
    LOCAL = "local"
    CLOUD = "cloud"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class MeetingUpdateApplicationJSONSettingsBreakoutRoomRooms:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    participants: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingUpdateApplicationJSONSettingsBreakoutRoom:
    r"""MeetingUpdateApplicationJSONSettingsBreakoutRoom
    Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    rooms: Optional[list[MeetingUpdateApplicationJSONSettingsBreakoutRoomRooms]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rooms') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingUpdateApplicationJSONSettingsCustomKeys:
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class MeetingUpdateApplicationJSONSettingsEncryptionTypeEnum(str, Enum):
    ENHANCED_ENCRYPTION = "enhanced_encryption"
    E2EE = "e2ee"

class MeetingUpdateApplicationJSONSettingsGlobalDialInNumbersTypeEnum(str, Enum):
    TOLL = "toll"
    TOLLFREE = "tollfree"


@dataclass_json
@dataclasses.dataclass
class MeetingUpdateApplicationJSONSettingsGlobalDialInNumbers:
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    country_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_name') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    type: Optional[MeetingUpdateApplicationJSONSettingsGlobalDialInNumbersTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingUpdateApplicationJSONSettingsLanguageInterpretationInterpreters:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    languages: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingUpdateApplicationJSONSettingsLanguageInterpretation:
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    interpreters: Optional[list[MeetingUpdateApplicationJSONSettingsLanguageInterpretationInterpreters]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interpreters') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingUpdateApplicationJSONSettings:
    r"""MeetingUpdateApplicationJSONSettings
    Meeting settings.
    """
    
    allow_multiple_devices: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_multiple_devices') }})
    alternative_hosts: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_hosts') }})
    alternative_hosts_email_notification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_hosts_email_notification') }})
    approval_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approval_type') }})
    approved_or_denied_countries_or_regions: Optional[MeetingUpdateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approved_or_denied_countries_or_regions') }})
    audio: Optional[MeetingUpdateApplicationJSONSettingsAudioEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    authentication_domains: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_domains') }})
    authentication_exception: Optional[list[MeetingUpdateApplicationJSONSettingsAuthenticationException]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_exception') }})
    authentication_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_name') }})
    authentication_option: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_option') }})
    auto_recording: Optional[MeetingUpdateApplicationJSONSettingsAutoRecordingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_recording') }})
    breakout_room: Optional[MeetingUpdateApplicationJSONSettingsBreakoutRoom] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('breakout_room') }})
    close_registration: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('close_registration') }})
    cn_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cn_meeting') }})
    contact_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_email') }})
    contact_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_name') }})
    custom_keys: Optional[list[MeetingUpdateApplicationJSONSettingsCustomKeys]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_keys') }})
    encryption_type: Optional[MeetingUpdateApplicationJSONSettingsEncryptionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryption_type') }})
    enforce_login: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_login') }})
    enforce_login_domains: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_login_domains') }})
    global_dial_in_countries: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('global_dial_in_countries') }})
    global_dial_in_numbers: Optional[list[MeetingUpdateApplicationJSONSettingsGlobalDialInNumbers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('global_dial_in_numbers') }})
    host_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host_video') }})
    in_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in_meeting') }})
    jbh_time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jbh_time') }})
    join_before_host: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('join_before_host') }})
    language_interpretation: Optional[MeetingUpdateApplicationJSONSettingsLanguageInterpretation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language_interpretation') }})
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
class MeetingUpdateApplicationJSONTrackingFields:
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingUpdateApplicationJSON:
    r"""MeetingUpdateApplicationJSON
    Base object for sessions.
    """
    
    agenda: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agenda') }})
    duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    recurrence: Optional[MeetingUpdateApplicationJSONRecurrence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurrence') }})
    schedule_for: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule_for') }})
    settings: Optional[MeetingUpdateApplicationJSONSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    template_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_id') }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    topic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    tracking_fields: Optional[list[MeetingUpdateApplicationJSONTrackingFields]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracking_fields') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum(str, Enum):
    ONE = "1"
    TWO = "2"
    THREE = "3"
    FOUR = "4"
    FIVE = "5"
    SIX = "6"
    SEVEN = "7"


@dataclass_json
@dataclasses.dataclass
class MeetingUpdateMultipartFormDataRecurrence:
    r"""MeetingUpdateMultipartFormDataRecurrence
    Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time. 
    """
    
    type: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    end_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_times: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_times') }})
    monthly_day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_day') }})
    monthly_week: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_week') }})
    monthly_week_day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_week_day') }})
    repeat_interval: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeat_interval') }})
    weekly_days: Optional[MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekly_days') }})
    
class MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum(str, Enum):
    APPROVE = "approve"
    DENY = "deny"


@dataclass_json
@dataclasses.dataclass
class MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions:
    r"""MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions
    Approve or block users from specific regions/countries from joining this meeting. 
    
    """
    
    approved_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approved_list') }})
    denied_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('denied_list') }})
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    method: Optional[MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    
class MeetingUpdateMultipartFormDataSettingsAudioEnum(str, Enum):
    BOTH = "both"
    TELEPHONY = "telephony"
    VOIP = "voip"


@dataclass_json
@dataclasses.dataclass
class MeetingUpdateMultipartFormDataSettingsAuthenticationException:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class MeetingUpdateMultipartFormDataSettingsAutoRecordingEnum(str, Enum):
    LOCAL = "local"
    CLOUD = "cloud"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class MeetingUpdateMultipartFormDataSettingsBreakoutRoomRooms:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    participants: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingUpdateMultipartFormDataSettingsBreakoutRoom:
    r"""MeetingUpdateMultipartFormDataSettingsBreakoutRoom
    Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    rooms: Optional[list[MeetingUpdateMultipartFormDataSettingsBreakoutRoomRooms]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rooms') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingUpdateMultipartFormDataSettingsCustomKeys:
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class MeetingUpdateMultipartFormDataSettingsEncryptionTypeEnum(str, Enum):
    ENHANCED_ENCRYPTION = "enhanced_encryption"
    E2EE = "e2ee"

class MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbersTypeEnum(str, Enum):
    TOLL = "toll"
    TOLLFREE = "tollfree"


@dataclass_json
@dataclasses.dataclass
class MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers:
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    country_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_name') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    type: Optional[MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbersTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingUpdateMultipartFormDataSettingsLanguageInterpretationInterpreters:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    languages: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingUpdateMultipartFormDataSettingsLanguageInterpretation:
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    interpreters: Optional[list[MeetingUpdateMultipartFormDataSettingsLanguageInterpretationInterpreters]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interpreters') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingUpdateMultipartFormDataSettings:
    r"""MeetingUpdateMultipartFormDataSettings
    Meeting settings.
    """
    
    allow_multiple_devices: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_multiple_devices') }})
    alternative_hosts: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_hosts') }})
    alternative_hosts_email_notification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_hosts_email_notification') }})
    approval_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approval_type') }})
    approved_or_denied_countries_or_regions: Optional[MeetingUpdateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approved_or_denied_countries_or_regions') }})
    audio: Optional[MeetingUpdateMultipartFormDataSettingsAudioEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    authentication_domains: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_domains') }})
    authentication_exception: Optional[list[MeetingUpdateMultipartFormDataSettingsAuthenticationException]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_exception') }})
    authentication_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_name') }})
    authentication_option: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_option') }})
    auto_recording: Optional[MeetingUpdateMultipartFormDataSettingsAutoRecordingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_recording') }})
    breakout_room: Optional[MeetingUpdateMultipartFormDataSettingsBreakoutRoom] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('breakout_room') }})
    close_registration: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('close_registration') }})
    cn_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cn_meeting') }})
    contact_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_email') }})
    contact_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_name') }})
    custom_keys: Optional[list[MeetingUpdateMultipartFormDataSettingsCustomKeys]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_keys') }})
    encryption_type: Optional[MeetingUpdateMultipartFormDataSettingsEncryptionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryption_type') }})
    enforce_login: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_login') }})
    enforce_login_domains: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_login_domains') }})
    global_dial_in_countries: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('global_dial_in_countries') }})
    global_dial_in_numbers: Optional[list[MeetingUpdateMultipartFormDataSettingsGlobalDialInNumbers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('global_dial_in_numbers') }})
    host_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host_video') }})
    in_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in_meeting') }})
    jbh_time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jbh_time') }})
    join_before_host: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('join_before_host') }})
    language_interpretation: Optional[MeetingUpdateMultipartFormDataSettingsLanguageInterpretation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language_interpretation') }})
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
class MeetingUpdateMultipartFormDataTrackingFields:
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclasses.dataclass
class MeetingUpdateMultipartFormData1:
    r"""MeetingUpdateMultipartFormData1
    Base object for sessions.
    """
    
    agenda: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'agenda' }})
    duration: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'duration' }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'password' }})
    recurrence: Optional[MeetingUpdateMultipartFormDataRecurrence] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'recurrence', 'json': True }})
    schedule_for: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'schedule_for' }})
    settings: Optional[MeetingUpdateMultipartFormDataSettings] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'settings', 'json': True }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'start_time' }})
    template_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'template_id' }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'timezone' }})
    topic: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'topic' }})
    tracking_fields: Optional[list[MeetingUpdateMultipartFormDataTrackingFields]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'tracking_fields', 'json': True }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'type' }})
    

@dataclasses.dataclass
class MeetingUpdateRequests:
    object: Optional[MeetingUpdateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[MeetingUpdateMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class MeetingUpdateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class MeetingUpdateRequest:
    path_params: MeetingUpdatePathParams = dataclasses.field()
    query_params: MeetingUpdateQueryParams = dataclasses.field()
    request: MeetingUpdateRequests = dataclasses.field()
    security: MeetingUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MeetingUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
