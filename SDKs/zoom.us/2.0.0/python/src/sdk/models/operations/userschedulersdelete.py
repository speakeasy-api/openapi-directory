import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class UserSchedulersDeletePathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UserSchedulersDeleteSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UserSchedulersDeleteRequest:
    path_params: UserSchedulersDeletePathParams = dataclasses.field()
    security: UserSchedulersDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UserSchedulersDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
