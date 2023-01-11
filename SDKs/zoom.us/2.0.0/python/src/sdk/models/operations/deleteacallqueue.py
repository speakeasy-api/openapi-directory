import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteACallQueuePathParams:
    call_queue_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'callQueueId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteACallQueueSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteACallQueueRequest:
    path_params: DeleteACallQueuePathParams = dataclasses.field()
    security: DeleteACallQueueSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteACallQueueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    delete_a_call_queue_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
