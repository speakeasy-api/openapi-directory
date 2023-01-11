import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class GetEtymologiesPathParams:
    word: str = dataclasses.field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    
class GetEtymologiesUseCanonicalEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"


@dataclasses.dataclass
class GetEtymologiesQueryParams:
    use_canonical: Optional[GetEtymologiesUseCanonicalEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'useCanonical', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEtymologiesRequest:
    path_params: GetEtymologiesPathParams = dataclasses.field()
    query_params: GetEtymologiesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEtymologiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
