import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetRandomWordQueryParams:
    exclude_part_of_speech: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'excludePartOfSpeech', 'style': 'form', 'explode': True }})
    has_dictionary_def: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'hasDictionaryDef', 'style': 'form', 'explode': True }})
    include_part_of_speech: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includePartOfSpeech', 'style': 'form', 'explode': True }})
    max_corpus_count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxCorpusCount', 'style': 'form', 'explode': True }})
    max_dictionary_count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxDictionaryCount', 'style': 'form', 'explode': True }})
    max_length: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxLength', 'style': 'form', 'explode': True }})
    min_corpus_count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minCorpusCount', 'style': 'form', 'explode': True }})
    min_dictionary_count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minDictionaryCount', 'style': 'form', 'explode': True }})
    min_length: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minLength', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRandomWordRequest:
    query_params: GetRandomWordQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRandomWordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
