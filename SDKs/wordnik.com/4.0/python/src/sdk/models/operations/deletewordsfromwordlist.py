import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteWordsFromWordListPathParams:
    permalink: str = dataclasses.field(metadata={'path_param': { 'field_name': 'permalink', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteWordsFromWordListHeaders:
    auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'auth_token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteWordsFromWordListRequest:
    headers: DeleteWordsFromWordListHeaders = dataclasses.field()
    path_params: DeleteWordsFromWordListPathParams = dataclasses.field()
    request: Optional[list[Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteWordsFromWordListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
