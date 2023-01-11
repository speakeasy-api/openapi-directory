import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetGroupSettingsPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    
class GetGroupSettingsOptionEnum(str, Enum):
    MEETING_AUTHENTICATION = "meeting_authentication"
    RECORDING_AUTHENTICATION = "recording_authentication"


@dataclasses.dataclass
class GetGroupSettingsQueryParams:
    custom_query_fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'custom_query_fields', 'style': 'form', 'explode': True }})
    option: Optional[GetGroupSettingsOptionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'option', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGroupSettingsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetGroupSettings200ApplicationJSON1EmailNotification:
    alternative_host_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_host_reminder') }})
    cancel_meeting_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancel_meeting_reminder') }})
    cloud_recording_available_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloud_recording_available_reminder') }})
    jbh_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jbh_reminder') }})
    schedule_for_host_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule_for_host_reminder') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGroupSettings200ApplicationJSON1InMeetingVirtualBackgroundSettingsFiles:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_default: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_default') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGroupSettings200ApplicationJSON1InMeetingVirtualBackgroundSettings:
    r"""GetGroupSettings200ApplicationJSON1InMeetingVirtualBackgroundSettings
    Settings to manage virtual background.
    """
    
    allow_upload_custom: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_upload_custom') }})
    allow_videos: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_videos') }})
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    files: Optional[list[GetGroupSettings200ApplicationJSON1InMeetingVirtualBackgroundSettingsFiles]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    
class GetGroupSettings200ApplicationJSON1InMeetingWhoCanShareScreenEnum(str, Enum):
    HOST = "host"
    ALL = "all"

class GetGroupSettings200ApplicationJSON1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum(str, Enum):
    HOST = "host"
    ALL = "all"


@dataclass_json
@dataclasses.dataclass
class GetGroupSettings200ApplicationJSON1InMeeting:
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
    data_center_regions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_center_regions') }})
    e2e_encryption: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('e2e_encryption') }})
    entry_exit_chime: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entry_exit_chime') }})
    far_end_camera_control: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('far_end_camera_control') }})
    feedback: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedback') }})
    file_transfer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_transfer') }})
    group_hd: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_hd') }})
    non_verbal_feedback: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_verbal_feedback') }})
    only_host_view_device_list: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('only_host_view_device_list') }})
    original_audio: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_audio') }})
    polling: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polling') }})
    post_meeting_feedback: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post_meeting_feedback') }})
    private_chat: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_chat') }})
    record_play_own_voice: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_play_own_voice') }})
    remote_control: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote_control') }})
    remote_support: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote_support') }})
    request_permission_to_unmute: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_permission_to_unmute') }})
    screen_sharing: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screen_sharing') }})
    sending_default_email_invites: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sending_default_email_invites') }})
    show_browser_join_link: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_browser_join_link') }})
    show_device_list: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_device_list') }})
    show_meeting_control_toolbar: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_meeting_control_toolbar') }})
    stereo_audio: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stereo_audio') }})
    use_html_format_email: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_html_format_email') }})
    virtual_background: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtual_background') }})
    virtual_background_settings: Optional[GetGroupSettings200ApplicationJSON1InMeetingVirtualBackgroundSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtual_background_settings') }})
    waiting_room: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_room') }})
    whiteboard: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('whiteboard') }})
    who_can_share_screen: Optional[GetGroupSettings200ApplicationJSON1InMeetingWhoCanShareScreenEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('who_can_share_screen') }})
    who_can_share_screen_when_someone_is_sharing: Optional[GetGroupSettings200ApplicationJSON1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('who_can_share_screen_when_someone_is_sharing') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGroupSettings200ApplicationJSON1ProfileRecordingStorageLocation:
    allowed_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_values') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGroupSettings200ApplicationJSON1Profile:
    recording_storage_location: Optional[GetGroupSettings200ApplicationJSON1ProfileRecordingStorageLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_storage_location') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGroupSettings200ApplicationJSON1RecordingArchiveSettings:
    audio_file: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_file') }})
    cc_transcript_file: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cc_transcript_file') }})
    chat_file: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chat_file') }})
    chat_with_sender_email: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chat_with_sender_email') }})
    video_file: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video_file') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGroupSettings200ApplicationJSON1RecordingArchive:
    r"""GetGroupSettings200ApplicationJSON1RecordingArchive
    [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted archiving solution access by the Zoom Support team.
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    settings: Optional[GetGroupSettings200ApplicationJSON1RecordingArchiveSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGroupSettings200ApplicationJSON1RecordingIPAddressAccessControl:
    r"""GetGroupSettings200ApplicationJSON1RecordingIPAddressAccessControl
    Setting to allow cloud recording access only from specific IP address ranges.
    
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    ip_addresses_or_ranges: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_addresses_or_ranges') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGroupSettings200ApplicationJSON1Recording:
    account_user_access_recording: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_user_access_recording') }})
    archive: Optional[GetGroupSettings200ApplicationJSON1RecordingArchive] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archive') }})
    auto_recording: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_recording') }})
    cloud_recording: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloud_recording') }})
    cloud_recording_download: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloud_recording_download') }})
    cloud_recording_download_host: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloud_recording_download_host') }})
    host_delete_cloud_recording: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host_delete_cloud_recording') }})
    ip_address_access_control: Optional[GetGroupSettings200ApplicationJSON1RecordingIPAddressAccessControl] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_address_access_control') }})
    local_recording: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('local_recording') }})
    prevent_host_access_recording: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prevent_host_access_recording') }})
    record_audio_file: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_audio_file') }})
    record_gallery_view: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_gallery_view') }})
    record_speaker_view: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_speaker_view') }})
    recording_audio_transcript: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_audio_transcript') }})
    save_chat_text: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('save_chat_text') }})
    show_timestamp: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_timestamp') }})
    
class GetGroupSettings200ApplicationJSON1ScheduleMeetingRequirePasswordForPmiMeetingsEnum(str, Enum):
    ALL = "all"
    JBH_ONLY = "jbh_only"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class GetGroupSettings200ApplicationJSON1ScheduleMeeting:
    audio_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_type') }})
    embed_password_in_join_link: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed_password_in_join_link') }})
    force_pmi_jbh_password: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('force_pmi_jbh_password') }})
    host_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host_video') }})
    join_before_host: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('join_before_host') }})
    mute_upon_entry: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mute_upon_entry') }})
    participant_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participant_video') }})
    personal_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personal_meeting') }})
    pstn_password_protected: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pstn_password_protected') }})
    require_password_for_instant_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_instant_meetings') }})
    require_password_for_pmi_meetings: Optional[GetGroupSettings200ApplicationJSON1ScheduleMeetingRequirePasswordForPmiMeetingsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_pmi_meetings') }})
    require_password_for_scheduled_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_scheduled_meetings') }})
    require_password_for_scheduling_new_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_scheduling_new_meetings') }})
    upcoming_meeting_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upcoming_meeting_reminder') }})
    use_pmi_for_instant_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_pmi_for_instant_meetings') }})
    use_pmi_for_schedule_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_pmi_for_schedule_meetings') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGroupSettings200ApplicationJSON1TelephonyTelephonyRegions:
    r"""GetGroupSettings200ApplicationJSON1TelephonyTelephonyRegions
    Indicates where most of the participants call into or call from duriing a meeting.
    """
    
    selection_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selection_values') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGroupSettings200ApplicationJSON1Telephony:
    audio_conference_info: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_conference_info') }})
    telephony_regions: Optional[GetGroupSettings200ApplicationJSON1TelephonyTelephonyRegions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telephony_regions') }})
    third_party_audio: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('third_party_audio') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGroupSettings200ApplicationJSON1:
    email_notification: Optional[GetGroupSettings200ApplicationJSON1EmailNotification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_notification') }})
    in_meeting: Optional[GetGroupSettings200ApplicationJSON1InMeeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in_meeting') }})
    profile: Optional[GetGroupSettings200ApplicationJSON1Profile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    recording: Optional[GetGroupSettings200ApplicationJSON1Recording] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording') }})
    schedule_meeting: Optional[GetGroupSettings200ApplicationJSON1ScheduleMeeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule_meeting') }})
    telephony: Optional[GetGroupSettings200ApplicationJSON1Telephony] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telephony') }})
    
class GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum(str, Enum):
    ENHANCED_ENCRYPTION = "enhanced_encryption"
    E2EE = "e2ee"


@dataclass_json
@dataclasses.dataclass
class GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement:
    r"""GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
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
class GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings:
    r"""GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
    Specify the settings to be applied if waiting room is enabled.
    """
    
    participants_to_place_in_waiting_room: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants_to_place_in_waiting_room') }})
    users_who_can_admit_participants_from_waiting_room: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users_who_can_admit_participants_from_waiting_room') }})
    whitelisted_domains_for_waiting_room: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('whitelisted_domains_for_waiting_room') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity:
    auto_security: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_security') }})
    embed_password_in_join_link: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed_password_in_join_link') }})
    encryption_type: Optional[GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryption_type') }})
    end_to_end_encrypted_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_to_end_encrypted_meetings') }})
    meeting_password: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_password') }})
    meeting_password_requirement: Optional[GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_password_requirement') }})
    phone_password: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_password') }})
    pmi_password: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pmi_password') }})
    require_password_for_scheduled_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_scheduled_meeting') }})
    require_password_for_scheduled_webinar: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_scheduled_webinar') }})
    waiting_room: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_room') }})
    waiting_room_settings: Optional[GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_room_settings') }})
    webinar_password: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webinar_password') }})
    

@dataclass_json
@dataclasses.dataclass
class GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettings:
    meeting_security: Optional[GetGroupSettings200ApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_security') }})
    

@dataclasses.dataclass
class GetGroupSettingsRequest:
    path_params: GetGroupSettingsPathParams = dataclasses.field()
    query_params: GetGroupSettingsQueryParams = dataclasses.field()
    security: GetGroupSettingsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetGroupSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_group_settings_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
