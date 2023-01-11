import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security


@dataclasses.dataclass
class RecordingDeletePathParams:
    meeting_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    
class RecordingDeleteActionEnum(str, Enum):
    TRASH = "trash"
    DELETE = "delete"


@dataclasses.dataclass
class RecordingDeleteQueryParams:
    action: Optional[RecordingDeleteActionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RecordingDeleteSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class RecordingDeleteRequest:
    path_params: RecordingDeletePathParams = dataclasses.field()
    query_params: RecordingDeleteQueryParams = dataclasses.field()
    security: RecordingDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RecordingDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
