import dataclasses
from typing import Optional


@dataclasses.dataclass
class SearchWordsPathParams:
    query: str = dataclasses.field(metadata={'path_param': { 'field_name': 'query', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SearchWordsQueryParams:
    allow_regex: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allowRegex', 'style': 'form', 'explode': True }})
    case_sensitive: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'caseSensitive', 'style': 'form', 'explode': True }})
    exclude_part_of_speech: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'excludePartOfSpeech', 'style': 'form', 'explode': True }})
    include_part_of_speech: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includePartOfSpeech', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    max_corpus_count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxCorpusCount', 'style': 'form', 'explode': True }})
    max_dictionary_count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxDictionaryCount', 'style': 'form', 'explode': True }})
    max_length: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxLength', 'style': 'form', 'explode': True }})
    min_corpus_count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minCorpusCount', 'style': 'form', 'explode': True }})
    min_dictionary_count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minDictionaryCount', 'style': 'form', 'explode': True }})
    min_length: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minLength', 'style': 'form', 'explode': True }})
    skip: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchWordsRequest:
    path_params: SearchWordsPathParams = dataclasses.field()
    query_params: SearchWordsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchWordsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
