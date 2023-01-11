import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PastMeetingParticipantsPathParams:
    meeting_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingUUID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PastMeetingParticipantsQueryParams:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next_page_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PastMeetingParticipantsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class PastMeetingParticipants200ApplicationJSONParticipants:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    user_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_email') }})
    

@dataclass_json
@dataclasses.dataclass
class PastMeetingParticipants200ApplicationJSON:
    r"""PastMeetingParticipants200ApplicationJSON
    Pagination object.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_token') }})
    page_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_count') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    participants: Optional[list[PastMeetingParticipants200ApplicationJSONParticipants]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclasses.dataclass
class PastMeetingParticipantsRequest:
    path_params: PastMeetingParticipantsPathParams = dataclasses.field()
    query_params: PastMeetingParticipantsQueryParams = dataclasses.field()
    security: PastMeetingParticipantsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PastMeetingParticipantsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    past_meeting_participants_200_application_json_object: Optional[PastMeetingParticipants200ApplicationJSON] = dataclasses.field(default=None)
    
