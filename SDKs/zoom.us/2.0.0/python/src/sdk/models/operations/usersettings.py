import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UserSettingsPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    
class UserSettingsLoginTypeEnum(str, Enum):
    ZERO = "0"
    ONE = "1"
    NINETY_NINE = "99"
    ONE_HUNDRED = "100"
    ONE_HUNDRED_AND_ONE = "101"

class UserSettingsOptionEnum(str, Enum):
    MEETING_AUTHENTICATION = "meeting_authentication"
    RECORDING_AUTHENTICATION = "recording_authentication"


@dataclasses.dataclass
class UserSettingsQueryParams:
    custom_query_fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'custom_query_fields', 'style': 'form', 'explode': True }})
    login_type: Optional[UserSettingsLoginTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'login_type', 'style': 'form', 'explode': True }})
    option: Optional[UserSettingsOptionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'option', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UserSettingsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class UserSettings200ApplicationJSONUserSettingsUserSettingsNotificationSettings:
    alternative_host_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_host_reminder') }})
    cancel_meeting_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancel_meeting_reminder') }})
    jbh_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jbh_reminder') }})
    schedule_for_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule_for_reminder') }})
    

@dataclass_json
@dataclasses.dataclass
class UserSettings200ApplicationJSONUserSettingsUserSettingsFeatureSettings:
    cn_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cn_meeting') }})
    in_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in_meeting') }})
    large_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('large_meeting') }})
    large_meeting_capacity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('large_meeting_capacity') }})
    meeting_capacity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_capacity') }})
    webinar: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webinar') }})
    webinar_capacity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webinar_capacity') }})
    zoom_phone: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zoom_phone') }})
    
class UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum(str, Enum):
    HOST = "host"
    ALL = "all"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_default: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_default') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings:
    r"""UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings
    Settings to manage virtual background.
    """
    
    allow_upload_custom: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_upload_custom') }})
    allow_videos: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_videos') }})
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    files: Optional[list[UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    
class UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum(str, Enum):
    HOST = "host"
    ALL = "all"

class UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum(str, Enum):
    HOST = "host"
    ALL = "all"


@dataclass_json
@dataclasses.dataclass
class UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettings:
    allow_live_streaming: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_live_streaming') }})
    annotation: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotation') }})
    attendee_on_hold: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attendee_on_hold') }})
    auto_saving_chat: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_saving_chat') }})
    breakout_room: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('breakout_room') }})
    chat: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chat') }})
    closed_caption: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed_caption') }})
    co_host: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('co_host') }})
    custom_data_center_regions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_data_center_regions') }})
    custom_live_streaming_service: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_live_streaming_service') }})
    custom_service_instructions: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_service_instructions') }})
    data_center_regions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_center_regions') }})
    e2e_encryption: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('e2e_encryption') }})
    entry_exit_chime: Optional[UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entry_exit_chime') }})
    far_end_camera_control: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('far_end_camera_control') }})
    feedback: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedback') }})
    file_transfer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_transfer') }})
    group_hd: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_hd') }})
    non_verbal_feedback: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_verbal_feedback') }})
    polling: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polling') }})
    private_chat: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_chat') }})
    record_play_voice: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_play_voice') }})
    remote_control: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote_control') }})
    remote_support: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote_support') }})
    request_permission_to_unmute: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_permission_to_unmute') }})
    screen_sharing: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screen_sharing') }})
    share_dual_camera: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('share_dual_camera') }})
    show_meeting_control_toolbar: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_meeting_control_toolbar') }})
    virtual_background: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtual_background') }})
    virtual_background_settings: Optional[UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtual_background_settings') }})
    waiting_room: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_room') }})
    who_can_share_screen: Optional[UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('who_can_share_screen') }})
    who_can_share_screen_when_someone_is_sharing: Optional[UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('who_can_share_screen_when_someone_is_sharing') }})
    workplace_by_facebook: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workplace_by_facebook') }})
    

@dataclass_json
@dataclasses.dataclass
class UserSettings200ApplicationJSONUserSettingsProfileRecordingStorageLocation:
    allowed_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_values') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class UserSettings200ApplicationJSONUserSettingsProfile:
    recording_storage_location: Optional[UserSettings200ApplicationJSONUserSettingsProfileRecordingStorageLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_storage_location') }})
    
class UserSettings200ApplicationJSONUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum(str, Enum):
    LOCAL = "local"
    CLOUD = "cloud"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class UserSettings200ApplicationJSONUserSettingsUserSettingsRecordingSettingsIPAddressAccessControl:
    r"""UserSettings200ApplicationJSONUserSettingsUserSettingsRecordingSettingsIPAddressAccessControl
    Setting to allow cloud recording access only from specific IP address ranges.
    
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    ip_addresses_or_ranges: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_addresses_or_ranges') }})
    

@dataclass_json
@dataclasses.dataclass
class UserSettings200ApplicationJSONUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement:
    r"""UserSettings200ApplicationJSONUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement
    This object represents the minimum passcode requirements set for recordings via Account Recording Settings.
    """
    
    have_letter: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_letter') }})
    have_number: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_number') }})
    have_special_character: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_special_character') }})
    length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    only_allow_numeric: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('only_allow_numeric') }})
    

@dataclass_json
@dataclasses.dataclass
class UserSettings200ApplicationJSONUserSettingsUserSettingsRecordingSettings:
    ask_host_to_confirm_disclaimer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ask_host_to_confirm_disclaimer') }})
    ask_participants_to_consent_disclaimer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ask_participants_to_consent_disclaimer') }})
    auto_delete_cmr: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_delete_cmr') }})
    auto_delete_cmr_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_delete_cmr_days') }})
    auto_recording: Optional[UserSettings200ApplicationJSONUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_recording') }})
    cloud_recording: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloud_recording') }})
    host_pause_stop_recording: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host_pause_stop_recording') }})
    ip_address_access_control: Optional[UserSettings200ApplicationJSONUserSettingsUserSettingsRecordingSettingsIPAddressAccessControl] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_address_access_control') }})
    local_recording: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('local_recording') }})
    record_audio_file: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_audio_file') }})
    record_gallery_view: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_gallery_view') }})
    record_speaker_view: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_speaker_view') }})
    recording_audio_transcript: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_audio_transcript') }})
    recording_disclaimer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_disclaimer') }})
    recording_password_requirement: Optional[UserSettings200ApplicationJSONUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_password_requirement') }})
    save_chat_text: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('save_chat_text') }})
    show_timestamp: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_timestamp') }})
    
class UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsAudioTypeEnum(str, Enum):
    BOTH = "both"
    TELEPHONY = "telephony"
    VOIP = "voip"
    THIRD_PARTY = "thirdParty"


@dataclass_json
@dataclasses.dataclass
class UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement:
    r"""UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement
    Account wide meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
    """
    
    consecutive_characters_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consecutive_characters_length') }})
    have_letter: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_letter') }})
    have_number: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_number') }})
    have_special_character: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_special_character') }})
    have_upper_and_lower_characters: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_upper_and_lower_characters') }})
    length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    only_allow_numeric: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('only_allow_numeric') }})
    weak_enhance_detection: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weak_enhance_detection') }})
    
class UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum(str, Enum):
    JBH_ONLY = "jbh_only"
    ALL = "all"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettings1:
    audio_type: Optional[UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsAudioTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_type') }})
    default_password_for_scheduled_meetings: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_password_for_scheduled_meetings') }})
    embed_password_in_join_link: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed_password_in_join_link') }})
    force_pmi_jbh_password: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('force_pmi_jbh_password') }})
    host_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host_video') }})
    join_before_host: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('join_before_host') }})
    meeting_password_requirement: Optional[UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsMeetingPasswordRequirement] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_password_requirement') }})
    participants_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants_video') }})
    personal_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personal_meeting') }})
    pmi_password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pmi_password') }})
    pstn_password_protected: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pstn_password_protected') }})
    require_password_for_instant_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_instant_meetings') }})
    require_password_for_pmi_meetings: Optional[UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsRequirePasswordForPmiMeetingsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_pmi_meetings') }})
    require_password_for_scheduled_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_scheduled_meetings') }})
    require_password_for_scheduling_new_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_scheduling_new_meetings') }})
    use_pmi_for_instant_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_pmi_for_instant_meetings') }})
    use_pmi_for_scheduled_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_pmi_for_scheduled_meetings') }})
    

@dataclass_json
@dataclasses.dataclass
class UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsTelephonyRegions:
    r"""UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsTelephonyRegions
    Indicates where most of the participants call into or call from duriing a meeting.
    """
    
    allowed_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_values') }})
    selection_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selection_values') }})
    

@dataclass_json
@dataclasses.dataclass
class UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettings2:
    audio_conference_info: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_conference_info') }})
    show_international_numbers_link: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_international_numbers_link') }})
    telephony_regions: Optional[UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettingsTelephonyRegions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telephony_regions') }})
    third_party_audio: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('third_party_audio') }})
    

@dataclass_json
@dataclasses.dataclass
class UserSettings200ApplicationJSONUserSettingsUserSettingsTspSettings:
    r"""UserSettings200ApplicationJSONUserSettingsUserSettingsTspSettings
    Account Settings: TSP.
    """
    
    call_out: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_out') }})
    call_out_countries: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_out_countries') }})
    show_international_numbers_link: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_international_numbers_link') }})
    

@dataclass_json
@dataclasses.dataclass
class UserSettings200ApplicationJSONUserSettings:
    email_notification: Optional[UserSettings200ApplicationJSONUserSettingsUserSettingsNotificationSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_notification') }})
    feature: Optional[UserSettings200ApplicationJSONUserSettingsUserSettingsFeatureSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feature') }})
    in_meeting: Optional[UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in_meeting') }})
    profile: Optional[UserSettings200ApplicationJSONUserSettingsProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    recording: Optional[UserSettings200ApplicationJSONUserSettingsUserSettingsRecordingSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording') }})
    schedule_meeting: Optional[UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettings1] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule_meeting') }})
    telephony: Optional[UserSettings200ApplicationJSONUserSettingsUserSettingsMeetingSettings2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telephony') }})
    tsp: Optional[UserSettings200ApplicationJSONUserSettingsUserSettingsTspSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tsp') }})
    
class UserSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum(str, Enum):
    ENHANCED_ENCRYPTION = "enhanced_encryption"
    E2EE = "e2ee"


@dataclass_json
@dataclasses.dataclass
class UserSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement:
    r"""UserSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
    Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
    """
    
    consecutive_characters_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consecutive_characters_length') }})
    have_letter: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_letter') }})
    have_number: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_number') }})
    have_special_character: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_special_character') }})
    have_upper_and_lower_characters: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_upper_and_lower_characters') }})
    length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    only_allow_numeric: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('only_allow_numeric') }})
    weak_enhance_detection: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weak_enhance_detection') }})
    

@dataclass_json
@dataclasses.dataclass
class UserSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings:
    r"""UserSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
    Specify the settings to be applied if waiting room is enabled.
    """
    
    participants_to_place_in_waiting_room: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants_to_place_in_waiting_room') }})
    users_who_can_admit_participants_from_waiting_room: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users_who_can_admit_participants_from_waiting_room') }})
    whitelisted_domains_for_waiting_room: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('whitelisted_domains_for_waiting_room') }})
    

@dataclass_json
@dataclasses.dataclass
class UserSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity:
    auto_security: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_security') }})
    embed_password_in_join_link: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed_password_in_join_link') }})
    encryption_type: Optional[UserSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryption_type') }})
    end_to_end_encrypted_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_to_end_encrypted_meetings') }})
    meeting_password: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_password') }})
    meeting_password_requirement: Optional[UserSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_password_requirement') }})
    phone_password: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_password') }})
    pmi_password: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pmi_password') }})
    require_password_for_scheduled_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_scheduled_meeting') }})
    require_password_for_scheduled_webinar: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_scheduled_webinar') }})
    waiting_room: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_room') }})
    waiting_room_settings: Optional[UserSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_room_settings') }})
    webinar_password: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webinar_password') }})
    

@dataclass_json
@dataclasses.dataclass
class UserSettings200ApplicationJSONMeetingWebinarSecuritySettings:
    meeting_security: Optional[UserSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_security') }})
    

@dataclasses.dataclass
class UserSettingsRequest:
    path_params: UserSettingsPathParams = dataclasses.field()
    query_params: UserSettingsQueryParams = dataclasses.field()
    security: UserSettingsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UserSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    user_settings_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
