import dataclasses
from typing import Optional


@dataclasses.dataclass
class AuthenticatePostPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AuthenticatePostRequest:
    path_params: AuthenticatePostPathParams = dataclasses.field()
    request: str = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AuthenticatePostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
