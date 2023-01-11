import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class RoleMemberDeletePathParams:
    member_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'memberId', 'style': 'simple', 'explode': False }})
    role_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'roleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RoleMemberDeleteSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class RoleMemberDeleteRequest:
    path_params: RoleMemberDeletePathParams = dataclasses.field()
    security: RoleMemberDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RoleMemberDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
