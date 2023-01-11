import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class GetHyphenationPathParams:
    word: str = dataclasses.field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    
class GetHyphenationSourceDictionaryEnum(str, Enum):
    AHD = "ahd"
    CENTURY = "century"
    WIKTIONARY = "wiktionary"
    WEBSTER = "webster"
    WORDNET = "wordnet"

class GetHyphenationUseCanonicalEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"


@dataclasses.dataclass
class GetHyphenationQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    source_dictionary: Optional[GetHyphenationSourceDictionaryEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sourceDictionary', 'style': 'form', 'explode': True }})
    use_canonical: Optional[GetHyphenationUseCanonicalEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'useCanonical', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetHyphenationRequest:
    path_params: GetHyphenationPathParams = dataclasses.field()
    query_params: GetHyphenationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetHyphenationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
