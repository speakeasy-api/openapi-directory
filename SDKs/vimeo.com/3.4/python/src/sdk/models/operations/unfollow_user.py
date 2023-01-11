import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class UnfollowUserPathParams:
    follow_user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'follow_user_id', 'style': 'simple', 'explode': False }})
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UnfollowUserSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UnfollowUserRequest:
    path_params: UnfollowUserPathParams = dataclasses.field()
    security: UnfollowUserSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UnfollowUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
