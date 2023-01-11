import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class GetPhrasesPathParams:
    word: str = dataclasses.field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    
class GetPhrasesUseCanonicalEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"


@dataclasses.dataclass
class GetPhrasesQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    use_canonical: Optional[GetPhrasesUseCanonicalEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'useCanonical', 'style': 'form', 'explode': True }})
    wlmi: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'wlmi', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPhrasesRequest:
    path_params: GetPhrasesPathParams = dataclasses.field()
    query_params: GetPhrasesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPhrasesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
