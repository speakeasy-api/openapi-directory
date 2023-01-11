import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class ImGroupMembersDeletePathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    member_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'memberId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImGroupMembersDeleteSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ImGroupMembersDeleteRequest:
    path_params: ImGroupMembersDeletePathParams = dataclasses.field()
    security: ImGroupMembersDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ImGroupMembersDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
