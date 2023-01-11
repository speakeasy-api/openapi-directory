import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UserTokenPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    
class UserTokenTypeEnum(str, Enum):
    TOKEN = "token"
    ZAK = "zak"


@dataclasses.dataclass
class UserTokenQueryParams:
    ttl: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ttl', 'style': 'form', 'explode': True }})
    type: Optional[UserTokenTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UserTokenSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class UserToken200ApplicationJSON:
    token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    

@dataclasses.dataclass
class UserTokenRequest:
    path_params: UserTokenPathParams = dataclasses.field()
    query_params: UserTokenQueryParams = dataclasses.field()
    security: UserTokenSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UserTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    user_token_200_application_json_object: Optional[UserToken200ApplicationJSON] = dataclasses.field(default=None)
    
