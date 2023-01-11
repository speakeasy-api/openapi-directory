import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class UserSsoTokenDeletePathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UserSsoTokenDeleteSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UserSsoTokenDeleteRequest:
    path_params: UserSsoTokenDeletePathParams = dataclasses.field()
    security: UserSsoTokenDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UserSsoTokenDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
