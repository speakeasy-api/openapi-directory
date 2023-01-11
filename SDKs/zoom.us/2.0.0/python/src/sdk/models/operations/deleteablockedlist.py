import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteABlockedListPathParams:
    blocked_list_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'blockedListId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteABlockedListSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteABlockedListRequest:
    path_params: DeleteABlockedListPathParams = dataclasses.field()
    security: DeleteABlockedListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteABlockedListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    delete_a_blocked_list_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
