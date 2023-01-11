import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class UnassignAPhoneNumCallQueuePathParams:
    call_queue_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'callQueueId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UnassignAPhoneNumCallQueueSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UnassignAPhoneNumCallQueueRequest:
    path_params: UnassignAPhoneNumCallQueuePathParams = dataclasses.field()
    security: UnassignAPhoneNumCallQueueSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UnassignAPhoneNumCallQueueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    unassign_a_phone_num_call_queue_204_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
