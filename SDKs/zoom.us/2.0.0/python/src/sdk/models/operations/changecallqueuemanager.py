import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class ChangeCallQueueManagerPathParams:
    call_queue_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'callQueueId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ChangeCallQueueManagerApplicationJSON:
    member_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member_id') }})
    

@dataclasses.dataclass
class ChangeCallQueueManagerMultipartFormData:
    member_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'member_id' }})
    

@dataclasses.dataclass
class ChangeCallQueueManagerRequests:
    object: Optional[ChangeCallQueueManagerApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[ChangeCallQueueManagerMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class ChangeCallQueueManagerSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ChangeCallQueueManagerRequest:
    path_params: ChangeCallQueueManagerPathParams = dataclasses.field()
    security: ChangeCallQueueManagerSecurity = dataclasses.field()
    request: Optional[ChangeCallQueueManagerRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ChangeCallQueueManagerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    change_call_queue_manager_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
