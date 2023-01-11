import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class GetTopExamplePathParams:
    word: str = dataclasses.field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    
class GetTopExampleUseCanonicalEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"


@dataclasses.dataclass
class GetTopExampleQueryParams:
    use_canonical: Optional[GetTopExampleUseCanonicalEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'useCanonical', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTopExampleRequest:
    path_params: GetTopExamplePathParams = dataclasses.field()
    query_params: GetTopExampleQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTopExampleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
