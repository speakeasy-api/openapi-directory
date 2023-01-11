import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class UnassignMemberFromCallQueuePathParams:
    call_queue_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'callQueueId', 'style': 'simple', 'explode': False }})
    member_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'memberId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UnassignMemberFromCallQueueSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UnassignMemberFromCallQueueRequest:
    path_params: UnassignMemberFromCallQueuePathParams = dataclasses.field()
    security: UnassignMemberFromCallQueueSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UnassignMemberFromCallQueueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    unassign_member_from_call_queue_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
