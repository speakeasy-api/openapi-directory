import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class MeetingStatusPathParams:
    meeting_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    
class MeetingStatusApplicationJSONActionEnum(str, Enum):
    END = "end"
    RECOVER = "recover"


@dataclass_json
@dataclasses.dataclass
class MeetingStatusApplicationJSON:
    action: Optional[MeetingStatusApplicationJSONActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    
class MeetingStatusMultipartFormDataActionEnum(str, Enum):
    END = "end"
    RECOVER = "recover"


@dataclasses.dataclass
class MeetingStatusMultipartFormData:
    action: Optional[MeetingStatusMultipartFormDataActionEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'action' }})
    

@dataclasses.dataclass
class MeetingStatusRequests:
    object: Optional[MeetingStatusApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[MeetingStatusMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class MeetingStatusSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class MeetingStatusRequest:
    path_params: MeetingStatusPathParams = dataclasses.field()
    request: MeetingStatusRequests = dataclasses.field()
    security: MeetingStatusSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MeetingStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
