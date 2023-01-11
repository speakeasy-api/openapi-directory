import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class GetExamplesPathParams:
    word: str = dataclasses.field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    
class GetExamplesIncludeDuplicatesEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"

class GetExamplesUseCanonicalEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"


@dataclasses.dataclass
class GetExamplesQueryParams:
    include_duplicates: Optional[GetExamplesIncludeDuplicatesEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeDuplicates', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    skip: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    use_canonical: Optional[GetExamplesUseCanonicalEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'useCanonical', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetExamplesRequest:
    path_params: GetExamplesPathParams = dataclasses.field()
    query_params: GetExamplesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetExamplesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
