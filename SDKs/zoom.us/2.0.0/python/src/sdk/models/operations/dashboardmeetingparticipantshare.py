import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class DashboardMeetingParticipantSharePathParams:
    meeting_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    
class DashboardMeetingParticipantShareTypeEnum(str, Enum):
    PAST = "past"
    PAST_ONE = "pastOne"
    LIVE = "live"


@dataclasses.dataclass
class DashboardMeetingParticipantShareQueryParams:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next_page_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    type: Optional[DashboardMeetingParticipantShareTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DashboardMeetingParticipantShareSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class DashboardMeetingParticipantShare200ApplicationJSONParticipantsDetails:
    content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_time') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time') }})
    

@dataclass_json
@dataclasses.dataclass
class DashboardMeetingParticipantShare200ApplicationJSONParticipants:
    details: Optional[list[DashboardMeetingParticipantShare200ApplicationJSONParticipantsDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    user_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_name') }})
    

@dataclass_json
@dataclasses.dataclass
class DashboardMeetingParticipantShare200ApplicationJSON:
    r"""DashboardMeetingParticipantShare200ApplicationJSON
    Pagination object.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_token') }})
    page_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_count') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    participants: Optional[list[DashboardMeetingParticipantShare200ApplicationJSONParticipants]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclasses.dataclass
class DashboardMeetingParticipantShareRequest:
    path_params: DashboardMeetingParticipantSharePathParams = dataclasses.field()
    query_params: DashboardMeetingParticipantShareQueryParams = dataclasses.field()
    security: DashboardMeetingParticipantShareSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DashboardMeetingParticipantShareResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    dashboard_meeting_participant_share_200_application_json_object: Optional[DashboardMeetingParticipantShare200ApplicationJSON] = dataclasses.field(default=None)
    
