import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetWordListsForLoggedInUserQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    skip: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetWordListsForLoggedInUserHeaders:
    auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'auth_token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWordListsForLoggedInUserRequest:
    headers: GetWordListsForLoggedInUserHeaders = dataclasses.field()
    query_params: GetWordListsForLoggedInUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWordListsForLoggedInUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
