import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetWordListByPermalinkPathParams:
    permalink: str = dataclasses.field(metadata={'path_param': { 'field_name': 'permalink', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWordListByPermalinkHeaders:
    auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'auth_token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWordListByPermalinkRequest:
    headers: GetWordListByPermalinkHeaders = dataclasses.field()
    path_params: GetWordListByPermalinkPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWordListByPermalinkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
