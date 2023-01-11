import dataclasses
from typing import Optional


@dataclasses.dataclass
class MeetingregistrantdeletePathParams:
    meeting_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    registrant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registrantId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MeetingregistrantdeleteQueryParams:
    occurrence_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'occurrence_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class MeetingregistrantdeleteRequest:
    path_params: MeetingregistrantdeletePathParams = dataclasses.field()
    query_params: MeetingregistrantdeleteQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class MeetingregistrantdeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
