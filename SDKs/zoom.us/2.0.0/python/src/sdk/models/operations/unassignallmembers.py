import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class UnassignAllMembersPathParams:
    call_queue_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'callQueueId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UnassignAllMembersSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UnassignAllMembersRequest:
    path_params: UnassignAllMembersPathParams = dataclasses.field()
    security: UnassignAllMembersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UnassignAllMembersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    unassign_all_members_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
