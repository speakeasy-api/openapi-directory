import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class GetTextPronunciationsPathParams:
    word: str = dataclasses.field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    
class GetTextPronunciationsSourceDictionaryEnum(str, Enum):
    AHD = "ahd"
    CENTURY = "century"
    CMU = "cmu"
    MACMILLAN = "macmillan"
    WIKTIONARY = "wiktionary"
    WEBSTER = "webster"
    WORDNET = "wordnet"

class GetTextPronunciationsTypeFormatEnum(str, Enum):
    AHD = "ahd"
    ARPABET = "arpabet"
    GCIDE_DIACRITICAL = "gcide-diacritical"
    IPA = "IPA"

class GetTextPronunciationsUseCanonicalEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"


@dataclasses.dataclass
class GetTextPronunciationsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    source_dictionary: Optional[GetTextPronunciationsSourceDictionaryEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sourceDictionary', 'style': 'form', 'explode': True }})
    type_format: Optional[GetTextPronunciationsTypeFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'typeFormat', 'style': 'form', 'explode': True }})
    use_canonical: Optional[GetTextPronunciationsUseCanonicalEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'useCanonical', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTextPronunciationsRequest:
    path_params: GetTextPronunciationsPathParams = dataclasses.field()
    query_params: GetTextPronunciationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTextPronunciationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
