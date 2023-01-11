import dataclasses
from typing import Optional
from enum import Enum

class ReverseDictionaryExcludeSourceDictionariesEnum(str, Enum):
    AHD = "ahd"
    CENTURY = "century"
    CMU = "cmu"
    MACMILLAN = "macmillan"
    WIKTIONARY = "wiktionary"
    WEBSTER = "webster"
    WORDNET = "wordnet"

class ReverseDictionaryIncludeSourceDictionariesEnum(str, Enum):
    AHD = "ahd"
    CENTURY = "century"
    CMU = "cmu"
    MACMILLAN = "macmillan"
    WIKTIONARY = "wiktionary"
    WEBSTER = "webster"
    WORDNET = "wordnet"

class ReverseDictionaryIncludeTagsEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"

class ReverseDictionarySortByEnum(str, Enum):
    ALPHA = "alpha"
    COUNT = "count"

class ReverseDictionarySortOrderEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclasses.dataclass
class ReverseDictionaryQueryParams:
    query: str = dataclasses.field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    exclude_part_of_speech: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'excludePartOfSpeech', 'style': 'form', 'explode': True }})
    exclude_source_dictionaries: Optional[ReverseDictionaryExcludeSourceDictionariesEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'excludeSourceDictionaries', 'style': 'form', 'explode': True }})
    expand_terms: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expandTerms', 'style': 'form', 'explode': True }})
    find_sense_for_word: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'findSenseForWord', 'style': 'form', 'explode': True }})
    include_part_of_speech: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includePartOfSpeech', 'style': 'form', 'explode': True }})
    include_source_dictionaries: Optional[ReverseDictionaryIncludeSourceDictionariesEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeSourceDictionaries', 'style': 'form', 'explode': True }})
    include_tags: Optional[ReverseDictionaryIncludeTagsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeTags', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    max_corpus_count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxCorpusCount', 'style': 'form', 'explode': True }})
    max_length: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxLength', 'style': 'form', 'explode': True }})
    min_corpus_count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minCorpusCount', 'style': 'form', 'explode': True }})
    min_length: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minLength', 'style': 'form', 'explode': True }})
    skip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    sort_by: Optional[ReverseDictionarySortByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    sort_order: Optional[ReverseDictionarySortOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReverseDictionaryRequest:
    query_params: ReverseDictionaryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReverseDictionaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
