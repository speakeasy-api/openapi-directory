import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class MeetingPollDeletePathParams:
    meeting_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    poll_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'pollId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MeetingPollDeleteSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class MeetingPollDeleteRequest:
    path_params: MeetingPollDeletePathParams = dataclasses.field()
    security: MeetingPollDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MeetingPollDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
