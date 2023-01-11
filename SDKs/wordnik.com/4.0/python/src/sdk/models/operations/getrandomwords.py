import dataclasses
from typing import Optional
from enum import Enum

class GetRandomWordsSortByEnum(str, Enum):
    ALPHA = "alpha"
    COUNT = "count"

class GetRandomWordsSortOrderEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclasses.dataclass
class GetRandomWordsQueryParams:
    exclude_part_of_speech: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'excludePartOfSpeech', 'style': 'form', 'explode': True }})
    has_dictionary_def: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'hasDictionaryDef', 'style': 'form', 'explode': True }})
    include_part_of_speech: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includePartOfSpeech', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    max_corpus_count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxCorpusCount', 'style': 'form', 'explode': True }})
    max_dictionary_count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxDictionaryCount', 'style': 'form', 'explode': True }})
    max_length: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxLength', 'style': 'form', 'explode': True }})
    min_corpus_count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minCorpusCount', 'style': 'form', 'explode': True }})
    min_dictionary_count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minDictionaryCount', 'style': 'form', 'explode': True }})
    min_length: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minLength', 'style': 'form', 'explode': True }})
    sort_by: Optional[GetRandomWordsSortByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    sort_order: Optional[GetRandomWordsSortOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRandomWordsRequest:
    query_params: GetRandomWordsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRandomWordsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
