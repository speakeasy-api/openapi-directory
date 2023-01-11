import dataclasses
from typing import Optional
from enum import Enum

class GetFindPathwaysByTextFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclasses.dataclass
class GetFindPathwaysByTextQueryParams:
    query: str = dataclasses.field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    format: Optional[GetFindPathwaysByTextFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    species: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'species', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFindPathwaysByTextRequest:
    query_params: GetFindPathwaysByTextQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFindPathwaysByTextResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
