import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security


@dataclasses.dataclass
class RecordingDeleteOnePathParams:
    meeting_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    recording_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'recordingId', 'style': 'simple', 'explode': False }})
    
class RecordingDeleteOneActionEnum(str, Enum):
    TRASH = "trash"
    DELETE = "delete"


@dataclasses.dataclass
class RecordingDeleteOneQueryParams:
    action: Optional[RecordingDeleteOneActionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RecordingDeleteOneSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class RecordingDeleteOneRequest:
    path_params: RecordingDeleteOnePathParams = dataclasses.field()
    query_params: RecordingDeleteOneQueryParams = dataclasses.field()
    security: RecordingDeleteOneSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RecordingDeleteOneResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
