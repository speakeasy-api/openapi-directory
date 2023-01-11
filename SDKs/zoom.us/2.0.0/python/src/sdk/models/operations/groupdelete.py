import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class GroupDeletePathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GroupDeleteSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GroupDeleteRequest:
    path_params: GroupDeletePathParams = dataclasses.field()
    security: GroupDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GroupDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
