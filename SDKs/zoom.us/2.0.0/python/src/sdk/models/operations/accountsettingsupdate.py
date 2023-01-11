import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class AccountSettingsUpdatePathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    
class AccountSettingsUpdateOptionEnum(str, Enum):
    MEETING_AUTHENTICATION = "meeting_authentication"
    RECORDING_AUTHENTICATION = "recording_authentication"
    SECURITY = "security"
    MEETING_SECURITY = "meeting_security"


@dataclasses.dataclass
class AccountSettingsUpdateQueryParams:
    option: Optional[AccountSettingsUpdateOptionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'option', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsEmailNotification:
    r"""AccountSettingsUpdateApplicationJSONUpdateAccountSettingsEmailNotification
    Account Settings: Notification.
    """
    
    alternative_host_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_host_reminder') }})
    cancel_meeting_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancel_meeting_reminder') }})
    cloud_recording_avaliable_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloud_recording_avaliable_reminder') }})
    jbh_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jbh_reminder') }})
    low_host_count_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('low_host_count_reminder') }})
    schedule_for_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule_for_reminder') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsFeature:
    r"""AccountSettingsUpdateApplicationJSONUpdateAccountSettingsFeature
    Account Settings: Feature.
    """
    
    meeting_capacity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_capacity') }})
    
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingEntryExitChimeEnum(str, Enum):
    HOST = "host"
    ALL = "all"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_default: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_default') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingVirtualBackgroundSettings:
    r"""AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingVirtualBackgroundSettings
    Settings to manage virtual background.
    """
    
    allow_upload_custom: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_upload_custom') }})
    allow_videos: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_videos') }})
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    files: Optional[list[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingWhoCanShareScreenEnum(str, Enum):
    HOST = "host"
    ALL = "all"

class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum(str, Enum):
    HOST = "host"
    ALL = "all"


@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeeting:
    r"""AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeeting
    Account Settings: In Meeting.
    """
    
    alert_guest_join: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alert_guest_join') }})
    allow_live_streaming: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_live_streaming') }})
    allow_participants_to_rename: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_participants_to_rename') }})
    allow_show_zoom_windows: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_show_zoom_windows') }})
    annotation: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotation') }})
    anonymous_question_answer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anonymous_question_answer') }})
    attendee_on_hold: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attendee_on_hold') }})
    auto_answer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_answer') }})
    auto_saving_chat: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_saving_chat') }})
    breakout_room: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('breakout_room') }})
    chat: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chat') }})
    closed_caption: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed_caption') }})
    co_host: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('co_host') }})
    custom_data_center_regions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_data_center_regions') }})
    custom_live_streaming_service: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_live_streaming_service') }})
    custom_service_instructions: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_service_instructions') }})
    data_center_regions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_center_regions') }})
    dscp_audio: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dscp_audio') }})
    dscp_marking: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dscp_marking') }})
    dscp_video: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dscp_video') }})
    e2e_encryption: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('e2e_encryption') }})
    entry_exit_chime: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingEntryExitChimeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entry_exit_chime') }})
    far_end_camera_control: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('far_end_camera_control') }})
    feedback: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedback') }})
    file_transfer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_transfer') }})
    group_hd: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_hd') }})
    meeting_reactions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_reactions') }})
    original_audio: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_audio') }})
    p2p_connetion: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('p2p_connetion') }})
    p2p_ports: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('p2p_ports') }})
    polling: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polling') }})
    ports_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ports_range') }})
    post_meeting_feedback: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post_meeting_feedback') }})
    private_chat: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_chat') }})
    record_play_own_voice: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_play_own_voice') }})
    remote_control: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote_control') }})
    request_permission_to_unmute: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_permission_to_unmute') }})
    screen_sharing: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screen_sharing') }})
    sending_default_email_invites: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sending_default_email_invites') }})
    show_a_join_from_your_browser_link: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_a_join_from_your_browser_link') }})
    show_meeting_control_toolbar: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_meeting_control_toolbar') }})
    stereo_audio: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stereo_audio') }})
    use_html_format_email: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_html_format_email') }})
    virtual_background: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtual_background') }})
    virtual_background_settings: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingVirtualBackgroundSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtual_background_settings') }})
    watermark: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watermark') }})
    webinar_question_answer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webinar_question_answer') }})
    whiteboard: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('whiteboard') }})
    who_can_share_screen: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingWhoCanShareScreenEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('who_can_share_screen') }})
    who_can_share_screen_when_someone_is_sharing: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('who_can_share_screen_when_someone_is_sharing') }})
    workplace_by_facebook: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workplace_by_facebook') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsIntegration:
    r"""AccountSettingsUpdateApplicationJSONUpdateAccountSettingsIntegration
    Account Settings: Integration.
    """
    
    box: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('box') }})
    dropbox: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dropbox') }})
    google_calendar: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('google_calendar') }})
    google_drive: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('google_drive') }})
    kubi: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubi') }})
    microsoft_one_drive: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('microsoft_one_drive') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsProfileRecordingStorageLocation:
    allowed_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_values') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsProfile:
    recording_storage_location: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsProfileRecordingStorageLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_storage_location') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingArchiveSettings:
    audio_file: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_file') }})
    cc_transcript_file: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cc_transcript_file') }})
    chat_file: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chat_file') }})
    chat_with_sender_email: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chat_with_sender_email') }})
    video_file: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video_file') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingArchive:
    r"""AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingArchive
    [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted with archiving solution access by the Zoom support team.
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    settings: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingArchiveSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingAutoRecordingEnum(str, Enum):
    LOCAL = "local"
    CLOUD = "cloud"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingIPAddressAccessControl:
    r"""AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingIPAddressAccessControl
    Setting to allow cloud recording access only from specific IP address ranges.
    
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    ip_addresses_or_ranges: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_addresses_or_ranges') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingRecordingPasswordRequirement:
    r"""AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingRecordingPasswordRequirement
    This object represents the minimum password requirements set for recordings via Account Recording Settings.
    """
    
    have_letter: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_letter') }})
    have_number: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_number') }})
    have_special_character: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_special_character') }})
    length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    only_allow_numeric: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('only_allow_numeric') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecording:
    r"""AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecording
    Account Settings: Recording.
    """
    
    account_user_access_recording: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_user_access_recording') }})
    allow_recovery_deleted_cloud_recordings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_recovery_deleted_cloud_recordings') }})
    archive: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingArchive] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archive') }})
    auto_delete_cmr: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_delete_cmr') }})
    auto_delete_cmr_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_delete_cmr_days') }})
    auto_recording: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingAutoRecordingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_recording') }})
    cloud_recording: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloud_recording') }})
    cloud_recording_download: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloud_recording_download') }})
    cloud_recording_download_host: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloud_recording_download_host') }})
    host_delete_cloud_recording: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host_delete_cloud_recording') }})
    ip_address_access_control: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingIPAddressAccessControl] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_address_access_control') }})
    local_recording: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('local_recording') }})
    prevent_host_access_recording: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prevent_host_access_recording') }})
    record_audio_file: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_audio_file') }})
    record_gallery_view: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_gallery_view') }})
    record_speaker_view: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_speaker_view') }})
    recording_audio_transcript: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_audio_transcript') }})
    recording_disclaimer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_disclaimer') }})
    recording_password_requirement: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecordingRecordingPasswordRequirement] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_password_requirement') }})
    required_password_for_existing_cloud_recordings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_password_for_existing_cloud_recordings') }})
    save_chat_text: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('save_chat_text') }})
    show_timestamp: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_timestamp') }})
    
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingAudioTypeEnum(str, Enum):
    BOTH = "both"
    TELEPHONY = "telephony"
    VOIP = "voip"
    THIRD_PARTY = "thirdParty"


@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement:
    r"""AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement
    Account wide meeting/webinar [password requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
    """
    
    consecutive_characters_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consecutive_characters_length') }})
    have_letter: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_letter') }})
    have_number: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_number') }})
    have_special_character: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_special_character') }})
    have_upper_and_lower_characters: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_upper_and_lower_characters') }})
    length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    only_allow_numeric: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('only_allow_numeric') }})
    weak_enhance_detection: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weak_enhance_detection') }})
    
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum(str, Enum):
    JBH_ONLY = "jbh_only"
    ALL = "all"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeeting:
    r"""AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeeting
    Account Settings: Schedule Meeting.
    """
    
    audio_type: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingAudioTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_type') }})
    enforce_login: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_login') }})
    enforce_login_domains: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_login_domains') }})
    enforce_login_with_domains: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_login_with_domains') }})
    force_pmi_jbh_password: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('force_pmi_jbh_password') }})
    host_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host_video') }})
    join_before_host: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('join_before_host') }})
    meeting_password_requirement: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_password_requirement') }})
    not_store_meeting_topic: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('not_store_meeting_topic') }})
    participant_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participant_video') }})
    personal_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personal_meeting') }})
    require_password_for_instant_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_instant_meetings') }})
    require_password_for_pmi_meetings: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_pmi_meetings') }})
    require_password_for_scheduled_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_scheduled_meetings') }})
    require_password_for_scheduling_new_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_scheduling_new_meetings') }})
    use_pmi_for_instant_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_pmi_for_instant_meetings') }})
    use_pmi_for_scheduled_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_pmi_for_scheduled_meetings') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecurityPasswordRequirement:
    r"""AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecurityPasswordRequirement
    This object refers to the [enhanced password rules](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) that allows Zoom account admins and owners to apply extra requiremets to the users' Zoom login password. 
    """
    
    consecutive_characters_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consecutive_characters_length') }})
    have_special_character: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_special_character') }})
    minimum_password_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum_password_length') }})
    weak_enhance_detection: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weak_enhance_detection') }})
    
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum(str, Enum):
    ALL = "all"
    GROUP = "group"
    ROLE = "role"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecurity:
    r"""AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecurity
    [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
    """
    
    admin_change_name_pic: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin_change_name_pic') }})
    hide_billing_info: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hide_billing_info') }})
    import_photos_from_devices: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('import_photos_from_devices') }})
    password_requirement: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecurityPasswordRequirement] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password_requirement') }})
    sign_again_period_for_inactivity_on_client: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sign_again_period_for_inactivity_on_client') }})
    sign_again_period_for_inactivity_on_web: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sign_again_period_for_inactivity_on_web') }})
    sign_in_with_two_factor_auth: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sign_in_with_two_factor_auth') }})
    sign_in_with_two_factor_auth_groups: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sign_in_with_two_factor_auth_groups') }})
    sign_in_with_two_factor_auth_roles: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sign_in_with_two_factor_auth_roles') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsTelephonyTelephonyRegions:
    r"""AccountSettingsUpdateApplicationJSONUpdateAccountSettingsTelephonyTelephonyRegions
    Indicates where most of the participants call into or call from duriing a meeting.
    """
    
    selection_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selection_values') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsTelephony:
    r"""AccountSettingsUpdateApplicationJSONUpdateAccountSettingsTelephony
    Account Settings Update: Telephony.
    """
    
    audio_conference_info: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_conference_info') }})
    telephony_regions: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsTelephonyTelephonyRegions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telephony_regions') }})
    third_party_audio: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('third_party_audio') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsTsp:
    r"""AccountSettingsUpdateApplicationJSONUpdateAccountSettingsTsp
    Account Settings: TSP.
    """
    
    call_out: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_out') }})
    call_out_countries: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_out_countries') }})
    display_toll_free_numbers: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_toll_free_numbers') }})
    show_international_numbers_link: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_international_numbers_link') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateApplicationJSONUpdateAccountSettingsZoomRooms:
    r"""AccountSettingsUpdateApplicationJSONUpdateAccountSettingsZoomRooms
    Account Settings: Zoom Rooms.
    """
    
    auto_start_stop_scheduled_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_start_stop_scheduled_meetings') }})
    cmr_for_instant_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cmr_for_instant_meeting') }})
    force_private_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('force_private_meeting') }})
    hide_host_information: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hide_host_information') }})
    list_meetings_with_calendar: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('list_meetings_with_calendar') }})
    start_airplay_manually: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_airplay_manually') }})
    ultrasonic: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ultrasonic') }})
    upcoming_meeting_alert: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upcoming_meeting_alert') }})
    weekly_system_restart: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekly_system_restart') }})
    zr_post_meeting_feedback: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zr_post_meeting_feedback') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateApplicationJSONUpdateAccountSettings:
    email_notification: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsEmailNotification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_notification') }})
    feature: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsFeature] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feature') }})
    in_meeting: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsInMeeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in_meeting') }})
    integration: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsIntegration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integration') }})
    profile: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    recording: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsRecording] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording') }})
    schedule_meeting: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsScheduleMeeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule_meeting') }})
    security: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsSecurity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('security') }})
    telephony: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsTelephony] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telephony') }})
    tsp: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsTsp] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tsp') }})
    zoom_rooms: Optional[AccountSettingsUpdateApplicationJSONUpdateAccountSettingsZoomRooms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zoom_rooms') }})
    
class AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum(str, Enum):
    ENHANCED_ENCRYPTION = "enhanced_encryption"
    E2EE = "e2ee"


@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement:
    r"""AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
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
class AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings:
    r"""AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
    Specify the settings to be applied if waiting room is enabled.
    """
    
    participants_to_place_in_waiting_room: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants_to_place_in_waiting_room') }})
    users_who_can_admit_participants_from_waiting_room: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users_who_can_admit_participants_from_waiting_room') }})
    whitelisted_domains_for_waiting_room: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('whitelisted_domains_for_waiting_room') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity:
    auto_security: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_security') }})
    embed_password_in_join_link: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed_password_in_join_link') }})
    encryption_type: Optional[AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryption_type') }})
    end_to_end_encrypted_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_to_end_encrypted_meetings') }})
    meeting_password: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_password') }})
    meeting_password_requirement: Optional[AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_password_requirement') }})
    phone_password: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_password') }})
    pmi_password: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pmi_password') }})
    require_password_for_scheduled_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_scheduled_meeting') }})
    require_password_for_scheduled_webinar: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_scheduled_webinar') }})
    waiting_room: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_room') }})
    waiting_room_settings: Optional[AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_room_settings') }})
    webinar_password: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webinar_password') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettings:
    meeting_security: Optional[AccountSettingsUpdateApplicationJSONMeetingWebinarSecuritySettingsMeetingSecurity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_security') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification:
    r"""AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification
    Account Settings: Notification.
    """
    
    alternative_host_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_host_reminder') }})
    cancel_meeting_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancel_meeting_reminder') }})
    cloud_recording_avaliable_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloud_recording_avaliable_reminder') }})
    jbh_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jbh_reminder') }})
    low_host_count_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('low_host_count_reminder') }})
    schedule_for_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule_for_reminder') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsFeature:
    r"""AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsFeature
    Account Settings: Feature.
    """
    
    meeting_capacity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_capacity') }})
    
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingEntryExitChimeEnum(str, Enum):
    HOST = "host"
    ALL = "all"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_default: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_default') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings:
    r"""AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings
    Settings to manage virtual background.
    """
    
    allow_upload_custom: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_upload_custom') }})
    allow_videos: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_videos') }})
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    files: Optional[list[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenEnum(str, Enum):
    HOST = "host"
    ALL = "all"

class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum(str, Enum):
    HOST = "host"
    ALL = "all"


@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting:
    r"""AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting
    Account Settings: In Meeting.
    """
    
    alert_guest_join: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alert_guest_join') }})
    allow_live_streaming: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_live_streaming') }})
    allow_participants_to_rename: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_participants_to_rename') }})
    allow_show_zoom_windows: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_show_zoom_windows') }})
    annotation: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotation') }})
    anonymous_question_answer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anonymous_question_answer') }})
    attendee_on_hold: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attendee_on_hold') }})
    auto_answer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_answer') }})
    auto_saving_chat: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_saving_chat') }})
    breakout_room: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('breakout_room') }})
    chat: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chat') }})
    closed_caption: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed_caption') }})
    co_host: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('co_host') }})
    custom_data_center_regions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_data_center_regions') }})
    custom_live_streaming_service: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_live_streaming_service') }})
    custom_service_instructions: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_service_instructions') }})
    data_center_regions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_center_regions') }})
    dscp_audio: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dscp_audio') }})
    dscp_marking: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dscp_marking') }})
    dscp_video: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dscp_video') }})
    e2e_encryption: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('e2e_encryption') }})
    entry_exit_chime: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingEntryExitChimeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entry_exit_chime') }})
    far_end_camera_control: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('far_end_camera_control') }})
    feedback: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedback') }})
    file_transfer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_transfer') }})
    group_hd: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_hd') }})
    meeting_reactions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_reactions') }})
    original_audio: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_audio') }})
    p2p_connetion: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('p2p_connetion') }})
    p2p_ports: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('p2p_ports') }})
    polling: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polling') }})
    ports_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ports_range') }})
    post_meeting_feedback: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post_meeting_feedback') }})
    private_chat: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_chat') }})
    record_play_own_voice: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_play_own_voice') }})
    remote_control: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote_control') }})
    request_permission_to_unmute: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_permission_to_unmute') }})
    screen_sharing: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screen_sharing') }})
    sending_default_email_invites: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sending_default_email_invites') }})
    show_a_join_from_your_browser_link: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_a_join_from_your_browser_link') }})
    show_meeting_control_toolbar: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_meeting_control_toolbar') }})
    stereo_audio: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stereo_audio') }})
    use_html_format_email: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_html_format_email') }})
    virtual_background: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtual_background') }})
    virtual_background_settings: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtual_background_settings') }})
    watermark: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watermark') }})
    webinar_question_answer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webinar_question_answer') }})
    whiteboard: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('whiteboard') }})
    who_can_share_screen: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('who_can_share_screen') }})
    who_can_share_screen_when_someone_is_sharing: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('who_can_share_screen_when_someone_is_sharing') }})
    workplace_by_facebook: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workplace_by_facebook') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration:
    r"""AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration
    Account Settings: Integration.
    """
    
    box: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('box') }})
    dropbox: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dropbox') }})
    google_calendar: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('google_calendar') }})
    google_drive: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('google_drive') }})
    kubi: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubi') }})
    microsoft_one_drive: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('microsoft_one_drive') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfileRecordingStorageLocation:
    allowed_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_values') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfile:
    recording_storage_location: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfileRecordingStorageLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_storage_location') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings:
    audio_file: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_file') }})
    cc_transcript_file: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cc_transcript_file') }})
    chat_file: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chat_file') }})
    chat_with_sender_email: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chat_with_sender_email') }})
    video_file: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video_file') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive:
    r"""AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive
    [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted with archiving solution access by the Zoom support team.
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    settings: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingAutoRecordingEnum(str, Enum):
    LOCAL = "local"
    CLOUD = "cloud"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingIPAddressAccessControl:
    r"""AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingIPAddressAccessControl
    Setting to allow cloud recording access only from specific IP address ranges.
    
    """
    
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    ip_addresses_or_ranges: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_addresses_or_ranges') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement:
    r"""AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement
    This object represents the minimum password requirements set for recordings via Account Recording Settings.
    """
    
    have_letter: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_letter') }})
    have_number: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_number') }})
    have_special_character: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_special_character') }})
    length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    only_allow_numeric: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('only_allow_numeric') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording:
    r"""AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording
    Account Settings: Recording.
    """
    
    account_user_access_recording: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_user_access_recording') }})
    allow_recovery_deleted_cloud_recordings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_recovery_deleted_cloud_recordings') }})
    archive: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archive') }})
    auto_delete_cmr: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_delete_cmr') }})
    auto_delete_cmr_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_delete_cmr_days') }})
    auto_recording: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingAutoRecordingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_recording') }})
    cloud_recording: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloud_recording') }})
    cloud_recording_download: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloud_recording_download') }})
    cloud_recording_download_host: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloud_recording_download_host') }})
    host_delete_cloud_recording: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host_delete_cloud_recording') }})
    ip_address_access_control: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingIPAddressAccessControl] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_address_access_control') }})
    local_recording: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('local_recording') }})
    prevent_host_access_recording: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prevent_host_access_recording') }})
    record_audio_file: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_audio_file') }})
    record_gallery_view: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_gallery_view') }})
    record_speaker_view: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_speaker_view') }})
    recording_audio_transcript: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_audio_transcript') }})
    recording_disclaimer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_disclaimer') }})
    recording_password_requirement: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_password_requirement') }})
    required_password_for_existing_cloud_recordings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_password_for_existing_cloud_recordings') }})
    save_chat_text: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('save_chat_text') }})
    show_timestamp: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_timestamp') }})
    
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnum(str, Enum):
    BOTH = "both"
    TELEPHONY = "telephony"
    VOIP = "voip"
    THIRD_PARTY = "thirdParty"


@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement:
    r"""AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement
    Account wide meeting/webinar [password requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
    """
    
    consecutive_characters_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consecutive_characters_length') }})
    have_letter: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_letter') }})
    have_number: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_number') }})
    have_special_character: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_special_character') }})
    have_upper_and_lower_characters: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_upper_and_lower_characters') }})
    length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    only_allow_numeric: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('only_allow_numeric') }})
    weak_enhance_detection: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weak_enhance_detection') }})
    
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum(str, Enum):
    JBH_ONLY = "jbh_only"
    ALL = "all"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting:
    r"""AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting
    Account Settings: Schedule Meeting.
    """
    
    audio_type: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingAudioTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_type') }})
    enforce_login: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_login') }})
    enforce_login_domains: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_login_domains') }})
    enforce_login_with_domains: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_login_with_domains') }})
    force_pmi_jbh_password: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('force_pmi_jbh_password') }})
    host_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host_video') }})
    join_before_host: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('join_before_host') }})
    meeting_password_requirement: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingMeetingPasswordRequirement] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_password_requirement') }})
    not_store_meeting_topic: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('not_store_meeting_topic') }})
    participant_video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participant_video') }})
    personal_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personal_meeting') }})
    require_password_for_instant_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_instant_meetings') }})
    require_password_for_pmi_meetings: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeetingRequirePasswordForPmiMeetingsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_pmi_meetings') }})
    require_password_for_scheduled_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_scheduled_meetings') }})
    require_password_for_scheduling_new_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_scheduling_new_meetings') }})
    use_pmi_for_instant_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_pmi_for_instant_meetings') }})
    use_pmi_for_scheduled_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_pmi_for_scheduled_meetings') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement:
    r"""AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement
    This object refers to the [enhanced password rules](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) that allows Zoom account admins and owners to apply extra requiremets to the users' Zoom login password. 
    """
    
    consecutive_characters_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consecutive_characters_length') }})
    have_special_character: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('have_special_character') }})
    minimum_password_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum_password_length') }})
    weak_enhance_detection: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weak_enhance_detection') }})
    
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum(str, Enum):
    ALL = "all"
    GROUP = "group"
    ROLE = "role"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity:
    r"""AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity
    [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
    """
    
    admin_change_name_pic: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin_change_name_pic') }})
    hide_billing_info: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hide_billing_info') }})
    import_photos_from_devices: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('import_photos_from_devices') }})
    password_requirement: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurityPasswordRequirement] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password_requirement') }})
    sign_again_period_for_inactivity_on_client: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sign_again_period_for_inactivity_on_client') }})
    sign_again_period_for_inactivity_on_web: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sign_again_period_for_inactivity_on_web') }})
    sign_in_with_two_factor_auth: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecuritySignInWithTwoFactorAuthEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sign_in_with_two_factor_auth') }})
    sign_in_with_two_factor_auth_groups: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sign_in_with_two_factor_auth_groups') }})
    sign_in_with_two_factor_auth_roles: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sign_in_with_two_factor_auth_roles') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephonyTelephonyRegions:
    r"""AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephonyTelephonyRegions
    Indicates where most of the participants call into or call from duriing a meeting.
    """
    
    selection_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selection_values') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony:
    r"""AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony
    Account Settings Update: Telephony.
    """
    
    audio_conference_info: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_conference_info') }})
    telephony_regions: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephonyTelephonyRegions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telephony_regions') }})
    third_party_audio: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('third_party_audio') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp:
    r"""AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp
    Account Settings: TSP.
    """
    
    call_out: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_out') }})
    call_out_countries: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_out_countries') }})
    display_toll_free_numbers: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_toll_free_numbers') }})
    show_international_numbers_link: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_international_numbers_link') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms:
    r"""AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms
    Account Settings: Zoom Rooms.
    """
    
    auto_start_stop_scheduled_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_start_stop_scheduled_meetings') }})
    cmr_for_instant_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cmr_for_instant_meeting') }})
    force_private_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('force_private_meeting') }})
    hide_host_information: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hide_host_information') }})
    list_meetings_with_calendar: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('list_meetings_with_calendar') }})
    start_airplay_manually: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_airplay_manually') }})
    ultrasonic: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ultrasonic') }})
    upcoming_meeting_alert: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upcoming_meeting_alert') }})
    weekly_system_restart: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekly_system_restart') }})
    zr_post_meeting_feedback: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zr_post_meeting_feedback') }})
    

@dataclasses.dataclass
class AccountSettingsUpdateMultipartFormDataUpdateAccountSettings:
    email_notification: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsEmailNotification] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'email_notification', 'json': True }})
    feature: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsFeature] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'feature', 'json': True }})
    in_meeting: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'in_meeting', 'json': True }})
    integration: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'integration', 'json': True }})
    profile: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfile] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'profile', 'json': True }})
    recording: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'recording', 'json': True }})
    schedule_meeting: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsScheduleMeeting] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'schedule_meeting', 'json': True }})
    security: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsSecurity] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'security', 'json': True }})
    telephony: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'telephony', 'json': True }})
    tsp: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTsp] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'tsp', 'json': True }})
    zoom_rooms: Optional[AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsZoomRooms] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'zoom_rooms', 'json': True }})
    
class AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum(str, Enum):
    ENHANCED_ENCRYPTION = "enhanced_encryption"
    E2EE = "e2ee"


@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement:
    r"""AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement
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
class AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings:
    r"""AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings
    Specify the settings to be applied if waiting room is enabled.
    """
    
    participants_to_place_in_waiting_room: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants_to_place_in_waiting_room') }})
    users_who_can_admit_participants_from_waiting_room: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users_who_can_admit_participants_from_waiting_room') }})
    whitelisted_domains_for_waiting_room: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('whitelisted_domains_for_waiting_room') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity:
    auto_security: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_security') }})
    embed_password_in_join_link: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed_password_in_join_link') }})
    encryption_type: Optional[AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityEncryptionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryption_type') }})
    end_to_end_encrypted_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_to_end_encrypted_meetings') }})
    meeting_password: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_password') }})
    meeting_password_requirement: Optional[AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityMeetingPasswordRequirement] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_password_requirement') }})
    phone_password: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_password') }})
    pmi_password: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pmi_password') }})
    require_password_for_scheduled_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_scheduled_meeting') }})
    require_password_for_scheduled_webinar: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_password_for_scheduled_webinar') }})
    waiting_room: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_room') }})
    waiting_room_settings: Optional[AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurityWaitingRoomSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_room_settings') }})
    webinar_password: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webinar_password') }})
    

@dataclasses.dataclass
class AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings:
    meeting_security: Optional[AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'meeting_security', 'json': True }})
    

@dataclasses.dataclass
class AccountSettingsUpdateRequests:
    one_of: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    one_of1: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AccountSettingsUpdateRequest:
    path_params: AccountSettingsUpdatePathParams = dataclasses.field()
    query_params: AccountSettingsUpdateQueryParams = dataclasses.field()
    request: AccountSettingsUpdateRequests = dataclasses.field()
    

@dataclasses.dataclass
class AccountSettingsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
