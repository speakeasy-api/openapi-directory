import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class MeetingRecordingRegistrantStatusPathParams:
    meeting_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    
class MeetingRecordingRegistrantStatusApplicationJSONActionEnum(str, Enum):
    APPROVE = "approve"
    DENY = "deny"


@dataclass_json
@dataclasses.dataclass
class MeetingRecordingRegistrantStatusApplicationJSON:
    r"""MeetingRecordingRegistrantStatusApplicationJSON
    Registrant Status
    """
    
    action: MeetingRecordingRegistrantStatusApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    registrants: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrants') }})
    
class MeetingRecordingRegistrantStatusMultipartFormDataActionEnum(str, Enum):
    APPROVE = "approve"
    DENY = "deny"


@dataclasses.dataclass
class MeetingRecordingRegistrantStatusMultipartFormData:
    r"""MeetingRecordingRegistrantStatusMultipartFormData
    Registrant Status
    """
    
    action: MeetingRecordingRegistrantStatusMultipartFormDataActionEnum = dataclasses.field(metadata={'multipart_form': { 'field_name': 'action' }})
    registrants: Optional[list[Any]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'registrants', 'json': True }})
    

@dataclasses.dataclass
class MeetingRecordingRegistrantStatusRequests:
    object: Optional[MeetingRecordingRegistrantStatusApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[MeetingRecordingRegistrantStatusMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class MeetingRecordingRegistrantStatusSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class MeetingRecordingRegistrantStatusRequest:
    path_params: MeetingRecordingRegistrantStatusPathParams = dataclasses.field()
    request: MeetingRecordingRegistrantStatusRequests = dataclasses.field()
    security: MeetingRecordingRegistrantStatusSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MeetingRecordingRegistrantStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
