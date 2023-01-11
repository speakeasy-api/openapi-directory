import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class GetDefinitionsPathParams:
    word: str = dataclasses.field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    
class GetDefinitionsIncludeTagsEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"

class GetDefinitionsPartOfSpeechEnum(str, Enum):
    NOUN = "noun"
    ADJECTIVE = "adjective"
    VERB = "verb"
    ADVERB = "adverb"
    INTERJECTION = "interjection"
    PRONOUN = "pronoun"
    PREPOSITION = "preposition"
    ABBREVIATION = "abbreviation"
    AFFIX = "affix"
    ARTICLE = "article"
    AUXILIARY_VERB = "auxiliary-verb"
    CONJUNCTION = "conjunction"
    DEFINITE_ARTICLE = "definite-article"
    FAMILY_NAME = "family-name"
    GIVEN_NAME = "given-name"
    IDIOM = "idiom"
    IMPERATIVE = "imperative"
    NOUN_PLURAL = "noun-plural"
    NOUN_POSESSIVE = "noun-posessive"
    PAST_PARTICIPLE = "past-participle"
    PHRASAL_PREFIX = "phrasal-prefix"
    PROPER_NOUN = "proper-noun"
    PROPER_NOUN_PLURAL = "proper-noun-plural"
    PROPER_NOUN_POSESSIVE = "proper-noun-posessive"
    SUFFIX = "suffix"
    VERB_INTRANSITIVE = "verb-intransitive"
    VERB_TRANSITIVE = "verb-transitive"

class GetDefinitionsUseCanonicalEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"


@dataclasses.dataclass
class GetDefinitionsQueryParams:
    include_related: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeRelated', 'style': 'form', 'explode': True }})
    include_tags: Optional[GetDefinitionsIncludeTagsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeTags', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    part_of_speech: Optional[GetDefinitionsPartOfSpeechEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'partOfSpeech', 'style': 'form', 'explode': True }})
    source_dictionaries: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sourceDictionaries', 'style': 'form', 'explode': False }})
    use_canonical: Optional[GetDefinitionsUseCanonicalEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'useCanonical', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDefinitionsRequest:
    path_params: GetDefinitionsPathParams = dataclasses.field()
    query_params: GetDefinitionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDefinitionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
