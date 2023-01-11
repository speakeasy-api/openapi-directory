import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class MeetingDeletePathParams:
    meeting_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MeetingDeleteQueryParams:
    cancel_meeting_reminder: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cancel_meeting_reminder', 'style': 'form', 'explode': True }})
    occurrence_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'occurrence_id', 'style': 'form', 'explode': True }})
    schedule_for_reminder: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'schedule_for_reminder', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class MeetingDeleteSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class MeetingDeleteRequest:
    path_params: MeetingDeletePathParams = dataclasses.field()
    query_params: MeetingDeleteQueryParams = dataclasses.field()
    security: MeetingDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MeetingDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
