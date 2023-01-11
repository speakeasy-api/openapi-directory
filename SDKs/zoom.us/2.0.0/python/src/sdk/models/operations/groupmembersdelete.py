import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class GroupMembersDeletePathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    member_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'memberId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GroupMembersDeleteSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GroupMembersDeleteRequest:
    path_params: GroupMembersDeletePathParams = dataclasses.field()
    security: GroupMembersDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GroupMembersDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
