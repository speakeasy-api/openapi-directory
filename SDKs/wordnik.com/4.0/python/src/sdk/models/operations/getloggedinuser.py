import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetLoggedInUserHeaders:
    auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'auth_token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLoggedInUserRequest:
    headers: GetLoggedInUserHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetLoggedInUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
