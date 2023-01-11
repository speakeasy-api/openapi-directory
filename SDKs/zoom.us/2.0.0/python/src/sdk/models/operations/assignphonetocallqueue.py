import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class AssignPhoneToCallQueuePathParams:
    call_queue_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'callQueueId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AssignPhoneToCallQueueApplicationJSONPhoneNumbers:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    

@dataclass_json
@dataclasses.dataclass
class AssignPhoneToCallQueueApplicationJSON:
    phone_numbers: Optional[list[AssignPhoneToCallQueueApplicationJSONPhoneNumbers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    

@dataclass_json
@dataclasses.dataclass
class AssignPhoneToCallQueueMultipartFormDataPhoneNumbers:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    

@dataclasses.dataclass
class AssignPhoneToCallQueueMultipartFormData1:
    phone_numbers: Optional[list[AssignPhoneToCallQueueMultipartFormDataPhoneNumbers]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'phone_numbers', 'json': True }})
    

@dataclasses.dataclass
class AssignPhoneToCallQueueRequests:
    object: Optional[AssignPhoneToCallQueueApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AssignPhoneToCallQueueMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AssignPhoneToCallQueueSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AssignPhoneToCallQueueRequest:
    path_params: AssignPhoneToCallQueuePathParams = dataclasses.field()
    security: AssignPhoneToCallQueueSecurity = dataclasses.field()
    request: Optional[AssignPhoneToCallQueueRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AssignPhoneToCallQueueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    assign_phone_to_call_queue_204_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
