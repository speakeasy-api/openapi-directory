import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class GetAudioPathParams:
    word: str = dataclasses.field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    
class GetAudioUseCanonicalEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"


@dataclasses.dataclass
class GetAudioQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    use_canonical: Optional[GetAudioUseCanonicalEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'useCanonical', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAudioRequest:
    path_params: GetAudioPathParams = dataclasses.field()
    query_params: GetAudioQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAudioResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
