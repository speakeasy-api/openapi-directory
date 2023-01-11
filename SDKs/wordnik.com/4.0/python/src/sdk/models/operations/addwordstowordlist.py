import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AddWordsToWordListPathParams:
    permalink: str = dataclasses.field(metadata={'path_param': { 'field_name': 'permalink', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddWordsToWordListHeaders:
    auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'auth_token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddWordsToWordListRequest:
    headers: AddWordsToWordListHeaders = dataclasses.field()
    path_params: AddWordsToWordListPathParams = dataclasses.field()
    request: Optional[list[Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddWordsToWordListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
