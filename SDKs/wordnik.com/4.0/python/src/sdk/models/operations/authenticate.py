import dataclasses
from typing import Optional


@dataclasses.dataclass
class AuthenticatePathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AuthenticateQueryParams:
    password: str = dataclasses.field(metadata={'query_param': { 'field_name': 'password', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AuthenticateRequest:
    path_params: AuthenticatePathParams = dataclasses.field()
    query_params: AuthenticateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AuthenticateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
