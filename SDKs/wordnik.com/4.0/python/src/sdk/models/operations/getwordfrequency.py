import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class GetWordFrequencyPathParams:
    word: str = dataclasses.field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    
class GetWordFrequencyUseCanonicalEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"


@dataclasses.dataclass
class GetWordFrequencyQueryParams:
    end_year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endYear', 'style': 'form', 'explode': True }})
    start_year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startYear', 'style': 'form', 'explode': True }})
    use_canonical: Optional[GetWordFrequencyUseCanonicalEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'useCanonical', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetWordFrequencyRequest:
    path_params: GetWordFrequencyPathParams = dataclasses.field()
    query_params: GetWordFrequencyQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWordFrequencyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
