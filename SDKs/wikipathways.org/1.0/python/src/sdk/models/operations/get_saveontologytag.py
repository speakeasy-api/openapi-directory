import dataclasses
from typing import Optional
from enum import Enum

class GetSaveOntologyTagFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclasses.dataclass
class GetSaveOntologyTagQueryParams:
    auth: str = dataclasses.field(metadata={'query_param': { 'field_name': 'auth', 'style': 'form', 'explode': True }})
    pw_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    term: str = dataclasses.field(metadata={'query_param': { 'field_name': 'term', 'style': 'form', 'explode': True }})
    term_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'termId', 'style': 'form', 'explode': True }})
    user: str = dataclasses.field(metadata={'query_param': { 'field_name': 'user', 'style': 'form', 'explode': True }})
    format: Optional[GetSaveOntologyTagFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSaveOntologyTagRequest:
    query_params: GetSaveOntologyTagQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSaveOntologyTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
