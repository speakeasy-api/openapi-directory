import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class GetRelatedWordsPathParams:
    word: str = dataclasses.field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    
class GetRelatedWordsRelationshipTypesEnum(str, Enum):
    SYNONYM = "synonym"
    ANTONYM = "antonym"
    VARIANT = "variant"
    EQUIVALENT = "equivalent"
    CROSS_REFERENCE = "cross-reference"
    RELATED_WORD = "related-word"
    RHYME = "rhyme"
    FORM = "form"
    ETYMOLOGICALLY_RELATED_TERM = "etymologically-related-term"
    HYPERNYM = "hypernym"
    HYPONYM = "hyponym"
    INFLECTED_FORM = "inflected-form"
    PRIMARY = "primary"
    SAME_CONTEXT = "same-context"
    VERB_FORM = "verb-form"
    VERB_STEM = "verb-stem"
    HAS_TOPIC = "has_topic"

class GetRelatedWordsUseCanonicalEnum(str, Enum):
    FALSE = "false"
    TRUE = "true"


@dataclasses.dataclass
class GetRelatedWordsQueryParams:
    limit_per_relationship_type: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limitPerRelationshipType', 'style': 'form', 'explode': True }})
    relationship_types: Optional[GetRelatedWordsRelationshipTypesEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'relationshipTypes', 'style': 'form', 'explode': True }})
    use_canonical: Optional[GetRelatedWordsUseCanonicalEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'useCanonical', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRelatedWordsRequest:
    path_params: GetRelatedWordsPathParams = dataclasses.field()
    query_params: GetRelatedWordsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRelatedWordsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
