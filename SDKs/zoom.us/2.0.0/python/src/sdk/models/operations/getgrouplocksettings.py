import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetGroupLockSettingsPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGroupLockSettingsQueryParams:
    custom_query_fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'custom_query_fields', 'style': 'form', 'explode': True }})
    option: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'option', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGroupLockSettingsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetGroupLockSettings200ApplicationJSON1EmailNotification:
    alternative_host_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_host_reminder') }})
    cancel_meeting_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancel_meeting_reminder') }})
    cloud_recording_available_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloud_recording_available_reminder') }})
    jbh_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jbh_reminder') }})
    schedule_for_host_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule_for_host_reminder') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGroupLockSettings200ApplicationJSON1InMeeting:
    alert_guest_join: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alert_guest_join') }})
    allow_show_zoom_windows: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_show_zoom_windows') }})
    annotation: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotation') }})
    attendee_on_hold: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attendee_on_hold') }})
    auto_answer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_answer') }})
    auto_saving_chat: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_saving_chat') }})
    breakout_room: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('breakout_room') }})
    chat: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chat') }})
    closed_caption: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed_caption') }})
    co_host: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('co_host') }})
    custom_data_center_regions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_data_center_regions') }})
    e2e_encryption: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('e2e_encryption') }})
    entry_exit_chime: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entry_exit_chime') }})
    far_end_camera_control: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('far_end_camera_control') }})
    feedback: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedback') }})
    file_transfer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_transfer') }})
    group_hd: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_hd') }})
    non_verbal_feedback: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_verbal_feedback') }})
    original_audio: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_audio') }})
    polling: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polling') }})
    post_meeting_feedback: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post_meeting_feedback') }})
    private_chat: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_chat') }})
    remote_control: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote_control') }})
    remote_support: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote_support') }})
    request_permission_to_unmute: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_permission_to_unmute') }})
    screen_sharing: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screen_sharing') }})
    sending_default_email_invites: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sending_default_email_invites') }})
    show_browser_join_link: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_browser_join_link') }})
    show_meeting_control_toolbar: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_meeting_control_toolbar') }})
    stereo_audio: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stereo_audio') }})
    use_html_format_email: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_html_format_email') }})
    virtual_background: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtual_background') }})
    waiting_room: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_room') }})
    whiteboard: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('whiteboard') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGroupLockSettings200ApplicationJSON1RecordingIPAddressAccessControl:
    r"""GetGroupLockSettings200ApplicationJSON1RecordingIPAddressAccessControl
    Setting to allow cloud recording access only from specific IP address ranges.
    
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    ip_addresses_or_ranges: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_addresses_or_ranges') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGroupLockSettings200ApplicationJSON1Recording:
    account_user_access_recording: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_user_access_recording') }})
    auto_delete_cmr: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_delete_cmr') }})
    auto_recording: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_recording') }})
    cloud_recording: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloud_recording') }})
    cloud_recording_download: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloud_recording_download') }})
    host_delete_cloud_recording: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host_delete_cloud_recording') }})
    ip_address_access_control: Optional[GetGroupLockSettings200ApplicationJSON1RecordingIPAddressAccessControl] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_address_access_control') }})
    local_recording: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('local_recording') }})
    prevent_host_access_recording: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prevent_host_access_recording') }})
    recording_authentication: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_authentication') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGroupLockSettings200ApplicationJSON1ScheduleMeeting:
    audio_type: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_type') }})
    embed_password_in_join_link: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed_password_in_join_link') }})
    force_pmi_jbh_password: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('force_pmi_jbh_password') }})
    host_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host_video') }})
    join_before_host: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('join_before_host') }})
    meeting_authentication: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_authentication') }})
    mute_upon_entry: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mute_upon_entry') }})
    participant_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participant_video') }})
    pstn_password_protected: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pstn_password_protected') }})
    require_password_for_instant_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_instant_meetings') }})
    require_password_for_pmi_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_pmi_meetings') }})
    require_password_for_scheduling_new_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_scheduling_new_meetings') }})
    upcoming_meeting_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upcoming_meeting_reminder') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGroupLockSettings200ApplicationJSON1Telephony:
    telephony_regions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telephony_regions') }})
    third_party_audio: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('third_party_audio') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGroupLockSettings200ApplicationJSON1:
    email_notification: Optional[GetGroupLockSettings200ApplicationJSON1EmailNotification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_notification') }})
    in_meeting: Optional[GetGroupLockSettings200ApplicationJSON1InMeeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in_meeting') }})
    recording: Optional[GetGroupLockSettings200ApplicationJSON1Recording] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording') }})
    schedule_meeting: Optional[GetGroupLockSettings200ApplicationJSON1ScheduleMeeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule_meeting') }})
    telephony: Optional[GetGroupLockSettings200ApplicationJSON1Telephony] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telephony') }})
    
class GetGroupLockSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum(str, Enum):
    ENHANCED_ENCRYPTION = "enhanced_encryption"
    E2EE = "e2ee"


@dataclass_json
@dataclasses.dataclass
class GetGroupLockSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement:
    r"""GetGroupLockSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
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
class GetGroupLockSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings:
    r"""GetGroupLockSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
    Specify the settings to be applied if waiting room is enabled.
    """
    
    participants_to_place_in_waiting_room: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants_to_place_in_waiting_room') }})
    users_who_can_admit_participants_from_waiting_room: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users_who_can_admit_participants_from_waiting_room') }})
    whitelisted_domains_for_waiting_room: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('whitelisted_domains_for_waiting_room') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGroupLockSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity:
    auto_security: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_security') }})
    embed_password_in_join_link: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed_password_in_join_link') }})
    encryption_type: Optional[GetGroupLockSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryption_type') }})
    end_to_end_encrypted_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_to_end_encrypted_meetings') }})
    meeting_password: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_password') }})
    meeting_password_requirement: Optional[GetGroupLockSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_password_requirement') }})
    phone_password: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_password') }})
    pmi_password: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pmi_password') }})
    require_password_for_scheduled_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_scheduled_meeting') }})
    require_password_for_scheduled_webinar: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_scheduled_webinar') }})
    waiting_room: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_room') }})
    waiting_room_settings: Optional[GetGroupLockSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_room_settings') }})
    webinar_password: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webinar_password') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGroupLockSettings200ApplicationJSONMeetingWebinarSecuritySettings:
    meeting_security: Optional[GetGroupLockSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_security') }})
    

@dataclasses.dataclass
class GetGroupLockSettingsRequest:
    path_params: GetGroupLockSettingsPathParams = dataclasses.field()
    query_params: GetGroupLockSettingsQueryParams = dataclasses.field()
    security: GetGroupLockSettingsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetGroupLockSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_group_lock_settings_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
