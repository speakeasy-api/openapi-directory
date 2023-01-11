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
class DashboardMeetingParticipantsPathParams:
    meeting_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    
class DashboardMeetingParticipantsIncludeFieldsEnum(str, Enum):
    REGISTRANT_ID = "registrant_id"

class DashboardMeetingParticipantsTypeEnum(str, Enum):
    PAST = "past"
    PAST_ONE = "pastOne"
    LIVE = "live"


@dataclasses.dataclass
class DashboardMeetingParticipantsQueryParams:
    include_fields: Optional[DashboardMeetingParticipantsIncludeFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_fields', 'style': 'form', 'explode': True }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next_page_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    type: Optional[DashboardMeetingParticipantsTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DashboardMeetingParticipantsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class DashboardMeetingParticipants200ApplicationJSONParticipantsAudioQualityEnum(str, Enum):
    UNKNOWN = " "
    GOOD = "good"
    FAIR = "fair"
    POOR = "poor"
    BAD = "bad"

class DashboardMeetingParticipants200ApplicationJSONParticipantsNetworkTypeEnum(str, Enum):
    WIRED = "Wired"
    WIFI = "Wifi"
    PPP = "PPP"
    CELLULAR_3_G_AND_4_G_ = "Cellular (3G and 4G)"
    OTHERS = "Others"

class DashboardMeetingParticipants200ApplicationJSONParticipantsScreenShareQualityEnum(str, Enum):
    UNKNOWN = " "
    GOOD = "good"
    FAIR = "fair"
    POOR = "poor"
    BAD = "bad"

class DashboardMeetingParticipants200ApplicationJSONParticipantsStatusEnum(str, Enum):
    IN_MEETING = "in_meeting"
    IN_WAITING_ROOM = "in_waiting_room"

class DashboardMeetingParticipants200ApplicationJSONParticipantsVideoQualityEnum(str, Enum):
    UNKNOWN = " "
    GOOD = "good"
    FAIR = "fair"
    POOR = "poor"
    BAD = "bad"


@dataclass_json
@dataclasses.dataclass
class DashboardMeetingParticipants200ApplicationJSONParticipants:
    audio_quality: Optional[DashboardMeetingParticipants200ApplicationJSONParticipantsAudioQualityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_quality') }})
    camera: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('camera') }})
    connection_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_type') }})
    customer_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer_key') }})
    data_center: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_center') }})
    device: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    harddisk_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('harddisk_id') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    in_room_participants: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in_room_participants') }})
    ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_address') }})
    join_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('join_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    leave_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leave_reason') }})
    leave_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leave_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    mac_addr: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_addr') }})
    microphone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('microphone') }})
    network_type: Optional[DashboardMeetingParticipants200ApplicationJSONParticipantsNetworkTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_type') }})
    pc_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pc_name') }})
    recording: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording') }})
    registrant_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrant_id') }})
    screen_share_quality: Optional[DashboardMeetingParticipants200ApplicationJSONParticipantsScreenShareQualityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screen_share_quality') }})
    share_application: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('share_application') }})
    share_desktop: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('share_desktop') }})
    share_whiteboard: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('share_whiteboard') }})
    speaker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speaker') }})
    status: Optional[DashboardMeetingParticipants200ApplicationJSONParticipantsStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    user_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_name') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    video_quality: Optional[DashboardMeetingParticipants200ApplicationJSONParticipantsVideoQualityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video_quality') }})
    

@dataclass_json
@dataclasses.dataclass
class DashboardMeetingParticipants200ApplicationJSON:
    r"""DashboardMeetingParticipants200ApplicationJSON
    Pagination object.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_token') }})
    page_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_count') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    participants: Optional[list[DashboardMeetingParticipants200ApplicationJSONParticipants]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclasses.dataclass
class DashboardMeetingParticipantsRequest:
    path_params: DashboardMeetingParticipantsPathParams = dataclasses.field()
    query_params: DashboardMeetingParticipantsQueryParams = dataclasses.field()
    security: DashboardMeetingParticipantsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DashboardMeetingParticipantsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    dashboard_meeting_participants_200_application_json_object: Optional[DashboardMeetingParticipants200ApplicationJSON] = dataclasses.field(default=None)
    
