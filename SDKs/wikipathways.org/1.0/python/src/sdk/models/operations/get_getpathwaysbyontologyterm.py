import dataclasses
from typing import Optional
from enum import Enum

class GetGetPathwaysByOntologyTermFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclasses.dataclass
class GetGetPathwaysByOntologyTermQueryParams:
    term: str = dataclasses.field(metadata={'query_param': { 'field_name': 'term', 'style': 'form', 'explode': True }})
    format: Optional[GetGetPathwaysByOntologyTermFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGetPathwaysByOntologyTermRequest:
    query_params: GetGetPathwaysByOntologyTermQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGetPathwaysByOntologyTermResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
