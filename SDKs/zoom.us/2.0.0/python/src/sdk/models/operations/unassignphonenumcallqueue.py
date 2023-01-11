import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class UnAssignPhoneNumCallQueuePathParams:
    call_queue_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'callQueueId', 'style': 'simple', 'explode': False }})
    phone_number_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'phoneNumberId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UnAssignPhoneNumCallQueueSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UnAssignPhoneNumCallQueueRequest:
    path_params: UnAssignPhoneNumCallQueuePathParams = dataclasses.field()
    security: UnAssignPhoneNumCallQueueSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UnAssignPhoneNumCallQueueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    un_assign_phone_num_call_queue_204_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
