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
class GetAccountCloudRecordingPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountCloudRecordingQueryParams:
    from_: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next_page_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    to: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAccountCloudRecordingSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesFileTypeEnum(str, Enum):
    MP4 = "MP4"
    M4_A = "M4A"
    CHAT = "CHAT"
    TRANSCRIPT = "TRANSCRIPT"
    CC = "CC"
    CSV = "CSV"
    TB = "TB"

class GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnum(str, Enum):
    SHARED_SCREEN_WITH_SPEAKER_VIEW_CC_ = "shared_screen_with_speaker_view(CC)"
    SHARED_SCREEN_WITH_SPEAKER_VIEW = "shared_screen_with_speaker_view"
    SHARED_SCREEN_WITH_GALLERY_VIEW = "shared_screen_with_gallery_view"
    ACTIVE_SPEAKER = "active_speaker"
    GALLERY_VIEW = "gallery_view"
    SHARED_SCREEN = "shared_screen"
    AUDIO_ONLY = "audio_only"
    AUDIO_TRANSCRIPT = "audio_transcript"
    CHAT_FILE = "chat_file"
    POLL = "poll"
    HOST_VIDEO = "host_video"
    CLOSED_CAPTION = "closed_caption"
    TIMELINE = "timeline"
    THUMBNAIL = "thumbnail"

class GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesStatusEnum(str, Enum):
    COMPLETED = "completed"
    PROCESSING = "processing"


@dataclass_json
@dataclasses.dataclass
class GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFiles:
    download_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_url') }})
    file_size: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_size') }})
    file_type: Optional[GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesFileTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_type') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    meeting_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meeting_id') }})
    play_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('play_url') }})
    recording_end: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_end') }})
    recording_start: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_start') }})
    recording_type: Optional[GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_type') }})
    status: Optional[GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAccountCloudRecording200ApplicationJSONMeetings:
    duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    host_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host_id') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    recording_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_count') }})
    recording_files: Optional[list[GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFiles]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_files') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    topic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    total_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_size') }})
    uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAccountCloudRecording200ApplicationJSON:
    from_: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    meetings: Optional[list[GetAccountCloudRecording200ApplicationJSONMeetings]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meetings') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_token') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    to: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclasses.dataclass
class GetAccountCloudRecordingRequest:
    path_params: GetAccountCloudRecordingPathParams = dataclasses.field()
    query_params: GetAccountCloudRecordingQueryParams = dataclasses.field()
    security: GetAccountCloudRecordingSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountCloudRecordingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_account_cloud_recording_200_application_json_object: Optional[GetAccountCloudRecording200ApplicationJSON] = dataclasses.field(default=None)
    
