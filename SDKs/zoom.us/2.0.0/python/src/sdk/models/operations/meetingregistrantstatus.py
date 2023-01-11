import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class MeetingRegistrantStatusPathParams:
    meeting_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MeetingRegistrantStatusQueryParams:
    occurrence_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'occurrence_id', 'style': 'form', 'explode': True }})
    
class MeetingRegistrantStatusApplicationJSONActionEnum(str, Enum):
    APPROVE = "approve"
    CANCEL = "cancel"
    DENY = "deny"


@dataclass_json
@dataclasses.dataclass
class MeetingRegistrantStatusApplicationJSONRegistrants:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingRegistrantStatusApplicationJSON:
    action: MeetingRegistrantStatusApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    registrants: Optional[list[MeetingRegistrantStatusApplicationJSONRegistrants]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrants') }})
    
class MeetingRegistrantStatusMultipartFormDataActionEnum(str, Enum):
    APPROVE = "approve"
    CANCEL = "cancel"
    DENY = "deny"


@dataclass_json
@dataclasses.dataclass
class MeetingRegistrantStatusMultipartFormDataRegistrants:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclasses.dataclass
class MeetingRegistrantStatusMultipartFormData1:
    action: MeetingRegistrantStatusMultipartFormDataActionEnum = dataclasses.field(metadata={'multipart_form': { 'field_name': 'action' }})
    registrants: Optional[list[MeetingRegistrantStatusMultipartFormDataRegistrants]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'registrants', 'json': True }})
    

@dataclasses.dataclass
class MeetingRegistrantStatusRequests:
    object: Optional[MeetingRegistrantStatusApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[MeetingRegistrantStatusMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class MeetingRegistrantStatusSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class MeetingRegistrantStatusRequest:
    path_params: MeetingRegistrantStatusPathParams = dataclasses.field()
    query_params: MeetingRegistrantStatusQueryParams = dataclasses.field()
    request: MeetingRegistrantStatusRequests = dataclasses.field()
    security: MeetingRegistrantStatusSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MeetingRegistrantStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
